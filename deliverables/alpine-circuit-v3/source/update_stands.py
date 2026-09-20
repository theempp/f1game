import bpy,os,math,random,json
from mathutils import Vector
random.seed(82)
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC=os.path.join(OUT,'source','Base_V2.blend')
bpy.ops.wm.open_mainfile(filepath=SRC)
col=bpy.data.collections['12_Grandstands_and_Crowds'];parent=bpy.data.objects['12_Grandstands_and_Crowds']
for o in list(col.objects):
 if o.type=='MESH':bpy.data.objects.remove(o,do_unlink=True)
for o in list(bpy.data.objects):
 if o.name.startswith('Jumbotron'):bpy.data.objects.remove(o,do_unlink=True)
# Expand the finished plinth to accommodate full-sized perimeter stands.
for name in ['Black rectangular display plinth','Inset landscape tray','Plinth brushed reveal']:
 o=bpy.data.objects[name];o.dimensions=(7.9,11.25,o.dimensions.z)
metal=bpy.data.materials['Metal • satin aluminium'];concrete=bpy.data.materials['Grandstand • light concrete'];seatmat=bpy.data.materials['Grandstand • muted blue seats'];skin=bpy.data.materials['Crowd • warm neutral skin'];black=bpy.data.materials['Barrier • graphite polymer']
shirts=[bpy.data.materials['Crowd clothing '+str(k)] for k in range(5)]
def put(o):
 for c in list(o.users_collection):c.objects.unlink(o)
 col.objects.link(o);o.parent=parent;return o
def box(name,loc,dim,mat):
 vs=[(x*dim[0]/2,y*dim[1]/2,z*dim[2]/2) for x,y,z in [(-1,-1,-1),(-1,-1,1),(-1,1,-1),(-1,1,1),(1,-1,-1),(1,-1,1),(1,1,-1),(1,1,1)]]
 fs=[(0,4,6,2),(1,3,7,5),(0,1,5,4),(2,6,7,3),(0,2,3,1),(4,5,7,6)]
 me=bpy.data.meshes.new(name);me.from_pydata(vs,[],fs);me.materials.append(mat);uv=me.uv_layers.new(name='UVMap')
 for face in me.polygons:
  for k,li in enumerate(face.loop_indices):uv.data[li].uv=[(0,0),(1,0),(1,1),(0,1)][k]
 o=bpy.data.objects.new(name,me);col.objects.link(o);o.parent=parent;o.location=loc;return o
def rod(name,a,b,r,mat):
 d=Vector(b)-Vector(a);bpy.ops.mesh.primitive_cylinder_add(vertices=6,radius=r,depth=d.length,location=(Vector(a)+Vector(b))/2);o=bpy.context.object;o.name=name;o.rotation_euler=d.to_track_quat('Z','Y').to_euler();o.data.materials.append(mat);return put(o)
def join(parts,name):
 bpy.ops.object.select_all(action='DESELECT')
 for o in parts:o.select_set(True)
 bpy.context.view_layer.objects.active=parts[0];bpy.ops.object.join();o=parts[0];o.name=name;bpy.context.scene.cursor.location=(0,0,0);bpy.ops.object.origin_set(type='ORIGIN_CURSOR');return o
# Spectators retain miniature human proportions rather than being stretched with the stands.
protos=[]
for k,m in enumerate(shirts):
 parts=[box('Torso',(0,0,.027),(.025,.018,.031),m)]
 bpy.ops.mesh.primitive_uv_sphere_add(segments=8,ring_count=4,radius=1,location=(0,-.001,.052));o=bpy.context.object;o.scale=(.010,.009,.012);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(skin);put(o);parts.append(o)
 for dx in [-.007,.007]:
  parts.append(rod('Thigh',(dx,0,.017),(dx,-.023,.014),.0045,black));parts.append(rod('Shin',(dx,-.023,.014),(dx,-.023,-.005),.004,black))
  parts.append(rod('Arm',(dx*2,0,.036),(dx*2,-.017,.019),.0035,m))
 protos.append(join(parts,'Crowd shared prototype '+str(k)))
