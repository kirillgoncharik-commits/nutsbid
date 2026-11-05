# Cinder Shift M03 hosting follow-up

The M03 production playthrough and native touch route passed, but the strict art smoke check found a Cloudflare Web Analytics beacon injected only on the custom domain for some browser requests. The existing CSP correctly blocked the unsolicited script. The Pages preview did not exhibit this injection.

Set `Cache-Control: public, no-cache, no-transform` on `/games/cinder-shift/` and `/games/cinder-shift/index.html`. HTML still revalidates; `no-transform` prevents the proxy from adding the analytics snippet, as documented in [Cloudflare Web Analytics FAQ](https://developers.cloudflare.com/web-analytics/faq/) and [automatic setup](https://developers.cloudflare.com/web-analytics/get-started/). This keeps the game artifact identical to the approved source a508e8d and preserves its disabled external analytics. Site-wide CSP, locale pages, form/mail behavior and catalog analytics settings are unchanged. Hashed assets retain immutable caching.

Validate with the generated headers, existing site checks, the actual custom-domain HTML response, and the strict art smoke test with all asset/CSP console errors still fatal. Record the final publication SHA and result in the delivery receipt.
