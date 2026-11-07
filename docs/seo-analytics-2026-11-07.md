# SEO and analytics patch — 7 November 2026

The production game remains build 0.5.1-m05a.1. Its new clean source is `35ac81644607ee3f0cbd2ef88c3fc685d20aa7b8`, based on the published UI-polish source `6f1a0cc16eba01f4386292345e018831b7d9b0a6`. The source patch targets `codex/cinder-shift-m05a-ui-polish`; it does not roll the published game back to main or add gameplay features.

The indexable catalogue and game have self-canonicals, crawlable copy, a studio link and sitemap entries. Creative locale crawl restrictions remain. The artifact's manifest records all hashes; the integration helper verified them and retained old hashed assets for existing tabs.

The studio and game share GA4 `G-HETCM80ZLX` and `nuts_analytics_consent_v1`. The game installs one tag after consent and sends no previous gameplay backlog. Existing local telemetry names remain unchanged. The external mapping is `game_ready → game_loaded`, `mission_start → game_start`, `mission_end → game_end`, `retry → game_restart`. Training is excluded from run/restart counts. End outcomes map actual victory, death and menu abandonment to `win`, `defeat` and `explicit_exit`. Tab closure is not a game ending. Game actions are not business leads.

Studio contact delivery remains `generate_lead` on an accepted response. Consent refusal stops collection on the current page. Campaign labels are carried separately from clean page addresses. Automatic GA4 form, outbound-link and history events were disabled in the existing stream to avoid duplicate or unsafe contact data.
