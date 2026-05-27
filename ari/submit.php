<?php
/**
 * Ari profile page contact-form handler
 *
 * Accepts a POST from ari/index.html, validates, sends email, returns JSON.
 *
 * ---------- Configuration ----------
 * Change TO_EMAIL / FROM_EMAIL below to wherever Ari wants leads to land.
 */

declare(strict_types=1);

// ===== CONFIG =====
const TO_EMAIL   = 'ari@hypeinsight.com';        // where Ari's enquiries land
const FROM_EMAIL = 'no-reply@hypeinsight.com';   // sending address (must be on your domain)
const FROM_NAME  = 'Hype Insight Website';

// ===== Boilerplate =====
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// ===== Honeypot =====
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

$name          = $pick('name', 120);
$email         = $pick('email', 160);
$company       = $pick('company', 160);
$phone         = $pick('phone', 60);
$service       = $pick('service', 32);
$message       = $pick('message', 4000);
$utm_source    = $pick('utm_source', 80);
$utm_medium    = $pick('utm_medium', 80);
$utm_campaign  = $pick('utm_campaign', 80);
$query_service = $pick('query_service', 32);
$source_page   = $pick('source_page', 80);

// ===== Validation =====
$errors = [];
if ($name === '')  $errors[] = 'Please tell us your name.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please provide a valid email address.';
}
if (preg_match('/[\r\n]/', $name) || preg_match('/[\r\n]/', $email)) {
    $errors[] = 'Invalid characters in name or email.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ===== Map service to human-readable label =====
$serviceLabels = [
    'google-ads' => 'Google Ads',
    'hubspot'    => 'HubSpot & Marketing Automation',
    'ai-agents'  => 'AI Agents',
    'seo'        => 'SEO',
    'geo'        => 'GEO (Generative Engine Optimisation)',
    'website'    => 'Website Design / Build',
    'multi'      => 'Multiple / not sure',
];
$serviceLabel = $serviceLabels[$service] ?? '(not specified)';
$queryLabel   = $serviceLabels[$query_service] ?? '';

// ===== Build email =====
// If the visitor arrived via ?service-name query string, use that in subject
$tagForSubject = $serviceLabels[$query_service] ?? $serviceLabels[$service] ?? 'General';
$subject = sprintf('[Ari · %s] New enquiry from %s', $tagForSubject, $name);

$bodyLines = [
    'A new enquiry came in from Ari\'s profile page.',
    '',
    'Name:    ' . $name,
    'Email:   ' . $email,
    'Company: ' . ($company !== '' ? $company : '(not provided)'),
    'Phone:   ' . ($phone   !== '' ? $phone   : '(not provided)'),
    'Service interest (form): ' . $serviceLabel,
    'Service interest (URL):  ' . ($queryLabel !== '' ? $queryLabel : '(none)'),
    '',
    'Message:',
    $message !== '' ? $message : '(none)',
    '',
    '----------------------------------------',
    'Source page:   ' . ($source_page  !== '' ? $source_page  : 'ari'),
    'UTM source:    ' . ($utm_source   !== '' ? $utm_source   : '(direct)'),
    'UTM medium:    ' . ($utm_medium   !== '' ? $utm_medium   : '(none)'),
    'UTM campaign:  ' . ($utm_campaign !== '' ? $utm_campaign : '(none)'),
    'Visitor IP:    ' . ($_SERVER['REMOTE_ADDR']     ?? 'unknown'),
    'User agent:    ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown'),
    'Received at:   ' . gmdate('Y-m-d H:i:s') . ' UTC',
];
$body = implode("\n", $bodyLines);

$headers  = 'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>' . "\r\n";
$headers .= 'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
$headers .= 'X-Mailer: HypeInsight-Contact/1.0';

/*
 * ---------- WordPress alternative ----------
 * If you would rather use WordPress's mail system (wp_mail) so it picks
 * up any SMTP plugin you have configured, replace the mail() line below
 * with this block:
 *
 *     require_once $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php';
 *     $sent = wp_mail(TO_EMAIL, $subject, $body, [
 *         'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
 *         'Reply-To: ' . $name . ' <' . $email . '>',
 *     ]);
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
