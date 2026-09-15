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
```

## Prerequisites on the host

- PHP **8.1 or newer** (cPanel → *MultiPHP Manager*). The handler uses typed
  properties and the `never` return type.
- The PHP **pdo_mysql** extension (cPanel → *Select PHP Extensions*).
- An SSL certificate for both `maryhelphospital.org` and
  `www.maryhelphospital.org` (cPanel → *SSL/TLS Status* → *Run AutoSSL*).
  The `.htaccess` redirects everything to HTTPS, so without a certificate
  covering both names the site will fail to load.

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

## Step 2 — Create the database table

cPanel → *phpMyAdmin* → select the site database → *SQL* tab → paste the
contents of `deploy/cpanel/schema.sql` → *Go*.

Confirm the database user has `SELECT` and `INSERT` on that database
(cPanel → *MySQL Databases* → *Add User To Database*).

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

In the document root, copy `config.sample.php` to `config.php` and fill in the
real database name, user and password, and a long random `ip_salt`.

```bash
php -r "echo bin2hex(random_bytes(32)), PHP_EOL;"   # generates an ip_salt
```

Then `chmod 600 config.php` and delete `config.sample.php` from the server.

`config.php` holds live credentials. It is in `.gitignore` and denied by
`.htaccess` — never commit it, and never paste its contents into a chat,
an issue or an email.

If `config.php` is missing, the form does not break: it tells the visitor to
call or email the hospital instead, which is the same fallback Vercel uses when
`RESEND_API_KEY` is unset.

## Step 5 — Verify

```bash
curl -sI https://www.maryhelphospital.org/            # 200, security headers
curl -sI http://maryhelphospital.org/                 # 301 to https://www.…
curl -sI https://www.maryhelphospital.org/about       # 200 (extensionless)
curl -sI https://www.maryhelphospital.org/no-such-page  # 404
curl -s  https://www.maryhelphospital.org/robots.txt
```

Then in a browser:

- Home, Services, a single service page, News, Contact, Emergency all render
  with photographs.
- Submit the contact form. Expect the "Thank you" panel, a row in
  `contact_enquiries`, and an email at the `contact_to` address.
- Check the header nav and the mobile menu.

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
