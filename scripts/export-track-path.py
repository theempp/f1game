import bpy,json
bpy.ops.wm.open_mainfile(filepath='/Users/zozo/Desktop/game/deliverables/alpine-circuit-v3/Alpine_Circuit_Diorama.blend')
o=bpy.data.objects['Continuous drivable asphalt deck']; v=o.data.vertices
# First half is the top ribbon; alternating vertices are its left/right edges.
points=[]
for i in range(0,len(v)//2,2):
 p=o.matrix_world@((v[i].co+v[i+1].co)/2)
 points.append([p.x*380+850,-p.y*380+650,p.z*380])
with open('/Users/zozo/Desktop/game/public/models/alpine-path.json','w') as f:json.dump(points,f)
print('PATH',len(points),points[0])
