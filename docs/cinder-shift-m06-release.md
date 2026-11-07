# Cinder Shift 64 — M06 development preview

This site update publishes the `0.6.0-m06.0` development preview at `https://nuts.bid/games/cinder-shift/` and updates the `/games/` catalogue. It replaces the M05B.1 preview, not a final Beta acceptance release.

## Exact game artifact

- Game source commit: `22da406857d2b690f136880d0fd642dce196e071`
- Game build: `0.6.0-m06.0`; clean source checkout recorded in `public/games/cinder-shift/build-manifest.json`
- Artifact SHA-256: `da4757814ffaddc021725f682ba2a47de1cc3d03aa3d12bec439f1f4917b3de4`
- Build-manifest SHA-256: `0365750d4c07a76dfe747fff93a76a221397c9239975d2e32668a49a1606ac81`
- Build-manifest totals: 3,910,502 bytes raw; 2,395,790 bytes gzip estimate
- Previous game build: `0.6.0-m05b1.3`, source `4c7b965d366e532b0d34e2437d046d4ddcf3fbd0`

Artifact SHA-256 is computed from sorted `path + NUL + file SHA-256` entries in the build manifest. The gzip figure is a local size estimate, not a network-transfer measurement.

## Acceptance and rollback

`npm run build` passed in the game repository. `npm run check` and `npm run build` passed in this site repository. The supplied game acceptance checklist remains 0/39 for the new candidate. Physical iPhone/Android play, browser gameplay, visual contact-sheet inspection, human audio listening and loading timings remain open; this is labelled as an early preview in the catalogue.

The prior hashed game assets were retained for already-open tabs. Reverting this site integration commit restores the previous tracked release; the integration script also saves a local backup at `.cinder-shift-previous/` before copying the candidate.

The update changes the game artifact, its catalogue card and this release record. Site CSP, consent integration, contact form, mailer, language pages and unrelated content are unchanged.
