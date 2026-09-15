<?php
/**
 * Contact endpoint for the static (cPanel) deployment.
 *
 * The static export cannot run src/app/api/contact/route.ts, so this mirrors
 * that route's contract exactly: same JSON body in, same { ok, message } out,
 * so ContactForm.tsx needs no change beyond NEXT_PUBLIC_CONTACT_ENDPOINT.
 *
 * Targets PHP 7.4+ so it runs on a stock cPanel account with no version
 * change, and creates its own table on first use so nothing has to be run by
 * hand in phpMyAdmin.
 *
 * Credentials live in config.php, which is never committed. See
 * docs/DEPLOYMENT-CPANEL.md.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

const RATE_LIMIT = 5;
const RATE_WINDOW_MINUTES = 10;

/** Hospital contact details, kept in step with src/content/site.ts. */
const PHONE_DISPLAY = '+254 724 936 177';
const FALLBACK_EMAIL = 'info@maryhelphospital.org';

/**
 * Created on first use. Kept identical to deploy/cpanel/schema.sql — if you
 * change one, change the other.
 */
const TABLE_DDL = <<<SQL
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name           VARCHAR(120)  NOT NULL,
  phone          VARCHAR(30)   NOT NULL,
  email          VARCHAR(160)  NOT NULL DEFAULT '',
  department     VARCHAR(80)   NOT NULL,
  preferred_date VARCHAR(20)   NOT NULL DEFAULT '',
  preferred_time VARCHAR(40)   NOT NULL DEFAULT '',
  message        TEXT          NOT NULL,
  ip_hash        CHAR(64)      NOT NULL,
  handled_at     DATETIME      NULL DEFAULT NULL,
  created_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_created_at (created_at),
  KEY idx_ip_hash_created_at (ip_hash, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
SQL;

/**
 * Sends the JSON response and stops. No `never` return type: that is PHP 8.1+
 * and this file has to run on 7.4.
 */
function respond(bool $ok, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function clean($value, int $max): string
{
    if (!is_string($value)) {
        return '';
    }
    // mb_substr keeps multi-byte names intact where a byte slice would not.
    return function_exists('mb_substr')
        ? mb_substr(trim($value), 0, $max)
        : substr(trim($value), 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Method not allowed.', 405);
}

$unconfigured = sprintf(
    'Thank you. Online messaging is not yet active, so please call %s or email %s and we will help you right away.',
    PHONE_DISPLAY,
    FALLBACK_EMAIL
);

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    error_log('[contact] config.php missing');
    respond(true, $unconfigured);
}
$config = require $configPath;

$raw = file_get_contents('php://input');
$body = json_decode($raw === false ? '' : $raw, true);
if (!is_array($body)) {
    respond(false, 'Invalid request.', 400);
}

// Honeypot: a filled "website" field means a bot. Accept silently, store nothing.
if (clean($body['website'] ?? null, 10) !== '') {
    respond(true, 'Thank you. We will be in touch shortly.');
}

$name       = clean($body['name'] ?? null, 120);
$phone      = clean($body['phone'] ?? null, 30);
$email      = clean($body['email'] ?? null, 160);
$department = clean($body['department'] ?? null, 80);
$date       = clean($body['date'] ?? null, 20);
$time       = clean($body['time'] ?? null, 40);
$message    = clean($body['message'] ?? null, 2000);

if ($name === '' || $phone === '' || $department === '' || $message === '') {
    respond(false, 'Please fill in your name, phone number, topic and message.', 400);
}
if (!preg_match('/^[+\d][\d\s()-]{6,}$/', $phone)) {
    respond(false, 'Please enter a valid phone number.', 400);
}
if ($email !== '' && !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
    respond(false, 'Please enter a valid email address.', 400);
}

// Only the first hop of X-Forwarded-For is meaningful, and it is hashed rather
// than stored: rate limiting needs to match addresses, not identify people.
$forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
$ip = $forwarded !== ''
    ? trim(explode(',', $forwarded)[0])
    : ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$ipHash = hash('sha256', ($config['ip_salt'] ?? '') . $ip);

$stored = false;
try {
    if (!extension_loaded('pdo_mysql')) {
        throw new RuntimeException('pdo_mysql extension not enabled');
    }

    $pdo = new PDO(
        sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
        $config['db_user'],
        $config['db_pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false]
    );

    // First run on a fresh account: create the table rather than requiring
    // someone to paste SQL into phpMyAdmin. No-op once it exists.
    $pdo->exec(TABLE_DDL);

    // RATE_WINDOW_MINUTES is a literal constant, not input: MySQL will not take
    // a bound parameter as the INTERVAL quantity.
    $limit = $pdo->prepare(
        'SELECT COUNT(*) FROM contact_enquiries
         WHERE ip_hash = ? AND created_at > (NOW() - INTERVAL ' . RATE_WINDOW_MINUTES . ' MINUTE)'
    );
    $limit->execute([$ipHash]);
    if ((int) $limit->fetchColumn() >= RATE_LIMIT) {
        respond(false, 'Too many requests. Please try again later or call us.', 429);
    }

    $insert = $pdo->prepare(
        'INSERT INTO contact_enquiries
         (name, phone, email, department, preferred_date, preferred_time, message, ip_hash, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())'
    );
    $insert->execute([$name, $phone, $email, $department, $date, $time, $message, $ipHash]);
    $stored = true;
} catch (Exception $e) {
    // A database problem must not lose the enquiry; the email below still runs.
    error_log('[contact] database unavailable: ' . $e->getMessage());
}

$to = $config['contact_to'] ?? FALLBACK_EMAIL;
$from = $config['contact_from'] ?? ('website@' . ($_SERVER['HTTP_HOST'] ?? 'maryhelphospital.org'));

$rows = [
    'Name'           => $name,
    'Phone'          => $phone,
    'Email'          => $email !== '' ? $email : '-',
    'Topic'          => $department,
    'Preferred date' => $date !== '' ? $date : '-',
    'Preferred time' => $time !== '' ? $time : '-',
];
$plain = "New website enquiry\n\n";
foreach ($rows as $label => $value) {
    $plain .= sprintf("%s: %s\n", $label, $value);
}
$plain .= "\n" . $message . "\n";

// Header injection guard: a newline in the subject or Reply-To would let a
// submitter add arbitrary mail headers.
$safeHeader = static function (string $v): string {
    return str_replace(["\r", "\n"], ' ', $v);
};

$headers = [
    'From: Mary Help Hospital Website <' . $safeHeader($from) . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $safeHeader($email);
}

$subject = $safeHeader(sprintf('[Website] %s from %s', $department, $name));
$sent = function_exists('mail')
    ? @mail($to, $subject, $plain, implode("\r\n", $headers))
    : false;

if (!$sent && !$stored) {
    error_log('[contact] both mail and database failed');
    respond(false, sprintf(
        'We could not send your message. Please call %s or email %s.',
        PHONE_DISPLAY,
        FALLBACK_EMAIL
    ), 502);
}

respond(true, sprintf(
    'Thank you, %s. We have received your message and will call or email you shortly. For anything urgent, call %s.',
    $name,
    PHONE_DISPLAY
));
