import ast, math, json
from pathlib import Path
s=ast.parse(Path(__file__).with_name('build_alpine.py').read_text())
c=next(ast.literal_eval(n.value) for n in s.body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='ctrl' for t in n.targets))
p=[]
for i in range(len(c)):
 a,b,d,e=[c[j%len(c)] for j in (i-1,i,i+1,i+2)]
 for k in range(16):
  t=k/16;p.append(tuple(.5*(2*b[v]+(-a[v]+d[v])*t+(2*a[v]-5*b[v]+4*d[v]-e[v])*t*t+(-a[v]+3*b[v]-3*d[v]+e[v])*t*t*t) for v in range(3)))
conflicts=[];crossings=[]
for i,a in enumerate(p):
 b=p[(i+1)%len(p)]
 for j in range(i+40,len(p)):
  if min(j-i,len(p)-(j-i))<40:continue
  c=p[j];d=p[(j+1)%len(p)]
  dist=math.hypot(a[0]-c[0],a[1]-c[1]); dz=abs(a[2]-c[2])
  if dist<.77 and dz<.72:conflicts.append((i,j))
  ux,uy=b[0]-a[0],b[1]-a[1];vx,vy=d[0]-c[0],d[1]-c[1]; den=ux*vy-uy*vx
  if abs(den)<1e-9:continue
  wx,wy=c[0]-a[0],c[1]-a[1];t=(wx*vy-wy*vx)/den;u=(wx*uy-wy*ux)/den
  if 0<=t<1 and 0<=u<1:
   za=a[2]+t*(b[2]-a[2]);zb=c[2]+u*(d[2]-c[2]);crossings.append({'xy':[round((a[0]+t*ux)*.35,3),round((a[1]+t*uy)*.4125,3)],'deck_separation_m':round(abs(za-zb)*.25,3)})
print(json.dumps({'close_road_conflicts':len(conflicts),'method':'Road conflict check in original design coordinates; planar expansion preserves disjointness. Crossing positions are expanded metres.','crossings':crossings},indent=2))