# Each stand is 3x the original physical length and 3x the total railing height.
L=2.660625; H=.7875; depth=.9975
specs=[(-2.65,y,math.pi/2) for y in [-2.78,0,2.78]]+[(2.65,y,-math.pi/2) for y in [-2.78,0,2.78]]+[(-1.39,4.35,0),(1.39,4.35,0),(-1.39,-4.35,math.pi),(1.39,-4.35,math.pi)]
crowd=0
for si,(cx,cy,ang) in enumerate(specs):
 group=bpy.data.objects.new('Grandstand %02d • faces circuit'%(si+1),None);col.objects.link(group);group.parent=parent
 def world(x,y,z):return(cx+x*math.cos(ang)-y*math.sin(ang),cy+x*math.sin(ang)+y*math.cos(ang),z)
 def sb(name,x,y,z,dims,mat):
  o=box('Stand %02d '%(si+1)+name,world(x,y,z),dims,mat);o.rotation_euler.z=ang;o.parent=group;return o
 seats=[]
 for row in range(15):
  yy=row*depth/15;zz=.047+row*.045
  sb('terrace %02d'%row,0,yy,zz/2,(L,depth/15,zz),concrete)
  for ci in range(48):
   if ci in [11,12,23,24,35,36]:continue
   xx=-L/2+.036+ci*(L-.072)/47
   seats.append(sb('seat',xx,yy,zz+.008,(.040,.038,.012),seatmat))
   o=bpy.data.objects.new('Stand %02d seated spectator %04d'%(si+1,crowd),protos[random.randrange(5)].data);col.objects.link(o);o.parent=group;o.location=world(xx,yy,zz+.016);o.rotation_euler.z=ang+random.uniform(-.08,.08);crowd+=1
 # Combine seat geometry per section; spectators retain shared source meshes.
 o=join(seats,'Stand %02d • seats'%(si+1));o.parent=group
 for xx in [-L/2,L/2]:
  for row in [0,4,9,14]:
   yy=row*depth/15;zz=.047+row*.045
   o=rod('Stand %02d handrail post'%(si+1),world(xx,yy,zz),world(xx,yy,zz+.11),.005,metal);o.parent=group
  o=rod('Stand %02d side handrail'%(si+1),world(xx,0,.157),world(xx,14*depth/15,H),.006,metal);o.parent=group
 for xx in [-L/2,-L/4,0,L/4,L/2]:
  o=rod('Stand rear guardrail upright',world(xx,14*depth/15,.677),world(xx,14*depth/15,H),.005,metal);o.parent=group
 o=rod('Stand rear guardrail',world(-L/2,14*depth/15,H),world(L/2,14*depth/15,H),.006,metal);o.parent=group
 print('FINISHED_STAND',si+1,flush=True)
 group['length_m']=L;group['height_m']=H;group['facing']='toward circuit';group['spectators']=630
for o in protos:bpy.data.objects.remove(o,do_unlink=True)
root=bpy.data.objects['Alpine Circuit Diorama'];root['dimensions_m']='7.9 x 11.25';root['revision']='V3 • expanded inward-facing stadium stands, no Jumbotrons'
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
with open(os.path.join(OUT,'revision_report.json'),'w') as f:json.dump({'grandstands':len(specs),'stand_length_m':L,'stand_height_m':H,'size_multiplier_length_and_height':3,'spectators':crowd,'jumbotrons':0,'facing':'All fronts and seated spectators face inward toward the circuit'},f,indent=2)
scene.render.resolution_x=1700;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overview.png');bpy.ops.render.render(write_still=True)
scene.camera=bpy.data.objects['Blueprint • overhead'];scene.render.resolution_x=1500;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overhead.png');bpy.ops.render.render(write_still=True)
print('V3_COMPLETE')
