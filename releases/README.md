# cPanel bundle

`maryhelp-website-cpanel.zip` is the built site for
**www.maryhelphospital.org** on cPanel shared hosting.

Download it directly:
<https://github.com/JGitaka123/Mary-Help-Hospital-Website/raw/main/releases/maryhelp-website-cpanel.zip>

## Installing

1. cPanel → *SSL/TLS Status* → *Run AutoSSL*. It must cover **both**
   `maryhelphospital.org` and `www.maryhelphospital.org`. The site redirects
   to `www`, so a certificate missing one name takes the site down.
2. cPanel → *File Manager* → open the document root for the domain. Upload
   this zip and *Extract* it there. The **contents** go in the root —
   `index.html` must sit directly in it, not inside a folder.
3. Add `config.php` to the document root (supplied separately — it holds
   live credentials and is deliberately not in this public repository) and
   set its permissions to `600`. Delete `config.sample.php`.
4. Open `deploy-check.php?token=<check_token from config.php>` in a browser.
   It reports PHP, the database, files, HTTPS and the canonical host.
5. When that page is green, **delete `deploy-check.php`**.

No database setup is needed — `contact-handler.php` creates its table on the
first enquiry. No PHP version change is needed — it targets PHP 7.4.

Full detail: [`docs/DEPLOYMENT-CPANEL.md`](../docs/DEPLOYMENT-CPANEL.md).

## Rebuilding

```bash
./scripts/build-cpanel.sh
cp dist-cpanel.zip releases/maryhelp-website-cpanel.zip
```

The zip deliberately contains **no** `config.php`: this repository is public,
and that file carries the database password plus the `ip_salt` that keeps
stored IP hashes from being reversible.
