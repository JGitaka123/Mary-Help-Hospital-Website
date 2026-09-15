# Deploying to www.maryhelphospital.org (cPanel shared hosting)

The site is a Next.js 16 app. cPanel shared hosting cannot run the Next.js
server, so the cPanel target is a **static export**: plain HTML/CSS/JS that
Apache serves directly, plus a small PHP endpoint for the contact form.

Vercel is unaffected. Everything cPanel-specific is switched on by
`STATIC_EXPORT=1`, so `main` → Vercel keeps server-rendered headers, optimised
images and the `/api/contact` route handler exactly as before.

## Why a static export and not Node.js

Every route in this site is already prerendered — there is no per-request
rendering anywhere (no `cookies()`, no `searchParams`, no ISR). The only
server-side code is the `/api/contact` route.

cPanel's "Setup Node.js App" (Passenger) is the alternative, but on shared
hosting it is markedly more fragile: it depends on the host offering Node 20+,
it holds a long-running process against the account's memory limit, and it
restarts on every file change. A static export has none of those failure modes
and is faster to serve. The one thing it gives up is the contact API route,
which `contact-handler.php` replaces.

| | Vercel (`main`) | cPanel (static export) |
|---|---|---|
| Pages | Prerendered | Prerendered (identical HTML) |
| Security headers | `next.config.ts` `headers()` | `.htaccess` |
| Images | Optimised on demand (AVIF/WebP) | Served as-is from `public/images` |
| Contact form | `/api/contact` (Resend) | `/contact-handler.php` (MySQL + `mail()`) |

## What gets deployed

`scripts/build-cpanel.sh` produces `dist-cpanel/` (and `dist-cpanel.zip`):

```
index.html, about.html, services/…    prerendered pages
_next/static/…                        fingerprinted JS and CSS
images/…                              hospital photography
sitemap.xml, robots.txt, 404.html     metadata
.htaccess                             rewrites, security headers, caching
contact-handler.php                   contact form endpoint
config.sample.php                     template — real values created on server
deploy-check.php                      one-page install check; delete after use
```

## Prerequisites on the host

- PHP **7.4 or newer** (cPanel → *MultiPHP Manager*). Stock cPanel accounts
  already meet this; the handler deliberately avoids PHP 8 syntax so no
  version change is needed.
- The **pdo_mysql** extension (cPanel → *Select PHP Extensions*). Usually on by
  default. Without it the contact form still emails, it just does not store
  enquiries.
- An SSL certificate covering **both** `maryhelphospital.org` and
  `www.maryhelphospital.org` (cPanel → *SSL/TLS Status* → *Run AutoSSL*).
  The `.htaccess` redirects everything to `https://www.`, so a certificate
  covering only one name will take the site down rather than degrade it.
  This is the one prerequisite that cannot be worked around in code.

The database table is **not** created by hand — `contact-handler.php` creates
`contact_enquiries` on the first enquiry. `deploy/cpanel/schema.sql` is kept
only as a reference copy of the same DDL.

## Two ways to deploy

**A. GitHub Actions (recommended).** `.github/workflows/deploy-cpanel.yml`
builds and uploads over FTPS. Run it from the *Actions* tab → *Deploy to
cPanel* → *Run workflow*. It is manual-only on purpose: a hospital site should
not redeploy as a side effect of a push.

It needs three repository secrets (*Settings* → *Secrets and variables* →
*Actions*):

| Secret | Value |
|---|---|
| `CPANEL_FTP_HOST` | the FTP host, e.g. `ftp.maryhelphospital.org` |
| `CPANEL_FTP_USER` | the cPanel account username |
| `CPANEL_FTP_PASSWORD` | that account's password |

Run it once with **dry run** ticked first: it lists exactly what would change
without writing anything. The workflow refuses to start if a secret is missing,
never uploads `config.php` (even with *delete stale* on), leaves `cgi-bin/` and
`.well-known/` alone, and finishes by checking that four live URLs return 200.

