# Cinder Shift 64 — M06.1 art refresh preview

Publish the clean game candidate `0.6.1-art.2` from source commit
`1ca2b555c1fe711fa7c310d78ee8a31f0ff40ace` at
`https://nuts.bid/games/cinder-shift/`. This refreshes 21 art families and adds
the 96-frame runtime atlas while preserving the five-mission campaign, map,
workshop, split saves and campaign-completion world locks.

## Artifact provenance

- Previous published game source: `317f423a57b844fe18ac29fd07a8fb89bd7f5f22`.
- Build ID: `0.6.1-art.2`; clean web build (`source_dirty: false`).
- Build-manifest SHA-256: `41247c2273758d3da201bfad880c3aaf148cb97e8f73360be5ee1d1213bae74d`.
- Artifact SHA-256: `8993798ae174e3026076adc957046e893563967aa80cb0762c1ccd824b0ac4bf`.
- Manifest: 55 files, 4,562,103 bytes raw, 2,939,715 bytes gzip estimate.
- Atlas: 96 frames, 535,684 bytes; SHA-256
  `bf807a5af6561ae23d64ceb484354cee6dc143214625a05d580f8ce62ee148a`.
- Source PR: https://github.com/kirillgoncharik-commits/web-games-nuts/pull/7.
- Site PR: publication record is attached to the reviewed integration PR.

The artifact digest uses sorted `path + NUL + file SHA-256` entries from the
source build manifest. The integration helper verifies each size and hash,
copies the exact artifact, and retains prior content-addressed assets so older
HTML responses can still load.

## Validation and acceptance

`npm run check`, `npm run art:check`, and a clean production build pass. The
automatic art contract verifies source provenance, alpha, atlas padding, frame
bindings, map and touch contracts. This is an early development preview, not
Beta acceptance. The 20-room visual matrix, production browser review,
physical-device, audio and gameplay acceptance remain open; see the source
PR's current CI and the publication PR's deployment receipt.

## Rollback

Revert the site integration commit to restore the previous tracked release.
The integration script also writes a local `.cinder-shift-previous/` backup,
which is not part of the site artifact. Catalogue, locale pages, consent,
forms, mailer and security headers retain their existing behavior.
