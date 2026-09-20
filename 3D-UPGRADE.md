# 3D racing update

Open `Play Pocket Grand Prix.command`, or start `node server.cjs` and visit http://localhost:4186. Refresh any previously opened game tab.

Choose a circuit and an imported car in the Race panel. Modern uses the red/black 2022-style GLB; Heritage uses the red/white 2005-style GLB. Both are the lightweight generated models, about 12,000 faces each. The high-density alternatives remain in the original model output folder. Opponents use both imported cars. The garage displays the actual selected model.

The default camera is first person. Press C or the camera button to switch to chase view. WASD/arrows drive, Space brakes, R recovers, Escape pauses. Mobile has touch controls. The first-person interior is an authored cockpit with animated steering, gloves and instruments; the generated exterior meshes do not contain a usable driver interior or separate rigged wheels.

Circuits:
- Verdant Grand Prix: daylight, trees, hills, pit garages, stands and spectators.
- Neon Harbor: night, glowing rails, skyline, waterfront and cranes.
- Skyline Overpass: elevated figure-eight with 12.5 m separation at its crossing. Track projection and opponent contact account for elevation. Rails constrain the driver to its deck; this is arcade surface-following physics, not a jumping/free-fall simulator.

Rendering includes local Three.js, PBR car materials, environment reflections, shadows, textured asphalt, neon bloom, speed-responsive camera motion, braking/contact sparks and a live minimap. Reduced-motion preference disables camera vibration, speed FOV changes and sparks. Assets and renderer modules are local; gameplay needs no CDN or external service.

Existing progress uses the unchanged `pocket-grand-prix-v1` storage key. Chassis progression and all six performance upgrades remain active; the new exterior selector independently chooses which imported body is displayed. Original cosmetic menus remain available; imported textures retain their original liveries.

Verification: three complete three-lap races through steering/acceleration physics, 12.5 m crossing isolation, persistence, pause, keyboard driving and mobile touch acceleration. Procedural scenery and the authored cockpit are stylized 3D, not photorealistic reproductions of the references.
