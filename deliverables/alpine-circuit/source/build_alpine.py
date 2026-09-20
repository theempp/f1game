import bpy, math, random, os, json
import numpy as np
from mathutils import Vector
from mathutils.geometry import intersect_line_line_2d
random.seed(41)
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
for c in list(bpy.data.collections):
 if c.name!='Collection': bpy.data.collections.remove(c)
root=bpy.data.objects.new('Alpine Circuit Diorama',None); bpy.context.collection.objects.link(root)
groups={}
for name in ['01_Plinth','02_Track','03_Terrain','04_Trees_and_Shrubs','05_Safety_Barriers','06_Clear_Catch_Fencing','07_Curved_LED_Tunnel','08_Screens','09_Floodlights','10_Collision','11_Studio']:
 c=bpy.data.collections.new(name); bpy.context.scene.collection.children.link(c)
 p=bpy.data.objects.new(name,None); c.objects.link(p); p.parent=root; groups[name]=(c,p)
def put(o,g):
 for c in list(o.users_collection): c.objects.unlink(o)
 groups[g][0].objects.link(o); o.parent=groups[g][1]; return o
G=list(groups)
def mat(name,col,rough=.5,metal=0,texture=False,trans=0,emit=0):
 m=bpy.data.materials.new(name); m.diffuse_color=(*col,1); m.use_nodes=True
 n=m.node_tree.nodes; p=n.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*col,1); p.inputs['Roughness'].default_value=rough; p.inputs['Metallic'].default_value=metal
 if trans:
  p.inputs['Transmission Weight'].default_value=trans; p.inputs['IOR'].default_value=1.46
 if emit: p.inputs['Emission Color'].default_value=(*col,1); p.inputs['Emission Strength'].default_value=emit
 if texture:
  rng=np.random.default_rng(31); noise=rng.random((256,256)); noise=(noise-.5)*.32+1
  arr=np.ones((256,256,4),dtype=np.float32)
  for k in range(3): arr[:,:,k]=np.clip(col[k]*noise,0,1)
  im=bpy.data.images.new(name+'_Albedo',width=256,height=256); im.pixels.foreach_set(arr.ravel()); im.pack()
  t=n.new('ShaderNodeTexImage'); t.image=im; m.node_tree.links.new(t.outputs['Color'],p.inputs['Base Color'])
  arr[:,:,:3]=np.clip(rough+(noise[:,:,None]-1)*.4,0,1)
  ri=bpy.data.images.new(name+'_Roughness',width=256,height=256); ri.colorspace_settings.name='Non-Color'; ri.pixels.foreach_set(arr.ravel()); ri.pack()
  rt=n.new('ShaderNodeTexImage'); rt.image=ri; m.node_tree.links.new(rt.outputs['Color'],p.inputs['Roughness'])
 return m
asphalt=mat('Asphalt • charcoal aggregate',(.085,.095,.10),.87,texture=True)
red=mat('Kerb • vermilion paint',(.65,.018,.024),.4,texture=True); white=mat('Kerb • warm porcelain',(.85,.86,.82),.4,texture=True)
black=mat('Barrier • graphite polymer',(.025,.032,.034),.44); barrierred=mat('Barrier • red polymer',(.55,.014,.021),.32)
grass=mat('Alpine • clipped meadow',(.18,.28,.085),.94,texture=True)
rock=mat('Rock • weathered limestone',(.29,.27,.22),.95,texture=True)
metal=mat('Metal • satin aluminium',(.55,.60,.62),.27,.72)
dark=mat('Tunnel • architectural graphite',(.052,.061,.066),.67,texture=True)
plinth=mat('Plinth • black anodized',(.012,.016,.020),.3,.45)
glass=mat('Fence • clear polycarbonate',(.80,.94,.96),.1,trans=.93)
led=mat('LED • warm 3300K', (1,.78,.48),.22,emit=5)
screen=mat('Screen • smoked display',(.006,.018,.024),.25,.2)
cyan=mat('Screen • abstract cyan pixels',(.15,.8,.74),.3,emit=1.4)
trunk=mat('Tree • bark',(.14,.09,.043),.95,texture=True)
leaves=[mat('Foliage • '+str(i),col,.95,texture=True) for i,col in enumerate([(.045,.15,.082),(.07,.21,.12),(.18,.28,.075),(.24,.34,.11),(.12,.24,.18)])]
def mesh(name,vs,fs,mats,g,indices=None):
 me=bpy.data.meshes.new(name); me.from_pydata(vs,[],fs); me.update()
 o=bpy.data.objects.new(name,me); groups[g][0].objects.link(o); o.parent=groups[g][1]
 for m in mats: me.materials.append(m)
 uv=me.uv_layers.new(name='UVMap')
 for p in me.polygons:
  if indices: p.material_index=indices[p.index]
  normal=p.normal; axes=(0,1) if abs(normal.z)>.5 else ((0,2) if abs(normal.y)>.5 else (1,2))
  for li in p.loop_indices:
   v=me.vertices[me.loops[li].vertex_index].co; uv.data[li].uv=(v[axes[0]]*2,v[axes[1]]*2)
 return o
