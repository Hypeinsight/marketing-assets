<?php
/**
 * Hype Insight: AI Automation Services contact-form handler
 *
 * Accepts a POST from the inline contact form, validates it, sends an
 * email to the team, and returns JSON so the page can show a clean
 * success or error state.
 *
 * ---------- One-time configuration ----------
 * Change the two constants below to the inbox you want enquiries to
 * land in, and the From address (must be on a domain your server is
 * allowed to send from, otherwise it'll be marked as spam).
 */

declare(strict_types=1);

// ===== CONFIG =====
const TO_EMAIL   = 'hello@hypeinsight.com';            // where enquiries land
const FROM_EMAIL = 'no-reply@hypeinsight.com';         // sending address (must be your domain)
const FROM_NAME  = 'Hype Insight Website';

// ===== Boilerplate =====
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// ===== Honeypot (silent bot trap) =====
// If the hidden "website" field is filled, it's almost certainly a bot.
// We return success so the bot moves on, but we don't actually send anything.
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true]);
    exit;
}

// ===== Collect & sanitise =====
$pick = function (string $key, int $maxLen = 1000): string {
    $v = $_POST[$key] ?? '';
    if (!is_string($v)) return '';
    return trim(mb_substr($v, 0, $maxLen));
};

$name         = $pick('name', 120);
$email        = $pick('email', 160);
$company      = $pick('company', 160);
$phone        = $pick('phone', 60);
$stage        = $pick('stage', 32);
$message      = $pick('message', 4000);
$utm_source   = $pick('utm_source', 80);
$utm_medium   = $pick('utm_medium', 80);
$utm_campaign = $pick('utm_campaign', 80);
$source_page  = $pick('source_page', 80);

// ===== Validation =====
$errors = [];
if ($name === '')  $errors[] = 'Please tell us your name.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please provide a valid email address.';
}
if ($message !== '' && mb_strlen($message) > 4000) {
    $errors[] = 'Message is too long.';
}
// Header-injection guard: reject if name or email contain newlines
if (preg_match('/[\r\n]/', $name) || preg_match('/[\r\n]/', $email)) {
    $errors[] = 'Invalid characters in name or email.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ===== Map stage value to human-readable =====
$stageLabels = [
    'exploring' => 'Exploring concepts',
    'use_case'  => 'Have a specific use case',
    'piloting'  => 'Already piloting agents',
    'scaling'   => 'Scaling deployments',
];
$stageLabel = $stageLabels[$stage] ?? '(not specified)';

// ===== Build email =====
$subject = sprintf('New AI services enquiry, %s', $name);

$bodyLines = [
    'A new enquiry came in from the AI Automation Services landing page.',
    '',
    'Name:    ' . $name,
    'Email:   ' . $email,
    'Company: ' . ($company !== '' ? $company : '(not provided)'),
    'Phone:   ' . ($phone   !== '' ? $phone   : '(not provided)'),
    'Stage:   ' . $stageLabel,
    '',
    'Message:',
    $message !== '' ? $message : '(none)',
    '',
    '----------------------------------------',
    'Source page:   ' . ($source_page  !== '' ? $source_page  : 'ai-automation-services'),
    'UTM source:    ' . ($utm_source   !== '' ? $utm_source   : '(direct)'),
    'UTM medium:    ' . ($utm_medium   !== '' ? $utm_medium   : '(none)'),
    'UTM campaign:  ' . ($utm_campaign !== '' ? $utm_campaign : '(none)'),
    'Visitor IP:    ' . ($_SERVER['REMOTE_ADDR']     ?? 'unknown'),
    'User agent:    ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown'),
    'Received at:   ' . gmdate('Y-m-d H:i:s') . ' UTC',
];
$body = implode("\n", $bodyLines);

// Headers using \r\n per RFC 5322
$headers  = 'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>' . "\r\n";
$headers .= 'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
$headers .= 'X-Mailer: HypeInsight-Contact/1.0';

/*
 * ---------- WordPress alternative ----------
 * If you'd rather use WordPress's mail system (wp_mail) so it picks up
 * any SMTP plugin configuration you already have, replace the mail()
 * line below with:
 *
 *     require_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
 *     $sent = wp_mail(TO_EMAIL, $subject, $body, [
 *         'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
 *         'Reply-To: ' . $name . ' <' . $email . '>',
 *     ]);
 *
 * That uses WordPress's PHPMailer + your hosting's mail config, which
 * is usually more reliable than PHP's bare mail() function.
 */

$sent = @mail(TO_EMAIL, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Sorry, the message could not be sent right now. Please try again or email us directly at ' . TO_EMAIL . '.',
    ]);
}
