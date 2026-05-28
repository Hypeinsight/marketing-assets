# UTM &amp; Query String Guide

How to build campaign URLs for the Ari profile page and the AI services
pages so they personalise correctly, track cleanly in analytics, and
land enquiries in Formspree with useful subject lines.

---

## 1. The basics

All pages in this repo accept the standard UTM parameters and pass
them through to Formspree on form submission. The **Ari page** does
something extra: a `?service=<slug>` parameter retunes the entire
page to that specialism (hero, stats, divider quote, featured case
studies, authored work, contact form heading, all swap to match).

**Recommended pattern for ad campaigns:**

```
https://[your-domain]/ari/?service=<service>&utm_source=<source>&utm_medium=<medium>&utm_campaign=<campaign>
```

The `service` param comes first by convention (cleaner to read in
analytics and copy-paste contexts), but the page detects it
anywhere in the query string.

---

## 2. Service slugs

These are the canonical slugs for the Ari page's service
personalisation. Use them in either `?service=<slug>` or as a
standalone flag like `?google-ads`.

| Slug             | Service                            | Aliases (also accepted)                  |
|------------------|------------------------------------|------------------------------------------|
| `google-ads`     | Google Ads                         | `googleads`, `ads`, `ppc`                |
| `meta-ads`       | Meta Ads (Facebook / Instagram)    | `meta`, `facebook`, `fb`, `facebook-ads`, `fb-ads`, `instagram`, `ig`, `ig-ads` |
| `tiktok-ads`     | TikTok Ads                         | `tiktok`, `tt`, `tt-ads`                 |
| `linkedin-ads`   | LinkedIn Ads                       | `linkedin`, `li`, `li-ads`               |
| `reddit-ads`     | Reddit Ads                         | `reddit`                                 |
| `hubspot`        | HubSpot &amp; Marketing Automation | (no aliases)                             |
| `ai-agents`      | AI Agents                          | `ai`, `agents`                           |
| `seo`            | SEO                                | (no aliases)                             |
| `geo`            | Generative Engine Optimisation     | (no aliases)                             |
| `content`        | Content &amp; Editorial Strategy   | `copy`, `copywriting`, `editorial`, `content-strategy` |
| `website`        | Website Design / Build             | `web`, `design`, `webdesign`             |

**Always prefer the canonical slug in your ad URLs.** The aliases
exist for handwritten / shared links and analytics readability.

---

## 3. Standard UTM conventions per platform

Use these exact values so analytics rolls up consistently across
campaigns. Lowercase everything, use underscores or hyphens
consistently (pick one and stick with it; we suggest underscores).

### Google Ads

```
utm_source=google
utm_medium=cpc
utm_campaign=<campaign-name>
utm_term={keyword}              ← ValueTrack
utm_content={creative}          ← ValueTrack
```

Example:
```
https://[your-domain]/ari/?service=google-ads
  &utm_source=google
  &utm_medium=cpc
  &utm_campaign=ari_2026_q1_google
  &utm_term={keyword}
  &utm_content={creative}
```

Google's `{keyword}` and `{creative}` ValueTrack tokens auto-fill at
click time.

### Meta Ads (Facebook / Instagram)

```
utm_source=facebook   (or instagram)
utm_medium=paid_social
utm_campaign={{campaign.name}}
utm_content={{ad.name}}
utm_term={{adset.name}}
```

Meta's `{{ ... }}` URL parameters auto-fill from your campaign /
adset / ad names. Set them in Ads Manager once, never edit them per
ad.

Example:
```
https://[your-domain]/ari/?service=meta-ads
  &utm_source=facebook
  &utm_medium=paid_social
  &utm_campaign={{campaign.name}}
  &utm_content={{ad.name}}
```

### TikTok Ads

```
utm_source=tiktok
utm_medium=paid_social
utm_campaign=<campaign-name>
utm_content=<creative-name>
```

TikTok's tracking URL parameters auto-fill in Ads Manager. Use
`__CAMPAIGN_NAME__` and `__AD_NAME__` if you want auto-population.

### LinkedIn Ads