def cube(name,loc,dim,m,g,bevel=0):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc); o=bpy.context.object; o.name=name; o.dimensions=dim; bpy.ops.object.transform_apply(location=False,rotation=False,scale=True); o.data.materials.append(m); put(o,g)
 if bevel:
  mod=o.modifiers.new('Machined edge radius','BEVEL'); mod.width=bevel; mod.segments=3
  bpy.context.view_layer.objects.active=o; bpy.ops.object.modifier_apply(modifier=mod.name)
 return o
def cyl(name,a,b,r,m,g,verts=10):
 d=Vector(b)-Vector(a); bpy.ops.mesh.primitive_cylinder_add(vertices=verts,radius=r,depth=d.length,location=(Vector(a)+Vector(b))/2)
 o=bpy.context.object; o.name=name; o.rotation_euler=d.to_track_quat('Z','Y').to_euler(); o.data.materials.append(m); put(o,g); return o
cube('Black rectangular display plinth',(0,0,-.20),(10.7,17.4,.45),plinth,G[0],.12)
cube('Inset landscape tray',(0,0,.025),(10.42,17.10,.07),grass,G[2],.08)
cube('Plinth brushed reveal',(0,0,-.06),(10.65,17.35,.025),metal,G[0],.035)
# Continuous closed centerline, upper technical sequence and two over/under crossings.
ctrl=[(-4,-6,.17),(-4,-3,.17),(-4,0,.17),(-4,3.5,.17),(-4,6.3,.2),(-3.25,7.25,.3),(-2.1,6.9,.45),(-1.8,5.8,.6),(-2.1,4.9,.78),(-.9,4.35,.98),(.45,5.25,1.25),(.2,6.4,1.45),(1.25,7.1,1.55),(2.85,6.4,1.55),(3.65,4.65,1.5),(3.6,2.7,1.27),(3.5,.65,.8),(3.85,-1.7,.28),(3.65,-3.95,.18),(2.6,-4.7,.18),(1.45,-4.05,.22),(1.5,-2.9,.27),(2.1,-1.3,.35),(1.6,.25,.42),(.2,.85,.48),(-1.25,.6,.6),(-2,-.6,.75),(-1.5,-2,.95),(.05,-2.55,1.2),(1.8,-2.25,1.6),(4.15,-.9,2.1),(3.95,1.15,2.3),(1.25,2.45,2.3),(-.7,2.85,2.1),(-2.4,2.1,1.75),(-2.85,.3,1.3),(-2.85,-2.7,.8),(-2.2,-5,.35),(-.7,-6.2,.18),(1.6,-6.1,.18),(3.65,-5.6,.18),(4.25,-6.75,.18),(2.6,-7.65,.18),(-.1,-7.7,.18),(-2.9,-7.3,.17)]
C=np.array(ctrl); P=[]
for i in range(len(C)):
 a,b,c,d=[C[j%len(C)] for j in (i-1,i,i+1,i+2)]
 for t in np.linspace(0,1,16,endpoint=False): P.append(.5*((2*b)+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t))
