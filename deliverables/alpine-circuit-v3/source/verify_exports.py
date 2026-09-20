import bpy,os,json,math
from mathutils import Vector
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
report={}
for ext in ['glb','fbx']:
 bpy.ops.wm.read_factory_settings(use_empty=True)
 path=os.path.join(OUT,'Alpine_Circuit_Diorama.'+ext)
 if ext=='glb':bpy.ops.import_scene.gltf(filepath=path)
 else:bpy.ops.import_scene.fbx(filepath=path)
 meshes=[o for o in bpy.data.objects if o.type=='MESH']
 coords=[o.matrix_world@Vector(c) for o in meshes for c in o.bound_box]
 bounds=[[min(p[k] for p in coords),max(p[k] for p in coords)] for k in range(3)]
 missing=[o.name for o in meshes if not o.data.uv_layers]
 invalid=[o.name for o in meshes if any(not math.isfinite(c) for v in o.data.vertices for c in v.co)]
 report[ext]={'file_bytes':os.path.getsize(path),'mesh_objects':len(meshes),'unique_meshes':len({o.data.name for o in meshes}),'materials':len(bpy.data.materials),'cameras':len([o for o in bpy.data.objects if o.type=='CAMERA']),'bounds_m':bounds,'missing_uv':missing,'invalid_coordinates':invalid,'image_textures':[{'name':im.name,'size':list(im.size),'packed':bool(im.packed_file)} for im in bpy.data.images],'example_tree_materials':next(([s.material.name for s in o.material_slots if s.material] for o in meshes if o.name.startswith('Alpine tree')),[])}
 assert len(meshes)>1000 and not missing and not invalid
 assert not any(o.name.startswith('Jumbotron') for o in bpy.data.objects)
 assert sum('seated spectator' in o.name for o in meshes)==6300
 report[ext]['spectators']=6300
 report[ext]['jumbotrons']=0
 assert max(b[1]-b[0] for b in bounds)<11.5
with open(os.path.join(OUT,'export_validation.json'),'w') as f:json.dump(report,f,indent=2)
print('EXPORTS_VERIFIED',json.dumps(report))
