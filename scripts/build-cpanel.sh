#!/usr/bin/env bash
#
# Build the static bundle for cPanel shared hosting (www.maryhelphospital.org).
#
# Produces:
#   dist-cpanel/            the exact tree to upload to the document root
#   dist-cpanel.zip         the same tree, for cPanel's File Manager uploader
#
# The Vercel deployment is untouched: everything cPanel-specific is switched on
# by STATIC_EXPORT=1 in next.config.ts.

set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$(pwd)"

SITE_URL="${NEXT_PUBLIC_SITE_URL:-https://www.maryhelphospital.org}"
CONTACT_ENDPOINT="${NEXT_PUBLIC_CONTACT_ENDPOINT:-/contact-handler.php}"

API_DIR="$ROOT/src/app/api"
API_STASH="$ROOT/.api-stash"

# `output: export` refuses to build a POST route handler, so the API route is
# moved out for the duration of the build. The trap restores it however the
# script exits, so an interrupted build never leaves the tree broken.
restore_api() {
  if [ -d "$API_STASH" ]; then
    rm -rf "$API_DIR"
    mv "$API_STASH" "$API_DIR"
    echo "==> restored src/app/api"
  fi
}
trap restore_api EXIT INT TERM

echo "==> site URL:        $SITE_URL"
echo "==> contact endpoint: $CONTACT_ENDPOINT"

if [ -d "$API_STASH" ]; then
  echo "error: $API_STASH already exists — a previous build did not clean up." >&2
  echo "Inspect it and move it back to src/app/api before retrying." >&2
  exit 1
fi

rm -rf "$ROOT/out" "$ROOT/dist-cpanel" "$ROOT/dist-cpanel.zip"

if [ -d "$API_DIR" ]; then
  mv "$API_DIR" "$API_STASH"
  echo "==> set aside src/app/api (not supported by static export)"
fi

echo "==> building static export"
STATIC_EXPORT=1 \
NEXT_PUBLIC_SITE_URL="$SITE_URL" \
NEXT_PUBLIC_CONTACT_ENDPOINT="$CONTACT_ENDPOINT" \
  npx next build

[ -d "$ROOT/out" ] || { echo "error: next build produced no out/ directory" >&2; exit 1; }

echo "==> assembling dist-cpanel/"
cp -r "$ROOT/out" "$ROOT/dist-cpanel"
cp "$ROOT/deploy/cpanel/.htaccess"            "$ROOT/dist-cpanel/.htaccess"
cp "$ROOT/deploy/cpanel/contact-handler.php"  "$ROOT/dist-cpanel/contact-handler.php"
cp "$ROOT/deploy/cpanel/config.sample.php"    "$ROOT/dist-cpanel/config.sample.php"
cp "$ROOT/deploy/cpanel/deploy-check.php"     "$ROOT/dist-cpanel/deploy-check.php"

# Sanity checks: fail loudly here rather than silently shipping a broken site.
test -f "$ROOT/dist-cpanel/index.html"   || { echo "error: index.html missing" >&2; exit 1; }
test -f "$ROOT/dist-cpanel/404.html"     || { echo "error: 404.html missing" >&2; exit 1; }
test -d "$ROOT/dist-cpanel/_next/static" || { echo "error: _next/static missing" >&2; exit 1; }

if grep -rq "/api/contact" "$ROOT/dist-cpanel"/_next/static/chunks 2>/dev/null; then
  echo "error: the bundle still posts to /api/contact, which does not exist on cPanel." >&2
  echo "NEXT_PUBLIC_CONTACT_ENDPOINT was not applied." >&2
  exit 1
fi

if [ -f "$ROOT/dist-cpanel/config.php" ]; then
  echo "error: config.php must never be built into the bundle." >&2
  exit 1
fi

echo "==> zipping"
( cd "$ROOT/dist-cpanel" && zip -rq "$ROOT/dist-cpanel.zip" . -x '.DS_Store' )

echo
echo "==> done"
echo "    tree: dist-cpanel/        ($(du -sh "$ROOT/dist-cpanel" | cut -f1), $(find "$ROOT/dist-cpanel" -type f | wc -l | tr -d ' ') files)"
echo "    zip:  dist-cpanel.zip     ($(du -h "$ROOT/dist-cpanel.zip" | cut -f1))"
echo
echo "Upload the CONTENTS of dist-cpanel/ to the document root, then create"
echo "config.php there from config.sample.php. See docs/DEPLOYMENT-CPANEL.md."
