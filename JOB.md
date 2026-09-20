# Pocket Grand Prix
SIGNED: 2026-09-19 — user picked 1 AND 3: The Icon story with The Dossier garage instruments.
NICHE: miniature racing game
MODEL: practice
AUDIENCE: personal arcade player
PROOF: actual races, persistent progression, upgrades that affect vehicle physics.
NOT: marketing landing page; multiplayer; paid assets without explicit approval.
STORY: The Icon — customize a miniature open-wheel car, race, improve it.
BEATS: dress · travel · annotate
DEVICE: miniature car on a paddock presentation plinth with technical pit-wall controls.
FEEL: playful motorsport instruments, scarlet hero car, graphite chrome, lime action accents.
MOTION-INTENT: immediate driving; camera damping; quiet garage rotation.
CHAR: miniature paddock with a technical garage
TYPE: condensed system sans headlines; monospace readouts
COMP: full-screen car stage, left progression, right race launch, top tabs
MAT: painted red body, black rubber, pale concrete, matte graphite
MOVE: direct interactive racing; garage selection transitions
SIGNATURE: compact red car on circular painted paddock platform
REJECTED: Expedition — career remains a feature, not the lobby's organizing story.
MECHANISM: no-mechanism
PRIMITIVES: none
ENTRY: none
MOTION: plain-css plus Canvas 2D gameplay
RUNWAY: 100svh desktop; content height mobile
WHY: A playable game needs input-driven simulation, not a scroll-driven film. Canvas is the game renderer, not a site hero pin.
SHADER: none
PARTICLES: restrained track skid and dust detail
POST: none
CTA: hard-cta — Start race
IA: Race / Car / Driver / Stats
SHOT:
  move: fixed three-quarter garage camera; gameplay elevated circuit camera
  pass: finished local Blender original miniature models, three chassis variants
  proxy: public/assets/car.png; car-1.png; car-2.png; 1400×950 transparent PNGs, 773–811 KB each
SLOTS:
  garage-car · hero car · 3:2 · original miniature car inspired by proportions of references · transparent surround · reject flat cutout reference reuse · on-disk: public/assets/car.png, car-1.png, car-2.png
  circuit · gameplay · responsive · authored green hairpin circuit · HUD edges reserved · reject noninteractive image · local Canvas geometry
FRAMES:
  01 · lobby car on paddock platform · selections update model/livery · no scroll choreography · "Small car. Big ambition." · race launch · three Blender renders
  02 · technical garage and driver selection · direct purchases/equips · content scroll only · "Built to be yours." · persistent customization · Blender renders and CSS driver
  03 · circuit and live HUD · player physics and AI racing · continuous input · lap/position/speed · playable race · Canvas geometry
  04 · finish results · static keyboard-accessible actions · immediate · rewards and level unlock · replay/garage · DOM
  Reduced motion removes UI transitions and camera smoothing; narrow screens use a stacked lobby and touch controls.
ASSUMED: working title Pocket Grand Prix; one circuit, five AI rivals, three laps.
ASSUMED: arrows/WASD driving, Space brake, Escape pause; touch controls on narrow screens.
ASSUMED: XP, credits, wins, best lap and cosmetics saved locally in browser.
ASSUMED: three car eras unlock at driver levels 1/2/3; six upgrade systems affect handling.
ASSUMED: local Chrome URL rather than public hosting; desktop launcher provided.
ASSUMED: original unbranded miniature cars; no external generated assets needed.
COST: User requires explicit approval before ANY spending. No Higgsfield jobs or uploads authorized or submitted.
BUILD:
  exists: playable local game at http://localhost:4186; desktop launcher; six upgrade systems,
    five AI rivals, three difficulties, three chassis generations, cosmetics, saved progression and stats.
  next: user playtest and feedback.
  wrong: prototype uses top-down 2D racing; studio garage driver is fixed while helmet/suit choices appear on track.
QA: Isolated Chrome port 9333. Desktop 1440×900 and phone 393×852; reduced motion and 4x CPU phone checks.
  Three full production-physics races completed at 97.13 seconds each; XP 600; both class unlocks verified.
  Every upgrade improved its intended physics parameter. Persistence, keyboard driving, pause/recovery passed.
  JavaScript errors: zero. No horizontal overflow. Original references never used as pretend playable graphics.
CRITIQUE FIXES: separated car caption from wheels; adjusted phone platform and garage spacing;
  bounded camera to circuit scenery. Also raised locked-option contrast and added distinct chassis renders.
COST RESULT: zero paid calls, zero uploads, zero Higgsfield credits spent.

UPDATE 2026-09-19 — user requested actual imported F1 cars, 3D scenery, multiple track styles, neon, above/below racing and default first-person POV; then requested continued tweaking.
IMPLEMENTED: local Three.js WebGL gameplay, two previously generated lightweight GLBs as actual player/opponent cars, live model garage, first-person cockpit and chase toggle, three selectable circuits, textured asphalt, reflections/shadows, neon bloom, scenery, live map, steering animation and sparks.
ELEVATION: stacked figure-eight with 12.5 m crossing separation; height-aware nearest-surface queries and opponent contact; track-edge constraints prevent crossing decks by driving off a bridge.
PRESERVED: localStorage key, upgrades, career progression, controls and existing unrelated file deletions. No new paid generation, uploads, deployment or git push.
LIMITS: arcade surface-following vehicle physics; procedural environment/cockpit rather than photorealism; imported exterior meshes have baked textures and unrigged wheels. Exterior selection is separate from progression chassis.
QA UPDATE: complete races on all three circuits; keyboard/touch controls; pause; reload persistence; upper/lower crossing isolation. See 3D-UPGRADE.md.
