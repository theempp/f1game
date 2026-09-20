import bpy,os
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.wm.open_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
for name in ['Black rectangular display plinth','Inset landscape tray','Plinth brushed reveal']:
 o=bpy.data.objects[name];o.dimensions=(7.9,11.25,o.dimensions.z)
bpy.context.view_layer.update()
scene=bpy.context.scene;scene.camera=bpy.data.objects['Overview • high three-quarter']
for name in ['Overview • high three-quarter','Overview • opposite three-quarter']:bpy.data.objects[name].data.ortho_scale=15.8
bpy.data.objects['Blueprint • overhead'].data.ortho_scale=12.2
scene.cycles.samples=24
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
bpy.ops.object.select_all(action='DESELECT')
for o in bpy.data.objects:
 if o.name!='Preview only studio floor' and not o.name.startswith('COLLISION_') and o.type!='LIGHT':o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.glb'),export_format='GLB',use_selection=True,export_cameras=True,export_lights=False,export_extras=True)
bpy.ops.export_scene.fbx(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.fbx'),use_selection=True,object_types={'EMPTY','MESH','CAMERA'},apply_unit_scale=True,bake_anim=False,path_mode='COPY',embed_textures=True,axis_forward='-Z',axis_up='Y')

scene.render.resolution_x=1700;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overview.png');bpy.ops.render.render(write_still=True)
scene.camera=bpy.data.objects['Blueprint • overhead'];scene.render.resolution_x=1500;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overhead.png');bpy.ops.render.render(write_still=True)
print('V3_COMPLETE')