```
utm_source=linkedin
utm_medium=paid_social        (or 'sponsored' for sponsored content)
utm_campaign=<campaign-name>
utm_content=<creative-name>
```

### Reddit Ads

```
utm_source=reddit
utm_medium=paid_social
utm_campaign=<campaign-name>
utm_content=<creative-name>
```

### Email (HubSpot / MailChimp / etc.)

```
utm_source=newsletter   (or 'hubspot', 'mailchimp', etc.)
utm_medium=email
utm_campaign=<email-name>
utm_content=<link-position>
```

### Organic social

```
utm_source=linkedin     (or facebook, twitter, etc.)
utm_medium=organic_social
utm_campaign=<post-theme>
```

### Partner / referral links

```
utm_source=<partner-name>
utm_medium=referral
utm_campaign=<context>
```

---

## 4. Full worked examples

### Google Ads campaign for the SEO service

```
https://[your-domain]/ari/?service=seo&utm_source=google&utm_medium=cpc&utm_campaign=ari_seo_aus_2026&utm_term={keyword}&utm_content={creative}
```

What the visitor sees: the Ari page retuned to SEO (hero accent,
stats, divider quote, featured case studies all swap to SEO context).

What lands in your inbox via Formspree:

```
Subject: [Ari Profile / SEO] New enquiry from {name}

Body includes:
  Name, Email, Company, Phone, Message
  Service interest (form): SEO
  Service interest (URL):  SEO
  UTM source:    google
  UTM medium:    cpc
  UTM campaign:  ari_seo_aus_2026
  UTM term:      {actual keyword they searched}
  UTM content:   {actual creative they clicked}
```

### Meta Ads campaign for AI Agents

```
https://[your-domain]/ari/?service=ai-agents&utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

### LinkedIn sponsored content for HubSpot work

```
https://[your-domain]/ari/?service=hubspot&utm_source=linkedin&utm_medium=sponsored&utm_campaign=ari_hubspot_2026
```

### Reddit ad for Reddit Ads work (meta moment)

```
https://[your-domain]/ari/?service=reddit-ads&utm_source=reddit&utm_medium=paid_social&utm_campaign=ari_reddit_2026
```

### TikTok ad for TikTok work

```
https://[your-domain]/ari/?service=tiktok-ads&utm_source=tiktok&utm_medium=paid_social&utm_campaign=ari_tiktok_2026
```

### Organic LinkedIn post (no service, just tracking)

```
https://[your-domain]/ari/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=ari_intro_post
```

(No `service=` param means the default Ari view loads; UTMs still
get captured.)

### Email newsletter to past clients

```
https://[your-domain]/ari/?utm_source=hypeinsight&utm_medium=email&utm_campaign=ari_intro_2026q1
```

---

## 5. UTMs on the AI services pages

The AI services pages (`/ai-automation-services/` and its four sub-
pages: sales-acceleration, customer-support, decision-intelligence,
orchestration) **do not** use service personalisation via query
strings. Each page IS already a specific service.

But they **do** capture and forward UTMs to Formspree, so your
campaign tracking still works end to end. Just append UTMs to the
URL of whichever page you want to drive to:

```
https://[your-domain]/ai-automation-services/?utm_source=google&utm_medium=cpc&utm_campaign=ai_overview_q1

https://[your-domain]/ai-automation-services/sales-acceleration/?utm_source=linkedin&utm_medium=sponsored&utm_campaign=sales_agents_q1