P=np.array(P); N=len(P); tangent=np.roll(P,-1,axis=0)-np.roll(P,1,axis=0); norm=np.stack([-tangent[:,1],tangent[:,0],np.zeros(N)],axis=1); norm/=np.linalg.norm(norm,axis=1)[:,None]
length=np.r_[0,np.cumsum(np.linalg.norm(np.diff(P,axis=0),axis=1))]
def pt(i,off=0,z=0): return tuple(P[i%N]+norm[i%N]*off+np.array([0,0,z]))
def ribbon(name,left,right,z,mats,g,ids=None,thick=0):
 closed=ids is None or isinstance(ids,range)
 ids=list(range(N)) if ids is None else list(ids); closed=closed or len(ids)==N; vs=[]; fs=[]; mi=[]
 for i in ids: vs.extend([pt(i,left,z),pt(i,right,z)])
 for j in range(len(ids) if closed else len(ids)-1):
  k=(j+1)%len(ids); fs.append((2*j,2*j+1,2*k+1,2*k)); mi.append(int(length[ids[j]]/.22)%len(mats))
 if thick:
  n=len(vs); vs.extend([(x,y,h-thick) for x,y,h in vs.copy()])
  for j in range(len(ids) if closed else len(ids)-1):
   k=(j+1)%len(ids)
   fs.extend([(2*j,2*k,2*k+n,2*j+n),(2*j+1,2*j+1+n,2*k+1+n,2*k+1),(2*j+n,2*k+n,2*k+1+n,2*j+1+n)]); mi.extend([0,0,0])
 return mesh(name,vs,fs,mats,g,mi)
track=ribbon('Continuous drivable asphalt deck',-.38,.38,0,[asphalt],G[1],thick=.085)
for side in [-1,1]:
 ribbon('Trimmed grass verge '+str(side),side*.46,side*.62,-.03,[grass],G[2],thick=.065)
 ribbon('Alternating red white raised kerb '+str(side),side*.385,side*.46,.018,[red,white],G[1],thick=.045)
 ribbon('White edge paint '+str(side),side*.348,side*.356,.004,[white],G[1])
# Starting grid on long left straight.
for j in range(12):
 y=-4.65+j*.46; x=-4+(.18 if j%2 else -.18)
 cube('Grid box %02d'%j,(x,y,.176),(.23,.018,.006),white,G[1])
 cube('Grid tick %02d'%j,(x-.11,y-.07,.176),(.015,.14,.006),white,G[1])
for j in range(10):
 for k in range(3): cube('Finish checker',(-4-.342+j*.076,1.45+k*.076,.177),(.076,.076,.008),white if (j+k)%2 else black,G[1])
# Linked safety modules, curved runs conform to the road.
barrier_protos={}
for label,m in [('red',barrierred),('white',white),('black',black)]:
 o=cube('Barrier prototype '+label,(0,0,-20),(.27,.085,.16),m,G[4],.018); barrier_protos[label]=o
for side in [-1,1]:
 last=-1
 for i in range(N):
  if length[i]-last<.29: continue
  last=length[i]; label=['red','white','black','white'][int(length[i]/1.1)%4]; proto=barrier_protos[label]
  o=bpy.data.objects.new('Barrier_%s_%04d'%(side,i),proto.data); groups[G[4]][0].objects.link(o); o.parent=groups[G[4]][1]; o.location=pt(i,side*.565,.055); o.rotation_euler.z=math.atan2(tangent[i,1],tangent[i,0])
