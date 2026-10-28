/* shell-core.js
   Shared geometry, scene definitions and 3D stage for the two Section 6.3 animations:
     wrap-the-rectangle.html  (in-class, follows the 6.3 handout)
     peel-the-solid.html      (pre-assignment playground + reflection)
   Needs three.js r128 and OrbitControls loaded first.

   Coordinates.  Every region is described twice, in axis-aligned coordinates:
     p = distance coordinate ACROSS the axis (x when the axis is vertical, y when horizontal)
     t = coordinate ALONG the axis          (y when the axis is vertical, x when horizontal)
   * Shell description:  p0 <= p <= p1,  lo(p) <= t <= hi(p)      (rectangle PARALLEL to the axis)
   * Washer description: t0 <= t <= t1,  plo(t) <= p <= phi(t)    (rectangle PERPENDICULAR to the axis)
   Radius of anything = |p - k|, where k is where the axis sits. */
(function(global){
'use strict';
const TAU = Math.PI*2, V = THREE.Vector3;
const sq = x => Math.sqrt(Math.max(0,x));
function inv(f,lo,hi,y){ let a=lo,b=hi; for(let i=0;i<60;i++){ const m=(a+b)/2; if(f(m)<y) a=m; else b=m; } return (a+b)/2; }
function simpson(f,a,b,n){ n=n||400; const h=(b-a)/n; let s=f(a)+f(b); for(let i=1;i<n;i++) s+=f(a+i*h)*(i%2?4:2); return s*h/3; }
const fmt = x => (Math.abs(x)<5e-4?0:x).toFixed(2);
const I = s => s; // scene text is written with <i> tags already

/* ------------------------------------------------------------------ scenes */
const SCENES = [
 { id:'hook', tab:'Hook', axis:{o:'v',k:0}, pn:'x', tn:'y', view:[0.8,0.5,1],
   title:'Region under <i>y</i> = <i>x</i>³ + <i>x</i> on [0, 1], about the <i>y</i>-axis',
   p0:0,p1:1, lo:p=>0, hi:p=>p*p*p+p,
   t0:0,t1:2, plo:t=>inv(x=>x*x*x+x,0,1,t), phi:t=>1,
   sh:{ rad:'<i>x</i>', hgt:'<i>x</i>³ + <i>x</i>', int:'2π∫<sub>0</sub><sup>1</sup> <i>x</i>(<i>x</i>³ + <i>x</i>) d<i>x</i>' },
   wa:{ R:'1', r:'<i>x</i>(<i>y</i>), where <i>x</i>³ + <i>x</i> = <i>y</i>', int:'π∫<sub>0</sub><sup>2</sup> [1 − <i>x</i>(<i>y</i>)²] d<i>y</i>', hard:true,
        why:'To write the inner radius we must solve <i>y</i> = <i>x</i>³ + <i>x</i> for <i>x</i>. Is that something we really want to do?' },
   exact:'16π/15',
   note:'Shells: the radius and the height are both easy to read off the picture. Washers: the inner radius means solving a cubic.',
   labels:[{html:'<i>y</i> = <i>x</i>³ + <i>x</i>', x:1.12, y:2.05}] },

 { id:'two', tab:'Two ways', axis:{o:'v',k:0}, pn:'x', tn:'y', view:[0.8,0.5,1],
   title:'Between <i>y</i> = <i>x</i> and <i>y</i> = <i>x</i>², about the <i>y</i>-axis',
   p0:0,p1:1, lo:p=>p*p, hi:p=>p,
   t0:0,t1:1, plo:t=>t, phi:t=>sq(t),
   sh:{ rad:'<i>x</i>', hgt:'<i>x</i> − <i>x</i>²', int:'2π∫<sub>0</sub><sup>1</sup> <i>x</i>(<i>x</i> − <i>x</i>²) d<i>x</i>' },
   wa:{ R:'√<i>y</i>', r:'<i>y</i>', int:'π∫<sub>0</sub><sup>1</sup> (<i>y</i> − <i>y</i>²) d<i>y</i>', hard:false },
   exact:'π/6',
   note:'Both methods work here, and they must agree. Different integrals, same volume.',
   labels:[{html:'<i>y</i> = <i>x</i>', x:1.12, y:1.0},{html:'<i>y</i> = <i>x</i>²', x:0.72, y:0.28}] },

 { id:'A', tab:'A', axis:{o:'v',k:0}, pn:'x', tn:'y', view:[0.8,0.5,1],
   title:'Under <i>y</i> = 4<i>x</i> − <i>x</i>², above <i>y</i> = 0, about the <i>y</i>-axis',
   p0:0,p1:4, lo:p=>0, hi:p=>4*p-p*p,
   t0:0,t1:4, plo:t=>2-sq(4-t), phi:t=>2+sq(4-t),
   sh:{ rad:'<i>x</i>', hgt:'4<i>x</i> − <i>x</i>²', int:'2π∫<sub>0</sub><sup>4</sup> <i>x</i>(4<i>x</i> − <i>x</i>²) d<i>x</i>' },
   wa:{ R:'2 + √(4 − <i>y</i>)', r:'2 − √(4 − <i>y</i>)', int:'π∫<sub>0</sub><sup>4</sup> [(2 + √(4−<i>y</i>))² − (2 − √(4−<i>y</i>))²] d<i>y</i>', hard:true,
        why:'Both radii come from solving a quadratic for <i>x</i>. It can be done, but it is more work.' },
   exact:'128π/3',
   note:'Shell-friendly: one rectangle, radius <i>x</i>, height straight off the parabola.',
   labels:[{html:'<i>y</i> = 4<i>x</i> − <i>x</i>²', x:3.35, y:2.1}] },

 { id:'B', tab:'B', axis:{o:'v',k:5}, pn:'x', tn:'y', view:[0.35,1,0.8],
   title:'Under <i>y</i> = <i>x</i> − <i>x</i>², above <i>y</i> = 0, about the line <i>x</i> = 5',
   p0:0,p1:1, lo:p=>0, hi:p=>p-p*p,
   t0:0,t1:0.25, plo:t=>(1-sq(1-4*t))/2, phi:t=>(1+sq(1-4*t))/2,
   sh:{ rad:'5 − <i>x</i>', hgt:'<i>x</i> − <i>x</i>²', int:'2π∫<sub>0</sub><sup>1</sup> (5 − <i>x</i>)(<i>x</i> − <i>x</i>²) d<i>x</i>' },
   wa:{ R:'5 − ½(1 − √(1−4<i>y</i>))', r:'5 − ½(1 + √(1−4<i>y</i>))', int:'π∫<sub>0</sub><sup>1/4</sup> (<i>R</i>² − <i>r</i>²) d<i>y</i>', hard:true,
        why:'Again we must solve a quadratic for <i>x</i>, and then measure each answer from the line <i>x</i> = 5.' },
   exact:'3π/2',
   note:'The radius is the distance to the axis, 5 − <i>x</i>. It is not simply <i>x</i>.',
   labels:[{html:'<i>y</i> = <i>x</i> − <i>x</i>²', x:0.5, y:0.5}] },

 { id:'C', tab:'C', axis:{o:'h',k:0}, pn:'y', tn:'x', view:[0.55,0.7,1],
   title:'Between <i>x</i> = <i>y</i>², <i>x</i> = 4 and <i>y</i> = 0, about the <i>x</i>-axis',
   p0:0,p1:2, lo:p=>p*p, hi:p=>4,
   t0:0,t1:4, plo:t=>0, phi:t=>sq(t),
   sh:{ rad:'<i>y</i>', hgt:'4 − <i>y</i>²', int:'2π∫<sub>0</sub><sup>2</sup> <i>y</i>(4 − <i>y</i>²) d<i>y</i>' },
   wa:{ R:'√<i>x</i>', r:'0', int:'π∫<sub>0</sub><sup>4</sup> <i>x</i> d<i>x</i>', hard:false },
   exact:'8π',
   note:'About the <i>x</i>-axis, shell rectangles run horizontally and are measured in <i>y</i>. Disks happen to be easy here too.',
   labels:[{html:'<i>x</i> = <i>y</i>²', x:0.8, y:1.2},{html:'<i>x</i> = 4', x:4.35, y:1.0}] },

 { id:'c1', tab:'Choose 1', axis:{o:'v',k:0}, pn:'x', tn:'y', view:[0.8,0.5,1],
   title:'Under <i>y</i> = e<sup><i>x</i>²</sup> on [0, 1], about the <i>y</i>-axis',
   p0:0,p1:1, lo:p=>0, hi:p=>Math.exp(p*p),
   t0:0,t1:Math.E, plo:t=>t<1?0:sq(Math.log(t)), phi:t=>1,
   sh:{ rad:'<i>x</i>', hgt:'e<sup><i>x</i>²</sup>', int:'2π∫<sub>0</sub><sup>1</sup> <i>x</i> e<sup><i>x</i>²</sup> d<i>x</i>' },
   wa:{ R:'1', r:'0 for <i>y</i> ≤ 1, √(ln <i>y</i>) for <i>y</i> ≥ 1', int:'π∫<sub>0</sub><sup>1</sup> 1 d<i>y</i> + π∫<sub>1</sub><sup><i>e</i></sup> (1 − ln <i>y</i>) d<i>y</i>', hard:true,
        why:'Washers need <i>x</i> in terms of <i>y</i>, which means a logarithm, and a split into two pieces.' },
   exact:'π(e − 1)',
   note:'Shells give us exactly the <i>x</i>·e<sup><i>x</i>²</sup> that a substitution loves.',
   labels:[{html:'<i>y</i> = e<sup><i>x</i>²</sup>', x:1.18, y:2.6}] },

 { id:'c2', tab:'Choose 2', axis:{o:'h',k:0}, pn:'y', tn:'x', view:[0.55,0.7,1],
   title:'Under <i>y</i> = √<i>x</i> on [0, 1], about the <i>x</i>-axis',
   p0:0,p1:1, lo:p=>p*p, hi:p=>1,
   t0:0,t1:1, plo:t=>0, phi:t=>sq(t),
   sh:{ rad:'<i>y</i>', hgt:'1 − <i>y</i>²', int:'2π∫<sub>0</sub><sup>1</sup> <i>y</i>(1 − <i>y</i>²) d<i>y</i>' },
   wa:{ R:'√<i>x</i>', r:'0', int:'π∫<sub>0</sub><sup>1</sup> <i>x</i> d<i>x</i>', hard:false },
   exact:'π/2',
   note:'Disks: one rectangle per <i>x</i>, radius √<i>x</i>, nothing to solve. Shells would need <i>x</i> = <i>y</i>².',
   labels:[{html:'<i>y</i> = √<i>x</i>', x:0.7, y:1.0}] },

 { id:'c3', tab:'Choose 3', axis:{o:'v',k:2}, pn:'x', tn:'y', view:[0.4,0.9,0.9],
   title:'Under <i>y</i> = <i>x</i> − <i>x</i>², above <i>y</i> = 0, about the line <i>x</i> = 2',
   p0:0,p1:1, lo:p=>0, hi:p=>p-p*p,
   t0:0,t1:0.25, plo:t=>(1-sq(1-4*t))/2, phi:t=>(1+sq(1-4*t))/2,
   sh:{ rad:'2 − <i>x</i>', hgt:'<i>x</i> − <i>x</i>²', int:'2π∫<sub>0</sub><sup>1</sup> (2 − <i>x</i>)(<i>x</i> − <i>x</i>²) d<i>x</i>' },
   wa:{ R:'2 − ½(1 − √(1−4<i>y</i>))', r:'2 − ½(1 + √(1−4<i>y</i>))', int:'π∫<sub>0</sub><sup>1/4</sup> (<i>R</i>² − <i>r</i>²) d<i>y</i>', hard:true,
        why:'Solving for <i>x</i> gives a square root, and then both answers are measured from <i>x</i> = 2.' },
   exact:'π/2',
   note:'One rectangle, radius 2 − <i>x</i>, height <i>x</i> − <i>x</i>². Shells keep the algebra short.',
   labels:[{html:'<i>y</i> = <i>x</i> − <i>x</i>²', x:0.5, y:0.45}] }
];

/* Plain-language solids for the pre-assignment page. */
const PEEL = [
 { id:'funnel', tab:'Funnel', axis:{o:'v',k:0}, pn:'x', tn:'y', view:[0.8,0.5,1],
   what:'A solid can with a funnel carved into its top. The middle is shallow and the edge is tall.',
   p0:0,p1:1, lo:p=>0, hi:p=>p*p*p+p,
   t0:0,t1:2, plo:t=>inv(x=>x*x*x+x,0,1,t), phi:t=>1, labels:[] },
 { id:'bowl', tab:'Bowl', axis:{o:'v',k:0}, pn:'x', tn:'y', view:[0.8,0.2,1],
   what:'A bowl of soup. It is deepest in the middle and gets shallow toward the rim.',
   p0:0,p1:1, lo:p=>p*p, hi:p=>1,
   t0:0,t1:1, plo:t=>0, phi:t=>sq(t), labels:[] },
 { id:'ring', tab:'Ring', axis:{o:'v',k:2}, pn:'x', tn:'y', view:[0.4,0.9,0.9],
   what:'A thin ring, like a doughnut that has been pressed flat. The empty hole is in the middle.',
   p0:0,p1:1, lo:p=>0, hi:p=>p-p*p,
   t0:0,t1:0.25, plo:t=>(1-sq(1-4*t))/2, phi:t=>(1+sq(1-4*t))/2, labels:[] }
];

function prepare(sc){
  const k = sc.axis.k, vert = sc.axis.o==='v';
  sc.k = k; sc.vert = vert;
  sc.rad = p => Math.abs(p-k);
  sc.washRR = t => { const a=sc.rad(sc.plo(t)), b=sc.rad(sc.phi(t)); return [Math.max(a,b), Math.min(a,b)]; };
  sc.vShell = simpson(p=>TAU*sc.rad(p)*(sc.hi(p)-sc.lo(p)), sc.p0, sc.p1, 4000);
  sc.vWash  = simpson(t=>{ const [R,r]=sc.washRR(t); return Math.PI*(R*R-r*r); }, sc.t0, sc.t1, 4000);
  let Rm=0, Hm=0;
  for(let i=0;i<=80;i++){ const p=sc.p0+(sc.p1-sc.p0)*i/80; Rm=Math.max(Rm,sc.rad(p)); Hm=Math.max(Hm,sc.hi(p)-sc.lo(p)); }
  sc.Rmax=Rm; sc.Hmax=Hm;
  sc.bbox = vert ? { x0:Math.min(sc.p0,k,0), x1:Math.max(sc.p1,k,0), y0:Math.min(sc.t0,0), y1:Math.max(sc.t1,0) }
                 : { x0:Math.min(sc.t0,0), x1:Math.max(sc.t1,0), y0:Math.min(sc.p0,k,0), y1:Math.max(sc.p1,k,0) };
  const tm=(sc.t0+sc.t1)/2;
  sc.center = vert ? new V(k,tm,0) : new V(tm,k,0);
  sc.fitRad = Math.sqrt(Rm*Rm + Math.pow((sc.t1-sc.t0)/2,2))*1.05;
  sc.lw = Math.max(sc.bbox.x1-sc.bbox.x0, sc.bbox.y1-sc.bbox.y0)*0.006;
  return sc;
}
SCENES.forEach(prepare); PEEL.forEach(prepare);

/* ------------------------------------------------------------ rotation maps */
// point of the plane region at (p across, t along), rotated phi about the axis
function rotPT(sc,p,t,phi){
  const d=p-sc.k, c=Math.cos(phi), s=Math.sin(phi);
  return sc.vert ? new V(sc.k+d*c, t, -d*s) : new V(t, sc.k+d*c, d*s);
}
const axisPt = (sc,t) => sc.vert ? new V(sc.k,t,0) : new V(t,sc.k,0);
const tauDir = sc => sc.vert ? new V(1,0,0) : new V(0,1,0);

/* ---------------------------------------------------------------- geometry */
function grid(nu,nv,f){
  const pos=new Float32Array((nu+1)*(nv+1)*3), idx=[]; let q=0;
  for(let i=0;i<=nu;i++) for(let j=0;j<=nv;j++){ const v=f(i/nu,j/nv); pos[q++]=v.x; pos[q++]=v.y; pos[q++]=v.z; }
  for(let i=0;i<nu;i++) for(let j=0;j<nv;j++){ const a=i*(nv+1)+j, b=a+nv+1; idx.push(a,b,a+1, b,b+1,a+1); }
  const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pos,3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
// Sweep {a<=u<=b, L(u)<=s<=U(u)} through angle th with point map P(u,s,phi).
function sweep(P,a,b,L,U,th,mat,faceMat,nu){
  const g=new THREE.Group(), nt=Math.max(2,Math.ceil(72*th/TAU)), m=(geo,mm)=>g.add(new THREE.Mesh(geo,mm));
  if(th>1e-3){
    m(grid(nu,nt,(p,q)=>{const u=a+(b-a)*p; return P(u,U(u),th*q);}),mat);
    m(grid(nu,nt,(p,q)=>{const u=a+(b-a)*p; return P(u,L(u),th*q);}),mat);
    m(grid(3,nt,(p,q)=>P(a,L(a)+(U(a)-L(a))*p,th*q)),mat);
    m(grid(3,nt,(p,q)=>P(b,L(b)+(U(b)-L(b))*p,th*q)),mat);
  }
  if(faceMat!==false){
    const face=(phi)=>grid(nu,3,(p,q)=>{const u=a+(b-a)*p; return P(u,L(u)+(U(u)-L(u))*q,phi);});
    m(face(0),faceMat||mat);
    if(th>1e-3 && th<TAU-1e-3) m(face(th),faceMat||mat);
  }
  return g;
}
function rod(p,q,r,mat){
  const d=q.clone().sub(p), len=d.length(); if(len<1e-6) return new THREE.Group();
  const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,len,10),mat);
  mesh.position.copy(p).add(q).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new V(0,1,0),d.normalize()); return mesh;
}
function dashed(p,q,r,mat,seg){
  const g=new THREE.Group(), n=Math.max(2,Math.round(p.distanceTo(q)/seg));
  for(let i=0;i<n;i+=2) g.add(rod(p.clone().lerp(q,i/n),p.clone().lerp(q,Math.min(1,(i+1)/n)),r,mat));
  return g;
}
function tube(pts,r,mat){ return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),Math.max(8,pts.length*2),r,8,false),mat); }
function disposeGroup(g){ g.traverse(o=>{ if(o.geometry) o.geometry.dispose(); }); while(g.children.length) g.remove(g.children[0]); }
const lineG=(p,q,mat)=>new THREE.Line(new THREE.BufferGeometry().setFromPoints([p,q]),mat);

