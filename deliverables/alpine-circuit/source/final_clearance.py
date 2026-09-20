import bpy,os,ast,math
from mathutils import Vector
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.wm.open_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
# Maintain generous canopy clearance from the enclosed right-hand tunnel.
for o in bpy.data.objects:
 if o.name.startswith('Alpine tree') and .65<o.location.x<1.2 and -.7<o.location.y<.4:o.scale*=.75
scene=bpy.context.scene
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
bpy.ops.object.select_all(action='DESELECT')
for o in bpy.data.objects:
 if o.name!='Preview only studio floor' and o.name not in bpy.data.collections['10_Collision'].objects and o.type!='LIGHT':o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.glb'),export_format='GLB',use_selection=True,export_cameras=True,export_lights=False,export_extras=True)
bpy.ops.export_scene.fbx(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.fbx'),use_selection=True,object_types={'EMPTY','MESH','CAMERA'},apply_unit_scale=True,bake_anim=False,path_mode='COPY',embed_textures=True,axis_forward='-Z',axis_up='Y')
for cam,file,w,h in [('Overview • high three-quarter','Overview',1500,1800),('Blueprint • overhead','Overhead',1300,1800),('Tunnel • entry detail','Tunnel',1400,1000)]:
 scene.camera=bpy.data.objects[cam];scene.render.resolution_x=w;scene.render.resolution_y=h;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_'+file+'.png');bpy.ops.render.render(write_still=True)
