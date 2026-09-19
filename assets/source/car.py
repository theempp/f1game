import bpy, math, os
from mathutils import Vector
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
def mat(n,c,metal=0,rough=.35):
 m=bpy.data.materials.new(n); m.diffuse_color=(*c,1); m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*c,1); p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 return m
red=mat('Scarlet',(0.72,.018,.028),.3); black=mat('Rubber',(.015,.019,.021),0,.7); carbon=mat('Carbon',(.035,.045,.047),.4); white=mat('Ivory',(.92,.94,.86)); gold=mat('Tire marking',(.8,.9,.16)); visor=mat('Visor',(.015,.04,.065),.7); silver=mat('Machined metal',(.35,.4,.42),.8)
def box(n,loc,scale,m,bevel=.08):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=n;o.dimensions=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m)
 if bevel: mod=o.modifiers.new('Soft edges','BEVEL');mod.width=bevel;mod.segments=3;o.modifiers.new('Normals','WEIGHTED_NORMAL')
 return o
def sphere(n,loc,scale,m):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=32,ring_count=16,location=loc);o=bpy.context.object;o.name=n;o.scale=scale;o.data.materials.append(m);bpy.ops.object.shade_smooth();return o
def cyl(n,loc,r,depth,m):
 bpy.ops.mesh.primitive_cylinder_add(vertices=48,radius=r,depth=depth,location=loc,rotation=(math.pi/2,0,0));o=bpy.context.object;o.name=n;o.data.materials.append(m);o.modifiers.new('Edge','BEVEL').width=.025;o.modifiers.new('Normals','WEIGHTED_NORMAL');return o
box('Undertray',(0,0,.27),(3.7,1.3,.14),carbon)
box('Body',(.25,0,.54),(2.15,.95,.54),red,.2)
box('Nose',(-1.3,0,.46),(1.5,.36,.29),red,.12)
box('Front wing',(-1.83,0,.29),(.42,2.0,.12),carbon,.02)
box('Front scarlet plane',(-1.75,0,.38),(.26,1.93,.09),red,.02)
for y in [-.94,.94]:box('End plate',(-1.8,y,.38),(.55,.055,.36),red,.03)
box('Rear wing',(1.5,0,1.1),(.54,1.8,.14),red,.03)
for y in [-.82,.82]:box('Rear endplate',(1.5,y,1.03),(.62,.075,.5),carbon,.025)
for y in [-.45,.45]:box('Wing support',(1.43,y,.7),(.12,.1,.7),carbon,.02)
for y in [-.55,.55]:
 box('Sidepod',(.35,y,.55),(1.4,.45,.47),red,.12)
 box('Side stripe',(.3,y*1.405,.57),(.9,.014,.12),white,.008)
for x in [-1.1,1.1]:
 for y in [-.91,.91]:
  cyl('Tire',(x,y,.48),.48,.4,black);cyl('Rim',(x,y*1.23,.48),.29,.025,carbon);cyl('Hub',(x,y*1.25,.48),.09,.035,silver)
  for a in range(8):
   angle=a*math.tau/8
   o=box('Spoke',(x+math.cos(angle)*.16,y*1.25,.48+math.sin(angle)*.16),(.24,.028,.045),silver,.008);o.rotation_euler[1]=-angle
  bpy.ops.mesh.primitive_torus_add(major_radius=.37,minor_radius=.013,major_segments=48,minor_segments=8,location=(x,y*1.245,.48),rotation=(math.pi/2,0,0));bpy.context.object.data.materials.append(gold)
sphere('Cockpit',(-.05,0,.85),(.49,.39,.12),carbon)
sphere('Driver suit',(.07,0,.88),(.27,.28,.26),white)
sphere('Helmet',(.02,0,1.17),(.3,.29,.32),gold)
sphere('Visor',(-.18,0,1.2),(.16,.284,.12),visor)
box('Roll hoop',(.51,0,1.02),(.17,.3,.61),red,.08)
box('Racing stripe',(-1.2,0,.615),(1.05,.09,.012),white,.005)
# large studio lights; transparent asset for live garage stage
world=bpy.context.scene.world;world.color=(.25,.25,.25)
for loc,power,size in [((-3,-4,7),1500,5),((3,2,5),1100,4),((-1,4,3),900,3)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,.5))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(-5.7,-7.4,4.0));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,.6))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=5.9
s=bpy.context.scene;s.camera=cam;s.render.engine='CYCLES';s.cycles.samples=32;s.cycles.use_denoising=True;s.render.resolution_x=1400;s.render.resolution_y=950;s.render.resolution_percentage=100;s.render.film_transparent=True;s.render.image_settings.file_format='PNG';s.render.filepath=os.path.abspath('public/assets/car.png');s.view_settings.view_transform='AgX'
bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath('assets/source/car.blend'));bpy.ops.render.render(write_still=True)
