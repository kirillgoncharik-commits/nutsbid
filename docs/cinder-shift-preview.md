# Cinder Shift technical preview

The game is maintained in `kirillgoncharik-commits/web-games-nuts`. This change adds a static M0 control test at `/games/cinder-shift/` and its catalogue at `/games/`.

`public/games/cinder-shift/build-manifest.json` pins the exact game source SHA, build version, file hashes and sizes. There are no build-time cross-repository downloads. To update, build the game from a clean commit and run its `npm run integrate -- /absolute/path/to/this-checkout`, then `npm run check` here. Keep the copied game files identical to that manifest.

The game requests no remote scripts, fonts or images. External analytics is disabled; the host's existing consent and GA4 setup are not changed. The artifact has been checked with the site's resource CSP. The global `frame-ancestors 'none'` rule continues to block embedding on this domain; a standalone portal package uses its own hosting policy.

Publish through the ordinary reviewed `main` deployment. Check `/games/`, `/games/cinder-shift/` and the served manifest after deployment. M0 remains pending acceptance until that final URL and physical device checks pass.

For rollback, revert the integration commit to restore the preceding folder. The game integration helper also keeps a local `.cinder-shift-previous/` outside `public/`; do not commit that local backup.

No contact form, mail worker, DNS, privacy page, existing locale, analytics consent or main-site security policy is modified by this integration.
