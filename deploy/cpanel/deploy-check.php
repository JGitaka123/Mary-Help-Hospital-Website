<?php
/**
 * One-page deployment check for the cPanel install.
 *
 * Open it once after uploading to confirm the server is set up correctly,
 * then DELETE IT. It is gated on `check_token` in config.php so it is not
 * readable by the public while it exists.
 *
 * PHP 7.4 compatible, same as contact-handler.php.
 */

declare(strict_types=1);

header('Content-Type: text/html; charset=utf-8');
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');

$configPath = __DIR__ . '/config.php';
$config = is_file($configPath) ? require $configPath : null;

// Without a token nothing is revealed, so a stray copy cannot leak server detail.
$expected = is_array($config) ? ($config['check_token'] ?? '') : '';
$given = $_GET['token'] ?? '';
if ($expected === '' || !hash_equals((string) $expected, (string) $given)) {
    http_response_code(404);
    echo '<!doctype html><title>Not found</title><h1>404</h1>';
    exit;
}

$checks = [];
$add = static function (string $name, bool $ok, string $detail, bool $fatal = true) use (&$checks): void {
    $checks[] = ['name' => $name, 'ok' => $ok, 'detail' => $detail, 'fatal' => $fatal];
};

// --- Server -------------------------------------------------------------
$add(
    'PHP version',
    version_compare(PHP_VERSION, '7.4.0', '>='),
    PHP_VERSION . ' (7.4 or newer required)'
);
$add(
    'pdo_mysql extension',
    extension_loaded('pdo_mysql'),
    extension_loaded('pdo_mysql') ? 'enabled' : 'NOT enabled — enable it in cPanel > Select PHP Extensions'
);
$add(
    'mail() available',
    function_exists('mail'),
    function_exists('mail') ? 'available' : 'disabled — enquiries will still be saved to the database',
    false
);

// --- Site files ---------------------------------------------------------
foreach (['index.html', '404.html', '.htaccess', 'contact-handler.php', 'sitemap.xml', 'robots.txt'] as $f) {
    $add("File: $f", is_file(__DIR__ . '/' . $f), is_file(__DIR__ . '/' . $f) ? 'present' : 'MISSING from the document root');
}
$add(
    'Static assets (_next)',
    is_dir(__DIR__ . '/_next/static'),
    is_dir(__DIR__ . '/_next/static') ? 'present' : 'MISSING — the site will load unstyled'
);
$add(
    'config.sample.php removed',
    !is_file(__DIR__ . '/config.sample.php'),
    is_file(__DIR__ . '/config.sample.php') ? 'still present — delete it' : 'removed',
    false
);

// --- Database -----------------------------------------------------------
$dbOk = false;
$dbDetail = 'pdo_mysql not enabled, so not tested';
if (extension_loaded('pdo_mysql')) {
    try {
        $pdo = new PDO(
            sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
            $config['db_user'],
            $config['db_pass'],
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
        $dbOk = true;
        $dbDetail = 'connected to ' . $config['db_name'];

        $exists = (int) $pdo->query(
            "SELECT COUNT(*) FROM information_schema.tables
             WHERE table_schema = DATABASE() AND table_name = 'contact_enquiries'"
        )->fetchColumn();
        if ($exists) {
            $n = (int) $pdo->query('SELECT COUNT(*) FROM contact_enquiries')->fetchColumn();
            $add('Enquiries table', true, "exists, $n row(s)");
        } else {
            // Not an error: the handler creates it on the first real enquiry.
            $add('Enquiries table', true, 'not created yet — it appears on the first enquiry', false);
        }
    } catch (Exception $e) {
        // Never print the driver message: it can echo the credentials back.
        $dbDetail = 'connection FAILED — check db_user / db_pass / db_name in config.php';
    }
    $add('Database connection', $dbOk, $dbDetail);
}

// --- HTTPS and canonical host ------------------------------------------
$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
$host = $_SERVER['HTTP_HOST'] ?? '';
$add('HTTPS', $https, $https ? 'yes' : 'NO — run AutoSSL in cPanel > SSL/TLS Status');
$add(
    'Canonical host',
    $host === 'www.maryhelphospital.org',
    $host === 'www.maryhelphospital.org'
        ? $host
        : "reached as '$host' — the .htaccess redirect should have sent you to www.maryhelphospital.org",
    false
);

$fatalFails = 0;
foreach ($checks as $c) {
    if (!$c['ok'] && $c['fatal']) {
        $fatalFails++;
    }
}
$e = static function (string $s): string {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
};
?>
<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Deployment check</title>
<style>
  body { font-family: system-ui, -apple-system, Arial, sans-serif; max-width: 820px; margin: 2rem auto; padding: 0 1rem; color: #16202a; }
  h1 { font-size: 1.4rem; }
  .banner { padding: 1rem; border-radius: 6px; font-weight: 600; margin: 1rem 0; }
  .good { background: #e7f6ec; color: #14532d; }
  .bad  { background: #fdecec; color: #7f1d1d; }
  table { border-collapse: collapse; width: 100%; }
  td { padding: .5rem .6rem; border-bottom: 1px solid #e5e9ee; vertical-align: top; }
  .s { width: 2rem; font-weight: 700; }
  .ok { color: #16a34a; } .fail { color: #dc2626; } .warn { color: #d97706; }
  .n { white-space: nowrap; font-weight: 600; }
  .d { color: #5b6b7a; }
  footer { margin-top: 2rem; padding: 1rem; background: #fff8e1; border-radius: 6px; }
</style>
<h1>Mary Help Hospital — deployment check</h1>

<?php if ($fatalFails === 0): ?>
  <div class="banner good">Everything required is in place. The site is ready.</div>
<?php else: ?>
  <div class="banner bad"><?= $fatalFails ?> item(s) need attention — see the red rows below.</div>
<?php endif; ?>

<table>
<?php foreach ($checks as $c): ?>
  <tr>
    <td class="s <?= $c['ok'] ? 'ok' : ($c['fatal'] ? 'fail' : 'warn') ?>"><?= $c['ok'] ? '&check;' : ($c['fatal'] ? '&times;' : '!') ?></td>
    <td class="n"><?= $e($c['name']) ?></td>
    <td class="d"><?= $e($c['detail']) ?></td>
  </tr>
<?php endforeach; ?>
</table>

<footer>
  <strong>When this page is all green, delete <code>deploy-check.php</code> from the document root.</strong>
  It is only needed once.
</footer>
