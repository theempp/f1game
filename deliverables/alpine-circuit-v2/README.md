# Alpine Circuit Diorama — expanded edition

Editable miniature circuit with a longer illuminated tunnel, two large double-sided Jumbotrons, four populated grandstands and restrained peripheral hills and stones.

## Changes
- Continuous course length: 34.04 m, approximately 54% longer than the original 22.10 m.
- Asphalt width: 0.266–0.3135 m depending on course heading, previously 0.190 m. The layout expansion is 1.4× across and 1.65× lengthwise.
- Curved tunnel: 4.09 m along the descent, warm recessed ceiling strips, angled wall channels, floor guides, exterior metal vault ribs and cyan accent lights.
- Two large double-sided Jumbotrons with abstract graphics; six smaller course displays remain.
- Four grandstand sections with 280 modeled seated spectators. Crowd and tree assets share reusable meshes.
- Six low grass hills with small stones, plus the retained central rocky island and alpine planting.
- Display plinth: 4.830 × 7.1775 m. Metres, origin centered horizontally. Blender Z-up; GLB exports with standard Y-up orientation.

## Files
- `Alpine_Circuit_Diorama.glb`: portable PBR model with embedded maps, named groups and cameras.
- `Alpine_Circuit_Diorama.fbx`: editable geometry, embedded textures and cameras. FBX importers may require adjusting emission and transparent material settings.
- `Alpine_Circuit_Diorama.blend`: editable master with soft studio lighting and packed textures.
- `Alpine_Circuit_Collision.glb`: optional simplified static track and barrier collision shells. Configure as static concave collision; the course is not a single convex shape.
- Three PNG previews: overview, overhead and tunnel detail.
- `export_validation.json`: results from importing both exports into clean Blender scenes.
- `model_report.json`: measured layout dimensions and counts. Final mesh counts are in the export validation report.

## Hierarchy
Track, terrain, trees/shrubs, barriers, catch fencing, tunnel, screens, floodlights, collisions, studio and grandstands/crowds have separate named groups beneath the diorama root. Studio lights and floor are kept in the Blender source and excluded from the portable asset exports. Collision geometry is supplied separately and hidden in the master.

## Rebuilding
Run `source/build_alpine.py` using Blender, then run `source/refine_v2.py` once. This produces the polished exports and previews. Run `source/verify_exports.py` to check both exports. The original edition remains in the neighboring alpine-circuit folder.

This is an authored stylized scale model based on the supplied layout photograph, not a surveyed reconstruction. No branded advertising or cars are included. Spectators were added as requested in this revision. No paid generation or external uploads were used. These are standalone model deliverables; the existing racing game is unchanged.