If FTPS fails on a certificate mismatch — common on shared hosting where the
cert covers the server's own hostname rather than yours — re-run with
*insecure TLS* ticked, or set `CPANEL_FTP_HOST` to the hostname the certificate
actually covers.

**B. By hand**, via cPanel File Manager. Steps 1–5 below.

## Step 1 — Build

```bash
npm ci
./scripts/build-cpanel.sh
```

The script refuses to produce a bundle that still points at `/api/contact`, or
that is missing `index.html`, `404.html` or `_next/static`, so a broken export
fails here rather than on the live site.

## Step 2 — Database

Nothing to do. `contact-handler.php` runs `CREATE TABLE IF NOT EXISTS` on the
first enquiry, so the table appears by itself.

Only confirm the database user has `SELECT`, `INSERT` and `CREATE` on the
database (cPanel → *MySQL Databases* → *Add User To Database*). "All
privileges" is fine.

## Step 3 — Upload

cPanel → *File Manager* → open the document root for the domain
(`public_html`, or `public_html/maryhelphospital.org` if it is an addon domain
— check cPanel → *Domains* for the exact path).

1. If replacing an existing site, take a backup first:
   *File Manager* → select all → *Compress* → download the archive.
2. Upload `dist-cpanel.zip`, then *Extract* it into the document root.
   Upload the **contents** of the folder, not the folder itself: `index.html`
   must sit directly in the document root.
3. Delete `dist-cpanel.zip` from the server once extracted.

Confirm that `.htaccess` came across — File Manager hides dotfiles until you
enable *Settings* → *Show Hidden Files*.

## Step 4 — Configure the contact form

A `config.php` can be shipped inside the bundle with everything pre-filled
except the database password, leaving a single line to edit on the server:

```php
'db_pass' => 'PASTE_DATABASE_PASSWORD_HERE',
```

Otherwise copy `config.sample.php` to `config.php` and fill it in, generating
the `ip_salt` and `check_token` with:

```bash
php -r "echo bin2hex(random_bytes(32)), PHP_EOL;"
```

Either way, `chmod 600 config.php` and delete `config.sample.php` from the
server afterwards.

`config.php` holds live credentials. It is git-ignored and denied by
`.htaccess` — never commit it, and prefer not to send it over chat. If it has
been through a chat app, rotate the database password afterwards.

If `config.php` is missing the form does not break: it tells the visitor to
call or email the hospital, the same fallback Vercel uses without
`RESEND_API_KEY`.

## Step 5 — Verify

Open `deploy-check.php` in a browser with the token from `config.php`:

```
https://www.maryhelphospital.org/deploy-check.php?token=<check_token>
```

It reports PHP version, `pdo_mysql`, every required file, the database
connection, the enquiries table, HTTPS and the canonical host — green or red,
in one page. Without the correct token it returns 404, so it reveals nothing
while it exists.

**Delete `deploy-check.php` once the page is all green.**

Then submit the contact form once and confirm the "Thank you" panel appears
and an email arrives at `contact_to`.

## Ongoing deploys

Re-run `./scripts/build-cpanel.sh` and re-upload. `config.php` lives only on
the server, so it survives as long as you do not delete it. Because
`_next/static` filenames are content-hashed, old and new assets can coexist
during an upload without visitors seeing a broken page.

## Email deliverability

`contact-handler.php` sends through PHP `mail()`. For messages to survive spam
filtering, `contact_from` must be an address **on this domain** and the domain
needs an SPF record that authorises the host's mail server (cPanel → *Email
Deliverability* → *Repair*).

If deliverability proves unreliable, the enquiry is still recorded in
`contact_enquiries`, so nothing is lost. A more robust option is to point
`contact_from` at an authenticated SMTP relay.

## Privacy

`contact_enquiries` can contain health information a patient chose to share.
Keep the database user limited to this one database, keep `config.php` at
`chmod 600`, and purge handled enquiries periodically — see the retention
statement at the end of `deploy/cpanel/schema.sql`.

Sender IP addresses are stored only as a salted SHA-256 hash, used for rate
limiting; the raw address is never written to disk.