for o in barrier_protos.values(): bpy.data.objects.remove(o,do_unlink=True)
# Catch fencing at outside edges and elevated hazardous sectors.
postproto=cube('Post prototype',(0,0,-20),(.025,.025,.48),metal,G[5],.003)
for side in [-1,1]:
 selected=[i for i in range(0,N,5) if P[i,2]>.65 or (side==1 and i<80) or 18*16<i<22*16]
 for i in selected:
  j=(i+5)%N
  mesh('Clear fence pane %s %03d'%(side,i),[pt(i,side*.585,.12),pt(j,side*.585,.12),pt(j,side*.585,.55),pt(i,side*.585,.55)],[(0,1,2,3)],[glass],G[5])
  o=bpy.data.objects.new('Slim aluminium fence post',postproto.data); groups[G[5]][0].objects.link(o); o.parent=groups[G[5]][1]; o.location=pt(i,side*.59,.32)
  cyl('Fence top rail',pt(i,side*.59,.55),pt(j,side*.59,.55),.012,metal,G[5],6)
bpy.data.objects.remove(postproto,do_unlink=True)
# Graded grass banks support the upper alpine technical sector.
for side in [-1,1]:
 vs=[]; fs=[]
 for i in range(180,258):
  a=pt(i,side*.60,-.065); b=pt(i,side*.98,0); vs.extend([a,(b[0],b[1],.07)])
 for j in range(77): fs.append((j*2,j*2+1,j*2+3,j*2+2))
 mesh('Upper sector sculpted grass embankment '+str(side),vs,fs,[grass],G[2])
# Structural piers beneath elevated decks.
for i in range(135,580,20):
 if P[i,2]<.55: continue
 for side in [-1,1]:
  x,y,z=pt(i,side*.28,-.1)
  if any(np.linalg.norm(q[:2]-[x,y])<.48 and q[2]<z-.3 for q in P): continue
  cyl('Bridge pier %03d'%i,(x,y,.075),(x,y,z),.07,dark,G[2],8)
# Tunnel follows descending right curve, under crossing bridge.
tids=list(range(16*16,18*16+1))
for side in [-1,1]:
 ribbon('Tunnel wall cap',side*.48,side*.54,.70,[dark],G[6],ids=tids,thick=.69)
 ribbon('Warm floor edge guide',side*.435,side*.448,.045,[led],G[6],ids=tids)
# Panelized vaulted ceiling with three continuous curved recessed ribbons.
for k in range(0,len(tids)-1,2):
 i,j=tids[k],tids[min(k+2,len(tids)-1)]; vs=[]
 for idx in [i,j]:
  for a in np.linspace(0,math.pi,13): vs.append(pt(idx,math.cos(a)*.53,.68+math.sin(a)*.13))
 fs=[(a,a+1,14+a,13+a) for a in range(12)]
 mesh('Curved architectural ceiling panel %02d'%k,vs,fs,[dark],G[6])
for off in [-.27,0,.27]:
 z=.68+.13*math.sqrt(1-(off/.53)**2)-.008
 ribbon('Continuous warm recessed ceiling ribbon',off-.013,off+.013,z,[led],G[6],ids=tids)
for i in tids[::5]:
 for side in [-1,1]:
  a=pt(i,side*.478,.08); b=pt(i,side*.462,.36); c=pt(i,side*.478,.65)
  cyl('Angular luminous wall channel',a,b,.012,led,G[6],6); cyl('Angular luminous wall channel',b,c,.012,led,G[6],6)
# Portal frames.
for i in [tids[0],tids[-1]]:
 for s in [-1,1]: cyl('Portal upright',pt(i,s*.52,.0),pt(i,s*.52,.69),.035,metal,G[6])
 vs=[pt(i,math.cos(a)*.53,.68+math.sin(a)*.13) for a in np.linspace(0,math.pi,20)]
 for a,b in zip(vs,vs[1:]): cyl('Curved portal trim',a,b,.024,metal,G[6],8)