https://[your-domain]/ai-automation-services/customer-support/?utm_source=facebook&utm_medium=paid_social&utm_campaign=support_automation_q1
```

The Formspree subject line per page is already pre-tagged:

| Page                  | Email subject                                              |
|-----------------------|-------------------------------------------------------------|
| Overview              | `[AI Services] Overview enquiry`                           |
| Sales Acceleration    | `[AI Services / Sales Acceleration] New enquiry`           |
| Customer Support      | `[AI Services / Customer Support] New enquiry`             |
| Decision Intelligence | `[AI Services / Decision Intelligence] New enquiry`        |
| Multi-Agent Orch.     | `[AI Services / Multi-Agent Orchestration] New enquiry`    |
| Ari profile           | `[Ari Profile / <service>] New enquiry` (dynamic per service) |

---

## 6. Reserved parameters (won't interfere with service detection)

These are auto-ignored by the Ari page's service detector, so you
can include them freely without breaking the personalisation:

```
utm_source       utm_medium      utm_campaign
utm_term         utm_content     utm_id
gclid                            (Google Click ID)
fbclid                           (Facebook Click ID)
msclkid                          (Microsoft Click ID)
gad_source                       (Google Ads)
ref              source          campaign         medium
_ga              _gl
mc_cid           mc_eid          (MailChimp click + email IDs)
```

So a URL like:

```
?utm_source=google&utm_medium=cpc&gclid=xyz123&service=seo&utm_campaign=foo
```

still correctly detects `service=seo`, regardless of param order.

---

## 7. Pitfalls and house rules

- **Lowercase everything.** `utm_source=Google` and `utm_source=google`
  are treated as different sources by GA4 / dataLayer. Pick a casing
  convention (we use lowercase) and never deviate.
- **Don't repeat the same value across params.** If
  `utm_campaign=spring_sale` and `utm_content=spring_sale`, you've
  lost a dimension of reporting. Pick one.
- **Use `utm_content` for the creative or variant** (which ad,
  which post, which link in an email). Use `utm_term` for the
  keyword. Don't swap them.
- **Avoid commas, ampersands, equals signs in values.** They'll
  break URL parsing. Stick to letters, numbers, `_`, `-`, and `.`.
- **One service per URL.** Don't try `?service=seo&service=content`,
  the first one wins and the second is ignored.
- **Test the URL before paying for clicks.** Paste into a browser,
  check that the page retunes to the right service, then click submit
  on the form and verify the Formspree email subject is correct.

---

## 8. Quick-grab URL builder

For the impatient. Replace bracketed placeholders.

```
https://[domain]/ari/?service=[slug]&utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]
```

Most common combinations:

| Channel         | Snippet to append                                                                |
|-----------------|----------------------------------------------------------------------------------|
| Google Ads      | `?service=[slug]&utm_source=google&utm_medium=cpc&utm_campaign=[name]&utm_term={keyword}&utm_content={creative}` |
| Meta Ads        | `?service=[slug]&utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}` |
| TikTok Ads      | `?service=[slug]&utm_source=tiktok&utm_medium=paid_social&utm_campaign=[name]&utm_content=[creative]` |
| LinkedIn Ads    | `?service=[slug]&utm_source=linkedin&utm_medium=paid_social&utm_campaign=[name]&utm_content=[creative]` |
| Reddit Ads      | `?service=[slug]&utm_source=reddit&utm_medium=paid_social&utm_campaign=[name]&utm_content=[creative]` |
| Email           | `?service=[slug]&utm_source=newsletter&utm_medium=email&utm_campaign=[name]&utm_content=[link-position]` |
| Organic social  | `?service=[slug]&utm_source=linkedin&utm_medium=organic_social&utm_campaign=[name]` |
| Referral        | `?service=[slug]&utm_source=[partner]&utm_medium=referral&utm_campaign=[context]` |

---

## 9. What gets sent to GTM / dataLayer

Both the Ari page and the AI services pages push a custom dataLayer
event on successful form submission, so GTM triggers can fire
downstream pixels and conversions.

**Ari page event:**

```javascript
window.dataLayer.push({
    event: 'ari_contact_submit',
    source_page: 'ari',
    service: 'seo',            // from the form dropdown
    query_service: 'seo'       // from the URL
});
```

**AI services pages event:**

```javascript
window.dataLayer.push({
    event: 'ai_services_contact_submit',
    source_page: 'sales-acceleration',  // or whichever sub-page
    stage: 'use_case'                    // from the form's stage radio
});
```

UTM params are not pushed to dataLayer directly because GTM and GA4
auto-capture them from the URL. They are however written into hidden
form fields so they land in the Formspree email body for offline
attribution.
