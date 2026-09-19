# Pocket Grand Prix

Open http://localhost:4186 in Chrome while the local server is running.
To start it later, double-click `Play Pocket Grand Prix.command` in this folder.

## Play
- W / Up: accelerate
- A / D or Left / Right: steer
- S / Down or Space: brake
- R: recover to the track
- Escape: pause

A three-lap race against five AI cars earns 250–625 credits and 120–200 XP.
Level 2 unlocks at 300 XP; level 3 at 600 XP. All six components have three upgrade tiers.
Progress stays in this browser on this computer. Clearing site data clears progress.

This is an original local prototype: Blender-rendered garage cars and Canvas 2D top-down racing.
Driver helmet/suit selections are visible in gameplay; the studio garage renders use a fixed driver.
No Higgsfield credits or paid generation were used. No external libraries or network requests are needed to play.

## Verification
Isolated Chrome verified three complete races through normal steering/acceleration physics,
level 2 and 3 unlocks, all six upgrade effects, reload persistence, keyboard controls,
pause/resume, recovery, 393px layout and reduced motion with 4x CPU throttling.
No JavaScript errors. The automated driver is only in tests; normal gameplay is manual.