/* One shell, cut along the back seam and unrolled by fraction w (0 = closed tube, 1 = flat slab).
   The sheet keeps its front-middle point fixed and flattens into the tangent plane there. */
function unrolledShell(sc,pc,dp,w,mat){
  const r=sc.rad(pc), L=TAU*r, lo=sc.lo(pc), hi=sc.hi(pc);
  const kap=Math.max(TAU*(1-w)/L,1e-7), T=tauDir(sc), Z=new V(0,0,1);
  function X(sf,n,tf){
    const s=(sf-0.5)*L, a=s*kap, t=lo+(hi-lo)*tf;
    const tauC=Math.sin(a)/kap+n*Math.sin(a), zC=r+(Math.cos(a)-1)/kap+n*Math.cos(a);
    return axisPt(sc,t).add(T.clone().multiplyScalar(tauC)).add(Z.clone().multiplyScalar(zC));
  }
  const g=new THREE.Group(), add=geo=>g.add(new THREE.Mesh(geo,mat)), ns=Math.max(24,Math.ceil(72*(1-w)+24));
  add(grid(ns,2,(i,j)=>X(i, dp/2,j)));
  add(grid(ns,2,(i,j)=>X(i,-dp/2,j)));
  add(grid(ns,2,(i,j)=>X(i,-dp/2+dp*j,1)));
  add(grid(ns,2,(i,j)=>X(i,-dp/2+dp*j,0)));
  add(grid(2,2,(i,j)=>X(0,-dp/2+dp*i,j)));
  add(grid(2,2,(i,j)=>X(1,-dp/2+dp*i,j)));
  g.userData.X = X; g.userData.r=r; g.userData.L=L; g.userData.h=hi-lo;
  return g;
}

