
document.body.classList.add('paused');
const $=q=>document.querySelector(q),clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),fmt=(x,d=0)=>x.toFixed(d).replace('.',','),REDUCED=matchMedia('(prefers-reduced-motion:reduce)').matches;
let SNAP=false;
const sv=(w,h,c='')=>`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">${c}</svg>`;
function mount(root,w,h,c=''){root.innerHTML=sv(w,h,c);return root.querySelector('svg')}
const Mp=(x0,x1,y0,y1,L,R,T,B)=>({X:x=>L+(x-x0)/(x1-x0)*(R-L),Y:y=>B-(y-y0)/(y1-y0)*(B-T)});
const pts=(f,a,b,m,n=160)=>{let s='';for(let i=0;i<=n;i++){const x=a+(b-a)*i/n;s+=m.X(x).toFixed(1)+','+m.Y(f(x)).toFixed(1)+' '}return s};
const at=(el,o)=>{if(el)for(const k in o)el.setAttribute(k,o[k]);return el};
const op=(el,v)=>{if(el)el.style.opacity=v};
let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};const gauss=()=>{let u=rnd()||1e-9,v=rnd();return Math.sqrt(-2*Math.log(u))*Math.cos(6.2832*v)};
function heat(f,x0,x1,y0,y1,w=120,h=80){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');if(!g)return'';const im=g.createImageData(w,h),v=[];let lo=1e9,hi=-1e9;for(let j=0;j<h;j++)for(let i=0;i<w;i++){const z=f(x0+(x1-x0)*(i+.5)/w,y1-(y1-y0)*(j+.5)/h);v.push(z);lo=Math.min(lo,z);hi=Math.max(hi,z)}
const st=[[22,62,92],[46,140,138],[160,200,170],[248,228,190]];v.forEach((z,k)=>{let u=(z-lo)/(hi-lo||1)*2.999;const a=Math.floor(u),r=u-a,c0=st[a],c1=st[a+1];for(let q=0;q<3;q++)im.data[k*4+q]=c0[q]+(c1[q]-c0[q])*r;im.data[k*4+3]=255});g.putImageData(im,0,0);return c.toDataURL()}
