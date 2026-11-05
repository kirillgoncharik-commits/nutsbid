# Cinder Shift M0 demo

Game source: https://github.com/kirillgoncharik-commits/web-games-nuts/tree/e3551eeff51c4ce4e1eb0f0a27d976158d28ee27

Build: `0.1.0-m0.1`, source SHA `e3551eeff51c4ce4e1eb0f0a27d976158d28ee27`, clean source tree. The static artifact is copied into `public/games/cinder-shift/` and verified by its SHA-256 manifest. It contains no third-party runtime downloads. External game analytics is disabled.

Routes: `/games/` and `/games/cinder-shift/`. This is a single technical control room with temporary graphics; it does not contain M02's combat mission. Keyboard, touch and standard gamepad input are present. Real-device acceptance is pending. A known input-focus issue after interacting with page controls is included in the next Work task.

Validation for this publication: TypeScript and game production build passed; the artifact integration helper verified every manifest hash; existing site route and asset checks passed. The source PR reports seven earlier browser scenarios. They were not rerun for this unchanged game commit. Verify the live HTML, assets, build manifest and game start after Cloudflare deploys the site commit.

Rollback: revert the publication commit in this repository to restore the preceding site. For future demo updates, retain the previous artifact or its Git commit. Never rebuild from an unpinned branch inside the site's build.