/* ------------------------------------------------------- piece bookkeeping */
// st: { method:'shell'|'washer', pos:0..1, dpf:0..1, ... }
function pieceParams(sc,st){
  const shell = st.method==='shell';
  const a = shell?sc.p0:sc.t0, b = shell?sc.p1:sc.t1, span=b-a;
  const d = span*(0.012+0.14*st.dpf);
  const c = a + d/2 + (span-d)*st.pos;
  if(shell){
    const lo=sc.lo(c), hi=sc.hi(c), r=sc.rad(c), h=hi-lo;
    return { shell:true, c, d, lo, hi, r, h, around:TAU*r, dV:TAU*r*h*d };
  }
  const pl=sc.plo(c), ph=sc.phi(c), [R,r]=sc.washRR(c);
  return { shell:false, c, d, pl, ph, R, r, dV:Math.PI*(R*R-r*r)*d };
}
function sumStack(sc,method,n){
  let s=0;
  if(method==='shell'){ const h=(sc.p1-sc.p0)/n; for(let i=0;i<n;i++){ const p=sc.p0+(i+.5)*h; s+=TAU*sc.rad(p)*(sc.hi(p)-sc.lo(p))*h; } }
  else { const h=(sc.t1-sc.t0)/n; for(let i=0;i<n;i++){ const t=sc.t0+(i+.5)*h, [R,r]=sc.washRR(t); s+=Math.PI*(R*R-r*r)*h; } }
  return s;
}