# Sculpted rocky central island. Geometry is deliberately faceted, layered natural stone.
def ico(name,loc,scale,m,g,sub=2):
 bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub,radius=1,location=loc); o=bpy.context.object; o.name=name
 for v in o.data.vertices: v.co*=random.uniform(.88,1.12)
 o.scale=scale; bpy.ops.object.transform_apply(location=False,rotation=False,scale=True); o.data.materials.append(m); put(o,g)
 # UVs on all organic assets for portable PBR.
 uv=o.data.uv_layers.new(name='UVMap')
 for p in o.data.polygons:
  for li in p.loop_indices:
   co=o.data.vertices[o.data.loops[li].vertex_index].co; uv.data[li].uv=(co.x*2,co.z*2+co.y)
 return o
ico('Central island grass foundation',(-.03,-.7,.3),(1.05,1.12,.37),grass,G[2],3)
for k in range(15):
 ang=random.random()*math.tau; r=random.random()*.66
 ico('Central limestone massif %02d'%k,(-.03+math.cos(ang)*r,-.7+math.sin(ang)*r,.42+random.random()*.6),(.35+random.random()*.35,.3+random.random()*.35,.35+random.random()*.45),rock,G[2],2)
# Stratified central summit rises above the inside hairpin.
for k in range(5):
 ico('Island summit stratum '+str(k),(-.15+.16*math.sin(k*2),-.65+.16*math.cos(k*2),.6+k*.22),(.69-k*.07,.65-k*.065,.35),rock,G[2],2)
# Reusable tree meshes; join components once, then share mesh data among planted instances.
def join(parts,name):
 bpy.ops.object.select_all(action='DESELECT')
 for o in parts:o.select_set(True)
 bpy.context.view_layer.objects.active=parts[0]; bpy.ops.object.join(); o=parts[0]; o.name=name
 bpy.context.scene.cursor.location=(0,0,0); bpy.ops.object.origin_set(type='ORIGIN_CURSOR'); return o
protos=[]
for kind in range(5):
 parts=[cyl('Bark trunk',(0,0,0),(0,0,1),.032,trunk,G[3],7)]
 if kind<2:
  for k in range(8):
   z=.3+k*.102; radius=.29*(1-k/9)
   bpy.ops.mesh.primitive_cone_add(vertices=11,radius1=radius,radius2=.015,depth=.36,location=(0,0,z+.16)); o=bpy.context.object; o.data.materials.append(leaves[kind]); put(o,G[3]); parts.append(o)
 else:
  for k in range(11):
   a=k*2.399; r=.21 if k<8 else .1; z=.63+random.random()*.35
   parts.append(ico('Leaf crown',(math.cos(a)*r,math.sin(a)*r,z),(.21,.20,.24),leaves[kind],G[3],2))
 o=join(parts,'Tree asset '+str(kind)); protos.append(o)
# Keep all planting clear of asphalt; low ground beneath upper decks stays visible.
placed=[]
for attempt in range(3800):
 x=random.uniform(-4.95,4.95); y=random.uniform(-8.12,8.1)
 dist=np.min(np.linalg.norm(P[:,:2]-[x,y],axis=1))
 if dist<.82 or any((x-a)**2+(y-b)**2<.27 for a,b in placed):continue
 if ((x+.03)/1.18)**2+((y+.7)/1.2)**2<1:continue
 if len(placed)>=190:break
 placed.append((x,y)); proto=protos[random.randrange(5)]; o=bpy.data.objects.new('Alpine tree %03d'%len(placed),proto.data); groups[G[3]][0].objects.link(o); o.parent=groups[G[3]][1]; o.location=(x,y,.065); s=random.uniform(.62,1.12); o.scale=(s,s,s); o.rotation_euler.z=random.random()*math.tau
for k,(x,y) in enumerate(placed[::3]):
 ico('Alpine shrub %03d'%k,(x+.19,y-.14,.17),(.21,.17,.16),leaves[2+k%3],G[3],1)
for k in range(5):
 proto=protos[k%2]; o=bpy.data.objects.new('Island summit evergreen '+str(k),proto.data); groups[G[3]][0].objects.link(o); o.parent=groups[G[3]][1]; o.location=(-.65+k*.28,-.55+random.random()*.35,1.6); o.scale=(.7,.7,.8)
