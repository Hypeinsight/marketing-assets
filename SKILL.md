# Hype Insight — Assets Portal Rules

## Google Tag Manager
Every HTML file created in this repository **must** include the Google Tag Manager snippets:

### In `<head>` (as early as possible, right after the opening `<head>` tag):
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7QL5263');</script>
<!-- End Google Tag Manager -->
```

### Immediately after the opening `<body>` tag:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7QL5263"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

This applies to **every** new `.html` file added to this repo, no exceptions.

## Enquiry CTA
Any standalone quiz or assessment page must include a "Get a Free Professional Review" CTA button linking to:
`https://hypeinsight.com/website-emergency-contact-us/`
with appropriate UTM parameters identifying the source asset.
