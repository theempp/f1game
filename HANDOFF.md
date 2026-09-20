# Handoff — 2026-09-20

## Locked model direction
The user approved Alpine Circuit Diorama V3 and requested saving, committing and pushing everything before moving to a new chat. Preserve V3 as the accepted baseline. Be economical with tokens; do not rebuild or regenerate assets without a new request.

Latest deliverables: `deliverables/alpine-circuit-v3/`
- `Alpine_Circuit_Diorama.glb` and `.fbx`: final editable exports.
- `Alpine_Circuit_Diorama.blend`: final master, packed textures, cameras and studio lighting.
- `Alpine_Circuit_Collision.glb`: optional static collision geometry.
- Overview/overhead PNG previews, README, revision and export validation reports.
- `source/`: reproducible update scripts and V2 starting scene.
Complete archive: `deliverables/Alpine_Circuit_Diorama_V3_Complete.zip`.
Earlier V1/V2 models and packages remain available for history.

Accepted design: wider/longer layered alpine course (34.04 m, width 0.266–0.3135 m), 4.09 m illuminated curved tunnel, central rock island, miniature trees, barriers and clear fences. Ten inward-facing grandstands, each three times the earlier length/height (2.660625 m long, 0.7875 m high), with 6,300 actual modeled spectators. Both large Jumbotrons removed; small trackside displays remain. Expanded black plinth is 7.9 × 11.25 m. No cars in this standalone diorama.

Verification completed: both final exports imported into fresh Blender scenes; 8,475 mesh objects, 1,890 shared meshes, four cameras, UVs present, finite coordinates, 6,300 spectators and zero Jumbotrons. Final preview inspected for inward-facing stands and fit on the plinth. GLB is preferred for PBR portability; FBX emission/transparency can need importer adjustment.

## Existing game
The diorama has NOT been integrated into gameplay. The repository also includes the previously completed 3D racing and React lobby changes. Read JOB.md, 3D-UPGRADE.md and LOBBY-UI.md for those systems. Run `node server.cjs`, then http://localhost:4186. Preserve localStorage key `pocket-grand-prix-v1`.

## Constraints
No paid generation, credits, or external asset uploads without explicit approval. No paid generation was used for the diorama. Preserve unrelated project changes and user assets. Existing reference-image deletions were already present before the diorama work and are included as part of the user-requested complete project save.
