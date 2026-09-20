import bpy,math,os,json,hashlib
from mathutils import Vector
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.wm.open_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
# Reuse matching crowd and vegetation assets after layout expansion.
cache={}
for o in list(bpy.data.objects):
 if o.type!='MESH':continue
 if o.name.startswith('Alpine tree') or o.name.startswith('Island summit evergreen'):
  key=('tree',tuple(m.name for m in o.data.materials))
 elif 'spectator ' in o.name:
  key=('spectator',o.location.x<0,tuple(m.name for m in o.data.materials))
 elif 'blue seat' in o.name:key=('seat',o.location.x<0)
 else:continue
 if key in cache:o.data=cache[key]
 else:cache[key]=o.data
# Distinctive exterior vault ribs and two cool roof accent ribbons.
col=bpy.data.collections['07_Curved_LED_Tunnel'];parent=bpy.data.objects['07_Curved_LED_Tunnel']
metal=bpy.data.materials['Metal • satin aluminium'];cyan=bpy.data.materials['Screen • abstract cyan pixels']
def tube(name,a,b,r,mat):
 d=Vector(b)-Vector(a);bpy.ops.mesh.primitive_cylinder_add(vertices=6,radius=r,depth=d.length,location=(Vector(a)+Vector(b))/2)
 o=bpy.context.object;o.name=name;o.rotation_euler=d.to_track_quat('Z','Y').to_euler();o.data.materials.append(mat)
 for c in list(o.users_collection):c.objects.unlink(o)
 col.objects.link(o);o.parent=parent
panels=sorted([o for o in col.objects if o.name.startswith('Curved architectural ceiling panel')],key=lambda o:o.name)
for i,p in enumerate(panels):
 vs=[p.matrix_world@v.co for v in p.data.vertices]
 if i%3==0:
  for a,b in zip(vs[:12],vs[1:13]):tube('Tunnel exterior vault rib',a+Vector((0,0,.005)),b+Vector((0,0,.005)),.003,metal)
 for idx in [3,9]:tube('Tunnel cool exterior light ribbon',vs[idx]+Vector((0,0,.003)),vs[13+idx]+Vector((0,0,.003)),.0025,cyan)
scene=bpy.context.scene
for name in ['Overview • high three-quarter','Overview • opposite three-quarter']:bpy.data.objects[name].data.ortho_scale=11.0
# Aim from just outside the lower tunnel portal into its illuminated curve.
cam=bpy.data.objects['Tunnel • entry detail'];cam.location=(.68,-2.0,.205);target=Vector((1.17,-1.83,.255));cam.rotation_euler=(target-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.lens=17
scene.camera=bpy.data.objects['Overview • high three-quarter']
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
bpy.ops.object.select_all(action='DESELECT')
for o in bpy.data.objects:
 if o.name!='Preview only studio floor' and not o.name.startswith('COLLISION_') and o.type!='LIGHT':o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.glb'),export_format='GLB',use_selection=True,export_cameras=True,export_lights=False,export_extras=True)
bpy.ops.export_scene.fbx(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.fbx'),use_selection=True,object_types={'EMPTY','MESH','CAMERA'},apply_unit_scale=True,bake_anim=False,path_mode='COPY',embed_textures=True,axis_forward='-Z',axis_up='Y')
scene.render.resolution_x=1500;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overview.png');bpy.ops.render.render(write_still=True)
scene.camera=bpy.data.objects['Blueprint • overhead'];scene.render.resolution_x=1300;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overhead.png');bpy.ops.render.render(write_still=True)
scene.camera=cam;scene.render.resolution_x=1400;scene.render.resolution_y=1000;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Tunnel.png');bpy.ops.render.render(write_still=True)
print('REFINED_V2_COMPLETE')
