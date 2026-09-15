-- Contact enquiries captured by deploy/cpanel/contact-handler.php.
--
-- PRIVACY: the `message` column can contain health information a patient chose
-- to share. Treat this table as confidential: restrict the database user to
-- this schema, and purge rows once an enquiry has been dealt with (see the
-- retention statement at the bottom of this file).

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name           VARCHAR(120)  NOT NULL,
  phone          VARCHAR(30)   NOT NULL,
  email          VARCHAR(160)  NOT NULL DEFAULT '',
  department     VARCHAR(80)   NOT NULL,
  preferred_date VARCHAR(20)   NOT NULL DEFAULT '',
  preferred_time VARCHAR(40)   NOT NULL DEFAULT '',
  message        TEXT          NOT NULL,
  -- Salted SHA-256 of the sender's IP. Used only to rate limit; the raw
  -- address is never stored.
  ip_hash        CHAR(64)      NOT NULL,
  handled_at     DATETIME      NULL DEFAULT NULL,
  created_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_created_at (created_at),
  -- Composite key: the rate-limit query filters on both columns together.
  KEY idx_ip_hash_created_at (ip_hash, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Retention: run periodically (cPanel > Cron Jobs) to drop handled enquiries
-- older than a year.
-- DELETE FROM contact_enquiries
--  WHERE created_at < (NOW() - INTERVAL 12 MONTH) AND handled_at IS NOT NULL;