# Seat summit trunks precisely on the rocky surface.
bpy.context.view_layer.update()
for tree in [o for o in bpy.data.objects if o.name.startswith('Island summit evergreen')]:
 heights=[]
 for stone in [o for o in bpy.data.objects if o.type=='MESH' and o.data.materials and o.data.materials[0]==rock]:
  origin=stone.matrix_world.inverted() @ Vector((tree.location.x,tree.location.y,10))
  hit,loc,normal,idx=stone.ray_cast(origin,Vector((0,0,-1)))
  if hit: heights.append((stone.matrix_world @ loc).z)
 if heights: tree.location.z=max(heights)-.015
for o in protos:bpy.data.objects.remove(o,do_unlink=True)
for k,(x,y) in enumerate(placed[::5]): ico('Landscape limestone outcrop '+str(k),(x+.23,y,.1),(.25,.21,.17),rock,G[2],1)
# Slim studio-scale floodlights with linked lamp heads.
head=cube('Lamp prototype',(0,0,-20),(.27,.14,.07),black,G[8],.015)
for k,i in enumerate(range(10,N,42)):
 x,y,z=pt(i,-.73,0); cyl('Floodlight pole %02d'%k,(x,y,.06),(x,y,z+1.35),.022,metal,G[8],10)
 cyl('Floodlight arm',(x,y,z+1.3),(x+.17,y,z+1.35),.018,metal,G[8],8)
 o=bpy.data.objects.new('Floodlight housing %02d'%k,head.data); groups[G[8]][0].objects.link(o); o.parent=groups[G[8]][1]; o.location=(x+.17,y,z+1.35)
 cube('Floodlight luminous diffuser',(x+.17,y,z+1.31),(.225,.11,.01),led,G[8])
bpy.data.objects.remove(head,do_unlink=True)
# Abstract unbranded LED boards, no type or advertising.
for k,i in enumerate([45,130,220,365,530,620]):
 x,y,z=pt(i,-.84,.75)
 cyl('Display mast %02d'%k,(x,y,.07),(x,y,z),.035,metal,G[7])
 cube('LED screen enclosure %02d'%k,(x,y,z),(.8,.08,.39),black,G[7],.022)
 cube('LED screen glass %02d'%k,(x,y-.048,z),(.74,.012,.33),screen,G[7])
 for a in range(8):
  cube('Abstract display bar',(x-.31+a*.085,y-.057,z-.105),(.043,.008,.06+.15*(.5+.5*math.sin(a*.8+k))),cyan if a%3 else white,G[7])
# Simplified collision surface and single combined major barrier shells, hidden by default.
col=ribbon('COLLISION_Track',-.38,.38,0,[asphalt],G[9],ids=range(0,N,2),thick=.06); col.hide_render=True; col.hide_set(True); col['collision']=True
for side in [-1,1]:
 o=ribbon('COLLISION_Barriers_'+str(side),side*.525,side*.61,.13,[black],G[9],ids=range(0,N,3),thick=.20); o.hide_render=True; o.hide_set(True); o['collision']=True
# All model coordinates become metres, leaving one clean origin-centred parent hierarchy.
for o in bpy.data.objects:
 if o.type=='MESH':
  # Shared data scaled exactly once below.
  o.location*=.25
for me in bpy.data.meshes:
 for v in me.vertices: v.co*=.25
scene=bpy.context.scene; scene.unit_settings.system='METRIC'; scene.unit_settings.scale_length=1
root['dimensions_m']='2.675 x 4.350'; root['design']='Alpine Circuit Diorama'; root['reference']='IMG_6818.jpeg course; TrackTunnel.jpg; RailingsRef.jpg'; root['scale']='Physical miniature, metres'; root['no_paid_generation']=True
# Camera and soft studio lights are separate from the asset hierarchy.
def camera(name,loc,target,ortho):
 bpy.ops.object.camera_add(location=loc); o=bpy.context.object; o.name=name; put(o,G[10]); o.rotation_euler=(Vector(target)-o.location).to_track_quat('-Z','Y').to_euler(); o.data.type='ORTHO'; o.data.ortho_scale=ortho; return o
