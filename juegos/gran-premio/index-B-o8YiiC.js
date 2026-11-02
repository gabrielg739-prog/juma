(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="183",Jd=0,_0=1,Kd=2,Ya=1,Qd=2,Ha=3,eo=0,Cn=1,Jt=2,Ti=0,Do=1,Hn=2,M0=3,w0=4,ef=5,Eo=100,tf=101,nf=102,of=103,af=104,sf=200,rf=201,lf=202,cf=203,Ul=204,Nl=205,uf=206,df=207,ff=208,hf=209,pf=210,mf=211,gf=212,vf=213,xf=214,Fl=0,Ol=1,Bl=2,ha=3,zl=4,kl=5,Vl=6,Gl=7,Dc=0,_f=1,Mf=2,Fi=0,Uc=1,Nc=2,Fc=3,Sr=4,Oc=5,Bc=6,zc=7,ed=300,No=301,pa=302,Or=303,Br=304,yr=306,Rt=1e3,Vn=1001,Hl=1002,vn=1003,wf=1004,hs=1005,mn=1006,zr=1007,Ro=1008,ai=1009,td=1010,nd=1011,ts=1012,kc=1013,Bi=1014,si=1015,Zn=1016,Vc=1017,Gc=1018,ns=1020,id=35902,od=35899,ad=1021,sd=1022,hi=1023,to=1026,Po=1027,Hc=1028,Wc=1029,ma=1030,Xc=1031,jc=1033,ir=33776,or=33777,ar=33778,sr=33779,Wl=35840,Xl=35841,jl=35842,ql=35843,Yl=36196,$l=37492,Zl=37496,Jl=37488,Kl=37489,Ql=37490,ec=37491,tc=37808,nc=37809,ic=37810,oc=37811,ac=37812,sc=37813,rc=37814,lc=37815,cc=37816,uc=37817,dc=37818,fc=37819,hc=37820,pc=37821,mc=36492,gc=36494,vc=36495,xc=36283,_c=36284,Mc=36285,wc=36286,bf=3200,Sf=3201,qc=0,yf=1,mo="",zt="srgb",ga="srgb-linear",ur="linear",Yt="srgb",Go=7680,b0=519,Af=512,Tf=513,Ef=514,Yc=515,Cf=516,Rf=517,$c=518,Pf=519,bc=35044,S0="300 es",Ni=2e3,is=2001;function If(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){const i=dr("canvas");return i.style.display="block",i}const y0={};function fr(...i){const e="THREE."+i.shift();console.log(e,...i)}function rd(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Mt(...i){i=rd(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Bt(...i){i=rd(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hr(...i){const e=i.join(" ");e in y0||(y0[e]=!0,Mt(...i))}function Df(i,e,t){return new Promise(function(n,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Uf={[Fl]:Ol,[Bl]:Vl,[zl]:Gl,[ha]:kl,[Ol]:Fl,[Vl]:Bl,[Gl]:zl,[kl]:ha};class ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,s=o.length;a<s;a++)o[a].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let A0=1234567;const $a=Math.PI/180,va=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Zc(i,e){return(i%e+e)%e}function Nf(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function Ff(i,e,t){return i!==e?(t-i)/(e-i):0}function Za(i,e,t){return(1-t)*i+t*e}function Of(i,e,t,n){return Za(i,e,1-Math.exp(-t*n))}function Bf(i,e=1){return e-Math.abs(Zc(i,e*2)-e)}function zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gf(i,e){return i+Math.random()*(e-i)}function Hf(i){return i*(.5-Math.random())}function Wf(i){i!==void 0&&(A0=i);let e=A0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xf(i){return i*$a}function jf(i){return i*va}function qf(i){return(i&i-1)===0&&i!==0}function Yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zf(i,e,t,n,o){const a=Math.cos,s=Math.sin,r=a(t/2),l=s(t/2),c=a((e+n)/2),d=s((e+n)/2),h=a((e-n)/2),f=s((e-n)/2),p=a((n-e)/2),x=s((n-e)/2);switch(o){case"XYX":i.set(r*d,l*h,l*f,r*c);break;case"YZY":i.set(l*f,r*d,l*h,r*c);break;case"ZXZ":i.set(l*h,l*f,r*d,r*c);break;case"XZX":i.set(r*d,l*x,l*p,r*c);break;case"YXY":i.set(l*p,r*d,l*x,r*c);break;case"ZYZ":i.set(l*x,l*p,r*d,r*c);break;default:Mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ke={DEG2RAD:$a,RAD2DEG:va,generateUUID:Oi,clamp:Pt,euclideanModulo:Zc,mapLinear:Nf,inverseLerp:Ff,lerp:Za,damp:Of,pingpong:Bf,smoothstep:zf,smootherstep:kf,randInt:Vf,randFloat:Gf,randFloatSpread:Hf,seededRandom:Wf,degToRad:Xf,radToDeg:jf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Zf,normalize:Zt,denormalize:Ai};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*o+e.x,this.y=a*o+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,s,r){let l=n[o+0],c=n[o+1],d=n[o+2],h=n[o+3],f=a[s+0],p=a[s+1],x=a[s+2],b=a[s+3];if(h!==b||l!==f||c!==p||d!==x){let m=l*f+c*p+d*x+h*b;m<0&&(f=-f,p=-p,x=-x,b=-b,m=-m);let u=1-r;if(m<.9995){const g=Math.acos(m),_=Math.sin(g);u=Math.sin(u*g)/_,r=Math.sin(r*g)/_,l=l*u+f*r,c=c*u+p*r,d=d*u+x*r,h=h*u+b*r}else{l=l*u+f*r,c=c*u+p*r,d=d*u+x*r,h=h*u+b*r;const g=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=g,c*=g,d*=g,h*=g}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,o,a,s){const r=n[o],l=n[o+1],c=n[o+2],d=n[o+3],h=a[s],f=a[s+1],p=a[s+2],x=a[s+3];return e[t]=r*x+d*h+l*p-c*f,e[t+1]=l*x+d*f+c*h-r*p,e[t+2]=c*x+d*p+r*f-l*h,e[t+3]=d*x-r*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,s=e._order,r=Math.cos,l=Math.sin,c=r(n/2),d=r(o/2),h=r(a/2),f=l(n/2),p=l(o/2),x=l(a/2);switch(s){case"XYZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"YZX":this._x=f*d*h+c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h-f*p*x;break;case"XZY":this._x=f*d*h-c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h+f*p*x;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],s=t[1],r=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=n+r+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(s-o)*p}else if(n>r&&n>h){const p=2*Math.sqrt(1+n-r-h);this._w=(d-l)/p,this._x=.25*p,this._y=(o+s)/p,this._z=(a+c)/p}else if(r>h){const p=2*Math.sqrt(1+r-n-h);this._w=(a-c)/p,this._x=(o+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-r);this._w=(s-o)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,s=e._w,r=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*r+o*c-a*l,this._y=o*d+s*l+a*r-n*c,this._z=a*d+s*c+n*l-o*r,this._w=s*d-n*r-o*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,o=e._y,a=e._z,s=e._w,r=this.dot(e);r<0&&(n=-n,o=-o,a=-a,s=-s,r=-r);let l=1-t;if(r<.9995){const c=Math.acos(r),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+o*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+o*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(T0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(T0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,s=e.y,r=e.z,l=e.w,c=2*(s*o-r*n),d=2*(r*t-a*o),h=2*(a*n-s*t);return this.x=t+l*c+s*h-r*d,this.y=n+l*d+r*c-a*h,this.z=o+l*h+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,s=t.x,r=t.y,l=t.z;return this.x=o*l-a*r,this.y=a*s-n*l,this.z=n*r-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new D,T0=new Jn;class yt{constructor(e,t,n,o,a,s,r,l,c){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,s,r,l,c)}set(e,t,n,o,a,s,r,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=r,d[3]=t,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,s=n[0],r=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],p=n[5],x=n[8],b=o[0],m=o[3],u=o[6],g=o[1],_=o[4],w=o[7],E=o[2],S=o[5],C=o[8];return a[0]=s*b+r*g+l*E,a[3]=s*m+r*_+l*S,a[6]=s*u+r*w+l*C,a[1]=c*b+d*g+h*E,a[4]=c*m+d*_+h*S,a[7]=c*u+d*w+h*C,a[2]=f*b+p*g+x*E,a[5]=f*m+p*_+x*S,a[8]=f*u+p*w+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],s=e[4],r=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*r*c-n*a*d+n*r*l+o*a*c-o*s*l}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],s=e[4],r=e[5],l=e[6],c=e[7],d=e[8],h=d*s-r*c,f=r*l-d*a,p=c*a-s*l,x=t*h+n*f+o*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=h*b,e[1]=(o*c-d*n)*b,e[2]=(r*n-o*s)*b,e[3]=f*b,e[4]=(d*t-o*l)*b,e[5]=(o*a-r*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(s*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,s,r){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*r)+s+e,-o*c,o*l,-o*(-c*s+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new yt,E0=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){const i={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(o,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Yt&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Yt&&(o.r=da(o.r),o.g=da(o.g),o.b=da(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===mo?ur:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,s){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ga]:{primaries:e,whitePoint:n,transfer:ur,toXYZ:E0,fromXYZ:C0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Yt,toXYZ:E0,fromXYZ:C0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const Vt=Jf();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ho;class Kf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=dr("canvas")),Ho.width=e.width,Ho.height=e.height;const o=Ho.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=Ho}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let s=0;s<a.length;s++)a[s]=Qi(a[s]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qf=0;class Jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let s=0,r=o.length;s<r;s++)o[s].isDataTexture?a.push(Gr(o[s].image)):a.push(Gr(o[s]))}else a=Gr(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let eh=0;const Hr=new D;class Dn extends ya{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Vn,o=Vn,a=mn,s=Ro,r=hi,l=ai,c=Dn.DEFAULT_ANISOTROPY,d=mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Oi(),this.name="",this.source=new Jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hr).x}get height(){return this.source.getSize(Hr).y}get depth(){return this.source.getSize(Hr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rt:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rt:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=ed;Dn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,n=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*o+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*o+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*o+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*o+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],b=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,w=(p+1)/2,E=(u+1)/2,S=(d+f)/4,C=(h+b)/4,M=(x+m)/4;return _>w&&_>E?_<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(_),o=S/n,a=C/n):w>E?w<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(w),n=S/o,a=M/o):E<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(E),n=C/a,o=M/a),this.set(n,o,a,t),this}let g=Math.sqrt((m-x)*(m-x)+(h-b)*(h-b)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-b)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class th extends ya{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:n.depth},a=new Dn(o),s=n.count;for(let r=0;r<s;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jc(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ld extends Dn{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends Dn{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e,t,n,o,a,s,r,l,c,d,h,f,p,x,b,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,s,r,l,c,d,h,f,p,x,b,m)}set(e,t,n,o,a,s,r,l,c,d,h,f,p,x,b,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=o,u[1]=a,u[5]=s,u[9]=r,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=x,u[11]=b,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,o=1/Wo.setFromMatrixColumn(e,0).length(),a=1/Wo.setFromMatrixColumn(e,1).length(),s=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,s=Math.cos(n),r=Math.sin(n),l=Math.cos(o),c=Math.sin(o),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=s*d,p=s*h,x=r*d,b=r*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-b*c,t[9]=-r*l,t[2]=b-f*c,t[6]=x+p*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,x=c*d,b=c*h;t[0]=f+b*r,t[4]=x*r-p,t[8]=s*c,t[1]=s*h,t[5]=s*d,t[9]=-r,t[2]=p*r-x,t[6]=b+f*r,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,x=c*d,b=c*h;t[0]=f-b*r,t[4]=-s*h,t[8]=x+p*r,t[1]=p+x*r,t[5]=s*d,t[9]=b-f*r,t[2]=-s*c,t[6]=r,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,p=s*h,x=r*d,b=r*h;t[0]=l*d,t[4]=x*c-p,t[8]=f*c+b,t[1]=l*h,t[5]=b*c+f,t[9]=p*c-x,t[2]=-c,t[6]=r*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,x=r*l,b=r*c;t[0]=l*d,t[4]=b-f*h,t[8]=x*h+p,t[1]=h,t[5]=s*d,t[9]=-r*d,t[2]=-c*d,t[6]=p*h+x,t[10]=f-b*h}else if(e.order==="XZY"){const f=s*l,p=s*c,x=r*l,b=r*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+b,t[5]=s*d,t[9]=p*h-x,t[2]=x*h-p,t[6]=r*d,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,oh)}lookAt(e,t,n){const o=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ao.crossVectors(n,ni),ao.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ao.crossVectors(n,ni)),ao.normalize(),ps.crossVectors(ni,ao),o[0]=ao.x,o[4]=ps.x,o[8]=ni.x,o[1]=ao.y,o[5]=ps.y,o[9]=ni.y,o[2]=ao.z,o[6]=ps.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,s=n[0],r=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],p=n[13],x=n[2],b=n[6],m=n[10],u=n[14],g=n[3],_=n[7],w=n[11],E=n[15],S=o[0],C=o[4],M=o[8],A=o[12],v=o[1],R=o[5],F=o[9],H=o[13],z=o[2],Y=o[6],j=o[10],Q=o[14],_e=o[3],Z=o[7],W=o[11],de=o[15];return a[0]=s*S+r*v+l*z+c*_e,a[4]=s*C+r*R+l*Y+c*Z,a[8]=s*M+r*F+l*j+c*W,a[12]=s*A+r*H+l*Q+c*de,a[1]=d*S+h*v+f*z+p*_e,a[5]=d*C+h*R+f*Y+p*Z,a[9]=d*M+h*F+f*j+p*W,a[13]=d*A+h*H+f*Q+p*de,a[2]=x*S+b*v+m*z+u*_e,a[6]=x*C+b*R+m*Y+u*Z,a[10]=x*M+b*F+m*j+u*W,a[14]=x*A+b*H+m*Q+u*de,a[3]=g*S+_*v+w*z+E*_e,a[7]=g*C+_*R+w*Y+E*Z,a[11]=g*M+_*F+w*j+E*W,a[15]=g*A+_*H+w*Q+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],s=e[1],r=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],x=e[3],b=e[7],m=e[11],u=e[15],g=l*p-c*f,_=r*p-c*h,w=r*f-l*h,E=s*p-c*d,S=s*f-l*d,C=s*h-r*d;return t*(b*g-m*_+u*w)-n*(x*g-m*E+u*S)+o*(x*_-b*E+u*C)-a*(x*w-b*S+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],s=e[4],r=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],x=e[12],b=e[13],m=e[14],u=e[15],g=t*r-n*s,_=t*l-o*s,w=t*c-a*s,E=n*l-o*r,S=n*c-a*r,C=o*c-a*l,M=d*b-h*x,A=d*m-f*x,v=d*u-p*x,R=h*m-f*b,F=h*u-p*b,H=f*u-p*m,z=g*H-_*F+w*R+E*v-S*A+C*M;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/z;return e[0]=(r*H-l*F+c*R)*Y,e[1]=(o*F-n*H-a*R)*Y,e[2]=(b*C-m*S+u*E)*Y,e[3]=(f*S-h*C-p*E)*Y,e[4]=(l*v-s*H-c*A)*Y,e[5]=(t*H-o*v+a*A)*Y,e[6]=(m*w-x*C-u*_)*Y,e[7]=(d*C-f*w+p*_)*Y,e[8]=(s*F-r*v+c*M)*Y,e[9]=(n*v-t*F-a*M)*Y,e[10]=(x*S-b*w+u*g)*Y,e[11]=(h*w-d*S-p*g)*Y,e[12]=(r*A-s*R-l*M)*Y,e[13]=(t*R-n*A+o*M)*Y,e[14]=(b*_-x*E-m*g)*Y,e[15]=(d*E-h*_+f*g)*Y,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,s=e.x,r=e.y,l=e.z,c=a*s,d=a*r;return this.set(c*s+n,c*r-o*l,c*l+o*r,0,c*r+o*l,d*r+n,d*l-o*s,0,c*l-o*r,d*l+o*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,s){return this.set(1,n,a,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,s=t._y,r=t._z,l=t._w,c=a+a,d=s+s,h=r+r,f=a*c,p=a*d,x=a*h,b=s*d,m=s*h,u=r*h,g=l*c,_=l*d,w=l*h,E=n.x,S=n.y,C=n.z;return o[0]=(1-(b+u))*E,o[1]=(p+w)*E,o[2]=(x-_)*E,o[3]=0,o[4]=(p-w)*S,o[5]=(1-(f+u))*S,o[6]=(m+g)*S,o[7]=0,o[8]=(x+_)*C,o[9]=(m-g)*C,o[10]=(1-(f+b))*C,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let s=Wo.set(o[0],o[1],o[2]).length();const r=Wo.set(o[4],o[5],o[6]).length(),l=Wo.set(o[8],o[9],o[10]).length();a<0&&(s=-s),wi.copy(this);const c=1/s,d=1/r,h=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=d,wi.elements[5]*=d,wi.elements[6]*=d,wi.elements[8]*=h,wi.elements[9]*=h,wi.elements[10]*=h,t.setFromRotationMatrix(wi),n.x=s,n.y=r,n.z=l,this}makePerspective(e,t,n,o,a,s,r=Ni,l=!1){const c=this.elements,d=2*a/(t-e),h=2*a/(n-o),f=(t+e)/(t-e),p=(n+o)/(n-o);let x,b;if(l)x=a/(s-a),b=s*a/(s-a);else if(r===Ni)x=-(s+a)/(s-a),b=-2*s*a/(s-a);else if(r===is)x=-s/(s-a),b=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,o,a,s,r=Ni,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-o),f=-(t+e)/(t-e),p=-(n+o)/(n-o);let x,b;if(l)x=1/(s-a),b=s/(s-a);else if(r===Ni)x=-2/(s-a),b=-(s+a)/(s-a);else if(r===is)x=-1/(s-a),b=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wo=new D,wi=new Ft,ih=new D(0,0,0),oh=new D(1,1,1),ao=new D,ps=new D,ni=new D,R0=new Ft,P0=new Jn;class ri{constructor(e=0,t=0,n=0,o=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],s=o[4],r=o[8],l=o[1],c=o[5],d=o[9],h=o[2],f=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ah=0;const I0=new D,Xo=new Jn,Gi=new Ft,ms=new D,Ca=new D,sh=new D,rh=new Jn,L0=new D(1,0,0),D0=new D(0,1,0),U0=new D(0,0,1),N0={type:"added"},lh={type:"removed"},jo={type:"childadded",child:null},Wr={type:"childremoved",child:null};class Kt extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new D,t=new ri,n=new Jn,o=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ft},normalMatrix:{value:new yt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(L0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(U0,e)}translateOnAxis(e,t){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(L0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(U0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ca,ms,this.up):Gi.lookAt(ms,Ca,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),Xo.setFromRotationMatrix(Gi),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N0),jo.child=e,this.dispatchEvent(jo),jo.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lh),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N0),jo.child=e,this.dispatchEvent(jo),jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,s=o.length;a<s;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*o,a[13]+=n-a[1]*t-a[5]*n-a[9]*o,a[14]+=o-a[2]*t-a[6]*n-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,s=o.length;a<s;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(r=>({...r})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(e.materials,this.material[l]));o.material=r}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];o.animations.push(a(e.animations,l))}}if(t){const r=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),x=s(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=o,n;function s(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}Kt.DEFAULT_UP=new D(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class et extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ch={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,s=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),u=this._getHandJoint(c,b);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(ch)))}return r!==null&&(r.visible=o!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},so={h:0,s:0,l:0},gs={h:0,s:0,l:0};function jr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=Vt.workingColorSpace){if(e=Zc(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=jr(s,a,e+1/3),this.g=jr(s,a,e),this.b=jr(s,a,e-1/3)}return Vt.colorSpaceToWorking(this,o),this}setStyle(e,t=zt){function n(a){a!==void 0&&parseFloat(a)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=o[1],r=o[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Vt.workingToColorSpace(Ln.copy(this),e),Math.round(Pt(Ln.r*255,0,255))*65536+Math.round(Pt(Ln.g*255,0,255))*256+Math.round(Pt(Ln.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,o=Ln.g,a=Ln.b,s=Math.max(n,o,a),r=Math.min(n,o,a);let l,c;const d=(r+s)/2;if(r===s)l=0,c=0;else{const h=s-r;switch(c=d<=.5?h/(s+r):h/(2-s-r),s){case n:l=(o-a)/h+(o<a?6:0);break;case o:l=(a-n)/h+2;break;case a:l=(n-o)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Vt.workingColorSpace){return Vt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=zt){Vt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,o=Ln.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(so),this.setHSL(so.h+e,so.s+t,so.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(so),e.getHSL(gs);const n=Za(so.h,gs.h,t),o=Za(so.s,gs.s,t),a=Za(so.l,gs.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ve;Ve.NAMES=cd;class cs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new cs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ar{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class os extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new D,Hi=new D,qr=new D,Wi=new D,qo=new D,Yo=new D,F0=new D,Yr=new D,$r=new D,Zr=new D,Jr=new rn,Kr=new rn,Qr=new rn;class fi{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),bi.subVectors(e,t),o.cross(bi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){bi.subVectors(o,t),Hi.subVectors(n,t),qr.subVectors(e,t);const s=bi.dot(bi),r=bi.dot(Hi),l=bi.dot(qr),c=Hi.dot(Hi),d=Hi.dot(qr),h=s*c-r*r;if(h===0)return a.set(0,0,0),null;const f=1/h,p=(c*l-r*d)*f,x=(s*d-r*l)*f;return a.set(1-p-x,x,p)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,o,a,s,r,l){return this.getBarycoord(e,t,n,o,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Wi.x),l.addScaledVector(s,Wi.y),l.addScaledVector(r,Wi.z),l)}static getInterpolatedAttribute(e,t,n,o,a,s){return Jr.setScalar(0),Kr.setScalar(0),Qr.setScalar(0),Jr.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),Qr.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(Jr,a.x),s.addScaledVector(Kr,a.y),s.addScaledVector(Qr,a.z),s}static isFrontFacing(e,t,n,o){return bi.subVectors(n,t),Hi.subVectors(e,t),bi.cross(Hi).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),bi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let s,r;qo.subVectors(o,n),Yo.subVectors(a,n),Yr.subVectors(e,n);const l=qo.dot(Yr),c=Yo.dot(Yr);if(l<=0&&c<=0)return t.copy(n);$r.subVectors(e,o);const d=qo.dot($r),h=Yo.dot($r);if(d>=0&&h<=d)return t.copy(o);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(qo,s);Zr.subVectors(e,a);const p=qo.dot(Zr),x=Yo.dot(Zr);if(x>=0&&p<=x)return t.copy(a);const b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return r=c/(c-x),t.copy(n).addScaledVector(Yo,r);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return F0.subVectors(a,o),r=(h-d)/(h-d+(p-x)),t.copy(o).addScaledVector(F0,r);const u=1/(m+b+f);return s=b*u,r=f*u,t.copy(n).addScaledVector(qo,s).addScaledVector(Yo,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _o{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,r=a.count;s<r;s++)e.isMesh===!0?e.getVertexPosition(s,Si):Si.fromBufferAttribute(a,s),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const o=e.children;for(let a=0,s=o.length;a<s;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),xs.subVectors(this.max,Ra),$o.subVectors(e.a,Ra),Zo.subVectors(e.b,Ra),Jo.subVectors(e.c,Ra),ro.subVectors(Zo,$o),lo.subVectors(Jo,Zo),Mo.subVectors($o,Jo);let t=[0,-ro.z,ro.y,0,-lo.z,lo.y,0,-Mo.z,Mo.y,ro.z,0,-ro.x,lo.z,0,-lo.x,Mo.z,0,-Mo.x,-ro.y,ro.x,0,-lo.y,lo.x,0,-Mo.y,Mo.x,0];return!el(t,$o,Zo,Jo,xs)||(t=[1,0,0,0,1,0,0,0,1],!el(t,$o,Zo,Jo,xs))?!1:(_s.crossVectors(ro,lo),t=[_s.x,_s.y,_s.z],el(t,$o,Zo,Jo,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,vs=new _o,$o=new D,Zo=new D,Jo=new D,ro=new D,lo=new D,Mo=new D,Ra=new D,xs=new D,_s=new D,wo=new D;function el(i,e,t,n,o){for(let a=0,s=i.length-3;a<=s;a+=3){wo.fromArray(i,a);const r=o.x*Math.abs(wo.x)+o.y*Math.abs(wo.y)+o.z*Math.abs(wo.z),l=e.dot(wo),c=t.dot(wo),d=n.dot(wo);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const pn=new D,Ms=new Ne;let uh=0;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),o=Zt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),o=Zt(o,this.array),a=Zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}}class Qc extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class e0 extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const dh=new _o,Pa=new D,tl=new D;class ko{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dh.setFromPoints(e).getCenter(n);let o=0;for(let a=0,s=e.length;a<s;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Pa,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(tl)),this.expandByPoint(Pa.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fh=0;const ui=new Ft,nl=new Kt,Ko=new D,ii=new _o,Ia=new _o,bn=new D;class Lt extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(If(e)?e0:Qc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new yt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const s=e[o];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const r=t[a];Ia.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(ii.min,Ia.min),ii.expandByPoint(bn),bn.addVectors(ii.max,Ia.max),ii.expandByPoint(bn)):(ii.expandByPoint(Ia.min),ii.expandByPoint(Ia.max))}ii.getCenter(n);let o=0;for(let a=0,s=e.count;a<s;a++)bn.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(bn));if(t)for(let a=0,s=t.length;a<s;a++){const r=t[a],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)bn.fromBufferAttribute(r,c),l&&(Ko.fromBufferAttribute(e,c),bn.add(Ko)),o=Math.max(o,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),r=[],l=[];for(let M=0;M<n.count;M++)r[M]=new D,l[M]=new D;const c=new D,d=new D,h=new D,f=new Ne,p=new Ne,x=new Ne,b=new D,m=new D;function u(M,A,v){c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,v),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,A),x.fromBufferAttribute(a,v),d.sub(c),h.sub(c),p.sub(f),x.sub(f);const R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(R),r[M].add(b),r[A].add(b),r[v].add(b),l[M].add(m),l[A].add(m),l[v].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let M=0,A=g.length;M<A;++M){const v=g[M],R=v.start,F=v.count;for(let H=R,z=R+F;H<z;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new D,w=new D,E=new D,S=new D;function C(M){E.fromBufferAttribute(o,M),S.copy(E);const A=r[M];_.copy(A),_.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(S,A);const R=w.dot(l[M])<0?-1:1;s.setXYZW(M,_.x,_.y,_.z,R)}for(let M=0,A=g.length;M<A;++M){const v=g[M],R=v.start,F=v.count;for(let H=R,z=R+F;H<z;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const o=new D,a=new D,s=new D,r=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,x),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,m),d.subVectors(s,a),h.subVectors(o,a),d.cross(h),r.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),r.add(d),l.add(d),c.add(d),n.setXYZ(x,r.x,r.y,r.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)o.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,a),h.subVectors(o,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(r,l){const c=r.array,d=r.itemSize,h=r.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let b=0,m=l.length;b<m;b++){r.isInterleavedBufferAttribute?p=l[b]*r.data.stride+r.offset:p=l[b]*d;for(let u=0;u<d;u++)f[x++]=c[p++]}return new tn(f,d,h)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,o=this.attributes;for(const r in o){const l=o[r],c=e(l,n);t.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,l=s.length;r<l;r++){const c=s[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(o[l]=d,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],h=a[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[n+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new D;class pr{constructor(e,t,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),o=Zt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),o=Zt(o,this.array),a=Zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ph=0;class io extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Do,this.side=eo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(n.blending=this.blending),this.side!==eo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==Eo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const s=[];for(const r in a){const l=a[r];delete l.metadata,s.push(l)}return s}if(t){const a=o(e.textures),s=o(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class t0 extends io{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qo;const La=new D,ea=new D,ta=new D,na=new Ne,Da=new Ne,ud=new Ft,ws=new D,Ua=new D,bs=new D,O0=new Ne,il=new Ne,B0=new Ne;class dd extends Kt{constructor(e=new t0){if(super(),this.isSprite=!0,this.type="Sprite",Qo===void 0){Qo=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hh(t,5);Qo.setIndex([0,1,2,0,2,3]),Qo.setAttribute("position",new pr(n,3,0,!1)),Qo.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=Qo,this.material=e,this.center=new Ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ta.z);const n=this.material.rotation;let o,a;n!==0&&(a=Math.cos(n),o=Math.sin(n));const s=this.center;Ss(ws.set(-.5,-.5,0),ta,s,ea,o,a),Ss(Ua.set(.5,-.5,0),ta,s,ea,o,a),Ss(bs.set(.5,.5,0),ta,s,ea,o,a),O0.set(0,0),il.set(1,0),B0.set(1,1);let r=e.ray.intersectTriangle(ws,Ua,bs,!1,La);if(r===null&&(Ss(Ua.set(-.5,.5,0),ta,s,ea,o,a),il.set(0,1),r=e.ray.intersectTriangle(ws,bs,Ua,!1,La),r===null))return;const l=e.ray.origin.distanceTo(La);l<e.near||l>e.far||t.push({distance:l,point:La.clone(),uv:fi.getInterpolation(La,ws,Ua,bs,O0,il,B0,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ss(i,e,t,n,o,a){na.subVectors(i,t).addScalar(.5).multiply(n),o!==void 0?(Da.x=a*na.x-o*na.y,Da.y=o*na.x+a*na.y):Da.copy(na),i.copy(e),i.x+=Da.x,i.y+=Da.y,i.applyMatrix4(ud)}const ji=new D,ol=new D,ys=new D,co=new D,al=new D,As=new D,sl=new D;class Tr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){ol.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),co.copy(this.origin).sub(ol);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ys),r=co.dot(this.direction),l=-co.dot(ys),c=co.lengthSq(),d=Math.abs(1-s*s);let h,f,p,x;if(d>0)if(h=s*l-r,f=s*r-l,x=a*d,h>=0)if(f>=-x)if(f<=x){const b=1/d;h*=b,f*=b,p=h*(h+s*f+2*r)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+r)),p=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+r)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-s*a+r)),f=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(h=Math.max(0,-(s*a+r)),f=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+r)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy(ol).addScaledVector(ys,f),p}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const n=ji.dot(this.direction),o=ji.dot(ji)-n*n,a=e.radius*e.radius;if(o>a)return null;const s=Math.sqrt(a-o),r=n-s,l=n+s;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,s,r,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(a=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||a>o||((a>n||isNaN(n))&&(n=a),(s<o||isNaN(o))&&(o=s),h>=0?(r=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(r=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||r>o)||((r>n||n!==n)&&(n=r),(l<o||o!==o)&&(o=l),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,o,a){al.subVectors(t,e),As.subVectors(n,e),sl.crossVectors(al,As);let s=this.direction.dot(sl),r;if(s>0){if(o)return null;r=1}else if(s<0)r=-1,s=-s;else return null;co.subVectors(this.origin,e);const l=r*this.direction.dot(As.crossVectors(co,As));if(l<0)return null;const c=r*this.direction.dot(al.cross(co));if(c<0||l+c>s)return null;const d=-r*co.dot(sl);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const z0=new Ft,bo=new Tr,Ts=new ko,k0=new D,Es=new D,Cs=new D,Rs=new D,rl=new D,Ps=new D,V0=new D,Is=new D;class L extends Kt{constructor(e=new Lt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=o.length;a<s;a++){const r=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const r=this.morphTargetInfluences;if(a&&r){Ps.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=r[l],h=a[l];d!==0&&(rl.fromBufferAttribute(h,e),s?Ps.addScaledVector(rl,d):Ps.addScaledVector(rl.sub(t),d))}t.add(Ps)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(a),bo.copy(e.ray).recast(e.near),!(Ts.containsPoint(bo.origin)===!1&&(bo.intersectSphere(Ts,k0)===null||bo.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(z0.copy(a).invert(),bo.copy(e.ray).applyMatrix4(z0),!(n.boundingBox!==null&&bo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bo)))}_computeIntersections(e,t,n){let o;const a=this.geometry,s=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(r!==null)if(Array.isArray(s))for(let x=0,b=f.length;x<b;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let w=g,E=_;w<E;w+=3){const S=r.getX(w),C=r.getX(w+1),M=r.getX(w+2);o=Ls(this,u,e,n,c,d,h,S,C,M),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),b=Math.min(r.count,p.start+p.count);for(let m=x,u=b;m<u;m+=3){const g=r.getX(m),_=r.getX(m+1),w=r.getX(m+2);o=Ls(this,s,e,n,c,d,h,g,_,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,b=f.length;x<b;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=g,E=_;w<E;w+=3){const S=w,C=w+1,M=w+2;o=Ls(this,u,e,n,c,d,h,S,C,M),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=x,u=b;m<u;m+=3){const g=m,_=m+1,w=m+2;o=Ls(this,s,e,n,c,d,h,g,_,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function mh(i,e,t,n,o,a,s,r){let l;if(e.side===Cn?l=n.intersectTriangle(s,a,o,!0,r):l=n.intersectTriangle(o,a,s,e.side===eo,r),l===null)return null;Is.copy(r),Is.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Is);return c<t.near||c>t.far?null:{distance:c,point:Is.clone(),object:i}}function Ls(i,e,t,n,o,a,s,r,l,c){i.getVertexPosition(r,Es),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Rs);const d=mh(i,e,t,n,Es,Cs,Rs,V0);if(d){const h=new D;fi.getBarycoord(V0,Es,Cs,Rs,h),o&&(d.uv=fi.getInterpolatedAttribute(o,r,l,c,h,new Ne)),a&&(d.uv1=fi.getInterpolatedAttribute(a,r,l,c,h,new Ne)),s&&(d.normal=fi.getInterpolatedAttribute(s,r,l,c,h,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new D,materialIndex:0};fi.getNormal(Es,Cs,Rs,f.normal),d.face=f,d.barycoord=h}return d}class n0 extends Dn{constructor(e=null,t=1,n=1,o,a,s,r,l,c=vn,d=vn,h,f){super(null,s,r,l,c,d,o,a,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G0 extends tn{constructor(e,t,n,o=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ia=new Ft,H0=new Ft,Ds=[],W0=new _o,gh=new Ft,Na=new L,Fa=new ko;class Zi extends L{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new G0(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,gh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _o),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),W0.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(W0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ko),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),Fa.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(Fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=n.length+1,s=e*a+1;for(let r=0;r<n.length;r++)n[r]=o[s+r]}raycast(e,t){const n=this.matrixWorld,o=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(n),e.ray.intersectsSphere(Fa)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,ia),H0.multiplyMatrices(n,ia),Na.matrixWorld=H0,Na.raycast(e,Ds);for(let s=0,r=Ds.length;s<r;s++){const l=Ds[s];l.instanceId=a,l.object=this,t.push(l)}Ds.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new G0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new n0(new Float32Array(o*this.count),o,this.count,Hc,si));const a=this.morphTexture.source.data.data;let s=0;for(let c=0;c<n.length;c++)s+=n[c];const r=this.geometry.morphTargetsRelative?1:1-s,l=o*e;a[l]=r,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ll=new D,vh=new D,xh=new yt;class To{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=ll.subVectors(n,t).cross(vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ll),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xh.getNormalMatrix(e),o=this.coplanarPoint(ll).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const So=new ko,_h=new Ne(.5,.5),Us=new D;class i0{constructor(e=new To,t=new To,n=new To,o=new To,a=new To,s=new To){this.planes=[e,t,n,o,a,s]}set(e,t,n,o,a,s){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(o),r[4].copy(a),r[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni,n=!1){const o=this.planes,a=e.elements,s=a[0],r=a[1],l=a[2],c=a[3],d=a[4],h=a[5],f=a[6],p=a[7],x=a[8],b=a[9],m=a[10],u=a[11],g=a[12],_=a[13],w=a[14],E=a[15];if(o[0].setComponents(c-s,p-d,u-x,E-g).normalize(),o[1].setComponents(c+s,p+d,u+x,E+g).normalize(),o[2].setComponents(c+r,p+h,u+b,E+_).normalize(),o[3].setComponents(c-r,p-h,u-b,E-_).normalize(),n)o[4].setComponents(l,f,m,w).normalize(),o[5].setComponents(c-l,p-f,u-m,E-w).normalize();else if(o[4].setComponents(c-l,p-f,u-m,E-w).normalize(),t===Ni)o[5].setComponents(c+l,p+f,u+m,E+w).normalize();else if(t===is)o[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),So.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),So.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(So)}intersectsSprite(e){So.center.set(0,0,0);const t=_h.distanceTo(e.center);return So.radius=.7071067811865476+t,So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Us.x=o.normal.x>0?e.max.x:e.min.x,Us.y=o.normal.y>0?e.max.y:e.min.y,Us.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wa extends io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mr=new D,gr=new D,X0=new Ft,Oa=new Tr,Ns=new ko,cl=new D,j0=new D;class Fs extends Kt{constructor(e=new Lt,t=new Wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)mr.fromBufferAttribute(t,o-1),gr.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=mr.distanceTo(gr);e.setAttribute("lineDistance",new mt(n,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(o),Ns.radius+=a,e.ray.intersectsSphere(Ns)===!1)return;X0.copy(o).invert(),Oa.copy(e.ray).applyMatrix4(X0);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const p=Math.max(0,s.start),x=Math.min(d.count,s.start+s.count);for(let b=p,m=x-1;b<m;b+=c){const u=d.getX(b),g=d.getX(b+1),_=Os(this,e,Oa,l,u,g,b);_&&t.push(_)}if(this.isLineLoop){const b=d.getX(x-1),m=d.getX(p),u=Os(this,e,Oa,l,b,m,x-1);u&&t.push(u)}}else{const p=Math.max(0,s.start),x=Math.min(f.count,s.start+s.count);for(let b=p,m=x-1;b<m;b+=c){const u=Os(this,e,Oa,l,b,b+1,b);u&&t.push(u)}if(this.isLineLoop){const b=Os(this,e,Oa,l,x-1,p,x-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=o.length;a<s;a++){const r=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Os(i,e,t,n,o,a,s){const r=i.geometry.attributes.position;if(mr.fromBufferAttribute(r,o),gr.fromBufferAttribute(r,a),t.distanceSqToSegment(mr,gr,cl,j0)>n)return;cl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cl);if(!(c<e.near||c>e.far))return{distance:c,point:j0.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Mh extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q0=new Ft,Sc=new Tr,Bs=new ko,zs=new D;class fd extends Kt{constructor(e=new Lt,t=new Mh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(o),Bs.radius+=a,e.ray.intersectsSphere(Bs)===!1)return;q0.copy(o).invert(),Sc.copy(e.ray).applyMatrix4(q0);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=f,b=p;x<b;x++){const m=c.getX(x);zs.fromBufferAttribute(h,m),Y0(zs,m,l,o,e,t,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let x=f,b=p;x<b;x++)zs.fromBufferAttribute(h,x),Y0(zs,x,l,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=o.length;a<s;a++){const r=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Y0(i,e,t,n,o,a,s){const r=Sc.distanceSqToPoint(i);if(r<t){const l=new D;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=o.ray.origin.distanceTo(l);if(c<o.near||c>o.far)return;a.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class hd extends Dn{constructor(e=[],t=No,n,o,a,s,r,l,c,d){super(e,t,n,o,a,s,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ut extends Dn{constructor(e,t,n,o,a,s,r,l,c){super(e,t,n,o,a,s,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends Dn{constructor(e,t,n=Bi,o,a,s,r=vn,l=vn,c,d=to,h=1){if(d!==to&&d!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,o,a,s,r,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wh extends Fo{constructor(e,t=Bi,n=No,o,a,s=vn,r=vn,l,c=to){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,o,a,s,r,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pd extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Le extends Lt{constructor(e=1,t=1,n=1,o=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:s};const r=this;o=Math.floor(o),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,o,s,2),x("x","z","y",1,-1,e,n,-t,o,s,3),x("x","y","z",1,-1,e,t,n,o,a,4),x("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function x(b,m,u,g,_,w,E,S,C,M,A){const v=w/C,R=E/M,F=w/2,H=E/2,z=S/2,Y=C+1,j=M+1;let Q=0,_e=0;const Z=new D;for(let W=0;W<j;W++){const de=W*R-H;for(let oe=0;oe<Y;oe++){const ge=oe*v-F;Z[b]=ge*g,Z[m]=de*_,Z[u]=z,c.push(Z.x,Z.y,Z.z),Z[b]=0,Z[m]=0,Z[u]=S>0?1:-1,d.push(Z.x,Z.y,Z.z),h.push(oe/C),h.push(1-W/M),Q+=1}}for(let W=0;W<M;W++)for(let de=0;de<C;de++){const oe=f+de+Y*W,ge=f+de+Y*(W+1),ie=f+(de+1)+Y*(W+1),Ce=f+(de+1)+Y*W;l.push(oe,ge,Ce),l.push(ge,ie,Ce),_e+=6}r.addGroup(p,_e,A),p+=_e,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oo extends Lt{constructor(e=1,t=1,n=4,o=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:o,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),o=Math.max(3,Math.floor(o)),a=Math.max(1,Math.floor(a));const s=[],r=[],l=[],c=[],d=t/2,h=Math.PI/2*e,f=t,p=2*h+f,x=n*2+a,b=o+1,m=new D,u=new D;for(let g=0;g<=x;g++){let _=0,w=0,E=0,S=0;if(g<=n){const A=g/n,v=A*Math.PI/2;w=-d-e*Math.cos(v),E=e*Math.sin(v),S=-e*Math.cos(v),_=A*h}else if(g<=n+a){const A=(g-n)/a;w=-d+A*t,E=e,S=0,_=h+A*f}else{const A=(g-n-a)/n,v=A*Math.PI/2;w=d+e*Math.sin(v),E=e*Math.cos(v),S=e*Math.sin(v),_=h+f+A*h}const C=Math.max(0,Math.min(1,_/p));let M=0;g===0?M=.5/o:g===x&&(M=-.5/o);for(let A=0;A<=o;A++){const v=A/o,R=v*Math.PI*2,F=Math.sin(R),H=Math.cos(R);u.x=-E*H,u.y=w,u.z=E*F,r.push(u.x,u.y,u.z),m.set(-E*H,S,E*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+M,C)}if(g>0){const A=(g-1)*b;for(let v=0;v<o;v++){const R=A+v,F=A+v+1,H=g*b+v,z=g*b+v+1;s.push(R,F,H),s.push(F,z,H)}}}this.setIndex(s),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class no extends Lt{constructor(e=1,t=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:o},t=Math.max(3,t);const a=[],s=[],r=[],l=[],c=new D,d=new Ne;s.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*o;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),r.push(0,0,1),d.x=(s[f]/e+1)/2,d.y=(s[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends Lt{constructor(e=1,t=1,n=1,o=32,a=1,s=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:l};const c=this;o=Math.floor(o),a=Math.floor(a);const d=[],h=[],f=[],p=[];let x=0;const b=[],m=n/2;let u=0;g(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function g(){const w=new D,E=new D;let S=0;const C=(t-e)/n;for(let M=0;M<=a;M++){const A=[],v=M/a,R=v*(t-e)+e;for(let F=0;F<=o;F++){const H=F/o,z=H*l+r,Y=Math.sin(z),j=Math.cos(z);E.x=R*Y,E.y=-v*n+m,E.z=R*j,h.push(E.x,E.y,E.z),w.set(Y,C,j).normalize(),f.push(w.x,w.y,w.z),p.push(H,1-v),A.push(x++)}b.push(A)}for(let M=0;M<o;M++)for(let A=0;A<a;A++){const v=b[A][M],R=b[A+1][M],F=b[A+1][M+1],H=b[A][M+1];(e>0||A!==0)&&(d.push(v,R,H),S+=3),(t>0||A!==a-1)&&(d.push(R,F,H),S+=3)}c.addGroup(u,S,0),u+=S}function _(w){const E=x,S=new Ne,C=new D;let M=0;const A=w===!0?e:t,v=w===!0?1:-1;for(let F=1;F<=o;F++)h.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),x++;const R=x;for(let F=0;F<=o;F++){const z=F/o*l+r,Y=Math.cos(z),j=Math.sin(z);C.x=A*j,C.y=m*v,C.z=A*Y,h.push(C.x,C.y,C.z),f.push(0,v,0),S.x=Y*.5+.5,S.y=j*.5*v+.5,p.push(S.x,S.y),x++}for(let F=0;F<o;F++){const H=E+F,z=R+F;w===!0?d.push(z,z+1,H):d.push(z+1,z,H),M+=3}c.addGroup(u,M,w===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n extends st{constructor(e=1,t=1,n=32,o=1,a=!1,s=0,r=Math.PI*2){super(0,e,t,n,o,a,s,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:o,openEnded:a,thetaStart:s,thetaLength:r}}static fromJSON(e){return new $n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class o0 extends Lt{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const a=[],s=[];r(o),c(n),d(),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(a.slice(),3)),this.setAttribute("uv",new mt(s,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function r(g){const _=new D,w=new D,E=new D;for(let S=0;S<t.length;S+=3)p(t[S+0],_),p(t[S+1],w),p(t[S+2],E),l(_,w,E,g)}function l(g,_,w,E){const S=E+1,C=[];for(let M=0;M<=S;M++){C[M]=[];const A=g.clone().lerp(w,M/S),v=_.clone().lerp(w,M/S),R=S-M;for(let F=0;F<=R;F++)F===0&&M===S?C[M][F]=A:C[M][F]=A.clone().lerp(v,F/R)}for(let M=0;M<S;M++)for(let A=0;A<2*(S-M)-1;A++){const v=Math.floor(A/2);A%2===0?(f(C[M][v+1]),f(C[M+1][v]),f(C[M][v])):(f(C[M][v+1]),f(C[M+1][v+1]),f(C[M+1][v]))}}function c(g){const _=new D;for(let w=0;w<a.length;w+=3)_.x=a[w+0],_.y=a[w+1],_.z=a[w+2],_.normalize().multiplyScalar(g),a[w+0]=_.x,a[w+1]=_.y,a[w+2]=_.z}function d(){const g=new D;for(let _=0;_<a.length;_+=3){g.x=a[_+0],g.y=a[_+1],g.z=a[_+2];const w=m(g)/2/Math.PI+.5,E=u(g)/Math.PI+.5;s.push(w,1-E)}x(),h()}function h(){for(let g=0;g<s.length;g+=6){const _=s[g+0],w=s[g+2],E=s[g+4],S=Math.max(_,w,E),C=Math.min(_,w,E);S>.9&&C<.1&&(_<.2&&(s[g+0]+=1),w<.2&&(s[g+2]+=1),E<.2&&(s[g+4]+=1))}}function f(g){a.push(g.x,g.y,g.z)}function p(g,_){const w=g*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function x(){const g=new D,_=new D,w=new D,E=new D,S=new Ne,C=new Ne,M=new Ne;for(let A=0,v=0;A<a.length;A+=9,v+=6){g.set(a[A+0],a[A+1],a[A+2]),_.set(a[A+3],a[A+4],a[A+5]),w.set(a[A+6],a[A+7],a[A+8]),S.set(s[v+0],s[v+1]),C.set(s[v+2],s[v+3]),M.set(s[v+4],s[v+5]),E.copy(g).add(_).add(w).divideScalar(3);const R=m(E);b(S,v+0,g,R),b(C,v+2,_,R),b(M,v+4,w,R)}}function b(g,_,w,E){E<0&&g.x===1&&(s[_]=g.x-1),w.x===0&&w.z===0&&(s[_]=E/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new o0(e.vertices,e.indices,e.radius,e.detail)}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,o=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(o),t.push(a),o=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let o=0;const a=n.length;let s;t?s=t:s=e*n[a-1];let r=0,l=a-1,c;for(;r<=l;)if(o=Math.floor(r+(l-r)/2),c=n[o]-s,c<0)r=o+1;else if(c>0)l=o-1;else{l=o;break}if(o=l,n[o]===s)return o/(a-1);const d=n[o],f=n[o+1]-d,p=(s-d)/f;return(o+p)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const s=this.getPoint(o),r=this.getPoint(a),l=t||(s.isVector2?new Ne:new D);return l.copy(r).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,o=[],a=[],s=[],r=new D,l=new Ft;for(let p=0;p<=e;p++){const x=p/e;o[p]=this.getTangentAt(x,new D)}a[0]=new D,s[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(o[0].x),h=Math.abs(o[0].y),f=Math.abs(o[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),r.crossVectors(o[0],n).normalize(),a[0].crossVectors(o[0],r),s[0].crossVectors(o[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),r.crossVectors(o[p-1],o[p]),r.length()>Number.EPSILON){r.normalize();const x=Math.acos(Pt(o[p-1].dot(o[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(r,x))}s[p].crossVectors(o[p],a[p])}if(t===!0){let p=Math.acos(Pt(a[0].dot(a[e]),-1,1));p/=e,o[0].dot(r.crossVectors(a[0],a[e]))>0&&(p=-p);for(let x=1;x<=e;x++)a[x].applyMatrix4(l.makeRotationAxis(o[x],p*x)),s[x].crossVectors(o[x],a[x])}return{tangents:o,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class a0 extends zi{constructor(e=0,t=0,n=1,o=1,a=0,s=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new Ne){const n=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(s?a=0:a=o),this.aClockwise===!0&&!s&&(a===o?a=-o:a=a-o);const r=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*h+this.aX,c=f*h+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bh extends a0{constructor(e,t,n,o,a,s){super(e,t,n,n,o,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function s0(){let i=0,e=0,t=0,n=0;function o(a,s,r,l){i=a,e=r,t=-3*a+3*s-2*r-l,n=2*a-2*s+r+l}return{initCatmullRom:function(a,s,r,l,c){o(s,r,c*(r-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,r,l,c,d,h){let f=(s-a)/c-(r-a)/(c+d)+(r-s)/d,p=(r-s)/d-(l-s)/(d+h)+(l-r)/h;f*=d,p*=d,o(s,r,f,p)},calc:function(a){const s=a*a,r=s*a;return i+e*a+t*s+n*r}}}const ks=new D,ul=new s0,dl=new s0,fl=new s0;class vo extends zi{constructor(e=[],t=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=o}getPoint(e,t=new D){const n=t,o=this.points,a=o.length,s=(a-(this.closed?0:1))*e;let r=Math.floor(s),l=s-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:l===0&&r===a-1&&(r=a-2,l=1);let c,d;this.closed||r>0?c=o[(r-1)%a]:(ks.subVectors(o[0],o[1]).add(o[0]),c=ks);const h=o[r%a],f=o[(r+1)%a];if(this.closed||r+2<a?d=o[(r+2)%a]:(ks.subVectors(o[a-1],o[a-2]).add(o[a-1]),d=ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),p),b=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);b<1e-4&&(b=1),x<1e-4&&(x=b),m<1e-4&&(m=b),ul.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,x,b,m),dl.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,x,b,m),fl.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,x,b,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),dl.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),fl.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return n.set(ul.calc(l),dl.calc(l),fl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new D().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $0(i,e,t,n,o){const a=(n-e)*.5,s=(o-t)*.5,r=i*i,l=i*r;return(2*t-2*n+a+s)*l+(-3*t+3*n-2*a-s)*r+a*i+t}function Sh(i,e){const t=1-i;return t*t*e}function yh(i,e){return 2*(1-i)*i*e}function Ah(i,e){return i*i*e}function Ja(i,e,t,n){return Sh(i,e)+yh(i,t)+Ah(i,n)}function Th(i,e){const t=1-i;return t*t*t*e}function Eh(i,e){const t=1-i;return 3*t*t*i*e}function Ch(i,e){return 3*(1-i)*i*i*e}function Rh(i,e){return i*i*i*e}function Ka(i,e,t,n,o){return Th(i,e)+Eh(i,t)+Ch(i,n)+Rh(i,o)}class md extends zi{constructor(e=new Ne,t=new Ne,n=new Ne,o=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new Ne){const n=t,o=this.v0,a=this.v1,s=this.v2,r=this.v3;return n.set(Ka(e,o.x,a.x,s.x,r.x),Ka(e,o.y,a.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ph extends zi{constructor(e=new D,t=new D,n=new D,o=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new D){const n=t,o=this.v0,a=this.v1,s=this.v2,r=this.v3;return n.set(Ka(e,o.x,a.x,s.x,r.x),Ka(e,o.y,a.y,s.y,r.y),Ka(e,o.z,a.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gd extends zi{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends zi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vd extends zi{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){const n=t,o=this.v0,a=this.v1,s=this.v2;return n.set(Ja(e,o.x,a.x,s.x),Ja(e,o.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xd extends zi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,o=this.v0,a=this.v1,s=this.v2;return n.set(Ja(e,o.x,a.x,s.x),Ja(e,o.y,a.y,s.y),Ja(e,o.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _d extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const n=t,o=this.points,a=(o.length-1)*e,s=Math.floor(a),r=a-s,l=o[s===0?s:s-1],c=o[s],d=o[s>o.length-2?o.length-1:s+1],h=o[s>o.length-3?o.length-1:s+2];return n.set($0(r,l.x,c.x,d.x,h.x),$0(r,l.y,c.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new Ne().fromArray(o))}return this}}var vr=Object.freeze({__proto__:null,ArcCurve:bh,CatmullRomCurve3:vo,CubicBezierCurve:md,CubicBezierCurve3:Ph,EllipseCurve:a0,LineCurve:gd,LineCurve3:Ih,QuadraticBezierCurve:vd,QuadraticBezierCurve3:xd,SplineCurve:_d});class Lh extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=n){const s=o[a]-n,r=this.curves[a],l=r.getLength(),c=l===0?0:1-s/l;return r.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,o=this.curves.length;n<o;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let o=0,a=this.curves;o<a.length;o++){const s=a[o],r=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(r);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const o=e.curves[t];this.curves.push(new vr[o.type]().fromJSON(o))}return this}}class Z0 extends Lh{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gd(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,o){const a=new vd(this.currentPoint.clone(),new Ne(e,t),new Ne(n,o));return this.curves.push(a),this.currentPoint.set(n,o),this}bezierCurveTo(e,t,n,o,a,s){const r=new md(this.currentPoint.clone(),new Ne(e,t),new Ne(n,o),new Ne(a,s));return this.curves.push(r),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,o,a,s){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,n,o,a,s),this}absarc(e,t,n,o,a,s){return this.absellipse(e,t,n,n,o,a,s),this}ellipse(e,t,n,o,a,s,r,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,o,a,s,r,l),this}absellipse(e,t,n,o,a,s,r,l){const c=new a0(e,t,n,o,a,s,r,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Aa extends Z0{constructor(e){super(e),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,o=this.holes.length;n<o;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const o=e.holes[t];this.holes.push(new Z0().fromJSON(o))}return this}}function Dh(i,e,t=2){const n=e&&e.length,o=n?e[0]*t:i.length;let a=Md(i,0,o,t,!0);const s=[];if(!a||a.next===a.prev)return s;let r,l,c;if(n&&(a=Bh(i,e,a,t)),i.length>80*t){r=i[0],l=i[1];let d=r,h=l;for(let f=t;f<o;f+=t){const p=i[f],x=i[f+1];p<r&&(r=p),x<l&&(l=x),p>d&&(d=p),x>h&&(h=x)}c=Math.max(d-r,h-l),c=c!==0?32767/c:0}return as(a,s,t,r,l,c,0),s}function Md(i,e,t,n,o){let a;if(o===$h(i,e,t,n)>0)for(let s=e;s<t;s+=n)a=J0(s/n|0,i[s],i[s+1],a);else for(let s=t-n;s>=e;s-=n)a=J0(s/n|0,i[s],i[s+1],a);return a&&xa(a,a.next)&&(rs(a),a=a.next),a}function Bo(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xa(t,t.next)||ln(t.prev,t,t.next)===0)){if(rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function as(i,e,t,n,o,a,s){if(!i)return;!s&&a&&Hh(i,n,o,a);let r=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?Nh(i,n,o,a):Uh(i)){e.push(l.i,i.i,c.i),rs(i),i=c.next,r=c.next;continue}if(i=c,i===r){s?s===1?(i=Fh(Bo(i),e),as(i,e,t,n,o,a,2)):s===2&&Oh(i,e,t,n,o,a):as(Bo(i),e,t,n,o,a,1);break}}}function Uh(i){const e=i.prev,t=i,n=i.next;if(ln(e,t,n)>=0)return!1;const o=e.x,a=t.x,s=n.x,r=e.y,l=t.y,c=n.y,d=Math.min(o,a,s),h=Math.min(r,l,c),f=Math.max(o,a,s),p=Math.max(r,l,c);let x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=f&&x.y>=h&&x.y<=p&&Xa(o,r,a,l,s,c,x.x,x.y)&&ln(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Nh(i,e,t,n){const o=i.prev,a=i,s=i.next;if(ln(o,a,s)>=0)return!1;const r=o.x,l=a.x,c=s.x,d=o.y,h=a.y,f=s.y,p=Math.min(r,l,c),x=Math.min(d,h,f),b=Math.max(r,l,c),m=Math.max(d,h,f),u=yc(p,x,e,t,n),g=yc(b,m,e,t,n);let _=i.prevZ,w=i.nextZ;for(;_&&_.z>=u&&w&&w.z<=g;){if(_.x>=p&&_.x<=b&&_.y>=x&&_.y<=m&&_!==o&&_!==s&&Xa(r,d,l,h,c,f,_.x,_.y)&&ln(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=b&&w.y>=x&&w.y<=m&&w!==o&&w!==s&&Xa(r,d,l,h,c,f,w.x,w.y)&&ln(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=u;){if(_.x>=p&&_.x<=b&&_.y>=x&&_.y<=m&&_!==o&&_!==s&&Xa(r,d,l,h,c,f,_.x,_.y)&&ln(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=g;){if(w.x>=p&&w.x<=b&&w.y>=x&&w.y<=m&&w!==o&&w!==s&&Xa(r,d,l,h,c,f,w.x,w.y)&&ln(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Fh(i,e){let t=i;do{const n=t.prev,o=t.next.next;!xa(n,o)&&bd(n,t,t.next,o)&&ss(n,o)&&ss(o,n)&&(e.push(n.i,t.i,o.i),rs(t),rs(t.next),t=i=o),t=t.next}while(t!==i);return Bo(t)}function Oh(i,e,t,n,o,a){let s=i;do{let r=s.next.next;for(;r!==s.prev;){if(s.i!==r.i&&jh(s,r)){let l=Sd(s,r);s=Bo(s,s.next),l=Bo(l,l.next),as(s,e,t,n,o,a,0),as(l,e,t,n,o,a,0);return}r=r.next}s=s.next}while(s!==i)}function Bh(i,e,t,n){const o=[];for(let a=0,s=e.length;a<s;a++){const r=e[a]*n,l=a<s-1?e[a+1]*n:i.length,c=Md(i,r,l,n,!1);c===c.next&&(c.steiner=!0),o.push(Xh(c))}o.sort(zh);for(let a=0;a<o.length;a++)t=kh(o[a],t);return t}function zh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=n-o}return t}function kh(i,e){const t=Vh(i,e);if(!t)return e;const n=Sd(t,i);return Bo(n,n.next),Bo(t,t.next)}function Vh(i,e){let t=e;const n=i.x,o=i.y;let a=-1/0,s;if(xa(i,t))return t;do{if(xa(i,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>a&&(a=h,s=t.x<t.next.x?t:t.next,h===n))return s}t=t.next}while(t!==e);if(!s)return null;const r=s,l=s.x,c=s.y;let d=1/0;t=s;do{if(n>=t.x&&t.x>=l&&n!==t.x&&wd(o<c?n:a,o,l,c,o<c?a:n,o,t.x,t.y)){const h=Math.abs(o-t.y)/(n-t.x);ss(t,i)&&(h<d||h===d&&(t.x>s.x||t.x===s.x&&Gh(s,t)))&&(s=t,d=h)}t=t.next}while(t!==r);return s}function Gh(i,e){return ln(i.prev,i,e.prev)<0&&ln(e.next,i,i.next)<0}function Hh(i,e,t,n){let o=i;do o.z===0&&(o.z=yc(o.x,o.y,e,t,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,Wh(o)}function Wh(i){let e,t=1;do{let n=i,o;i=null;let a=null;for(e=0;n;){e++;let s=n,r=0;for(let c=0;c<t&&(r++,s=s.nextZ,!!s);c++);let l=t;for(;r>0||l>0&&s;)r!==0&&(l===0||!s||n.z<=s.z)?(o=n,n=n.nextZ,r--):(o=s,s=s.nextZ,l--),a?a.nextZ=o:i=o,o.prevZ=a,a=o;n=s}a.nextZ=null,t*=2}while(e>1);return i}function yc(i,e,t,n,o){return i=(i-t)*o|0,e=(e-n)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Xh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wd(i,e,t,n,o,a,s,r){return(o-s)*(e-r)>=(i-s)*(a-r)&&(i-s)*(n-r)>=(t-s)*(e-r)&&(t-s)*(a-r)>=(o-s)*(n-r)}function Xa(i,e,t,n,o,a,s,r){return!(i===s&&e===r)&&wd(i,e,t,n,o,a,s,r)}function jh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!qh(i,e)&&(ss(i,e)&&ss(e,i)&&Yh(i,e)&&(ln(i.prev,i,e.prev)||ln(i,e.prev,e))||xa(i,e)&&ln(i.prev,i,i.next)>0&&ln(e.prev,e,e.next)>0)}function ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xa(i,e){return i.x===e.x&&i.y===e.y}function bd(i,e,t,n){const o=Gs(ln(i,e,t)),a=Gs(ln(i,e,n)),s=Gs(ln(t,n,i)),r=Gs(ln(t,n,e));return!!(o!==a&&s!==r||o===0&&Vs(i,t,e)||a===0&&Vs(i,n,e)||s===0&&Vs(t,i,n)||r===0&&Vs(t,e,n))}function Vs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Gs(i){return i>0?1:i<0?-1:0}function qh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ss(i,e){return ln(i.prev,i,i.next)<0?ln(i,e,i.next)>=0&&ln(i,i.prev,e)>=0:ln(i,e,i.prev)<0||ln(i,i.next,e)<0}function Yh(i,e){let t=i,n=!1;const o=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sd(i,e){const t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),o=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function J0(i,e,t,n){const o=Ac(i,e,t);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $h(i,e,t,n){let o=0;for(let a=e,s=t-n;a<t;a+=n)o+=(i[s]-i[a])*(i[a+1]+i[s+1]),s=a;return o}class Zh{static triangulate(e,t,n=2){return Dh(e,t,n)}}class Ki{static area(e){const t=e.length;let n=0;for(let o=t-1,a=0;a<t;o=a++)n+=e[o].x*e[a].y-e[a].x*e[o].y;return n*.5}static isClockWise(e){return Ki.area(e)<0}static triangulateShape(e,t){const n=[],o=[],a=[];K0(e),Q0(n,e);let s=e.length;t.forEach(K0);for(let l=0;l<t.length;l++)o.push(s),s+=t[l].length,Q0(n,t[l]);const r=Zh.triangulate(n,o);for(let l=0;l<r.length;l+=3)a.push(r.slice(l,l+3));return a}}function K0(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Q0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Er extends Lt{constructor(e=new Aa([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,o=[],a=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];s(c)}this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(a,2)),this.computeVertexNormals();function s(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Jh;let _,w=!1,E,S,C,M;if(u){_=u.getSpacedPoints(d),w=!0,f=!1;const V=u.isCatmullRomCurve3?u.closed:!1;E=u.computeFrenetFrames(d,V),S=new D,C=new D,M=new D}f||(m=0,p=0,x=0,b=0);const A=r.extractPoints(c);let v=A.shape;const R=A.holes;if(!Ki.isClockWise(v)){v=v.reverse();for(let V=0,q=R.length;V<q;V++){const X=R[V];Ki.isClockWise(X)&&(R[V]=X.reverse())}}function H(V){const X=10000000000000001e-36;let O=V[0];for(let P=1;P<=V.length;P++){const ce=P%V.length,Me=V[ce],ye=Me.x-O.x,se=Me.y-O.y,I=ye*ye+se*se,T=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(O.x),Math.abs(O.y)),$=X*T*T;if(I<=$){V.splice(ce,1),P--;continue}O=Me}}H(v),R.forEach(H);const z=R.length,Y=v;for(let V=0;V<z;V++){const q=R[V];v=v.concat(q)}function j(V,q,X){return q||Bt("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(q,X)}const Q=v.length;function _e(V,q,X){let O,P,ce;const Me=V.x-q.x,ye=V.y-q.y,se=X.x-V.x,I=X.y-V.y,T=Me*Me+ye*ye,$=Me*I-ye*se;if(Math.abs($)>Number.EPSILON){const ae=Math.sqrt(T),Re=Math.sqrt(se*se+I*I),we=q.x-ye/ae,Ge=q.y+Me/ae,Oe=X.x-I/Re,je=X.y+se/Re,Je=((Oe-we)*I-(je-Ge)*se)/(Me*I-ye*se);O=we+Me*Je-V.x,P=Ge+ye*Je-V.y;const Fe=O*O+P*P;if(Fe<=2)return new Ne(O,P);ce=Math.sqrt(Fe/2)}else{let ae=!1;Me>Number.EPSILON?se>Number.EPSILON&&(ae=!0):Me<-Number.EPSILON?se<-Number.EPSILON&&(ae=!0):Math.sign(ye)===Math.sign(I)&&(ae=!0),ae?(O=-ye,P=Me,ce=Math.sqrt(T)):(O=Me,P=ye,ce=Math.sqrt(T/2))}return new Ne(O/ce,P/ce)}const Z=[];for(let V=0,q=Y.length,X=q-1,O=V+1;V<q;V++,X++,O++)X===q&&(X=0),O===q&&(O=0),Z[V]=_e(Y[V],Y[X],Y[O]);const W=[];let de,oe=Z.concat();for(let V=0,q=z;V<q;V++){const X=R[V];de=[];for(let O=0,P=X.length,ce=P-1,Me=O+1;O<P;O++,ce++,Me++)ce===P&&(ce=0),Me===P&&(Me=0),de[O]=_e(X[O],X[ce],X[Me]);W.push(de),oe=oe.concat(de)}let ge;if(m===0)ge=Ki.triangulateShape(Y,R);else{const V=[],q=[];for(let X=0;X<m;X++){const O=X/m,P=p*Math.cos(O*Math.PI/2),ce=x*Math.sin(O*Math.PI/2)+b;for(let Me=0,ye=Y.length;Me<ye;Me++){const se=j(Y[Me],Z[Me],ce);y(se.x,se.y,-P),O===0&&V.push(se)}for(let Me=0,ye=z;Me<ye;Me++){const se=R[Me];de=W[Me];const I=[];for(let T=0,$=se.length;T<$;T++){const ae=j(se[T],de[T],ce);y(ae.x,ae.y,-P),O===0&&I.push(ae)}O===0&&q.push(I)}}ge=Ki.triangulateShape(V,q)}const ie=ge.length,Ce=x+b;for(let V=0;V<Q;V++){const q=f?j(v[V],oe[V],Ce):v[V];w?(C.copy(E.normals[0]).multiplyScalar(q.x),S.copy(E.binormals[0]).multiplyScalar(q.y),M.copy(_[0]).add(C).add(S),y(M.x,M.y,M.z)):y(q.x,q.y,0)}for(let V=1;V<=d;V++)for(let q=0;q<Q;q++){const X=f?j(v[q],oe[q],Ce):v[q];w?(C.copy(E.normals[V]).multiplyScalar(X.x),S.copy(E.binormals[V]).multiplyScalar(X.y),M.copy(_[V]).add(C).add(S),y(M.x,M.y,M.z)):y(X.x,X.y,h/d*V)}for(let V=m-1;V>=0;V--){const q=V/m,X=p*Math.cos(q*Math.PI/2),O=x*Math.sin(q*Math.PI/2)+b;for(let P=0,ce=Y.length;P<ce;P++){const Me=j(Y[P],Z[P],O);y(Me.x,Me.y,h+X)}for(let P=0,ce=R.length;P<ce;P++){const Me=R[P];de=W[P];for(let ye=0,se=Me.length;ye<se;ye++){const I=j(Me[ye],de[ye],O);w?y(I.x,I.y+_[d-1].y,_[d-1].x+X):y(I.x,I.y,h+X)}}}J(),le();function J(){const V=o.length/3;if(f){let q=0,X=Q*q;for(let O=0;O<ie;O++){const P=ge[O];B(P[2]+X,P[1]+X,P[0]+X)}q=d+m*2,X=Q*q;for(let O=0;O<ie;O++){const P=ge[O];B(P[0]+X,P[1]+X,P[2]+X)}}else{for(let q=0;q<ie;q++){const X=ge[q];B(X[2],X[1],X[0])}for(let q=0;q<ie;q++){const X=ge[q];B(X[0]+Q*d,X[1]+Q*d,X[2]+Q*d)}}n.addGroup(V,o.length/3-V,0)}function le(){const V=o.length/3;let q=0;N(Y,q),q+=Y.length;for(let X=0,O=R.length;X<O;X++){const P=R[X];N(P,q),q+=P.length}n.addGroup(V,o.length/3-V,1)}function N(V,q){let X=V.length;for(;--X>=0;){const O=X;let P=X-1;P<0&&(P=V.length-1);for(let ce=0,Me=d+m*2;ce<Me;ce++){const ye=Q*ce,se=Q*(ce+1),I=q+O+ye,T=q+P+ye,$=q+P+se,ae=q+O+se;k(I,T,$,ae)}}}function y(V,q,X){l.push(V),l.push(q),l.push(X)}function B(V,q,X){he(V),he(q),he(X);const O=o.length/3,P=g.generateTopUV(n,o,O-3,O-2,O-1);ne(P[0]),ne(P[1]),ne(P[2])}function k(V,q,X,O){he(V),he(q),he(O),he(q),he(X),he(O);const P=o.length/3,ce=g.generateSideWallUV(n,o,P-6,P-3,P-2,P-1);ne(ce[0]),ne(ce[1]),ne(ce[3]),ne(ce[1]),ne(ce[2]),ne(ce[3])}function he(V){o.push(l[V*3+0]),o.push(l[V*3+1]),o.push(l[V*3+2])}function ne(V){a.push(V.x),a.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kh(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,s=e.shapes.length;a<s;a++){const r=t[e.shapes[a]];n.push(r)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new vr[o.type]().fromJSON(o)),new Er(n,e.options)}}const Jh={generateTopUV:function(i,e,t,n,o){const a=e[t*3],s=e[t*3+1],r=e[n*3],l=e[n*3+1],c=e[o*3],d=e[o*3+1];return[new Ne(a,s),new Ne(r,l),new Ne(c,d)]},generateSideWallUV:function(i,e,t,n,o,a){const s=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],h=e[n*3+2],f=e[o*3],p=e[o*3+1],x=e[o*3+2],b=e[a*3],m=e[a*3+1],u=e[a*3+2];return Math.abs(r-d)<Math.abs(s-c)?[new Ne(s,1-l),new Ne(c,1-h),new Ne(f,1-x),new Ne(b,1-u)]:[new Ne(r,1-l),new Ne(d,1-h),new Ne(p,1-x),new Ne(m,1-u)]}};function Kh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,o=i.length;n<o;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class r0 extends o0{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,o=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r0(e.radius,e.detail)}}class xo extends Lt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:o},t=Math.floor(t),o=Pt(o,0,Math.PI*2);const a=[],s=[],r=[],l=[],c=[],d=1/t,h=new D,f=new Ne,p=new D,x=new D,b=new D;let m=0,u=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,b.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,x.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),l.push(p.x,p.y,p.z),b.copy(x)}for(let g=0;g<=t;g++){const _=n+g*d*o,w=Math.sin(_),E=Math.cos(_);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*w,h.y=e[S].y,h.z=e[S].x*E,s.push(h.x,h.y,h.z),f.x=g/t,f.y=S/(e.length-1),r.push(f.x,f.y);const C=l[3*S+0]*w,M=l[3*S+1],A=l[3*S+0]*E;c.push(C,M,A)}}for(let g=0;g<t;g++)for(let _=0;_<e.length-1;_++){const w=_+g*e.length,E=w,S=w+e.length,C=w+e.length+1,M=w+1;a.push(E,S,M),a.push(C,M,S)}this.setIndex(a),this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.points,e.segments,e.phiStart,e.phiLength)}}class Gt extends Lt{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,s=t/2,r=Math.floor(n),l=Math.floor(o),c=r+1,d=l+1,h=e/r,f=t/l,p=[],x=[],b=[],m=[];for(let u=0;u<d;u++){const g=u*f-s;for(let _=0;_<c;_++){const w=_*h-a;x.push(w,-g,0),b.push(0,0,1),m.push(_/r),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<r;g++){const _=g+c*u,w=g+c*(u+1),E=g+1+c*(u+1),S=g+1+c*u;p.push(_,w,S),p.push(w,E,S)}this.setIndex(p),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(b,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.widthSegments,e.heightSegments)}}class l0 extends Lt{constructor(e=.5,t=1,n=32,o=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:o,thetaStart:a,thetaLength:s},n=Math.max(3,n),o=Math.max(1,o);const r=[],l=[],c=[],d=[];let h=e;const f=(t-e)/o,p=new D,x=new Ne;for(let b=0;b<=o;b++){for(let m=0;m<=n;m++){const u=a+m/n*s;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,d.push(x.x,x.y)}h+=f}for(let b=0;b<o;b++){const m=b*(n+1);for(let u=0;u<n;u++){const g=u+m,_=g,w=g+n+1,E=g+n+2,S=g+1;r.push(_,w,S),r.push(w,E,S)}}this.setIndex(r),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new l0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Cr extends Lt{constructor(e=new Aa([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],o=[],a=[],s=[];let r=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(r,l,d),r+=l,l=0;this.setIndex(n),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(s,2));function c(d){const h=o.length/3,f=d.extractPoints(t);let p=f.shape;const x=f.holes;Ki.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=x.length;m<u;m++){const g=x[m];Ki.isClockWise(g)===!0&&(x[m]=g.reverse())}const b=Ki.triangulateShape(p,x);for(let m=0,u=x.length;m<u;m++){const g=x[m];p=p.concat(g)}for(let m=0,u=p.length;m<u;m++){const g=p[m];o.push(g.x,g.y,0),a.push(0,0,1),s.push(g.x,g.y)}for(let m=0,u=b.length;m<u;m++){const g=b[m],_=g[0]+h,w=g[1]+h,E=g[2]+h;n.push(_,w,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qh(t,e)}static fromJSON(e,t){const n=[];for(let o=0,a=e.shapes.length;o<a;o++){const s=t[e.shapes[o]];n.push(s)}return new Cr(n,e.curveSegments)}}function Qh(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const o=i[t];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e}class At extends Lt{constructor(e=1,t=32,n=16,o=0,a=Math.PI*2,s=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:a,thetaStart:s,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+r,Math.PI);let c=0;const d=[],h=new D,f=new D,p=[],x=[],b=[],m=[];for(let u=0;u<=n;u++){const g=[],_=u/n;let w=0;u===0&&s===0?w=.5/t:u===n&&l===Math.PI&&(w=-.5/t);for(let E=0;E<=t;E++){const S=E/t;h.x=-e*Math.cos(o+S*a)*Math.sin(s+_*r),h.y=e*Math.cos(s+_*r),h.z=e*Math.sin(o+S*a)*Math.sin(s+_*r),x.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),m.push(S+w,1-_),g.push(c++)}d.push(g)}for(let u=0;u<n;u++)for(let g=0;g<t;g++){const _=d[u][g+1],w=d[u][g],E=d[u+1][g],S=d[u+1][g+1];(u!==0||s>0)&&p.push(_,w,S),(u!==n-1||l<Math.PI)&&p.push(w,E,S)}this.setIndex(p),this.setAttribute("position",new mt(x,3)),this.setAttribute("normal",new mt(b,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Un extends Lt{constructor(e=1,t=.4,n=12,o=48,a=Math.PI*2,s=0,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:a,thetaStart:s,thetaLength:r},n=Math.floor(n),o=Math.floor(o);const l=[],c=[],d=[],h=[],f=new D,p=new D,x=new D;for(let b=0;b<=n;b++){const m=s+b/n*r;for(let u=0;u<=o;u++){const g=u/o*a;p.x=(e+t*Math.cos(m))*Math.cos(g),p.y=(e+t*Math.cos(m))*Math.sin(g),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),x.subVectors(p,f).normalize(),d.push(x.x,x.y,x.z),h.push(u/o),h.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=o;m++){const u=(o+1)*b+m-1,g=(o+1)*(b-1)+m-1,_=(o+1)*(b-1)+m,w=(o+1)*b+m;l.push(u,g,w),l.push(g,_,w)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zo extends Lt{constructor(e=new xd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,o=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:o,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const r=new D,l=new D,c=new Ne;let d=new D;const h=[],f=[],p=[],x=[];b(),this.setIndex(x),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function b(){for(let _=0;_<t;_++)m(_);m(a===!1?t:0),g(),u()}function m(_){d=e.getPointAt(_/t,d);const w=s.normals[_],E=s.binormals[_];for(let S=0;S<=o;S++){const C=S/o*Math.PI*2,M=Math.sin(C),A=-Math.cos(C);l.x=A*w.x+M*E.x,l.y=A*w.y+M*E.y,l.z=A*w.z+M*E.z,l.normalize(),f.push(l.x,l.y,l.z),r.x=d.x+n*l.x,r.y=d.y+n*l.y,r.z=d.z+n*l.z,h.push(r.x,r.y,r.z)}}function u(){for(let _=1;_<=t;_++)for(let w=1;w<=o;w++){const E=(o+1)*(_-1)+(w-1),S=(o+1)*_+(w-1),C=(o+1)*_+w,M=(o+1)*(_-1)+w;x.push(E,S,M),x.push(S,C,M)}}function g(){for(let _=0;_<=t;_++)for(let w=0;w<=o;w++)c.x=_/t,c.y=w/o,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zo(new vr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function _a(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const n=_a(i[t]);for(const o in n)e[o]=n[o]}return e}function ep(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}const Ma={clone:_a,merge:kn};var tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ad extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ip extends io{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Td extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class op extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rr extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class us extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const hl=new Ft,eu=new D,tu=new D;class c0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new i0,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===is||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hs=new D,Ws=new Jn,Ci=new D;class Ed extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Ws,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hs,Ws,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const uo=new D,nu=new Ne,iu=new Ne;class Yn extends Ed{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){uo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(uo.x,uo.y).multiplyScalar(-e/uo.z),uo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(uo.x,uo.y).multiplyScalar(-e/uo.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,o,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*o/l,t-=s.offsetY*n/c,o*=s.width/l,n*=s.height/c}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ap extends c0{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=va*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wa extends Rr{constructor(e,t,n=0,o=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=o,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new ap}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class sp extends c0{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gn extends Rr{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pr extends Ed{constructor(e=-1,t=1,n=1,o=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,s=n+e,r=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rp extends c0{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uo extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new rp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const oa=-90,aa=1;class lp extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(oa,aa,e,t);o.layers=this.layers,this.add(o);const a=new Yn(oa,aa,e,t);a.layers=this.layers,this.add(a);const s=new Yn(oa,aa,e,t);s.layers=this.layers,this.add(s);const r=new Yn(oa,aa,e,t);r.layers=this.layers,this.add(r);const l=new Yn(oa,aa,e,t);l.layers=this.layers,this.add(l);const c=new Yn(oa,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,s,r,l]=t;for(const c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,r,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,3,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class cp extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class up{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function dp(){this._document.hidden===!1&&this.reset()}const ou=new Ft;class fp{constructor(e,t,n=0,o=1/0){this.ray=new Tr(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new Kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,n=[]){return Tc(e,this,n,t),n.sort(au),n}intersectObjects(e,t=!0,n=[]){for(let o=0,a=e.length;o<a;o++)Tc(e[o],this,n,t);return n.sort(au),n}}function au(i,e){return i.distance-e.distance}function Tc(i,e,t,n){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const a=i.children;for(let s=0,r=a.length;s<r;s++)Tc(a[s],e,t,!0)}}function su(i,e,t,n){const o=hp(n);switch(t){case ad:return i*e;case Hc:return i*e/o.components*o.byteLength;case Wc:return i*e/o.components*o.byteLength;case ma:return i*e*2/o.components*o.byteLength;case Xc:return i*e*2/o.components*o.byteLength;case sd:return i*e*3/o.components*o.byteLength;case hi:return i*e*4/o.components*o.byteLength;case jc:return i*e*4/o.components*o.byteLength;case ir:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ar:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case ql:return Math.max(i,16)*Math.max(e,8)/4;case Wl:case jl:return Math.max(i,8)*Math.max(e,8)/2;case Yl:case $l:case Jl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(i){switch(i){case ai:case td:return{byteLength:1,components:1};case ts:case nd:case Zn:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case Bi:case kc:case si:return{byteLength:4,components:1};case id:case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cd(){let i=null,e=!1,t=null,n=null;function o(a,s){t(a,s),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function pp(i){const e=new WeakMap;function t(r,l){const c=r.array,d=r.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),r.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:h}}function n(r,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,r),h.length===0)i.bufferSubData(c,0,d);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],b=h[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++f,h[f]=b)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const b=h[p];i.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function s(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const d=e.get(r);(!d||d.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:o,remove:a,update:s}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:vp,alphamap_pars_fragment:xp,alphatest_fragment:_p,alphatest_pars_fragment:Mp,aomap_fragment:wp,aomap_pars_fragment:bp,batching_pars_vertex:Sp,batching_vertex:yp,begin_vertex:Ap,beginnormal_vertex:Tp,bsdfs:Ep,iridescence_fragment:Cp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:Up,color_pars_fragment:Np,color_pars_vertex:Fp,color_vertex:Op,common:Bp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:jp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:$p,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:rm,envmap_vertex:Jp,fog_vertex:Kp,fog_pars_vertex:Qp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:sm,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:um,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:hm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:Mm,map_fragment:wm,map_pars_fragment:bm,map_particle_fragment:Sm,map_particle_pars_fragment:ym,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Em,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Um,normal_pars_vertex:Nm,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Hm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:jm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Km,shadowmask_pars_fragment:Qm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:fg,worldpos_vertex:hg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:vg,cube_vert:xg,cube_frag:_g,depth_vert:Mg,depth_frag:wg,distance_vert:bg,distance_frag:Sg,equirect_vert:yg,equirect_frag:Ag,linedashed_vert:Tg,linedashed_frag:Eg,meshbasic_vert:Cg,meshbasic_frag:Rg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ug,meshnormal_frag:Ng,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:kg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Hg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:jg,sprite_frag:qg},lt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Ui={basic:{uniforms:kn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:kn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:kn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:kn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:kn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:kn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:kn([lt.points,lt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:kn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:kn([lt.common,lt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:kn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:kn([lt.sprite,lt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:kn([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:kn([lt.lights,lt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ui.physical={uniforms:kn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Xs={r:0,b:0,g:0},yo=new ri,Yg=new Ft;function $g(i,e,t,n,o,a){const s=new Ve(0);let r=o===!0?0:1,l,c,d=null,h=0,f=null;function p(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const w=g.backgroundBlurriness>0;_=e.get(_,w)}return _}function x(g){let _=!1;const w=p(g);w===null?m(s,r):w&&w.isColor&&(m(w,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(g,_){const w=p(_);w&&(w.isCubeTexture||w.mapping===yr)?(c===void 0&&(c=new L(new Le(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:_a(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),yo.copy(_.backgroundRotation),yo.x*=-1,yo.y*=-1,yo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yo.y*=-1,yo.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(yo)),c.material.toneMapped=Vt.getTransfer(w.colorSpace)!==Yt,(d!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new L(new Gt(2,2),new Qt({name:"BackgroundMaterial",uniforms:_a(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:eo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,_){g.getRGB(Xs,yd(i)),t.buffers.color.setClear(Xs.r,Xs.g,Xs.b,_,a)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(g,_=1){s.set(g),r=_,m(s,r)},getClearAlpha:function(){return r},setClearAlpha:function(g){r=g,m(s,r)},render:x,addToRenderList:b,dispose:u}}function Zg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=f(null);let a=o,s=!1;function r(R,F,H,z,Y){let j=!1;const Q=h(R,z,H,F);a!==Q&&(a=Q,c(a.object)),j=p(R,z,H,Y),j&&x(R,z,H,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,w(R,F,H,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function h(R,F,H,z){const Y=z.wireframe===!0;let j=n[F.id];j===void 0&&(j={},n[F.id]=j);const Q=R.isInstancedMesh===!0?R.id:0;let _e=j[Q];_e===void 0&&(_e={},j[Q]=_e);let Z=_e[H.id];Z===void 0&&(Z={},_e[H.id]=Z);let W=Z[Y];return W===void 0&&(W=f(l()),Z[Y]=W),W}function f(R){const F=[],H=[],z=[];for(let Y=0;Y<t;Y++)F[Y]=0,H[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:z,object:R,attributes:{},index:null}}function p(R,F,H,z){const Y=a.attributes,j=F.attributes;let Q=0;const _e=H.getAttributes();for(const Z in _e)if(_e[Z].location>=0){const de=Y[Z];let oe=j[Z];if(oe===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),de===void 0||de.attribute!==oe||oe&&de.data!==oe.data)return!0;Q++}return a.attributesNum!==Q||a.index!==z}function x(R,F,H,z){const Y={},j=F.attributes;let Q=0;const _e=H.getAttributes();for(const Z in _e)if(_e[Z].location>=0){let de=j[Z];de===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(de=R.instanceColor));const oe={};oe.attribute=de,de&&de.data&&(oe.data=de.data),Y[Z]=oe,Q++}a.attributes=Y,a.attributesNum=Q,a.index=z}function b(){const R=a.newAttributes;for(let F=0,H=R.length;F<H;F++)R[F]=0}function m(R){u(R,0)}function u(R,F){const H=a.newAttributes,z=a.enabledAttributes,Y=a.attributeDivisors;H[R]=1,z[R]===0&&(i.enableVertexAttribArray(R),z[R]=1),Y[R]!==F&&(i.vertexAttribDivisor(R,F),Y[R]=F)}function g(){const R=a.newAttributes,F=a.enabledAttributes;for(let H=0,z=F.length;H<z;H++)F[H]!==R[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function _(R,F,H,z,Y,j,Q){Q===!0?i.vertexAttribIPointer(R,F,H,Y,j):i.vertexAttribPointer(R,F,H,z,Y,j)}function w(R,F,H,z){b();const Y=z.attributes,j=H.getAttributes(),Q=F.defaultAttributeValues;for(const _e in j){const Z=j[_e];if(Z.location>=0){let W=Y[_e];if(W===void 0&&(_e==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),_e==="instanceColor"&&R.instanceColor&&(W=R.instanceColor)),W!==void 0){const de=W.normalized,oe=W.itemSize,ge=e.get(W);if(ge===void 0)continue;const ie=ge.buffer,Ce=ge.type,J=ge.bytesPerElement,le=Ce===i.INT||Ce===i.UNSIGNED_INT||W.gpuType===kc;if(W.isInterleavedBufferAttribute){const N=W.data,y=N.stride,B=W.offset;if(N.isInstancedInterleavedBuffer){for(let k=0;k<Z.locationSize;k++)u(Z.location+k,N.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let k=0;k<Z.locationSize;k++)m(Z.location+k);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let k=0;k<Z.locationSize;k++)_(Z.location+k,oe/Z.locationSize,Ce,de,y*J,(B+oe/Z.locationSize*k)*J,le)}else{if(W.isInstancedBufferAttribute){for(let N=0;N<Z.locationSize;N++)u(Z.location+N,W.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let N=0;N<Z.locationSize;N++)m(Z.location+N);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let N=0;N<Z.locationSize;N++)_(Z.location+N,oe/Z.locationSize,Ce,de,oe*J,oe/Z.locationSize*N*J,le)}}else if(Q!==void 0){const de=Q[_e];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(Z.location,de);break;case 3:i.vertexAttrib3fv(Z.location,de);break;case 4:i.vertexAttrib4fv(Z.location,de);break;default:i.vertexAttrib1fv(Z.location,de)}}}}g()}function E(){A();for(const R in n){const F=n[R];for(const H in F){const z=F[H];for(const Y in z){const j=z[Y];for(const Q in j)d(j[Q].object),delete j[Q];delete z[Y]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const H in F){const z=F[H];for(const Y in z){const j=z[Y];for(const Q in j)d(j[Q].object),delete j[Q];delete z[Y]}}delete n[R.id]}function C(R){for(const F in n){const H=n[F];for(const z in H){const Y=H[z];if(Y[R.id]===void 0)continue;const j=Y[R.id];for(const Q in j)d(j[Q].object),delete j[Q];delete Y[R.id]}}}function M(R){for(const F in n){const H=n[F],z=R.isInstancedMesh===!0?R.id:0,Y=H[z];if(Y!==void 0){for(const j in Y){const Q=Y[j];for(const _e in Q)d(Q[_e].object),delete Q[_e];delete Y[j]}delete H[z],Object.keys(H).length===0&&delete n[F]}}}function A(){v(),s=!0,a!==o&&(a=o,c(a.object))}function v(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:r,reset:A,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:g}}function Jg(i,e,t){let n;function o(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function r(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];t.update(p,n,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let x=0;for(let b=0;b<h;b++)x+=d[b]*f[b];t.update(x,n,1)}}this.setMode=o,this.render=a,this.renderInstances=s,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Kg(i,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(C){return!(C!==hi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const M=C===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ai&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!M)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Mt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:w,maxSamples:E,samples:S}}function Qg(i){const e=this;let t=null,n=0,o=!1,a=!1;const s=new To,r=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||o;return o=f,n=h.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!o||x===null||x.length===0||a&&!m)a?d(null):c();else{const g=a?0:n,_=g*4;let w=u.clippingState||null;l.value=w,w=d(x,f,_,p);for(let E=0;E!==_;++E)w[E]=t[E];u.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,p,x){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,x!==!0||m===null){const u=p+b*4,g=f.matrixWorldInverse;r.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,w=p;_!==b;++_,w+=4)s.copy(h[_]).applyMatrix4(g,r),s.normal.toArray(m,w),m[w+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const go=4,ru=[.125,.215,.35,.446,.526,.582],Co=20,ev=256,Ba=new Pr,lu=new Ve;let pl=null,ml=0,gl=0,vl=!1;const tv=new D;class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,o=100,a={}){const{size:s=256,position:r=tv}=a;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,o,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pl,ml,gl),this._renderer.xr.enabled=vl,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Zn,format:hi,colorSpace:ga,depthBuffer:!1},o=cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nv(a)),this._blurMaterial=ov(a,e,t),this._ggxMaterial=iv(a,e,t)}return o}_compileMaterial(e){const t=new L(new Lt,e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,o,a){const l=new Yn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(lu),h.toneMapping=Fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(o),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new L(new Le,new Nt({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let u=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,u=!0):(m.color.copy(lu),u=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[_],a.y,a.z)):w===1?(l.up.set(0,0,c[_]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[_],a.z)):(l.up.set(0,c[_],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[_]));const E=this._cubeSize;sa(o,w*E,_>2?E:0,E,E),h.setRenderTarget(o),u&&h.render(b,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===No||e.mapping===pa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const a=o?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const r=a.uniforms;r.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const o=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,r=this._lodMeshes[n];r.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=0+c*1.25,p=h*f,{_lodMax:x}=this,b=this._sizeLods[n],m=3*b*(n>x-go?n-x+go:0),u=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,sa(a,m,u,3*b,2*b),o.setRenderTarget(a),o.render(r,Ba),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=x-n,sa(e,m,u,3*b,2*b),o.setRenderTarget(e),o.render(r,Ba)}_blur(e,t,n,o,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,o,"latitudinal",a),this._halfBlur(s,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,s,r){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[o];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Co-1),b=a/x,m=isFinite(a)?1+Math.floor(d*b):Co;m>Co&&Mt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Co}`);const u=[];let g=0;for(let C=0;C<Co;++C){const M=C/b,A=Math.exp(-M*M/2);u.push(A),C===0?g+=A:C<m&&(g+=2*A)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const w=this._sizeLods[o],E=3*w*(o>_-go?o-_+go:0),S=4*(this._cubeSize-w);sa(t,E,S,3*w,2*w),l.setRenderTarget(t),l.render(h,Ba)}}function nv(i){const e=[],t=[],n=[];let o=i;const a=i-go+1+ru.length;for(let s=0;s<a;s++){const r=Math.pow(2,o);e.push(r);let l=1/r;s>i-go?l=ru[s-i+go-1]:s===0&&(l=0),t.push(l);const c=1/(r-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,b=3,m=2,u=1,g=new Float32Array(b*x*p),_=new Float32Array(m*x*p),w=new Float32Array(u*x*p);for(let S=0;S<p;S++){const C=S%3*2/3-1,M=S>2?0:-1,A=[C,M,0,C+2/3,M,0,C+2/3,M+1,0,C,M,0,C+2/3,M+1,0,C,M+1,0];g.set(A,b*x*S),_.set(f,m*x*S);const v=[S,S,S,S,S,S];w.set(v,u*x*S)}const E=new Lt;E.setAttribute("position",new tn(g,b)),E.setAttribute("uv",new tn(_,m)),E.setAttribute("faceIndex",new tn(w,u)),n.push(new L(E,null)),o>go&&o--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function cu(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function iv(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ir(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ov(i,e,t){const n=new Float32Array(Co),o=new D(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:Co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function uu(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function du(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ir(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rd extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new hd(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Le(5,5,5),a=new Qt({name:"CubemapFromEquirect",uniforms:_a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Ti});a.uniforms.tEquirect.value=t;const s=new L(o,a),r=t.minFilter;return t.minFilter===Ro&&(t.minFilter=mn),new lp(1,10,this).update(e,s),t.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,o);e.setRenderTarget(a)}}function av(i){let e=new WeakMap,t=new WeakMap,n=null;function o(f,p=!1){return f==null?null:p?s(f):a(f)}function a(f){if(f&&f.isTexture){const p=f.mapping;if(p===Or||p===Br)if(e.has(f)){const x=e.get(f).texture;return r(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const b=new Rd(x.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",c),r(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const p=f.mapping,x=p===Or||p===Br,b=p===No||p===pa;if(x||b){let m=t.get(f);const u=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new Ec(i)),m=x?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return x&&g&&g.height>0||b&&g&&l(g)?(n===null&&(n=new Ec(i)),m=x?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function r(f,p){return p===Or?f.mapping=No:p===Br&&(f.mapping=pa),f}function l(f){let p=0;const x=6;for(let b=0;b<x;b++)f[b]!==void 0&&p++;return p===x}function c(f){const p=f.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:o,dispose:h}}function sv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const o=i.getExtension(n);return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&hr("WebGLRenderer: "+n+" extension not supported."),o}}}function rv(i,e,t,n){const o={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete o[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(h,f){return o[f.id]===!0||(f.addEventListener("dispose",s),o[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let b=0;if(x===void 0)return;if(p!==null){const g=p.array;b=p.version;for(let _=0,w=g.length;_<w;_+=3){const E=g[_+0],S=g[_+1],C=g[_+2];f.push(E,S,S,C,C,E)}}else{const g=x.array;b=x.version;for(let _=0,w=g.length/3-1;_<w;_+=3){const E=_+0,S=_+1,C=_+2;f.push(E,S,S,C,C,E)}}const m=new(x.count>=65535?e0:Qc)(f,1);m.version=b;const u=a.get(h);u&&e.remove(u),a.set(h,m)}function d(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:r,update:l,getWireframeAttribute:d}}function lv(i,e,t){let n;function o(f){n=f}let a,s;function r(f){a=f.type,s=f.bytesPerElement}function l(f,p){i.drawElements(n,p,a,f*s),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,a,f*s,x),t.update(p,n,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];t.update(m,n,1)}function h(f,p,x,b){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],b[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,b,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*b[g];t.update(u,n,1)}}this.setMode=o,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function cv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,r){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=r*(a/3);break;case i.LINES:t.lines+=r*(a/2);break;case i.LINE_STRIP:t.lines+=r*(a-1);break;case i.LINE_LOOP:t.lines+=r*a;break;case i.POINTS:t.points+=r*a;break;default:Bt("WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function uv(i,e,t){const n=new WeakMap,o=new rn;function a(s,r,l){const c=s.morphTargetInfluences,d=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(r);if(f===void 0||f.count!==h){let A=function(){C.dispose(),n.delete(r),r.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,b=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],u=r.morphAttributes.normal||[],g=r.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),b===!0&&(_=3);let w=r.attributes.position.count*_,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const S=new Float32Array(w*E*4*h),C=new ld(S,w,E,h);C.type=si,C.needsUpdate=!0;const M=_*4;for(let v=0;v<h;v++){const R=m[v],F=u[v],H=g[v],z=w*E*4*v;for(let Y=0;Y<R.count;Y++){const j=Y*M;p===!0&&(o.fromBufferAttribute(R,Y),S[z+j+0]=o.x,S[z+j+1]=o.y,S[z+j+2]=o.z,S[z+j+3]=0),x===!0&&(o.fromBufferAttribute(F,Y),S[z+j+4]=o.x,S[z+j+5]=o.y,S[z+j+6]=o.z,S[z+j+7]=0),b===!0&&(o.fromBufferAttribute(H,Y),S[z+j+8]=o.x,S[z+j+9]=o.y,S[z+j+10]=o.z,S[z+j+11]=H.itemSize===4?o.w:1)}}f={count:h,texture:C,size:new Ne(w,E)},n.set(r,f),r.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const x=r.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function dv(i,e,t,n,o){let a=new WeakMap;function s(c){const d=o.render.frame,h=c.geometry,f=e.get(c,h);if(a.get(f)!==d&&(e.update(f),a.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==d&&(p.update(),a.set(p,d))}return f}function r(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:r}}const fv={[Uc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function hv(i,e,t,n,o){const a=new Wn(e,t,{type:i,depthBuffer:n,stencilBuffer:o}),s=new Wn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),r=new Lt;r.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),r.setAttribute("uv",new mt([0,2,0,0,2,0],2));const l=new Ad({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new L(r,l),d=new Pr(-1,1,1,-1,0,1);let h=null,f=null,p=!1,x,b=null,m=[],u=!1;this.setSize=function(g,_){a.setSize(g,_),s.setSize(g,_);for(let w=0;w<m.length;w++){const E=m[w];E.setSize&&E.setSize(g,_)}},this.setEffects=function(g){m=g,u=m.length>0&&m[0].isRenderPass===!0;const _=a.width,w=a.height;for(let E=0;E<m.length;E++){const S=m[E];S.setSize&&S.setSize(_,w)}},this.begin=function(g,_){if(p||g.toneMapping===Fi&&m.length===0)return!1;if(b=_,_!==null){const w=_.width,E=_.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return u===!1&&g.setRenderTarget(a),x=g.toneMapping,g.toneMapping=Fi,!0},this.hasRenderPass=function(){return u},this.end=function(g,_){g.toneMapping=x,p=!0;let w=a,E=s;for(let S=0;S<m.length;S++){const C=m[S];if(C.enabled!==!1&&(C.render(g,E,w,_),C.needsSwap!==!1)){const M=w;w=E,E=M}}if(h!==g.outputColorSpace||f!==g.toneMapping){h=g.outputColorSpace,f=g.toneMapping,l.defines={},Vt.getTransfer(h)===Yt&&(l.defines.SRGB_TRANSFER="");const S=fv[f];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,g.setRenderTarget(b),g.render(c,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),s.dispose(),r.dispose(),l.dispose()}}const Pd=new Dn,Cc=new Fo(1,1),Id=new ld,Ld=new nh,Dd=new hd,fu=[],hu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Ta(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=fu[o];if(a===void 0&&(a=new Float32Array(o),fu[o]=a),e!==0){n.toArray(a,0);for(let s=1,r=0;s!==e;++s)r+=t,i[s].toArray(a,r)}return a}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lr(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;gu.set(n),i.uniformMatrix2fv(this.addr,!1,gu),_n(t,n)}}function _v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;mu.set(n),i.uniformMatrix3fv(this.addr,!1,mu),_n(t,n)}}function Mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;pu.set(n),i.uniformMatrix4fv(this.addr,!1,pu),_n(t,n)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function Av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function Rv(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=t.isReversedDepthBuffer()?$c:Yc,a=Cc):a=Pd,t.setTexture2D(e||a,o)}function Pv(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Ld,o)}function Iv(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Dd,o)}function Lv(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Id,o)}function Dv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return vv;case 35674:return xv;case 35675:return _v;case 35676:return Mv;case 5124:case 35670:return wv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return yv;case 5125:return Av;case 36294:return Tv;case 36295:return Ev;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Uv(i,e){i.uniform1fv(this.addr,e)}function Nv(i,e){const t=Ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Fv(i,e){const t=Ta(e,this.size,3);i.uniform3fv(this.addr,t)}function Ov(i,e){const t=Ta(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){const t=Ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zv(i,e){const t=Ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kv(i,e){const t=Ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vv(i,e){i.uniform1iv(this.addr,e)}function Gv(i,e){i.uniform2iv(this.addr,e)}function Hv(i,e){i.uniform3iv(this.addr,e)}function Wv(i,e){i.uniform4iv(this.addr,e)}function Xv(i,e){i.uniform1uiv(this.addr,e)}function jv(i,e){i.uniform2uiv(this.addr,e)}function qv(i,e){i.uniform3uiv(this.addr,e)}function Yv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){const n=this.cache,o=e.length,a=Lr(t,o);xn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=Cc:s=Pd;for(let r=0;r!==o;++r)t.setTexture2D(e[r]||s,a[r])}function Zv(i,e,t){const n=this.cache,o=e.length,a=Lr(t,o);xn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Ld,a[s])}function Jv(i,e,t){const n=this.cache,o=e.length,a=Lr(t,o);xn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Dd,a[s])}function Kv(i,e,t){const n=this.cache,o=e.length,a=Lr(t,o);xn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Id,a[s])}function Qv(i){switch(i){case 5126:return Uv;case 35664:return Nv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return zv;case 35676:return kv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Hv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return jv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Kv}}class ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qv(t.type)}}class nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,s=o.length;a!==s;++a){const r=o[a];r.setValue(e,t[r.id],n)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function ix(i,e,t){const n=i.name,o=n.length;for(xl.lastIndex=0;;){const a=xl.exec(n),s=xl.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&s+2===o){vu(t,c===void 0?new ex(r,i,e):new tx(r,i,e));break}else{let h=t.map[r];h===void 0&&(h=new nx(r),vu(t,h)),t=h}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),l=e.getUniformLocation(t,r.name);ix(r,l,this)}const o=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(s):a.push(s);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,s=t.length;a!==s;++a){const r=t[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const s=e[o];s.id in t&&n.push(s)}return n}}function xu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ox=37297;let ax=0;function sx(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=o;s<a;s++){const r=s+1;n.push(`${r===e?">":" "} ${r}: ${t[s]}`)}return n.join(`
`)}const _u=new yt;function rx(i){Vt._getMatrix(_u,Vt.workingColorSpace,i);const e=`mat3( ${_u.elements.map(t=>t.toFixed(4))} )`;switch(Vt.getTransfer(i)){case ur:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+sx(i.getShaderSource(e),r)}else return a}function lx(i,e){const t=rx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cx={[Uc]:"Linear",[Nc]:"Reinhard",[Fc]:"Cineon",[Sr]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function ux(i,e){const t=cx[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new D;function dx(){Vt.getLuminanceCoefficients(js);const i=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function hx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),s=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:r}}return t}function ja(i){return i!==""}function wu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(mx,vx)}const gx=new Map;function vx(i,e){let t=Tt[e];if(t===void 0){const n=gx.get(e);if(n!==void 0)t=Tt[n],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(xx,_x)}function _x(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function yu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Mx={[Ya]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function wx(i){return Mx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bx={[No]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function Sx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const yx={[pa]:"ENVMAP_MODE_REFRACTION"};function Ax(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tx={[Dc]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function Ex(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Tx[i.combine]||"ENVMAP_BLENDING_NONE"}function Cx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rx(i,e,t,n){const o=i.getContext(),a=t.defines;let s=t.vertexShader,r=t.fragmentShader;const l=wx(t),c=Sx(t),d=Ax(t),h=Ex(t),f=Cx(t),p=fx(t),x=hx(a),b=o.createProgram();let m,u,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ja).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ja).join(`
`),u.length>0&&(u+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),u=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,lx("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),s=Rc(s),s=wu(s,t),s=bu(s,t),r=Rc(r),r=wu(r,t),r=bu(r,t),s=Su(s),r=Su(r),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===S0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,w=g+u+r,E=xu(o,o.VERTEX_SHADER,_),S=xu(o,o.FRAGMENT_SHADER,w);o.attachShader(b,E),o.attachShader(b,S),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function C(R){if(i.debug.checkShaderErrors){const F=o.getProgramInfoLog(b)||"",H=o.getShaderInfoLog(E)||"",z=o.getShaderInfoLog(S)||"",Y=F.trim(),j=H.trim(),Q=z.trim();let _e=!0,Z=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(_e=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,E,S);else{const W=Mu(o,E,"vertex"),de=Mu(o,S,"fragment");Bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+W+`
`+de)}else Y!==""?Mt("WebGLProgram: Program Info Log:",Y):(j===""||Q==="")&&(Z=!1);Z&&(R.diagnostics={runnable:_e,programLog:Y,vertexShader:{log:j,prefix:m},fragmentShader:{log:Q,prefix:u}})}o.deleteShader(E),o.deleteShader(S),M=new rr(o,b),A=px(o,b)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=o.getProgramParameter(b,ox)),v},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=S,this}let Px=0;class Ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lx(e),t.set(e,n)),n}}class Lx{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}}function Dx(i,e,t,n,o,a){const s=new Kc,r=new Ix,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function b(M,A,v,R,F){const H=R.fog,z=F.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Q=e.get(M.envMap||Y,j),_e=Q&&Q.mapping===yr?Q.image.height:null,Z=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Mt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const W=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=W!==void 0?W.length:0;let oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let ge,ie,Ce,J;if(Z){const nt=Ui[Z];ge=nt.vertexShader,ie=nt.fragmentShader}else ge=M.vertexShader,ie=M.fragmentShader,r.update(M),Ce=r.getVertexShaderID(M),J=r.getFragmentShaderID(M);const le=i.getRenderTarget(),N=i.state.buffers.depth.getReversed(),y=F.isInstancedMesh===!0,B=F.isBatchedMesh===!0,k=!!M.map,he=!!M.matcap,ne=!!Q,V=!!M.aoMap,q=!!M.lightMap,X=!!M.bumpMap,O=!!M.normalMap,P=!!M.displacementMap,ce=!!M.emissiveMap,Me=!!M.metalnessMap,ye=!!M.roughnessMap,se=M.anisotropy>0,I=M.clearcoat>0,T=M.dispersion>0,$=M.iridescence>0,ae=M.sheen>0,Re=M.transmission>0,we=se&&!!M.anisotropyMap,Ge=I&&!!M.clearcoatMap,Oe=I&&!!M.clearcoatNormalMap,je=I&&!!M.clearcoatRoughnessMap,Je=$&&!!M.iridescenceMap,Fe=$&&!!M.iridescenceThicknessMap,Be=ae&&!!M.sheenColorMap,be=ae&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Pe=!!M.specularColorMap,Xe=!!M.specularIntensityMap,K=Re&&!!M.transmissionMap,ke=Re&&!!M.thicknessMap,He=!!M.gradientMap,Qe=!!M.alphaMap,me=M.alphaTest>0,re=!!M.alphaHash,ze=!!M.extensions;let Ze=Fi;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const ot={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:ie,defines:M.defines,customVertexShaderID:Ce,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:B,batchingColor:B&&F._colorsTexture!==null,instancing:y,instancingColor:y&&F.instanceColor!==null,instancingMorph:y&&F.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ga,alphaToCoverage:!!M.alphaToCoverage,map:k,matcap:he,envMap:ne,envMapMode:ne&&Q.mapping,envMapCubeUVHeight:_e,aoMap:V,lightMap:q,bumpMap:X,normalMap:O,displacementMap:P,emissiveMap:ce,normalMapObjectSpace:O&&M.normalMapType===yf,normalMapTangentSpace:O&&M.normalMapType===qc,metalnessMap:Me,roughnessMap:ye,anisotropy:se,anisotropyMap:we,clearcoat:I,clearcoatMap:Ge,clearcoatNormalMap:Oe,clearcoatRoughnessMap:je,dispersion:T,iridescence:$,iridescenceMap:Je,iridescenceThicknessMap:Fe,sheen:ae,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:Ae,specularColorMap:Pe,specularIntensityMap:Xe,transmission:Re,transmissionMap:K,thicknessMap:ke,gradientMap:He,opaque:M.transparent===!1&&M.blending===Do&&M.alphaToCoverage===!1,alphaMap:Qe,alphaTest:me,alphaHash:re,combine:M.combine,mapUv:k&&x(M.map.channel),aoMapUv:V&&x(M.aoMap.channel),lightMapUv:q&&x(M.lightMap.channel),bumpMapUv:X&&x(M.bumpMap.channel),normalMapUv:O&&x(M.normalMap.channel),displacementMapUv:P&&x(M.displacementMap.channel),emissiveMapUv:ce&&x(M.emissiveMap.channel),metalnessMapUv:Me&&x(M.metalnessMap.channel),roughnessMapUv:ye&&x(M.roughnessMap.channel),anisotropyMapUv:we&&x(M.anisotropyMap.channel),clearcoatMapUv:Ge&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:Pe&&x(M.specularColorMap.channel),specularIntensityMapUv:Xe&&x(M.specularIntensityMap.channel),transmissionMapUv:K&&x(M.transmissionMap.channel),thicknessMapUv:ke&&x(M.thicknessMap.channel),alphaMapUv:Qe&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(O||se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(k||Qe),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&O===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:N,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:k&&M.map.isVideoTexture===!0&&Vt.getTransfer(M.map.colorSpace)===Yt,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(M.emissiveMap.colorSpace)===Yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||B)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const v in M.defines)A.push(v),A.push(M.defines[v]);return M.isRawShaderMaterial===!1&&(u(A,M),g(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function u(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),M.push(s.mask)}function _(M){const A=p[M.type];let v;if(A){const R=Ui[A];v=Ma.clone(R.uniforms)}else v=M.uniforms;return v}function w(M,A){let v=d.get(A);return v!==void 0?++v.usedTimes:(v=new Rx(i,A,M,o),c.push(v),d.set(A,v)),v}function E(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),d.delete(M.cacheKey),M.destroy()}}function S(M){r.remove(M)}function C(){r.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:_,acquireProgram:w,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:C}}function Ux(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let r=i.get(s);return r===void 0&&(r={},i.set(s,r)),r}function n(s){i.delete(s)}function o(s,r,l){i.get(s)[r]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function Nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tu(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function s(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function r(f,p,x,b,m,u){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:x,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:u},i[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=x,g.materialVariant=s(f),g.groupOrder=b,g.renderOrder=f.renderOrder,g.z=m,g.group=u),e++,g}function l(f,p,x,b,m,u){const g=r(f,p,x,b,m,u);x.transmission>0?n.push(g):x.transparent===!0?o.push(g):t.push(g)}function c(f,p,x,b,m,u){const g=r(f,p,x,b,m,u);x.transmission>0?n.unshift(g):x.transparent===!0?o.unshift(g):t.unshift(g)}function d(f,p){t.length>1&&t.sort(f||Nx),n.length>1&&n.sort(p||Au),o.length>1&&o.sort(p||Au)}function h(){for(let f=e,p=i.length;f<p;f++){const x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:l,unshift:c,finish:h,sort:d}}function Fx(){let i=new WeakMap;function e(n,o){const a=i.get(n);let s;return a===void 0?(s=new Tu,i.set(n,[s])):o>=a.length?(s=new Tu,a.push(s)):s=a[o],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ox(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zx=0;function kx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vx(i){const e=new Ox,t=Bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const o=new D,a=new Ft,s=new Ft;function r(c){let d=0,h=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,x=0,b=0,m=0,u=0,g=0,_=0,w=0,E=0,S=0,C=0;c.sort(kx);for(let A=0,v=c.length;A<v;A++){const R=c[A],F=R.color,H=R.intensity,z=R.distance;let Y=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ma?Y=R.shadow.map.texture:Y=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=F.r*H,h+=F.g*H,f+=F.b*H;else if(R.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(R.sh.coefficients[j],H);C++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,_e=t.get(R);_e.shadowIntensity=Q.intensity,_e.shadowBias=Q.bias,_e.shadowNormalBias=Q.normalBias,_e.shadowRadius=Q.radius,_e.shadowMapSize=Q.mapSize,n.directionalShadow[p]=_e,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=R.shadow.matrix,g++}n.directional[p]=j,p++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(F).multiplyScalar(H),j.distance=z,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,n.spot[b]=j;const Q=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,Q.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[b]=Q.matrix,R.castShadow){const _e=t.get(R);_e.shadowIntensity=Q.intensity,_e.shadowBias=Q.bias,_e.shadowNormalBias=Q.normalBias,_e.shadowRadius=Q.radius,_e.shadowMapSize=Q.mapSize,n.spotShadow[b]=_e,n.spotShadowMap[b]=Y,w++}b++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(F).multiplyScalar(H),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=j,m++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){const Q=R.shadow,_e=t.get(R);_e.shadowIntensity=Q.intensity,_e.shadowBias=Q.bias,_e.shadowNormalBias=Q.normalBias,_e.shadowRadius=Q.radius,_e.shadowMapSize=Q.mapSize,_e.shadowCameraNear=Q.camera.near,_e.shadowCameraFar=Q.camera.far,n.pointShadow[x]=_e,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=R.shadow.matrix,_++}n.point[x]=j,x++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(H),j.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[u]=j,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==p||M.pointLength!==x||M.spotLength!==b||M.rectAreaLength!==m||M.hemiLength!==u||M.numDirectionalShadows!==g||M.numPointShadows!==_||M.numSpotShadows!==w||M.numSpotMaps!==E||M.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,M.directionalLength=p,M.pointLength=x,M.spotLength=b,M.rectAreaLength=m,M.hemiLength=u,M.numDirectionalShadows=g,M.numPointShadows=_,M.numSpotShadows=w,M.numSpotMaps=E,M.numLightProbes=C,n.version=zx++)}function l(c,d){let h=0,f=0,p=0,x=0,b=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(m),h++}else if(_.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),s.identity(),a.copy(_.matrixWorld),a.premultiply(m),s.extractRotation(a),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const w=n.hemi[b];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),b++}}}return{setup:r,setupView:l,state:n}}function Eu(i){const e=new Vx(i),t=[],n=[];function o(d){c.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function r(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:s}}function Gx(i){let e=new WeakMap;function t(o,a=0){const s=e.get(o);let r;return s===void 0?(r=new Eu(i),e.set(o,[r])):a>=s.length?(r=new Eu(i),s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],jx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Cu=new Ft,za=new D,_l=new D;function qx(i,e,t){let n=new i0;const o=new Ne,a=new Ne,s=new rn,r=new Td,l=new op,c={},d=t.maxTextureSize,h={[eo]:Cn,[Cn]:eo,[Jt]:Jt},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Hx,fragmentShader:Wx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new L(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let u=this.type;this.render=function(S,C,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Qd&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const A=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ti),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=u!==this.type;H&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Y=>Y.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Y=S.length;z<Y;z++){const j=S[z],Q=j.shadow;if(Q===void 0){Mt("WebGLShadowMap:",j,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const _e=Q.getFrameExtents();o.multiply(_e),a.copy(Q.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(a.x=Math.floor(d/_e.x),o.x=a.x*_e.x,Q.mapSize.x=a.x),o.y>d&&(a.y=Math.floor(d/_e.y),o.y=a.y*_e.y,Q.mapSize.y=a.y));const Z=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=Z,Q.map===null||H===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ha){if(j.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Wn(o.x,o.y,{format:ma,type:Zn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),Q.map.texture.name=j.name+".shadowMap",Q.map.depthTexture=new Fo(o.x,o.y,si),Q.map.depthTexture.name=j.name+".shadowMapDepth",Q.map.depthTexture.format=to,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=vn,Q.map.depthTexture.magFilter=vn}else j.isPointLight?(Q.map=new Rd(o.x),Q.map.depthTexture=new wh(o.x,Bi)):(Q.map=new Wn(o.x,o.y),Q.map.depthTexture=new Fo(o.x,o.y,Bi)),Q.map.depthTexture.name=j.name+".shadowMap",Q.map.depthTexture.format=to,this.type===Ya?(Q.map.depthTexture.compareFunction=Z?$c:Yc,Q.map.depthTexture.minFilter=mn,Q.map.depthTexture.magFilter=mn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=vn,Q.map.depthTexture.magFilter=vn);Q.camera.updateProjectionMatrix()}const W=Q.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<W;de++){if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,de),i.clear();else{de===0&&(i.setRenderTarget(Q.map),i.clear());const oe=Q.getViewport(de);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),F.viewport(s)}if(j.isPointLight){const oe=Q.camera,ge=Q.matrix,ie=j.distance||oe.far;ie!==oe.far&&(oe.far=ie,oe.updateProjectionMatrix()),za.setFromMatrixPosition(j.matrixWorld),oe.position.copy(za),_l.copy(oe.position),_l.add(Xx[de]),oe.up.copy(jx[de]),oe.lookAt(_l),oe.updateMatrixWorld(),ge.makeTranslation(-za.x,-za.y,-za.z),Cu.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Cu,oe.coordinateSystem,oe.reversedDepth)}else Q.updateMatrices(j);n=Q.getFrustum(),w(C,M,Q.camera,j,this.type)}Q.isPointLightShadow!==!0&&this.type===Ha&&g(Q,M),Q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(A,v,R)};function g(S,C){const M=e.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wn(o.x,o.y,{format:ma,type:Zn})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,M,f,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,M,p,b,null)}function _(S,C,M,A){let v=null;const R=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)v=R;else if(v=M.isPointLight===!0?l:r,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=v.uuid,H=C.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let Y=z[H];Y===void 0&&(Y=v.clone(),z[H]=Y,C.addEventListener("dispose",E)),v=Y}if(v.visible=C.visible,v.wireframe=C.wireframe,A===Ha?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:h[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,M.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=M}return v}function w(S,C,M,A,v){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Ha)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);const H=e.update(S),z=S.material;if(Array.isArray(z)){const Y=H.groups;for(let j=0,Q=Y.length;j<Q;j++){const _e=Y[j],Z=z[_e.materialIndex];if(Z&&Z.visible){const W=_(S,Z,A,v);S.onBeforeShadow(i,S,C,M,H,W,_e),i.renderBufferDirect(M,null,H,W,S,_e),S.onAfterShadow(i,S,C,M,H,W,_e)}}}else if(z.visible){const Y=_(S,z,A,v);S.onBeforeShadow(i,S,C,M,H,Y,null),i.renderBufferDirect(M,null,H,Y,S,null),S.onAfterShadow(i,S,C,M,H,Y,null)}}const F=S.children;for(let H=0,z=F.length;H<z;H++)w(F[H],C,M,A,v)}function E(S){S.target.removeEventListener("dispose",E);for(const M in c){const A=c[M],v=S.target.uuid;v in A&&(A[v].dispose(),delete A[v])}}}function Yx(i,e){function t(){let K=!1;const ke=new rn;let He=null;const Qe=new rn(0,0,0,0);return{setMask:function(me){He!==me&&!K&&(i.colorMask(me,me,me,me),He=me)},setLocked:function(me){K=me},setClear:function(me,re,ze,Ze,ot){ot===!0&&(me*=Ze,re*=Ze,ze*=Ze),ke.set(me,re,ze,Ze),Qe.equals(ke)===!1&&(i.clearColor(me,re,ze,Ze),Qe.copy(ke))},reset:function(){K=!1,He=null,Qe.set(-1,0,0,0)}}}function n(){let K=!1,ke=!1,He=null,Qe=null,me=null;return{setReversed:function(re){if(ke!==re){const ze=e.get("EXT_clip_control");re?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ke=re;const Ze=me;me=null,this.setClear(Ze)}},getReversed:function(){return ke},setTest:function(re){re?le(i.DEPTH_TEST):N(i.DEPTH_TEST)},setMask:function(re){He!==re&&!K&&(i.depthMask(re),He=re)},setFunc:function(re){if(ke&&(re=Uf[re]),Qe!==re){switch(re){case Fl:i.depthFunc(i.NEVER);break;case Ol:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case ha:i.depthFunc(i.LEQUAL);break;case zl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case Vl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Qe=re}},setLocked:function(re){K=re},setClear:function(re){me!==re&&(me=re,ke&&(re=1-re),i.clearDepth(re))},reset:function(){K=!1,He=null,Qe=null,me=null,ke=!1}}}function o(){let K=!1,ke=null,He=null,Qe=null,me=null,re=null,ze=null,Ze=null,ot=null;return{setTest:function(nt){K||(nt?le(i.STENCIL_TEST):N(i.STENCIL_TEST))},setMask:function(nt){ke!==nt&&!K&&(i.stencilMask(nt),ke=nt)},setFunc:function(nt,bt,Ot){(He!==nt||Qe!==bt||me!==Ot)&&(i.stencilFunc(nt,bt,Ot),He=nt,Qe=bt,me=Ot)},setOp:function(nt,bt,Ot){(re!==nt||ze!==bt||Ze!==Ot)&&(i.stencilOp(nt,bt,Ot),re=nt,ze=bt,Ze=Ot)},setLocked:function(nt){K=nt},setClear:function(nt){ot!==nt&&(i.clearStencil(nt),ot=nt)},reset:function(){K=!1,ke=null,He=null,Qe=null,me=null,re=null,ze=null,Ze=null,ot=null}}}const a=new t,s=new n,r=new o,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],x=null,b=!1,m=null,u=null,g=null,_=null,w=null,E=null,S=null,C=new Ve(0,0,0),M=0,A=!1,v=null,R=null,F=null,H=null,z=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const _e=i.getParameter(i.VERSION);_e.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(_e)[1]),j=Q>=1):_e.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),j=Q>=2);let Z=null,W={};const de=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),ge=new rn().fromArray(de),ie=new rn().fromArray(oe);function Ce(K,ke,He,Qe){const me=new Uint8Array(4),re=i.createTexture();i.bindTexture(K,re),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<He;ze++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(ke,0,i.RGBA,1,1,Qe,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ke+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return re}const J={};J[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),le(i.DEPTH_TEST),s.setFunc(ha),X(!1),O(_0),le(i.CULL_FACE),V(Ti);function le(K){d[K]!==!0&&(i.enable(K),d[K]=!0)}function N(K){d[K]!==!1&&(i.disable(K),d[K]=!1)}function y(K,ke){return h[K]!==ke?(i.bindFramebuffer(K,ke),h[K]=ke,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ke),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ke),!0):!1}function B(K,ke){let He=p,Qe=!1;if(K){He=f.get(ke),He===void 0&&(He=[],f.set(ke,He));const me=K.textures;if(He.length!==me.length||He[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ze=me.length;re<ze;re++)He[re]=i.COLOR_ATTACHMENT0+re;He.length=me.length,Qe=!0}}else He[0]!==i.BACK&&(He[0]=i.BACK,Qe=!0);Qe&&i.drawBuffers(He)}function k(K){return x!==K?(i.useProgram(K),x=K,!0):!1}const he={[Eo]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};he[of]=i.MIN,he[af]=i.MAX;const ne={[sf]:i.ZERO,[rf]:i.ONE,[lf]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[cf]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function V(K,ke,He,Qe,me,re,ze,Ze,ot,nt){if(K===Ti){b===!0&&(N(i.BLEND),b=!1);return}if(b===!1&&(le(i.BLEND),b=!0),K!==ef){if(K!==m||nt!==A){if((u!==Eo||w!==Eo)&&(i.blendEquation(i.FUNC_ADD),u=Eo,w=Eo),nt)switch(K){case Do:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFunc(i.ONE,i.ONE);break;case M0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case w0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",K);break}else switch(K){case Do:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case M0:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w0:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",K);break}g=null,_=null,E=null,S=null,C.set(0,0,0),M=0,m=K,A=nt}return}me=me||ke,re=re||He,ze=ze||Qe,(ke!==u||me!==w)&&(i.blendEquationSeparate(he[ke],he[me]),u=ke,w=me),(He!==g||Qe!==_||re!==E||ze!==S)&&(i.blendFuncSeparate(ne[He],ne[Qe],ne[re],ne[ze]),g=He,_=Qe,E=re,S=ze),(Ze.equals(C)===!1||ot!==M)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ot),C.copy(Ze),M=ot),m=K,A=!1}function q(K,ke){K.side===Jt?N(i.CULL_FACE):le(i.CULL_FACE);let He=K.side===Cn;ke&&(He=!He),X(He),K.blending===Do&&K.transparent===!1?V(Ti):V(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),s.setFunc(K.depthFunc),s.setTest(K.depthTest),s.setMask(K.depthWrite),a.setMask(K.colorWrite);const Qe=K.stencilWrite;r.setTest(Qe),Qe&&(r.setMask(K.stencilWriteMask),r.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),r.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ce(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):N(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(K){v!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),v=K)}function O(K){K!==Jd?(le(i.CULL_FACE),K!==R&&(K===_0?i.cullFace(i.BACK):K===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):N(i.CULL_FACE),R=K}function P(K){K!==F&&(j&&i.lineWidth(K),F=K)}function ce(K,ke,He){K?(le(i.POLYGON_OFFSET_FILL),(H!==ke||z!==He)&&(H=ke,z=He,s.getReversed()&&(ke=-ke),i.polygonOffset(ke,He))):N(i.POLYGON_OFFSET_FILL)}function Me(K){K?le(i.SCISSOR_TEST):N(i.SCISSOR_TEST)}function ye(K){K===void 0&&(K=i.TEXTURE0+Y-1),Z!==K&&(i.activeTexture(K),Z=K)}function se(K,ke,He){He===void 0&&(Z===null?He=i.TEXTURE0+Y-1:He=Z);let Qe=W[He];Qe===void 0&&(Qe={type:void 0,texture:void 0},W[He]=Qe),(Qe.type!==K||Qe.texture!==ke)&&(Z!==He&&(i.activeTexture(He),Z=He),i.bindTexture(K,ke||J[K]),Qe.type=K,Qe.texture=ke)}function I(){const K=W[Z];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(K){Bt("WebGLState:",K)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(K){Bt("WebGLState:",K)}}function ae(){try{i.texSubImage2D(...arguments)}catch(K){Bt("WebGLState:",K)}}function Re(){try{i.texSubImage3D(...arguments)}catch(K){Bt("WebGLState:",K)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Bt("WebGLState:",K)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Bt("WebGLState:",K)}}function Oe(){try{i.texStorage2D(...arguments)}catch(K){Bt("WebGLState:",K)}}function je(){try{i.texStorage3D(...arguments)}catch(K){Bt("WebGLState:",K)}}function Je(){try{i.texImage2D(...arguments)}catch(K){Bt("WebGLState:",K)}}function Fe(){try{i.texImage3D(...arguments)}catch(K){Bt("WebGLState:",K)}}function Be(K){ge.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ge.copy(K))}function be(K){ie.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),ie.copy(K))}function Ae(K,ke){let He=c.get(ke);He===void 0&&(He=new WeakMap,c.set(ke,He));let Qe=He.get(K);Qe===void 0&&(Qe=i.getUniformBlockIndex(ke,K.name),He.set(K,Qe))}function Pe(K,ke){const Qe=c.get(ke).get(K);l.get(ke)!==Qe&&(i.uniformBlockBinding(ke,Qe,K.__bindingPointIndex),l.set(ke,Qe))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,W={},h={},f=new WeakMap,p=[],x=null,b=!1,m=null,u=null,g=null,_=null,w=null,E=null,S=null,C=new Ve(0,0,0),M=0,A=!1,v=null,R=null,F=null,H=null,z=null,ge.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:le,disable:N,bindFramebuffer:y,drawBuffers:B,useProgram:k,setBlending:V,setMaterial:q,setFlipSided:X,setCullFace:O,setLineWidth:P,setPolygonOffset:ce,setScissorTest:Me,activeTexture:ye,bindTexture:se,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Je,texImage3D:Fe,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:Oe,texStorage3D:je,texSubImage2D:ae,texSubImage3D:Re,compressedTexSubImage2D:we,compressedTexSubImage3D:Ge,scissor:Be,viewport:be,reset:Xe}}function $x(i,e,t,n,o,a,s){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,T){return p?new OffscreenCanvas(I,T):dr("canvas")}function b(I,T,$){let ae=1;const Re=se(I);if((Re.width>$||Re.height>$)&&(ae=$/Math.max(Re.width,Re.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const we=Math.floor(ae*Re.width),Ge=Math.floor(ae*Re.height);h===void 0&&(h=x(we,Ge));const Oe=T?x(we,Ge):h;return Oe.width=we,Oe.height=Ge,Oe.getContext("2d").drawImage(I,0,0,we,Ge),Mt("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+we+"x"+Ge+")."),Oe}else return"data"in I&&Mt("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),I;return I}function m(I){return I.generateMipmaps}function u(I){i.generateMipmap(I)}function g(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,T,$,ae,Re=!1){if(I!==null){if(i[I]!==void 0)return i[I];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let we=T;if(T===i.RED&&($===i.FLOAT&&(we=i.R32F),$===i.HALF_FLOAT&&(we=i.R16F),$===i.UNSIGNED_BYTE&&(we=i.R8)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(we=i.R8UI),$===i.UNSIGNED_SHORT&&(we=i.R16UI),$===i.UNSIGNED_INT&&(we=i.R32UI),$===i.BYTE&&(we=i.R8I),$===i.SHORT&&(we=i.R16I),$===i.INT&&(we=i.R32I)),T===i.RG&&($===i.FLOAT&&(we=i.RG32F),$===i.HALF_FLOAT&&(we=i.RG16F),$===i.UNSIGNED_BYTE&&(we=i.RG8)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(we=i.RG8UI),$===i.UNSIGNED_SHORT&&(we=i.RG16UI),$===i.UNSIGNED_INT&&(we=i.RG32UI),$===i.BYTE&&(we=i.RG8I),$===i.SHORT&&(we=i.RG16I),$===i.INT&&(we=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(we=i.RGB8UI),$===i.UNSIGNED_SHORT&&(we=i.RGB16UI),$===i.UNSIGNED_INT&&(we=i.RGB32UI),$===i.BYTE&&(we=i.RGB8I),$===i.SHORT&&(we=i.RGB16I),$===i.INT&&(we=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(we=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(we=i.RGBA16UI),$===i.UNSIGNED_INT&&(we=i.RGBA32UI),$===i.BYTE&&(we=i.RGBA8I),$===i.SHORT&&(we=i.RGBA16I),$===i.INT&&(we=i.RGBA32I)),T===i.RGB&&($===i.UNSIGNED_INT_5_9_9_9_REV&&(we=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(we=i.R11F_G11F_B10F)),T===i.RGBA){const Ge=Re?ur:Vt.getTransfer(ae);$===i.FLOAT&&(we=i.RGBA32F),$===i.HALF_FLOAT&&(we=i.RGBA16F),$===i.UNSIGNED_BYTE&&(we=Ge===Yt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function w(I,T){let $;return I?T===null||T===Bi||T===ns?$=i.DEPTH24_STENCIL8:T===si?$=i.DEPTH32F_STENCIL8:T===ts&&($=i.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bi||T===ns?$=i.DEPTH_COMPONENT24:T===si?$=i.DEPTH_COMPONENT32F:T===ts&&($=i.DEPTH_COMPONENT16),$}function E(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function S(I){const T=I.target;T.removeEventListener("dispose",S),M(T),T.isVideoTexture&&d.delete(T)}function C(I){const T=I.target;T.removeEventListener("dispose",C),v(T)}function M(I){const T=n.get(I);if(T.__webglInit===void 0)return;const $=I.source,ae=f.get($);if(ae){const Re=ae[T.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&A(I),Object.keys(ae).length===0&&f.delete($)}n.remove(I)}function A(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const $=I.source,ae=f.get($);delete ae[T.__cacheKey],s.memory.textures--}function v(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let Re=0;Re<T.__webglFramebuffer[ae].length;Re++)i.deleteFramebuffer(T.__webglFramebuffer[ae][Re]);else i.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)i.deleteFramebuffer(T.__webglFramebuffer[ae]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=I.textures;for(let ae=0,Re=$.length;ae<Re;ae++){const we=n.get($[ae]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),s.memory.textures--),n.remove($[ae])}n.remove(I)}let R=0;function F(){R=0}function H(){const I=R;return I>=o.maxTextures&&Mt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),R+=1,I}function z(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Y(I,T){const $=n.get(I);if(I.isVideoTexture&&Me(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const ae=I.image;if(ae===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{J($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function j(I,T){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){J($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function Q(I,T){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){J($,I,T);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function _e(I,T){const $=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){le($,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const Z={[Rt]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Hl]:i.MIRRORED_REPEAT},W={[vn]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Ro]:i.LINEAR_MIPMAP_LINEAR},de={[Af]:i.NEVER,[Pf]:i.ALWAYS,[Tf]:i.LESS,[Yc]:i.LEQUAL,[Ef]:i.EQUAL,[$c]:i.GEQUAL,[Cf]:i.GREATER,[Rf]:i.NOTEQUAL};function oe(I,T){if(T.type===si&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===zr||T.magFilter===hs||T.magFilter===Ro||T.minFilter===mn||T.minFilter===zr||T.minFilter===hs||T.minFilter===Ro)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Z[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Z[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Z[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,W[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===vn||T.minFilter!==hs&&T.minFilter!==Ro||T.type===si&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ge(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",S));const ae=T.source;let Re=f.get(ae);Re===void 0&&(Re={},f.set(ae,Re));const we=z(T);if(we!==I.__cacheKey){Re[we]===void 0&&(Re[we]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),Re[we].usedTimes++;const Ge=Re[I.__cacheKey];Ge!==void 0&&(Re[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(T)),I.__cacheKey=we,I.__webglTexture=Re[we].texture}return $}function ie(I,T,$){return Math.floor(Math.floor(I/$)/T)}function Ce(I,T,$,ae){const we=I.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,$,ae,T.data);else{we.sort((Fe,Be)=>Fe.start-Be.start);let Ge=0;for(let Fe=1;Fe<we.length;Fe++){const Be=we[Ge],be=we[Fe],Ae=Be.start+Be.count,Pe=ie(be.start,T.width,4),Xe=ie(Be.start,T.width,4);be.start<=Ae+1&&Pe===Xe&&ie(be.start+be.count-1,T.width,4)===Pe?Be.count=Math.max(Be.count,be.start+be.count-Be.start):(++Ge,we[Ge]=be)}we.length=Ge+1;const Oe=i.getParameter(i.UNPACK_ROW_LENGTH),je=i.getParameter(i.UNPACK_SKIP_PIXELS),Je=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Fe=0,Be=we.length;Fe<Be;Fe++){const be=we[Fe],Ae=Math.floor(be.start/4),Pe=Math.ceil(be.count/4),Xe=Ae%T.width,K=Math.floor(Ae/T.width),ke=Pe,He=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,Xe,K,ke,He,$,ae,T.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,Je)}}function J(I,T,$){let ae=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=i.TEXTURE_3D);const Re=ge(I,T),we=T.source;t.bindTexture(ae,I.__webglTexture,i.TEXTURE0+$);const Ge=n.get(we);if(we.version!==Ge.__version||Re===!0){t.activeTexture(i.TEXTURE0+$);const Oe=Vt.getPrimaries(Vt.workingColorSpace),je=T.colorSpace===mo?null:Vt.getPrimaries(T.colorSpace),Je=T.colorSpace===mo||Oe===je?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Fe=b(T.image,!1,o.maxTextureSize);Fe=ye(T,Fe);const Be=a.convert(T.format,T.colorSpace),be=a.convert(T.type);let Ae=_(T.internalFormat,Be,be,T.colorSpace,T.isVideoTexture);oe(ae,T);let Pe;const Xe=T.mipmaps,K=T.isVideoTexture!==!0,ke=Ge.__version===void 0||Re===!0,He=we.dataReady,Qe=E(T,Fe);if(T.isDepthTexture)Ae=w(T.format===Po,T.type),ke&&(K?t.texStorage2D(i.TEXTURE_2D,1,Ae,Fe.width,Fe.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Fe.width,Fe.height,0,Be,be,null));else if(T.isDataTexture)if(Xe.length>0){K&&ke&&t.texStorage2D(i.TEXTURE_2D,Qe,Ae,Xe[0].width,Xe[0].height);for(let me=0,re=Xe.length;me<re;me++)Pe=Xe[me],K?He&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Pe.width,Pe.height,Be,be,Pe.data):t.texImage2D(i.TEXTURE_2D,me,Ae,Pe.width,Pe.height,0,Be,be,Pe.data);T.generateMipmaps=!1}else K?(ke&&t.texStorage2D(i.TEXTURE_2D,Qe,Ae,Fe.width,Fe.height),He&&Ce(T,Fe,Be,be)):t.texImage2D(i.TEXTURE_2D,0,Ae,Fe.width,Fe.height,0,Be,be,Fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){K&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Ae,Xe[0].width,Xe[0].height,Fe.depth);for(let me=0,re=Xe.length;me<re;me++)if(Pe=Xe[me],T.format!==hi)if(Be!==null)if(K){if(He)if(T.layerUpdates.size>0){const ze=su(Pe.width,Pe.height,T.format,T.type);for(const Ze of T.layerUpdates){const ot=Pe.data.subarray(Ze*ze/Pe.data.BYTES_PER_ELEMENT,(Ze+1)*ze/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ze,Pe.width,Pe.height,1,Be,ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Pe.width,Pe.height,Fe.depth,Be,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ae,Pe.width,Pe.height,Fe.depth,0,Pe.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?He&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Pe.width,Pe.height,Fe.depth,Be,be,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ae,Pe.width,Pe.height,Fe.depth,0,Be,be,Pe.data)}else{K&&ke&&t.texStorage2D(i.TEXTURE_2D,Qe,Ae,Xe[0].width,Xe[0].height);for(let me=0,re=Xe.length;me<re;me++)Pe=Xe[me],T.format!==hi?Be!==null?K?He&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ae,Pe.width,Pe.height,0,Pe.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?He&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Pe.width,Pe.height,Be,be,Pe.data):t.texImage2D(i.TEXTURE_2D,me,Ae,Pe.width,Pe.height,0,Be,be,Pe.data)}else if(T.isDataArrayTexture)if(K){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Ae,Fe.width,Fe.height,Fe.depth),He)if(T.layerUpdates.size>0){const me=su(Fe.width,Fe.height,T.format,T.type);for(const re of T.layerUpdates){const ze=Fe.data.subarray(re*me/Fe.data.BYTES_PER_ELEMENT,(re+1)*me/Fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,Fe.width,Fe.height,1,Be,be,ze)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Fe.width,Fe.height,Fe.depth,Be,be,Fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Fe.width,Fe.height,Fe.depth,0,Be,be,Fe.data);else if(T.isData3DTexture)K?(ke&&t.texStorage3D(i.TEXTURE_3D,Qe,Ae,Fe.width,Fe.height,Fe.depth),He&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Fe.width,Fe.height,Fe.depth,Be,be,Fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Fe.width,Fe.height,Fe.depth,0,Be,be,Fe.data);else if(T.isFramebufferTexture){if(ke)if(K)t.texStorage2D(i.TEXTURE_2D,Qe,Ae,Fe.width,Fe.height);else{let me=Fe.width,re=Fe.height;for(let ze=0;ze<Qe;ze++)t.texImage2D(i.TEXTURE_2D,ze,Ae,me,re,0,Be,be,null),me>>=1,re>>=1}}else if(Xe.length>0){if(K&&ke){const me=se(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Qe,Ae,me.width,me.height)}for(let me=0,re=Xe.length;me<re;me++)Pe=Xe[me],K?He&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Be,be,Pe):t.texImage2D(i.TEXTURE_2D,me,Ae,Be,be,Pe);T.generateMipmaps=!1}else if(K){if(ke){const me=se(Fe);t.texStorage2D(i.TEXTURE_2D,Qe,Ae,me.width,me.height)}He&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,be,Fe)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Be,be,Fe);m(T)&&u(ae),Ge.__version=we.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function le(I,T,$){if(T.image.length!==6)return;const ae=ge(I,T),Re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const we=n.get(Re);if(Re.version!==we.__version||ae===!0){t.activeTexture(i.TEXTURE0+$);const Ge=Vt.getPrimaries(Vt.workingColorSpace),Oe=T.colorSpace===mo?null:Vt.getPrimaries(T.colorSpace),je=T.colorSpace===mo||Ge===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const Je=T.isCompressedTexture||T.image[0].isCompressedTexture,Fe=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let re=0;re<6;re++)!Je&&!Fe?Be[re]=b(T.image[re],!0,o.maxCubemapSize):Be[re]=Fe?T.image[re].image:T.image[re],Be[re]=ye(T,Be[re]);const be=Be[0],Ae=a.convert(T.format,T.colorSpace),Pe=a.convert(T.type),Xe=_(T.internalFormat,Ae,Pe,T.colorSpace),K=T.isVideoTexture!==!0,ke=we.__version===void 0||ae===!0,He=Re.dataReady;let Qe=E(T,be);oe(i.TEXTURE_CUBE_MAP,T);let me;if(Je){K&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,Xe,be.width,be.height);for(let re=0;re<6;re++){me=Be[re].mipmaps;for(let ze=0;ze<me.length;ze++){const Ze=me[ze];T.format!==hi?Ae!==null?K?He&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze,0,0,Ze.width,Ze.height,Ae,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze,Xe,Ze.width,Ze.height,0,Ze.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze,0,0,Ze.width,Ze.height,Ae,Pe,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze,Xe,Ze.width,Ze.height,0,Ae,Pe,Ze.data)}}}else{if(me=T.mipmaps,K&&ke){me.length>0&&Qe++;const re=se(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(Fe){K?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Be[re].width,Be[re].height,Ae,Pe,Be[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Be[re].width,Be[re].height,0,Ae,Pe,Be[re].data);for(let ze=0;ze<me.length;ze++){const ot=me[ze].image[re].image;K?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze+1,0,0,ot.width,ot.height,Ae,Pe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze+1,Xe,ot.width,ot.height,0,Ae,Pe,ot.data)}}else{K?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae,Pe,Be[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Ae,Pe,Be[re]);for(let ze=0;ze<me.length;ze++){const Ze=me[ze];K?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze+1,0,0,Ae,Pe,Ze.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ze+1,Xe,Ae,Pe,Ze.image[re])}}}m(T)&&u(i.TEXTURE_CUBE_MAP),we.__version=Re.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function N(I,T,$,ae,Re,we){const Ge=a.convert($.format,$.colorSpace),Oe=a.convert($.type),je=_($.internalFormat,Ge,Oe,$.colorSpace),Je=n.get(T),Fe=n.get($);if(Fe.__renderTarget=T,!Je.__hasExternalTextures){const Be=Math.max(1,T.width>>we),be=Math.max(1,T.height>>we);Re===i.TEXTURE_3D||Re===i.TEXTURE_2D_ARRAY?t.texImage3D(Re,we,je,Be,be,T.depth,0,Ge,Oe,null):t.texImage2D(Re,we,je,Be,be,0,Ge,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ce(T)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Re,Fe.__webglTexture,0,P(T)):(Re===i.TEXTURE_2D||Re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,Re,Fe.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function y(I,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const ae=T.depthTexture,Re=ae&&ae.isDepthTexture?ae.type:null,we=w(T.stencilBuffer,Re),Ge=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(T)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(T),we,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(T),we,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,we,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,I)}else{const ae=T.textures;for(let Re=0;Re<ae.length;Re++){const we=ae[Re],Ge=a.convert(we.format,we.colorSpace),Oe=a.convert(we.type),je=_(we.internalFormat,Ge,Oe,we.colorSpace);ce(T)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(T),je,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(T),je,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,je,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(I,T,$){const ae=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=n.get(T.depthTexture);if(Re.__renderTarget=T,(!Re.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae){if(Re.__webglInit===void 0&&(Re.__webglInit=!0,T.depthTexture.addEventListener("dispose",S)),Re.__webglTexture===void 0){Re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Re.__webglTexture),oe(i.TEXTURE_CUBE_MAP,T.depthTexture);const Je=a.convert(T.depthTexture.format),Fe=a.convert(T.depthTexture.type);let Be;T.depthTexture.format===to?Be=i.DEPTH_COMPONENT24:T.depthTexture.format===Po&&(Be=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Be,T.width,T.height,0,Je,Fe,null)}}else Y(T.depthTexture,0);const we=Re.__webglTexture,Ge=P(T),Oe=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,je=T.depthTexture.format===Po?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===to)ce(T)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,je,Oe,we,0,Ge):i.framebufferTexture2D(i.FRAMEBUFFER,je,Oe,we,0);else if(T.depthTexture.format===Po)ce(T)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,je,Oe,we,0,Ge):i.framebufferTexture2D(i.FRAMEBUFFER,je,Oe,we,0);else throw new Error("Unknown depthTexture format")}function k(I){const T=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const Re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",Re)};ae.addEventListener("dispose",Re),T.__depthDisposeCallback=Re}T.__boundDepthTexture=ae}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let ae=0;ae<6;ae++)B(T.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?B(T.__webglFramebuffer[0],I,0):B(T.__webglFramebuffer,I,0)}else if($){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=i.createRenderbuffer(),y(T.__webglDepthbuffer[ae],I,!1);else{const Re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,we)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),y(T.__webglDepthbuffer,I,!1);else{const Re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(I,T,$){const ae=n.get(I);T!==void 0&&N(ae.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&k(I)}function ne(I){const T=I.texture,$=n.get(I),ae=n.get(T);I.addEventListener("dispose",C);const Re=I.textures,we=I.isWebGLCubeRenderTarget===!0,Ge=Re.length>1;if(Ge||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=T.version,s.memory.textures++),we){$.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Oe]=[];for(let je=0;je<T.mipmaps.length;je++)$.__webglFramebuffer[Oe][je]=i.createFramebuffer()}else $.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)$.__webglFramebuffer[Oe]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Oe=0,je=Re.length;Oe<je;Oe++){const Je=n.get(Re[Oe]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),s.memory.textures++)}if(I.samples>0&&ce(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Re.length;Oe++){const je=Re[Oe];$.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Oe]);const Je=a.convert(je.format,je.colorSpace),Fe=a.convert(je.type),Be=_(je.internalFormat,Je,Fe,je.colorSpace,I.isXRRenderTarget===!0),be=P(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Be,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,$.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),y($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),oe(i.TEXTURE_CUBE_MAP,T);for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)N($.__webglFramebuffer[Oe][je],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,je);else N($.__webglFramebuffer[Oe],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);m(T)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Oe=0,je=Re.length;Oe<je;Oe++){const Je=Re[Oe],Fe=n.get(Je);let Be=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Be,Fe.__webglTexture),oe(Be,Je),N($.__webglFramebuffer,I,Je,i.COLOR_ATTACHMENT0+Oe,Be,0),m(Je)&&u(Be)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Oe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,ae.__webglTexture),oe(Oe,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)N($.__webglFramebuffer[je],I,T,i.COLOR_ATTACHMENT0,Oe,je);else N($.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,Oe,0);m(T)&&u(Oe),t.unbindTexture()}I.depthBuffer&&k(I)}function V(I){const T=I.textures;for(let $=0,ae=T.length;$<ae;$++){const Re=T[$];if(m(Re)){const we=g(I),Ge=n.get(Re).__webglTexture;t.bindTexture(we,Ge),u(we),t.unbindTexture()}}}const q=[],X=[];function O(I){if(I.samples>0){if(ce(I)===!1){const T=I.textures,$=I.width,ae=I.height;let Re=i.COLOR_BUFFER_BIT;const we=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(I),Oe=T.length>1;if(Oe)for(let Je=0;Je<T.length;Je++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const je=I.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Je=0;Je<T.length;Je++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Re|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Re|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Je]);const Fe=n.get(T[Je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,$,ae,0,0,$,ae,Re,i.NEAREST),l===!0&&(q.length=0,X.length=0,q.push(i.COLOR_ATTACHMENT0+Je),I.depthBuffer&&I.resolveDepthBuffer===!1&&(q.push(we),X.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let Je=0;Je<T.length;Je++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Je]);const Fe=n.get(T[Je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Je,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function P(I){return Math.min(o.maxSamples,I.samples)}function ce(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(I){const T=s.render.frame;d.get(I)!==T&&(d.set(I,T),I.update())}function ye(I,T){const $=I.colorSpace,ae=I.format,Re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==ga&&$!==mo&&(Vt.getTransfer($)===Yt?(ae!==hi||Re!==ai)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",$)),T}function se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=_e,this.rebindTextures=he,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=N,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zx(i,e){function t(n,o=mo){let a;const s=Vt.getTransfer(o);if(n===ai)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===td)return i.BYTE;if(n===nd)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===kc)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===sd)return i.RGB;if(n===hi)return i.RGBA;if(n===to)return i.DEPTH_COMPONENT;if(n===Po)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===Wc)return i.RED_INTEGER;if(n===ma)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===ir||n===or||n===ar||n===sr)if(s===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ir)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ir)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===jl||n===ql)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===$l||n===Zl||n===Jl||n===Kl||n===Ql||n===ec)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Yl||n===$l)return s===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Zl)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return a.COMPRESSED_R11_EAC;if(n===Kl)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ql)return a.COMPRESSED_RG11_EAC;if(n===ec)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===oc||n===ac||n===sc||n===rc||n===lc||n===cc||n===uc||n===dc||n===fc||n===hc||n===pc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===tc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return s===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===mc)return s===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===_c||n===Mc||n===wc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===xc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qt({vertexShader:Jx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e1 extends ya{constructor(e,t){super();const n=this;let o=null,a=1,s=null,r="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,x=null;const b=typeof XRWebGLBinding<"u",m=new Qx,u={},g=t.getContextAttributes();let _=null,w=null;const E=[],S=[],C=new Ne;let M=null;const A=new Yn;A.viewport=new rn;const v=new Yn;v.viewport=new rn;const R=[A,v],F=new cp;let H=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=E[J];return le===void 0&&(le=new Xr,E[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=E[J];return le===void 0&&(le=new Xr,E[J]=le),le.getGripSpace()},this.getHand=function(J){let le=E[J];return le===void 0&&(le=new Xr,E[J]=le),le.getHandSpace()};function Y(J){const le=S.indexOf(J.inputSource);if(le===-1)return;const N=E[le];N!==void 0&&(N.update(J.inputSource,J.frame,c||s),N.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",Q);for(let J=0;J<E.length;J++){const le=S[J];le!==null&&(S[J]=null,E[J].disconnect(le))}H=null,z=null,m.reset();for(const J in u)delete u[J];e.setRenderTarget(_),p=null,f=null,h=null,o=null,w=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){r=J,n.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(o,t)),h},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",j),o.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,y=null,B=null;g.depth&&(B=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=g.stencil?Po:to,y=g.stencil?ns:Bi);const k={colorFormat:t.RGBA8,depthFormat:B,scaleFactor:a};h=this.getBinding(),f=h.createProjectionLayer(k),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Wn(f.textureWidth,f.textureHeight,{format:hi,type:ai,depthTexture:new Fo(f.textureWidth,f.textureHeight,y,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const N={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(o,t,N),o.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Wn(p.framebufferWidth,p.framebufferHeight,{format:hi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await o.requestReferenceSpace(r),Ce.setContext(o),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(J){for(let le=0;le<J.removed.length;le++){const N=J.removed[le],y=S.indexOf(N);y>=0&&(S[y]=null,E[y].disconnect(N))}for(let le=0;le<J.added.length;le++){const N=J.added[le];let y=S.indexOf(N);if(y===-1){for(let k=0;k<E.length;k++)if(k>=S.length){S.push(N),y=k;break}else if(S[k]===null){S[k]=N,y=k;break}if(y===-1)break}const B=E[y];B&&B.connect(N)}}const _e=new D,Z=new D;function W(J,le,N){_e.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(N.matrixWorld);const y=_e.distanceTo(Z),B=le.projectionMatrix.elements,k=N.projectionMatrix.elements,he=B[14]/(B[10]-1),ne=B[14]/(B[10]+1),V=(B[9]+1)/B[5],q=(B[9]-1)/B[5],X=(B[8]-1)/B[0],O=(k[8]+1)/k[0],P=he*X,ce=he*O,Me=y/(-X+O),ye=Me*-X;if(le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(Me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),B[10]===-1)J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const se=he+Me,I=ne+Me,T=P-ye,$=ce+(y-ye),ae=V*ne/I*se,Re=q*ne/I*se;J.projectionMatrix.makePerspective(T,$,ae,Re,se,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let le=J.near,N=J.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(N=m.depthFar)),F.near=v.near=A.near=le,F.far=v.far=A.far=N,(H!==F.near||z!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,z=F.far),F.layers.mask=J.layers.mask|6,A.layers.mask=F.layers.mask&-5,v.layers.mask=F.layers.mask&-3;const y=J.parent,B=F.cameras;de(F,y);for(let k=0;k<B.length;k++)de(B[k],y);B.length===2?W(F,A,v):F.projectionMatrix.copy(A.projectionMatrix),oe(J,F,y)};function oe(J,le,N){N===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(N.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=va*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return u[J]};let ge=null;function ie(J,le){if(d=le.getViewerPose(c||s),x=le,d!==null){const N=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let y=!1;N.length!==F.cameras.length&&(F.cameras.length=0,y=!0);for(let ne=0;ne<N.length;ne++){const V=N[ne];let q=null;if(p!==null)q=p.getViewport(V);else{const O=h.getViewSubImage(f,V);q=O.viewport,ne===0&&(e.setRenderTargetTextures(w,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(w))}let X=R[ne];X===void 0&&(X=new Yn,X.layers.enable(ne),X.viewport=new rn,R[ne]=X),X.matrix.fromArray(V.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(V.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(q.x,q.y,q.width,q.height),ne===0&&(F.matrix.copy(X.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),y===!0&&F.cameras.push(X)}const B=o.enabledFeatures;if(B&&B.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const ne=h.getDepthInformation(N[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,o.renderState)}if(B&&B.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let ne=0;ne<N.length;ne++){const V=N[ne].camera;if(V){let q=u[V];q||(q=new pd,u[V]=q);const X=h.getCameraImage(V);q.sourceTexture=X}}}}for(let N=0;N<E.length;N++){const y=S[N],B=E[N];y!==null&&B!==void 0&&B.update(y,le,c||s)}ge&&ge(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),x=null}const Ce=new Cd;Ce.setAnimationLoop(ie),this.setAnimationLoop=function(J){ge=J},this.dispose=function(){}}}const Ao=new ri,t1=new Ft;function n1(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,yd(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function o(m,u,g,_,w){u.isMeshBasicMaterial?a(m,u):u.isMeshLambertMaterial?(a(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(a(m,u),h(m,u)):u.isMeshPhongMaterial?(a(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,w)):u.isMeshMatcapMaterial?(a(m,u),x(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),b(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&r(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Cn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Cn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),_=g.envMap,w=g.envMapRotation;_&&(m.envMap.value=_,Ao.copy(w),Ao.x*=-1,Ao.y*=-1,Ao.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ao.y*=-1,Ao.z*=-1),m.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(Ao)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function r(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Cn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function b(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function i1(i,e,t,n){let o={},a={},s=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const w=_.program;n.uniformBlockBinding(g,w)}function c(g,_){let w=o[g.id];w===void 0&&(x(g),w=d(g),o[g.id]=w,g.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(g,E);const S=e.render.frame;a[g.id]!==S&&(f(g),a[g.id]=S)}function d(g){const _=h();g.__bindingPointIndex=_;const w=i.createBuffer(),E=g.__size,S=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function h(){for(let g=0;g<r;g++)if(s.indexOf(g)===-1)return s.push(g),g;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=o[g.id],w=g.uniforms,E=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,C=w.length;S<C;S++){const M=Array.isArray(w[S])?w[S]:[w[S]];for(let A=0,v=M.length;A<v;A++){const R=M[A];if(p(R,S,A,E)===!0){const F=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let Y=0;Y<H.length;Y++){const j=H[Y],Q=b(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,F+z,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(g,_,w,E){const S=g.value,C=_+"_"+w;if(E[C]===void 0)return typeof S=="number"||typeof S=="boolean"?E[C]=S:E[C]=S.clone(),!0;{const M=E[C];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return E[C]=S,!0}else if(M.equals(S)===!1)return M.copy(S),!0}return!1}function x(g){const _=g.uniforms;let w=0;const E=16;for(let C=0,M=_.length;C<M;C++){const A=Array.isArray(_[C])?_[C]:[_[C]];for(let v=0,R=A.length;v<R;v++){const F=A[v],H=Array.isArray(F.value)?F.value:[F.value];for(let z=0,Y=H.length;z<Y;z++){const j=H[z],Q=b(j),_e=w%E,Z=_e%Q.boundary,W=_e+Z;w+=Z,W!==0&&E-W<Q.storage&&(w+=E-W),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=Q.storage}}}const S=w%E;return S>0&&(w+=E-S),g.__size=w,g.__cache={},this}function b(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Mt("WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const w=s.indexOf(_.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(o[_.id]),delete o[_.id],delete a[_.id]}function u(){for(const g in o)i.deleteBuffer(o[g]);s=[],o={},a={}}return{bind:l,update:c,dispose:u}}const o1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function a1(){return Ri===null&&(Ri=new n0(o1,16,16,ma,Zn),Ri.name="DFG_LUT",Ri.minFilter=mn,Ri.magFilter=mn,Ri.wrapS=Vn,Ri.wrapT=Vn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class s1{constructor(e={}){const{canvas:t=Lf(),context:n=null,depth:o=!0,stencil:a=!1,alpha:s=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ai}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;const b=p,m=new Set([jc,Xc,Wc]),u=new Set([ai,Bi,ts,ns,Vc,Gc]),g=new Uint32Array(4),_=new Int32Array(4);let w=null,E=null;const S=[],C=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let v=!1;this._outputColorSpace=zt;let R=0,F=0,H=null,z=-1,Y=null;const j=new rn,Q=new rn;let _e=null;const Z=new Ve(0);let W=0,de=t.width,oe=t.height,ge=1,ie=null,Ce=null;const J=new rn(0,0,de,oe),le=new rn(0,0,de,oe);let N=!1;const y=new i0;let B=!1,k=!1;const he=new Ft,ne=new D,V=new rn,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function O(){return H===null?ge:1}let P=n;function ce(U,ve){return t.getContext(U,ve)}try{const U={alpha:!0,depth:o,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",ot,!1),P===null){const ve="webgl2";if(P=ce(ve,U),P===null)throw ce(ve)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Bt("WebGLRenderer: "+U.message),U}let Me,ye,se,I,T,$,ae,Re,we,Ge,Oe,je,Je,Fe,Be,be,Ae,Pe,Xe,K,ke,He,Qe;function me(){Me=new sv(P),Me.init(),ke=new Zx(P,Me),ye=new Kg(P,Me,e,ke),se=new Yx(P,Me),ye.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),I=new cv(P),T=new Ux,$=new $x(P,Me,se,T,ye,ke,I),ae=new av(A),Re=new pp(P),He=new Zg(P,Re),we=new rv(P,Re,I,He),Ge=new dv(P,we,Re,He,I),Pe=new uv(P,ye,$),Be=new Qg(T),Oe=new Dx(A,ae,Me,ye,He,Be),je=new n1(A,T),Je=new Fx,Fe=new Gx(Me),Ae=new $g(A,ae,se,Ge,x,l),be=new qx(A,Ge,ye),Qe=new i1(P,I,ye,se),Xe=new Jg(P,Me,I),K=new lv(P,Me,I),I.programs=Oe.programs,A.capabilities=ye,A.extensions=Me,A.properties=T,A.renderLists=Je,A.shadowMap=be,A.state=se,A.info=I}me(),b!==ai&&(M=new hv(b,t.width,t.height,o,a));const re=new e1(A,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const U=Me.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Me.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(U){U!==void 0&&(ge=U,this.setSize(de,oe,!1))},this.getSize=function(U){return U.set(de,oe)},this.setSize=function(U,ve,Ie=!0){if(re.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=U,oe=ve,t.width=Math.floor(U*ge),t.height=Math.floor(ve*ge),Ie===!0&&(t.style.width=U+"px",t.style.height=ve+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,U,ve)},this.getDrawingBufferSize=function(U){return U.set(de*ge,oe*ge).floor()},this.setDrawingBufferSize=function(U,ve,Ie){de=U,oe=ve,ge=Ie,t.width=Math.floor(U*Ie),t.height=Math.floor(ve*Ie),this.setViewport(0,0,U,ve)},this.setEffects=function(U){if(b===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let ve=0;ve<U.length;ve++)if(U[ve].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(j)},this.getViewport=function(U){return U.copy(J)},this.setViewport=function(U,ve,Ie,fe){U.isVector4?J.set(U.x,U.y,U.z,U.w):J.set(U,ve,Ie,fe),se.viewport(j.copy(J).multiplyScalar(ge).round())},this.getScissor=function(U){return U.copy(le)},this.setScissor=function(U,ve,Ie,fe){U.isVector4?le.set(U.x,U.y,U.z,U.w):le.set(U,ve,Ie,fe),se.scissor(Q.copy(le).multiplyScalar(ge).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(U){se.setScissorTest(N=U)},this.setOpaqueSort=function(U){ie=U},this.setTransparentSort=function(U){Ce=U},this.getClearColor=function(U){return U.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(U=!0,ve=!0,Ie=!0){let fe=0;if(U){let pe=!1;if(H!==null){const Ye=H.texture.format;pe=m.has(Ye)}if(pe){const Ye=H.texture.type,G=u.has(Ye),ee=Ae.getClearColor(),ue=Ae.getClearAlpha(),te=ee.r,Se=ee.g,Te=ee.b;G?(g[0]=te,g[1]=Se,g[2]=Te,g[3]=ue,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=te,_[1]=Se,_[2]=Te,_[3]=ue,P.clearBufferiv(P.COLOR,0,_))}else fe|=P.COLOR_BUFFER_BIT}ve&&(fe|=P.DEPTH_BUFFER_BIT),Ie&&(fe|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&P.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),Ae.dispose(),Je.dispose(),Fe.dispose(),T.dispose(),ae.dispose(),Ge.dispose(),He.dispose(),Qe.dispose(),Oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Rn),re.removeEventListener("sessionend",Mn),xt.stop()};function ze(U){U.preventDefault(),fr("WebGLRenderer: Context Lost."),v=!0}function Ze(){fr("WebGLRenderer: Context Restored."),v=!1;const U=I.autoReset,ve=be.enabled,Ie=be.autoUpdate,fe=be.needsUpdate,pe=be.type;me(),I.autoReset=U,be.enabled=ve,be.autoUpdate=Ie,be.needsUpdate=fe,be.type=pe}function ot(U){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function nt(U){const ve=U.target;ve.removeEventListener("dispose",nt),bt(ve)}function bt(U){Ot(U),T.remove(U)}function Ot(U){const ve=T.get(U).programs;ve!==void 0&&(ve.forEach(function(Ie){Oe.releaseProgram(Ie)}),U.isShaderMaterial&&Oe.releaseShaderCache(U))}this.renderBufferDirect=function(U,ve,Ie,fe,pe,Ye){ve===null&&(ve=q);const G=pe.isMesh&&pe.matrixWorld.determinant()<0,ee=Nn(U,ve,Ie,fe,pe);se.setMaterial(fe,G);let ue=Ie.index,te=1;if(fe.wireframe===!0){if(ue=we.getWireframeAttribute(Ie),ue===void 0)return;te=2}const Se=Ie.drawRange,Te=Ie.attributes.position;let Ue=Se.start*te,$e=(Se.start+Se.count)*te;Ye!==null&&(Ue=Math.max(Ue,Ye.start*te),$e=Math.min($e,(Ye.start+Ye.count)*te)),ue!==null?(Ue=Math.max(Ue,0),$e=Math.min($e,ue.count)):Te!=null&&(Ue=Math.max(Ue,0),$e=Math.min($e,Te.count));const tt=$e-Ue;if(tt<0||tt===1/0)return;He.setup(pe,fe,ee,Ie,ue);let ct,gt=Xe;if(ue!==null&&(ct=Re.get(ue),gt=K,gt.setIndex(ct)),pe.isMesh)fe.wireframe===!0?(se.setLineWidth(fe.wireframeLinewidth*O()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(pe.isLine){let pt=fe.linewidth;pt===void 0&&(pt=1),se.setLineWidth(pt*O()),pe.isLineSegments?gt.setMode(P.LINES):pe.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else pe.isPoints?gt.setMode(P.POINTS):pe.isSprite&&gt.setMode(P.TRIANGLES);if(pe.isBatchedMesh)if(pe._multiDrawInstances!==null)hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount,pe._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))gt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const pt=pe._multiDrawStarts,it=pe._multiDrawCounts,It=pe._multiDrawCount,xe=ue?Re.get(ue).bytesPerElement:1,We=T.get(fe).currentProgram.getUniforms();for(let at=0;at<It;at++)We.setValue(P,"_gl_DrawID",at),gt.render(pt[at]/xe,it[at])}else if(pe.isInstancedMesh)gt.renderInstances(Ue,tt,pe.count);else if(Ie.isInstancedBufferGeometry){const pt=Ie._maxInstanceCount!==void 0?Ie._maxInstanceCount:1/0,it=Math.min(Ie.instanceCount,pt);gt.renderInstances(Ue,tt,it)}else gt.render(Ue,tt)};function nn(U,ve,Ie){U.transparent===!0&&U.side===Jt&&U.forceSinglePass===!1?(U.side=Cn,U.needsUpdate=!0,Pn(U,ve,Ie),U.side=eo,U.needsUpdate=!0,Pn(U,ve,Ie),U.side=Jt):Pn(U,ve,Ie)}this.compile=function(U,ve,Ie=null){Ie===null&&(Ie=U),E=Fe.get(Ie),E.init(ve),C.push(E),Ie.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ve.layers)&&(E.pushLight(pe),pe.castShadow&&E.pushShadow(pe))}),U!==Ie&&U.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ve.layers)&&(E.pushLight(pe),pe.castShadow&&E.pushShadow(pe))}),E.setupLights();const fe=new Set;return U.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const Ye=pe.material;if(Ye)if(Array.isArray(Ye))for(let G=0;G<Ye.length;G++){const ee=Ye[G];nn(ee,Ie,pe),fe.add(ee)}else nn(Ye,Ie,pe),fe.add(Ye)}),E=C.pop(),fe},this.compileAsync=function(U,ve,Ie=null){const fe=this.compile(U,ve,Ie);return new Promise(pe=>{function Ye(){if(fe.forEach(function(G){T.get(G).currentProgram.isReady()&&fe.delete(G)}),fe.size===0){pe(U);return}setTimeout(Ye,10)}Me.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let hn=null;function on(U){hn&&hn(U)}function Rn(){xt.stop()}function Mn(){xt.start()}const xt=new Cd;xt.setAnimationLoop(on),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(U){hn=U,re.setAnimationLoop(U),U===null?xt.stop():xt.start()},re.addEventListener("sessionstart",Rn),re.addEventListener("sessionend",Mn),this.render=function(U,ve){if(ve!==void 0&&ve.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;const Ie=re.enabled===!0&&re.isPresenting===!0,fe=M!==null&&(H===null||Ie)&&M.begin(A,H);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.parent===null&&ve.matrixWorldAutoUpdate===!0&&ve.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(ve),ve=re.getCamera()),U.isScene===!0&&U.onBeforeRender(A,U,ve,H),E=Fe.get(U,C.length),E.init(ve),C.push(E),he.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),y.setFromProjectionMatrix(he,Ni,ve.reversedDepth),k=this.localClippingEnabled,B=Be.init(this.clippingPlanes,k),w=Je.get(U,S.length),w.init(),S.push(w),re.enabled===!0&&re.isPresenting===!0){const G=A.xr.getDepthSensingMesh();G!==null&&Dt(G,ve,-1/0,A.sortObjects)}Dt(U,ve,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(ie,Ce),X=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,X&&Ae.addToRenderList(w,U),this.info.render.frame++,B===!0&&Be.beginShadows();const pe=E.state.shadowsArray;if(be.render(pe,U,ve),B===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe&&M.hasRenderPass())===!1){const G=w.opaque,ee=w.transmissive;if(E.setupLights(),ve.isArrayCamera){const ue=ve.cameras;if(ee.length>0)for(let te=0,Se=ue.length;te<Se;te++){const Te=ue[te];cn(G,ee,U,Te)}X&&Ae.render(U);for(let te=0,Se=ue.length;te<Se;te++){const Te=ue[te];Ht(w,U,Te,Te.viewport)}}else ee.length>0&&cn(G,ee,U,ve),X&&Ae.render(U),Ht(w,U,ve)}H!==null&&F===0&&($.updateMultisampleRenderTarget(H),$.updateRenderTargetMipmap(H)),fe&&M.end(A),U.isScene===!0&&U.onAfterRender(A,U,ve),He.resetDefaultState(),z=-1,Y=null,C.pop(),C.length>0?(E=C[C.length-1],B===!0&&Be.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,S.pop(),S.length>0?w=S[S.length-1]:w=null};function Dt(U,ve,Ie,fe){if(U.visible===!1)return;if(U.layers.test(ve.layers)){if(U.isGroup)Ie=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ve);else if(U.isLight)E.pushLight(U),U.castShadow&&E.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||y.intersectsSprite(U)){fe&&V.setFromMatrixPosition(U.matrixWorld).applyMatrix4(he);const G=Ge.update(U),ee=U.material;ee.visible&&w.push(U,G,ee,Ie,V.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||y.intersectsObject(U))){const G=Ge.update(U),ee=U.material;if(fe&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),V.copy(U.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),V.copy(G.boundingSphere.center)),V.applyMatrix4(U.matrixWorld).applyMatrix4(he)),Array.isArray(ee)){const ue=G.groups;for(let te=0,Se=ue.length;te<Se;te++){const Te=ue[te],Ue=ee[Te.materialIndex];Ue&&Ue.visible&&w.push(U,G,Ue,Ie,V.z,Te)}}else ee.visible&&w.push(U,G,ee,Ie,V.z,null)}}const Ye=U.children;for(let G=0,ee=Ye.length;G<ee;G++)Dt(Ye[G],ve,Ie,fe)}function Ht(U,ve,Ie,fe){const{opaque:pe,transmissive:Ye,transparent:G}=U;E.setupLightsView(Ie),B===!0&&Be.setGlobalState(A.clippingPlanes,Ie),fe&&se.viewport(j.copy(fe)),pe.length>0&&wn(pe,ve,Ie),Ye.length>0&&wn(Ye,ve,Ie),G.length>0&&wn(G,ve,Ie),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function cn(U,ve,Ie,fe){if((Ie.isScene===!0?Ie.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[fe.id]===void 0){const Ue=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[fe.id]=new Wn(1,1,{generateMipmaps:!0,type:Ue?Zn:ai,minFilter:Ro,samples:Math.max(4,ye.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}const Ye=E.state.transmissionRenderTarget[fe.id],G=fe.viewport||j;Ye.setSize(G.z*A.transmissionResolutionScale,G.w*A.transmissionResolutionScale);const ee=A.getRenderTarget(),ue=A.getActiveCubeFace(),te=A.getActiveMipmapLevel();A.setRenderTarget(Ye),A.getClearColor(Z),W=A.getClearAlpha(),W<1&&A.setClearColor(16777215,.5),A.clear(),X&&Ae.render(Ie);const Se=A.toneMapping;A.toneMapping=Fi;const Te=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),E.setupLightsView(fe),B===!0&&Be.setGlobalState(A.clippingPlanes,fe),wn(U,Ie,fe),$.updateMultisampleRenderTarget(Ye),$.updateRenderTargetMipmap(Ye),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let $e=0,tt=ve.length;$e<tt;$e++){const ct=ve[$e],{object:gt,geometry:pt,material:it,group:It}=ct;if(it.side===Jt&&gt.layers.test(fe.layers)){const xe=it.side;it.side=Cn,it.needsUpdate=!0,dn(gt,Ie,fe,pt,it,It),it.side=xe,it.needsUpdate=!0,Ue=!0}}Ue===!0&&($.updateMultisampleRenderTarget(Ye),$.updateRenderTargetMipmap(Ye))}A.setRenderTarget(ee,ue,te),A.setClearColor(Z,W),Te!==void 0&&(fe.viewport=Te),A.toneMapping=Se}function wn(U,ve,Ie){const fe=ve.isScene===!0?ve.overrideMaterial:null;for(let pe=0,Ye=U.length;pe<Ye;pe++){const G=U[pe],{object:ee,geometry:ue,group:te}=G;let Se=G.material;Se.allowOverride===!0&&fe!==null&&(Se=fe),ee.layers.test(Ie.layers)&&dn(ee,ve,Ie,ue,Se,te)}}function dn(U,ve,Ie,fe,pe,Ye){U.onBeforeRender(A,ve,Ie,fe,pe,Ye),U.modelViewMatrix.multiplyMatrices(Ie.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),pe.onBeforeRender(A,ve,Ie,fe,U,Ye),pe.transparent===!0&&pe.side===Jt&&pe.forceSinglePass===!1?(pe.side=Cn,pe.needsUpdate=!0,A.renderBufferDirect(Ie,ve,fe,pe,U,Ye),pe.side=eo,pe.needsUpdate=!0,A.renderBufferDirect(Ie,ve,fe,pe,U,Ye),pe.side=Jt):A.renderBufferDirect(Ie,ve,fe,pe,U,Ye),U.onAfterRender(A,ve,Ie,fe,pe,Ye)}function Pn(U,ve,Ie){ve.isScene!==!0&&(ve=q);const fe=T.get(U),pe=E.state.lights,Ye=E.state.shadowsArray,G=pe.state.version,ee=Oe.getParameters(U,pe.state,Ye,ve,Ie),ue=Oe.getProgramCacheKey(ee);let te=fe.programs;fe.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?ve.environment:null,fe.fog=ve.fog;const Se=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;fe.envMap=ae.get(U.envMap||fe.environment,Se),fe.envMapRotation=fe.environment!==null&&U.envMap===null?ve.environmentRotation:U.envMapRotation,te===void 0&&(U.addEventListener("dispose",nt),te=new Map,fe.programs=te);let Te=te.get(ue);if(Te!==void 0){if(fe.currentProgram===Te&&fe.lightsStateVersion===G)return Sn(U,ee),Te}else ee.uniforms=Oe.getUniforms(U),U.onBeforeCompile(ee,A),Te=Oe.acquireProgram(ee,ue),te.set(ue,Te),fe.uniforms=ee.uniforms;const Ue=fe.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ue.clippingPlanes=Be.uniform),Sn(U,ee),fe.needsLights=Fn(U),fe.lightsStateVersion=G,fe.needsLights&&(Ue.ambientLightColor.value=pe.state.ambient,Ue.lightProbe.value=pe.state.probe,Ue.directionalLights.value=pe.state.directional,Ue.directionalLightShadows.value=pe.state.directionalShadow,Ue.spotLights.value=pe.state.spot,Ue.spotLightShadows.value=pe.state.spotShadow,Ue.rectAreaLights.value=pe.state.rectArea,Ue.ltc_1.value=pe.state.rectAreaLTC1,Ue.ltc_2.value=pe.state.rectAreaLTC2,Ue.pointLights.value=pe.state.point,Ue.pointLightShadows.value=pe.state.pointShadow,Ue.hemisphereLights.value=pe.state.hemi,Ue.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Ue.spotLightMatrix.value=pe.state.spotLightMatrix,Ue.spotLightMap.value=pe.state.spotLightMap,Ue.pointShadowMatrix.value=pe.state.pointShadowMatrix),fe.currentProgram=Te,fe.uniformsList=null,Te}function Kn(U){if(U.uniformsList===null){const ve=U.currentProgram.getUniforms();U.uniformsList=rr.seqWithValue(ve.seq,U.uniforms)}return U.uniformsList}function Sn(U,ve){const Ie=T.get(U);Ie.outputColorSpace=ve.outputColorSpace,Ie.batching=ve.batching,Ie.batchingColor=ve.batchingColor,Ie.instancing=ve.instancing,Ie.instancingColor=ve.instancingColor,Ie.instancingMorph=ve.instancingMorph,Ie.skinning=ve.skinning,Ie.morphTargets=ve.morphTargets,Ie.morphNormals=ve.morphNormals,Ie.morphColors=ve.morphColors,Ie.morphTargetsCount=ve.morphTargetsCount,Ie.numClippingPlanes=ve.numClippingPlanes,Ie.numIntersection=ve.numClipIntersection,Ie.vertexAlphas=ve.vertexAlphas,Ie.vertexTangents=ve.vertexTangents,Ie.toneMapping=ve.toneMapping}function Nn(U,ve,Ie,fe,pe){ve.isScene!==!0&&(ve=q),$.resetTextureUnits();const Ye=ve.fog,G=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?ve.environment:null,ee=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ga,ue=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,te=ae.get(fe.envMap||G,ue),Se=fe.vertexColors===!0&&!!Ie.attributes.color&&Ie.attributes.color.itemSize===4,Te=!!Ie.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Ue=!!Ie.morphAttributes.position,$e=!!Ie.morphAttributes.normal,tt=!!Ie.morphAttributes.color;let ct=Fi;fe.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ct=A.toneMapping);const gt=Ie.morphAttributes.position||Ie.morphAttributes.normal||Ie.morphAttributes.color,pt=gt!==void 0?gt.length:0,it=T.get(fe),It=E.state.lights;if(B===!0&&(k===!0||U!==Y)){const wt=U===Y&&fe.id===z;Be.setState(fe,U,wt)}let xe=!1;fe.version===it.__version?(it.needsLights&&it.lightsStateVersion!==It.state.version||it.outputColorSpace!==ee||pe.isBatchedMesh&&it.batching===!1||!pe.isBatchedMesh&&it.batching===!0||pe.isBatchedMesh&&it.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&it.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&it.instancing===!1||!pe.isInstancedMesh&&it.instancing===!0||pe.isSkinnedMesh&&it.skinning===!1||!pe.isSkinnedMesh&&it.skinning===!0||pe.isInstancedMesh&&it.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&it.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&it.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&it.instancingMorph===!1&&pe.morphTexture!==null||it.envMap!==te||fe.fog===!0&&it.fog!==Ye||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Be.numPlanes||it.numIntersection!==Be.numIntersection)||it.vertexAlphas!==Se||it.vertexTangents!==Te||it.morphTargets!==Ue||it.morphNormals!==$e||it.morphColors!==tt||it.toneMapping!==ct||it.morphTargetsCount!==pt)&&(xe=!0):(xe=!0,it.__version=fe.version);let We=it.currentProgram;xe===!0&&(We=Pn(fe,ve,pe));let at=!1,ht=!1,qe=!1;const ut=We.getUniforms(),dt=it.uniforms;if(se.useProgram(We.program)&&(at=!0,ht=!0,qe=!0),fe.id!==z&&(z=fe.id,ht=!0),at||Y!==U){se.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",U.projectionMatrix),ut.setValue(P,"viewMatrix",U.matrixWorldInverse);const Ct=ut.map.cameraPosition;Ct!==void 0&&Ct.setValue(P,ne.setFromMatrixPosition(U.matrixWorld)),ye.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&ut.setValue(P,"isOrthographic",U.isOrthographicCamera===!0),Y!==U&&(Y=U,ht=!0,qe=!0)}if(it.needsLights&&(It.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",It.state.directionalShadowMap,$),It.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",It.state.spotShadowMap,$),It.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",It.state.pointShadowMap,$)),pe.isSkinnedMesh){ut.setOptional(P,pe,"bindMatrix"),ut.setOptional(P,pe,"bindMatrixInverse");const wt=pe.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ut.setValue(P,"boneTexture",wt.boneTexture,$))}pe.isBatchedMesh&&(ut.setOptional(P,pe,"batchingTexture"),ut.setValue(P,"batchingTexture",pe._matricesTexture,$),ut.setOptional(P,pe,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",pe._indirectTexture,$),ut.setOptional(P,pe,"batchingColorTexture"),pe._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",pe._colorsTexture,$));const Et=Ie.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&Pe.update(pe,Ie,We),(ht||it.receiveShadow!==pe.receiveShadow)&&(it.receiveShadow=pe.receiveShadow,ut.setValue(P,"receiveShadow",pe.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&ve.environment!==null&&(dt.envMapIntensity.value=ve.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=a1()),ht&&(ut.setValue(P,"toneMappingExposure",A.toneMappingExposure),it.needsLights&&yn(dt,qe),Ye&&fe.fog===!0&&je.refreshFogUniforms(dt,Ye),je.refreshMaterialUniforms(dt,fe,ge,oe,E.state.transmissionRenderTarget[U.id]),rr.upload(P,Kn(it),dt,$)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(rr.upload(P,Kn(it),dt,$),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&ut.setValue(P,"center",pe.center),ut.setValue(P,"modelViewMatrix",pe.modelViewMatrix),ut.setValue(P,"normalMatrix",pe.normalMatrix),ut.setValue(P,"modelMatrix",pe.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const wt=fe.uniformsGroups;for(let Ct=0,an=wt.length;Ct<an;Ct++){const An=wt[Ct];Qe.update(An,We),Qe.bind(An,We)}}return We}function yn(U,ve){U.ambientLightColor.needsUpdate=ve,U.lightProbe.needsUpdate=ve,U.directionalLights.needsUpdate=ve,U.directionalLightShadows.needsUpdate=ve,U.pointLights.needsUpdate=ve,U.pointLightShadows.needsUpdate=ve,U.spotLights.needsUpdate=ve,U.spotLightShadows.needsUpdate=ve,U.rectAreaLights.needsUpdate=ve,U.hemisphereLights.needsUpdate=ve}function Fn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(U,ve,Ie){const fe=T.get(U);fe.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),T.get(U.texture).__webglTexture=ve,T.get(U.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:Ie,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,ve){const Ie=T.get(U);Ie.__webglFramebuffer=ve,Ie.__useDefaultFramebuffer=ve===void 0};const Xn=P.createFramebuffer();this.setRenderTarget=function(U,ve=0,Ie=0){H=U,R=ve,F=Ie;let fe=null,pe=!1,Ye=!1;if(U){const ee=T.get(U);if(ee.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(P.FRAMEBUFFER,ee.__webglFramebuffer),j.copy(U.viewport),Q.copy(U.scissor),_e=U.scissorTest,se.viewport(j),se.scissor(Q),se.setScissorTest(_e),z=-1;return}else if(ee.__webglFramebuffer===void 0)$.setupRenderTarget(U);else if(ee.__hasExternalTextures)$.rebindTextures(U,T.get(U.texture).__webglTexture,T.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Se=U.depthTexture;if(ee.__boundDepthTexture!==Se){if(Se!==null&&T.has(Se)&&(U.width!==Se.image.width||U.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(U)}}const ue=U.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Ye=!0);const te=T.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(te[ve])?fe=te[ve][Ie]:fe=te[ve],pe=!0):U.samples>0&&$.useMultisampledRTT(U)===!1?fe=T.get(U).__webglMultisampledFramebuffer:Array.isArray(te)?fe=te[Ie]:fe=te,j.copy(U.viewport),Q.copy(U.scissor),_e=U.scissorTest}else j.copy(J).multiplyScalar(ge).floor(),Q.copy(le).multiplyScalar(ge).floor(),_e=N;if(Ie!==0&&(fe=Xn),se.bindFramebuffer(P.FRAMEBUFFER,fe)&&se.drawBuffers(U,fe),se.viewport(j),se.scissor(Q),se.setScissorTest(_e),pe){const ee=T.get(U.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ee.__webglTexture,Ie)}else if(Ye){const ee=ve;for(let ue=0;ue<U.textures.length;ue++){const te=T.get(U.textures[ue]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ue,te.__webglTexture,Ie,ee)}}else if(U!==null&&Ie!==0){const ee=T.get(U.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ee.__webglTexture,Ie)}z=-1},this.readRenderTargetPixels=function(U,ve,Ie,fe,pe,Ye,G,ee=0){if(!(U&&U.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=T.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&G!==void 0&&(ue=ue[G]),ue){se.bindFramebuffer(P.FRAMEBUFFER,ue);try{const te=U.textures[ee],Se=te.format,Te=te.type;if(U.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ee),!ye.textureFormatReadable(Se)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Te)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ve>=0&&ve<=U.width-fe&&Ie>=0&&Ie<=U.height-pe&&P.readPixels(ve,Ie,fe,pe,ke.convert(Se),ke.convert(Te),Ye)}finally{const te=H!==null?T.get(H).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(U,ve,Ie,fe,pe,Ye,G,ee=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=T.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&G!==void 0&&(ue=ue[G]),ue)if(ve>=0&&ve<=U.width-fe&&Ie>=0&&Ie<=U.height-pe){se.bindFramebuffer(P.FRAMEBUFFER,ue);const te=U.textures[ee],Se=te.format,Te=te.type;if(U.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ee),!ye.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.bufferData(P.PIXEL_PACK_BUFFER,Ye.byteLength,P.STREAM_READ),P.readPixels(ve,Ie,fe,pe,ke.convert(Se),ke.convert(Te),0);const $e=H!==null?T.get(H).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,$e);const tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Df(P,tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ye),P.deleteBuffer(Ue),P.deleteSync(tt),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,ve=null,Ie=0){const fe=Math.pow(2,-Ie),pe=Math.floor(U.image.width*fe),Ye=Math.floor(U.image.height*fe),G=ve!==null?ve.x:0,ee=ve!==null?ve.y:0;$.setTexture2D(U,0),P.copyTexSubImage2D(P.TEXTURE_2D,Ie,0,0,G,ee,pe,Ye),se.unbindTexture()};const en=P.createFramebuffer(),On=P.createFramebuffer();this.copyTextureToTexture=function(U,ve,Ie=null,fe=null,pe=0,Ye=0){let G,ee,ue,te,Se,Te,Ue,$e,tt;const ct=U.isCompressedTexture?U.mipmaps[Ye]:U.image;if(Ie!==null)G=Ie.max.x-Ie.min.x,ee=Ie.max.y-Ie.min.y,ue=Ie.isBox3?Ie.max.z-Ie.min.z:1,te=Ie.min.x,Se=Ie.min.y,Te=Ie.isBox3?Ie.min.z:0;else{const dt=Math.pow(2,-pe);G=Math.floor(ct.width*dt),ee=Math.floor(ct.height*dt),U.isDataArrayTexture?ue=ct.depth:U.isData3DTexture?ue=Math.floor(ct.depth*dt):ue=1,te=0,Se=0,Te=0}fe!==null?(Ue=fe.x,$e=fe.y,tt=fe.z):(Ue=0,$e=0,tt=0);const gt=ke.convert(ve.format),pt=ke.convert(ve.type);let it;ve.isData3DTexture?($.setTexture3D(ve,0),it=P.TEXTURE_3D):ve.isDataArrayTexture||ve.isCompressedArrayTexture?($.setTexture2DArray(ve,0),it=P.TEXTURE_2D_ARRAY):($.setTexture2D(ve,0),it=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ve.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ve.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ve.unpackAlignment);const It=P.getParameter(P.UNPACK_ROW_LENGTH),xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),We=P.getParameter(P.UNPACK_SKIP_PIXELS),at=P.getParameter(P.UNPACK_SKIP_ROWS),ht=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,te),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const qe=U.isDataArrayTexture||U.isData3DTexture,ut=ve.isDataArrayTexture||ve.isData3DTexture;if(U.isDepthTexture){const dt=T.get(U),Et=T.get(ve),wt=T.get(dt.__renderTarget),Ct=T.get(Et.__renderTarget);se.bindFramebuffer(P.READ_FRAMEBUFFER,wt.__webglFramebuffer),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let an=0;an<ue;an++)qe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(U).__webglTexture,pe,Te+an),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,T.get(ve).__webglTexture,Ye,tt+an)),P.blitFramebuffer(te,Se,G,ee,Ue,$e,G,ee,P.DEPTH_BUFFER_BIT,P.NEAREST);se.bindFramebuffer(P.READ_FRAMEBUFFER,null),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(pe!==0||U.isRenderTargetTexture||T.has(U)){const dt=T.get(U),Et=T.get(ve);se.bindFramebuffer(P.READ_FRAMEBUFFER,en),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,On);for(let wt=0;wt<ue;wt++)qe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dt.__webglTexture,pe,Te+wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,pe),ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,Ye,tt+wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Et.__webglTexture,Ye),pe!==0?P.blitFramebuffer(te,Se,G,ee,Ue,$e,G,ee,P.COLOR_BUFFER_BIT,P.NEAREST):ut?P.copyTexSubImage3D(it,Ye,Ue,$e,tt+wt,te,Se,G,ee):P.copyTexSubImage2D(it,Ye,Ue,$e,te,Se,G,ee);se.bindFramebuffer(P.READ_FRAMEBUFFER,null),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ut?U.isDataTexture||U.isData3DTexture?P.texSubImage3D(it,Ye,Ue,$e,tt,G,ee,ue,gt,pt,ct.data):ve.isCompressedArrayTexture?P.compressedTexSubImage3D(it,Ye,Ue,$e,tt,G,ee,ue,gt,ct.data):P.texSubImage3D(it,Ye,Ue,$e,tt,G,ee,ue,gt,pt,ct):U.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ye,Ue,$e,G,ee,gt,pt,ct.data):U.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ye,Ue,$e,ct.width,ct.height,gt,ct.data):P.texSubImage2D(P.TEXTURE_2D,Ye,Ue,$e,G,ee,gt,pt,ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,It),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,at),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ht),Ye===0&&ve.generateMipmaps&&P.generateMipmap(it),se.unbindTexture()},this.initRenderTarget=function(U){T.get(U).__webglFramebuffer===void 0&&$.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?$.setTextureCube(U,0):U.isData3DTexture?$.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?$.setTexture2DArray(U,0):$.setTexture2D(U,0),se.unbindTexture()},this.resetState=function(){R=0,F=0,H=null,se.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}}function Ud(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const n=t.getContext("2d"),o=n.createLinearGradient(0,0,2048,1024);o.addColorStop(0,"#96633b"),o.addColorStop(.35,"#9d6a40"),o.addColorStop(.7,"#8f5d36"),o.addColorStop(1,"#855530"),n.fillStyle=o,n.fillRect(0,0,2048,1024);for(let c=0;c<240;c++){const d=c*83%1024,h=16+c%24,f=.012+c%5*.003;n.fillStyle=c%2===0?`rgba(60, 34, 14, ${f})`:`rgba(185, 130, 82, ${f})`,n.fillRect(0,d,2048,h)}const a=document.createElement("canvas");a.width=1024,a.height=512,a.getContext("2d").drawImage(t,0,0,1024,512);const r=new Ut(t);r.colorSpace=zt,r.wrapS=Rt,r.wrapT=Rt,r.anisotropy=8;const l=new Ut(a);return l.wrapS=Rt,l.wrapT=Rt,{colorTex:r,bumpTex:l}}function r1(){const t=document.createElement("canvas");t.width=1024,t.height=576;const n=t.getContext("2d"),o=n.createLinearGradient(0,0,1024,576);o.addColorStop(0,"#070c1a"),o.addColorStop(.45,"#0b1833"),o.addColorStop(.8,"#1b2442"),o.addColorStop(1,"#30222b"),n.fillStyle=o,n.fillRect(0,0,1024,576),n.strokeStyle="rgba(30, 107, 255, 0.22)",n.lineWidth=1.5;for(let s=320;s<576;s+=28)n.beginPath(),n.moveTo(0,s),n.lineTo(1024,s),n.stroke();for(let s=-200;s<=1224;s+=64)n.beginPath(),n.moveTo(1024/2+(s-1024/2)*.25,320),n.lineTo(s,576),n.stroke();for(let s=0;s<48;s++){const r=140+s*15.5,l=22+Math.sin(s*.42)*48+Math.cos(s*.95)*28,c=n.createLinearGradient(0,290-l,0,290);c.addColorStop(0,"#5ce1ff"),c.addColorStop(.5,"#1e6bff"),c.addColorStop(1,"rgba(30, 107, 255, 0.15)"),n.fillStyle=c,n.fillRect(r,290-l,9,l)}n.fillStyle="rgba(12, 19, 36, 0.82)",n.strokeStyle="rgba(76, 194, 255, 0.35)",n.lineWidth=2,n.fillRect(70,52,884,135),n.strokeRect(70,52,884,135),n.fillStyle="#ffaa44",n.font="bold 24px monospace",n.fillText('LG ULTRAGEAR 27" • 1:87 HO MICRO-COASTER TELEMETRY',98,96),n.fillStyle="#7cd4ff",n.font="18px monospace",n.fillText("SPLINE: 720 PERIODIC C² SAMPLES | LENGTH: 3.837m (333.8m @ 1:87)",98,132),n.fillStyle="#a8b8d0",n.fillText("SECTORS: [1] BOYATA CLIMB [2] CAT 360° HELIX [3] #1E6BFF MIC [4] LAMP SPIRAL",98,164);const a=new Ut(t);return a.colorSpace=zt,a}function Nd(){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.fillStyle="#0d1017",n.fillRect(0,0,512,128);const o=16;for(let s=0;s<128/o;s++)for(let r=0;r<5;r++)n.fillStyle=(s+r)%2===0?"#ffffff":"#14171f",n.fillRect(r*o,s*o,o,o),n.fillRect(512-(r+1)*o,s*o,o,o);n.fillStyle="#ffaa44",n.font="bold 26px sans-serif",n.textAlign="center",n.fillText("START • FINISH",512/2,54),n.fillStyle="#5ce1ff",n.font="bold 17px monospace",n.fillText("1:87 MICRO-COASTER GRAND PRIX",512/2,88);const a=new Ut(t);return a.colorSpace=zt,a}let u0=null,qs=null;function Fd(){if(qs)return qs;const i=512,e=512,t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),o=n.createImageData(i,e),a=o.data,s=document.createElement("canvas");s.width=i,s.height=e;const r=s.getContext("2d"),l=r.createImageData(i,e),c=l.data,d=document.createElement("canvas");d.width=i,d.height=e;const h=d.getContext("2d"),f=h.createImageData(i,e),p=f.data;function x(w,E){let S=w*374761393+E*668265263^1542469173;return S=(S^S>>>13)*1274126177,((S^S>>>16)>>>0)/4294967295}function b(w,E,S){const C=w/S,M=E/S,A=Math.floor(C),v=Math.floor(M),R=C-A,F=M-v,H=R*R*(3-2*R),z=F*F*(3-2*F),Y=A&511,j=A+1&511,Q=v&511,_e=v+1&511,Z=x(Y,Q),W=x(j,Q),de=x(Y,_e),oe=x(j,_e);return(Z*(1-H)+W*H)*(1-z)+(de*(1-H)+oe*H)*z}function m(w,E){const S=b(w,E,3.2),C=b(w+113,E+257,1.7),M=x(w&511,E&511),A=Math.pow(Math.max(0,(S-.34)*1.52),1.28),v=Math.pow(Math.max(0,(C-.44)*1.82),1.38);return Ke.clamp(.16+.5*A+.26*v+.08*M,0,1)}for(let w=0;w<e;w++)for(let E=0;E<i;E++){const S=(w*i+E)*4,C=m(E,w),M=m(E+1,w),A=m(E,w+1),v=13+C*64;a[S+0]=Math.round(Ke.clamp(v,10,94)),a[S+1]=Math.round(Ke.clamp(v+2,11,97)),a[S+2]=Math.round(Ke.clamp(v+4,13,104)),a[S+3]=255;const R=(M-C)*3.3,F=(A-C)*3.3,H=Ke.clamp(R*.5+.5,.1,.9),z=Ke.clamp(F*.5+.5,.1,.9);c[S+0]=Math.round(H*255),c[S+1]=Math.round(z*255),c[S+2]=240,c[S+3]=255;const Y=Ke.clamp(.94-.34*(C-.24),.6,.96),j=Math.round(Y*255);p[S+0]=j,p[S+1]=j,p[S+2]=j,p[S+3]=255}n.putImageData(o,0,0),r.putImageData(l,0,0),h.putImageData(f,0,0);const u=new Ut(t);u.colorSpace=zt,u.wrapS=Rt,u.wrapT=Rt,u.anisotropy=16;const g=new Ut(s);g.wrapS=Rt,g.wrapT=Rt,g.anisotropy=16;const _=new Ut(d);return _.wrapS=Rt,_.wrapT=Rt,_.anisotropy=16,qs={trackAsphaltAlbedoTex:u,trackAsphaltNormalTex:g,trackAsphaltRoughnessTex:_},qs}function Ru(i,e=!1){if(!i||!i.attributes||!i.attributes.position)return;const t=i.attributes.position,n=t.count,o=i.attributes.uv;if(!e&&o&&o.count===n){let l=!1;for(let c=0;c<Math.min(n,64);c++)if(Math.abs(o.getX(c))>1e-4||Math.abs(o.getY(c))>1e-4){l=!0;break}if(l)return}const a=new Float32Array(n*2),s=u0,r=s?s.length:0;if(r>0){const l=new Float32Array(r+1);for(let d=0;d<r;d++){const h=s[d].position,f=s[(d+1)%r].position;l[d+1]=l[d]+Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2])}let c=0;for(let d=0;d<n;d++){const h=t.getX(d),f=t.getY(d),p=t.getZ(d);let x=c,b=1/0;for(let C=-18;C<=18;C++){const M=(c+C+r)%r,A=s[M].position,v=(h-A[0])**2+(f-A[1])**2+(p-A[2])**2;v<b&&(b=v,x=M)}if(b>.025*.025)for(let C=0;C<r;C+=2){const M=s[C].position,A=(h-M[0])**2+(f-M[1])**2+(p-M[2])**2;A<b&&(b=A,x=C)}c=x;const m=s[x],u=h-m.position[0],g=f-m.position[1],_=p-m.position[2],w=u*m.right[0]+g*m.right[1]+_*m.right[2],E=u*m.tangent[0]+g*m.tangent[1]+_*m.tangent[2],S=l[x]+E;a[d*2+0]=.5+w/.0058,a[d*2+1]=S/.0058}}else for(let l=0;l<n;l++){const c=t.getX(l),d=t.getZ(l);a[l*2+0]=c*172,a[l*2+1]=d*172}i.setAttribute("uv",new tn(a,2)),i.attributes.uv.needsUpdate=!0}function Pu(i,e=.5,t=!1){if(!i||!i.attributes||!i.attributes.position||i.userData&&i.userData._bumperHeightScaled)return;i.userData=i.userData||{},i.userData._bumperHeightScaled=!0;const n=u0,o=n?n.length:0;if(o===0)return;const a=i.attributes.position,s=a.count;let r=0;for(let l=0;l<s;l++){const c=a.getX(l),d=a.getY(l),h=a.getZ(l);let f=r,p=1/0;for(let S=-18;S<=18;S++){const C=(r+S+o)%o,M=n[C].position,A=(c-M[0])**2+(d-M[1])**2+(h-M[2])**2;A<p&&(p=A,f=C)}if(p>.025*.025)for(let S=0;S<o;S++){const C=n[S].position,M=(c-C[0])**2+(d-C[1])**2+(h-C[2])**2;M<p&&(p=M,f=S)}r=f;let x=n[f].position[0],b=n[f].position[1],m=n[f].position[2],u=n[f].normal[0],g=n[f].normal[1],_=n[f].normal[2],w=1/0;for(const S of[(f-1+o)%o,f]){const C=(S+1)%o,M=n[S].position,A=n[C].position,v=A[0]-M[0],R=A[1]-M[1],F=A[2]-M[2],H=v*v+R*R+F*F,z=H>1e-12?Math.max(0,Math.min(1,((c-M[0])*v+(d-M[1])*R+(h-M[2])*F)/H)):0,Y=M[0]+v*z,j=M[1]+R*z,Q=M[2]+F*z,_e=(c-Y)**2+(d-j)**2+(h-Q)**2;if(_e<w){w=_e,x=Y,b=j,m=Q;const Z=n[S].normal,W=n[C].normal,de=Z[0]+(W[0]-Z[0])*z,oe=Z[1]+(W[1]-Z[1])*z,ge=Z[2]+(W[2]-Z[2])*z,ie=Math.hypot(de,oe,ge)||1;u=de/ie,g=oe/ie,_=ge/ie}}const E=(c-x)*u+(d-b)*g+(h-m)*_;if(E>2e-5){const S=(e-1)*E;a.setXYZ(l,c+u*S,d+g*S,h+_*S)}}a.needsUpdate=!0,t&&i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}function Od(i){if(!i||!i.isMesh||!i.geometry||i.userData._spatialChunked)return;const e=i.geometry,t=e.attributes.position;if(!t)return;const n=e.index,o=Math.floor(n?n.count/3:t.count/3);if(o<2e3)return;i.userData._spatialChunked=!0,e.boundingBox||e.computeBoundingBox();const a=e.boundingBox,s=a.min.x+(a.max.x-a.min.x)/3,r=a.min.x+(a.max.x-a.min.x)*2/3,l=(a.min.z+a.max.z)*.5,c=[[],[],[],[],[],[]];for(let b=0;b<o;b++){const m=n?n.getX(b*3+0):b*3+0,u=n?n.getX(b*3+1):b*3+1,g=n?n.getX(b*3+2):b*3+2,_=(t.getX(m)+t.getX(u)+t.getX(g))/3,w=(t.getZ(m)+t.getZ(u)+t.getZ(g))/3,E=_<s?0:_<r?1:2,S=w<l?0:1;c[S*3+E].push(m,u,g)}const d=c.filter(b=>b.length>0);if(d.length<=1)return;const h=Object.keys(e.attributes),f=[];for(const b of d){const m=new Int32Array(t.count).fill(-1),u=[],g=new Uint32Array(b.length);for(let E=0;E<b.length;E++){const S=b[E];let C=m[S];C===-1&&(C=u.length,m[S]=C,u.push(S)),g[E]=C}const _=u.length,w=new Lt;for(const E of h){const S=e.attributes[E],C=S.itemSize,M=S.array.constructor,A=new M(_*C),v=S.array;for(let R=0;R<_;R++){const F=u[R]*C,H=R*C;for(let z=0;z<C;z++)A[H+z]=v[F+z]}w.setAttribute(E,new tn(A,C,S.normalized))}w.setIndex(_<65535?new Qc(new Uint16Array(g),1):new e0(g,1)),w.computeBoundingBox(),w.computeBoundingSphere(),f.push(w)}const p=i.geometry;i.geometry=f[0],i.frustumCulled=!0;const x=i.parent;if(x)for(let b=1;b<f.length;b++){const m=new L(f[b],i.material);m.name=`${i.name}_Chunk${b}`,m.position.copy(i.position),m.quaternion.copy(i.quaternion),m.scale.copy(i.scale),m.castShadow=i.castShadow,m.receiveShadow=i.receiveShadow,m.frustumCulled=!0,m.userData._spatialChunked=!0,x.add(m)}p.dispose()}function Bd(i){if(!i)return;const e=[];i.traverse(t=>{if(!t.isMesh)return;t.frustumCulled=!0;const n=t.name||"",o=n.includes("CoasterRoadwayMesh")||n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite")||n.includes("CoasterSideRailsAndSpine"),a=o||n.includes("CoasterLatticeTrussColumns")||n.includes("StartFinishGantry")||n.includes("StartFinishTrussGantry");o?(t.castShadow=!1,t.receiveShadow=!1):n.includes("CoasterLatticeTrussColumns")?(t.castShadow=!0,t.receiveShadow=!1):a&&(t.castShadow=!0,t.receiveShadow=!0),n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite")?(Pu(t.geometry,.48,!0),Ru(t.geometry)):n.includes("CoasterSideRailsAndSpine")&&Pu(t.geometry,.52,!1),!t.userData._spatialChunked&&(n.includes("CoasterLatticeTrussColumns")||n.includes("CoasterSideRailsAndSpine")||n.includes("CoasterRoadwayMesh")||n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite"))&&e.push(t);const s=Array.isArray(t.material)?t.material:[t.material];for(const r of s){if(!r)continue;const l=r.name||"";if(l==="Mat_MicroAsphalt"||n.includes("CoasterRoadwayMesh")&&l!=="Mat_LaneStripeWhite"){Ru(t.geometry,!0);const{trackAsphaltAlbedoTex:c,trackAsphaltNormalTex:d,trackAsphaltRoughnessTex:h}=Fd();c.anisotropy=8,d.anisotropy=8,h.anisotropy=8,r.map=c,r.normalMap=d,r.normalScale=new Ne(.52,.52),r.roughnessMap=h,r.roughness=.82,r.metalness=.04,r.color&&r.color.setHex(16777215),r.needsUpdate=!0}else if(l==="Mat_LaneStripeWhite"||l==="Mat_FIACurbRed"||l==="Mat_FIACurbWhite"||n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite"))r.roughness=.78,r.metalness=0,r.normalMap=null,r.roughnessMap=null,r.needsUpdate=!0;else if(l.includes("StartLight")||l==="Mat_LightGreen"||l==="Mat_LightAmber"||l==="Mat_LightRed")r.color&&r.color.setHex(1185052),r.emissive&&r.emissive.setHex(0),r.emissiveIntensity=0,r.roughness=.22,r.metalness=.15,r.needsUpdate=!0;else if(l==="Mat_BrushedSilverAluminum"||l==="Mat_TrussSilver"||n.includes("CoasterSideRailsAndSpine")||n.includes("CoasterLatticeTrussColumns")){const c=n.includes("CoasterLatticeTrussColumns")||l==="Mat_TrussSilver";r.color&&r.color.setHex(8029332),r.roughness=.38,r.metalness=.82,r.envMapIntensity=.55,r.userData._hasUnderTrackLedHook||(r.userData._hasUnderTrackLedHook=!0,r.onBeforeCompile=d=>{d.uniforms.uTrackLedTime=gn.uTime,d.uniforms.uTrackLedIntensity=gn.uIntensity,d.uniforms.uTrackGlowFieldTex=gn.uGlowFieldTex,d.vertexShader=`varying vec3 vTrackLedWorldPos;
varying float vTrackLedNormalY;
`+d.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
                 vTrackLedWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                 vTrackLedNormalY = normalize(mat3(modelMatrix) * objectNormal).y;`),d.fragmentShader=`uniform float uTrackLedTime;
               uniform float uTrackLedIntensity;
               uniform sampler2D uTrackGlowFieldTex;
               varying vec3 vTrackLedWorldPos;
               varying float vTrackLedNormalY;
               vec3 evalTrackLedPalette(float sNorm, float timeSec) {
                 float p = fract(sNorm * 2.0 - timeSec * 0.055);
                 float seg = p * 6.0;
                 int idx = int(floor(seg));
                 float f = smoothstep(0.0, 1.0, fract(seg));
                 vec3 c0 = vec3(0.62, 0.06, 1.00);
                 vec3 c1 = vec3(1.00, 0.08, 0.58);
                 vec3 c2 = vec3(0.84, 0.10, 1.00);
                 vec3 c3 = vec3(0.06, 0.46, 1.00);
                 vec3 c4 = vec3(1.00, 0.14, 0.68);
                 vec3 c5 = vec3(0.46, 0.08, 1.00);
                 if (idx == 0) return mix(c0, c1, f);
                 if (idx == 1) return mix(c1, c2, f);
                 if (idx == 2) return mix(c2, c3, f);
                 if (idx == 3) return mix(c3, c4, f);
                 if (idx == 4) return mix(c4, c5, f);
                 return mix(c5, c0, f);
               }
`+d.fragmentShader.replace("#include <dithering_fragment>",`vec2 tFieldUv = clamp(vec2((vTrackLedWorldPos.x - (-0.58)) / 1.16, (vTrackLedWorldPos.z - (-0.34)) / 0.68), 0.0, 1.0);
                 vec4 tField = texture2D(uTrackGlowFieldTex, tFieldUv);
                 float sinP = tField.g * 2.0 - 1.0;
                 float cosP = tField.b * 2.0 - 1.0;
                 float sNorm = atan(sinP, cosP) / 6.2831853 + 0.5;
                 vec3 ledCol = evalTrackLedPalette(sNorm, uTrackLedTime);
                 float underMask = ${c?"0.45":"smoothstep(0.35, -0.35, vTrackLedNormalY)"};
                 gl_FragColor.rgb += ledCol * (0.14 * tField.r * underMask * uTrackLedIntensity);
                 #include <dithering_fragment>`)}),r.needsUpdate=!0}}});for(const t of e)Od(t)}const gn={uTime:{value:0},uIntensity:{value:1},uGlowFieldTex:{value:null},uLedA:{value:new Ve(1,.05,.55)},uLedB:{value:new Ve(.54,.03,1)},uLedC:{value:new Ve(0,.54,1)},uLedD:{value:new Ve(.66,.05,1)},uFieldMin:{value:new Ne(-.58,-.34)},uFieldSpan:{value:new Ne(1.16,.68)},uMatRect:{value:new rn(.155,.0025,.495,.2675)}},Iu=`
      uniform vec3 uLedA;
      uniform vec3 uLedB;
      uniform vec3 uLedC;
      uniform vec3 uLedD;
      vec3 evalTrackLedPalette(float phaseNorm, float timeSec) {
        float p = fract(phaseNorm - timeSec * 0.055 + 0.08);
        float seg = p * 4.0;
        int idx = int(floor(seg));
        float f = smoothstep(0.0, 1.0, fract(seg));
        if (idx == 0) return mix(uLedA, uLedB, f);
        if (idx == 1) return mix(uLedB, uLedC, f);
        if (idx == 2) return mix(uLedC, uLedD, f);
        return mix(uLedD, uLedA, f);
      }
`;function l1(i,e={}){var ee,ue;const t=new et;t.name="CoasterTrackGroup";const n=i.samples;u0=n;const o=n.length,a=(i.track_width_m||.022)*.5,s=i.curb_width_m||.0017,r=i.start_finish_index??Math.min(646,n.length-1),l=(i.rail_height_m||.0018)*.52,c=Nd(),{trackAsphaltAlbedoTex:d,trackAsphaltNormalTex:h,trackAsphaltRoughnessTex:f}=Fd(),p=new Float32Array(o+1);for(let te=0;te<o;te++){const Se=n[te].position,Te=n[(te+1)%o].position;p[te+1]=p[te]+Math.hypot(Te[0]-Se[0],Te[1]-Se[1],Te[2]-Se[2])}const x=Math.max(1e-4,p[o]),b=[],m=[],u=[],g=[];for(let te=0;te<=o;te++){const Se=n[te%o],Te=new D(...Se.position),Ue=new D(...Se.right),$e=new D(...Se.normal),tt=p[te]/.012,ct=Te.clone().addScaledVector(Ue,-a),gt=Te.clone().addScaledVector(Ue,a),pt=ct.clone().addScaledVector($e,-.0018),it=gt.clone().addScaledVector($e,-.0018);if(b.push(ct.x,ct.y,ct.z,gt.x,gt.y,gt.z,it.x,it.y,it.z,pt.x,pt.y,pt.z),m.push($e.x,$e.y,$e.z,$e.x,$e.y,$e.z,-$e.x,-$e.y,-$e.z,-$e.x,-$e.y,-$e.z),u.push(0,tt,1,tt,1,tt,0,tt),te<o){const It=te*4,xe=(te+1)*4;g.push(It+0,It+1,xe+1),g.push(It+0,xe+1,xe+0),g.push(It+2,It+3,xe+3),g.push(It+2,xe+3,xe+2)}}const _=new Lt;_.setAttribute("position",new mt(b,3)),_.setAttribute("normal",new mt(m,3)),_.setAttribute("uv",new mt(u,2)),_.setIndex(g);const w=new Ee({map:d,normalMap:h,normalScale:new Ne(.52,.52),roughnessMap:f,roughness:.82,metalness:.04}),E=new L(_,w);E.castShadow=!0,E.receiveShadow=!0,E.name="CoasterAsphaltRoadbed",t.add(E);const S=[],C=[],M=[],A=[],v=new Ve(((ee=e.curbColors)==null?void 0:ee[0])??15213850),R=new Ve(((ue=e.curbColors)==null?void 0:ue[1])??16119802),F=new Ve(e.railColor??12109012);let H=0;for(let te=0;te<o;te++){const Se=n[te],Te=n[(te+1)%o],Ue=new D(...Se.position),$e=new D(...Se.right),tt=new D(...Se.normal),ct=new D(...Te.position),gt=new D(...Te.right),pt=new D(...Te.normal),It=te%2===0?v:R;for(const xe of[-1,1]){const We=xe*(a-.0012),at=xe*(a+5e-4),ht=Ue.clone().addScaledVector($e,We).addScaledVector(tt,12e-5),qe=Ue.clone().addScaledVector($e,at).addScaledVector(tt,22e-5),ut=ct.clone().addScaledVector(gt,We).addScaledVector(pt,12e-5),dt=ct.clone().addScaledVector(gt,at).addScaledVector(pt,22e-5),Et=qe.clone().addScaledVector(tt,l),wt=dt.clone().addScaledVector(pt,l);S.push(ht.x,ht.y,ht.z,qe.x,qe.y,qe.z,dt.x,dt.y,dt.z,ut.x,ut.y,ut.z,Et.x,Et.y,Et.z,wt.x,wt.y,wt.z);for(let Ct=0;Ct<4;Ct++)C.push(tt.x,tt.y,tt.z),M.push(It.r,It.g,It.b);for(let Ct=0;Ct<2;Ct++)C.push(-xe*$e.x,-xe*$e.y,-xe*$e.z),M.push(F.r,F.g,F.b);xe===1?(A.push(H+0,H+1,H+2),A.push(H+0,H+2,H+3),A.push(H+1,H+4,H+5),A.push(H+1,H+5,H+2)):(A.push(H+1,H+0,H+3),A.push(H+1,H+3,H+2),A.push(H+4,H+1,H+2),A.push(H+4,H+2,H+5)),H+=6}}const z=new Lt;z.setAttribute("position",new mt(S,3)),z.setAttribute("normal",new mt(C,3)),z.setAttribute("color",new mt(M,3)),z.setIndex(A);const Y=new Ee({vertexColors:!0,roughness:.68,metalness:.04,normalMap:h,normalScale:new Ne(.55,.55),side:Jt}),j=new L(z,Y);j.castShadow=!0,j.receiveShadow=!0,t.add(j);const Q=[],_e=[];for(let te=0;te<o;te+=2){const Se=n[te],Te=new D(...Se.position),Ue=new D(...Se.right),$e=new D(...Se.normal);Q.push(Te.clone().addScaledVector(Ue,-.0065).addScaledVector($e,-.0032)),_e.push(Te.clone().addScaledVector(Ue,.0065).addScaledVector($e,-.0032))}const Z=new vo(Q,!0),W=new vo(_e,!0),de=new Ee({color:e.steelColor??8029332,roughness:.38,metalness:.82}),oe=new L(new zo(Z,360,.0011,8,!0),de),ge=new L(new zo(W,360,.0011,8,!0),de);oe.castShadow=!0,ge.castShadow=!0,t.add(oe,ge);const ie=10,Ce=Math.floor(o/ie);function J(te,Se,Te){return e.groundAt?e.groundAt(te,Se,Te):te<-.23&&te>-.49&&Se<.04&&Se>-.18&&Te>.145?.156:te>.155&&te<.495&&Se>.002&&Se<.268?.003:0}const le=Ce*4,N=new st(85e-5,85e-5,1,8),y=new Zi(N,de,le);y.castShadow=!0,y.receiveShadow=!0;const B=new st(.0048,.0055,.0022,14),k=new Ee({color:2238e3,roughness:.6,metalness:.5}),he=new Zi(B,k,Ce);he.receiveShadow=!0;const ne=new Le(.024,.0022,.0055),V=new Zi(ne,de,Ce);V.castShadow=!0;const q=new Le(.0072,.001,.0072),X=new Zi(q,de,Ce*6),O=new Kt;let P=0,ce=0,Me=0,ye=0;const se=.0031,I=[[-se,-se],[se,-se],[se,se],[-se,se]];for(let te=0;te<Ce;te++){const Se=n[te*ie],Te=new D(...Se.position),Ue=new D(...Se.tangent),$e=Te.y-.0032,tt=J(Te.x,Te.z,Te.y),ct=Math.max(.006,$e-tt),gt=tt+ct*.5;O.position.set(Te.x,$e,Te.z);const pt=Math.atan2(Ue.x,Ue.z);O.rotation.set(0,pt,0),O.scale.set(1,1,1),O.updateMatrix(),V.setMatrixAt(Me++,O.matrix),O.position.set(Te.x,tt+.0011,Te.z),O.rotation.set(0,pt,0),O.scale.set(1,1,1),O.updateMatrix(),he.setMatrixAt(ce++,O.matrix);for(const[It,xe]of I)O.position.set(Te.x+It,gt,Te.z+xe),O.rotation.set(0,0,0),O.scale.set(1,ct,1),O.updateMatrix(),y.setMatrixAt(P++,O.matrix);const it=Math.min(6,Math.max(2,Math.floor(ct/.024)));for(let It=0;It<it;It++){const xe=tt+(It+.5)/it*ct;O.position.set(Te.x,xe,Te.z),O.rotation.set(0,pt,0),O.scale.set(1,1,1),O.updateMatrix(),X.setMatrixAt(ye++,O.matrix)}}y.count=P,he.count=ce,V.count=Me,X.count=ye,y.instanceMatrix.needsUpdate=!0,he.instanceMatrix.needsUpdate=!0,V.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,t.add(y,he,V,X);const T=new et;T.name="StartFinishGantry",T.visible=!e.customStart,T.position.set(.0183,.035,.255);for(const te of[-.018,.018]){const Se=new L(new Le(.004,.028,.004),de);Se.position.set(0,.014,te),Se.castShadow=!0,T.add(Se)}const $=new L(new Le(.0048,.0082,.04),new Ee({color:1448226,roughness:.35,metalness:.6}));$.position.set(0,.024,0),$.castShadow=!0,T.add($);const ae=new Ee({map:c,emissiveMap:c,emissive:new Ve(16777215),emissiveIntensity:.75,roughness:.2});for(const[te,Se]of[[.0026,Math.PI/2],[-.0026,-Math.PI/2]]){const Te=new L(new Gt(.036,.0072),ae);Te.position.set(te,.024,0),Te.rotation.y=Se,T.add(Te)}for(let te=-2;te<=2;te++){const Se=new L(new At(85e-5,10,10),new Nt({color:te===0?3331915:16755268}));Se.position.set(.0026,.0188,te*.0038),T.add(Se)}const Re=new L(new Gt(.0035,.021),new Nt({map:c}));Re.rotation.x=-Math.PI/2,Re.position.set(0,6e-4,0),T.add(Re),t.add(T);const we=new et;we.name="UnderTrackLedAndGlowGroup";const Ge=[],Oe=[],je=[],Je=a+s*1.02,Fe=a*.58;for(let te=0;te<=o;te++){const Se=n[te%o],Te=new D(...Se.position),Ue=new D(...Se.right),$e=new D(...Se.normal),tt=p[te]/x,ct=Te.clone().addScaledVector(Ue,-Je).addScaledVector($e,3e-4),gt=Te.clone().addScaledVector(Ue,-Je*.92).addScaledVector($e,-.0022),pt=Te.clone().addScaledVector(Ue,-Fe).addScaledVector($e,-.0026),it=Te.clone().addScaledVector(Ue,Fe).addScaledVector($e,-.0026),It=Te.clone().addScaledVector(Ue,Je*.92).addScaledVector($e,-.0022),xe=Te.clone().addScaledVector(Ue,Je).addScaledVector($e,3e-4);if(Ge.push(ct.x,ct.y,ct.z,gt.x,gt.y,gt.z,pt.x,pt.y,pt.z,it.x,it.y,it.z,It.x,It.y,It.z,xe.x,xe.y,xe.z),Oe.push(0,tt,.5,tt,1,tt,1,tt,.5,tt,0,tt),te<o){const We=te*6,at=(te+1)*6;je.push(We+0,We+1,at+1,We+0,at+1,at+0),je.push(We+1,We+2,at+2,We+1,at+2,at+1),je.push(We+3,We+4,at+4,We+3,at+4,at+3),je.push(We+4,We+5,at+5,We+4,at+5,at+4)}}const Be=new Lt;Be.setAttribute("position",new mt(Ge,3)),Be.setAttribute("uv",new mt(Oe,2)),Be.setIndex(je),Be.computeBoundingBox(),Be.computeBoundingSphere();const be=new Qt({uniforms:gn,side:Jt,transparent:!0,depthWrite:!1,toneMapped:!1,blending:Do,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uIntensity;
      varying vec2 vUv;

      ${Iu}

      void main() {
        if (uIntensity <= 0.001) discard;
        vec3 baseCol = evalTrackLedPalette(vUv.y * 2.0, uTime);
        float core = exp(-pow((vUv.x - 0.5) * 2.2, 2.0));
        vec3 col = mix(baseCol, vec3(1.0, 0.90, 0.98), core * 0.34) * (1.10 + 0.45 * core);
        float alpha = clamp((0.82 + 0.18 * core) * min(1.4, uIntensity), 0.0, 0.98);
        gl_FragColor = vec4(col * min(1.48, 0.80 + 0.52 * uIntensity), alpha);
      }
    `}),Ae=new L(Be,be);Ae.name="UnderTrackLedRibbonMesh",Ae.castShadow=!1,Ae.receiveShadow=!1,we.add(Ae),Od(Ae);const Pe=256,Xe=128;let K=-.58,ke=1.16,He=-.34,Qe=.68;if(e.glowBounds!=="desk"){let te=1/0,Se=-1/0,Te=1/0,Ue=-1/0;for(const $e of n)te=Math.min(te,$e.position[0]),Se=Math.max(Se,$e.position[0]),Te=Math.min(Te,$e.position[2]),Ue=Math.max(Ue,$e.position[2]);K=te-.08,ke=Se-te+.16,He=Te-.08,Qe=Ue-Te+.16}gn.uFieldMin.value.set(K,He),gn.uFieldSpan.value.set(ke,Qe),e.ledColors&&(gn.uLedA.value.set(e.ledColors[0]),gn.uLedB.value.set(e.ledColors[1]),gn.uLedC.value.set(e.ledColors[2]),gn.uLedD.value.set(e.ledColors[3]));const me=e.glowBounds==="desk";me?gn.uMatRect.value.set(.155,.0025,.495,.2675):gn.uMatRect.value.set(9,9,9,9);const re=e.glowGroundY??5e-4,ze=new Float32Array(Pe*Xe),Ze=new Float32Array(Pe*Xe),ot=new Float32Array(Pe*Xe);for(let te=0;te<o;te++){const Se=n[te],Te=Se.position[0],Ue=Se.position[1],$e=Se.position[2],tt=p[te]/x*Math.PI*2*2,ct=Math.sin(tt),gt=Math.cos(tt),pt=Math.max(0,Ue),it=pt<.048?.032:.046,It=1/(2*it*it),xe=1/(2*.019*.019),We=1/(1+pt*2.8),at=it*3,ht=Math.max(0,Math.floor((Te-at-K)/ke*Pe)),qe=Math.min(Pe-1,Math.ceil((Te+at-K)/ke*Pe)),ut=Math.max(0,Math.floor(($e-at-He)/Qe*Xe)),dt=Math.min(Xe-1,Math.ceil(($e+at-He)/Qe*Xe));for(let Et=ut;Et<=dt;Et++){const Ct=He+(Et+.5)/Xe*Qe-$e,an=Ct*Ct,An=Et*Pe;for(let fn=ht;fn<=qe;fn++){const De=K+(fn+.5)/Pe*ke-Te,vt=De*De+an;if(vt>at*at)continue;const $t=Math.exp(-vt*It)*We,ei=Math.exp(-vt*xe)*We,ft=An+fn;ze[ft]+=$t,Ze[ft]+=ei*ct,ot[ft]+=ei*gt}}}const nt=new Uint8Array(Pe*Xe*4);for(let te=0;te<Pe*Xe;te++){const Se=ze[te],Te=1-Math.exp(-Se*.088);let Ue=0,$e=1;if(Se>1e-5){const ct=Math.hypot(Ze[te],ot[te])||1;Ue=Ze[te]/ct,$e=ot[te]/ct}const tt=te*4;nt[tt+0]=Math.min(255,Math.max(0,Math.round(Te*255))),nt[tt+1]=Math.min(255,Math.max(0,Math.round((Ue*.5+.5)*255))),nt[tt+2]=Math.min(255,Math.max(0,Math.round(($e*.5+.5)*255))),nt[tt+3]=255}const bt=new n0(nt,Pe,Xe,hi);bt.magFilter=mn,bt.minFilter=mn,bt.wrapS=Vn,bt.wrapT=Vn,bt.flipY=!1,bt.needsUpdate=!0,gn.uGlowFieldTex.value=bt;const Ot=new Float32Array([K,re,He,K+ke,re,He,K+ke,re,He+Qe,K,re,He+Qe,.156,me?.0034:-50,.003,.494,me?.0034:-50,.003,.494,me?.0034:-50,.267,.156,me?.0034:-50,.267]),nn=new Float32Array([0,0,0,0,1,1,1,1]),hn=[0,2,1,0,3,2,4,6,5,4,7,6],on=new Lt;on.setAttribute("position",new tn(Ot,3)),on.setAttribute("aSurfaceId",new tn(nn,1)),on.setIndex(hn),on.computeBoundingBox(),on.computeBoundingSphere();const Rn=new Qt({uniforms:gn,side:Jt,transparent:!0,depthWrite:!1,toneMapped:!1,blending:Hn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:`
      attribute float aSurfaceId;
      varying vec3 vWorldPos;
      varying float vSurfaceId;
      void main() {
        vSurfaceId = aSurfaceId;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uIntensity;
      uniform sampler2D uGlowFieldTex;
      uniform vec2 uFieldMin;
      uniform vec2 uFieldSpan;
      uniform vec4 uMatRect;
      varying vec3 vWorldPos;
      varying float vSurfaceId;

      ${Iu}

      void main() {
        if (uIntensity <= 0.001) discard;

        // Avoid double-drawing on the oak desk quad directly beneath the 3mm Razer Mouse Mat
        if (vSurfaceId < 0.5) {
          if (vWorldPos.x > uMatRect.x && vWorldPos.x < uMatRect.z && vWorldPos.z > uMatRect.y && vWorldPos.z < uMatRect.w) {
            discard;
          }
        }

        vec2 fieldUv = (vWorldPos.xz - uFieldMin) / uFieldSpan;
        if (fieldUv.x < 0.0 || fieldUv.x > 1.0 || fieldUv.y < 0.0 || fieldUv.y > 1.0) discard;

        vec4 field = texture2D(uGlowFieldTex, fieldUv);
        float weight = field.r;
        if (weight < 0.01) discard;

        float sinP = field.g * 2.0 - 1.0;
        float cosP = field.b * 2.0 - 1.0;
        float sNorm = atan(sinP, cosP) / 6.2831853 + 0.5;

        // Smoothly feather near tabletop borders
        float edgeMaskX = smoothstep(0.0, 0.06, fieldUv.x) * (1.0 - smoothstep(0.94, 1.0, fieldUv.x));
        float edgeMaskZ = smoothstep(0.0, 0.07, fieldUv.y) * (1.0 - smoothstep(0.93, 1.0, fieldUv.y));

        vec3 col = evalTrackLedPalette(sNorm, uTime);
        float glowStrength = pow(weight, 1.12) * edgeMaskX * edgeMaskZ * 0.50 * uIntensity;
        if (glowStrength < 0.003) discard;
        gl_FragColor = vec4(col * glowStrength, 1.0);
      }
    `}),Mn=new L(on,Rn);Mn.name="UnderTrackDeskGlowMesh",Mn.castShadow=!1,Mn.receiveShadow=!1,we.add(Mn);const xt=new st(.0032,.0032,1,8),Dt=new Nt({colorWrite:!1,depthWrite:!1}),Ht=new Zi(xt,Dt,Ce);Ht.name="TrussColumnShadowProxies",Ht.castShadow=!0,Ht.receiveShadow=!1;for(let te=0;te<Ce;te++){const Se=n[te*ie],Te=new D(...Se.position),Ue=Te.y-.002,$e=J(Te.x,Te.z,Te.y),tt=Math.max(.006,Ue-$e),ct=$e+tt*.5;O.position.set(Te.x,ct,Te.z),O.rotation.set(0,0,0),O.scale.set(1,tt,1),O.updateMatrix(),Ht.setMatrixAt(te,O.matrix)}Ht.instanceMatrix.needsUpdate=!0,we.add(Ht);const cn=document.createElement("canvas");cn.width=64,cn.height=64;const wn=cn.getContext("2d"),dn=wn.createRadialGradient(32,32,2,32,32,30);dn.addColorStop(0,"rgba(255, 60, 70, 0.95)"),dn.addColorStop(.35,"rgba(255, 16, 32, 0.65)"),dn.addColorStop(.72,"rgba(220, 0, 18, 0.22)"),dn.addColorStop(1,"rgba(180, 0, 10, 0.0)"),wn.fillStyle=dn,wn.fillRect(0,0,64,64);const Pn=new Ut(cn),Kn=new Le(.00164,.00162,92e-5),Sn=new Nt({color:new Ve(1.45,.06,.1),toneMapped:!1}),Nn=new t0({map:Pn,color:16718379,transparent:!0,blending:Hn,depthWrite:!1,toneMapped:!1}),yn=[],Fn=n[r]||n[0],Xn=new D(...Fn.position),en=new D(Fn.right[0],0,Fn.right[2]).normalize(),On=new D(0,1,0),U=[.0064,.0032,0,-.0032,-.0064];for(let te=0;te<5;te++){const Se=U[te],Te=new et;Te.position.copy(Xn).addScaledVector(en,Se).addScaledVector(On,.012775);const Ue=new L(Kn,Sn);Ue.castShadow=!1,Ue.receiveShadow=!1,Te.add(Ue);const $e=new dd(Nn);$e.scale.set(.0054,.0054,1),$e.position.set(86e-5,0,0),Te.add($e),Te.visible=!1,e.customStart||we.add(Te),yn.push(Te)}function ve(te=0){const Se=Math.max(0,Math.min(5,Math.floor(te)));for(let Te=0;Te<yn.length;Te++)yn[Te].visible=Te<Se}function Ie(te=0,Se=1){gn.uTime.value=te,gn.uIntensity.value=Se,we.visible=Se>.005}const fe=new et;fe.name="SplineDebugOverlay",fe.visible=!1;const pe=n.map(te=>new D(...te.position).add(new D(0,.002,0)));pe.push(pe[0].clone());const Ye=new Lt().setFromPoints(pe),G=new Fs(Ye,new Wa({color:5030655}));fe.add(G);for(let te=0;te<o;te+=12){const Se=n[te],Te=new D(...Se.position).add(new D(0,.0015,0)),Ue=new D(...Se.tangent).multiplyScalar(.014),$e=new D(...Se.normal).multiplyScalar(.012),tt=new D(...Se.right).multiplyScalar(.011);fe.add(new Fs(new Lt().setFromPoints([Te,Te.clone().add(Ue)]),new Wa({color:16726832})),new Fs(new Lt().setFromPoints([Te,Te.clone().add($e)]),new Wa({color:3331915})),new Fs(new Lt().setFromPoints([Te,Te.clone().add(tt)]),new Wa({color:1993727})))}return t.add(fe),{trackGroup:t,underTrackLedGroup:we,updateUnderTrackLed:Ie,setF1StartLights:ve,roadGeo:_,debugGroup:fe,calibrateTrackCoasterGlb:Bd}}function c1(i,e={}){const t=i.samples,n=t.length,o=i.total_length_m||3.8371,a=t.map(oe=>new D().fromArray(oe.position));for(let oe=0;oe<2;oe++){const ge=a.map(ie=>ie.clone());for(let ie=0;ie<n;ie++){const Ce=a[(ie-1+n)%n],J=a[ie],le=a[(ie+1)%n];ge[ie].copy(J).multiplyScalar(.6).addScaledVector(Ce,.2).addScaledVector(le,.2)}for(let ie=0;ie<n;ie++)a[ie].copy(ge[ie])}const s=t.map(oe=>new D().fromArray(oe.tangent).normalize()),r=t.map(oe=>new D().fromArray(oe.normal).normalize()),l=t.map(oe=>new D().fromArray(oe.right).normalize()),c=t.map(oe=>oe.bank_deg||0);for(let oe=0;oe<4;oe++){const ge=s.map(le=>le.clone()),ie=r.map(le=>le.clone()),Ce=c.slice(),J=[1,2,3,2,1];for(let le=0;le<n;le++){ge[le].set(0,0,0),ie[le].set(0,0,0);let N=0;for(let y=-2;y<=2;y++){const B=(le+y+n)%n,k=J[y+2];ge[le].addScaledVector(s[B],k),ie[le].addScaledVector(r[B],k),N+=c[B]*k}ge[le].normalize(),ie[le].normalize(),Ce[le]=N/9}for(let le=0;le<n;le++)s[le].copy(ge[le]),l[le].crossVectors(s[le],ie[le]).normalize(),r[le].crossVectors(l[le],s[le]).normalize(),c[le]=Ce[le]}const d=new Float32Array(n),h=new Float32Array(n),f=new D;for(let oe=0;oe<n;oe++){const ge=(oe-3+n)%n,ie=(oe+3)%n;f.subVectors(s[ie],s[ge]),d[oe]=f.dot(l[oe])*8}for(let oe=0;oe<n;oe++){let ge=0;const ie=[1,2,3,2,1];for(let Ce=-2;Ce<=2;Ce++)ge+=d[(oe+Ce+n)%n]*ie[Ce+2];h[oe]=ge/9}const p=Math.min(i.start_finish_index??0,n-1),x={};for(let oe=0;oe<n;oe++){const ge=t[oe];x[ge.sector]===void 0&&(x[ge.sector]=ge.arc_length_m)}const b=t[p].arc_length_m,m=(b-(e.gridOffset??.025)+o)%o;new D;const u=new D;new D;const g=new Ft,_=new Jn,w=new Jn,E={index:0,sector:6,position:new D,tangent:new D,right:new D,normal:new D,bankDeg:0,signedCurvature:0,slope:0},S={index:0,sector:6,position:new D,tangent:new D,right:new D,normal:new D,bankDeg:0,signedCurvature:0,slope:0};function C(oe,ge=E){const ie=(oe%o+o)%o;let Ce=0,J=n-1;for(;Ce<J;){const O=Ce+J+1>>1;t[O].arc_length_m<=ie?Ce=O:J=O-1}const le=Ce,N=(Ce+1)%n,y=t[le],B=t[N],k=y.arc_length_m,he=N===0?o:B.arc_length_m,ne=Math.max(1e-6,he-k),V=Ke.clamp((ie-k)/ne,0,1);ge.position.copy(a[le]).lerp(a[N],V),ge.tangent.copy(s[le]).lerp(s[N],V).normalize(),ge.right.copy(l[le]).lerp(l[N],V).normalize(),ge.normal.copy(r[le]).lerp(r[N],V).normalize();const q=Ke.lerp(h[le],h[N],V),X=Ke.lerp(c[le],c[N],V);return ge.index=le,ge.sector=y.sector,ge.bankDeg=X,ge.signedCurvature=q,ge.slope=ge.tangent.y,ge}const M={forward:!1,backward:!1,left:!1,right:!1},A={velocidad:1,aceleracion:1,manejo:1,agarre:1,turbo:1},v={s:m,lateralOffset:e.lateral??0,lateralVel:0,speed:0,headingYaw:0,turnRight:0,steerSmooth:0,steerAngle:0,topSpeedMultiplier:1,steerInput:0,isDrifting:!1,driftDir:0,driftAngle:0,driftChargeTimer:0,cornerCleanTimer:0,boostCharge:1,boostActive:0,hopHeight:0,hopVel:0,curbRumble:0,railImpactActive:!1,railHitCooldown:0,downforceG:1,autopilot:!1,victoryCruise:!1,raceClockActive:!1,countdownLocked:!1,wasCountdownLocked:!1,launchWindowTimer:0,lapCount:1,currentLapTime:0,totalRaceTime:0,lapTimes:[],raceFinished:!1,finishTotalTime:null,bestLapTime:null,lastLapTime:null,sector:t[p].sector,leanAngle:0,bankDeg:0,altitudeMm:35,activeKeysStr:"NONE",lastRoadTurnDeg:0,lastSteerTurnDeg:0,signedCurvature:0,distToLeftRailMm:9,distToRightRailMm:9,railZone:"TRACK",angledIntoRail:!1,steeringAway:!1,position:new D(0,.035,.255),tangent:new D(-1,0,0),right:new D(0,0,-1),normal:new D(0,1,0),quaternion:new Jn};let R=null;function F(){return[M.forward&&"W",M.left&&"A",M.backward&&"S",M.right&&"D"].filter(Boolean).join("+")||"NONE"}function H(oe){return oe<=-.0089?"L-RAIL":oe>=.0089?"R-RAIL":oe<=-.0078?"L-CURB":oe>=.0078?"R-CURB":"TRACK"}function z(){const oe=C(v.s);v.sector=oe.sector,v.bankDeg=oe.bankDeg,v.slope=oe.slope,v.curvature=Math.abs(oe.signedCurvature),v.signedCurvature=oe.signedCurvature,v.distToLeftRailMm=(v.lateralOffset- -.009)*1e3,v.distToRightRailMm=(.009-v.lateralOffset)*1e3,v.railZone=H(v.lateralOffset),v.activeKeysStr=F(),v.tangent.copy(oe.tangent),v.right.copy(oe.right),v.normal.copy(oe.normal),v.downforceG=1+v.speed*v.speed/.26+Math.abs(Math.sin(Ke.degToRad(oe.bankDeg)))*.65;const ge=v.curbRumble>0?Math.abs(Math.sin(v.s*620))*28e-5*v.curbRumble:0;v.position.copy(oe.position).addScaledVector(oe.right,v.lateralOffset).addScaledVector(oe.normal,3e-4+ge),v.altitudeMm=Math.max(0,v.position.y*1e3),u.crossVectors(oe.normal,oe.tangent).normalize(),g.makeBasis(u,oe.normal,oe.tangent),_.setFromRotationMatrix(g),w.setFromAxisAngle(oe.normal,v.headingYaw),v.quaternion.copy(w.multiply(_))}z();function Y(oe){v.autopilot=!!oe,v.autopilot&&v.speed<.1&&(v.speed=.187*A.velocidad)}function j(oe){const ge=oe==="grid"?m:x[oe]??m;v.s=ge,v.lateralOffset=oe==="grid"?e.lateral??0:0,v.lateralVel=0,v.headingYaw=0,v.turnRight=0,v.steerSmooth=0,v.steerAngle=0,v.steerInput=0,v.driftAngle=0,v.isDrifting=!1,v.driftDir=0,v.driftChargeTimer=0,v.cornerCleanTimer=0,v.railImpactActive=!1,v.railHitCooldown=0,v.angledIntoRail=!1,v.steeringAway=!1,v.lastRoadTurnDeg=0,v.lastSteerTurnDeg=0,v.boostActive=0,v.speed=v.autopilot||v.victoryCruise?.187:0,z()}function Q(){v.victoryCruise=!1,v.raceFinished=!1,v.totalRaceTime=0,v.currentLapTime=0,v.lapCount=1,v.lapTimes=[],v.finishTotalTime=null,v.raceClockActive=!1,v.countdownLocked=!1,v.wasCountdownLocked=!1,v.launchWindowTimer=0,v.cornerCleanTimer=0,v.railImpactActive=!1,v.railHitCooldown=0,v.angledIntoRail=!1,v.steeringAway=!1,j("grid")}function _e(){v.countdownLocked=!1,v.wasCountdownLocked=!1,v.raceClockActive=!0,v.launchWindowTimer=.3,!v.autopilot&&!v.victoryCruise&&M.forward&&(v.boostActive=Math.max(v.boostActive,.75),v.launchWindowTimer=0)}function Z(oe){M.forward=!!oe.acel,M.backward=!!oe.freno,M.left=!!oe.izq,M.right=!!oe.der}function W(oe){Object.assign(A,oe)}function de(oe){const ge=Math.min(oe,.05),ie=C(v.s);v.activeKeysStr=F(),v.signedCurvature=ie.signedCurvature;const Ce=.205*v.topSpeedMultiplier*A.velocidad,J=.289*v.topSpeedMultiplier*A.velocidad,le=.204*v.topSpeedMultiplier*A.velocidad,N=.204*A.aceleracion;v.railHitCooldown>0&&(v.railHitCooldown=Math.max(0,v.railHitCooldown-ge)),v.countdownLocked?(v.wasCountdownLocked=!0,v.launchWindowTimer=0):v.wasCountdownLocked&&(v.wasCountdownLocked=!1,v.launchWindowTimer=.3),v.launchWindowTimer>0&&(!v.autopilot&&!v.victoryCruise&&M.forward?(v.boostActive=Math.max(v.boostActive,.75*A.turbo),v.launchWindowTimer=0):v.launchWindowTimer=Math.max(0,v.launchWindowTimer-ge));const y=v.autopilot;let B=0,k=0;if(y){B=1;const Re=Ke.clamp(-ie.signedCurvature*5e-4,-.0014,.0014)-v.lateralOffset;k=Ke.clamp(Re*36,-.35,.35),v.steerSmooth=k;const we=Ke.clamp(-k*.14,-.14,.14),Ge=1-Math.exp(-10.5*ge);v.headingYaw=Ke.lerp(v.headingYaw,we,Ge);const Oe=1-Math.exp(-8*ge);Math.abs(ie.signedCurvature)>.52&&v.speed>.1?(v.isDrifting=!0,v.driftDir=Math.sign(ie.signedCurvature)||1,v.driftAngle=Ke.lerp(v.driftAngle,-v.driftDir*.2,Oe),v.boostCharge=Math.min(1,v.boostCharge+ge*.28)):(v.isDrifting=!1,v.driftDir=0,v.driftAngle=Ke.lerp(v.driftAngle,0,Oe)),Math.abs(ie.signedCurvature)<.15&&v.boostCharge>.75&&(v.boostActive=.45,v.boostCharge=Math.max(.2,v.boostCharge-ge*.35))}else if(v.raceFinished){B=0,k=0,v.boostActive=0,v.isDrifting=!1,v.driftDir=0;const ae=1-Math.exp(-8*ge);v.headingYaw=Ke.lerp(v.headingYaw,0,ae),v.driftAngle=Ke.lerp(v.driftAngle,0,ae)}else M.forward&&(B+=1),M.backward&&(B-=1),k=(M.right?1:0)-(M.left?1:0);v.boostActive>0?v.boostActive=Math.max(0,v.boostActive-ge):v.isDrifting||(v.boostCharge=Math.min(1,v.boostCharge+ge*.06));const he=(v.s%o+o)%o,ne=Ke.clamp(Math.abs(ie.signedCurvature)/1.25,0,1),V=C(v.s+.06,S),q=Math.max(Math.abs(ie.signedCurvature),Math.abs(V.signedCurvature)),X=.032*Math.sin(he*11.2)+.021*Math.cos(he*18.7),O=Ke.clamp(ie.slope>0?-ie.slope*.68:-ie.slope*.42,-.25,.18);if(y){const ae=Math.max(ne*.24,Ke.clamp(q/1.6,0,1)*.34),Re=Ke.clamp(1-ae+O+X,.56,1.12),we=le*Re,Ge=v.boostActive>0?J*.88:we,Oe=-ie.slope*.16,je=Ge-v.speed,Je=Ke.clamp(je*4.2,-.95,.48);v.speed+=(Je+Oe)*ge,v.speed=Ke.clamp(v.speed,0,J)}else{const ae=Ke.clamp(1+O*.45,.88,1.1),Re=(v.boostActive>0?J:Ce)*ae;if(B===0){const we=1.6*ge;Math.abs(v.speed)<=we?v.speed=0:v.speed-=Math.sign(v.speed)*we,Math.abs(v.speed)<.008&&(v.speed=0)}else{const we=-ie.slope*.22;let Ge=0;B>0?Ge=v.speed<-.01?1.25*B:(v.boostActive>0?.36*A.aceleracion:N)*B:Ge=v.speed>.01?1.35*B:.19*B,v.speed+=(Ge+we)*ge,v.speed>Re?v.speed=Ke.lerp(v.speed,Re,1-Math.exp(-8.5*ge)):v.speed=Math.max(-.12*v.topSpeedMultiplier,v.speed)}}v.countdownLocked&&(v.speed=0);const P=y?1:Ke.clamp(1-ie.signedCurvature*v.lateralOffset*16,.88,1.14);if(y)v.lastRoadTurnDeg=0,v.lastSteerTurnDeg=0;else{const ae=v.headingYaw;v.steerSmooth=Ke.lerp(v.steerSmooth,k,1-Math.exp(-(k!==0?16:20)*ge));const Re=Ke.clamp(Math.abs(v.speed)/Ce,0,1.15),we=Ke.clamp(Math.abs(v.speed)/.11,.25,1),Ge=Math.tanh(ie.signedCurvature*.55)*.29*Math.max(.25,Re)/A.agarre,Oe=k!==0&&k*ie.signedCurvature>.2,je=k!==0&&k*ie.signedCurvature<-.2,Je=k*v.lateralOffset,Fe=.0058;let Be=0;if(k===0)Be=Ge;else if(Oe){const ke=Fe-Je,He=Ke.clamp(ke/.0045,-.45,1),Qe=-v.steerSmooth*.21*A.manejo*we*He;Be=Ge*(1-Math.abs(v.steerSmooth))+Qe}else je?Be=Ge-v.steerSmooth*.2*A.manejo*we:Be=Ge-v.steerSmooth*.185*A.manejo*we;Be=Ke.clamp(Be,-.34,.34);const be=(k!==0?11.5:10.5)*(.75+.25*A.manejo),Ae=Ke.lerp(ae,Be,1-Math.exp(-be*ge)),Pe=Ke.lerp(ae,Ge,1-Math.exp(-be*ge)),Xe=Pe-ae,K=Ae-Pe;v.headingYaw=Ke.clamp(Ae,-.42,.42),v.lastRoadTurnDeg=Xe*180/Math.PI,v.lastSteerTurnDeg=K*180/Math.PI}v.turnRight=k,v.steerAngle=-(y?k:v.steerSmooth)*.45,v.steerInput=Ke.lerp(v.steerInput,k,1-Math.exp(-12*ge)),y||(Math.abs(v.steerInput)>.35&&Math.abs(ie.signedCurvature)>.3&&v.speed>.11?(v.isDrifting=!0,v.driftDir=Math.sign(k)||Math.sign(v.steerInput)||1,v.driftAngle=Ke.lerp(v.driftAngle,-v.driftDir*.18,1-Math.exp(-10*ge)),v.boostCharge=Math.min(1,v.boostCharge+ge*.32*A.turbo)):(v.isDrifting=!1,v.driftDir=0,v.driftAngle=Ke.lerp(v.driftAngle,0,1-Math.exp(-11*ge))),v.railImpactActive||v.speed<=.08||Math.abs(v.lateralOffset)>=.0089?v.cornerCleanTimer=0:Math.abs(ie.signedCurvature)>.35&&v.speed>.11&&Math.abs(v.lateralOffset)<.0085&&!v.railImpactActive?v.cornerCleanTimer+=ge:Math.abs(ie.signedCurvature)<.26&&(v.cornerCleanTimer>=.42&&B>0?(v.boostActive=Math.max(v.boostActive,.65*A.turbo),v.cornerCleanTimer=0):v.cornerCleanTimer=Math.max(0,v.cornerCleanTimer-ge*2)));let ce=0;y?ce=v.speed*-Math.sin(v.headingYaw)+k*.024*(.35+.65*Math.min(1,Math.abs(v.speed)/.1)):ce=v.speed*-Math.sin(v.headingYaw)*.82,v.lateralVel=ce,v.lateralOffset+=ce*ge,v.curbRumble=0;const Me=Math.abs(v.lateralOffset),ye=Math.sign(v.lateralOffset)||1,se=Math.abs(ie.signedCurvature)>.35&&ye*ie.signedCurvature>0;if(v.angledIntoRail=Me>=.0078&&!se&&(ye>0&&v.headingYaw<-.05||ye<0&&v.headingYaw>.05),v.steeringAway=Me>=.0078&&(ye>0&&k<0||ye<0&&k>0),Me<.0086&&(v.railImpactActive=!1),Me>=.0078&&Me<.009)v.curbRumble=Ke.clamp((Me-.0078)/.0012,0,1),!y&&!se&&(v.speed*=1-.12*v.curbRumble*ge);else if(Me>=.009){const ae=Math.sign(v.lateralOffset)||1;if(v.lateralOffset=ae*.009,v.lateralVel=0,!y){const Re=Math.abs(ie.signedCurvature)>.35&&ae*ie.signedCurvature>0,we=ae>0&&k<0||ae<0&&k>0,Ge=ae>0&&k>0||ae<0&&k<0;if(Re&&!Ge)v.lateralOffset=ae*.0085,v.headingYaw=ae>0?Math.max(0,v.headingYaw):Math.min(0,v.headingYaw),v.curbRumble=.5,v.angledIntoRail=!1,v.steeringAway=we;else{const je=-ae*v.headingYaw>=.165||Ge&&Math.abs(ie.signedCurvature)<.35;if(!je&&!we)v.lateralOffset=ae*.0084,v.headingYaw=ae*.065,v.curbRumble=.85,v.isDrifting=!0,v.driftDir=-ae,v.angledIntoRail=!1,v.steeringAway=!1,v.railHitCooldown<=0&&(v.railHitCooldown=.22,v.speed*=.88,v.hopVel=Math.max(v.hopVel,.005),R&&R(.28));else{v.boostActive=0,v.cornerCleanTimer=0;const Je=je;if(v.angledIntoRail=Je,v.steeringAway=we,!v.railImpactActive&&Je&&!we){v.railImpactActive=!0,v.railHitCooldown=.25;const Fe=Ke.clamp(.5+Math.abs(v.headingYaw)*1.2+Math.abs(v.speed)/Ce*.4,.4,1);v.speed*=.42,v.hopVel=Math.max(v.hopVel,.01),R&&R(Fe)}Je&&!we?(v.headingYaw=-ae*Ke.clamp(Math.abs(v.headingYaw),.14,.22),v.speed=Math.max(0,v.speed-.55*ge),v.curbRumble=1):we&&(v.railImpactActive=!1,v.headingYaw=ae*.13,v.lateralOffset=ae*.0083,v.speed=Math.max(v.speed,.085*v.topSpeedMultiplier))}}}}v.s;const I=y?1:Math.max(0,Math.cos(v.headingYaw)),T=v.speed*I*ge/P;v.s=((v.s+T)%o+o)%o,(v.hopHeight>0||v.hopVel!==0)&&(v.hopHeight+=v.hopVel*ge,v.hopVel-=.18*ge,v.hopHeight<=0&&(v.hopHeight=0,v.hopVel=0));const $=Ke.clamp((v.steerSmooth*.55+ie.signedCurvature*.35)*Math.min(1,Math.abs(v.speed)/.12),-.6,.6);return v.leanAngle=Ke.lerp(v.leanAngle,$,1-Math.exp(-8*ge)),z(),v}return{state:v,keys:M,vehicle:A,totalLength:o,startFinishArc:b,gridArc:m,stepPhysics:de,sampleTrackAtArcLength:C,teleportToSector:j,resetToStart:Q,setAutopilot:Y,setInput:Z,setVehicle:W,notifyLightsOut:_e,onRailImpact:oe=>{R=oe}}}const Lu={idle:"kart_idle_loop.wav",cruise:"kart_cruise_mid_loop.wav",drift:"kart_tire_drift_loop.wav",curb:"curb_rumble_loop.wav"},Ys={"kart_idle_loop.wav":new URL(""+new URL("kart_idle_loop-BFTIa2QF.wav",import.meta.url).href,import.meta.url).href,"kart_cruise_mid_loop.wav":new URL(""+new URL("kart_cruise_mid_loop-E9gzRWlQ.wav",import.meta.url).href,import.meta.url).href,"kart_tire_drift_loop.wav":new URL(""+new URL("kart_tire_drift_loop-CYYrZNQh.wav",import.meta.url).href,import.meta.url).href,"curb_rumble_loop.wav":new URL(""+new URL("curb_rumble_loop-C-qxKOhJ.wav",import.meta.url).href,import.meta.url).href,"engine_sputter_burst_1.wav":new URL(""+new URL("engine_sputter_burst_1-B236LsOi.wav",import.meta.url).href,import.meta.url).href,"engine_sputter_burst_2.wav":new URL(""+new URL("engine_sputter_burst_2-CIZ4iU-x.wav",import.meta.url).href,import.meta.url).href,"engine_sputter_burst_3.wav":new URL(""+new URL("engine_sputter_burst_3-CmNjKgqQ.wav",import.meta.url).href,import.meta.url).href},Du={sputter:["engine_sputter_burst_1.wav","engine_sputter_burst_2.wav","engine_sputter_burst_3.wav"]};function u1(i){let e=0,t=0,n=0,o=0;if(i<=86)e=1;else if(i<108){const a=(i-86)/22;e=Math.cos(.5*Math.PI*a),t=Math.sin(.5*Math.PI*a)}else if(i<=146)t=1;else if(i<178){const a=(i-146)/32;t=Math.cos(.5*Math.PI*a),n=Math.sin(.5*Math.PI*a)}else if(i<=222)n=1;else if(i<252){const a=(i-222)/30;n=Math.cos(.5*Math.PI*a),o=Math.sin(.5*Math.PI*a)}else o=1;return{wIdle:e,wCruise:t,wFlatout:n,wBoost:o}}function d1(i={}){const e=i.masterVolume??.28;let t=null,n=!1,o=!1,a=null,s=null,r=null,l=null,c=null,d=null;const h={},f={accel:[],decel:[],boost:[],sputter:[]};let p=null,x=null,b=null,m=i.rumbleAmount??1,u=i.sputterAmount??1,g=0,_=0,w=0,E=0,S=0,C=performance.now(),M=0,A=0,v={};const R=new Map,F=new Map;let H=null;function z(N){if(!R.has(N)){const y=fetch(N).then(B=>{if(!B.ok)throw new Error(`HTTP ${B.status} for ${N}`);return B.arrayBuffer()});R.set(N,y)}return R.get(N)}async function Y(N,y=t){if(F.has(N))return F.get(N);const B=await z(N),k=y||t;if(!k)return null;const he=await k.decodeAudioData(B.slice(0));return F.set(N,he),he}function j(){return H||(H=(async()=>{try{const N=window.OfflineAudioContext||window.webkitOfflineAudioContext,y=N?new N(2,1,44100):null,B=[...Object.values(Lu).map(k=>Ys[k]),...Du.sputter.map(k=>Ys[k])];await Promise.all(B.map(async k=>{try{y?await Y(k,y):await z(k)}catch{}}))}catch{}})(),H)}async function Q(){return!t||a||(a=(async()=>{try{const N=["idle","cruise","drift","curb"];await Promise.all(N.map(async y=>{const B=Lu[y];try{const k=await Y(Ys[B]);if(!k)return;const he=t.createBufferSource();he.buffer=k,he.loop=!0;const ne=t.createGain();ne.gain.value=0,he.connect(ne),y==="drift"||y==="curb"?ne.connect(s):ne.connect(r),he.start(0,0),h[y]={src:he,gain:ne,buffer:k}}catch(k){console.warn(`[DeskRacerHybridAudio] Could not load loop stem ${B}:`,k)}}));for(const y of Du.sputter)try{const B=await Y(Ys[y]);B&&f.sputter.push(B)}catch{}o=!!h.cruise}catch(N){console.warn("[DeskRacerHybridAudio] Stem loading error:",N)}})()),a}function _e(){if(t)return;const N=window.AudioContext||window.webkitAudioContext;N&&(t=new N,s=t.createGain(),s.gain.value=1e-4,s.connect(t.destination),d=t.createBiquadFilter(),d.type="peaking",d.frequency.value=1550,d.Q.value=1,d.gain.value=1.6,d.connect(s),c=t.createBiquadFilter(),c.type="lowpass",c.frequency.value=6200,c.Q.value=.707,c.connect(d),l=t.createBiquadFilter(),l.type="lowshelf",l.frequency.value=98,l.gain.value=3.5,l.connect(c),r=t.createGain(),r.gain.value=1,r.connect(l),p=t.createOscillator(),p.type="sine",p.frequency.value=55,x=t.createBiquadFilter(),x.type="lowpass",x.frequency.value=95,x.Q.value=.707,b=t.createGain(),b.gain.value=0,p.connect(x),x.connect(b),b.connect(s),p.start(),Q())}function Z(N=0,y=1,B="idle"){if(!t||!n||t.state!=="running")return;const k=t.currentTime+N,he=B==="idle",ne=B==="overrun",V=.92+.16*Math.random();r&&(r.gain.setValueAtTime(1,k),r.gain.linearRampToValueAtTime(he?.55:.42,k+.008),r.gain.linearRampToValueAtTime(1,k+.036));const q=k+.012,X=ne?.05:.038,O=t.createOscillator(),P=t.createGain();O.type="sine",O.frequency.setValueAtTime((he?76:98)*V,q),O.frequency.exponentialRampToValueAtTime((he?40:45)*V,q+X);const ce=Math.min(.3,(he?.12:.18)*y);if(P.gain.setValueAtTime(1e-4,q),P.gain.linearRampToValueAtTime(ce,q+.003),P.gain.exponentialRampToValueAtTime(1e-4,q+X),O.connect(P),P.connect(s),O.start(q),O.stop(q+X+.01),(ne||he)&&f.sputter.length>0){const Me=he?f.sputter[0]:f.sputter[1+Math.floor(Math.random()*Math.max(1,f.sputter.length-1))]||f.sputter[f.sputter.length-1],ye=.16+.1*Math.random(),se=Math.max(0,Me.duration-ye-.05),I=Math.random()*se,T=t.createBufferSource();T.buffer=Me,T.playbackRate.value=.94+.12*Math.random();const $=t.createGain(),ae=Math.min(.55,(he?.22:.32)*y);$.gain.setValueAtTime(1e-4,q),$.gain.linearRampToValueAtTime(ae,q+.005),$.gain.exponentialRampToValueAtTime(1e-4,q+ye),T.connect($),$.connect(d),T.start(q,I,ye+.02)}}function W(N=1,y="auto"){if(!t||!n)return;A+=1;let B=y;B==="auto"&&(_<-.25&&g>.18?B="overrun":g<.15?B="idle":B="accel");const k=B==="overrun"?1+Math.floor(Math.random()*2):1;let he=0;for(let ne=0;ne<k;ne++)Z(he,N*(.85+.2*Math.random()),B),he+=.075+.065*Math.random()}function de(N){return n=!!N,n?(_e(),t&&t.state==="suspended"&&t.resume(),s&&t&&s.gain.setTargetAtTime(e,t.currentTime,.05)):s&&t&&s.gain.setTargetAtTime(1e-4,t.currentTime,.05),n}function oe(){return de(!n)}function ge(N){if(!n||!t||t.state!=="running")return;const y=performance.now(),B=Math.min(.1,Math.max(.004,(y-C)*.001));C=y;const k=Math.abs(N.speed||0),he=Math.min(1.45,k/.204),ne=(he-S)/B;S=he;const V=1-Math.exp(-9.5*B),q=1-Math.exp(-6.5*B),X=1-Math.exp(-6*B),O=1-Math.exp(-7.5*B);g+=(he-g)*V,_+=(ne-_)*q;const ce=(N.boostActive||0)>0||k>.245?1:0;w+=(ce-w)*X;const Me=typeof N.slope=="number"?N.slope:N.tangent&&typeof N.tangent.y=="number"?N.tangent.y:0,ye=typeof N.s=="number"?(N.s%3.12+3.12)%3.12:-1;let se=0;if(ye>=.4&&ye<=1.34){const ze=(ye-.4)/.94,Ze=Math.min(1,ze/.16),ot=Math.min(1,(1-ze)/.28),nt=.35+.65*Math.exp(-Math.pow((ze-.32)/.28,2));se=Ze*ot*nt}else if(ye>=1.46&&ye<=2.48){const ze=(ye-1.46)/1.02,Ze=Math.min(1,ze/.16),ot=Math.min(1,(1-ze)/.26),nt=.35+.65*Math.exp(-Math.pow((ze-.38)/.28,2));se=Ze*ot*nt}const I=Me>0?Me*.72:Me*.32,T=Math.max(-.12,Math.min(.36,I+se*.18));E+=(T-E)*O;const $=Math.min(1.08,g),ae=Math.min(1,Math.max(0,(-_-.06)/.55+Math.max(0,E)*.75)),Re=_>=0?Math.min(.11,_*.075):Math.max(-.14,_*.12);let we;$<=.48?we=.66+$/.48*(.74-.66):$<=.78?we=.74+($-.48)/.3*(.96-.74):we=.96+($-.78)/.24*(1.28-.96);const Ge=Math.max(.66,Math.min(1.46,we-E+.16*w+Re)),Oe=Math.round(122*Ge),je=t.currentTime,Je=.035;if(h.idle&&h.cruise){const ze=Math.min(1,Math.max(0,(k-.005)/.007)),Ze=.96*Math.cos(.5*Math.PI*ze),ot=.96*Math.sin(.5*Math.PI*ze);h.idle.gain.gain.setTargetAtTime(Ze,je,Je),h.idle.src.playbackRate.setTargetAtTime(1,je,Je),h.cruise.gain.gain.setTargetAtTime(ot,je,Je),h.cruise.src.playbackRate.setTargetAtTime(Ge,je,Je)}else h.cruise&&(h.cruise.gain.gain.setTargetAtTime(.96,je,Je),h.cruise.src.playbackRate.setTargetAtTime(Ge,je,Je));const Fe=Math.max(0,Ge-.95),Be=Math.max(0,E)*9.5,be=m*(2.8+8.5*Fe+Be+1.2*Math.max(0,Re*10));if(l&&l.gain.setTargetAtTime(Math.min(10.5,be),je,.04),d){const ze=Math.max(-1.5,(Ge<.92?2.4:2-3*Fe)-Math.max(0,E)*8);d.gain.setTargetAtTime(ze,je,.04)}const Ae=Math.max(0,.96-Ge)*9500,Pe=Math.max(2150,Math.min(6800,6400-7200*Math.max(0,Ge-1.04)-Ae-650*ae));if(c.frequency.setTargetAtTime(Pe,je,.04),p&&b){const ze=Math.min(82,Math.max(40,Oe*.5));p.frequency.setTargetAtTime(ze,je,.03);const Ze=Math.min(.2,.075*m*(.85+.35*Math.min(1,$)+Math.max(0,E)*.8));b.gain.setTargetAtTime(Ze,je,.04)}const Xe=N.isDrifting?.42*Math.min(1,g/.3):0,K=(N.curbRumble||0)>.05?Math.min(.48,N.curbRumble*.48):0;h.drift&&(h.drift.gain.gain.setTargetAtTime(Xe,je,.04),h.drift.src.playbackRate.setTargetAtTime(.92+.18*g,je,.05)),h.curb&&(h.curb.gain.gain.setTargetAtTime(K,je,.03),h.curb.src.playbackRate.setTargetAtTime(.88+.32*g,je,.04)),u>.05&&je>=M&&(ae>.22&&g>.22?(W(u*.85,"overrun"),M=je+(.6+.75*Math.random())/Math.max(.3,u)):g<.1?(W(u*.45,"idle"),M=je+(3.2+2.5*Math.random())/Math.max(.3,u)):M=je+.35);const{wIdle:ke,wCruise:He,wFlatout:Qe,wBoost:me}=u1(75+129*Math.min(1,$)+64*w),re=ae*Math.min(1,g/.25)*.85;v={stemsLoaded:o,normSpeed:Number(g.toFixed(2)),cruisePlaybackRate:Number(Ge.toFixed(2)),weights:{idle:Number(ke.toFixed(2)),cruise:Number(Math.max(He,.95).toFixed(2)),flatout:Number(Qe.toFixed(2)),decel:Number(re.toFixed(2)),f1Boost:Number(me.toFixed(2)),rumble:Number(Math.min(1,m*(.65+.25*Math.min(1,$))).toFixed(2)),drift:Number(Xe.toFixed(2)),curb:Number(K.toFixed(2))},filterCutoffHz:Math.round(Pe),harmonicBridgeHz:Oe,sputterCount:A}}function ie(){if(!n||!t||t.state!=="running")return;const N=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((B,k)=>{const he=t.createOscillator(),ne=t.createGain();he.type="sine",he.frequency.value=B,ne.gain.setValueAtTime(.001,N+k*.07),ne.gain.exponentialRampToValueAtTime(.12,N+k*.07+.02),ne.gain.exponentialRampToValueAtTime(1e-4,N+k*.07+.35),he.connect(ne),ne.connect(s),he.start(N+k*.07),he.stop(N+k*.07+.38)})}function Ce(N=!1){if(!n||(_e(),!t))return;t.state==="suspended"&&t.resume();const y=t.currentTime,B=N?1760:880,k=N?.42:.2,he=N?1.1:.88;r&&(r.gain.setValueAtTime(.72,y),r.gain.linearRampToValueAtTime(1,y+k));const ne=t.createBiquadFilter();ne.type="lowpass",ne.frequency.value=N?5200:3e3,ne.Q.value=.707,ne.connect(s);const V=t.createGain();V.gain.setValueAtTime(1e-4,y),V.gain.linearRampToValueAtTime(he,y+.005),V.gain.setValueAtTime(he*.92,y+k*.65),V.gain.exponentialRampToValueAtTime(1e-4,y+k),V.connect(ne);const q=t.createOscillator();q.type="sine",q.frequency.setValueAtTime(B,y),q.connect(V);const X=t.createOscillator();X.type="triangle",X.frequency.setValueAtTime(B,y);const O=t.createGain();O.gain.value=.32,X.connect(O),O.connect(V),q.start(y),X.start(y),q.stop(y+k+.02),X.stop(y+k+.02)}function J(N=1){if(!n||!t||t.state!=="running")return;const y=t.currentTime,B=Math.max(.2,Math.min(1.35,Number(N)||1)),k=.96+.08*Math.random();r&&(r.gain.cancelScheduledValues(y),r.gain.setValueAtTime(1,y),r.gain.linearRampToValueAtTime(Math.max(.38,1-.45*B),y+.01),r.gain.linearRampToValueAtTime(1,y+.085));const he=.09,ne=t.createGain(),V=Math.min(.42,.28*B);ne.gain.setValueAtTime(1e-4,y),ne.gain.linearRampToValueAtTime(V,y+.004),ne.gain.exponentialRampToValueAtTime(1e-4,y+he),ne.connect(s);const q=t.createOscillator();q.type="sine",q.frequency.setValueAtTime(110*k,y),q.frequency.exponentialRampToValueAtTime(42*k,y+he),q.connect(ne);const X=t.createOscillator();X.type="triangle",X.frequency.setValueAtTime(110*k,y),X.frequency.exponentialRampToValueAtTime(42*k,y+he);const O=t.createGain();O.gain.value=.35,X.connect(O),O.connect(ne),q.start(y),X.start(y),q.stop(y+he+.015),X.stop(y+he+.015);const P=.11,ce=t.createBiquadFilter();ce.type="bandpass",ce.frequency.setValueAtTime(1280*k,y),ce.Q.setValueAtTime(2.2,y),ce.connect(s),[{freq:980*k,endFreq:860*k,type:"triangle",gain:.16*B},{freq:1640*k,endFreq:1420*k,type:"sine",gain:.11*B}].forEach(ye=>{const se=t.createOscillator(),I=t.createGain();se.type=ye.type,se.frequency.setValueAtTime(ye.freq,y),se.frequency.exponentialRampToValueAtTime(ye.endFreq,y+P);const T=Math.min(.24,ye.gain);I.gain.setValueAtTime(1e-4,y),I.gain.linearRampToValueAtTime(T,y+.003),I.gain.exponentialRampToValueAtTime(1e-4,y+P),se.connect(I),I.connect(ce),se.start(y),se.stop(y+P+.015)})}function le(){if(!n||!t||t.state!=="running")return;const N=t.currentTime;r&&(r.gain.cancelScheduledValues(N),r.gain.setValueAtTime(.68,N),r.gain.linearRampToValueAtTime(1,N+1.15));const y=t.createBiquadFilter();y.type="lowpass",y.frequency.setValueAtTime(3600,N),y.frequency.linearRampToValueAtTime(5400,N+.34),y.frequency.exponentialRampToValueAtTime(2400,N+1.35),y.Q.value=.707,y.connect(s);const B=[{freq:523.25,start:0,dur:.32,gain:.14},{freq:659.25,start:.07,dur:.34,gain:.14},{freq:783.99,start:.14,dur:.36,gain:.15},{freq:987.77,start:.21,dur:.42,gain:.15},{freq:1046.5,start:.29,dur:.92,gain:.19}],k=[{freq:523.25,start:.29,dur:.88,gain:.11},{freq:659.25,start:.29,dur:.88,gain:.1},{freq:783.99,start:.29,dur:.9,gain:.11},{freq:987.77,start:.29,dur:.86,gain:.09},{freq:1174.66,start:.31,dur:.84,gain:.08}];[...B,...k].forEach(({freq:he,start:ne,dur:V,gain:q})=>{const X=N+ne,O=t.createGain();O.gain.setValueAtTime(1e-4,X),O.gain.linearRampToValueAtTime(q,X+.014),O.gain.setValueAtTime(q*.85,X+V*.35),O.gain.exponentialRampToValueAtTime(1e-4,X+V),O.connect(y);const P=t.createOscillator();P.type="sine",P.frequency.setValueAtTime(he,X),P.connect(O);const ce=t.createOscillator();ce.type="triangle",ce.frequency.setValueAtTime(he,X);const Me=t.createGain();Me.gain.value=.38,ce.connect(Me),Me.connect(O),P.start(X),ce.start(X),P.stop(X+V+.02),ce.stop(X+V+.02)})}return{preload:j,toggle:oe,setEnabled:de,update:ge,playLapChime:ie,playRaceFinishFanfare:le,playRailImpact:J,playF1CountdownBeep:Ce,triggerSputterBurst:W,setRumbleAmount:N=>{m=Math.max(0,Math.min(2.5,Number(N)))},setSputterAmount:N=>{u=Math.max(0,Math.min(2.5,Number(N)))},isEnabled:()=>n,getDiagnostics:()=>v}}const f1=d1;function Ea(i,e,t=0,n=0,o=0,a=0,s=0,r=0){const l=new L(i,e);return l.position.set(t,n,o),l.rotation.set(a,s,r),l.castShadow=!0,l.receiveShadow=!0,l}function _t(i,e,t,n,o,a,s,r=0,l=0,c=0){return Ea(new Le(i,e,t),n,o,a,s,r,l,c)}function ho(i,e,t,n,o,a,s,r=0,l=0,c=0,d=14){return Ea(new st(i,e,t,d),n,o,a,s,r,l,c)}function $s(i,e,t,n,o,a=1,s=1,r=1){const l=Ea(new At(i,18,14),e,t,n,o);return l.scale.set(a,s,r),l}function yi(i,e,t,n){const o=new D(...i),a=new D(...e),s=o.distanceTo(a),r=Ea(new st(t,t,s,10),n);return r.position.copy(o).add(a).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new D(0,1,0),a.clone().sub(o).normalize()),r}function ra(i,e,t,n=45e-5){const o=new Aa;i.forEach(([s,r],l)=>l===0?o.moveTo(s,r):o.lineTo(s,r)),o.closePath();const a=new Er(o,{depth:Math.max(2e-4,e-n*2),bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:8});return a.rotateY(-Math.PI/2),a.translate((e-n*2)/2,0,0),a.computeVertexNormals(),Ea(a,t)}function fo(i,e,t,n,o,a=55e-5){const s=new et;return s.add(_t(a,e,a,i,0,e/2,0)),s.add(_t(e*.62,a,a,i,0,e*.68,0)),s.position.set(t,n,o),s}function Uu(i,e,t,n,o){const a=new et;a.add(ho(12e-5,12e-5,.0042,o,0,.0021,0));for(let s=0;s<2;s++){const r=Ea(new Gt(.0011,.0016),new Ee({color:i[s],side:Jt,roughness:.6}),0,.0034,-55e-5-s*.0011,0,Math.PI/2,0);r.castShadow=!1,a.add(r)}return a.position.set(e,t,n),a}const Nu={kart:{dosRuedas:!1,ruedas:[{x:-.0056,z:.0054,r:.00185,w:.0017,delantera:!0},{x:.0056,z:.0054,r:.00185,w:.0017,delantera:!0},{x:-.0059,z:-.0054,r:.00215,w:.0022},{x:.0059,z:-.0054,r:.00215,w:.0022}],escapes:[{x:-.00108,y:.00215,z:-.0076},{x:.00108,y:.00215,z:-.0076}],lucesTraseras:[[-.0032,.00275,-.00906],[.0032,.00275,-.00906]],piloto:{y:.0048,z:-8e-4,inclinacion:.14,cabeza:[0,.0078,-4e-4]},volante:{tipo:"volante",y:.0054,z:.0028},sombra:[1,1],construir:null},bolido:{dosRuedas:!1,ruedas:[{x:-.006,z:.0064,r:.0019,w:.0018,delantera:!0},{x:.006,z:.0064,r:.0019,w:.0018,delantera:!0},{x:-.0061,z:-.006,r:.0023,w:.0026},{x:.0061,z:-.006,r:.0023,w:.0026}],escapes:[{x:-6e-4,y:.0034,z:-.0098},{x:6e-4,y:.0034,z:-.0098}],lucesTraseras:[[0,.0026,-.0104]],piloto:{y:.0038,z:-.0012,inclinacion:-.35,cabeza:[0,.0058,-4e-4],escala:.92},volante:{tipo:"volante",y:.0046,z:.0018},sombra:[1,1.18],construir(i,e){i.add(ra([[.0108,.0016],[.0104,.0024],[.004,.004],[.0016,.0044],[-2e-4,.004],[-.003,.0064],[-.006,.0058],[-.0098,.0036],[-.01,.0016]],.0042,e.principal));for(const t of[-.0034,.0034])i.add(_t(.0024,.0022,.0078,e.principal,t,.0026,-.0018)),i.add(_t(6e-4,.0016,4e-4,e.carbono,t,.003,.0022));i.add(_t(.0012,2e-4,.0064,e.secundario,0,.004,.0066,-.26)),i.add(_t(.0136,45e-5,.0024,e.carbono,0,.0011,.0098));for(const t of[-.0068,.0068])i.add(_t(3e-4,.0018,.0026,e.principal,t,.0016,.0098));i.add(_t(.0104,6e-4,.0026,e.carbono,0,.0074,-.0094,-.15)),i.add(_t(.0104,4e-4,.0016,e.secundario,0,.008,-.009,-.15));for(const t of[-.0052,.0052])i.add(_t(3e-4,.004,.003,e.principal,t,.006,-.0094));i.add(_t(.002,.0016,.0022,e.carbono,0,.0062,-.003)),i.add(fo(e.oro,.0018,0,.0036,.008,35e-5))}},furgoneta:{dosRuedas:!1,ruedas:[{x:-.0051,z:.0058,r:.0019,w:.0016,delantera:!0},{x:.0051,z:.0058,r:.0019,w:.0016,delantera:!0},{x:-.0051,z:-.006,r:.0019,w:.0016},{x:.0051,z:-.006,r:.0019,w:.0016}],escapes:[{x:.003,y:.002,z:-.0098}],lucesTraseras:[[-.004,.004,-.0099],[.004,.004,-.0099]],piloto:{y:.0062,z:.004,inclinacion:.05,cabeza:[.0018,.009,.0046],escala:.85,x:.0018},volante:{tipo:"volante",y:.0072,z:.007,x:.0018},sombra:[1,1.08],construir(i,e){i.add(ra([[.0096,.0016],[.0099,.006],[-.0096,.006],[-.0096,.0016]],.0106,e.principal)),i.add(ra([[.0099,.006],[.0088,.0098],[.0074,.011],[-.0086,.011],[-.0096,.01],[-.0096,.006]],.0104,e.secundario)),i.add(_t(.006,2e-4,2e-4,e.secundario,0,.0052,.0101,0,0,0)),i.add(fo(e.oro,.0022,0,.004,.0102,45e-5)),i.add(_t(.0088,.0028,2e-4,e.cristal,0,.0083,.0093,-.32));for(const t of[-.0053,.0053])for(const n of[.005,.001,-.003,-.0068])i.add(_t(2e-4,.0024,.003,e.cristal,t,.0084,n));for(const t of[-.0054,.0054])for(const n of[.0058,-.006])i.add(_t(4e-4,.0012,.0046,e.carbono,t,.0026,n));i.add(_t(.0108,8e-4,6e-4,e.cromo,0,.002,.01)),i.add(_t(.0108,8e-4,6e-4,e.cromo,0,.002,-.0099));for(const t of[-.0034,.0034])i.add(ho(9e-4,9e-4,4e-4,e.faro,t,.0044,.0101,Math.PI/2,0,0));i.add(_t(.0086,3e-4,.012,e.cromo,0,.0114,-8e-4)),i.add(_t(.005,.002,.004,e.maleta,-.0012,.0125,-.004)),i.add(_t(.0036,.0016,.003,e.maleta2,.0018,.0123,6e-4)),i.add(fo(e.madera,.004,.0025,.0115,-.0072,5e-4))}},papamovil:{dosRuedas:!1,ruedas:[{x:-.0053,z:.0064,r:.002,w:.0017,delantera:!0},{x:.0053,z:.0064,r:.002,w:.0017,delantera:!0},{x:-.0053,z:-.0064,r:.002,w:.0017},{x:.0053,z:-.0064,r:.002,w:.0017}],escapes:[{x:-.003,y:.002,z:-.0102},{x:.003,y:.002,z:-.0102}],lucesTraseras:[[-.0042,.0046,-.0103],[.0042,.0046,-.0103]],piloto:{y:.0064,z:.0036,inclinacion:.05,cabeza:[0,.009,.004],escala:.82},volante:{tipo:"volante",y:.0072,z:.0058},sombra:[1,1.12],construir(i,e){i.add(ra([[.0104,.0016],[.0106,.0044],[.0084,.0058],[.006,.006],[-.0102,.006],[-.0102,.0016]],.011,e.blanco)),i.add(ra([[.006,.006],[.005,.0084],[.001,.0086],[8e-4,.006]],.01,e.blanco)),i.add(_t(.009,.002,2e-4,e.cristal,0,.0072,.0057,-.45));for(const s of[-.0056,.0056])i.add(_t(2e-4,.001,.02,e.principal,s,.004,0)),i.add(_t(2e-4,3e-4,.02,e.oro,s,.0049,0));const t=.006,n=.0068,o=new et,a=_t(.0098,n,.0094,e.vitrina,0,t+n/2,-.005);a.castShadow=!1,o.add(a);for(const s of[-.0049,.0049]){for(const r of[-3e-4,-.0097])o.add(_t(6e-4,n,6e-4,e.blanco,s,t+n/2,r));o.add(_t(6e-4,6e-4,.0094,e.blanco,s,t+n,-.005))}for(const s of[-3e-4,-.0097])o.add(_t(.0098,6e-4,6e-4,e.blanco,0,t+n,s));o.add(_t(.01,5e-4,.0096,e.blanco,0,t+n+3e-4,-.005)),i.add(o),i.add(_t(.0036,.001,.003,e.rojo,0,.0068,-.0058)),i.add(_t(.0036,.0036,6e-4,e.oro,0,.008,-.0072)),i.add(fo(e.oro,.0034,0,t+n+5e-4,-.0018,5e-4)),i.add(Uu([16765498,16250866],.005,.0058,.0094,e.cromo)),i.add(Uu([16765498,16250866],-.005,.0058,.0094,e.cromo)),i.add(_t(.0112,8e-4,6e-4,e.cromo,0,.0021,.0105));for(const s of[-.0038,.0038])i.add(_t(.0018,.001,3e-4,e.faro,s,.004,.0107))}},moto:{dosRuedas:!0,ruedas:[{x:0,z:.0068,r:.0022,w:.0011,delantera:!0},{x:0,z:-.0062,r:.0022,w:.0014}],escapes:[{x:-.001,y:.0052,z:-.0082,rot:.25}],lucesTraseras:[[0,.0066,-.0084]],piloto:{y:.0076,z:-8e-4,inclinacion:.95,cabeza:[0,.0094,.0026],escala:.9,moto:!0},volante:{tipo:"manillar",y:.008,z:.005,ancho:.0058},sombra:[.5,1.12],construir(i,e){i.add(ra([[.0088,.0046],[.0064,.0074],[.003,.0074],[0,.0066],[-.003,.0062],[-.008,.0074],[-.0084,.0064],[-.004,.004],[-.001,.0024],[.005,.0024]],.0034,e.principal,6e-4)),i.add(_t(.0038,4e-4,.006,e.secundario,0,.005,.0045,.4)),i.add(_t(.0039,3e-4,.004,e.oro,0,.004,.002,.15)),i.add(_t(.003,2e-4,.003,e.cristal,0,.008,.006,-.9)),i.add(_t(.0026,6e-4,.0044,e.carbono,0,.0066,-.003,-.06));for(const t of[-.001,.001])i.add(yi([t,.0022,.0068],[t,.0074,.005],28e-5,e.cromo));for(const t of[-.001,.001])i.add(yi([t,.0022,-.0062],[t,.003,-8e-4],32e-5,e.carbono));i.add(_t(.0026,.0022,.0034,e.cromo,0,.0032,.0012)),i.add(_t(.0016,3e-4,.0034,e.principal,0,.0047,.007,.1)),i.add(ho(9e-4,9e-4,4e-4,e.faro,0,.006,.0089,Math.PI/2-.5,0,0)),i.add(fo(e.oro,.0016,.0018,.0042,.005,3e-4)),i.add(fo(e.oro,.0016,-.0018,.0042,.005,3e-4))}},scooter:{dosRuedas:!0,ruedas:[{x:0,z:.006,r:.0016,w:.0012,delantera:!0},{x:0,z:-.0056,r:.0016,w:.0013}],escapes:[{x:-.0016,y:.0018,z:-.0076}],lucesTraseras:[[0,.0058,-.008]],piloto:{y:.0076,z:-.0024,inclinacion:.12,cabeza:[0,.0108,-.0014],escala:.92,moto:!0},volante:{tipo:"manillar",y:.01,z:.0052,ancho:.006},sombra:[.55,.95],construir(i,e){i.add($s(.004,e.principal,0,.0044,-.0042,.75,.62,1.25)),i.add(_t(.0034,6e-4,.006,e.carbono,0,.0022,.001)),i.add(_t(.0044,.006,6e-4,e.principal,0,.0054,.005,-.18)),i.add(_t(.0046,4e-4,8e-4,e.secundario,0,.0084,.0045,-.18)),i.add(yi([0,.003,.0062],[0,.0098,.005],45e-5,e.cromo)),i.add($s(.0018,e.principal,0,.003,.0062,.8,.5,1.2)),i.add(ho(.0012,.0012,6e-4,e.faro,0,.0098,.006,Math.PI/2,0,0)),i.add(_t(.0024,6e-4,.005,e.carbono,0,.0071,-.003)),i.add(_t(.0028,.002,.0026,e.secundario,0,.0076,-.0074)),i.add(fo(e.oro,.0014,0,.007,-.0088,3e-4)),i.add(ho(.0012,.0012,8e-4,e.carbono,.0023,.004,-.004,0,0,Math.PI/2))}},chopper:{dosRuedas:!0,ruedas:[{x:0,z:.01,r:.0021,w:8e-4,delantera:!0},{x:0,z:-.0064,r:.0025,w:.002}],escapes:[{x:-.0018,y:.0026,z:-.009},{x:.0018,y:.0026,z:-.009}],lucesTraseras:[[0,.0052,-.009]],piloto:{y:.0066,z:-.0024,inclinacion:-.28,cabeza:[0,.0096,-.0034],escala:.92,moto:!0},volante:{tipo:"manillar",y:.0118,z:.0052,ancho:.0068},sombra:[.55,1.3],construir(i,e){i.add($s(.0024,e.principal,0,.0064,.002,.8,.62,1.5)),i.add(_t(2e-4,.0012,.003,e.oro,.0019,.0064,.002)),i.add(_t(2e-4,.0012,.003,e.oro,-.0019,.0064,.002)),i.add(yi([0,.0068,.0048],[0,.0058,-.006],35e-5,e.cromo)),i.add(yi([0,.0068,.0048],[0,.0024,.001],35e-5,e.cromo)),i.add(yi([0,.0024,.001],[0,.0026,-.0064],35e-5,e.cromo));for(const t of[-9e-4,9e-4])i.add(yi([t,.0021,.01],[t,.0084,.005],28e-5,e.cromo));i.add(ho(8e-4,9e-4,.003,e.cromo,0,.0038,.0024,.45,0,0)),i.add(ho(8e-4,9e-4,.003,e.cromo,0,.0038,-2e-4,-.45,0,0)),i.add(_t(.0022,.0016,.0034,e.carbono,0,.0024,.0012)),i.add(_t(.003,6e-4,.004,e.cuero,0,.0052,-.0026)),i.add(_t(.0022,.004,4e-4,e.cromo,0,.007,-.006,-.2)),i.add(fo(e.oro,.0026,0,.009,-.0063,35e-5)),i.add($s(.0028,e.principal,0,.0034,-.0066,.5,.55,1.05));for(const t of[-.0018,.0018])i.add(yi([t,.0026,.001],[t,.0026,-.0088],42e-5,e.cromo));i.add(ho(.001,.001,6e-4,e.faro,0,.008,.0062,Math.PI/2,0,0))}}};function h1(i,e){const t=new et;t.position.set(0,i.y,i.z);const n=i.ancho??.006;return t.add(yi([-n/2,6e-4,-8e-4],[n/2,6e-4,-8e-4],26e-5,e.cromo)),t.add(yi([-n/2,6e-4,-8e-4],[-n/2-2e-4,.001,-.0014],34e-5,e.carbono)),t.add(yi([n/2,6e-4,-8e-4],[n/2+2e-4,.001,-.0014],34e-5,e.carbono)),t}function d0(i={}){const e=Nu[i.tipo]?i.tipo:"kart",t=Nu[e],n=i.color??16722718,o=i.colorSecundario??16251388,a=i.colorLlanta??16759620,s=i.colorCasco??16777215,r=i.colorVisera??1993727,l=i.colorTraje??15791354,c=i.numero??"1",d=i.conLuces!==!1,h=t.dosRuedas?6e-4:.0044,f=new et;f.name=`Vehiculo_${e}_${c}`;const p=new et;p.name=`Chasis_${e}`,f.add(p);const x=new Ee({color:n,roughness:.22,metalness:.35}),b=new Ee({color:o,roughness:.25,metalness:.1}),m=new Ee({color:1579810,roughness:.42,metalness:.45}),u=new Ee({color:14476528,roughness:.15,metalness:.92}),g=new Ee({color:a,roughness:.25,metalness:.85}),_=new Ee({color:1184793,roughness:.82,metalness:.05}),w={principal:x,secundario:b,carbono:m,cromo:u,oro:new Ee({color:15909450,roughness:.22,metalness:.9,emissive:3810304,emissiveIntensity:.4}),blanco:new Ee({color:16250609,roughness:.18,metalness:.25}),rojo:new Ee({color:10361634,roughness:.6}),cristal:new Ee({color:857638,roughness:.06,metalness:.6}),vitrina:new Ee({color:13625599,roughness:.04,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),faro:new Ee({color:16774364,emissive:16773583,emissiveIntensity:1.6,roughness:.2}),maleta:new Ee({color:9067051,roughness:.7}),maleta2:new Ee({color:3955322,roughness:.7}),madera:new Ee({color:8014629,roughness:.8}),cuero:new Ee({color:3810326,roughness:.75})},E=document.createElement("canvas");E.width=256,E.height=256;const S=E.getContext("2d");S.clearRect(0,0,256,256),S.save(),S.translate(128,128),S.scale(.86,1.08);const C=S.createRadialGradient(0,0,14,0,0,112);C.addColorStop(0,"rgba(2, 2, 5, 0.92)"),C.addColorStop(.48,"rgba(3, 3, 7, 0.76)"),C.addColorStop(.76,"rgba(5, 5, 10, 0.34)"),C.addColorStop(1,"rgba(6, 6, 12, 0.0)"),S.fillStyle=C,S.beginPath(),S.arc(0,0,112,0,Math.PI*2),S.fill(),S.restore(),S.save(),S.translate(128,128),S.scale(.58,.92);const M=S.createRadialGradient(0,0,10,0,0,96);M.addColorStop(0,"rgba(1, 1, 3, 0.96)"),M.addColorStop(.62,"rgba(2, 2, 5, 0.88)"),M.addColorStop(.88,"rgba(4, 4, 8, 0.38)"),M.addColorStop(1,"rgba(4, 4, 8, 0.0)"),S.fillStyle=M,S.beginPath(),S.arc(0,0,96,0,Math.PI*2),S.fill(),S.restore();for(const[me,re]of[[-.28,-.22],[.28,-.22],[-.28,.23],[.28,.23]]){const ze=128+me*256,Ze=128+re*256;S.save(),S.translate(ze,Ze),S.scale(.82,1.28);const ot=S.createRadialGradient(0,0,4,0,0,34);ot.addColorStop(0,"rgba(1, 1, 3, 0.95)"),ot.addColorStop(.55,"rgba(2, 2, 5, 0.72)"),ot.addColorStop(1,"rgba(4, 4, 8, 0.0)"),S.fillStyle=ot,S.beginPath(),S.arc(0,0,34,0,Math.PI*2),S.fill(),S.restore()}const A=new Ut(E),v=new L(new Gt(.0175*t.sombra[0],.024*t.sombra[1]),new Nt({map:A,transparent:!0,opacity:.95,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}));if(v.rotation.x=-Math.PI/2,v.position.set(0,72e-5,-2e-4),v.castShadow=!1,v.receiveShadow=!1,f.add(v),e==="kart"){const me=new L(new Le(.0082,9e-4,.0155),m);me.position.set(0,.0014,0),me.castShadow=!1,p.add(me);const re=new L(new Le(.0086,.0021,.0044),x);re.position.set(0,.0023,.0068),re.rotation.x=.22,re.castShadow=!1,p.add(re);const ze=document.createElement("canvas");ze.width=128,ze.height=64;const Ze=ze.getContext("2d");Ze.fillStyle=typeof o=="number"?`#${o.toString(16).padStart(6,"0")}`:"#ffffff",Ze.fillRect(0,0,128,64),Ze.fillStyle="#0a0d14",Ze.font="bold 44px sans-serif",Ze.textAlign="center",Ze.textBaseline="middle",Ze.fillText(String(c),64,32);const ot=new Ut(ze),nt=new Ee({map:ot,roughness:.25,metalness:.1}),bt=new L(new Le(.0048,4e-4,.0028),nt);bt.position.set(0,.0033,.0066),bt.rotation.x=.22,p.add(bt);for(const hn of[-.0044,.0044]){const on=new L(new Le(.0024,.0024,.0076),x);on.position.set(hn,.0024,-4e-4),on.castShadow=!1,p.add(on)}const Ot=new L(new Le(.0034,.0036,.0042),u);Ot.position.set(.0022,.0036,-.0048),Ot.castShadow=!1,p.add(Ot);const nn=new L(new Le(.0096,7e-4,.0024),m);nn.position.set(0,.0068,-.0076),nn.rotation.x=-.18,nn.castShadow=!1,p.add(nn)}else t.construir(p,w);function R(me){return new Qt({uniforms:{uTime:{value:0},uIntensity:{value:1},uPhase:{value:me}},transparent:!0,depthWrite:!1,blending:Hn,side:Jt,toneMapped:!1,vertexShader:`
        uniform float uTime;
        uniform float uPhase;
        varying float vPlumeU;
        varying float vRadialR;
        varying vec3 vLocalPos;
        varying vec3 vViewNormal;
        varying vec3 vViewPos;
        void main() {
          // Local coordinates: nozzle exit is at z = 0, jet extends backward along -Z to z = -0.0052
          float u = clamp(-position.z / 0.0052, 0.0, 1.0);
          vPlumeU = u;
          vRadialR = clamp(length(position.xy) / 0.00078, 0.0, 1.0);
          vLocalPos = position;

          // High-frequency turbulent jet flutter along the tail (zero displacement at nozzle u=0)
          float flutter = u * u * 0.00022;
          vec3 displaced = position;
          displaced.x += sin(u * 18.0 - uTime * 48.0 + uPhase) * flutter;
          displaced.y += cos(u * 15.0 - uTime * 42.0 + uPhase * 1.7) * flutter * 0.85;

          vec4 mvPos = modelViewMatrix * vec4(displaced, 1.0);
          vViewPos = -mvPos.xyz;
          vViewNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uIntensity;
        uniform float uPhase;
        varying float vPlumeU;
        varying float vRadialR;
        varying vec3 vLocalPos;
        varying vec3 vViewNormal;
        varying vec3 vViewPos;
        void main() {
          float u = clamp(vPlumeU, 0.0, 1.0);

          // Coaxial-safe radial core falloff so the flame stays vivid from 1P Chase Cam directly behind the car
          // while still having a soft Gaussian outer edge with zero hard cone/egg silhouette
          vec3 viewDir = normalize(vViewPos);
          float ndotv = abs(dot(normalize(vViewNormal), viewDir));
          float viewWeight = 0.58 + 0.42 * sqrt(clamp(ndotv, 0.0, 1.0));
          float radialCore = exp(-vRadialR * vRadialR * (2.1 + u * 2.4));
          float radialMask = radialCore * viewWeight;

          // High-frequency advected combustion turbulence & Mach shock diamonds
          float angle = atan(vLocalPos.y, vLocalPos.x);
          float turb1 = sin(u * 22.0 - uTime * 56.0 + angle * 2.0 + uPhase);
          float turb2 = cos(u * 35.0 - uTime * 74.0 - angle * 3.0 + uPhase * 1.3);
          float turbulence = 0.82 + 0.18 * (turb1 * 0.6 + turb2 * 0.4);

          // Crisp internal Mach shock diamond nodes near the nozzle & mid-plume
          float machWave = max(0.0, cos(u * 15.5 - uTime * 34.0 + uPhase * 0.5));
          float machDiamond = pow(machWave, 3.2) * smoothstep(0.85, 0.04, u) * exp(-vRadialR * vRadialR * 3.6);

          // Longitudinal envelope: bright inside the nozzle bore (u=0) with shredded flame tongues at the tip
          float tipCut = clamp(1.0 - u + (turb1 * 0.11 + turb2 * 0.07) * u, 0.0, 1.0);
          float axialEnv = (0.35 + 0.65 * smoothstep(0.0, 0.08, u)) * pow(tipCut, 1.45);

          // Physically inspired motorsport exhaust temperature gradient:
          // 1. Nozzle ring (u = 0..0.22): hot butane-blue plasma + white-yellow Mach core
          // 2. Mid-plume (u = 0.18..0.68): luminous golden-amber afterburner fire
          // 3. Outer sheath & tail (u = 0.48..1.0): rich fiery orange-red
          vec3 butaneBlue = vec3(0.32, 0.76, 1.35);
          vec3 whiteHot = vec3(1.55, 1.38, 0.96);
          vec3 goldenAmber = vec3(1.45, 0.68, 0.12);
          vec3 fieryCrimson = vec3(1.25, 0.22, 0.02);

          vec3 baseCol = mix(butaneBlue, goldenAmber, smoothstep(0.04, 0.34, u));
          baseCol = mix(baseCol, fieryCrimson, smoothstep(0.38, 0.86, u));
          float coreHotness = clamp(radialCore * (1.0 - u * 0.52) + machDiamond * 0.90, 0.0, 1.0);
          vec3 flameRgb = mix(baseCol, whiteHot, pow(coreHotness, 1.35));

          float alpha = clamp(axialEnv * radialMask * turbulence * uIntensity * 1.45, 0.0, 1.0);
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(flameRgb * alpha * 1.35, alpha);
        }
      `})}function F(){const me=new st(72e-5,22e-5,.0052,16,8,!0);me.rotateX(Math.PI/2),me.translate(0,0,-.0026);const re=new st(46e-5,12e-5,.004,14,6,!0);re.rotateX(Math.PI/2),re.translate(0,0,-.002);const ze=new Gt(.00145,.005,1,6);ze.rotateX(Math.PI/2),ze.rotateZ(.66),ze.translate(0,0,-.0025);const Ze=new Gt(.00145,.005,1,6);Ze.rotateX(Math.PI/2),Ze.rotateZ(-.66),Ze.translate(0,0,-.0025);const ot=new no(74e-5,16);return ot.rotateY(Math.PI),ot.translate(0,0,-25e-5),{outerCone:me,innerCore:re,finA:ze,finB:Ze,nozzleDisc:ot}}const H=F(),z=[];t.escapes.forEach((me,re)=>{const ze=new L(new st(56e-5,62e-5,.0032,16),u);ze.rotation.x=Math.PI/2+.12+(me.rot??0),ze.position.set(me.x,me.y,me.z),p.add(ze);const Ze=new et;Ze.position.set(me.x,me.y-7e-5,me.z-.00135),Ze.rotation.x=.18+(me.rot??0),Ze.visible=!1;const ot=R(re*2.15);for(const nt of[H.outerCone,H.innerCore,H.finA,H.finB,H.nozzleDisc]){const bt=new L(nt,ot);bt.frustumCulled=!1,Ze.add(bt)}Ze.userData.jetMat=ot,Ze.userData.pipeIndex=re,p.add(Ze),z.push(Ze)});const Y=document.createElement("canvas");Y.width=128,Y.height=128;const j=Y.getContext("2d"),Q=j.createRadialGradient(64,64,4,64,64,62);Q.addColorStop(0,"rgba(255, 10, 34, 0.88)"),Q.addColorStop(.32,"rgba(255, 0, 24, 0.56)"),Q.addColorStop(.68,"rgba(220, 0, 18, 0.20)"),Q.addColorStop(1,"rgba(180, 0, 12, 0.0)"),j.fillStyle=Q,j.fillRect(0,0,128,128);const _e=new Ut(Y),Z=new Gt(.0038,.0024),W=new Nt({map:_e,transparent:!0,opacity:.9,blending:Hn,depthWrite:!1,toneMapped:!1,side:Jt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});for(const[me,re,ze]of t.lucesTraseras){const Ze=new L(Z,W);Ze.position.set(me,re,ze),Ze.rotation.y=Math.PI,Ze.castShadow=!1,Ze.receiveShadow=!1,p.add(Ze)}const de=new Gn(16738328,0,.045,0);de.position.set(0,.0028,-.009),d&&p.add(de);let oe=.12,ge=0;function ie(me,re=!0){oe=Math.max(0,Number(me)||0),re&&(ge=.85)}const Ce=t.piloto,J=Ce.escala??1;if(e==="kart"){const me=new L(new Le(.0042,.0044,.0038),m);me.position.set(0,.0036,-.0015),me.rotation.x=-.22,p.add(me)}const le=new Ee({color:l,roughness:.35,metalness:.08}),N=new L(new Le(.0036,.0038,.0028),le);if(N.position.set(Ce.x??0,Ce.y,Ce.z),N.rotation.x=Ce.inclinacion,N.scale.setScalar(J),p.add(N),Ce.moto)for(const me of[-.0016,.0016]){const re=new L(new Le(.0011,.0011,.0036),le);re.position.set(me*J,Ce.y-.0018,Ce.z+.0014),re.rotation.x=-.35,p.add(re)}const y=new et;y.position.set(...Ce.cabeza),y.scale.setScalar(J);const B=new Ee({color:15251604,roughness:.6});if(i.tocado==="velo"){const me=new L(new At(.0017,16,12),B);me.position.z=3e-4,y.add(me);const re=new L(new At(.0021,18,14,0,Math.PI*2,0,Math.PI*.62),new Ee({color:16184558,roughness:.7}));re.rotation.x=-.5,y.add(re);const ze=new L(new At(.0024,18,14,Math.PI*.2,Math.PI*1.6,0,Math.PI*.72),new Ee({color:s,roughness:.8,side:Jt}));ze.rotation.y=Math.PI,ze.position.set(0,1e-4,-3e-4),y.add(ze)}else{const me=new L(new At(.0022,20,18),new Ee({color:s,roughness:.14,metalness:.25}));me.scale.set(.95,1,1.08),y.add(me);const re=new L(new At(.00225,16,12,-.9,1.8,1.05,.75),new Ee({color:r,emissive:new Ve(r),emissiveIntensity:.65,roughness:.08,metalness:.9}));if(re.rotation.y=Math.PI/2,y.add(re),i.tocado==="clerical"){const ze=new L(new Un(.0013,35e-5,8,20),new Ee({color:16777215,roughness:.5}));ze.rotation.x=Math.PI/2,ze.position.y=-.0021,y.add(ze)}}const k=new L(new Un(.0016,26e-5,8,28),new Nt({color:new Ve(1.6,1.25,.45),toneMapped:!1}));k.rotation.x=Math.PI/2,k.position.y=.0032,k.castShadow=!1,y.add(k),p.add(y);let he=null,ne=null;t.volante.tipo==="volante"?(he=new L(new Un(.0014,32e-5,8,18),m),he.position.set(t.volante.x??0,t.volante.y,t.volante.z),he.rotation.x=-.55,p.add(he)):(ne=h1(t.volante,w),p.add(ne));const V=[],q=[];function X(me,re){const ze=new et,Ze=new L(new st(me,me,re,20),_);Ze.rotation.z=Math.PI/2,Ze.castShadow=!0,ze.add(Ze);const ot=new L(new st(me*.62,me*.62,re*1.04,14),g);return ot.rotation.z=Math.PI/2,ze.add(ot),ze}for(const me of t.ruedas){const re=X(me.r,me.w);if(me.delantera){const ze=new et;ze.position.set(me.x,me.r,me.z),ze.add(re),p.add(ze),V.push(ze)}else re.position.set(me.x,me.r,me.z),p.add(re);q.push(re)}const O=new Kt;if(O.position.set(0,-.008,.072),p.add(O),d){const me=new wa(16774364,9.5,.22,Math.PI*.34,.78,0);me.position.set(0,.016,.0085),me.target=O,p.add(me)}const P=160,ce=new Float32Array(P*3),Me=new Float32Array(P*3),ye=new Float32Array(P),se=new Float32Array(P),I=[],T=new Float32Array(P),$=new Float32Array(P);for(let me=0;me<P;me++)ce[me*3+1]=-10,I.push(new D),T[me]=999,$[me]=.3,ye[me]=0,se[me]=.65+Math.random()*1.15,Me[me*3+0]=1,Me[me*3+1]=.48,Me[me*3+2]=.08;const ae=new Lt;ae.setAttribute("position",new tn(ce,3)),ae.setAttribute("color",new tn(Me,3)),ae.setAttribute("aLife",new tn(ye,1)),ae.setAttribute("aSize",new tn(se,1));const Re=new Qt({uniforms:{uSparkScale:{value:.58},tSceneDepth:{value:null},uNearClip:{value:.0015},uFarClip:{value:12},uFocus:{value:.12},uAperture:{value:0},uMaxBlur:{value:0},uResolution:{value:new Ne(1440,900)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Hn,vertexShader:`
      uniform float uSparkScale;
      uniform float uFocus;
      uniform float uAperture;
      uniform float uMaxBlur;
      uniform vec2 uResolution;
      attribute vec3 color;
      attribute float aLife;
      attribute float aSize;
      varying vec3 vColor;
      varying float vLife;
      varying float vViewZ;
      varying float vDofFactor;
      void main() {
        vColor = color;
        vLife = aLife;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewZ = mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;

        // Smooth ember size curve: blooms quickly then shrinks as the ember cools
        float lifeScale = smoothstep(0.0, 0.12, aLife) * (0.38 + 0.62 * pow(aLife, 0.7));
        float basePointSize = clamp((4.8 * uSparkScale * aSize * lifeScale) / max(0.05, -mvPosition.z), 0.0, 16.0);

        // Evaluate optical Depth of Field from the spark's OWN 3D view-space depth (mvPosition.z)
        // instead of the background wall behind it! Keep a generous 65mm in-focus sweet-spot around uFocus
        // so whenever the car is in focus, the entire trailing spark plume stays 100% tack-sharp.
        float rawFactor = uFocus + mvPosition.z;
        float deadzone = max(0.065, uFocus * 0.28);
        float absDiff = max(0.0, abs(rawFactor) - deadzone);
        float normScale = 1.0 / max(0.22, uFocus * 1.15);
        float cocUv = clamp(absDiff * (0.42 + 0.16 * normScale) * uAperture, 0.0, uMaxBlur);
        float cocPx = cocUv * uResolution.y * 0.50;
        vDofFactor = clamp(cocPx / max(1.0, basePointSize), 0.0, 4.0);

        gl_PointSize = aLife > 0.01 ? clamp(basePointSize + cocPx, 0.0, 26.0) : 0.0;
      }
    `,fragmentShader:`
      #include <common>
      #include <packing>
      uniform sampler2D tSceneDepth;
      uniform float uNearClip;
      uniform float uFarClip;
      uniform vec2 uResolution;
      varying vec3 vColor;
      varying float vLife;
      varying float vViewZ;
      varying float vDofFactor;
      void main() {
        if (vLife <= 0.01) discard;
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;

        // Hardware depth occlusion against closer opaque 3D geometry (kart body, track, lamp column)
        vec2 screenUv = gl_FragCoord.xy / max(vec2(1.0), uResolution);
        float rawSceneDepth = texture2D(tSceneDepth, screenUv).x;
        float sceneViewZ = perspectiveDepthToViewZ(rawSceneDepth, uNearClip, uFarClip);
        if (sceneViewZ > vViewZ + 0.0015) discard;

        // Soft circular radial fire-ember profile:
        // When in focus (vDofFactor == 0.0), renders a razor-sharp incandescent core + tight ember glow.
        float blurLerp = clamp(vDofFactor * 0.35, 0.0, 1.0);
        float core = exp(-d * d * mix(34.0, 8.0, blurLerp));
        float midFire = exp(-d * d * mix(10.5, 4.5, blurLerp)) * smoothstep(0.5, 0.08, d);
        float outerHalo = pow(max(0.0, 1.0 - d * 2.0), mix(2.2, 1.3, blurLerp)) * 0.65;

        // Temperature color shift as the spark cools over its lifetime (white-yellow -> fiery orange -> deep ember red)
        vec3 deepEmber = vec3(0.92, 0.16, 0.02);
        vec3 midFlame = mix(deepEmber, vColor, clamp(vLife * 1.25, 0.0, 1.0));
        vec3 hotCenter = vec3(1.0, 0.96, 0.82);

        vec3 emberColor = mix(midFlame, hotCenter, clamp(core * 1.2, 0.0, 1.0));
        float energyNorm = 1.0 / (1.0 + vDofFactor * 0.85);
        // HDR intensity > 1.0 at center so UnrealBloomPass gives each spark a soft natural fire glow
        vec3 finalRgb = emberColor * (1.85 * core + 1.15 * midFire + 0.65 * outerHalo) * energyNorm;

        float alpha = clamp((core * 1.1 + midFire * 0.85 + outerHalo * 0.55) * vLife * energyNorm, 0.0, 1.0);
        if (alpha < 0.015) discard;
        gl_FragColor = vec4(finalRgb, alpha);
      }
    `}),we=new fd(ae,Re);we.frustumCulled=!1,we.name="KartDriftSparks";let Ge=0,Oe=-1,je=!1;const Je=new D,Fe=new D,Be=new D;function be(me,re,ze=0){const Ze=performance.now();if(Math.abs(Ze-Oe)<1e-4)return;Oe=Ze;const ot=re/.002*me;for(const bt of q)bt.rotation.x+=ot;const nt=Ke.clamp(ze,-.52,.52);for(const bt of V)bt.rotation.y=Ke.lerp(bt.rotation.y,nt,Math.min(1,me*16));he&&(he.rotation.z=nt*1.6),ne&&(ne.rotation.y=nt*.7),y.rotation.z=-nt*.45,y.rotation.y=nt*.55}function Ae(me,re){const ze=re.steerAngle!==void 0?re.steerAngle-(re.driftAngle||0)*.35:-(re.steerInput||0)*.45-(re.driftAngle||0)*.35;be(me,re.speed,ze),p.rotation.y=Ke.lerp(p.rotation.y,(re.driftAngle||0)*(t.dosRuedas?.4:1),Math.min(1,me*14));const Ze=t.dosRuedas?re.leanAngle??(re.steerInput||0)*.45:(re.steerInput||0)*.09;p.rotation.z=Ke.lerp(p.rotation.z,Ze,Math.min(1,me*10));const ot=Math.abs(re.speed)>.005?Math.sin(performance.now()*.06)*18e-5:0;p.position.y=(re.hopHeight||0)+ot;const nt=re.boostActive>0,bt=performance.now()*.001;for(const xt of z){if(xt.visible=nt,!xt.visible)continue;const Ht=(xt.userData.pipeIndex||0)*1.85,cn=.82+.18*Math.sin(bt*58+Ht)+.12*Math.cos(bt*93-Ht*1.4),wn=.96+.08*Math.sin(bt*44+Ht),dn=Math.max(.55,.88+.28*cn);xt.scale.set(wn,wn,dn),xt.userData.jetMat&&(xt.userData.jetMat.uniforms.uTime.value=bt,xt.userData.jetMat.uniforms.uIntensity.value=Math.min(1.35,.92*cn))}const Ot=f.scale.x||.58;Re.uniforms.uSparkScale.value=Ot;const nn=(re.isDrifting||nt||re.curbRumble>.2||Math.abs(re.steerInput||0)>.32)&&Math.abs(re.speed)>.03,hn=nn?6:0;ge>0&&(ge=Math.max(0,ge-me));const on=nn||ge>0,Rn=.35+Math.random()*.2;if(de.intensity=on?Rn*oe:Ke.lerp(de.intensity,0,Math.min(1,me*12)),hn>0){f.getWorldPosition(Je),re.tangent?Fe.copy(re.tangent).multiplyScalar(-1):(f.getWorldDirection(Fe),Fe.multiplyScalar(-1));for(let xt=0;xt<hn;xt++){const Dt=Ge%P;Ge++;const Ht=xt%2===0?-1:1;Be.copy(Je).addScaledVector(re.right,Ht*(h+Math.random()*.0018)*Ot).addScaledVector(Fe,(.006+Math.random()*.0028)*Ot).addScaledVector(re.normal,(9e-4+Math.random()*9e-4)*Ot),ce[Dt*3+0]=Be.x,ce[Dt*3+1]=Be.y,ce[Dt*3+2]=Be.z;const cn=.65+.35*Ot;I[Dt].copy(Fe).multiplyScalar((.12+Math.random()*.22)*cn).addScaledVector(re.normal,(.045+Math.random()*.11)*cn).addScaledVector(re.right,(Math.random()-.5)*.12*cn),T[Dt]=0,$[Dt]=.2+Math.random()*.18,ye[Dt]=1,se[Dt]=.65+Math.random()*1.15,Me[Dt*3+0]=1,Me[Dt*3+1]=.36+Math.random()*.46,Me[Dt*3+2]=.04+Math.random()*.14}}let Mn=!1;if(hn>0||je){for(let xt=0;xt<P;xt++){const Dt=$[xt]||.28;T[xt]<Dt?(Mn=!0,T[xt]+=me,ye[xt]=Math.max(0,1-T[xt]/Dt),ce[xt*3+0]+=I[xt].x*me,ce[xt*3+1]+=I[xt].y*me,ce[xt*3+2]+=I[xt].z*me,I[xt].multiplyScalar(Math.max(.88,1-2.4*me)),I[xt].y-=.36*me):(ye[xt]=0,ce[xt*3+1]=-10)}ae.attributes.position.needsUpdate=!0,ae.attributes.color.needsUpdate=!0,ae.attributes.aLife.needsUpdate=!0,je=Mn}}const Pe=p.children.filter(me=>!me.isLight&&me!==O&&!z.includes(me));let Xe=!1;function K(me){Xe=!!me,v.visible=!Xe;for(const re of Pe)re.visible=!Xe}function ke(){f.traverse(me=>{me.geometry&&!Object.values(H).includes(me.geometry)&&me.geometry.dispose()}),ae.dispose()}const He=new _o().setFromObject(p),Qe=Math.max(.008,He.max.y);return{tipo:e,spec:t,alto:Qe,kartRoot:f,chassisGroup:p,sparkPoints:we,sparkFireLight:de,setFireLightMultiplier:ie,setCockpitRoadOnly:K,updateWheels:be,updateKartVisuals:Ae,dispose:ke}}const rt={oro:new Ee({color:14264634,roughness:.25,metalness:.95}),oroViejo:new Ee({color:11041066,roughness:.4,metalness:.85}),plata:new Ee({color:13225686,roughness:.22,metalness:.95}),ceraBlanca:new Ee({color:16052194,roughness:.55,metalness:0}),marfil:new Ee({color:15985884,roughness:.45}),azulManto:new Ee({color:3104696,roughness:.5}),celeste:new Ee({color:9356783,roughness:.5}),piel:new Ee({color:15319194,roughness:.6}),pielMorena:new Ee({color:12157526,roughness:.6}),maderaOscura:new Ee({color:4860951,roughness:.7}),madera:new Ee({color:9067058,roughness:.75}),maderaClara:new Ee({color:12618325,roughness:.7}),paja:new Ee({color:14267484,roughness:.95}),rojoLiturgico:new Ee({color:10098208,roughness:.55}),piedra:new Ee({color:10130570,roughness:.92}),cuentaRosario:new Ee({color:5974666,roughness:.15,metalness:.3})};function Dr(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const o=new Ut(n);return o.colorSpace=zt,o.anisotropy=4,o}const Ml=new Map;function p1(i="255,190,90"){return Ml.has(i)||Ml.set(i,Dr(128,128,e=>{const t=e.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,`rgba(${i},1)`),t.addColorStop(.25,`rgba(${i},0.55)`),t.addColorStop(.6,`rgba(${i},0.14)`),t.addColorStop(1,`rgba(${i},0)`),e.fillStyle=t,e.fillRect(0,0,128,128)})),Ml.get(i)}function pi(i,e="255,190,90",t=1){const n=new dd(new t0({map:p1(e),transparent:!0,opacity:t,blending:Hn,depthWrite:!1,toneMapped:!1}));return n.scale.set(i,i,1),n}function xr(i="roseton",e=512,t=512){return Dr(e,t,n=>{n.fillStyle="#0b0a14",n.fillRect(0,0,e,t);const o=["#1f4fd1","#d12a2a","#f0b52b","#2aa36b","#7a3bd1","#33b6e0","#f06a2b"];if(i==="roseton"){const a=e/2,s=t/2,r=Math.min(e,t)*.48;for(let l=0;l<5;l++){const c=r*l/5,d=r*(l+1)/5,h=6+l*6;for(let f=0;f<h;f++){const p=f/h*Math.PI*2,x=(f+1)/h*Math.PI*2;n.beginPath(),n.arc(a,s,d,p,x),n.arc(a,s,c,x,p,!0),n.closePath(),n.fillStyle=o[(f+l*2)%o.length],n.fill(),n.lineWidth=5,n.strokeStyle="#141018",n.stroke()}}n.fillStyle="#ffd86a",n.fillRect(a-r*.05,s-r*.17,r*.1,r*.34),n.fillRect(a-r*.13,s-r*.07,r*.26,r*.09)}else{n.save(),n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.08,t*.32),n.quadraticCurveTo(e*.5,-t*.08,e*.92,t*.32),n.lineTo(e*.92,t),n.closePath(),n.clip();const a=9,s=5;for(let r=0;r<a;r++)for(let l=0;l<s;l++)n.fillStyle=o[(l*3+r*2+(i==="b"?1:0))%o.length],n.fillRect(l*e/s,r*t/a,e/s+1,t/a+1);n.strokeStyle="#141018",n.lineWidth=6;for(let r=1;r<a;r++)n.beginPath(),n.moveTo(0,r*t/a+Math.sin(r)*6),n.lineTo(e,r*t/a-Math.cos(r)*6),n.stroke();for(let r=1;r<s;r++)n.beginPath(),n.moveTo(r*e/s,0),n.lineTo(r*e/s,t),n.stroke();n.fillStyle="#f6e7c8",n.beginPath(),n.arc(e*.5,t*.34,e*.07,0,Math.PI*2),n.fill(),n.strokeStyle="#ffd86a",n.lineWidth=10,n.beginPath(),n.arc(e*.5,t*.34,e*.11,0,Math.PI*2),n.stroke(),n.fillStyle=i==="b"?"#1f4fd1":"#d12a2a",n.beginPath(),n.moveTo(e*.5,t*.4),n.lineTo(e*.32,t*.86),n.lineTo(e*.68,t*.86),n.closePath(),n.fill(),n.restore(),n.strokeStyle="#1a1520",n.lineWidth=14,n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.08,t*.32),n.quadraticCurveTo(e*.5,-t*.08,e*.92,t*.32),n.lineTo(e*.92,t),n.stroke()}})}function m1(i,e){return Dr(256,360,(t,n,o)=>{t.fillStyle=i,t.fillRect(0,0,n,o),t.strokeStyle="#e9c35a",t.lineWidth=6,t.strokeRect(14,14,n-28,o-28),t.fillStyle="#f1cf6a",t.fillRect(n/2-8,70,16,110),t.fillRect(n/2-40,100,80,16),t.font="bold 34px Georgia, serif",t.textAlign="center",t.fillText(e,n/2,250)})}function g1(){return Dr(512,512,(i,e,t)=>{i.fillStyle="#f4efe2",i.fillRect(0,0,e,t);const n=e*.25;i.fillStyle="#b3182a",i.fillRect(n-14,60,28,380),i.fillRect(n-90,170,180,28),i.fillStyle="#c8901f",i.font="bold 64px Georgia, serif",i.textAlign="center",i.fillText("Α",n-60,130),i.fillText("Ω",n+60,130),i.font="bold 52px Georgia, serif",i.fillText("20",n-55,320),i.fillText("26",n+55,320),i.fillStyle="#b3182a";for(const[o,a]of[[0,184],[0,110],[0,260],[-50,184],[50,184]])i.beginPath(),i.arc(n+o,a,10,0,Math.PI*2),i.fill()})}const Fu=new At(1,12,10),v1=new Nt({color:new Ve(2.4,1.1,.25),transparent:!0,opacity:.85,depthWrite:!1,blending:Hn,toneMapped:!1}),x1=new Nt({color:new Ve(3.2,2.8,1.8),toneMapped:!1});function f0(i=.01,e=!0){const t=new et,n=new L(Fu,v1);n.scale.set(i*.38,i,i*.38),n.position.y=i*.8;const o=new L(Fu,x1);o.scale.set(i*.18,i*.5,i*.18),o.position.y=i*.55,t.add(n,o);let a=null;e&&(a=pi(i*7,"255,170,70",.75),a.position.y=i*.9,t.add(a));const s=Math.random()*10;return t.userData.animar=r=>{const l=1+Math.sin(r*13+s)*.08+Math.sin(r*23.7+s*2)*.05;n.scale.y=i*l,n.rotation.z=Math.sin(r*5+s)*.06,a&&(a.material.opacity=.62+.13*l)},t}function ds({alto:i=.05,radio:e=.008,color:t=rt.ceraBlanca,platillo:n=!0}={}){const o=new et,a=new L(new st(e,e*1.02,i,20),t);a.position.y=i/2,a.castShadow=!0,o.add(a);const s=new L(new st(e*.08,e*.08,e*.6,6),rt.maderaOscura);s.position.y=i+e*.3,o.add(s);const r=f0(e*1.3);if(r.position.y=i+e*.3,o.add(r),n){const l=new L(new st(e*1.9,e*2.1,e*.35,24),rt.oro);l.position.y=e*.17,l.castShadow=!0,o.add(l),a.position.y+=e*.35,s.position.y+=e*.35,r.position.y+=e*.35}return o.userData.animar=r.userData.animar,o.userData.alturaLlama=r.position.y,o}function _1({alto:i=.26,radio:e=.022}={}){const t=new et,n=new L(new xo([[0,0],[e*2.6,0],[e*2.4,e*.4],[e*1.1,e*.9],[e*.7,e*2.4],[e*1.3,e*2.9],[e*1.3,e*3.2],[0,e*3.2]].map(([l,c])=>new Ne(l,c)),32),rt.oro);n.castShadow=!0,t.add(n);const o=e*3.2,a=new Ee({map:g1(),roughness:.5}),s=new L(new st(e,e,i,40),a);s.position.y=o+i/2,s.rotation.y=Math.PI*.35,s.castShadow=!0,t.add(s);const r=f0(e*.9);return r.position.y=o+i+e*.1,t.add(r),t.userData.animar=r.userData.animar,t.userData.alturaLlama=r.position.y,t}function Pc({alto:i=.3}={}){const e=new et,t=[[0,0],[.05,0],[.048,.008],[.02,.025],[.012,.06],[.022,.07],[.009,.09],[.008,i*.75],[.018,i*.78],[.009,i*.82],[.008,i-.012],[.03,i-.006],[.03,i],[0,i]],n=new L(new xo(t.map(([a,s])=>new Ne(a,s)),32),rt.oro);n.castShadow=!0,n.receiveShadow=!0,e.add(n);const o=ds({alto:.11,radio:.011,platillo:!1});return o.position.y=i,e.add(o),e.userData.animar=o.userData.animar,e.userData.alturaLlama=i+o.userData.alturaLlama,e}function ua({alto:i=.12,tunica:e=rt.marfil,manto:t=null,piel:n=rt.piel,tocado:o=null,aureola:a=!1,corona:s=!1,pose:r="pie"}={}){const l=new et,c=r==="rodillas"?i*.72:i,d=i*.16,h=[[0,0],[d*1.25,0],[d*1.15,c*.18],[d*.95,c*.45],[d*.7,c*.68],[d*.82,c*.76],[d*.45,c*.82],[0,c*.82]],f=new L(new xo(h.map(([m,u])=>new Ne(m,u)),28),e);if(f.castShadow=!0,f.receiveShadow=!0,l.add(f),t){const m=h.map(([_,w])=>new Ne(_*1.08+6e-4,w*.98)),u=t.clone();u.side=Jt;const g=new L(new xo(m,28,Math.PI*.35,Math.PI*1.3),u);g.castShadow=!0,l.add(g)}const p=new L(new At(d*.62,20,16),n);p.position.y=c*.82+d*.55,p.castShadow=!0,l.add(p);const x=p.position.y;if(o){const m=o.clone();m.side=Jt;const u=new L(new At(d*.72,20,14,0,Math.PI*2,0,Math.PI*.6),m);u.position.y=x+d*.02,u.rotation.x=-.35,l.add(u);const g=new L(new st(d*.7,d*.95,d*1.4,20,1,!0,Math.PI*.6,Math.PI*1.8),m);g.position.set(0,x-d*.55,-d*.08),l.add(g)}if(a){const m=new L(new Un(d*.75,d*.07,8,32),new Nt({color:new Ve(1.8,1.4,.5),toneMapped:!1}));m.position.set(0,x+d*.25,-d*.45),l.add(m)}if(s){const m=new L(new st(d*.5,d*.42,d*.4,10,1,!0),rt.oro);m.position.y=x+d*.62,l.add(m)}const b=new L(new At(d*.25,10,8),n);return b.position.set(0,c*.62,d*.85),b.scale.set(1,1.3,.8),l.add(b),l.userData.altoCabeza=x,l}function zd({alto:i=.12,pedestal:e=.02,brillo:t=!0}={}){const n=new et,o=new L(new st(i*.26,i*.3,e,32),rt.marfil);o.position.y=e/2,o.castShadow=!0,o.receiveShadow=!0,n.add(o);for(let d=0;d<2;d++){const h=new L(new At(i*.03,10,8),new Ee({color:15779402,roughness:.4}));h.position.set((d-.5)*i*.12,e+i*.02,i*.16),n.add(h)}const a=ua({alto:i,tunica:rt.marfil,manto:rt.azulManto,tocado:rt.marfil});a.position.y=e,n.add(a);const s=e+a.userData.altoCabeza,r=new et,l=new Nt({color:new Ve(2,1.6,.6),toneMapped:!1}),c=Ic(i*.022,i*.009,i*.004);for(let d=0;d<12;d++){const h=d/12*Math.PI*2,f=new L(c,l);f.position.set(Math.cos(h)*i*.13,0,Math.sin(h)*i*.13),f.lookAt(0,0,0),r.add(f)}if(r.position.set(0,s+i*.08,-i*.02),r.rotation.x=-.3,n.add(r),t){const d=pi(i*1.4,"170,200,255",.35);d.position.y=e+i*.7,n.add(d)}return n.userData.animar=d=>{r.rotation.y=d*.4},n}function Ic(i,e,t){const n=new Aa;for(let a=0;a<10;a++){const s=a/10*Math.PI*2+Math.PI/2,r=a%2===0?i:e,l=Math.cos(s)*r,c=Math.sin(s)*r;a===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath();const o=new Er(n,{depth:t,bevelEnabled:!1});return o.translate(0,0,-t/2),o}function Ou(i=.05){const e=new et,t=new Nt({color:new Ve(3,2.5,1.2),toneMapped:!1}),n=new L(Ic(i,i*.4,i*.18),t);e.add(n);const o=new L(Ic(i*.7,i*.18,i*.12),t);o.rotation.z=Math.PI/5,e.add(o);const a=pi(i*9,"255,220,140",.9);e.add(a);const s=new L(new $n(i*.35,i*4.5,16,1,!0),new Nt({color:new Ve(1.6,1.3,.7),transparent:!0,opacity:.35,blending:Hn,depthWrite:!1,toneMapped:!1,side:Jt}));return s.rotation.z=Math.PI/2+.35,s.position.set(i*2.2,-i*.8,0),e.add(s),e.userData.animar=r=>{n.rotation.y=Math.sin(r*.7)*.5,a.material.opacity=.75+Math.sin(r*2.2)*.15},e}function ba({alto:i=.2,mat:e=rt.maderaOscura,cristo:t=rt.marfil,base:n=!0}={}){const o=new et,a=i*.06,s=n?i*.06:0;if(n){const m=new L(new Le(i*.36,i*.03,i*.22),e);m.position.y=i*.015;const u=new L(new Le(i*.24,i*.03,i*.15),e);u.position.y=i*.045,m.castShadow=u.castShadow=!0,o.add(m,u)}const r=new L(new Le(a,i,a*.7),e);r.position.y=s+i/2;const l=new L(new Le(i*.55,a,a*.7),e);l.position.y=s+i*.72,r.castShadow=l.castShadow=!0,o.add(r,l);const c=a*.55,d=new L(new st(i*.03,i*.022,i*.3,10),t);d.position.set(0,s+i*.55,c);const h=new L(new At(i*.03,12,10),t);h.position.set(i*.01,s+i*.74,c+i*.01);const f=new L(new st(i*.01,i*.01,i*.46,8),t);f.rotation.z=Math.PI/2,f.position.set(0,s+i*.69,c);const p=new L(new st(i*.034,i*.03,i*.05,10),rt.marfil);p.position.set(0,s+i*.43,c);const x=new L(new st(i*.018,i*.012,i*.22,8),t);x.position.set(0,s+i*.3,c);const b=new L(new Le(i*.12,i*.04,a*.2),rt.marfil);b.position.set(0,s+i*.9,c*.6);for(const m of[d,h,f,p,x,b])m.castShadow=!0,o.add(m);return o}function qa({ancho:i=.16,largo:e=.22,grueso:t=.035,color:n="#6b1420",titulo:o="BIBLIA"}={}){const a=new et,s=new Ee({color:n,roughness:.6}),r=new Ee({map:m1(n,o),roughness:.55}),l=new Ee({color:15854034,roughness:.9}),c=new Ee({color:14135370,roughness:.35,metalness:.7}),d=new L(new Le(i,t*.1,e),[s,s,r,s,s,s]);d.position.y=t*.95;const h=new L(new Le(i,t*.1,e),s);h.position.y=t*.05;const f=new L(new Le(t*.1,t,e),s);f.position.set(-i/2+t*.05,t/2,0);const p=new L(new Le(i*.96,t*.82,e*.97),[c,l,l,l,c,c]);p.position.set(t*.04,t/2,0);for(const b of[d,h,f,p])b.castShadow=!0,b.receiveShadow=!0,a.add(b);const x=new L(new Le(.004,4e-4,e*.25),rt.rojoLiturgico);return x.position.set(i*.18,t*.55,e*.6),x.rotation.x=.9,a.add(x),a}function M1({radio:i=.06,cuenta:e=.0032,mat:t=rt.cuentaRosario}={}){const n=new et,o=[],a=59;for(let c=0;c<a;c++){const d=c/a*Math.PI*2;o.push(new D(Math.cos(d)*i,e,Math.sin(d)*i*.7+Math.sin(d*3)*i*.06))}for(let c=1;c<=6;c++)o.push(new D(Math.sin(c*.6)*.004,e,i*.7+c*e*3.2));const s=new Zi(new At(e,10,8),t,o.length),r=new Ft;o.forEach((c,d)=>{const h=d%11===0||d>=a;r.makeScale(h?1.3:1,h?1.3:1,h?1.3:1),r.setPosition(c),s.setMatrixAt(d,r)}),s.castShadow=!0,n.add(s);const l=ba({alto:e*9,mat:rt.plata,cristo:rt.oro,base:!1});return l.rotation.x=-Math.PI/2,l.position.set(0,e*.5,i*.7+7*e*3.2+e*7.5),l.rotation.z=Math.PI,n.add(l),n}function w1({ancho:i=.16,alto:e=.18}={}){const t=new et,n=new L(new Le(i,e,i*.8),rt.oro);n.position.y=e/2,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const o=new L(new $n(i*.72,e*.35,4),rt.oro);o.rotation.y=Math.PI/4,o.position.y=e+e*.17,o.castShadow=!0,t.add(o);const a=new L(new Le(i*.6,e*.62,.003),rt.oroViejo);a.position.set(0,e*.48,i*.4+.0015),t.add(a);const s=ba({alto:e*.35,mat:rt.oro,cristo:rt.oro,base:!1});s.position.set(0,e*.3,i*.4+.003),t.add(s);const r=ba({alto:e*.3,mat:rt.oro,cristo:rt.oro,base:!1});r.position.y=e*1.33,t.add(r);const l=new L(new At(i*.07,12,10),new Nt({color:new Ve(2.2,.25,.2),toneMapped:!1}));l.position.set(i*.75,e*.25,i*.2);const c=pi(i*.6,"255,60,50",.6);return c.position.copy(l.position),t.add(l,c),t}function kd({alto:i=.09}={}){const e=[[0,0],[i*.32,0],[i*.3,i*.04],[i*.08,i*.12],[i*.05,i*.38],[i*.1,i*.42],[i*.05,i*.48],[i*.06,i*.55],[i*.24,i*.7],[i*.3,i*1],[i*.28,i*1],[i*.22,i*.74],[0,i*.62]],t=new L(new xo(e.map(([s,r])=>new Ne(s,r)),40),rt.oro);t.castShadow=!0;const n=new et;n.add(t);const o=new L(new st(i*.26,i*.26,.0015,32),rt.marfil);o.position.y=i*1;const a=new L(new st(i*.36,i*.36,.0015,40),rt.oro);return a.position.y=i*1-.0012,n.add(a,o),n}function _r({alto:i=.12,colores:e=[16777215,15913547,14828922],jarron:t=rt.oro,n=14}={}){const o=new et,a=[[0,0],[i*.14,0],[i*.2,i*.18],[i*.12,i*.38],[i*.16,i*.42],[0,i*.42]];if(t){const l=new L(new xo(a.map(([c,d])=>new Ne(c,d)),24),t);l.castShadow=!0,o.add(l)}const s=new Ee({color:4160826,roughness:.8}),r=new At(i*.07,10,8);for(let l=0;l<n;l++){const c=l/n*Math.PI*2*2.3,d=i*(.05+.18*(l*7%5)/5),h=new D(Math.cos(c)*d,i*(.85+l*3%4*.08),Math.sin(c)*d),f=new L(new st(i*.008,i*.008,h.y-i*.3,5),s);f.position.set(h.x*.5,(h.y+i*.3)/2,h.z*.5),f.lookAt(h.x,h.y+1,h.z),f.rotateX(Math.PI/2),o.add(f);const p=new L(r,new Ee({color:e[l%e.length],roughness:.6}));p.position.copy(h),p.scale.set(1,.7,1),p.castShadow=!0,o.add(p)}return o}function Bu({alto:i=.09,tunica:e=rt.marfil}={}){const t=ua({alto:i,tunica:e,aureola:!0}),n=new Ee({color:16448245,roughness:.5,side:Jt});for(const o of[-1,1]){const a=new Aa;a.moveTo(0,0),a.quadraticCurveTo(i*.35*o,i*.45,i*.42*o,i*.05),a.quadraticCurveTo(i*.25*o,i*.1,0,-i*.15);const s=new L(new Cr(a),n);s.position.set(0,i*.62,-i*.08),s.rotation.y=o*.45,s.castShadow=!0,t.add(s)}return t}function b1(i=.03){const e=new et,t=new Ee({color:15921126,roughness:1}),n=new Ee({color:2827296,roughness:.8}),o=new L(new At(i*.5,14,10),t);o.scale.set(.8,.7,1.15),o.position.y=i*.55;const a=new L(new At(i*.2,10,8),n);a.position.set(0,i*.72,i*.55),a.scale.set(.8,.9,1.2),e.add(o,a);for(const[s,r]of[[-.18,.3],[.18,.3],[-.18,-.3],[.18,-.3]]){const l=new L(new st(i*.05,i*.05,i*.3,6),n);l.position.set(s*i,i*.15,r*i),e.add(l)}return e.traverse(s=>s.castShadow=!0),e}function wl({escala:i=.07,color:e=9071178,cuernos:t=!1}={}){const n=new et,o=new Ee({color:e,roughness:.85}),a=new L(new Oo(i*.25,i*.55,6,12),o);a.rotation.x=Math.PI/2,a.position.y=i*.55;const s=new L(new st(i*.1,i*.14,i*.3,10),o);s.position.set(0,i*.72,i*.45),s.rotation.x=.7;const r=new L(new Oo(i*.1,i*.18,4,10),o);r.position.set(0,i*.8,i*.62),r.rotation.x=1.2,n.add(a,s,r);for(const[l,c]of[[-.14,.3],[.14,.3],[-.14,-.3],[.14,-.3]]){const d=new L(new st(i*.05,i*.045,i*.4,8),o);d.position.set(l*i,i*.2,c*i),n.add(d)}if(t)for(const l of[-1,1]){const c=new L(new $n(i*.025,i*.14,6),rt.marfil);c.position.set(l*i*.08,i*.92,i*.6),c.rotation.z=-l*.8,n.add(c)}else for(const l of[-1,1]){const c=new L(new $n(i*.03,i*.16,6),o);c.position.set(l*i*.06,i*.95,i*.56),c.rotation.z=-l*.3,n.add(c)}return n.traverse(l=>l.castShadow=!0),n}function S1(i=.25){const e=new et,t=new Ee({color:8084026,roughness:.95}),n=new Ee({color:4164154,roughness:.7,side:Jt}),o=8;let a=0;for(let s=0;s<o;s++){const r=i/o,l=new L(new st(i*.03,i*.036,r,8),t);l.position.set(Math.sin(s*.3)*i*.03,a+r/2,0),l.castShadow=!0,e.add(l),a+=r}for(let s=0;s<8;s++){const r=new Aa;r.moveTo(0,0),r.quadraticCurveTo(i*.25,i*.08,i*.42,-i*.1),r.quadraticCurveTo(i*.25,0,0,0);const l=new L(new Cr(r),n);l.position.set(0,a,0),l.rotation.y=s/8*Math.PI*2,l.rotation.x=-.25,l.castShadow=!0,e.add(l)}return e}function y1({ancho:i=.08,alto:e=.07,fondo:t=.07,color:n=14205850}={}){const o=new et,a=new Ee({color:n,roughness:.95}),s=new L(new Le(i,e,t),a);s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,o.add(s);const r=new L(new Le(i*1.06,e*.06,t*1.06),a);r.position.y=e,o.add(r);const l=new L(new Le(i*.22,e*.42,.002),rt.maderaOscura);l.position.set(0,e*.21,t/2+.001),o.add(l);const c=new L(new Le(i*.16,e*.16,.002),new Nt({color:new Ve(2.2,1.4,.5),toneMapped:!1}));return c.position.set(i*.28,e*.62,t/2+.001),o.add(c),o}function Qa({radio:i=.1,alto:e=.15,color:t=9406330,semilla:n=1,detalle:o=3}={}){const a=new r0(1,o),s=a.attributes.position;let r=n*9301;const l=()=>(r=r*16807%2147483647,r/2147483647),c=[];for(let h=0;h<12;h++)c.push([l()*6,l()*6,l()*6,.05+l()*.1]);for(let h=0;h<s.count;h++){const f=new D(s.getX(h),s.getY(h),s.getZ(h));let p=0;for(const[x,b,m,u]of c)p+=Math.sin(f.x*x+f.y*b+f.z*m)*u;f.multiplyScalar(1+p),s.setXYZ(h,f.x*i,Math.max(0,f.y)*e,f.z*i)}a.computeVertexNormals();const d=new L(a,new Ee({color:t,roughness:.95,flatShading:!0}));return d.castShadow=!0,d.receiveShadow=!0,d}function fs(i){const e=new Set;return i.traverse(t=>{t.userData&&typeof t.userData.animar=="function"&&e.add(t.userData.animar)}),[...e]}function A1(i){const t=i.samples[i.start_finish_index??0],n=new D(...t.position),o=new D(t.tangent[0],0,t.tangent[2]).normalize(),a=new D(t.right[0],0,t.right[2]).normalize(),s=new et;s.name="ArcoDeSalida",s.position.copy(n);const r=new Ft().makeBasis(a,new D(0,1,0),o);s.quaternion.setFromRotationMatrix(r);const l=new Ee({color:10260344,roughness:.92}),c=.034,d=.026;for(const A of[-c/2,c/2]){const v=new L(new Le(.004,d,.005),l);v.position.set(A,d/2-.004,0),v.castShadow=!0,s.add(v);const R=new L(new Le(.006,.0018,.0066),rt.oro);R.position.set(A,d-.004,0),s.add(R)}const h=new L(new Un(c/2,.0022,10,32,Math.PI),l);h.position.set(0,d-.004,0),h.castShadow=!0,s.add(h);const f=d-.004+c/2,p=new L(new Le(.0016,.012,.0016),rt.oro);p.position.set(0,f+.0075,0);const x=new L(new Le(.0072,.0016,.0016),rt.oro);x.position.set(0,f+.0095,0),s.add(p,x);const b=Nd(),m=new L(new Gt(.03,.005),new Ee({map:b,emissiveMap:b,emissive:16777215,emissiveIntensity:.6,side:Jt}));m.position.set(0,d-.006,5e-4),s.add(m);const u=new L(new Gt(.021,.0035),new Nt({map:b,polygonOffset:!0,polygonOffsetFactor:-2}));u.rotation.x=-Math.PI/2,u.position.set(0,6e-4,0),s.add(u);const g=new L(new Le(c+.004,.0016,.004),rt.oroViejo);g.position.set(0,d-.0028,.0036),s.add(g);const _=[],w=[.0128,.0064,0,-.0064,-.0128];for(const A of w){const v=new L(new st(9e-4,9e-4,.0042,10),rt.ceraBlanca);v.position.set(A,d-2e-4,.0036),s.add(v);const R=f0(.0016,!1);R.position.set(A,d+.0019,.0036),R.visible=!1;const F=pi(.012,"255,150,60",0);F.position.set(A,d+.0034,.0036),s.add(R,F),_.push({fl:R,h:F})}const E=pi(.07,"255,230,160",0);E.position.set(0,d+.004,.004),s.add(E);let S=0;function C(A,v=!1){_.forEach((R,F)=>{const H=F<A||v;R.fl.visible=H,R.h.material.opacity=H?v?1:.75:0}),v&&(S=1)}function M(A,v=.016){for(const R of _)R.fl.visible&&R.fl.userData.animar(A);S>0&&(S=Math.max(0,S-v*1.2),E.material.opacity=S,S===0&&C(5))}return{grupo:s,setVelas:C,animar:M}}function T1(i){const e=new et;e.name="GoldenHourAtmosphere";const t=0,n=1.15,o=new us(1843768,591622,.045+.025*n+.42*t);e.add(o);const a=new Uo(16758861,.85*t);a.position.set(-.36,.68,-.52),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.near=.08,a.shadow.camera.far=2.4,a.shadow.camera.left=-.55,a.shadow.camera.right=.55,a.shadow.camera.top=.48,a.shadow.camera.bottom=-.42,a.shadow.bias=-12e-5,a.shadow.normalBias=6e-4,a.shadow.radius=1.15,a.shadow.autoUpdate=!1,a.shadow.needsUpdate=!0,a.visible=t>.005,e.add(a);const s=new Gn(16760408,.5*t,1.8,1.2);s.position.set(0,.46,-.42),s.visible=t>.005,e.add(s);const r=new Uo(16763256,.24*t);r.position.set(-.55,.52,.35),r.visible=t>.005,e.add(r);const l=new Uo(16754258,.22*t);l.position.set(-.38,.48,.62),l.visible=t>.005,e.add(l);const c=l,d=new Kt;d.position.set(-.09,0,.065),e.add(d);const h=new wa(16757350,2.55*n,1.68,Math.PI*.31,.78,1.85);h.position.set(.352,.355,-.085),h.target=d,h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.06,h.shadow.camera.far=1.35,h.shadow.bias=-35e-5,h.shadow.normalBias=.0012,h.shadow.radius=1.15,h.shadow.autoUpdate=!1,h.shadow.needsUpdate=!0,e.add(h);const f=new Gn(16749624,.38*n,.42,1.75);f.position.set(.342,.345,-.062),e.add(f);const p=new Gn(58879,.24,.16,2);p.position.set(-.161,.018,.118),e.add(p);const x=new D(-.025,.105,-.045),b=new Gn(1993727,0,.09,1.8);b.position.copy(x),b.visible=!1,e.add(b);const m=new Kt;m.position.set(-.015,0,-.025),e.add(m);const u=new wa(1599743,.48,.28,Math.PI*.36,.85,1.5);u.position.copy(x),u.target=m,e.add(u),new Ve(1993727);const g=new Nt({color:1993727,transparent:!0,opacity:0,depthWrite:!1}),_=new L(new $n(.01,.01,8,1,!0),g);_.position.set(-.025,.048,-.038),_.visible=!1;const w={uColorWarm:{value:new Ve(16758861)},uColorCore:{value:new Ve(16771235)},uIntensity:{value:t},uTime:{value:0}};function E(y){const B=y*1.62,k=new Qt({uniforms:{uColorWarm:w.uColorWarm,uColorCore:w.uColorCore,uIntensity:w.uIntensity,uTime:w.uTime,uBaseOpacity:{value:B}},transparent:!0,opacity:B,depthWrite:!1,blending:Hn,side:eo,vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vec4 mvPos = viewMatrix * worldPos;
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform vec3 uColorWarm;
        uniform vec3 uColorCore;
        uniform float uIntensity;
        uniform float uTime;
        uniform float uBaseOpacity;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        varying vec3 vWorldPos;
        void main() {
          // Soft radial cylinder edge falloff + smooth top/bottom longitudinal fade
          float fresnel = pow(max(0.0, abs(dot(vNormal, vViewDir))), 1.55);
          float longiFade = smoothstep(0.0, 0.20, vUv.y) * smoothstep(1.0, 0.12, vUv.y);
          // Diagonal 38-degree venetian/window light ray striations
          float diagCoord = vWorldPos.x * 0.788 + vWorldPos.y * 0.615;
          float bands = 0.76 + 0.24 * sin(diagCoord * 34.0 + uTime * 0.35)
                             + 0.12 * sin(diagCoord * 78.0 - uTime * 0.22);
          float effIntensity = pow(max(0.0, uIntensity), 0.92);
          float alpha = clamp(fresnel * longiFade * bands * uBaseOpacity * effIntensity, 0.0, 0.62);
          vec3 col = mix(uColorWarm, uColorCore, clamp(fresnel * 0.52 + (1.0 - vUv.y) * 0.25, 0.0, 1.0));
          gl_FragColor = vec4(col, alpha);
        }
      `});return k.userData.baseOpacity=y,k}function S(y,B=0){const k=new Qt({uniforms:{uColorWarm:w.uColorWarm,uColorCore:w.uColorCore,uIntensity:w.uIntensity,uTime:w.uTime,uBaseOpacity:{value:y},uPhase:{value:B}},transparent:!0,opacity:y,depthWrite:!1,blending:Hn,side:Jt,vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uColorWarm;
        uniform vec3 uColorCore;
        uniform float uIntensity;
        uniform float uTime;
        uniform float uBaseOpacity;
        uniform float uPhase;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          // Soft 4-edge vignette so the plane blends seamlessly into the room air
          float edgeX = smoothstep(0.0, 0.22, vUv.x) * smoothstep(1.0, 0.18, vUv.x);
          float edgeY = smoothstep(0.0, 0.24, vUv.y) * smoothstep(1.0, 0.14, vUv.y);
          float envelope = edgeX * edgeY;

          // Diagonal ~38° ray coordinate perpendicular to the upper-left -> lower-right sun vector
          // Ray travel direction: (+0.62, -0.78), perpendicular axis: (+0.78, +0.62)
          float rayPerp = vWorldPos.x * 0.788 + vWorldPos.y * 0.615 + uPhase;
          float rayAlong = (vWorldPos.x * 0.615 - vWorldPos.y * 0.788);

          // Multi-layered striated golden-hour god-rays matching media_1789990164702.jpg
          float s1 = 0.5 + 0.5 * sin(rayPerp * 26.0 + uTime * 0.18);
          float s2 = 0.5 + 0.5 * sin(rayPerp * 58.0 - 1.4 + uTime * 0.11);
          float s3 = 0.5 + 0.5 * sin(rayPerp * 112.0 + 2.7);
          float striations = pow(s1, 1.6) * 0.55 + pow(s2, 2.2) * 0.32 + pow(s3, 3.0) * 0.18;

          // Brighter near upper-left window origin, gently attenuating down-and-right
          float sourceBoost = smoothstep(0.55, -0.45, rayAlong) * 0.65 + 0.35;
          float effIntensity = pow(max(0.0, uIntensity), 0.90);
          float alpha = clamp(envelope * (0.28 + 0.72 * striations) * sourceBoost * uBaseOpacity * effIntensity, 0.0, 0.58);

          vec3 col = mix(uColorWarm, uColorCore, clamp(striations * 0.65 + sourceBoost * 0.25, 0.0, 1.0));
          gl_FragColor = vec4(col, alpha);
        }
      `});return k.userData.baseOpacity=y,k}const C=new et;C.name="VolumetricSunbeams";const M=C,A=[{from:[-.42,.66,-.44],to:[.04,.02,.08],rTop:.075,rBot:.22,opacity:.062},{from:[-.34,.68,-.45],to:[.14,.02,.12],rTop:.085,rBot:.24,opacity:.065},{from:[-.26,.65,-.44],to:[.22,.02,.06],rTop:.08,rBot:.23,opacity:.058},{from:[-.18,.66,-.46],to:[.3,.02,.14],rTop:.09,rBot:.25,opacity:.06},{from:[-.08,.64,-.45],to:[.38,.02,.1],rTop:.095,rBot:.26,opacity:.056},{from:[.02,.66,-.44],to:[.46,.04,.04],rTop:.082,rBot:.22,opacity:.052},{from:[.14,.62,-.42],to:[.52,.06,-.02],rTop:.07,rBot:.19,opacity:.048},{from:[-.38,.56,-.4],to:[-.02,.01,.18],rTop:.065,rBot:.18,opacity:.05},{from:[-.12,.58,-.42],to:[.26,.01,.2],rTop:.072,rBot:.2,opacity:.046},{from:[.24,.54,-.38],to:[.54,.02,.12],rTop:.055,rBot:.16,opacity:.042}];for(const y of A){const B=new D(...y.from),k=new D(...y.to),he=new D().subVectors(k,B),ne=he.length(),V=new D().addVectors(B,k).multiplyScalar(.5),q=new st(y.rTop,y.rBot,ne,28,1,!0),X=E(y.opacity),O=new L(q,X);O.position.copy(V),O.quaternion.setFromUnitVectors(new D(0,-1,0),he.clone().normalize()),C.add(O)}const v=[{pos:[-.14,.34,-.35],size:[1.24,.72],rot:[0,.06,0],opacity:.064,phase:0},{pos:[.02,.32,-.26],size:[1.18,.66],rot:[.04,-.04,0],opacity:.054,phase:.85},{pos:[.04,.26,-.11],size:[1.14,.58],rot:[.08,.03,0],opacity:.044,phase:1.7},{pos:[.06,.21,.05],size:[1.08,.5],rot:[.12,-.02,0],opacity:.035,phase:2.55}],R=new et;R.name="GodRayCurtainPlanesGroup";for(const y of v){const B=new Gt(y.size[0],y.size[1],1,1),k=S(y.opacity,y.phase),he=new L(B,k);he.position.set(...y.pos),he.rotation.set(...y.rot),R.add(he)}C.add(R),e.add(C);const F=2e3,H=new Float32Array(F*3),z=new Float32Array(F),Y=new Float32Array(F);for(let y=0;y<F;y++)H[y*3+0]=(Math.random()-.5)*1.14,H[y*3+1]=.01+Math.random()*.54,H[y*3+2]=(Math.random()-.5)*.64,z[y]=Math.random()*Math.PI*2,Y[y]=.65+Math.random()*1.65;const j=new Lt;j.setAttribute("position",new tn(H,3)),j.setAttribute("aPhase",new tn(z,1)),j.setAttribute("aScale",new tn(Y,1));const Q={uTime:{value:0},uIntensity:{value:t},uOpacity:{value:.44},uMicPos:{value:x}},_e=new Qt({uniforms:Q,transparent:!0,opacity:.44,depthWrite:!1,blending:Hn,vertexShader:`
      attribute float aPhase;
      attribute float aScale;
      uniform float uTime;
      uniform vec3 uMicPos;
      varying float vTwinkle;
      varying float vBlueBlend;
      void main() {
        vec3 pos = position;
        // Gentle golden-hour convection drift
        pos.x += sin(uTime * 0.32 + aPhase) * 0.012;
        pos.y += cos(uTime * 0.24 + aPhase * 1.3) * 0.009;
        pos.z += sin(uTime * 0.29 + aPhase * 0.7) * 0.011;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        float distToMic = length(pos - uMicPos);
        vBlueBlend = smoothstep(0.18, 0.03, distToMic);
        vTwinkle = 0.45 + 0.55 * sin(uTime * 2.1 + aPhase * 3.0);

        gl_PointSize = clamp((13.5 * aScale) / max(0.14, -mvPosition.z), 1.2, 8.5);
      }
    `,fragmentShader:`
      uniform float uIntensity;
      uniform float uOpacity;
      varying float vTwinkle;
      varying float vBlueBlend;
      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float d = length(uv);
        if (d > 0.5) discard;

        // Soft circular bokeh disc falloff
        float bokeh = smoothstep(0.5, 0.08, d);
        vec3 goldCol = vec3(0.98, 0.78, 0.44);
        vec3 blueCol = vec3(0.22, 0.58, 0.96);
        vec3 col = mix(goldCol, blueCol, vBlueBlend);

        float alpha = bokeh * vTwinkle * uOpacity * clamp(uIntensity * 0.65, 0.0, 2.2);
        gl_FragColor = vec4(col, alpha);
      }
    `}),Z=new fd(j,_e);Z.name="GoldenDustMotes2000",e.add(Z),i.add(e);const W=new Ve(395019),de=new Ve(3811609),oe=new Ve(6045990),ge=new Ve;let ie=-1,Ce=-1,J=-1;function le(){a.visible&&(a.shadow.needsUpdate=!0),h.shadow.needsUpdate=!0}function N(y,B={},k=null,he=null,ne=i,V=null){const q=B.sunIntensity??B.sunbeamIntensity??0,X=B.lampIntensity??1.15,O=B.micGlowIntensity??.85,P=q>.005;C.visible=P,P&&(w.uTime.value=y,w.uIntensity.value=q);const ce=(B.showDustMotes??!1)&&P;if(Z.visible=ce,ce&&(Q.uTime.value=y,Q.uIntensity.value=q),Math.abs(q-ie)>1e-5||Math.abs(X-Ce)>1e-5||Math.abs(O-J)>1e-5){const ye=ie>.005;ie=q,Ce=X,J=O,a.visible=P,s.visible=P,r.visible=P,l.visible=P,P&&!ye&&(a.shadow.needsUpdate=!0),a.intensity=.85*q,o.intensity=.045+.025*X+.42*q,o.color.setHex(1843768),o.groundColor.setHex(591622),s.intensity=.5*q,r.intensity=.24*q,l.intensity=.22*q,h.intensity=2.4*X,f.intensity=.45*X,p.intensity=.45,_.visible=!1,g.opacity=0,b.intensity=0,b.visible=!1,u.intensity=.48*O,k&&(k.toneMappingExposure=.74+.07*q+.06*X);const se=ne||i;if(se){if(q<=2.25){const I=Ke.clamp(q/2.25,0,1);ge.lerpColors(W,de,I)}else{const I=Ke.clamp((q-2.25)/2.75,0,1);ge.lerpColors(de,oe,I)}se.background&&se.background.isColor?se.background.copy(ge):se.background=ge.clone(),se.fog&&(se.fog.color&&se.fog.color.copy(ge),se.fog.density!==void 0&&(se.fog.density=.018))}V&&typeof V.updateLightingMaterials=="function"&&V.updateLightingMaterials(q,X)}else k&&(k.toneMappingExposure=.74+.07*q+.06*X);he&&(he.strength=B.bloomStrength??.06,he.radius=.24,he.threshold=1.12)}return N(0,{sunIntensity:t,lampIntensity:n,showDustMotes:!1},null,null,i,null),{atmosphereGroup:e,sunLight:a,hemiLight:o,windowGlowLight:s,goldenFillLight:r,kbBacklight:p,rimLight:l,roomFillLight:c,lampKeyLight:h,lampGlowPoint:f,micPointLight:b,micSpotLight:u,micAuraCone:_,sunbeamGroup:C,sunbeamsGroup:M,godRayCurtainGroup:R,dustPoints:Z,requestShadowMapUpdate:le,updateAtmosphere:N,update:N}}let Pi=null,bl=!1;function di(i,e,t=!1){const n=Array.isArray(e)?e:[e];(async()=>{for(const o of n)try{const a=await fetch(o,{method:"HEAD"});if(!a.ok||(a.headers.get("content-type")||"").includes("text/html"))continue;const r=new Image;r.crossOrigin="anonymous",await new Promise((l,c)=>{r.onload=l,r.onerror=c,r.src=o}),i.dispose(),i.image=r,t&&(i.colorSpace=zt),i.needsUpdate=!0;return}catch{}})()}function E1(i=!1){if(Pi)return i&&!bl&&(bl=!0,di(Pi.oakWoodAlbedoTex,["/assets/textures/oak_wood_2k.png?v=5.3","/assets/textures/oak_wood_4k.png?v=5.3"],!0),di(Pi.oakWoodNormalTex,["/assets/textures/oak_wood_normal_2k.png?v=5.3","/assets/textures/oak_wood_normal.png?v=5.3"],!1),di(Pi.oakWoodRoughnessTex,["/assets/textures/oak_wood_roughness_2k.png?v=5.3","/assets/textures/oak_wood_roughness.png?v=5.3"],!1),di(Pi.micFoamAlbedoTex,"/assets/textures/mic_foam_v4_albedo_2k.png?v=5.2",!0),di(Pi.micFoamNormalTex,"/assets/textures/mic_foam_v4_normal_2k.png?v=5.2",!1),di(Pi.micFoamRoughnessTex,"/assets/textures/mic_foam_v4_roughness_2k.png?v=5.2",!1)),Pi;const e=512,t=256,n=document.createElement("canvas");n.width=e,n.height=t;const o=n.getContext("2d"),a=o.createImageData(e,t),s=a.data,r=document.createElement("canvas");r.width=e,r.height=t;const l=r.getContext("2d"),c=l.createImageData(e,t),d=c.data;for(let _e=0;_e<t;_e++)for(let Z=0;Z<e;Z++){const W=(_e*e+Z)*4,de=Math.sin(Z*12.9898+_e*78.233)*43758.5453,oe=de-Math.floor(de)-.5,ge=Ke.clamp(.5+oe*.04,.45,.55),ie=Ke.clamp(.5+oe*.04,.45,.55);s[W+0]=Math.round(ge*255),s[W+1]=Math.round(ie*255),s[W+2]=254,s[W+3]=255;const Ce=Ke.clamp(.68+oe*.06,.6,.76),J=Math.round(Ce*255);d[W+0]=J,d[W+1]=J,d[W+2]=J,d[W+3]=255}o.putImageData(a,0,0),l.putImageData(c,0,0);const{colorTex:h}=Ud(),f=h&&h.image?h.image:document.createElement("canvas"),p=new Ut(f);p.colorSpace=zt,p.wrapS=Rt,p.wrapT=Rt,p.anisotropy=16;const x=new Ut(n);x.wrapS=Rt,x.wrapT=Rt,x.anisotropy=16;const b=new Ut(r);b.wrapS=Rt,b.wrapT=Rt,b.anisotropy=16;const m=512,u=512,g=document.createElement("canvas");g.width=m,g.height=u;const _=g.getContext("2d"),w=_.createImageData(m,u),E=w.data,S=document.createElement("canvas");S.width=m,S.height=u;const C=S.getContext("2d"),M=C.createImageData(m,u),A=M.data,v=document.createElement("canvas");v.width=m,v.height=u;const R=v.getContext("2d"),F=R.createImageData(m,u),H=F.data;function z(_e,Z){const W=Math.sin(_e*.28+Math.cos(Z*.24)*1.9),de=Math.cos(Z*.31-Math.sin(_e*.27)*1.8),oe=Math.sin((_e+Z)*.52)*Math.cos((_e-Z)*.48),ge=Math.sin(_e*12.9898+Z*78.233)*43758.5453,ie=ge-Math.floor(ge);return Math.abs(W*de)*.65+Math.abs(oe)*.25+ie*.1}for(let _e=0;_e<u;_e++)for(let Z=0;Z<m;Z++){const W=(_e*m+Z)*4,de=z(Z,_e),oe=z(Z+1,_e),ge=z(Z,_e+1),ie=Math.round(18+de*24);E[W+0]=ie,E[W+1]=ie+2,E[W+2]=ie+6,E[W+3]=255;const Ce=(oe-de)*2.6,J=(ge-de)*2.6,le=Ke.clamp(.5+Ce*.5,.04,.96),N=Ke.clamp(.5+J*.5,.04,.96);A[W+0]=Math.round(le*255),A[W+1]=Math.round(N*255),A[W+2]=235,A[W+3]=255;const y=Math.round(Ke.clamp(.96-de*.05,.88,.99)*255);H[W+0]=y,H[W+1]=y,H[W+2]=y,H[W+3]=255}_.putImageData(w,0,0),C.putImageData(M,0,0),R.putImageData(F,0,0);const Y=new Ut(g);Y.colorSpace=zt,Y.wrapS=Rt,Y.wrapT=Rt,Y.repeat.set(1,1),Y.anisotropy=8;const j=new Ut(S);j.wrapS=Rt,j.wrapT=Rt,j.repeat.set(1,1),j.anisotropy=8;const Q=new Ut(v);return Q.wrapS=Rt,Q.wrapT=Rt,Q.repeat.set(1,1),Q.anisotropy=8,i&&(bl=!0,di(p,["/assets/textures/oak_wood_2k.png?v=5.3","/assets/textures/oak_wood_4k.png?v=5.3"],!0),di(x,["/assets/textures/oak_wood_normal_2k.png?v=5.3","/assets/textures/oak_wood_normal.png?v=5.3"],!1),di(b,["/assets/textures/oak_wood_roughness_2k.png?v=5.3","/assets/textures/oak_wood_roughness.png?v=5.3"],!1),di(Y,"/assets/textures/mic_foam_v4_albedo_2k.png?v=5.2",!0),di(j,"/assets/textures/mic_foam_v4_normal_2k.png?v=5.2",!1),di(Q,"/assets/textures/mic_foam_v4_roughness_2k.png?v=5.2",!1)),Pi={oakWoodAlbedoTex:p,oakWoodNormalTex:x,oakWoodRoughnessTex:b,micFoamAlbedoTex:Y,micFoamNormalTex:j,micFoamRoughnessTex:Q},Pi}let Sl=null;function h0(){if(Sl)return Sl;const i=512,e=256,t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"#03050a"),o.addColorStop(.35,"#050810"),o.addColorStop(.7,"#070b14"),o.addColorStop(1,"#080d18"),n.fillStyle=o,n.fillRect(0,0,i,e);const a=n.createRadialGradient(i*.28,e*.62,10,i*.28,e*.62,i*.34);a.addColorStop(0,"rgba(218, 162, 106, 0.18)"),a.addColorStop(.55,"rgba(162, 114, 72, 0.09)"),a.addColorStop(1,"rgba(8, 13, 24, 0.0)"),n.fillStyle=a,n.fillRect(0,0,i,e);const s=n.createRadialGradient(i*.72,e*.6,10,i*.72,e*.6,i*.34);s.addColorStop(0,"rgba(245, 172, 98, 0.22)"),s.addColorStop(.5,"rgba(176, 120, 72, 0.10)"),s.addColorStop(1,"rgba(8, 13, 24, 0.0)"),n.fillStyle=s,n.fillRect(0,0,i,e),n.fillStyle="rgba(4, 6, 12, 0.78)",n.fillRect(14,Math.round(e*.21),i-28,Math.round(e*.085)),n.fillStyle="rgba(185, 140, 96, 0.09)",n.fillRect(14,Math.round(e*.295),i-28,Math.round(e*.035));const r=[[.09,.14,.12],[.29,.1,.1],[.56,.16,.11],[.76,.12,.09]];for(const[c,d,h]of r){const f=Math.round(i*c),p=n.createLinearGradient(f-12,0,f+18,0);p.addColorStop(0,"rgba(220, 185, 145, 0.0)"),p.addColorStop(.35,`rgba(225, 188, 148, ${h})`),p.addColorStop(.65,`rgba(180, 145, 110, ${h*.65})`),p.addColorStop(1,"rgba(220, 185, 145, 0.0)"),n.fillStyle=p,n.fillRect(f-12,Math.round(e*d),30,Math.round(e*.68))}n.fillStyle="#04060b",n.fillRect(0,0,i,10),n.fillRect(0,e-10,i,10),n.fillRect(0,0,10,e),n.fillRect(i-10,0,10,e),n.fillRect(Math.round(i*.48)-5,0,10,e),n.strokeStyle="rgba(255, 178, 108, 0.08)",n.lineWidth=1.5,n.strokeRect(11,11,Math.round(i*.48)-17,e-22),n.strokeRect(Math.round(i*.48)+6,11,i-Math.round(i*.48)-17,e-22);const l=new Ut(t);return l.colorSpace=zt,l.anisotropy=8,Sl=l,l}let yl=null;function C1(i,e,t,n=2.25){const r=Array.from({length:168},()=>new Array(276).fill(null)),l=(ne,V,q)=>{const X=Math.round(ne),O=Math.round(V);X>=0&&X<276&&O>=0&&O<168&&(r[O][X]=q)},c=(ne,V,q,X,O)=>{const P=Math.round(ne*3),ce=Math.round(V*3),Me=Math.round((q+1)*3)-1,ye=Math.round((X+1)*3)-1;for(let se=ce;se<=ye;se++)for(let I=P;I<=Me;I++)l(I,se,O)},d=(ne,V)=>{const q=ne.map(([ye,se])=>[ye*3,se*3]);let X=275,O=0,P=167,ce=0;for(const[ye,se]of q)ye<X&&(X=ye),ye>O&&(O=ye),se<P&&(P=se),se>ce&&(ce=se);X=Math.max(0,Math.floor(X)),O=Math.min(275,Math.ceil(O)),P=Math.max(0,Math.floor(P)),ce=Math.min(167,Math.ceil(ce));const Me=q.length;for(let ye=P;ye<=ce;ye++)for(let se=X;se<=O;se++){const I=se+.5,T=ye+.5;let $=!1;for(let ae=0,Re=Me-1;ae<Me;Re=ae++){const we=q[ae][0],Ge=q[ae][1],Oe=q[Re][0],je=q[Re][1];Ge>T!=je>T&&I<(Oe-we)*(T-Ge)/(je-Ge+1e-9)+we&&($=!$)}$&&l(se,ye,V)}},h=(ne,V,q,X,O)=>{const P=Math.max(Math.abs(q-ne),Math.abs(X-V),1)*3*2;for(let ce=0;ce<=P;ce++){const Me=(ne+(q-ne)*ce/P)*3,ye=(V+(X-V)*ce/P)*3;for(let se=0;se<3;se++)for(let I=0;I<3;I++)l(Math.floor(Me)+I,Math.floor(ye)+se,O)}},f="#22242e",p="#161820",x="#484c5c",b="#e42424",m="#a51418",u="#f2f5fa",g="#bcc4d2",_="#00e8ff",w="#008cb4",E="#700a12",S="#a20e18",C="#d81822",M="#f43030",A="#ff7660",v="#ffbca8",R="#f8faff",F="#cad2e0",H="#e6b222",z="#1e222c",Y="#363e4c",j="#566072",Q="#8490a6",_e="#0e1016",Z="#181b23",W="#2a2f3a",de="#a4700c",oe="#eeb41c",ge="#ffe05c",ie="#d2dae8",Ce="#0a0c12",J="#249cff",le="#ff6e24",N="#ffffff",y="#a5f2ff",B="#ff182c";c(8,43,83,44,f),c(8,45,83,46,p),c(8,43,83,43,x);for(let ne=8;ne<=83;ne++){const V=Math.floor((ne-8)/5)%2,q=V===0?b:u,X=V===0?m:g;c(ne,47,ne,48,q),c(ne,49,ne,49,X)}c(6,50,85,50,_),c(8,51,83,51,w);for(let ne=72;ne<108;ne++)for(let V=33;V<66;V++){const q=(V/3-16.5)/5.2,X=(ne/3-29.8)/5.6,O=q*q+X*X;O<=1&&(l(V,ne,O>.68?_e:Z),O>.45&&O<=.72&&X<-.2&&l(V,ne,W))}d([[9,34],[25,42],[39,41],[23,32]],z),h(9,35,25,42,j),h(25,42,35,41,Y),d([[56,17],[59,17],[61,24],[58,24]],z),d([[67,19],[70,19],[72,26],[69,26]],z);for(let ne=156;ne<240;ne++){const V=ne/3,q=(V-52)/27,X=Math.round((11+q*5)*3);for(let O=0;O<3;O++)l(ne,X+O,R);for(let O=3;O<6;O++)l(ne,X+O,q>.8?F:R);for(let O=6;O<9;O++)l(ne,X+O,q>.25&&q<.7?Q:j);for(let O=9;O<12;O++)l(ne,X+O,Y);for(let O=12;O<15;O++)l(ne,X+O,z);if(V>=75)for(let O=15;O<18;O++)l(ne,X+O,z)}d([[48,19],[66,21],[69,26],[50,26]],j);for(let ne=0;ne<4;ne++)h(50+ne,20+ne,64+ne,21+ne,ne%2===0?z:Q);d([[50,25],[76,26],[79,31],[79,37],[52,37]],C),d([[53,25],[67,25],[69,27],[55,27]],R),d([[56,27],[70,27],[71,28],[57,28]],H),d([[58,28],[76,28],[77,30],[58,30]],M),h(61,29,73,29,A),c(78,30,79,34,z),c(79,31,79,33,B),c(77,35,79,36,F),d([[41,20],[50,20],[51,28],[39,28]],"#241c20"),h(40,23,46,24,"#443438");for(let ne=54;ne<78;ne++)for(let V=105;V<129;V++){const q=(V/3-38.5)/3.2,X=(ne/3-21.8)/3.5,O=q*q+X*X;O>=.42&&O<=1.05&&l(V,ne,X>0?z:j)}d([[29,22],[36,19],[42,23],[38,28],[29,25]],Y),d([[29,22],[36,19],[39,21],[32,24]],j),c(37,23,37,23,Q),c(38,23,38,23,F);for(let ne=21;ne<66;ne++)for(let V=114;V<159;V++){const q=(V/3-45)/6.8,X=(ne/3-14.5)/6.8;if((q-X*.08)*(q-X*.08)+X*X<=1){let P=R;(X>.55||q>.65)&&(P=F),X<-.42&&q+.08>=-.24&&q+.08<=.14&&(P=C,Math.abs(q+.05)<.12&&X<-.72&&(P=v)),l(V,ne,P)}}for(let ne=33;ne<57;ne++)for(let V=114;V<147;V++){const q=V/3,X=ne/3,O=(q-45)/6.8,P=(X-14.5)/6.8;(O-P*.08)*(O-P*.08)+P*P<=.98&&O<.38&&P>=-.45&&P<=.48&&X>=11+Math.max(0,(q-42)*.35)&&X<=17.5+Math.max(0,(q-43)*.2)&&l(V,ne,Ce)}c(48,17,49,17,z),c(41,14,41,15,J),c(45,15,45,15,le),h(41,20,50,20,F),d([[9,33],[29,22],[40,28],[25,41]],C),d([[9,33],[29,22],[32,23],[12,34]],M),d([[22,39],[40,28],[42,31],[25,41]],S),d([[9,33],[25,41],[25,42],[9,35]],E),d([[10,32],[14,30],[17,32],[13,34]],Y),d([[11,32],[14,31],[16,32],[13,33]],N),c(12,32,12,32,y),d([[18,38],[22,36],[26,38],[22,41]],Y),d([[19,38],[22,37],[25,38],[22,40]],N),c(21,39,21,39,y);const k=(ne,V)=>[25+ne*4.5*.8+V*4.8*-.82,29+ne*4.5*.58+V*4.8*.57];d([k(.16,-.96),k(.52,-.96),k(.52,1.08),k(.16,1.08)],R),d([k(-.96,.06),k(.76,.06),k(.76,.34),k(-.96,.34)],R),d([k(-.96,.06),k(.16,-.96),k(.52,-.96),k(.52,-.62),k(-.58,.34),k(-.96,.34)],R),d([k(-.52,.05),k(.15,-.58),k(.15,.05)],C),d([[38,28],[58,27],[61,38],[38,39]],C),d([[40,30],[56,29],[57,33],[40,34]],M),d([[43,31],[52,30],[53,32],[43,33]],A),c(46,31,49,31,v),c(40,35,58,36,S),c(43,37,59,38,R),c(43,39,59,39,F);const he=(ne,V,q,X)=>{const O=Math.floor((V-X-1)*3),P=Math.ceil((V+X+2)*3),ce=Math.floor((ne-q-1)*3),Me=Math.ceil((ne+q+2)*3);for(let ye=O;ye<=P;ye++)for(let se=ce;se<=Me;se++){const I=se/3,T=ye/3,$=(I-(ne-1.4))/q,ae=(T-V)/X;$*$+ae*ae<=1.02&&(l(se,ye,ae<.2?Z:_e),ae>-.85&&ae<-.35&&$<-.45&&l(se,ye,W))}for(let ye=O;ye<=P;ye++)for(let se=ce;se<=Me;se++){const I=se/3,T=ye/3,$=(I-ne)/q,ae=(T-V)/X,Re=$*$+ae*ae;if(Re<=1)if(Re>.5)l(se,ye,Re>.78?_e:Z);else if(Re<=.09)l(se,ye,ie);else{const we=Math.atan2(ae,$),Ge=Math.cos(we*6);Re>.38?l(se,ye,ae<0?oe:de):Ge>.15?l(se,ye,ae<-.1?ge:oe):l(se,ye,_e)}}};he(35.5,36.5,6.2,6.8),he(66.5,34.8,6.8,7.4),i.save();for(let ne=0;ne<168;ne++){const V=Math.round(t+ne*n),q=Math.round(t+(ne+1)*n),X=Math.max(1,q-V);for(let O=0;O<276;O++){const P=r[ne][O];if(P){const ce=Math.round(e+O*n),Me=Math.round(e+(O+1)*n);i.fillStyle=P,i.fillRect(ce,V,Math.max(1,Me-ce),X)}}}i.restore()}function R1(){if(yl)return yl;const i=2048,e=1152,t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),o=new Ut(t);o.colorSpace=zt,o.minFilter=mn,o.magFilter=mn,o.anisotropy=8;const a=[{name:"Geneviève",time:"00:48.12",color:"#ffca28"},{name:"Jay",time:"00:49.85",color:"#00e5ff"},{name:"Vamsi",time:"00:52.10",color:"#ec6ea9"},{name:"Jack",time:"00:52.30",color:"#ff5252"},{name:"Paige",time:"00:53.48",color:"#26e658"},{name:"Omar",time:"00:53.75",color:"#42a5f5"}];function s(){n.save(),n.fillStyle="#000000",n.fillRect(0,0,i,e);const r=114;n.save(),n.translate(i*.5,r),n.transform(1,0,-.18,1,0,0),n.font='44px "Press Start 2P", "Courier New", monospace',n.textAlign="center",n.textBaseline="alphabetic",n.fillStyle="#240802",n.fillText("DESK RACER HIGH SCORES",4,4);const l=n.createLinearGradient(0,-44,0,4);l.addColorStop(0,"#ff5510"),l.addColorStop(.45,"#ff9e22"),l.addColorStop(.78,"#ffe082"),l.addColorStop(1,"#ffffff"),n.fillStyle=l,n.shadowColor="rgba(255, 110, 24, 0.36)",n.shadowBlur=12,n.fillText("DESK RACER HIGH SCORES",0,0),n.restore();const c=2.25,d=Math.round(276*c),h=Math.round((i-d)*.5);C1(n,h,142,c);const p=520,x=1528,b=598,m=78;n.font='38px "Press Start 2P", "Courier New", monospace',n.textBaseline="alphabetic";for(let u=0;u<a.length;u++){const g=a[u],_=b+u*m;n.save(),n.fillStyle=g.color,n.shadowColor=g.color,n.shadowBlur=8,n.textAlign="left",n.fillText(g.name,p,_),n.textAlign="right",n.fillText(g.time,x,_),n.restore()}n.restore(),o.needsUpdate=!0}return s(),typeof document<"u"&&document.fonts&&(Promise.all([document.fonts.load('44px "Press Start 2P"'),document.fonts.load('38px "Press Start 2P"')]).then(()=>{s()}).catch(()=>{}),document.fonts.ready&&document.fonts.ready.then(()=>{s()}).catch(()=>{})),yl=o,o}function P1(){const i=new et;return i.name="DeskContactShadowGroup",{contactShadowGroup:i,contactShadowPlane:null}}function I1(i){const e=new et;e.name="DeskDioramaGroup";const{colorTex:t}=Ud();r1();const{oakWoodAlbedoTex:n,oakWoodNormalTex:o,oakWoodRoughnessTex:a,micFoamAlbedoTex:s,micFoamNormalTex:r,micFoamRoughnessTex:l}=E1(),{contactShadowGroup:c,contactShadowPlane:d}=P1(),h=new Ee({map:n||t,normalMap:o,normalScale:new Ne(.04,.04),roughnessMap:a,roughness:.74,metalness:.01}),f=new Ee({color:1908774,roughness:.34,metalness:.78}),p=new Ee({color:3488581,roughness:.28,metalness:.84}),x=new Ee({color:1382172,roughness:.58,metalness:.12}),b=new Ee({color:2632499,roughness:.85,metalness:.02}),m=new Ee({color:16184300,roughness:.24,metalness:.05}),u=new Ee({color:15105576,roughness:.32,metalness:.04}),g=new Ee({color:12145426,roughness:.35,metalness:.04}),_=new et;_.name="oak_desk_tabletop";const w=new Le(1.1,.025,.6),E=new L(w,h);E.position.set(0,-.0125,0),E.receiveShadow=!0,E.castShadow=!0,_.add(E);const S=new L(new Le(.96,.028,.44),f);S.position.set(0,-.039,-.02),_.add(S);for(const xe of[-.42,.42]){const We=new L(new Le(.055,.45,.075),f);We.position.set(xe,-.26,-.02),_.add(We)}const C=new et;C.name="GoldenHourWindowBackdrop",C.position.set(.04,.32,-.44),C.visible=!1;const M=new Ee({name:"Mat_GoldenHourWindow",color:660262,roughness:.88,metalness:0,emissive:new Ve(462365),emissiveIntensity:.28}),A=new L(new Gt(.96,.42),M);A.position.set(0,.18,-.018),C.add(A);for(let xe=0;xe<7;xe++){const We=new L(new Le(.92,.008,.028),M);We.position.set(0,.06+xe*.048,0),We.rotation.x=.38,C.add(We)}_.add(C),e.add(_);const v=new et;v.name="boyata_laptop_stand",v.position.set(-.36,0,-.07),v.rotation.y=Ke.degToRad(12);const R=new L(new Le(.215,.006,.185),f);R.position.set(0,.003,.01),R.castShadow=!0,R.receiveShadow=!0,v.add(R);const F=new L(new Le(.085,.125,.012),f);F.position.set(0,.055,-.025),F.rotation.x=.52,F.castShadow=!0,v.add(F);const H=new L(new Le(.085,.115,.012),f);H.position.set(0,.118,-.015),H.rotation.x=-.46,H.castShadow=!0,v.add(H);const z=new et;z.position.set(0,.158,0),z.rotation.x=Ke.degToRad(14);const Y=new L(new Le(.26,.006,.215),f);Y.castShadow=!0,Y.receiveShadow=!0,z.add(Y);for(const[xe,We]of[[-.09,-.07],[.09,-.07],[-.09,.07],[.09,.07]]){const at=new L(new Le(.042,.003,.026),b);at.position.set(xe,.0045,We),z.add(at)}for(const xe of[-.085,.085]){const We=new L(new Le(.024,.018,.014),f);We.position.set(xe,.01,.103),We.castShadow=!0,z.add(We)}v.add(z),e.add(v);const j=new et;j.name="ginger_cat_figurine",j.position.set(-.166,0,-.108),j.scale.set(1.6,1.6,1.6),j.rotation.y=Ke.degToRad(14);const Q=new L(new At(.026,28,24),u);Q.scale.set(1.05,1.18,.98),Q.position.set(0,.026,0),Q.castShadow=!0,Q.receiveShadow=!0,j.add(Q);const _e=new L(new At(.021,24,20),m);_e.scale.set(.88,1.05,.65),_e.position.set(0,.025,.012),j.add(_e);const Z=new L(new At(.022,28,24),u);Z.scale.set(1.12,.96,1.02),Z.position.set(0,.055,.004),Z.castShadow=!0,j.add(Z);for(const xe of[-.007,.007]){const We=new L(new At(.0085,16,16),m);We.position.set(xe,.05,.021),j.add(We)}const W=new Ee({color:16745880,roughness:.3}),de=new L(new At(.0032,12,12),W);de.position.set(0,.054,.026),j.add(de);const oe=new Ee({color:1119e3,roughness:.08,metalness:.2});for(const xe of[-.0095,.0095]){const We=new L(new At(.0038,14,14),oe);We.position.set(xe,.059,.022),j.add(We)}for(const[xe,We]of[[-.014,.32],[.014,-.32]]){const at=new L(new $n(.009,.018,16),u);at.position.set(xe,.072,.002),at.rotation.z=We,at.castShadow=!0,j.add(at)}for(const xe of[-.011,.011]){const We=new L(new At(.0085,16,14),m);We.scale.set(1,.65,1.3),We.position.set(xe,.006,.022),j.add(We)}const ge=new L(new Un(.016,.0052,12,24,Math.PI*1.15),g);ge.position.set(.014,.012,-.02),ge.rotation.x=Math.PI/2,j.add(ge),e.add(j);const ie=new et;ie.name="lg_ultragear_monitor",ie.position.set(.01,0,-.245);for(const[xe,We]of[[.55,-.055],[-.55,.055]]){const at=new L(new Le(.14,.012,.026),x);at.position.set(We,.006,.018),at.rotation.y=xe,at.castShadow=!0,at.receiveShadow=!0,ie.add(at)}const Ce=new L(new Le(.048,.28,.036),x);Ce.position.set(0,.14,-.025),Ce.castShadow=!0,ie.add(Ce);const J=new L(new Le(.052,.014,.04),new Ee({color:14229034,roughness:.35,metalness:.5}));J.position.set(0,.19,-.025),ie.add(J);const le=.075+.365/2,N=new L(new Le(.614,.365,.024),x);N.position.set(0,le,0),N.castShadow=!0,N.receiveShadow=!0,ie.add(N);const y=R1(),B=[];let k=!1;function he(xe,We){xe&&("clearcoat"in xe&&(xe.clearcoat=0),"clearcoatRoughness"in xe&&(xe.clearcoatRoughness=1),"specularIntensity"in xe&&(xe.specularIntensity=0),We?(xe.map=y,xe.emissiveMap=y,xe.color&&xe.color.setHex(66052),xe.emissive?xe.emissive.setHex(16777215):xe.emissive=new Ve(16777215),xe.emissiveIntensity=.95,xe.roughness=.88,xe.metalness=.03,xe.envMapIntensity=.08):(xe.map=null,xe.emissiveMap=null,xe.color&&xe.color.setHex(857380),xe.emissive?xe.emissive.setHex(66e4):xe.emissive=new Ve(66e4),xe.emissiveIntensity=.22,xe.roughness=.86,xe.metalness=.04,xe.envMapIntensity=.1),xe.needsUpdate=!0)}function ne(xe){const We=!!xe;k=We;for(const at of B)he(at,We)}function V(xe){!xe||xe.userData._hasMonitorSubtleReflection||(xe.userData._hasMonitorSubtleReflection=!0,xe.onBeforeCompile=We=>{We.vertexShader=`varying vec3 vScreenWorldPos;
varying vec3 vScreenWorldNormal;
`+We.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vScreenWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
           vScreenWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),We.fragmentShader=`varying vec3 vScreenWorldPos;
varying vec3 vScreenWorldNormal;
`+We.fragmentShader.replace("#include <dithering_fragment>",`vec3 V = normalize(cameraPosition - vScreenWorldPos);
           vec3 N = normalize(vScreenWorldNormal);
           float frontFaceMask = smoothstep(0.35, 0.75, N.z);
           float ndotv = clamp(dot(N, V), 0.0, 1.0);
           float fresnel = 0.05 + 0.28 * pow(1.0 - ndotv, 2.4);
           // View-dependent reflection vector off the front monitor glass
           vec3 R = reflect(-V, vec3(0.0, 0.0, 1.0));
           // Soft satin specular reflection lobes from the scene's actual light sources:
           // 1) Warm Key-Light Desk Lamp on the right (0.35, 0.35, -0.09)
           vec3 toLamp = normalize(vec3(0.35, 0.35, -0.09) - vScreenWorldPos);
           float lampSpec = pow(max(0.0, dot(R, toLamp)), 3.2);
           // 2) Electric-Blue Fifine Mic RGB Ring (-0.03, 0.11, -0.08) & Cyan G915 Keyboard (-0.15, 0.02, 0.12)
           vec3 toMic = normalize(vec3(-0.03, 0.11, -0.08) - vScreenWorldPos);
           float micSpec = pow(max(0.0, dot(R, toMic)), 2.8);
           vec3 toKb = normalize(vec3(-0.15, 0.02, 0.14) - vScreenWorldPos);
           float kbSpec = pow(max(0.0, dot(R, toKb)), 2.6);
           // 3) Subtle diagonal satin-glass sheen across the 27" IPS panel
           float diagCoord = (vScreenWorldPos.x - 0.01) * 1.35 + (vScreenWorldPos.y - 0.255) * 1.15;
           float diagBand = exp(-pow((diagCoord + 0.06) / 0.24, 2.0)) * 0.55
                          + exp(-pow((diagCoord - 0.18) / 0.16, 2.0)) * 0.30;
           vec3 glassSheen = vec3(0.024, 0.036, 0.062) * (0.25 + 0.65 * diagBand)
                           + vec3(0.085, 0.048, 0.020) * lampSpec
                           + vec3(0.018, 0.062, 0.125) * (micSpec * 0.65 + kbSpec * 0.45);
           gl_FragColor.rgb = mix(vec3(0.010, 0.012, 0.018), gl_FragColor.rgb + glassSheen * (0.45 + 0.85 * fresnel), frontFaceMask);
           #include <dithering_fragment>`)})}const q=new Ee({name:"Mat_MonitorScreen",color:857380,emissive:new Ve(66e4),emissiveIntensity:.22,roughness:.22,metalness:.12,envMapIntensity:.16});V(q),B.push(q),he(q,k);const X=new L(new Gt(.598,.348),q);X.position.set(0,le,.0125),ie.add(X);const O=new L(new Le(.072,.024,.028),x);O.position.set(-.14,.45,.012),ie.add(O);const P=new L(new st(.008,.008,.006,18),p);P.rotation.x=Math.PI/2,P.position.set(-.14,.45,.027),ie.add(P);const ce=new L(new At(.0022,8,8),new Nt({color:3331915}));ce.position.set(-.118,.45,.027),ie.add(ce),e.add(ie);const Me=new Ee({name:"Mat_ElectricBlueLED",color:56575,emissive:new Ve(694527),emissiveIntensity:2.35,roughness:.16,metalness:.06}),ye=new Ee({name:"Mat_FifineYokeBlueReflect",color:1067152,emissive:new Ve(686335),emissiveIntensity:.95,roughness:.22,metalness:.65}),se=new Ee({name:"Mat_FoamWindscreen",color:2369327,map:s,normalMap:r,normalScale:new Ne(.58,.58),roughnessMap:l,roughness:.96,metalness:.01}),I=new Ee({name:"Mat_FifineAnodizedBlack",color:1447966,roughness:.4,metalness:.38}),T=new Ee({name:"Mat_FifineSilverTrim",color:13686237,roughness:.24,metalness:.86});function $({halfWidth:xe=.025,cornerRadius:We=.0132,zStart:at=-.048,zEnd:ht=.052,frontDomeLength:qe=.01,rearBevelLength:ut=.002}){const wt=new Le(1,1,1,22,22,24),Ct=wt.attributes.position,an=wt.attributes.normal,An=wt.attributes.uv,fn=Math.max(.001,xe-We),Qn=.5*(at+ht),De=Math.max(1e-5,.5*(ht-at)),vt=Math.max(6e-4,Math.min(De*.85,qe)),$t=Math.max(6e-4,Math.min(De*.85,ut)),ei=Math.max(5e-4,vt*.82),ft=Math.max(5e-4,$t),Xt=28,jt=(St,kt,Wt)=>{const Tn=Math.abs(St)-fn,un=Math.abs(kt)-fn,li=Math.hypot(Math.max(Tn,0),Math.max(un,0))+Math.min(Math.max(Tn,un),0)-We,Bn=Math.min(1,(St*St+kt*kt)/Math.max(1e-6,xe*xe)),ci=ht-vt*.18*Bn;if(Wt>=Qn){const Ei=li+ei,oo=Wt-(ci-ei);return Math.hypot(Math.max(Ei,0),Math.max(oo,0))+Math.min(Math.max(Ei,oo),0)-ei}const ti=li+ft,mi=at+ft-Wt;return Math.hypot(Math.max(ti,0),Math.max(mi,0))+Math.min(Math.max(ti,mi),0)-ft},qt=25e-5;for(let St=0;St<Ct.count;St++){const kt=Ct.getX(St)*2,Wt=Ct.getY(St)*2,Tn=Ct.getZ(St)*2,un=an.getX(St);an.getY(St);const li=an.getZ(St),Bn=kt*kt,ci=Wt*Wt,ti=Tn*Tn,mi=kt*Math.sqrt(Math.max(0,1-ci*.5-ti*.5+ci*ti/3)),Ei=Wt*Math.sqrt(Math.max(0,1-ti*.5-Bn*.5+ti*Bn/3)),oo=Tn*Math.sqrt(Math.max(0,1-Bn*.5-ci*.5+Bn*ci/3));let ki=mi*xe,gi=Ei*xe,Vi=oo*De;const jn=Math.hypot(ki,gi,Vi)||1;ki/=jn,gi/=jn,Vi/=jn;let vi=jn;for(let x0=0;x0<6;x0++){const qd=ki*vi,Yd=gi*vi,$d=Qn+Vi*vi,Zd=jt(qd,Yd,$d);vi-=Zd*.92}const xi=ki*vi,_i=gi*vi,Mi=Qn+Vi*vi;Ct.setXYZ(St,xi,_i,Mi);const m0=jt(xi+qt,_i,Mi)-jt(xi-qt,_i,Mi),g0=jt(xi,_i+qt,Mi)-jt(xi,_i-qt,Mi),v0=jt(xi,_i,Mi+qt)-jt(xi,_i,Mi-qt),Fr=Math.hypot(m0,g0,v0)||1;an.setXYZ(St,m0/Fr,g0/Fr,v0/Fr),Math.abs(li)>.5?An.setXY(St,(xi+xe)*Xt,(_i+xe)*Xt):Math.abs(un)>.5?An.setXY(St,(Mi-at)*Xt,(_i+xe)*Xt):An.setXY(St,(xi+xe)*Xt,(Mi-at)*Xt)}return Ct.needsUpdate=!0,an.needsUpdate=!0,An.needsUpdate=!0,wt.computeBoundingSphere(),wt}function ae(xe,We,at,ht,qe){const ut=new D().subVectors(We,xe),dt=ut.length(),Et=new D().addVectors(xe,We).multiplyScalar(.5),wt=ut.clone().normalize(),Ct=new D(0,1,0),an=new D().crossVectors(Ct,wt).normalize(),An=new D().crossVectors(wt,an).normalize(),fn=new Ft().makeBasis(an,An,wt),Qn=new Jn().setFromRotationMatrix(fn),De=new L(new Le(at,ht,dt),qe);return De.position.copy(Et),De.quaternion.copy(Qn),De.castShadow=!0,De.receiveShadow=!0,{mesh:De,mid:Et,quat:Qn,len:dt,right:an,trueUp:An,forward:wt}}function Re(){const xe=new et;xe.name="FifineAm8BoomMicGroup";const We=new D(.245,.015,-.285),at=new D(.11,.105,-.14),ht=new D(-.025,.105,-.045),qe=new ri(Ke.degToRad(10),Ke.degToRad(-28),0,"YXZ"),ut=new Jn().setFromEuler(qe),Et=new D(0,-.048,-.035).clone().applyQuaternion(ut).add(ht),wt=new L(new st(.016,.02,.036,24),I);wt.position.set(We.x,.018,We.z),wt.castShadow=!0,wt.receiveShadow=!0,xe.add(wt);const Ct=new L(new st(.0125,.0125,.016,20),p);Ct.position.set(We.x,.04,We.z),Ct.castShadow=!0,xe.add(Ct);const an=new D(We.x,.038,We.z),An=ae(an,at,.019,.016,I);xe.add(An.mesh);const fn=new L(new st(.0135,.0135,.038,28),I);fn.position.copy(at),fn.castShadow=!0,fn.receiveShadow=!0,xe.add(fn);const Qn=new L(new st(.0126,.0126,.0026,28),T);Qn.position.set(at.x,at.y+.0195,at.z),Qn.castShadow=!0,xe.add(Qn);const De=ae(at,Et,.018,.015,I);xe.add(De.mesh);const vt=new L(new Le(.01,.002,De.len*.88),x);vt.position.copy(De.mid).addScaledVector(De.trueUp,.0076),vt.quaternion.copy(De.quat),xe.add(vt);for(const gi of[.32,.68]){const Vi=new D().lerpVectors(at,Et,gi),jn=new L(new Le(.0195,.0165,.012),x);jn.position.copy(Vi),jn.quaternion.copy(De.quat),jn.castShadow=!0,xe.add(jn)}const $t=new et;$t.name="FifineAm8MicHeadAssembly",$t.position.copy(ht),$t.quaternion.copy(ut);const ei=$({halfWidth:.0252,cornerRadius:.0132,zStart:-.001,zEnd:.052,frontDomeLength:.011,rearBevelLength:.002}),ft=new L(ei,se);ft.name="FifineAm8Windscreen",ft.castShadow=!0,ft.receiveShadow=!0,$t.add(ft);const Xt=$({halfWidth:.0242,cornerRadius:.0128,zStart:-.003,zEnd:0,frontDomeLength:0,rearBevelLength:0}),jt=new L(Xt,x);$t.add(jt);const qt=$({halfWidth:.0249,cornerRadius:.013,zStart:-.042,zEnd:-.002,frontDomeLength:.001,rearBevelLength:.001}),St=new L(qt,I);St.name="FifineAm8RearBody",St.castShadow=!0,St.receiveShadow=!0,$t.add(St);const kt=$({halfWidth:.0247,cornerRadius:.0129,zStart:-.0468,zEnd:-.0418,frontDomeLength:0,rearBevelLength:0}),Wt=new L(kt,Me);Wt.name="MicBlueLedRing",$t.add(Wt);const Tn=$({halfWidth:.0244,cornerRadius:.0128,zStart:-.0495,zEnd:-.0468,frontDomeLength:0,rearBevelLength:.0015}),un=new L(Tn,I);$t.add(un);const li=new L(new st(.0042,.0042,.003,16),I);li.position.set(0,.0255,-.016),$t.add(li);for(const gi of[-1,1]){const Vi=gi*.0268,jn=new L(new st(.0092,.0092,.0065,24),I);jn.rotation.z=Math.PI/2,jn.position.set(Vi,-.001,-.021),jn.castShadow=!0,$t.add(jn);const vi=new L(new st(.0095,.0095,.0014,24),T);vi.rotation.z=Math.PI/2,vi.position.set(Vi+gi*.0022,-.001,-.021),$t.add(vi);const xi=new D(gi*.0258,-.001,-.021),_i=new D(gi*.0258,-.034,-.035),Mi=ae(xi,_i,.0042,.014,I);$t.add(Mi.mesh)}const Bn=new L(new Le(.0558,.0045,.02),I);Bn.position.set(0,-.0345,-.035),Bn.castShadow=!0,Bn.receiveShadow=!0,$t.add(Bn);const ci=new L(new Le(.046,.0012,.017),ye);ci.position.set(0,-.032,-.036),$t.add(ci);const ti=new L(new st(.0078,.0078,.0045,20),T);ti.position.set(0,-.039,-.035),$t.add(ti);const mi=new L(new st(.0068,.0082,.012,20),I);mi.position.set(0,-.045,-.035),mi.castShadow=!0,$t.add(mi);const Ei=new vo([new D(0,-.012,-.049),new D(0,-.022,-.064),new D(.004,-.036,-.06),new D(.01,-.042,-.042)]),oo=new zo(Ei,16,.0024,10,!1),ki=new L(oo,x);return ki.castShadow=!0,$t.add(ki),xe.add($t),{group:xe,blueLedRing:Wt}}const{group:we,blueLedRing:Ge}=Re();we.name="boom_arm_blue_mic",e.add(we);const Oe=new et;Oe.name="WhiteKeyLightLamp",Oe.userData.legacyName="white_key_light_lamp",Oe.position.set(.355,0,-.095);const je=new Ee({name:"Mat_LampMatteWhite",color:16052198,roughness:.82,metalness:.03,emissive:new Ve(16774108),emissiveIntensity:.05}),Je=new L(new st(.09,.0925,.016,40),je);Je.position.set(0,.008,0),Je.castShadow=!0,Je.receiveShadow=!0,Oe.add(Je);const Fe=new L(new st(.0095,.011,.36,24),je);Fe.position.set(0,.18,0),Fe.castShadow=!0,Fe.receiveShadow=!0,Oe.add(Fe);const Be=new et;Be.position.set(0,.365,.012),Be.rotation.y=Ke.degToRad(-24),Be.rotation.x=Ke.degToRad(16);const be=new L(new Oo(.09,.1,16,32),je);be.rotation.z=Math.PI/2,be.scale.set(1,1,.32),be.castShadow=!0,Be.add(be);const Ae=new Ee({name:"Mat_LampWarmDiffuser",color:16777215,emissive:new Ve(16774626),emissiveIntensity:1.05,roughness:.28,metalness:.02}),Pe=new L(new Oo(.082,.096,14,32),Ae);Pe.rotation.z=Math.PI/2,Pe.scale.set(1,1,.12),Pe.position.set(0,0,.016),Be.add(Pe),Oe.add(Be),e.add(Oe);const Xe=new et;Xe.name="logitech_g915_keyboard",Xe.position.set(-.161,0,.135);const K=new L(new Le(.475,.011,.15),x);K.position.set(0,.0055,0),K.castShadow=!0,K.receiveShadow=!0,Xe.add(K);const ke=new L(new Le(.473,.004,.148),p);ke.position.set(0,.013,0),ke.castShadow=!0,ke.receiveShadow=!0,Xe.add(ke);const He=new Ee({name:"Mat_Switch_Housing",color:689407,emissive:new Ve(51455),emissiveIntensity:2.4,roughness:.25,metalness:.1}),Qe=new L(new Le(.448,.0022,.112),He);Qe.position.set(0,.0152,.005),Xe.add(Qe);const me=new L(new st(.0048,.0048,.0022,16),new Ee({color:16758861,emissive:new Ve(16754726),emissiveIntensity:1.85}));me.position.set(-.145,.0158,-.058),Xe.add(me);const re=new L(new st(.0055,.0055,.036,20),p);re.rotation.z=Math.PI/2,re.position.set(.195,.0165,-.058),re.castShadow=!0,Xe.add(re);const ze=21,Ze=6,ot=ze*Ze,nt=new Le(.0165,.0065,.0155),bt=new Ee({name:"Mat_Keycap_Legend_UV",color:1448224,roughness:.42,metalness:.18,emissive:new Ve(58879),emissiveIntensity:2.6}),Ot=new Zi(nt,bt,ot);Ot.castShadow=!0,Ot.receiveShadow=!0;const nn=new Kt,hn=new Ve;let on=0;for(let xe=0;xe<Ze;xe++)for(let We=0;We<ze;We++){const at=-.215+We*.0212,ht=-.044+xe*.0195;nn.position.set(at,.0185,ht),xe===5&&We>=5&&We<=9?nn.scale.set(We===7?4.8:.001,1,1):nn.scale.set(1,1,1),nn.updateMatrix(),Ot.setMatrixAt(on,nn.matrix),We===0?hn.setHex(1893119):xe>=2&&xe<=3&&We>=2&&We<=4?hn.setHex(2681087):hn.setHex(1843757),Ot.setColorAt(on,hn),on++}Ot.instanceMatrix.needsUpdate=!0,Ot.instanceColor&&(Ot.instanceColor.needsUpdate=!0),Xe.add(Ot),e.add(Xe);const Rn=new et;Rn.name="razer_mat_and_mouse";const Mn=new L(new Le(.336,.003,.261),new Ee({color:1250845,roughness:.48,metalness:.15}));Mn.position.set(.325,.0015,.135),Mn.receiveShadow=!0,Rn.add(Mn);const xt=new L(new Le(.337,.0018,.262),new Ee({color:1579810,roughness:.55,metalness:.12}));xt.position.set(.325,9e-4,.135),Rn.add(xt);const Dt=new et;Dt.name="RazerMatAndGamingMouse",Dt.position.set(.285,.003,.115),Dt.rotation.y=Ke.degToRad(-10);const Ht=new Ee({name:"Mat_MouseShell_Matte",color:1447965,roughness:.52,metalness:.12}),cn=new Ee({name:"Mat_MouseRubber_Grip",color:1053206,roughness:.82,metalness:.04}),wn=new Ee({name:"Mat_MouseGloss_Trim",color:2040361,roughness:.24,metalness:.18}),dn=new L(new At(.036,28,22),Ht);dn.scale.set(.98,.58,1.78),dn.position.set(0,.018,0),dn.castShadow=!0,dn.receiveShadow=!0,Dt.add(dn);const Pn=new L(new At(.016,18,14),cn);Pn.scale.set(.85,.32,1.85),Pn.position.set(-.026,.007,.004),Dt.add(Pn);const Kn=new L(new st(.0065,.0065,.005,18),wn);Kn.rotation.z=Math.PI/2,Kn.position.set(0,.035,-.028),Dt.add(Kn),Rn.add(Dt),e.add(Rn);const Sn=new et;Sn.name="DeskNightGlowGroup";const Nn=.325,yn=.135,Fn=.1704,Xn=.1329,en=.0052,On=.002,U=[],ve=[{cx:Nn+Fn-en,cz:yn-Xn+en,a0:-Math.PI*.5,a1:0},{cx:Nn+Fn-en,cz:yn+Xn-en,a0:0,a1:Math.PI*.5},{cx:Nn-Fn+en,cz:yn+Xn-en,a0:Math.PI*.5,a1:Math.PI},{cx:Nn-Fn+en,cz:yn-Xn+en,a0:Math.PI,a1:Math.PI*1.5}];for(let xe=0;xe<4;xe++){const We=ve[xe],at=ve[(xe+1)%4],ht=12;for(let dt=0;dt<=ht;dt++){const Et=We.a0+(We.a1-We.a0)*(dt/ht);U.push(new D(We.cx+Math.cos(Et)*en,On,We.cz+Math.sin(Et)*en))}const qe=U[U.length-1],ut=new D(at.cx+Math.cos(at.a0)*en,On,at.cz+Math.sin(at.a0)*en);for(let dt=1;dt<=8;dt++)U.push(new D().lerpVectors(qe,ut,dt/9))}const Ie=new vo(U,!0,"centripetal",.05),fe=new zo(Ie,180,.00225,16,!0),pe=new Qt({name:"Mat_MousepadCyanRGB",toneMapped:!1,vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float ndv = clamp(abs(dot(normalize(vNormal), normalize(vViewDir))), 0.0, 1.0);
        float coreFactor = pow(ndv, 1.75);
        vec3 outerCyan = vec3(0.0, 0.88, 1.0);
        vec3 innerCore = vec3(0.55, 0.98, 1.0);
        vec3 col = mix(outerCyan, innerCore, coreFactor);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),Ye=new L(fe,pe);Ye.name="MousepadCyanRgbBorderTube",Ye.castShadow=!1,Ye.receiveShadow=!1,Sn.add(Ye);const G={uColor:{value:new Ve(60415)},uIntensity:{value:1}},ee=new Qt({uniforms:G,toneMapped:!1,transparent:!0,depthWrite:!1,blending:Hn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:`
      varying vec2 vLocalXZ;
      void main() {
        // PlaneGeometry is rotated -90 deg X so local (position.x, -position.y) maps to (X, Z)
        vLocalXZ = vec2(position.x, -position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec2 vLocalXZ;
      void main() {
        // Signed distance to rounded rectangle (half-size = (0.1704, 0.1329), corner radius = 0.0055)
        vec2 b = vec2(0.1649, 0.1274);
        vec2 d = abs(vLocalXZ) - b;
        float sdf = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - 0.0055;

        // Strong vivid cyan border glow right along sdf = 0
        float core = exp(-abs(sdf) * 240.0) * 0.95;
        // Saturated cyan-blue halo bleeding 34mm onto the surrounding oak desk (strictly sdf >= 0)
        float outerDist = max(0.0, sdf);
        float outerFade = 1.0 - smoothstep(0.0, 0.034, outerDist);
        float outerHalo = (sdf >= 0.0) ? (outerFade * exp(-outerDist * 68.0) * 0.65) : 0.0;
        // Subtle 10mm inward cyan rim reflection on the black mouse mat border (strictly sdf < 0)
        float innerDist = max(0.0, -sdf);
        float innerFade = 1.0 - smoothstep(0.0, 0.010, innerDist);
        float innerRim = (sdf < 0.0) ? (innerFade * exp(-innerDist * 180.0) * 0.32) : 0.0;

        float totalGlow = core + outerHalo + innerRim;

        vec3 borderCyan = vec3(0.0, 0.94, 1.0);
        vec3 haloCyanBlue = vec3(0.0, 0.58, 1.0);
        float coreBlend = exp(-abs(sdf) * 150.0);
        vec3 col = mix(haloCyanBlue, borderCyan, coreBlend);

        float alpha = clamp(totalGlow * uIntensity, 0.0, 0.94);
        if (alpha < 0.003) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `}),ue=new L(new Gt(.46,.38),ee);ue.rotation.x=-Math.PI/2,ue.position.set(Nn,45e-5,yn),ue.name="MousepadCyanDeskGlowPlane",ue.castShadow=!1,ue.receiveShadow=!1,Sn.add(ue);const te=h0();M.map=te,M.emissiveMap=te,M.color.setHex(16777215),M.emissive.setHex(16777215),M.emissiveIntensity=.45,M.fog=!1,Ae.color.setHex(16765598),Ae.emissive.setHex(16750134),Ae.emissiveIntensity=1.65;const Se=[Me],Te=[M],Ue=[Ae];let $e=1.15,tt=-1,ct=-1;function gt(xe=0,We=1.15){if($e=We,Math.abs(xe-tt)<1e-4&&Math.abs(We-ct)<1e-4)return;tt=xe,ct=We;for(const ht of Te)ht&&(ht.map=te,ht.emissiveMap=te,ht.fog=!1,ht.color&&ht.color.setHex(16777215),ht.emissive&&ht.emissive.setHex(16777215),ht.emissiveIntensity=.42+.1*We,ht.needsUpdate=!0);const at=.35+1.25*We;for(const ht of Ue)ht&&(ht.color&&ht.color.setHex(16764832),ht.emissive&&ht.emissive.setHex(16750134),ht.emissiveIntensity=at)}function pt(xe,We=!1){if(!xe||!xe.attributes||!xe.attributes.position)return;const at=xe.attributes.position,ht=at.count,qe=xe.attributes.uv;if(!We&&qe&&qe.count===ht){let dt=!1;const Et=qe.getX(0),wt=qe.getY(0);for(let Ct=1;Ct<Math.min(ht,64);Ct++)if(Math.abs(qe.getX(Ct)-Et)>.001||Math.abs(qe.getY(Ct)-wt)>.001){dt=!0;break}if(dt)return}const ut=new Float32Array(ht*2);for(let dt=0;dt<ht;dt++)ut[dt*2+0]=(at.getX(dt)+.7)/1.4,ut[dt*2+1]=(at.getZ(dt)+.35)/.7;xe.setAttribute("uv",new tn(ut,2)),xe.attributes.uv.needsUpdate=!0}function it(xe){if(!xe||!xe.attributes||!xe.attributes.position)return;xe.computeBoundingBox();const We=xe.boundingBox,at=Math.max(1e-4,We.max.x-We.min.x),ht=Math.max(1e-4,We.max.y-We.min.y),qe=xe.attributes.position,ut=qe.count,dt=new Float32Array(ut*2);for(let Et=0;Et<ut;Et++)dt[Et*2+0]=Ke.clamp((qe.getX(Et)-We.min.x)/at,0,1),dt[Et*2+1]=Ke.clamp((qe.getY(Et)-We.min.y)/ht,0,1);xe.setAttribute("uv",new tn(dt,2)),xe.attributes.uv.needsUpdate=!0}function It(xe){if(!xe)return;xe.parent&&Bd(xe.parent);const We=new Ve(16750134),at=new Ve(1993727);xe.traverse(qe=>{if((qe.name==="LogitechG915Keyboard"||qe.name==="logitech_g915_keyboard")&&!qe.userData._kbShiftedLeft){let ut=!1,dt=qe.parent;for(;dt;){if(dt.userData&&dt.userData._kbShiftedLeft){ut=!0;break}dt=dt.parent}ut||(qe.userData._kbShiftedLeft=!0,qe.position.x-=.076,qe.updateMatrixWorld(!0))}});function ht(qe){!qe||qe.userData._hasPropTrackGlowHook||(qe.userData._hasPropTrackGlowHook=!0,qe.onBeforeCompile=ut=>{ut.uniforms.uTrackLedTime=gn.uTime,ut.uniforms.uTrackLedIntensity=gn.uIntensity,ut.uniforms.uTrackGlowFieldTex=gn.uGlowFieldTex,ut.vertexShader=`varying vec3 vPropWorldPos;
varying vec3 vPropWorldNormal;
`+ut.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
             vPropWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vPropWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),ut.fragmentShader=`uniform float uTrackLedTime;
           uniform float uTrackLedIntensity;
           uniform sampler2D uTrackGlowFieldTex;
           varying vec3 vPropWorldPos;
           varying vec3 vPropWorldNormal;
           vec3 evalTrackLedPalette(float phaseNorm, float timeSec) {
             float p = fract(phaseNorm - timeSec * 0.055 + 0.08);
             float seg = p * 4.0;
             int idx = int(floor(seg));
             float f = smoothstep(0.0, 1.0, fract(seg));
             vec3 cPink   = vec3(1.00, 0.05, 0.55);
             vec3 cPurple = vec3(0.54, 0.03, 1.00);
             vec3 cBlue   = vec3(0.00, 0.54, 1.00);
             vec3 cViolet = vec3(0.66, 0.05, 1.00);
             if (idx == 0) return mix(cPink, cPurple, f);
             if (idx == 1) return mix(cPurple, cBlue, f);
             if (idx == 2) return mix(cBlue, cViolet, f);
             return mix(cViolet, cPink, f);
           }
`+ut.fragmentShader.replace("#include <dithering_fragment>",`vec2 fieldUv = vec2((vPropWorldPos.x - (-0.58)) / 1.16, (vPropWorldPos.z - (-0.34)) / 0.68);
             if (fieldUv.x >= 0.0 && fieldUv.x <= 1.0 && fieldUv.y >= 0.0 && fieldUv.y <= 1.0 && vPropWorldPos.y >= 0.0008 && vPropWorldPos.y <= 0.195) {
               vec4 tField = texture2D(uTrackGlowFieldTex, fieldUv);
               float tWeight = tField.r;
               if (tWeight > 0.01) {
                 float sinP = tField.g * 2.0 - 1.0;
                 float cosP = tField.b * 2.0 - 1.0;
                 float sNorm = atan(sinP, cosP) / 6.2831853 + 0.5;
                 vec3 tCol = evalTrackLedPalette(sNorm, uTrackLedTime);
                 float normalUp = clamp(vPropWorldNormal.y * 0.55 + 0.45, 0.15, 1.0);
                 float hMask = smoothstep(0.0008, 0.004, vPropWorldPos.y) * (1.0 - smoothstep(0.13, 0.195, vPropWorldPos.y));
                 vec3 surfTint = 0.22 + 0.78 * clamp(gl_FragColor.rgb * 2.2, 0.0, 1.0);
                 gl_FragColor.rgb += tCol * surfTint * (pow(tWeight, 1.18) * normalUp * hMask * 0.32 * uTrackLedIntensity);
               }
             }
             #include <dithering_fragment>`)})}if(ht(I),ht(T),xe.traverse(qe=>{if(!qe.isMesh||!qe.material)return;qe.castShadow=!0,qe.receiveShadow=!0,qe.frustumCulled=!0,qe.geometry&&!qe.geometry.boundingSphere&&qe.geometry.computeBoundingSphere();let ut=!1,dt=!1,Et=!1,wt=!1,Ct=!1,an=!1,An=!1,fn=qe;for(;fn;){fn.userData&&fn.userData._isFifineReplacement&&(An=!0);const De=(fn.name||"").toLowerCase();(De.includes("whitekeylightlamp")||De.includes("key_light_lamp")||De.includes("lamp"))&&(ut=!0),(De.includes("razermatandgamingmouse")||De.includes("gamingmouse")||De.includes("mouse"))&&(dt=!0),(De.includes("logitechg915")||De.includes("keyboard"))&&(Et=!0),De.includes("window")&&(wt=!0),(De.includes("monitor")||De.includes("ultragear"))&&(Ct=!0),(De.includes("boomarm")||De.includes("bluemic")||De.includes("mic"))&&(an=!0),fn=fn.parent}if(An)return;if(an){qe.visible=!1,qe.castShadow=!1,qe.receiveShadow=!1;return}if(Et&&qe.geometry&&qe.geometry.attributes&&qe.geometry.attributes.position&&!qe.geometry.userData._gBadgeRemoved){const De=Array.isArray(qe.material)?qe.material[0]&&qe.material[0].name||"":qe.material&&qe.material.name||"";if(De!=="Mat_GunmetalAlu"&&De!=="Mat_Keycap_Side"){qe.geometry.userData._gBadgeRemoved=!0;const vt=qe.geometry.attributes.position,$t=ft=>vt.getX(ft)<-.204&&vt.getZ(ft)<-.044&&vt.getY(ft)>.0139;if(qe.geometry.index){const ft=qe.geometry.index.array,Xt=[];let jt=!1;for(let qt=0;qt+2<ft.length;qt+=3){const St=ft[qt],kt=ft[qt+1],Wt=ft[qt+2];$t(St)||$t(kt)||$t(Wt)?jt=!0:Xt.push(St,kt,Wt)}jt&&qe.geometry.setIndex(Xt)}let ei=!1;for(let ft=0;ft<vt.count;ft++)$t(ft)&&(vt.setXYZ(ft,-.22,.005,-.056),ei=!0);ei&&(vt.needsUpdate=!0,qe.geometry.computeBoundingBox(),qe.geometry.computeBoundingSphere())}}const Qn=Array.isArray(qe.material)?qe.material:[qe.material];for(const De of Qn){if(!De)continue;const vt=De.name||"";if(vt==="Mat_WarmStudioWall"||vt==="Mat_WindowFrame"||vt==="Mat_GoldenHourWindow"||wt){qe.visible=!1,qe.castShadow=!1,qe.receiveShadow=!1;continue}const $t=vt==="Mat_MonitorScreen"||vt==="Mat_MonitorSatinScreen"||Ct&&(qe.name||"").toLowerCase().includes("screen"),ei=vt==="Mat_LampWarmDiffuser"||ut&&(qe.name||"").toLowerCase().includes("diffuser");if(vt!=="Mat_OakWood"&&vt!=="Mat_Keycap_Legend_UV"&&vt!=="Mat_Switch_Housing"&&vt!=="Mat_FoamWindscreen"&&!$t&&!ei&&ht(De),vt==="Mat_RazerMouseMat"||vt==="Mat_MousepadCloth"||vt==="RazerMouseMat"||dt&&vt.toLowerCase().includes("mat")){if(qe.castShadow=!1,qe.receiveShadow=!0,!xe.userData._logoFreeMousepadTex){const ft=document.createElement("canvas");ft.width=512,ft.height=512;const Xt=ft.getContext("2d");Xt.fillStyle="#181a20",Xt.fillRect(0,0,512,512);const jt=Xt.getImageData(0,0,512,512),qt=jt.data;for(let kt=0;kt<qt.length;kt+=4){const Wt=kt>>2&511,Tn=kt>>11&511,un=((Wt*73+Tn*151^Wt*19)&7)-3.5;qt[kt]=Math.max(12,Math.min(38,24+un)),qt[kt+1]=Math.max(14,Math.min(40,26+un)),qt[kt+2]=Math.max(18,Math.min(46,32+un)),qt[kt+3]=255}Xt.putImageData(jt,0,0);const St=new Ut(ft);St.colorSpace=zt,St.wrapS=Vn,St.wrapT=Vn,St.anisotropy=4,xe.userData._logoFreeMousepadTex=St}if(De.map&&De.map!==xe.userData._logoFreeMousepadTex&&De.map.dispose(),De.map=xe.userData._logoFreeMousepadTex,De.color&&De.color.setHex(16777215),De.roughness=.68,De.metalness=.04,De.needsUpdate=!0,qe.geometry&&qe.geometry.attributes&&qe.geometry.attributes.position&&!qe.geometry.userData._cornersRoundedForRgbTube){qe.geometry.userData._cornersRoundedForRgbTube=!0;const ft=qe.geometry.attributes.position,Xt=.325,jt=.135,qt=.1692,St=.1317,kt=.0056,Wt=qt-kt,Tn=St-kt;for(let un=0;un<ft.count;un++)if(ft.getY(un)<=.0038){const Bn=ft.getX(un)-Xt,ci=ft.getZ(un)-jt,ti=Math.max(0,Math.abs(Bn)-Wt),mi=Math.max(0,Math.abs(ci)-Tn),Ei=Math.hypot(ti,mi);if(Ei>kt){const oo=(Wt+ti/Ei*kt)*Math.sign(Bn),ki=(Tn+mi/Ei*kt)*Math.sign(ci);ft.setX(un,Xt+oo),ft.setZ(un,jt+ki)}}ft.needsUpdate=!0,qe.geometry.computeBoundingBox(),qe.geometry.computeBoundingSphere()}continue}if(vt==="Mat_OakWood"){if(qe.geometry&&qe.geometry.attributes&&qe.geometry.attributes.position){const ft=qe.geometry.attributes.position;if(qe.geometry.index){const qt=qe.geometry.index.array,St=[];let kt=!1;for(let Wt=0;Wt+2<qt.length;Wt+=3){const Tn=qt[Wt],un=qt[Wt+1],li=qt[Wt+2];ft.getZ(Tn)<-.315||ft.getY(Tn)>.015||ft.getZ(un)<-.315||ft.getY(un)>.015||ft.getZ(li)<-.315||ft.getY(li)>.015?kt=!0:St.push(Tn,un,li)}kt&&qe.geometry.setIndex(St)}let Xt=!1;for(let jt=0;jt<ft.count;jt++)(ft.getZ(jt)<-.315||ft.getY(jt)>.015)&&(ft.setXYZ(jt,0,-.01,0),Xt=!0);Xt&&(ft.needsUpdate=!0,qe.geometry.computeBoundingBox(),qe.geometry.computeBoundingSphere()),pt(qe.geometry,!0)}qe.castShadow=!1,qe.receiveShadow=!0,De.color&&De.color.setHex(16777215),De.map?De.map.anisotropy=16:De.map=n||t,De.normalMap=null,De.normalScale=new Ne(0,0),De.roughnessMap||(De.roughnessMap=a),De.roughness=.74,De.metalness=.01,De.needsUpdate=!0;continue}if(vt==="Mat_BlackSteel"){De.map=null,De.color&&De.color.setHex(1579552),De.roughness=.36,De.metalness=.82,De.needsUpdate=!0;continue}if(vt==="Mat_MonitorScreen"||vt==="Mat_MonitorSatinScreen"||Ct&&(qe.name||"").toLowerCase().includes("screen")){it(qe.geometry),V(De),B.includes(De)||B.push(De),he(De,k);continue}if(vt==="Mat_Keycap_Legend_UV"){const ft=De.map||De.emissiveMap;if(ft&&ft.image&&!xe.userData._gFreeKeyboardTex){const Xt=ft.image,jt=Xt.width||4096,qt=Xt.height||1536,St=document.createElement("canvas");St.width=jt,St.height=qt;const kt=St.getContext("2d");kt.drawImage(Xt,0,0,jt,qt),kt.fillStyle="#121417",kt.fillRect(0,0,Math.round(jt*.08),Math.round(qt*.22));const Wt=new Ut(St);Wt.colorSpace=zt,Wt.flipY=ft.flipY,Wt.wrapS=ft.wrapS,Wt.wrapT=ft.wrapT,Wt.anisotropy=8,xe.userData._gFreeKeyboardTex=Wt}xe.userData._gFreeKeyboardTex&&(De.map=xe.userData._gFreeKeyboardTex,De.emissiveMap=xe.userData._gFreeKeyboardTex),De.emissive?De.emissive.setHex(58879):De.emissive=new Ve(58879),De.emissiveIntensity=2.6,De.needsUpdate=!0;continue}if(vt==="Mat_Switch_Housing"){De.color&&De.color.setHex(689407),De.emissive?De.emissive.setHex(51455):De.emissive=new Ve(51455),De.emissiveIntensity=2.4,De.needsUpdate=!0;continue}if(dt||vt==="Mat_MouseShell_Matte"||vt==="Mat_MouseRubber_Grip"||vt==="Mat_MouseGloss_Trim"){if(De.color)if(vt==="Mat_MouseRubber_Grip")De.color.setHex(1053206);else if(vt==="Mat_MouseGloss_Trim")De.color.setHex(2040361);else{const ft=.13333333333333333,Xt=37/255,jt=44/255;(De.color.r>ft||De.color.g>Xt||De.color.b>jt)&&De.color.setHex(1447965)}De.emissive&&De.emissive.setHex(0),De.emissiveIntensity=0,De.metalness!==void 0&&(De.metalness=Math.min(De.metalness,.22)),De.roughness!==void 0&&(De.roughness=vt==="Mat_MouseGloss_Trim"?.24:vt==="Mat_MouseRubber_Grip"?.82:Math.max(.45,De.roughness)),De.needsUpdate=!0;continue}if(ut||vt==="Mat_LampWarmDiffuser"||vt==="Mat_LampMatteWhite"||vt==="Mat_LampTrayRecess"){if(vt==="Mat_LampWarmDiffuser"||(qe.name||"").toLowerCase().includes("diffuser"))De.color&&De.color.setHex(16764832),De.emissive&&De.emissive.copy(We),De.emissiveIntensity=.35+1.25*$e,De.roughness=.3,De.metalness=.02,Ue.includes(De)||Ue.push(De);else{const Xt=vt==="Mat_LampTrayRecess";De.color&&De.color.setHex(Xt?13156532:16051424),De.emissive&&De.emissive.copy(We),De.emissiveIntensity=.06,De.roughness=Xt?.55:.78,De.metalness=.03}De.needsUpdate=!0}else vt==="Mat_ElectricBlueLED"?(De.color&&De.color.copy(at),De.emissive&&De.emissive.copy(at),De.emissiveIntensity=1.15,De.roughness=.18,De.needsUpdate=!0,Se.includes(De)||Se.push(De)):vt==="Mat_WhiteOLED"&&(De.emissiveIntensity!==void 0&&(De.emissiveIntensity=Math.min(De.emissiveIntensity,.35)),De.needsUpdate=!0)}}),!xe.userData._hasFifineMicReplacement){xe.userData._hasFifineMicReplacement=!0;const{group:qe}=Re();qe.userData._isFifineReplacement=!0,xe.add(qe),xe.updateMatrixWorld(!0)}}return{root:e,nightGlowGroup:Sn,contactShadowGroup:c,contactShadowPlane:d,micBlueLedRing:Ge,glbMicLedMaterials:Se,goldenWindowMaterials:Te,calibrateDeskPropsGlb:It,updateLightingMaterials:gt,setMonitorHighScoresVisible:ne}}let ka=null,zu=!1;function Va(i,e,t=!0){const n=Array.isArray(e)?e:[e];(async()=>{for(const o of n)try{const a=await fetch(o,{method:"HEAD"});if(!a.ok||(a.headers.get("content-type")||"").includes("text/html"))continue;const r=new Image;r.crossOrigin="anonymous",await new Promise((l,c)=>{r.onload=l,r.onerror=c,r.src=o}),i.dispose(),i.image=r,t&&(i.colorSpace=zt),i.needsUpdate=!0;return}catch{}})()}function L1(i){!i||zu||(zu=!0,Va(i.gemini4CandleLabelTex,["/assets/textures/gemini_4_candle_label_2k.png?v=5.5","/assets/textures/gemini_4_candle_label_2k.png?v=5.4","/assets/textures/gemini_4_candle_label_2k.png"],!0),Va(i.carpetAlbedoTex,["/assets/textures/room_carpet_2k.png?v=5.5","/assets/textures/room_carpet_2k.png?v=5.4","/assets/textures/room_carpet_2k.png"],!0),Va(i.carpetNormalTex,["/assets/textures/room_carpet_normal_2k.png?v=5.5","/assets/textures/room_carpet_normal_2k.png?v=5.4","/assets/textures/room_carpet_normal_2k.png"],!1),Va(i.darkWalnutTex,["/assets/textures/room_walnut_wood_2k.png?v=5.5","/assets/textures/room_walnut_wood_2k.png?v=5.4","/assets/textures/room_walnut_wood_2k.png"],!0),Va(i.windowCityFacadeTex,["/assets/textures/window_city_facade_2k.png?v=5.5","/assets/textures/window_city_facade_2k.png?v=5.4","/assets/textures/window_city_facade_2k.png"],!0))}function Vd(i=!1){if(ka)return i&&L1(ka),ka;const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#0c0b0e",t.fillRect(0,0,1024,1024);const n=140,o=120,a=744,s=784;t.fillStyle="#f6efe2",t.fillRect(n,o,a,s),t.fillStyle="rgba(190, 168, 134, 0.08)";for(let ce=0;ce<180;ce++){const Me=o+ce*37%s;t.fillRect(n,Me,a,2)}t.strokeStyle="#1d1a16",t.lineWidth=6,t.strokeRect(n+24,o+24,a-48,s-48),t.strokeStyle="#b68d40",t.lineWidth=3,t.strokeRect(n+36,o+36,a-72,s-72),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#4a4137",t.font='600 28px "Inter", "Helvetica Neue", sans-serif',t.letterSpacing="6px",t.fillText("PARFUM DE CODE",512,o+118),t.strokeStyle="#b68d40",t.lineWidth=2.5,t.beginPath(),t.moveTo(332,o+158),t.lineTo(692,o+158),t.stroke(),t.fillStyle="#12100e",t.font='800 104px "Georgia", "Times New Roman", serif',t.fillText("GEMINI 4",512,o+292),t.fillStyle="#c29138",t.font='600 30px "Georgia", serif',t.fillText("✦   1 : 87   M I C R O   E D I T I O N   ✦",512,o+392),t.fillStyle="#2b2520",t.font='500 26px "Inter", "Helvetica Neue", sans-serif',t.fillText("GOLDEN HOUR OAK  •  ESPRESSO  •  WARM SILICON",512,o+485),t.fillStyle="#5c5146",t.font='italic 24px "Georgia", serif',t.fillText("Hand-Poured in Mountain View & London",512,o+548),t.strokeStyle="#1d1a16",t.lineWidth=2,t.beginPath(),t.moveTo(260,o+622),t.lineTo(764,o+622),t.stroke(),t.fillStyle="#161310",t.font='700 28px "JetBrains Mono", monospace',t.fillText("1:87 MICRO EDITION  •  240G / 8.5 OZ",512,o+678);const r=new Ut(e);r.colorSpace=zt,r.wrapS=Vn,r.wrapT=Vn,r.anisotropy=16;const l=512,c=512,d=document.createElement("canvas");d.width=l,d.height=c;const h=d.getContext("2d"),f=h.createImageData(l,c),p=f.data,x=document.createElement("canvas");x.width=l,x.height=c;const b=x.getContext("2d"),m=b.createImageData(l,c),u=m.data;for(let ce=0;ce<c;ce++)for(let Me=0;Me<l;Me++){const ye=(ce*l+Me)*4,se=Math.sin(Me*12.9898+ce*78.233)*43758.5453,I=se-Math.floor(se),T=Math.sin(Me*.45)*Math.cos(ce*.45)*.5+.5,$=I*.65+T*.35;p[ye+0]=Math.round(226+$*16),p[ye+1]=Math.round(218+$*16),p[ye+2]=Math.round(204+$*15),p[ye+3]=255;const ae=Ke.clamp(.5+(I-.5)*.22,.35,.65),Re=Ke.clamp(.5+(T-.5)*.22,.35,.65);u[ye+0]=Math.round(ae*255),u[ye+1]=Math.round(Re*255),u[ye+2]=242,u[ye+3]=255}h.putImageData(f,0,0),b.putImageData(m,0,0);const g=new Ut(d);g.colorSpace=zt,g.wrapS=Rt,g.wrapT=Rt,g.repeat.set(8,8),g.anisotropy=8;const _=new Ut(x);_.wrapS=Rt,_.wrapT=Rt,_.repeat.set(8,8),_.anisotropy=8;const w=512,E=512,S=document.createElement("canvas");S.width=w,S.height=E;const C=S.getContext("2d"),M=C.createImageData(w,E),A=M.data;for(let ce=0;ce<E;ce++)for(let Me=0;Me<w;Me++){const ye=(ce*w+Me)*4,se=Math.sin(ce*.14+Math.sin(Me*.035)*4.2)*.5+Math.sin(ce*.42+Me*.02)*.25+.5,I=Math.hypot(Me%256-128,ce%170),T=Math.sin(I*.36)*.18,$=Ke.clamp(se*.75+T,0,1);A[ye+0]=Math.round(45+$*38),A[ye+1]=Math.round(25+$*23),A[ye+2]=Math.round(14+$*14),A[ye+3]=255}C.putImageData(M,0,0);const v=new Ut(S);v.colorSpace=zt,v.wrapS=Rt,v.wrapT=Rt,v.anisotropy=16;const R=1024,F=512,H=document.createElement("canvas");H.width=R,H.height=F;const z=H.getContext("2d"),Y=z.createLinearGradient(0,0,0,F);Y.addColorStop(0,"#ffd899"),Y.addColorStop(.35,"#e8a864"),Y.addColorStop(1,"#9c5a38"),z.fillStyle=Y,z.fillRect(0,0,R,F);for(let ce=40;ce<F;ce+=14)z.fillStyle=ce%28===0?"rgba(125, 62, 36, 0.42)":"rgba(150, 78, 45, 0.36)",z.fillRect(0,ce,R,11);const j=5,Q=3;for(let ce=0;ce<Q;ce++)for(let Me=0;Me<j;Me++){const ye=75+Me*188,se=58+ce*145,I=116,T=98;z.fillStyle="#ead5b4",z.fillRect(ye-8,se-10,I+16,10),z.fillRect(ye-6,se+T,I+12,8),z.fillStyle="#2a2421",z.fillRect(ye,se,I,T);const $=z.createLinearGradient(ye,se,ye+I,se+T);$.addColorStop(0,"#fff0c4"),$.addColorStop(.55,"#f2a852"),$.addColorStop(1,"#593e38"),z.fillStyle=$,z.fillRect(ye+6,se+6,I-12,T-12),z.fillStyle="#2a2421",z.fillRect(ye+I/2-2,se,4,T),z.fillRect(ye,se+T*.48,I,4)}const _e=new Ut(H);_e.colorSpace=zt,_e.anisotropy=8;const Z=document.createElement("canvas");Z.width=256,Z.height=256;const W=Z.getContext("2d");W.fillStyle="#0c1017",W.fillRect(0,0,256,256),W.strokeStyle="#283244",W.lineWidth=6,W.strokeRect(12,12,232,232),W.fillStyle="#7ad4ff",W.font='600 24px "Inter", sans-serif',W.textAlign="center",W.fillText("COMFORT ECO",128,66),W.fillStyle="#ffffff",W.font='700 68px "JetBrains Mono", monospace',W.fillText("21.0°C",128,148),W.fillStyle="#ffaa44",W.font='500 22px "Inter", sans-serif',W.fillText("● HEAT AUTO  46%",128,204);const de=new Ut(Z);de.colorSpace=zt;const oe=document.createElement("canvas");oe.width=256,oe.height=256;const ge=oe.getContext("2d"),ie=ge.createRadialGradient(128,128,18,128,128,124);ie.addColorStop(0,"rgba(24, 16, 10, 0.52)"),ie.addColorStop(.55,"rgba(28, 19, 12, 0.28)"),ie.addColorStop(.85,"rgba(32, 22, 14, 0.08)"),ie.addColorStop(1,"rgba(32, 22, 14, 0.0)"),ge.fillStyle=ie,ge.fillRect(0,0,256,256);const Ce=new Ut(oe),J=512,le=512,N=document.createElement("canvas");N.width=J,N.height=le;const y=N.getContext("2d"),B=y.createImageData(J,le),k=B.data,he=document.createElement("canvas");he.width=J,he.height=le;const ne=he.getContext("2d"),V=ne.createImageData(J,le),q=V.data,X=(ce,Me)=>{let ye=ce*374761393+Me*668265263^1542469173;return ye=(ye^ye>>13)*1274126177,((ye^ye>>16)>>>0)/4294967295};for(let ce=0;ce<le;ce++)for(let Me=0;Me<J;Me++){const ye=(ce*J+Me)*4,se=X(Me,ce)-.5,I=Me>>1&255,T=ce>>1&255,$=I+1&255,ae=T+1&255,Re=(Me&1)*.5,we=(ce&1)*.5,Ge=X(I+101,T+211),Oe=X($+101,T+211),je=X(I+101,ae+211),Je=X($+101,ae+211),Fe=(Ge*(1-Re)+Oe*Re)*(1-we)+(je*(1-Re)+Je*Re)*we-.5,Be=se*6.5+Fe*5;k[ye+0]=Math.round(Ke.clamp(166+Be,152,180)),k[ye+1]=Math.round(Ke.clamp(160+Be*.96,146,174)),k[ye+2]=Math.round(Ke.clamp(150+Be*.92,136,164)),k[ye+3]=255;const be=X(Me+1&511,ce)-X(Me+511&511,ce),Ae=X(Me,ce+1&511)-X(Me,ce+511&511);q[ye+0]=Math.round(Ke.clamp(128+be*18,108,148)),q[ye+1]=Math.round(Ke.clamp(128+Ae*18,108,148)),q[ye+2]=248,q[ye+3]=255}y.putImageData(B,0,0),ne.putImageData(V,0,0);const O=new Ut(N);O.colorSpace=zt,O.wrapS=Rt,O.wrapT=Rt,O.repeat.set(4,4),O.anisotropy=8;const P=new Ut(he);return P.wrapS=Rt,P.wrapT=Rt,P.repeat.set(4,4),P.anisotropy=8,ka={gemini4CandleLabelTex:r,carpetAlbedoTex:g,carpetNormalTex:_,darkWalnutTex:v,windowCityFacadeTex:_e,thermostatTex:de,contactAoTex:Ce,bedFabricAlbedoTex:O,bedFabricNormalTex:P},ka}function qi(i,e,t,n,o,a,s=.68){const r=new Nt({map:i,transparent:!0,opacity:s,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),l=new L(new Gt(o,a),r);return l.rotation.x=-Math.PI/2,l.position.set(e,t,n),l.castShadow=!1,l.receiveShadow=!1,l}function D1(i,e){i.add(qi(e,-1.32,-.728,.635,1.56,2.12,.72)),i.add(qi(e,0,-.728,2.33,.92,.52,.74)),i.add(qi(e,.02,-.728,.46,.58,.58,.68)),i.add(qi(e,-.42,-.728,-.01,.26,.64,.68)),i.add(qi(e,.42,-.728,-.01,.26,.64,.68)),i.add(qi(e,1.04,-.728,.525,.72,1.84,.68)),i.add(qi(e,.24,.0512,2.33,.16,.16,.52)),i.add(qi(e,0,.0512,2.33,.14,.14,.56)),i.add(qi(e,-.24,.0512,2.33,.17,.17,.54))}function U1(i,e=null){if(!i)return;const{gemini4CandleLabelTex:t,carpetAlbedoTex:n,carpetNormalTex:o,darkWalnutTex:a,windowCityFacadeTex:s,bedFabricAlbedoTex:r,bedFabricNormalTex:l}=Vd();i.traverse(c=>{if(!c.isMesh)return;const d=c.name||"",h=c.parent&&c.parent.name||"",f=d.toLowerCase(),p=c.material?Array.isArray(c.material)?c.material:[c.material]:[],x=p.map(u=>u&&u.name?u.name:""),b=f.includes("bed")||f.includes("duvet")||f.includes("pillow")||f.includes("mattress"),m=d.includes("BoucleDeskChair")||h.includes("BoucleDeskChair")||f.includes("chair")||f.includes("boucle")||x.some(u=>u.includes("Boucle")||u.includes("Chair"));if(c.castShadow=!1,c.receiveShadow=!(b||m),c.frustumCulled=!0,c.geometry&&!c.geometry.boundingSphere&&c.geometry.computeBoundingSphere(),!!c.material)for(const u of p){if(!u)continue;const g=u.name||"",_=g.toLowerCase();if(g==="Mat_Gemini4CandleLabel"||_.includes("gemini4candlelabel")||_.includes("candle_label")||f.includes("candle")&&f.includes("label")){u.color&&u.color.setHex(16777215),u.map?u.map.anisotropy=16:u.map=t,u.emissive?u.emissive.setHex(16770232):u.emissive=new Ve(16770232),u.emissiveMap=u.map||t,u.emissiveIntensity=.16,u.roughness=.36,u.metalness=.04,u.needsUpdate=!0;continue}if(g==="Mat_EdisonFilament"||_.includes("edisonfilament")||f.includes("filament")){u.color&&u.color.setHex(16749604),u.emissive?u.emissive.setHex(16749604):u.emissive=new Ve(16749604),u.emissiveIntensity=2.8,u.roughness=.18,u.metalness=.1,e&&!e.filamentMaterials.includes(u)&&e.filamentMaterials.push(u),u.needsUpdate=!0;continue}if(g==="Mat_SmokedBulbGlass"||_.includes("smokedbulbglass")||f.includes("bulb")&&f.includes("glass")){u.color&&u.color.setHex(16756306),u.emissive?u.emissive.setHex(16747556):u.emissive=new Ve(16747556),u.emissiveIntensity=.22,u.transparent=!0,u.opacity=.42,u.roughness=.12,u.metalness=.08,u.depthWrite=!1,u.needsUpdate=!0;continue}if(g==="Mat_DarkWalnut"||_.includes("darkwalnut")||_.includes("walnut")){u.map||(u.map=a,u.color&&u.color.setHex(16777215)),u.roughness=.46,u.metalness=.04,u.needsUpdate=!0;continue}if(g==="Mat_CreamBoucle"||_.includes("creamboucle")||_.includes("boucle")){u.color&&u.color.setHex(16051937),u.normalMap||(u.normalMap=o),u.normalScale=new Ne(.28,.28),u.roughness=.88,u.metalness=0,u.needsUpdate=!0;continue}if(g==="Mat_ChampagneGold"||_.includes("champagnegold")||_.includes("brass")){u.color&&u.color.setHex(13938538),u.metalness=.88,u.roughness=.24,u.needsUpdate=!0;continue}if(g==="Mat_ChairLegOak"||_.includes("chairlegoak")||_.includes("chairnaturaloak")){u.color&&u.color.setHex(9335637),u.roughness=.5,u.metalness=.04,u.needsUpdate=!0;continue}if(g==="Mat_BedGreyFabric"||g==="Mat_BedOatmealFabric"||_.includes("bedgreyfabric")||_.includes("bedoatmealfabric")||_.includes("bedupholstery")){u.color&&u.color.setHex(16777215),u.map=r,u.normalMap=l,u.normalScale=new Ne(.12,.12),u.roughness=.93,u.metalness=0,u.envMapIntensity=.14,u.needsUpdate=!0;continue}if(g==="Mat_CrispWhiteDuvet"||g==="Mat_CrispWhiteLinen"||_.includes("crispwhiteduvet")||_.includes("crispwhitelinen")||_.includes("duvet")||_.includes("mattress")||_.includes("pillow")){u.color&&u.color.setHex(16054268),u.roughness=.82,u.metalness=0,u.envMapIntensity=.12,u.needsUpdate=!0;continue}if(g==="Mat_BedroomCarpet"||_.includes("bedroomcarpet")||_.includes("carpet")){u.map||(u.map=n,u.color&&u.color.setHex(16777215)),u.normalMap||(u.normalMap=o,u.normalScale=new Ne(.28,.28)),u.roughness=.94,u.metalness=0,u.envMapIntensity=.14,u.needsUpdate=!0;continue}if(g==="Mat_WindowCityFacade"||_.includes("windowcityfacade")||_.includes("facade")){const w=h0();u.map&&u.map!==w&&u.map.dispose(),u.emissiveMap&&u.emissiveMap!==w&&u.emissiveMap.dispose(),u.map=w,u.emissiveMap=w,u.fog=!1,u.color&&u.color.setHex(16777215),u.emissive?u.emissive.setHex(16777215):u.emissive=new Ve(16777215),u.emissiveIntensity=.2,u.roughness=.28,u.metalness=.06,e&&!e.facadeMaterials.includes(u)&&e.facadeMaterials.push(u),u.needsUpdate=!0;continue}if(g==="Mat_BedroomPlasterWall"||g==="Mat_BedroomWall"||g==="Mat_BedroomCeiling"||_.includes("plasterwall")||_.includes("bedroomwall")||_.includes("bedroomceiling")){u.color&&u.color.setHex(14207672),u.emissive?u.emissive.setHex(0):u.emissive=new Ve(0),u.emissiveIntensity=0,u.roughness=.88,u.metalness=0,u.envMapIntensity=.12,Io(u,Ji,1),u.needsUpdate=!0;continue}if(g==="Mat_DoorWhite"||g==="Mat_SkirtingWhite"||g==="Mat_WhiteSkirting"||_.includes("doorwhite")||_.includes("skirting")){Io(u,Ji,.52),u.needsUpdate=!0;continue}(g==="Mat_WardrobePaleOak"||g==="Mat_WardrobeTaupeOak"||_.includes("wardrobe"))&&(Io(u,Ji,.45),u.needsUpdate=!0)}})}const Ji={uEdisonGlowScale:{value:1.15}};function Io(i,e=Ji,t=1){var o;if(!i||(o=i.userData)!=null&&o.hasSouthWallOrangeGradient)return;i.userData=i.userData||{},i.userData.hasSouthWallOrangeGradient=!0;const n=Number(t).toFixed(3);i.customProgramCacheKey=()=>`south_wall_edison_3d_bounce_v3_${n}`,i.onBeforeCompile=a=>{a.uniforms.uEdisonGlowScale=e.uEdisonGlowScale,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRoomWallWorldPos;
varying vec3 vRoomWallWorldNormal;`),a.vertexShader=a.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRoomWallWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vRoomWallWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uEdisonGlowScale;
varying vec3 vRoomWallWorldPos;
varying vec3 vRoomWallWorldNormal;`),a.fragmentShader=a.fragmentShader.replace("#include <dithering_fragment>",`{
  float sScale = clamp(uEdisonGlowScale / 1.15, 0.0, 1.8);
  float surfWeight = ${n};

  // Continuous 3D world-space warm orange radiance & bounce field centered at the Edison bulb
  // Evaluates identically across both sides of every wall-to-wall and wall-to-ceiling corner seam!
  vec3 dGlow = vec3(
    (vRoomWallWorldPos.x - (-0.24)) * 0.54,
    (vRoomWallWorldPos.y - 0.25) * 0.65,
    (vRoomWallWorldPos.z - 2.44) * 0.66
  );
  float r3d = length(dGlow);
  float zFalloff = smoothstep(0.65, 2.55, vRoomWallWorldPos.z);

  float core3d = exp(-r3d * r3d * 5.6) * zFalloff;
  float mid3d  = exp(-r3d * r3d * 1.18) * zFalloff;
  float wide3d = exp(-r3d * 0.88) * (zFalloff * zFalloff);

  vec3 edisonLinear = (
    vec3(0.310, 0.035, 0.0018) * wide3d +
    vec3(0.500, 0.094, 0.0045) * mid3d +
    vec3(0.750, 0.265, 0.0280) * core3d
  ) * sScale * surfWeight;

  float glowStrength = clamp((wide3d * 0.78 + mid3d * 0.55 + core3d * 0.45) * surfWeight, 0.0, 0.94);
  // Warm bounce light only ADDS and warms the surface — never darkens gl_FragColor.rgb!
  vec3 warmedWall = max(gl_FragColor.rgb, edisonLinear) + gl_FragColor.rgb * vec3(0.42, 0.16, 0.03) * glowStrength;
  gl_FragColor.rgb = mix(gl_FragColor.rgb, warmedWall, glowStrength);
}
#include <dithering_fragment>`)},i.needsUpdate=!0}function N1(i=44,e=44){const s=new Le(1,1,1,i-1,1,e-1),r=s.attributes.position;for(let l=0;l<r.count;l++){const c=r.getX(l)*2,d=r.getY(l),h=-r.getZ(l)*2,f=c*c,p=h*h,x=1+.095*f*p-.045*(f*(1-p)+p*(1-f)),b=c*.305*x,m=-h*.215*x,u=Math.pow(Math.max(0,1-f),.55)*Math.pow(Math.max(0,1-p),.55),g=-.012*Math.exp(-(f*1.8+p*2.2)),_=.0038*Math.sin(c*5+h*2)*Math.cos(h*4-c*1.5)*u,w=d>=0?.0012+(.082+g)*u+_:-.0012-.052*u;r.setXYZ(l,b,w,m)}return s.computeVertexNormals(),s}function F1(i,e,t){const n=new et;n.name="NeatUpholsteredBed";const o=new L(new Le(1.4,.94,.11),i);o.position.set(-1.32,-.26,-.295),o.receiveShadow=!0,n.add(o);const a=new L(new st(.055,.055,1.4,20),i);a.rotation.z=Math.PI/2,a.position.set(-1.32,.21,-.295),a.receiveShadow=!0,n.add(a);const s=new L(new Le(1.35,.31,1.835),i);s.position.set(-1.32,-.575,.6775),s.receiveShadow=!0,n.add(s);for(const[E,S]of[[-1.94,-.18],[-.7,-.18],[-1.94,1.54],[-.7,1.54]]){const C=new L(new st(.026,.02,.065,12),t);C.position.set(E,-.697,S),n.add(C)}const r=new L(new Le(1.22,.155,1.72),e);r.position.set(-1.32,-.3425,.66),r.receiveShadow=!0,n.add(r);const l=56,c=56,d=-2.015,h=-.625,f=-1.32,p=(h-d)*.5,x=-1.61,b=.045,m=new Gt(h-d,b-x,l,c);m.rotateX(-Math.PI/2);const u=m.attributes.position;for(let E=0;E<u.count;E++){const S=u.getX(E),C=u.getZ(E),M=(S+p)/(h-d),A=1-(C+(b-x)*.5)/(b-x),v=d+M*(h-d),R=x+A*(b-x),F=Math.abs(v-f)/p,H=Math.max(0,(F-.78)/.22),z=Math.max(0,(.12-A)/.12),Y=1-(1-Math.pow(H,1.75))*(1-Math.pow(z,1.75)),j=Math.cos(Math.min(1,F*.9)*(Math.PI*.5)),Q=Math.pow(Math.sin(Ke.clamp((A-.04)/.92,0,1)*Math.PI),.52),_e=.026*j*Q,Z=(.0055*Math.sin(M*3.2*Math.PI+.3)*Math.cos(A*3.8*Math.PI)+.0038*Math.cos(M*5.2*Math.PI+A*2.4*Math.PI)*Math.sin(A*4.8*Math.PI)+.0024*Math.sin((M*7-A*5)*Math.PI))*(1-.65*Y),W=.0075*Math.sin(A*6.5*Math.PI)*Math.pow(H,.8)+.0055*Math.sin(M*6*Math.PI)*Math.pow(z,.8),de=Math.exp(-Math.pow((v- -1.635)/.24,2))+Math.exp(-Math.pow((v- -1.005)/.24,2)),oe=.024*Math.exp(-Math.pow((R- -.055)/.065,2))*(1-.35*H),ge=-.0095*Math.exp(-Math.pow((R- -.178)/.048,2))*(1-.45*H),ie=-.012*Math.exp(-Math.pow((R-.038)/.032,2))*(.55+.45*de),J=-.25+.045*(1-.38*Math.min(1,Math.max(H,z)))+_e+Z+oe+ge+ie+.45*W-.215*Math.pow(Y,1.65),le=v>=f?1:-1,N=v+le*(.0075*Math.sin(A*6.5*Math.PI)*Math.pow(H,.8)+.016*Math.pow(H,1.1)),y=-R+.0055*Math.sin(M*6*Math.PI)*Math.pow(z,.8)+.016*Math.pow(z,1.1);u.setXYZ(E,N,J,y)}m.computeVertexNormals();const g=new L(m,e);g.name="OrganicDrapedWhiteDuvet",g.receiveShadow=!0,n.add(g);const _=N1(44,44),w=[{px:-1.635,yawDeg:4},{px:-1.005,yawDeg:-3.5}];for(const{px:E,yawDeg:S}of w){const C=new L(_,e);C.position.set(E,-.138,-.075),C.rotation.set(Ke.degToRad(28),Ke.degToRad(S),0),C.receiveShadow=!0,n.add(C)}return n}function O1(i,e,t,n){const o=new et;o.name="BoucleDeskChair",o.position.set(.02,-.73,.46),o.rotation.y=Ke.degToRad(-12);const a=new L(new st(.235,.225,.086,40),i);a.position.set(0,.45,0),a.receiveShadow=!1,o.add(a);const s=.218,r=.056,l=Math.PI*.92,c=Math.PI*.5-l*.5,d=new L(new Un(s,r,28,64,l),i);d.rotation.x=Math.PI/2,d.rotation.z=c,d.scale.set(1,1,1.88),d.position.set(0,.705,0),d.receiveShadow=!1,o.add(d);for(const m of[c,c+l]){const u=new L(new At(r,24,20),i);u.scale.set(1,1.88,1),u.position.set(Math.cos(m)*s,.705,Math.sin(m)*s),u.receiveShadow=!1,o.add(u)}const h=s+.064,f=Math.PI*.82,p=Math.PI*.5-f*.5;for(const m of[.665,.745]){const u=new L(new Un(h,.0085,16,48,f),e);u.rotation.x=Math.PI/2,u.rotation.z=p,u.position.set(0,m,0),o.add(u)}for(const m of[p+.05,p+f-.05]){const u=Math.cos(m)*(s+.045),g=Math.sin(m)*(s+.045),_=new L(new Le(.016,.096,.028),e);_.position.set(u,.705,g),_.rotation.y=-m+Math.PI/2,o.add(_);const w=new L(new st(.004,.004,.006,12),n);w.rotation.x=Math.PI/2,w.position.set(Math.cos(m)*(h+.006),.705,Math.sin(m)*(h+.006)),o.add(w)}for(const m of[-1,1]){const u=m*.238,g=.152,_=new L(new st(.011,.012,.365,16),e);_.position.set(u,.615,g),_.rotation.x=.06,_.rotation.z=-m*.06,o.add(_)}const x=[[-.175,-.145,.1,-.1],[.175,-.145,.1,.1],[-.238,.152,-.08,-.08],[.238,.152,-.08,.08]];for(const[m,u,g,_]of x){const w=new L(new st(.018,.012,.425,16),t);w.position.set(m,.2375,u),w.rotation.x=g,w.rotation.z=_,w.receiveShadow=!1,o.add(w);const E=m-_*.21,S=u+g*.21,C=new L(new st(.0125,.0105,.026,16),e);C.position.set(E,.013,S),C.rotation.x=g,C.rotation.z=_,o.add(C)}for(const m of[-.15,.15]){const u=new L(new st(.009,.009,.3,12),t);u.rotation.x=Math.PI/2,u.position.set(m,.22,.005),o.add(u)}const b=new L(new st(.009,.009,.3,12),t);return b.rotation.z=Math.PI/2,b.position.set(0,.22,.005),o.add(b),o}function B1(i,e={}){const t=new et;t.name="RoomEnvironmentGroup";const n=new et;n.name="ProceduralRoomFallbackGroup",t.add(n);const o=new et;o.name="RoomContactAoGroup",t.add(o);const{gemini4CandleLabelTex:a,carpetAlbedoTex:s,carpetNormalTex:r,darkWalnutTex:l,windowCityFacadeTex:c,thermostatTex:d,contactAoTex:h,bedFabricAlbedoTex:f,bedFabricNormalTex:p}=Vd(),x=new Ee({name:"Mat_BedroomCarpet",color:16777215,map:s,normalMap:r,normalScale:new Ne(.28,.28),roughness:.94,metalness:0}),b=new Ee({name:"Mat_BedroomWall",color:14207672,roughness:.88,metalness:0,envMapIntensity:.12});Io(b,Ji,1);const m=new Ee({name:"Mat_BedroomCeiling",color:14207672,roughness:.92,metalness:0,envMapIntensity:.12});Io(m,Ji,1);const u=new Ee({name:"Mat_WhiteSkirting",color:16447733,roughness:.48,metalness:.03,envMapIntensity:.14});Io(u,Ji,.52);const g=new Ee({name:"Mat_BedGreyFabric",color:16777215,map:f,normalMap:p,normalScale:new Ne(.48,.48),roughness:.92,metalness:0,envMapIntensity:.16}),_=new Ee({name:"Mat_CrispWhiteDuvet",color:16054268,normalMap:r,normalScale:new Ne(.1,.1),roughness:.82,metalness:0,envMapIntensity:.12}),w=new Ee({name:"Mat_CreamBoucle",color:16051937,normalMap:r,normalScale:new Ne(.28,.28),roughness:.88,metalness:0}),E=new Ee({name:"Mat_ChairLegOak",color:9335637,roughness:.5,metalness:.04}),S=new Ee({name:"Mat_ChampagneGold",color:13938538,roughness:.24,metalness:.88}),C=new Ee({name:"Mat_WardrobeTaupeOak",color:11971740,roughness:.62,metalness:.04});Io(C,Ji,.45);const M=new Ee({name:"Mat_DarkWalnut",color:16777215,map:l,roughness:.46,metalness:.04}),A=new Ee({name:"Mat_CandleBlackGlass",color:855570,roughness:.12,metalness:.18}),v=new Ee({name:"Mat_Gemini4CandleLabel",color:16777215,map:a,emissive:new Ve(16770232),emissiveMap:a,emissiveIntensity:.16,roughness:.36,metalness:.04}),R=new Ee({name:"Mat_SmokedBulbGlass",color:16756306,emissive:new Ve(16747556),emissiveIntensity:.22,transparent:!0,opacity:.42,roughness:.12,metalness:.08,depthWrite:!1}),F=new Ee({name:"Mat_EdisonFilament",color:16749604,emissive:new Ve(16749604),emissiveIntensity:2.8,roughness:.18,metalness:.1}),H=h0(),z=new Ee({name:"Mat_WindowCityFacade",color:16777215,map:H,emissive:new Ve(16777215),emissiveMap:H,emissiveIntensity:.2,roughness:.28,metalness:.06,fog:!1}),Y=new Ee({name:"Mat_BlackSteel",color:1579552,roughness:.36,metalness:.82}),j={filamentMaterials:[F],facadeMaterials:[z]},Q=new L(new Le(3.54,.04,2.98),x);Q.position.set(-.38,-.75,1.0925),Q.receiveShadow=!0,n.add(Q);const _e=new L(new Le(3.54,.04,2.98),m);_e.position.set(-.38,1.79,1.0925),n.add(_e);const Z=new L(new Le(.04,2.52,2.98),b);Z.position.set(-2.14,.52,1.0925),Z.receiveShadow=!0,n.add(Z);const W=new L(new Le(.04,2.52,2.98),b);W.position.set(1.38,.52,1.0925),W.receiveShadow=!0,n.add(W);const de=new L(new Le(3.54,2.52,.04),b);de.position.set(-.38,.52,2.57),de.receiveShadow=!0,n.add(de);const oe=new L(new Le(1.77,2.5,.22),b);oe.position.set(-1.235,.52,-.475),oe.receiveShadow=!0,n.add(oe);const ge=new L(new Le(.91,.795,.22),b);ge.position.set(.105,-.3325,-.475),ge.receiveShadow=!0,n.add(ge);const ie=new L(new Le(.82,2.5,.22),b);ie.position.set(.97,.52,-.475),ie.receiveShadow=!0,n.add(ie);const Ce=new L(new Le(.91,.015,.22),b);Ce.position.set(.105,1.7625,-.475),Ce.receiveShadow=!0,n.add(Ce);const J=new L(new Le(.908,.016,.212),u);J.position.set(.105,.073,-.474),J.receiveShadow=!0,n.add(J);const le=new L(new Le(.036,1.672,.024),u);le.position.set(-.324,.91,-.562),n.add(le);const N=new L(new Le(.036,1.672,.024),u);N.position.set(.534,.91,-.562),n.add(N);const y=new L(new Le(.894,.036,.024),u);y.position.set(.105,.092,-.562),n.add(y);const B=new L(new Le(.894,.036,.024),u);B.position.set(.105,1.728,-.562),n.add(B);const k=new L(new Le(.01,1.608,.016),Y);k.position.set(-.302,.91,-.568),n.add(k);const he=new L(new Le(.01,1.608,.016),Y);he.position.set(.512,.91,-.568),n.add(he);const ne=new L(new Le(.824,.01,.016),Y);ne.position.set(.105,.112,-.568),n.add(ne);const V=new L(new Le(.824,.01,.016),Y);V.position.set(.105,1.708,-.568),n.add(V);const q=new L(new Le(.042,.014,.016),u);q.position.set(.085,.092,-.546),n.add(q);const X=new L(new Le(.095,.012,.012),u);X.position.set(.118,.098,-.536),n.add(X);const O=new L(new Le(.018,.095,2.915),u);O.position.set(-2.111,-.6825,1.0925),n.add(O);const P=new L(new Le(.018,.095,1.135),u);P.position.set(1.351,-.6825,1.9825),n.add(P);const ce=new L(new Le(2.86,.095,.018),u);ce.position.set(-.69,-.6825,-.356),n.add(ce);const Me=new L(new Le(2.7,.095,.018),u);Me.position.set(-.77,-.6825,2.541),n.add(Me);const ye=new L(new Gt(.84,1.62),z);ye.position.set(.105,.91,-.58),n.add(ye);const se=new et;se.name="StandingDeskFloorLegsExtension";for(const fe of[-.42,.42]){const pe=new L(new Le(.048,.5,.068),Y);pe.position.set(fe,-.46,-.02),pe.receiveShadow=!0,se.add(pe);const Ye=new L(new Le(.072,.022,.52),Y);Ye.position.set(fe,-.719,-.01),Ye.receiveShadow=!0,se.add(Ye)}t.add(se);const I=F1(g,_,M);n.add(I);const T=O1(w,S,E,Y);n.add(T);const $=new et;$.name="BuiltInOakWardrobe";const ae=new L(new Le(.62,2.45,1.78),C);ae.position.set(1.05,.495,.525),ae.receiveShadow=!0,$.add(ae);const Re=new L(new Le(.635,.055,1.795),u);Re.position.set(1.045,1.742,.525),$.add(Re);const we=new L(new Le(.615,.08,1.775),C);we.position.set(1.05,-.69,.525),$.add(we);const Ge=new L(new Le(.62,2.45,.024),C);Ge.position.set(1.05,.495,1.415),Ge.receiveShadow=!0,$.add(Ge);const Oe=new L(new Le(.62,.095,.016),u);Oe.position.set(1.05,-.6825,1.425),$.add(Oe);const je=[-.07,.525,1.12];for(let fe=0;fe<3;fe++){const pe=je[fe],Ye=new L(new Le(.024,2.33,.582),C);Ye.position.set(.735,.505,pe),Ye.receiveShadow=!0,$.add(Ye);const G=fe===0?pe+.24:pe-.24,ee=new L(new Le(.016,.34,.016),Y);ee.position.set(.721,.32,G),$.add(ee)}n.add($);const Je=new et;Je.name="WalnutDresserAndGemini4Vignette";const Fe=new L(new Le(.84,.6,.44),M);Fe.position.set(0,-.26,2.33),Fe.receiveShadow=!0,Je.add(Fe);const Be=new L(new Le(.86,.022,.46),M);Be.position.set(0,.039,2.33),Be.receiveShadow=!0,Je.add(Be);const be=[-.45,-.26,-.07];for(const fe of be){const pe=new L(new Le(.8,.178,.022),M);pe.position.set(0,fe,2.1),pe.receiveShadow=!0,Je.add(pe);const Ye=new L(new l0(.042,.082,24,1,0,Math.PI),M);Ye.rotation.y=Math.PI,Ye.position.set(0,fe-.018,2.087),Je.add(Ye);const G=new L(new st(.0085,.0085,.072,16),S);G.position.set(0,fe+.008,2.081),Je.add(G)}for(const[fe,pe]of[[-.36,2.16],[.36,2.16],[-.36,2.49],[.36,2.49]]){const Ye=new L(new st(.021,.013,.17,14),M);Ye.position.set(fe,-.645,pe),Je.add(Ye);const G=new L(new st(.0145,.013,.04,14),S);G.position.set(fe,-.71,pe),Je.add(G)}const Ae=new et;Ae.name="SpiralPotJadeSucculentGroup",Ae.position.set(.24,.05,2.33);const Pe=new Ee({color:16052456,roughness:.32,metalness:.04}),Xe=new L(new st(.056,.044,.096,24),Pe);Xe.position.set(0,.048,0),Ae.add(Xe);for(let fe=0;fe<5;fe++){const pe=new L(new Un(.051+fe*.001,.0045,10,28),Pe);pe.rotation.x=Math.PI/2+.08,pe.position.set(0,.016+fe*.018,0),Ae.add(pe)}const K=new Ee({color:3894844,roughness:.38,metalness:.04}),ke=22;for(let fe=0;fe<ke;fe++){const pe=fe*2.39996,Ye=.012+Math.sqrt(fe/ke)*.048,G=.105+(1-fe/ke)*.065+fe%3*.012,ee=new L(new At(.021,14,10),K);ee.scale.set(1.35,.42,.82),ee.position.set(Math.cos(pe)*Ye,G,Math.sin(pe)*Ye),ee.rotation.y=-pe,ee.rotation.z=-.35-fe/ke*.35,Ae.add(ee)}Je.add(Ae);const He=new et;He.name="Gemini4ScentedCandleGroup",He.position.set(0,.05,2.33);const Qe=new L(new st(.046,.045,.106,32),A);Qe.position.set(0,.053,0),He.add(Qe);const me=new st(.0466,.0456,.082,36,1,!0,Math.PI*.62,Math.PI*.76),re=new L(me,v);re.name="Gemini4CandleLabelMesh",re.position.set(0,.052,0),He.add(re);const ze=new L(new st(.042,.042,.012,24),new Ee({color:16116694,emissive:new Ve(16751931),emissiveIntensity:.25,roughness:.42}));ze.position.set(0,.096,0),He.add(ze);const Ze=new L(new At(.0055,12,12),F);Ze.scale.set(.7,1.8,.7),Ze.position.set(0,.108,0),He.add(Ze),Je.add(He);const ot=new et;ot.name="SmokedGlassEdisonGlobeLampGroup",ot.position.set(-.24,.05,2.33);const nt=new Ee({color:1447448,roughness:.22,metalness:.15}),bt=new L(new st(.054,.058,.058,28),nt);bt.position.set(0,.029,0),ot.add(bt);const Ot=new L(new st(.032,.038,.018,24),S);Ot.position.set(0,.064,0),ot.add(Ot);const nn=[],hn=4.5,on=72;for(let fe=0;fe<=on;fe++){const pe=fe/on,Ye=pe*Math.PI*2*hn,G=.018*Math.sin(pe*Math.PI*.85+.15),ee=.082+pe*.095;nn.push(new D(Math.cos(Ye)*G,ee,Math.sin(Ye)*G))}const Rn=new vo(nn),Mn=new zo(Rn,72,.0024,8,!1),xt=new L(Mn,F);xt.name="EdisonSpiralFilamentMesh",ot.add(xt);const Dt=new L(new At(.086,32,24),R);Dt.scale.set(1,1.08,1),Dt.position.set(0,.142,0),ot.add(Dt),Je.add(ot),n.add(Je);const Ht=new et;Ht.name="BedroomDoorAndThermostat";const cn=new L(new Le(.7,2.04,.028),u);cn.position.set(.93,.29,2.536),cn.receiveShadow=!0,Ht.add(cn);const wn=new L(new Le(.035,2.07,.036),u);wn.position.set(.568,.305,2.534),Ht.add(wn);const dn=new L(new Le(.035,2.07,.036),u);dn.position.set(1.292,.305,2.534),Ht.add(dn);const Pn=new L(new Le(.76,.035,.036),u);Pn.position.set(.93,1.325,2.534),Ht.add(Pn);const Kn=new Ee({color:14212322,roughness:.22,metalness:.88}),Sn=new L(new st(.026,.026,.012,20),Kn);Sn.rotation.x=Math.PI/2,Sn.position.set(.66,.24,2.52),Ht.add(Sn);const Nn=new L(new Le(.115,.014,.022),Kn);Nn.position.set(.7,.24,2.505),Ht.add(Nn);const yn=new L(new Le(.086,.086,.016),u);yn.position.set(.49,.36,2.535),Ht.add(yn);const Fn=new L(new Le(.088,.088,.018),u);Fn.position.set(.2,.44,2.535),Ht.add(Fn);const Xn=new L(new Gt(.072,.072),new Nt({map:d}));Xn.rotation.y=Math.PI,Xn.position.set(.2,.44,2.525),Ht.add(Xn),n.add(Ht),D1(o,h);const en=new Gn(16738320,.85,2.85,1.65);en.name="EdisonGlobeAmberPointLight",en.position.set(-.24,.225,2.3),en.castShadow=!1,t.add(en);const On=new Gn(1210623,.85,1.32,1.75);On.name="DeskRgbBlueSpillPointLight",On.position.set(-.76,.13,.08),On.castShadow=!1,t.add(On);let U=-1,ve=-1;function Ie(fe=0,pe=1.15){if(Math.abs(fe-U)<1e-4&&Math.abs(pe-ve)<1e-4)return;U=fe,ve=pe,en.intensity=.82*pe,Ji.uEdisonGlowScale.value=pe,On.intensity=.85*pe;const Ye=2.6+1.5*pe;for(const G of j.filamentMaterials)G&&(G.emissiveIntensity=Ye);for(const G of j.facadeMaterials)G&&(G.fog=!1,G.emissiveIntensity=.2)}return Ie(e.sunIntensity??0,e.lampIntensity??1.15),i&&i.add(t),{roomRoot:t,proceduralRoomGroup:n,roomContactAoGroup:o,edisonPointLight:en,roomBounceLight:On,calibrateRoomEnvironmentGlb:fe=>{U1(fe,j);const pe=U>=0?U:e.sunIntensity??.65,Ye=ve>=0?ve:e.lampIntensity??.4;U=-1,ve=-1,Ie(pe,Ye)},updateRoomLighting:Ie}}const Al=new D(0,1,0);function p0(i){const e=i.points.map(u=>new D(u[0],u[1],u[2])),t=i.points.map(u=>u[3]??1),n=new vo(e,!0,"centripetal"),o=n.getLength(),a=Math.max(240,Math.round(o/(i.sampleSpacing??.005)));n.arcLengthDivisions=a*4,n.updateArcLengths();const s=[],r=[],l=[];for(let u=0;u<a;u++){const g=u/a;s.push(n.getPointAt(g)),r.push(n.getTangentAt(g).normalize());const _=n.getUtoTmapping(g),w=Math.min(e.length-1,Math.floor(_*e.length));l.push(t[w])}const c=new Float32Array(a),d=new D;for(let u=0;u<a;u++){const g=r[(u-3+a)%a],_=r[(u+3)%a],w=s[(u+3)%a].distanceTo(s[(u-3+a)%a])||1e-4,E=d.crossVectors(r[u],Al).normalize(),S=new D().subVectors(_,g);c[u]=S.dot(E)/w}const h=Ke.degToRad(i.maxBankDeg??24),f=i.bankGain??.016;let p=Array.from(c,u=>Ke.clamp(u*f*57.3,-1,1)*h);for(let u=0;u<6;u++){const g=p.slice();for(let _=0;_<a;_++){let w=0,E=0;for(let S=-6;S<=6;S++){const C=7-Math.abs(S);w+=p[(_+S+a)%a]*C,E+=C}g[_]=w/E}p=g}const x=[];let b=0;for(let u=0;u<a;u++){u>0&&(b+=s[u].distanceTo(s[u-1]));const g=r[u],_=Al.clone().addScaledVector(g,-Al.dot(g));_.lengthSq()<1e-6&&_.set(0,0,1),_.normalize();const w=new D().crossVectors(g,_).normalize(),E=p[u],S=_.clone().multiplyScalar(Math.cos(E)).addScaledVector(w,Math.sin(E)).normalize(),C=new D().crossVectors(g,S).normalize();x.push({index:u,t:u/a,sector:l[u],position:Zs(s[u]),tangent:Zs(g,5),right:Zs(C,5),normal:Zs(S,5),bank_deg:+Ke.radToDeg(E).toFixed(2),arc_length_m:+b.toFixed(5)})}const m=b+s[a-1].distanceTo(s[0]);return{name:i.name,is_closed_periodic_loop:!0,track_width_m:.022,curb_width_m:.0025,rail_height_m:.0035,total_length_m:+m.toFixed(4),num_samples:a,sectors:i.sectors||[],start_finish_index:0,samples:x}}function Ur(i){const e=i.samples,t=e.length,n=[];let o=0;for(let c=0;c<t;c++){const d=e[(t-c)%t];if(c>0){const h=n[c-1].position;o+=Math.hypot(d.position[0]-h[0],d.position[1]-h[1],d.position[2]-h[2])}n.push({index:c,t:c/t,sector:d.sector,position:d.position.slice(),tangent:d.tangent.map(h=>-h),right:d.right.map(h=>-h),normal:d.normal.slice(),bank_deg:-(d.bank_deg||0),arc_length_m:+o.toFixed(5)})}const a=n[t-1].position,s=n[0].position,r=o+Math.hypot(s[0]-a[0],s[1]-a[1],s[2]-a[2]),l=i.start_finish_index??0;return{...i,name:`${i.name} (reverso)`,total_length_m:+r.toFixed(4),start_finish_index:(t-l)%t,samples:n}}function Zs(i,e=4){return[+i.x.toFixed(e),+i.y.toFixed(e),+i.z.toFixed(e)]}function Mr(i,e,t,n,o,a,s,r,l=8,c=1){const d=[],h=Math.max(2,Math.round(a*l));for(let f=0;f<=h;f++){const p=f/h,x=s+c*p*a*Math.PI*2;d.push([i+Math.cos(x)*t,n+(o-n)*p,e+Math.sin(x)*t,r])}return d}async function z1(i,{reverso:e=!1}={}){const[t,n]=await Promise.all([fetch(new URL("data:application/json;base64,ewogICJzY2FsZV9zeXN0ZW0iOiB7CiAgICAidW5pdCI6ICJtZXRlcnMgKDEuMCB1bml0ID0gMTAwMCBtbSkiLAogICAgImRlc2tfdG9wX3kiOiAwLjAsCiAgICAia2FydF9zY2FsZV9yYXRpbyI6ICIxOjg3IEhPIE1pY3JvLUNvYXN0ZXIgU2NhbGUiLAogICAgInRyYWNrX3dpZHRoX20iOiAwLjAyMiwKICAgICJjdXJiX3dpZHRoX20iOiAwLjAwMjUsCiAgICAia2FydF9kaW1lbnNpb25zX20iOiB7CiAgICAgICJsZW5ndGgiOiAwLjAxOCwKICAgICAgIndpZHRoIjogMC4wMTIsCiAgICAgICJoZWlnaHQiOiAwLjAwOAogICAgfSwKICAgICJjYWxpYnJhdGlvbl9ydWxlciI6IHsKICAgICAgIm9iamVjdCI6ICJMb2dpdGVjaCBHOTE1IExpZ2h0c3BlZWQgRnVsbC1TaXplIE1lY2hhbmljYWwgS2V5Ym9hcmQiLAogICAgICAid2lkdGhfbSI6IDAuNDc1LAogICAgICAiZGVwdGhfbSI6IDAuMTUwLAogICAgICAiaGVpZ2h0X20iOiAwLjAyMgogICAgfQogIH0sCiAgImRlc2tfb2JqZWN0cyI6IFsKICAgIHsKICAgICAgImlkIjogIm9ha19kZXNrX3RhYmxldG9wIiwKICAgICAgIm5hbWUiOiAiTGlnaHQgV2VhdGhlcmVkIE9hayBTdGFuZGluZyBEZXNrIiwKICAgICAgImNlbnRlcl94eXoiOiBbMC4wLCAtMC4wMTI1LCAwLjBdLAogICAgICAiZGltZW5zaW9uc193ZGgiOiBbMS4xMDAsIDAuNjAwLCAwLjAyNV0sCiAgICAgICJ0b3Bfc3VyZmFjZV95IjogMC4wCiAgICB9LAogICAgewogICAgICAiaWQiOiAiYm95YXRhX2xhcHRvcF9zdGFuZCIsCiAgICAgICJuYW1lIjogIkJvWWF0YSBNYXR0ZS1CbGFjayBBbHVtaW51bSBaLVBpbGxhciBMYXB0b3AgU3RhbmQiLAogICAgICAiY2VudGVyX3h5eiI6IFstMC4zNjAsIDAuMCwgLTAuMDcwXSwKICAgICAgImRpbWVuc2lvbnNfd2RoIjogWzAuMjYwLCAwLjIyMCwgMC4xNjVdLAogICAgICAidG9wX2FybXNfeSI6IDAuMTY1LAogICAgICAicm90YXRpb25feV9kZWciOiAxMi4wCiAgICB9LAogICAgewogICAgICAiaWQiOiAiZ2luZ2VyX2NhdF9maWd1cmluZSIsCiAgICAgICJuYW1lIjogIkNodWJieSBHaW5nZXItYW5kLVdoaXRlIENhdCBGaWd1cmluZSIsCiAgICAgICJjZW50ZXJfeHl6IjogWy0wLjE1NSwgMC4wLCAtMC4xMTVdLAogICAgICAiZGltZW5zaW9uc193ZGgiOiBbMC4wNjAsIDAuMDU4LCAwLjA3NF0sCiAgICAgICJoZWxpeF9jZW50ZXJfeHoiOiBbLTAuMTU1LCAtMC4xMTVdLAogICAgICAiaGVsaXhfcmFkaXVzX20iOiAwLjA1MgogICAgfSwKICAgIHsKICAgICAgImlkIjogImxnX3VsdHJhZ2Vhcl9tb25pdG9yIiwKICAgICAgIm5hbWUiOiAiTEcgVWx0cmFHZWFyIDI3LWluY2ggTW9uaXRvciArIFRvcCBXZWJjYW0iLAogICAgICAiY2VudGVyX3h5eiI6IFswLjAxMCwgMC4wLCAtMC4yNDVdLAogICAgICAicGFuZWxfZGltZW5zaW9uc193ZGgiOiBbMC42MTQsIDAuMDQ1LCAwLjM2NV0sCiAgICAgICJiYXNlX2RpbWVuc2lvbnNfd2RoIjogWzAuMTIwLCAwLjExMCwgMC4wMTJdLAogICAgICAicGFuZWxfYm90dG9tX3kiOiAwLjA3NSwKICAgICAgIndlYmNhbV94eXoiOiBbLTAuMTMwLCAwLjQ1NSwgLTAuMjM1XQogICAgfSwKICAgIHsKICAgICAgImlkIjogImJvb21fYXJtX2JsdWVfbWljIiwKICAgICAgIm5hbWUiOiAiQXJ0aWN1bGF0ZWQgQmxhY2sgQm9vbSBBcm0gKyBEeW5hbWljIFBvZGNhc3RpbmcgTWljcm9waG9uZSAoQmx1ZSBMRUQgUmluZykiLAogICAgICAiY2xhbXBfeHl6IjogWzAuMjQ1LCAwLjAsIC0wLjI4NV0sCiAgICAgICJlbGJvd194eXoiOiBbMC4xMTAsIDAuMTA1LCAtMC4xNDBdLAogICAgICAibWljX3h5eiI6IFstMC4wMjUsIDAuMTA1LCAtMC4wNDVdLAogICAgICAibWljX2RpbWVuc2lvbnNfd2RoIjogWzAuMDU4LCAwLjEzNSwgMC4wNjVdLAogICAgICAiYmx1ZV9sZWRfY29sb3JfaGV4IjogIiMxZTZiZmYiCiAgICB9LAogICAgewogICAgICAiaWQiOiAid2hpdGVfa2V5X2xpZ2h0X2xhbXAiLAogICAgICAibmFtZSI6ICJXaGl0ZSBPdmFsIERpZmZ1c2VkIEtleS1MaWdodCBEZXNrIExhbXAiLAogICAgICAiYmFzZV94eXoiOiBbMC4zNTUsIDAuMCwgLTAuMDk1XSwKICAgICAgImJhc2VfcmFkaXVzX20iOiAwLjA5MjUsCiAgICAgICJiYXNlX2hlaWdodF9tIjogMC4wMTYsCiAgICAgICJwb2xlX3RvcF94eXoiOiBbMC4zNTUsIDAuMzYwLCAtMC4wOTVdLAogICAgICAiaGVhZF9kaW1lbnNpb25zX3dkaCI6IFswLjI4MCwgMC4wMzUsIDAuMTgwXSwKICAgICAgImNvcmtzY3Jld19jZW50ZXJfeHoiOiBbMC4zNTUsIC0wLjA5NV0sCiAgICAgICJjb3Jrc2NyZXdfcmFkaXVzX20iOiAwLjA1NgogICAgfSwKICAgIHsKICAgICAgImlkIjogImxvZ2l0ZWNoX2c5MTVfa2V5Ym9hcmQiLAogICAgICAibmFtZSI6ICJMb2dpdGVjaCBHOTE1IExpZ2h0c3BlZWQgV2lyZWxlc3MgTWVjaGFuaWNhbCBLZXlib2FyZCIsCiAgICAgICJjZW50ZXJfeHl6IjogWy0wLjA4NSwgMC4wLCAwLjEzNV0sCiAgICAgICJkaW1lbnNpb25zX3dkaCI6IFswLjQ3NSwgMC4xNTAsIDAuMDIyXQogICAgfSwKICAgIHsKICAgICAgImlkIjogInJhemVyX21hdF9hbmRfbW91c2UiLAogICAgICAibmFtZSI6ICJSYXplciBIYXJkIE1vdXNlIE1hdCArIEJsYWNrIFdpcmVsZXNzIEVyZ29ub21pYyBHYW1pbmcgTW91c2UiLAogICAgICAibWF0X2NlbnRlcl94eXoiOiBbMC4zMjUsIDAuMCwgMC4xMzVdLAogICAgICAibWF0X2RpbWVuc2lvbnNfd2RoIjogWzAuMzQwLCAwLjI2NSwgMC4wMDNdLAogICAgICAibW91c2VfY2VudGVyX3h5eiI6IFswLjI4NSwgMC4wMDMsIDAuMTE1XSwKICAgICAgIm1vdXNlX2RpbWVuc2lvbnNfd2RoIjogWzAuMDc1LCAwLjEzMCwgMC4wNDJdLAogICAgICAibW91c2Vfcm90YXRpb25feV9kZWciOiAtMTAuMAogICAgfQogIF0KfQo=",import.meta.url)).then(F=>F.json()),fetch(new URL(""+new URL("track_spline-CaHHjEgR.json",import.meta.url).href,import.meta.url)).then(F=>F.json())]);n.start_finish_index=646,n.sectors=[{id:1,name:"Subida de los Libros Santos"},{id:2,name:"Hélice de la Virgen"},{id:3,name:"Paso del Cirio Pascual"},{id:4,name:"Sacacorchos de la Lámpara"},{id:5,name:"Curva del Rosario"},{id:6,name:"Viaducto del Teclado"}];const o=e?Ur(n):n;i.background=new Ve(1577746),i.fog=new cs(1577746,.018);const a={sunIntensity:0,sunbeamIntensity:0,lampIntensity:1.15,micGlowIntensity:.85,bloomStrength:.07,showDustMotes:!1},s=T1(i),r=I1();i.add(r.root),r.nightGlowGroup&&i.add(r.nightGlowGroup);const l=B1(i,a);i.add(l.roomRoot);const c=new et;c.name="ObjetosDeFe",i.add(c);const d=F=>{const H=r.root.getObjectByName(F)||i.getObjectByName(F);H&&H.parent&&H.parent.remove(H)};d("ginger_cat_figurine");const h=zd({alto:.1,pedestal:.014});h.position.set(-.155,0,-.115),h.rotation.y=.5,c.add(h),d("boom_arm_blue_mic");const f=_1({alto:.24,radio:.02});f.position.set(.245,0,-.27),c.add(f);const p=f.userData.alturaLlama;s.micSpotLight.color.setHex(16752714),s.micSpotLight.position.set(.245,p+.01,-.27),s.micSpotLight.target.position.set(.18,0,-.15),s.micSpotLight.distance=.55,s.micSpotLight.angle=Math.PI*.42;const x=new Gn(16751168,.35,.35,1.6);x.position.set(.245,p+.012,-.27),c.add(x),d("boyata_laptop_stand");const b=new et,m=qa({ancho:.25,largo:.19,grueso:.042,color:"#6b1420",titulo:"BIBLIA"}),u=qa({ancho:.22,largo:.17,grueso:.034,color:"#1f3a6b",titulo:"CATECISMO"});u.position.y=.042,u.rotation.y=.08;const g=qa({ancho:.19,largo:.15,grueso:.024,color:"#21543a",titulo:"MISAL"});g.position.y=.076,g.rotation.y=-.1,b.add(m,u,g),b.position.set(-.36,0,-.07),b.rotation.y=Ke.degToRad(12),c.add(b),d("RazerMatAndGamingMouse");const _=M1({radio:.045});_.position.set(.3,.003,.1),_.rotation.y=-.4,c.add(_);const w=qa({ancho:.06,largo:.085,grueso:.014,color:"#3b2a1a",titulo:"N.T."});w.position.set(.255,.003,.17),w.rotation.y=.35,c.add(w);const E=i.getObjectByName("MousepadCyanRgbBorderTube");E&&(E.material=new Nt({color:new Ve(1.6,1.15,.35),toneMapped:!1}));const S=i.getObjectByName("MousepadCyanDeskGlowPlane");S&&(S.visible=!1);const C=ba({alto:.2});C.position.set(-.45,0,-.235),C.rotation.y=.35,c.add(C);const M=new Ee({color:11737130,roughness:.15,transparent:!0,opacity:.75,emissive:5900816,emissiveIntensity:.6});[[.47,.24],[.505,.215],[.495,.265]].forEach(([F,H],z)=>{const Y=ds({alto:.026+z*.006,radio:.009,color:M,platillo:!1});Y.position.set(F,0,H),c.add(Y)});const A=new Ve(16758087),v=r.root.getObjectByName("logitech_g915_keyboard");v&&v.traverse(F=>{const H=F.material?Array.isArray(F.material)?F.material:[F.material]:[];for(const z of H)z.emissive&&z.emissive.b>z.emissive.r&&z.emissive.copy(A),z.color&&z.color.b>.6&&z.color.r<.3&&z.color.copy(A)}),s.kbBacklight&&s.kbBacklight.color.copy(A),i.traverse(F=>{if(F.isMesh&&F.material&&F.material.name==="Mat_MonitorScreen"){const H=k1();F.material=new Ee({map:H,emissiveMap:H,emissive:new Ve(1,1,1),emissiveIntensity:.55,roughness:.3})}});const R=fs(c);return{id:"escritorio",splineData:o,trackOpts:{glowBounds:"desk",customStart:!0,ledColors:[16760906,16773832,4892927,16742970]},suelos:[r.root,c],exposicion:null,luzLlave:s.lampKeyLight,tomas:[{p:[0,.43,.55],m:[0,.07,-.05]},{p:[-.32,.2,.2],m:[-.155,.06,-.115]},{p:[.42,.18,.05],m:[.245,.2,-.27]},{p:[-.6,.3,.3],m:[-.36,.1,-.07]}],vistaPodio:{centro:new D(.05,0,.2)},actualizar(F,H,z){s.updateAtmosphere(F,a,z.renderer,z.bloomPass,i,r);for(const Y of R)Y(F);x.intensity=.32+Math.sin(F*13)*.03+Math.sin(F*29)*.02},pedirSombras(){s.requestShadowMapUpdate&&s.requestShadowMapUpdate()}}}function k1(){const i=xr("roseton",512,512).image,e=document.createElement("canvas");e.width=1024,e.height=596;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#1b1030"),n.addColorStop(1,"#3a1d18"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.drawImage(i,40,60,470,470),t.fillStyle="#ffd86a",t.textAlign="center",t.font="bold 74px Georgia, serif",t.fillText("GRAN PREMIO",770,230),t.fillText("DE LA FE",770,320),t.font="italic 38px Georgia, serif",t.fillStyle="#f4e9cf",t.fillText("«Corramos con constancia",770,420),t.fillText("la carrera» · Hb 12,1",770,470);const o=new Ut(e);return o.colorSpace=zt,o}const V1={name:"El Pesebre de Belén",sectors:[{id:1,name:"Recta de los Pastores"},{id:2,name:"Subida a Belén"},{id:3,name:"Tejados de Belén"},{id:4,name:"Puente del Río"},{id:5,name:"Monte de la Estrella"},{id:6,name:"Bajada de los Ángeles"}],points:[[.1,.026,.31,1],[-.08,.026,.315,1],[-.26,.03,.305,1],[-.43,.04,.27,2],[-.55,.055,.18,2],[-.6,.075,.04,2],[-.59,.1,-.1,2],[-.54,.12,-.23,3],[-.44,.13,-.32,3],[-.29,.13,-.37,3],[-.11,.12,-.39,4],[.07,.105,-.385,4],[.21,.09,-.34,4],[.29,.085,-.22,4],...Mr(.48,-.08,.155,.085,.215,1.25,Math.PI,5,9,-1).slice(1),[.59,.2,.13,6],[.63,.17,.23,6],[.56,.13,.32,6],[.45,.09,.35,6],[.33,.055,.335,6],[.22,.034,.315,6]]},G1={name:"El altar de la capilla",sectors:[{id:1,name:"Recta del Altar"},{id:2,name:"Curva del Misal"},{id:3,name:"Hélice del Candelero"},{id:4,name:"Paso del Sagrario"},{id:5,name:"Espiral de la Luz"},{id:6,name:"Llegada del Cáliz"}],points:[[.1,.022,.31,1],[-.1,.022,.315,1],[-.28,.024,.305,1],[-.45,.03,.265,2],[-.58,.04,.16,2],[-.62,.05,.02,2],...Mr(-.42,-.2,.125,.06,.2,1.25,Math.PI,3,9,1).slice(1),[-.29,.195,-.31,4],[-.19,.18,-.2,4],[-.11,.155,-.07,4],[.02,.135,-.03,4],[.15,.12,-.04,4],[.25,.11,-.1,4],...Mr(.42,-.2,.125,.105,.03,1.5,Math.PI,5,9,1).slice(1),[.585,.026,0,6],[.55,.022,.18,6],[.44,.022,.285,6],[.28,.022,.31,6]]},H1={name:"La gruta de Lourdes",sectors:[{id:1,name:"Explanada de los Peregrinos"},{id:2,name:"Curva de la Fuente"},{id:3,name:"Subida a la Gruta"},{id:4,name:"Balcón de la Virgen"},{id:5,name:"Espiral del Calvario"},{id:6,name:"Bajada de las Velas"}],points:[[.1,.022,.32,1],[-.1,.022,.33,1],[-.28,.025,.315,1],[-.47,.032,.27,2],[-.6,.042,.13,2],[-.63,.06,-.02,2],[-.58,.095,-.16,3],[-.49,.135,-.255,3],[-.36,.165,-.3,3],[-.2,.18,-.31,4],[-.04,.18,-.31,4],[.1,.172,-.3,4],[.24,.158,-.26,5],...Mr(.45,-.1,.135,.15,.05,1.25,-Math.PI/2-.25,5,9,1).slice(1),[.61,.038,.08,6],[.54,.028,.24,6],[.4,.022,.315,6],[.25,.022,.325,6]]};function Js(i,e,t,n=null){const o=document.createElement("canvas");o.width=i,o.height=e,t(o.getContext("2d"),i,e);const a=new Ut(o);return a.colorSpace=zt,n&&(a.wrapS=a.wrapT=Rt,a.repeat.set(...n)),a.anisotropy=4,a}function W1(i){let e=i;return()=>(e=e*16807%2147483647,e/2147483647)}async function X1(i,{reverso:e=!1}={}){const t=p0(V1),n=e?Ur(t):t;i.background=new Ve(658456),i.fog=new cs(658456,.09);const o=new et;o.name="Belen",i.add(o);const a=W1(7),s=Js(512,512,(be,Ae,Pe)=>{be.fillStyle="#2f4f22",be.fillRect(0,0,Ae,Pe);for(let Xe=0;Xe<26e3;Xe++){const K=a();be.fillStyle=K<.3?"#3d6a2a":K<.6?"#264018":K<.9?"#4f7c32":"#6b8f3e",be.fillRect(a()*Ae,a()*Pe,1+a()*2.2,1+a()*2.2)}},[16,11]),r=new L(new Le(1.56,.03,1.06),new Ee({map:s,roughness:1,color:13623488}));r.position.y=-.015,r.receiveShadow=!0,o.add(r);const l=new L(new Le(1.62,.3,1.12),new Ee({color:8000024,roughness:.85}));l.position.y=-.17,o.add(l);for(const[be,Ae]of[[-.7,-.45],[.7,-.45],[-.7,.45],[.7,.45]]){const Pe=new L(new Le(.06,.45,.06),rt.maderaOscura);Pe.position.set(be,-.545,Ae),o.add(Pe)}const c=new Ee({color:13215339,roughness:1}),d=new L(new Gt(.16,.7),c);d.rotation.set(-Math.PI/2,0,.5),d.position.set(-.08,.001,.08),d.receiveShadow=!0,o.add(d);const h=new vo([new D(-.72,.002,-.46),new D(-.32,.002,-.3),new D(-.18,.002,-.05),new D(-.02,.002,.2),new D(0,.002,.48)]),f=h.getSpacedPoints(80),p=[],x=[];f.forEach((be,Ae)=>{const Pe=h.getTangentAt(Ae/80),Xe=new D(-Pe.z,0,Pe.x).multiplyScalar(.035+Math.sin(Ae*.4)*.008);p.push(be.x+Xe.x,be.y,be.z+Xe.z,be.x-Xe.x,be.y,be.z-Xe.z),Ae<f.length-1&&x.push(Ae*2,Ae*2+1,Ae*2+2,Ae*2+1,Ae*2+3,Ae*2+2)});const b=new Lt;b.setAttribute("position",new mt(p,3)),b.setIndex(x),b.computeVertexNormals();const m=new Ee({color:12375274,roughness:.18,metalness:1,side:Jt}),u=new L(b,m);u.receiveShadow=!0,o.add(u);const g=new et;for(let be=0;be<7;be++){const Ae=new L(new Le(.012,.004,.09),rt.madera);Ae.position.set(-.04+be*.013,.006,0),Ae.castShadow=!0,g.add(Ae)}g.position.set(-.01,0,.36),g.rotation.y=.15,o.add(g);const _=new et;_.position.set(.02,0,-.12);const w=rt.madera;for(const[be,Ae]of[[-.16,.09],[.16,.09],[-.16,-.09],[.16,-.09]]){const Pe=new L(new Le(.014,.19,.014),w);Pe.position.set(be,.095,Ae),Pe.castShadow=!0,_.add(Pe)}for(let be=0;be<12;be++){const Ae=new L(new Le(.026,.17+be%3*.01,.006),be%2?rt.madera:rt.maderaClara);Ae.position.set(-.143+be*.026,.085,-.095),Ae.castShadow=!0,Ae.receiveShadow=!0,_.add(Ae)}for(const be of[-1,1]){const Ae=new L(new Le(.2,.012,.24),rt.paja);Ae.position.set(be*.085,.225,0),Ae.rotation.z=-be*.5,Ae.castShadow=!0,Ae.receiveShadow=!0,_.add(Ae)}const E=new L(new st(.15,.16,.006,24),rt.paja);E.scale.z=.6,E.position.y=.003,E.receiveShadow=!0,_.add(E);const S=new L(new Le(.06,.02,.03),rt.madera);S.position.set(0,.022,.01),_.add(S);const C=new L(new Le(.055,.006,.026),rt.paja);C.position.set(0,.034,.01),_.add(C);const M=new et,A=new L(new Oo(.007,.022,6,10),rt.marfil);A.rotation.z=Math.PI/2,M.add(A);const v=new L(new At(.0065,14,10),rt.piel);v.position.set(-.018,.002,0),M.add(v);const R=new L(new Un(.009,.0012,8,24),new Nt({color:new Ve(2.2,1.7,.6),toneMapped:!1}));R.position.set(-.022,.004,0),R.rotation.y=Math.PI/2,M.add(R),M.position.set(0,.042,.01),_.add(M);const F=pi(.12,"255,220,150",.55);F.position.set(0,.05,.01),_.add(F);const H=ua({alto:.085,tunica:rt.marfil,manto:rt.azulManto,tocado:rt.celeste,pose:"rodillas",aureola:!0});H.position.set(-.06,0,.02),H.rotation.y=.9,_.add(H);const z=new Ee({color:8018490,roughness:.8}),Y=new Ee({color:12088364,roughness:.8}),j=ua({alto:.1,tunica:z,manto:Y,tocado:z,aureola:!0});j.position.set(.065,0,0),j.rotation.y=-.8,_.add(j);const Q=new L(new st(.0015,.0015,.12,6),rt.maderaOscura);Q.position.set(.085,.06,.012),Q.rotation.z=-.1,_.add(Q);const _e=wl({escala:.075,color:9071178,cuernos:!0});_e.position.set(-.11,0,-.05),_e.rotation.y=.5,_.add(_e);const Z=wl({escala:.07,color:7236198});Z.position.set(.11,0,-.05),Z.rotation.y=-.5,_.add(Z);const W=ds({alto:.012,radio:.004,platillo:!1});W.position.set(.12,.17,.085),_.add(W);const de=Bu({alto:.075});de.position.set(0,.255,.05),_.add(de);const oe=new L(new Gt(.12,.022),new Nt({map:Js(512,96,(be,Ae,Pe)=>{be.fillStyle="#f3e7c9",be.fillRect(0,0,Ae,Pe),be.strokeStyle="#b8892a",be.lineWidth=6,be.strokeRect(3,3,Ae-6,Pe-6),be.fillStyle="#7a1218",be.font="bold 54px Georgia, serif",be.textAlign="center",be.textBaseline="middle",be.fillText("GLORIA IN EXCELSIS DEO",Ae/2,Pe/2+2)}),side:Jt}));oe.position.set(0,.33,.06),_.add(oe),o.add(_);const ge=Qa({radio:.105,alto:.3,color:9141611,semilla:3});ge.position.set(.48,0,-.08),o.add(ge);const ie=Qa({radio:.06,alto:.12,color:8220511,semilla:9});ie.position.set(.66,0,-.3),o.add(ie);const Ce=Ou(.03);Ce.position.set(.48,.42,-.08),o.add(Ce);const J=new L(new st(8e-4,8e-4,.12,6),rt.plata);J.position.set(.48,.34,-.08),o.add(J);const le=Bu({alto:.06});le.position.set(.48,.28,-.08),le.rotation.y=.6,o.add(le);const N=[[-.5,-.26,.08,.072,.07,14205850,.3],[-.4,-.34,.07,.078,.06,13480842,-.2],[-.36,-.12,.09,.088,.08,14733224,.1],[-.28,0,.08,.075,.07,13810578,-.3],[-.44,.06,.06,.06,.06,13217412,.6]];for(const[be,Ae,Pe,Xe,K,ke,He]of N){const Qe=y1({ancho:Pe,alto:Xe,fondo:K,color:ke});Qe.position.set(be,0,Ae),Qe.rotation.y=He,o.add(Qe)}const y=new et,B=rt.piedra.clone();B.side=Jt;const k=new L(new st(.022,.024,.022,20,1,!0),B);k.position.y=.011,y.add(k);const he=new L(new no(.02,20),m);he.rotation.x=-Math.PI/2,he.position.y=.012,y.add(he),y.position.set(-.2,0,-.2),o.add(y);for(const[be,Ae,Pe]of[[-.15,.12,.28],[.27,.13,.25],[-.62,-.38,.3],[.68,.2,.26]]){const Xe=S1(Pe);Xe.position.set(be,0,Ae),Xe.rotation.y=a()*6,o.add(Xe)}const ne=(be,Ae,Pe,Xe)=>{const K=ua({alto:.08,tunica:new Ee({color:Xe,roughness:.85}),tocado:new Ee({color:15260864,roughness:.9})});K.position.set(be,0,Ae),K.rotation.y=Pe,o.add(K)};ne(-.32,.17,2.6,7035450),ne(-.12,.22,3.4,4876858);for(let be=0;be<9;be++){const Ae=b1(.024+a()*.008);Ae.position.set(-.36+a()*.28,0,.08+a()*.14),Ae.rotation.y=a()*6,o.add(Ae)}const V=[[.16,.12,8002154,rt.piel],[.21,.18,1727114,rt.pielMorena],[.12,.2,2779706,rt.piel]];for(const[be,Ae,Pe,Xe]of V){const K=ua({alto:.095,tunica:rt.oroViejo,manto:new Ee({color:Pe,roughness:.5}),piel:Xe,corona:!0});K.position.set(be,0,Ae),K.rotation.y=-2.4,o.add(K);const ke=new L(new Le(.012,.009,.009),rt.oro);ke.position.set(be-.012,.05,Ae-.01),o.add(ke)}const q=wl({escala:.1,color:12753502}),X=new L(new At(.018,12,10),new Ee({color:12753502,roughness:.9}));X.position.set(0,.085,0),X.scale.set(.8,.9,1.2),q.add(X),q.position.set(.3,0,.2),q.rotation.y=-2.2,o.add(q);const O=Js(2048,512,(be,Ae,Pe)=>{const Xe=be.createLinearGradient(0,0,0,Pe);Xe.addColorStop(0,"#060a24"),Xe.addColorStop(.7,"#1c2a5a"),Xe.addColorStop(1,"#3a3a5e"),be.fillStyle=Xe,be.fillRect(0,0,Ae,Pe);for(let K=0;K<900;K++){const ke=150+a()*105;be.fillStyle=`rgba(${ke},${ke},255,${.4+a()*.6})`,be.beginPath(),be.arc(a()*Ae,a()*Pe*.75,a()*1.8+.3,0,Math.PI*2),be.fill()}be.fillStyle="#141a33",be.beginPath(),be.moveTo(0,Pe);for(let K=0;K<=Ae;K+=32)be.lineTo(K,Pe*.78-Math.sin(K*.004)*50-Math.sin(K*.013)*18);be.lineTo(Ae,Pe),be.fill()}),P=new L(new st(.95,.95,.75,48,1,!0,Math.PI*.62,Math.PI*.76),new Nt({map:O,side:Cn,color:10134728}));P.position.set(0,.36,.42),o.add(P);const ce=new et,Me=[new Ve(2.4,1.8,.6),new Ve(2.2,.5,.4),new Ve(.5,1.4,2.4),new Ve(.6,2.2,.8)],ye=new At(.004,8,6);for(let be=0;be<48;be++){const Ae=Math.PI*.62+be/47*Math.PI*.76,Pe=new L(ye,new Nt({color:Me[be%4],toneMapped:!1}));Pe.position.set(Math.sin(Ae)*.93,.7+Math.sin(be*.9)*.012,.42+Math.cos(Ae)*.93),ce.add(Pe)}o.add(ce);const se=new et,I=new L(new Gt(8,8),new Ee({color:3810840,roughness:.8}));I.rotation.x=-Math.PI/2,I.position.y=-.77,I.receiveShadow=!0,se.add(I);const T=new Ee({color:5914164,roughness:.95});for(const[be,Ae,Pe]of[[0,-2.2,0],[-2.4,0,Math.PI/2],[2.4,0,-Math.PI/2],[0,2.6,Math.PI]]){const Xe=new L(new Gt(6,3.5),T);Xe.position.set(be,.9,Ae),Xe.rotation.y=Pe,se.add(Xe)}const $=new L(new Gt(.9,1.1),new Nt({map:Js(256,320,(be,Ae,Pe)=>{be.fillStyle="#0b1638",be.fillRect(0,0,Ae,Pe),be.fillStyle="#f2eed8",be.beginPath(),be.arc(Ae*.68,Pe*.28,22,0,Math.PI*2),be.fill(),be.fillStyle="#2a1a12",be.fillRect(Ae/2-4,0,8,Pe),be.fillRect(0,Pe/2-4,Ae,8)})}));$.position.set(-1.1,.9,-2.19),se.add($);const ae=new et,Re=new Ee({color:2050602,roughness:.9});for(let be=0;be<5;be++){const Ae=new L(new $n(.55-be*.09,.55,24),Re);Ae.position.y=.35+be*.3,ae.add(Ae)}const we=new et;for(let be=0;be<70;be++){const Ae=a(),Pe=.2+Ae*1.45,Xe=(.5-Ae*.38)*.95,K=a()*Math.PI*2,ke=new L(new At(.018,8,6),new Nt({color:Me[be%4],toneMapped:!1}));ke.position.set(Math.cos(K)*Xe,Pe,Math.sin(K)*Xe),we.add(ke)}ae.add(we);const Ge=Ou(.07);Ge.position.y=1.85,ae.add(Ge),ae.position.set(1.4,-.77,-1.2),se.add(ae),i.add(se),i.add(new us(6978232,1708556,.35));const Oe=new wa(16769200,3.2,3,Math.PI*.2,.6,1.2);Oe.position.set(.3,1.3,.9),Oe.target.position.set(0,0,-.05),Oe.castShadow=!0,Oe.shadow.mapSize.set(2048,2048),Oe.shadow.camera.near=.5,Oe.shadow.camera.far=2.4,Oe.shadow.bias=-3e-4,Oe.shadow.normalBias=.001,i.add(Oe,Oe.target);const je=new Gn(16769696,.6,.9,1.5);je.position.set(.48,.42,-.08),i.add(je);const Je=new Gn(16760944,.35,.35,1.6);Je.position.set(.02,.12,-.08),i.add(Je);const Fe=new Gn(16756848,1.2,3,1.5);Fe.position.set(1.3,.3,-1),i.add(Fe);const Be=fs(o);return{id:"pesebre",splineData:n,trackOpts:{ledColors:[16765802,16774880,8374527,16752832],curbColors:[13185068,16118506],steelColor:10259060,glowGroundY:.002},suelos:[o],tomas:[{p:[.05,.5,.75],m:[0,.08,-.08]},{p:[.03,.09,.14],m:[.02,.05,-.1]},{p:[.22,.32,.25],m:[.48,.2,-.08]},{p:[-.25,.2,0],m:[-.45,.1,-.25]}],actualizar(be,Ae,Pe){Pe.renderer.toneMappingExposure=.92,Pe.bloomPass.strength=.32,Pe.bloomPass.radius=.35,Pe.bloomPass.threshold=1.1;for(const Xe of Be)Xe(be);je.intensity=.55+Math.sin(be*2.2)*.08,we.children.forEach((Xe,K)=>{Xe.visible=Math.sin(be*1.5+K*1.7)>-.6}),ce.children.forEach((Xe,K)=>{Xe.visible=Math.sin(be*2+K*.8)>-.5})}}}function Tl(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const o=new Ut(n);return o.colorSpace=zt,o.anisotropy=4,o}async function j1(i,{reverso:e=!1}={}){const t=p0(G1),n=e?Ur(t):t;i.background=new Ve(789010),i.fog=new cs(789010,.11);const o=new et;o.name="Altar",i.add(o);const a=new Ee({color:14209216,roughness:.6}),s=new L(new Le(1.7,.95,.86),a);s.position.y=-.48,s.receiveShadow=!0,o.add(s);const r=new Ee({color:16184298,roughness:.85}),l=new L(new Le(1.74,.006,.9),r);l.position.y=-.003,l.receiveShadow=!0,o.add(l);const c=Tl(512,128,(ie,Ce,J)=>{ie.fillStyle="#f6f3ea",ie.fillRect(0,0,Ce,J),ie.strokeStyle="#c8b98f",ie.lineWidth=3;for(let le=0;le<Ce;le+=32)ie.beginPath(),ie.arc(le+16,J-10,14,Math.PI,0),ie.stroke(),ie.beginPath(),ie.moveTo(le+16,8),ie.lineTo(le+16,J-26),ie.stroke();ie.fillStyle="#b8892a",ie.fillRect(0,0,Ce,6)});c.wrapS=Rt,c.repeat.set(8,1);const d=new L(new Le(1.745,.12,.905),[new Ee({map:c,roughness:.85}),new Ee({map:c,roughness:.85}),r,r,new Ee({map:c,roughness:.85}),new Ee({map:c,roughness:.85})]);d.position.y=-.065,o.add(d);const h=new L(new Gt(.8,.6),new Ee({map:Tl(512,384,(ie,Ce,J)=>{ie.fillStyle="#7a1218",ie.fillRect(0,0,Ce,J),ie.strokeStyle="#d9a93a",ie.lineWidth=10,ie.strokeRect(14,14,Ce-28,J-28),ie.fillStyle="#e2b84a",ie.fillRect(Ce/2-14,60,28,260),ie.fillRect(Ce/2-90,130,180,28)}),roughness:.6}));h.position.set(0,-.45,.432),o.add(h);const f=w1({ancho:.16,alto:.18});f.position.set(0,0,-.2),o.add(f);const p=new L(new Le(.5,.03,.12),rt.marfil);p.position.set(0,.015,-.34),p.receiveShadow=!0,p.castShadow=!0,o.add(p);const x=ba({alto:.42,mat:rt.maderaOscura,cristo:rt.marfil});x.position.set(0,.03,-.34),o.add(x);const b=Pc({alto:.3});b.position.set(-.42,0,-.2),o.add(b);const m=Pc({alto:.3});m.position.set(.42,0,-.2),o.add(m);const u=kd({alto:.085});u.position.set(.12,0,.13),o.add(u);const g=new L(new Gt(.12,.12),new Ee({color:16777215,roughness:.9}));g.rotation.x=-Math.PI/2,g.position.set(.12,.0012,.13),o.add(g);const _=new et,w=new L(new Le(.16,.012,.11),rt.oroViejo);w.position.y=.035,w.rotation.x=-.35,_.add(w);const E=new L(new Le(.12,.035,.02),rt.oroViejo);E.position.set(0,.017,-.03),_.add(E);const S=qa({ancho:.15,largo:.1,grueso:.018,color:"#5a1018",titulo:"MISAL"});S.position.set(0,.043,.004),S.rotation.x=-.35,_.add(S),_.position.set(-.18,0,.14),_.rotation.y=.25,o.add(_);const C=_r({alto:.22,colores:[16777215,15913547,16777215]});C.position.set(-.7,0,-.3),o.add(C);const M=_r({alto:.22,colores:[16777215,14828922,16777215]});M.position.set(.7,0,-.3),o.add(M);for(const[ie,Ce]of[[.62,.22],[.66,.24]]){const J=new L(new st(.008,.012,.04,16),new Ee({color:14675967,roughness:.05,transparent:!0,opacity:.6}));J.position.set(ie,.02,Ce),o.add(J)}const A=new L(new $n(.014,.022,20,1,!0),rt.oro);A.position.set(-.66,.011,.22),o.add(A);for(const ie of[-.2,.2]){const Ce=ds({alto:.06,radio:.009});Ce.position.set(ie,0,-.3),o.add(Ce)}const v=new et,R=new Ee({color:9208952,roughness:.95}),F=new L(new Gt(10,10),new Ee({map:Tl(512,512,(ie,Ce,J)=>{for(let le=0;le<8;le++)for(let N=0;N<8;N++)ie.fillStyle=(N+le)%2?"#2a2420":"#d8d0c0",ie.fillRect(N*Ce/8,le*J/8,Ce/8,J/8)}),roughness:.35,metalness:.1}));F.material.map.wrapS=F.material.map.wrapT=Rt,F.material.map.repeat.set(8,8),F.rotation.x=-Math.PI/2,F.position.y=-.95,F.receiveShadow=!0,v.add(F);for(let ie=0;ie<2;ie++){const Ce=new L(new Le(3.4-ie*.4,.08,2-ie*.4),rt.marfil);Ce.position.set(0,-.91+ie*.08-.08,-.2-ie*.1),Ce.receiveShadow=!0,v.add(Ce)}const H=2.2,z=7;for(let ie=0;ie<z;ie++){const Ce=Math.PI+ie/(z-1)*Math.PI-Math.PI/2,J=Math.sin(Ce)*H,le=-.6+Math.cos(Ce)*H,N=new L(new Gt(1.1,4.2),R);N.position.set(J,1,le),N.lookAt(0,1,-.6),v.add(N);const y=new L(new Gt(.6,1.7),new Nt({map:xr(ie%2?"b":"a",256,512),color:new Ve(1.5,1.4,1.3),toneMapped:!1}));y.position.set(J*.985,.75,-.6+(le+.6)*.985),y.lookAt(0,.75,-.6),v.add(y);const B=pi(1.2,ie%2?"120,150,255":"255,140,110",.12);B.position.copy(y.position).multiplyScalar(.92),B.position.y=.75,v.add(B)}const Y=new L(new no(.55,64),new Nt({map:xr("roseton",1024,1024),color:new Ve(1.5,1.4,1.3),toneMapped:!1}));Y.position.set(0,2.3,-2.75),v.add(Y);const j=new Ee({color:12432806,roughness:.85});for(const ie of[-1,1])for(let Ce=0;Ce<4;Ce++){const J=new L(new st(.11,.13,3.6,20),j);J.position.set(ie*1.7,.85,.6+Ce*1.3),J.castShadow=!0,v.add(J);const le=new L(new Un(.65,.09,10,24,Math.PI),j);le.position.set(ie*1.7,2.65,1.25+Ce*1.3),le.rotation.y=Math.PI/2,v.add(le)}for(const ie of[-1,1])for(let Ce=0;Ce<5;Ce++){const J=new et,le=new L(new Le(1.1,.05,.35),rt.maderaOscura);le.position.y=.42;const N=new L(new Le(1.1,.5,.05),rt.maderaOscura);N.position.set(0,.68,-.16);const y=new L(new Le(.05,.9,.4),rt.maderaOscura);y.position.set(-.55,.45,0);const B=y.clone();B.position.x=.55,J.add(le,N,y,B),J.position.set(ie*.85,-.95,1.4+Ce*.75),J.rotation.y=Math.PI,v.add(J)}const Q=new L(new st(.004,.004,1.6,6),rt.oroViejo);Q.position.set(.9,1.7,-.3),v.add(Q);const _e=new L(new At(.05,16,12),new Nt({color:new Ve(2.4,.3,.25),toneMapped:!1}));_e.position.set(.9,.88,-.3),v.add(_e);const Z=pi(.5,"255,60,50",.5);Z.position.copy(_e.position),v.add(Z),i.add(v),i.add(new us(8029896,2759184,.3));const W=new wa(16773336,1.45,4.5,Math.PI*.16,.55,1);W.position.set(.25,2.6,1),W.target.position.set(0,0,-.05),W.castShadow=!0,W.shadow.mapSize.set(2048,2048),W.shadow.camera.near=1.2,W.shadow.camera.far=3.6,W.shadow.bias=-3e-4,W.shadow.normalBias=.001,i.add(W,W.target);const de=new Uo(9085183,.35);de.position.set(-1,1.5,-2),i.add(de);const oe=[];for(const ie of[-.42,.42]){const Ce=new Gn(16754768,.32,.7,1.6);Ce.position.set(ie,.43,-.2),i.add(Ce),oe.push(Ce)}const ge=fs(o);return{id:"capilla",splineData:n,trackOpts:{ledColors:[16765802,16777215,16739162,9087231],curbColors:[14264634,16249832],railColor:15260080,steelColor:12098138,glowGroundY:.001},suelos:[o],tomas:[{p:[0,.55,.95],m:[0,.1,-.1]},{p:[-.18,.2,.2],m:[-.42,.22,-.2]},{p:[.15,.12,.12],m:[0,.12,-.2]},{p:[.3,.16,.28],m:[.12,.06,.13]}],actualizar(ie,Ce,J){J.renderer.toneMappingExposure=.86,J.bloomPass.strength=.24,J.bloomPass.radius=.4,J.bloomPass.threshold=1.1;for(const le of ge)le(ie);oe.forEach((le,N)=>{le.intensity=.3+Math.sin(ie*11+N*3)*.03+Math.sin(ie*27+N)*.02})}}}function ku(i,e,t,n=null){const o=document.createElement("canvas");o.width=i,o.height=e,t(o.getContext("2d"),i,e);const a=new Ut(o);return a.colorSpace=zt,n&&(a.wrapS=a.wrapT=Rt,a.repeat.set(...n)),a}function Gd(i){let e=i;return()=>(e=e*16807%2147483647,e/2147483647)}function q1(i,e,t,n){const o=i.samples,a=o.length,s=14,r=[],l=[],c=Gd(11),d=[];for(let x=0;x<=s;x++)d.push(c());const h=(t-e+a)%a;for(let x=0;x<=h;x++){const b=o[(e+x)%a],m=new D(...b.position),u=new D(...b.right),g=new D(...b.normal),_=Math.sin(x/h*Math.PI);for(let w=0;w<=s;w++){const E=w/s*Math.PI,S=.024+.006*Math.sin(x*.7+w*1.3)*d[w]+.01*_,C=m.clone().addScaledVector(u,Math.cos(E)*S*1.1).addScaledVector(g,Math.sin(E)*S-.004);if(r.push(C.x,C.y,C.z),x<h&&w<s){const M=x*(s+1)+w,A=M+s+1;l.push(M,A,M+1,M+1,A,A+1)}}}const f=new Lt;f.setAttribute("position",new mt(r,3)),f.setIndex(l),f.computeVertexNormals();const p=new L(f,new Ee({color:n,roughness:.95,side:Jt,flatShading:!0}));return p.castShadow=!0,p.receiveShadow=!0,p}async function Y1(i,{reverso:e=!1}={}){const t=p0(H1),n=e?Ur(t):t,o=new Ve(15901534);i.background=o.clone(),i.fog=new Ar(14718314,1.4,6.5);const a=new et;a.name="Gruta",i.add(a);const s=Gd(5),r=new L(new At(7,32,16),new Qt({side:Cn,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP;
        void main(){
          float h = clamp(vP.y, -0.1, 1.0);
          vec3 alto = vec3(0.16, 0.22, 0.48);
          vec3 medio = vec3(0.86, 0.48, 0.42);
          vec3 bajo = vec3(1.0, 0.68, 0.36);
          vec3 c = mix(bajo, medio, smoothstep(0.0, 0.18, h));
          c = mix(c, alto, smoothstep(0.15, 0.7, h));
          float sol = pow(max(0.0, dot(vP, normalize(vec3(0.8, 0.12, -0.6)))), 220.0);
          float corona = pow(max(0.0, dot(vP, normalize(vec3(0.8, 0.12, -0.6)))), 12.0);
          c += vec3(1.6, 1.1, 0.6) * sol + vec3(0.5, 0.25, 0.1) * corona;
          gl_FragColor = vec4(c, 1.0);
        }`}));i.add(r);const l=ku(512,512,(V,q,X)=>{V.fillStyle="#b9ab92",V.fillRect(0,0,q,X);for(let O=0;O<8;O++)for(let P=0;P<8;P++){const ce=160+Math.floor(s()*40);V.fillStyle=`rgb(${ce},${ce-10},${ce-30})`,V.fillRect(P*q/8+3+O%2*16,O*X/8+3,q/8-6,X/8-6)}},[6,4]),c=new L(new Le(1.7,.04,1.1),new Ee({map:l,roughness:.9}));c.position.y=-.02,c.receiveShadow=!0,a.add(c);const d=new L(new no(6,48),new Ee({map:ku(256,256,(V,q,X)=>{V.fillStyle="#4f7a34",V.fillRect(0,0,q,X);for(let O=0;O<4e3;O++)V.fillStyle=s()<.5?"#5d8a3c":"#3f6a2a",V.fillRect(s()*q,s()*X,2,2)},[30,30]),roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=-.04,d.receiveShadow=!0,a.add(d);const h=9076850,f=new Gt(1.7,.62,120,44),p=f.attributes.position,x=[],b=new Ve(h),m=new Ve(2761758),u={x:-.12,y:.33,rx:.09,ry:.13},g={x:-.42,y:.13,rx:.17,ry:.13};for(let V=0;V<p.count;V++){const q=p.getX(V),X=p.getY(V)+.31;let O=0;O+=Math.sin(q*23+X*7)*.008+Math.sin(q*61-X*37)*.004+Math.sin(q*9+X*19)*.01,O=Math.min(O,.012);let P=0;for(const Me of[u,g]){const ye=((q-Me.x)/Me.rx)**2+((X-Me.y)/Me.ry)**2;ye<1&&(O-=(Me===g?.12:.055)*(1-ye),P=Math.max(P,(1-ye)*(Me===g?.9:.6)))}O-=Math.max(0,X-.45)*.4,p.setXYZ(V,q-.12,X,-.377+O);const ce=b.clone().lerp(m,P).multiplyScalar(.92+.08*Math.sin(q*13+X*9));x.push(ce.r,ce.g,ce.b)}f.setAttribute("color",new mt(x,3)),f.computeVertexNormals();const _=new L(f,new Ee({vertexColors:!0,roughness:.95,flatShading:!0}));_.castShadow=!0,_.receiveShadow=!0,a.add(_);for(const[V,q,X,O,P]of[[-.55,-.62,.32,.72,1],[-.1,-.66,.36,.8,2],[.35,-.62,.3,.7,3],[-.92,-.45,.2,.4,4],[.78,-.48,.2,.42,5]]){const ce=Qa({radio:X,alto:O,color:h,semilla:P,detalle:3});ce.position.set(V,0,q),ce.scale.z=.5,a.add(ce)}for(const[V,q,X,O,P]of[[-.6,-.2,.08,.06,12],[-.5,-.29,.07,.08,13],[-.36,-.33,.08,.1,14],[-.12,-.34,.09,.11,15],[.1,-.33,.08,.1,16],[.26,-.29,.06,.09,17]]){const ce=Qa({radio:X,alto:O,color:8287334,semilla:P,detalle:2});ce.position.set(V,0,q),a.add(ce)}const w=new L(new Le(.12,.012,.07),new Ee({color:h,roughness:.95}));w.position.set(-.12,.236,-.395),a.add(w);const E=zd({alto:.17,pedestal:.01});E.position.set(-.12,.242,-.4);const S=new L(new Un(.021,.004,8,24),rt.celeste);S.rotation.x=Math.PI/2,S.position.y=.095,E.add(S),a.add(E);const C=_r({alto:.06,colores:[15913547,16770688],jarron:null,n:10});C.position.set(-.07,.236,-.39),a.add(C);const M=new Gn(14674175,.4,.45,1.5);M.position.set(-.12,.34,-.3),a.add(M);const A=n.samples.length;let v=n.samples.findIndex(V=>V.sector===5);e&&(v=(A-v)%A);const R=e?(v-70+A)%A:(v-30+A)%A;a.add(q1(n,R,(R+75)%A,8682092));const F=Qa({radio:.05,alto:.04,color:9076850,semilla:21});F.position.set(.45,0,-.1),a.add(F);const H=ba({alto:.3,mat:rt.maderaOscura,cristo:rt.marfil,base:!1});H.position.set(.45,.02,-.1),H.rotation.y=-.6,a.add(H);const z=new et,Y=new Ee({color:2763310,roughness:.5,metalness:.8});for(let V=0;V<3;V++){const q=new L(new Le(.24,.004,.022),Y);q.position.set(0,.03+V*.028,-V*.022),z.add(q);for(let X=0;X<9;X++){const O=ds({alto:.014+s()*.012,radio:.0032,platillo:!1});O.position.set(-.11+X*.0275,.032+V*.028,-V*.022),z.add(O)}}for(const V of[-.12,.12]){const q=new L(new Le(.006,.1,.06),Y);q.position.set(V,.05,-.022),z.add(q)}z.position.set(.02,0,.06),a.add(z);const j=new Gn(16752714,.45,.6,1.5);j.position.set(.02,.12,.05),a.add(j);const Q=new et,_e=new L(new st(.1,.105,.02,32,1,!0),new Ee({color:12432288,roughness:.8,side:Jt}));_e.position.y=.01,Q.add(_e);const Z=new Ee({color:6267848,roughness:.05,metalness:.4,transparent:!0,opacity:.85}),W=new L(new no(.098,32),Z);W.rotation.x=-Math.PI/2,W.position.y=.016,Q.add(W);const de=new L(new st(.002,.004,.06,8),new Ee({color:13625599,transparent:!0,opacity:.6}));de.position.y=.045,Q.add(de),Q.position.set(-.36,0,.08),a.add(Q);for(const[V,q,X]of[[-.62,.38,16777215],[.66,.4,14828922],[-.7,-.15,15913547],[.7,.05,16777215]]){const O=_r({alto:.09,colores:[X,9356783,X],jarron:null,n:16});O.position.set(V,0,q),a.add(O)}const oe=new Ee({color:2376490,roughness:.9});for(const[V,q,X]of[[.74,-.34,.5],[-.76,-.3,.55],[1,-.6,.7],[-1.05,-.55,.65],[1.2,.3,.6],[-1.2,.35,.6]]){const O=new L(new $n(.06,X,12),oe);O.position.set(V,X/2,q),O.scale.x=.8,O.castShadow=!0,a.add(O)}const ge=new et,ie=new Ee({color:13221806,roughness:.9}),Ce=new L(new Le(.9,.5,.4),ie);Ce.position.y=.25;const J=new L(new Le(.18,.9,.18),ie);J.position.set(0,.45,.22);const le=new L(new $n(.12,.6,8),new Ee({color:5925498,roughness:.6}));le.position.set(0,1.2,.22);const N=new L(new $n(.5,.25,4),new Ee({color:5925498,roughness:.6}));N.rotation.y=Math.PI/4,N.scale.z=.5,N.position.y=.62,ge.add(Ce,J,le,N),ge.position.set(1.6,.6,-4.2),ge.rotation.y=-.4,a.add(ge);const y=new L(new At(1.6,24,12,0,Math.PI*2,0,Math.PI/2),new Ee({color:4151858,roughness:1}));y.scale.set(1.6,.4,1),y.position.set(1.4,-.04,-4.4),a.add(y);for(const[V,q,X]of[[-3,-5,2.4],[0,-6,3],[3.5,-5.5,2.6]]){const O=new L(new $n(X,X*.7,6),new Ee({color:5986938,roughness:1,flatShading:!0}));O.position.set(V,X*.3,q),a.add(O)}i.add(new us(16763034,3815978,.55));const B=new Uo(16756848,1.7);B.position.set(1.6,.9,.9),B.castShadow=!0,B.shadow.mapSize.set(2048,2048),B.shadow.camera.left=-.9,B.shadow.camera.right=.9,B.shadow.camera.top=.7,B.shadow.camera.bottom=-.7,B.shadow.camera.near=.2,B.shadow.camera.far=4,B.shadow.bias=-4e-4,B.shadow.normalBias=.0012,i.add(B);const k=new Uo(10137855,.35);k.position.set(-1,.8,1),i.add(k);const he=pi(1.6,"255,190,120",.35);he.position.set(5.6,.9,-4.2),i.add(he);const ne=fs(a);return{id:"gruta",splineData:n,trackOpts:{ledColors:[16765802,16777215,9356783,16765802],curbColors:[3108792,16118506],railColor:14735040,steelColor:9076850,glowGroundY:.001},suelos:[a],tomas:[{p:[.1,.45,.85],m:[-.05,.12,-.2]},{p:[-.1,.27,-.14],m:[-.12,.3,-.37]},{p:[.25,.2,.15],m:[.45,.12,-.1]},{p:[-.15,.1,.3],m:[.02,.06,.06]}],actualizar(V,q,X){X.renderer.toneMappingExposure=.88,X.bloomPass.strength=.22,X.bloomPass.radius=.35,X.bloomPass.threshold=1.15;for(const O of ne)O(V);j.intensity=.42+Math.sin(V*9)*.04+Math.sin(V*23)*.03}}}const $1={escritorio:z1,pesebre:X1,capilla:j1,gruta:Y1},Vu={escritorio:"«Lámpara es tu palabra para mis pasos» · Sal 119,105",pesebre:"«Hoy os ha nacido un Salvador» · Lc 2,11",capilla:"«Haced esto en memoria mía» · Lc 22,19",gruta:"«Yo soy la Inmaculada Concepción» · Lourdes, 1858"},lr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Z1=new Pr(-1,1,1,-1,0,1);class J1 extends Lt{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const K1=new J1;class Nr{constructor(e){this._mesh=new L(K1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hd extends Vo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ma.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Nr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Gu extends Vo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,r;this.inverse?(s=0,r=1):(s=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,s,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class Q1 extends Vo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class e2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hd(lr),this.copyPass.material.blending=Ti,this.timer=new up}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let o=0,a=this.passes.length;o<a;o++){const s=this.passes[o];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(s instanceof Gu?n=!0:s instanceof Q1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class t2 extends Vo{constructor(e,t,n=null,o=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){const o=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=o}}const Ks={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class n2 extends Vo{constructor(e,t,n){super(),this.scene=e,this.camera=t;const o=n.focus!==void 0?n.focus:1,a=n.aperture!==void 0?n.aperture:.025,s=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Wn(1,1,{minFilter:vn,magFilter:vn,type:Zn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Td,this._materialDepth.depthPacking=Sf,this._materialDepth.blending=Ti;const r=Ma.clone(Ks.uniforms);r.tDepth.value=this._renderTargetDepth.texture,r.focus.value=o,r.aspect.value=t.aspect,r.aperture.value=a,r.maxblur.value=s,r.nearClip.value=t.near,r.farClip.value=t.far,this.materialBokeh=new Qt({defines:Object.assign({},Ks.defines),uniforms:r,vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader}),this.uniforms=r,this._fsQuad=new Nr(this.materialBokeh),this._oldClearColor=new Ve}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(o),e.autoClear=a}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const i2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Sa extends Vo{constructor(e,t=1,n,o){super(),this.strength=t,this.radius=n,this.threshold=o,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(a,s,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Wn(a,s,{type:Zn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Wn(a,s,{type:Zn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),s=Math.round(s/2)}const r=i2;this.highPassUniforms=Ma.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ne(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ma.clone(lr.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:lr.vertexShader,fragmentShader:lr.fragmentShader,premultipliedAlpha:!0,blending:Hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Nt,this._fsQuad=new Nr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(n,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,o),this.renderTargetsVertical[a].setSize(n,o),this.separableBlurMaterials[a].uniforms.invSize.value=new Ne(1/n,1/o),n=Math.round(n/2),o=Math.round(o/2)}render(e,t,n,o,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);return new Qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Sa.BlurDirectionX=new Ne(1,0);Sa.BlurDirectionY=new Ne(0,1);const Qs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class o2 extends Vo{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ma.clone(Qs.uniforms),this.material=new Ad({name:Qs.name,uniforms:this.uniforms,vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader}),this._fsQuad=new Nr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Vt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Oc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const a2={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ne(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};class s2 extends os{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Le;e.deleteAttribute("uv");const t=new Ee({side:Cn}),n=new Ee,o=new Gn(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new L(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const s=new Zi(e,n,6),r=new Kt;r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),r.updateMatrix(),s.setMatrixAt(0,r.matrix),r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),r.updateMatrix(),s.setMatrixAt(1,r.matrix),r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),r.updateMatrix(),s.setMatrixAt(2,r.matrix),r.position.set(-2.017,.018,6.124),r.rotation.set(0,.333,0),r.scale.set(2.002,4.566,2.064),r.updateMatrix(),s.setMatrixAt(3,r.matrix),r.position.set(2.291,-.756,-2.621),r.rotation.set(0,-.286,0),r.scale.set(1.546,1.552,1.496),r.updateMatrix(),s.setMatrixAt(4,r.matrix),r.position.set(-2.193,-.369,-5.547),r.rotation.set(0,.516,0),r.scale.set(3.875,3.487,2.986),r.updateMatrix(),s.setMatrixAt(5,r.matrix),this.add(s);const l=new L(e,la(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new L(e,la(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new L(e,la(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const h=new L(e,la(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new L(e,la(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new L(e,la(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function la(i){return new ip({color:0,emissive:16777215,emissiveIntensity:i})}const r2=`
  #include <common>
  varying vec2 vUv;
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform float maxblur;
  uniform float aperture;
  uniform float nearClip;
  uniform float farClip;
  uniform float focus;
  uniform float aspect;
  #include <packing>

  float getDepth( const in vec2 screenPosition ) {
    return texture2D( tDepth, screenPosition ).x;
  }

  float getViewZ( const in float depth ) {
    #if PERSPECTIVE_CAMERA == 1
      return perspectiveDepthToViewZ( depth, nearClip, farClip );
    #else
      return orthographicDepthToViewZ( depth, nearClip, farClip );
    #endif
  }

  void main() {
    vec2 aspectcorrect = vec2( 1.0, aspect );
    float viewZ = getViewZ( getDepth( vUv ) );
    float rawFactor = focus + viewZ;
    // Keep a generous crystal-sharp focal band (>= ±11mm in macro close-ups) so the entire 13mm
    // kart body, wheels, and helmet stay 100% tack-sharp while background props melt into bokeh
    float deadzone = max( 0.011, focus * 0.095 );
    float absDiff = max( 0.0, abs( rawFactor ) - deadzone );
    // Relative optical circle-of-confusion scaling so close-up macro shots (focus ~ 0.06m) and
    // wide shots (focus ~ 0.50m) both transition smoothly without sudden foreground clipping
    float normScale = 1.0 / max( 0.22, focus * 1.15 );
    float signedFactor = sign( rawFactor ) * absDiff * ( 0.42 + 0.16 * normScale );
    vec2 dofblur = vec2( clamp( signedFactor * aperture, -maxblur, maxblur ) );
    vec2 radius = dofblur * aspectcorrect;

    vec4 col = texture2D( tColor, vUv );
    float centerBlurMag = abs( dofblur.x );
    if ( centerBlurMag < 0.00020 ) {
      gl_FragColor = vec4( col.rgb, 1.0 );
      return;
    }

    // 48-point Golden-Angle Vogel spiral with depth-aware foreground occlusion protection
    // so sharp foreground objects (like the car) never bleed blurry halos onto the background behind them
    float ign = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) );
    float thetaJitter = ( ign - 0.5 ) * 0.45;
    float cj = cos( thetaJitter );
    float sj = sin( thetaJitter );
    mat2 rotMat = mat2( cj, -sj, sj, cj );

    vec4 acc = col;
    float totalWeight = 1.0;
    for ( int i = 1; i <= 48; i++ ) {
      float fi = float( i );
      float r = sqrt( fi / 48.5 );
      float theta = fi * 2.39996323;
      vec2 offset = rotMat * ( vec2( cos( theta ), sin( theta ) ) * r );
      vec2 sampleUv = vUv + offset * radius;
      float sampleViewZ = getViewZ( getDepth( sampleUv ) );
      float sampleDiff = max( 0.0, abs( focus + sampleViewZ ) - deadzone );

      // Prevent background pixels from sampling sharp closer foreground pixels across depth edges
      float fgReject = ( sampleViewZ > viewZ + 0.006 )
        ? smoothstep( 0.0, max( 0.008, absDiff * 0.55 ), sampleDiff )
        : 1.0;
      float w = ( 1.0 - 0.26 * r * r ) * fgReject;
      acc += texture2D( tColor, sampleUv ) * w;
      totalWeight += w;
    }

    gl_FragColor = vec4( acc.rgb / totalWeight, 1.0 );
  }
`,er={alta:{pixel:2,bokeh:!0,sombras:!0,bloom:!0},media:{pixel:1.5,bokeh:!1,sombras:!0,bloom:!0},baja:{pixel:1,bokeh:!1,sombras:!1,bloom:!1}};function l2(i){const e=new s1({antialias:!0,powerPreference:"high-performance"});e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Ya,e.toneMapping=Sr,e.toneMappingExposure=.8,i.appendChild(e.domElement);const t=new Yn(46,window.innerWidth/window.innerHeight,.0018,12);let n=new os;const a=new Ec(e).fromScene(new s2,.04).texture,s=new e2(e),r=e.getDrawingBufferSize(new Ne);s.renderTarget1.depthTexture=new Fo(r.x,r.y,si),s.renderTarget2.depthTexture=new Fo(r.x,r.y,si);const l=new t2(n,t);s.addPass(l);const c=new n2(n,t,{focus:.12,aperture:0,maxblur:0}),d=c._renderTargetDepth||c.renderTargetDepth;d&&d.dispose(),c.setSize=function(M,A){this.materialBokeh.uniforms.aspect.value=M/A},c.materialBokeh.defines.DEPTH_PACKING=0,c.materialBokeh.fragmentShader=r2,c.materialBokeh.needsUpdate=!0,s.addPass(c);const h=new Sa(new Ne(window.innerWidth,window.innerHeight),.06,.22,1.15);s.addPass(h),s.addPass(new o2);const f=new Hd(a2);s.addPass(f);const p=new os,x=new Set;function b(M,A,v){const R=M._fsQuad||M.fsQuad;R&&(R.material=v,R.render(A))}c.render=function(M,A,v){this.uniforms.tColor.value=v.texture,this.uniforms.tDepth.value=v.depthTexture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,M.setRenderTarget(this.renderToScreen?null:A),!this.renderToScreen&&this.clear&&M.clear(),b(this,M,this.materialBokeh),m(M,v)};function m(M,A){if(!x.size)return;for(const R of x){const F=R.material.uniforms;F&&(F.tSceneDepth.value=A.depthTexture,F.uNearClip.value=t.near,F.uFarClip.value=t.far,F.uFocus.value=c.uniforms.focus.value,F.uAperture.value=c.uniforms.aperture.value,F.uMaxBlur.value=c.uniforms.maxblur.value,F.uResolution.value.set(A.width,A.height))}const v=M.autoClear;M.autoClear=!1,M.render(p,t),M.autoClear=v}let u=er.alta,g="alta";function _(M){u=er[M]||er.alta,g=er[M]?M:"alta";const A=Math.min(window.devicePixelRatio||1,u.pixel);e.setPixelRatio(A),s.setPixelRatio(A),e.shadowMap.enabled=u.sombras,n.traverse(v=>{if(v.material){const R=Array.isArray(v.material)?v.material:[v.material];for(const F of R)F.needsUpdate=!0}}),w()}function w(){const M=window.innerWidth,A=window.innerHeight;t.aspect=M/A,t.updateProjectionMatrix(),e.setSize(M,A),s.setSize(M,A);const v=e.getDrawingBufferSize(new Ne);f.material.uniforms.resolution.value.set(1/v.x,1/v.y),h.setSize(M,A)}window.addEventListener("resize",w);function E(M){n=M,n.environment=a,(n.environmentIntensity===void 0||n.environmentIntensity===1)&&(n.environmentIntensity=.1),l.scene=M,c.scene=M}function S(M,A,v){c.uniforms.focus.value=M,c.uniforms.aperture.value=u.bokeh?A:0,c.uniforms.maxblur.value=u.bokeh?v:0}function C(){h.enabled=u.bloom;for(const M of x)M.parent!==p&&p.add(M);s.render()}return{renderer:e,camera:t,composer:s,bloomPass:h,bokehPass:c,get escena(){return n},get calidad(){return g},setEscena:E,setCalidad:_,setEnfoque:S,redimensionar:w,render:C,agregarChispas(M){x.add(M)},quitarChispas(M){x.delete(M),M.parent&&M.parent.remove(M)}}}const El=["persecucion","lejana","cabina"],c2={persecucion:"Persecución",lejana:"Lejana",cabina:"Cabina"};function u2(i){const e=i.camera,t=new D,n=new D,o=new D(0,1,0),a=new D,s=new D,r=new D,l=new D,c=new D;let d=0,h=0,f="persecucion",p=.05;function x(E,S=.0018){(Math.abs(e.fov-E)>.001||Math.abs(e.near-S)>1e-7)&&(e.fov=E,e.near=S,e.updateProjectionMatrix())}function b(E,S,C=o){e.position.copy(E),e.up.copy(C),e.lookAt(S)}function m(E,S,C,M={}){const A=E.boostActive>0?1:0;a.copy(E.tangent).applyAxisAngle(E.normal,(E.headingYaw||0)*.4).normalize();const v=(M.escala??.38)/.38,R=Math.max(0,(M.altoVehiculo??.008)-.0085)*(M.escala??.38);let F,H,z;if(f==="cabina"?(F=-.0022,H=.0034,z=.032):f==="lejana"?(F=.03*v+R*1.5,H=.0145*v+R*1.8,z=.03):(F=.0154*v+R*2.2,H=.0074*v+R*2.6,z=.024),s.copy(E.position).addScaledVector(a,-F).addScaledVector(E.normal,H+E.hopHeight*.38),r.copy(E.position).addScaledVector(a,z).addScaledVector(E.normal,.003*v+E.hopHeight*.22),d>0){d=Math.max(0,d-S);const j=d/.18*h;s.addScaledVector(E.right,Math.sin(C*95)*8e-4*j).addScaledVector(E.normal,Math.cos(C*125)*8e-4*j)}f==="cabina"?l.copy(E.normal):l.set(0,.58,0).addScaledVector(E.normal,.42).normalize(),o.lerp(l,1-Math.exp(-S*16)).normalize(),t.copy(s),n.copy(r);const Y=f==="cabina"?46:41.5+A*5+Math.min(1,Math.abs(E.speed)/.3)*3;x(Ke.lerp(e.fov,Y,1-Math.exp(-S*4)),.0018),b(t,n,o),u(E.position,f==="cabina"?0:1)}function u(E,S=1,C=!1){e.getWorldDirection(c);const M=Ke.clamp(s.copy(E).sub(e.position).dot(c),.003,3);p=Ke.lerp(p,M,.4),C?i.setEnfoque(p,.0065*S,.0035*S):i.setEnfoque(p,.0015*S,.0011*S)}function g(E,S,C=40,M=.002){x(C,M),t.copy(E),n.copy(S),o.set(0,1,0),b(t,n,o)}function _(E,S,C,M,A=38){s.set(E.x+Math.cos(M)*S,E.y+C,E.z+Math.sin(M)*S),g(s,E,A)}function w(E,S,C,M,A,v=50){const R=E(S),F=R.position.clone(),H=R.right.clone(),z=R.normal.clone(),Y=E(S+A);s.copy(F).addScaledVector(H,M).addScaledVector(z,C),r.copy(Y.position),g(s,r,v)}return{camera:e,seguir:m,toma:g,orbita:_,sobrevuelo:w,enfocarEn:u,temblar(E){d=.18,h=E},get modo(){return f},set modo(E){f=E},siguienteModo(){return f=El[(El.indexOf(f)+1)%El.length],f}}}const Lo=3,Cl=[15,12,10,8,6,4],Wd="gran-premio-fe-v1",Li=[{id:"lucia",nombre:"Lucía",color:3837920,traje:1194606,tocado:"casco",habilidad:"Luz de salida",texto:"Arranca con un turbo más largo.",bono:{turbo:1.08}},{id:"pedro",nombre:"Pedro",color:4175968,traje:1331242,tocado:"casco",habilidad:"Pescador de hombres",texto:"Acelera con fuerza de remero.",bono:{aceleracion:1.05}},{id:"miguel",nombre:"Miguel",color:14699082,traje:7215642,tocado:"casco",habilidad:"Pie firme",texto:"Se agarra mejor en las curvas.",bono:{agarre:1.06}},{id:"ana",nombre:"Ana",color:11037408,traje:4464734,tocado:"casco",habilidad:"Oración constante",texto:"Su derrape carga el turbo más rápido.",bono:{turbo:1.06,manejo:1.02}},{id:"tomas",nombre:"Padre Tomás",color:14262842,casco:1710623,traje:1579038,tocado:"clerical",habilidad:"Bendición",texto:"Velocidad punta serena y constante.",bono:{velocidad:1.03}},{id:"tobias",nombre:"Tobías",color:5231045,traje:1331788,tocado:"casco",habilidad:"Guiado por Rafael",texto:"Dirección más precisa.",bono:{manejo:1.06}},{id:"rosa",nombre:"Rosa",color:16744118,traje:8003146,tocado:"casco",habilidad:"Aura de paz",texto:"Equilibrada en todo.",bono:{velocidad:1.01,aceleracion:1.02,manejo:1.02}},{id:"clara",nombre:"Hermana Clara",color:6979520,casco:1909302,traje:2764613,tocado:"velo",habilidad:"Campanas",texto:"Sale disparada de cada curva.",bono:{aceleracion:1.03,turbo:1.04}}],Di=[{id:"kart",tipo:"kart",nombre:"Kart Peregrino",clase:"Coche",desc:"El clásico. Equilibrado en todo.",velocidad:1,aceleracion:1,manejo:1,agarre:1,turbo:1,peso:1},{id:"bolido",tipo:"bolido",nombre:"Bólido de la Fe",clase:"Coche",desc:"Monoplaza de carreras: punta y agarre, pero arranca lento.",velocidad:1.07,aceleracion:.9,manejo:1.04,agarre:1.1,turbo:.95,peso:.9},{id:"furgoneta",tipo:"furgoneta",nombre:"Furgoneta Misionera",clase:"Coche",desc:"Pesada y estable. Nadie la saca del camino.",velocidad:.97,aceleracion:.94,manejo:.9,agarre:1.14,turbo:1.05,peso:1.45},{id:"papamovil",tipo:"papamovil",nombre:"Papamóvil",clase:"Coche",desc:"Lento al salir, imparable en recta. Su turbo dura más.",velocidad:1.05,aceleracion:.84,manejo:.86,agarre:1.02,turbo:1.22,peso:1.6},{id:"moto",tipo:"moto",nombre:"Moto Peregrina",clase:"Moto",desc:"Deportiva: acelera y gira de maravilla, se agarra menos.",velocidad:1.03,aceleracion:1.12,manejo:1.14,agarre:.9,turbo:1.05,peso:.7},{id:"scooter",tipo:"scooter",nombre:"Scooter Parroquial",clase:"Moto",desc:"Ágil y ligerísimo. Ideal para las curvas cerradas.",velocidad:.95,aceleracion:1.26,manejo:1.2,agarre:.95,turbo:1.1,peso:.55},{id:"chopper",tipo:"chopper",nombre:"Chopper del Arcángel",clase:"Moto",desc:"Rapidísimo en recta, pide frenar antes de las curvas.",velocidad:1.08,aceleracion:1.02,manejo:.86,agarre:.9,turbo:1.12,peso:.95}],Xd=[["velocidad","Velocidad"],["aceleracion","Aceleración"],["manejo","Manejo"],["agarre","Agarre"],["turbo","Turbo"],["peso","Peso"]],es=[{id:"facil",nombre:"Fácil",texto:"Rivales tranquilos que se equivocan a menudo.",ritmo:.88,errores:1.8},{id:"normal",nombre:"Normal",texto:"Una carrera pareja.",ritmo:1,errores:1},{id:"dificil",nombre:"Difícil",texto:"Rivales rápidos que aprovechan cada recta.",ritmo:1.08,errores:.5}],ls=[{id:"escritorio",nombre:"El escritorio del catequista",corto:"Escritorio",desc:"Biblias, el cirio pascual y la Virgen entre teclado y lámpara."},{id:"pesebre",nombre:"El Pesebre de Belén",corto:"Pesebre",desc:"Musgo, el río de papel plata, pastores y la estrella."},{id:"capilla",nombre:"El altar de la capilla",corto:"Capilla",desc:"Entre velas, el sagrario y los vitrales encendidos."},{id:"gruta",nombre:"La gruta de Lourdes",corto:"Gruta",desc:"Rocas, velas y flores al atardecer junto a la Virgen."}],wr=[{id:"esperanza",nombre:"Copa de la Esperanza",icono:"🕊️",desc:"Tres mundos para empezar el camino.",carreras:[{mundo:"escritorio"},{mundo:"pesebre"},{mundo:"capilla"}]},{id:"luz",nombre:"Copa de la Luz",icono:"🕯️",desc:"La gruta y dos mundos recorridos al revés.",carreras:[{mundo:"gruta"},{mundo:"capilla",reverso:!0},{mundo:"pesebre",reverso:!0}]},{id:"gloria",nombre:"Copa de la Gloria",icono:"👑",desc:"Los cuatro mundos. Solo para peregrinos valientes.",carreras:[{mundo:"pesebre"},{mundo:"escritorio",reverso:!0},{mundo:"gruta",reverso:!0},{mundo:"capilla"}]}];function cr(i){return ls.find(e=>e.id===i)||ls[0]}function br(i,e){const t={};for(const[n]of Xd)t[n]=i[n]*(e&&e.bono&&e.bono[n]||1);return t}function d2(i){return Math.max(1,Math.min(5,Math.round(3+(i-1)*12)))}function fa(i){return`#${i.toString(16).padStart(6,"0")}`}const En=i=>document.getElementById(i);function po(i){if(i==null||!isFinite(i))return"--:--.--";const e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*100%100);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}.${String(n).padStart(2,"0")}`}const f2=["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fffaf0","#fff4dc","#ffeec6","#ffe6ad","#ffdd92","#ffd478","#ffca5e","#ffc046","#ffb534","#ffaa22","#ff9f14","#ff930a","#ff8800"];function h2(){const i=En("hud-root"),e=En("hud-pos-digit"),t=En("hud-pos-suffix"),n=En("hud-pos-total"),o=En("lb-entries"),a=En("hud-lap-curr"),s=En("hud-lap-total"),r=En("hud-lap-timer"),l=En("hud-lap-split"),c=En("hud-scale-speed"),d=En("hud-aviso"),h=En("hud-f1-countdown"),f=[0,1,2,3,4,5].map(Y=>En(`lap-d${Y}`));let p={},x=null,b=null;const m=[],u=En("speedo-ticks-group"),g=En("speedo-bar-casing");if(u){if(g){const J=[[18.384,106.02400000000002],[64.4,33.2],[269.208,5.904999999999999],[280.108,21.904999999999998],[78.5,49.6],[31.683999999999997,117.82400000000001]];g.setAttribute("points",J.map(([le,N])=>`${le.toFixed(1)},${N.toFixed(1)}`).join(" "))}let ge="";const ie=.13,Ce=(J,le,N,y,B)=>`<polygon id="speedo-seg-${J}" class="speedo-seg" points="${le.toFixed(2)},${N.toFixed(2)} ${y.toFixed(2)},${B.toFixed(2)} ${(y+10.5).toFixed(2)},${(B+11.2).toFixed(2)} ${(le+10.5).toFixed(2)},${(N+11.2).toFixed(2)}" />`;for(let J=0;J<6;J++)ge+=Ce(J,66-(6-J-ie)*7.2,36-(6-J-ie)*-10.8,66-(6-J-1+ie)*7.2,36-(6-J-1+ie)*-10.8);for(let J=0;J<12;J++)ge+=Ce(6+J,66+(J+ie)*16.4,36+(J+ie)*-2.25,66+(J+1-ie)*16.4,36+(J+1-ie)*-2.25);u.innerHTML=ge;for(let J=0;J<18;J++)m.push(En(`speedo-seg-${J}`))}const _=En("minimap-canvas"),w=_?_.getContext("2d"):null;let E=null,S=Y=>Y,C=(Y,j,Q)=>Q;function M(Y){if(!_)return;E=document.createElement("canvas"),E.width=_.width,E.height=_.height;const j=E.getContext("2d"),Q=E.width,_e=E.height,Z=Y.samples,W=Z.length,de=(O,P,ce)=>O-P*.36+ce*.08,oe=(O,P,ce)=>ce*1.08-P*1.48;let ge=1/0,ie=-1/0,Ce=1/0,J=-1/0,le=1/0,N=-1/0;for(const O of Z){const[P,ce,Me]=O.position;ge=Math.min(ge,de(P,ce,Me)),ie=Math.max(ie,de(P,ce,Me)),Ce=Math.min(Ce,oe(P,ce,Me)),J=Math.max(J,oe(P,ce,Me)),le=Math.min(le,ce),N=Math.max(N,ce)}const y=Math.min((Q-88)/Math.max(1e-4,ie-ge),(_e-76)/Math.max(1e-4,J-Ce)),B=(Q-(ie-ge)*y)/2-ge*y,k=(_e-(J-Ce)*y)/2-Ce*y;S=(O,P,ce)=>de(O,P,ce)*y+B,C=(O,P,ce)=>oe(O,P,ce)*y+k;const he=Z.map(O=>({x:S(...O.position),y:C(...O.position),e:O.position[1]})),ne=(O,P=-1/0,ce=1/0)=>{j.beginPath();let Me=!1;for(let ye=0;ye<=W+1;ye++){const se=he[ye%W],I=he[(ye+1)%W];if(se.e>=P&&se.e<=ce){const T=(se.x+I.x)/2,$=(se.y+I.y)/2+O;Me||(j.moveTo(se.x,se.y+O),Me=!0),j.quadraticCurveTo(se.x,se.y+O,T,$)}else Me=!1}j.stroke()};j.lineJoin="round",j.lineCap="round",j.save(),j.shadowColor="rgba(0,0,0,0.9)",j.shadowBlur=20,j.shadowOffsetY=9,j.strokeStyle="rgba(0,0,0,0.68)",j.lineWidth=17.5,ne(2.5),j.restore();const V=6,q=(N-le)/V||1;for(let O=0;O<V;O++){const P=O===0?-1/0:le+O*q-q*.15,ce=O===V-1?1/0:le+(O+1)*q,Me=205+O*10;j.strokeStyle="rgba(0,0,0,0.85)",j.lineWidth=19.2,ne(2.2,P,ce),j.strokeStyle=`rgb(${92+O*8},${78+O*8},${60+O*6})`,j.lineWidth=12.2,ne(4,P,ce),j.strokeStyle=`rgb(${Math.min(255,Me+30)},${Math.min(255,Me+18)},${Me-8})`,j.lineWidth=12,ne(0,P,ce)}const X=he[Y.start_finish_index??0];j.fillStyle="#ffffff",j.fillRect(X.x-7,X.y-3,14,6)}function A(Y,j,Q,_e,Z){w.fillStyle="rgba(0,8,16,0.75)",w.beginPath(),w.arc(Y,j,_e+2.5,0,Math.PI*2),w.fill(),w.fillStyle=Q,w.beginPath(),w.arc(Y,j,_e,0,Math.PI*2),w.fill(),w.fillStyle=Z,w.beginPath(),w.arc(Y,j,_e*.4,0,Math.PI*2),w.fill()}function v(Y,j){if(!w||!E)return;w.clearRect(0,0,_.width,_.height),w.drawImage(E,0,0);for(const W of j){const de=W.modelo.kartRoot.position;A(S(de.x,de.y,de.z),C(de.x,de.y,de.z),fa(W.color),7.5,"#ffffff")}const Q=S(Y.x,Y.y,Y.z),_e=C(Y.x,Y.y,Y.z),Z=w.createRadialGradient(Q,_e,3,Q,_e,26);Z.addColorStop(0,"rgba(255,214,110,0.9)"),Z.addColorStop(1,"rgba(255,190,60,0)"),w.fillStyle=Z,w.beginPath(),w.arc(Q,_e,26,0,Math.PI*2),w.fill(),A(Q,_e,"#ffd25a",10,"#fff8e0")}function R(Y,j,Q){const _e=Math.round(Math.abs(Y.speed)*102.35*3.6);if(_e!==p.kmh){p.kmh=_e,c&&(c.textContent=String(_e));const ie=_e<=0?0:Math.min(18,Math.max(1,Math.round(_e/104*18)));ie!==p.seg&&(p.seg=ie,m.forEach((Ce,J)=>{Ce&&(Ce.style.fill=J<ie?f2[J]:"rgba(255,255,255,0.12)",J<ie&&J>=10?Ce.setAttribute("filter","url(#speedoCyanGlow)"):Ce.removeAttribute("filter"))}))}const Z=j.clasificacion(),W=Z.indexOf(j.yo)+1;W!==p.puesto&&(p.puesto=W,e.textContent=String(W),t.textContent="º",e.className=`hud-pos-digit pos-${W===1?"1st":W===2?"2nd":W===3?"3rd":"4th"}`,n&&(n.textContent=`/${Z.length}`));const de=Z.map((ie,Ce)=>{let J;return Ce===0?J=ie.llego?po(ie.tiempo):"LÍDER":ie.llego&&Z[0].llego?J=`+${(ie.tiempo-Z[0].tiempo).toFixed(1)}s`:J=`+${Math.max(0,(Z[0].progreso-ie.progreso)/.2).toFixed(1)}s`,`<div class="lb-row ${ie.esJugador?"is-player":""}"><div class="lb-row-left"><span class="lb-pos">${Ce+1}</span><span class="lb-dot" style="background:${fa(ie.color)};"></span><span class="lb-name">${ie.esJugador?"TÚ":ie.nombre.toUpperCase()}</span></div><span class="lb-gap">${J}</span></div>`}).join("");de!==p.filas&&(p.filas=de,o.innerHTML=de);const oe=Math.min(Lo,j.yo.vuelta);oe!==p.vuelta&&(p.vuelta=oe,a.textContent=String(oe),s&&(s.textContent=String(Lo)));const ge=po(j.yo.llego?j.yo.tiempo:Q);if(ge!==p.crono){p.crono=ge;const ie=[0,1,3,4,6,7];f.forEach((Ce,J)=>{Ce&&Ce.textContent!==ge[ie[J]]&&(Ce.textContent=ge[ie[J]])}),r.setAttribute("aria-label",ge)}v(Y.position,j.rivales)}function F(Y,j=1600,Q=""){d&&(d.textContent=Y,d.className=`hud-aviso ${Q}`,d.offsetWidth,d.classList.add("anim"),clearTimeout(x),x=setTimeout(()=>d.classList.add("hidden"),j))}function H(Y){l&&(l.textContent=Y,l.classList.remove("hidden"),clearTimeout(b),b=setTimeout(()=>l.classList.add("hidden"),2600))}function z(Y){if(h){if(!Y){h.classList.add("hidden");return}h.textContent=Y,h.classList.remove("hidden"),h.classList.remove("pulso"),h.offsetWidth,h.classList.add("pulso")}}return{mostrar(Y){i.classList.toggle("oculto",!Y)},prepararMapa:M,actualizar:R,aviso:F,parcial:H,cuenta:z,reiniciar(){p={},l==null||l.classList.add("hidden"),d==null||d.classList.add("hidden"),z("")}}}function p2({alPausa:i,alCamara:e,alSonido:t,alConfirmar:n}={}){const o=new Set,a={acel:!1,freno:!1,izq:!1,der:!1};let s={};const r=h=>h.target&&["INPUT","TEXTAREA","SELECT"].includes(h.target.tagName);window.addEventListener("keydown",h=>{r(h)||h.metaKey||h.ctrlKey||h.altKey||(o.add(h.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(h.code)&&h.preventDefault(),!h.repeat&&(h.code==="Escape"||h.code==="KeyP"?i==null||i():h.code==="KeyC"?e==null||e():h.code==="KeyM"?t==null||t():(h.code==="Enter"||h.code==="Space")&&(n==null||n())))}),window.addEventListener("keyup",h=>o.delete(h.code)),window.addEventListener("blur",()=>{o.clear();for(const h of Object.keys(a))a[h]=!1});const l={forward:"acel",backward:"freno",left:"izq",right:"der"};for(const h of document.querySelectorAll("[data-control]")){const f=l[h.dataset.control],p=b=>{b.preventDefault(),a[f]=!0,h.classList.add("is-pressed");try{h.setPointerCapture(b.pointerId)}catch{}},x=()=>{a[f]=!1,h.classList.remove("is-pressed")};h.addEventListener("pointerdown",p);for(const b of["pointerup","pointercancel","lostpointercapture"])h.addEventListener(b,x);h.addEventListener("contextmenu",b=>b.preventDefault())}function c(){const h={acel:!1,freno:!1,izq:!1,der:!1,pausa:!1,camara:!1,ok:!1};if(!navigator.getGamepads)return h;let f=null;for(const m of navigator.getGamepads())if(m&&m.connected){f=m;break}if(!f)return h;const p=m=>!!(f.buttons[m]&&f.buttons[m].pressed),x=m=>f.buttons[m]?f.buttons[m].value:0,b=f.axes[0]||0;return{acel:p(0)||x(7)>.3,freno:p(1)||x(6)>.3,izq:b<-.35||p(14),der:b>.35||p(15),pausa:p(9),camara:p(3),ok:p(0)}}function d(){const h=c();return h.pausa&&!s.pausa&&(i==null||i()),h.camara&&!s.camara&&(e==null||e()),h.ok&&!s.ok&&(n==null||n()),s=h,{acel:o.has("KeyW")||o.has("ArrowUp")||a.acel||h.acel,freno:o.has("KeyS")||o.has("ArrowDown")||a.freno||h.freno,izq:o.has("KeyA")||o.has("ArrowLeft")||a.izq||h.izq,der:o.has("KeyD")||o.has("ArrowRight")||a.der||h.der}}return{leer:d,teclas:o,tactil:a}}const tr=["inicio","modo","piloto","vehiculo","pista"],Hu={modo:"Paso 1 de 4 · Modo y clase",piloto:"Paso 2 de 4 · Piloto",vehiculo:"Paso 3 de 4 · Vehículo",pista:"Paso 4 de 4 · Copa o circuito",pistaAmigos:"Paso 4 de 4 · Mundo y rivales",ajustes:"Ajustes"};function m2({sel:i,ajustes:e,datos:t,alCambiarVitrina:n,alJugar:o,alAjuste:a,alSalir:s}){const r=document.getElementById("menu"),l=document.getElementById("menu-panel");let c="inicio";const d=()=>Li.find(u=>u.id===i.piloto)||Li[0],h=()=>Di.find(u=>u.id===i.vehiculo)||Di[0];function f(u,g){const _=br(u,g);return`<div class="barras">${Xd.map(([w,E])=>`<span>${E}</span><span class="barra"><span style="width:${d2(_[w])*20}%"></span></span>`).join("")}</div>`}function p(u){const g=t.trofeos[u];return g?g===1?" · 🏆 Oro":g===2?" · 🥈 Plata":g===3?" · 🥉 Bronce":` · ${g}º`:""}const x={inicio:()=>`
      <div class="menu-cab">
        <div class="welcome-eyebrow">CARRERAS DE PEREGRINOS · ESCALA 1:87</div>
        <div class="menu-titulo">Gran Premio<small>DE LA FE</small></div>
      </div>
      <p class="nota">Corre en coche o en moto por <b>cuatro mundos</b>: el escritorio del catequista, el pesebre de Belén, el altar de la capilla y la gruta de Lourdes. Gana las copas y llévate el <b>Cáliz de Oro</b>.</p>
      <div class="botones-panel" style="justify-content:flex-start">
        <button class="welcome-start-btn" data-ir="modo" type="button"><span class="welcome-start-text">JUGAR</span></button>
        <button class="btn-sec" data-accion="amigos" type="button">👥 CON AMIGOS</button>
        <button class="btn-sec" data-ir="ajustes" type="button">AJUSTES</button>
        ${s?'<button class="btn-sec" data-accion="salir" type="button">SALIR</button>':""}
      </div>
      <h2>Tus copas</h2>
      <div class="lista-mundos">${wr.map(u=>`<div class="paso-copa"><i>${u.icono}</i>${u.nombre}${p(u.id)||" · sin ganar todavía"}</div>`).join("")}</div>
      <p class="ayuda"><kbd>W</kbd>/<kbd>↑</kbd> acelerar · <kbd>S</kbd>/<kbd>↓</kbd> frenar · <kbd>A</kbd><kbd>D</kbd>/<kbd>←</kbd><kbd>→</kbd> girar · <kbd>C</kbd> cámara · <kbd>M</kbd> sonido · <kbd>Esc</kbd> pausa. Gira en las curvas para derrapar y cargar el turbo; sal limpio de la curva para un empujón extra. Pisa el acelerador justo cuando se encienden las cinco velas para una salida perfecta.</p>`,ajustes:()=>`
      <div class="menu-cab"><div class="menu-titulo">Ajustes</div></div>
      <label class="fila-ajuste">Gráficos
        <select data-ajuste="calidad">
          ${[["auto","Automático (recomendado)"],["alta","Alta (desenfoque de cine)"],["media","Media"],["baja","Baja (teléfonos sencillos)"]].map(([u,g])=>`<option value="${u}"${e.calidad===u?" selected":""}>${g}</option>`).join("")}
        </select>
      </label>
      <label class="fila-ajuste">Cámara de carrera
        <select data-ajuste="camara">
          ${[["persecucion","Persecución"],["lejana","Lejana"],["cabina","Cabina"]].map(([u,g])=>`<option value="${u}"${e.camara===u?" selected":""}>${g}</option>`).join("")}
        </select>
      </label>
      <label class="fila-ajuste">Sonido <input type="checkbox" data-ajuste="sonido" ${e.sonido?"checked":""}></label>
      <label class="fila-ajuste">Acelerar solo <input type="checkbox" data-ajuste="autoAcelerar" ${e.autoAcelerar?"checked":""}></label>
      <label class="fila-ajuste">Cinemáticas <input type="checkbox" data-ajuste="cinematicas" ${e.cinematicas?"checked":""}></label>
      <p class="ayuda">Con «Acelerar solo» el vehículo avanza sin mantener el botón. En «Automático» los gráficos se aligeran solos si el teléfono va lento.</p>`,modo:()=>`
      <h2>¿Cómo quieres correr?</h2>
      <div class="rejilla dos">
        <button class="carta${i.modo==="copa"?" on":""}" data-modo="copa" type="button"><b>Copa</b><small>Varios mundos seguidos con puntos. El mejor al final gana la copa.</small></button>
        <button class="carta${i.modo==="libre"?" on":""}" data-modo="libre" type="button"><b>Carrera libre</b><small>Elige un mundo (normal o al revés) y corre una vez.</small></button>
        <button class="carta${i.modo==="amigos"?" on":""}" data-modo="amigos" type="button"><b>👥 Con amigos</b><small>Corran juntos en la misma wifi: cada uno en su teléfono o computadora.</small></button>
      </div>
      <h2>Clase de los rivales</h2>
      <div class="chips">${es.map((u,g)=>`<button class="chip${i.dif===g?" on":""}" data-dif="${g}" type="button">${u.nombre}</button>`).join("")}</div>
      <p class="nota">${es[i.dif].texto}</p>`,piloto:()=>{const u=d();return`
      <h2>Elige tu piloto</h2>
      <div class="rejilla cuatro">${Li.map(g=>`<button class="carta carta-piloto${g.id===u.id?" on":""}" data-piloto="${g.id}" type="button">
          <span class="avatar" style="background:${fa(g.color)}">${g.nombre.replace("Padre ","").replace("Hermana ","")[0]}</span>
          <b>${g.nombre}</b><small>${g.habilidad}</small></button>`).join("")}</div>
      <p class="nota"><b>${u.nombre} · ${u.habilidad}.</b> ${u.texto}</p>`},vehiculo:()=>{const u=d();return`
      <h2>Elige tu vehículo</h2>
      <div class="rejilla dos">${Di.map(g=>`<button class="carta${g.id===i.vehiculo?" on":""}" data-vehiculo="${g.id}" type="button">
          <span class="etiqueta${g.clase==="Moto"?" moto":""}">${g.clase.toUpperCase()}</span>
          <b>${g.nombre}</b><small>${g.desc}</small>${f(g,u)}</button>`).join("")}</div>
      <p class="nota">Las barras ya incluyen la habilidad de <b>${u.nombre}</b>.</p>`},pista:()=>i.modo==="copa"?`
        <h2>Elige la copa</h2>
        <div class="rejilla">${wr.map(u=>`<button class="carta${u.id===i.copa?" on":""}" data-copa="${u.id}" type="button">
            <b>${u.icono} ${u.nombre}${p(u.id)}</b><small>${u.desc}</small>
            <div class="lista-mundos">${u.carreras.map((g,_)=>`<div class="paso-copa"><i>${_+1}</i>${cr(g.mundo).nombre}${g.reverso?' <span class="reverso">REVERSO</span>':""}</div>`).join("")}</div>
          </button>`).join("")}</div>`:i.modo==="amigos"?`
        <h2>Mundo de la carrera</h2>
        <p class="nota">Si creas la sala, se corre en el mundo que elijas aquí. Si te unes a la de un amigo, corres en el suyo.</p>
        <div class="rejilla dos">${ls.map(u=>`<button class="carta${u.id===i.mundo?" on":""}" data-mundo="${u.id}" type="button"><b>${u.nombre}</b><small>${u.desc}</small></button>`).join("")}</div>
        <h2>Sentido</h2>
        <div class="chips">
          <button class="chip${i.reverso?"":" on"}" data-reverso="0" type="button">Normal</button>
          <button class="chip${i.reverso?" on":""}" data-reverso="1" type="button">Reverso</button>
        </div>
        <h2>Rivales de la máquina</h2>
        <div class="chips">
          <button class="chip${i.conIA!==!1?" on":""}" data-ia="1" type="button">Sí, hasta 6 corredores</button>
          <button class="chip${i.conIA===!1?" on":""}" data-ia="0" type="button">Solo nosotros</button>
        </div>`:`
      <h2>Elige el mundo</h2>
      <div class="rejilla dos">${ls.map(u=>`<button class="carta${u.id===i.mundo?" on":""}" data-mundo="${u.id}" type="button"><b>${u.nombre}</b><small>${u.desc}</small>${t.mejores[`${u.id}${i.reverso?"-r":""}`]?`<small>Tu mejor tiempo: ${t.mejores[`${u.id}${i.reverso?"-r":""}`]}</small>`:""}</button>`).join("")}</div>
      <h2>Sentido</h2>
      <div class="chips">
        <button class="chip${i.reverso?"":" on"}" data-reverso="0" type="button">Normal</button>
        <button class="chip${i.reverso?" on":""}" data-reverso="1" type="button">Reverso</button>
      </div>`};function b(){const u=c==="inicio"?"":`<div class="menu-pie">
            <button class="btn-sec" data-accion="atras" type="button">ATRÁS</button>
            ${c==="ajustes"?"":`<button class="welcome-start-btn" data-accion="siguiente" type="button"><span class="welcome-start-text">${c==="pista"?i.modo==="amigos"?"IR A LA SALA":"¡A CORRER!":"SIGUIENTE"}</span></button>`}
          </div>`,g=c==="pista"&&i.modo==="amigos"?Hu.pistaAmigos:Hu[c];l.innerHTML=`${c!=="inicio"?`<div class="menu-paso">${g}</div>`:""}${x[c]()}${u}`,n(d(),h())}function m(u){c=u,b(),l.scrollTop=0}return l.addEventListener("click",u=>{const g=u.target.closest("button");if(!g)return;const _=g.dataset;if(_.ir)return m(_.ir);if(_.accion==="atras")return m(c==="ajustes"?"inicio":tr[Math.max(0,tr.indexOf(c)-1)]);if(_.accion==="siguiente")return c==="pista"?o({...i}):m(tr[tr.indexOf(c)+1]);if(_.accion==="salir")return s==null?void 0:s();if(_.accion==="amigos")return i.modo="amigos",m("piloto");_.ia!==void 0&&(i.conIA=_.ia==="1"),_.modo&&(i.modo=_.modo),_.dif!==void 0&&(i.dif=Number(_.dif)),_.piloto&&(i.piloto=_.piloto),_.vehiculo&&(i.vehiculo=_.vehiculo),_.copa&&(i.copa=_.copa),_.mundo&&(i.mundo=_.mundo),_.reverso!==void 0&&(i.reverso=_.reverso==="1"),b()}),l.addEventListener("change",u=>{const g=u.target.dataset.ajuste;if(!g)return;const _=u.target.type==="checkbox"?u.target.checked:u.target.value;a(g,_)}),{mostrar(u,g){r.classList.toggle("oculto",!u),u&&m(g||c)},confirmar(){const u=l.querySelector('[data-accion="siguiente"], [data-ir="modo"]');u==null||u.click()},get paso(){return c},ir:m}}function g2(){const i=new os;i.background=new Ve(854550),i.fog=new Ar(854550,.25,.9),i.environmentIntensity=.25,i.add(new us(12571903,2759184,.45));const e=new wa(16773590,.45,.8,Math.PI*.16,.6,1);e.position.set(.06,.22,.14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.05,e.shadow.camera.far=.6,e.shadow.bias=-4e-4,i.add(e,e.target);const t=new Uo(10470655,.7);t.position.set(-.1,.1,-.2),i.add(t);const n=new L(new no(.6,64),new Ee({color:2761266,roughness:.25,metalness:.2}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n);const o=new L(new no(.1,64),new Nt({map:xr("roseton",1024,1024),color:new Ve(1.15,1.1,1.05),toneMapped:!1}));o.position.set(0,.105,-.22),i.add(o);const a=new L(new Un(.1,.006,12,64),new Ee({color:3814208,roughness:.8}));a.position.copy(o.position),i.add(a);const s=pi(.45,"150,170,255",.18);s.position.set(0,.1,-.2),i.add(s);for(const Z of[-.16,.16]){const W=new L(new st(.012,.014,.3,24),new Ee({color:14275267,roughness:.7}));W.position.set(Z,.15,-.16),W.castShadow=!0,i.add(W)}const r=[];for(const Z of[-.11,.11]){const W=Pc({alto:.3});W.scale.setScalar(.22),W.position.set(Z,0,-.09),i.add(W),r.push(W)}const l=fs(i),c=new et,d=new L(new st(.03,.032,.004,64),new Ee({color:3813446,roughness:.35,metalness:.3}));d.position.y=.002,d.receiveShadow=!0,d.castShadow=!0;const h=new L(new Un(.0305,7e-4,8,64),new Nt({color:new Ve(1.8,1.35,.5),toneMapped:!1}));h.rotation.x=Math.PI/2,h.position.y=.0041,c.add(d,h),i.add(c);let f=null,p="";function x(Z,W){const de=d0({tipo:W.tipo,color:Z.color,colorSecundario:16251388,colorCasco:Z.casco??Z.color,colorTraje:Z.traje,tocado:Z.tocado,conLuces:!1});return de.kartRoot.traverse(oe=>{oe.isMesh&&(oe.castShadow=!0)}),de}function b(Z){var W;Z&&((W=Z.kartRoot.parent)==null||W.remove(Z.kartRoot),Z.dispose())}function m(Z,W){const de=`${Z.id}|${W.id}`;de!==p&&(p=de,b(f),f=x(Z,W),f.kartRoot.position.y=.004,c.add(f.kartRoot))}const u=new et;u.visible=!1,i.add(u);const g=[.016,.011,.007],_=[0,-.032,.032],w=["1","2","3"];for(let Z=0;Z<3;Z++){const W=new L(new Le(.03,g[Z],.03),Z===0?rt.oro:Z===1?rt.plata:rt.oroViejo);W.position.set(_[Z],g[Z]/2,0),W.castShadow=!0,W.receiveShadow=!0,u.add(W);const de=document.createElement("canvas");de.width=128,de.height=128;const oe=de.getContext("2d");oe.fillStyle="#1a1206",oe.font="bold 96px Georgia, serif",oe.textAlign="center",oe.textBaseline="middle",oe.fillText(w[Z],64,70);const ge=new Ut(de),ie=new L(new Gt(.012,.012),new Nt({map:ge,transparent:!0}));ie.position.set(_[Z],g[Z]/2,.0152),u.add(ie)}let E=[];const S=kd({alto:.03});S.visible=!1,i.add(S);const C=pi(.08,"255,210,120",0);S.add(C),C.position.y=.02;const M=260,A=new Zi(new Gt(.0016,.001),new Ee({side:Jt,roughness:.4,metalness:.6}),M),v=[],R=[16765530,16777215,15905338,9356783,16771496];for(let Z=0;Z<M;Z++)v.push({p:new D,v:new D,r:new ri,w:new D(Math.random()*8,Math.random()*8,Math.random()*8)}),A.setColorAt(Z,new Ve(R[Z%R.length]));A.visible=!1,A.frustumCulled=!1,i.add(A);const F=new Ft,H=new Jn,z=new D(1,1,1);function Y(){A.visible=!0;for(const Z of v)Z.p.set((Math.random()-.5)*.12,.12+Math.random()*.08,(Math.random()-.5)*.06),Z.v.set((Math.random()-.5)*.01,-.01-Math.random()*.012,(Math.random()-.5)*.006)}function j(Z,W=!1){c.visible=!1,u.visible=!0;for(const de of E)b(de);E=[],Z.slice(0,3).forEach((de,oe)=>{const ge=x(de.piloto,de.vehiculo);ge.kartRoot.position.set(_[oe],g[oe],.002),ge.kartRoot.rotation.y=.25*(oe===1?1:oe===2?-1:0),ge.kartRoot.scale.setScalar(.85),i.add(ge.kartRoot),E.push(ge)}),S.visible=W,S.position.set(0,g[0]+.022,-.012),C.material.opacity=W?.8:0,Y()}function Q(){c.visible=!0,u.visible=!1,S.visible=!1,A.visible=!1;for(const Z of E)b(Z);E=[]}function _e(Z,W){for(const de of l)de(Z);s.material.opacity=.15+Math.sin(Z*.8)*.04,c.visible&&(c.rotation.y=Z*.6),f&&f.updateWheels(W,.02,Math.sin(Z*.7)*.3),S.visible&&(S.rotation.y=Z*.8),A.visible&&(v.forEach((de,oe)=>{de.v.y=Math.max(de.v.y-.02*W,-.03),de.p.addScaledVector(de.v,W),de.p.x+=Math.sin(Z*3+oe)*8e-5,de.p.y<0&&(de.p.y=.2),de.r.set(Z*de.w.x,Z*de.w.y,Z*de.w.z),H.setFromEuler(de.r),F.compose(de.p,H,z),A.setMatrixAt(oe,F)}),A.instanceMatrix.needsUpdate=!0)}return{scene:i,mostrarVehiculo:m,mostrarVitrina:Q,mostrarPodio:j,actualizar:_e,velas:r}}const v2=[-.0036,.0036],x2=.03,_2=.026;function jd(i){return{offset:_2+Math.floor(i/2)*x2,lateral:v2[i%2]}}const Ii=i=>Math.round((i||0)*1e5)/1e5;function Wu(i,e,t){let n=e-i;return n>t/2?n-=t:n<-t/2&&(n+=t),n}function M2({scene:i,physics:e,jugador:t,rivales:n,slotJugador:o,dificultad:a,alEvento:s}){const r=e.totalLength,l=e.sampleTrackAtArcLength,c=e.startFinishArc,d={index:0,sector:1,position:new D,tangent:new D,right:new D,normal:new D,bankDeg:0,signedCurvature:0,slope:0},h={...d,position:new D,tangent:new D,right:new D,normal:new D},f=new D,p=new Ft,x=new Jn,b=new Jn;new D(0,0,1);let m=0,u=!1,g=.38;const _=n.length+1,w=[];for(let y=0;y<_;y++)w.push(jd(y));const E=w.filter((y,B)=>B!==o),S={id:"jugador",slot:o,humano:!0,esJugador:!0,piloto:t.piloto,vehiculo:t.vehiculo,nombre:t.piloto.nombre,color:t.piloto.color,progreso:-w[o].offset,ultimaS:e.state.s,vuelta:1,llego:!1,tiempo:null,vueltas:[],inicioVuelta:0,stats:br(t.vehiculo,t.piloto)},C=n.map((y,B)=>{const k=E[B],he=w.indexOf(k),ne=br(y.vehiculo,y.piloto),V=d0({tipo:y.vehiculo.tipo,color:y.piloto.color,colorSecundario:16251388,colorCasco:y.piloto.casco??y.piloto.color,colorTraje:y.piloto.traje,tocado:y.piloto.tocado,numero:String(B+2),conLuces:!1});V.kartRoot.scale.setScalar(g),i.add(V.kartRoot);const q=(c-k.offset+r)%r;return{id:y.id||y.piloto.id,slot:he,control:y.control||"ia",humano:!!y.humano,rid:y.rid??null,red:null,esJugador:!1,piloto:y.piloto,vehiculo:y.vehiculo,nombre:y.nombre||y.piloto.nombre,color:y.piloto.color,stats:ne,modelo:V,s:q,ultimaS:q,progreso:-k.offset,lateral:k.lateral,lateralObjetivo:k.lateral,carril:(Math.random()-.5)*.006,velocidad:0,giro:0,inclinacion:0,turbo:0,rebufo:!1,espera:0,despiste:0,fase:Math.random()*Math.PI*2,ritmoPropio:.985+Math.random()*.03,reaccion:.05+Math.random()*.25,vuelta:1,llego:!1,tiempo:null,vueltas:[],inicioVuelta:0}}),M=[S,...C];function A(y,B){const k=l(y.s,d);y.modelo.kartRoot.position.copy(k.position).addScaledVector(k.right,y.lateral).addScaledVector(k.normal,3e-4),f.crossVectors(k.normal,k.tangent).normalize(),p.makeBasis(f,k.normal,k.tangent),x.setFromRotationMatrix(p);const he=Ke.clamp(-k.signedCurvature*.45+(y.lateralObjetivo-y.lateral)*25,-.45,.45);y.giro=Ke.lerp(y.giro,he,Math.min(1,B*7)),b.setFromAxisAngle(k.normal,Ke.clamp(y.giro*.22,-.15,.15)),y.modelo.kartRoot.quaternion.copy(b.multiply(x));const ne=Ke.clamp(k.signedCurvature*.4*Math.min(1,y.velocidad/.12),-.55,.55);y.inclinacion=Ke.lerp(y.inclinacion,ne,Math.min(1,B*6)),y.modelo.updateKartVisuals(B,{speed:y.velocidad,steerAngle:y.giro,steerInput:-y.giro/.45,leanAngle:y.inclinacion,boostActive:y.turbo>0||y.rebufo?1:0,isDrifting:Math.abs(k.signedCurvature)>.9&&y.velocidad>.15,normal:k.normal,right:k.right,tangent:k.tangent})}for(const y of C)A(y,.016);function v(y){const B=Math.min(Lo,Math.max(1,Math.floor(y.progreso/r)+1));if(!y.llego&&y.progreso>=Lo*r){y.llego=!0,y.tiempo=m,y.vueltas.push(m-y.inicioVuelta),s({tipo:"meta",corredor:y});return}B>y.vuelta&&(y.vueltas.push(m-y.inicioVuelta),y.inicioVuelta=m,y.vuelta=B,s({tipo:"vuelta",corredor:y,vuelta:B}))}function R(){return[...M].sort((y,B)=>y.llego&&B.llego?y.tiempo-B.tiempo:y.llego?-1:B.llego?1:B.progreso-y.progreso)}const F=e.state;let H=0,z=!1;function Y(y,B){const k=y.red;if(!k)return;const ne=performance.now()/1e3-k.t,V=ne>1.5?0:k.v,q=(k.s+V*Math.min(ne,.4)+r)%r;let X=q-y.s;X>r/2?X-=r:X<-r/2&&(X+=r),y.s,Math.abs(X)>.25?y.s=q:y.s=(y.s+y.velocidad*B+X*Math.min(1,B*6)+r)%r,y.velocidad=Ke.lerp(y.velocidad,V,Math.min(1,B*8)),y.lateralObjetivo=k.lat,y.turbo=k.turbo?.1:0,y.vuelta=k.vuelta,u&&!y.llego&&(y.progreso=k.prog+V*Math.min(ne,.4)),k.llego&&!y.llego&&(y.llego=!0,y.tiempo=k.tiempo,y.progreso=Math.max(y.progreso,Lo*r),s({tipo:"meta",corredor:y}))}function j(y,B,k){if(y.llego)y.velocidad=Ke.lerp(y.velocidad,.12,Math.min(1,B*1.5));else if(m<y.reaccion)y.velocidad=0;else{const ne=l(y.s,d);let V=Math.abs(ne.signedCurvature);for(const Me of[.03,.06,.1])V=Math.max(V,Math.abs(l(y.s+Me,h).signedCurvature)*(1-Me*3));const q=y.stats;let O=.25*q.velocidad*a.ritmo*y.ritmoPropio*(1+Math.sin(m*1.3+y.fase)*.025);O*=1-Ke.clamp((V-.5)/2,0,1)*.2/Math.sqrt(q.agarre),V<.2&&(O*=1.04),O*=Ke.clamp(1-ne.slope*.35,.85,1.1),y.rebufo&&(O*=1.12),y.turbo>0?(y.turbo-=B,O=Math.max(O,.3*q.velocidad)):V<.25&&Math.random()<1-Math.exp(-B*.18*q.turbo)&&(y.turbo=.7+Math.random()*.5*q.turbo),y.despiste>0?(y.despiste-=B,O*=.72):Math.random()<1-Math.exp(-B*.05*a.errores)&&(y.despiste=.5+Math.random()*.5);const P=H-y.progreso;z||(O*=1+Ke.clamp(P/1.5,-.04,.05)),y.progreso<k-.6&&(O*=1.02);const ce=.5*q.aceleracion;y.velocidad<O?y.velocidad=Math.min(O,y.velocidad+ce*B):y.velocidad=Math.max(O,y.velocidad-.7*B)}const he=y.s;y.s=(y.s+y.velocidad*B)%r,u&&(y.progreso+=Wu(he,y.s,r),v(y))}function Q(y){const B=M.map(k=>k.esJugador?{c:k,s:F.s,lat:F.lateralOffset,v:F.speed,peso:S.stats.peso}:{c:k,s:k.s,lat:k.lateral,v:k.velocidad,peso:k.stats.peso});for(const k of B){if(k.c.esJugador||k.c.control==="red")continue;const he=k.c;let ne=null,V=.065;for(const q of B){if(q===k)continue;const X=(q.s-k.s+r)%r;X>.003&&X<V&&(V=X,ne=q)}he.rebufo=!1,ne&&V<.045&&Math.abs(he.lateral-ne.lat)<.0038?(he.rebufo=!0,he.espera<=0&&(he.espera=1.4,he.lateralObjetivo=ne.lat<=0?.0038:-.0038)):he.espera<=0&&(he.lateralObjetivo=Ke.clamp(he.carril+Math.sin(m*.9+he.fase)*.0018,-.004,.004)),he.espera=Math.max(0,he.espera-y)}for(let k=0;k<B.length;k++)for(let he=k+1;he<B.length;he++){const ne=B[k],V=B[he],q=Math.min((V.s-ne.s+r)%r,(ne.s-V.s+r)%r);if(q>.016)continue;const X=V.lat-ne.lat,O=.0042;if(Math.abs(X)>=O)continue;const P=O-Math.abs(X),ce=X>=0?1:-1,Me=ne.c.control==="red"?1e3:ne.peso,ye=V.c.control==="red"?1e3:V.peso;if(ne.c.control==="red"&&V.c.control==="red")continue;const se=Me+ye,I=P*Math.min(1,y*14);ne.c.control!=="red"&&_e(ne,-ce*I*(ye/se)),V.c.control!=="red"&&_e(V,ce*I*(Me/se));const $=(V.s-ne.s+r)%r<r/2?ne:V;$.c.esJugador?q<.012&&(F.speed*=1-Math.min(.5,y*3)):$.c.control!=="red"&&($.c.velocidad*=1-Math.min(.5,y*2.5)),(ne.c.esJugador||V.c.esJugador)&&s({tipo:"roce"})}}function _e(y,B){y.c.esJugador?F.lateralOffset=Ke.clamp(F.lateralOffset+B,-.0088,.0088):y.c.lateral=Ke.clamp(y.c.lateral+B,-.0062,.0062),y.lat+=B}let Z=M.map(y=>y.id);function W(y){u&&(m+=y);const B=F.s;u&&(S.progreso+=Wu(S.ultimaS,B,r),v(S)),S.ultimaS=B;const k=Math.max(...M.map(O=>O.progreso)),he=M.filter(O=>O.humano&&!O.desconectado);H=Math.max(...he.map(O=>O.progreso)),z=he.every(O=>O.llego),u&&Q(y);for(const O of C)O.control==="red"?Y(O,y):u&&j(O,y,k);for(const O of C)O.lateral=Ke.lerp(O.lateral,O.lateralObjetivo,Math.min(1,y*(O.control==="red"?8:3.2))),O.lateral=Ke.clamp(O.lateral,-.0062,.0062),A(O,y);const V=R().map(O=>O.id),q=Z.indexOf("jugador"),X=V.indexOf("jugador");u&&X!==q&&s({tipo:X<q?"adelanta":"pierde",puesto:X+1}),Z=V}function de(){for(const y of M){if(y.llego)continue;const B=Lo*r-y.progreso,k=y.esJugador?F.speed:y.velocidad;y.llego=!0,y.tiempo=m+B/Math.max(.12,k||.18)}}const oe=y=>M.find(B=>B.slot===y);function ge(){const y=F;return[Ii(y.s),Ii(y.lateralOffset),Ii(y.speed),Ii(y.steerAngle||0),Ii(S.progreso),S.vuelta,S.llego?1:0,S.tiempo??-1,y.boostActive?1:0]}function ie(){const y=[];for(const B of C)B.control==="ia"&&y.push([B.slot,Ii(B.s),Ii(B.lateral),Ii(B.velocidad),Ii(B.giro),Ii(B.progreso),B.vuelta,B.llego?1:0,B.tiempo??-1,B.turbo>0||B.rebufo?1:0]);return y}function Ce(y,B){const k=oe(y);!k||k.esJugador||k.control!=="red"||(k.red={s:B[0],lat:B[1],v:B[2],giro:B[3],prog:B[4],vuelta:B[5],llego:!!B[6],tiempo:B[7]>=0?B[7]:null,turbo:!!B[8],t:performance.now()/1e3},(k.s===void 0||!k.vistoRed)&&(k.vistoRed=!0))}function J(y,B){y.forEach((k,he)=>{const ne=oe(k);ne&&(ne.llego=!0,ne.tiempo=B[he])})}function le(y){g=y;for(const B of C)B.modelo.kartRoot.scale.setScalar(y)}function N(){for(const y of C)i.remove(y.modelo.kartRoot),y.modelo.dispose()}return{yo:S,rivales:C,todos:M,get reloj(){return m},get enMarcha(){return u},arrancar(){u=!0,m=0},paso:W,clasificacion:R,cerrar:de,estadoPropio:ge,estadoIA:ie,aplicarRed:Ce,aplicarFinal:J,porSlot:oe,setEscala:le,destruir:N,sparkPoints:C.map(y=>y.modelo.sparkPoints)}}function w2(){const i=document.getElementById("cine"),e=i.querySelector(".cine-titulo"),t=document.getElementById("cine-antetitulo"),n=document.getElementById("cine-titulo"),o=document.getElementById("cine-subtitulo"),a=document.getElementById("cine-rotulo");let s=null;return{mostrar(){i.classList.remove("oculto"),i.classList.add("entrando"),requestAnimationFrame(()=>requestAnimationFrame(()=>i.classList.remove("entrando")))},ocultar(){i.classList.add("oculto"),e.classList.remove("visible"),a.classList.remove("visible"),s=null},titulo(r,l,c){if(!r&&!l){e.classList.remove("visible");return}t.textContent=r||"",n.textContent=l||"",o.textContent=c||"",e.classList.remove("visible"),requestAnimationFrame(()=>e.classList.add("visible"))},rotulo(r){if(r!==s){if(s=r,!r){a.classList.remove("visible");return}a.innerHTML=r,a.classList.add("visible")}}}}let Yi=null;function nr(i,e=1){if(!i)return;try{Yi=Yi||new(window.AudioContext||window.webkitAudioContext),Yi.state==="suspended"&&Yi.resume()}catch{return}const t=[[1,.5],[2,.28],[2.76,.2],[5.4,.1],[8.9,.05]],n=392;for(let o=0;o<e;o++){const a=Yi.currentTime+o*.55,s=Yi.createGain();s.gain.value=.18,s.connect(Yi.destination);for(const[r,l]of t){const c=Yi.createOscillator();c.type="sine",c.frequency.value=n*r*(o%2?.75:1);const d=Yi.createGain();d.gain.setValueAtTime(1e-4,a),d.gain.exponentialRampToValueAtTime(l,a+.01),d.gain.exponentialRampToValueAtTime(1e-4,a+2.6/Math.sqrt(r)),c.connect(d),d.connect(s),c.start(a),c.stop(a+3)}}}const b2=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}],S2="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",$i="salasJuego",y2="../../js/",oi="h",Xu=1e3,A2=2e4,ju=2500,T2=4e4,qu=15e3,E2=i=>new Promise(e=>setTimeout(e,i)),Rl=(i,e=S2)=>Array.from({length:i},()=>e[Math.floor(Math.random()*e.length)]).join("");class sn extends Error{constructor(e,t){super(t),this.codigo=e}}function Pl(){try{if(window.parent&&window.parent!==window&&window.parent.JUMA_FIREBASE)return window.parent.JUMA_FIREBASE}catch{}return globalThis.JUMA_FIREBASE||null}function C2(i){return new Promise((e,t)=>{const n=document.createElement("script");n.src=i,n.onload=e,n.onerror=t,document.head.appendChild(n)})}async function R2(){if(Pl())return Pl();try{await C2(new URL(y2+"firebase-config.js",import.meta.url).href)}catch{}return Pl()}function P2(){let i=null,e="";async function t(){if(i)return;const s=await R2();if(!s||!s.projectId||!s.apiKey||/REEMPLAZA/i.test(s.apiKey))throw new sn("sin-config","Falta la configuración de Firebase de la app.");i=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents/`,e=encodeURIComponent(s.apiKey)}const n=s=>{const r={};for(const[l,c]of Object.entries(s))r[l]=c instanceof Date?{timestampValue:c.toISOString()}:typeof c=="number"?{integerValue:String(Math.round(c))}:{stringValue:String(c)};return r},o=s=>{const r={};for(const[l,c]of Object.entries(s||{}))r[l]=c.stringValue??c.timestampValue??(c.integerValue!=null?Number(c.integerValue):null);return r};async function a(s,r,l,c){await t();const d=i+r+"?key="+e+(l?"&"+l:"");let h;try{h=await fetch(d,{method:s,headers:c?{"Content-Type":"application/json"}:void 0,body:c?JSON.stringify(c):void 0,cache:"no-store"})}catch{throw new sn("sin-internet","No hay conexión a internet.")}if(h.status===404)return null;if(h.status===409)throw new sn("existe","Ya existe.");if(h.status===403)throw new sn("sin-permiso","El juego conectado por internet aún no está activado en Firebase.");if(!h.ok)throw new sn("nube","La nube respondió con un error ("+h.status+").");const f=await h.text();return f?JSON.parse(f):{}}return{nombre:"nube",async crear(s,r,l){await a("POST",s,"documentId="+encodeURIComponent(r),{fields:n(l)})},async leer(s){const r=await a("GET",s);return r?o(r.fields):null},async listar(s){const r=await a("GET",s,"pageSize=40");return(r&&r.documents||[]).map(l=>({id:l.name.split("/").pop(),datos:o(l.fields)}))},async actualizar(s,r){const l=Object.keys(r).map(c=>"updateMask.fieldPaths="+c).join("&");await a("PATCH",s,l+"&currentDocument.exists=true",{fields:n(r)})},async borrar(s){try{await a("DELETE",s)}catch{}}}}function I2(){const i="juma-senal/",e=t=>{try{return JSON.parse(localStorage.getItem(i+t)||"null")}catch{return null}};return{nombre:"local",async crear(t,n,o){const a=t+"/"+n;if(e(a))throw new sn("existe","Ya existe.");localStorage.setItem(i+a,JSON.stringify(o))},async leer(t){return e(t)},async listar(t){const n=[],o=i+t+"/";for(let a=0;a<localStorage.length;a++){const s=localStorage.key(a);s&&s.startsWith(o)&&!s.slice(o.length).includes("/")&&n.push({id:s.slice(o.length),datos:JSON.parse(localStorage.getItem(s))})}return n},async actualizar(t,n){const o=e(t);if(!o)throw new sn("no-existe","No existe.");localStorage.setItem(i+t,JSON.stringify(Object.assign(o,n)))},async borrar(t){localStorage.removeItem(i+t)}}}function L2(){return/[?&]senal=local\b/.test(location.search)?I2():P2()}const D2=i=>btoa(String.fromCharCode(...i.split(":").map(e=>parseInt(e,16)))),U2=i=>Array.from(atob(i),e=>e.charCodeAt(0).toString(16).padStart(2,"0").toUpperCase()).join(":");function Yu(i,e){const t=l=>(i.match(l)||[])[1],n=t(/a=ice-ufrag:(\S+)/),o=t(/a=ice-pwd:(\S+)/),a=t(/a=fingerprint:sha-256 (\S+)/i),s=t(/a=setup:(\S+)/);if(!n||!o||!a)throw new sn("sdp","No se pudo preparar el código.");const r=[];for(const l of i.matchAll(/a=candidate:\S+ 1 udp \d+ (\S+) (\d+) typ (host|srflx)/gi)){const c=(l[3]==="host"?"h":"s")+l[1]+","+l[2];r.includes(c)||r.push(c)}if(!r.length)throw new sn("sin-red","Este equipo no está conectado a ninguna red wifi.");return["J1",e==="offer"?"o":"a",{actpass:"x",active:"c",passive:"p"}[s]||"x",n,o,D2(a),r.slice(0,5).join(";")].join("~")}function $u(i){const e=String(i||"").trim().replace(/\s+/g,"").split("~");if(e.length!==7||e[0]!=="J1")throw new sn("codigo","Ese código no es válido. Cópialo completo.");const[,t,n,o,a,s,r]=e,l=t==="o"?"offer":"answer",c=["v=0","o=- "+Date.now()%1e12+" 2 IN IP4 127.0.0.1","s=-","t=0 0","a=group:BUNDLE 0","a=msid-semantic: WMS","m=application 9 UDP/DTLS/SCTP webrtc-datachannel","c=IN IP4 0.0.0.0","a=ice-ufrag:"+o,"a=ice-pwd:"+a,"a=ice-options:trickle","a=fingerprint:sha-256 "+U2(s),"a=setup:"+({x:"actpass",c:"active",p:"passive"}[n]||"actpass"),"a=mid:0","a=sctp-port:5000","a=max-message-size:262144"];return r.split(";").filter(Boolean).forEach((d,h)=>{const f=d[0]==="h",[p,x]=d.slice(1).split(",");c.push(`a=candidate:${h+1} 1 udp ${f?2122260223-h:1686052607-h} ${p} ${x} typ ${f?"host":"srflx raddr 0.0.0.0 rport 0"} generation 0`)}),c.push("a=end-of-candidates"),{type:l,sdp:c.join(`\r
`)+`\r
`}}function Zu(i,e){return i.iceGatheringState==="complete"?Promise.resolve():new Promise(t=>{const n=setTimeout(o,e);function o(){clearTimeout(n),i.removeEventListener("icegatheringstatechange",a),t()}function a(){i.iceGatheringState==="complete"&&o()}i.addEventListener("icegatheringstatechange",a)})}function Ju(){if(typeof RTCPeerConnection>"u")throw new sn("sin-webrtc","Este navegador no permite el juego conectado.");return new RTCPeerConnection({iceServers:b2})}function N2({juego:i,nombre:e="Jugador",max:t=6,almacen:n=null}={}){const o={},a=(N,...y)=>{for(const B of o[N]||[])try{B(...y)}catch(k){console.error(k)}},s=new Map,r=new Map;let l=null,c=null,d=null,h=!1,f=!1,p=null,x=null,b={};const m=n||L2(),u=new Set;function g(N){return{id:N.id,nombre:N.nombre,datos:N.datos||{}}}function _(){return Array.from(r.values())}function w(N,y,B){const k=B?N.rapido:N.fiable;if(!k||k.readyState!=="open"){B&&N.fiable&&N.fiable.readyState==="open"&&!N.rapido&&N.fiable.send(JSON.stringify(y));return}if(!(B&&k.bufferedAmount>65536))try{k.send(JSON.stringify(y))}catch{}}function E(N,y={}){if(f)return;const B=y.a??null,k=!!y.rapido;if(l==="anfitrion"){const he={d:oi,a:B,m:N};if(B===null)for(const ne of s.values())ne.id!==y.excepto&&w(ne,he,k);else if(B!==oi){const ne=s.get(B);ne&&w(ne,he,k)}}else if(l==="invitado"){const he=s.get(oi);he&&w(he,{a:B,m:N},k)}}function S(N,y,B){w(N,Object.assign({s:y},B||{}),!1)}function C(N,y,B){let k;try{k=JSON.parse(y)}catch{return}if(N.visto=performance.now(),k.s)return M(N,k);if(l==="anfitrion"){const he=N.id,ne=k.a??null;if(ne===null){a("mensaje",k.m,he);for(const V of s.values())V!==N&&w(V,{d:he,a:null,m:k.m},B)}else if(ne===oi)a("mensaje",k.m,he);else{const V=s.get(ne);V&&w(V,{d:he,a:ne,m:k.m},B)}}else a("mensaje",k.m,k.d)}function M(N,y){switch(y.s){case"ping":S(N,"pong",{t:y.t});break;case"pong":N.rtt=performance.now()-y.t;break;case"hola":c=y.id,r.clear();for(const B of y.jugadores)r.set(B.id,B);a("lista",_()),N._alHola&&N._alHola();break;case"presento":if(l!=="anfitrion")break;N.nombre=String(y.nombre||N.nombre).slice(0,24),N.datos=y.datos||{},r.set(N.id,g(N)),S(N,"hola",{id:N.id,jugadores:_()});for(const B of s.values())B!==N&&S(B,"entra",{jugador:g(N)});a("entra",g(N)),a("lista",_());break;case"entra":r.set(y.jugador.id,y.jugador),a("entra",y.jugador),a("lista",_());break;case"sale":{const B=r.get(y.id);r.delete(y.id),B&&a("sale",B),a("lista",_());break}case"datos":{const B=l==="anfitrion"?N.id:y.id,k=r.get(B);if(!k)break;if(k.datos=y.datos||{},l==="anfitrion"){N.datos=k.datos;for(const he of s.values())he!==N&&S(he,"datos",{id:B,datos:k.datos})}a("lista",_());break}case"adios":v(N,"se fue");break}}function A(N,y){const B=y.label==="rapido";B?N.rapido=y:N.fiable=y,y.onmessage=k=>C(N,k.data,B),y.onclose=()=>{B||v(N,"se cortó la conexión")}}function v(N,y){if(s.has(N.id)){s.delete(N.id);try{N.pc.close()}catch{}if(l==="anfitrion"){const B=r.get(N.id);r.delete(N.id);for(const k of s.values())S(k,"sale",{id:N.id});B&&a("sale",B,y),a("lista",_())}else f||(le(!1),a("cerrada",y==="se fue"?"El anfitrión cerró la sala.":"Se perdió la conexión con el anfitrión."))}}function R(){clearInterval(x);let N=performance.now();x=setInterval(()=>{const y=performance.now(),B=y-N>Xu*2.5;if(N=y,B)for(const k of s.values())k.visto&&(k.visto=y);for(const k of Array.from(s.values()))k.fiable&&k.fiable.readyState==="open"&&S(k,"ping",{t:y}),k.visto&&y-k.visto>A2&&v(k,"no responde")},Xu)}async function F(N,y,B){const k="j"+Rl(5,"abcdefghijkmnpqrstuvwxyz23456789"),he=Ju(),ne={id:k,nombre:y||"Jugador",datos:{},pc:he,fiable:null,rapido:null,visto:0,rtt:0,idSenal:B};return s.set(k,ne),he.ondatachannel=V=>A(ne,V.channel),he.onconnectionstatechange=()=>{he.connectionState==="failed"&&v(ne,"no se pudo conectar")},await he.setRemoteDescription(N),await he.setLocalDescription(await he.createAnswer()),await Zu(he,ju),setTimeout(()=>{s.get(k)===ne&&!(ne.fiable&&ne.fiable.readyState==="open")&&v(ne,"no se pudo conectar")},qu+5e3),he.localDescription}async function H(){l="anfitrion",c=oi,f=!1,r.clear(),r.set(c,{id:c,nombre:e,datos:b});for(let N=0;N<6;N++){const y=Rl(4);try{await m.crear($i,y,{juego:i,creado:new Date}),d=y;break}catch(B){if(B.codigo!=="existe")throw B;const k=await m.leer($i+"/"+y).catch(()=>null);k&&k.creado&&Date.now()-new Date(k.creado).getTime()>3*36e5&&(await m.borrar($i+"/"+y),N--)}}if(!d)throw new sn("nube","No se pudo crear la sala. Prueba otra vez.");return h=!0,R(),j(),a("lista",_()),d}function z(){l="anfitrion",c=oi,f=!1,h=!0,d=null,r.clear(),r.set(c,{id:c,nombre:e,datos:b}),R(),a("lista",_())}async function Y(N){if((l!=="anfitrion"||f)&&z(),s.size+1>=t)throw new sn("llena","La sala está llena.");const y=$u(N);if(y.type!=="offer")throw new sn("codigo","Ese es un código de respuesta: escanea el código del invitado.");const B=await F(y,"Jugador");return Yu(B.sdp,"answer")}async function j(){if(clearTimeout(p),!(f||!d||d==="QR"||l!=="anfitrion")){try{const N=await m.listar($i+"/"+d+"/pedidos");for(const{id:y,datos:B}of N){if(u.has(y)||B.respuesta)continue;u.add(y);const k=$i+"/"+d+"/pedidos/"+y;if(!h){m.actualizar(k,{respuesta:"EMPEZADA"}).catch(()=>{});continue}if(s.size+1>=t){m.actualizar(k,{respuesta:"LLENA"}).catch(()=>{});continue}try{const he=await F({type:"offer",sdp:B.oferta},B.nombre,y);await m.actualizar(k,{respuesta:he.sdp})}catch(he){console.warn("No se pudo responder a",y,he)}}}catch(N){a("aviso",N.message||"Problema con la nube")}p=setTimeout(j,h?1e3:3e3)}}async function Q(){l="invitado",f=!1;const N=Ju(),y={id:oi,nombre:"Anfitrión",datos:{},pc:N,fiable:null,rapido:null,visto:0,rtt:0};return s.set(oi,y),A(y,N.createDataChannel("fiable",{ordered:!0})),A(y,N.createDataChannel("rapido",{ordered:!1,maxRetransmits:0})),N.onconnectionstatechange=()=>{N.connectionState==="failed"&&v(y,"no se pudo conectar")},await N.setLocalDescription(await N.createOffer()),await Zu(N,ju),y}function _e(N){return new Promise((y,B)=>{const k=setTimeout(()=>{Z(N),B(new sn("no-conecta","No se pudo conectar con el anfitrión. ¿Están en la misma wifi?"))},qu);N._alHola=()=>{clearTimeout(k),R(),y()};const he=()=>S(N,"presento",{nombre:e,datos:b});N.fiable.readyState==="open"?he():N.fiable.addEventListener("open",he,{once:!0})})}function Z(N){s.delete(N.id);try{N.pc.close()}catch{}}async function W(N){if(N=String(N||"").toUpperCase().replace(/[^A-Z0-9]/g,""),N.length!==4)throw new sn("codigo","El código tiene 4 letras o números.");const y=await m.leer($i+"/"+N);if(!y)throw new sn("no-existe","No hay ninguna sala con el código "+N+".");if(y.juego&&y.juego!==i)throw new sn("otro-juego","Esa sala es de otro juego.");const B=await Q(),k=Rl(12,"abcdefghijkmnpqrstuvwxyz23456789"),he=$i+"/"+N+"/pedidos/"+k;await m.crear($i+"/"+N+"/pedidos",k,{oferta:B.pc.localDescription.sdp,nombre:String(e).slice(0,24),creado:new Date});const ne=Date.now()+T2;let V=null;for(;!V&&Date.now()<ne&&s.has(oi);){await E2(800);const q=await m.leer(he).catch(()=>null);q&&q.respuesta&&(V=q.respuesta)}if(!V)throw Z(B),m.borrar(he),new sn("sin-respuesta","El anfitrión no respondió. Revisa el código.");if(V==="LLENA")throw Z(B),m.borrar(he),new sn("llena","La sala está llena.");if(V==="EMPEZADA")throw Z(B),m.borrar(he),new sn("empezada","La partida ya empezó. Espera a que vuelvan a la sala.");await B.pc.setRemoteDescription({type:"answer",sdp:V});try{await _e(B)}finally{m.borrar(he)}d=N}let de=null;async function oe(){return de&&Z(de),de=await Q(),Yu(de.pc.localDescription.sdp,"offer")}async function ge(N){const y=de;if(!y)throw new sn("codigo","Primero crea tu código.");const B=$u(N);if(B.type!=="answer")throw new sn("codigo","Ese es tu propio código: escanea el que te muestra el anfitrión.");await y.pc.setRemoteDescription(B),await _e(y),de=null,d="QR"}function ie(N){if(b=Object.assign({},N),!c)return;const y=r.get(c);if(y&&(y.datos=b),l==="anfitrion")for(const B of s.values())S(B,"datos",{id:c,datos:b});else{const B=s.get(oi);B&&S(B,"datos",{datos:b})}a("lista",_())}function Ce(N){e=String(N||"Jugador").slice(0,24);const y=c&&r.get(c);y&&(y.nombre=e)}function J(N){h=!!N,j()}function le(N=!0){if(!f){f=!0,h=!1,clearTimeout(p),clearInterval(x);for(const y of s.values()){N&&S(y,"adios");try{y.pc.close()}catch{}}s.clear(),l==="anfitrion"&&d&&d!=="QR"&&m.borrar($i+"/"+d)}}return addEventListener("pagehide",()=>le()),{get esAnfitrion(){return l==="anfitrion"},get rol(){return l},get miId(){return c},get codigo(){return d},get conectada(){return!f&&(l==="anfitrion"||s.has(oi))},get jugadores(){return _()},get almacen(){return m.nombre},ping(N){const y=s.get(N||oi);return y?Math.round(y.rtt):0},on(N,y){return(o[N]=o[N]||[]).push(y),()=>{o[N]=o[N].filter(B=>B!==y)}},crearSala:H,crearSalaManual:z,responderCodigo:Y,unirse:W,codigoInvitado:oe,completarInvitado:ge,enviar:E,ponerDatos:ie,ponerNombre:Ce,abrirEntrada:J,cerrar:le,ID_ANFITRION:oi}}const F2=`
.jsala{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 56px) 14px calc(env(safe-area-inset-bottom,0px) + 14px);background:rgba(6,3,12,.82);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);font-family:inherit;color:#fff7e6;touch-action:auto;user-select:text;-webkit-user-select:text}
.jsala[hidden]{display:none!important}
.jsala *{box-sizing:border-box}
.jsala-card{width:100%;max-width:480px;max-height:100%;overflow:auto;padding:18px 16px 16px;border-radius:22px;background:linear-gradient(180deg,rgba(38,22,58,.98),rgba(14,8,26,.99));border:2px solid var(--jsala-acento,#ffd25a);box-shadow:0 20px 50px rgba(0,0,0,.6);text-align:center}
.jsala h2{margin:2px 0 4px;font-size:22px;color:var(--jsala-acento,#ffd25a)}
.jsala p{margin:8px 0;font-size:14px;line-height:1.45}
.jsala small,.jsala .jsala-nota{font-size:12.5px;opacity:.8}
.jsala-fila{display:flex;gap:8px;align-items:center;margin:8px 0}
.jsala-fila>*{flex:1}
.jsala input,.jsala textarea{width:100%;padding:12px 12px;border-radius:12px;border:2px solid rgba(255,255,255,.22);background:rgba(0,0,0,.35);color:#fff;font:inherit;font-size:16px}
.jsala input:focus,.jsala textarea:focus{outline:none;border-color:var(--jsala-acento,#ffd25a)}
.jsala .jsala-codigo-in{text-transform:uppercase;letter-spacing:.35em;text-align:center;font-weight:900;font-size:22px}
.jsala textarea{min-height:64px;font-size:12px;font-family:ui-monospace,monospace;word-break:break-all}
.jsala-btn{display:block;width:100%;min-height:50px;margin-top:9px;border:0;border-radius:999px;font:inherit;font-weight:900;font-size:16px;color:#2a1800;background:linear-gradient(180deg,#ffe28a,#d9a02a);box-shadow:0 4px 0 #7a5410;cursor:pointer}
.jsala-btn:active{transform:translateY(2px)}
.jsala-btn[disabled]{opacity:.45;cursor:default}
.jsala-btn.sec{color:#fff;background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.25);box-shadow:0 4px 0 rgba(0,0,0,.4)}
.jsala-btn.peq{min-height:40px;font-size:14px}
.jsala-enlace{background:none;border:0;color:var(--jsala-acento,#ffd25a);font:inherit;font-size:14px;text-decoration:underline;margin-top:12px;cursor:pointer}
.jsala-codigo{font-size:44px;font-weight:900;letter-spacing:.22em;color:var(--jsala-acento,#ffd25a);margin:2px 0;font-family:ui-monospace,monospace}
.jsala-lista{list-style:none;margin:10px 0;padding:0;text-align:left}
.jsala-lista li{display:flex;align-items:center;gap:10px;padding:8px 10px;margin:5px 0;border-radius:12px;background:rgba(255,255,255,.07)}
.jsala-lista i{width:12px;height:12px;border-radius:50%;flex:none;background:#7bd86b}
.jsala-lista b{flex:1}
.jsala-lista em{font-style:normal;font-size:12px;opacity:.75}
.jsala-error{color:#ffb3b3;font-weight:700}
.jsala-ok{color:#bff0b0;font-weight:700}
.jsala-qr{display:block;margin:8px auto;width:min(62vw,240px);height:auto;image-rendering:pixelated;background:#fff;border-radius:10px;padding:6px}
.jsala-video{width:100%;max-height:220px;border-radius:12px;background:#000;object-fit:cover}
.jsala-opciones{text-align:left;margin:8px 0}
.jsala-opciones label{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:7px 0;font-weight:700;font-size:14px}
.jsala-opciones select{padding:8px 10px;border-radius:10px;background:#1d1030;color:#fff;border:2px solid rgba(255,255,255,.25);font:inherit;font-size:14px;max-width:60%}
.jsala-opciones:empty{display:none}
.jsala-gira{display:inline-block;width:18px;height:18px;border:3px solid rgba(255,255,255,.3);border-top-color:var(--jsala-acento,#ffd25a);border-radius:50%;animation:jsala-g 1s linear infinite;vertical-align:middle;margin-right:6px}
@keyframes jsala-g{to{transform:rotate(360deg)}}
@media (max-height:500px){.jsala{padding-top:calc(env(safe-area-inset-top,0px) + 10px)}.jsala-card{max-width:620px}.jsala-codigo{font-size:34px}.jsala-qr{width:min(40vh,200px)}}
`,O2="../../js/",qn=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function B2(i){return new Promise((e,t)=>{const n=document.createElement("script");n.src=i,n.onload=e,n.onerror=t,document.head.appendChild(n)})}async function Ku(i){if(!window.qrcode)try{await B2(new URL(O2+"qrcode.min.js",import.meta.url).href)}catch{return""}try{const e=window.qrcode(0,"L");return e.addData(i),e.make(),e.createDataURL(5,2)}catch{return""}}const z2={"sin-permiso":"El juego por código todavía no está activado en la nube de JUMA. Usa «Sin internet (código QR)».","sin-internet":"No hay internet. Usa «Sin internet (código QR)»: funciona en la misma wifi.","sin-config":"Abre el juego desde la app JUMA, o usa «Sin internet (código QR)»."};function k2(i){if(!document.getElementById("jsala-css")){const g=document.createElement("style");g.id="jsala-css",g.textContent=F2,document.head.appendChild(g)}const e=document.createElement("div");e.className="jsala",e.style.setProperty("--jsala-acento",i.acento||"#ffd25a"),e.innerHTML='<div class="jsala-card"></div>',document.body.appendChild(e);const t=e.firstChild;for(const g of["keydown","keyup","pointerdown","wheel"])e.addEventListener(g,_=>_.stopPropagation());let n="";try{n=localStorage.getItem("juma-nombre-red")||""}catch{}const o=N2({juego:i.juego,nombre:n||"Jugador",max:i.max||6});i.datos&&o.ponerDatos(i.datos);let a="inicio",s="",r="",l={mio:"",qr:"",respuesta:"",qrResp:""},c=null;function d(){var _;const g=(((_=t.querySelector("[data-nombre]"))==null?void 0:_.value)||"").trim().slice(0,24);if(g){n=g;try{localStorage.setItem("juma-nombre-red",g)}catch{}}return o.ponerNombre(n||"Jugador"),!!n}const h=g=>z2[g&&g.codigo]||g&&g.message||"Algo salió mal. Prueba otra vez.";function f(){return`<ul class="jsala-lista">${o.jugadores.map(g=>{var _;return`<li><i style="background:${qn(((_=g.datos)==null?void 0:_.color)||"#7bd86b")}"></i><b>${qn(g.nombre)}${g.id===o.miId?" (tú)":""}${g.id===o.ID_ANFITRION?" · anfitrión":""}</b><em>${qn(i.detalle?i.detalle(g):"")}</em></li>`}).join("")}</ul>`}function p(){b();const g=s?`<p class="jsala-error">${qn(s)}</p>`:"",_=r?`<p><span class="jsala-gira"></span>${qn(r)}</p>`:"";let w="";if(a==="inicio")w=`<h2>${qn(i.titulo||"Jugar con amigos")}</h2>
        <p>Jueguen juntos en la <b>misma wifi</b>. Uno crea la sala y los demás se unen con el código.</p>
        <input data-nombre maxlength="24" placeholder="Tu nombre" value="${qn(n)}" autocomplete="off">
        ${g}${_}
        <button class="jsala-btn" data-a="crear" type="button"${r?" disabled":""}>CREAR SALA</button>
        <div class="jsala-fila" style="margin-top:12px"><input class="jsala-codigo-in" data-codigo maxlength="4" placeholder="CÓDIGO" autocomplete="off" autocapitalize="characters"><button class="jsala-btn" style="margin:0" data-a="unirse" type="button"${r?" disabled":""}>UNIRME</button></div>
        <button class="jsala-enlace" data-a="manual" type="button">Sin internet (código QR) ›</button>
        <button class="jsala-btn sec peq" data-a="salir" type="button">Volver</button>`;else if(a==="manual")w=`<h2>Sin internet</h2>
        <p>Los equipos deben estar en la <b>misma wifi</b> (o uno compartiendo su punto de acceso). Un equipo hace de anfitrión.</p>
        <input data-nombre maxlength="24" placeholder="Tu nombre" value="${qn(n)}" autocomplete="off">
        ${g}
        <button class="jsala-btn" data-a="manual-anfitrion" type="button">SOY EL ANFITRIÓN</button>
        <button class="jsala-btn sec" data-a="manual-invitado" type="button">QUIERO UNIRME</button>
        <button class="jsala-enlace" data-a="volver" type="button">‹ Volver</button>`;else if(a==="manual-invitado")w=`<h2>Unirme sin internet</h2>
        <p><b>1.</b> Muéstrale este código al anfitrión (o envíale el texto).</p>
        ${l.qr?`<img class="jsala-qr" src="${l.qr}" alt="Código QR">`:""}
        ${l.mio?`<textarea readonly data-mio>${qn(l.mio)}</textarea><div class="jsala-fila"><button class="jsala-btn sec peq" data-a="copiar" type="button">Copiar</button><button class="jsala-btn sec peq" data-a="compartir" type="button">Compartir</button></div>`:'<p><span class="jsala-gira"></span>Preparando tu código…</p>'}
        <p><b>2.</b> Escanea o pega el código de respuesta del anfitrión.</p>
        ${"BarcodeDetector"in window?'<button class="jsala-btn sec peq" data-a="escanear" type="button">📷 Escanear</button><video class="jsala-video" data-video playsinline muted hidden></video>':""}
        <textarea data-pegar placeholder="Pega aquí el código del anfitrión"></textarea>
        ${g}${_}
        <button class="jsala-btn" data-a="conectar-invitado" type="button"${r||!l.mio?" disabled":""}>CONECTAR</button>
        <button class="jsala-enlace" data-a="volver" type="button">‹ Volver</button>`;else if(a==="manual-anfitrion")w=`<h2>Añadir un jugador</h2>
        ${l.respuesta?`<p class="jsala-ok">Ahora el invitado debe escanear este código:</p>
          ${l.qrResp?`<img class="jsala-qr" src="${l.qrResp}" alt="Código QR de respuesta">`:""}
          <textarea readonly data-mio>${qn(l.respuesta)}</textarea><div class="jsala-fila"><button class="jsala-btn sec peq" data-a="copiar" type="button">Copiar</button><button class="jsala-btn sec peq" data-a="compartir" type="button">Compartir</button></div>
          <p class="jsala-nota"><span class="jsala-gira"></span>Esperando a que se conecte…</p>`:`<p>Escanea o pega el código que muestra el teléfono del invitado.</p>
          ${"BarcodeDetector"in window?'<button class="jsala-btn sec peq" data-a="escanear" type="button">📷 Escanear</button><video class="jsala-video" data-video playsinline muted hidden></video>':""}
          <textarea data-pegar placeholder="Pega aquí el código del invitado"></textarea>
          ${g}${_}
          <button class="jsala-btn" data-a="responder" type="button"${r?" disabled":""}>CREAR RESPUESTA</button>`}
        <button class="jsala-enlace" data-a="a-sala" type="button">‹ Ver la sala</button>`;else if(a==="sala"){const S=o.esAnfitrion,C=o.jugadores.length;w=`${o.codigo&&o.codigo!=="QR"?`<small>CÓDIGO DE LA SALA</small><div class="jsala-codigo">${qn(o.codigo)}</div><p class="jsala-nota">${S?"Díselo a tus amigos: abren este mismo juego, tocan «Con amigos» y escriben el código.":"Estás dentro de la sala."}</p>`:`<h2>${qn(i.titulo||"Sala")}</h2><p class="jsala-nota">Conectados sin internet.</p>`}
        ${f()}
        ${S?'<div class="jsala-opciones" data-opciones></div>':""}
        ${g}${_}
        ${S?`<button class="jsala-btn" data-a="empezar" type="button"${C<2?" disabled":""}>${qn(i.textoEmpezar||"EMPEZAR")}</button>${C<2?'<p class="jsala-nota">Esperando a que entre al menos otro jugador…</p>':""}
          ${o.codigo==="QR"||!o.codigo?'<button class="jsala-btn sec peq" data-a="manual-anfitrion" type="button">+ Añadir jugador (código QR)</button>':'<button class="jsala-enlace" data-a="manual-anfitrion" type="button">Añadir un jugador sin internet (QR) ›</button>'}`:`<p><span class="jsala-gira"></span>${qn(i.textoEspera||"Esperando a que el anfitrión empiece…")}</p>`}
        <button class="jsala-btn sec peq" data-a="salir-sala" type="button">Salir de la sala</button>`}t.innerHTML=w;const E=t.querySelector("[data-opciones]");E&&i.opciones&&i.opciones(E,o)}async function x(){const g=t.querySelector("[data-video]");if(g)try{const _=new window.BarcodeDetector({formats:["qr_code"]}),w=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});c={flujo:w,t:0},g.srcObject=w,g.hidden=!1,await g.play();const E=async()=>{var S;if(c){try{const C=await _.detect(g),M=C&&C[0]&&C[0].rawValue;if(M&&M.startsWith("J1~")){const A=t.querySelector("[data-pegar]");A&&(A.value=M),b(),(S=t.querySelector('[data-a="responder"],[data-a="conectar-invitado"]'))==null||S.click();return}}catch{}c.t=setTimeout(E,280)}};E()}catch{s="No se pudo usar la cámara. Pega el código como texto.",p()}}function b(){if(c){clearTimeout(c.t);for(const g of c.flujo.getTracks())g.stop();c=null}}async function m(g){if(s="",g==="crear"){if(!d())return s="Escribe tu nombre.",p();r="Creando la sala…",p();try{await o.crearSala(),r="",a="sala"}catch(_){r="",s=h(_)}return p()}if(g==="unirse"){if(!d())return s="Escribe tu nombre.",p();const _=t.querySelector("[data-codigo]").value;r="Entrando en la sala…",p();try{await o.unirse(_),r="",a="sala"}catch(w){r="",s=h(w)}return p()}if(g==="manual")return d(),a="manual",p();if(g==="volver")return a=o.conectada?"sala":"inicio",p();if(g==="a-sala")return l.respuesta="",a="sala",p();if(g==="manual-anfitrion")return d(),o.conectada||o.crearSalaManual(),l.respuesta="",a="manual-anfitrion",p();if(g==="manual-invitado"){if(!d())return s="Escribe tu nombre.",p();a="manual-invitado",l.mio="",l.qr="",p();try{l.mio=await o.codigoInvitado(),l.qr=await Ku(l.mio)}catch(_){s=h(_)}return p()}if(g==="responder"){const _=t.querySelector("[data-pegar]").value;r="Preparando la respuesta…",p();try{l.respuesta=await o.responderCodigo(_),l.qrResp=await Ku(l.respuesta)}catch(w){s=h(w)}return r="",p()}if(g==="conectar-invitado"){const _=t.querySelector("[data-pegar]").value;r="Conectando…",p();try{await o.completarInvitado(_),a="sala"}catch(w){s=h(w)}return r="",p()}if(g==="copiar"){const _=t.querySelector("[data-mio]");_.select();try{await navigator.clipboard.writeText(_.value)}catch{document.execCommand&&document.execCommand("copy")}return}if(g==="compartir"){const _=t.querySelector("[data-mio]").value;try{await navigator.share({text:_})}catch{try{await navigator.clipboard.writeText(_)}catch{}}return}if(g==="escanear")return x();if(g==="empezar"){o.jugadores.length>=2&&i.alEmpezar(o);return}if(g==="salir-sala"){o.cerrar(),u(),i.alSalir&&i.alSalir();return}if(g==="salir"){o.cerrar(),u(),i.alSalir&&i.alSalir();return}}t.addEventListener("click",g=>{const _=g.target.closest("[data-a]");_&&!_.disabled&&m(_.dataset.a)}),t.addEventListener("keydown",g=>{g.key==="Enter"&&(g.target.matches("[data-codigo]")?m("unirse"):g.target.matches("[data-nombre]")&&a==="inicio"&&m("crear"))}),o.on("lista",()=>{if(a==="manual-anfitrion"&&l.respuesta&&(l.respuesta="",a="sala"),a==="sala"&&!e.hidden){if(e.contains(document.activeElement)&&document.activeElement.matches("input,select,textarea")){const g=t.querySelector(".jsala-lista");g&&(g.outerHTML=f());const _=t.querySelector('[data-a="empezar"]');_&&(_.disabled=o.jugadores.length<2);return}p()}}),o.on("cerrada",g=>{s=g,a="inicio",e.hidden||p()});function u(){b(),e.remove()}return p(),{red:o,mostrar(g){e.hidden=!1,a=o.conectada?"sala":"inicio",s=g||"",p()},ocultar(){b(),e.hidden=!0},refrescar(){e.hidden||p()},error(g){s=g,e.hidden||p()},destruir:u,get visible(){return!e.hidden}}}const Il=.38,ca=matchMedia("(pointer: coarse)").matches,Ll=window.parent&&window.parent!==window,Qu=["alta","media","baja"],V2={1:50,2:30,3:20};function G2(){try{const i=JSON.parse(localStorage.getItem(Wd)||"null");if(i&&typeof i=="object")return{ajustes:{calidad:"auto",camara:"persecucion",sonido:!0,autoAcelerar:!1,cinematicas:!0,...i.ajustes},sel:i.sel||null,trofeos:i.trofeos||{},mejores:i.mejores||{},puntosCircuito:i.puntosCircuito||{},calidadAuto:i.calidadAuto||null}}catch{}return{ajustes:{calidad:"auto",camara:"persecucion",sonido:!0,autoAcelerar:ca,cinematicas:!0},sel:null,trofeos:{},mejores:{},puntosCircuito:{},calidadAuto:null}}function Ga(i){const e=i.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}const Dl=i=>i*i*(3-2*i);async function H2(){var Ye;ca&&document.body.classList.add("es-tactil");const i=G2(),e=i.ajustes,t={modo:"copa",dif:1,piloto:"lucia",vehiculo:"kart",copa:"esperanza",mundo:"escritorio",reverso:!1,...i.sel||{}},n=()=>{try{localStorage.setItem(Wd,JSON.stringify({ajustes:e,sel:t,trofeos:i.trofeos,mejores:i.mejores,puntosCircuito:i.puntosCircuito,calidadAuto:i.calidadAuto}))}catch{}},o=l2(document.getElementById("canvas-container"));Ll&&document.body.classList.add("en-juma");let a="alta";function s(){a=e.calidad==="auto"?i.calidadAuto||(ca?"media":"alta"):e.calidad,o.setCalidad(a),C&&r(C)}function r(G){const ee=a==="alta"?2048:1024;G.traverse(ue=>{ue.isLight&&ue.castShadow&&ue.shadow&&ue.shadow.mapSize.x!==ee&&(ue.shadow.mapSize.set(ee,ee),ue.shadow.map&&(ue.shadow.map.dispose(),ue.shadow.map=null))})}const l={t:0,cuadros:0};function c(G){if(e.calidad!=="auto"||a==="baja"||(l.t+=G,l.cuadros+=1,l.t<4))return;const ee=l.cuadros/l.t;l.t=0,l.cuadros=0,ee<38&&(i.calidadAuto=Qu[Qu.indexOf(a)+1],n(),s(),p.aviso("Gráficos más ligeros",1200))}function d(){let G=0;for(const ee of Object.values(i.puntosCircuito))G+=Number(ee)||0;for(const ee of Object.values(i.trofeos))G+=V2[ee]||0;return G}function h(){if(Ll)try{window.parent.postMessage({tipo:"juma-puntos",juego:"granpremio",total:d()},location.origin)}catch{}}const f=u2(o);f.modo=e.camara;const p=h2(),x=w2(),b=g2(),m=f1();(Ye=m.preload)==null||Ye.call(m);let u=!1,g="menu",_=0,w=0,E=!1,S=null,C=null,M=null,A=null,v=null,R=null,F=null,H=null,z=null,Y=null,j=0,Q=-1,_e=1,Z=null,W=null;const de=()=>!!(W&&W.enCarrera),oe=document.getElementById("btn-mute-sound");function ge(){oe.classList.toggle("is-muted",!u),document.getElementById("icon-sound-on").classList.toggle("hidden",!u),document.getElementById("icon-sound-off").classList.toggle("hidden",u)}function ie(G){u=!!G;try{m.setEnabled(u)}catch{}ge()}oe.addEventListener("click",()=>{e.sonido=!u,ie(e.sonido),n()});const Ce=p2({alPausa:()=>Qe(),alCamara:()=>J(),alSonido:()=>oe.click(),alConfirmar:()=>{g!=="menu"&&["intro","parrilla","llegada","podio"].includes(g)&&Re()}});document.getElementById("btn-camara").addEventListener("click",()=>J()),document.getElementById("btn-pausa").addEventListener("click",()=>Qe()),document.getElementById("cine").addEventListener("pointerdown",()=>Re());function J(){if(g!=="carrera"&&g!=="cuenta")return;const G=f.siguienteModo();F==null||F.setCockpitRoadOnly(G==="cabina"),p.aviso(`Cámara: ${c2[G]}`,900),e.camara=G,n()}const le=m2({sel:t,ajustes:e,datos:i,alCambiarVitrina:(G,ee)=>b.mostrarVehiculo(G,ee),alJugar:G=>{Object.assign(t,G),n(),e.sonido&&ie(!0),N(),t.modo==="amigos"?cn():t.modo==="copa"?he(wr.find(ee=>ee.id===t.copa)||wr[0]):(z=null,Y=B(),Me({mundo:t.mundo,reverso:t.reverso}))},alAjuste:(G,ee)=>{e[G]=ee,G==="calidad"&&s(),G==="camara"&&(f.modo=ee),G==="sonido"&&ie(ee),n()},alSalir:Ll?()=>window.parent.postMessage({tipo:"juma-cerrar"},location.origin):null});async function N(){if(ca)try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen({navigationUI:"hide"}),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}function y(){g="menu",E=!1,Pe(),x.ocultar(),p.mostrar(!1),ze(!1),q(),b.mostrarVitrina(),o.setEscena(b.scene),o.renderer.toneMappingExposure=.95,o.bloomPass.strength=.25,o.bloomPass.threshold=.9,le.mostrar(!0,"inicio")}function B(){const G=Ga(Li.filter(ue=>ue.id!==t.piloto)).slice(0,5),ee=Ga(Di);return G.map((ue,te)=>({piloto:ue,vehiculo:ee[te%ee.length]}))}function k(){return{piloto:Li.find(G=>G.id===t.piloto)||Li[0],vehiculo:Di.find(G=>G.id===t.vehiculo)||Di[0]}}function he(G){const ee=B(),ue={jugador:0};for(const te of ee)ue[te.piloto.id]=0;z={def:G,indice:0,puntos:ue,rivales:ee,resultados:[]},Me(G.carreras[0])}function ne(){if(!z||z.indice===0)return 4;const G=Object.entries(z.puntos).sort((ee,ue)=>ue[1]-ee[1]).map(([ee])=>ee);return Math.min(5,G.indexOf("jugador"))}function V(G){const ee=new fp;ee.camera=o.camera;const ue=new D(0,-1,0),te=new D;for(const Se of G)Se.updateMatrixWorld(!0);return(Se,Te,Ue)=>{te.set(Se,Ue-.007,Te),ee.set(te,ue),ee.far=2;const $e=ee.intersectObjects(G,!0).filter(tt=>tt.object.isMesh&&tt.object.visible&&!tt.object.material.transparent);return $e.length?$e[0].point.y:0}}function q(){if(R){for(const G of R.sparkPoints)o.quitarChispas(G);R.destruir(),R=null}F&&(o.quitarChispas(F.sparkPoints),F.dispose(),F=null),C&&(C.traverse(G=>{if(G.geometry&&G.geometry.dispose(),G.material){const ee=Array.isArray(G.material)?G.material:[G.material];for(const ue of ee)ue.dispose()}}),C.clear()),C=null,S=null,M=null,A=null,v=null}const X=document.getElementById("cargando"),O=document.getElementById("cargando-progreso");function P(G,ee,ue){X.classList.toggle("oculto",!G),ee&&(document.getElementById("cargando-titulo").textContent=ee),ue!==void 0&&(document.getElementById("cargando-cita").textContent=ue)}const ce=()=>new Promise(G=>requestAnimationFrame(()=>setTimeout(G,0)));async function Me(G){H=G,le.mostrar(!1),Pe(),p.mostrar(!1),x.ocultar(),g="cargando";const ee=cr(G.mundo);P(!0,ee.nombre+(G.reverso?" · Reverso":""),Vu[G.mundo]||""),O.style.width="10%",await ce(),q(),O.style.width="25%",await ce();const ue=new os;C=ue,S=await $1[G.mundo](ue,{reverso:!!G.reverso}),O.style.width="60%",await ce(),M=l1(S.splineData,{...S.trackOpts,customStart:!0,groundAt:V(S.suelos)}),ue.add(M.trackGroup),M.underTrackLedGroup&&ue.add(M.underTrackLedGroup),A=A1(S.splineData),ue.add(A.grupo),O.style.width="80%",await ce();let te=k(),Se=z?z.rivales:Y||B(),Te=ne();if(de()){const tt=pt=>Li.find(it=>it.id===pt)||Li[0],ct=pt=>Di.find(it=>it.id===pt)||Di[0];Te=W.miSlot;const gt=W.parrilla[Te];te={piloto:tt(gt.piloto),vehiculo:ct(gt.vehiculo)},Se=W.parrilla.map((pt,it)=>({p:pt,i:it})).filter(({i:pt})=>pt!==Te).map(({p:pt,i:it})=>({id:"g"+it,piloto:tt(pt.piloto),vehiculo:ct(pt.vehiculo),humano:!!pt.humano,rid:pt.rid??null,nombre:pt.humano?pt.nombre:void 0,control:pt.humano||!W.red.esAnfitrion?"red":"ia"}))}const Ue=jd(Te);v=c1(S.splineData,{gridOffset:Ue.offset,lateral:Ue.lateral}),v.setVehicle(br(te.vehiculo,te.piloto)),v.onRailImpact(tt=>{var ct;f.temblar(tt),u&&((ct=m.playRailImpact)==null||ct.call(m,tt))}),F=d0({tipo:te.vehiculo.tipo,color:te.piloto.color,colorSecundario:16251388,colorCasco:te.piloto.casco??te.piloto.color,colorTraje:te.piloto.traje,tocado:te.piloto.tocado,numero:"1",conLuces:!0}),F.kartRoot.scale.setScalar(Il),ue.add(F.kartRoot),o.agregarChispas(F.sparkPoints);let $e=Se;!de()&&z&&z.indice>0&&($e=[...Se].sort((tt,ct)=>z.puntos[ct.piloto.id]-z.puntos[tt.piloto.id])),R=M2({scene:ue,physics:v,jugador:te,rivales:$e,slotJugador:Te,dificultad:es[de()?W.dif:t.dif]||es[1],alEvento:we});for(const tt of R.sparkPoints)o.agregarChispas(tt);ye(.016),o.setEscena(ue),r(ue),p.prepararMapa(S.splineData),p.reiniciar(),F.setCockpitRoadOnly(!1),v.state.countdownLocked=!0,O.style.width="100%",o.render(),await ce(),P(!1),I()}function ye(G){const ee=v.state;F.kartRoot.position.copy(ee.position),F.kartRoot.quaternion.copy(ee.quaternion),F.updateKartVisuals(G,ee)}function se(G){g=G,_=0}function I(){E=!1,_e=1;const G=cr(H.mundo),ee=de()?"CARRERA CON AMIGOS":z?`${z.def.nombre.toUpperCase()} · CARRERA ${z.indice+1} DE ${z.def.carreras.length}`:"CARRERA LIBRE";if(x.mostrar(),x.titulo(ee,G.nombre+(H.reverso?" · Reverso":""),Vu[H.mundo]||""),!e.cinematicas){$(!0);return}se("intro")}function T(){if(de()&&!W.salida){x.titulo(null),x.rotulo("Esperando a los demás corredores…<small>LA SALIDA ES PARA TODOS A LA VEZ</small>"),se("espera"),Kn();return}ae()}function $(G=!1){x.titulo(null),se("parrilla"),G&&(_=99)}function ae(){x.ocultar(),p.mostrar(!0),ze(ca),f.modo=e.camara,F.setCockpitRoadOnly(f.modo==="cabina"),Q=-1,A.setVelas(0),se("cuenta")}function Re(){g==="intro"?$():g==="parrilla"?T():g==="llegada"?Je():g==="podio"&&!be()&&K()}function we(G){var ee;if(G.tipo==="vuelta"&&G.corredor.esJugador){const ue=G.corredor.vueltas[G.corredor.vueltas.length-1];p.parcial(`VUELTA ${G.vuelta-1} · ${po(ue)}`),G.vuelta===Lo&&p.aviso("¡Última vuelta!",1800),u&&((ee=m.playLapChime)==null||ee.call(m))}else if(G.tipo==="meta"&&G.corredor.esJugador)Ge();else if(G.tipo==="meta"&&G.corredor.humano&&g==="carrera")p.aviso(`${G.corredor.nombre} llegó a la meta`,1400);else if(G.tipo==="adelanta"||G.tipo==="pierde"){if(g!=="carrera"||w-j<1.2||R.reloj<3)return;j=w,p.aviso(`${G.puesto}º`,800,G.tipo==="adelanta"?"bueno":"malo")}else G.tipo==="roce"&&g==="carrera"&&f.temblar(.25)}function Ge(){var Se;const G=R.clasificacion().indexOf(R.yo)+1;v.setAutopilot(!0),p.mostrar(!1),F.setCockpitRoadOnly(!1),x.mostrar(),x.titulo("¡META!",G===1?"¡Victoria!":`Puesto ${G}º`,`Tiempo ${po(R.yo.tiempo)}`),u&&((Se=m.playRaceFinishFanfare)==null||Se.call(m)),nr(u,3);const ee=`${H.mundo}${H.reverso?"-r":""}`,ue=R.yo.tiempo,te=i.mejores[ee];(!te||ue<Oe(te))&&(i.mejores[ee]=po(ue),n()),se("llegada"),_e=.3,ze(!1)}function Oe(G){const[ee,ue]=G.split(":");return Number(ee)*60+Number(ue)}let je=null;function Je(){R.cerrar();const G=R.clasificacion();je=G,z&&(G.forEach((ue,te)=>{z.puntos[ue.esJugador?"jugador":ue.piloto.id]+=Cl[te]||0}),z.resultados.push(G)),p.mostrar(!1),x.mostrar();const ee=cr(H.mundo);x.titulo("PODIO",ee.nombre,G[0].esJugador?"¡Ganaste la carrera!":`Ganó ${G[0].nombre}`),b.mostrarPodio(G.map(ue=>({piloto:ue.piloto,vehiculo:ue.vehiculo})),!1),o.setEscena(b.scene),o.renderer.toneMappingExposure=.95,o.bloomPass.strength=.3,o.bloomPass.threshold=.9,nr(u,2),se("podio")}const Fe=document.getElementById("panel"),Be=document.getElementById("panel-card"),be=()=>!Fe.classList.contains("oculto");function Ae(G){Be.innerHTML=G,Fe.classList.remove("oculto");const ee=Be.querySelector(".welcome-start-btn");ee==null||ee.focus({preventScroll:!0})}function Pe(){Fe.classList.add("oculto")}function Xe(G,ee,ue){const te=G.vehiculo;return`<div class="fila-res${G.esJugador?" yo":""}">
      <span class="pos">${ee+1}º</span>
      <span class="nom"><span class="d" style="background:${fa(G.piloto.color)}"></span>${G.esJugador?`${G.piloto.nombre} (tú)`:G.humano?`${G.nombre} · ${G.piloto.nombre}`:G.piloto.nombre} <em>${te.nombre}</em></span>
      <span class="t">${ue.tiempo??""}</span>
      <span class="pts">${ue.pts??""}</span>
    </div>`}function K(){x.ocultar();const G=je,ee=G.indexOf(R.yo)+1,ue=`${H.mundo}${H.reverso?"-r":""}`,te=Cl[ee-1]||0;te>(i.puntosCircuito[ue]||0)&&(i.puntosCircuito[ue]=te,n()),h();const Se=G.map((tt,ct)=>Xe(tt,ct,{tiempo:po(tt.tiempo),pts:z?`+${Cl[ct]||0}`:""})).join(""),Te=Math.min(...R.yo.vueltas);let Ue;z?Ue=z.indice<z.def.carreras.length-1?'<button class="welcome-start-btn" data-accion="siguiente" type="button"><span class="welcome-start-text">SIGUIENTE MUNDO ▸</span></button>':'<button class="welcome-start-btn" data-accion="copa" type="button"><span class="welcome-start-text">VER LA COPA</span></button>':Ue='<button class="welcome-start-btn" data-accion="repetir" type="button"><span class="welcome-start-text">REPETIR</span></button>';let $e='<button class="btn-sec" data-accion="menu" type="button">MENÚ</button>';de()&&(Ue=W.red.esAnfitrion?'<button class="welcome-start-btn" data-accion="mp-sala" type="button"><span class="welcome-start-text">OTRA CARRERA</span></button>':'<p class="ayuda" style="width:100%">Esperando a que el anfitrión elija la siguiente carrera…</p>',$e='<button class="btn-sec" data-accion="mp-salir" type="button">SALIR DE LA SALA</button>'),Ae(`
      <div class="welcome-eyebrow">${de()?"CARRERA CON AMIGOS":z?`${z.def.nombre.toUpperCase()} · CARRERA ${z.indice+1} DE ${z.def.carreras.length}`:"CARRERA LIBRE"}</div>
      <h2>${ee===1?"¡Primer puesto!":`Puesto ${ee}º`}</h2>
      <div class="frase">${ke(ee)}</div>
      <div class="tabla-res">${Se}</div>
      <p class="ayuda">Tu tiempo: <b>${po(R.yo.tiempo)}</b> · Mejor vuelta: <b>${po(Te)}</b></p>
      <div class="botones-panel">${Ue}${$e}</div>`)}function ke(G){return G===1?"«He combatido el buen combate, he terminado la carrera» · 2 Tim 4,7":G<=3?"«Corred de manera que lo obtengáis» · 1 Cor 9,24":"«Los últimos serán los primeros» · Mt 20,16"}function He(){const G=Object.entries(z.puntos).sort((Se,Te)=>Te[1]-Se[1]).map(([Se,Te])=>{if(Se==="jugador")return{esJugador:!0,...k(),pts:Te};const Ue=z.rivales.find($e=>$e.piloto.id===Se);return{esJugador:!1,piloto:Ue.piloto,vehiculo:Ue.vehiculo,pts:Te}}),ee=G.findIndex(Se=>Se.esJugador)+1,ue=i.trofeos[z.def.id];(!ue||ee<ue)&&(i.trofeos[z.def.id]=ee,n()),h(),b.mostrarPodio(G,!0),o.setEscena(b.scene),nr(u,5),se("copa");const te=ee===1?"¡Ganaste el Cáliz de Oro!":ee===2?"Cáliz de Plata":ee===3?"Cáliz de Bronce":"Sigue entrenando, peregrino";Ae(`
      <div class="welcome-eyebrow">${z.def.icono} ${z.def.nombre.toUpperCase()}</div>
      <h2>${te}</h2>
      <div class="frase">«Corramos con constancia la carrera que se nos propone» · Hb 12,1</div>
      <div class="tabla-res">${G.map((Se,Te)=>Xe(Se,Te,{pts:`${Se.pts} pts`})).join("")}</div>
      <div class="botones-panel">
        <button class="welcome-start-btn" data-accion="otra-copa" type="button"><span class="welcome-start-text">JUGAR OTRA VEZ</span></button>
        <button class="btn-sec" data-accion="menu" type="button">MENÚ</button>
      </div>`)}Be.addEventListener("click",G=>{const ee=G.target.closest("button");if(!ee)return;const ue=ee.dataset.accion;ue==="siguiente"?(z.indice+=1,Me(z.def.carreras[z.indice])):ue==="copa"?He():ue==="repetir"?Me(H):ue==="otra-copa"?he(z.def):ue==="menu"?y():ue==="mp-sala"?(W.red.enviar({t:"sala"}),ve()):ue==="mp-salir"?Ie():ue==="continuar"?Qe(!1):ue==="reiniciar"&&(E=!1,z&&z.resultados.length>z.indice&&z.resultados.pop(),Me(H))});function Qe(G){["carrera","cuenta","llegada"].includes(g)&&(E=G===void 0?!E:G,E&&de()?Ae(`
        <div class="welcome-eyebrow">PAUSA</div>
        <h2>La carrera sigue</h2>
        <div class="frase">Tus amigos siguen corriendo mientras estás aquí.</div>
        <div class="botones-panel">
          <button class="welcome-start-btn" data-accion="continuar" type="button"><span class="welcome-start-text">SEGUIR</span></button>
          <button class="btn-sec" data-accion="mp-salir" type="button">SALIR DE LA SALA</button>
        </div>`):E?Ae(`
        <div class="welcome-eyebrow">PAUSA</div>
        <h2>Un respiro</h2>
        <div class="frase">«Venid a mí todos los que estáis cansados» · Mt 11,28</div>
        <div class="botones-panel">
          <button class="welcome-start-btn" data-accion="continuar" type="button"><span class="welcome-start-text">SEGUIR</span></button>
          <button class="btn-sec" data-accion="reiniciar" type="button">REINICIAR</button>
          <button class="btn-sec" data-accion="menu" type="button">MENÚ</button>
        </div>`):Pe())}document.addEventListener("visibilitychange",()=>{document.hidden&&g==="carrera"&&Qe(!0)});const me=document.getElementById("girar"),re=document.getElementById("mobile-touch-controls");function ze(G){re.classList.toggle("hidden",!G)}function Ze(){const G=ca&&innerHeight>innerWidth&&["carrera","cuenta","intro","parrilla","espera"].includes(g);me.classList.toggle("oculto",!G),G&&g==="carrera"&&!E&&Qe(!0)}window.addEventListener("resize",Ze);const ot=new D,nt=new D;function bt(G){const ee=S.tomas,ue=v.sampleTrackAtArcLength,te=v.totalLength,Se=v.startFinishArc,Te=S.splineData.sectors||[];if(G<3.2){const Ue=Dl(G/3.2),$e=ee[0];nt.fromArray($e.m),ot.fromArray($e.p).sub(nt).multiplyScalar(1.35-.35*Ue).add(nt),ot.y+=(1-Ue)*.08,f.toma(ot,nt,42),f.enfocarEn(nt,.3,!0),x.rotulo(null)}else if(G<6.6){x.titulo(null);const Ue=(G-3.2)/3.4,$e=Se+te*(.08+.32*Ue);f.sobrevuelo(ue,$e,.016+.01*Math.sin(Ue*3),.006*Math.sin(Ue*2.4),.06,56),f.enfocarEn(ue($e+.05).position,.8,!0);const tt=ue($e),ct=Te.find(gt=>gt.id===tt.sector);x.rotulo(ct?`${ct.name}<small>SECTOR ${ct.id}</small>`:null)}else if(G<9.6){const Ue=(G-6.6)/3,$e=1+(z?z.indice:0)%Math.max(1,ee.length-1),tt=ee[$e]||ee[0];nt.fromArray(tt.m),ot.fromArray(tt.p).sub(nt),ot.applyAxisAngle(new D(0,1,0),(Ue-.5)*.5).add(nt),f.toma(ot,nt,38),f.enfocarEn(nt,1,!0),x.rotulo(null)}else $()}function Ot(G){const ee=[...R.todos].sort((pt,it)=>pt.progreso-it.progreso),ue=.95,te=Math.floor(G/ue);if(te>=ee.length){T();return}const Se=ee[te],Te=(G-te*ue)/ue,Ue=Se.esJugador?F.kartRoot:Se.modelo.kartRoot,$e=v.state,tt=Se.esJugador?$e:v.sampleTrackAtArcLength(Se.s),ct=Se.esJugador||Se.lateral>0?1:-1,gt=-Se.progreso>.05?1:-1;nt.copy(Ue.position).addScaledVector(tt.normal,.003),ot.copy(Ue.position).addScaledVector(tt.tangent,gt*(.016-Te*.006)).addScaledVector(tt.right,-ct*(.013+Te*.002)).addScaledVector(tt.normal,.006),f.toma(ot,nt,36),f.enfocarEn(nt,1.2,!0),x.rotulo(`<span class="marca" style="background:${fa(Se.piloto.color)}"></span>${Se.esJugador?`${Se.piloto.nombre} · TÚ`:Se.humano?`${Se.nombre} · ${Se.piloto.nombre}`:Se.piloto.nombre}<small>${Se.vehiculo.nombre.toUpperCase()} · ${Se.piloto.habilidad.toUpperCase()}</small>`)}function nn(G,ee){var Se,Te;const ue=v.state,te=Math.min(5,Math.floor(G/.8));if(te!==Q&&G<4&&(Q=te,A.setVelas(te),te>=1&&p.cuenta(String(6-te)),te>=1&&u&&((Se=m.playF1CountdownBeep)==null||Se.call(m,!1))),G>=4){A.setVelas(5,!0),p.cuenta("¡YA!"),setTimeout(()=>p.cuenta(""),700),u&&((Te=m.playF1CountdownBeep)==null||Te.call(m,!0)),nr(u,1),v.state.countdownLocked=!1,v.notifyLightsOut(),R.arrancar(),se("carrera");return}if(f.seguir(ue,ee,w,{escala:Il,altoVehiculo:F.alto}),G<1.4){const Ue=Dl(G/1.4);ot.copy(ue.position).addScaledVector(ue.tangent,-.05).addScaledVector(ue.normal,.035),f.camera.position.lerp(ot,1-Ue),nt.copy(ue.position).addScaledVector(ue.tangent,.024*Ue).addScaledVector(ue.normal,.003),f.camera.lookAt(nt)}}function hn(G,ee){const ue=v.state;if(G<1.6){const te=G*1.4+.6;nt.copy(ue.position).addScaledVector(ue.normal,.003),ot.copy(ue.position).addScaledVector(ue.right,Math.cos(te)*.02).addScaledVector(ue.tangent,Math.sin(te)*.02).addScaledVector(ue.normal,.008),f.toma(ot,nt,34),f.enfocarEn(nt,1.2,!0),_e=.3}else if(G<6.5){if(_e=1,!Z||w-Z.t0>1.7){const te=ue.s+.08,Se=v.sampleTrackAtArcLength(te),Te=Math.random()<.5?-1:1;Z={t0:w,p:Se.position.clone().addScaledVector(Se.right,Te*.03).addScaledVector(Se.normal,.012)}}nt.copy(ue.position).addScaledVector(ue.normal,.003),f.toma(Z.p,nt,30),f.enfocarEn(nt,1,!0)}else de()&&!W.final?(_=1.6,Z=null,x.rotulo("Esperando a que lleguen los demás…")):(x.rotulo(null),Je())}function on(G){const ee=v.state;nt.copy(ee.position).addScaledVector(ee.normal,.004),f.orbita(nt,.03,.012,G*.35,36),f.enfocarEn(nt,1.2,!0)}function Rn(G){const ee=Dl(Math.min(1,G/4));ot.set(Math.sin(G*.25)*.012,.034-ee*.006,.12-ee*.03),nt.set(0,.016,0),f.toma(ot,nt,36,.002),f.enfocarEn(nt,1.2,!0),G>5.5&&!be()&&g==="podio"&&K()}function Mn(G){ot.set(Math.sin(G*.2)*.012+.035,.019,.046),nt.set(0,.006,0),f.toma(ot,nt,36,.002),f.enfocarEn(nt,1.4,!0);const ee=f.camera,ue=document.getElementById("menu-panel").getBoundingClientRect().width;if(innerWidth>760){const te=(ue+innerWidth)/2/innerWidth;ee.setViewOffset(innerWidth,innerHeight,-(te-.5)*innerWidth,0,innerWidth,innerHeight)}else ee.view&&ee.view.enabled&&ee.clearViewOffset()}let xt=performance.now();function Dt(G){var Se;requestAnimationFrame(Dt);let ee=(G-xt)/1e3;xt=G,ee>0||(ee=0),ee=Math.min(ee,.05),w+=ee;const ue=f.camera;if(g!=="menu"&&ue.view&&ue.view.enabled&&ue.clearViewOffset(),g==="menu"||g==="cargando"){b.actualizar(w,ee),g==="menu"&&Mn(w),g==="menu"&&o.render();return}if(g==="podio"||g==="copa"){_+=ee,b.actualizar(w,ee),Rn(_),o.render();return}if(!S||!v)return;if(E&&!de()){o.render();return}const te=ee*_e;if(_+=ee,g==="carrera"&&!R.yo.llego&&!E){const Te=Ce.leer();e.autoAcelerar&&!Te.freno&&(Te.acel=!0),v.setInput(Te)}else{const Te=Ce.leer();v.setInput({acel:g==="cuenta"&&(Te.acel||e.autoAcelerar)})}g!=="intro"&&g!=="parrilla"&&g!=="espera"&&v.stepPhysics(te),R.paso(te),ye(te),S.actualizar(w,te,{renderer:o.renderer,bloomPass:o.bloomPass}),(Se=M.updateUnderTrackLed)==null||Se.call(M,w,1),A.animar(w,ee),g==="intro"?bt(_):g==="parrilla"?Ot(_):g==="cuenta"?nn(_,ee):g==="carrera"?f.seguir(v.state,ee,w,{escala:Il,altoVehiculo:F.alto}):g==="llegada"?hn(_):g==="espera"&&on(w),de()&&Fn(ee),(g==="carrera"||g==="cuenta")&&p.actualizar(v.state,R,R.reloj),g==="carrera"&&c(ee),u&&m.update(v.state),Ze(),o.render()}function Ht(){const G=k();return{piloto:G.piloto.id,vehiculo:G.vehiculo.id,color:fa(G.piloto.color)}}function cn(){if(W&&W.sala){W.red.ponerDatos(Ht()),W.sala.mostrar();return}const G=k2({juego:"granpremio",titulo:"Gran Premio · con amigos",acento:"#e8b84a",max:6,datos:Ht(),detalle:ee=>{const ue=Li.find(Se=>{var Te;return Se.id===((Te=ee.datos)==null?void 0:Te.piloto)}),te=Di.find(Se=>{var Te;return Se.id===((Te=ee.datos)==null?void 0:Te.vehiculo)});return ue&&te?`${ue.nombre} · ${te.nombre}`:""},opciones:ee=>wn(ee),textoEmpezar:"¡A CORRER!",textoEspera:"Esperando a que el anfitrión dé la salida…",alEmpezar:()=>dn(),alSalir:()=>{fe(),le.mostrar(!0,"inicio")}});W={red:G.red,sala:G,enCarrera:!1},G.red.on("mensaje",On),G.red.on("sale",ee=>U(ee)),G.red.on("cerrada",ee=>{W&&W.enCarrera&&pe(ee)})}function wn(G){const ee=(ue,te,Se)=>`<option value="${ue}"${Se?" selected":""}>${te}</option>`;G.innerHTML=`
      <label>Mundo <select data-o="mundo">${ls.map(ue=>ee(ue.id,ue.nombre,ue.id===t.mundo)).join("")}</select></label>
      <label>Sentido <select data-o="reverso">${ee("0","Normal",!t.reverso)}${ee("1","Reverso",t.reverso)}</select></label>
      <label>Rivales de la máquina <select data-o="ia">${ee("1","Sí, hasta 6",t.conIA!==!1)}${ee("0","Solo nosotros",t.conIA===!1)}</select></label>
      <label>Clase <select data-o="dif">${es.map((ue,te)=>ee(te,ue.nombre,te===t.dif)).join("")}</select></label>`,G.onchange=ue=>{const te=ue.target;te.dataset.o==="mundo"?t.mundo=te.value:te.dataset.o==="reverso"?t.reverso=te.value==="1":te.dataset.o==="ia"?t.conIA=te.value==="1":te.dataset.o==="dif"&&(t.dif=Number(te.value)),n()}}function dn(){if(!W||!W.red.esAnfitrion)return;const G=W.red.jugadores.map(Se=>{var Te,Ue;return{humano:!0,rid:Se.id,nombre:Se.nombre,piloto:((Te=Se.datos)==null?void 0:Te.piloto)||"lucia",vehiculo:((Ue=Se.datos)==null?void 0:Ue.vehiculo)||"kart"}}),ee=new Set(G.map(Se=>Se.piloto)),ue=[];if(t.conIA!==!1){const Se=Ga(Li.filter(Ue=>!ee.has(Ue.id))),Te=Ga(Di);for(let Ue=0;G.length+ue.length<6&&Ue<Se.length;Ue++)ue.push({humano:!1,piloto:Se[Ue].id,vehiculo:Te[Ue%Te.length].id})}const te={t:"carrera",mundo:t.mundo,reverso:!!t.reverso,dif:t.dif,parrilla:[...ue,...Ga(G)]};W.red.abrirEntrada(!1),W.red.enviar(te),Pn(te)}function Pn(G){if(W.sala.ocultar(),Object.assign(W,{enCarrera:!0,parrilla:G.parrilla,miSlot:G.parrilla.findIndex(ee=>ee.rid===W.red.miId),dif:G.dif,listos:new Set,salida:!1,final:!1,finalEnviado:!1,finalT:null,primeraMetaT:null,envioT:0,iaT:0,tCarga:w}),W.miSlot<0){pe("No apareces en la parrilla de esta carrera.");return}z=null,E=!1,le.mostrar(!1),e.sonido&&ie(!0),Me({mundo:G.mundo,reverso:G.reverso})}function Kn(){W.red.esAnfitrion?(W.listos.add(W.red.miId),Sn()):W.red.enviar({t:"listo"},{a:W.red.ID_ANFITRION})}function Sn(){if(!W.red.esAnfitrion||W.salida)return;W.parrilla.filter(ee=>ee.humano&&!ee.desconectado&&!W.listos.has(ee.rid)).length||Nn()}function Nn(){W.red.enviar({t:"salida"}),yn()}function yn(){W.salida=!0,["intro","parrilla","espera"].includes(g)&&ae()}function Fn(G){if(!R||(W.red.esAnfitrion&&!W.salida&&w-W.tCarga>60&&g!=="cargando"&&Nn(),!["cuenta","carrera","llegada"].includes(g))||(W.envioT-=G,W.envioT<=0&&(W.envioT=1/20,W.red.enviar({t:"e",s:W.miSlot,e:R.estadoPropio()},{rapido:!0})),!W.red.esAnfitrion))return;if(W.iaT-=G,W.iaT<=0){W.iaT=1/15;const te=R.estadoIA();te.length&&W.red.enviar({t:"ia",l:te},{rapido:!0})}const ee=R.todos.filter(te=>te.humano&&!te.desconectado),ue=ee.filter(te=>te.llego).length;ue&&W.primeraMetaT==null&&(W.primeraMetaT=w),!W.finalEnviado&&ue===ee.length&&W.finalT==null&&(W.finalT=w+1.5),!W.finalEnviado&&(W.finalT!=null&&w>=W.finalT||W.primeraMetaT!=null&&w-W.primeraMetaT>45)&&Xn()}function Xn(){W.finalEnviado=!0,R.cerrar();const G=R.clasificacion(),ee={t:"final",orden:G.map(ue=>ue.slot),tiempos:G.map(ue=>ue.tiempo)};W.red.enviar(ee),en(ee)}function en(G){R&&(R.aplicarFinal(G.orden,G.tiempos),W.final=!0,g==="carrera"||g==="cuenta"?(Ge(),_=5):g==="llegada"&&_>=1.6&&(x.rotulo(null),Je()))}function On(G,ee){if(!W||!G)return;const ue=W.red.esAnfitrion;switch(G.t){case"carrera":ue||(Pe(),Pn(G));break;case"listo":ue&&W.enCarrera&&(W.parrilla.find(Se=>Se.rid===ee)&&W.listos.add(ee),Sn());break;case"salida":!ue&&W.enCarrera&&yn();break;case"e":de()&&R&&G.s!==W.miSlot&&R.aplicarRed(G.s,G.e);break;case"ia":if(!ue&&de()&&R)for(const te of G.l)R.aplicarRed(te[0],te.slice(1));break;case"final":!ue&&de()&&en(G);break;case"sala":ue||ve();break}}function U(G){if(!W||!W.enCarrera)return;const ee=W.parrilla.find(te=>te.rid===G.id);ee&&(ee.desconectado=!0);const ue=R&&R.todos.find(te=>te.rid===G.id);ue&&(ue.desconectado=!0),["carrera","cuenta","llegada"].includes(g)&&p.aviso(`${G.nombre} salió de la carrera`,1600),Sn()}function ve(){W&&(W.enCarrera=!1,W.parrilla=null,y(),le.mostrar(!1),W.red.esAnfitrion&&W.red.abrirEntrada(!0),W.red.ponerDatos(Ht()),W.sala.mostrar())}function Ie(){W&&(W.red.cerrar(),fe(),y())}function fe(){if(W){try{W.sala.destruir()}catch{}W=null}}function pe(G){fe(),E=!1,Ae(`
      <div class="welcome-eyebrow">CON AMIGOS</div>
      <h2>Se cortó la conexión</h2>
      <div class="frase">${G||"Se perdió la conexión con los demás."}</div>
      <div class="botones-panel"><button class="welcome-start-btn" data-accion="menu" type="button"><span class="welcome-start-text">MENÚ</span></button></div>`)}window.__juego={get estado(){return g},get carrera(){return R},get physics(){return v},get copa(){return z},get mp(){return W},get sel(){return t},get render(){return o},get escena(){return C},saltar:Re,empezarCarrera:Me,empezarCopa:he,irAlMenu:y,alternarPausa:Qe,set escalaTiempo(G){_e=G},set tEstado(G){_=G},darSalida(){(g==="intro"||g==="parrilla")&&ae(),g==="cuenta"&&nn(4,.016)},simular(G){if(!(!v||!R)){v.setAutopilot(!0);for(let ee=0;ee<G*60&&g==="carrera";ee++)v.stepPhysics(1/60),R.paso(1/60);ye(1/60)}}},s(),ge(),y(),requestAnimationFrame(Dt)}H2().catch(i=>{console.error("No se pudo iniciar el Gran Premio de la Fe:",i)});
