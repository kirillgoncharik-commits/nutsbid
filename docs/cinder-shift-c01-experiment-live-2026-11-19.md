# Cinder Shift C01 experiment on nuts.bid

Publication authorized by Kirill on 19 November 2026.

- Comparison: https://nuts.bid/games/cinder-shift-experiment/
- Baseline A: https://nuts.bid/games/cinder-shift-experiment/a/games/cinder-shift/?seed=4
- Experiment B: https://nuts.bid/games/cinder-shift-experiment/b/games/cinder-shift/?seed=4
- Game version: `0.8.0-alpha.7`.
- Runtime source: `bf0284d82cdad24715d924f357a30eeea998c615`.
- Verified preview: https://890683b6.nuts-games.pages.dev/.
- Preview packaging commit: `9f465a91f464bfb1be8a5efb8d3c458d983c0548`.
- Copied bundle tree: `9095b7d68fcd83aa201a2b4faa4775df081e7032`.
- Published-preview checks: https://github.com/kirillgoncharik-commits/web-games-nuts/actions/runs/44340977021.

The A/B directory is copied byte for byte from `public/c01-playtest` in
the verified preview. It is served by the site's normal production build;
the preview-only build command is not used. Relative links and assets keep
both variants under the comparison path. The experiment retains independent
save namespaces and local observations. Its scoped response headers retain
the preview policy, disable indexing and prevent response transformation.

Scope is room A through the first gate into room B. Player acceptance and
physical-phone testing remain open. This deployment does not change the
main game's files at `/games/cinder-shift/`.

Rollback: remove `public/games/cinder-shift-experiment`, its scoped header
block and this publication note in a new commit; the main game is independent.
