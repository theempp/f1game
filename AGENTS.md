# Pocket Grand Prix

## Current 3D implementation (2026-09-19)

Read 3D-UPGRADE.md and the UPDATE section at the end of JOB.md. Gameplay now uses race3d.js / race3d.css and locally vendored Three.js. game.js retains progression and arcade physics with elevation-aware track projection. Two previously generated GLBs live in public/models. No new paid generation was used. Historical 2D handoff notes below describe the earlier version, not the current renderer. Preserve the existing localStorage key and do not replace user assets or unrelated changes.

This project is already signed and implemented. Read JOB.md as the work order and source of truth. Do not restart direction selection or look elsewhere for a website kickoff.

- User approved miniature paddock presentation with technical garage controls.
- NEVER spend credits, submit paid jobs, or upload assets to Higgsfield without explicit user approval. No paid assets have been used.
- Existing implementation: vanilla HTML/CSS/JavaScript, Canvas 2D racing, locally rendered Blender car assets.
- Keep replies concise. Continue from JOB.md and the user's latest feedback.
- Start locally with `node server.cjs`, then open http://localhost:4186.
- User reference images in the repository root are design inputs. Original Blender sources are in assets/source; public derivatives are in public/assets.
- No dependencies are required to play. Browser verification uses Playwright from the environment's available runtime; tests/verify.cjs currently records the original machine's runtime path.
- Preserve saved progress compatibility with localStorage key pocket-grand-prix-v1.

## Handoff

First prototype complete and verified. Five AI opponents, three difficulties, three-lap races, six upgrade systems with three tiers, three chassis eras, cosmetic unlocks and saved statistics. Keyboard and touch controls exist. Desktop launcher: Play Pocket Grand Prix.command.

Known scope: race graphics are top-down 2D; lobby car images are Blender renders. Helmet and suit selections appear on track; garage studio images have a fixed driver. One circuit. Progress is local to the browser. No online multiplayer or public deployment.

Verification completed: three full races through actual steering/acceleration physics, both level unlocks, all six upgrade effects, reload persistence, pause/recovery, desktop 1440×900, mobile 393×852, reduced motion and 4× CPU functional checks. Zero JavaScript errors. Tests use isolated Chrome, not the user's profile.

Remote: https://github.com/theempp/f1game . User requested saving, committing and pushing the entire project, including reference images and editable Blender sources.
