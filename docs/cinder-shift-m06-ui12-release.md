# Cinder Shift 64 — M06 UI 1.2 preview

Publish the existing Work candidate from game commit `317f423a57b844fe18ac29fd07a8fb89bd7f5f22` to `https://nuts.bid/games/cinder-shift/`. This updates the equipment-style interface, illustrated five-sector map and twelve research icons. The game source branch and draft source PR #7 are unchanged.

## Artifact provenance

- Game build: `0.6.0-m06.0`, web target, clean source checkout.
- Previous published source: `22da406857d2b690f136880d0fd642dce196e071`.
- Current source: `317f423a57b844fe18ac29fd07a8fb89bd7f5f22`.
- Build-manifest SHA-256: `9a8f1bfad43a6629ee8d8f15a9cc0d6bb4fd0e404f1bb3a1ed4aa24dcffa17df`.
- Artifact SHA-256: `f8b212c343fd0262ee0aa00f5ad7fa031dd936d0ca3c2189e49c6ba8d32cd1ef`.
- 52 manifest files; 3,933,271 bytes raw; 2,434,005 bytes gzip estimate.

The artifact digest uses sorted `path + NUL + file SHA-256` entries. The catalogue includes the source prefix because the previous and current game builds share the same version number.

## Validation and known limits

The clean game build passes TypeScript and EN/RU parity (478 keys). The art contract passes. All manifest entries are checked by size and SHA-256 in the game build, integrated public directory and built site. Previously published content-addressed assets are retained byte-for-byte. Site route, asset and metadata checks pass for seven locales.

This publication is an early development preview, explicitly requested by the owner on 8 November 2026. The source PR reports 54 passed / 72 failed browser tests at this commit. This publication does not claim to fix those failures or complete Beta, human, audio or physical-device acceptance. Browser smoke observations and deployment status are recorded in the publication PR.

## Rollback

Revert this site integration commit to restore the previous tracked release. A local `.cinder-shift-previous/` backup is created by the integration script. Unrelated site routes, forms, consent, mailer and security headers retain their prior output.
