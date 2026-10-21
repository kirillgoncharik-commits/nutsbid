# Nuts Games website

Production source for [nuts.bid](https://nuts.bid). The site is a dependency-free static build with Cloudflare Pages Functions for the contact form.

## Local development

Requirements: Node.js 20+.

```sh
npm install
npm run check
npm run dev
```

The local site is served at `http://localhost:4173`.

## Architecture

- `src/content.mjs` — seven locale editions and interface copy.
- `src/template.mjs` — semantic page and privacy templates.
- `src/build.mjs` — produces `dist/`, routes, sitemap, robots and security headers.
- `public/` — approved brand and original illustrative assets, CSS and client-side behaviour.
- `functions/api/contact.js` — validated, honeypot-protected inquiry delivery.
- `docs/source-of-truth.md` — publication-safe facts and approval gaps.
- `docs/nuttish-bible.md` — vocabulary and grammar for the invented language.

## Cloudflare Pages

Connect the GitHub repository and use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

The domain must use `nuts.bid` as canonical. Redirect `www.nuts.bid` to the apex and preserve all existing MX/TXT records.

## Contact form configuration

The form deliberately returns `503 FORM_NOT_CONFIGURED` until delivery is configured. Set these encrypted/environment values in Cloudflare Pages:

- `RESEND_API_KEY` — secret.
- `CONTACT_TO` — verified receiving mailbox.
- `CONTACT_FROM` — verified sender such as `Nuts Games <website@nuts.bid>`.
- `TURNSTILE_SECRET_KEY` — optional secret; when set, add the client token flow before enabling it.
- `ALLOWED_ORIGINS` — comma-separated production origins; already declared for apex and `www`.

Cloudflare Email Routing provides inbound forwarding only; it is not outbound SMTP. Verify an outbound provider/domain before presenting `hello@nuts.bid` as a working reply address.

## GA4 and consent

The production GA4 stream uses measurement ID `G-HETCM80ZLX`. Override it with the optional `GA_MEASUREMENT_ID` build variable when deploying another environment. GA4 is not loaded until the visitor allows analytics. Implemented events:

- `page_view` (GA4 config)
- `language_change`
- `service_section_view`
- `portfolio_view`
- `contact_start`
- `generate_lead` (successful form delivery only)
- `linkedin_click`
- `squirrel_replay`

Do not include names, emails, company names or brief text in analytics parameters.

## Search Console

After the domain is active, create or reuse the `nuts.bid` Domain property, add Google’s exact DNS TXT verification record without changing unrelated records, then submit `https://nuts.bid/sitemap.xml`. Only English, Russian and Albanian are included in the sitemap. Creative locales are `noindex`.

## Updating the site

Edit source/content, run `npm run check`, commit and push to `main`. Cloudflare Pages builds and deploys automatically. Pull requests receive preview deployments when Git integration is enabled.

