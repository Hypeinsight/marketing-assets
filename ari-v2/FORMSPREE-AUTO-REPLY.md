# Formspree auto-reply setup for the Site Health Score lead magnet

The lead magnet form on `/ari-v2/` (Site Health Score) is wired so
that after capturing the email, the visitor is **redirected straight
to the scored diagnostic** at `/site-health-score/?email=...&source=ari-v2`.

That covers the on-page experience. For the "you'll also get a copy
in your inbox" promise to be true, Formspree's **auto-reply** feature
needs to be configured once in the Formspree dashboard. Five minutes
of clicks, no code changes required.

## One-time setup

1. Log in to Formspree, open form **`mkoalwwz`** (the Ari endpoint).
2. **Settings &rarr; Auto-reply &rarr; Enable**.
3. **Recipient field**: `email` (the field name on the lead magnet
   form, already wired).
4. **From name**: `Ari Vivekanandarajah`
5. **From email**: leave on the Formspree default, or set to a
   verified Hype Insight address if SPF/DKIM is configured.
6. **Subject**:
   ```
   Your Site Health Score is ready
   ```
7. **Body** (paste the copy below; Formspree supports plain text and
   basic HTML):

   ```
   Hi,

   Thanks for grabbing the Site Health Score. The scored 27-point
   diagnostic is ready for you here, and you can come back to it
   any time using this link:

   https://marketing-assets.onrender.com/site-health-score/

   The quiz takes about ten minutes. Scores save automatically as
   you go, so you can pause and resume from the same device.

   When you've worked through it, if you'd like a 30-minute read on
   what your score actually means and which fix to start with, you
   can book direct on my calendar (no pitch, no charge):

   https://meetings.hubspot.com/ari75

   Speak soon,
   Ari Vivekanandarajah
   Fractional marketing advisor
   ```

8. **Save**. Send a test through the form on `/ari-v2/` to verify
   the auto-reply lands in your own inbox.

## What's wired up already (no extra config needed)

- Lead magnet form posts to `formspree.io/f/mkoalwwz` and includes a
  hidden field `lead_source = Site Health Score`, so submissions can
  be filtered separately from the main contact form (which uses the
  same endpoint).
- After a successful submission, `script.js` fires the
  `health_score_submit` event on `window.dataLayer`, then redirects
  to `/site-health-score/?email=<email>&source=ari-v2`.
- The quiz page reads the `?email=` parameter and shows a small
  personalised welcome banner.

## If you later move to HubSpot for this form

Swap the form's `action` attribute on `/ari-v2/index.html` from the
Formspree URL to the HubSpot embed action, and set the email
template inside HubSpot's workflow. The redirect + dataLayer logic
in `ari-v2/script.js` is host-agnostic and keeps working as long as
the endpoint returns a 200 on success.
