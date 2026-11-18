# C01 A/B preview

Dedicated preview-only branch. Build outputs the comparison page at `/`, A at `/a/games/cinder-shift/`, and B at `/b/games/cinder-shift/`.

Source: `kirillgoncharik-commits/web-games-nuts`, `codex/cinder-shift-c01-playtest`, commit `bf0284d82cdad24715d924f357a30eeea998c615`. Clean-build manifests are included beside each variant and in `comparison.json`. Build timestamps use the source commit; verification run 44338729242 identifies these builds.

A preserves baseline rules. B changes only room A of the airlock mission; the experiment ends at B entry. Saves, locale mirrors and observations are isolated per variant. External analytics is disabled and blocked by preview CSP. Use the ordinary New Shift flow, and reset only the selected variant with Fresh Profile.

This branch must not be merged to main. The preview build refuses `CF_PAGES_BRANCH=main`. For rollback, restore the previous successful Cloudflare preview deployment, or create a new preview commit using a previous preview tree without changing main. Preserve the immutable deployment URL for each comparison.
