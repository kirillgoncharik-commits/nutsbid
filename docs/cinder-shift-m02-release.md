# Cinder Shift M02 preview candidate

Build 0.2.0-m02.2, clean game source 826f27a11bcde7ad56c69146394f36767ec3f5ec. The copied manifest pins all file hashes, sizes and the M02 stage. The artifact is built from that exact checkout and contains the three-room Airlock mission, walker and drone combat, HP, a held power objective, victory/death and retry. The original control room is available separately.

Local verification: 23 distinct checks passed across Chrome, Firefox and WebKit, including a native-touch-event mission completion in mobile emulation, 30/60 render limits, long frame handling, focus regression, room memory, damage and retry. The menu-exit result was then checked with ten browser restarts. WebKit is not physical Safari acceptance. Android, iPhone, Safari macOS and physical gamepad acceptance remain open.

Known design limit: the scripted learned route takes about 25 seconds, below the requested 3–6 minutes. Human playtests and a decision on mission scope or the time target are required before M02 acceptance. This publication is a playable preview, not a completed acceptance claim.

Only the game artifact, its catalogue text and this release record are changed. Existing locale pages, form/mail code, consent, DNS, domain routing and security headers are unchanged. External game telemetry remains disabled. Prior hashed bundles are retained for old HTML responses across updates. Local browser verification loaded legacy M0 and M02.1 HTML against the updated asset directory, then refreshed into M02.2 without HTTP or page errors. Existing game cache headers revalidate HTML, boot guard and manifest while retaining immutable hashed assets.

Publication checks: publish through a reviewed site commit, wait for Cloudflare Pages success, and verify the final HTML title, manifest, every resource hash and a complete start-to-exit run at https://nuts.bid/games/cinder-shift/ . An HTTP 200 alone is not acceptance.

Rollback: reverting the M02 integration commit restores the M0 artifact from main. The game helper also keeps a local previous folder outside public; it is not part of the publication.