cam=camera('Overview • high three-quarter', (5,-7,8),(0,0,.05),5.8); scene.camera=cam
camera('Overview • opposite three-quarter',(-5,7,7),(0,0,.1),5.8)
camera('Blueprint • overhead',(0,0,9),(0,0,0),4.9)
for name,loc,power,size in [('Key',(-3,-4,7),1600,5),('Fill',(4,-1,5),1000,4),('Rim',(1,5,6),1800,3)]:
 bpy.ops.object.light_add(type='AREA',location=loc); o=bpy.context.object; o.name='Studio '+name; o.data.energy=power; o.data.shape='DISK'; o.data.size=size; o.rotation_euler=(-o.location).to_track_quat('-Z','Y').to_euler(); put(o,G[10])
tunnelcam=camera('Tunnel • entry detail',(.97,-.53,.16),(.91,.02,.26),1.15)
tunnelcam.data.type='PERSP'; tunnelcam.data.lens=18; tunnelcam.data.clip_start=.003
scene.world.color=(.23,.23,.23)
scene.render.engine='CYCLES'; scene.cycles.samples=48; scene.cycles.use_denoising=True
scene.render.resolution_x=1500; scene.render.resolution_y=1800; scene.render.resolution_percentage=100
scene.view_settings.view_transform='AgX'
# Render backdrop is excluded from exports.
floor=cube('Preview only studio floor',(0,0,-.124),(200,200,.01),mat('Studio backdrop',(.16,.18,.20),.88),G[10])
# Save and export visible asset; collision meshes are in a separate optional file.
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.blend'))
bpy.ops.object.select_all(action='DESELECT')
for o in bpy.data.objects:
 if o!=floor and o.name not in groups[G[9]][0].objects and o.type not in {'LIGHT'}: o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.glb'),export_format='GLB',use_selection=True,export_cameras=True,export_lights=False,export_extras=True)
bpy.ops.export_scene.fbx(filepath=os.path.join(OUT,'Alpine_Circuit_Diorama.fbx'),use_selection=True,object_types={'EMPTY','MESH','CAMERA'},apply_unit_scale=True,bake_anim=False,path_mode='COPY',embed_textures=True,axis_forward='-Z',axis_up='Y')
bpy.ops.object.select_all(action='DESELECT')
for o in groups[G[9]][0].objects:
 if o.type=='MESH':o.hide_set(False);o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'Alpine_Circuit_Collision.glb'),export_format='GLB',use_selection=True,export_extras=True)
for o in groups[G[9]][0].objects:
 if o.type=='MESH':o.hide_set(True)
report={'mesh_objects':sum(o.type=='MESH' for o in bpy.data.objects),'unique_meshes':len(bpy.data.meshes),'triangles_unique':sum(sum(len(p.vertices)-2 for p in m.polygons) for m in bpy.data.meshes),'tree_instances':len(placed)+5,'materials':len(bpy.data.materials),'uv_missing':[o.name for o in bpy.data.objects if o.type=='MESH' and not o.data.uv_layers],'track_length_m':float(length[-1]*.25),'track_width_m':.19}
with open(os.path.join(OUT,'model_report.json'),'w') as f:json.dump(report,f,indent=2)
scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overview.png'); bpy.ops.render.render(write_still=True)
scene.camera=bpy.data.objects['Blueprint • overhead'];scene.render.resolution_x=1300;scene.render.resolution_y=1800;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Overhead.png');bpy.ops.render.render(write_still=True)
scene.camera=bpy.data.objects['Tunnel • entry detail'];scene.render.resolution_x=1400;scene.render.resolution_y=1000;scene.render.filepath=os.path.join(OUT,'Alpine_Circuit_Tunnel.png');bpy.ops.render.render(write_still=True)
print('ALPINE_COMPLETE',report)
