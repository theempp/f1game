# Alpine Circuit Diorama — V3

Ten large populated grandstands now surround all four sides of the circuit. Each is 2.660625 m long and 0.7875 m high including the top guardrail: three times the previous stand length and height. The low front rows, high rear rows and seated spectators all face inward toward the circuit. Fifteen seating rows and three aisle breaks provide 630 spectators per stand, 6,300 total. Shared spectator meshes keep geometry reusable.

Both large Jumbotrons, including their supports and display graphics, have been removed. The small original trackside LED boards remain.

The display plinth is expanded to 7.9 × 11.25 m to accommodate the larger stands without placing them across the course. The V2 track, extended illuminated tunnel and landscaping remain in place.

Deliverables:
- GLB: embedded PBR textures, editable named hierarchy and four cameras.
- FBX: editable geometry, cameras and embedded textures. Transparency and emission can require importer-specific adjustments.
- Blender master: packed textures, organized objects and soft studio lighting.
- Collision GLB: unchanged simplified track and barrier meshes, intended for static concave collision.
- Overview and overhead previews.
- Export validation and revision measurements.

The scene uses metres and is centered horizontally at the origin. Blender uses Z-up; GLB follows standard Y-up convention. Studio floor and area lights are excluded from the portable exports.

To rebuild, run source/update_stands.py in Blender. The included source/Base_V2.blend is its starting scene. It contains the prior edition, including its old stands and screens, which the update script replaces. The final model files at the top of this package contain the revised scene only.

This is a standalone model revision; the existing racing game is unchanged. No paid generation or uploads were used.
