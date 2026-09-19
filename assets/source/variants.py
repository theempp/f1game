import bpy,os,math
from mathutils import Vector
bpy.ops.wm.open_mainfile(filepath=os.path.abspath('assets/source/car.blend'))
s=bpy.context.scene
for o in bpy.data.objects:
 if o.type=='MESH':o.location.x*=1.1
 if o.name.startswith('Nose'):o.scale.x*=1.3
 if o.name.startswith('Sidepod'):o.scale.x*=1.12
 if o.name.startswith('Front scarlet'):o.data.materials.clear();o.data.materials.append(bpy.data.materials['Ivory'])
s.render.filepath=os.path.abspath('public/assets/car-1.png');bpy.ops.render.render(write_still=True)
for o in bpy.data.objects:
 if o.name.startswith('Rear wing'):o.scale.y*=1.15
 if o.name.startswith('Front wing'):o.scale.x*=1.4
# Modern halo around the cockpit, with a front central pillar.
bpy.ops.mesh.primitive_torus_add(major_radius=.39,minor_radius=.036,major_segments=48,minor_segments=10,location=(-.1,0,1.25));o=bpy.context.object;o.scale.x=1.5;o.data.materials.append(bpy.data.materials['Carbon'])
bpy.ops.mesh.primitive_cube_add(size=1,location=(-.65,0,1.01));o=bpy.context.object;o.dimensions=(.07,.07,.45);o.data.materials.append(bpy.data.materials['Carbon']);o.rotation_euler[1]=-.25
s.render.filepath=os.path.abspath('public/assets/car-2.png');bpy.ops.render.render(write_still=True)
