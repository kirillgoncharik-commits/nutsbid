# Cinder Shift M03 preview candidate

Build 0.3.0-m03.1, clean game source a508e8dfbb1cf5bd3d4d07d4c45daf329acad919. Local site branch codex/cinder-shift-m03-art is based on the local M02 integration. The build manifest records exact source, hashes and file sizes. Game source contains layered PSDs and a reproducible atlas export; only the static game artifact is copied to the site.

M03 adds raster art for A/B/C, Mira's existing procedural rig, walker/drone states, props, projectiles, warnings and the suit UI. Seven core modules, seven simulation methods, room geometry and balance match M02. No new animation sequence or tween is used. Graphics load directly as same-origin images under the existing CSP; blob access is not added. Current runtime art is about 95 KiB; the compressed initial artifact is about 415 KiB.

Only the Cinder Shift artifact, catalog copy and release record are changed. Prior content-addressed assets remain available to old HTML. Locale pages, forms, mail workers, consent, DNS and security headers are untouched. External game analytics stays disabled. Source and site M02/M03 commits are local; no publication is claimed. A previous automatic approval review rejected exporting the new M02 payload because the earlier permission covered M0 only. New approval is needed before pushing these milestone branches and publishing them.

Remaining acceptance: final hosted URL and publication SHA after deployment; real Android/iPhone/Safari, physical gamepad, human readability/playtests and M02's 3–6 minute target. The trained route remains about 25 seconds; M03 deliberately preserves its mechanics.

After approval: push the source and site candidate branches, prepare reviewed PRs, publish through the existing site workflow, wait for success, verify the final manifest and every resource hash and complete a start-to-exit run at https://nuts.bid/games/cinder-shift/. Reverting this M03 integration commit restores the local M02 artifact; the separate previous folder is local only and excluded from publication.