/* ------------------------------------------------------------------- stage */
function makeStage(canvas, box, labelsEl){
  const tok = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim() || '#888';
  const renderer=new THREE.WebGLRenderer({canvas, antialias:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(38,1,0.01,500);
  const controls=new THREE.OrbitControls(camera, canvas);
  controls.enableDamping=true; controls.dampingFactor=0.08;
  scene.add(new THREE.HemisphereLight(0xffffff,0x667080,0.75));
  const dl=new THREE.DirectionalLight(0xffffff,0.55); dl.position.set(3,5,6); scene.add(dl);
  const dl2=new THREE.DirectionalLight(0xffffff,0.25); dl2.position.set(-4,-2,-5); scene.add(dl2);
  const dbl={side:THREE.DoubleSide};
  const M={
    solid:new THREE.MeshPhongMaterial({transparent:true,opacity:0.42,side:THREE.DoubleSide,depthWrite:false,shininess:50}),
    face:new THREE.MeshPhongMaterial({transparent:true,opacity:0.75,side:THREE.DoubleSide,depthWrite:false,shininess:20}),
    ghost:new THREE.MeshPhongMaterial({transparent:true,opacity:0.10,side:THREE.DoubleSide,depthWrite:false}),
    slice:new THREE.MeshPhongMaterial({side:THREE.DoubleSide,shininess:60}),
    slabA:new THREE.MeshPhongMaterial({side:THREE.DoubleSide,shininess:40}),
    slabB:new THREE.MeshPhongMaterial({side:THREE.DoubleSide,shininess:40}),
    curve:new THREE.MeshBasicMaterial(), axis:new THREE.MeshBasicMaterial(),
    rad:new THREE.MeshBasicMaterial(), hgt:new THREE.MeshBasicMaterial(),
    grid:new THREE.LineBasicMaterial({transparent:true,opacity:0.55})
  };
  const S={ renderer, scene, camera, controls, M, box, tok, labelsEl, labs:{}, onTheme:null,
            staticG:new THREE.Group(), dynG:new THREE.Group(), lw:0.01 };
  scene.add(S.staticG,S.dynG);
  S.applyTheme=function(){
    scene.background=new THREE.Color(tok('--stage'));
    M.solid.color.set(tok('--solid')); M.face.color.set(tok('--solid')); M.ghost.color.set(tok('--solid'));
    M.slice.color.set(tok('--slice')); M.rad.color.set(tok('--slice')); M.hgt.color.set(tok('--good'));
    M.slabA.color.set(tok('--slab')); M.slabB.color.set(tok('--slab2'));
    M.curve.color.set(tok('--curve')); M.axis.color.set(tok('--axis')); M.grid.color.set(tok('--muted'));
    if(S.onTheme) S.onTheme();
  };
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',S.applyTheme);
  new MutationObserver(S.applyTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  S.resize=function(){ const w=box.clientWidth,h=box.clientHeight; if(!w||!h) return; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); };
  new ResizeObserver(S.resize).observe(box);
  S.fitTo=function(center,rad,dir){
    const dist=rad/Math.sin(camera.fov*Math.PI/360)*1.25;
    controls.target.copy(center); camera.position.copy(center).add(dir.clone().normalize().multiplyScalar(dist));
    camera.near=dist/100; camera.far=dist*20; camera.updateProjectionMatrix(); controls.update();
  };
  S.fit=function(sc){ S.fitTo(sc.center, sc.fitRad, new V(sc.view[0],sc.view[1],sc.view[2])); };
  S.fitBox=function(center,halfW,halfH,dir){
    const t=Math.tan(camera.fov*Math.PI/360), dist=Math.max(halfH,halfW/camera.aspect)/t*1.12;
    controls.target.copy(center); camera.position.copy(center).add(dir.clone().normalize().multiplyScalar(dist));
    camera.near=dist/100; camera.far=dist*20; camera.updateProjectionMatrix(); controls.update();
  };
  S.fitFlat=function(sc){ const bb=sc.bbox;
    const ry=bb.y1-bb.y0; S.fitBox(new V((bb.x0+bb.x1)/2,(bb.y0+bb.y1)/2-0.06*ry,0),(bb.x1-bb.x0)/2*1.3+sc.lw*12,ry/2*1.5+sc.lw*12,new V(0.1,0.08,1)); };
  // labels projected from 3D
  S.mkLabel=function(key,cls,html){ const el=document.createElement('div'); el.className='lab '+cls; el.innerHTML=html; labelsEl.appendChild(el); S.labs[key]={el,pos:null}; return S.labs[key]; };
  S.setLabel=function(key,pos,html){ const L=S.labs[key]; if(!L) return; L.pos=pos||null; if(html!==undefined) L.el.innerHTML=html; };
  const tmp=new V();
  S.placeLabels=function(){
    const w=box.clientWidth,h=box.clientHeight;
    for(const k in S.labs){ const L=S.labs[k]; if(!L.pos){L.el.hidden=true;continue;}
      tmp.copy(L.pos).project(camera); if(tmp.z>1){L.el.hidden=true;continue;}
      L.el.hidden=false; L.el.style.left=((tmp.x+1)/2*w)+'px'; L.el.style.top=((1-tmp.y)/2*h)+'px'; }
  };
  S.mkLabel('axis','axis','axis of rotation'); S.mkLabel('gx','coord','<i>x</i>'); S.mkLabel('gy','coord','<i>y</i>');
  S.curveLabs=[];
  S.render=function(){ S.controls.update(); S.renderer.render(scene,camera); S.placeLabels(); };
  return S;
}

/* Everything that does not move: coordinate axes, axis of rotation, region outline. */
function buildStatic(S,sc){
  const {M}=S; disposeGroup(S.staticG);
  const bb=sc.bbox, pad=0.14*Math.max(bb.x1-bb.x0,bb.y1-bb.y0), lw=sc.lw; S.lw=lw;
  S.staticG.add(lineG(new V(bb.x0-pad,0,0),new V(bb.x1+pad,0,0),M.grid), lineG(new V(0,bb.y0-pad,0),new V(0,bb.y1+pad,0),M.grid));
  const a0=sc.vert?axisPt(sc,bb.y0-pad):axisPt(sc,bb.x0-pad), a1=sc.vert?axisPt(sc,bb.y1+pad):axisPt(sc,bb.x1+pad);
  S.staticG.add(dashed(a0,a1,lw*0.9,M.axis,lw*5));
  const pts=f=>{ const a=[]; for(let i=0;i<=60;i++){ const p=sc.p0+(sc.p1-sc.p0)*i/60; a.push(rotPT(sc,p,f(p),0)); } return a; };
  S.staticG.add(tube(pts(sc.hi),lw*1.0,M.curve));
  S.staticG.add(tube(pts(sc.lo),lw*1.0,M.curve));
  [sc.p0,sc.p1].forEach(p=>S.staticG.add(rod(rotPT(sc,p,sc.lo(p),0),rotPT(sc,p,sc.hi(p),0),lw*0.7,M.curve)));
  // labels
  S.curveLabs.forEach(k=>{ S.labs[k].el.remove(); delete S.labs[k]; }); S.curveLabs=[];
  (sc.labels||[]).forEach((L,i)=>{ const k='c'+i; S.mkLabel(k,'curve',L.html); S.curveLabs.push(k); S.labs[k].pos=new V(L.x,L.y,0); });
  S.axisPos = sc.vert ? new V(sc.k, bb.y0-pad*0.75, 0) : new V(bb.x0-pad*0.2, sc.k-lw*18, 0);
  S.setLabel('axis', S.axisPos);
  S.setLabel('gx', new V(bb.x1+pad*1.1, 0, 0)); S.setLabel('gy', new V(0, bb.y1+pad*1.1, 0));
}

/* The moving part.  Returns label anchors in S.dim for the page to caption.
   st = { theta, w, pos, dpf, method, n, showSolid, showPiece } */
function buildDyn(S,sc,st){
  const {M}=S, lw=S.lw; disposeGroup(S.dynG); S.dim={};
  const th=st.theta, PS=(u,s,ph)=>rotPT(sc,u,s,ph), PW=(u,s,ph)=>rotPT(sc,s,u,ph);
  const info=pieceParams(sc,st);
  if(st.n>0){
    const n=st.n;
    if(st.method==='shell'){
      const h=(sc.p1-sc.p0)/n;
      for(let i=0;i<n;i++){ const a=sc.p0+i*h, mid=a+h/2, Lc=sc.lo(mid), Uc=sc.hi(mid);
        S.dynG.add(sweep(PS,a,a+h,()=>Lc,()=>Uc,th,i%2?M.slabB:M.slabA,i%2?M.slabB:M.slabA,3)); }
    } else {
      const h=(sc.t1-sc.t0)/n;
      for(let i=0;i<n;i++){ const a=sc.t0+i*h, mid=a+h/2, Lc=sc.plo(mid), Uc=sc.phi(mid);
        S.dynG.add(sweep(PW,a,a+h,()=>Lc,()=>Uc,th,i%2?M.slabB:M.slabA,i%2?M.slabB:M.slabA,3)); }
    }
    if(st.showSolid) S.dynG.add(sweep(PS,sc.p0,sc.p1,sc.lo,sc.hi,th,M.ghost,M.ghost,56));
  } else if(st.showSolid){
    S.dynG.add(sweep(PS,sc.p0,sc.p1,sc.lo,sc.hi,th,M.solid,M.face,56));
    if(th>0.01 && th<TAU-0.01){
      const edge=f=>{ const a=[]; for(let i=0;i<=50;i++){ const p=sc.p0+(sc.p1-sc.p0)*i/50; a.push(rotPT(sc,p,f(p),th)); } return a; };
      S.dynG.add(tube(edge(sc.hi),lw*0.6,M.curve)); S.dynG.add(tube(edge(sc.lo),lw*0.6,M.curve));
    }
  }
  if(st.showPiece && st.n===0){
    const c=info.c, d=info.d;
    if(info.shell){
      const tm=(info.lo+info.hi)/2;
      if(st.w>0.002){
        const u=unrolledShell(sc,c,d,st.w,M.slice); S.dynG.add(u);
        if(st.w>0.9){
          const X=u.userData.X;
          S.dim.h = X(0,0,0.5); S.dim.around = X(0.5,d/2,0); S.dim.thick = X(1,0,1);
        }
      } else {
        S.dynG.add(sweep(PS,c-d/2,c+d/2,sc.lo,sc.hi,th,M.slice,M.slice,6));
        const ax=rotPT(sc,sc.k,tm,0), pe=rotPT(sc,c,tm,th);
        S.dynG.add(rod(ax,pe,lw*0.6,M.rad));
        S.dynG.add(rod(rotPT(sc,c,info.lo,th),rotPT(sc,c,info.hi,th),lw*0.55,M.hgt));
        S.dim.rad = rotPT(sc,(sc.k+c)/2,tm,0);
        S.dim.h   = rotPT(sc,c,tm,th);
        if(th>0.05){ const arc=[]; for(let i=0;i<=48;i++) arc.push(rotPT(sc,c,info.hi,th*i/48)); S.dynG.add(tube(arc,lw*0.4,M.rad)); }
      }
    } else {
      S.dynG.add(sweep(PW,c-d/2,c+d/2,sc.plo,sc.phi,th,M.slice,M.slice,6));
      const ax=axisPt(sc,c);
      const outer = Math.abs(info.pl-sc.k)>=Math.abs(info.ph-sc.k)?info.pl:info.ph;
      const inner = outer===info.pl?info.ph:info.pl;
      S.dynG.add(rod(ax,rotPT(sc,outer,c,th),lw*0.6,M.rad));
      if(info.r>1e-3) S.dynG.add(rod(ax,rotPT(sc,inner,c,th),lw*0.45,M.curve));
      S.dim.R = rotPT(sc,(sc.k+outer)/2,c,th); S.dim.r = info.r>1e-3 ? rotPT(sc,(sc.k+inner)/2,c,th) : null;
    }
  }
  return info;
}

global.ShellKit = { TAU, V, SCENES, PEEL, fmt, simpson, rotPT, axisPt, makeStage, buildStatic, buildDyn, pieceParams, sumStack, disposeGroup, sq };
})(window);
