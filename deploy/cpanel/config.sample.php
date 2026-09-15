<?php
/**
 * Copy to config.php IN THE DOCUMENT ROOT ON THE SERVER and fill in the real
 * values. config.php is deliberately git-ignored and is blocked by .htaccess:
 * never commit it, and never paste live credentials into a chat or an issue.
 *
 *   cp config.sample.php config.php && chmod 600 config.php
 */

return [
    // cPanel MySQL is on the same host as the web server.
    'db_host' => 'localhost',
    'db_name' => 'REPLACE_WITH_DATABASE_NAME',
    'db_user' => 'REPLACE_WITH_DATABASE_USER',
    'db_pass' => 'REPLACE_WITH_DATABASE_PASSWORD',

    // Any long random string. Salts the IP hash used for rate limiting.
    // Generate one with: php -r "echo bin2hex(random_bytes(32)), PHP_EOL;"
    'ip_salt' => 'REPLACE_WITH_A_LONG_RANDOM_STRING',

    // Where enquiries are emailed.
    'contact_to' => 'info@maryhelphospital.org',

    // Must be an address on this domain, or the host's mail server and SPF
    // will reject or spam-file the message.
    'contact_from' => 'website@maryhelphospital.org',
];
