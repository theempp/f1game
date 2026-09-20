# Alpine Circuit Diorama

An original, editable miniature alpine racing circuit, modeled as geometry from the supplied visual references. No cars, people, real brands or advertising. No paid generation or uploads.

## Files

- `Alpine_Circuit_Diorama.glb` — self-contained model with embedded PBR textures, named object hierarchy, linked mesh assets, and four cameras. Preferred portable material format.
- `Alpine_Circuit_Diorama.fbx` — editable geometry, cameras and embedded textures. FBX material support varies by importer; transmission and emissive intensity may need adjustment. Use the GLB or Blender scene as the material reference.
- `Alpine_Circuit_Diorama.blend` — editable master scene, packed textures, organized collections, four cameras and three soft studio area lights. The backdrop belongs only to the studio preview and is excluded from the model exports.
- `Alpine_Circuit_Collision.glb` — optional simplified closed-loop track surface and two continuous barrier collision shells. Collision meshes are also hidden in the master scene. These are static concave meshes; configure them for your engine rather than treating the complete circuit as one convex hull.
- Overview, overhead and tunnel-detail PNG previews.
- `source/build_alpine.py` — deterministic Blender construction script; retains separate editable components and shared mesh data for repeated trees, barrier modules, fence posts and light housings. Run `final_clearance.py` once after rebuilding to apply the final tunnel planting clearance adjustment.
- `model_report.json`, `export_validation.json` — geometry inventory and export re-import checks.

## Scale and viewing

Metres; plinth footprint 2.675 × 4.350 m. Track width 0.190 m; centerline length approximately 22.1 m. The rectangular plinth is centered on X/Y at the origin, with its landscape surface near Z=0 in Blender. GLB uses its standard Y-up conversion; FBX is exported Y-up. Rotate the top-level `Alpine Circuit Diorama` parent around the vertical axis for a turntable. Blender opens with the high three-quarter overview camera and soft studio lighting.

## Model organization

Plinth; continuous track and kerbs; terrain and rocks; trees and shrubs; modular red/white/black barriers; clear polycarbonate catch fencing; panelled curved LED tunnel; abstract screens; floodlights; optional collision; studio cameras and lighting.

All visible mesh objects have UV coordinates. Asphalt, kerbs, grass, rock, tunnel cladding and bark/foliage use embedded UV texture maps. Polymer, metal, polycarbonate and LED materials use PBR surface values. Glass uses transmission; view it in a renderer supporting glTF transmission. LEDs are emissive geometry; the Blender studio lights provide the preview illumination.

The single perspective layout photograph is a visual blueprint, not a surveyed plan: the course preserves its major spatial features with an authored continuous centerline and three grade-separated crossings. No dimensions could be recovered exactly from that photograph. Terrain, planting and tunnel details are editable stylized scale-model geometry.
