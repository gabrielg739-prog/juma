(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="183",Nd=0,d0=1,Fd=2,Vs=1,Od=2,Fs=3,qi=0,Rn=1,on=2,yi=0,To=1,Gn=2,f0=3,h0=4,Bd=5,Mo=100,zd=101,kd=102,Vd=103,Gd=104,Hd=200,Wd=201,Xd=202,jd=203,bl=204,Tl=205,qd=206,Yd=207,Zd=208,$d=209,Jd=210,Kd=211,Qd=212,ef=213,tf=214,Al=0,Cl=1,El=2,rs=3,Rl=4,Pl=5,Il=6,Ll=7,Tc=0,nf=1,of=2,Pi=0,Ac=1,Cc=2,Ec=3,mr=4,Rc=5,Pc=6,Ic=7,Bu=300,Co=301,ls=302,Rr=303,Pr=304,gr=306,Ut=1e3,kn=1001,Dl=1002,wn=1003,sf=1004,sa=1005,_n=1006,Ir=1007,So=1008,ti=1009,zu=1010,ku=1011,qs=1012,Lc=1013,Li=1014,ni=1015,qn=1016,Dc=1017,Uc=1018,Ys=1020,Vu=35902,Gu=35899,Hu=1021,Wu=1022,ui=1023,Yi=1026,yo=1027,Nc=1028,Fc=1029,cs=1030,Oc=1031,Bc=1033,Za=33776,$a=33777,Ja=33778,Ka=33779,Ul=35840,Nl=35841,Fl=35842,Ol=35843,Bl=36196,zl=37492,kl=37496,Vl=37488,Gl=37489,Hl=37490,Wl=37491,Xl=37808,jl=37809,ql=37810,Yl=37811,Zl=37812,$l=37813,Jl=37814,Kl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,oc=37821,sc=36492,ac=36494,rc=36495,lc=36283,cc=36284,uc=36285,dc=36286,af=3200,rf=3201,zc=0,lf=1,ro="",jt="srgb",us="srgb-linear",nr="linear",en="srgb",Uo=7680,p0=519,cf=512,uf=513,df=514,kc=515,ff=516,hf=517,Vc=518,pf=519,fc=35044,m0="300 es",Ri=2e3,Zs=2001;function mf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){const i=ir("canvas");return i.style.display="block",i}const g0={};function or(...i){const e="THREE."+i.shift();console.log(e,...i)}function Xu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function St(...i){i=Xu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xt(...i){i=Xu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sr(...i){const e=i.join(" ");e in g0||(g0[e]=!0,St(...i))}function xf(i,e,t){return new Promise(function(n,o){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const vf={[Al]:Cl,[El]:Il,[Rl]:Ll,[rs]:Pl,[Cl]:Al,[Il]:El,[Ll]:Rl,[Pl]:rs};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let s=0,a=o.length;s<a;s++)o[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let x0=1234567;const Gs=Math.PI/180,ds=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Gc(i,e){return(i%e+e)%e}function _f(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function Mf(i,e,t){return i!==e?(t-i)/(e-i):0}function Hs(i,e,t){return(1-t)*i+t*e}function wf(i,e,t,n){return Hs(i,e,1-Math.exp(-t*n))}function Sf(i,e=1){return e-Math.abs(Gc(i,e*2)-e)}function yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Af(i,e){return i+Math.random()*(e-i)}function Cf(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(x0=i);let e=x0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(i){return i*Gs}function Pf(i){return i*ds}function If(i){return(i&i-1)===0&&i!==0}function Lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uf(i,e,t,n,o){const s=Math.cos,a=Math.sin,r=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(o){case"XYX":i.set(r*d,l*h,l*f,r*c);break;case"YZY":i.set(l*f,r*d,l*h,r*c);break;case"ZXZ":i.set(l*h,l*f,r*d,r*c);break;case"XZX":i.set(r*d,l*v,l*p,r*c);break;case"YXY":i.set(l*p,r*d,l*v,r*c);break;case"ZYZ":i.set(l*v,l*p,r*d,r*c);break;default:St("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:Gs,RAD2DEG:ds,generateUUID:Ii,clamp:Nt,euclideanModulo:Gc,mapLinear:_f,inverseLerp:Mf,lerp:Hs,damp:wf,pingpong:Sf,smoothstep:yf,smootherstep:bf,randInt:Tf,randFloat:Af,randFloatSpread:Cf,seededRandom:Ef,degToRad:Rf,radToDeg:Pf,isPowerOfTwo:If,ceilPowerOfTwo:Lf,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Uf,normalize:nn,denormalize:Si};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*o+e.x,this.y=s*o+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,s,a,r){let l=n[o+0],c=n[o+1],d=n[o+2],h=n[o+3],f=s[a+0],p=s[a+1],v=s[a+2],S=s[a+3];if(h!==S||l!==f||c!==p||d!==v){let m=l*f+c*p+d*v+h*S;m<0&&(f=-f,p=-p,v=-v,S=-S,m=-m);let u=1-r;if(m<.9995){const g=Math.acos(m),M=Math.sin(g);u=Math.sin(u*g)/M,r=Math.sin(r*g)/M,l=l*u+f*r,c=c*u+p*r,d=d*u+v*r,h=h*u+S*r}else{l=l*u+f*r,c=c*u+p*r,d=d*u+v*r,h=h*u+S*r;const g=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=g,c*=g,d*=g,h*=g}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,o,s,a){const r=n[o],l=n[o+1],c=n[o+2],d=n[o+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=r*v+d*h+l*p-c*f,e[t+1]=l*v+d*f+c*h-r*p,e[t+2]=c*v+d*p+r*f-l*h,e[t+3]=d*v-r*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(n/2),d=r(o/2),h=r(s/2),f=l(n/2),p=l(o/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*p*v,this._y=c*p*h-f*d*v,this._z=c*d*v+f*p*h,this._w=c*d*h-f*p*v;break;case"YXZ":this._x=f*d*h+c*p*v,this._y=c*p*h-f*d*v,this._z=c*d*v-f*p*h,this._w=c*d*h+f*p*v;break;case"ZXY":this._x=f*d*h-c*p*v,this._y=c*p*h+f*d*v,this._z=c*d*v+f*p*h,this._w=c*d*h-f*p*v;break;case"ZYX":this._x=f*d*h-c*p*v,this._y=c*p*h+f*d*v,this._z=c*d*v-f*p*h,this._w=c*d*h+f*p*v;break;case"YZX":this._x=f*d*h+c*p*v,this._y=c*p*h+f*d*v,this._z=c*d*v-f*p*h,this._w=c*d*h-f*p*v;break;case"XZY":this._x=f*d*h-c*p*v,this._y=c*p*h-f*d*v,this._z=c*d*v+f*p*h,this._w=c*d*h+f*p*v;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],s=t[8],a=t[1],r=t[5],l=t[9],c=t[2],d=t[6],h=t[10],f=n+r+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-o)*p}else if(n>r&&n>h){const p=2*Math.sqrt(1+n-r-h);this._w=(d-l)/p,this._x=.25*p,this._y=(o+a)/p,this._z=(s+c)/p}else if(r>h){const p=2*Math.sqrt(1+r-n-h);this._w=(s-c)/p,this._x=(o+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-r);this._w=(a-o)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,s=e._z,a=e._w,r=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*r+o*c-s*l,this._y=o*d+a*l+s*r-n*c,this._z=s*d+a*c+n*l-o*r,this._w=a*d-n*r-o*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,o=e._y,s=e._z,a=e._w,r=this.dot(e);r<0&&(n=-n,o=-o,s=-s,a=-a,r=-r);let l=1-t;if(r<.9995){const c=Math.acos(r),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+o*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+o*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(v0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(v0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*o,this.y=s[1]*t+s[4]*n+s[7]*o,this.z=s[2]*t+s[5]*n+s[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*o+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*o+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*o+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*o+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,s=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*o-r*n),d=2*(r*t-s*o),h=2*(s*n-a*t);return this.x=t+l*c+a*h-r*d,this.y=n+l*d+r*c-s*h,this.z=o+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*o,this.y=s[1]*t+s[5]*n+s[9]*o,this.z=s[2]*t+s[6]*n+s[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=o*l-s*r,this.y=s*a-n*l,this.z=n*r-o*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lr.copy(this).projectOnVector(e),this.sub(Lr)}reflect(e){return this.sub(Lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new L,v0=new Yn;class Rt{constructor(e,t,n,o,s,a,r,l,c){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,s,a,r,l,c)}set(e,t,n,o,s,a,r,l,c){const d=this.elements;return d[0]=e,d[1]=o,d[2]=r,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,s=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],p=n[5],v=n[8],S=o[0],m=o[3],u=o[6],g=o[1],M=o[4],w=o[7],A=o[2],y=o[5],C=o[8];return s[0]=a*S+r*g+l*A,s[3]=a*m+r*M+l*y,s[6]=a*u+r*w+l*C,s[1]=c*S+d*g+h*A,s[4]=c*m+d*M+h*y,s[7]=c*u+d*w+h*C,s[2]=f*S+p*g+v*A,s[5]=f*m+p*M+v*y,s[8]=f*u+p*w+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*r*c-n*s*d+n*r*l+o*s*c-o*a*l}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],d=e[8],h=d*a-r*c,f=r*l-d*s,p=c*s-a*l,v=t*h+n*f+o*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(o*c-d*n)*S,e[2]=(r*n-o*a)*S,e[3]=f*S,e[4]=(d*t-o*l)*S,e[5]=(o*s-r*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*r)+a+e,-o*c,o*l,-o*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new Rt,_0=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nf(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(o,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===en&&(o.r=ji(o.r),o.g=ji(o.g),o.b=ji(o.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[s].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===en&&(o.r=is(o.r),o.g=is(o.g),o.b=is(o.b))),o},workingToColorSpace:function(o,s){return this.convert(o,this.workingColorSpace,s)},colorSpaceToWorking:function(o,s){return this.convert(o,s,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ro?nr:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,s=this.workingColorSpace){return o.fromArray(this.spaces[s].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,s,a){return o.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,s)},toWorkingColorSpace:function(o,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:nr,toXYZ:_0,fromXYZ:M0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:en,toXYZ:_0,fromXYZ:M0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const Yt=Nf();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let No;class Ff{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{No===void 0&&(No=ir("canvas")),No.width=e.width,No.height=e.height;const o=No.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=No}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Of=0;class Hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let a=0,r=o.length;a<r;a++)o[a].isDataTexture?s.push(Ur(o[a].image)):s.push(Ur(o[a]))}else s=Ur(o);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ff.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let Bf=0;const Nr=new L;class Un extends vs{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,n=kn,o=kn,s=_n,a=So,r=ui,l=ti,c=Un.DEFAULT_ANISOTROPY,d=ro){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Ii(),this.name="",this.source=new Hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nr).x}get height(){return this.source.getSize(Nr).y}get depth(){return this.source.getSize(Nr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ut:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ut:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Bu;Un.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,n=0,o=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*o+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*o+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*o+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],v=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(p+1)/2,A=(u+1)/2,y=(d+f)/4,C=(h+S)/4,_=(v+m)/4;return M>w&&M>A?M<.01?(n=0,o=.707106781,s=.707106781):(n=Math.sqrt(M),o=y/n,s=C/n):w>A?w<.01?(n=.707106781,o=0,s=.707106781):(o=Math.sqrt(w),n=y/o,s=_/o):A<.01?(n=.707106781,o=.707106781,s=0):(s=Math.sqrt(A),n=C/s,o=_/s),this.set(n,o,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-S)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends vs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:n.depth},s=new Un(o),a=n.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Hc(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends zf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ju extends Un{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends Un{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e,t,n,o,s,a,r,l,c,d,h,f,p,v,S,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,s,a,r,l,c,d,h,f,p,v,S,m)}set(e,t,n,o,s,a,r,l,c,d,h,f,p,v,S,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=o,u[1]=s,u[5]=a,u[9]=r,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=v,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,o=1/Fo.setFromMatrixColumn(e,0).length(),s=1/Fo.setFromMatrixColumn(e,1).length(),a=1/Fo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,s=e.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(o),c=Math.sin(o),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,v=r*d,S=r*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-S*c,t[9]=-r*l,t[2]=S-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,v=c*d,S=c*h;t[0]=f+S*r,t[4]=v*r-p,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-r,t[2]=p*r-v,t[6]=S+f*r,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,v=c*d,S=c*h;t[0]=f-S*r,t[4]=-a*h,t[8]=v+p*r,t[1]=p+v*r,t[5]=a*d,t[9]=S-f*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,v=r*d,S=r*h;t[0]=l*d,t[4]=v*c-p,t[8]=f*c+S,t[1]=l*h,t[5]=S*c+f,t[9]=p*c-v,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=r*l,S=r*c;t[0]=l*d,t[4]=S-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*d,t[9]=-r*d,t[2]=-c*d,t[6]=p*h+v,t[10]=f-S*h}else if(e.order==="XZY"){const f=a*l,p=a*c,v=r*l,S=r*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=f*h+S,t[5]=a*d,t[9]=p*h-v,t[2]=v*h-p,t[6]=r*d,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vf,e,Gf)}lookAt(e,t,n){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ki.crossVectors(n,Qn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ki.crossVectors(n,Qn)),Ki.normalize(),aa.crossVectors(Qn,Ki),o[0]=Ki.x,o[4]=aa.x,o[8]=Qn.x,o[1]=Ki.y,o[5]=aa.y,o[9]=Qn.y,o[2]=Ki.z,o[6]=aa.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,s=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],p=n[13],v=n[2],S=n[6],m=n[10],u=n[14],g=n[3],M=n[7],w=n[11],A=n[15],y=o[0],C=o[4],_=o[8],b=o[12],x=o[1],R=o[5],U=o[9],O=o[13],N=o[2],k=o[6],z=o[10],K=o[14],he=o[3],J=o[7],ie=o[11],F=o[15];return s[0]=a*y+r*x+l*N+c*he,s[4]=a*C+r*R+l*k+c*J,s[8]=a*_+r*U+l*z+c*ie,s[12]=a*b+r*O+l*K+c*F,s[1]=d*y+h*x+f*N+p*he,s[5]=d*C+h*R+f*k+p*J,s[9]=d*_+h*U+f*z+p*ie,s[13]=d*b+h*O+f*K+p*F,s[2]=v*y+S*x+m*N+u*he,s[6]=v*C+S*R+m*k+u*J,s[10]=v*_+S*U+m*z+u*ie,s[14]=v*b+S*O+m*K+u*F,s[3]=g*y+M*x+w*N+A*he,s[7]=g*C+M*R+w*k+A*J,s[11]=g*_+M*U+w*z+A*ie,s[15]=g*b+M*O+w*K+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],s=e[12],a=e[1],r=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],v=e[3],S=e[7],m=e[11],u=e[15],g=l*p-c*f,M=r*p-c*h,w=r*f-l*h,A=a*p-c*d,y=a*f-l*d,C=a*h-r*d;return t*(S*g-m*M+u*w)-n*(v*g-m*A+u*y)+o*(v*M-S*A+u*C)-s*(v*w-S*y+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],v=e[12],S=e[13],m=e[14],u=e[15],g=t*r-n*a,M=t*l-o*a,w=t*c-s*a,A=n*l-o*r,y=n*c-s*r,C=o*c-s*l,_=d*S-h*v,b=d*m-f*v,x=d*u-p*v,R=h*m-f*S,U=h*u-p*S,O=f*u-p*m,N=g*O-M*U+w*R+A*x-y*b+C*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=(r*O-l*U+c*R)*k,e[1]=(o*U-n*O-s*R)*k,e[2]=(S*C-m*y+u*A)*k,e[3]=(f*y-h*C-p*A)*k,e[4]=(l*x-a*O-c*b)*k,e[5]=(t*O-o*x+s*b)*k,e[6]=(m*w-v*C-u*M)*k,e[7]=(d*C-f*w+p*M)*k,e[8]=(a*U-r*x+c*_)*k,e[9]=(n*x-t*U-s*_)*k,e[10]=(v*y-S*w+u*g)*k,e[11]=(h*w-d*y-p*g)*k,e[12]=(r*b-a*R-l*_)*k,e[13]=(t*R-n*b+o*_)*k,e[14]=(S*M-v*A-m*g)*k,e[15]=(d*A-h*M+f*g)*k,this}scale(e){const t=this.elements,n=e.x,o=e.y,s=e.z;return t[0]*=n,t[4]*=o,t[8]*=s,t[1]*=n,t[5]*=o,t[9]*=s,t[2]*=n,t[6]*=o,t[10]*=s,t[3]*=n,t[7]*=o,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),s=1-n,a=e.x,r=e.y,l=e.z,c=s*a,d=s*r;return this.set(c*a+n,c*r-o*l,c*l+o*r,0,c*r+o*l,d*r+n,d*l-o*a,0,c*l-o*r,d*l+o*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,s,a){return this.set(1,n,s,0,e,1,a,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,c=s+s,d=a+a,h=r+r,f=s*c,p=s*d,v=s*h,S=a*d,m=a*h,u=r*h,g=l*c,M=l*d,w=l*h,A=n.x,y=n.y,C=n.z;return o[0]=(1-(S+u))*A,o[1]=(p+w)*A,o[2]=(v-M)*A,o[3]=0,o[4]=(p-w)*y,o[5]=(1-(f+u))*y,o[6]=(m+g)*y,o[7]=0,o[8]=(v+M)*C,o[9]=(m-g)*C,o[10]=(1-(f+S))*C,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Fo.set(o[0],o[1],o[2]).length();const r=Fo.set(o[4],o[5],o[6]).length(),l=Fo.set(o[8],o[9],o[10]).length();s<0&&(a=-a),vi.copy(this);const c=1/a,d=1/r,h=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=d,vi.elements[5]*=d,vi.elements[6]*=d,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=a,n.y=r,n.z=l,this}makePerspective(e,t,n,o,s,a,r=Ri,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-o),f=(t+e)/(t-e),p=(n+o)/(n-o);let v,S;if(l)v=s/(a-s),S=a*s/(a-s);else if(r===Ri)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(r===Zs)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,o,s,a,r=Ri,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-o),f=-(t+e)/(t-e),p=-(n+o)/(n-o);let v,S;if(l)v=1/(a-s),S=a/(a-s);else if(r===Ri)v=-2/(a-s),S=-(a+s)/(a-s);else if(r===Zs)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fo=new L,vi=new Vt,Vf=new L(0,0,0),Gf=new L(1,1,1),Ki=new L,aa=new L,Qn=new L,w0=new Vt,S0=new Yn;class ii{constructor(e=0,t=0,n=0,o=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,s=o[0],a=o[4],r=o[8],l=o[1],c=o[5],d=o[9],h=o[2],f=o[6],p=o[10];switch(t){case"XYZ":this._y=Math.asin(Nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return w0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hf=0;const y0=new L,Oo=new Yn,Fi=new Vt,ra=new L,Ss=new L,Wf=new L,Xf=new Yn,b0=new L(1,0,0),T0=new L(0,1,0),A0=new L(0,0,1),C0={type:"added"},jf={type:"removed"},Bo={type:"childadded",child:null},Fr={type:"childremoved",child:null};class sn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new L,t=new ii,n=new Yn,o=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Rt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.premultiply(Oo),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(T0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,t){return y0.copy(e).applyQuaternion(this.quaternion),this.position.add(y0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(T0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ss,ra,this.up):Fi.lookAt(ra,Ss,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),Oo.setFromRotationMatrix(Fi),this.quaternion.premultiply(Oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,o=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*o,s[13]+=n-s[1]*t-s[5]*n-s[9]*o,s[14]+=o-s[2]*t-s[6]*n-s[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(r=>({...r})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));o.material=r}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];o.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=o,n;function a(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}sn.DEFAULT_UP=new L(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class et extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qf={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&s!==null&&(o=s),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return r!==null&&(r.visible=o!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},la={h:0,s:0,l:0};function Br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=Yt.workingColorSpace){if(e=Gc(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Br(a,s,e+1/3),this.g=Br(a,s,e),this.b=Br(a,s,e-1/3)}return Yt.colorSpaceToWorking(this,o),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=o[1],r=o[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=o[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Yt.workingToColorSpace(Dn.copy(this),e),Math.round(Nt(Dn.r*255,0,255))*65536+Math.round(Nt(Dn.g*255,0,255))*256+Math.round(Nt(Dn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,o=Dn.g,s=Dn.b,a=Math.max(n,o,s),r=Math.min(n,o,s);let l,c;const d=(r+a)/2;if(r===a)l=0,c=0;else{const h=a-r;switch(c=d<=.5?h/(a+r):h/(2-a-r),a){case n:l=(o-s)/h+(o<s?6:0);break;case o:l=(s-n)/h+2;break;case s:l=(n-o)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=jt){Yt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,o=Dn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(la);const n=Hs(Qi.h,la.h,t),o=Hs(Qi.s,la.s,t),s=Hs(Qi.l,la.l,t);return this.setHSL(n,o,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*o,this.g=s[1]*t+s[4]*n+s[7]*o,this.b=s[2]*t+s[5]*n+s[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ze;ze.NAMES=qu;class ta{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new xr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $s extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new L,Oi=new L,zr=new L,Bi=new L,zo=new L,ko=new L,E0=new L,kr=new L,Vr=new L,Gr=new L,Hr=new hn,Wr=new hn,Xr=new hn;class ci{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),_i.subVectors(e,t),o.cross(_i);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(e,t,n,o,s){_i.subVectors(o,t),Oi.subVectors(n,t),zr.subVectors(e,t);const a=_i.dot(_i),r=_i.dot(Oi),l=_i.dot(zr),c=Oi.dot(Oi),d=Oi.dot(zr),h=a*c-r*r;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-r*d)*f,v=(a*d-r*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,o,s,a,r,l){return this.getBarycoord(e,t,n,o,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(r,Bi.z),l)}static getInterpolatedAttribute(e,t,n,o,s,a){return Hr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Hr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,n),Xr.fromBufferAttribute(e,o),a.setScalar(0),a.addScaledVector(Hr,s.x),a.addScaledVector(Wr,s.y),a.addScaledVector(Xr,s.z),a}static isFrontFacing(e,t,n,o){return _i.subVectors(n,t),Oi.subVectors(e,t),_i.cross(Oi).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),_i.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,o,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,s=this.c;let a,r;zo.subVectors(o,n),ko.subVectors(s,n),kr.subVectors(e,n);const l=zo.dot(kr),c=ko.dot(kr);if(l<=0&&c<=0)return t.copy(n);Vr.subVectors(e,o);const d=zo.dot(Vr),h=ko.dot(Vr);if(d>=0&&h<=d)return t.copy(o);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(zo,a);Gr.subVectors(e,s);const p=zo.dot(Gr),v=ko.dot(Gr);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return r=c/(c-v),t.copy(n).addScaledVector(ko,r);const m=d*v-p*h;if(m<=0&&h-d>=0&&p-v>=0)return E0.subVectors(s,o),r=(h-d)/(h-d+(p-v)),t.copy(o).addScaledVector(E0,r);const u=1/(m+S+f);return a=S*u,r=f*u,t.copy(n).addScaledVector(zo,a).addScaledVector(ko,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fo{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(s,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const o=e.children;for(let s=0,a=o.length;s<a;s++)this.expandByObject(o[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),ua.subVectors(this.max,ys),Vo.subVectors(e.a,ys),Go.subVectors(e.b,ys),Ho.subVectors(e.c,ys),eo.subVectors(Go,Vo),to.subVectors(Ho,Go),ho.subVectors(Vo,Ho);let t=[0,-eo.z,eo.y,0,-to.z,to.y,0,-ho.z,ho.y,eo.z,0,-eo.x,to.z,0,-to.x,ho.z,0,-ho.x,-eo.y,eo.x,0,-to.y,to.x,0,-ho.y,ho.x,0];return!jr(t,Vo,Go,Ho,ua)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Vo,Go,Ho,ua))?!1:(da.crossVectors(eo,to),t=[da.x,da.y,da.z],jr(t,Vo,Go,Ho,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new L,new L,new L,new L,new L,new L,new L,new L],Mi=new L,ca=new fo,Vo=new L,Go=new L,Ho=new L,eo=new L,to=new L,ho=new L,ys=new L,ua=new L,da=new L,po=new L;function jr(i,e,t,n,o){for(let s=0,a=i.length-3;s<=a;s+=3){po.fromArray(i,s);const r=o.x*Math.abs(po.x)+o.y*Math.abs(po.y)+o.z*Math.abs(po.z),l=e.dot(po),c=t.dot(po),d=n.dot(po);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const vn=new L,fa=new Ue;let Yf=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),o=nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),o=nn(o,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class Xc extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jc extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Zf=new fo,bs=new L,qr=new L;class Lo{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let o=0;for(let s=0,a=e.length;s<a;s++)o=Math.max(o,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(bs,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(qr)),this.expandByPoint(bs.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $f=0;const ri=new Vt,Yr=new sn,Wo=new L,ei=new fo,Ts=new fo,bn=new L;class Bt extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mf(e)?jc:Xc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,s=e.length;o<s;o++){const a=e[o];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const s=e[o];t.setXYZ(o,s.x,s.y,s.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];Ts.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(ei.min,Ts.min),ei.expandByPoint(bn),bn.addVectors(ei.max,Ts.max),ei.expandByPoint(bn)):(ei.expandByPoint(Ts.min),ei.expandByPoint(Ts.max))}ei.getCenter(n);let o=0;for(let s=0,a=e.count;s<a;s++)bn.fromBufferAttribute(e,s),o=Math.max(o,n.distanceToSquared(bn));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)bn.fromBufferAttribute(r,c),l&&(Wo.fromBufferAttribute(e,c),bn.add(Wo)),o=Math.max(o,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let _=0;_<n.count;_++)r[_]=new L,l[_]=new L;const c=new L,d=new L,h=new L,f=new Ue,p=new Ue,v=new Ue,S=new L,m=new L;function u(_,b,x){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,x),d.sub(c),h.sub(c),p.sub(f),v.sub(f);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(R),r[_].add(S),r[b].add(S),r[x].add(S),l[_].add(m),l[b].add(m),l[x].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,b=g.length;_<b;++_){const x=g[_],R=x.start,U=x.count;for(let O=R,N=R+U;O<N;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new L,w=new L,A=new L,y=new L;function C(_){A.fromBufferAttribute(o,_),y.copy(A);const b=r[_];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),w.crossVectors(y,b);const R=w.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,R)}for(let _=0,b=g.length;_<b;++_){const x=g[_],R=x.start,U=x.count;for(let O=R,N=R+U;O<N;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const o=new L,s=new L,a=new L,r=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(o,s),d.cross(h),r.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),r.add(d),l.add(d),c.add(d),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)o.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),h.subVectors(o,s),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(r,l){const c=r.array,d=r.itemSize,h=r.normalized,f=new c.constructor(l.length*d);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){r.isInterleavedBufferAttribute?p=l[S]*r.data.stride+r.offset:p=l[S]*d;for(let u=0;u<d;u++)f[v++]=c[p++]}return new rn(f,d,h)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,o=this.attributes;for(const r in o){const l=o[r],c=e(l,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const o={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(o[l]=d,s=!0)}s&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const c in o){const d=o[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let o=0,s=this.stride;o<s;o++)this.array[e+o]=t.array[n+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new L;class ar{constructor(e,t,n,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),o=nn(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this}setXYZW(e,t,n,o,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),o=nn(o,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=o,this.data.array[e+3]=s,this}clone(e){if(e===void 0){or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const o=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Kf=0;class $i extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=To,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Tl,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Tl&&(n.blendDst=this.blendDst),this.blendEquation!==Mo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=o(e.textures),a=o(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let s=0;s!==o;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qc extends $i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xo;const As=new L,jo=new L,qo=new L,Yo=new Ue,Cs=new Ue,Yu=new Vt,ha=new L,Es=new L,pa=new L,R0=new Ue,Zr=new Ue,P0=new Ue;class Zu extends sn{constructor(e=new qc){if(super(),this.isSprite=!0,this.type="Sprite",Xo===void 0){Xo=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jf(t,5);Xo.setIndex([0,1,2,0,2,3]),Xo.setAttribute("position",new ar(n,3,0,!1)),Xo.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=Xo,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jo.setFromMatrixScale(this.matrixWorld),Yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jo.multiplyScalar(-qo.z);const n=this.material.rotation;let o,s;n!==0&&(s=Math.cos(n),o=Math.sin(n));const a=this.center;ma(ha.set(-.5,-.5,0),qo,a,jo,o,s),ma(Es.set(.5,-.5,0),qo,a,jo,o,s),ma(pa.set(.5,.5,0),qo,a,jo,o,s),R0.set(0,0),Zr.set(1,0),P0.set(1,1);let r=e.ray.intersectTriangle(ha,Es,pa,!1,As);if(r===null&&(ma(Es.set(-.5,.5,0),qo,a,jo,o,s),Zr.set(0,1),r=e.ray.intersectTriangle(ha,pa,Es,!1,As),r===null))return;const l=e.ray.origin.distanceTo(As);l<e.near||l>e.far||t.push({distance:l,point:As.clone(),uv:ci.getInterpolation(As,ha,Es,pa,R0,Zr,P0,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ma(i,e,t,n,o,s){Yo.subVectors(i,t).addScalar(.5).multiply(n),o!==void 0?(Cs.x=s*Yo.x-o*Yo.y,Cs.y=o*Yo.x+s*Yo.y):Cs.copy(Yo),i.copy(e),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(Yu)}const ki=new L,$r=new L,ga=new L,no=new L,Jr=new L,xa=new L,Kr=new L;class vr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){$r.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),no.copy(this.origin).sub($r);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ga),r=no.dot(this.direction),l=-no.dot(ga),c=no.lengthSq(),d=Math.abs(1-a*a);let h,f,p,v;if(d>0)if(h=a*l-r,f=a*r-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const S=1/d;h*=S,f*=S,p=h*(h+a*f+2*r)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+r)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+r)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+r)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+r)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+r)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),o&&o.copy($r).addScaledVector(ga,f),p}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const n=ki.dot(this.direction),o=ki.dot(ki)-n*n,s=e.radius*e.radius;if(o>s)return null;const a=Math.sqrt(s-o),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,s,a,r,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,o=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,o=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||s>o||((s>n||isNaN(n))&&(n=s),(a<o||isNaN(o))&&(o=a),h>=0?(r=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(r=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||r>o)||((r>n||n!==n)&&(n=r),(l<o||o!==o)&&(o=l),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,o,s){Jr.subVectors(t,e),xa.subVectors(n,e),Kr.crossVectors(Jr,xa);let a=this.direction.dot(Kr),r;if(a>0){if(o)return null;r=1}else if(a<0)r=-1,a=-a;else return null;no.subVectors(this.origin,e);const l=r*this.direction.dot(xa.crossVectors(no,xa));if(l<0)return null;const c=r*this.direction.dot(Jr.cross(no));if(c<0||l+c>a)return null;const d=-r*no.dot(Kr);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const I0=new Vt,mo=new vr,va=new Lo,L0=new L,_a=new L,Ma=new L,wa=new L,Qr=new L,Sa=new L,D0=new L,ya=new L;class I extends sn{constructor(e=new Bt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const r=this.morphTargetInfluences;if(s&&r){Sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=r[l],h=s[l];d!==0&&(Qr.fromBufferAttribute(h,e),a?Sa.addScaledVector(Qr,d):Sa.addScaledVector(Qr.sub(t),d))}t.add(Sa)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),mo.copy(e.ray).recast(e.near),!(va.containsPoint(mo.origin)===!1&&(mo.intersectSphere(va,L0)===null||mo.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(I0.copy(s).invert(),mo.copy(e.ray).applyMatrix4(I0),!(n.boundingBox!==null&&mo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mo)))}_computeIntersections(e,t,n){let o;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(r!==null)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const m=f[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let w=g,A=M;w<A;w+=3){const y=r.getX(w),C=r.getX(w+1),_=r.getX(w+2);o=ba(this,u,e,n,c,d,h,y,C,_),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const v=Math.max(0,p.start),S=Math.min(r.count,p.start+p.count);for(let m=v,u=S;m<u;m+=3){const g=r.getX(m),M=r.getX(m+1),w=r.getX(m+2);o=ba(this,a,e,n,c,d,h,g,M,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const m=f[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=g,A=M;w<A;w+=3){const y=w,C=w+1,_=w+2;o=ba(this,u,e,n,c,d,h,y,C,_),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,u=S;m<u;m+=3){const g=m,M=m+1,w=m+2;o=ba(this,a,e,n,c,d,h,g,M,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Qf(i,e,t,n,o,s,a,r){let l;if(e.side===Rn?l=n.intersectTriangle(a,s,o,!0,r):l=n.intersectTriangle(o,s,a,e.side===qi,r),l===null)return null;ya.copy(r),ya.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:i}}function ba(i,e,t,n,o,s,a,r,l,c){i.getVertexPosition(r,_a),i.getVertexPosition(l,Ma),i.getVertexPosition(c,wa);const d=Qf(i,e,t,n,_a,Ma,wa,D0);if(d){const h=new L;ci.getBarycoord(D0,_a,Ma,wa,h),o&&(d.uv=ci.getInterpolatedAttribute(o,r,l,c,h,new Ue)),s&&(d.uv1=ci.getInterpolatedAttribute(s,r,l,c,h,new Ue)),a&&(d.normal=ci.getInterpolatedAttribute(a,r,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new L,materialIndex:0};ci.getNormal(_a,Ma,wa,f.normal),d.face=f,d.barycoord=h}return d}class Yc extends Un{constructor(e=null,t=1,n=1,o,s,a,r,l,c=wn,d=wn,h,f){super(null,a,r,l,c,d,o,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U0 extends rn{constructor(e,t,n,o=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zo=new Vt,N0=new Vt,Ta=[],F0=new fo,eh=new Vt,Rs=new I,Ps=new Lo;class Hi extends I{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new U0(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<n;o++)this.setMatrixAt(o,eh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zo),F0.copy(e.boundingBox).applyMatrix4(Zo),this.boundingBox.union(F0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zo),Ps.copy(e.boundingSphere).applyMatrix4(Zo),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,o=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let r=0;r<n.length;r++)n[r]=o[a+r]}raycast(e,t){const n=this.matrixWorld,o=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,Zo),N0.multiplyMatrices(n,Zo),Rs.matrixWorld=N0,Rs.raycast(e,Ta);for(let a=0,r=Ta.length;a<r;a++){const l=Ta[a];l.instanceId=s,l.object=this,t.push(l)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new U0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,o=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(o*this.count),o,this.count,Nc,ni));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const r=this.geometry.morphTargetsRelative?1:1-a,l=o*e;s[l]=r,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const el=new L,th=new L,nh=new Rt;class _o{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=el.subVectors(n,t).cross(th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(el),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nh.getNormalMatrix(e),o=this.coplanarPoint(el).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const go=new Lo,ih=new Ue(.5,.5),Aa=new L;class Zc{constructor(e=new _o,t=new _o,n=new _o,o=new _o,s=new _o,a=new _o){this.planes=[e,t,n,o,s,a]}set(e,t,n,o,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(o),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri,n=!1){const o=this.planes,s=e.elements,a=s[0],r=s[1],l=s[2],c=s[3],d=s[4],h=s[5],f=s[6],p=s[7],v=s[8],S=s[9],m=s[10],u=s[11],g=s[12],M=s[13],w=s[14],A=s[15];if(o[0].setComponents(c-a,p-d,u-v,A-g).normalize(),o[1].setComponents(c+a,p+d,u+v,A+g).normalize(),o[2].setComponents(c+r,p+h,u+S,A+M).normalize(),o[3].setComponents(c-r,p-h,u-S,A-M).normalize(),n)o[4].setComponents(l,f,m,w).normalize(),o[5].setComponents(c-l,p-f,u-m,A-w).normalize();else if(o[4].setComponents(c-l,p-f,u-m,A-w).normalize(),t===Ri)o[5].setComponents(c+l,p+f,u+m,A+w).normalize();else if(t===Zs)o[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),go.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),go.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(go)}intersectsSprite(e){go.center.set(0,0,0);const t=ih.distanceTo(e.center);return go.radius=.7071067811865476+t,go.applyMatrix4(e.matrixWorld),this.intersectsSphere(go)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Aa.x=o.normal.x>0?e.max.x:e.min.x,Aa.y=o.normal.y>0?e.max.y:e.min.y,Aa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Os extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rr=new L,lr=new L,O0=new Vt,Is=new vr,Ca=new Lo,tl=new L,B0=new L;class Ea extends sn{constructor(e=new Bt,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,s=t.count;o<s;o++)rr.fromBufferAttribute(t,o-1),lr.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=rr.distanceTo(lr);e.setAttribute("lineDistance",new vt(n,1))}else St("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(o),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;O0.copy(o).invert(),Is.copy(e.ray).applyMatrix4(O0);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let S=p,m=v-1;S<m;S+=c){const u=d.getX(S),g=d.getX(S+1),M=Ra(this,e,Is,l,u,g,S);M&&t.push(M)}if(this.isLineLoop){const S=d.getX(v-1),m=d.getX(p),u=Ra(this,e,Is,l,S,m,v-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let S=p,m=v-1;S<m;S+=c){const u=Ra(this,e,Is,l,S,S+1,S);u&&t.push(u)}if(this.isLineLoop){const S=Ra(this,e,Is,l,v-1,p,v-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Ra(i,e,t,n,o,s,a){const r=i.geometry.attributes.position;if(rr.fromBufferAttribute(r,o),lr.fromBufferAttribute(r,s),t.distanceSqToSegment(rr,lr,tl,B0)>n)return;tl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(tl);if(!(c<e.near||c>e.far))return{distance:c,point:B0.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class oh extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z0=new Vt,hc=new vr,Pa=new Lo,Ia=new L;class $u extends sn{constructor(e=new Bt,t=new oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(o),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;z0.copy(o).invert(),hc.copy(e.ray).applyMatrix4(z0);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,S=p;v<S;v++){const m=c.getX(v);Ia.fromBufferAttribute(h,m),k0(Ia,m,l,o,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,S=p;v<S;v++)Ia.fromBufferAttribute(h,v),k0(Ia,v,l,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function k0(i,e,t,n,o,s,a){const r=hc.distanceSqToPoint(i);if(r<t){const l=new L;hc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=o.ray.origin.distanceTo(l);if(c<o.near||c>o.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ju extends Un{constructor(e=[],t=Co,n,o,s,a,r,l,c,d){super(e,t,n,o,s,a,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zt extends Un{constructor(e,t,n,o,s,a,r,l,c){super(e,t,n,o,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eo extends Un{constructor(e,t,n=Li,o,s,a,r=wn,l=wn,c,d=Yi,h=1){if(d!==Yi&&d!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,o,s,a,r,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sh extends Eo{constructor(e,t=Li,n=Co,o,s,a=wn,r=wn,l,c=Yi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,o,s,a,r,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ku extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Re extends Bt{constructor(e=1,t=1,n=1,o=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:s,depthSegments:a};const r=this;o=Math.floor(o),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,o,a,2),v("x","z","y",1,-1,e,n,-t,o,a,3),v("x","y","z",1,-1,e,t,n,o,s,4),v("x","y","z",-1,-1,e,t,-n,o,s,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(h,2));function v(S,m,u,g,M,w,A,y,C,_,b){const x=w/C,R=A/_,U=w/2,O=A/2,N=y/2,k=C+1,z=_+1;let K=0,he=0;const J=new L;for(let ie=0;ie<z;ie++){const F=ie*R-O;for(let H=0;H<k;H++){const Q=H*x-U;J[S]=Q*g,J[m]=F*M,J[u]=N,c.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[u]=y>0?1:-1,d.push(J.x,J.y,J.z),h.push(H/C),h.push(1-ie/_),K+=1}}for(let ie=0;ie<_;ie++)for(let F=0;F<C;F++){const H=f+F+k*ie,Q=f+F+k*(ie+1),Y=f+(F+1)+k*(ie+1),ge=f+(F+1)+k*ie;l.push(H,Q,ge),l.push(Q,Y,ge),he+=6}r.addGroup(p,he,b),p+=he,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Re(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ro extends Bt{constructor(e=1,t=1,n=4,o=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:o,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),o=Math.max(3,Math.floor(o)),s=Math.max(1,Math.floor(s));const a=[],r=[],l=[],c=[],d=t/2,h=Math.PI/2*e,f=t,p=2*h+f,v=n*2+s,S=o+1,m=new L,u=new L;for(let g=0;g<=v;g++){let M=0,w=0,A=0,y=0;if(g<=n){const b=g/n,x=b*Math.PI/2;w=-d-e*Math.cos(x),A=e*Math.sin(x),y=-e*Math.cos(x),M=b*h}else if(g<=n+s){const b=(g-n)/s;w=-d+b*t,A=e,y=0,M=h+b*f}else{const b=(g-n-s)/n,x=b*Math.PI/2;w=d+e*Math.sin(x),A=e*Math.cos(x),y=e*Math.sin(x),M=h+f+b*h}const C=Math.max(0,Math.min(1,M/p));let _=0;g===0?_=.5/o:g===v&&(_=-.5/o);for(let b=0;b<=o;b++){const x=b/o,R=x*Math.PI*2,U=Math.sin(R),O=Math.cos(R);u.x=-A*O,u.y=w,u.z=A*U,r.push(u.x,u.y,u.z),m.set(-A*O,y,A*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+_,C)}if(g>0){const b=(g-1)*S;for(let x=0;x<o;x++){const R=b+x,U=b+x+1,O=g*S+x,N=g*S+x+1;a.push(R,U,O),a.push(U,N,O)}}}this.setIndex(a),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Zi extends Bt{constructor(e=1,t=32,n=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:o},t=Math.max(3,t);const s=[],a=[],r=[],l=[],c=new L,d=new Ue;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*o;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),r.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends Bt{constructor(e=1,t=1,n=1,o=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const c=this;o=Math.floor(o),s=Math.floor(s);const d=[],h=[],f=[],p=[];let v=0;const S=[],m=n/2;let u=0;g(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function g(){const w=new L,A=new L;let y=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const b=[],x=_/s,R=x*(t-e)+e;for(let U=0;U<=o;U++){const O=U/o,N=O*l+r,k=Math.sin(N),z=Math.cos(N);A.x=R*k,A.y=-x*n+m,A.z=R*z,h.push(A.x,A.y,A.z),w.set(k,C,z).normalize(),f.push(w.x,w.y,w.z),p.push(O,1-x),b.push(v++)}S.push(b)}for(let _=0;_<o;_++)for(let b=0;b<s;b++){const x=S[b][_],R=S[b+1][_],U=S[b+1][_+1],O=S[b][_+1];(e>0||b!==0)&&(d.push(x,R,O),y+=3),(t>0||b!==s-1)&&(d.push(R,U,O),y+=3)}c.addGroup(u,y,0),u+=y}function M(w){const A=v,y=new Ue,C=new L;let _=0;const b=w===!0?e:t,x=w===!0?1:-1;for(let U=1;U<=o;U++)h.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),v++;const R=v;for(let U=0;U<=o;U++){const N=U/o*l+r,k=Math.cos(N),z=Math.sin(N);C.x=b*z,C.y=m*x,C.z=b*k,h.push(C.x,C.y,C.z),f.push(0,x,0),y.x=k*.5+.5,y.y=z*.5*x+.5,p.push(y.x,y.y),v++}for(let U=0;U<o;U++){const O=A+U,N=R+U;w===!0?d.push(N,N+1,O):d.push(N+1,N,O),_+=3}c.addGroup(u,_,w===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn extends st{constructor(e=1,t=1,n=32,o=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,n,o,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends Bt{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const s=[],a=[];r(o),c(n),d(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(a,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function r(g){const M=new L,w=new L,A=new L;for(let y=0;y<t.length;y+=3)p(t[y+0],M),p(t[y+1],w),p(t[y+2],A),l(M,w,A,g)}function l(g,M,w,A){const y=A+1,C=[];for(let _=0;_<=y;_++){C[_]=[];const b=g.clone().lerp(w,_/y),x=M.clone().lerp(w,_/y),R=y-_;for(let U=0;U<=R;U++)U===0&&_===y?C[_][U]=b:C[_][U]=b.clone().lerp(x,U/R)}for(let _=0;_<y;_++)for(let b=0;b<2*(y-_)-1;b++){const x=Math.floor(b/2);b%2===0?(f(C[_][x+1]),f(C[_+1][x]),f(C[_][x])):(f(C[_][x+1]),f(C[_+1][x+1]),f(C[_+1][x]))}}function c(g){const M=new L;for(let w=0;w<s.length;w+=3)M.x=s[w+0],M.y=s[w+1],M.z=s[w+2],M.normalize().multiplyScalar(g),s[w+0]=M.x,s[w+1]=M.y,s[w+2]=M.z}function d(){const g=new L;for(let M=0;M<s.length;M+=3){g.x=s[M+0],g.y=s[M+1],g.z=s[M+2];const w=m(g)/2/Math.PI+.5,A=u(g)/Math.PI+.5;a.push(w,1-A)}v(),h()}function h(){for(let g=0;g<a.length;g+=6){const M=a[g+0],w=a[g+2],A=a[g+4],y=Math.max(M,w,A),C=Math.min(M,w,A);y>.9&&C<.1&&(M<.2&&(a[g+0]+=1),w<.2&&(a[g+2]+=1),A<.2&&(a[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,M){const w=g*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function v(){const g=new L,M=new L,w=new L,A=new L,y=new Ue,C=new Ue,_=new Ue;for(let b=0,x=0;b<s.length;b+=9,x+=6){g.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),w.set(s[b+6],s[b+7],s[b+8]),y.set(a[x+0],a[x+1]),C.set(a[x+2],a[x+3]),_.set(a[x+4],a[x+5]),A.copy(g).add(M).add(w).divideScalar(3);const R=m(A);S(y,x+0,g,R),S(C,x+2,M,R),S(_,x+4,w,R)}}function S(g,M,w,A){A<0&&g.x===1&&(a[M]=g.x-1),w.x===0&&w.z===0&&(a[M]=A/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.vertices,e.indices,e.radius,e.detail)}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){St("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,o=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(o),t.push(s),o=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let o=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let r=0,l=s-1,c;for(;r<=l;)if(o=Math.floor(r+(l-r)/2),c=n[o]-a,c<0)r=o+1;else if(c>0)l=o-1;else{l=o;break}if(o=l,n[o]===a)return o/(s-1);const d=n[o],f=n[o+1]-d,p=(a-d)/f;return(o+p)/(s-1)}getTangent(e,t){let o=e-1e-4,s=e+1e-4;o<0&&(o=0),s>1&&(s=1);const a=this.getPoint(o),r=this.getPoint(s),l=t||(a.isVector2?new Ue:new L);return l.copy(r).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,o=[],s=[],a=[],r=new L,l=new Vt;for(let p=0;p<=e;p++){const v=p/e;o[p]=this.getTangentAt(v,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const d=Math.abs(o[0].x),h=Math.abs(o[0].y),f=Math.abs(o[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),r.crossVectors(o[0],n).normalize(),s[0].crossVectors(o[0],r),a[0].crossVectors(o[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),r.crossVectors(o[p-1],o[p]),r.length()>Number.EPSILON){r.normalize();const v=Math.acos(Nt(o[p-1].dot(o[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(r,v))}a[p].crossVectors(o[p],s[p])}if(t===!0){let p=Math.acos(Nt(s[0].dot(s[e]),-1,1));p/=e,o[0].dot(r.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(o[v],p*v)),a[v].crossVectors(o[v],s[v])}return{tangents:o,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends Di{constructor(e=0,t=0,n=1,o=1,s=0,a=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new Ue){const n=t,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(a?s=0:s=o),this.aClockwise===!0&&!a&&(s===o?s=-o:s=s-o);const r=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*h+this.aX,c=f*h+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ah extends Jc{constructor(e,t,n,o,s,a){super(e,t,n,n,o,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let i=0,e=0,t=0,n=0;function o(s,a,r,l){i=s,e=r,t=-3*s+3*a-2*r-l,n=2*s-2*a+r+l}return{initCatmullRom:function(s,a,r,l,c){o(a,r,c*(r-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,r,l,c,d,h){let f=(a-s)/c-(r-s)/(c+d)+(r-a)/d,p=(r-a)/d-(l-a)/(d+h)+(l-r)/h;f*=d,p*=d,o(a,r,f,p)},calc:function(s){const a=s*s,r=a*s;return i+e*s+t*a+n*r}}}const La=new L,nl=new Kc,il=new Kc,ol=new Kc;class co extends Di{constructor(e=[],t=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=o}getPoint(e,t=new L){const n=t,o=this.points,s=o.length,a=(s-(this.closed?0:1))*e;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,d;this.closed||r>0?c=o[(r-1)%s]:(La.subVectors(o[0],o[1]).add(o[0]),c=La);const h=o[r%s],f=o[(r+1)%s];if(this.closed||r+2<s?d=o[(r+2)%s]:(La.subVectors(o[s-1],o[s-2]).add(o[s-1]),d=La),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),S=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);S<1e-4&&(S=1),v<1e-4&&(v=S),m<1e-4&&(m=S),nl.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,v,S,m),il.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,v,S,m),ol.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,v,S,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),il.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),ol.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return n.set(nl.calc(l),il.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new L().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function V0(i,e,t,n,o){const s=(n-e)*.5,a=(o-t)*.5,r=i*i,l=i*r;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*r+s*i+t}function rh(i,e){const t=1-i;return t*t*e}function lh(i,e){return 2*(1-i)*i*e}function ch(i,e){return i*i*e}function Ws(i,e,t,n){return rh(i,e)+lh(i,t)+ch(i,n)}function uh(i,e){const t=1-i;return t*t*t*e}function dh(i,e){const t=1-i;return 3*t*t*i*e}function fh(i,e){return 3*(1-i)*i*i*e}function hh(i,e){return i*i*i*e}function Xs(i,e,t,n,o){return uh(i,e)+dh(i,t)+fh(i,n)+hh(i,o)}class Qu extends Di{constructor(e=new Ue,t=new Ue,n=new Ue,o=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new Ue){const n=t,o=this.v0,s=this.v1,a=this.v2,r=this.v3;return n.set(Xs(e,o.x,s.x,a.x,r.x),Xs(e,o.y,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ph extends Di{constructor(e=new L,t=new L,n=new L,o=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new L){const n=t,o=this.v0,s=this.v1,a=this.v2,r=this.v3;return n.set(Xs(e,o.x,s.x,a.x,r.x),Xs(e,o.y,s.y,a.y,r.y),Xs(e,o.z,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends Di{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends Di{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends Di{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){const n=t,o=this.v0,s=this.v1,a=this.v2;return n.set(Ws(e,o.x,s.x,a.x),Ws(e,o.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends Di{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,o=this.v0,s=this.v1,a=this.v2;return n.set(Ws(e,o.x,s.x,a.x),Ws(e,o.y,s.y,a.y),Ws(e,o.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const n=t,o=this.points,s=(o.length-1)*e,a=Math.floor(s),r=s-a,l=o[a===0?a:a-1],c=o[a],d=o[a>o.length-2?o.length-1:a+1],h=o[a>o.length-3?o.length-1:a+2];return n.set(V0(r,l.x,c.x,d.x,h.x),V0(r,l.y,c.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new Ue().fromArray(o))}return this}}var cr=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:co,CubicBezierCurve:Qu,CubicBezierCurve3:ph,EllipseCurve:Jc,LineCurve:ed,LineCurve3:mh,QuadraticBezierCurve:td,QuadraticBezierCurve3:nd,SplineCurve:id});class gh extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=n){const a=o[s]-n,r=this.curves[s],l=r.getLength(),c=l===0?0:1-a/l;return r.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,o=this.curves.length;n<o;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let o=0,s=this.curves;o<s.length;o++){const a=s[o],r=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(r);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const o=e.curves[t];this.curves.push(new cr[o.type]().fromJSON(o))}return this}}class G0 extends gh{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ed(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,o){const s=new td(this.currentPoint.clone(),new Ue(e,t),new Ue(n,o));return this.curves.push(s),this.currentPoint.set(n,o),this}bezierCurveTo(e,t,n,o,s,a){const r=new Qu(this.currentPoint.clone(),new Ue(e,t),new Ue(n,o),new Ue(s,a));return this.curves.push(r),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new id(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,o,s,a){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,n,o,s,a),this}absarc(e,t,n,o,s,a){return this.absellipse(e,t,n,n,o,s,a),this}ellipse(e,t,n,o,s,a,r,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,o,s,a,r,l),this}absellipse(e,t,n,o,s,a,r,l){const c=new Jc(e,t,n,o,s,a,r,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _s extends G0{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,o=this.holes.length;n<o;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const o=e.holes[t];this.holes.push(new G0().fromJSON(o))}return this}}function xh(i,e,t=2){const n=e&&e.length,o=n?e[0]*t:i.length;let s=od(i,0,o,t,!0);const a=[];if(!s||s.next===s.prev)return a;let r,l,c;if(n&&(s=Sh(i,e,s,t)),i.length>80*t){r=i[0],l=i[1];let d=r,h=l;for(let f=t;f<o;f+=t){const p=i[f],v=i[f+1];p<r&&(r=p),v<l&&(l=v),p>d&&(d=p),v>h&&(h=v)}c=Math.max(d-r,h-l),c=c!==0?32767/c:0}return Js(s,a,t,r,l,c,0),a}function od(i,e,t,n,o){let s;if(o===Dh(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=H0(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=H0(a/n|0,i[a],i[a+1],s);return s&&fs(s,s.next)&&(Qs(s),s=s.next),s}function Po(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fs(t,t.next)||pn(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(i,e,t,n,o,s,a){if(!i)return;!a&&s&&Ch(i,n,o,s);let r=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?_h(i,n,o,s):vh(i)){e.push(l.i,i.i,c.i),Qs(i),i=c.next,r=c.next;continue}if(i=c,i===r){a?a===1?(i=Mh(Po(i),e),Js(i,e,t,n,o,s,2)):a===2&&wh(i,e,t,n,o,s):Js(Po(i),e,t,n,o,s,1);break}}}function vh(i){const e=i.prev,t=i,n=i.next;if(pn(e,t,n)>=0)return!1;const o=e.x,s=t.x,a=n.x,r=e.y,l=t.y,c=n.y,d=Math.min(o,s,a),h=Math.min(r,l,c),f=Math.max(o,s,a),p=Math.max(r,l,c);let v=n.next;for(;v!==e;){if(v.x>=d&&v.x<=f&&v.y>=h&&v.y<=p&&Bs(o,r,s,l,a,c,v.x,v.y)&&pn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function _h(i,e,t,n){const o=i.prev,s=i,a=i.next;if(pn(o,s,a)>=0)return!1;const r=o.x,l=s.x,c=a.x,d=o.y,h=s.y,f=a.y,p=Math.min(r,l,c),v=Math.min(d,h,f),S=Math.max(r,l,c),m=Math.max(d,h,f),u=pc(p,v,e,t,n),g=pc(S,m,e,t,n);let M=i.prevZ,w=i.nextZ;for(;M&&M.z>=u&&w&&w.z<=g;){if(M.x>=p&&M.x<=S&&M.y>=v&&M.y<=m&&M!==o&&M!==a&&Bs(r,d,l,h,c,f,M.x,M.y)&&pn(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=p&&w.x<=S&&w.y>=v&&w.y<=m&&w!==o&&w!==a&&Bs(r,d,l,h,c,f,w.x,w.y)&&pn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=u;){if(M.x>=p&&M.x<=S&&M.y>=v&&M.y<=m&&M!==o&&M!==a&&Bs(r,d,l,h,c,f,M.x,M.y)&&pn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=g;){if(w.x>=p&&w.x<=S&&w.y>=v&&w.y<=m&&w!==o&&w!==a&&Bs(r,d,l,h,c,f,w.x,w.y)&&pn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Mh(i,e){let t=i;do{const n=t.prev,o=t.next.next;!fs(n,o)&&ad(n,t,t.next,o)&&Ks(n,o)&&Ks(o,n)&&(e.push(n.i,t.i,o.i),Qs(t),Qs(t.next),t=i=o),t=t.next}while(t!==i);return Po(t)}function wh(i,e,t,n,o,s){let a=i;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&Ph(a,r)){let l=rd(a,r);a=Po(a,a.next),l=Po(l,l.next),Js(a,e,t,n,o,s,0),Js(l,e,t,n,o,s,0);return}r=r.next}a=a.next}while(a!==i)}function Sh(i,e,t,n){const o=[];for(let s=0,a=e.length;s<a;s++){const r=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=od(i,r,l,n,!1);c===c.next&&(c.steiner=!0),o.push(Rh(c))}o.sort(yh);for(let s=0;s<o.length;s++)t=bh(o[s],t);return t}function yh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=n-o}return t}function bh(i,e){const t=Th(i,e);if(!t)return e;const n=rd(t,i);return Po(n,n.next),Po(t,t.next)}function Th(i,e){let t=e;const n=i.x,o=i.y;let s=-1/0,a;if(fs(i,t))return t;do{if(fs(i,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const r=a,l=a.x,c=a.y;let d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sd(o<c?n:s,o,l,c,o<c?s:n,o,t.x,t.y)){const h=Math.abs(o-t.y)/(n-t.x);Ks(t,i)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&Ah(a,t)))&&(a=t,d=h)}t=t.next}while(t!==r);return a}function Ah(i,e){return pn(i.prev,i,e.prev)<0&&pn(e.next,i,i.next)<0}function Ch(i,e,t,n){let o=i;do o.z===0&&(o.z=pc(o.x,o.y,e,t,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==i);o.prevZ.nextZ=null,o.prevZ=null,Eh(o)}function Eh(i){let e,t=1;do{let n=i,o;i=null;let s=null;for(e=0;n;){e++;let a=n,r=0;for(let c=0;c<t&&(r++,a=a.nextZ,!!a);c++);let l=t;for(;r>0||l>0&&a;)r!==0&&(l===0||!a||n.z<=a.z)?(o=n,n=n.nextZ,r--):(o=a,a=a.nextZ,l--),s?s.nextZ=o:i=o,o.prevZ=s,s=o;n=a}s.nextZ=null,t*=2}while(e>1);return i}function pc(i,e,t,n,o){return i=(i-t)*o|0,e=(e-n)*o|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Rh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sd(i,e,t,n,o,s,a,r){return(o-a)*(e-r)>=(i-a)*(s-r)&&(i-a)*(n-r)>=(t-a)*(e-r)&&(t-a)*(s-r)>=(o-a)*(n-r)}function Bs(i,e,t,n,o,s,a,r){return!(i===a&&e===r)&&sd(i,e,t,n,o,s,a,r)}function Ph(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ih(i,e)&&(Ks(i,e)&&Ks(e,i)&&Lh(i,e)&&(pn(i.prev,i,e.prev)||pn(i,e.prev,e))||fs(i,e)&&pn(i.prev,i,i.next)>0&&pn(e.prev,e,e.next)>0)}function pn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fs(i,e){return i.x===e.x&&i.y===e.y}function ad(i,e,t,n){const o=Ua(pn(i,e,t)),s=Ua(pn(i,e,n)),a=Ua(pn(t,n,i)),r=Ua(pn(t,n,e));return!!(o!==s&&a!==r||o===0&&Da(i,t,e)||s===0&&Da(i,n,e)||a===0&&Da(t,i,n)||r===0&&Da(t,e,n))}function Da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ua(i){return i>0?1:i<0?-1:0}function Ih(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return pn(i.prev,i,i.next)<0?pn(i,e,i.next)>=0&&pn(i,i.prev,e)>=0:pn(i,e,i.prev)<0||pn(i,i.next,e)<0}function Lh(i,e){let t=i,n=!1;const o=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&o<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rd(i,e){const t=mc(i.i,i.x,i.y),n=mc(e.i,e.x,e.y),o=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=o,o.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function H0(i,e,t,n){const o=mc(i,e,t);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function Qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dh(i,e,t,n){let o=0;for(let s=e,a=t-n;s<t;s+=n)o+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return o}class Uh{static triangulate(e,t,n=2){return xh(e,t,n)}}class Xi{static area(e){const t=e.length;let n=0;for(let o=t-1,s=0;s<t;o=s++)n+=e[o].x*e[s].y-e[s].x*e[o].y;return n*.5}static isClockWise(e){return Xi.area(e)<0}static triangulateShape(e,t){const n=[],o=[],s=[];W0(e),X0(n,e);let a=e.length;t.forEach(W0);for(let l=0;l<t.length;l++)o.push(a),a+=t[l].length,X0(n,t[l]);const r=Uh.triangulate(n,o);for(let l=0;l<r.length;l+=3)s.push(r.slice(l,l+3));return s}}function W0(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function X0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class _r extends Bt{constructor(e=new _s([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,o=[],s=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];a(c)}this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(s,2)),this.computeVertexNormals();function a(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Nh;let M,w=!1,A,y,C,_;if(u){M=u.getSpacedPoints(d),w=!0,f=!1;const X=u.isCatmullRomCurve3?u.closed:!1;A=u.computeFrenetFrames(d,X),y=new L,C=new L,_=new L}f||(m=0,p=0,v=0,S=0);const b=r.extractPoints(c);let x=b.shape;const R=b.holes;if(!Xi.isClockWise(x)){x=x.reverse();for(let X=0,j=R.length;X<j;X++){const G=R[X];Xi.isClockWise(G)&&(R[X]=G.reverse())}}function O(X){const G=10000000000000001e-36;let B=X[0];for(let E=1;E<=X.length;E++){const ae=E%X.length,xe=X[ae],Me=xe.x-B.x,oe=xe.y-B.y,P=Me*Me+oe*oe,T=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(B.x),Math.abs(B.y)),W=G*T*T;if(P<=W){X.splice(ae,1),E--;continue}B=xe}}O(x),R.forEach(O);const N=R.length,k=x;for(let X=0;X<N;X++){const j=R[X];x=x.concat(j)}function z(X,j,G){return j||Xt("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(j,G)}const K=x.length;function he(X,j,G){let B,E,ae;const xe=X.x-j.x,Me=X.y-j.y,oe=G.x-X.x,P=G.y-X.y,T=xe*xe+Me*Me,W=xe*P-Me*oe;if(Math.abs(W)>Number.EPSILON){const ne=Math.sqrt(T),be=Math.sqrt(oe*oe+P*P),me=j.x-Me/ne,ke=j.y+xe/ne,Le=G.x-P/be,He=G.y+oe/be,Ze=((Le-me)*P-(He-ke)*oe)/(xe*P-Me*oe);B=me+xe*Ze-X.x,E=ke+Me*Ze-X.y;const Ne=B*B+E*E;if(Ne<=2)return new Ue(B,E);ae=Math.sqrt(Ne/2)}else{let ne=!1;xe>Number.EPSILON?oe>Number.EPSILON&&(ne=!0):xe<-Number.EPSILON?oe<-Number.EPSILON&&(ne=!0):Math.sign(Me)===Math.sign(P)&&(ne=!0),ne?(B=-Me,E=xe,ae=Math.sqrt(T)):(B=xe,E=Me,ae=Math.sqrt(T/2))}return new Ue(B/ae,E/ae)}const J=[];for(let X=0,j=k.length,G=j-1,B=X+1;X<j;X++,G++,B++)G===j&&(G=0),B===j&&(B=0),J[X]=he(k[X],k[G],k[B]);const ie=[];let F,H=J.concat();for(let X=0,j=N;X<j;X++){const G=R[X];F=[];for(let B=0,E=G.length,ae=E-1,xe=B+1;B<E;B++,ae++,xe++)ae===E&&(ae=0),xe===E&&(xe=0),F[B]=he(G[B],G[ae],G[xe]);ie.push(F),H=H.concat(F)}let Q;if(m===0)Q=Xi.triangulateShape(k,R);else{const X=[],j=[];for(let G=0;G<m;G++){const B=G/m,E=p*Math.cos(B*Math.PI/2),ae=v*Math.sin(B*Math.PI/2)+S;for(let xe=0,Me=k.length;xe<Me;xe++){const oe=z(k[xe],J[xe],ae);q(oe.x,oe.y,-E),B===0&&X.push(oe)}for(let xe=0,Me=N;xe<Me;xe++){const oe=R[xe];F=ie[xe];const P=[];for(let T=0,W=oe.length;T<W;T++){const ne=z(oe[T],F[T],ae);q(ne.x,ne.y,-E),B===0&&P.push(ne)}B===0&&j.push(P)}}Q=Xi.triangulateShape(X,j)}const Y=Q.length,ge=v+S;for(let X=0;X<K;X++){const j=f?z(x[X],H[X],ge):x[X];w?(C.copy(A.normals[0]).multiplyScalar(j.x),y.copy(A.binormals[0]).multiplyScalar(j.y),_.copy(M[0]).add(C).add(y),q(_.x,_.y,_.z)):q(j.x,j.y,0)}for(let X=1;X<=d;X++)for(let j=0;j<K;j++){const G=f?z(x[j],H[j],ge):x[j];w?(C.copy(A.normals[X]).multiplyScalar(G.x),y.copy(A.binormals[X]).multiplyScalar(G.y),_.copy(M[X]).add(C).add(y),q(_.x,_.y,_.z)):q(G.x,G.y,h/d*X)}for(let X=m-1;X>=0;X--){const j=X/m,G=p*Math.cos(j*Math.PI/2),B=v*Math.sin(j*Math.PI/2)+S;for(let E=0,ae=k.length;E<ae;E++){const xe=z(k[E],J[E],B);q(xe.x,xe.y,h+G)}for(let E=0,ae=R.length;E<ae;E++){const xe=R[E];F=ie[E];for(let Me=0,oe=xe.length;Me<oe;Me++){const P=z(xe[Me],F[Me],B);w?q(P.x,P.y+M[d-1].y,M[d-1].x+G):q(P.x,P.y,h+G)}}}V(),te();function V(){const X=o.length/3;if(f){let j=0,G=K*j;for(let B=0;B<Y;B++){const E=Q[B];pe(E[2]+G,E[1]+G,E[0]+G)}j=d+m*2,G=K*j;for(let B=0;B<Y;B++){const E=Q[B];pe(E[0]+G,E[1]+G,E[2]+G)}}else{for(let j=0;j<Y;j++){const G=Q[j];pe(G[2],G[1],G[0])}for(let j=0;j<Y;j++){const G=Q[j];pe(G[0]+K*d,G[1]+K*d,G[2]+K*d)}}n.addGroup(X,o.length/3-X,0)}function te(){const X=o.length/3;let j=0;$(k,j),j+=k.length;for(let G=0,B=R.length;G<B;G++){const E=R[G];$(E,j),j+=E.length}n.addGroup(X,o.length/3-X,1)}function $(X,j){let G=X.length;for(;--G>=0;){const B=G;let E=G-1;E<0&&(E=X.length-1);for(let ae=0,xe=d+m*2;ae<xe;ae++){const Me=K*ae,oe=K*(ae+1),P=j+B+Me,T=j+E+Me,W=j+E+oe,ne=j+B+oe;se(P,T,W,ne)}}}function q(X,j,G){l.push(X),l.push(j),l.push(G)}function pe(X,j,G){Pe(X),Pe(j),Pe(G);const B=o.length/3,E=g.generateTopUV(n,o,B-3,B-2,B-1);de(E[0]),de(E[1]),de(E[2])}function se(X,j,G,B){Pe(X),Pe(j),Pe(B),Pe(j),Pe(G),Pe(B);const E=o.length/3,ae=g.generateSideWallUV(n,o,E-6,E-3,E-2,E-1);de(ae[0]),de(ae[1]),de(ae[3]),de(ae[1]),de(ae[2]),de(ae[3])}function Pe(X){o.push(l[X*3+0]),o.push(l[X*3+1]),o.push(l[X*3+2])}function de(X){s.push(X.x),s.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fh(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const r=t[e.shapes[s]];n.push(r)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new cr[o.type]().fromJSON(o)),new _r(n,e.options)}}const Nh={generateTopUV:function(i,e,t,n,o){const s=e[t*3],a=e[t*3+1],r=e[n*3],l=e[n*3+1],c=e[o*3],d=e[o*3+1];return[new Ue(s,a),new Ue(r,l),new Ue(c,d)]},generateSideWallUV:function(i,e,t,n,o,s){const a=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],h=e[n*3+2],f=e[o*3],p=e[o*3+1],v=e[o*3+2],S=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(r-d)<Math.abs(a-c)?[new Ue(a,1-l),new Ue(c,1-h),new Ue(f,1-v),new Ue(S,1-u)]:[new Ue(r,1-l),new Ue(d,1-h),new Ue(p,1-v),new Ue(m,1-u)]}};function Fh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,o=i.length;n<o;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qc extends $c{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,o=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qc(e.radius,e.detail)}}class uo extends Bt{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:o},t=Math.floor(t),o=Nt(o,0,Math.PI*2);const s=[],a=[],r=[],l=[],c=[],d=1/t,h=new L,f=new Ue,p=new L,v=new L,S=new L;let m=0,u=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,S.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(S.x,S.y,S.z);break;default:m=e[g+1].x-e[g].x,u=e[g+1].y-e[g].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.x+=S.x,p.y+=S.y,p.z+=S.z,p.normalize(),l.push(p.x,p.y,p.z),S.copy(v)}for(let g=0;g<=t;g++){const M=n+g*d*o,w=Math.sin(M),A=Math.cos(M);for(let y=0;y<=e.length-1;y++){h.x=e[y].x*w,h.y=e[y].y,h.z=e[y].x*A,a.push(h.x,h.y,h.z),f.x=g/t,f.y=y/(e.length-1),r.push(f.x,f.y);const C=l[3*y+0]*w,_=l[3*y+1],b=l[3*y+0]*A;c.push(C,_,b)}}for(let g=0;g<t;g++)for(let M=0;M<e.length-1;M++){const w=M+g*e.length,A=w,y=w+e.length,C=w+e.length+1,_=w+1;s.push(A,y,_),s.push(C,_,y)}this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(r,2)),this.setAttribute("normal",new vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.points,e.segments,e.phiStart,e.phiLength)}}class Zt extends Bt{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const s=e/2,a=t/2,r=Math.floor(n),l=Math.floor(o),c=r+1,d=l+1,h=e/r,f=t/l,p=[],v=[],S=[],m=[];for(let u=0;u<d;u++){const g=u*f-a;for(let M=0;M<c;M++){const w=M*h-s;v.push(w,-g,0),S.push(0,0,1),m.push(M/r),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<r;g++){const M=g+c*u,w=g+c*(u+1),A=g+1+c*(u+1),y=g+1+c*u;p.push(M,w,y),p.push(w,A,y)}this.setIndex(p),this.setAttribute("position",new vt(v,3)),this.setAttribute("normal",new vt(S,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}class e0 extends Bt{constructor(e=.5,t=1,n=32,o=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:o,thetaStart:s,thetaLength:a},n=Math.max(3,n),o=Math.max(1,o);const r=[],l=[],c=[],d=[];let h=e;const f=(t-e)/o,p=new L,v=new Ue;for(let S=0;S<=o;S++){for(let m=0;m<=n;m++){const u=s+m/n*a;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,d.push(v.x,v.y)}h+=f}for(let S=0;S<o;S++){const m=S*(n+1);for(let u=0;u<n;u++){const g=u+m,M=g,w=g+n+1,A=g+n+2,y=g+1;r.push(M,w,y),r.push(w,A,y)}}this.setIndex(r),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new e0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mr extends Bt{constructor(e=new _s([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],o=[],s=[],a=[];let r=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(r,l,d),r+=l,l=0;this.setIndex(n),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(s,3)),this.setAttribute("uv",new vt(a,2));function c(d){const h=o.length/3,f=d.extractPoints(t);let p=f.shape;const v=f.holes;Xi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=v.length;m<u;m++){const g=v[m];Xi.isClockWise(g)===!0&&(v[m]=g.reverse())}const S=Xi.triangulateShape(p,v);for(let m=0,u=v.length;m<u;m++){const g=v[m];p=p.concat(g)}for(let m=0,u=p.length;m<u;m++){const g=p[m];o.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,u=S.length;m<u;m++){const g=S[m],M=g[0]+h,w=g[1]+h,A=g[2]+h;n.push(M,w,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Oh(t,e)}static fromJSON(e,t){const n=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=t[e.shapes[o]];n.push(a)}return new Mr(n,e.curveSegments)}}function Oh(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const o=i[t];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e}class Pt extends Bt{constructor(e=1,t=32,n=16,o=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:s,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const d=[],h=new L,f=new L,p=[],v=[],S=[],m=[];for(let u=0;u<=n;u++){const g=[],M=u/n;let w=0;u===0&&a===0?w=.5/t:u===n&&l===Math.PI&&(w=-.5/t);for(let A=0;A<=t;A++){const y=A/t;h.x=-e*Math.cos(o+y*s)*Math.sin(a+M*r),h.y=e*Math.cos(a+M*r),h.z=e*Math.sin(o+y*s)*Math.sin(a+M*r),v.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),m.push(y+w,1-M),g.push(c++)}d.push(g)}for(let u=0;u<n;u++)for(let g=0;g<t;g++){const M=d[u][g+1],w=d[u][g],A=d[u+1][g],y=d[u+1][g+1];(u!==0||a>0)&&p.push(M,w,y),(u!==n-1||l<Math.PI)&&p.push(w,A,y)}this.setIndex(p),this.setAttribute("position",new vt(v,3)),this.setAttribute("normal",new vt(S,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nn extends Bt{constructor(e=1,t=.4,n=12,o=48,s=Math.PI*2,a=0,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:s,thetaStart:a,thetaLength:r},n=Math.floor(n),o=Math.floor(o);const l=[],c=[],d=[],h=[],f=new L,p=new L,v=new L;for(let S=0;S<=n;S++){const m=a+S/n*r;for(let u=0;u<=o;u++){const g=u/o*s;p.x=(e+t*Math.cos(m))*Math.cos(g),p.y=(e+t*Math.cos(m))*Math.sin(g),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),v.subVectors(p,f).normalize(),d.push(v.x,v.y,v.z),h.push(u/o),h.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=o;m++){const u=(o+1)*S+m-1,g=(o+1)*(S-1)+m-1,M=(o+1)*(S-1)+m,w=(o+1)*S+m;l.push(u,g,w),l.push(g,M,w)}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Io extends Bt{constructor(e=new nd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,o=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:o,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new L,l=new L,c=new Ue;let d=new L;const h=[],f=[],p=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(p,2));function S(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),g(),u()}function m(M){d=e.getPointAt(M/t,d);const w=a.normals[M],A=a.binormals[M];for(let y=0;y<=o;y++){const C=y/o*Math.PI*2,_=Math.sin(C),b=-Math.cos(C);l.x=b*w.x+_*A.x,l.y=b*w.y+_*A.y,l.z=b*w.z+_*A.z,l.normalize(),f.push(l.x,l.y,l.z),r.x=d.x+n*l.x,r.y=d.y+n*l.y,r.z=d.z+n*l.z,h.push(r.x,r.y,r.z)}}function u(){for(let M=1;M<=t;M++)for(let w=1;w<=o;w++){const A=(o+1)*(M-1)+(w-1),y=(o+1)*M+(w-1),C=(o+1)*M+w,_=(o+1)*(M-1)+w;v.push(A,y,_),v.push(y,C,_)}}function g(){for(let M=0;M<=t;M++)for(let w=0;w<=o;w++)c.x=M/t,c.y=w/o,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Io(new cr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const n=hs(i[t]);for(const o in n)e[o]=n[o]}return e}function Bh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const ps={clone:hs,merge:zn};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?t.uniforms[o]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[o]={type:"m4",value:a.toArray()}:t.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class we extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vh extends $i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ud extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gh extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wr extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class na extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const sl=new Vt,j0=new L,q0=new L;class t0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;j0.setFromMatrixPosition(e.matrixWorld),t.position.copy(j0),q0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(q0),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Zs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Na=new L,Fa=new Yn,Ti=new L;class dd extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,Fa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Fa,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Na,Fa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Fa,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const io=new L,Y0=new Ue,Z0=new Ue;class Xn extends dd{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){io.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(io.x,io.y).multiplyScalar(-e/io.z),io.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(io.x,io.y).multiplyScalar(-e/io.z)}getViewSize(e,t){return this.getViewBounds(e,Y0,Z0),t.subVectors(Z0,Y0)}setViewOffset(e,t,n,o,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,s=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*o/l,t-=a.offsetY*n/c,o*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hh extends t0{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||o!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=o,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ms extends wr{constructor(e,t,n=0,o=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=n,this.angle=o,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Wh extends t0{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vn extends wr{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new Wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Sr extends dd{constructor(e=-1,t=1,n=1,o=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=n-e,a=n+e,r=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xh extends t0{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const $o=-90,Jo=1;class jh extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn($o,Jo,e,t);o.layers=this.layers,this.add(o);const s=new Xn($o,Jo,e,t);s.layers=this.layers,this.add(s);const a=new Xn($o,Jo,e,t);a.layers=this.layers,this.add(a);const r=new Xn($o,Jo,e,t);r.layers=this.layers,this.add(r);const l=new Xn($o,Jo,e,t);l.layers=this.layers,this.add(l);const c=new Xn($o,Jo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,s,a,r,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,3,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,o),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class qh extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zh.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Zh(){this._document.hidden===!1&&this.reset()}const $0=new Vt;class $h{constructor(e,t,n=0,o=1/0){this.ray=new vr(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($0),this}intersectObject(e,t=!0,n=[]){return gc(e,this,n,t),n.sort(J0),n}intersectObjects(e,t=!0,n=[]){for(let o=0,s=e.length;o<s;o++)gc(e[o],this,n,t);return n.sort(J0),n}}function J0(i,e){return i.distance-e.distance}function gc(i,e,t,n){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const s=i.children;for(let a=0,r=s.length;a<r;a++)gc(s[a],e,t,!0)}}function K0(i,e,t,n){const o=Jh(n);switch(t){case Hu:return i*e;case Nc:return i*e/o.components*o.byteLength;case Fc:return i*e/o.components*o.byteLength;case cs:return i*e*2/o.components*o.byteLength;case Oc:return i*e*2/o.components*o.byteLength;case Wu:return i*e*3/o.components*o.byteLength;case ui:return i*e*4/o.components*o.byteLength;case Bc:return i*e*4/o.components*o.byteLength;case Za:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Ol:return Math.max(i,16)*Math.max(e,8)/4;case Ul:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case Bl:case zl:case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kl:case Hl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sc:case ac:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jh(i){switch(i){case ti:case zu:return{byteLength:1,components:1};case qs:case ku:case qn:return{byteLength:2,components:1};case Dc:case Uc:return{byteLength:2,components:4};case Li:case Lc:case ni:return{byteLength:4,components:1};case Vu:case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fd(){let i=null,e=!1,t=null,n=null;function o(s,a){t(s,a),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kh(i){const e=new WeakMap;function t(r,l){const c=r.array,d=r.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),r.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:h}}function n(r,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,r),h.length===0)i.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],S=h[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const S=h[p];i.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const d=e.get(r);(!d||d.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:o,remove:s,update:a}}var Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,Jp=`uniform sampler2D dfgLUT;
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
}`,Kp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,sg=`#if DEPTH_PACKING == 3200
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
}`,ag=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Sg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Rg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:Qh,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:op,aomap_fragment:sp,aomap_pars_fragment:ap,batching_pars_vertex:rp,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:hp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:vp,color_pars_fragment:_p,color_pars_vertex:Mp,color_vertex:wp,common:Sp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ap,emissivemap_fragment:Cp,emissivemap_pars_fragment:Ep,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Np,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Bp,fog_pars_fragment:zp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Wp,lights_toon_fragment:jp,lights_toon_pars_fragment:qp,lights_phong_fragment:Yp,lights_phong_pars_fragment:Zp,lights_physical_fragment:$p,lights_physical_pars_fragment:Jp,lights_fragment_begin:Kp,lights_fragment_maps:Qp,lights_fragment_end:em,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:om,map_fragment:sm,map_pars_fragment:am,map_particle_fragment:rm,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:hm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:vm,normal_pars_vertex:_m,normal_vertex:Mm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Cm,premultiplied_alpha_fragment:Em,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:Bm,skinning_pars_vertex:zm,skinning_vertex:km,skinnormal_vertex:Vm,specularmap_fragment:Gm,specularmap_pars_fragment:Hm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:jm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Zm,uv_vertex:$m,worldpos_vertex:Jm,background_vert:Km,background_frag:Qm,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:og,depth_frag:sg,distance_vert:ag,distance_frag:rg,equirect_vert:lg,equirect_frag:cg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:hg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:_g,meshphong_vert:Mg,meshphong_frag:wg,meshphysical_vert:Sg,meshphysical_frag:yg,meshtoon_vert:bg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Cg,shadow_vert:Eg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Ig},lt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Ei={basic:{uniforms:zn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:zn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:zn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:zn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:zn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:zn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:zn([lt.points,lt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:zn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:zn([lt.common,lt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:zn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:zn([lt.sprite,lt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:zn([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:zn([lt.lights,lt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ei.physical={uniforms:zn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Oa={r:0,b:0,g:0},xo=new ii,Lg=new Vt;function Dg(i,e,t,n,o,s){const a=new ze(0);let r=o===!0?0:1,l,c,d=null,h=0,f=null;function p(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const w=g.backgroundBlurriness>0;M=e.get(M,w)}return M}function v(g){let M=!1;const w=p(g);w===null?m(a,r):w&&w.isColor&&(m(w,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(g,M){const w=p(M);w&&(w.isCubeTexture||w.mapping===gr)?(c===void 0&&(c=new I(new Re(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:hs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),xo.copy(M.backgroundRotation),xo.x*=-1,xo.y*=-1,xo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(xo)),c.material.toneMapped=Yt.getTransfer(w.colorSpace)!==en,(d!==w||h!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new I(new Zt(2,2),new an({name:"BackgroundMaterial",uniforms:hs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(w.colorSpace)!==en,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,h=w.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(Oa,ld(i)),t.buffers.color.setClear(Oa.r,Oa.g,Oa.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),r=M,m(a,r)},getClearAlpha:function(){return r},setClearAlpha:function(g){r=g,m(a,r)},render:v,addToRenderList:S,dispose:u}}function Ug(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=f(null);let s=o,a=!1;function r(R,U,O,N,k){let z=!1;const K=h(R,N,O,U);s!==K&&(s=K,c(s.object)),z=p(R,N,O,k),z&&v(R,N,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,w(R,U,O,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function h(R,U,O,N){const k=N.wireframe===!0;let z=n[U.id];z===void 0&&(z={},n[U.id]=z);const K=R.isInstancedMesh===!0?R.id:0;let he=z[K];he===void 0&&(he={},z[K]=he);let J=he[O.id];J===void 0&&(J={},he[O.id]=J);let ie=J[k];return ie===void 0&&(ie=f(l()),J[k]=ie),ie}function f(R){const U=[],O=[],N=[];for(let k=0;k<t;k++)U[k]=0,O[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:N,object:R,attributes:{},index:null}}function p(R,U,O,N){const k=s.attributes,z=U.attributes;let K=0;const he=O.getAttributes();for(const J in he)if(he[J].location>=0){const F=k[J];let H=z[J];if(H===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),F===void 0||F.attribute!==H||H&&F.data!==H.data)return!0;K++}return s.attributesNum!==K||s.index!==N}function v(R,U,O,N){const k={},z=U.attributes;let K=0;const he=O.getAttributes();for(const J in he)if(he[J].location>=0){let F=z[J];F===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(F=R.instanceColor));const H={};H.attribute=F,F&&F.data&&(H.data=F.data),k[J]=H,K++}s.attributes=k,s.attributesNum=K,s.index=N}function S(){const R=s.newAttributes;for(let U=0,O=R.length;U<O;U++)R[U]=0}function m(R){u(R,0)}function u(R,U){const O=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;O[R]=1,N[R]===0&&(i.enableVertexAttribArray(R),N[R]=1),k[R]!==U&&(i.vertexAttribDivisor(R,U),k[R]=U)}function g(){const R=s.newAttributes,U=s.enabledAttributes;for(let O=0,N=U.length;O<N;O++)U[O]!==R[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function M(R,U,O,N,k,z,K){K===!0?i.vertexAttribIPointer(R,U,O,k,z):i.vertexAttribPointer(R,U,O,N,k,z)}function w(R,U,O,N){S();const k=N.attributes,z=O.getAttributes(),K=U.defaultAttributeValues;for(const he in z){const J=z[he];if(J.location>=0){let ie=k[he];if(ie===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ie!==void 0){const F=ie.normalized,H=ie.itemSize,Q=e.get(ie);if(Q===void 0)continue;const Y=Q.buffer,ge=Q.type,V=Q.bytesPerElement,te=ge===i.INT||ge===i.UNSIGNED_INT||ie.gpuType===Lc;if(ie.isInterleavedBufferAttribute){const $=ie.data,q=$.stride,pe=ie.offset;if($.isInstancedInterleavedBuffer){for(let se=0;se<J.locationSize;se++)u(J.location+se,$.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<J.locationSize;se++)m(J.location+se);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let se=0;se<J.locationSize;se++)M(J.location+se,H/J.locationSize,ge,F,q*V,(pe+H/J.locationSize*se)*V,te)}else{if(ie.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)u(J.location+$,ie.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let $=0;$<J.locationSize;$++)M(J.location+$,H/J.locationSize,ge,F,H*V,H/J.locationSize*$*V,te)}}else if(K!==void 0){const F=K[he];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(J.location,F);break;case 3:i.vertexAttrib3fv(J.location,F);break;case 4:i.vertexAttrib4fv(J.location,F);break;default:i.vertexAttrib1fv(J.location,F)}}}}g()}function A(){b();for(const R in n){const U=n[R];for(const O in U){const N=U[O];for(const k in N){const z=N[k];for(const K in z)d(z[K].object),delete z[K];delete N[k]}}delete n[R]}}function y(R){if(n[R.id]===void 0)return;const U=n[R.id];for(const O in U){const N=U[O];for(const k in N){const z=N[k];for(const K in z)d(z[K].object),delete z[K];delete N[k]}}delete n[R.id]}function C(R){for(const U in n){const O=n[U];for(const N in O){const k=O[N];if(k[R.id]===void 0)continue;const z=k[R.id];for(const K in z)d(z[K].object),delete z[K];delete k[R.id]}}}function _(R){for(const U in n){const O=n[U],N=R.isInstancedMesh===!0?R.id:0,k=O[N];if(k!==void 0){for(const z in k){const K=k[z];for(const he in K)d(K[he].object),delete K[he];delete k[z]}delete O[N],Object.keys(O).length===0&&delete n[U]}}}function b(){x(),a=!0,s!==o&&(s=o,c(s.object))}function x(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:r,reset:b,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function Ng(i,e,t){let n;function o(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function r(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];t.update(p,n,1)}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let v=0;for(let S=0;S<h;S++)v+=d[S]*f[S];t.update(v,n,1)}}this.setMode=o,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Fg(i,e,t,n){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(C){return!(C!==ui&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const _=C===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ti&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ni&&!_)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(St("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:w,maxSamples:A,samples:y}}function Og(i){const e=this;let t=null,n=0,o=!1,s=!1;const a=new _o,r=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||o;return o=f,n=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!o||v===null||v.length===0||s&&!m)s?d(null):c();else{const g=s?0:n,M=g*4;let w=u.clippingState||null;l.value=w,w=d(v,f,M,p);for(let A=0;A!==M;++A)w[A]=t[A];u.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,p,v){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const u=p+S*4,g=f.matrixWorldInverse;r.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,w=p;M!==S;++M,w+=4)a.copy(h[M]).applyMatrix4(g,r),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const lo=4,Q0=[.125,.215,.35,.446,.526,.582],wo=20,Bg=256,Ls=new Sr,eu=new ze;let al=null,rl=0,ll=0,cl=!1;const zg=new L;class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,o=100,s={}){const{size:a=256,position:r=zg}=s;al=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,o,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(al,rl,ll),this._renderer.xr.enabled=cl,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Co||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:qn,format:ui,colorSpace:us,depthBuffer:!1},o=tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kg(s)),this._blurMaterial=Gg(s,e,t),this._ggxMaterial=Vg(s,e,t)}return o}_compileMaterial(e){const t=new I(new Bt,e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,n,o,s){const l=new Xn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(eu),h.toneMapping=Pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(o),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new I(new Re,new kt({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let u=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,u=!0):(m.color.copy(eu),u=!0);for(let M=0;M<6;M++){const w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const A=this._cubeSize;Ko(o,w*A,M>2?A:0,A,A),h.setRenderTarget(o),u&&h.render(S,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Co||e.mapping===ls;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const s=o?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let s=1;s<o;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const o=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,r=this._lodMeshes[n];r.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=0+c*1.25,p=h*f,{_lodMax:v}=this,S=this._sizeLods[n],m=3*S*(n>v-lo?n-v+lo:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,Ko(s,m,u,3*S,2*S),o.setRenderTarget(s),o.render(r,Ls),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,Ko(e,m,u,3*S,2*S),o.setRenderTarget(e),o.render(r,Ls)}_blur(e,t,n,o,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,o,"latitudinal",s),this._halfBlur(a,e,n,n,o,"longitudinal",s)}_halfBlur(e,t,n,o,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[o];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wo-1),S=s/v,m=isFinite(s)?1+Math.floor(d*S):wo;m>wo&&St(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wo}`);const u=[];let g=0;for(let C=0;C<wo;++C){const _=C/S,b=Math.exp(-_*_/2);u.push(b),C===0?g+=b:C<m&&(g+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const w=this._sizeLods[o],A=3*w*(o>M-lo?o-M+lo:0),y=4*(this._cubeSize-w);Ko(t,A,y,3*w,2*w),l.setRenderTarget(t),l.render(h,Ls)}}function kg(i){const e=[],t=[],n=[];let o=i;const s=i-lo+1+Q0.length;for(let a=0;a<s;a++){const r=Math.pow(2,o);e.push(r);let l=1/r;a>i-lo?l=Q0[a-i+lo-1]:a===0&&(l=0),t.push(l);const c=1/(r-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,S=3,m=2,u=1,g=new Float32Array(S*v*p),M=new Float32Array(m*v*p),w=new Float32Array(u*v*p);for(let y=0;y<p;y++){const C=y%3*2/3-1,_=y>2?0:-1,b=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];g.set(b,S*v*y),M.set(f,m*v*y);const x=[y,y,y,y,y,y];w.set(x,u*v*y)}const A=new Bt;A.setAttribute("position",new rn(g,S)),A.setAttribute("uv",new rn(M,m)),A.setAttribute("faceIndex",new rn(w,u)),n.push(new I(A,null)),o>lo&&o--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function tu(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Vg(i,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yr(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Gg(i,e,t){const n=new Float32Array(wo),o=new L(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:yr(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function nu(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function iu(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yr(){return`

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
	`}class hd extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Ju(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Re(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:yi});s.uniforms.tEquirect.value=t;const a=new I(o,s),r=t.minFilter;return t.minFilter===So&&(t.minFilter=_n),new jh(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,o);e.setRenderTarget(s)}}function Hg(i){let e=new WeakMap,t=new WeakMap,n=null;function o(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Rr||p===Pr)if(e.has(f)){const v=e.get(f).texture;return r(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const S=new hd(v.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",c),r(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,v=p===Rr||p===Pr,S=p===Co||p===ls;if(v||S){let m=t.get(f);const u=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new xc(i)),m=v?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return v&&g&&g.height>0||S&&g&&l(g)?(n===null&&(n=new xc(i)),m=v?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function r(f,p){return p===Rr?f.mapping=Co:p===Pr&&(f.mapping=ls),f}function l(f){let p=0;const v=6;for(let S=0;S<v;S++)f[S]!==void 0&&p++;return p===v}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:o,dispose:h}}function Wg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const o=i.getExtension(n);return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&sr("WebGLRenderer: "+n+" extension not supported."),o}}}function Xg(i,e,t,n){const o={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete o[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(h,f){return o[f.id]===!0||(f.addEventListener("dispose",a),o[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,v=h.attributes.position;let S=0;if(v===void 0)return;if(p!==null){const g=p.array;S=p.version;for(let M=0,w=g.length;M<w;M+=3){const A=g[M+0],y=g[M+1],C=g[M+2];f.push(A,y,y,C,C,A)}}else{const g=v.array;S=v.version;for(let M=0,w=g.length/3-1;M<w;M+=3){const A=M+0,y=M+1,C=M+2;f.push(A,y,y,C,C,A)}}const m=new(v.count>=65535?jc:Xc)(f,1);m.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:r,update:l,getWireframeAttribute:d}}function jg(i,e,t){let n;function o(f){n=f}let s,a;function r(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,s,f*a,v),t.update(p,n,v))}function d(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];t.update(m,n,1)}function h(f,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,S,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g]*S[g];t.update(u,n,1)}}this.setMode=o,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function qg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=r*(s/3);break;case i.LINES:t.lines+=r*(s/2);break;case i.LINE_STRIP:t.lines+=r*(s-1);break;case i.LINE_LOOP:t.lines+=r*s;break;case i.POINTS:t.points+=r*s;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Yg(i,e,t){const n=new WeakMap,o=new hn;function s(a,r,l){const c=a.morphTargetInfluences,d=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(r);if(f===void 0||f.count!==h){let b=function(){C.dispose(),n.delete(r),r.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,S=r.morphAttributes.color!==void 0,m=r.morphAttributes.position||[],u=r.morphAttributes.normal||[],g=r.morphAttributes.color||[];let M=0;p===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let w=r.attributes.position.count*M,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const y=new Float32Array(w*A*4*h),C=new ju(y,w,A,h);C.type=ni,C.needsUpdate=!0;const _=M*4;for(let x=0;x<h;x++){const R=m[x],U=u[x],O=g[x],N=w*A*4*x;for(let k=0;k<R.count;k++){const z=k*_;p===!0&&(o.fromBufferAttribute(R,k),y[N+z+0]=o.x,y[N+z+1]=o.y,y[N+z+2]=o.z,y[N+z+3]=0),v===!0&&(o.fromBufferAttribute(U,k),y[N+z+4]=o.x,y[N+z+5]=o.y,y[N+z+6]=o.z,y[N+z+7]=0),S===!0&&(o.fromBufferAttribute(O,k),y[N+z+8]=o.x,y[N+z+9]=o.y,y[N+z+10]=o.z,y[N+z+11]=O.itemSize===4?o.w:1)}}f={count:h,texture:C,size:new Ue(w,A)},n.set(r,f),r.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const v=r.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Zg(i,e,t,n,o){let s=new WeakMap;function a(c){const d=o.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return f}function r(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:r}}const $g={[Ac]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[mr]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Rc]:"CUSTOM_TONE_MAPPING"};function Jg(i,e,t,n,o){const s=new Hn(e,t,{type:i,depthBuffer:n,stencilBuffer:o}),a=new Hn(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),r=new Bt;r.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),r.setAttribute("uv",new vt([0,2,0,0,2,0],2));const l=new cd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new I(r,l),d=new Sr(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,S=null,m=[],u=!1;this.setSize=function(g,M){s.setSize(g,M),a.setSize(g,M);for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(g,M)}},this.setEffects=function(g){m=g,u=m.length>0&&m[0].isRenderPass===!0;const M=s.width,w=s.height;for(let A=0;A<m.length;A++){const y=m[A];y.setSize&&y.setSize(M,w)}},this.begin=function(g,M){if(p||g.toneMapping===Pi&&m.length===0)return!1;if(S=M,M!==null){const w=M.width,A=M.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return u===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=Pi,!0},this.hasRenderPass=function(){return u},this.end=function(g,M){g.toneMapping=v,p=!0;let w=s,A=a;for(let y=0;y<m.length;y++){const C=m[y];if(C.enabled!==!1&&(C.render(g,A,w,M),C.needsSwap!==!1)){const _=w;w=A,A=_}}if(h!==g.outputColorSpace||f!==g.toneMapping){h=g.outputColorSpace,f=g.toneMapping,l.defines={},Yt.getTransfer(h)===en&&(l.defines.SRGB_TRANSFER="");const y=$g[f];y&&(l.defines[y]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,g.setRenderTarget(S),g.render(c,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),r.dispose(),l.dispose()}}const pd=new Un,vc=new Eo(1,1),md=new ju,gd=new kf,xd=new Ju,ou=[],su=[],au=new Float32Array(16),ru=new Float32Array(9),lu=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let s=ou[o];if(s===void 0&&(s=new Float32Array(o),ou[o]=s),e!==0){n.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,i[a].toArray(s,r)}return s}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function br(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function nx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),yn(t,n)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),yn(t,n)}}function ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(Sn(t,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),yn(t,n)}}function sx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function cx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function hx(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let s;this.type===i.SAMPLER_2D_SHADOW?(vc.compareFunction=t.isReversedDepthBuffer()?Vc:kc,s=vc):s=pd,t.setTexture2D(e||s,o)}function px(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||gd,o)}function mx(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||xd,o)}function gx(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||md,o)}function xx(i){switch(i){case 5126:return Kg;case 35664:return Qg;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return ox;case 5124:case 35670:return sx;case 35667:case 35671:return ax;case 35668:case 35672:return rx;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function vx(i,e){i.uniform1fv(this.addr,e)}function _x(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Mx(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function wx(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function Sx(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yx(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bx(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tx(i,e){i.uniform1iv(this.addr,e)}function Ax(i,e){i.uniform2iv(this.addr,e)}function Cx(i,e){i.uniform3iv(this.addr,e)}function Ex(i,e){i.uniform4iv(this.addr,e)}function Rx(i,e){i.uniform1uiv(this.addr,e)}function Px(i,e){i.uniform2uiv(this.addr,e)}function Ix(i,e){i.uniform3uiv(this.addr,e)}function Lx(i,e){i.uniform4uiv(this.addr,e)}function Dx(i,e,t){const n=this.cache,o=e.length,s=br(t,o);Sn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=vc:a=pd;for(let r=0;r!==o;++r)t.setTexture2D(e[r]||a,s[r])}function Ux(i,e,t){const n=this.cache,o=e.length,s=br(t,o);Sn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let a=0;a!==o;++a)t.setTexture3D(e[a]||gd,s[a])}function Nx(i,e,t){const n=this.cache,o=e.length,s=br(t,o);Sn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let a=0;a!==o;++a)t.setTextureCube(e[a]||xd,s[a])}function Fx(i,e,t){const n=this.cache,o=e.length,s=br(t,o);Sn(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let a=0;a!==o;++a)t.setTexture2DArray(e[a]||md,s[a])}function Ox(i){switch(i){case 5126:return vx;case 35664:return _x;case 35665:return Mx;case 35666:return wx;case 35674:return Sx;case 35675:return yx;case 35676:return bx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Cx;case 35669:case 35673:return Ex;case 5125:return Rx;case 36294:return Px;case 36295:return Ix;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Fx}}class Bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xx(t.type)}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ox(t.type)}}class kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let s=0,a=o.length;s!==a;++s){const r=o[s];r.setValue(e,t[r.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function cu(i,e){i.seq.push(e),i.map[e.id]=e}function Vx(i,e,t){const n=i.name,o=n.length;for(ul.lastIndex=0;;){const s=ul.exec(n),a=ul.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===o){cu(t,c===void 0?new Bx(r,i,e):new zx(r,i,e));break}else{let h=t.map[r];h===void 0&&(h=new kx(r),cu(t,h)),t=h}}}class Qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),l=e.getUniformLocation(t,r.name);Vx(r,l,this)}const o=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(a):s.push(a);o.length>0&&(this.seq=o.concat(s))}setValue(e,t,n,o){const s=this.map[t];s!==void 0&&s.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,s=e.length;o!==s;++o){const a=e[o];a.id in t&&n.push(a)}return n}}function uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gx=37297;let Hx=0;function Wx(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=o;a<s;a++){const r=a+1;n.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return n.join(`
`)}const du=new Rt;function Xx(i){Yt._getMatrix(du,Yt.workingColorSpace,i);const e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(i)){case nr:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Wx(i.getShaderSource(e),r)}else return s}function jx(i,e){const t=Xx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qx={[Ac]:"Linear",[Cc]:"Reinhard",[Ec]:"Cineon",[mr]:"ACESFilmic",[Pc]:"AgX",[Ic]:"Neutral",[Rc]:"Custom"};function Yx(i,e){const t=qx[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new L;function Zx(){Yt.getLuminanceCoefficients(Ba);const i=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Jx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const s=i.getActiveAttrib(e,o),a=s.name;let r=1;s.type===i.FLOAT_MAT2&&(r=2),s.type===i.FLOAT_MAT3&&(r=3),s.type===i.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:r}}return t}function zs(i){return i!==""}function hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(Qx,tv)}const ev=new Map;function tv(i,e){let t=It[e];if(t===void 0){const n=ev.get(e);if(n!==void 0)t=It[n],St('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(nv,iv)}function iv(i,e,t,n){let o="";for(let s=parseInt(e);s<parseInt(t);s++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function gu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const ov={[Vs]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function sv(i){return ov[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const av={[Co]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function rv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":av[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lv={[ls]:"ENVMAP_MODE_REFRACTION"};function cv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uv={[Tc]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[of]:"ENVMAP_BLENDING_ADD"};function dv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uv[i.combine]||"ENVMAP_BLENDING_NONE"}function fv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hv(i,e,t,n){const o=i.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=sv(t),c=rv(t),d=cv(t),h=dv(t),f=fv(t),p=$x(t),v=Jx(s),S=o.createProgram();let m,u,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zs).join(`
`),u.length>0&&(u+=`
`)):(m=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),u=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?It.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,jx("linearToOutputTexel",t.outputColorSpace),Zx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=_c(a),a=hu(a,t),a=pu(a,t),r=_c(r),r=hu(r,t),r=pu(r,t),a=mu(a),r=mu(r),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=g+m+a,w=g+u+r,A=uu(o,o.VERTEX_SHADER,M),y=uu(o,o.FRAGMENT_SHADER,w);o.attachShader(S,A),o.attachShader(S,y),t.index0AttributeName!==void 0?o.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(S,0,"position"),o.linkProgram(S);function C(R){if(i.debug.checkShaderErrors){const U=o.getProgramInfoLog(S)||"",O=o.getShaderInfoLog(A)||"",N=o.getShaderInfoLog(y)||"",k=U.trim(),z=O.trim(),K=N.trim();let he=!0,J=!0;if(o.getProgramParameter(S,o.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,S,A,y);else{const ie=fu(o,A,"vertex"),F=fu(o,y,"fragment");Xt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(S,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+ie+`
`+F)}else k!==""?St("WebGLProgram: Program Info Log:",k):(z===""||K==="")&&(J=!1);J&&(R.diagnostics={runnable:he,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:u}})}o.deleteShader(A),o.deleteShader(y),_=new Qa(o,S),b=Kx(o,S)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=o.getProgramParameter(S,Gx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hx++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=y,this}let pv=0;class mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gv(e),t.set(e,n)),n}}class gv{constructor(e){this.id=pv++,this.code=e,this.usedTimes=0}}function xv(i,e,t,n,o,s){const a=new Wc,r=new mv,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,b,x,R,U){const O=R.fog,N=U.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||k,z),he=K&&K.mapping===gr?K.image.height:null,J=p[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&St("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,F=ie!==void 0?ie.length:0;let H=0;N.morphAttributes.position!==void 0&&(H=1),N.morphAttributes.normal!==void 0&&(H=2),N.morphAttributes.color!==void 0&&(H=3);let Q,Y,ge,V;if(J){const gt=Ei[J];Q=gt.vertexShader,Y=gt.fragmentShader}else Q=_.vertexShader,Y=_.fragmentShader,r.update(_),ge=r.getVertexShaderID(_),V=r.getFragmentShaderID(_);const te=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),q=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,se=!!_.map,Pe=!!_.matcap,de=!!K,X=!!_.aoMap,j=!!_.lightMap,G=!!_.bumpMap,B=!!_.normalMap,E=!!_.displacementMap,ae=!!_.emissiveMap,xe=!!_.metalnessMap,Me=!!_.roughnessMap,oe=_.anisotropy>0,P=_.clearcoat>0,T=_.dispersion>0,W=_.iridescence>0,ne=_.sheen>0,be=_.transmission>0,me=oe&&!!_.anisotropyMap,ke=P&&!!_.clearcoatMap,Le=P&&!!_.clearcoatNormalMap,He=P&&!!_.clearcoatRoughnessMap,Ze=W&&!!_.iridescenceMap,Ne=W&&!!_.iridescenceThicknessMap,Fe=ne&&!!_.sheenColorMap,ve=ne&&!!_.sheenRoughnessMap,Se=!!_.specularMap,Ee=!!_.specularColorMap,We=!!_.specularIntensityMap,Z=be&&!!_.transmissionMap,Be=be&&!!_.thicknessMap,Ve=!!_.gradientMap,Ke=!!_.alphaMap,re=_.alphaTest>0,ee=!!_.alphaHash,Te=!!_.extensions;let Ye=Pi;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const ut={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:Y,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:q,instancingColor:q&&U.instanceColor!==null,instancingMorph:q&&U.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:us,alphaToCoverage:!!_.alphaToCoverage,map:se,matcap:Pe,envMap:de,envMapMode:de&&K.mapping,envMapCubeUVHeight:he,aoMap:X,lightMap:j,bumpMap:G,normalMap:B,displacementMap:E,emissiveMap:ae,normalMapObjectSpace:B&&_.normalMapType===lf,normalMapTangentSpace:B&&_.normalMapType===zc,metalnessMap:xe,roughnessMap:Me,anisotropy:oe,anisotropyMap:me,clearcoat:P,clearcoatMap:ke,clearcoatNormalMap:Le,clearcoatRoughnessMap:He,dispersion:T,iridescence:W,iridescenceMap:Ze,iridescenceThicknessMap:Ne,sheen:ne,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:Ee,specularIntensityMap:We,transmission:be,transmissionMap:Z,thicknessMap:Be,gradientMap:Ve,opaque:_.transparent===!1&&_.blending===To&&_.alphaToCoverage===!1,alphaMap:Ke,alphaTest:re,alphaHash:ee,combine:_.combine,mapUv:se&&v(_.map.channel),aoMapUv:X&&v(_.aoMap.channel),lightMapUv:j&&v(_.lightMap.channel),bumpMapUv:G&&v(_.bumpMap.channel),normalMapUv:B&&v(_.normalMap.channel),displacementMapUv:E&&v(_.displacementMap.channel),emissiveMapUv:ae&&v(_.emissiveMap.channel),metalnessMapUv:xe&&v(_.metalnessMap.channel),roughnessMapUv:Me&&v(_.roughnessMap.channel),anisotropyMapUv:me&&v(_.anisotropyMap.channel),clearcoatMapUv:ke&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(_.sheenRoughnessMap.channel),specularMapUv:Se&&v(_.specularMap.channel),specularColorMapUv:Ee&&v(_.specularColorMap.channel),specularIntensityMapUv:We&&v(_.specularIntensityMap.channel),transmissionMapUv:Z&&v(_.transmissionMap.channel),thicknessMapUv:Be&&v(_.thicknessMap.channel),alphaMapUv:Ke&&v(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(B||oe),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(se||Ke),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&B===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:$,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:H,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&x.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:se&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===en,decodeVideoTextureEmissive:ae&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===en,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===on,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Te&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const x in _.defines)b.push(x),b.push(_.defines[x]);return _.isRawShaderMaterial===!1&&(u(b,_),g(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function u(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const b=p[_.type];let x;if(b){const R=Ei[b];x=ps.clone(R.uniforms)}else x=_.uniforms;return x}function w(_,b){let x=d.get(b);return x!==void 0?++x.usedTimes:(x=new hv(i,b,_,o),c.push(x),d.set(b,x)),x}function A(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function y(_){r.remove(_)}function C(){r.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:A,releaseShaderCache:y,programs:c,dispose:C}}function vv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let r=i.get(a);return r===void 0&&(r={},i.set(a,r)),r}function n(a){i.delete(a)}function o(a,r,l){i.get(a)[r]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:s}}function _v(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){const i=[];let e=0;const t=[],n=[],o=[];function s(){e=0,t.length=0,n.length=0,o.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function r(f,p,v,S,m,u){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:u},i[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=v,g.materialVariant=a(f),g.groupOrder=S,g.renderOrder=f.renderOrder,g.z=m,g.group=u),e++,g}function l(f,p,v,S,m,u){const g=r(f,p,v,S,m,u);v.transmission>0?n.push(g):v.transparent===!0?o.push(g):t.push(g)}function c(f,p,v,S,m,u){const g=r(f,p,v,S,m,u);v.transmission>0?n.unshift(g):v.transparent===!0?o.unshift(g):t.unshift(g)}function d(f,p){t.length>1&&t.sort(f||_v),n.length>1&&n.sort(p||xu),o.length>1&&o.sort(p||xu)}function h(){for(let f=e,p=i.length;f<p;f++){const v=i[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:o,init:s,push:l,unshift:c,finish:h,sort:d}}function Mv(){let i=new WeakMap;function e(n,o){const s=i.get(n);let a;return s===void 0?(a=new vu,i.set(n,[a])):o>=s.length?(a=new vu,s.push(a)):a=s[o],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Sv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yv=0;function bv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tv(i){const e=new wv,t=Sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const o=new L,s=new Vt,a=new Vt;function r(c){let d=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,v=0,S=0,m=0,u=0,g=0,M=0,w=0,A=0,y=0,C=0;c.sort(bv);for(let b=0,x=c.length;b<x;b++){const R=c[b],U=R.color,O=R.intensity,N=R.distance;let k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cs?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=U.r*O,h+=U.g*O,f+=U.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,he=t.get(R);he.shadowIntensity=K.intensity,he.shadowBias=K.bias,he.shadowNormalBias=K.normalBias,he.shadowRadius=K.radius,he.shadowMapSize=K.mapSize,n.directionalShadow[p]=he,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=R.shadow.matrix,g++}n.directional[p]=z,p++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(U).multiplyScalar(O),z.distance=N,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[S]=z;const K=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,K.updateMatrices(R),R.castShadow&&y++),n.spotLightMatrix[S]=K.matrix,R.castShadow){const he=t.get(R);he.shadowIntensity=K.intensity,he.shadowBias=K.bias,he.shadowNormalBias=K.normalBias,he.shadowRadius=K.radius,he.shadowMapSize=K.mapSize,n.spotShadow[S]=he,n.spotShadowMap[S]=k,w++}S++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(U).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const K=R.shadow,he=t.get(R);he.shadowIntensity=K.intensity,he.shadowBias=K.bias,he.shadowNormalBias=K.normalBias,he.shadowRadius=K.radius,he.shadowMapSize=K.mapSize,he.shadowCameraNear=K.camera.near,he.shadowCameraFar=K.camera.far,n.pointShadow[v]=he,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=R.shadow.matrix,M++}n.point[v]=z,v++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[u]=z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const _=n.hash;(_.directionalLength!==p||_.pointLength!==v||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==u||_.numDirectionalShadows!==g||_.numPointShadows!==M||_.numSpotShadows!==w||_.numSpotMaps!==A||_.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+A-y,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=C,_.directionalLength=p,_.pointLength=v,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=u,_.numDirectionalShadows=g,_.numPointShadows=M,_.numSpotShadows=w,_.numSpotMaps=A,_.numLightProbes=C,n.version=yv++)}function l(c,d){let h=0,f=0,p=0,v=0,S=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const M=c[u];if(M.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(m),h++}else if(M.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),S++}}}return{setup:r,setupView:l,state:n}}function _u(i){const e=new Tv(i),t=[],n=[];function o(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function r(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function Av(i){let e=new WeakMap;function t(o,s=0){const a=e.get(o);let r;return a===void 0?(r=new _u(i),e.set(o,[r])):s>=a.length?(r=new _u(i),a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
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
}`,Rv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Pv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Mu=new Vt,Ds=new L,dl=new L;function Iv(i,e,t){let n=new Zc;const o=new Ue,s=new Ue,a=new hn,r=new ud,l=new Gh,c={},d=t.maxTextureSize,h={[qi]:Rn,[Rn]:qi,[on]:on},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Cv,fragmentShader:Ev}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Bt;v.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new I(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let u=this.type;this.render=function(y,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Od&&(St("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vs);const b=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=u!==this.type;O&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=y.length;N<k;N++){const z=y[N],K=z.shadow;if(K===void 0){St("WebGLShadowMap:",z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const he=K.getFrameExtents();o.multiply(he),s.copy(K.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(s.x=Math.floor(d/he.x),o.x=s.x*he.x,K.mapSize.x=s.x),o.y>d&&(s.y=Math.floor(d/he.y),o.y=s.y*he.y,K.mapSize.y=s.y));const J=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=J,K.map===null||O===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Fs){if(z.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Hn(o.x,o.y,{format:cs,type:qn,minFilter:_n,magFilter:_n,generateMipmaps:!1}),K.map.texture.name=z.name+".shadowMap",K.map.depthTexture=new Eo(o.x,o.y,ni),K.map.depthTexture.name=z.name+".shadowMapDepth",K.map.depthTexture.format=Yi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=wn,K.map.depthTexture.magFilter=wn}else z.isPointLight?(K.map=new hd(o.x),K.map.depthTexture=new sh(o.x,Li)):(K.map=new Hn(o.x,o.y),K.map.depthTexture=new Eo(o.x,o.y,Li)),K.map.depthTexture.name=z.name+".shadowMap",K.map.depthTexture.format=Yi,this.type===Vs?(K.map.depthTexture.compareFunction=J?Vc:kc,K.map.depthTexture.minFilter=_n,K.map.depthTexture.magFilter=_n):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=wn,K.map.depthTexture.magFilter=wn);K.camera.updateProjectionMatrix()}const ie=K.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ie;F++){if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,F),i.clear();else{F===0&&(i.setRenderTarget(K.map),i.clear());const H=K.getViewport(F);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),U.viewport(a)}if(z.isPointLight){const H=K.camera,Q=K.matrix,Y=z.distance||H.far;Y!==H.far&&(H.far=Y,H.updateProjectionMatrix()),Ds.setFromMatrixPosition(z.matrixWorld),H.position.copy(Ds),dl.copy(H.position),dl.add(Rv[F]),H.up.copy(Pv[F]),H.lookAt(dl),H.updateMatrixWorld(),Q.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Mu.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Mu,H.coordinateSystem,H.reversedDepth)}else K.updateMatrices(z);n=K.getFrustum(),w(C,_,K.camera,z,this.type)}K.isPointLightShadow!==!0&&this.type===Fs&&g(K,_),K.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,R)};function g(y,C){const _=e.update(S);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Hn(o.x,o.y,{format:cs,type:qn})),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,_,f,S,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,_,p,S,null)}function M(y,C,_,b){let x=null;const R=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0)x=R;else if(x=_.isPointLight===!0?l:r,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=x.uuid,O=C.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let k=N[O];k===void 0&&(k=x.clone(),N[O]=k,C.addEventListener("dispose",A)),x=k}if(x.visible=C.visible,x.wireframe=C.wireframe,b===Fs?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,_.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=_}return x}function w(y,C,_,b,x){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Fs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const O=e.update(y),N=y.material;if(Array.isArray(N)){const k=O.groups;for(let z=0,K=k.length;z<K;z++){const he=k[z],J=N[he.materialIndex];if(J&&J.visible){const ie=M(y,J,b,x);y.onBeforeShadow(i,y,C,_,O,ie,he),i.renderBufferDirect(_,null,O,ie,y,he),y.onAfterShadow(i,y,C,_,O,ie,he)}}}else if(N.visible){const k=M(y,N,b,x);y.onBeforeShadow(i,y,C,_,O,k,null),i.renderBufferDirect(_,null,O,k,y,null),y.onAfterShadow(i,y,C,_,O,k,null)}}const U=y.children;for(let O=0,N=U.length;O<N;O++)w(U[O],C,_,b,x)}function A(y){y.target.removeEventListener("dispose",A);for(const _ in c){const b=c[_],x=y.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function Lv(i,e){function t(){let Z=!1;const Be=new hn;let Ve=null;const Ke=new hn(0,0,0,0);return{setMask:function(re){Ve!==re&&!Z&&(i.colorMask(re,re,re,re),Ve=re)},setLocked:function(re){Z=re},setClear:function(re,ee,Te,Ye,ut){ut===!0&&(re*=Ye,ee*=Ye,Te*=Ye),Be.set(re,ee,Te,Ye),Ke.equals(Be)===!1&&(i.clearColor(re,ee,Te,Ye),Ke.copy(Be))},reset:function(){Z=!1,Ve=null,Ke.set(-1,0,0,0)}}}function n(){let Z=!1,Be=!1,Ve=null,Ke=null,re=null;return{setReversed:function(ee){if(Be!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Be=ee;const Ye=re;re=null,this.setClear(Ye)}},getReversed:function(){return Be},setTest:function(ee){ee?te(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ee){Ve!==ee&&!Z&&(i.depthMask(ee),Ve=ee)},setFunc:function(ee){if(Be&&(ee=vf[ee]),Ke!==ee){switch(ee){case Al:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Rl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ke=ee}},setLocked:function(ee){Z=ee},setClear:function(ee){re!==ee&&(re=ee,Be&&(ee=1-ee),i.clearDepth(ee))},reset:function(){Z=!1,Ve=null,Ke=null,re=null,Be=!1}}}function o(){let Z=!1,Be=null,Ve=null,Ke=null,re=null,ee=null,Te=null,Ye=null,ut=null;return{setTest:function(gt){Z||(gt?te(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(gt){Be!==gt&&!Z&&(i.stencilMask(gt),Be=gt)},setFunc:function(gt,Ct,Gt){(Ve!==gt||Ke!==Ct||re!==Gt)&&(i.stencilFunc(gt,Ct,Gt),Ve=gt,Ke=Ct,re=Gt)},setOp:function(gt,Ct,Gt){(ee!==gt||Te!==Ct||Ye!==Gt)&&(i.stencilOp(gt,Ct,Gt),ee=gt,Te=Ct,Ye=Gt)},setLocked:function(gt){Z=gt},setClear:function(gt){ut!==gt&&(i.clearStencil(gt),ut=gt)},reset:function(){Z=!1,Be=null,Ve=null,Ke=null,re=null,ee=null,Te=null,Ye=null,ut=null}}}const s=new t,a=new n,r=new o,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],v=null,S=!1,m=null,u=null,g=null,M=null,w=null,A=null,y=null,C=new ze(0,0,0),_=0,b=!1,x=null,R=null,U=null,O=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(he)[1]),z=K>=1):he.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),z=K>=2);let J=null,ie={};const F=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),Q=new hn().fromArray(F),Y=new hn().fromArray(H);function ge(Z,Be,Ve,Ke){const re=new Uint8Array(4),ee=i.createTexture();i.bindTexture(Z,ee),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<Ve;Te++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Be,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(Be+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return ee}const V={};V[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),te(i.DEPTH_TEST),a.setFunc(rs),G(!1),B(d0),te(i.CULL_FACE),X(yi);function te(Z){d[Z]!==!0&&(i.enable(Z),d[Z]=!0)}function $(Z){d[Z]!==!1&&(i.disable(Z),d[Z]=!1)}function q(Z,Be){return h[Z]!==Be?(i.bindFramebuffer(Z,Be),h[Z]=Be,Z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Be),Z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Be),!0):!1}function pe(Z,Be){let Ve=p,Ke=!1;if(Z){Ve=f.get(Be),Ve===void 0&&(Ve=[],f.set(Be,Ve));const re=Z.textures;if(Ve.length!==re.length||Ve[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=re.length;ee<Te;ee++)Ve[ee]=i.COLOR_ATTACHMENT0+ee;Ve.length=re.length,Ke=!0}}else Ve[0]!==i.BACK&&(Ve[0]=i.BACK,Ke=!0);Ke&&i.drawBuffers(Ve)}function se(Z){return v!==Z?(i.useProgram(Z),v=Z,!0):!1}const Pe={[Mo]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};Pe[Vd]=i.MIN,Pe[Gd]=i.MAX;const de={[Hd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[Tl]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[Kd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[tf]:i.ONE_MINUS_CONSTANT_ALPHA};function X(Z,Be,Ve,Ke,re,ee,Te,Ye,ut,gt){if(Z===yi){S===!0&&($(i.BLEND),S=!1);return}if(S===!1&&(te(i.BLEND),S=!0),Z!==Bd){if(Z!==m||gt!==b){if((u!==Mo||w!==Mo)&&(i.blendEquation(i.FUNC_ADD),u=Mo,w=Mo),gt)switch(Z){case To:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case f0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case h0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case To:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case f0:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h0:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",Z);break}g=null,M=null,A=null,y=null,C.set(0,0,0),_=0,m=Z,b=gt}return}re=re||Be,ee=ee||Ve,Te=Te||Ke,(Be!==u||re!==w)&&(i.blendEquationSeparate(Pe[Be],Pe[re]),u=Be,w=re),(Ve!==g||Ke!==M||ee!==A||Te!==y)&&(i.blendFuncSeparate(de[Ve],de[Ke],de[ee],de[Te]),g=Ve,M=Ke,A=ee,y=Te),(Ye.equals(C)===!1||ut!==_)&&(i.blendColor(Ye.r,Ye.g,Ye.b,ut),C.copy(Ye),_=ut),m=Z,b=!1}function j(Z,Be){Z.side===on?$(i.CULL_FACE):te(i.CULL_FACE);let Ve=Z.side===Rn;Be&&(Ve=!Ve),G(Ve),Z.blending===To&&Z.transparent===!1?X(yi):X(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const Ke=Z.stencilWrite;r.setTest(Ke),Ke&&(r.setMask(Z.stencilWriteMask),r.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),r.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ae(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(Z){x!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),x=Z)}function B(Z){Z!==Nd?(te(i.CULL_FACE),Z!==R&&(Z===d0?i.cullFace(i.BACK):Z===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),R=Z}function E(Z){Z!==U&&(z&&i.lineWidth(Z),U=Z)}function ae(Z,Be,Ve){Z?(te(i.POLYGON_OFFSET_FILL),(O!==Be||N!==Ve)&&(O=Be,N=Ve,a.getReversed()&&(Be=-Be),i.polygonOffset(Be,Ve))):$(i.POLYGON_OFFSET_FILL)}function xe(Z){Z?te(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function Me(Z){Z===void 0&&(Z=i.TEXTURE0+k-1),J!==Z&&(i.activeTexture(Z),J=Z)}function oe(Z,Be,Ve){Ve===void 0&&(J===null?Ve=i.TEXTURE0+k-1:Ve=J);let Ke=ie[Ve];Ke===void 0&&(Ke={type:void 0,texture:void 0},ie[Ve]=Ke),(Ke.type!==Z||Ke.texture!==Be)&&(J!==Ve&&(i.activeTexture(Ve),J=Ve),i.bindTexture(Z,Be||V[Z]),Ke.type=Z,Ke.texture=Be)}function P(){const Z=ie[J];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function ne(){try{i.texSubImage2D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function be(){try{i.texSubImage3D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function Le(){try{i.texStorage2D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function He(){try{i.texStorage3D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function Ze(){try{i.texImage2D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function Ne(){try{i.texImage3D(...arguments)}catch(Z){Xt("WebGLState:",Z)}}function Fe(Z){Q.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Q.copy(Z))}function ve(Z){Y.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Y.copy(Z))}function Se(Z,Be){let Ve=c.get(Be);Ve===void 0&&(Ve=new WeakMap,c.set(Be,Ve));let Ke=Ve.get(Z);Ke===void 0&&(Ke=i.getUniformBlockIndex(Be,Z.name),Ve.set(Z,Ke))}function Ee(Z,Be){const Ke=c.get(Be).get(Z);l.get(Be)!==Ke&&(i.uniformBlockBinding(Be,Ke,Z.__bindingPointIndex),l.set(Be,Ke))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,ie={},h={},f=new WeakMap,p=[],v=null,S=!1,m=null,u=null,g=null,M=null,w=null,A=null,y=null,C=new ze(0,0,0),_=0,b=!1,x=null,R=null,U=null,O=null,N=null,Q.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:te,disable:$,bindFramebuffer:q,drawBuffers:pe,useProgram:se,setBlending:X,setMaterial:j,setFlipSided:G,setCullFace:B,setLineWidth:E,setPolygonOffset:ae,setScissorTest:xe,activeTexture:Me,bindTexture:oe,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Ze,texImage3D:Ne,updateUBOMapping:Se,uniformBlockBinding:Ee,texStorage2D:Le,texStorage3D:He,texSubImage2D:ne,texSubImage3D:be,compressedTexSubImage2D:me,compressedTexSubImage3D:ke,scissor:Fe,viewport:ve,reset:We}}function Dv(i,e,t,n,o,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return p?new OffscreenCanvas(P,T):ir("canvas")}function S(P,T,W){let ne=1;const be=oe(P);if((be.width>W||be.height>W)&&(ne=W/Math.max(be.width,be.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const me=Math.floor(ne*be.width),ke=Math.floor(ne*be.height);h===void 0&&(h=v(me,ke));const Le=T?v(me,ke):h;return Le.width=me,Le.height=ke,Le.getContext("2d").drawImage(P,0,0,me,ke),St("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+me+"x"+ke+")."),Le}else return"data"in P&&St("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),P;return P}function m(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function g(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,T,W,ne,be=!1){if(P!==null){if(i[P]!==void 0)return i[P];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me=T;if(T===i.RED&&(W===i.FLOAT&&(me=i.R32F),W===i.HALF_FLOAT&&(me=i.R16F),W===i.UNSIGNED_BYTE&&(me=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(me=i.R8UI),W===i.UNSIGNED_SHORT&&(me=i.R16UI),W===i.UNSIGNED_INT&&(me=i.R32UI),W===i.BYTE&&(me=i.R8I),W===i.SHORT&&(me=i.R16I),W===i.INT&&(me=i.R32I)),T===i.RG&&(W===i.FLOAT&&(me=i.RG32F),W===i.HALF_FLOAT&&(me=i.RG16F),W===i.UNSIGNED_BYTE&&(me=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(me=i.RG8UI),W===i.UNSIGNED_SHORT&&(me=i.RG16UI),W===i.UNSIGNED_INT&&(me=i.RG32UI),W===i.BYTE&&(me=i.RG8I),W===i.SHORT&&(me=i.RG16I),W===i.INT&&(me=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(me=i.RGB8UI),W===i.UNSIGNED_SHORT&&(me=i.RGB16UI),W===i.UNSIGNED_INT&&(me=i.RGB32UI),W===i.BYTE&&(me=i.RGB8I),W===i.SHORT&&(me=i.RGB16I),W===i.INT&&(me=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),W===i.UNSIGNED_INT&&(me=i.RGBA32UI),W===i.BYTE&&(me=i.RGBA8I),W===i.SHORT&&(me=i.RGBA16I),W===i.INT&&(me=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(me=i.R11F_G11F_B10F)),T===i.RGBA){const ke=be?nr:Yt.getTransfer(ne);W===i.FLOAT&&(me=i.RGBA32F),W===i.HALF_FLOAT&&(me=i.RGBA16F),W===i.UNSIGNED_BYTE&&(me=ke===en?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function w(P,T){let W;return P?T===null||T===Li||T===Ys?W=i.DEPTH24_STENCIL8:T===ni?W=i.DEPTH32F_STENCIL8:T===qs&&(W=i.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Li||T===Ys?W=i.DEPTH_COMPONENT24:T===ni?W=i.DEPTH_COMPONENT32F:T===qs&&(W=i.DEPTH_COMPONENT16),W}function A(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function y(P){const T=P.target;T.removeEventListener("dispose",y),_(T),T.isVideoTexture&&d.delete(T)}function C(P){const T=P.target;T.removeEventListener("dispose",C),x(T)}function _(P){const T=n.get(P);if(T.__webglInit===void 0)return;const W=P.source,ne=f.get(W);if(ne){const be=ne[T.__cacheKey];be.usedTimes--,be.usedTimes===0&&b(P),Object.keys(ne).length===0&&f.delete(W)}n.remove(P)}function b(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const W=P.source,ne=f.get(W);delete ne[T.__cacheKey],a.memory.textures--}function x(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let be=0;be<T.__webglFramebuffer[ne].length;be++)i.deleteFramebuffer(T.__webglFramebuffer[ne][be]);else i.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)i.deleteFramebuffer(T.__webglFramebuffer[ne]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let ne=0,be=W.length;ne<be;ne++){const me=n.get(W[ne]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(W[ne])}n.remove(P)}let R=0;function U(){R=0}function O(){const P=R;return P>=o.maxTextures&&St("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),R+=1,P}function N(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function k(P,T){const W=n.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const ne=P.image;if(ne===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function z(P,T){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){V(W,P,T);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function K(P,T){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){V(W,P,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function he(P,T){const W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){te(W,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const J={[Ut]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},ie={[wn]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[So]:i.LINEAR_MIPMAP_LINEAR},F={[cf]:i.NEVER,[pf]:i.ALWAYS,[uf]:i.LESS,[kc]:i.LEQUAL,[df]:i.EQUAL,[Vc]:i.GEQUAL,[ff]:i.GREATER,[hf]:i.NOTEQUAL};function H(P,T){if(T.type===ni&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===Ir||T.magFilter===sa||T.magFilter===So||T.minFilter===_n||T.minFilter===Ir||T.minFilter===sa||T.minFilter===So)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,J[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ie[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==sa&&T.minFilter!==So||T.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Q(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",y));const ne=T.source;let be=f.get(ne);be===void 0&&(be={},f.set(ne,be));const me=N(T);if(me!==P.__cacheKey){be[me]===void 0&&(be[me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),be[me].usedTimes++;const ke=be[P.__cacheKey];ke!==void 0&&(be[P.__cacheKey].usedTimes--,ke.usedTimes===0&&b(T)),P.__cacheKey=me,P.__webglTexture=be[me].texture}return W}function Y(P,T,W){return Math.floor(Math.floor(P/W)/T)}function ge(P,T,W,ne){const me=P.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,ne,T.data);else{me.sort((Ne,Fe)=>Ne.start-Fe.start);let ke=0;for(let Ne=1;Ne<me.length;Ne++){const Fe=me[ke],ve=me[Ne],Se=Fe.start+Fe.count,Ee=Y(ve.start,T.width,4),We=Y(Fe.start,T.width,4);ve.start<=Se+1&&Ee===We&&Y(ve.start+ve.count-1,T.width,4)===Ee?Fe.count=Math.max(Fe.count,ve.start+ve.count-Fe.start):(++ke,me[ke]=ve)}me.length=ke+1;const Le=i.getParameter(i.UNPACK_ROW_LENGTH),He=i.getParameter(i.UNPACK_SKIP_PIXELS),Ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ne=0,Fe=me.length;Ne<Fe;Ne++){const ve=me[Ne],Se=Math.floor(ve.start/4),Ee=Math.ceil(ve.count/4),We=Se%T.width,Z=Math.floor(Se/T.width),Be=Ee,Ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,We,Z,Be,Ve,W,ne,T.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ze)}}function V(P,T,W){let ne=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=i.TEXTURE_3D);const be=Q(P,T),me=T.source;t.bindTexture(ne,P.__webglTexture,i.TEXTURE0+W);const ke=n.get(me);if(me.version!==ke.__version||be===!0){t.activeTexture(i.TEXTURE0+W);const Le=Yt.getPrimaries(Yt.workingColorSpace),He=T.colorSpace===ro?null:Yt.getPrimaries(T.colorSpace),Ze=T.colorSpace===ro||Le===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ne=S(T.image,!1,o.maxTextureSize);Ne=Me(T,Ne);const Fe=s.convert(T.format,T.colorSpace),ve=s.convert(T.type);let Se=M(T.internalFormat,Fe,ve,T.colorSpace,T.isVideoTexture);H(ne,T);let Ee;const We=T.mipmaps,Z=T.isVideoTexture!==!0,Be=ke.__version===void 0||be===!0,Ve=me.dataReady,Ke=A(T,Ne);if(T.isDepthTexture)Se=w(T.format===yo,T.type),Be&&(Z?t.texStorage2D(i.TEXTURE_2D,1,Se,Ne.width,Ne.height):t.texImage2D(i.TEXTURE_2D,0,Se,Ne.width,Ne.height,0,Fe,ve,null));else if(T.isDataTexture)if(We.length>0){Z&&Be&&t.texStorage2D(i.TEXTURE_2D,Ke,Se,We[0].width,We[0].height);for(let re=0,ee=We.length;re<ee;re++)Ee=We[re],Z?Ve&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ee.width,Ee.height,Fe,ve,Ee.data):t.texImage2D(i.TEXTURE_2D,re,Se,Ee.width,Ee.height,0,Fe,ve,Ee.data);T.generateMipmaps=!1}else Z?(Be&&t.texStorage2D(i.TEXTURE_2D,Ke,Se,Ne.width,Ne.height),Ve&&ge(T,Ne,Fe,ve)):t.texImage2D(i.TEXTURE_2D,0,Se,Ne.width,Ne.height,0,Fe,ve,Ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Z&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Se,We[0].width,We[0].height,Ne.depth);for(let re=0,ee=We.length;re<ee;re++)if(Ee=We[re],T.format!==ui)if(Fe!==null)if(Z){if(Ve)if(T.layerUpdates.size>0){const Te=K0(Ee.width,Ee.height,T.format,T.type);for(const Ye of T.layerUpdates){const ut=Ee.data.subarray(Ye*Te/Ee.data.BYTES_PER_ELEMENT,(Ye+1)*Te/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Ye,Ee.width,Ee.height,1,Fe,ut)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,Ne.depth,Fe,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Se,Ee.width,Ee.height,Ne.depth,0,Ee.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Ee.width,Ee.height,Ne.depth,Fe,ve,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Se,Ee.width,Ee.height,Ne.depth,0,Fe,ve,Ee.data)}else{Z&&Be&&t.texStorage2D(i.TEXTURE_2D,Ke,Se,We[0].width,We[0].height);for(let re=0,ee=We.length;re<ee;re++)Ee=We[re],T.format!==ui?Fe!==null?Z?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Ee.width,Ee.height,Fe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Se,Ee.width,Ee.height,0,Ee.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Ve&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ee.width,Ee.height,Fe,ve,Ee.data):t.texImage2D(i.TEXTURE_2D,re,Se,Ee.width,Ee.height,0,Fe,ve,Ee.data)}else if(T.isDataArrayTexture)if(Z){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Se,Ne.width,Ne.height,Ne.depth),Ve)if(T.layerUpdates.size>0){const re=K0(Ne.width,Ne.height,T.format,T.type);for(const ee of T.layerUpdates){const Te=Ne.data.subarray(ee*re/Ne.data.BYTES_PER_ELEMENT,(ee+1)*re/Ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,Ne.width,Ne.height,1,Fe,ve,Te)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Fe,ve,Ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,Ne.width,Ne.height,Ne.depth,0,Fe,ve,Ne.data);else if(T.isData3DTexture)Z?(Be&&t.texStorage3D(i.TEXTURE_3D,Ke,Se,Ne.width,Ne.height,Ne.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Fe,ve,Ne.data)):t.texImage3D(i.TEXTURE_3D,0,Se,Ne.width,Ne.height,Ne.depth,0,Fe,ve,Ne.data);else if(T.isFramebufferTexture){if(Be)if(Z)t.texStorage2D(i.TEXTURE_2D,Ke,Se,Ne.width,Ne.height);else{let re=Ne.width,ee=Ne.height;for(let Te=0;Te<Ke;Te++)t.texImage2D(i.TEXTURE_2D,Te,Se,re,ee,0,Fe,ve,null),re>>=1,ee>>=1}}else if(We.length>0){if(Z&&Be){const re=oe(We[0]);t.texStorage2D(i.TEXTURE_2D,Ke,Se,re.width,re.height)}for(let re=0,ee=We.length;re<ee;re++)Ee=We[re],Z?Ve&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Fe,ve,Ee):t.texImage2D(i.TEXTURE_2D,re,Se,Fe,ve,Ee);T.generateMipmaps=!1}else if(Z){if(Be){const re=oe(Ne);t.texStorage2D(i.TEXTURE_2D,Ke,Se,re.width,re.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,ve,Ne)}else t.texImage2D(i.TEXTURE_2D,0,Se,Fe,ve,Ne);m(T)&&u(ne),ke.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function te(P,T,W){if(T.image.length!==6)return;const ne=Q(P,T),be=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const me=n.get(be);if(be.version!==me.__version||ne===!0){t.activeTexture(i.TEXTURE0+W);const ke=Yt.getPrimaries(Yt.workingColorSpace),Le=T.colorSpace===ro?null:Yt.getPrimaries(T.colorSpace),He=T.colorSpace===ro||ke===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,Ne=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let ee=0;ee<6;ee++)!Ze&&!Ne?Fe[ee]=S(T.image[ee],!0,o.maxCubemapSize):Fe[ee]=Ne?T.image[ee].image:T.image[ee],Fe[ee]=Me(T,Fe[ee]);const ve=Fe[0],Se=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),We=M(T.internalFormat,Se,Ee,T.colorSpace),Z=T.isVideoTexture!==!0,Be=me.__version===void 0||ne===!0,Ve=be.dataReady;let Ke=A(T,ve);H(i.TEXTURE_CUBE_MAP,T);let re;if(Ze){Z&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,We,ve.width,ve.height);for(let ee=0;ee<6;ee++){re=Fe[ee].mipmaps;for(let Te=0;Te<re.length;Te++){const Ye=re[Te];T.format!==ui?Se!==null?Z?Ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ye.width,Ye.height,Se,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,We,Ye.width,Ye.height,0,Ye.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ye.width,Ye.height,Se,Ee,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,We,Ye.width,Ye.height,0,Se,Ee,Ye.data)}}}else{if(re=T.mipmaps,Z&&Be){re.length>0&&Ke++;const ee=oe(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ne){Z?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe[ee].width,Fe[ee].height,Se,Ee,Fe[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Fe[ee].width,Fe[ee].height,0,Se,Ee,Fe[ee].data);for(let Te=0;Te<re.length;Te++){const ut=re[Te].image[ee].image;Z?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ut.width,ut.height,Se,Ee,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,We,ut.width,ut.height,0,Se,Ee,ut.data)}}else{Z?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se,Ee,Fe[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Se,Ee,Fe[ee]);for(let Te=0;Te<re.length;Te++){const Ye=re[Te];Z?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Se,Ee,Ye.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,We,Se,Ee,Ye.image[ee])}}}m(T)&&u(i.TEXTURE_CUBE_MAP),me.__version=be.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function $(P,T,W,ne,be,me){const ke=s.convert(W.format,W.colorSpace),Le=s.convert(W.type),He=M(W.internalFormat,ke,Le,W.colorSpace),Ze=n.get(T),Ne=n.get(W);if(Ne.__renderTarget=T,!Ze.__hasExternalTextures){const Fe=Math.max(1,T.width>>me),ve=Math.max(1,T.height>>me);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,me,He,Fe,ve,T.depth,0,ke,Le,null):t.texImage2D(be,me,He,Fe,ve,0,ke,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ae(T)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,be,Ne.__webglTexture,0,E(T)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,be,Ne.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const ne=T.depthTexture,be=ne&&ne.isDepthTexture?ne.type:null,me=w(T.stencilBuffer,be),ke=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(T)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(T),me,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(T),me,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,P)}else{const ne=T.textures;for(let be=0;be<ne.length;be++){const me=ne[be],ke=s.convert(me.format,me.colorSpace),Le=s.convert(me.type),He=M(me.internalFormat,ke,Le,me.colorSpace);ae(T)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,E(T),He,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,E(T),He,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,He,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(P,T,W){const ne=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=n.get(T.depthTexture);if(be.__renderTarget=T,(!be.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ne){if(be.__webglInit===void 0&&(be.__webglInit=!0,T.depthTexture.addEventListener("dispose",y)),be.__webglTexture===void 0){be.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,be.__webglTexture),H(i.TEXTURE_CUBE_MAP,T.depthTexture);const Ze=s.convert(T.depthTexture.format),Ne=s.convert(T.depthTexture.type);let Fe;T.depthTexture.format===Yi?Fe=i.DEPTH_COMPONENT24:T.depthTexture.format===yo&&(Fe=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Fe,T.width,T.height,0,Ze,Ne,null)}}else k(T.depthTexture,0);const me=be.__webglTexture,ke=E(T),Le=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,He=T.depthTexture.format===yo?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Yi)ae(T)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,Le,me,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,He,Le,me,0);else if(T.depthTexture.format===yo)ae(T)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,Le,me,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,He,Le,me,0);else throw new Error("Unknown depthTexture format")}function se(P){const T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){const be=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",be)};ne.addEventListener("dispose",be),T.__depthDisposeCallback=be}T.__boundDepthTexture=ne}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ne=0;ne<6;ne++)pe(T.__webglFramebuffer[ne],P,ne);else{const ne=P.texture.mipmaps;ne&&ne.length>0?pe(T.__webglFramebuffer[0],P,0):pe(T.__webglFramebuffer,P,0)}else if(W){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=i.createRenderbuffer(),q(T.__webglDepthbuffer[ne],P,!1);else{const be=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,me)}}else{const ne=P.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),q(T.__webglDepthbuffer,P,!1);else{const be=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(P,T,W){const ne=n.get(P);T!==void 0&&$(ne.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&se(P)}function de(P){const T=P.texture,W=n.get(P),ne=n.get(T);P.addEventListener("dispose",C);const be=P.textures,me=P.isWebGLCubeRenderTarget===!0,ke=be.length>1;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=T.version,a.memory.textures++),me){W.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Le]=[];for(let He=0;He<T.mipmaps.length;He++)W.__webglFramebuffer[Le][He]=i.createFramebuffer()}else W.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)W.__webglFramebuffer[Le]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Le=0,He=be.length;Le<He;Le++){const Ze=n.get(be[Le]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ae(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){const He=be[Le];W.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Le]);const Ze=s.convert(He.format,He.colorSpace),Ne=s.convert(He.type),Fe=M(He.internalFormat,Ze,Ne,He.colorSpace,P.isXRRenderTarget===!0),ve=E(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Fe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,W.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),q(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),H(i.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)$(W.__webglFramebuffer[Le][He],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He);else $(W.__webglFramebuffer[Le],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(T)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Le=0,He=be.length;Le<He;Le++){const Ze=be[Le],Ne=n.get(Ze);let Fe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Fe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ne.__webglTexture),H(Fe,Ze),$(W.__webglFramebuffer,P,Ze,i.COLOR_ATTACHMENT0+Le,Fe,0),m(Ze)&&u(Fe)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,ne.__webglTexture),H(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)$(W.__webglFramebuffer[He],P,T,i.COLOR_ATTACHMENT0,Le,He);else $(W.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,Le,0);m(T)&&u(Le),t.unbindTexture()}P.depthBuffer&&se(P)}function X(P){const T=P.textures;for(let W=0,ne=T.length;W<ne;W++){const be=T[W];if(m(be)){const me=g(P),ke=n.get(be).__webglTexture;t.bindTexture(me,ke),u(me),t.unbindTexture()}}}const j=[],G=[];function B(P){if(P.samples>0){if(ae(P)===!1){const T=P.textures,W=P.width,ne=P.height;let be=i.COLOR_BUFFER_BIT;const me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(P),Le=T.length>1;if(Le)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ze]);const Ne=n.get(T[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,W,ne,0,0,W,ne,be,i.NEAREST),l===!0&&(j.length=0,G.length=0,j.push(i.COLOR_ATTACHMENT0+Ze),P.depthBuffer&&P.resolveDepthBuffer===!1&&(j.push(me),G.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ze]);const Ne=n.get(T[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function E(P){return Math.min(o.maxSamples,P.samples)}function ae(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(P){const T=a.render.frame;d.get(P)!==T&&(d.set(P,T),P.update())}function Me(P,T){const W=P.colorSpace,ne=P.format,be=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==us&&W!==ro&&(Yt.getTransfer(W)===en?(ne!==ui||be!==ti)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",W)),T}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=he,this.rebindTextures=Pe,this.setupRenderTarget=de,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Uv(i,e){function t(n,o=ro){let s;const a=Yt.getTransfer(o);if(n===ti)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zu)return i.BYTE;if(n===ku)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===ui)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===yo)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Za||n===$a||n===Ja||n===Ka)if(a===en)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bl||n===zl)return a===en?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return s.COMPRESSED_R11_EAC;if(n===Gl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hl)return s.COMPRESSED_RG11_EAC;if(n===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===jl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return a===en?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===ac||n===rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return a===en?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===uc||n===dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
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

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Nv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new I(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bv extends vs{constructor(e,t){super();const n=this;let o=null,s=1,a=null,r="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,v=null;const S=typeof XRWebGLBinding<"u",m=new Ov,u={},g=t.getContextAttributes();let M=null,w=null;const A=[],y=[],C=new Ue;let _=null;const b=new Xn;b.viewport=new hn;const x=new Xn;x.viewport=new hn;const R=[b,x],U=new qh;let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=A[V];return te===void 0&&(te=new Or,A[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=A[V];return te===void 0&&(te=new Or,A[V]=te),te.getGripSpace()},this.getHand=function(V){let te=A[V];return te===void 0&&(te=new Or,A[V]=te),te.getHandSpace()};function k(V){const te=y.indexOf(V.inputSource);if(te===-1)return;const $=A[te];$!==void 0&&($.update(V.inputSource,V.frame,c||a),$.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){o.removeEventListener("select",k),o.removeEventListener("selectstart",k),o.removeEventListener("selectend",k),o.removeEventListener("squeeze",k),o.removeEventListener("squeezestart",k),o.removeEventListener("squeezeend",k),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",K);for(let V=0;V<A.length;V++){const te=y[V];te!==null&&(y[V]=null,A[V].disconnect(te))}O=null,N=null,m.reset();for(const V in u)delete u[V];e.setRenderTarget(M),p=null,f=null,h=null,o=null,w=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){r=V,n.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(o,t)),h},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(V){if(o=V,o!==null){if(M=e.getRenderTarget(),o.addEventListener("select",k),o.addEventListener("selectstart",k),o.addEventListener("selectend",k),o.addEventListener("squeeze",k),o.addEventListener("squeezestart",k),o.addEventListener("squeezeend",k),o.addEventListener("end",z),o.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,q=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?yo:Yi,q=g.stencil?Ys:Li);const se={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(se),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Hn(f.textureWidth,f.textureHeight,{format:ui,type:ti,depthTexture:new Eo(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(o,t,$),o.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Hn(p.framebufferWidth,p.framebufferHeight,{format:ui,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await o.requestReferenceSpace(r),ge.setContext(o),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(V){for(let te=0;te<V.removed.length;te++){const $=V.removed[te],q=y.indexOf($);q>=0&&(y[q]=null,A[q].disconnect($))}for(let te=0;te<V.added.length;te++){const $=V.added[te];let q=y.indexOf($);if(q===-1){for(let se=0;se<A.length;se++)if(se>=y.length){y.push($),q=se;break}else if(y[se]===null){y[se]=$,q=se;break}if(q===-1)break}const pe=A[q];pe&&pe.connect($)}}const he=new L,J=new L;function ie(V,te,$){he.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition($.matrixWorld);const q=he.distanceTo(J),pe=te.projectionMatrix.elements,se=$.projectionMatrix.elements,Pe=pe[14]/(pe[10]-1),de=pe[14]/(pe[10]+1),X=(pe[9]+1)/pe[5],j=(pe[9]-1)/pe[5],G=(pe[8]-1)/pe[0],B=(se[8]+1)/se[0],E=Pe*G,ae=Pe*B,xe=q/(-G+B),Me=xe*-G;if(te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Me),V.translateZ(xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),pe[10]===-1)V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const oe=Pe+xe,P=de+xe,T=E-Me,W=ae+(q-Me),ne=X*de/P*oe,be=j*de/P*oe;V.projectionMatrix.makePerspective(T,W,ne,be,oe,P),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function F(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(o===null)return;let te=V.near,$=V.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&($=m.depthFar)),U.near=x.near=b.near=te,U.far=x.far=b.far=$,(O!==U.near||N!==U.far)&&(o.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,N=U.far),U.layers.mask=V.layers.mask|6,b.layers.mask=U.layers.mask&-5,x.layers.mask=U.layers.mask&-3;const q=V.parent,pe=U.cameras;F(U,q);for(let se=0;se<pe.length;se++)F(pe[se],q);pe.length===2?ie(U,b,x):U.projectionMatrix.copy(b.projectionMatrix),H(V,U,q)};function H(V,te,$){$===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy($.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ds*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(V){return u[V]};let Q=null;function Y(V,te){if(d=te.getViewerPose(c||a),v=te,d!==null){const $=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let q=!1;$.length!==U.cameras.length&&(U.cameras.length=0,q=!0);for(let de=0;de<$.length;de++){const X=$[de];let j=null;if(p!==null)j=p.getViewport(X);else{const B=h.getViewSubImage(f,X);j=B.viewport,de===0&&(e.setRenderTargetTextures(w,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(w))}let G=R[de];G===void 0&&(G=new Xn,G.layers.enable(de),G.viewport=new hn,R[de]=G),G.matrix.fromArray(X.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(X.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(j.x,j.y,j.width,j.height),de===0&&(U.matrix.copy(G.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),q===!0&&U.cameras.push(G)}const pe=o.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&S){h=n.getBinding();const de=h.getDepthInformation($[0]);de&&de.isValid&&de.texture&&m.init(de,o.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),h=n.getBinding();for(let de=0;de<$.length;de++){const X=$[de].camera;if(X){let j=u[X];j||(j=new Ku,u[X]=j);const G=h.getCameraImage(X);j.sourceTexture=G}}}}for(let $=0;$<A.length;$++){const q=y[$],pe=A[$];q!==null&&pe!==void 0&&pe.update(q,te,c||a)}Q&&Q(V,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const ge=new fd;ge.setAnimationLoop(Y),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const vo=new ii,zv=new Vt;function kv(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ld(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function o(m,u,g,M,w){u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,w)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&r(m,u)):u.isPointsMaterial?l(m,u,g,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),M=g.envMap,w=g.envMapRotation;M&&(m.envMap.value=M,vo.copy(w),vo.x*=-1,vo.y*=-1,vo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vo.y*=-1,vo.z*=-1),m.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(vo)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function r(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Vv(i,e,t,n){let o={},s={},a=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,M){const w=M.program;n.uniformBlockBinding(g,w)}function c(g,M){let w=o[g.id];w===void 0&&(v(g),w=d(g),o[g.id]=w,g.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(g,A);const y=e.render.frame;s[g.id]!==y&&(f(g),s[g.id]=y)}function d(g){const M=h();g.__bindingPointIndex=M;const w=i.createBuffer(),A=g.__size,y=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function h(){for(let g=0;g<r;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const M=o[g.id],w=g.uniforms,A=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,C=w.length;y<C;y++){const _=Array.isArray(w[y])?w[y]:[w[y]];for(let b=0,x=_.length;b<x;b++){const R=_[b];if(p(R,y,b,A)===!0){const U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let k=0;k<O.length;k++){const z=O[k],K=S(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,U+N,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,N),N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(g,M,w,A){const y=g.value,C=M+"_"+w;if(A[C]===void 0)return typeof y=="number"||typeof y=="boolean"?A[C]=y:A[C]=y.clone(),!0;{const _=A[C];if(typeof y=="number"||typeof y=="boolean"){if(_!==y)return A[C]=y,!0}else if(_.equals(y)===!1)return _.copy(y),!0}return!1}function v(g){const M=g.uniforms;let w=0;const A=16;for(let C=0,_=M.length;C<_;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let x=0,R=b.length;x<R;x++){const U=b[x],O=Array.isArray(U.value)?U.value:[U.value];for(let N=0,k=O.length;N<k;N++){const z=O[N],K=S(z),he=w%A,J=he%K.boundary,ie=he+J;w+=J,ie!==0&&A-ie<K.storage&&(w+=A-ie),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=K.storage}}}const y=w%A;return y>0&&(w+=A-y),g.__size=w,g.__cache={},this}function S(g){const M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=48,M.storage=48):g.isMatrix4?(M.boundary=64,M.storage=64):g.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):St("WebGLRenderer: Unsupported uniform value type.",g),M}function m(g){const M=g.target;M.removeEventListener("dispose",m);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(o[M.id]),delete o[M.id],delete s[M.id]}function u(){for(const g in o)i.deleteBuffer(o[g]);a=[],o={},s={}}return{bind:l,update:c,dispose:u}}const Gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function Hv(){return Ai===null&&(Ai=new Yc(Gv,16,16,cs,qn),Ai.name="DFG_LUT",Ai.minFilter=_n,Ai.magFilter=_n,Ai.wrapS=kn,Ai.wrapT=kn,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class Wv{constructor(e={}){const{canvas:t=gf(),context:n=null,depth:o=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ti}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const S=p,m=new Set([Bc,Oc,Fc]),u=new Set([ti,Li,qs,Ys,Dc,Uc]),g=new Uint32Array(4),M=new Int32Array(4);let w=null,A=null;const y=[],C=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let x=!1;this._outputColorSpace=jt;let R=0,U=0,O=null,N=-1,k=null;const z=new hn,K=new hn;let he=null;const J=new ze(0);let ie=0,F=t.width,H=t.height,Q=1,Y=null,ge=null;const V=new hn(0,0,F,H),te=new hn(0,0,F,H);let $=!1;const q=new Zc;let pe=!1,se=!1;const Pe=new Vt,de=new L,X=new hn,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function B(){return O===null?Q:1}let E=n;function ae(D,fe){return t.getContext(D,fe)}try{const D={alpha:!0,depth:o,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",ut,!1),E===null){const fe="webgl2";if(E=ae(fe,D),E===null)throw ae(fe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Xt("WebGLRenderer: "+D.message),D}let xe,Me,oe,P,T,W,ne,be,me,ke,Le,He,Ze,Ne,Fe,ve,Se,Ee,We,Z,Be,Ve,Ke;function re(){xe=new Wg(E),xe.init(),Be=new Uv(E,xe),Me=new Fg(E,xe,e,Be),oe=new Lv(E,xe),Me.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),P=new qg(E),T=new vv,W=new Dv(E,xe,oe,T,Me,Be,P),ne=new Hg(b),be=new Kh(E),Ve=new Ug(E,be),me=new Xg(E,be,P,Ve),ke=new Zg(E,me,be,Ve,P),Ee=new Yg(E,Me,W),Fe=new Og(T),Le=new xv(b,ne,xe,Me,Ve,Fe),He=new kv(b,T),Ze=new Mv,Ne=new Av(xe),Se=new Dg(b,ne,oe,ke,v,l),ve=new Iv(b,ke,Me),Ke=new Vv(E,P,Me,oe),We=new Ng(E,xe,P),Z=new jg(E,xe,P),P.programs=Le.programs,b.capabilities=Me,b.extensions=xe,b.properties=T,b.renderLists=Ze,b.shadowMap=ve,b.state=oe,b.info=P}re(),S!==ti&&(_=new Jg(S,t.width,t.height,o,s));const ee=new Bv(b,E);this.xr=ee,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const D=xe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(D){D!==void 0&&(Q=D,this.setSize(F,H,!1))},this.getSize=function(D){return D.set(F,H)},this.setSize=function(D,fe,Ce=!0){if(ee.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,H=fe,t.width=Math.floor(D*Q),t.height=Math.floor(fe*Q),Ce===!0&&(t.style.width=D+"px",t.style.height=fe+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,D,fe)},this.getDrawingBufferSize=function(D){return D.set(F*Q,H*Q).floor()},this.setDrawingBufferSize=function(D,fe,Ce){F=D,H=fe,Q=Ce,t.width=Math.floor(D*Ce),t.height=Math.floor(fe*Ce),this.setViewport(0,0,D,fe)},this.setEffects=function(D){if(S===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let fe=0;fe<D.length;fe++)if(D[fe].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(V)},this.setViewport=function(D,fe,Ce,le){D.isVector4?V.set(D.x,D.y,D.z,D.w):V.set(D,fe,Ce,le),oe.viewport(z.copy(V).multiplyScalar(Q).round())},this.getScissor=function(D){return D.copy(te)},this.setScissor=function(D,fe,Ce,le){D.isVector4?te.set(D.x,D.y,D.z,D.w):te.set(D,fe,Ce,le),oe.scissor(K.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(D){oe.setScissorTest($=D)},this.setOpaqueSort=function(D){Y=D},this.setTransparentSort=function(D){ge=D},this.getClearColor=function(D){return D.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(D=!0,fe=!0,Ce=!0){let le=0;if(D){let ce=!1;if(O!==null){const qe=O.texture.format;ce=m.has(qe)}if(ce){const qe=O.texture.type,Qe=u.has(qe),tt=Se.getClearColor(),ct=Se.getClearAlpha(),Ae=tt.r,je=tt.g,Oe=tt.b;Qe?(g[0]=Ae,g[1]=je,g[2]=Oe,g[3]=ct,E.clearBufferuiv(E.COLOR,0,g)):(M[0]=Ae,M[1]=je,M[2]=Oe,M[3]=ct,E.clearBufferiv(E.COLOR,0,M))}else le|=E.COLOR_BUFFER_BIT}fe&&(le|=E.DEPTH_BUFFER_BIT),Ce&&(le|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&E.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Se.dispose(),Ze.dispose(),Ne.dispose(),T.dispose(),ne.dispose(),ke.dispose(),Ve.dispose(),Ke.dispose(),Le.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Tn),ee.removeEventListener("sessionend",_e),ye.stop()};function Te(D){D.preventDefault(),or("WebGLRenderer: Context Lost."),x=!0}function Ye(){or("WebGLRenderer: Context Restored."),x=!1;const D=P.autoReset,fe=ve.enabled,Ce=ve.autoUpdate,le=ve.needsUpdate,ce=ve.type;re(),P.autoReset=D,ve.enabled=fe,ve.autoUpdate=Ce,ve.needsUpdate=le,ve.type=ce}function ut(D){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function gt(D){const fe=D.target;fe.removeEventListener("dispose",gt),Ct(fe)}function Ct(D){Gt(D),T.remove(D)}function Gt(D){const fe=T.get(D).programs;fe!==void 0&&(fe.forEach(function(Ce){Le.releaseProgram(Ce)}),D.isShaderMaterial&&Le.releaseShaderCache(D))}this.renderBufferDirect=function(D,fe,Ce,le,ce,qe){fe===null&&(fe=j);const Qe=ce.isMesh&&ce.matrixWorld.determinant()<0,tt=Pn(D,fe,Ce,le,ce);oe.setMaterial(le,Qe);let ct=Ce.index,Ae=1;if(le.wireframe===!0){if(ct=me.getWireframeAttribute(Ce),ct===void 0)return;Ae=2}const je=Ce.drawRange,Oe=Ce.attributes.position;let Je=je.start*Ae,nt=(je.start+je.count)*Ae;qe!==null&&(Je=Math.max(Je,qe.start*Ae),nt=Math.min(nt,(qe.start+qe.count)*Ae)),ct!==null?(Je=Math.max(Je,0),nt=Math.min(nt,ct.count)):Oe!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Oe.count));const ht=nt-Je;if(ht<0||ht===1/0)return;Ve.setup(ce,le,tt,Ce,ct);let Mt,Tt=We;if(ct!==null&&(Mt=be.get(ct),Tt=Z,Tt.setIndex(Mt)),ce.isMesh)le.wireframe===!0?(oe.setLineWidth(le.wireframeLinewidth*B()),Tt.setMode(E.LINES)):Tt.setMode(E.TRIANGLES);else if(ce.isLine){let Ot=le.linewidth;Ot===void 0&&(Ot=1),oe.setLineWidth(Ot*B()),ce.isLineSegments?Tt.setMode(E.LINES):ce.isLineLoop?Tt.setMode(E.LINE_LOOP):Tt.setMode(E.LINE_STRIP)}else ce.isPoints?Tt.setMode(E.POINTS):ce.isSprite&&Tt.setMode(E.TRIANGLES);if(ce.isBatchedMesh)if(ce._multiDrawInstances!==null)sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Tt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const Ot=ce._multiDrawStarts,rt=ce._multiDrawCounts,Ft=ce._multiDrawCount,ue=ct?be.get(ct).bytesPerElement:1,Ge=T.get(le).currentProgram.getUniforms();for(let ot=0;ot<Ft;ot++)Ge.setValue(E,"_gl_DrawID",ot),Tt.render(Ot[ot]/ue,rt[ot])}else if(ce.isInstancedMesh)Tt.renderInstances(Je,ht,ce.count);else if(Ce.isInstancedBufferGeometry){const Ot=Ce._maxInstanceCount!==void 0?Ce._maxInstanceCount:1/0,rt=Math.min(Ce.instanceCount,Ot);Tt.renderInstances(Je,ht,rt)}else Tt.render(Je,ht)};function un(D,fe,Ce){D.transparent===!0&&D.side===on&&D.forceSinglePass===!1?(D.side=Rn,D.needsUpdate=!0,Ht(D,fe,Ce),D.side=qi,D.needsUpdate=!0,Ht(D,fe,Ce),D.side=on):Ht(D,fe,Ce)}this.compile=function(D,fe,Ce=null){Ce===null&&(Ce=D),A=Ne.get(Ce),A.init(fe),C.push(A),Ce.traverseVisible(function(ce){ce.isLight&&ce.layers.test(fe.layers)&&(A.pushLight(ce),ce.castShadow&&A.pushShadow(ce))}),D!==Ce&&D.traverseVisible(function(ce){ce.isLight&&ce.layers.test(fe.layers)&&(A.pushLight(ce),ce.castShadow&&A.pushShadow(ce))}),A.setupLights();const le=new Set;return D.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const qe=ce.material;if(qe)if(Array.isArray(qe))for(let Qe=0;Qe<qe.length;Qe++){const tt=qe[Qe];un(tt,Ce,ce),le.add(tt)}else un(qe,Ce,ce),le.add(qe)}),A=C.pop(),le},this.compileAsync=function(D,fe,Ce=null){const le=this.compile(D,fe,Ce);return new Promise(ce=>{function qe(){if(le.forEach(function(Qe){T.get(Qe).currentProgram.isReady()&&le.delete(Qe)}),le.size===0){ce(D);return}setTimeout(qe,10)}xe.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let gn=null;function ln(D){gn&&gn(D)}function Tn(){ye.stop()}function _e(){ye.start()}const ye=new fd;ye.setAnimationLoop(ln),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(D){gn=D,ee.setAnimationLoop(D),D===null?ye.stop():ye.start()},ee.addEventListener("sessionstart",Tn),ee.addEventListener("sessionend",_e),this.render=function(D,fe){if(fe!==void 0&&fe.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;const Ce=ee.enabled===!0&&ee.isPresenting===!0,le=_!==null&&(O===null||Ce)&&_.begin(b,O);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),fe.parent===null&&fe.matrixWorldAutoUpdate===!0&&fe.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(fe),fe=ee.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,fe,O),A=Ne.get(D,C.length),A.init(fe),C.push(A),Pe.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),q.setFromProjectionMatrix(Pe,Ri,fe.reversedDepth),se=this.localClippingEnabled,pe=Fe.init(this.clippingPlanes,se),w=Ze.get(D,y.length),w.init(),y.push(w),ee.enabled===!0&&ee.isPresenting===!0){const Qe=b.xr.getDepthSensingMesh();Qe!==null&&De(Qe,fe,-1/0,b.sortObjects)}De(D,fe,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(Y,ge),G=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,G&&Se.addToRenderList(w,D),this.info.render.frame++,pe===!0&&Fe.beginShadows();const ce=A.state.shadowsArray;if(ve.render(ce,D,fe),pe===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&_.hasRenderPass())===!1){const Qe=w.opaque,tt=w.transmissive;if(A.setupLights(),fe.isArrayCamera){const ct=fe.cameras;if(tt.length>0)for(let Ae=0,je=ct.length;Ae<je;Ae++){const Oe=ct[Ae];dt(Qe,tt,D,Oe)}G&&Se.render(D);for(let Ae=0,je=ct.length;Ae<je;Ae++){const Oe=ct[Ae];it(w,D,Oe,Oe.viewport)}}else tt.length>0&&dt(Qe,tt,D,fe),G&&Se.render(D),it(w,D,fe)}O!==null&&U===0&&(W.updateMultisampleRenderTarget(O),W.updateRenderTargetMipmap(O)),le&&_.end(b),D.isScene===!0&&D.onAfterRender(b,D,fe),Ve.resetDefaultState(),N=-1,k=null,C.pop(),C.length>0?(A=C[C.length-1],pe===!0&&Fe.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?w=y[y.length-1]:w=null};function De(D,fe,Ce,le){if(D.visible===!1)return;if(D.layers.test(fe.layers)){if(D.isGroup)Ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(fe);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||q.intersectsSprite(D)){le&&X.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Pe);const Qe=ke.update(D),tt=D.material;tt.visible&&w.push(D,Qe,tt,Ce,X.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||q.intersectsObject(D))){const Qe=ke.update(D),tt=D.material;if(le&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),X.copy(D.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),X.copy(Qe.boundingSphere.center)),X.applyMatrix4(D.matrixWorld).applyMatrix4(Pe)),Array.isArray(tt)){const ct=Qe.groups;for(let Ae=0,je=ct.length;Ae<je;Ae++){const Oe=ct[Ae],Je=tt[Oe.materialIndex];Je&&Je.visible&&w.push(D,Qe,Je,Ce,X.z,Oe)}}else tt.visible&&w.push(D,Qe,tt,Ce,X.z,null)}}const qe=D.children;for(let Qe=0,tt=qe.length;Qe<tt;Qe++)De(qe[Qe],fe,Ce,le)}function it(D,fe,Ce,le){const{opaque:ce,transmissive:qe,transparent:Qe}=D;A.setupLightsView(Ce),pe===!0&&Fe.setGlobalState(b.clippingPlanes,Ce),le&&oe.viewport(z.copy(le)),ce.length>0&&yt(ce,fe,Ce),qe.length>0&&yt(qe,fe,Ce),Qe.length>0&&yt(Qe,fe,Ce),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function dt(D,fe,Ce,le){if((Ce.isScene===!0?Ce.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[le.id]===void 0){const Je=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[le.id]=new Hn(1,1,{generateMipmaps:!0,type:Je?qn:ti,minFilter:So,samples:Math.max(4,Me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const qe=A.state.transmissionRenderTarget[le.id],Qe=le.viewport||z;qe.setSize(Qe.z*b.transmissionResolutionScale,Qe.w*b.transmissionResolutionScale);const tt=b.getRenderTarget(),ct=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(qe),b.getClearColor(J),ie=b.getClearAlpha(),ie<1&&b.setClearColor(16777215,.5),b.clear(),G&&Se.render(Ce);const je=b.toneMapping;b.toneMapping=Pi;const Oe=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),A.setupLightsView(le),pe===!0&&Fe.setGlobalState(b.clippingPlanes,le),yt(D,Ce,le),W.updateMultisampleRenderTarget(qe),W.updateRenderTargetMipmap(qe),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let nt=0,ht=fe.length;nt<ht;nt++){const Mt=fe[nt],{object:Tt,geometry:Ot,material:rt,group:Ft}=Mt;if(rt.side===on&&Tt.layers.test(le.layers)){const ue=rt.side;rt.side=Rn,rt.needsUpdate=!0,bt(Tt,Ce,le,Ot,rt,Ft),rt.side=ue,rt.needsUpdate=!0,Je=!0}}Je===!0&&(W.updateMultisampleRenderTarget(qe),W.updateRenderTargetMipmap(qe))}b.setRenderTarget(tt,ct,Ae),b.setClearColor(J,ie),Oe!==void 0&&(le.viewport=Oe),b.toneMapping=je}function yt(D,fe,Ce){const le=fe.isScene===!0?fe.overrideMaterial:null;for(let ce=0,qe=D.length;ce<qe;ce++){const Qe=D[ce],{object:tt,geometry:ct,group:Ae}=Qe;let je=Qe.material;je.allowOverride===!0&&le!==null&&(je=le),tt.layers.test(Ce.layers)&&bt(tt,fe,Ce,ct,je,Ae)}}function bt(D,fe,Ce,le,ce,qe){D.onBeforeRender(b,fe,Ce,le,ce,qe),D.modelViewMatrix.multiplyMatrices(Ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ce.onBeforeRender(b,fe,Ce,le,D,qe),ce.transparent===!0&&ce.side===on&&ce.forceSinglePass===!1?(ce.side=Rn,ce.needsUpdate=!0,b.renderBufferDirect(Ce,fe,le,ce,D,qe),ce.side=qi,ce.needsUpdate=!0,b.renderBufferDirect(Ce,fe,le,ce,D,qe),ce.side=on):b.renderBufferDirect(Ce,fe,le,ce,D,qe),D.onAfterRender(b,fe,Ce,le,ce,qe)}function Ht(D,fe,Ce){fe.isScene!==!0&&(fe=j);const le=T.get(D),ce=A.state.lights,qe=A.state.shadowsArray,Qe=ce.state.version,tt=Le.getParameters(D,ce.state,qe,fe,Ce),ct=Le.getProgramCacheKey(tt);let Ae=le.programs;le.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?fe.environment:null,le.fog=fe.fog;const je=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;le.envMap=ne.get(D.envMap||le.environment,je),le.envMapRotation=le.environment!==null&&D.envMap===null?fe.environmentRotation:D.envMapRotation,Ae===void 0&&(D.addEventListener("dispose",gt),Ae=new Map,le.programs=Ae);let Oe=Ae.get(ct);if(Oe!==void 0){if(le.currentProgram===Oe&&le.lightsStateVersion===Qe)return cn(D,tt),Oe}else tt.uniforms=Le.getUniforms(D),D.onBeforeCompile(tt,b),Oe=Le.acquireProgram(tt,ct),Ae.set(ct,Oe),le.uniforms=tt.uniforms;const Je=le.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Je.clippingPlanes=Fe.uniform),cn(D,tt),le.needsLights=Fn(D),le.lightsStateVersion=Qe,le.needsLights&&(Je.ambientLightColor.value=ce.state.ambient,Je.lightProbe.value=ce.state.probe,Je.directionalLights.value=ce.state.directional,Je.directionalLightShadows.value=ce.state.directionalShadow,Je.spotLights.value=ce.state.spot,Je.spotLightShadows.value=ce.state.spotShadow,Je.rectAreaLights.value=ce.state.rectArea,Je.ltc_1.value=ce.state.rectAreaLTC1,Je.ltc_2.value=ce.state.rectAreaLTC2,Je.pointLights.value=ce.state.point,Je.pointLightShadows.value=ce.state.pointShadow,Je.hemisphereLights.value=ce.state.hemi,Je.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Je.spotLightMatrix.value=ce.state.spotLightMatrix,Je.spotLightMap.value=ce.state.spotLightMap,Je.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.currentProgram=Oe,le.uniformsList=null,Oe}function Wt(D){if(D.uniformsList===null){const fe=D.currentProgram.getUniforms();D.uniformsList=Qa.seqWithValue(fe.seq,D.uniforms)}return D.uniformsList}function cn(D,fe){const Ce=T.get(D);Ce.outputColorSpace=fe.outputColorSpace,Ce.batching=fe.batching,Ce.batchingColor=fe.batchingColor,Ce.instancing=fe.instancing,Ce.instancingColor=fe.instancingColor,Ce.instancingMorph=fe.instancingMorph,Ce.skinning=fe.skinning,Ce.morphTargets=fe.morphTargets,Ce.morphNormals=fe.morphNormals,Ce.morphColors=fe.morphColors,Ce.morphTargetsCount=fe.morphTargetsCount,Ce.numClippingPlanes=fe.numClippingPlanes,Ce.numIntersection=fe.numClipIntersection,Ce.vertexAlphas=fe.vertexAlphas,Ce.vertexTangents=fe.vertexTangents,Ce.toneMapping=fe.toneMapping}function Pn(D,fe,Ce,le,ce){fe.isScene!==!0&&(fe=j),W.resetTextureUnits();const qe=fe.fog,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?fe.environment:null,tt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:us,ct=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Ae=ne.get(le.envMap||Qe,ct),je=le.vertexColors===!0&&!!Ce.attributes.color&&Ce.attributes.color.itemSize===4,Oe=!!Ce.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Je=!!Ce.morphAttributes.position,nt=!!Ce.morphAttributes.normal,ht=!!Ce.morphAttributes.color;let Mt=Pi;le.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const Tt=Ce.morphAttributes.position||Ce.morphAttributes.normal||Ce.morphAttributes.color,Ot=Tt!==void 0?Tt.length:0,rt=T.get(le),Ft=A.state.lights;if(pe===!0&&(se===!0||D!==k)){const At=D===k&&le.id===N;Fe.setState(le,D,At)}let ue=!1;le.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Ft.state.version||rt.outputColorSpace!==tt||ce.isBatchedMesh&&rt.batching===!1||!ce.isBatchedMesh&&rt.batching===!0||ce.isBatchedMesh&&rt.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&rt.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&rt.instancing===!1||!ce.isInstancedMesh&&rt.instancing===!0||ce.isSkinnedMesh&&rt.skinning===!1||!ce.isSkinnedMesh&&rt.skinning===!0||ce.isInstancedMesh&&rt.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&rt.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&rt.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&rt.instancingMorph===!1&&ce.morphTexture!==null||rt.envMap!==Ae||le.fog===!0&&rt.fog!==qe||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Fe.numPlanes||rt.numIntersection!==Fe.numIntersection)||rt.vertexAlphas!==je||rt.vertexTangents!==Oe||rt.morphTargets!==Je||rt.morphNormals!==nt||rt.morphColors!==ht||rt.toneMapping!==Mt||rt.morphTargetsCount!==Ot)&&(ue=!0):(ue=!0,rt.__version=le.version);let Ge=rt.currentProgram;ue===!0&&(Ge=Ht(le,fe,ce));let ot=!1,xt=!1,Xe=!1;const ft=Ge.getUniforms(),pt=rt.uniforms;if(oe.useProgram(Ge.program)&&(ot=!0,xt=!0,Xe=!0),le.id!==N&&(N=le.id,xt=!0),ot||k!==D){oe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ft.setValue(E,"projectionMatrix",D.projectionMatrix),ft.setValue(E,"viewMatrix",D.matrixWorldInverse);const Dt=ft.map.cameraPosition;Dt!==void 0&&Dt.setValue(E,de.setFromMatrixPosition(D.matrixWorld)),Me.logarithmicDepthBuffer&&ft.setValue(E,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&ft.setValue(E,"isOrthographic",D.isOrthographicCamera===!0),k!==D&&(k=D,xt=!0,Xe=!0)}if(rt.needsLights&&(Ft.state.directionalShadowMap.length>0&&ft.setValue(E,"directionalShadowMap",Ft.state.directionalShadowMap,W),Ft.state.spotShadowMap.length>0&&ft.setValue(E,"spotShadowMap",Ft.state.spotShadowMap,W),Ft.state.pointShadowMap.length>0&&ft.setValue(E,"pointShadowMap",Ft.state.pointShadowMap,W)),ce.isSkinnedMesh){ft.setOptional(E,ce,"bindMatrix"),ft.setOptional(E,ce,"bindMatrixInverse");const At=ce.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ft.setValue(E,"boneTexture",At.boneTexture,W))}ce.isBatchedMesh&&(ft.setOptional(E,ce,"batchingTexture"),ft.setValue(E,"batchingTexture",ce._matricesTexture,W),ft.setOptional(E,ce,"batchingIdTexture"),ft.setValue(E,"batchingIdTexture",ce._indirectTexture,W),ft.setOptional(E,ce,"batchingColorTexture"),ce._colorsTexture!==null&&ft.setValue(E,"batchingColorTexture",ce._colorsTexture,W));const Lt=Ce.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&Ee.update(ce,Ce,Ge),(xt||rt.receiveShadow!==ce.receiveShadow)&&(rt.receiveShadow=ce.receiveShadow,ft.setValue(E,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&fe.environment!==null&&(pt.envMapIntensity.value=fe.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=Hv()),xt&&(ft.setValue(E,"toneMappingExposure",b.toneMappingExposure),rt.needsLights&&In(pt,Xe),qe&&le.fog===!0&&He.refreshFogUniforms(pt,qe),He.refreshMaterialUniforms(pt,le,Q,H,A.state.transmissionRenderTarget[D.id]),Qa.upload(E,Wt(rt),pt,W)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qa.upload(E,Wt(rt),pt,W),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&ft.setValue(E,"center",ce.center),ft.setValue(E,"modelViewMatrix",ce.modelViewMatrix),ft.setValue(E,"normalMatrix",ce.normalMatrix),ft.setValue(E,"modelMatrix",ce.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const At=le.uniformsGroups;for(let Dt=0,fn=At.length;Dt<fn;Dt++){const An=At[Dt];Ke.update(An,Ge),Ke.bind(An,Ge)}}return Ge}function In(D,fe){D.ambientLightColor.needsUpdate=fe,D.lightProbe.needsUpdate=fe,D.directionalLights.needsUpdate=fe,D.directionalLightShadows.needsUpdate=fe,D.pointLights.needsUpdate=fe,D.pointLightShadows.needsUpdate=fe,D.spotLights.needsUpdate=fe,D.spotLightShadows.needsUpdate=fe,D.rectAreaLights.needsUpdate=fe,D.hemisphereLights.needsUpdate=fe}function Fn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(D,fe,Ce){const le=T.get(D);le.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),T.get(D.texture).__webglTexture=fe,T.get(D.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:Ce,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,fe){const Ce=T.get(D);Ce.__webglFramebuffer=fe,Ce.__useDefaultFramebuffer=fe===void 0};const oi=E.createFramebuffer();this.setRenderTarget=function(D,fe=0,Ce=0){O=D,R=fe,U=Ce;let le=null,ce=!1,qe=!1;if(D){const tt=T.get(D);if(tt.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(E.FRAMEBUFFER,tt.__webglFramebuffer),z.copy(D.viewport),K.copy(D.scissor),he=D.scissorTest,oe.viewport(z),oe.scissor(K),oe.setScissorTest(he),N=-1;return}else if(tt.__webglFramebuffer===void 0)W.setupRenderTarget(D);else if(tt.__hasExternalTextures)W.rebindTextures(D,T.get(D.texture).__webglTexture,T.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const je=D.depthTexture;if(tt.__boundDepthTexture!==je){if(je!==null&&T.has(je)&&(D.width!==je.image.width||D.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(D)}}const ct=D.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(qe=!0);const Ae=T.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ae[fe])?le=Ae[fe][Ce]:le=Ae[fe],ce=!0):D.samples>0&&W.useMultisampledRTT(D)===!1?le=T.get(D).__webglMultisampledFramebuffer:Array.isArray(Ae)?le=Ae[Ce]:le=Ae,z.copy(D.viewport),K.copy(D.scissor),he=D.scissorTest}else z.copy(V).multiplyScalar(Q).floor(),K.copy(te).multiplyScalar(Q).floor(),he=$;if(Ce!==0&&(le=oi),oe.bindFramebuffer(E.FRAMEBUFFER,le)&&oe.drawBuffers(D,le),oe.viewport(z),oe.scissor(K),oe.setScissorTest(he),ce){const tt=T.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt.__webglTexture,Ce)}else if(qe){const tt=fe;for(let ct=0;ct<D.textures.length;ct++){const Ae=T.get(D.textures[ct]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+ct,Ae.__webglTexture,Ce,tt)}}else if(D!==null&&Ce!==0){const tt=T.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,tt.__webglTexture,Ce)}N=-1},this.readRenderTargetPixels=function(D,fe,Ce,le,ce,qe,Qe,tt=0){if(!(D&&D.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(ct=ct[Qe]),ct){oe.bindFramebuffer(E.FRAMEBUFFER,ct);try{const Ae=D.textures[tt],je=Ae.format,Oe=Ae.type;if(D.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+tt),!Me.textureFormatReadable(je)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Oe)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}fe>=0&&fe<=D.width-le&&Ce>=0&&Ce<=D.height-ce&&E.readPixels(fe,Ce,le,ce,Be.convert(je),Be.convert(Oe),qe)}finally{const Ae=O!==null?T.get(O).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(D,fe,Ce,le,ce,qe,Qe,tt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(ct=ct[Qe]),ct)if(fe>=0&&fe<=D.width-le&&Ce>=0&&Ce<=D.height-ce){oe.bindFramebuffer(E.FRAMEBUFFER,ct);const Ae=D.textures[tt],je=Ae.format,Oe=Ae.type;if(D.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+tt),!Me.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Je),E.bufferData(E.PIXEL_PACK_BUFFER,qe.byteLength,E.STREAM_READ),E.readPixels(fe,Ce,le,ce,Be.convert(je),Be.convert(Oe),0);const nt=O!==null?T.get(O).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,nt);const ht=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await xf(E,ht,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Je),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,qe),E.deleteBuffer(Je),E.deleteSync(ht),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,fe=null,Ce=0){const le=Math.pow(2,-Ce),ce=Math.floor(D.image.width*le),qe=Math.floor(D.image.height*le),Qe=fe!==null?fe.x:0,tt=fe!==null?fe.y:0;W.setTexture2D(D,0),E.copyTexSubImage2D(E.TEXTURE_2D,Ce,0,0,Qe,tt,ce,qe),oe.unbindTexture()};const dn=E.createFramebuffer(),Zn=E.createFramebuffer();this.copyTextureToTexture=function(D,fe,Ce=null,le=null,ce=0,qe=0){let Qe,tt,ct,Ae,je,Oe,Je,nt,ht;const Mt=D.isCompressedTexture?D.mipmaps[qe]:D.image;if(Ce!==null)Qe=Ce.max.x-Ce.min.x,tt=Ce.max.y-Ce.min.y,ct=Ce.isBox3?Ce.max.z-Ce.min.z:1,Ae=Ce.min.x,je=Ce.min.y,Oe=Ce.isBox3?Ce.min.z:0;else{const pt=Math.pow(2,-ce);Qe=Math.floor(Mt.width*pt),tt=Math.floor(Mt.height*pt),D.isDataArrayTexture?ct=Mt.depth:D.isData3DTexture?ct=Math.floor(Mt.depth*pt):ct=1,Ae=0,je=0,Oe=0}le!==null?(Je=le.x,nt=le.y,ht=le.z):(Je=0,nt=0,ht=0);const Tt=Be.convert(fe.format),Ot=Be.convert(fe.type);let rt;fe.isData3DTexture?(W.setTexture3D(fe,0),rt=E.TEXTURE_3D):fe.isDataArrayTexture||fe.isCompressedArrayTexture?(W.setTexture2DArray(fe,0),rt=E.TEXTURE_2D_ARRAY):(W.setTexture2D(fe,0),rt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,fe.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,fe.unpackAlignment);const Ft=E.getParameter(E.UNPACK_ROW_LENGTH),ue=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ge=E.getParameter(E.UNPACK_SKIP_PIXELS),ot=E.getParameter(E.UNPACK_SKIP_ROWS),xt=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Mt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Mt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ae),E.pixelStorei(E.UNPACK_SKIP_ROWS,je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Oe);const Xe=D.isDataArrayTexture||D.isData3DTexture,ft=fe.isDataArrayTexture||fe.isData3DTexture;if(D.isDepthTexture){const pt=T.get(D),Lt=T.get(fe),At=T.get(pt.__renderTarget),Dt=T.get(Lt.__renderTarget);oe.bindFramebuffer(E.READ_FRAMEBUFFER,At.__webglFramebuffer),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let fn=0;fn<ct;fn++)Xe&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,T.get(D).__webglTexture,ce,Oe+fn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,T.get(fe).__webglTexture,qe,ht+fn)),E.blitFramebuffer(Ae,je,Qe,tt,Je,nt,Qe,tt,E.DEPTH_BUFFER_BIT,E.NEAREST);oe.bindFramebuffer(E.READ_FRAMEBUFFER,null),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(ce!==0||D.isRenderTargetTexture||T.has(D)){const pt=T.get(D),Lt=T.get(fe);oe.bindFramebuffer(E.READ_FRAMEBUFFER,dn),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,Zn);for(let At=0;At<ct;At++)Xe?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,pt.__webglTexture,ce,Oe+At):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,pt.__webglTexture,ce),ft?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Lt.__webglTexture,qe,ht+At):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Lt.__webglTexture,qe),ce!==0?E.blitFramebuffer(Ae,je,Qe,tt,Je,nt,Qe,tt,E.COLOR_BUFFER_BIT,E.NEAREST):ft?E.copyTexSubImage3D(rt,qe,Je,nt,ht+At,Ae,je,Qe,tt):E.copyTexSubImage2D(rt,qe,Je,nt,Ae,je,Qe,tt);oe.bindFramebuffer(E.READ_FRAMEBUFFER,null),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else ft?D.isDataTexture||D.isData3DTexture?E.texSubImage3D(rt,qe,Je,nt,ht,Qe,tt,ct,Tt,Ot,Mt.data):fe.isCompressedArrayTexture?E.compressedTexSubImage3D(rt,qe,Je,nt,ht,Qe,tt,ct,Tt,Mt.data):E.texSubImage3D(rt,qe,Je,nt,ht,Qe,tt,ct,Tt,Ot,Mt):D.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,qe,Je,nt,Qe,tt,Tt,Ot,Mt.data):D.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,qe,Je,nt,Mt.width,Mt.height,Tt,Mt.data):E.texSubImage2D(E.TEXTURE_2D,qe,Je,nt,Qe,tt,Tt,Ot,Mt);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ft),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ue),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(E.UNPACK_SKIP_ROWS,ot),E.pixelStorei(E.UNPACK_SKIP_IMAGES,xt),qe===0&&fe.generateMipmaps&&E.generateMipmap(rt),oe.unbindTexture()},this.initRenderTarget=function(D){T.get(D).__webglFramebuffer===void 0&&W.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?W.setTextureCube(D,0):D.isData3DTexture?W.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?W.setTexture2DArray(D,0):W.setTexture2D(D,0),oe.unbindTexture()},this.resetState=function(){R=0,U=0,O=null,oe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}}function vd(){const t=document.createElement("canvas");t.width=2048,t.height=1024;const n=t.getContext("2d"),o=n.createLinearGradient(0,0,2048,1024);o.addColorStop(0,"#96633b"),o.addColorStop(.35,"#9d6a40"),o.addColorStop(.7,"#8f5d36"),o.addColorStop(1,"#855530"),n.fillStyle=o,n.fillRect(0,0,2048,1024);for(let c=0;c<240;c++){const d=c*83%1024,h=16+c%24,f=.012+c%5*.003;n.fillStyle=c%2===0?`rgba(60, 34, 14, ${f})`:`rgba(185, 130, 82, ${f})`,n.fillRect(0,d,2048,h)}const s=document.createElement("canvas");s.width=1024,s.height=512,s.getContext("2d").drawImage(t,0,0,1024,512);const r=new zt(t);r.colorSpace=jt,r.wrapS=Ut,r.wrapT=Ut,r.anisotropy=8;const l=new zt(s);return l.wrapS=Ut,l.wrapT=Ut,{colorTex:r,bumpTex:l}}function Xv(){const t=document.createElement("canvas");t.width=1024,t.height=576;const n=t.getContext("2d"),o=n.createLinearGradient(0,0,1024,576);o.addColorStop(0,"#070c1a"),o.addColorStop(.45,"#0b1833"),o.addColorStop(.8,"#1b2442"),o.addColorStop(1,"#30222b"),n.fillStyle=o,n.fillRect(0,0,1024,576),n.strokeStyle="rgba(30, 107, 255, 0.22)",n.lineWidth=1.5;for(let a=320;a<576;a+=28)n.beginPath(),n.moveTo(0,a),n.lineTo(1024,a),n.stroke();for(let a=-200;a<=1224;a+=64)n.beginPath(),n.moveTo(1024/2+(a-1024/2)*.25,320),n.lineTo(a,576),n.stroke();for(let a=0;a<48;a++){const r=140+a*15.5,l=22+Math.sin(a*.42)*48+Math.cos(a*.95)*28,c=n.createLinearGradient(0,290-l,0,290);c.addColorStop(0,"#5ce1ff"),c.addColorStop(.5,"#1e6bff"),c.addColorStop(1,"rgba(30, 107, 255, 0.15)"),n.fillStyle=c,n.fillRect(r,290-l,9,l)}n.fillStyle="rgba(12, 19, 36, 0.82)",n.strokeStyle="rgba(76, 194, 255, 0.35)",n.lineWidth=2,n.fillRect(70,52,884,135),n.strokeRect(70,52,884,135),n.fillStyle="#ffaa44",n.font="bold 24px monospace",n.fillText('LG ULTRAGEAR 27" • 1:87 HO MICRO-COASTER TELEMETRY',98,96),n.fillStyle="#7cd4ff",n.font="18px monospace",n.fillText("SPLINE: 720 PERIODIC C² SAMPLES | LENGTH: 3.837m (333.8m @ 1:87)",98,132),n.fillStyle="#a8b8d0",n.fillText("SECTORS: [1] BOYATA CLIMB [2] CAT 360° HELIX [3] #1E6BFF MIC [4] LAMP SPIRAL",98,164);const s=new zt(t);return s.colorSpace=jt,s}function _d(){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.fillStyle="#0d1017",n.fillRect(0,0,512,128);const o=16;for(let a=0;a<128/o;a++)for(let r=0;r<5;r++)n.fillStyle=(a+r)%2===0?"#ffffff":"#14171f",n.fillRect(r*o,a*o,o,o),n.fillRect(512-(r+1)*o,a*o,o,o);n.fillStyle="#ffaa44",n.font="bold 26px sans-serif",n.textAlign="center",n.fillText("START • FINISH",512/2,54),n.fillStyle="#5ce1ff",n.font="bold 17px monospace",n.fillText("1:87 MICRO-COASTER GRAND PRIX",512/2,88);const s=new zt(t);return s.colorSpace=jt,s}let n0=null,za=null;function Md(){if(za)return za;const i=512,e=512,t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),o=n.createImageData(i,e),s=o.data,a=document.createElement("canvas");a.width=i,a.height=e;const r=a.getContext("2d"),l=r.createImageData(i,e),c=l.data,d=document.createElement("canvas");d.width=i,d.height=e;const h=d.getContext("2d"),f=h.createImageData(i,e),p=f.data;function v(w,A){let y=w*374761393+A*668265263^1542469173;return y=(y^y>>>13)*1274126177,((y^y>>>16)>>>0)/4294967295}function S(w,A,y){const C=w/y,_=A/y,b=Math.floor(C),x=Math.floor(_),R=C-b,U=_-x,O=R*R*(3-2*R),N=U*U*(3-2*U),k=b&511,z=b+1&511,K=x&511,he=x+1&511,J=v(k,K),ie=v(z,K),F=v(k,he),H=v(z,he);return(J*(1-O)+ie*O)*(1-N)+(F*(1-O)+H*O)*N}function m(w,A){const y=S(w,A,3.2),C=S(w+113,A+257,1.7),_=v(w&511,A&511),b=Math.pow(Math.max(0,(y-.34)*1.52),1.28),x=Math.pow(Math.max(0,(C-.44)*1.82),1.38);return $e.clamp(.16+.5*b+.26*x+.08*_,0,1)}for(let w=0;w<e;w++)for(let A=0;A<i;A++){const y=(w*i+A)*4,C=m(A,w),_=m(A+1,w),b=m(A,w+1),x=13+C*64;s[y+0]=Math.round($e.clamp(x,10,94)),s[y+1]=Math.round($e.clamp(x+2,11,97)),s[y+2]=Math.round($e.clamp(x+4,13,104)),s[y+3]=255;const R=(_-C)*3.3,U=(b-C)*3.3,O=$e.clamp(R*.5+.5,.1,.9),N=$e.clamp(U*.5+.5,.1,.9);c[y+0]=Math.round(O*255),c[y+1]=Math.round(N*255),c[y+2]=240,c[y+3]=255;const k=$e.clamp(.94-.34*(C-.24),.6,.96),z=Math.round(k*255);p[y+0]=z,p[y+1]=z,p[y+2]=z,p[y+3]=255}n.putImageData(o,0,0),r.putImageData(l,0,0),h.putImageData(f,0,0);const u=new zt(t);u.colorSpace=jt,u.wrapS=Ut,u.wrapT=Ut,u.anisotropy=16;const g=new zt(a);g.wrapS=Ut,g.wrapT=Ut,g.anisotropy=16;const M=new zt(d);return M.wrapS=Ut,M.wrapT=Ut,M.anisotropy=16,za={trackAsphaltAlbedoTex:u,trackAsphaltNormalTex:g,trackAsphaltRoughnessTex:M},za}function wu(i,e=!1){if(!i||!i.attributes||!i.attributes.position)return;const t=i.attributes.position,n=t.count,o=i.attributes.uv;if(!e&&o&&o.count===n){let l=!1;for(let c=0;c<Math.min(n,64);c++)if(Math.abs(o.getX(c))>1e-4||Math.abs(o.getY(c))>1e-4){l=!0;break}if(l)return}const s=new Float32Array(n*2),a=n0,r=a?a.length:0;if(r>0){const l=new Float32Array(r+1);for(let d=0;d<r;d++){const h=a[d].position,f=a[(d+1)%r].position;l[d+1]=l[d]+Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2])}let c=0;for(let d=0;d<n;d++){const h=t.getX(d),f=t.getY(d),p=t.getZ(d);let v=c,S=1/0;for(let C=-18;C<=18;C++){const _=(c+C+r)%r,b=a[_].position,x=(h-b[0])**2+(f-b[1])**2+(p-b[2])**2;x<S&&(S=x,v=_)}if(S>.025*.025)for(let C=0;C<r;C+=2){const _=a[C].position,b=(h-_[0])**2+(f-_[1])**2+(p-_[2])**2;b<S&&(S=b,v=C)}c=v;const m=a[v],u=h-m.position[0],g=f-m.position[1],M=p-m.position[2],w=u*m.right[0]+g*m.right[1]+M*m.right[2],A=u*m.tangent[0]+g*m.tangent[1]+M*m.tangent[2],y=l[v]+A;s[d*2+0]=.5+w/.0058,s[d*2+1]=y/.0058}}else for(let l=0;l<n;l++){const c=t.getX(l),d=t.getZ(l);s[l*2+0]=c*172,s[l*2+1]=d*172}i.setAttribute("uv",new rn(s,2)),i.attributes.uv.needsUpdate=!0}function Su(i,e=.5,t=!1){if(!i||!i.attributes||!i.attributes.position||i.userData&&i.userData._bumperHeightScaled)return;i.userData=i.userData||{},i.userData._bumperHeightScaled=!0;const n=n0,o=n?n.length:0;if(o===0)return;const s=i.attributes.position,a=s.count;let r=0;for(let l=0;l<a;l++){const c=s.getX(l),d=s.getY(l),h=s.getZ(l);let f=r,p=1/0;for(let y=-18;y<=18;y++){const C=(r+y+o)%o,_=n[C].position,b=(c-_[0])**2+(d-_[1])**2+(h-_[2])**2;b<p&&(p=b,f=C)}if(p>.025*.025)for(let y=0;y<o;y++){const C=n[y].position,_=(c-C[0])**2+(d-C[1])**2+(h-C[2])**2;_<p&&(p=_,f=y)}r=f;let v=n[f].position[0],S=n[f].position[1],m=n[f].position[2],u=n[f].normal[0],g=n[f].normal[1],M=n[f].normal[2],w=1/0;for(const y of[(f-1+o)%o,f]){const C=(y+1)%o,_=n[y].position,b=n[C].position,x=b[0]-_[0],R=b[1]-_[1],U=b[2]-_[2],O=x*x+R*R+U*U,N=O>1e-12?Math.max(0,Math.min(1,((c-_[0])*x+(d-_[1])*R+(h-_[2])*U)/O)):0,k=_[0]+x*N,z=_[1]+R*N,K=_[2]+U*N,he=(c-k)**2+(d-z)**2+(h-K)**2;if(he<w){w=he,v=k,S=z,m=K;const J=n[y].normal,ie=n[C].normal,F=J[0]+(ie[0]-J[0])*N,H=J[1]+(ie[1]-J[1])*N,Q=J[2]+(ie[2]-J[2])*N,Y=Math.hypot(F,H,Q)||1;u=F/Y,g=H/Y,M=Q/Y}}const A=(c-v)*u+(d-S)*g+(h-m)*M;if(A>2e-5){const y=(e-1)*A;s.setXYZ(l,c+u*y,d+g*y,h+M*y)}}s.needsUpdate=!0,t&&i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere()}function wd(i){if(!i||!i.isMesh||!i.geometry||i.userData._spatialChunked)return;const e=i.geometry,t=e.attributes.position;if(!t)return;const n=e.index,o=Math.floor(n?n.count/3:t.count/3);if(o<2e3)return;i.userData._spatialChunked=!0,e.boundingBox||e.computeBoundingBox();const s=e.boundingBox,a=s.min.x+(s.max.x-s.min.x)/3,r=s.min.x+(s.max.x-s.min.x)*2/3,l=(s.min.z+s.max.z)*.5,c=[[],[],[],[],[],[]];for(let S=0;S<o;S++){const m=n?n.getX(S*3+0):S*3+0,u=n?n.getX(S*3+1):S*3+1,g=n?n.getX(S*3+2):S*3+2,M=(t.getX(m)+t.getX(u)+t.getX(g))/3,w=(t.getZ(m)+t.getZ(u)+t.getZ(g))/3,A=M<a?0:M<r?1:2,y=w<l?0:1;c[y*3+A].push(m,u,g)}const d=c.filter(S=>S.length>0);if(d.length<=1)return;const h=Object.keys(e.attributes),f=[];for(const S of d){const m=new Int32Array(t.count).fill(-1),u=[],g=new Uint32Array(S.length);for(let A=0;A<S.length;A++){const y=S[A];let C=m[y];C===-1&&(C=u.length,m[y]=C,u.push(y)),g[A]=C}const M=u.length,w=new Bt;for(const A of h){const y=e.attributes[A],C=y.itemSize,_=y.array.constructor,b=new _(M*C),x=y.array;for(let R=0;R<M;R++){const U=u[R]*C,O=R*C;for(let N=0;N<C;N++)b[O+N]=x[U+N]}w.setAttribute(A,new rn(b,C,y.normalized))}w.setIndex(M<65535?new Xc(new Uint16Array(g),1):new jc(g,1)),w.computeBoundingBox(),w.computeBoundingSphere(),f.push(w)}const p=i.geometry;i.geometry=f[0],i.frustumCulled=!0;const v=i.parent;if(v)for(let S=1;S<f.length;S++){const m=new I(f[S],i.material);m.name=`${i.name}_Chunk${S}`,m.position.copy(i.position),m.quaternion.copy(i.quaternion),m.scale.copy(i.scale),m.castShadow=i.castShadow,m.receiveShadow=i.receiveShadow,m.frustumCulled=!0,m.userData._spatialChunked=!0,v.add(m)}p.dispose()}function Sd(i){if(!i)return;const e=[];i.traverse(t=>{if(!t.isMesh)return;t.frustumCulled=!0;const n=t.name||"",o=n.includes("CoasterRoadwayMesh")||n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite")||n.includes("CoasterSideRailsAndSpine"),s=o||n.includes("CoasterLatticeTrussColumns")||n.includes("StartFinishGantry")||n.includes("StartFinishTrussGantry");o?(t.castShadow=!1,t.receiveShadow=!1):n.includes("CoasterLatticeTrussColumns")?(t.castShadow=!0,t.receiveShadow=!1):s&&(t.castShadow=!0,t.receiveShadow=!0),n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite")?(Su(t.geometry,.48,!0),wu(t.geometry)):n.includes("CoasterSideRailsAndSpine")&&Su(t.geometry,.52,!1),!t.userData._spatialChunked&&(n.includes("CoasterLatticeTrussColumns")||n.includes("CoasterSideRailsAndSpine")||n.includes("CoasterRoadwayMesh")||n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite"))&&e.push(t);const a=Array.isArray(t.material)?t.material:[t.material];for(const r of a){if(!r)continue;const l=r.name||"";if(l==="Mat_MicroAsphalt"||n.includes("CoasterRoadwayMesh")&&l!=="Mat_LaneStripeWhite"){wu(t.geometry,!0);const{trackAsphaltAlbedoTex:c,trackAsphaltNormalTex:d,trackAsphaltRoughnessTex:h}=Md();c.anisotropy=8,d.anisotropy=8,h.anisotropy=8,r.map=c,r.normalMap=d,r.normalScale=new Ue(.52,.52),r.roughnessMap=h,r.roughness=.82,r.metalness=.04,r.color&&r.color.setHex(16777215),r.needsUpdate=!0}else if(l==="Mat_LaneStripeWhite"||l==="Mat_FIACurbRed"||l==="Mat_FIACurbWhite"||n.includes("CoasterCurbsRed")||n.includes("CoasterCurbsWhite"))r.roughness=.78,r.metalness=0,r.normalMap=null,r.roughnessMap=null,r.needsUpdate=!0;else if(l.includes("StartLight")||l==="Mat_LightGreen"||l==="Mat_LightAmber"||l==="Mat_LightRed")r.color&&r.color.setHex(1185052),r.emissive&&r.emissive.setHex(0),r.emissiveIntensity=0,r.roughness=.22,r.metalness=.15,r.needsUpdate=!0;else if(l==="Mat_BrushedSilverAluminum"||l==="Mat_TrussSilver"||n.includes("CoasterSideRailsAndSpine")||n.includes("CoasterLatticeTrussColumns")){const c=n.includes("CoasterLatticeTrussColumns")||l==="Mat_TrussSilver";r.color&&r.color.setHex(8029332),r.roughness=.38,r.metalness=.82,r.envMapIntensity=.55,r.userData._hasUnderTrackLedHook||(r.userData._hasUnderTrackLedHook=!0,r.onBeforeCompile=d=>{d.uniforms.uTrackLedTime=Mn.uTime,d.uniforms.uTrackLedIntensity=Mn.uIntensity,d.uniforms.uTrackGlowFieldTex=Mn.uGlowFieldTex,d.vertexShader=`varying vec3 vTrackLedWorldPos;
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
                 #include <dithering_fragment>`)}),r.needsUpdate=!0}}});for(const t of e)wd(t)}const Mn={uTime:{value:0},uIntensity:{value:1},uGlowFieldTex:{value:null},uLedA:{value:new ze(1,.05,.55)},uLedB:{value:new ze(.54,.03,1)},uLedC:{value:new ze(0,.54,1)},uLedD:{value:new ze(.66,.05,1)},uFieldMin:{value:new Ue(-.58,-.34)},uFieldSpan:{value:new Ue(1.16,.68)},uMatRect:{value:new hn(.155,.0025,.495,.2675)}},yu=`
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
`;function jv(i,e={}){var tt,ct;const t=new et;t.name="CoasterTrackGroup";const n=i.samples;n0=n;const o=n.length,s=(i.track_width_m||.022)*.5,a=i.curb_width_m||.0017,r=i.start_finish_index??Math.min(646,n.length-1),l=(i.rail_height_m||.0018)*.52,c=_d(),{trackAsphaltAlbedoTex:d,trackAsphaltNormalTex:h,trackAsphaltRoughnessTex:f}=Md(),p=new Float32Array(o+1);for(let Ae=0;Ae<o;Ae++){const je=n[Ae].position,Oe=n[(Ae+1)%o].position;p[Ae+1]=p[Ae]+Math.hypot(Oe[0]-je[0],Oe[1]-je[1],Oe[2]-je[2])}const v=Math.max(1e-4,p[o]),S=[],m=[],u=[],g=[];for(let Ae=0;Ae<=o;Ae++){const je=n[Ae%o],Oe=new L(...je.position),Je=new L(...je.right),nt=new L(...je.normal),ht=p[Ae]/.012,Mt=Oe.clone().addScaledVector(Je,-s),Tt=Oe.clone().addScaledVector(Je,s),Ot=Mt.clone().addScaledVector(nt,-.0018),rt=Tt.clone().addScaledVector(nt,-.0018);if(S.push(Mt.x,Mt.y,Mt.z,Tt.x,Tt.y,Tt.z,rt.x,rt.y,rt.z,Ot.x,Ot.y,Ot.z),m.push(nt.x,nt.y,nt.z,nt.x,nt.y,nt.z,-nt.x,-nt.y,-nt.z,-nt.x,-nt.y,-nt.z),u.push(0,ht,1,ht,1,ht,0,ht),Ae<o){const Ft=Ae*4,ue=(Ae+1)*4;g.push(Ft+0,Ft+1,ue+1),g.push(Ft+0,ue+1,ue+0),g.push(Ft+2,Ft+3,ue+3),g.push(Ft+2,ue+3,ue+2)}}const M=new Bt;M.setAttribute("position",new vt(S,3)),M.setAttribute("normal",new vt(m,3)),M.setAttribute("uv",new vt(u,2)),M.setIndex(g);const w=new we({map:d,normalMap:h,normalScale:new Ue(.52,.52),roughnessMap:f,roughness:.82,metalness:.04}),A=new I(M,w);A.castShadow=!0,A.receiveShadow=!0,A.name="CoasterAsphaltRoadbed",t.add(A);const y=[],C=[],_=[],b=[],x=new ze(((tt=e.curbColors)==null?void 0:tt[0])??15213850),R=new ze(((ct=e.curbColors)==null?void 0:ct[1])??16119802),U=new ze(e.railColor??12109012);let O=0;for(let Ae=0;Ae<o;Ae++){const je=n[Ae],Oe=n[(Ae+1)%o],Je=new L(...je.position),nt=new L(...je.right),ht=new L(...je.normal),Mt=new L(...Oe.position),Tt=new L(...Oe.right),Ot=new L(...Oe.normal),Ft=Ae%2===0?x:R;for(const ue of[-1,1]){const Ge=ue*(s-.0012),ot=ue*(s+5e-4),xt=Je.clone().addScaledVector(nt,Ge).addScaledVector(ht,12e-5),Xe=Je.clone().addScaledVector(nt,ot).addScaledVector(ht,22e-5),ft=Mt.clone().addScaledVector(Tt,Ge).addScaledVector(Ot,12e-5),pt=Mt.clone().addScaledVector(Tt,ot).addScaledVector(Ot,22e-5),Lt=Xe.clone().addScaledVector(ht,l),At=pt.clone().addScaledVector(Ot,l);y.push(xt.x,xt.y,xt.z,Xe.x,Xe.y,Xe.z,pt.x,pt.y,pt.z,ft.x,ft.y,ft.z,Lt.x,Lt.y,Lt.z,At.x,At.y,At.z);for(let Dt=0;Dt<4;Dt++)C.push(ht.x,ht.y,ht.z),_.push(Ft.r,Ft.g,Ft.b);for(let Dt=0;Dt<2;Dt++)C.push(-ue*nt.x,-ue*nt.y,-ue*nt.z),_.push(U.r,U.g,U.b);ue===1?(b.push(O+0,O+1,O+2),b.push(O+0,O+2,O+3),b.push(O+1,O+4,O+5),b.push(O+1,O+5,O+2)):(b.push(O+1,O+0,O+3),b.push(O+1,O+3,O+2),b.push(O+4,O+1,O+2),b.push(O+4,O+2,O+5)),O+=6}}const N=new Bt;N.setAttribute("position",new vt(y,3)),N.setAttribute("normal",new vt(C,3)),N.setAttribute("color",new vt(_,3)),N.setIndex(b);const k=new we({vertexColors:!0,roughness:.68,metalness:.04,normalMap:h,normalScale:new Ue(.55,.55),side:on}),z=new I(N,k);z.castShadow=!0,z.receiveShadow=!0,t.add(z);const K=[],he=[];for(let Ae=0;Ae<o;Ae+=2){const je=n[Ae],Oe=new L(...je.position),Je=new L(...je.right),nt=new L(...je.normal);K.push(Oe.clone().addScaledVector(Je,-.0065).addScaledVector(nt,-.0032)),he.push(Oe.clone().addScaledVector(Je,.0065).addScaledVector(nt,-.0032))}const J=new co(K,!0),ie=new co(he,!0),F=new we({color:e.steelColor??8029332,roughness:.38,metalness:.82}),H=new I(new Io(J,360,.0011,8,!0),F),Q=new I(new Io(ie,360,.0011,8,!0),F);H.castShadow=!0,Q.castShadow=!0,t.add(H,Q);const Y=10,ge=Math.floor(o/Y);function V(Ae,je,Oe){return e.groundAt?e.groundAt(Ae,je,Oe):Ae<-.23&&Ae>-.49&&je<.04&&je>-.18&&Oe>.145?.156:Ae>.155&&Ae<.495&&je>.002&&je<.268?.003:0}const te=ge*4,$=new st(85e-5,85e-5,1,8),q=new Hi($,F,te);q.castShadow=!0,q.receiveShadow=!0;const pe=new st(.0048,.0055,.0022,14),se=new we({color:2238e3,roughness:.6,metalness:.5}),Pe=new Hi(pe,se,ge);Pe.receiveShadow=!0;const de=new Re(.024,.0022,.0055),X=new Hi(de,F,ge);X.castShadow=!0;const j=new Re(.0072,.001,.0072),G=new Hi(j,F,ge*6),B=new sn;let E=0,ae=0,xe=0,Me=0;const oe=.0031,P=[[-oe,-oe],[oe,-oe],[oe,oe],[-oe,oe]];for(let Ae=0;Ae<ge;Ae++){const je=n[Ae*Y],Oe=new L(...je.position),Je=new L(...je.tangent),nt=Oe.y-.0032,ht=V(Oe.x,Oe.z,Oe.y),Mt=Math.max(.006,nt-ht),Tt=ht+Mt*.5;B.position.set(Oe.x,nt,Oe.z);const Ot=Math.atan2(Je.x,Je.z);B.rotation.set(0,Ot,0),B.scale.set(1,1,1),B.updateMatrix(),X.setMatrixAt(xe++,B.matrix),B.position.set(Oe.x,ht+.0011,Oe.z),B.rotation.set(0,Ot,0),B.scale.set(1,1,1),B.updateMatrix(),Pe.setMatrixAt(ae++,B.matrix);for(const[Ft,ue]of P)B.position.set(Oe.x+Ft,Tt,Oe.z+ue),B.rotation.set(0,0,0),B.scale.set(1,Mt,1),B.updateMatrix(),q.setMatrixAt(E++,B.matrix);const rt=Math.min(6,Math.max(2,Math.floor(Mt/.024)));for(let Ft=0;Ft<rt;Ft++){const ue=ht+(Ft+.5)/rt*Mt;B.position.set(Oe.x,ue,Oe.z),B.rotation.set(0,Ot,0),B.scale.set(1,1,1),B.updateMatrix(),G.setMatrixAt(Me++,B.matrix)}}q.count=E,Pe.count=ae,X.count=xe,G.count=Me,q.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,X.instanceMatrix.needsUpdate=!0,G.instanceMatrix.needsUpdate=!0,t.add(q,Pe,X,G);const T=new et;T.name="StartFinishGantry",T.visible=!e.customStart,T.position.set(.0183,.035,.255);for(const Ae of[-.018,.018]){const je=new I(new Re(.004,.028,.004),F);je.position.set(0,.014,Ae),je.castShadow=!0,T.add(je)}const W=new I(new Re(.0048,.0082,.04),new we({color:1448226,roughness:.35,metalness:.6}));W.position.set(0,.024,0),W.castShadow=!0,T.add(W);const ne=new we({map:c,emissiveMap:c,emissive:new ze(16777215),emissiveIntensity:.75,roughness:.2});for(const[Ae,je]of[[.0026,Math.PI/2],[-.0026,-Math.PI/2]]){const Oe=new I(new Zt(.036,.0072),ne);Oe.position.set(Ae,.024,0),Oe.rotation.y=je,T.add(Oe)}for(let Ae=-2;Ae<=2;Ae++){const je=new I(new Pt(85e-5,10,10),new kt({color:Ae===0?3331915:16755268}));je.position.set(.0026,.0188,Ae*.0038),T.add(je)}const be=new I(new Zt(.0035,.021),new kt({map:c}));be.rotation.x=-Math.PI/2,be.position.set(0,6e-4,0),T.add(be),t.add(T);const me=new et;me.name="UnderTrackLedAndGlowGroup";const ke=[],Le=[],He=[],Ze=s+a*1.02,Ne=s*.58;for(let Ae=0;Ae<=o;Ae++){const je=n[Ae%o],Oe=new L(...je.position),Je=new L(...je.right),nt=new L(...je.normal),ht=p[Ae]/v,Mt=Oe.clone().addScaledVector(Je,-Ze).addScaledVector(nt,3e-4),Tt=Oe.clone().addScaledVector(Je,-Ze*.92).addScaledVector(nt,-.0022),Ot=Oe.clone().addScaledVector(Je,-Ne).addScaledVector(nt,-.0026),rt=Oe.clone().addScaledVector(Je,Ne).addScaledVector(nt,-.0026),Ft=Oe.clone().addScaledVector(Je,Ze*.92).addScaledVector(nt,-.0022),ue=Oe.clone().addScaledVector(Je,Ze).addScaledVector(nt,3e-4);if(ke.push(Mt.x,Mt.y,Mt.z,Tt.x,Tt.y,Tt.z,Ot.x,Ot.y,Ot.z,rt.x,rt.y,rt.z,Ft.x,Ft.y,Ft.z,ue.x,ue.y,ue.z),Le.push(0,ht,.5,ht,1,ht,1,ht,.5,ht,0,ht),Ae<o){const Ge=Ae*6,ot=(Ae+1)*6;He.push(Ge+0,Ge+1,ot+1,Ge+0,ot+1,ot+0),He.push(Ge+1,Ge+2,ot+2,Ge+1,ot+2,ot+1),He.push(Ge+3,Ge+4,ot+4,Ge+3,ot+4,ot+3),He.push(Ge+4,Ge+5,ot+5,Ge+4,ot+5,ot+4)}}const Fe=new Bt;Fe.setAttribute("position",new vt(ke,3)),Fe.setAttribute("uv",new vt(Le,2)),Fe.setIndex(He),Fe.computeBoundingBox(),Fe.computeBoundingSphere();const ve=new an({uniforms:Mn,side:on,transparent:!0,depthWrite:!1,toneMapped:!1,blending:To,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uIntensity;
      varying vec2 vUv;

      ${yu}

      void main() {
        if (uIntensity <= 0.001) discard;
        vec3 baseCol = evalTrackLedPalette(vUv.y * 2.0, uTime);
        float core = exp(-pow((vUv.x - 0.5) * 2.2, 2.0));
        vec3 col = mix(baseCol, vec3(1.0, 0.90, 0.98), core * 0.34) * (1.10 + 0.45 * core);
        float alpha = clamp((0.82 + 0.18 * core) * min(1.4, uIntensity), 0.0, 0.98);
        gl_FragColor = vec4(col * min(1.48, 0.80 + 0.52 * uIntensity), alpha);
      }
    `}),Se=new I(Fe,ve);Se.name="UnderTrackLedRibbonMesh",Se.castShadow=!1,Se.receiveShadow=!1,me.add(Se),wd(Se);const Ee=256,We=128;let Z=-.58,Be=1.16,Ve=-.34,Ke=.68;if(e.glowBounds!=="desk"){let Ae=1/0,je=-1/0,Oe=1/0,Je=-1/0;for(const nt of n)Ae=Math.min(Ae,nt.position[0]),je=Math.max(je,nt.position[0]),Oe=Math.min(Oe,nt.position[2]),Je=Math.max(Je,nt.position[2]);Z=Ae-.08,Be=je-Ae+.16,Ve=Oe-.08,Ke=Je-Oe+.16}Mn.uFieldMin.value.set(Z,Ve),Mn.uFieldSpan.value.set(Be,Ke),e.ledColors&&(Mn.uLedA.value.set(e.ledColors[0]),Mn.uLedB.value.set(e.ledColors[1]),Mn.uLedC.value.set(e.ledColors[2]),Mn.uLedD.value.set(e.ledColors[3]));const re=e.glowBounds==="desk";re?Mn.uMatRect.value.set(.155,.0025,.495,.2675):Mn.uMatRect.value.set(9,9,9,9);const ee=e.glowGroundY??5e-4,Te=new Float32Array(Ee*We),Ye=new Float32Array(Ee*We),ut=new Float32Array(Ee*We);for(let Ae=0;Ae<o;Ae++){const je=n[Ae],Oe=je.position[0],Je=je.position[1],nt=je.position[2],ht=p[Ae]/v*Math.PI*2*2,Mt=Math.sin(ht),Tt=Math.cos(ht),Ot=Math.max(0,Je),rt=Ot<.048?.032:.046,Ft=1/(2*rt*rt),ue=1/(2*.019*.019),Ge=1/(1+Ot*2.8),ot=rt*3,xt=Math.max(0,Math.floor((Oe-ot-Z)/Be*Ee)),Xe=Math.min(Ee-1,Math.ceil((Oe+ot-Z)/Be*Ee)),ft=Math.max(0,Math.floor((nt-ot-Ve)/Ke*We)),pt=Math.min(We-1,Math.ceil((nt+ot-Ve)/Ke*We));for(let Lt=ft;Lt<=pt;Lt++){const Dt=Ve+(Lt+.5)/We*Ke-nt,fn=Dt*Dt,An=Lt*Ee;for(let xn=xt;xn<=Xe;xn++){const Ie=Z+(xn+.5)/Ee*Be-Oe,_t=Ie*Ie+fn;if(_t>ot*ot)continue;const tn=Math.exp(-_t*Ft)*Ge,Jn=Math.exp(-_t*ue)*Ge,mt=An+xn;Te[mt]+=tn,Ye[mt]+=Jn*Mt,ut[mt]+=Jn*Tt}}}const gt=new Uint8Array(Ee*We*4);for(let Ae=0;Ae<Ee*We;Ae++){const je=Te[Ae],Oe=1-Math.exp(-je*.088);let Je=0,nt=1;if(je>1e-5){const Mt=Math.hypot(Ye[Ae],ut[Ae])||1;Je=Ye[Ae]/Mt,nt=ut[Ae]/Mt}const ht=Ae*4;gt[ht+0]=Math.min(255,Math.max(0,Math.round(Oe*255))),gt[ht+1]=Math.min(255,Math.max(0,Math.round((Je*.5+.5)*255))),gt[ht+2]=Math.min(255,Math.max(0,Math.round((nt*.5+.5)*255))),gt[ht+3]=255}const Ct=new Yc(gt,Ee,We,ui);Ct.magFilter=_n,Ct.minFilter=_n,Ct.wrapS=kn,Ct.wrapT=kn,Ct.flipY=!1,Ct.needsUpdate=!0,Mn.uGlowFieldTex.value=Ct;const Gt=new Float32Array([Z,ee,Ve,Z+Be,ee,Ve,Z+Be,ee,Ve+Ke,Z,ee,Ve+Ke,.156,re?.0034:-50,.003,.494,re?.0034:-50,.003,.494,re?.0034:-50,.267,.156,re?.0034:-50,.267]),un=new Float32Array([0,0,0,0,1,1,1,1]),gn=[0,2,1,0,3,2,4,6,5,4,7,6],ln=new Bt;ln.setAttribute("position",new rn(Gt,3)),ln.setAttribute("aSurfaceId",new rn(un,1)),ln.setIndex(gn),ln.computeBoundingBox(),ln.computeBoundingSphere();const Tn=new an({uniforms:Mn,side:on,transparent:!0,depthWrite:!1,toneMapped:!1,blending:Gn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:`
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

      ${yu}

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
    `}),_e=new I(ln,Tn);_e.name="UnderTrackDeskGlowMesh",_e.castShadow=!1,_e.receiveShadow=!1,me.add(_e);const ye=new st(.0032,.0032,1,8),De=new kt({colorWrite:!1,depthWrite:!1}),it=new Hi(ye,De,ge);it.name="TrussColumnShadowProxies",it.castShadow=!0,it.receiveShadow=!1;for(let Ae=0;Ae<ge;Ae++){const je=n[Ae*Y],Oe=new L(...je.position),Je=Oe.y-.002,nt=V(Oe.x,Oe.z,Oe.y),ht=Math.max(.006,Je-nt),Mt=nt+ht*.5;B.position.set(Oe.x,Mt,Oe.z),B.rotation.set(0,0,0),B.scale.set(1,ht,1),B.updateMatrix(),it.setMatrixAt(Ae,B.matrix)}it.instanceMatrix.needsUpdate=!0,me.add(it);const dt=document.createElement("canvas");dt.width=64,dt.height=64;const yt=dt.getContext("2d"),bt=yt.createRadialGradient(32,32,2,32,32,30);bt.addColorStop(0,"rgba(255, 60, 70, 0.95)"),bt.addColorStop(.35,"rgba(255, 16, 32, 0.65)"),bt.addColorStop(.72,"rgba(220, 0, 18, 0.22)"),bt.addColorStop(1,"rgba(180, 0, 10, 0.0)"),yt.fillStyle=bt,yt.fillRect(0,0,64,64);const Ht=new zt(dt),Wt=new Re(.00164,.00162,92e-5),cn=new kt({color:new ze(1.45,.06,.1),toneMapped:!1}),Pn=new qc({map:Ht,color:16718379,transparent:!0,blending:Gn,depthWrite:!1,toneMapped:!1}),In=[],Fn=n[r]||n[0],oi=new L(...Fn.position),dn=new L(Fn.right[0],0,Fn.right[2]).normalize(),Zn=new L(0,1,0),D=[.0064,.0032,0,-.0032,-.0064];for(let Ae=0;Ae<5;Ae++){const je=D[Ae],Oe=new et;Oe.position.copy(oi).addScaledVector(dn,je).addScaledVector(Zn,.012775);const Je=new I(Wt,cn);Je.castShadow=!1,Je.receiveShadow=!1,Oe.add(Je);const nt=new Zu(Pn);nt.scale.set(.0054,.0054,1),nt.position.set(86e-5,0,0),Oe.add(nt),Oe.visible=!1,e.customStart||me.add(Oe),In.push(Oe)}function fe(Ae=0){const je=Math.max(0,Math.min(5,Math.floor(Ae)));for(let Oe=0;Oe<In.length;Oe++)In[Oe].visible=Oe<je}function Ce(Ae=0,je=1){Mn.uTime.value=Ae,Mn.uIntensity.value=je,me.visible=je>.005}const le=new et;le.name="SplineDebugOverlay",le.visible=!1;const ce=n.map(Ae=>new L(...Ae.position).add(new L(0,.002,0)));ce.push(ce[0].clone());const qe=new Bt().setFromPoints(ce),Qe=new Ea(qe,new Os({color:5030655}));le.add(Qe);for(let Ae=0;Ae<o;Ae+=12){const je=n[Ae],Oe=new L(...je.position).add(new L(0,.0015,0)),Je=new L(...je.tangent).multiplyScalar(.014),nt=new L(...je.normal).multiplyScalar(.012),ht=new L(...je.right).multiplyScalar(.011);le.add(new Ea(new Bt().setFromPoints([Oe,Oe.clone().add(Je)]),new Os({color:16726832})),new Ea(new Bt().setFromPoints([Oe,Oe.clone().add(nt)]),new Os({color:3331915})),new Ea(new Bt().setFromPoints([Oe,Oe.clone().add(ht)]),new Os({color:1993727})))}return t.add(le),{trackGroup:t,underTrackLedGroup:me,updateUnderTrackLed:Ce,setF1StartLights:fe,roadGeo:M,debugGroup:le,calibrateTrackCoasterGlb:Sd}}function qv(i,e={}){const t=i.samples,n=t.length,o=i.total_length_m||3.8371,s=t.map(H=>new L().fromArray(H.position));for(let H=0;H<2;H++){const Q=s.map(Y=>Y.clone());for(let Y=0;Y<n;Y++){const ge=s[(Y-1+n)%n],V=s[Y],te=s[(Y+1)%n];Q[Y].copy(V).multiplyScalar(.6).addScaledVector(ge,.2).addScaledVector(te,.2)}for(let Y=0;Y<n;Y++)s[Y].copy(Q[Y])}const a=t.map(H=>new L().fromArray(H.tangent).normalize()),r=t.map(H=>new L().fromArray(H.normal).normalize()),l=t.map(H=>new L().fromArray(H.right).normalize()),c=t.map(H=>H.bank_deg||0);for(let H=0;H<4;H++){const Q=a.map(te=>te.clone()),Y=r.map(te=>te.clone()),ge=c.slice(),V=[1,2,3,2,1];for(let te=0;te<n;te++){Q[te].set(0,0,0),Y[te].set(0,0,0);let $=0;for(let q=-2;q<=2;q++){const pe=(te+q+n)%n,se=V[q+2];Q[te].addScaledVector(a[pe],se),Y[te].addScaledVector(r[pe],se),$+=c[pe]*se}Q[te].normalize(),Y[te].normalize(),ge[te]=$/9}for(let te=0;te<n;te++)a[te].copy(Q[te]),l[te].crossVectors(a[te],Y[te]).normalize(),r[te].crossVectors(l[te],a[te]).normalize(),c[te]=ge[te]}const d=new Float32Array(n),h=new Float32Array(n),f=new L;for(let H=0;H<n;H++){const Q=(H-3+n)%n,Y=(H+3)%n;f.subVectors(a[Y],a[Q]),d[H]=f.dot(l[H])*8}for(let H=0;H<n;H++){let Q=0;const Y=[1,2,3,2,1];for(let ge=-2;ge<=2;ge++)Q+=d[(H+ge+n)%n]*Y[ge+2];h[H]=Q/9}const p=Math.min(i.start_finish_index??0,n-1),v={};for(let H=0;H<n;H++){const Q=t[H];v[Q.sector]===void 0&&(v[Q.sector]=Q.arc_length_m)}const S=t[p].arc_length_m,m=(S-(e.gridOffset??.025)+o)%o;new L;const u=new L;new L;const g=new Vt,M=new Yn,w=new Yn,A={index:0,sector:6,position:new L,tangent:new L,right:new L,normal:new L,bankDeg:0,signedCurvature:0,slope:0},y={index:0,sector:6,position:new L,tangent:new L,right:new L,normal:new L,bankDeg:0,signedCurvature:0,slope:0};function C(H,Q=A){const Y=(H%o+o)%o;let ge=0,V=n-1;for(;ge<V;){const B=ge+V+1>>1;t[B].arc_length_m<=Y?ge=B:V=B-1}const te=ge,$=(ge+1)%n,q=t[te],pe=t[$],se=q.arc_length_m,Pe=$===0?o:pe.arc_length_m,de=Math.max(1e-6,Pe-se),X=$e.clamp((Y-se)/de,0,1);Q.position.copy(s[te]).lerp(s[$],X),Q.tangent.copy(a[te]).lerp(a[$],X).normalize(),Q.right.copy(l[te]).lerp(l[$],X).normalize(),Q.normal.copy(r[te]).lerp(r[$],X).normalize();const j=$e.lerp(h[te],h[$],X),G=$e.lerp(c[te],c[$],X);return Q.index=te,Q.sector=q.sector,Q.bankDeg=G,Q.signedCurvature=j,Q.slope=Q.tangent.y,Q}const _={forward:!1,backward:!1,left:!1,right:!1},b={velocidad:1,aceleracion:1,manejo:1,agarre:1,turbo:1},x={s:m,lateralOffset:e.lateral??0,lateralVel:0,speed:0,headingYaw:0,turnRight:0,steerSmooth:0,steerAngle:0,topSpeedMultiplier:1,steerInput:0,isDrifting:!1,driftDir:0,driftAngle:0,driftChargeTimer:0,cornerCleanTimer:0,boostCharge:1,boostActive:0,hopHeight:0,hopVel:0,curbRumble:0,railImpactActive:!1,railHitCooldown:0,downforceG:1,autopilot:!1,victoryCruise:!1,raceClockActive:!1,countdownLocked:!1,wasCountdownLocked:!1,launchWindowTimer:0,lapCount:1,currentLapTime:0,totalRaceTime:0,lapTimes:[],raceFinished:!1,finishTotalTime:null,bestLapTime:null,lastLapTime:null,sector:t[p].sector,leanAngle:0,bankDeg:0,altitudeMm:35,activeKeysStr:"NONE",lastRoadTurnDeg:0,lastSteerTurnDeg:0,signedCurvature:0,distToLeftRailMm:9,distToRightRailMm:9,railZone:"TRACK",angledIntoRail:!1,steeringAway:!1,position:new L(0,.035,.255),tangent:new L(-1,0,0),right:new L(0,0,-1),normal:new L(0,1,0),quaternion:new Yn};let R=null;function U(){return[_.forward&&"W",_.left&&"A",_.backward&&"S",_.right&&"D"].filter(Boolean).join("+")||"NONE"}function O(H){return H<=-.0089?"L-RAIL":H>=.0089?"R-RAIL":H<=-.0078?"L-CURB":H>=.0078?"R-CURB":"TRACK"}function N(){const H=C(x.s);x.sector=H.sector,x.bankDeg=H.bankDeg,x.slope=H.slope,x.curvature=Math.abs(H.signedCurvature),x.signedCurvature=H.signedCurvature,x.distToLeftRailMm=(x.lateralOffset- -.009)*1e3,x.distToRightRailMm=(.009-x.lateralOffset)*1e3,x.railZone=O(x.lateralOffset),x.activeKeysStr=U(),x.tangent.copy(H.tangent),x.right.copy(H.right),x.normal.copy(H.normal),x.downforceG=1+x.speed*x.speed/.26+Math.abs(Math.sin($e.degToRad(H.bankDeg)))*.65;const Q=x.curbRumble>0?Math.abs(Math.sin(x.s*620))*28e-5*x.curbRumble:0;x.position.copy(H.position).addScaledVector(H.right,x.lateralOffset).addScaledVector(H.normal,3e-4+Q),x.altitudeMm=Math.max(0,x.position.y*1e3),u.crossVectors(H.normal,H.tangent).normalize(),g.makeBasis(u,H.normal,H.tangent),M.setFromRotationMatrix(g),w.setFromAxisAngle(H.normal,x.headingYaw),x.quaternion.copy(w.multiply(M))}N();function k(H){x.autopilot=!!H,x.autopilot&&x.speed<.1&&(x.speed=.187*b.velocidad)}function z(H){const Q=H==="grid"?m:v[H]??m;x.s=Q,x.lateralOffset=H==="grid"?e.lateral??0:0,x.lateralVel=0,x.headingYaw=0,x.turnRight=0,x.steerSmooth=0,x.steerAngle=0,x.steerInput=0,x.driftAngle=0,x.isDrifting=!1,x.driftDir=0,x.driftChargeTimer=0,x.cornerCleanTimer=0,x.railImpactActive=!1,x.railHitCooldown=0,x.angledIntoRail=!1,x.steeringAway=!1,x.lastRoadTurnDeg=0,x.lastSteerTurnDeg=0,x.boostActive=0,x.speed=x.autopilot||x.victoryCruise?.187:0,N()}function K(){x.victoryCruise=!1,x.raceFinished=!1,x.totalRaceTime=0,x.currentLapTime=0,x.lapCount=1,x.lapTimes=[],x.finishTotalTime=null,x.raceClockActive=!1,x.countdownLocked=!1,x.wasCountdownLocked=!1,x.launchWindowTimer=0,x.cornerCleanTimer=0,x.railImpactActive=!1,x.railHitCooldown=0,x.angledIntoRail=!1,x.steeringAway=!1,z("grid")}function he(){x.countdownLocked=!1,x.wasCountdownLocked=!1,x.raceClockActive=!0,x.launchWindowTimer=.3,!x.autopilot&&!x.victoryCruise&&_.forward&&(x.boostActive=Math.max(x.boostActive,.75),x.launchWindowTimer=0)}function J(H){_.forward=!!H.acel,_.backward=!!H.freno,_.left=!!H.izq,_.right=!!H.der}function ie(H){Object.assign(b,H)}function F(H){const Q=Math.min(H,.05),Y=C(x.s);x.activeKeysStr=U(),x.signedCurvature=Y.signedCurvature;const ge=.205*x.topSpeedMultiplier*b.velocidad,V=.289*x.topSpeedMultiplier*b.velocidad,te=.204*x.topSpeedMultiplier*b.velocidad,$=.204*b.aceleracion;x.railHitCooldown>0&&(x.railHitCooldown=Math.max(0,x.railHitCooldown-Q)),x.countdownLocked?(x.wasCountdownLocked=!0,x.launchWindowTimer=0):x.wasCountdownLocked&&(x.wasCountdownLocked=!1,x.launchWindowTimer=.3),x.launchWindowTimer>0&&(!x.autopilot&&!x.victoryCruise&&_.forward?(x.boostActive=Math.max(x.boostActive,.75*b.turbo),x.launchWindowTimer=0):x.launchWindowTimer=Math.max(0,x.launchWindowTimer-Q));const q=x.autopilot;let pe=0,se=0;if(q){pe=1;const be=$e.clamp(-Y.signedCurvature*5e-4,-.0014,.0014)-x.lateralOffset;se=$e.clamp(be*36,-.35,.35),x.steerSmooth=se;const me=$e.clamp(-se*.14,-.14,.14),ke=1-Math.exp(-10.5*Q);x.headingYaw=$e.lerp(x.headingYaw,me,ke);const Le=1-Math.exp(-8*Q);Math.abs(Y.signedCurvature)>.52&&x.speed>.1?(x.isDrifting=!0,x.driftDir=Math.sign(Y.signedCurvature)||1,x.driftAngle=$e.lerp(x.driftAngle,-x.driftDir*.2,Le),x.boostCharge=Math.min(1,x.boostCharge+Q*.28)):(x.isDrifting=!1,x.driftDir=0,x.driftAngle=$e.lerp(x.driftAngle,0,Le)),Math.abs(Y.signedCurvature)<.15&&x.boostCharge>.75&&(x.boostActive=.45,x.boostCharge=Math.max(.2,x.boostCharge-Q*.35))}else if(x.raceFinished){pe=0,se=0,x.boostActive=0,x.isDrifting=!1,x.driftDir=0;const ne=1-Math.exp(-8*Q);x.headingYaw=$e.lerp(x.headingYaw,0,ne),x.driftAngle=$e.lerp(x.driftAngle,0,ne)}else _.forward&&(pe+=1),_.backward&&(pe-=1),se=(_.right?1:0)-(_.left?1:0);x.boostActive>0?x.boostActive=Math.max(0,x.boostActive-Q):x.isDrifting||(x.boostCharge=Math.min(1,x.boostCharge+Q*.06));const Pe=(x.s%o+o)%o,de=$e.clamp(Math.abs(Y.signedCurvature)/1.25,0,1),X=C(x.s+.06,y),j=Math.max(Math.abs(Y.signedCurvature),Math.abs(X.signedCurvature)),G=.032*Math.sin(Pe*11.2)+.021*Math.cos(Pe*18.7),B=$e.clamp(Y.slope>0?-Y.slope*.68:-Y.slope*.42,-.25,.18);if(q){const ne=Math.max(de*.24,$e.clamp(j/1.6,0,1)*.34),be=$e.clamp(1-ne+B+G,.56,1.12),me=te*be,ke=x.boostActive>0?V*.88:me,Le=-Y.slope*.16,He=ke-x.speed,Ze=$e.clamp(He*4.2,-.95,.48);x.speed+=(Ze+Le)*Q,x.speed=$e.clamp(x.speed,0,V)}else{const ne=$e.clamp(1+B*.45,.88,1.1),be=(x.boostActive>0?V:ge)*ne;if(pe===0){const me=1.6*Q;Math.abs(x.speed)<=me?x.speed=0:x.speed-=Math.sign(x.speed)*me,Math.abs(x.speed)<.008&&(x.speed=0)}else{const me=-Y.slope*.22;let ke=0;pe>0?ke=x.speed<-.01?1.25*pe:(x.boostActive>0?.36*b.aceleracion:$)*pe:ke=x.speed>.01?1.35*pe:.19*pe,x.speed+=(ke+me)*Q,x.speed>be?x.speed=$e.lerp(x.speed,be,1-Math.exp(-8.5*Q)):x.speed=Math.max(-.12*x.topSpeedMultiplier,x.speed)}}x.countdownLocked&&(x.speed=0);const E=q?1:$e.clamp(1-Y.signedCurvature*x.lateralOffset*16,.88,1.14);if(q)x.lastRoadTurnDeg=0,x.lastSteerTurnDeg=0;else{const ne=x.headingYaw;x.steerSmooth=$e.lerp(x.steerSmooth,se,1-Math.exp(-(se!==0?16:20)*Q));const be=$e.clamp(Math.abs(x.speed)/ge,0,1.15),me=$e.clamp(Math.abs(x.speed)/.11,.25,1),ke=Math.tanh(Y.signedCurvature*.55)*.29*Math.max(.25,be)/b.agarre,Le=se!==0&&se*Y.signedCurvature>.2,He=se!==0&&se*Y.signedCurvature<-.2,Ze=se*x.lateralOffset,Ne=.0058;let Fe=0;if(se===0)Fe=ke;else if(Le){const Be=Ne-Ze,Ve=$e.clamp(Be/.0045,-.45,1),Ke=-x.steerSmooth*.21*b.manejo*me*Ve;Fe=ke*(1-Math.abs(x.steerSmooth))+Ke}else He?Fe=ke-x.steerSmooth*.2*b.manejo*me:Fe=ke-x.steerSmooth*.185*b.manejo*me;Fe=$e.clamp(Fe,-.34,.34);const ve=(se!==0?11.5:10.5)*(.75+.25*b.manejo),Se=$e.lerp(ne,Fe,1-Math.exp(-ve*Q)),Ee=$e.lerp(ne,ke,1-Math.exp(-ve*Q)),We=Ee-ne,Z=Se-Ee;x.headingYaw=$e.clamp(Se,-.42,.42),x.lastRoadTurnDeg=We*180/Math.PI,x.lastSteerTurnDeg=Z*180/Math.PI}x.turnRight=se,x.steerAngle=-(q?se:x.steerSmooth)*.45,x.steerInput=$e.lerp(x.steerInput,se,1-Math.exp(-12*Q)),q||(Math.abs(x.steerInput)>.35&&Math.abs(Y.signedCurvature)>.3&&x.speed>.11?(x.isDrifting=!0,x.driftDir=Math.sign(se)||Math.sign(x.steerInput)||1,x.driftAngle=$e.lerp(x.driftAngle,-x.driftDir*.18,1-Math.exp(-10*Q)),x.boostCharge=Math.min(1,x.boostCharge+Q*.32*b.turbo)):(x.isDrifting=!1,x.driftDir=0,x.driftAngle=$e.lerp(x.driftAngle,0,1-Math.exp(-11*Q))),x.railImpactActive||x.speed<=.08||Math.abs(x.lateralOffset)>=.0089?x.cornerCleanTimer=0:Math.abs(Y.signedCurvature)>.35&&x.speed>.11&&Math.abs(x.lateralOffset)<.0085&&!x.railImpactActive?x.cornerCleanTimer+=Q:Math.abs(Y.signedCurvature)<.26&&(x.cornerCleanTimer>=.42&&pe>0?(x.boostActive=Math.max(x.boostActive,.65*b.turbo),x.cornerCleanTimer=0):x.cornerCleanTimer=Math.max(0,x.cornerCleanTimer-Q*2)));let ae=0;q?ae=x.speed*-Math.sin(x.headingYaw)+se*.024*(.35+.65*Math.min(1,Math.abs(x.speed)/.1)):ae=x.speed*-Math.sin(x.headingYaw)*.82,x.lateralVel=ae,x.lateralOffset+=ae*Q,x.curbRumble=0;const xe=Math.abs(x.lateralOffset),Me=Math.sign(x.lateralOffset)||1,oe=Math.abs(Y.signedCurvature)>.35&&Me*Y.signedCurvature>0;if(x.angledIntoRail=xe>=.0078&&!oe&&(Me>0&&x.headingYaw<-.05||Me<0&&x.headingYaw>.05),x.steeringAway=xe>=.0078&&(Me>0&&se<0||Me<0&&se>0),xe<.0086&&(x.railImpactActive=!1),xe>=.0078&&xe<.009)x.curbRumble=$e.clamp((xe-.0078)/.0012,0,1),!q&&!oe&&(x.speed*=1-.12*x.curbRumble*Q);else if(xe>=.009){const ne=Math.sign(x.lateralOffset)||1;if(x.lateralOffset=ne*.009,x.lateralVel=0,!q){const be=Math.abs(Y.signedCurvature)>.35&&ne*Y.signedCurvature>0,me=ne>0&&se<0||ne<0&&se>0,ke=ne>0&&se>0||ne<0&&se<0;if(be&&!ke)x.lateralOffset=ne*.0085,x.headingYaw=ne>0?Math.max(0,x.headingYaw):Math.min(0,x.headingYaw),x.curbRumble=.5,x.angledIntoRail=!1,x.steeringAway=me;else{const He=-ne*x.headingYaw>=.165||ke&&Math.abs(Y.signedCurvature)<.35;if(!He&&!me)x.lateralOffset=ne*.0084,x.headingYaw=ne*.065,x.curbRumble=.85,x.isDrifting=!0,x.driftDir=-ne,x.angledIntoRail=!1,x.steeringAway=!1,x.railHitCooldown<=0&&(x.railHitCooldown=.22,x.speed*=.88,x.hopVel=Math.max(x.hopVel,.005),R&&R(.28));else{x.boostActive=0,x.cornerCleanTimer=0;const Ze=He;if(x.angledIntoRail=Ze,x.steeringAway=me,!x.railImpactActive&&Ze&&!me){x.railImpactActive=!0,x.railHitCooldown=.25;const Ne=$e.clamp(.5+Math.abs(x.headingYaw)*1.2+Math.abs(x.speed)/ge*.4,.4,1);x.speed*=.42,x.hopVel=Math.max(x.hopVel,.01),R&&R(Ne)}Ze&&!me?(x.headingYaw=-ne*$e.clamp(Math.abs(x.headingYaw),.14,.22),x.speed=Math.max(0,x.speed-.55*Q),x.curbRumble=1):me&&(x.railImpactActive=!1,x.headingYaw=ne*.13,x.lateralOffset=ne*.0083,x.speed=Math.max(x.speed,.085*x.topSpeedMultiplier))}}}}x.s;const P=q?1:Math.max(0,Math.cos(x.headingYaw)),T=x.speed*P*Q/E;x.s=((x.s+T)%o+o)%o,(x.hopHeight>0||x.hopVel!==0)&&(x.hopHeight+=x.hopVel*Q,x.hopVel-=.18*Q,x.hopHeight<=0&&(x.hopHeight=0,x.hopVel=0));const W=$e.clamp((x.steerSmooth*.55+Y.signedCurvature*.35)*Math.min(1,Math.abs(x.speed)/.12),-.6,.6);return x.leanAngle=$e.lerp(x.leanAngle,W,1-Math.exp(-8*Q)),N(),x}return{state:x,keys:_,vehicle:b,totalLength:o,startFinishArc:S,gridArc:m,stepPhysics:F,sampleTrackAtArcLength:C,teleportToSector:z,resetToStart:K,setAutopilot:k,setInput:J,setVehicle:ie,notifyLightsOut:he,onRailImpact:H=>{R=H}}}const bu={idle:"kart_idle_loop.wav",cruise:"kart_cruise_mid_loop.wav",drift:"kart_tire_drift_loop.wav",curb:"curb_rumble_loop.wav"},ka={"kart_idle_loop.wav":new URL(""+new URL("kart_idle_loop-BFTIa2QF.wav",import.meta.url).href,import.meta.url).href,"kart_cruise_mid_loop.wav":new URL(""+new URL("kart_cruise_mid_loop-E9gzRWlQ.wav",import.meta.url).href,import.meta.url).href,"kart_tire_drift_loop.wav":new URL(""+new URL("kart_tire_drift_loop-CYYrZNQh.wav",import.meta.url).href,import.meta.url).href,"curb_rumble_loop.wav":new URL(""+new URL("curb_rumble_loop-C-qxKOhJ.wav",import.meta.url).href,import.meta.url).href,"engine_sputter_burst_1.wav":new URL(""+new URL("engine_sputter_burst_1-B236LsOi.wav",import.meta.url).href,import.meta.url).href,"engine_sputter_burst_2.wav":new URL(""+new URL("engine_sputter_burst_2-CIZ4iU-x.wav",import.meta.url).href,import.meta.url).href,"engine_sputter_burst_3.wav":new URL(""+new URL("engine_sputter_burst_3-CmNjKgqQ.wav",import.meta.url).href,import.meta.url).href},Tu={sputter:["engine_sputter_burst_1.wav","engine_sputter_burst_2.wav","engine_sputter_burst_3.wav"]};function Yv(i){let e=0,t=0,n=0,o=0;if(i<=86)e=1;else if(i<108){const s=(i-86)/22;e=Math.cos(.5*Math.PI*s),t=Math.sin(.5*Math.PI*s)}else if(i<=146)t=1;else if(i<178){const s=(i-146)/32;t=Math.cos(.5*Math.PI*s),n=Math.sin(.5*Math.PI*s)}else if(i<=222)n=1;else if(i<252){const s=(i-222)/30;n=Math.cos(.5*Math.PI*s),o=Math.sin(.5*Math.PI*s)}else o=1;return{wIdle:e,wCruise:t,wFlatout:n,wBoost:o}}function Zv(i={}){const e=i.masterVolume??.28;let t=null,n=!1,o=!1,s=null,a=null,r=null,l=null,c=null,d=null;const h={},f={accel:[],decel:[],boost:[],sputter:[]};let p=null,v=null,S=null,m=i.rumbleAmount??1,u=i.sputterAmount??1,g=0,M=0,w=0,A=0,y=0,C=performance.now(),_=0,b=0,x={};const R=new Map,U=new Map;let O=null;function N($){if(!R.has($)){const q=fetch($).then(pe=>{if(!pe.ok)throw new Error(`HTTP ${pe.status} for ${$}`);return pe.arrayBuffer()});R.set($,q)}return R.get($)}async function k($,q=t){if(U.has($))return U.get($);const pe=await N($),se=q||t;if(!se)return null;const Pe=await se.decodeAudioData(pe.slice(0));return U.set($,Pe),Pe}function z(){return O||(O=(async()=>{try{const $=window.OfflineAudioContext||window.webkitOfflineAudioContext,q=$?new $(2,1,44100):null,pe=[...Object.values(bu).map(se=>ka[se]),...Tu.sputter.map(se=>ka[se])];await Promise.all(pe.map(async se=>{try{q?await k(se,q):await N(se)}catch{}}))}catch{}})(),O)}async function K(){return!t||s||(s=(async()=>{try{const $=["idle","cruise","drift","curb"];await Promise.all($.map(async q=>{const pe=bu[q];try{const se=await k(ka[pe]);if(!se)return;const Pe=t.createBufferSource();Pe.buffer=se,Pe.loop=!0;const de=t.createGain();de.gain.value=0,Pe.connect(de),q==="drift"||q==="curb"?de.connect(a):de.connect(r),Pe.start(0,0),h[q]={src:Pe,gain:de,buffer:se}}catch(se){console.warn(`[DeskRacerHybridAudio] Could not load loop stem ${pe}:`,se)}}));for(const q of Tu.sputter)try{const pe=await k(ka[q]);pe&&f.sputter.push(pe)}catch{}o=!!h.cruise}catch($){console.warn("[DeskRacerHybridAudio] Stem loading error:",$)}})()),s}function he(){if(t)return;const $=window.AudioContext||window.webkitAudioContext;$&&(t=new $,a=t.createGain(),a.gain.value=1e-4,a.connect(t.destination),d=t.createBiquadFilter(),d.type="peaking",d.frequency.value=1550,d.Q.value=1,d.gain.value=1.6,d.connect(a),c=t.createBiquadFilter(),c.type="lowpass",c.frequency.value=6200,c.Q.value=.707,c.connect(d),l=t.createBiquadFilter(),l.type="lowshelf",l.frequency.value=98,l.gain.value=3.5,l.connect(c),r=t.createGain(),r.gain.value=1,r.connect(l),p=t.createOscillator(),p.type="sine",p.frequency.value=55,v=t.createBiquadFilter(),v.type="lowpass",v.frequency.value=95,v.Q.value=.707,S=t.createGain(),S.gain.value=0,p.connect(v),v.connect(S),S.connect(a),p.start(),K())}function J($=0,q=1,pe="idle"){if(!t||!n||t.state!=="running")return;const se=t.currentTime+$,Pe=pe==="idle",de=pe==="overrun",X=.92+.16*Math.random();r&&(r.gain.setValueAtTime(1,se),r.gain.linearRampToValueAtTime(Pe?.55:.42,se+.008),r.gain.linearRampToValueAtTime(1,se+.036));const j=se+.012,G=de?.05:.038,B=t.createOscillator(),E=t.createGain();B.type="sine",B.frequency.setValueAtTime((Pe?76:98)*X,j),B.frequency.exponentialRampToValueAtTime((Pe?40:45)*X,j+G);const ae=Math.min(.3,(Pe?.12:.18)*q);if(E.gain.setValueAtTime(1e-4,j),E.gain.linearRampToValueAtTime(ae,j+.003),E.gain.exponentialRampToValueAtTime(1e-4,j+G),B.connect(E),E.connect(a),B.start(j),B.stop(j+G+.01),(de||Pe)&&f.sputter.length>0){const xe=Pe?f.sputter[0]:f.sputter[1+Math.floor(Math.random()*Math.max(1,f.sputter.length-1))]||f.sputter[f.sputter.length-1],Me=.16+.1*Math.random(),oe=Math.max(0,xe.duration-Me-.05),P=Math.random()*oe,T=t.createBufferSource();T.buffer=xe,T.playbackRate.value=.94+.12*Math.random();const W=t.createGain(),ne=Math.min(.55,(Pe?.22:.32)*q);W.gain.setValueAtTime(1e-4,j),W.gain.linearRampToValueAtTime(ne,j+.005),W.gain.exponentialRampToValueAtTime(1e-4,j+Me),T.connect(W),W.connect(d),T.start(j,P,Me+.02)}}function ie($=1,q="auto"){if(!t||!n)return;b+=1;let pe=q;pe==="auto"&&(M<-.25&&g>.18?pe="overrun":g<.15?pe="idle":pe="accel");const se=pe==="overrun"?1+Math.floor(Math.random()*2):1;let Pe=0;for(let de=0;de<se;de++)J(Pe,$*(.85+.2*Math.random()),pe),Pe+=.075+.065*Math.random()}function F($){return n=!!$,n?(he(),t&&t.state==="suspended"&&t.resume(),a&&t&&a.gain.setTargetAtTime(e,t.currentTime,.05)):a&&t&&a.gain.setTargetAtTime(1e-4,t.currentTime,.05),n}function H(){return F(!n)}function Q($){if(!n||!t||t.state!=="running")return;const q=performance.now(),pe=Math.min(.1,Math.max(.004,(q-C)*.001));C=q;const se=Math.abs($.speed||0),Pe=Math.min(1.45,se/.204),de=(Pe-y)/pe;y=Pe;const X=1-Math.exp(-9.5*pe),j=1-Math.exp(-6.5*pe),G=1-Math.exp(-6*pe),B=1-Math.exp(-7.5*pe);g+=(Pe-g)*X,M+=(de-M)*j;const ae=($.boostActive||0)>0||se>.245?1:0;w+=(ae-w)*G;const xe=typeof $.slope=="number"?$.slope:$.tangent&&typeof $.tangent.y=="number"?$.tangent.y:0,Me=typeof $.s=="number"?($.s%3.12+3.12)%3.12:-1;let oe=0;if(Me>=.4&&Me<=1.34){const Te=(Me-.4)/.94,Ye=Math.min(1,Te/.16),ut=Math.min(1,(1-Te)/.28),gt=.35+.65*Math.exp(-Math.pow((Te-.32)/.28,2));oe=Ye*ut*gt}else if(Me>=1.46&&Me<=2.48){const Te=(Me-1.46)/1.02,Ye=Math.min(1,Te/.16),ut=Math.min(1,(1-Te)/.26),gt=.35+.65*Math.exp(-Math.pow((Te-.38)/.28,2));oe=Ye*ut*gt}const P=xe>0?xe*.72:xe*.32,T=Math.max(-.12,Math.min(.36,P+oe*.18));A+=(T-A)*B;const W=Math.min(1.08,g),ne=Math.min(1,Math.max(0,(-M-.06)/.55+Math.max(0,A)*.75)),be=M>=0?Math.min(.11,M*.075):Math.max(-.14,M*.12);let me;W<=.48?me=.66+W/.48*(.74-.66):W<=.78?me=.74+(W-.48)/.3*(.96-.74):me=.96+(W-.78)/.24*(1.28-.96);const ke=Math.max(.66,Math.min(1.46,me-A+.16*w+be)),Le=Math.round(122*ke),He=t.currentTime,Ze=.035;if(h.idle&&h.cruise){const Te=Math.min(1,Math.max(0,(se-.005)/.007)),Ye=.96*Math.cos(.5*Math.PI*Te),ut=.96*Math.sin(.5*Math.PI*Te);h.idle.gain.gain.setTargetAtTime(Ye,He,Ze),h.idle.src.playbackRate.setTargetAtTime(1,He,Ze),h.cruise.gain.gain.setTargetAtTime(ut,He,Ze),h.cruise.src.playbackRate.setTargetAtTime(ke,He,Ze)}else h.cruise&&(h.cruise.gain.gain.setTargetAtTime(.96,He,Ze),h.cruise.src.playbackRate.setTargetAtTime(ke,He,Ze));const Ne=Math.max(0,ke-.95),Fe=Math.max(0,A)*9.5,ve=m*(2.8+8.5*Ne+Fe+1.2*Math.max(0,be*10));if(l&&l.gain.setTargetAtTime(Math.min(10.5,ve),He,.04),d){const Te=Math.max(-1.5,(ke<.92?2.4:2-3*Ne)-Math.max(0,A)*8);d.gain.setTargetAtTime(Te,He,.04)}const Se=Math.max(0,.96-ke)*9500,Ee=Math.max(2150,Math.min(6800,6400-7200*Math.max(0,ke-1.04)-Se-650*ne));if(c.frequency.setTargetAtTime(Ee,He,.04),p&&S){const Te=Math.min(82,Math.max(40,Le*.5));p.frequency.setTargetAtTime(Te,He,.03);const Ye=Math.min(.2,.075*m*(.85+.35*Math.min(1,W)+Math.max(0,A)*.8));S.gain.setTargetAtTime(Ye,He,.04)}const We=$.isDrifting?.42*Math.min(1,g/.3):0,Z=($.curbRumble||0)>.05?Math.min(.48,$.curbRumble*.48):0;h.drift&&(h.drift.gain.gain.setTargetAtTime(We,He,.04),h.drift.src.playbackRate.setTargetAtTime(.92+.18*g,He,.05)),h.curb&&(h.curb.gain.gain.setTargetAtTime(Z,He,.03),h.curb.src.playbackRate.setTargetAtTime(.88+.32*g,He,.04)),u>.05&&He>=_&&(ne>.22&&g>.22?(ie(u*.85,"overrun"),_=He+(.6+.75*Math.random())/Math.max(.3,u)):g<.1?(ie(u*.45,"idle"),_=He+(3.2+2.5*Math.random())/Math.max(.3,u)):_=He+.35);const{wIdle:Be,wCruise:Ve,wFlatout:Ke,wBoost:re}=Yv(75+129*Math.min(1,W)+64*w),ee=ne*Math.min(1,g/.25)*.85;x={stemsLoaded:o,normSpeed:Number(g.toFixed(2)),cruisePlaybackRate:Number(ke.toFixed(2)),weights:{idle:Number(Be.toFixed(2)),cruise:Number(Math.max(Ve,.95).toFixed(2)),flatout:Number(Ke.toFixed(2)),decel:Number(ee.toFixed(2)),f1Boost:Number(re.toFixed(2)),rumble:Number(Math.min(1,m*(.65+.25*Math.min(1,W))).toFixed(2)),drift:Number(We.toFixed(2)),curb:Number(Z.toFixed(2))},filterCutoffHz:Math.round(Ee),harmonicBridgeHz:Le,sputterCount:b}}function Y(){if(!n||!t||t.state!=="running")return;const $=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((pe,se)=>{const Pe=t.createOscillator(),de=t.createGain();Pe.type="sine",Pe.frequency.value=pe,de.gain.setValueAtTime(.001,$+se*.07),de.gain.exponentialRampToValueAtTime(.12,$+se*.07+.02),de.gain.exponentialRampToValueAtTime(1e-4,$+se*.07+.35),Pe.connect(de),de.connect(a),Pe.start($+se*.07),Pe.stop($+se*.07+.38)})}function ge($=!1){if(!n||(he(),!t))return;t.state==="suspended"&&t.resume();const q=t.currentTime,pe=$?1760:880,se=$?.42:.2,Pe=$?1.1:.88;r&&(r.gain.setValueAtTime(.72,q),r.gain.linearRampToValueAtTime(1,q+se));const de=t.createBiquadFilter();de.type="lowpass",de.frequency.value=$?5200:3e3,de.Q.value=.707,de.connect(a);const X=t.createGain();X.gain.setValueAtTime(1e-4,q),X.gain.linearRampToValueAtTime(Pe,q+.005),X.gain.setValueAtTime(Pe*.92,q+se*.65),X.gain.exponentialRampToValueAtTime(1e-4,q+se),X.connect(de);const j=t.createOscillator();j.type="sine",j.frequency.setValueAtTime(pe,q),j.connect(X);const G=t.createOscillator();G.type="triangle",G.frequency.setValueAtTime(pe,q);const B=t.createGain();B.gain.value=.32,G.connect(B),B.connect(X),j.start(q),G.start(q),j.stop(q+se+.02),G.stop(q+se+.02)}function V($=1){if(!n||!t||t.state!=="running")return;const q=t.currentTime,pe=Math.max(.2,Math.min(1.35,Number($)||1)),se=.96+.08*Math.random();r&&(r.gain.cancelScheduledValues(q),r.gain.setValueAtTime(1,q),r.gain.linearRampToValueAtTime(Math.max(.38,1-.45*pe),q+.01),r.gain.linearRampToValueAtTime(1,q+.085));const Pe=.09,de=t.createGain(),X=Math.min(.42,.28*pe);de.gain.setValueAtTime(1e-4,q),de.gain.linearRampToValueAtTime(X,q+.004),de.gain.exponentialRampToValueAtTime(1e-4,q+Pe),de.connect(a);const j=t.createOscillator();j.type="sine",j.frequency.setValueAtTime(110*se,q),j.frequency.exponentialRampToValueAtTime(42*se,q+Pe),j.connect(de);const G=t.createOscillator();G.type="triangle",G.frequency.setValueAtTime(110*se,q),G.frequency.exponentialRampToValueAtTime(42*se,q+Pe);const B=t.createGain();B.gain.value=.35,G.connect(B),B.connect(de),j.start(q),G.start(q),j.stop(q+Pe+.015),G.stop(q+Pe+.015);const E=.11,ae=t.createBiquadFilter();ae.type="bandpass",ae.frequency.setValueAtTime(1280*se,q),ae.Q.setValueAtTime(2.2,q),ae.connect(a),[{freq:980*se,endFreq:860*se,type:"triangle",gain:.16*pe},{freq:1640*se,endFreq:1420*se,type:"sine",gain:.11*pe}].forEach(Me=>{const oe=t.createOscillator(),P=t.createGain();oe.type=Me.type,oe.frequency.setValueAtTime(Me.freq,q),oe.frequency.exponentialRampToValueAtTime(Me.endFreq,q+E);const T=Math.min(.24,Me.gain);P.gain.setValueAtTime(1e-4,q),P.gain.linearRampToValueAtTime(T,q+.003),P.gain.exponentialRampToValueAtTime(1e-4,q+E),oe.connect(P),P.connect(ae),oe.start(q),oe.stop(q+E+.015)})}function te(){if(!n||!t||t.state!=="running")return;const $=t.currentTime;r&&(r.gain.cancelScheduledValues($),r.gain.setValueAtTime(.68,$),r.gain.linearRampToValueAtTime(1,$+1.15));const q=t.createBiquadFilter();q.type="lowpass",q.frequency.setValueAtTime(3600,$),q.frequency.linearRampToValueAtTime(5400,$+.34),q.frequency.exponentialRampToValueAtTime(2400,$+1.35),q.Q.value=.707,q.connect(a);const pe=[{freq:523.25,start:0,dur:.32,gain:.14},{freq:659.25,start:.07,dur:.34,gain:.14},{freq:783.99,start:.14,dur:.36,gain:.15},{freq:987.77,start:.21,dur:.42,gain:.15},{freq:1046.5,start:.29,dur:.92,gain:.19}],se=[{freq:523.25,start:.29,dur:.88,gain:.11},{freq:659.25,start:.29,dur:.88,gain:.1},{freq:783.99,start:.29,dur:.9,gain:.11},{freq:987.77,start:.29,dur:.86,gain:.09},{freq:1174.66,start:.31,dur:.84,gain:.08}];[...pe,...se].forEach(({freq:Pe,start:de,dur:X,gain:j})=>{const G=$+de,B=t.createGain();B.gain.setValueAtTime(1e-4,G),B.gain.linearRampToValueAtTime(j,G+.014),B.gain.setValueAtTime(j*.85,G+X*.35),B.gain.exponentialRampToValueAtTime(1e-4,G+X),B.connect(q);const E=t.createOscillator();E.type="sine",E.frequency.setValueAtTime(Pe,G),E.connect(B);const ae=t.createOscillator();ae.type="triangle",ae.frequency.setValueAtTime(Pe,G);const xe=t.createGain();xe.gain.value=.38,ae.connect(xe),xe.connect(B),E.start(G),ae.start(G),E.stop(G+X+.02),ae.stop(G+X+.02)})}return{preload:z,toggle:H,setEnabled:F,update:Q,playLapChime:Y,playRaceFinishFanfare:te,playRailImpact:V,playF1CountdownBeep:ge,triggerSputterBurst:ie,setRumbleAmount:$=>{m=Math.max(0,Math.min(2.5,Number($)))},setSputterAmount:$=>{u=Math.max(0,Math.min(2.5,Number($)))},isEnabled:()=>n,getDiagnostics:()=>x}}const $v=Zv;function ws(i,e,t=0,n=0,o=0,s=0,a=0,r=0){const l=new I(i,e);return l.position.set(t,n,o),l.rotation.set(s,a,r),l.castShadow=!0,l.receiveShadow=!0,l}function wt(i,e,t,n,o,s,a,r=0,l=0,c=0){return ws(new Re(i,e,t),n,o,s,a,r,l,c)}function so(i,e,t,n,o,s,a,r=0,l=0,c=0,d=14){return ws(new st(i,e,t,d),n,o,s,a,r,l,c)}function Va(i,e,t,n,o,s=1,a=1,r=1){const l=ws(new Pt(i,18,14),e,t,n,o);return l.scale.set(s,a,r),l}function wi(i,e,t,n){const o=new L(...i),s=new L(...e),a=o.distanceTo(s),r=ws(new st(t,t,a,10),n);return r.position.copy(o).add(s).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new L(0,1,0),s.clone().sub(o).normalize()),r}function Qo(i,e,t,n=45e-5){const o=new _s;i.forEach(([a,r],l)=>l===0?o.moveTo(a,r):o.lineTo(a,r)),o.closePath();const s=new _r(o,{depth:Math.max(2e-4,e-n*2),bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:8});return s.rotateY(-Math.PI/2),s.translate((e-n*2)/2,0,0),s.computeVertexNormals(),ws(s,t)}function oo(i,e,t,n,o,s=55e-5){const a=new et;return a.add(wt(s,e,s,i,0,e/2,0)),a.add(wt(e*.62,s,s,i,0,e*.68,0)),a.position.set(t,n,o),a}function Au(i,e,t,n,o){const s=new et;s.add(so(12e-5,12e-5,.0042,o,0,.0021,0));for(let a=0;a<2;a++){const r=ws(new Zt(.0011,.0016),new we({color:i[a],side:on,roughness:.6}),0,.0034,-55e-5-a*.0011,0,Math.PI/2,0);r.castShadow=!1,s.add(r)}return s.position.set(e,t,n),s}const Cu={kart:{dosRuedas:!1,ruedas:[{x:-.0056,z:.0054,r:.00185,w:.0017,delantera:!0},{x:.0056,z:.0054,r:.00185,w:.0017,delantera:!0},{x:-.0059,z:-.0054,r:.00215,w:.0022},{x:.0059,z:-.0054,r:.00215,w:.0022}],escapes:[{x:-.00108,y:.00215,z:-.0076},{x:.00108,y:.00215,z:-.0076}],lucesTraseras:[[-.0032,.00275,-.00906],[.0032,.00275,-.00906]],piloto:{y:.0048,z:-8e-4,inclinacion:.14,cabeza:[0,.0078,-4e-4]},volante:{tipo:"volante",y:.0054,z:.0028},sombra:[1,1],construir:null},bolido:{dosRuedas:!1,ruedas:[{x:-.006,z:.0064,r:.0019,w:.0018,delantera:!0},{x:.006,z:.0064,r:.0019,w:.0018,delantera:!0},{x:-.0061,z:-.006,r:.0023,w:.0026},{x:.0061,z:-.006,r:.0023,w:.0026}],escapes:[{x:-6e-4,y:.0034,z:-.0098},{x:6e-4,y:.0034,z:-.0098}],lucesTraseras:[[0,.0026,-.0104]],piloto:{y:.0038,z:-.0012,inclinacion:-.35,cabeza:[0,.0058,-4e-4],escala:.92},volante:{tipo:"volante",y:.0046,z:.0018},sombra:[1,1.18],construir(i,e){i.add(Qo([[.0108,.0016],[.0104,.0024],[.004,.004],[.0016,.0044],[-2e-4,.004],[-.003,.0064],[-.006,.0058],[-.0098,.0036],[-.01,.0016]],.0042,e.principal));for(const t of[-.0034,.0034])i.add(wt(.0024,.0022,.0078,e.principal,t,.0026,-.0018)),i.add(wt(6e-4,.0016,4e-4,e.carbono,t,.003,.0022));i.add(wt(.0012,2e-4,.0064,e.secundario,0,.004,.0066,-.26)),i.add(wt(.0136,45e-5,.0024,e.carbono,0,.0011,.0098));for(const t of[-.0068,.0068])i.add(wt(3e-4,.0018,.0026,e.principal,t,.0016,.0098));i.add(wt(.0104,6e-4,.0026,e.carbono,0,.0074,-.0094,-.15)),i.add(wt(.0104,4e-4,.0016,e.secundario,0,.008,-.009,-.15));for(const t of[-.0052,.0052])i.add(wt(3e-4,.004,.003,e.principal,t,.006,-.0094));i.add(wt(.002,.0016,.0022,e.carbono,0,.0062,-.003)),i.add(oo(e.oro,.0018,0,.0036,.008,35e-5))}},furgoneta:{dosRuedas:!1,ruedas:[{x:-.0051,z:.0058,r:.0019,w:.0016,delantera:!0},{x:.0051,z:.0058,r:.0019,w:.0016,delantera:!0},{x:-.0051,z:-.006,r:.0019,w:.0016},{x:.0051,z:-.006,r:.0019,w:.0016}],escapes:[{x:.003,y:.002,z:-.0098}],lucesTraseras:[[-.004,.004,-.0099],[.004,.004,-.0099]],piloto:{y:.0062,z:.004,inclinacion:.05,cabeza:[.0018,.009,.0046],escala:.85,x:.0018},volante:{tipo:"volante",y:.0072,z:.007,x:.0018},sombra:[1,1.08],construir(i,e){i.add(Qo([[.0096,.0016],[.0099,.006],[-.0096,.006],[-.0096,.0016]],.0106,e.principal)),i.add(Qo([[.0099,.006],[.0088,.0098],[.0074,.011],[-.0086,.011],[-.0096,.01],[-.0096,.006]],.0104,e.secundario)),i.add(wt(.006,2e-4,2e-4,e.secundario,0,.0052,.0101,0,0,0)),i.add(oo(e.oro,.0022,0,.004,.0102,45e-5)),i.add(wt(.0088,.0028,2e-4,e.cristal,0,.0083,.0093,-.32));for(const t of[-.0053,.0053])for(const n of[.005,.001,-.003,-.0068])i.add(wt(2e-4,.0024,.003,e.cristal,t,.0084,n));for(const t of[-.0054,.0054])for(const n of[.0058,-.006])i.add(wt(4e-4,.0012,.0046,e.carbono,t,.0026,n));i.add(wt(.0108,8e-4,6e-4,e.cromo,0,.002,.01)),i.add(wt(.0108,8e-4,6e-4,e.cromo,0,.002,-.0099));for(const t of[-.0034,.0034])i.add(so(9e-4,9e-4,4e-4,e.faro,t,.0044,.0101,Math.PI/2,0,0));i.add(wt(.0086,3e-4,.012,e.cromo,0,.0114,-8e-4)),i.add(wt(.005,.002,.004,e.maleta,-.0012,.0125,-.004)),i.add(wt(.0036,.0016,.003,e.maleta2,.0018,.0123,6e-4)),i.add(oo(e.madera,.004,.0025,.0115,-.0072,5e-4))}},papamovil:{dosRuedas:!1,ruedas:[{x:-.0053,z:.0064,r:.002,w:.0017,delantera:!0},{x:.0053,z:.0064,r:.002,w:.0017,delantera:!0},{x:-.0053,z:-.0064,r:.002,w:.0017},{x:.0053,z:-.0064,r:.002,w:.0017}],escapes:[{x:-.003,y:.002,z:-.0102},{x:.003,y:.002,z:-.0102}],lucesTraseras:[[-.0042,.0046,-.0103],[.0042,.0046,-.0103]],piloto:{y:.0064,z:.0036,inclinacion:.05,cabeza:[0,.009,.004],escala:.82},volante:{tipo:"volante",y:.0072,z:.0058},sombra:[1,1.12],construir(i,e){i.add(Qo([[.0104,.0016],[.0106,.0044],[.0084,.0058],[.006,.006],[-.0102,.006],[-.0102,.0016]],.011,e.blanco)),i.add(Qo([[.006,.006],[.005,.0084],[.001,.0086],[8e-4,.006]],.01,e.blanco)),i.add(wt(.009,.002,2e-4,e.cristal,0,.0072,.0057,-.45));for(const a of[-.0056,.0056])i.add(wt(2e-4,.001,.02,e.principal,a,.004,0)),i.add(wt(2e-4,3e-4,.02,e.oro,a,.0049,0));const t=.006,n=.0068,o=new et,s=wt(.0098,n,.0094,e.vitrina,0,t+n/2,-.005);s.castShadow=!1,o.add(s);for(const a of[-.0049,.0049]){for(const r of[-3e-4,-.0097])o.add(wt(6e-4,n,6e-4,e.blanco,a,t+n/2,r));o.add(wt(6e-4,6e-4,.0094,e.blanco,a,t+n,-.005))}for(const a of[-3e-4,-.0097])o.add(wt(.0098,6e-4,6e-4,e.blanco,0,t+n,a));o.add(wt(.01,5e-4,.0096,e.blanco,0,t+n+3e-4,-.005)),i.add(o),i.add(wt(.0036,.001,.003,e.rojo,0,.0068,-.0058)),i.add(wt(.0036,.0036,6e-4,e.oro,0,.008,-.0072)),i.add(oo(e.oro,.0034,0,t+n+5e-4,-.0018,5e-4)),i.add(Au([16765498,16250866],.005,.0058,.0094,e.cromo)),i.add(Au([16765498,16250866],-.005,.0058,.0094,e.cromo)),i.add(wt(.0112,8e-4,6e-4,e.cromo,0,.0021,.0105));for(const a of[-.0038,.0038])i.add(wt(.0018,.001,3e-4,e.faro,a,.004,.0107))}},moto:{dosRuedas:!0,ruedas:[{x:0,z:.0068,r:.0022,w:.0011,delantera:!0},{x:0,z:-.0062,r:.0022,w:.0014}],escapes:[{x:-.001,y:.0052,z:-.0082,rot:.25}],lucesTraseras:[[0,.0066,-.0084]],piloto:{y:.0076,z:-8e-4,inclinacion:.95,cabeza:[0,.0094,.0026],escala:.9,moto:!0},volante:{tipo:"manillar",y:.008,z:.005,ancho:.0058},sombra:[.5,1.12],construir(i,e){i.add(Qo([[.0088,.0046],[.0064,.0074],[.003,.0074],[0,.0066],[-.003,.0062],[-.008,.0074],[-.0084,.0064],[-.004,.004],[-.001,.0024],[.005,.0024]],.0034,e.principal,6e-4)),i.add(wt(.0038,4e-4,.006,e.secundario,0,.005,.0045,.4)),i.add(wt(.0039,3e-4,.004,e.oro,0,.004,.002,.15)),i.add(wt(.003,2e-4,.003,e.cristal,0,.008,.006,-.9)),i.add(wt(.0026,6e-4,.0044,e.carbono,0,.0066,-.003,-.06));for(const t of[-.001,.001])i.add(wi([t,.0022,.0068],[t,.0074,.005],28e-5,e.cromo));for(const t of[-.001,.001])i.add(wi([t,.0022,-.0062],[t,.003,-8e-4],32e-5,e.carbono));i.add(wt(.0026,.0022,.0034,e.cromo,0,.0032,.0012)),i.add(wt(.0016,3e-4,.0034,e.principal,0,.0047,.007,.1)),i.add(so(9e-4,9e-4,4e-4,e.faro,0,.006,.0089,Math.PI/2-.5,0,0)),i.add(oo(e.oro,.0016,.0018,.0042,.005,3e-4)),i.add(oo(e.oro,.0016,-.0018,.0042,.005,3e-4))}},scooter:{dosRuedas:!0,ruedas:[{x:0,z:.006,r:.0016,w:.0012,delantera:!0},{x:0,z:-.0056,r:.0016,w:.0013}],escapes:[{x:-.0016,y:.0018,z:-.0076}],lucesTraseras:[[0,.0058,-.008]],piloto:{y:.0076,z:-.0024,inclinacion:.12,cabeza:[0,.0108,-.0014],escala:.92,moto:!0},volante:{tipo:"manillar",y:.01,z:.0052,ancho:.006},sombra:[.55,.95],construir(i,e){i.add(Va(.004,e.principal,0,.0044,-.0042,.75,.62,1.25)),i.add(wt(.0034,6e-4,.006,e.carbono,0,.0022,.001)),i.add(wt(.0044,.006,6e-4,e.principal,0,.0054,.005,-.18)),i.add(wt(.0046,4e-4,8e-4,e.secundario,0,.0084,.0045,-.18)),i.add(wi([0,.003,.0062],[0,.0098,.005],45e-5,e.cromo)),i.add(Va(.0018,e.principal,0,.003,.0062,.8,.5,1.2)),i.add(so(.0012,.0012,6e-4,e.faro,0,.0098,.006,Math.PI/2,0,0)),i.add(wt(.0024,6e-4,.005,e.carbono,0,.0071,-.003)),i.add(wt(.0028,.002,.0026,e.secundario,0,.0076,-.0074)),i.add(oo(e.oro,.0014,0,.007,-.0088,3e-4)),i.add(so(.0012,.0012,8e-4,e.carbono,.0023,.004,-.004,0,0,Math.PI/2))}},chopper:{dosRuedas:!0,ruedas:[{x:0,z:.01,r:.0021,w:8e-4,delantera:!0},{x:0,z:-.0064,r:.0025,w:.002}],escapes:[{x:-.0018,y:.0026,z:-.009},{x:.0018,y:.0026,z:-.009}],lucesTraseras:[[0,.0052,-.009]],piloto:{y:.0066,z:-.0024,inclinacion:-.28,cabeza:[0,.0096,-.0034],escala:.92,moto:!0},volante:{tipo:"manillar",y:.0118,z:.0052,ancho:.0068},sombra:[.55,1.3],construir(i,e){i.add(Va(.0024,e.principal,0,.0064,.002,.8,.62,1.5)),i.add(wt(2e-4,.0012,.003,e.oro,.0019,.0064,.002)),i.add(wt(2e-4,.0012,.003,e.oro,-.0019,.0064,.002)),i.add(wi([0,.0068,.0048],[0,.0058,-.006],35e-5,e.cromo)),i.add(wi([0,.0068,.0048],[0,.0024,.001],35e-5,e.cromo)),i.add(wi([0,.0024,.001],[0,.0026,-.0064],35e-5,e.cromo));for(const t of[-9e-4,9e-4])i.add(wi([t,.0021,.01],[t,.0084,.005],28e-5,e.cromo));i.add(so(8e-4,9e-4,.003,e.cromo,0,.0038,.0024,.45,0,0)),i.add(so(8e-4,9e-4,.003,e.cromo,0,.0038,-2e-4,-.45,0,0)),i.add(wt(.0022,.0016,.0034,e.carbono,0,.0024,.0012)),i.add(wt(.003,6e-4,.004,e.cuero,0,.0052,-.0026)),i.add(wt(.0022,.004,4e-4,e.cromo,0,.007,-.006,-.2)),i.add(oo(e.oro,.0026,0,.009,-.0063,35e-5)),i.add(Va(.0028,e.principal,0,.0034,-.0066,.5,.55,1.05));for(const t of[-.0018,.0018])i.add(wi([t,.0026,.001],[t,.0026,-.0088],42e-5,e.cromo));i.add(so(.001,.001,6e-4,e.faro,0,.008,.0062,Math.PI/2,0,0))}}};function Jv(i,e){const t=new et;t.position.set(0,i.y,i.z);const n=i.ancho??.006;return t.add(wi([-n/2,6e-4,-8e-4],[n/2,6e-4,-8e-4],26e-5,e.cromo)),t.add(wi([-n/2,6e-4,-8e-4],[-n/2-2e-4,.001,-.0014],34e-5,e.carbono)),t.add(wi([n/2,6e-4,-8e-4],[n/2+2e-4,.001,-.0014],34e-5,e.carbono)),t}function i0(i={}){const e=Cu[i.tipo]?i.tipo:"kart",t=Cu[e],n=i.color??16722718,o=i.colorSecundario??16251388,s=i.colorLlanta??16759620,a=i.colorCasco??16777215,r=i.colorVisera??1993727,l=i.colorTraje??15791354,c=i.numero??"1",d=i.conLuces!==!1,h=t.dosRuedas?6e-4:.0044,f=new et;f.name=`Vehiculo_${e}_${c}`;const p=new et;p.name=`Chasis_${e}`,f.add(p);const v=new we({color:n,roughness:.22,metalness:.35}),S=new we({color:o,roughness:.25,metalness:.1}),m=new we({color:1579810,roughness:.42,metalness:.45}),u=new we({color:14476528,roughness:.15,metalness:.92}),g=new we({color:s,roughness:.25,metalness:.85}),M=new we({color:1184793,roughness:.82,metalness:.05}),w={principal:v,secundario:S,carbono:m,cromo:u,oro:new we({color:15909450,roughness:.22,metalness:.9,emissive:3810304,emissiveIntensity:.4}),blanco:new we({color:16250609,roughness:.18,metalness:.25}),rojo:new we({color:10361634,roughness:.6}),cristal:new we({color:857638,roughness:.06,metalness:.6}),vitrina:new we({color:13625599,roughness:.04,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),faro:new we({color:16774364,emissive:16773583,emissiveIntensity:1.6,roughness:.2}),maleta:new we({color:9067051,roughness:.7}),maleta2:new we({color:3955322,roughness:.7}),madera:new we({color:8014629,roughness:.8}),cuero:new we({color:3810326,roughness:.75})},A=document.createElement("canvas");A.width=256,A.height=256;const y=A.getContext("2d");y.clearRect(0,0,256,256),y.save(),y.translate(128,128),y.scale(.86,1.08);const C=y.createRadialGradient(0,0,14,0,0,112);C.addColorStop(0,"rgba(2, 2, 5, 0.92)"),C.addColorStop(.48,"rgba(3, 3, 7, 0.76)"),C.addColorStop(.76,"rgba(5, 5, 10, 0.34)"),C.addColorStop(1,"rgba(6, 6, 12, 0.0)"),y.fillStyle=C,y.beginPath(),y.arc(0,0,112,0,Math.PI*2),y.fill(),y.restore(),y.save(),y.translate(128,128),y.scale(.58,.92);const _=y.createRadialGradient(0,0,10,0,0,96);_.addColorStop(0,"rgba(1, 1, 3, 0.96)"),_.addColorStop(.62,"rgba(2, 2, 5, 0.88)"),_.addColorStop(.88,"rgba(4, 4, 8, 0.38)"),_.addColorStop(1,"rgba(4, 4, 8, 0.0)"),y.fillStyle=_,y.beginPath(),y.arc(0,0,96,0,Math.PI*2),y.fill(),y.restore();for(const[re,ee]of[[-.28,-.22],[.28,-.22],[-.28,.23],[.28,.23]]){const Te=128+re*256,Ye=128+ee*256;y.save(),y.translate(Te,Ye),y.scale(.82,1.28);const ut=y.createRadialGradient(0,0,4,0,0,34);ut.addColorStop(0,"rgba(1, 1, 3, 0.95)"),ut.addColorStop(.55,"rgba(2, 2, 5, 0.72)"),ut.addColorStop(1,"rgba(4, 4, 8, 0.0)"),y.fillStyle=ut,y.beginPath(),y.arc(0,0,34,0,Math.PI*2),y.fill(),y.restore()}const b=new zt(A),x=new I(new Zt(.0175*t.sombra[0],.024*t.sombra[1]),new kt({map:b,transparent:!0,opacity:.95,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8}));if(x.rotation.x=-Math.PI/2,x.position.set(0,72e-5,-2e-4),x.castShadow=!1,x.receiveShadow=!1,f.add(x),e==="kart"){const re=new I(new Re(.0082,9e-4,.0155),m);re.position.set(0,.0014,0),re.castShadow=!1,p.add(re);const ee=new I(new Re(.0086,.0021,.0044),v);ee.position.set(0,.0023,.0068),ee.rotation.x=.22,ee.castShadow=!1,p.add(ee);const Te=document.createElement("canvas");Te.width=128,Te.height=64;const Ye=Te.getContext("2d");Ye.fillStyle=typeof o=="number"?`#${o.toString(16).padStart(6,"0")}`:"#ffffff",Ye.fillRect(0,0,128,64),Ye.fillStyle="#0a0d14",Ye.font="bold 44px sans-serif",Ye.textAlign="center",Ye.textBaseline="middle",Ye.fillText(String(c),64,32);const ut=new zt(Te),gt=new we({map:ut,roughness:.25,metalness:.1}),Ct=new I(new Re(.0048,4e-4,.0028),gt);Ct.position.set(0,.0033,.0066),Ct.rotation.x=.22,p.add(Ct);for(const gn of[-.0044,.0044]){const ln=new I(new Re(.0024,.0024,.0076),v);ln.position.set(gn,.0024,-4e-4),ln.castShadow=!1,p.add(ln)}const Gt=new I(new Re(.0034,.0036,.0042),u);Gt.position.set(.0022,.0036,-.0048),Gt.castShadow=!1,p.add(Gt);const un=new I(new Re(.0096,7e-4,.0024),m);un.position.set(0,.0068,-.0076),un.rotation.x=-.18,un.castShadow=!1,p.add(un)}else t.construir(p,w);function R(re){return new an({uniforms:{uTime:{value:0},uIntensity:{value:1},uPhase:{value:re}},transparent:!0,depthWrite:!1,blending:Gn,side:on,toneMapped:!1,vertexShader:`
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
      `})}function U(){const re=new st(72e-5,22e-5,.0052,16,8,!0);re.rotateX(Math.PI/2),re.translate(0,0,-.0026);const ee=new st(46e-5,12e-5,.004,14,6,!0);ee.rotateX(Math.PI/2),ee.translate(0,0,-.002);const Te=new Zt(.00145,.005,1,6);Te.rotateX(Math.PI/2),Te.rotateZ(.66),Te.translate(0,0,-.0025);const Ye=new Zt(.00145,.005,1,6);Ye.rotateX(Math.PI/2),Ye.rotateZ(-.66),Ye.translate(0,0,-.0025);const ut=new Zi(74e-5,16);return ut.rotateY(Math.PI),ut.translate(0,0,-25e-5),{outerCone:re,innerCore:ee,finA:Te,finB:Ye,nozzleDisc:ut}}const O=U(),N=[];t.escapes.forEach((re,ee)=>{const Te=new I(new st(56e-5,62e-5,.0032,16),u);Te.rotation.x=Math.PI/2+.12+(re.rot??0),Te.position.set(re.x,re.y,re.z),p.add(Te);const Ye=new et;Ye.position.set(re.x,re.y-7e-5,re.z-.00135),Ye.rotation.x=.18+(re.rot??0),Ye.visible=!1;const ut=R(ee*2.15);for(const gt of[O.outerCone,O.innerCore,O.finA,O.finB,O.nozzleDisc]){const Ct=new I(gt,ut);Ct.frustumCulled=!1,Ye.add(Ct)}Ye.userData.jetMat=ut,Ye.userData.pipeIndex=ee,p.add(Ye),N.push(Ye)});const k=document.createElement("canvas");k.width=128,k.height=128;const z=k.getContext("2d"),K=z.createRadialGradient(64,64,4,64,64,62);K.addColorStop(0,"rgba(255, 10, 34, 0.88)"),K.addColorStop(.32,"rgba(255, 0, 24, 0.56)"),K.addColorStop(.68,"rgba(220, 0, 18, 0.20)"),K.addColorStop(1,"rgba(180, 0, 12, 0.0)"),z.fillStyle=K,z.fillRect(0,0,128,128);const he=new zt(k),J=new Zt(.0038,.0024),ie=new kt({map:he,transparent:!0,opacity:.9,blending:Gn,depthWrite:!1,toneMapped:!1,side:on,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});for(const[re,ee,Te]of t.lucesTraseras){const Ye=new I(J,ie);Ye.position.set(re,ee,Te),Ye.rotation.y=Math.PI,Ye.castShadow=!1,Ye.receiveShadow=!1,p.add(Ye)}const F=new Vn(16738328,0,.045,0);F.position.set(0,.0028,-.009),d&&p.add(F);let H=.12,Q=0;function Y(re,ee=!0){H=Math.max(0,Number(re)||0),ee&&(Q=.85)}const ge=t.piloto,V=ge.escala??1;if(e==="kart"){const re=new I(new Re(.0042,.0044,.0038),m);re.position.set(0,.0036,-.0015),re.rotation.x=-.22,p.add(re)}const te=new we({color:l,roughness:.35,metalness:.08}),$=new I(new Re(.0036,.0038,.0028),te);if($.position.set(ge.x??0,ge.y,ge.z),$.rotation.x=ge.inclinacion,$.scale.setScalar(V),p.add($),ge.moto)for(const re of[-.0016,.0016]){const ee=new I(new Re(.0011,.0011,.0036),te);ee.position.set(re*V,ge.y-.0018,ge.z+.0014),ee.rotation.x=-.35,p.add(ee)}const q=new et;q.position.set(...ge.cabeza),q.scale.setScalar(V);const pe=new we({color:15251604,roughness:.6});if(i.tocado==="velo"){const re=new I(new Pt(.0017,16,12),pe);re.position.z=3e-4,q.add(re);const ee=new I(new Pt(.0021,18,14,0,Math.PI*2,0,Math.PI*.62),new we({color:16184558,roughness:.7}));ee.rotation.x=-.5,q.add(ee);const Te=new I(new Pt(.0024,18,14,Math.PI*.2,Math.PI*1.6,0,Math.PI*.72),new we({color:a,roughness:.8,side:on}));Te.rotation.y=Math.PI,Te.position.set(0,1e-4,-3e-4),q.add(Te)}else{const re=new I(new Pt(.0022,20,18),new we({color:a,roughness:.14,metalness:.25}));re.scale.set(.95,1,1.08),q.add(re);const ee=new I(new Pt(.00225,16,12,-.9,1.8,1.05,.75),new we({color:r,emissive:new ze(r),emissiveIntensity:.65,roughness:.08,metalness:.9}));if(ee.rotation.y=Math.PI/2,q.add(ee),i.tocado==="clerical"){const Te=new I(new Nn(.0013,35e-5,8,20),new we({color:16777215,roughness:.5}));Te.rotation.x=Math.PI/2,Te.position.y=-.0021,q.add(Te)}}const se=new I(new Nn(.0016,26e-5,8,28),new kt({color:new ze(1.6,1.25,.45),toneMapped:!1}));se.rotation.x=Math.PI/2,se.position.y=.0032,se.castShadow=!1,q.add(se),p.add(q);let Pe=null,de=null;t.volante.tipo==="volante"?(Pe=new I(new Nn(.0014,32e-5,8,18),m),Pe.position.set(t.volante.x??0,t.volante.y,t.volante.z),Pe.rotation.x=-.55,p.add(Pe)):(de=Jv(t.volante,w),p.add(de));const X=[],j=[];function G(re,ee){const Te=new et,Ye=new I(new st(re,re,ee,20),M);Ye.rotation.z=Math.PI/2,Ye.castShadow=!0,Te.add(Ye);const ut=new I(new st(re*.62,re*.62,ee*1.04,14),g);return ut.rotation.z=Math.PI/2,Te.add(ut),Te}for(const re of t.ruedas){const ee=G(re.r,re.w);if(re.delantera){const Te=new et;Te.position.set(re.x,re.r,re.z),Te.add(ee),p.add(Te),X.push(Te)}else ee.position.set(re.x,re.r,re.z),p.add(ee);j.push(ee)}const B=new sn;if(B.position.set(0,-.008,.072),p.add(B),d){const re=new ms(16774364,9.5,.22,Math.PI*.34,.78,0);re.position.set(0,.016,.0085),re.target=B,p.add(re)}const E=160,ae=new Float32Array(E*3),xe=new Float32Array(E*3),Me=new Float32Array(E),oe=new Float32Array(E),P=[],T=new Float32Array(E),W=new Float32Array(E);for(let re=0;re<E;re++)ae[re*3+1]=-10,P.push(new L),T[re]=999,W[re]=.3,Me[re]=0,oe[re]=.65+Math.random()*1.15,xe[re*3+0]=1,xe[re*3+1]=.48,xe[re*3+2]=.08;const ne=new Bt;ne.setAttribute("position",new rn(ae,3)),ne.setAttribute("color",new rn(xe,3)),ne.setAttribute("aLife",new rn(Me,1)),ne.setAttribute("aSize",new rn(oe,1));const be=new an({uniforms:{uSparkScale:{value:.58},tSceneDepth:{value:null},uNearClip:{value:.0015},uFarClip:{value:12},uFocus:{value:.12},uAperture:{value:0},uMaxBlur:{value:0},uResolution:{value:new Ue(1440,900)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Gn,vertexShader:`
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
    `}),me=new $u(ne,be);me.frustumCulled=!1,me.name="KartDriftSparks";let ke=0,Le=-1,He=!1;const Ze=new L,Ne=new L,Fe=new L;function ve(re,ee,Te=0){const Ye=performance.now();if(Math.abs(Ye-Le)<1e-4)return;Le=Ye;const ut=ee/.002*re;for(const Ct of j)Ct.rotation.x+=ut;const gt=$e.clamp(Te,-.52,.52);for(const Ct of X)Ct.rotation.y=$e.lerp(Ct.rotation.y,gt,Math.min(1,re*16));Pe&&(Pe.rotation.z=gt*1.6),de&&(de.rotation.y=gt*.7),q.rotation.z=-gt*.45,q.rotation.y=gt*.55}function Se(re,ee){const Te=ee.steerAngle!==void 0?ee.steerAngle-(ee.driftAngle||0)*.35:-(ee.steerInput||0)*.45-(ee.driftAngle||0)*.35;ve(re,ee.speed,Te),p.rotation.y=$e.lerp(p.rotation.y,(ee.driftAngle||0)*(t.dosRuedas?.4:1),Math.min(1,re*14));const Ye=t.dosRuedas?ee.leanAngle??(ee.steerInput||0)*.45:(ee.steerInput||0)*.09;p.rotation.z=$e.lerp(p.rotation.z,Ye,Math.min(1,re*10));const ut=Math.abs(ee.speed)>.005?Math.sin(performance.now()*.06)*18e-5:0;p.position.y=(ee.hopHeight||0)+ut;const gt=ee.boostActive>0,Ct=performance.now()*.001;for(const ye of N){if(ye.visible=gt,!ye.visible)continue;const it=(ye.userData.pipeIndex||0)*1.85,dt=.82+.18*Math.sin(Ct*58+it)+.12*Math.cos(Ct*93-it*1.4),yt=.96+.08*Math.sin(Ct*44+it),bt=Math.max(.55,.88+.28*dt);ye.scale.set(yt,yt,bt),ye.userData.jetMat&&(ye.userData.jetMat.uniforms.uTime.value=Ct,ye.userData.jetMat.uniforms.uIntensity.value=Math.min(1.35,.92*dt))}const Gt=f.scale.x||.58;be.uniforms.uSparkScale.value=Gt;const un=(ee.isDrifting||gt||ee.curbRumble>.2||Math.abs(ee.steerInput||0)>.32)&&Math.abs(ee.speed)>.03,gn=un?6:0;Q>0&&(Q=Math.max(0,Q-re));const ln=un||Q>0,Tn=.35+Math.random()*.2;if(F.intensity=ln?Tn*H:$e.lerp(F.intensity,0,Math.min(1,re*12)),gn>0){f.getWorldPosition(Ze),ee.tangent?Ne.copy(ee.tangent).multiplyScalar(-1):(f.getWorldDirection(Ne),Ne.multiplyScalar(-1));for(let ye=0;ye<gn;ye++){const De=ke%E;ke++;const it=ye%2===0?-1:1;Fe.copy(Ze).addScaledVector(ee.right,it*(h+Math.random()*.0018)*Gt).addScaledVector(Ne,(.006+Math.random()*.0028)*Gt).addScaledVector(ee.normal,(9e-4+Math.random()*9e-4)*Gt),ae[De*3+0]=Fe.x,ae[De*3+1]=Fe.y,ae[De*3+2]=Fe.z;const dt=.65+.35*Gt;P[De].copy(Ne).multiplyScalar((.12+Math.random()*.22)*dt).addScaledVector(ee.normal,(.045+Math.random()*.11)*dt).addScaledVector(ee.right,(Math.random()-.5)*.12*dt),T[De]=0,W[De]=.2+Math.random()*.18,Me[De]=1,oe[De]=.65+Math.random()*1.15,xe[De*3+0]=1,xe[De*3+1]=.36+Math.random()*.46,xe[De*3+2]=.04+Math.random()*.14}}let _e=!1;if(gn>0||He){for(let ye=0;ye<E;ye++){const De=W[ye]||.28;T[ye]<De?(_e=!0,T[ye]+=re,Me[ye]=Math.max(0,1-T[ye]/De),ae[ye*3+0]+=P[ye].x*re,ae[ye*3+1]+=P[ye].y*re,ae[ye*3+2]+=P[ye].z*re,P[ye].multiplyScalar(Math.max(.88,1-2.4*re)),P[ye].y-=.36*re):(Me[ye]=0,ae[ye*3+1]=-10)}ne.attributes.position.needsUpdate=!0,ne.attributes.color.needsUpdate=!0,ne.attributes.aLife.needsUpdate=!0,He=_e}}const Ee=p.children.filter(re=>!re.isLight&&re!==B&&!N.includes(re));let We=!1;function Z(re){We=!!re,x.visible=!We;for(const ee of Ee)ee.visible=!We}function Be(){f.traverse(re=>{re.geometry&&!Object.values(O).includes(re.geometry)&&re.geometry.dispose()}),ne.dispose()}const Ve=new fo().setFromObject(p),Ke=Math.max(.008,Ve.max.y);return{tipo:e,spec:t,alto:Ke,kartRoot:f,chassisGroup:p,sparkPoints:me,sparkFireLight:F,setFireLightMultiplier:Y,setCockpitRoadOnly:Z,updateWheels:ve,updateKartVisuals:Se,dispose:Be}}const at={oro:new we({color:14264634,roughness:.25,metalness:.95}),oroViejo:new we({color:11041066,roughness:.4,metalness:.85}),plata:new we({color:13225686,roughness:.22,metalness:.95}),ceraBlanca:new we({color:16052194,roughness:.55,metalness:0}),marfil:new we({color:15985884,roughness:.45}),azulManto:new we({color:3104696,roughness:.5}),celeste:new we({color:9356783,roughness:.5}),piel:new we({color:15319194,roughness:.6}),pielMorena:new we({color:12157526,roughness:.6}),maderaOscura:new we({color:4860951,roughness:.7}),madera:new we({color:9067058,roughness:.75}),maderaClara:new we({color:12618325,roughness:.7}),paja:new we({color:14267484,roughness:.95}),rojoLiturgico:new we({color:10098208,roughness:.55}),piedra:new we({color:10130570,roughness:.92}),cuentaRosario:new we({color:5974666,roughness:.15,metalness:.3})};function Tr(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const o=new zt(n);return o.colorSpace=jt,o.anisotropy=4,o}const fl=new Map;function Kv(i="255,190,90"){return fl.has(i)||fl.set(i,Tr(128,128,e=>{const t=e.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,`rgba(${i},1)`),t.addColorStop(.25,`rgba(${i},0.55)`),t.addColorStop(.6,`rgba(${i},0.14)`),t.addColorStop(1,`rgba(${i},0)`),e.fillStyle=t,e.fillRect(0,0,128,128)})),fl.get(i)}function di(i,e="255,190,90",t=1){const n=new Zu(new qc({map:Kv(e),transparent:!0,opacity:t,blending:Gn,depthWrite:!1,toneMapped:!1}));return n.scale.set(i,i,1),n}function ur(i="roseton",e=512,t=512){return Tr(e,t,n=>{n.fillStyle="#0b0a14",n.fillRect(0,0,e,t);const o=["#1f4fd1","#d12a2a","#f0b52b","#2aa36b","#7a3bd1","#33b6e0","#f06a2b"];if(i==="roseton"){const s=e/2,a=t/2,r=Math.min(e,t)*.48;for(let l=0;l<5;l++){const c=r*l/5,d=r*(l+1)/5,h=6+l*6;for(let f=0;f<h;f++){const p=f/h*Math.PI*2,v=(f+1)/h*Math.PI*2;n.beginPath(),n.arc(s,a,d,p,v),n.arc(s,a,c,v,p,!0),n.closePath(),n.fillStyle=o[(f+l*2)%o.length],n.fill(),n.lineWidth=5,n.strokeStyle="#141018",n.stroke()}}n.fillStyle="#ffd86a",n.fillRect(s-r*.05,a-r*.17,r*.1,r*.34),n.fillRect(s-r*.13,a-r*.07,r*.26,r*.09)}else{n.save(),n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.08,t*.32),n.quadraticCurveTo(e*.5,-t*.08,e*.92,t*.32),n.lineTo(e*.92,t),n.closePath(),n.clip();const s=9,a=5;for(let r=0;r<s;r++)for(let l=0;l<a;l++)n.fillStyle=o[(l*3+r*2+(i==="b"?1:0))%o.length],n.fillRect(l*e/a,r*t/s,e/a+1,t/s+1);n.strokeStyle="#141018",n.lineWidth=6;for(let r=1;r<s;r++)n.beginPath(),n.moveTo(0,r*t/s+Math.sin(r)*6),n.lineTo(e,r*t/s-Math.cos(r)*6),n.stroke();for(let r=1;r<a;r++)n.beginPath(),n.moveTo(r*e/a,0),n.lineTo(r*e/a,t),n.stroke();n.fillStyle="#f6e7c8",n.beginPath(),n.arc(e*.5,t*.34,e*.07,0,Math.PI*2),n.fill(),n.strokeStyle="#ffd86a",n.lineWidth=10,n.beginPath(),n.arc(e*.5,t*.34,e*.11,0,Math.PI*2),n.stroke(),n.fillStyle=i==="b"?"#1f4fd1":"#d12a2a",n.beginPath(),n.moveTo(e*.5,t*.4),n.lineTo(e*.32,t*.86),n.lineTo(e*.68,t*.86),n.closePath(),n.fill(),n.restore(),n.strokeStyle="#1a1520",n.lineWidth=14,n.beginPath(),n.moveTo(e*.08,t),n.lineTo(e*.08,t*.32),n.quadraticCurveTo(e*.5,-t*.08,e*.92,t*.32),n.lineTo(e*.92,t),n.stroke()}})}function Qv(i,e){return Tr(256,360,(t,n,o)=>{t.fillStyle=i,t.fillRect(0,0,n,o),t.strokeStyle="#e9c35a",t.lineWidth=6,t.strokeRect(14,14,n-28,o-28),t.fillStyle="#f1cf6a",t.fillRect(n/2-8,70,16,110),t.fillRect(n/2-40,100,80,16),t.font="bold 34px Georgia, serif",t.textAlign="center",t.fillText(e,n/2,250)})}function e1(){return Tr(512,512,(i,e,t)=>{i.fillStyle="#f4efe2",i.fillRect(0,0,e,t);const n=e*.25;i.fillStyle="#b3182a",i.fillRect(n-14,60,28,380),i.fillRect(n-90,170,180,28),i.fillStyle="#c8901f",i.font="bold 64px Georgia, serif",i.textAlign="center",i.fillText("Α",n-60,130),i.fillText("Ω",n+60,130),i.font="bold 52px Georgia, serif",i.fillText("20",n-55,320),i.fillText("26",n+55,320),i.fillStyle="#b3182a";for(const[o,s]of[[0,184],[0,110],[0,260],[-50,184],[50,184]])i.beginPath(),i.arc(n+o,s,10,0,Math.PI*2),i.fill()})}const Eu=new Pt(1,12,10),t1=new kt({color:new ze(2.4,1.1,.25),transparent:!0,opacity:.85,depthWrite:!1,blending:Gn,toneMapped:!1}),n1=new kt({color:new ze(3.2,2.8,1.8),toneMapped:!1});function o0(i=.01,e=!0){const t=new et,n=new I(Eu,t1);n.scale.set(i*.38,i,i*.38),n.position.y=i*.8;const o=new I(Eu,n1);o.scale.set(i*.18,i*.5,i*.18),o.position.y=i*.55,t.add(n,o);let s=null;e&&(s=di(i*7,"255,170,70",.75),s.position.y=i*.9,t.add(s));const a=Math.random()*10;return t.userData.animar=r=>{const l=1+Math.sin(r*13+a)*.08+Math.sin(r*23.7+a*2)*.05;n.scale.y=i*l,n.rotation.z=Math.sin(r*5+a)*.06,s&&(s.material.opacity=.62+.13*l)},t}function ia({alto:i=.05,radio:e=.008,color:t=at.ceraBlanca,platillo:n=!0}={}){const o=new et,s=new I(new st(e,e*1.02,i,20),t);s.position.y=i/2,s.castShadow=!0,o.add(s);const a=new I(new st(e*.08,e*.08,e*.6,6),at.maderaOscura);a.position.y=i+e*.3,o.add(a);const r=o0(e*1.3);if(r.position.y=i+e*.3,o.add(r),n){const l=new I(new st(e*1.9,e*2.1,e*.35,24),at.oro);l.position.y=e*.17,l.castShadow=!0,o.add(l),s.position.y+=e*.35,a.position.y+=e*.35,r.position.y+=e*.35}return o.userData.animar=r.userData.animar,o.userData.alturaLlama=r.position.y,o}function i1({alto:i=.26,radio:e=.022}={}){const t=new et,n=new I(new uo([[0,0],[e*2.6,0],[e*2.4,e*.4],[e*1.1,e*.9],[e*.7,e*2.4],[e*1.3,e*2.9],[e*1.3,e*3.2],[0,e*3.2]].map(([l,c])=>new Ue(l,c)),32),at.oro);n.castShadow=!0,t.add(n);const o=e*3.2,s=new we({map:e1(),roughness:.5}),a=new I(new st(e,e,i,40),s);a.position.y=o+i/2,a.rotation.y=Math.PI*.35,a.castShadow=!0,t.add(a);const r=o0(e*.9);return r.position.y=o+i+e*.1,t.add(r),t.userData.animar=r.userData.animar,t.userData.alturaLlama=r.position.y,t}function Mc({alto:i=.3}={}){const e=new et,t=[[0,0],[.05,0],[.048,.008],[.02,.025],[.012,.06],[.022,.07],[.009,.09],[.008,i*.75],[.018,i*.78],[.009,i*.82],[.008,i-.012],[.03,i-.006],[.03,i],[0,i]],n=new I(new uo(t.map(([s,a])=>new Ue(s,a)),32),at.oro);n.castShadow=!0,n.receiveShadow=!0,e.add(n);const o=ia({alto:.11,radio:.011,platillo:!1});return o.position.y=i,e.add(o),e.userData.animar=o.userData.animar,e.userData.alturaLlama=i+o.userData.alturaLlama,e}function ns({alto:i=.12,tunica:e=at.marfil,manto:t=null,piel:n=at.piel,tocado:o=null,aureola:s=!1,corona:a=!1,pose:r="pie"}={}){const l=new et,c=r==="rodillas"?i*.72:i,d=i*.16,h=[[0,0],[d*1.25,0],[d*1.15,c*.18],[d*.95,c*.45],[d*.7,c*.68],[d*.82,c*.76],[d*.45,c*.82],[0,c*.82]],f=new I(new uo(h.map(([m,u])=>new Ue(m,u)),28),e);if(f.castShadow=!0,f.receiveShadow=!0,l.add(f),t){const m=h.map(([M,w])=>new Ue(M*1.08+6e-4,w*.98)),u=t.clone();u.side=on;const g=new I(new uo(m,28,Math.PI*.35,Math.PI*1.3),u);g.castShadow=!0,l.add(g)}const p=new I(new Pt(d*.62,20,16),n);p.position.y=c*.82+d*.55,p.castShadow=!0,l.add(p);const v=p.position.y;if(o){const m=o.clone();m.side=on;const u=new I(new Pt(d*.72,20,14,0,Math.PI*2,0,Math.PI*.6),m);u.position.y=v+d*.02,u.rotation.x=-.35,l.add(u);const g=new I(new st(d*.7,d*.95,d*1.4,20,1,!0,Math.PI*.6,Math.PI*1.8),m);g.position.set(0,v-d*.55,-d*.08),l.add(g)}if(s){const m=new I(new Nn(d*.75,d*.07,8,32),new kt({color:new ze(1.8,1.4,.5),toneMapped:!1}));m.position.set(0,v+d*.25,-d*.45),l.add(m)}if(a){const m=new I(new st(d*.5,d*.42,d*.4,10,1,!0),at.oro);m.position.y=v+d*.62,l.add(m)}const S=new I(new Pt(d*.25,10,8),n);return S.position.set(0,c*.62,d*.85),S.scale.set(1,1.3,.8),l.add(S),l.userData.altoCabeza=v,l}function yd({alto:i=.12,pedestal:e=.02,brillo:t=!0}={}){const n=new et,o=new I(new st(i*.26,i*.3,e,32),at.marfil);o.position.y=e/2,o.castShadow=!0,o.receiveShadow=!0,n.add(o);for(let d=0;d<2;d++){const h=new I(new Pt(i*.03,10,8),new we({color:15779402,roughness:.4}));h.position.set((d-.5)*i*.12,e+i*.02,i*.16),n.add(h)}const s=ns({alto:i,tunica:at.marfil,manto:at.azulManto,tocado:at.marfil});s.position.y=e,n.add(s);const a=e+s.userData.altoCabeza,r=new et,l=new kt({color:new ze(2,1.6,.6),toneMapped:!1}),c=wc(i*.022,i*.009,i*.004);for(let d=0;d<12;d++){const h=d/12*Math.PI*2,f=new I(c,l);f.position.set(Math.cos(h)*i*.13,0,Math.sin(h)*i*.13),f.lookAt(0,0,0),r.add(f)}if(r.position.set(0,a+i*.08,-i*.02),r.rotation.x=-.3,n.add(r),t){const d=di(i*1.4,"170,200,255",.35);d.position.y=e+i*.7,n.add(d)}return n.userData.animar=d=>{r.rotation.y=d*.4},n}function wc(i,e,t){const n=new _s;for(let s=0;s<10;s++){const a=s/10*Math.PI*2+Math.PI/2,r=s%2===0?i:e,l=Math.cos(a)*r,c=Math.sin(a)*r;s===0?n.moveTo(l,c):n.lineTo(l,c)}n.closePath();const o=new _r(n,{depth:t,bevelEnabled:!1});return o.translate(0,0,-t/2),o}function Ru(i=.05){const e=new et,t=new kt({color:new ze(3,2.5,1.2),toneMapped:!1}),n=new I(wc(i,i*.4,i*.18),t);e.add(n);const o=new I(wc(i*.7,i*.18,i*.12),t);o.rotation.z=Math.PI/5,e.add(o);const s=di(i*9,"255,220,140",.9);e.add(s);const a=new I(new jn(i*.35,i*4.5,16,1,!0),new kt({color:new ze(1.6,1.3,.7),transparent:!0,opacity:.35,blending:Gn,depthWrite:!1,toneMapped:!1,side:on}));return a.rotation.z=Math.PI/2+.35,a.position.set(i*2.2,-i*.8,0),e.add(a),e.userData.animar=r=>{n.rotation.y=Math.sin(r*.7)*.5,s.material.opacity=.75+Math.sin(r*2.2)*.15},e}function gs({alto:i=.2,mat:e=at.maderaOscura,cristo:t=at.marfil,base:n=!0}={}){const o=new et,s=i*.06,a=n?i*.06:0;if(n){const m=new I(new Re(i*.36,i*.03,i*.22),e);m.position.y=i*.015;const u=new I(new Re(i*.24,i*.03,i*.15),e);u.position.y=i*.045,m.castShadow=u.castShadow=!0,o.add(m,u)}const r=new I(new Re(s,i,s*.7),e);r.position.y=a+i/2;const l=new I(new Re(i*.55,s,s*.7),e);l.position.y=a+i*.72,r.castShadow=l.castShadow=!0,o.add(r,l);const c=s*.55,d=new I(new st(i*.03,i*.022,i*.3,10),t);d.position.set(0,a+i*.55,c);const h=new I(new Pt(i*.03,12,10),t);h.position.set(i*.01,a+i*.74,c+i*.01);const f=new I(new st(i*.01,i*.01,i*.46,8),t);f.rotation.z=Math.PI/2,f.position.set(0,a+i*.69,c);const p=new I(new st(i*.034,i*.03,i*.05,10),at.marfil);p.position.set(0,a+i*.43,c);const v=new I(new st(i*.018,i*.012,i*.22,8),t);v.position.set(0,a+i*.3,c);const S=new I(new Re(i*.12,i*.04,s*.2),at.marfil);S.position.set(0,a+i*.9,c*.6);for(const m of[d,h,f,p,v,S])m.castShadow=!0,o.add(m);return o}function ks({ancho:i=.16,largo:e=.22,grueso:t=.035,color:n="#6b1420",titulo:o="BIBLIA"}={}){const s=new et,a=new we({color:n,roughness:.6}),r=new we({map:Qv(n,o),roughness:.55}),l=new we({color:15854034,roughness:.9}),c=new we({color:14135370,roughness:.35,metalness:.7}),d=new I(new Re(i,t*.1,e),[a,a,r,a,a,a]);d.position.y=t*.95;const h=new I(new Re(i,t*.1,e),a);h.position.y=t*.05;const f=new I(new Re(t*.1,t,e),a);f.position.set(-i/2+t*.05,t/2,0);const p=new I(new Re(i*.96,t*.82,e*.97),[c,l,l,l,c,c]);p.position.set(t*.04,t/2,0);for(const S of[d,h,f,p])S.castShadow=!0,S.receiveShadow=!0,s.add(S);const v=new I(new Re(.004,4e-4,e*.25),at.rojoLiturgico);return v.position.set(i*.18,t*.55,e*.6),v.rotation.x=.9,s.add(v),s}function o1({radio:i=.06,cuenta:e=.0032,mat:t=at.cuentaRosario}={}){const n=new et,o=[],s=59;for(let c=0;c<s;c++){const d=c/s*Math.PI*2;o.push(new L(Math.cos(d)*i,e,Math.sin(d)*i*.7+Math.sin(d*3)*i*.06))}for(let c=1;c<=6;c++)o.push(new L(Math.sin(c*.6)*.004,e,i*.7+c*e*3.2));const a=new Hi(new Pt(e,10,8),t,o.length),r=new Vt;o.forEach((c,d)=>{const h=d%11===0||d>=s;r.makeScale(h?1.3:1,h?1.3:1,h?1.3:1),r.setPosition(c),a.setMatrixAt(d,r)}),a.castShadow=!0,n.add(a);const l=gs({alto:e*9,mat:at.plata,cristo:at.oro,base:!1});return l.rotation.x=-Math.PI/2,l.position.set(0,e*.5,i*.7+7*e*3.2+e*7.5),l.rotation.z=Math.PI,n.add(l),n}function s1({ancho:i=.16,alto:e=.18}={}){const t=new et,n=new I(new Re(i,e,i*.8),at.oro);n.position.y=e/2,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const o=new I(new jn(i*.72,e*.35,4),at.oro);o.rotation.y=Math.PI/4,o.position.y=e+e*.17,o.castShadow=!0,t.add(o);const s=new I(new Re(i*.6,e*.62,.003),at.oroViejo);s.position.set(0,e*.48,i*.4+.0015),t.add(s);const a=gs({alto:e*.35,mat:at.oro,cristo:at.oro,base:!1});a.position.set(0,e*.3,i*.4+.003),t.add(a);const r=gs({alto:e*.3,mat:at.oro,cristo:at.oro,base:!1});r.position.y=e*1.33,t.add(r);const l=new I(new Pt(i*.07,12,10),new kt({color:new ze(2.2,.25,.2),toneMapped:!1}));l.position.set(i*.75,e*.25,i*.2);const c=di(i*.6,"255,60,50",.6);return c.position.copy(l.position),t.add(l,c),t}function bd({alto:i=.09}={}){const e=[[0,0],[i*.32,0],[i*.3,i*.04],[i*.08,i*.12],[i*.05,i*.38],[i*.1,i*.42],[i*.05,i*.48],[i*.06,i*.55],[i*.24,i*.7],[i*.3,i*1],[i*.28,i*1],[i*.22,i*.74],[0,i*.62]],t=new I(new uo(e.map(([a,r])=>new Ue(a,r)),40),at.oro);t.castShadow=!0;const n=new et;n.add(t);const o=new I(new st(i*.26,i*.26,.0015,32),at.marfil);o.position.y=i*1;const s=new I(new st(i*.36,i*.36,.0015,40),at.oro);return s.position.y=i*1-.0012,n.add(s,o),n}function dr({alto:i=.12,colores:e=[16777215,15913547,14828922],jarron:t=at.oro,n=14}={}){const o=new et,s=[[0,0],[i*.14,0],[i*.2,i*.18],[i*.12,i*.38],[i*.16,i*.42],[0,i*.42]];if(t){const l=new I(new uo(s.map(([c,d])=>new Ue(c,d)),24),t);l.castShadow=!0,o.add(l)}const a=new we({color:4160826,roughness:.8}),r=new Pt(i*.07,10,8);for(let l=0;l<n;l++){const c=l/n*Math.PI*2*2.3,d=i*(.05+.18*(l*7%5)/5),h=new L(Math.cos(c)*d,i*(.85+l*3%4*.08),Math.sin(c)*d),f=new I(new st(i*.008,i*.008,h.y-i*.3,5),a);f.position.set(h.x*.5,(h.y+i*.3)/2,h.z*.5),f.lookAt(h.x,h.y+1,h.z),f.rotateX(Math.PI/2),o.add(f);const p=new I(r,new we({color:e[l%e.length],roughness:.6}));p.position.copy(h),p.scale.set(1,.7,1),p.castShadow=!0,o.add(p)}return o}function Pu({alto:i=.09,tunica:e=at.marfil}={}){const t=ns({alto:i,tunica:e,aureola:!0}),n=new we({color:16448245,roughness:.5,side:on});for(const o of[-1,1]){const s=new _s;s.moveTo(0,0),s.quadraticCurveTo(i*.35*o,i*.45,i*.42*o,i*.05),s.quadraticCurveTo(i*.25*o,i*.1,0,-i*.15);const a=new I(new Mr(s),n);a.position.set(0,i*.62,-i*.08),a.rotation.y=o*.45,a.castShadow=!0,t.add(a)}return t}function a1(i=.03){const e=new et,t=new we({color:15921126,roughness:1}),n=new we({color:2827296,roughness:.8}),o=new I(new Pt(i*.5,14,10),t);o.scale.set(.8,.7,1.15),o.position.y=i*.55;const s=new I(new Pt(i*.2,10,8),n);s.position.set(0,i*.72,i*.55),s.scale.set(.8,.9,1.2),e.add(o,s);for(const[a,r]of[[-.18,.3],[.18,.3],[-.18,-.3],[.18,-.3]]){const l=new I(new st(i*.05,i*.05,i*.3,6),n);l.position.set(a*i,i*.15,r*i),e.add(l)}return e.traverse(a=>a.castShadow=!0),e}function hl({escala:i=.07,color:e=9071178,cuernos:t=!1}={}){const n=new et,o=new we({color:e,roughness:.85}),s=new I(new Ro(i*.25,i*.55,6,12),o);s.rotation.x=Math.PI/2,s.position.y=i*.55;const a=new I(new st(i*.1,i*.14,i*.3,10),o);a.position.set(0,i*.72,i*.45),a.rotation.x=.7;const r=new I(new Ro(i*.1,i*.18,4,10),o);r.position.set(0,i*.8,i*.62),r.rotation.x=1.2,n.add(s,a,r);for(const[l,c]of[[-.14,.3],[.14,.3],[-.14,-.3],[.14,-.3]]){const d=new I(new st(i*.05,i*.045,i*.4,8),o);d.position.set(l*i,i*.2,c*i),n.add(d)}if(t)for(const l of[-1,1]){const c=new I(new jn(i*.025,i*.14,6),at.marfil);c.position.set(l*i*.08,i*.92,i*.6),c.rotation.z=-l*.8,n.add(c)}else for(const l of[-1,1]){const c=new I(new jn(i*.03,i*.16,6),o);c.position.set(l*i*.06,i*.95,i*.56),c.rotation.z=-l*.3,n.add(c)}return n.traverse(l=>l.castShadow=!0),n}function r1(i=.25){const e=new et,t=new we({color:8084026,roughness:.95}),n=new we({color:4164154,roughness:.7,side:on}),o=8;let s=0;for(let a=0;a<o;a++){const r=i/o,l=new I(new st(i*.03,i*.036,r,8),t);l.position.set(Math.sin(a*.3)*i*.03,s+r/2,0),l.castShadow=!0,e.add(l),s+=r}for(let a=0;a<8;a++){const r=new _s;r.moveTo(0,0),r.quadraticCurveTo(i*.25,i*.08,i*.42,-i*.1),r.quadraticCurveTo(i*.25,0,0,0);const l=new I(new Mr(r),n);l.position.set(0,s,0),l.rotation.y=a/8*Math.PI*2,l.rotation.x=-.25,l.castShadow=!0,e.add(l)}return e}function l1({ancho:i=.08,alto:e=.07,fondo:t=.07,color:n=14205850}={}){const o=new et,s=new we({color:n,roughness:.95}),a=new I(new Re(i,e,t),s);a.position.y=e/2,a.castShadow=!0,a.receiveShadow=!0,o.add(a);const r=new I(new Re(i*1.06,e*.06,t*1.06),s);r.position.y=e,o.add(r);const l=new I(new Re(i*.22,e*.42,.002),at.maderaOscura);l.position.set(0,e*.21,t/2+.001),o.add(l);const c=new I(new Re(i*.16,e*.16,.002),new kt({color:new ze(2.2,1.4,.5),toneMapped:!1}));return c.position.set(i*.28,e*.62,t/2+.001),o.add(c),o}function js({radio:i=.1,alto:e=.15,color:t=9406330,semilla:n=1,detalle:o=3}={}){const s=new Qc(1,o),a=s.attributes.position;let r=n*9301;const l=()=>(r=r*16807%2147483647,r/2147483647),c=[];for(let h=0;h<12;h++)c.push([l()*6,l()*6,l()*6,.05+l()*.1]);for(let h=0;h<a.count;h++){const f=new L(a.getX(h),a.getY(h),a.getZ(h));let p=0;for(const[v,S,m,u]of c)p+=Math.sin(f.x*v+f.y*S+f.z*m)*u;f.multiplyScalar(1+p),a.setXYZ(h,f.x*i,Math.max(0,f.y)*e,f.z*i)}s.computeVertexNormals();const d=new I(s,new we({color:t,roughness:.95,flatShading:!0}));return d.castShadow=!0,d.receiveShadow=!0,d}function oa(i){const e=new Set;return i.traverse(t=>{t.userData&&typeof t.userData.animar=="function"&&e.add(t.userData.animar)}),[...e]}function c1(i){const t=i.samples[i.start_finish_index??0],n=new L(...t.position),o=new L(t.tangent[0],0,t.tangent[2]).normalize(),s=new L(t.right[0],0,t.right[2]).normalize(),a=new et;a.name="ArcoDeSalida",a.position.copy(n);const r=new Vt().makeBasis(s,new L(0,1,0),o);a.quaternion.setFromRotationMatrix(r);const l=new we({color:10260344,roughness:.92}),c=.034,d=.026;for(const b of[-c/2,c/2]){const x=new I(new Re(.004,d,.005),l);x.position.set(b,d/2-.004,0),x.castShadow=!0,a.add(x);const R=new I(new Re(.006,.0018,.0066),at.oro);R.position.set(b,d-.004,0),a.add(R)}const h=new I(new Nn(c/2,.0022,10,32,Math.PI),l);h.position.set(0,d-.004,0),h.castShadow=!0,a.add(h);const f=d-.004+c/2,p=new I(new Re(.0016,.012,.0016),at.oro);p.position.set(0,f+.0075,0);const v=new I(new Re(.0072,.0016,.0016),at.oro);v.position.set(0,f+.0095,0),a.add(p,v);const S=_d(),m=new I(new Zt(.03,.005),new we({map:S,emissiveMap:S,emissive:16777215,emissiveIntensity:.6,side:on}));m.position.set(0,d-.006,5e-4),a.add(m);const u=new I(new Zt(.021,.0035),new kt({map:S,polygonOffset:!0,polygonOffsetFactor:-2}));u.rotation.x=-Math.PI/2,u.position.set(0,6e-4,0),a.add(u);const g=new I(new Re(c+.004,.0016,.004),at.oroViejo);g.position.set(0,d-.0028,.0036),a.add(g);const M=[],w=[.0128,.0064,0,-.0064,-.0128];for(const b of w){const x=new I(new st(9e-4,9e-4,.0042,10),at.ceraBlanca);x.position.set(b,d-2e-4,.0036),a.add(x);const R=o0(.0016,!1);R.position.set(b,d+.0019,.0036),R.visible=!1;const U=di(.012,"255,150,60",0);U.position.set(b,d+.0034,.0036),a.add(R,U),M.push({fl:R,h:U})}const A=di(.07,"255,230,160",0);A.position.set(0,d+.004,.004),a.add(A);let y=0;function C(b,x=!1){M.forEach((R,U)=>{const O=U<b||x;R.fl.visible=O,R.h.material.opacity=O?x?1:.75:0}),x&&(y=1)}function _(b,x=.016){for(const R of M)R.fl.visible&&R.fl.userData.animar(b);y>0&&(y=Math.max(0,y-x*1.2),A.material.opacity=y,y===0&&C(5))}return{grupo:a,setVelas:C,animar:_}}function u1(i){const e=new et;e.name="GoldenHourAtmosphere";const t=0,n=1.15,o=new na(1843768,591622,.045+.025*n+.42*t);e.add(o);const s=new Ao(16758861,.85*t);s.position.set(-.36,.68,-.52),s.castShadow=!0,s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,s.shadow.camera.near=.08,s.shadow.camera.far=2.4,s.shadow.camera.left=-.55,s.shadow.camera.right=.55,s.shadow.camera.top=.48,s.shadow.camera.bottom=-.42,s.shadow.bias=-12e-5,s.shadow.normalBias=6e-4,s.shadow.radius=1.15,s.shadow.autoUpdate=!1,s.shadow.needsUpdate=!0,s.visible=t>.005,e.add(s);const a=new Vn(16760408,.5*t,1.8,1.2);a.position.set(0,.46,-.42),a.visible=t>.005,e.add(a);const r=new Ao(16763256,.24*t);r.position.set(-.55,.52,.35),r.visible=t>.005,e.add(r);const l=new Ao(16754258,.22*t);l.position.set(-.38,.48,.62),l.visible=t>.005,e.add(l);const c=l,d=new sn;d.position.set(-.09,0,.065),e.add(d);const h=new ms(16757350,2.55*n,1.68,Math.PI*.31,.78,1.85);h.position.set(.352,.355,-.085),h.target=d,h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.06,h.shadow.camera.far=1.35,h.shadow.bias=-35e-5,h.shadow.normalBias=.0012,h.shadow.radius=1.15,h.shadow.autoUpdate=!1,h.shadow.needsUpdate=!0,e.add(h);const f=new Vn(16749624,.38*n,.42,1.75);f.position.set(.342,.345,-.062),e.add(f);const p=new Vn(58879,.24,.16,2);p.position.set(-.161,.018,.118),e.add(p);const v=new L(-.025,.105,-.045),S=new Vn(1993727,0,.09,1.8);S.position.copy(v),S.visible=!1,e.add(S);const m=new sn;m.position.set(-.015,0,-.025),e.add(m);const u=new ms(1599743,.48,.28,Math.PI*.36,.85,1.5);u.position.copy(v),u.target=m,e.add(u),new ze(1993727);const g=new kt({color:1993727,transparent:!0,opacity:0,depthWrite:!1}),M=new I(new jn(.01,.01,8,1,!0),g);M.position.set(-.025,.048,-.038),M.visible=!1;const w={uColorWarm:{value:new ze(16758861)},uColorCore:{value:new ze(16771235)},uIntensity:{value:t},uTime:{value:0}};function A(q){const pe=q*1.62,se=new an({uniforms:{uColorWarm:w.uColorWarm,uColorCore:w.uColorCore,uIntensity:w.uIntensity,uTime:w.uTime,uBaseOpacity:{value:pe}},transparent:!0,opacity:pe,depthWrite:!1,blending:Gn,side:qi,vertexShader:`
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
      `});return se.userData.baseOpacity=q,se}function y(q,pe=0){const se=new an({uniforms:{uColorWarm:w.uColorWarm,uColorCore:w.uColorCore,uIntensity:w.uIntensity,uTime:w.uTime,uBaseOpacity:{value:q},uPhase:{value:pe}},transparent:!0,opacity:q,depthWrite:!1,blending:Gn,side:on,vertexShader:`
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
      `});return se.userData.baseOpacity=q,se}const C=new et;C.name="VolumetricSunbeams";const _=C,b=[{from:[-.42,.66,-.44],to:[.04,.02,.08],rTop:.075,rBot:.22,opacity:.062},{from:[-.34,.68,-.45],to:[.14,.02,.12],rTop:.085,rBot:.24,opacity:.065},{from:[-.26,.65,-.44],to:[.22,.02,.06],rTop:.08,rBot:.23,opacity:.058},{from:[-.18,.66,-.46],to:[.3,.02,.14],rTop:.09,rBot:.25,opacity:.06},{from:[-.08,.64,-.45],to:[.38,.02,.1],rTop:.095,rBot:.26,opacity:.056},{from:[.02,.66,-.44],to:[.46,.04,.04],rTop:.082,rBot:.22,opacity:.052},{from:[.14,.62,-.42],to:[.52,.06,-.02],rTop:.07,rBot:.19,opacity:.048},{from:[-.38,.56,-.4],to:[-.02,.01,.18],rTop:.065,rBot:.18,opacity:.05},{from:[-.12,.58,-.42],to:[.26,.01,.2],rTop:.072,rBot:.2,opacity:.046},{from:[.24,.54,-.38],to:[.54,.02,.12],rTop:.055,rBot:.16,opacity:.042}];for(const q of b){const pe=new L(...q.from),se=new L(...q.to),Pe=new L().subVectors(se,pe),de=Pe.length(),X=new L().addVectors(pe,se).multiplyScalar(.5),j=new st(q.rTop,q.rBot,de,28,1,!0),G=A(q.opacity),B=new I(j,G);B.position.copy(X),B.quaternion.setFromUnitVectors(new L(0,-1,0),Pe.clone().normalize()),C.add(B)}const x=[{pos:[-.14,.34,-.35],size:[1.24,.72],rot:[0,.06,0],opacity:.064,phase:0},{pos:[.02,.32,-.26],size:[1.18,.66],rot:[.04,-.04,0],opacity:.054,phase:.85},{pos:[.04,.26,-.11],size:[1.14,.58],rot:[.08,.03,0],opacity:.044,phase:1.7},{pos:[.06,.21,.05],size:[1.08,.5],rot:[.12,-.02,0],opacity:.035,phase:2.55}],R=new et;R.name="GodRayCurtainPlanesGroup";for(const q of x){const pe=new Zt(q.size[0],q.size[1],1,1),se=y(q.opacity,q.phase),Pe=new I(pe,se);Pe.position.set(...q.pos),Pe.rotation.set(...q.rot),R.add(Pe)}C.add(R),e.add(C);const U=2e3,O=new Float32Array(U*3),N=new Float32Array(U),k=new Float32Array(U);for(let q=0;q<U;q++)O[q*3+0]=(Math.random()-.5)*1.14,O[q*3+1]=.01+Math.random()*.54,O[q*3+2]=(Math.random()-.5)*.64,N[q]=Math.random()*Math.PI*2,k[q]=.65+Math.random()*1.65;const z=new Bt;z.setAttribute("position",new rn(O,3)),z.setAttribute("aPhase",new rn(N,1)),z.setAttribute("aScale",new rn(k,1));const K={uTime:{value:0},uIntensity:{value:t},uOpacity:{value:.44},uMicPos:{value:v}},he=new an({uniforms:K,transparent:!0,opacity:.44,depthWrite:!1,blending:Gn,vertexShader:`
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
    `}),J=new $u(z,he);J.name="GoldenDustMotes2000",e.add(J),i.add(e);const ie=new ze(395019),F=new ze(3811609),H=new ze(6045990),Q=new ze;let Y=-1,ge=-1,V=-1;function te(){s.visible&&(s.shadow.needsUpdate=!0),h.shadow.needsUpdate=!0}function $(q,pe={},se=null,Pe=null,de=i,X=null){const j=pe.sunIntensity??pe.sunbeamIntensity??0,G=pe.lampIntensity??1.15,B=pe.micGlowIntensity??.85,E=j>.005;C.visible=E,E&&(w.uTime.value=q,w.uIntensity.value=j);const ae=(pe.showDustMotes??!1)&&E;if(J.visible=ae,ae&&(K.uTime.value=q,K.uIntensity.value=j),Math.abs(j-Y)>1e-5||Math.abs(G-ge)>1e-5||Math.abs(B-V)>1e-5){const Me=Y>.005;Y=j,ge=G,V=B,s.visible=E,a.visible=E,r.visible=E,l.visible=E,E&&!Me&&(s.shadow.needsUpdate=!0),s.intensity=.85*j,o.intensity=.045+.025*G+.42*j,o.color.setHex(1843768),o.groundColor.setHex(591622),a.intensity=.5*j,r.intensity=.24*j,l.intensity=.22*j,h.intensity=2.4*G,f.intensity=.45*G,p.intensity=.45,M.visible=!1,g.opacity=0,S.intensity=0,S.visible=!1,u.intensity=.48*B,se&&(se.toneMappingExposure=.74+.07*j+.06*G);const oe=de||i;if(oe){if(j<=2.25){const P=$e.clamp(j/2.25,0,1);Q.lerpColors(ie,F,P)}else{const P=$e.clamp((j-2.25)/2.75,0,1);Q.lerpColors(F,H,P)}oe.background&&oe.background.isColor?oe.background.copy(Q):oe.background=Q.clone(),oe.fog&&(oe.fog.color&&oe.fog.color.copy(Q),oe.fog.density!==void 0&&(oe.fog.density=.018))}X&&typeof X.updateLightingMaterials=="function"&&X.updateLightingMaterials(j,G)}else se&&(se.toneMappingExposure=.74+.07*j+.06*G);Pe&&(Pe.strength=pe.bloomStrength??.06,Pe.radius=.24,Pe.threshold=1.12)}return $(0,{sunIntensity:t,lampIntensity:n,showDustMotes:!1},null,null,i,null),{atmosphereGroup:e,sunLight:s,hemiLight:o,windowGlowLight:a,goldenFillLight:r,kbBacklight:p,rimLight:l,roomFillLight:c,lampKeyLight:h,lampGlowPoint:f,micPointLight:S,micSpotLight:u,micAuraCone:M,sunbeamGroup:C,sunbeamsGroup:_,godRayCurtainGroup:R,dustPoints:J,requestShadowMapUpdate:te,updateAtmosphere:$,update:$}}let Ci=null,pl=!1;function li(i,e,t=!1){const n=Array.isArray(e)?e:[e];(async()=>{for(const o of n)try{const s=await fetch(o,{method:"HEAD"});if(!s.ok||(s.headers.get("content-type")||"").includes("text/html"))continue;const r=new Image;r.crossOrigin="anonymous",await new Promise((l,c)=>{r.onload=l,r.onerror=c,r.src=o}),i.dispose(),i.image=r,t&&(i.colorSpace=jt),i.needsUpdate=!0;return}catch{}})()}function d1(i=!1){if(Ci)return i&&!pl&&(pl=!0,li(Ci.oakWoodAlbedoTex,["/assets/textures/oak_wood_2k.png?v=5.3","/assets/textures/oak_wood_4k.png?v=5.3"],!0),li(Ci.oakWoodNormalTex,["/assets/textures/oak_wood_normal_2k.png?v=5.3","/assets/textures/oak_wood_normal.png?v=5.3"],!1),li(Ci.oakWoodRoughnessTex,["/assets/textures/oak_wood_roughness_2k.png?v=5.3","/assets/textures/oak_wood_roughness.png?v=5.3"],!1),li(Ci.micFoamAlbedoTex,"/assets/textures/mic_foam_v4_albedo_2k.png?v=5.2",!0),li(Ci.micFoamNormalTex,"/assets/textures/mic_foam_v4_normal_2k.png?v=5.2",!1),li(Ci.micFoamRoughnessTex,"/assets/textures/mic_foam_v4_roughness_2k.png?v=5.2",!1)),Ci;const e=512,t=256,n=document.createElement("canvas");n.width=e,n.height=t;const o=n.getContext("2d"),s=o.createImageData(e,t),a=s.data,r=document.createElement("canvas");r.width=e,r.height=t;const l=r.getContext("2d"),c=l.createImageData(e,t),d=c.data;for(let he=0;he<t;he++)for(let J=0;J<e;J++){const ie=(he*e+J)*4,F=Math.sin(J*12.9898+he*78.233)*43758.5453,H=F-Math.floor(F)-.5,Q=$e.clamp(.5+H*.04,.45,.55),Y=$e.clamp(.5+H*.04,.45,.55);a[ie+0]=Math.round(Q*255),a[ie+1]=Math.round(Y*255),a[ie+2]=254,a[ie+3]=255;const ge=$e.clamp(.68+H*.06,.6,.76),V=Math.round(ge*255);d[ie+0]=V,d[ie+1]=V,d[ie+2]=V,d[ie+3]=255}o.putImageData(s,0,0),l.putImageData(c,0,0);const{colorTex:h}=vd(),f=h&&h.image?h.image:document.createElement("canvas"),p=new zt(f);p.colorSpace=jt,p.wrapS=Ut,p.wrapT=Ut,p.anisotropy=16;const v=new zt(n);v.wrapS=Ut,v.wrapT=Ut,v.anisotropy=16;const S=new zt(r);S.wrapS=Ut,S.wrapT=Ut,S.anisotropy=16;const m=512,u=512,g=document.createElement("canvas");g.width=m,g.height=u;const M=g.getContext("2d"),w=M.createImageData(m,u),A=w.data,y=document.createElement("canvas");y.width=m,y.height=u;const C=y.getContext("2d"),_=C.createImageData(m,u),b=_.data,x=document.createElement("canvas");x.width=m,x.height=u;const R=x.getContext("2d"),U=R.createImageData(m,u),O=U.data;function N(he,J){const ie=Math.sin(he*.28+Math.cos(J*.24)*1.9),F=Math.cos(J*.31-Math.sin(he*.27)*1.8),H=Math.sin((he+J)*.52)*Math.cos((he-J)*.48),Q=Math.sin(he*12.9898+J*78.233)*43758.5453,Y=Q-Math.floor(Q);return Math.abs(ie*F)*.65+Math.abs(H)*.25+Y*.1}for(let he=0;he<u;he++)for(let J=0;J<m;J++){const ie=(he*m+J)*4,F=N(J,he),H=N(J+1,he),Q=N(J,he+1),Y=Math.round(18+F*24);A[ie+0]=Y,A[ie+1]=Y+2,A[ie+2]=Y+6,A[ie+3]=255;const ge=(H-F)*2.6,V=(Q-F)*2.6,te=$e.clamp(.5+ge*.5,.04,.96),$=$e.clamp(.5+V*.5,.04,.96);b[ie+0]=Math.round(te*255),b[ie+1]=Math.round($*255),b[ie+2]=235,b[ie+3]=255;const q=Math.round($e.clamp(.96-F*.05,.88,.99)*255);O[ie+0]=q,O[ie+1]=q,O[ie+2]=q,O[ie+3]=255}M.putImageData(w,0,0),C.putImageData(_,0,0),R.putImageData(U,0,0);const k=new zt(g);k.colorSpace=jt,k.wrapS=Ut,k.wrapT=Ut,k.repeat.set(1,1),k.anisotropy=8;const z=new zt(y);z.wrapS=Ut,z.wrapT=Ut,z.repeat.set(1,1),z.anisotropy=8;const K=new zt(x);return K.wrapS=Ut,K.wrapT=Ut,K.repeat.set(1,1),K.anisotropy=8,i&&(pl=!0,li(p,["/assets/textures/oak_wood_2k.png?v=5.3","/assets/textures/oak_wood_4k.png?v=5.3"],!0),li(v,["/assets/textures/oak_wood_normal_2k.png?v=5.3","/assets/textures/oak_wood_normal.png?v=5.3"],!1),li(S,["/assets/textures/oak_wood_roughness_2k.png?v=5.3","/assets/textures/oak_wood_roughness.png?v=5.3"],!1),li(k,"/assets/textures/mic_foam_v4_albedo_2k.png?v=5.2",!0),li(z,"/assets/textures/mic_foam_v4_normal_2k.png?v=5.2",!1),li(K,"/assets/textures/mic_foam_v4_roughness_2k.png?v=5.2",!1)),Ci={oakWoodAlbedoTex:p,oakWoodNormalTex:v,oakWoodRoughnessTex:S,micFoamAlbedoTex:k,micFoamNormalTex:z,micFoamRoughnessTex:K},Ci}let ml=null;function s0(){if(ml)return ml;const i=512,e=256,t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"#03050a"),o.addColorStop(.35,"#050810"),o.addColorStop(.7,"#070b14"),o.addColorStop(1,"#080d18"),n.fillStyle=o,n.fillRect(0,0,i,e);const s=n.createRadialGradient(i*.28,e*.62,10,i*.28,e*.62,i*.34);s.addColorStop(0,"rgba(218, 162, 106, 0.18)"),s.addColorStop(.55,"rgba(162, 114, 72, 0.09)"),s.addColorStop(1,"rgba(8, 13, 24, 0.0)"),n.fillStyle=s,n.fillRect(0,0,i,e);const a=n.createRadialGradient(i*.72,e*.6,10,i*.72,e*.6,i*.34);a.addColorStop(0,"rgba(245, 172, 98, 0.22)"),a.addColorStop(.5,"rgba(176, 120, 72, 0.10)"),a.addColorStop(1,"rgba(8, 13, 24, 0.0)"),n.fillStyle=a,n.fillRect(0,0,i,e),n.fillStyle="rgba(4, 6, 12, 0.78)",n.fillRect(14,Math.round(e*.21),i-28,Math.round(e*.085)),n.fillStyle="rgba(185, 140, 96, 0.09)",n.fillRect(14,Math.round(e*.295),i-28,Math.round(e*.035));const r=[[.09,.14,.12],[.29,.1,.1],[.56,.16,.11],[.76,.12,.09]];for(const[c,d,h]of r){const f=Math.round(i*c),p=n.createLinearGradient(f-12,0,f+18,0);p.addColorStop(0,"rgba(220, 185, 145, 0.0)"),p.addColorStop(.35,`rgba(225, 188, 148, ${h})`),p.addColorStop(.65,`rgba(180, 145, 110, ${h*.65})`),p.addColorStop(1,"rgba(220, 185, 145, 0.0)"),n.fillStyle=p,n.fillRect(f-12,Math.round(e*d),30,Math.round(e*.68))}n.fillStyle="#04060b",n.fillRect(0,0,i,10),n.fillRect(0,e-10,i,10),n.fillRect(0,0,10,e),n.fillRect(i-10,0,10,e),n.fillRect(Math.round(i*.48)-5,0,10,e),n.strokeStyle="rgba(255, 178, 108, 0.08)",n.lineWidth=1.5,n.strokeRect(11,11,Math.round(i*.48)-17,e-22),n.strokeRect(Math.round(i*.48)+6,11,i-Math.round(i*.48)-17,e-22);const l=new zt(t);return l.colorSpace=jt,l.anisotropy=8,ml=l,l}let gl=null;function f1(i,e,t,n=2.25){const r=Array.from({length:168},()=>new Array(276).fill(null)),l=(de,X,j)=>{const G=Math.round(de),B=Math.round(X);G>=0&&G<276&&B>=0&&B<168&&(r[B][G]=j)},c=(de,X,j,G,B)=>{const E=Math.round(de*3),ae=Math.round(X*3),xe=Math.round((j+1)*3)-1,Me=Math.round((G+1)*3)-1;for(let oe=ae;oe<=Me;oe++)for(let P=E;P<=xe;P++)l(P,oe,B)},d=(de,X)=>{const j=de.map(([Me,oe])=>[Me*3,oe*3]);let G=275,B=0,E=167,ae=0;for(const[Me,oe]of j)Me<G&&(G=Me),Me>B&&(B=Me),oe<E&&(E=oe),oe>ae&&(ae=oe);G=Math.max(0,Math.floor(G)),B=Math.min(275,Math.ceil(B)),E=Math.max(0,Math.floor(E)),ae=Math.min(167,Math.ceil(ae));const xe=j.length;for(let Me=E;Me<=ae;Me++)for(let oe=G;oe<=B;oe++){const P=oe+.5,T=Me+.5;let W=!1;for(let ne=0,be=xe-1;ne<xe;be=ne++){const me=j[ne][0],ke=j[ne][1],Le=j[be][0],He=j[be][1];ke>T!=He>T&&P<(Le-me)*(T-ke)/(He-ke+1e-9)+me&&(W=!W)}W&&l(oe,Me,X)}},h=(de,X,j,G,B)=>{const E=Math.max(Math.abs(j-de),Math.abs(G-X),1)*3*2;for(let ae=0;ae<=E;ae++){const xe=(de+(j-de)*ae/E)*3,Me=(X+(G-X)*ae/E)*3;for(let oe=0;oe<3;oe++)for(let P=0;P<3;P++)l(Math.floor(xe)+P,Math.floor(Me)+oe,B)}},f="#22242e",p="#161820",v="#484c5c",S="#e42424",m="#a51418",u="#f2f5fa",g="#bcc4d2",M="#00e8ff",w="#008cb4",A="#700a12",y="#a20e18",C="#d81822",_="#f43030",b="#ff7660",x="#ffbca8",R="#f8faff",U="#cad2e0",O="#e6b222",N="#1e222c",k="#363e4c",z="#566072",K="#8490a6",he="#0e1016",J="#181b23",ie="#2a2f3a",F="#a4700c",H="#eeb41c",Q="#ffe05c",Y="#d2dae8",ge="#0a0c12",V="#249cff",te="#ff6e24",$="#ffffff",q="#a5f2ff",pe="#ff182c";c(8,43,83,44,f),c(8,45,83,46,p),c(8,43,83,43,v);for(let de=8;de<=83;de++){const X=Math.floor((de-8)/5)%2,j=X===0?S:u,G=X===0?m:g;c(de,47,de,48,j),c(de,49,de,49,G)}c(6,50,85,50,M),c(8,51,83,51,w);for(let de=72;de<108;de++)for(let X=33;X<66;X++){const j=(X/3-16.5)/5.2,G=(de/3-29.8)/5.6,B=j*j+G*G;B<=1&&(l(X,de,B>.68?he:J),B>.45&&B<=.72&&G<-.2&&l(X,de,ie))}d([[9,34],[25,42],[39,41],[23,32]],N),h(9,35,25,42,z),h(25,42,35,41,k),d([[56,17],[59,17],[61,24],[58,24]],N),d([[67,19],[70,19],[72,26],[69,26]],N);for(let de=156;de<240;de++){const X=de/3,j=(X-52)/27,G=Math.round((11+j*5)*3);for(let B=0;B<3;B++)l(de,G+B,R);for(let B=3;B<6;B++)l(de,G+B,j>.8?U:R);for(let B=6;B<9;B++)l(de,G+B,j>.25&&j<.7?K:z);for(let B=9;B<12;B++)l(de,G+B,k);for(let B=12;B<15;B++)l(de,G+B,N);if(X>=75)for(let B=15;B<18;B++)l(de,G+B,N)}d([[48,19],[66,21],[69,26],[50,26]],z);for(let de=0;de<4;de++)h(50+de,20+de,64+de,21+de,de%2===0?N:K);d([[50,25],[76,26],[79,31],[79,37],[52,37]],C),d([[53,25],[67,25],[69,27],[55,27]],R),d([[56,27],[70,27],[71,28],[57,28]],O),d([[58,28],[76,28],[77,30],[58,30]],_),h(61,29,73,29,b),c(78,30,79,34,N),c(79,31,79,33,pe),c(77,35,79,36,U),d([[41,20],[50,20],[51,28],[39,28]],"#241c20"),h(40,23,46,24,"#443438");for(let de=54;de<78;de++)for(let X=105;X<129;X++){const j=(X/3-38.5)/3.2,G=(de/3-21.8)/3.5,B=j*j+G*G;B>=.42&&B<=1.05&&l(X,de,G>0?N:z)}d([[29,22],[36,19],[42,23],[38,28],[29,25]],k),d([[29,22],[36,19],[39,21],[32,24]],z),c(37,23,37,23,K),c(38,23,38,23,U);for(let de=21;de<66;de++)for(let X=114;X<159;X++){const j=(X/3-45)/6.8,G=(de/3-14.5)/6.8;if((j-G*.08)*(j-G*.08)+G*G<=1){let E=R;(G>.55||j>.65)&&(E=U),G<-.42&&j+.08>=-.24&&j+.08<=.14&&(E=C,Math.abs(j+.05)<.12&&G<-.72&&(E=x)),l(X,de,E)}}for(let de=33;de<57;de++)for(let X=114;X<147;X++){const j=X/3,G=de/3,B=(j-45)/6.8,E=(G-14.5)/6.8;(B-E*.08)*(B-E*.08)+E*E<=.98&&B<.38&&E>=-.45&&E<=.48&&G>=11+Math.max(0,(j-42)*.35)&&G<=17.5+Math.max(0,(j-43)*.2)&&l(X,de,ge)}c(48,17,49,17,N),c(41,14,41,15,V),c(45,15,45,15,te),h(41,20,50,20,U),d([[9,33],[29,22],[40,28],[25,41]],C),d([[9,33],[29,22],[32,23],[12,34]],_),d([[22,39],[40,28],[42,31],[25,41]],y),d([[9,33],[25,41],[25,42],[9,35]],A),d([[10,32],[14,30],[17,32],[13,34]],k),d([[11,32],[14,31],[16,32],[13,33]],$),c(12,32,12,32,q),d([[18,38],[22,36],[26,38],[22,41]],k),d([[19,38],[22,37],[25,38],[22,40]],$),c(21,39,21,39,q);const se=(de,X)=>[25+de*4.5*.8+X*4.8*-.82,29+de*4.5*.58+X*4.8*.57];d([se(.16,-.96),se(.52,-.96),se(.52,1.08),se(.16,1.08)],R),d([se(-.96,.06),se(.76,.06),se(.76,.34),se(-.96,.34)],R),d([se(-.96,.06),se(.16,-.96),se(.52,-.96),se(.52,-.62),se(-.58,.34),se(-.96,.34)],R),d([se(-.52,.05),se(.15,-.58),se(.15,.05)],C),d([[38,28],[58,27],[61,38],[38,39]],C),d([[40,30],[56,29],[57,33],[40,34]],_),d([[43,31],[52,30],[53,32],[43,33]],b),c(46,31,49,31,x),c(40,35,58,36,y),c(43,37,59,38,R),c(43,39,59,39,U);const Pe=(de,X,j,G)=>{const B=Math.floor((X-G-1)*3),E=Math.ceil((X+G+2)*3),ae=Math.floor((de-j-1)*3),xe=Math.ceil((de+j+2)*3);for(let Me=B;Me<=E;Me++)for(let oe=ae;oe<=xe;oe++){const P=oe/3,T=Me/3,W=(P-(de-1.4))/j,ne=(T-X)/G;W*W+ne*ne<=1.02&&(l(oe,Me,ne<.2?J:he),ne>-.85&&ne<-.35&&W<-.45&&l(oe,Me,ie))}for(let Me=B;Me<=E;Me++)for(let oe=ae;oe<=xe;oe++){const P=oe/3,T=Me/3,W=(P-de)/j,ne=(T-X)/G,be=W*W+ne*ne;if(be<=1)if(be>.5)l(oe,Me,be>.78?he:J);else if(be<=.09)l(oe,Me,Y);else{const me=Math.atan2(ne,W),ke=Math.cos(me*6);be>.38?l(oe,Me,ne<0?H:F):ke>.15?l(oe,Me,ne<-.1?Q:H):l(oe,Me,he)}}};Pe(35.5,36.5,6.2,6.8),Pe(66.5,34.8,6.8,7.4),i.save();for(let de=0;de<168;de++){const X=Math.round(t+de*n),j=Math.round(t+(de+1)*n),G=Math.max(1,j-X);for(let B=0;B<276;B++){const E=r[de][B];if(E){const ae=Math.round(e+B*n),xe=Math.round(e+(B+1)*n);i.fillStyle=E,i.fillRect(ae,X,Math.max(1,xe-ae),G)}}}i.restore()}function h1(){if(gl)return gl;const i=2048,e=1152,t=document.createElement("canvas");t.width=i,t.height=e;const n=t.getContext("2d"),o=new zt(t);o.colorSpace=jt,o.minFilter=_n,o.magFilter=_n,o.anisotropy=8;const s=[{name:"Geneviève",time:"00:48.12",color:"#ffca28"},{name:"Jay",time:"00:49.85",color:"#00e5ff"},{name:"Vamsi",time:"00:52.10",color:"#ec6ea9"},{name:"Jack",time:"00:52.30",color:"#ff5252"},{name:"Paige",time:"00:53.48",color:"#26e658"},{name:"Omar",time:"00:53.75",color:"#42a5f5"}];function a(){n.save(),n.fillStyle="#000000",n.fillRect(0,0,i,e);const r=114;n.save(),n.translate(i*.5,r),n.transform(1,0,-.18,1,0,0),n.font='44px "Press Start 2P", "Courier New", monospace',n.textAlign="center",n.textBaseline="alphabetic",n.fillStyle="#240802",n.fillText("DESK RACER HIGH SCORES",4,4);const l=n.createLinearGradient(0,-44,0,4);l.addColorStop(0,"#ff5510"),l.addColorStop(.45,"#ff9e22"),l.addColorStop(.78,"#ffe082"),l.addColorStop(1,"#ffffff"),n.fillStyle=l,n.shadowColor="rgba(255, 110, 24, 0.36)",n.shadowBlur=12,n.fillText("DESK RACER HIGH SCORES",0,0),n.restore();const c=2.25,d=Math.round(276*c),h=Math.round((i-d)*.5);f1(n,h,142,c);const p=520,v=1528,S=598,m=78;n.font='38px "Press Start 2P", "Courier New", monospace',n.textBaseline="alphabetic";for(let u=0;u<s.length;u++){const g=s[u],M=S+u*m;n.save(),n.fillStyle=g.color,n.shadowColor=g.color,n.shadowBlur=8,n.textAlign="left",n.fillText(g.name,p,M),n.textAlign="right",n.fillText(g.time,v,M),n.restore()}n.restore(),o.needsUpdate=!0}return a(),typeof document<"u"&&document.fonts&&(Promise.all([document.fonts.load('44px "Press Start 2P"'),document.fonts.load('38px "Press Start 2P"')]).then(()=>{a()}).catch(()=>{}),document.fonts.ready&&document.fonts.ready.then(()=>{a()}).catch(()=>{})),gl=o,o}function p1(){const i=new et;return i.name="DeskContactShadowGroup",{contactShadowGroup:i,contactShadowPlane:null}}function m1(i){const e=new et;e.name="DeskDioramaGroup";const{colorTex:t}=vd();Xv();const{oakWoodAlbedoTex:n,oakWoodNormalTex:o,oakWoodRoughnessTex:s,micFoamAlbedoTex:a,micFoamNormalTex:r,micFoamRoughnessTex:l}=d1(),{contactShadowGroup:c,contactShadowPlane:d}=p1(),h=new we({map:n||t,normalMap:o,normalScale:new Ue(.04,.04),roughnessMap:s,roughness:.74,metalness:.01}),f=new we({color:1908774,roughness:.34,metalness:.78}),p=new we({color:3488581,roughness:.28,metalness:.84}),v=new we({color:1382172,roughness:.58,metalness:.12}),S=new we({color:2632499,roughness:.85,metalness:.02}),m=new we({color:16184300,roughness:.24,metalness:.05}),u=new we({color:15105576,roughness:.32,metalness:.04}),g=new we({color:12145426,roughness:.35,metalness:.04}),M=new et;M.name="oak_desk_tabletop";const w=new Re(1.1,.025,.6),A=new I(w,h);A.position.set(0,-.0125,0),A.receiveShadow=!0,A.castShadow=!0,M.add(A);const y=new I(new Re(.96,.028,.44),f);y.position.set(0,-.039,-.02),M.add(y);for(const ue of[-.42,.42]){const Ge=new I(new Re(.055,.45,.075),f);Ge.position.set(ue,-.26,-.02),M.add(Ge)}const C=new et;C.name="GoldenHourWindowBackdrop",C.position.set(.04,.32,-.44),C.visible=!1;const _=new we({name:"Mat_GoldenHourWindow",color:660262,roughness:.88,metalness:0,emissive:new ze(462365),emissiveIntensity:.28}),b=new I(new Zt(.96,.42),_);b.position.set(0,.18,-.018),C.add(b);for(let ue=0;ue<7;ue++){const Ge=new I(new Re(.92,.008,.028),_);Ge.position.set(0,.06+ue*.048,0),Ge.rotation.x=.38,C.add(Ge)}M.add(C),e.add(M);const x=new et;x.name="boyata_laptop_stand",x.position.set(-.36,0,-.07),x.rotation.y=$e.degToRad(12);const R=new I(new Re(.215,.006,.185),f);R.position.set(0,.003,.01),R.castShadow=!0,R.receiveShadow=!0,x.add(R);const U=new I(new Re(.085,.125,.012),f);U.position.set(0,.055,-.025),U.rotation.x=.52,U.castShadow=!0,x.add(U);const O=new I(new Re(.085,.115,.012),f);O.position.set(0,.118,-.015),O.rotation.x=-.46,O.castShadow=!0,x.add(O);const N=new et;N.position.set(0,.158,0),N.rotation.x=$e.degToRad(14);const k=new I(new Re(.26,.006,.215),f);k.castShadow=!0,k.receiveShadow=!0,N.add(k);for(const[ue,Ge]of[[-.09,-.07],[.09,-.07],[-.09,.07],[.09,.07]]){const ot=new I(new Re(.042,.003,.026),S);ot.position.set(ue,.0045,Ge),N.add(ot)}for(const ue of[-.085,.085]){const Ge=new I(new Re(.024,.018,.014),f);Ge.position.set(ue,.01,.103),Ge.castShadow=!0,N.add(Ge)}x.add(N),e.add(x);const z=new et;z.name="ginger_cat_figurine",z.position.set(-.166,0,-.108),z.scale.set(1.6,1.6,1.6),z.rotation.y=$e.degToRad(14);const K=new I(new Pt(.026,28,24),u);K.scale.set(1.05,1.18,.98),K.position.set(0,.026,0),K.castShadow=!0,K.receiveShadow=!0,z.add(K);const he=new I(new Pt(.021,24,20),m);he.scale.set(.88,1.05,.65),he.position.set(0,.025,.012),z.add(he);const J=new I(new Pt(.022,28,24),u);J.scale.set(1.12,.96,1.02),J.position.set(0,.055,.004),J.castShadow=!0,z.add(J);for(const ue of[-.007,.007]){const Ge=new I(new Pt(.0085,16,16),m);Ge.position.set(ue,.05,.021),z.add(Ge)}const ie=new we({color:16745880,roughness:.3}),F=new I(new Pt(.0032,12,12),ie);F.position.set(0,.054,.026),z.add(F);const H=new we({color:1119e3,roughness:.08,metalness:.2});for(const ue of[-.0095,.0095]){const Ge=new I(new Pt(.0038,14,14),H);Ge.position.set(ue,.059,.022),z.add(Ge)}for(const[ue,Ge]of[[-.014,.32],[.014,-.32]]){const ot=new I(new jn(.009,.018,16),u);ot.position.set(ue,.072,.002),ot.rotation.z=Ge,ot.castShadow=!0,z.add(ot)}for(const ue of[-.011,.011]){const Ge=new I(new Pt(.0085,16,14),m);Ge.scale.set(1,.65,1.3),Ge.position.set(ue,.006,.022),z.add(Ge)}const Q=new I(new Nn(.016,.0052,12,24,Math.PI*1.15),g);Q.position.set(.014,.012,-.02),Q.rotation.x=Math.PI/2,z.add(Q),e.add(z);const Y=new et;Y.name="lg_ultragear_monitor",Y.position.set(.01,0,-.245);for(const[ue,Ge]of[[.55,-.055],[-.55,.055]]){const ot=new I(new Re(.14,.012,.026),v);ot.position.set(Ge,.006,.018),ot.rotation.y=ue,ot.castShadow=!0,ot.receiveShadow=!0,Y.add(ot)}const ge=new I(new Re(.048,.28,.036),v);ge.position.set(0,.14,-.025),ge.castShadow=!0,Y.add(ge);const V=new I(new Re(.052,.014,.04),new we({color:14229034,roughness:.35,metalness:.5}));V.position.set(0,.19,-.025),Y.add(V);const te=.075+.365/2,$=new I(new Re(.614,.365,.024),v);$.position.set(0,te,0),$.castShadow=!0,$.receiveShadow=!0,Y.add($);const q=h1(),pe=[];let se=!1;function Pe(ue,Ge){ue&&("clearcoat"in ue&&(ue.clearcoat=0),"clearcoatRoughness"in ue&&(ue.clearcoatRoughness=1),"specularIntensity"in ue&&(ue.specularIntensity=0),Ge?(ue.map=q,ue.emissiveMap=q,ue.color&&ue.color.setHex(66052),ue.emissive?ue.emissive.setHex(16777215):ue.emissive=new ze(16777215),ue.emissiveIntensity=.95,ue.roughness=.88,ue.metalness=.03,ue.envMapIntensity=.08):(ue.map=null,ue.emissiveMap=null,ue.color&&ue.color.setHex(857380),ue.emissive?ue.emissive.setHex(66e4):ue.emissive=new ze(66e4),ue.emissiveIntensity=.22,ue.roughness=.86,ue.metalness=.04,ue.envMapIntensity=.1),ue.needsUpdate=!0)}function de(ue){const Ge=!!ue;se=Ge;for(const ot of pe)Pe(ot,Ge)}function X(ue){!ue||ue.userData._hasMonitorSubtleReflection||(ue.userData._hasMonitorSubtleReflection=!0,ue.onBeforeCompile=Ge=>{Ge.vertexShader=`varying vec3 vScreenWorldPos;
varying vec3 vScreenWorldNormal;
`+Ge.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vScreenWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
           vScreenWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),Ge.fragmentShader=`varying vec3 vScreenWorldPos;
varying vec3 vScreenWorldNormal;
`+Ge.fragmentShader.replace("#include <dithering_fragment>",`vec3 V = normalize(cameraPosition - vScreenWorldPos);
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
           #include <dithering_fragment>`)})}const j=new we({name:"Mat_MonitorScreen",color:857380,emissive:new ze(66e4),emissiveIntensity:.22,roughness:.22,metalness:.12,envMapIntensity:.16});X(j),pe.push(j),Pe(j,se);const G=new I(new Zt(.598,.348),j);G.position.set(0,te,.0125),Y.add(G);const B=new I(new Re(.072,.024,.028),v);B.position.set(-.14,.45,.012),Y.add(B);const E=new I(new st(.008,.008,.006,18),p);E.rotation.x=Math.PI/2,E.position.set(-.14,.45,.027),Y.add(E);const ae=new I(new Pt(.0022,8,8),new kt({color:3331915}));ae.position.set(-.118,.45,.027),Y.add(ae),e.add(Y);const xe=new we({name:"Mat_ElectricBlueLED",color:56575,emissive:new ze(694527),emissiveIntensity:2.35,roughness:.16,metalness:.06}),Me=new we({name:"Mat_FifineYokeBlueReflect",color:1067152,emissive:new ze(686335),emissiveIntensity:.95,roughness:.22,metalness:.65}),oe=new we({name:"Mat_FoamWindscreen",color:2369327,map:a,normalMap:r,normalScale:new Ue(.58,.58),roughnessMap:l,roughness:.96,metalness:.01}),P=new we({name:"Mat_FifineAnodizedBlack",color:1447966,roughness:.4,metalness:.38}),T=new we({name:"Mat_FifineSilverTrim",color:13686237,roughness:.24,metalness:.86});function W({halfWidth:ue=.025,cornerRadius:Ge=.0132,zStart:ot=-.048,zEnd:xt=.052,frontDomeLength:Xe=.01,rearBevelLength:ft=.002}){const At=new Re(1,1,1,22,22,24),Dt=At.attributes.position,fn=At.attributes.normal,An=At.attributes.uv,xn=Math.max(.001,ue-Ge),$n=.5*(ot+xt),Ie=Math.max(1e-5,.5*(xt-ot)),_t=Math.max(6e-4,Math.min(Ie*.85,Xe)),tn=Math.max(6e-4,Math.min(Ie*.85,ft)),Jn=Math.max(5e-4,_t*.82),mt=Math.max(5e-4,tn),Jt=28,Kt=(Et,qt,$t)=>{const Cn=Math.abs(Et)-xn,mn=Math.abs(qt)-xn,si=Math.hypot(Math.max(Cn,0),Math.max(mn,0))+Math.min(Math.max(Cn,mn),0)-Ge,On=Math.min(1,(Et*Et+qt*qt)/Math.max(1e-6,ue*ue)),ai=xt-_t*.18*On;if($t>=$n){const bi=si+Jn,Ji=$t-(ai-Jn);return Math.hypot(Math.max(bi,0),Math.max(Ji,0))+Math.min(Math.max(bi,Ji),0)-Jn}const Kn=si+mt,fi=ot+mt-$t;return Math.hypot(Math.max(Kn,0),Math.max(fi,0))+Math.min(Math.max(Kn,fi),0)-mt},Qt=25e-5;for(let Et=0;Et<Dt.count;Et++){const qt=Dt.getX(Et)*2,$t=Dt.getY(Et)*2,Cn=Dt.getZ(Et)*2,mn=fn.getX(Et);fn.getY(Et);const si=fn.getZ(Et),On=qt*qt,ai=$t*$t,Kn=Cn*Cn,fi=qt*Math.sqrt(Math.max(0,1-ai*.5-Kn*.5+ai*Kn/3)),bi=$t*Math.sqrt(Math.max(0,1-Kn*.5-On*.5+Kn*On/3)),Ji=Cn*Math.sqrt(Math.max(0,1-On*.5-ai*.5+On*ai/3));let Ui=fi*ue,hi=bi*ue,Ni=Ji*Ie;const Wn=Math.hypot(Ui,hi,Ni)||1;Ui/=Wn,hi/=Wn,Ni/=Wn;let pi=Wn;for(let u0=0;u0<6;u0++){const Id=Ui*pi,Ld=hi*pi,Dd=$n+Ni*pi,Ud=Kt(Id,Ld,Dd);pi-=Ud*.92}const mi=Ui*pi,gi=hi*pi,xi=$n+Ni*pi;Dt.setXYZ(Et,mi,gi,xi);const r0=Kt(mi+Qt,gi,xi)-Kt(mi-Qt,gi,xi),l0=Kt(mi,gi+Qt,xi)-Kt(mi,gi-Qt,xi),c0=Kt(mi,gi,xi+Qt)-Kt(mi,gi,xi-Qt),Er=Math.hypot(r0,l0,c0)||1;fn.setXYZ(Et,r0/Er,l0/Er,c0/Er),Math.abs(si)>.5?An.setXY(Et,(mi+ue)*Jt,(gi+ue)*Jt):Math.abs(mn)>.5?An.setXY(Et,(xi-ot)*Jt,(gi+ue)*Jt):An.setXY(Et,(mi+ue)*Jt,(xi-ot)*Jt)}return Dt.needsUpdate=!0,fn.needsUpdate=!0,An.needsUpdate=!0,At.computeBoundingSphere(),At}function ne(ue,Ge,ot,xt,Xe){const ft=new L().subVectors(Ge,ue),pt=ft.length(),Lt=new L().addVectors(ue,Ge).multiplyScalar(.5),At=ft.clone().normalize(),Dt=new L(0,1,0),fn=new L().crossVectors(Dt,At).normalize(),An=new L().crossVectors(At,fn).normalize(),xn=new Vt().makeBasis(fn,An,At),$n=new Yn().setFromRotationMatrix(xn),Ie=new I(new Re(ot,xt,pt),Xe);return Ie.position.copy(Lt),Ie.quaternion.copy($n),Ie.castShadow=!0,Ie.receiveShadow=!0,{mesh:Ie,mid:Lt,quat:$n,len:pt,right:fn,trueUp:An,forward:At}}function be(){const ue=new et;ue.name="FifineAm8BoomMicGroup";const Ge=new L(.245,.015,-.285),ot=new L(.11,.105,-.14),xt=new L(-.025,.105,-.045),Xe=new ii($e.degToRad(10),$e.degToRad(-28),0,"YXZ"),ft=new Yn().setFromEuler(Xe),Lt=new L(0,-.048,-.035).clone().applyQuaternion(ft).add(xt),At=new I(new st(.016,.02,.036,24),P);At.position.set(Ge.x,.018,Ge.z),At.castShadow=!0,At.receiveShadow=!0,ue.add(At);const Dt=new I(new st(.0125,.0125,.016,20),p);Dt.position.set(Ge.x,.04,Ge.z),Dt.castShadow=!0,ue.add(Dt);const fn=new L(Ge.x,.038,Ge.z),An=ne(fn,ot,.019,.016,P);ue.add(An.mesh);const xn=new I(new st(.0135,.0135,.038,28),P);xn.position.copy(ot),xn.castShadow=!0,xn.receiveShadow=!0,ue.add(xn);const $n=new I(new st(.0126,.0126,.0026,28),T);$n.position.set(ot.x,ot.y+.0195,ot.z),$n.castShadow=!0,ue.add($n);const Ie=ne(ot,Lt,.018,.015,P);ue.add(Ie.mesh);const _t=new I(new Re(.01,.002,Ie.len*.88),v);_t.position.copy(Ie.mid).addScaledVector(Ie.trueUp,.0076),_t.quaternion.copy(Ie.quat),ue.add(_t);for(const hi of[.32,.68]){const Ni=new L().lerpVectors(ot,Lt,hi),Wn=new I(new Re(.0195,.0165,.012),v);Wn.position.copy(Ni),Wn.quaternion.copy(Ie.quat),Wn.castShadow=!0,ue.add(Wn)}const tn=new et;tn.name="FifineAm8MicHeadAssembly",tn.position.copy(xt),tn.quaternion.copy(ft);const Jn=W({halfWidth:.0252,cornerRadius:.0132,zStart:-.001,zEnd:.052,frontDomeLength:.011,rearBevelLength:.002}),mt=new I(Jn,oe);mt.name="FifineAm8Windscreen",mt.castShadow=!0,mt.receiveShadow=!0,tn.add(mt);const Jt=W({halfWidth:.0242,cornerRadius:.0128,zStart:-.003,zEnd:0,frontDomeLength:0,rearBevelLength:0}),Kt=new I(Jt,v);tn.add(Kt);const Qt=W({halfWidth:.0249,cornerRadius:.013,zStart:-.042,zEnd:-.002,frontDomeLength:.001,rearBevelLength:.001}),Et=new I(Qt,P);Et.name="FifineAm8RearBody",Et.castShadow=!0,Et.receiveShadow=!0,tn.add(Et);const qt=W({halfWidth:.0247,cornerRadius:.0129,zStart:-.0468,zEnd:-.0418,frontDomeLength:0,rearBevelLength:0}),$t=new I(qt,xe);$t.name="MicBlueLedRing",tn.add($t);const Cn=W({halfWidth:.0244,cornerRadius:.0128,zStart:-.0495,zEnd:-.0468,frontDomeLength:0,rearBevelLength:.0015}),mn=new I(Cn,P);tn.add(mn);const si=new I(new st(.0042,.0042,.003,16),P);si.position.set(0,.0255,-.016),tn.add(si);for(const hi of[-1,1]){const Ni=hi*.0268,Wn=new I(new st(.0092,.0092,.0065,24),P);Wn.rotation.z=Math.PI/2,Wn.position.set(Ni,-.001,-.021),Wn.castShadow=!0,tn.add(Wn);const pi=new I(new st(.0095,.0095,.0014,24),T);pi.rotation.z=Math.PI/2,pi.position.set(Ni+hi*.0022,-.001,-.021),tn.add(pi);const mi=new L(hi*.0258,-.001,-.021),gi=new L(hi*.0258,-.034,-.035),xi=ne(mi,gi,.0042,.014,P);tn.add(xi.mesh)}const On=new I(new Re(.0558,.0045,.02),P);On.position.set(0,-.0345,-.035),On.castShadow=!0,On.receiveShadow=!0,tn.add(On);const ai=new I(new Re(.046,.0012,.017),Me);ai.position.set(0,-.032,-.036),tn.add(ai);const Kn=new I(new st(.0078,.0078,.0045,20),T);Kn.position.set(0,-.039,-.035),tn.add(Kn);const fi=new I(new st(.0068,.0082,.012,20),P);fi.position.set(0,-.045,-.035),fi.castShadow=!0,tn.add(fi);const bi=new co([new L(0,-.012,-.049),new L(0,-.022,-.064),new L(.004,-.036,-.06),new L(.01,-.042,-.042)]),Ji=new Io(bi,16,.0024,10,!1),Ui=new I(Ji,v);return Ui.castShadow=!0,tn.add(Ui),ue.add(tn),{group:ue,blueLedRing:$t}}const{group:me,blueLedRing:ke}=be();me.name="boom_arm_blue_mic",e.add(me);const Le=new et;Le.name="WhiteKeyLightLamp",Le.userData.legacyName="white_key_light_lamp",Le.position.set(.355,0,-.095);const He=new we({name:"Mat_LampMatteWhite",color:16052198,roughness:.82,metalness:.03,emissive:new ze(16774108),emissiveIntensity:.05}),Ze=new I(new st(.09,.0925,.016,40),He);Ze.position.set(0,.008,0),Ze.castShadow=!0,Ze.receiveShadow=!0,Le.add(Ze);const Ne=new I(new st(.0095,.011,.36,24),He);Ne.position.set(0,.18,0),Ne.castShadow=!0,Ne.receiveShadow=!0,Le.add(Ne);const Fe=new et;Fe.position.set(0,.365,.012),Fe.rotation.y=$e.degToRad(-24),Fe.rotation.x=$e.degToRad(16);const ve=new I(new Ro(.09,.1,16,32),He);ve.rotation.z=Math.PI/2,ve.scale.set(1,1,.32),ve.castShadow=!0,Fe.add(ve);const Se=new we({name:"Mat_LampWarmDiffuser",color:16777215,emissive:new ze(16774626),emissiveIntensity:1.05,roughness:.28,metalness:.02}),Ee=new I(new Ro(.082,.096,14,32),Se);Ee.rotation.z=Math.PI/2,Ee.scale.set(1,1,.12),Ee.position.set(0,0,.016),Fe.add(Ee),Le.add(Fe),e.add(Le);const We=new et;We.name="logitech_g915_keyboard",We.position.set(-.161,0,.135);const Z=new I(new Re(.475,.011,.15),v);Z.position.set(0,.0055,0),Z.castShadow=!0,Z.receiveShadow=!0,We.add(Z);const Be=new I(new Re(.473,.004,.148),p);Be.position.set(0,.013,0),Be.castShadow=!0,Be.receiveShadow=!0,We.add(Be);const Ve=new we({name:"Mat_Switch_Housing",color:689407,emissive:new ze(51455),emissiveIntensity:2.4,roughness:.25,metalness:.1}),Ke=new I(new Re(.448,.0022,.112),Ve);Ke.position.set(0,.0152,.005),We.add(Ke);const re=new I(new st(.0048,.0048,.0022,16),new we({color:16758861,emissive:new ze(16754726),emissiveIntensity:1.85}));re.position.set(-.145,.0158,-.058),We.add(re);const ee=new I(new st(.0055,.0055,.036,20),p);ee.rotation.z=Math.PI/2,ee.position.set(.195,.0165,-.058),ee.castShadow=!0,We.add(ee);const Te=21,Ye=6,ut=Te*Ye,gt=new Re(.0165,.0065,.0155),Ct=new we({name:"Mat_Keycap_Legend_UV",color:1448224,roughness:.42,metalness:.18,emissive:new ze(58879),emissiveIntensity:2.6}),Gt=new Hi(gt,Ct,ut);Gt.castShadow=!0,Gt.receiveShadow=!0;const un=new sn,gn=new ze;let ln=0;for(let ue=0;ue<Ye;ue++)for(let Ge=0;Ge<Te;Ge++){const ot=-.215+Ge*.0212,xt=-.044+ue*.0195;un.position.set(ot,.0185,xt),ue===5&&Ge>=5&&Ge<=9?un.scale.set(Ge===7?4.8:.001,1,1):un.scale.set(1,1,1),un.updateMatrix(),Gt.setMatrixAt(ln,un.matrix),Ge===0?gn.setHex(1893119):ue>=2&&ue<=3&&Ge>=2&&Ge<=4?gn.setHex(2681087):gn.setHex(1843757),Gt.setColorAt(ln,gn),ln++}Gt.instanceMatrix.needsUpdate=!0,Gt.instanceColor&&(Gt.instanceColor.needsUpdate=!0),We.add(Gt),e.add(We);const Tn=new et;Tn.name="razer_mat_and_mouse";const _e=new I(new Re(.336,.003,.261),new we({color:1250845,roughness:.48,metalness:.15}));_e.position.set(.325,.0015,.135),_e.receiveShadow=!0,Tn.add(_e);const ye=new I(new Re(.337,.0018,.262),new we({color:1579810,roughness:.55,metalness:.12}));ye.position.set(.325,9e-4,.135),Tn.add(ye);const De=new et;De.name="RazerMatAndGamingMouse",De.position.set(.285,.003,.115),De.rotation.y=$e.degToRad(-10);const it=new we({name:"Mat_MouseShell_Matte",color:1447965,roughness:.52,metalness:.12}),dt=new we({name:"Mat_MouseRubber_Grip",color:1053206,roughness:.82,metalness:.04}),yt=new we({name:"Mat_MouseGloss_Trim",color:2040361,roughness:.24,metalness:.18}),bt=new I(new Pt(.036,28,22),it);bt.scale.set(.98,.58,1.78),bt.position.set(0,.018,0),bt.castShadow=!0,bt.receiveShadow=!0,De.add(bt);const Ht=new I(new Pt(.016,18,14),dt);Ht.scale.set(.85,.32,1.85),Ht.position.set(-.026,.007,.004),De.add(Ht);const Wt=new I(new st(.0065,.0065,.005,18),yt);Wt.rotation.z=Math.PI/2,Wt.position.set(0,.035,-.028),De.add(Wt),Tn.add(De),e.add(Tn);const cn=new et;cn.name="DeskNightGlowGroup";const Pn=.325,In=.135,Fn=.1704,oi=.1329,dn=.0052,Zn=.002,D=[],fe=[{cx:Pn+Fn-dn,cz:In-oi+dn,a0:-Math.PI*.5,a1:0},{cx:Pn+Fn-dn,cz:In+oi-dn,a0:0,a1:Math.PI*.5},{cx:Pn-Fn+dn,cz:In+oi-dn,a0:Math.PI*.5,a1:Math.PI},{cx:Pn-Fn+dn,cz:In-oi+dn,a0:Math.PI,a1:Math.PI*1.5}];for(let ue=0;ue<4;ue++){const Ge=fe[ue],ot=fe[(ue+1)%4],xt=12;for(let pt=0;pt<=xt;pt++){const Lt=Ge.a0+(Ge.a1-Ge.a0)*(pt/xt);D.push(new L(Ge.cx+Math.cos(Lt)*dn,Zn,Ge.cz+Math.sin(Lt)*dn))}const Xe=D[D.length-1],ft=new L(ot.cx+Math.cos(ot.a0)*dn,Zn,ot.cz+Math.sin(ot.a0)*dn);for(let pt=1;pt<=8;pt++)D.push(new L().lerpVectors(Xe,ft,pt/9))}const Ce=new co(D,!0,"centripetal",.05),le=new Io(Ce,180,.00225,16,!0),ce=new an({name:"Mat_MousepadCyanRGB",toneMapped:!1,vertexShader:`
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
    `}),qe=new I(le,ce);qe.name="MousepadCyanRgbBorderTube",qe.castShadow=!1,qe.receiveShadow=!1,cn.add(qe);const Qe={uColor:{value:new ze(60415)},uIntensity:{value:1}},tt=new an({uniforms:Qe,toneMapped:!1,transparent:!0,depthWrite:!1,blending:Gn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:`
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
    `}),ct=new I(new Zt(.46,.38),tt);ct.rotation.x=-Math.PI/2,ct.position.set(Pn,45e-5,In),ct.name="MousepadCyanDeskGlowPlane",ct.castShadow=!1,ct.receiveShadow=!1,cn.add(ct);const Ae=s0();_.map=Ae,_.emissiveMap=Ae,_.color.setHex(16777215),_.emissive.setHex(16777215),_.emissiveIntensity=.45,_.fog=!1,Se.color.setHex(16765598),Se.emissive.setHex(16750134),Se.emissiveIntensity=1.65;const je=[xe],Oe=[_],Je=[Se];let nt=1.15,ht=-1,Mt=-1;function Tt(ue=0,Ge=1.15){if(nt=Ge,Math.abs(ue-ht)<1e-4&&Math.abs(Ge-Mt)<1e-4)return;ht=ue,Mt=Ge;for(const xt of Oe)xt&&(xt.map=Ae,xt.emissiveMap=Ae,xt.fog=!1,xt.color&&xt.color.setHex(16777215),xt.emissive&&xt.emissive.setHex(16777215),xt.emissiveIntensity=.42+.1*Ge,xt.needsUpdate=!0);const ot=.35+1.25*Ge;for(const xt of Je)xt&&(xt.color&&xt.color.setHex(16764832),xt.emissive&&xt.emissive.setHex(16750134),xt.emissiveIntensity=ot)}function Ot(ue,Ge=!1){if(!ue||!ue.attributes||!ue.attributes.position)return;const ot=ue.attributes.position,xt=ot.count,Xe=ue.attributes.uv;if(!Ge&&Xe&&Xe.count===xt){let pt=!1;const Lt=Xe.getX(0),At=Xe.getY(0);for(let Dt=1;Dt<Math.min(xt,64);Dt++)if(Math.abs(Xe.getX(Dt)-Lt)>.001||Math.abs(Xe.getY(Dt)-At)>.001){pt=!0;break}if(pt)return}const ft=new Float32Array(xt*2);for(let pt=0;pt<xt;pt++)ft[pt*2+0]=(ot.getX(pt)+.7)/1.4,ft[pt*2+1]=(ot.getZ(pt)+.35)/.7;ue.setAttribute("uv",new rn(ft,2)),ue.attributes.uv.needsUpdate=!0}function rt(ue){if(!ue||!ue.attributes||!ue.attributes.position)return;ue.computeBoundingBox();const Ge=ue.boundingBox,ot=Math.max(1e-4,Ge.max.x-Ge.min.x),xt=Math.max(1e-4,Ge.max.y-Ge.min.y),Xe=ue.attributes.position,ft=Xe.count,pt=new Float32Array(ft*2);for(let Lt=0;Lt<ft;Lt++)pt[Lt*2+0]=$e.clamp((Xe.getX(Lt)-Ge.min.x)/ot,0,1),pt[Lt*2+1]=$e.clamp((Xe.getY(Lt)-Ge.min.y)/xt,0,1);ue.setAttribute("uv",new rn(pt,2)),ue.attributes.uv.needsUpdate=!0}function Ft(ue){if(!ue)return;ue.parent&&Sd(ue.parent);const Ge=new ze(16750134),ot=new ze(1993727);ue.traverse(Xe=>{if((Xe.name==="LogitechG915Keyboard"||Xe.name==="logitech_g915_keyboard")&&!Xe.userData._kbShiftedLeft){let ft=!1,pt=Xe.parent;for(;pt;){if(pt.userData&&pt.userData._kbShiftedLeft){ft=!0;break}pt=pt.parent}ft||(Xe.userData._kbShiftedLeft=!0,Xe.position.x-=.076,Xe.updateMatrixWorld(!0))}});function xt(Xe){!Xe||Xe.userData._hasPropTrackGlowHook||(Xe.userData._hasPropTrackGlowHook=!0,Xe.onBeforeCompile=ft=>{ft.uniforms.uTrackLedTime=Mn.uTime,ft.uniforms.uTrackLedIntensity=Mn.uIntensity,ft.uniforms.uTrackGlowFieldTex=Mn.uGlowFieldTex,ft.vertexShader=`varying vec3 vPropWorldPos;
varying vec3 vPropWorldNormal;
`+ft.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
             vPropWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vPropWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),ft.fragmentShader=`uniform float uTrackLedTime;
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
`+ft.fragmentShader.replace("#include <dithering_fragment>",`vec2 fieldUv = vec2((vPropWorldPos.x - (-0.58)) / 1.16, (vPropWorldPos.z - (-0.34)) / 0.68);
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
             #include <dithering_fragment>`)})}if(xt(P),xt(T),ue.traverse(Xe=>{if(!Xe.isMesh||!Xe.material)return;Xe.castShadow=!0,Xe.receiveShadow=!0,Xe.frustumCulled=!0,Xe.geometry&&!Xe.geometry.boundingSphere&&Xe.geometry.computeBoundingSphere();let ft=!1,pt=!1,Lt=!1,At=!1,Dt=!1,fn=!1,An=!1,xn=Xe;for(;xn;){xn.userData&&xn.userData._isFifineReplacement&&(An=!0);const Ie=(xn.name||"").toLowerCase();(Ie.includes("whitekeylightlamp")||Ie.includes("key_light_lamp")||Ie.includes("lamp"))&&(ft=!0),(Ie.includes("razermatandgamingmouse")||Ie.includes("gamingmouse")||Ie.includes("mouse"))&&(pt=!0),(Ie.includes("logitechg915")||Ie.includes("keyboard"))&&(Lt=!0),Ie.includes("window")&&(At=!0),(Ie.includes("monitor")||Ie.includes("ultragear"))&&(Dt=!0),(Ie.includes("boomarm")||Ie.includes("bluemic")||Ie.includes("mic"))&&(fn=!0),xn=xn.parent}if(An)return;if(fn){Xe.visible=!1,Xe.castShadow=!1,Xe.receiveShadow=!1;return}if(Lt&&Xe.geometry&&Xe.geometry.attributes&&Xe.geometry.attributes.position&&!Xe.geometry.userData._gBadgeRemoved){const Ie=Array.isArray(Xe.material)?Xe.material[0]&&Xe.material[0].name||"":Xe.material&&Xe.material.name||"";if(Ie!=="Mat_GunmetalAlu"&&Ie!=="Mat_Keycap_Side"){Xe.geometry.userData._gBadgeRemoved=!0;const _t=Xe.geometry.attributes.position,tn=mt=>_t.getX(mt)<-.204&&_t.getZ(mt)<-.044&&_t.getY(mt)>.0139;if(Xe.geometry.index){const mt=Xe.geometry.index.array,Jt=[];let Kt=!1;for(let Qt=0;Qt+2<mt.length;Qt+=3){const Et=mt[Qt],qt=mt[Qt+1],$t=mt[Qt+2];tn(Et)||tn(qt)||tn($t)?Kt=!0:Jt.push(Et,qt,$t)}Kt&&Xe.geometry.setIndex(Jt)}let Jn=!1;for(let mt=0;mt<_t.count;mt++)tn(mt)&&(_t.setXYZ(mt,-.22,.005,-.056),Jn=!0);Jn&&(_t.needsUpdate=!0,Xe.geometry.computeBoundingBox(),Xe.geometry.computeBoundingSphere())}}const $n=Array.isArray(Xe.material)?Xe.material:[Xe.material];for(const Ie of $n){if(!Ie)continue;const _t=Ie.name||"";if(_t==="Mat_WarmStudioWall"||_t==="Mat_WindowFrame"||_t==="Mat_GoldenHourWindow"||At){Xe.visible=!1,Xe.castShadow=!1,Xe.receiveShadow=!1;continue}const tn=_t==="Mat_MonitorScreen"||_t==="Mat_MonitorSatinScreen"||Dt&&(Xe.name||"").toLowerCase().includes("screen"),Jn=_t==="Mat_LampWarmDiffuser"||ft&&(Xe.name||"").toLowerCase().includes("diffuser");if(_t!=="Mat_OakWood"&&_t!=="Mat_Keycap_Legend_UV"&&_t!=="Mat_Switch_Housing"&&_t!=="Mat_FoamWindscreen"&&!tn&&!Jn&&xt(Ie),_t==="Mat_RazerMouseMat"||_t==="Mat_MousepadCloth"||_t==="RazerMouseMat"||pt&&_t.toLowerCase().includes("mat")){if(Xe.castShadow=!1,Xe.receiveShadow=!0,!ue.userData._logoFreeMousepadTex){const mt=document.createElement("canvas");mt.width=512,mt.height=512;const Jt=mt.getContext("2d");Jt.fillStyle="#181a20",Jt.fillRect(0,0,512,512);const Kt=Jt.getImageData(0,0,512,512),Qt=Kt.data;for(let qt=0;qt<Qt.length;qt+=4){const $t=qt>>2&511,Cn=qt>>11&511,mn=(($t*73+Cn*151^$t*19)&7)-3.5;Qt[qt]=Math.max(12,Math.min(38,24+mn)),Qt[qt+1]=Math.max(14,Math.min(40,26+mn)),Qt[qt+2]=Math.max(18,Math.min(46,32+mn)),Qt[qt+3]=255}Jt.putImageData(Kt,0,0);const Et=new zt(mt);Et.colorSpace=jt,Et.wrapS=kn,Et.wrapT=kn,Et.anisotropy=4,ue.userData._logoFreeMousepadTex=Et}if(Ie.map&&Ie.map!==ue.userData._logoFreeMousepadTex&&Ie.map.dispose(),Ie.map=ue.userData._logoFreeMousepadTex,Ie.color&&Ie.color.setHex(16777215),Ie.roughness=.68,Ie.metalness=.04,Ie.needsUpdate=!0,Xe.geometry&&Xe.geometry.attributes&&Xe.geometry.attributes.position&&!Xe.geometry.userData._cornersRoundedForRgbTube){Xe.geometry.userData._cornersRoundedForRgbTube=!0;const mt=Xe.geometry.attributes.position,Jt=.325,Kt=.135,Qt=.1692,Et=.1317,qt=.0056,$t=Qt-qt,Cn=Et-qt;for(let mn=0;mn<mt.count;mn++)if(mt.getY(mn)<=.0038){const On=mt.getX(mn)-Jt,ai=mt.getZ(mn)-Kt,Kn=Math.max(0,Math.abs(On)-$t),fi=Math.max(0,Math.abs(ai)-Cn),bi=Math.hypot(Kn,fi);if(bi>qt){const Ji=($t+Kn/bi*qt)*Math.sign(On),Ui=(Cn+fi/bi*qt)*Math.sign(ai);mt.setX(mn,Jt+Ji),mt.setZ(mn,Kt+Ui)}}mt.needsUpdate=!0,Xe.geometry.computeBoundingBox(),Xe.geometry.computeBoundingSphere()}continue}if(_t==="Mat_OakWood"){if(Xe.geometry&&Xe.geometry.attributes&&Xe.geometry.attributes.position){const mt=Xe.geometry.attributes.position;if(Xe.geometry.index){const Qt=Xe.geometry.index.array,Et=[];let qt=!1;for(let $t=0;$t+2<Qt.length;$t+=3){const Cn=Qt[$t],mn=Qt[$t+1],si=Qt[$t+2];mt.getZ(Cn)<-.315||mt.getY(Cn)>.015||mt.getZ(mn)<-.315||mt.getY(mn)>.015||mt.getZ(si)<-.315||mt.getY(si)>.015?qt=!0:Et.push(Cn,mn,si)}qt&&Xe.geometry.setIndex(Et)}let Jt=!1;for(let Kt=0;Kt<mt.count;Kt++)(mt.getZ(Kt)<-.315||mt.getY(Kt)>.015)&&(mt.setXYZ(Kt,0,-.01,0),Jt=!0);Jt&&(mt.needsUpdate=!0,Xe.geometry.computeBoundingBox(),Xe.geometry.computeBoundingSphere()),Ot(Xe.geometry,!0)}Xe.castShadow=!1,Xe.receiveShadow=!0,Ie.color&&Ie.color.setHex(16777215),Ie.map?Ie.map.anisotropy=16:Ie.map=n||t,Ie.normalMap=null,Ie.normalScale=new Ue(0,0),Ie.roughnessMap||(Ie.roughnessMap=s),Ie.roughness=.74,Ie.metalness=.01,Ie.needsUpdate=!0;continue}if(_t==="Mat_BlackSteel"){Ie.map=null,Ie.color&&Ie.color.setHex(1579552),Ie.roughness=.36,Ie.metalness=.82,Ie.needsUpdate=!0;continue}if(_t==="Mat_MonitorScreen"||_t==="Mat_MonitorSatinScreen"||Dt&&(Xe.name||"").toLowerCase().includes("screen")){rt(Xe.geometry),X(Ie),pe.includes(Ie)||pe.push(Ie),Pe(Ie,se);continue}if(_t==="Mat_Keycap_Legend_UV"){const mt=Ie.map||Ie.emissiveMap;if(mt&&mt.image&&!ue.userData._gFreeKeyboardTex){const Jt=mt.image,Kt=Jt.width||4096,Qt=Jt.height||1536,Et=document.createElement("canvas");Et.width=Kt,Et.height=Qt;const qt=Et.getContext("2d");qt.drawImage(Jt,0,0,Kt,Qt),qt.fillStyle="#121417",qt.fillRect(0,0,Math.round(Kt*.08),Math.round(Qt*.22));const $t=new zt(Et);$t.colorSpace=jt,$t.flipY=mt.flipY,$t.wrapS=mt.wrapS,$t.wrapT=mt.wrapT,$t.anisotropy=8,ue.userData._gFreeKeyboardTex=$t}ue.userData._gFreeKeyboardTex&&(Ie.map=ue.userData._gFreeKeyboardTex,Ie.emissiveMap=ue.userData._gFreeKeyboardTex),Ie.emissive?Ie.emissive.setHex(58879):Ie.emissive=new ze(58879),Ie.emissiveIntensity=2.6,Ie.needsUpdate=!0;continue}if(_t==="Mat_Switch_Housing"){Ie.color&&Ie.color.setHex(689407),Ie.emissive?Ie.emissive.setHex(51455):Ie.emissive=new ze(51455),Ie.emissiveIntensity=2.4,Ie.needsUpdate=!0;continue}if(pt||_t==="Mat_MouseShell_Matte"||_t==="Mat_MouseRubber_Grip"||_t==="Mat_MouseGloss_Trim"){if(Ie.color)if(_t==="Mat_MouseRubber_Grip")Ie.color.setHex(1053206);else if(_t==="Mat_MouseGloss_Trim")Ie.color.setHex(2040361);else{const mt=.13333333333333333,Jt=37/255,Kt=44/255;(Ie.color.r>mt||Ie.color.g>Jt||Ie.color.b>Kt)&&Ie.color.setHex(1447965)}Ie.emissive&&Ie.emissive.setHex(0),Ie.emissiveIntensity=0,Ie.metalness!==void 0&&(Ie.metalness=Math.min(Ie.metalness,.22)),Ie.roughness!==void 0&&(Ie.roughness=_t==="Mat_MouseGloss_Trim"?.24:_t==="Mat_MouseRubber_Grip"?.82:Math.max(.45,Ie.roughness)),Ie.needsUpdate=!0;continue}if(ft||_t==="Mat_LampWarmDiffuser"||_t==="Mat_LampMatteWhite"||_t==="Mat_LampTrayRecess"){if(_t==="Mat_LampWarmDiffuser"||(Xe.name||"").toLowerCase().includes("diffuser"))Ie.color&&Ie.color.setHex(16764832),Ie.emissive&&Ie.emissive.copy(Ge),Ie.emissiveIntensity=.35+1.25*nt,Ie.roughness=.3,Ie.metalness=.02,Je.includes(Ie)||Je.push(Ie);else{const Jt=_t==="Mat_LampTrayRecess";Ie.color&&Ie.color.setHex(Jt?13156532:16051424),Ie.emissive&&Ie.emissive.copy(Ge),Ie.emissiveIntensity=.06,Ie.roughness=Jt?.55:.78,Ie.metalness=.03}Ie.needsUpdate=!0}else _t==="Mat_ElectricBlueLED"?(Ie.color&&Ie.color.copy(ot),Ie.emissive&&Ie.emissive.copy(ot),Ie.emissiveIntensity=1.15,Ie.roughness=.18,Ie.needsUpdate=!0,je.includes(Ie)||je.push(Ie)):_t==="Mat_WhiteOLED"&&(Ie.emissiveIntensity!==void 0&&(Ie.emissiveIntensity=Math.min(Ie.emissiveIntensity,.35)),Ie.needsUpdate=!0)}}),!ue.userData._hasFifineMicReplacement){ue.userData._hasFifineMicReplacement=!0;const{group:Xe}=be();Xe.userData._isFifineReplacement=!0,ue.add(Xe),ue.updateMatrixWorld(!0)}}return{root:e,nightGlowGroup:cn,contactShadowGroup:c,contactShadowPlane:d,micBlueLedRing:ke,glbMicLedMaterials:je,goldenWindowMaterials:Oe,calibrateDeskPropsGlb:Ft,updateLightingMaterials:Tt,setMonitorHighScoresVisible:de}}let Us=null,Iu=!1;function Ns(i,e,t=!0){const n=Array.isArray(e)?e:[e];(async()=>{for(const o of n)try{const s=await fetch(o,{method:"HEAD"});if(!s.ok||(s.headers.get("content-type")||"").includes("text/html"))continue;const r=new Image;r.crossOrigin="anonymous",await new Promise((l,c)=>{r.onload=l,r.onerror=c,r.src=o}),i.dispose(),i.image=r,t&&(i.colorSpace=jt),i.needsUpdate=!0;return}catch{}})()}function g1(i){!i||Iu||(Iu=!0,Ns(i.gemini4CandleLabelTex,["/assets/textures/gemini_4_candle_label_2k.png?v=5.5","/assets/textures/gemini_4_candle_label_2k.png?v=5.4","/assets/textures/gemini_4_candle_label_2k.png"],!0),Ns(i.carpetAlbedoTex,["/assets/textures/room_carpet_2k.png?v=5.5","/assets/textures/room_carpet_2k.png?v=5.4","/assets/textures/room_carpet_2k.png"],!0),Ns(i.carpetNormalTex,["/assets/textures/room_carpet_normal_2k.png?v=5.5","/assets/textures/room_carpet_normal_2k.png?v=5.4","/assets/textures/room_carpet_normal_2k.png"],!1),Ns(i.darkWalnutTex,["/assets/textures/room_walnut_wood_2k.png?v=5.5","/assets/textures/room_walnut_wood_2k.png?v=5.4","/assets/textures/room_walnut_wood_2k.png"],!0),Ns(i.windowCityFacadeTex,["/assets/textures/window_city_facade_2k.png?v=5.5","/assets/textures/window_city_facade_2k.png?v=5.4","/assets/textures/window_city_facade_2k.png"],!0))}function Td(i=!1){if(Us)return i&&g1(Us),Us;const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#0c0b0e",t.fillRect(0,0,1024,1024);const n=140,o=120,s=744,a=784;t.fillStyle="#f6efe2",t.fillRect(n,o,s,a),t.fillStyle="rgba(190, 168, 134, 0.08)";for(let ae=0;ae<180;ae++){const xe=o+ae*37%a;t.fillRect(n,xe,s,2)}t.strokeStyle="#1d1a16",t.lineWidth=6,t.strokeRect(n+24,o+24,s-48,a-48),t.strokeStyle="#b68d40",t.lineWidth=3,t.strokeRect(n+36,o+36,s-72,a-72),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#4a4137",t.font='600 28px "Inter", "Helvetica Neue", sans-serif',t.letterSpacing="6px",t.fillText("PARFUM DE CODE",512,o+118),t.strokeStyle="#b68d40",t.lineWidth=2.5,t.beginPath(),t.moveTo(332,o+158),t.lineTo(692,o+158),t.stroke(),t.fillStyle="#12100e",t.font='800 104px "Georgia", "Times New Roman", serif',t.fillText("GEMINI 4",512,o+292),t.fillStyle="#c29138",t.font='600 30px "Georgia", serif',t.fillText("✦   1 : 87   M I C R O   E D I T I O N   ✦",512,o+392),t.fillStyle="#2b2520",t.font='500 26px "Inter", "Helvetica Neue", sans-serif',t.fillText("GOLDEN HOUR OAK  •  ESPRESSO  •  WARM SILICON",512,o+485),t.fillStyle="#5c5146",t.font='italic 24px "Georgia", serif',t.fillText("Hand-Poured in Mountain View & London",512,o+548),t.strokeStyle="#1d1a16",t.lineWidth=2,t.beginPath(),t.moveTo(260,o+622),t.lineTo(764,o+622),t.stroke(),t.fillStyle="#161310",t.font='700 28px "JetBrains Mono", monospace',t.fillText("1:87 MICRO EDITION  •  240G / 8.5 OZ",512,o+678);const r=new zt(e);r.colorSpace=jt,r.wrapS=kn,r.wrapT=kn,r.anisotropy=16;const l=512,c=512,d=document.createElement("canvas");d.width=l,d.height=c;const h=d.getContext("2d"),f=h.createImageData(l,c),p=f.data,v=document.createElement("canvas");v.width=l,v.height=c;const S=v.getContext("2d"),m=S.createImageData(l,c),u=m.data;for(let ae=0;ae<c;ae++)for(let xe=0;xe<l;xe++){const Me=(ae*l+xe)*4,oe=Math.sin(xe*12.9898+ae*78.233)*43758.5453,P=oe-Math.floor(oe),T=Math.sin(xe*.45)*Math.cos(ae*.45)*.5+.5,W=P*.65+T*.35;p[Me+0]=Math.round(226+W*16),p[Me+1]=Math.round(218+W*16),p[Me+2]=Math.round(204+W*15),p[Me+3]=255;const ne=$e.clamp(.5+(P-.5)*.22,.35,.65),be=$e.clamp(.5+(T-.5)*.22,.35,.65);u[Me+0]=Math.round(ne*255),u[Me+1]=Math.round(be*255),u[Me+2]=242,u[Me+3]=255}h.putImageData(f,0,0),S.putImageData(m,0,0);const g=new zt(d);g.colorSpace=jt,g.wrapS=Ut,g.wrapT=Ut,g.repeat.set(8,8),g.anisotropy=8;const M=new zt(v);M.wrapS=Ut,M.wrapT=Ut,M.repeat.set(8,8),M.anisotropy=8;const w=512,A=512,y=document.createElement("canvas");y.width=w,y.height=A;const C=y.getContext("2d"),_=C.createImageData(w,A),b=_.data;for(let ae=0;ae<A;ae++)for(let xe=0;xe<w;xe++){const Me=(ae*w+xe)*4,oe=Math.sin(ae*.14+Math.sin(xe*.035)*4.2)*.5+Math.sin(ae*.42+xe*.02)*.25+.5,P=Math.hypot(xe%256-128,ae%170),T=Math.sin(P*.36)*.18,W=$e.clamp(oe*.75+T,0,1);b[Me+0]=Math.round(45+W*38),b[Me+1]=Math.round(25+W*23),b[Me+2]=Math.round(14+W*14),b[Me+3]=255}C.putImageData(_,0,0);const x=new zt(y);x.colorSpace=jt,x.wrapS=Ut,x.wrapT=Ut,x.anisotropy=16;const R=1024,U=512,O=document.createElement("canvas");O.width=R,O.height=U;const N=O.getContext("2d"),k=N.createLinearGradient(0,0,0,U);k.addColorStop(0,"#ffd899"),k.addColorStop(.35,"#e8a864"),k.addColorStop(1,"#9c5a38"),N.fillStyle=k,N.fillRect(0,0,R,U);for(let ae=40;ae<U;ae+=14)N.fillStyle=ae%28===0?"rgba(125, 62, 36, 0.42)":"rgba(150, 78, 45, 0.36)",N.fillRect(0,ae,R,11);const z=5,K=3;for(let ae=0;ae<K;ae++)for(let xe=0;xe<z;xe++){const Me=75+xe*188,oe=58+ae*145,P=116,T=98;N.fillStyle="#ead5b4",N.fillRect(Me-8,oe-10,P+16,10),N.fillRect(Me-6,oe+T,P+12,8),N.fillStyle="#2a2421",N.fillRect(Me,oe,P,T);const W=N.createLinearGradient(Me,oe,Me+P,oe+T);W.addColorStop(0,"#fff0c4"),W.addColorStop(.55,"#f2a852"),W.addColorStop(1,"#593e38"),N.fillStyle=W,N.fillRect(Me+6,oe+6,P-12,T-12),N.fillStyle="#2a2421",N.fillRect(Me+P/2-2,oe,4,T),N.fillRect(Me,oe+T*.48,P,4)}const he=new zt(O);he.colorSpace=jt,he.anisotropy=8;const J=document.createElement("canvas");J.width=256,J.height=256;const ie=J.getContext("2d");ie.fillStyle="#0c1017",ie.fillRect(0,0,256,256),ie.strokeStyle="#283244",ie.lineWidth=6,ie.strokeRect(12,12,232,232),ie.fillStyle="#7ad4ff",ie.font='600 24px "Inter", sans-serif',ie.textAlign="center",ie.fillText("COMFORT ECO",128,66),ie.fillStyle="#ffffff",ie.font='700 68px "JetBrains Mono", monospace',ie.fillText("21.0°C",128,148),ie.fillStyle="#ffaa44",ie.font='500 22px "Inter", sans-serif',ie.fillText("● HEAT AUTO  46%",128,204);const F=new zt(J);F.colorSpace=jt;const H=document.createElement("canvas");H.width=256,H.height=256;const Q=H.getContext("2d"),Y=Q.createRadialGradient(128,128,18,128,128,124);Y.addColorStop(0,"rgba(24, 16, 10, 0.52)"),Y.addColorStop(.55,"rgba(28, 19, 12, 0.28)"),Y.addColorStop(.85,"rgba(32, 22, 14, 0.08)"),Y.addColorStop(1,"rgba(32, 22, 14, 0.0)"),Q.fillStyle=Y,Q.fillRect(0,0,256,256);const ge=new zt(H),V=512,te=512,$=document.createElement("canvas");$.width=V,$.height=te;const q=$.getContext("2d"),pe=q.createImageData(V,te),se=pe.data,Pe=document.createElement("canvas");Pe.width=V,Pe.height=te;const de=Pe.getContext("2d"),X=de.createImageData(V,te),j=X.data,G=(ae,xe)=>{let Me=ae*374761393+xe*668265263^1542469173;return Me=(Me^Me>>13)*1274126177,((Me^Me>>16)>>>0)/4294967295};for(let ae=0;ae<te;ae++)for(let xe=0;xe<V;xe++){const Me=(ae*V+xe)*4,oe=G(xe,ae)-.5,P=xe>>1&255,T=ae>>1&255,W=P+1&255,ne=T+1&255,be=(xe&1)*.5,me=(ae&1)*.5,ke=G(P+101,T+211),Le=G(W+101,T+211),He=G(P+101,ne+211),Ze=G(W+101,ne+211),Ne=(ke*(1-be)+Le*be)*(1-me)+(He*(1-be)+Ze*be)*me-.5,Fe=oe*6.5+Ne*5;se[Me+0]=Math.round($e.clamp(166+Fe,152,180)),se[Me+1]=Math.round($e.clamp(160+Fe*.96,146,174)),se[Me+2]=Math.round($e.clamp(150+Fe*.92,136,164)),se[Me+3]=255;const ve=G(xe+1&511,ae)-G(xe+511&511,ae),Se=G(xe,ae+1&511)-G(xe,ae+511&511);j[Me+0]=Math.round($e.clamp(128+ve*18,108,148)),j[Me+1]=Math.round($e.clamp(128+Se*18,108,148)),j[Me+2]=248,j[Me+3]=255}q.putImageData(pe,0,0),de.putImageData(X,0,0);const B=new zt($);B.colorSpace=jt,B.wrapS=Ut,B.wrapT=Ut,B.repeat.set(4,4),B.anisotropy=8;const E=new zt(Pe);return E.wrapS=Ut,E.wrapT=Ut,E.repeat.set(4,4),E.anisotropy=8,Us={gemini4CandleLabelTex:r,carpetAlbedoTex:g,carpetNormalTex:M,darkWalnutTex:x,windowCityFacadeTex:he,thermostatTex:F,contactAoTex:ge,bedFabricAlbedoTex:B,bedFabricNormalTex:E},Us}function Vi(i,e,t,n,o,s,a=.68){const r=new kt({map:i,transparent:!0,opacity:a,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),l=new I(new Zt(o,s),r);return l.rotation.x=-Math.PI/2,l.position.set(e,t,n),l.castShadow=!1,l.receiveShadow=!1,l}function x1(i,e){i.add(Vi(e,-1.32,-.728,.635,1.56,2.12,.72)),i.add(Vi(e,0,-.728,2.33,.92,.52,.74)),i.add(Vi(e,.02,-.728,.46,.58,.58,.68)),i.add(Vi(e,-.42,-.728,-.01,.26,.64,.68)),i.add(Vi(e,.42,-.728,-.01,.26,.64,.68)),i.add(Vi(e,1.04,-.728,.525,.72,1.84,.68)),i.add(Vi(e,.24,.0512,2.33,.16,.16,.52)),i.add(Vi(e,0,.0512,2.33,.14,.14,.56)),i.add(Vi(e,-.24,.0512,2.33,.17,.17,.54))}function v1(i,e=null){if(!i)return;const{gemini4CandleLabelTex:t,carpetAlbedoTex:n,carpetNormalTex:o,darkWalnutTex:s,windowCityFacadeTex:a,bedFabricAlbedoTex:r,bedFabricNormalTex:l}=Td();i.traverse(c=>{if(!c.isMesh)return;const d=c.name||"",h=c.parent&&c.parent.name||"",f=d.toLowerCase(),p=c.material?Array.isArray(c.material)?c.material:[c.material]:[],v=p.map(u=>u&&u.name?u.name:""),S=f.includes("bed")||f.includes("duvet")||f.includes("pillow")||f.includes("mattress"),m=d.includes("BoucleDeskChair")||h.includes("BoucleDeskChair")||f.includes("chair")||f.includes("boucle")||v.some(u=>u.includes("Boucle")||u.includes("Chair"));if(c.castShadow=!1,c.receiveShadow=!(S||m),c.frustumCulled=!0,c.geometry&&!c.geometry.boundingSphere&&c.geometry.computeBoundingSphere(),!!c.material)for(const u of p){if(!u)continue;const g=u.name||"",M=g.toLowerCase();if(g==="Mat_Gemini4CandleLabel"||M.includes("gemini4candlelabel")||M.includes("candle_label")||f.includes("candle")&&f.includes("label")){u.color&&u.color.setHex(16777215),u.map?u.map.anisotropy=16:u.map=t,u.emissive?u.emissive.setHex(16770232):u.emissive=new ze(16770232),u.emissiveMap=u.map||t,u.emissiveIntensity=.16,u.roughness=.36,u.metalness=.04,u.needsUpdate=!0;continue}if(g==="Mat_EdisonFilament"||M.includes("edisonfilament")||f.includes("filament")){u.color&&u.color.setHex(16749604),u.emissive?u.emissive.setHex(16749604):u.emissive=new ze(16749604),u.emissiveIntensity=2.8,u.roughness=.18,u.metalness=.1,e&&!e.filamentMaterials.includes(u)&&e.filamentMaterials.push(u),u.needsUpdate=!0;continue}if(g==="Mat_SmokedBulbGlass"||M.includes("smokedbulbglass")||f.includes("bulb")&&f.includes("glass")){u.color&&u.color.setHex(16756306),u.emissive?u.emissive.setHex(16747556):u.emissive=new ze(16747556),u.emissiveIntensity=.22,u.transparent=!0,u.opacity=.42,u.roughness=.12,u.metalness=.08,u.depthWrite=!1,u.needsUpdate=!0;continue}if(g==="Mat_DarkWalnut"||M.includes("darkwalnut")||M.includes("walnut")){u.map||(u.map=s,u.color&&u.color.setHex(16777215)),u.roughness=.46,u.metalness=.04,u.needsUpdate=!0;continue}if(g==="Mat_CreamBoucle"||M.includes("creamboucle")||M.includes("boucle")){u.color&&u.color.setHex(16051937),u.normalMap||(u.normalMap=o),u.normalScale=new Ue(.28,.28),u.roughness=.88,u.metalness=0,u.needsUpdate=!0;continue}if(g==="Mat_ChampagneGold"||M.includes("champagnegold")||M.includes("brass")){u.color&&u.color.setHex(13938538),u.metalness=.88,u.roughness=.24,u.needsUpdate=!0;continue}if(g==="Mat_ChairLegOak"||M.includes("chairlegoak")||M.includes("chairnaturaloak")){u.color&&u.color.setHex(9335637),u.roughness=.5,u.metalness=.04,u.needsUpdate=!0;continue}if(g==="Mat_BedGreyFabric"||g==="Mat_BedOatmealFabric"||M.includes("bedgreyfabric")||M.includes("bedoatmealfabric")||M.includes("bedupholstery")){u.color&&u.color.setHex(16777215),u.map=r,u.normalMap=l,u.normalScale=new Ue(.12,.12),u.roughness=.93,u.metalness=0,u.envMapIntensity=.14,u.needsUpdate=!0;continue}if(g==="Mat_CrispWhiteDuvet"||g==="Mat_CrispWhiteLinen"||M.includes("crispwhiteduvet")||M.includes("crispwhitelinen")||M.includes("duvet")||M.includes("mattress")||M.includes("pillow")){u.color&&u.color.setHex(16054268),u.roughness=.82,u.metalness=0,u.envMapIntensity=.12,u.needsUpdate=!0;continue}if(g==="Mat_BedroomCarpet"||M.includes("bedroomcarpet")||M.includes("carpet")){u.map||(u.map=n,u.color&&u.color.setHex(16777215)),u.normalMap||(u.normalMap=o,u.normalScale=new Ue(.28,.28)),u.roughness=.94,u.metalness=0,u.envMapIntensity=.14,u.needsUpdate=!0;continue}if(g==="Mat_WindowCityFacade"||M.includes("windowcityfacade")||M.includes("facade")){const w=s0();u.map&&u.map!==w&&u.map.dispose(),u.emissiveMap&&u.emissiveMap!==w&&u.emissiveMap.dispose(),u.map=w,u.emissiveMap=w,u.fog=!1,u.color&&u.color.setHex(16777215),u.emissive?u.emissive.setHex(16777215):u.emissive=new ze(16777215),u.emissiveIntensity=.2,u.roughness=.28,u.metalness=.06,e&&!e.facadeMaterials.includes(u)&&e.facadeMaterials.push(u),u.needsUpdate=!0;continue}if(g==="Mat_BedroomPlasterWall"||g==="Mat_BedroomWall"||g==="Mat_BedroomCeiling"||M.includes("plasterwall")||M.includes("bedroomwall")||M.includes("bedroomceiling")){u.color&&u.color.setHex(14207672),u.emissive?u.emissive.setHex(0):u.emissive=new ze(0),u.emissiveIntensity=0,u.roughness=.88,u.metalness=0,u.envMapIntensity=.12,bo(u,Wi,1),u.needsUpdate=!0;continue}if(g==="Mat_DoorWhite"||g==="Mat_SkirtingWhite"||g==="Mat_WhiteSkirting"||M.includes("doorwhite")||M.includes("skirting")){bo(u,Wi,.52),u.needsUpdate=!0;continue}(g==="Mat_WardrobePaleOak"||g==="Mat_WardrobeTaupeOak"||M.includes("wardrobe"))&&(bo(u,Wi,.45),u.needsUpdate=!0)}})}const Wi={uEdisonGlowScale:{value:1.15}};function bo(i,e=Wi,t=1){var o;if(!i||(o=i.userData)!=null&&o.hasSouthWallOrangeGradient)return;i.userData=i.userData||{},i.userData.hasSouthWallOrangeGradient=!0;const n=Number(t).toFixed(3);i.customProgramCacheKey=()=>`south_wall_edison_3d_bounce_v3_${n}`,i.onBeforeCompile=s=>{s.uniforms.uEdisonGlowScale=e.uEdisonGlowScale,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRoomWallWorldPos;
varying vec3 vRoomWallWorldNormal;`),s.vertexShader=s.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vRoomWallWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vRoomWallWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uEdisonGlowScale;
varying vec3 vRoomWallWorldPos;
varying vec3 vRoomWallWorldNormal;`),s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`{
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
#include <dithering_fragment>`)},i.needsUpdate=!0}function _1(i=44,e=44){const a=new Re(1,1,1,i-1,1,e-1),r=a.attributes.position;for(let l=0;l<r.count;l++){const c=r.getX(l)*2,d=r.getY(l),h=-r.getZ(l)*2,f=c*c,p=h*h,v=1+.095*f*p-.045*(f*(1-p)+p*(1-f)),S=c*.305*v,m=-h*.215*v,u=Math.pow(Math.max(0,1-f),.55)*Math.pow(Math.max(0,1-p),.55),g=-.012*Math.exp(-(f*1.8+p*2.2)),M=.0038*Math.sin(c*5+h*2)*Math.cos(h*4-c*1.5)*u,w=d>=0?.0012+(.082+g)*u+M:-.0012-.052*u;r.setXYZ(l,S,w,m)}return a.computeVertexNormals(),a}function M1(i,e,t){const n=new et;n.name="NeatUpholsteredBed";const o=new I(new Re(1.4,.94,.11),i);o.position.set(-1.32,-.26,-.295),o.receiveShadow=!0,n.add(o);const s=new I(new st(.055,.055,1.4,20),i);s.rotation.z=Math.PI/2,s.position.set(-1.32,.21,-.295),s.receiveShadow=!0,n.add(s);const a=new I(new Re(1.35,.31,1.835),i);a.position.set(-1.32,-.575,.6775),a.receiveShadow=!0,n.add(a);for(const[A,y]of[[-1.94,-.18],[-.7,-.18],[-1.94,1.54],[-.7,1.54]]){const C=new I(new st(.026,.02,.065,12),t);C.position.set(A,-.697,y),n.add(C)}const r=new I(new Re(1.22,.155,1.72),e);r.position.set(-1.32,-.3425,.66),r.receiveShadow=!0,n.add(r);const l=56,c=56,d=-2.015,h=-.625,f=-1.32,p=(h-d)*.5,v=-1.61,S=.045,m=new Zt(h-d,S-v,l,c);m.rotateX(-Math.PI/2);const u=m.attributes.position;for(let A=0;A<u.count;A++){const y=u.getX(A),C=u.getZ(A),_=(y+p)/(h-d),b=1-(C+(S-v)*.5)/(S-v),x=d+_*(h-d),R=v+b*(S-v),U=Math.abs(x-f)/p,O=Math.max(0,(U-.78)/.22),N=Math.max(0,(.12-b)/.12),k=1-(1-Math.pow(O,1.75))*(1-Math.pow(N,1.75)),z=Math.cos(Math.min(1,U*.9)*(Math.PI*.5)),K=Math.pow(Math.sin($e.clamp((b-.04)/.92,0,1)*Math.PI),.52),he=.026*z*K,J=(.0055*Math.sin(_*3.2*Math.PI+.3)*Math.cos(b*3.8*Math.PI)+.0038*Math.cos(_*5.2*Math.PI+b*2.4*Math.PI)*Math.sin(b*4.8*Math.PI)+.0024*Math.sin((_*7-b*5)*Math.PI))*(1-.65*k),ie=.0075*Math.sin(b*6.5*Math.PI)*Math.pow(O,.8)+.0055*Math.sin(_*6*Math.PI)*Math.pow(N,.8),F=Math.exp(-Math.pow((x- -1.635)/.24,2))+Math.exp(-Math.pow((x- -1.005)/.24,2)),H=.024*Math.exp(-Math.pow((R- -.055)/.065,2))*(1-.35*O),Q=-.0095*Math.exp(-Math.pow((R- -.178)/.048,2))*(1-.45*O),Y=-.012*Math.exp(-Math.pow((R-.038)/.032,2))*(.55+.45*F),V=-.25+.045*(1-.38*Math.min(1,Math.max(O,N)))+he+J+H+Q+Y+.45*ie-.215*Math.pow(k,1.65),te=x>=f?1:-1,$=x+te*(.0075*Math.sin(b*6.5*Math.PI)*Math.pow(O,.8)+.016*Math.pow(O,1.1)),q=-R+.0055*Math.sin(_*6*Math.PI)*Math.pow(N,.8)+.016*Math.pow(N,1.1);u.setXYZ(A,$,V,q)}m.computeVertexNormals();const g=new I(m,e);g.name="OrganicDrapedWhiteDuvet",g.receiveShadow=!0,n.add(g);const M=_1(44,44),w=[{px:-1.635,yawDeg:4},{px:-1.005,yawDeg:-3.5}];for(const{px:A,yawDeg:y}of w){const C=new I(M,e);C.position.set(A,-.138,-.075),C.rotation.set($e.degToRad(28),$e.degToRad(y),0),C.receiveShadow=!0,n.add(C)}return n}function w1(i,e,t,n){const o=new et;o.name="BoucleDeskChair",o.position.set(.02,-.73,.46),o.rotation.y=$e.degToRad(-12);const s=new I(new st(.235,.225,.086,40),i);s.position.set(0,.45,0),s.receiveShadow=!1,o.add(s);const a=.218,r=.056,l=Math.PI*.92,c=Math.PI*.5-l*.5,d=new I(new Nn(a,r,28,64,l),i);d.rotation.x=Math.PI/2,d.rotation.z=c,d.scale.set(1,1,1.88),d.position.set(0,.705,0),d.receiveShadow=!1,o.add(d);for(const m of[c,c+l]){const u=new I(new Pt(r,24,20),i);u.scale.set(1,1.88,1),u.position.set(Math.cos(m)*a,.705,Math.sin(m)*a),u.receiveShadow=!1,o.add(u)}const h=a+.064,f=Math.PI*.82,p=Math.PI*.5-f*.5;for(const m of[.665,.745]){const u=new I(new Nn(h,.0085,16,48,f),e);u.rotation.x=Math.PI/2,u.rotation.z=p,u.position.set(0,m,0),o.add(u)}for(const m of[p+.05,p+f-.05]){const u=Math.cos(m)*(a+.045),g=Math.sin(m)*(a+.045),M=new I(new Re(.016,.096,.028),e);M.position.set(u,.705,g),M.rotation.y=-m+Math.PI/2,o.add(M);const w=new I(new st(.004,.004,.006,12),n);w.rotation.x=Math.PI/2,w.position.set(Math.cos(m)*(h+.006),.705,Math.sin(m)*(h+.006)),o.add(w)}for(const m of[-1,1]){const u=m*.238,g=.152,M=new I(new st(.011,.012,.365,16),e);M.position.set(u,.615,g),M.rotation.x=.06,M.rotation.z=-m*.06,o.add(M)}const v=[[-.175,-.145,.1,-.1],[.175,-.145,.1,.1],[-.238,.152,-.08,-.08],[.238,.152,-.08,.08]];for(const[m,u,g,M]of v){const w=new I(new st(.018,.012,.425,16),t);w.position.set(m,.2375,u),w.rotation.x=g,w.rotation.z=M,w.receiveShadow=!1,o.add(w);const A=m-M*.21,y=u+g*.21,C=new I(new st(.0125,.0105,.026,16),e);C.position.set(A,.013,y),C.rotation.x=g,C.rotation.z=M,o.add(C)}for(const m of[-.15,.15]){const u=new I(new st(.009,.009,.3,12),t);u.rotation.x=Math.PI/2,u.position.set(m,.22,.005),o.add(u)}const S=new I(new st(.009,.009,.3,12),t);return S.rotation.z=Math.PI/2,S.position.set(0,.22,.005),o.add(S),o}function S1(i,e={}){const t=new et;t.name="RoomEnvironmentGroup";const n=new et;n.name="ProceduralRoomFallbackGroup",t.add(n);const o=new et;o.name="RoomContactAoGroup",t.add(o);const{gemini4CandleLabelTex:s,carpetAlbedoTex:a,carpetNormalTex:r,darkWalnutTex:l,windowCityFacadeTex:c,thermostatTex:d,contactAoTex:h,bedFabricAlbedoTex:f,bedFabricNormalTex:p}=Td(),v=new we({name:"Mat_BedroomCarpet",color:16777215,map:a,normalMap:r,normalScale:new Ue(.28,.28),roughness:.94,metalness:0}),S=new we({name:"Mat_BedroomWall",color:14207672,roughness:.88,metalness:0,envMapIntensity:.12});bo(S,Wi,1);const m=new we({name:"Mat_BedroomCeiling",color:14207672,roughness:.92,metalness:0,envMapIntensity:.12});bo(m,Wi,1);const u=new we({name:"Mat_WhiteSkirting",color:16447733,roughness:.48,metalness:.03,envMapIntensity:.14});bo(u,Wi,.52);const g=new we({name:"Mat_BedGreyFabric",color:16777215,map:f,normalMap:p,normalScale:new Ue(.48,.48),roughness:.92,metalness:0,envMapIntensity:.16}),M=new we({name:"Mat_CrispWhiteDuvet",color:16054268,normalMap:r,normalScale:new Ue(.1,.1),roughness:.82,metalness:0,envMapIntensity:.12}),w=new we({name:"Mat_CreamBoucle",color:16051937,normalMap:r,normalScale:new Ue(.28,.28),roughness:.88,metalness:0}),A=new we({name:"Mat_ChairLegOak",color:9335637,roughness:.5,metalness:.04}),y=new we({name:"Mat_ChampagneGold",color:13938538,roughness:.24,metalness:.88}),C=new we({name:"Mat_WardrobeTaupeOak",color:11971740,roughness:.62,metalness:.04});bo(C,Wi,.45);const _=new we({name:"Mat_DarkWalnut",color:16777215,map:l,roughness:.46,metalness:.04}),b=new we({name:"Mat_CandleBlackGlass",color:855570,roughness:.12,metalness:.18}),x=new we({name:"Mat_Gemini4CandleLabel",color:16777215,map:s,emissive:new ze(16770232),emissiveMap:s,emissiveIntensity:.16,roughness:.36,metalness:.04}),R=new we({name:"Mat_SmokedBulbGlass",color:16756306,emissive:new ze(16747556),emissiveIntensity:.22,transparent:!0,opacity:.42,roughness:.12,metalness:.08,depthWrite:!1}),U=new we({name:"Mat_EdisonFilament",color:16749604,emissive:new ze(16749604),emissiveIntensity:2.8,roughness:.18,metalness:.1}),O=s0(),N=new we({name:"Mat_WindowCityFacade",color:16777215,map:O,emissive:new ze(16777215),emissiveMap:O,emissiveIntensity:.2,roughness:.28,metalness:.06,fog:!1}),k=new we({name:"Mat_BlackSteel",color:1579552,roughness:.36,metalness:.82}),z={filamentMaterials:[U],facadeMaterials:[N]},K=new I(new Re(3.54,.04,2.98),v);K.position.set(-.38,-.75,1.0925),K.receiveShadow=!0,n.add(K);const he=new I(new Re(3.54,.04,2.98),m);he.position.set(-.38,1.79,1.0925),n.add(he);const J=new I(new Re(.04,2.52,2.98),S);J.position.set(-2.14,.52,1.0925),J.receiveShadow=!0,n.add(J);const ie=new I(new Re(.04,2.52,2.98),S);ie.position.set(1.38,.52,1.0925),ie.receiveShadow=!0,n.add(ie);const F=new I(new Re(3.54,2.52,.04),S);F.position.set(-.38,.52,2.57),F.receiveShadow=!0,n.add(F);const H=new I(new Re(1.77,2.5,.22),S);H.position.set(-1.235,.52,-.475),H.receiveShadow=!0,n.add(H);const Q=new I(new Re(.91,.795,.22),S);Q.position.set(.105,-.3325,-.475),Q.receiveShadow=!0,n.add(Q);const Y=new I(new Re(.82,2.5,.22),S);Y.position.set(.97,.52,-.475),Y.receiveShadow=!0,n.add(Y);const ge=new I(new Re(.91,.015,.22),S);ge.position.set(.105,1.7625,-.475),ge.receiveShadow=!0,n.add(ge);const V=new I(new Re(.908,.016,.212),u);V.position.set(.105,.073,-.474),V.receiveShadow=!0,n.add(V);const te=new I(new Re(.036,1.672,.024),u);te.position.set(-.324,.91,-.562),n.add(te);const $=new I(new Re(.036,1.672,.024),u);$.position.set(.534,.91,-.562),n.add($);const q=new I(new Re(.894,.036,.024),u);q.position.set(.105,.092,-.562),n.add(q);const pe=new I(new Re(.894,.036,.024),u);pe.position.set(.105,1.728,-.562),n.add(pe);const se=new I(new Re(.01,1.608,.016),k);se.position.set(-.302,.91,-.568),n.add(se);const Pe=new I(new Re(.01,1.608,.016),k);Pe.position.set(.512,.91,-.568),n.add(Pe);const de=new I(new Re(.824,.01,.016),k);de.position.set(.105,.112,-.568),n.add(de);const X=new I(new Re(.824,.01,.016),k);X.position.set(.105,1.708,-.568),n.add(X);const j=new I(new Re(.042,.014,.016),u);j.position.set(.085,.092,-.546),n.add(j);const G=new I(new Re(.095,.012,.012),u);G.position.set(.118,.098,-.536),n.add(G);const B=new I(new Re(.018,.095,2.915),u);B.position.set(-2.111,-.6825,1.0925),n.add(B);const E=new I(new Re(.018,.095,1.135),u);E.position.set(1.351,-.6825,1.9825),n.add(E);const ae=new I(new Re(2.86,.095,.018),u);ae.position.set(-.69,-.6825,-.356),n.add(ae);const xe=new I(new Re(2.7,.095,.018),u);xe.position.set(-.77,-.6825,2.541),n.add(xe);const Me=new I(new Zt(.84,1.62),N);Me.position.set(.105,.91,-.58),n.add(Me);const oe=new et;oe.name="StandingDeskFloorLegsExtension";for(const le of[-.42,.42]){const ce=new I(new Re(.048,.5,.068),k);ce.position.set(le,-.46,-.02),ce.receiveShadow=!0,oe.add(ce);const qe=new I(new Re(.072,.022,.52),k);qe.position.set(le,-.719,-.01),qe.receiveShadow=!0,oe.add(qe)}t.add(oe);const P=M1(g,M,_);n.add(P);const T=w1(w,y,A,k);n.add(T);const W=new et;W.name="BuiltInOakWardrobe";const ne=new I(new Re(.62,2.45,1.78),C);ne.position.set(1.05,.495,.525),ne.receiveShadow=!0,W.add(ne);const be=new I(new Re(.635,.055,1.795),u);be.position.set(1.045,1.742,.525),W.add(be);const me=new I(new Re(.615,.08,1.775),C);me.position.set(1.05,-.69,.525),W.add(me);const ke=new I(new Re(.62,2.45,.024),C);ke.position.set(1.05,.495,1.415),ke.receiveShadow=!0,W.add(ke);const Le=new I(new Re(.62,.095,.016),u);Le.position.set(1.05,-.6825,1.425),W.add(Le);const He=[-.07,.525,1.12];for(let le=0;le<3;le++){const ce=He[le],qe=new I(new Re(.024,2.33,.582),C);qe.position.set(.735,.505,ce),qe.receiveShadow=!0,W.add(qe);const Qe=le===0?ce+.24:ce-.24,tt=new I(new Re(.016,.34,.016),k);tt.position.set(.721,.32,Qe),W.add(tt)}n.add(W);const Ze=new et;Ze.name="WalnutDresserAndGemini4Vignette";const Ne=new I(new Re(.84,.6,.44),_);Ne.position.set(0,-.26,2.33),Ne.receiveShadow=!0,Ze.add(Ne);const Fe=new I(new Re(.86,.022,.46),_);Fe.position.set(0,.039,2.33),Fe.receiveShadow=!0,Ze.add(Fe);const ve=[-.45,-.26,-.07];for(const le of ve){const ce=new I(new Re(.8,.178,.022),_);ce.position.set(0,le,2.1),ce.receiveShadow=!0,Ze.add(ce);const qe=new I(new e0(.042,.082,24,1,0,Math.PI),_);qe.rotation.y=Math.PI,qe.position.set(0,le-.018,2.087),Ze.add(qe);const Qe=new I(new st(.0085,.0085,.072,16),y);Qe.position.set(0,le+.008,2.081),Ze.add(Qe)}for(const[le,ce]of[[-.36,2.16],[.36,2.16],[-.36,2.49],[.36,2.49]]){const qe=new I(new st(.021,.013,.17,14),_);qe.position.set(le,-.645,ce),Ze.add(qe);const Qe=new I(new st(.0145,.013,.04,14),y);Qe.position.set(le,-.71,ce),Ze.add(Qe)}const Se=new et;Se.name="SpiralPotJadeSucculentGroup",Se.position.set(.24,.05,2.33);const Ee=new we({color:16052456,roughness:.32,metalness:.04}),We=new I(new st(.056,.044,.096,24),Ee);We.position.set(0,.048,0),Se.add(We);for(let le=0;le<5;le++){const ce=new I(new Nn(.051+le*.001,.0045,10,28),Ee);ce.rotation.x=Math.PI/2+.08,ce.position.set(0,.016+le*.018,0),Se.add(ce)}const Z=new we({color:3894844,roughness:.38,metalness:.04}),Be=22;for(let le=0;le<Be;le++){const ce=le*2.39996,qe=.012+Math.sqrt(le/Be)*.048,Qe=.105+(1-le/Be)*.065+le%3*.012,tt=new I(new Pt(.021,14,10),Z);tt.scale.set(1.35,.42,.82),tt.position.set(Math.cos(ce)*qe,Qe,Math.sin(ce)*qe),tt.rotation.y=-ce,tt.rotation.z=-.35-le/Be*.35,Se.add(tt)}Ze.add(Se);const Ve=new et;Ve.name="Gemini4ScentedCandleGroup",Ve.position.set(0,.05,2.33);const Ke=new I(new st(.046,.045,.106,32),b);Ke.position.set(0,.053,0),Ve.add(Ke);const re=new st(.0466,.0456,.082,36,1,!0,Math.PI*.62,Math.PI*.76),ee=new I(re,x);ee.name="Gemini4CandleLabelMesh",ee.position.set(0,.052,0),Ve.add(ee);const Te=new I(new st(.042,.042,.012,24),new we({color:16116694,emissive:new ze(16751931),emissiveIntensity:.25,roughness:.42}));Te.position.set(0,.096,0),Ve.add(Te);const Ye=new I(new Pt(.0055,12,12),U);Ye.scale.set(.7,1.8,.7),Ye.position.set(0,.108,0),Ve.add(Ye),Ze.add(Ve);const ut=new et;ut.name="SmokedGlassEdisonGlobeLampGroup",ut.position.set(-.24,.05,2.33);const gt=new we({color:1447448,roughness:.22,metalness:.15}),Ct=new I(new st(.054,.058,.058,28),gt);Ct.position.set(0,.029,0),ut.add(Ct);const Gt=new I(new st(.032,.038,.018,24),y);Gt.position.set(0,.064,0),ut.add(Gt);const un=[],gn=4.5,ln=72;for(let le=0;le<=ln;le++){const ce=le/ln,qe=ce*Math.PI*2*gn,Qe=.018*Math.sin(ce*Math.PI*.85+.15),tt=.082+ce*.095;un.push(new L(Math.cos(qe)*Qe,tt,Math.sin(qe)*Qe))}const Tn=new co(un),_e=new Io(Tn,72,.0024,8,!1),ye=new I(_e,U);ye.name="EdisonSpiralFilamentMesh",ut.add(ye);const De=new I(new Pt(.086,32,24),R);De.scale.set(1,1.08,1),De.position.set(0,.142,0),ut.add(De),Ze.add(ut),n.add(Ze);const it=new et;it.name="BedroomDoorAndThermostat";const dt=new I(new Re(.7,2.04,.028),u);dt.position.set(.93,.29,2.536),dt.receiveShadow=!0,it.add(dt);const yt=new I(new Re(.035,2.07,.036),u);yt.position.set(.568,.305,2.534),it.add(yt);const bt=new I(new Re(.035,2.07,.036),u);bt.position.set(1.292,.305,2.534),it.add(bt);const Ht=new I(new Re(.76,.035,.036),u);Ht.position.set(.93,1.325,2.534),it.add(Ht);const Wt=new we({color:14212322,roughness:.22,metalness:.88}),cn=new I(new st(.026,.026,.012,20),Wt);cn.rotation.x=Math.PI/2,cn.position.set(.66,.24,2.52),it.add(cn);const Pn=new I(new Re(.115,.014,.022),Wt);Pn.position.set(.7,.24,2.505),it.add(Pn);const In=new I(new Re(.086,.086,.016),u);In.position.set(.49,.36,2.535),it.add(In);const Fn=new I(new Re(.088,.088,.018),u);Fn.position.set(.2,.44,2.535),it.add(Fn);const oi=new I(new Zt(.072,.072),new kt({map:d}));oi.rotation.y=Math.PI,oi.position.set(.2,.44,2.525),it.add(oi),n.add(it),x1(o,h);const dn=new Vn(16738320,.85,2.85,1.65);dn.name="EdisonGlobeAmberPointLight",dn.position.set(-.24,.225,2.3),dn.castShadow=!1,t.add(dn);const Zn=new Vn(1210623,.85,1.32,1.75);Zn.name="DeskRgbBlueSpillPointLight",Zn.position.set(-.76,.13,.08),Zn.castShadow=!1,t.add(Zn);let D=-1,fe=-1;function Ce(le=0,ce=1.15){if(Math.abs(le-D)<1e-4&&Math.abs(ce-fe)<1e-4)return;D=le,fe=ce,dn.intensity=.82*ce,Wi.uEdisonGlowScale.value=ce,Zn.intensity=.85*ce;const qe=2.6+1.5*ce;for(const Qe of z.filamentMaterials)Qe&&(Qe.emissiveIntensity=qe);for(const Qe of z.facadeMaterials)Qe&&(Qe.fog=!1,Qe.emissiveIntensity=.2)}return Ce(e.sunIntensity??0,e.lampIntensity??1.15),i&&i.add(t),{roomRoot:t,proceduralRoomGroup:n,roomContactAoGroup:o,edisonPointLight:dn,roomBounceLight:Zn,calibrateRoomEnvironmentGlb:le=>{v1(le,z);const ce=D>=0?D:e.sunIntensity??.65,qe=fe>=0?fe:e.lampIntensity??.4;D=-1,fe=-1,Ce(ce,qe)},updateRoomLighting:Ce}}const xl=new L(0,1,0);function a0(i){const e=i.points.map(u=>new L(u[0],u[1],u[2])),t=i.points.map(u=>u[3]??1),n=new co(e,!0,"centripetal"),o=n.getLength(),s=Math.max(240,Math.round(o/(i.sampleSpacing??.005)));n.arcLengthDivisions=s*4,n.updateArcLengths();const a=[],r=[],l=[];for(let u=0;u<s;u++){const g=u/s;a.push(n.getPointAt(g)),r.push(n.getTangentAt(g).normalize());const M=n.getUtoTmapping(g),w=Math.min(e.length-1,Math.floor(M*e.length));l.push(t[w])}const c=new Float32Array(s),d=new L;for(let u=0;u<s;u++){const g=r[(u-3+s)%s],M=r[(u+3)%s],w=a[(u+3)%s].distanceTo(a[(u-3+s)%s])||1e-4,A=d.crossVectors(r[u],xl).normalize(),y=new L().subVectors(M,g);c[u]=y.dot(A)/w}const h=$e.degToRad(i.maxBankDeg??24),f=i.bankGain??.016;let p=Array.from(c,u=>$e.clamp(u*f*57.3,-1,1)*h);for(let u=0;u<6;u++){const g=p.slice();for(let M=0;M<s;M++){let w=0,A=0;for(let y=-6;y<=6;y++){const C=7-Math.abs(y);w+=p[(M+y+s)%s]*C,A+=C}g[M]=w/A}p=g}const v=[];let S=0;for(let u=0;u<s;u++){u>0&&(S+=a[u].distanceTo(a[u-1]));const g=r[u],M=xl.clone().addScaledVector(g,-xl.dot(g));M.lengthSq()<1e-6&&M.set(0,0,1),M.normalize();const w=new L().crossVectors(g,M).normalize(),A=p[u],y=M.clone().multiplyScalar(Math.cos(A)).addScaledVector(w,Math.sin(A)).normalize(),C=new L().crossVectors(g,y).normalize();v.push({index:u,t:u/s,sector:l[u],position:Ga(a[u]),tangent:Ga(g,5),right:Ga(C,5),normal:Ga(y,5),bank_deg:+$e.radToDeg(A).toFixed(2),arc_length_m:+S.toFixed(5)})}const m=S+a[s-1].distanceTo(a[0]);return{name:i.name,is_closed_periodic_loop:!0,track_width_m:.022,curb_width_m:.0025,rail_height_m:.0035,total_length_m:+m.toFixed(4),num_samples:s,sectors:i.sectors||[],start_finish_index:0,samples:v}}function Ar(i){const e=i.samples,t=e.length,n=[];let o=0;for(let c=0;c<t;c++){const d=e[(t-c)%t];if(c>0){const h=n[c-1].position;o+=Math.hypot(d.position[0]-h[0],d.position[1]-h[1],d.position[2]-h[2])}n.push({index:c,t:c/t,sector:d.sector,position:d.position.slice(),tangent:d.tangent.map(h=>-h),right:d.right.map(h=>-h),normal:d.normal.slice(),bank_deg:-(d.bank_deg||0),arc_length_m:+o.toFixed(5)})}const s=n[t-1].position,a=n[0].position,r=o+Math.hypot(a[0]-s[0],a[1]-s[1],a[2]-s[2]),l=i.start_finish_index??0;return{...i,name:`${i.name} (reverso)`,total_length_m:+r.toFixed(4),start_finish_index:(t-l)%t,samples:n}}function Ga(i,e=4){return[+i.x.toFixed(e),+i.y.toFixed(e),+i.z.toFixed(e)]}function fr(i,e,t,n,o,s,a,r,l=8,c=1){const d=[],h=Math.max(2,Math.round(s*l));for(let f=0;f<=h;f++){const p=f/h,v=a+c*p*s*Math.PI*2;d.push([i+Math.cos(v)*t,n+(o-n)*p,e+Math.sin(v)*t,r])}return d}async function y1(i,{reverso:e=!1}={}){const[t,n]=await Promise.all([fetch(new URL("data:application/json;base64,ewogICJzY2FsZV9zeXN0ZW0iOiB7CiAgICAidW5pdCI6ICJtZXRlcnMgKDEuMCB1bml0ID0gMTAwMCBtbSkiLAogICAgImRlc2tfdG9wX3kiOiAwLjAsCiAgICAia2FydF9zY2FsZV9yYXRpbyI6ICIxOjg3IEhPIE1pY3JvLUNvYXN0ZXIgU2NhbGUiLAogICAgInRyYWNrX3dpZHRoX20iOiAwLjAyMiwKICAgICJjdXJiX3dpZHRoX20iOiAwLjAwMjUsCiAgICAia2FydF9kaW1lbnNpb25zX20iOiB7CiAgICAgICJsZW5ndGgiOiAwLjAxOCwKICAgICAgIndpZHRoIjogMC4wMTIsCiAgICAgICJoZWlnaHQiOiAwLjAwOAogICAgfSwKICAgICJjYWxpYnJhdGlvbl9ydWxlciI6IHsKICAgICAgIm9iamVjdCI6ICJMb2dpdGVjaCBHOTE1IExpZ2h0c3BlZWQgRnVsbC1TaXplIE1lY2hhbmljYWwgS2V5Ym9hcmQiLAogICAgICAid2lkdGhfbSI6IDAuNDc1LAogICAgICAiZGVwdGhfbSI6IDAuMTUwLAogICAgICAiaGVpZ2h0X20iOiAwLjAyMgogICAgfQogIH0sCiAgImRlc2tfb2JqZWN0cyI6IFsKICAgIHsKICAgICAgImlkIjogIm9ha19kZXNrX3RhYmxldG9wIiwKICAgICAgIm5hbWUiOiAiTGlnaHQgV2VhdGhlcmVkIE9hayBTdGFuZGluZyBEZXNrIiwKICAgICAgImNlbnRlcl94eXoiOiBbMC4wLCAtMC4wMTI1LCAwLjBdLAogICAgICAiZGltZW5zaW9uc193ZGgiOiBbMS4xMDAsIDAuNjAwLCAwLjAyNV0sCiAgICAgICJ0b3Bfc3VyZmFjZV95IjogMC4wCiAgICB9LAogICAgewogICAgICAiaWQiOiAiYm95YXRhX2xhcHRvcF9zdGFuZCIsCiAgICAgICJuYW1lIjogIkJvWWF0YSBNYXR0ZS1CbGFjayBBbHVtaW51bSBaLVBpbGxhciBMYXB0b3AgU3RhbmQiLAogICAgICAiY2VudGVyX3h5eiI6IFstMC4zNjAsIDAuMCwgLTAuMDcwXSwKICAgICAgImRpbWVuc2lvbnNfd2RoIjogWzAuMjYwLCAwLjIyMCwgMC4xNjVdLAogICAgICAidG9wX2FybXNfeSI6IDAuMTY1LAogICAgICAicm90YXRpb25feV9kZWciOiAxMi4wCiAgICB9LAogICAgewogICAgICAiaWQiOiAiZ2luZ2VyX2NhdF9maWd1cmluZSIsCiAgICAgICJuYW1lIjogIkNodWJieSBHaW5nZXItYW5kLVdoaXRlIENhdCBGaWd1cmluZSIsCiAgICAgICJjZW50ZXJfeHl6IjogWy0wLjE1NSwgMC4wLCAtMC4xMTVdLAogICAgICAiZGltZW5zaW9uc193ZGgiOiBbMC4wNjAsIDAuMDU4LCAwLjA3NF0sCiAgICAgICJoZWxpeF9jZW50ZXJfeHoiOiBbLTAuMTU1LCAtMC4xMTVdLAogICAgICAiaGVsaXhfcmFkaXVzX20iOiAwLjA1MgogICAgfSwKICAgIHsKICAgICAgImlkIjogImxnX3VsdHJhZ2Vhcl9tb25pdG9yIiwKICAgICAgIm5hbWUiOiAiTEcgVWx0cmFHZWFyIDI3LWluY2ggTW9uaXRvciArIFRvcCBXZWJjYW0iLAogICAgICAiY2VudGVyX3h5eiI6IFswLjAxMCwgMC4wLCAtMC4yNDVdLAogICAgICAicGFuZWxfZGltZW5zaW9uc193ZGgiOiBbMC42MTQsIDAuMDQ1LCAwLjM2NV0sCiAgICAgICJiYXNlX2RpbWVuc2lvbnNfd2RoIjogWzAuMTIwLCAwLjExMCwgMC4wMTJdLAogICAgICAicGFuZWxfYm90dG9tX3kiOiAwLjA3NSwKICAgICAgIndlYmNhbV94eXoiOiBbLTAuMTMwLCAwLjQ1NSwgLTAuMjM1XQogICAgfSwKICAgIHsKICAgICAgImlkIjogImJvb21fYXJtX2JsdWVfbWljIiwKICAgICAgIm5hbWUiOiAiQXJ0aWN1bGF0ZWQgQmxhY2sgQm9vbSBBcm0gKyBEeW5hbWljIFBvZGNhc3RpbmcgTWljcm9waG9uZSAoQmx1ZSBMRUQgUmluZykiLAogICAgICAiY2xhbXBfeHl6IjogWzAuMjQ1LCAwLjAsIC0wLjI4NV0sCiAgICAgICJlbGJvd194eXoiOiBbMC4xMTAsIDAuMTA1LCAtMC4xNDBdLAogICAgICAibWljX3h5eiI6IFstMC4wMjUsIDAuMTA1LCAtMC4wNDVdLAogICAgICAibWljX2RpbWVuc2lvbnNfd2RoIjogWzAuMDU4LCAwLjEzNSwgMC4wNjVdLAogICAgICAiYmx1ZV9sZWRfY29sb3JfaGV4IjogIiMxZTZiZmYiCiAgICB9LAogICAgewogICAgICAiaWQiOiAid2hpdGVfa2V5X2xpZ2h0X2xhbXAiLAogICAgICAibmFtZSI6ICJXaGl0ZSBPdmFsIERpZmZ1c2VkIEtleS1MaWdodCBEZXNrIExhbXAiLAogICAgICAiYmFzZV94eXoiOiBbMC4zNTUsIDAuMCwgLTAuMDk1XSwKICAgICAgImJhc2VfcmFkaXVzX20iOiAwLjA5MjUsCiAgICAgICJiYXNlX2hlaWdodF9tIjogMC4wMTYsCiAgICAgICJwb2xlX3RvcF94eXoiOiBbMC4zNTUsIDAuMzYwLCAtMC4wOTVdLAogICAgICAiaGVhZF9kaW1lbnNpb25zX3dkaCI6IFswLjI4MCwgMC4wMzUsIDAuMTgwXSwKICAgICAgImNvcmtzY3Jld19jZW50ZXJfeHoiOiBbMC4zNTUsIC0wLjA5NV0sCiAgICAgICJjb3Jrc2NyZXdfcmFkaXVzX20iOiAwLjA1NgogICAgfSwKICAgIHsKICAgICAgImlkIjogImxvZ2l0ZWNoX2c5MTVfa2V5Ym9hcmQiLAogICAgICAibmFtZSI6ICJMb2dpdGVjaCBHOTE1IExpZ2h0c3BlZWQgV2lyZWxlc3MgTWVjaGFuaWNhbCBLZXlib2FyZCIsCiAgICAgICJjZW50ZXJfeHl6IjogWy0wLjA4NSwgMC4wLCAwLjEzNV0sCiAgICAgICJkaW1lbnNpb25zX3dkaCI6IFswLjQ3NSwgMC4xNTAsIDAuMDIyXQogICAgfSwKICAgIHsKICAgICAgImlkIjogInJhemVyX21hdF9hbmRfbW91c2UiLAogICAgICAibmFtZSI6ICJSYXplciBIYXJkIE1vdXNlIE1hdCArIEJsYWNrIFdpcmVsZXNzIEVyZ29ub21pYyBHYW1pbmcgTW91c2UiLAogICAgICAibWF0X2NlbnRlcl94eXoiOiBbMC4zMjUsIDAuMCwgMC4xMzVdLAogICAgICAibWF0X2RpbWVuc2lvbnNfd2RoIjogWzAuMzQwLCAwLjI2NSwgMC4wMDNdLAogICAgICAibW91c2VfY2VudGVyX3h5eiI6IFswLjI4NSwgMC4wMDMsIDAuMTE1XSwKICAgICAgIm1vdXNlX2RpbWVuc2lvbnNfd2RoIjogWzAuMDc1LCAwLjEzMCwgMC4wNDJdLAogICAgICAibW91c2Vfcm90YXRpb25feV9kZWciOiAtMTAuMAogICAgfQogIF0KfQo=",import.meta.url)).then(U=>U.json()),fetch(new URL(""+new URL("track_spline-CaHHjEgR.json",import.meta.url).href,import.meta.url)).then(U=>U.json())]);n.start_finish_index=646,n.sectors=[{id:1,name:"Subida de los Libros Santos"},{id:2,name:"Hélice de la Virgen"},{id:3,name:"Paso del Cirio Pascual"},{id:4,name:"Sacacorchos de la Lámpara"},{id:5,name:"Curva del Rosario"},{id:6,name:"Viaducto del Teclado"}];const o=e?Ar(n):n;i.background=new ze(1577746),i.fog=new ta(1577746,.018);const s={sunIntensity:0,sunbeamIntensity:0,lampIntensity:1.15,micGlowIntensity:.85,bloomStrength:.07,showDustMotes:!1},a=u1(i),r=m1();i.add(r.root),r.nightGlowGroup&&i.add(r.nightGlowGroup);const l=S1(i,s);i.add(l.roomRoot);const c=new et;c.name="ObjetosDeFe",i.add(c);const d=U=>{const O=r.root.getObjectByName(U)||i.getObjectByName(U);O&&O.parent&&O.parent.remove(O)};d("ginger_cat_figurine");const h=yd({alto:.1,pedestal:.014});h.position.set(-.155,0,-.115),h.rotation.y=.5,c.add(h),d("boom_arm_blue_mic");const f=i1({alto:.24,radio:.02});f.position.set(.245,0,-.27),c.add(f);const p=f.userData.alturaLlama;a.micSpotLight.color.setHex(16752714),a.micSpotLight.position.set(.245,p+.01,-.27),a.micSpotLight.target.position.set(.18,0,-.15),a.micSpotLight.distance=.55,a.micSpotLight.angle=Math.PI*.42;const v=new Vn(16751168,.35,.35,1.6);v.position.set(.245,p+.012,-.27),c.add(v),d("boyata_laptop_stand");const S=new et,m=ks({ancho:.25,largo:.19,grueso:.042,color:"#6b1420",titulo:"BIBLIA"}),u=ks({ancho:.22,largo:.17,grueso:.034,color:"#1f3a6b",titulo:"CATECISMO"});u.position.y=.042,u.rotation.y=.08;const g=ks({ancho:.19,largo:.15,grueso:.024,color:"#21543a",titulo:"MISAL"});g.position.y=.076,g.rotation.y=-.1,S.add(m,u,g),S.position.set(-.36,0,-.07),S.rotation.y=$e.degToRad(12),c.add(S),d("RazerMatAndGamingMouse");const M=o1({radio:.045});M.position.set(.3,.003,.1),M.rotation.y=-.4,c.add(M);const w=ks({ancho:.06,largo:.085,grueso:.014,color:"#3b2a1a",titulo:"N.T."});w.position.set(.255,.003,.17),w.rotation.y=.35,c.add(w);const A=i.getObjectByName("MousepadCyanRgbBorderTube");A&&(A.material=new kt({color:new ze(1.6,1.15,.35),toneMapped:!1}));const y=i.getObjectByName("MousepadCyanDeskGlowPlane");y&&(y.visible=!1);const C=gs({alto:.2});C.position.set(-.45,0,-.235),C.rotation.y=.35,c.add(C);const _=new we({color:11737130,roughness:.15,transparent:!0,opacity:.75,emissive:5900816,emissiveIntensity:.6});[[.47,.24],[.505,.215],[.495,.265]].forEach(([U,O],N)=>{const k=ia({alto:.026+N*.006,radio:.009,color:_,platillo:!1});k.position.set(U,0,O),c.add(k)});const b=new ze(16758087),x=r.root.getObjectByName("logitech_g915_keyboard");x&&x.traverse(U=>{const O=U.material?Array.isArray(U.material)?U.material:[U.material]:[];for(const N of O)N.emissive&&N.emissive.b>N.emissive.r&&N.emissive.copy(b),N.color&&N.color.b>.6&&N.color.r<.3&&N.color.copy(b)}),a.kbBacklight&&a.kbBacklight.color.copy(b),i.traverse(U=>{if(U.isMesh&&U.material&&U.material.name==="Mat_MonitorScreen"){const O=b1();U.material=new we({map:O,emissiveMap:O,emissive:new ze(1,1,1),emissiveIntensity:.55,roughness:.3})}});const R=oa(c);return{id:"escritorio",splineData:o,trackOpts:{glowBounds:"desk",customStart:!0,ledColors:[16760906,16773832,4892927,16742970]},suelos:[r.root,c],exposicion:null,luzLlave:a.lampKeyLight,tomas:[{p:[0,.43,.55],m:[0,.07,-.05]},{p:[-.32,.2,.2],m:[-.155,.06,-.115]},{p:[.42,.18,.05],m:[.245,.2,-.27]},{p:[-.6,.3,.3],m:[-.36,.1,-.07]}],vistaPodio:{centro:new L(.05,0,.2)},actualizar(U,O,N){a.updateAtmosphere(U,s,N.renderer,N.bloomPass,i,r);for(const k of R)k(U);v.intensity=.32+Math.sin(U*13)*.03+Math.sin(U*29)*.02},pedirSombras(){a.requestShadowMapUpdate&&a.requestShadowMapUpdate()}}}function b1(){const i=ur("roseton",512,512).image,e=document.createElement("canvas");e.width=1024,e.height=596;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#1b1030"),n.addColorStop(1,"#3a1d18"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.drawImage(i,40,60,470,470),t.fillStyle="#ffd86a",t.textAlign="center",t.font="bold 74px Georgia, serif",t.fillText("GRAN PREMIO",770,230),t.fillText("DE LA FE",770,320),t.font="italic 38px Georgia, serif",t.fillStyle="#f4e9cf",t.fillText("«Corramos con constancia",770,420),t.fillText("la carrera» · Hb 12,1",770,470);const o=new zt(e);return o.colorSpace=jt,o}const T1={name:"El Pesebre de Belén",sectors:[{id:1,name:"Recta de los Pastores"},{id:2,name:"Subida a Belén"},{id:3,name:"Tejados de Belén"},{id:4,name:"Puente del Río"},{id:5,name:"Monte de la Estrella"},{id:6,name:"Bajada de los Ángeles"}],points:[[.1,.026,.31,1],[-.08,.026,.315,1],[-.26,.03,.305,1],[-.43,.04,.27,2],[-.55,.055,.18,2],[-.6,.075,.04,2],[-.59,.1,-.1,2],[-.54,.12,-.23,3],[-.44,.13,-.32,3],[-.29,.13,-.37,3],[-.11,.12,-.39,4],[.07,.105,-.385,4],[.21,.09,-.34,4],[.29,.085,-.22,4],...fr(.48,-.08,.155,.085,.215,1.25,Math.PI,5,9,-1).slice(1),[.59,.2,.13,6],[.63,.17,.23,6],[.56,.13,.32,6],[.45,.09,.35,6],[.33,.055,.335,6],[.22,.034,.315,6]]},A1={name:"El altar de la capilla",sectors:[{id:1,name:"Recta del Altar"},{id:2,name:"Curva del Misal"},{id:3,name:"Hélice del Candelero"},{id:4,name:"Paso del Sagrario"},{id:5,name:"Espiral de la Luz"},{id:6,name:"Llegada del Cáliz"}],points:[[.1,.022,.31,1],[-.1,.022,.315,1],[-.28,.024,.305,1],[-.45,.03,.265,2],[-.58,.04,.16,2],[-.62,.05,.02,2],...fr(-.42,-.2,.125,.06,.2,1.25,Math.PI,3,9,1).slice(1),[-.29,.195,-.31,4],[-.19,.18,-.2,4],[-.11,.155,-.07,4],[.02,.135,-.03,4],[.15,.12,-.04,4],[.25,.11,-.1,4],...fr(.42,-.2,.125,.105,.03,1.5,Math.PI,5,9,1).slice(1),[.585,.026,0,6],[.55,.022,.18,6],[.44,.022,.285,6],[.28,.022,.31,6]]},C1={name:"La gruta de Lourdes",sectors:[{id:1,name:"Explanada de los Peregrinos"},{id:2,name:"Curva de la Fuente"},{id:3,name:"Subida a la Gruta"},{id:4,name:"Balcón de la Virgen"},{id:5,name:"Espiral del Calvario"},{id:6,name:"Bajada de las Velas"}],points:[[.1,.022,.32,1],[-.1,.022,.33,1],[-.28,.025,.315,1],[-.47,.032,.27,2],[-.6,.042,.13,2],[-.63,.06,-.02,2],[-.58,.095,-.16,3],[-.49,.135,-.255,3],[-.36,.165,-.3,3],[-.2,.18,-.31,4],[-.04,.18,-.31,4],[.1,.172,-.3,4],[.24,.158,-.26,5],...fr(.45,-.1,.135,.15,.05,1.25,-Math.PI/2-.25,5,9,1).slice(1),[.61,.038,.08,6],[.54,.028,.24,6],[.4,.022,.315,6],[.25,.022,.325,6]]};function Ha(i,e,t,n=null){const o=document.createElement("canvas");o.width=i,o.height=e,t(o.getContext("2d"),i,e);const s=new zt(o);return s.colorSpace=jt,n&&(s.wrapS=s.wrapT=Ut,s.repeat.set(...n)),s.anisotropy=4,s}function E1(i){let e=i;return()=>(e=e*16807%2147483647,e/2147483647)}async function R1(i,{reverso:e=!1}={}){const t=a0(T1),n=e?Ar(t):t;i.background=new ze(658456),i.fog=new ta(658456,.09);const o=new et;o.name="Belen",i.add(o);const s=E1(7),a=Ha(512,512,(ve,Se,Ee)=>{ve.fillStyle="#2f4f22",ve.fillRect(0,0,Se,Ee);for(let We=0;We<26e3;We++){const Z=s();ve.fillStyle=Z<.3?"#3d6a2a":Z<.6?"#264018":Z<.9?"#4f7c32":"#6b8f3e",ve.fillRect(s()*Se,s()*Ee,1+s()*2.2,1+s()*2.2)}},[16,11]),r=new I(new Re(1.56,.03,1.06),new we({map:a,roughness:1,color:13623488}));r.position.y=-.015,r.receiveShadow=!0,o.add(r);const l=new I(new Re(1.62,.3,1.12),new we({color:8000024,roughness:.85}));l.position.y=-.17,o.add(l);for(const[ve,Se]of[[-.7,-.45],[.7,-.45],[-.7,.45],[.7,.45]]){const Ee=new I(new Re(.06,.45,.06),at.maderaOscura);Ee.position.set(ve,-.545,Se),o.add(Ee)}const c=new we({color:13215339,roughness:1}),d=new I(new Zt(.16,.7),c);d.rotation.set(-Math.PI/2,0,.5),d.position.set(-.08,.001,.08),d.receiveShadow=!0,o.add(d);const h=new co([new L(-.72,.002,-.46),new L(-.32,.002,-.3),new L(-.18,.002,-.05),new L(-.02,.002,.2),new L(0,.002,.48)]),f=h.getSpacedPoints(80),p=[],v=[];f.forEach((ve,Se)=>{const Ee=h.getTangentAt(Se/80),We=new L(-Ee.z,0,Ee.x).multiplyScalar(.035+Math.sin(Se*.4)*.008);p.push(ve.x+We.x,ve.y,ve.z+We.z,ve.x-We.x,ve.y,ve.z-We.z),Se<f.length-1&&v.push(Se*2,Se*2+1,Se*2+2,Se*2+1,Se*2+3,Se*2+2)});const S=new Bt;S.setAttribute("position",new vt(p,3)),S.setIndex(v),S.computeVertexNormals();const m=new we({color:12375274,roughness:.18,metalness:1,side:on}),u=new I(S,m);u.receiveShadow=!0,o.add(u);const g=new et;for(let ve=0;ve<7;ve++){const Se=new I(new Re(.012,.004,.09),at.madera);Se.position.set(-.04+ve*.013,.006,0),Se.castShadow=!0,g.add(Se)}g.position.set(-.01,0,.36),g.rotation.y=.15,o.add(g);const M=new et;M.position.set(.02,0,-.12);const w=at.madera;for(const[ve,Se]of[[-.16,.09],[.16,.09],[-.16,-.09],[.16,-.09]]){const Ee=new I(new Re(.014,.19,.014),w);Ee.position.set(ve,.095,Se),Ee.castShadow=!0,M.add(Ee)}for(let ve=0;ve<12;ve++){const Se=new I(new Re(.026,.17+ve%3*.01,.006),ve%2?at.madera:at.maderaClara);Se.position.set(-.143+ve*.026,.085,-.095),Se.castShadow=!0,Se.receiveShadow=!0,M.add(Se)}for(const ve of[-1,1]){const Se=new I(new Re(.2,.012,.24),at.paja);Se.position.set(ve*.085,.225,0),Se.rotation.z=-ve*.5,Se.castShadow=!0,Se.receiveShadow=!0,M.add(Se)}const A=new I(new st(.15,.16,.006,24),at.paja);A.scale.z=.6,A.position.y=.003,A.receiveShadow=!0,M.add(A);const y=new I(new Re(.06,.02,.03),at.madera);y.position.set(0,.022,.01),M.add(y);const C=new I(new Re(.055,.006,.026),at.paja);C.position.set(0,.034,.01),M.add(C);const _=new et,b=new I(new Ro(.007,.022,6,10),at.marfil);b.rotation.z=Math.PI/2,_.add(b);const x=new I(new Pt(.0065,14,10),at.piel);x.position.set(-.018,.002,0),_.add(x);const R=new I(new Nn(.009,.0012,8,24),new kt({color:new ze(2.2,1.7,.6),toneMapped:!1}));R.position.set(-.022,.004,0),R.rotation.y=Math.PI/2,_.add(R),_.position.set(0,.042,.01),M.add(_);const U=di(.12,"255,220,150",.55);U.position.set(0,.05,.01),M.add(U);const O=ns({alto:.085,tunica:at.marfil,manto:at.azulManto,tocado:at.celeste,pose:"rodillas",aureola:!0});O.position.set(-.06,0,.02),O.rotation.y=.9,M.add(O);const N=new we({color:8018490,roughness:.8}),k=new we({color:12088364,roughness:.8}),z=ns({alto:.1,tunica:N,manto:k,tocado:N,aureola:!0});z.position.set(.065,0,0),z.rotation.y=-.8,M.add(z);const K=new I(new st(.0015,.0015,.12,6),at.maderaOscura);K.position.set(.085,.06,.012),K.rotation.z=-.1,M.add(K);const he=hl({escala:.075,color:9071178,cuernos:!0});he.position.set(-.11,0,-.05),he.rotation.y=.5,M.add(he);const J=hl({escala:.07,color:7236198});J.position.set(.11,0,-.05),J.rotation.y=-.5,M.add(J);const ie=ia({alto:.012,radio:.004,platillo:!1});ie.position.set(.12,.17,.085),M.add(ie);const F=Pu({alto:.075});F.position.set(0,.255,.05),M.add(F);const H=new I(new Zt(.12,.022),new kt({map:Ha(512,96,(ve,Se,Ee)=>{ve.fillStyle="#f3e7c9",ve.fillRect(0,0,Se,Ee),ve.strokeStyle="#b8892a",ve.lineWidth=6,ve.strokeRect(3,3,Se-6,Ee-6),ve.fillStyle="#7a1218",ve.font="bold 54px Georgia, serif",ve.textAlign="center",ve.textBaseline="middle",ve.fillText("GLORIA IN EXCELSIS DEO",Se/2,Ee/2+2)}),side:on}));H.position.set(0,.33,.06),M.add(H),o.add(M);const Q=js({radio:.105,alto:.3,color:9141611,semilla:3});Q.position.set(.48,0,-.08),o.add(Q);const Y=js({radio:.06,alto:.12,color:8220511,semilla:9});Y.position.set(.66,0,-.3),o.add(Y);const ge=Ru(.03);ge.position.set(.48,.42,-.08),o.add(ge);const V=new I(new st(8e-4,8e-4,.12,6),at.plata);V.position.set(.48,.34,-.08),o.add(V);const te=Pu({alto:.06});te.position.set(.48,.28,-.08),te.rotation.y=.6,o.add(te);const $=[[-.5,-.26,.08,.072,.07,14205850,.3],[-.4,-.34,.07,.078,.06,13480842,-.2],[-.36,-.12,.09,.088,.08,14733224,.1],[-.28,0,.08,.075,.07,13810578,-.3],[-.44,.06,.06,.06,.06,13217412,.6]];for(const[ve,Se,Ee,We,Z,Be,Ve]of $){const Ke=l1({ancho:Ee,alto:We,fondo:Z,color:Be});Ke.position.set(ve,0,Se),Ke.rotation.y=Ve,o.add(Ke)}const q=new et,pe=at.piedra.clone();pe.side=on;const se=new I(new st(.022,.024,.022,20,1,!0),pe);se.position.y=.011,q.add(se);const Pe=new I(new Zi(.02,20),m);Pe.rotation.x=-Math.PI/2,Pe.position.y=.012,q.add(Pe),q.position.set(-.2,0,-.2),o.add(q);for(const[ve,Se,Ee]of[[-.15,.12,.28],[.27,.13,.25],[-.62,-.38,.3],[.68,.2,.26]]){const We=r1(Ee);We.position.set(ve,0,Se),We.rotation.y=s()*6,o.add(We)}const de=(ve,Se,Ee,We)=>{const Z=ns({alto:.08,tunica:new we({color:We,roughness:.85}),tocado:new we({color:15260864,roughness:.9})});Z.position.set(ve,0,Se),Z.rotation.y=Ee,o.add(Z)};de(-.32,.17,2.6,7035450),de(-.12,.22,3.4,4876858);for(let ve=0;ve<9;ve++){const Se=a1(.024+s()*.008);Se.position.set(-.36+s()*.28,0,.08+s()*.14),Se.rotation.y=s()*6,o.add(Se)}const X=[[.16,.12,8002154,at.piel],[.21,.18,1727114,at.pielMorena],[.12,.2,2779706,at.piel]];for(const[ve,Se,Ee,We]of X){const Z=ns({alto:.095,tunica:at.oroViejo,manto:new we({color:Ee,roughness:.5}),piel:We,corona:!0});Z.position.set(ve,0,Se),Z.rotation.y=-2.4,o.add(Z);const Be=new I(new Re(.012,.009,.009),at.oro);Be.position.set(ve-.012,.05,Se-.01),o.add(Be)}const j=hl({escala:.1,color:12753502}),G=new I(new Pt(.018,12,10),new we({color:12753502,roughness:.9}));G.position.set(0,.085,0),G.scale.set(.8,.9,1.2),j.add(G),j.position.set(.3,0,.2),j.rotation.y=-2.2,o.add(j);const B=Ha(2048,512,(ve,Se,Ee)=>{const We=ve.createLinearGradient(0,0,0,Ee);We.addColorStop(0,"#060a24"),We.addColorStop(.7,"#1c2a5a"),We.addColorStop(1,"#3a3a5e"),ve.fillStyle=We,ve.fillRect(0,0,Se,Ee);for(let Z=0;Z<900;Z++){const Be=150+s()*105;ve.fillStyle=`rgba(${Be},${Be},255,${.4+s()*.6})`,ve.beginPath(),ve.arc(s()*Se,s()*Ee*.75,s()*1.8+.3,0,Math.PI*2),ve.fill()}ve.fillStyle="#141a33",ve.beginPath(),ve.moveTo(0,Ee);for(let Z=0;Z<=Se;Z+=32)ve.lineTo(Z,Ee*.78-Math.sin(Z*.004)*50-Math.sin(Z*.013)*18);ve.lineTo(Se,Ee),ve.fill()}),E=new I(new st(.95,.95,.75,48,1,!0,Math.PI*.62,Math.PI*.76),new kt({map:B,side:Rn,color:10134728}));E.position.set(0,.36,.42),o.add(E);const ae=new et,xe=[new ze(2.4,1.8,.6),new ze(2.2,.5,.4),new ze(.5,1.4,2.4),new ze(.6,2.2,.8)],Me=new Pt(.004,8,6);for(let ve=0;ve<48;ve++){const Se=Math.PI*.62+ve/47*Math.PI*.76,Ee=new I(Me,new kt({color:xe[ve%4],toneMapped:!1}));Ee.position.set(Math.sin(Se)*.93,.7+Math.sin(ve*.9)*.012,.42+Math.cos(Se)*.93),ae.add(Ee)}o.add(ae);const oe=new et,P=new I(new Zt(8,8),new we({color:3810840,roughness:.8}));P.rotation.x=-Math.PI/2,P.position.y=-.77,P.receiveShadow=!0,oe.add(P);const T=new we({color:5914164,roughness:.95});for(const[ve,Se,Ee]of[[0,-2.2,0],[-2.4,0,Math.PI/2],[2.4,0,-Math.PI/2],[0,2.6,Math.PI]]){const We=new I(new Zt(6,3.5),T);We.position.set(ve,.9,Se),We.rotation.y=Ee,oe.add(We)}const W=new I(new Zt(.9,1.1),new kt({map:Ha(256,320,(ve,Se,Ee)=>{ve.fillStyle="#0b1638",ve.fillRect(0,0,Se,Ee),ve.fillStyle="#f2eed8",ve.beginPath(),ve.arc(Se*.68,Ee*.28,22,0,Math.PI*2),ve.fill(),ve.fillStyle="#2a1a12",ve.fillRect(Se/2-4,0,8,Ee),ve.fillRect(0,Ee/2-4,Se,8)})}));W.position.set(-1.1,.9,-2.19),oe.add(W);const ne=new et,be=new we({color:2050602,roughness:.9});for(let ve=0;ve<5;ve++){const Se=new I(new jn(.55-ve*.09,.55,24),be);Se.position.y=.35+ve*.3,ne.add(Se)}const me=new et;for(let ve=0;ve<70;ve++){const Se=s(),Ee=.2+Se*1.45,We=(.5-Se*.38)*.95,Z=s()*Math.PI*2,Be=new I(new Pt(.018,8,6),new kt({color:xe[ve%4],toneMapped:!1}));Be.position.set(Math.cos(Z)*We,Ee,Math.sin(Z)*We),me.add(Be)}ne.add(me);const ke=Ru(.07);ke.position.y=1.85,ne.add(ke),ne.position.set(1.4,-.77,-1.2),oe.add(ne),i.add(oe),i.add(new na(6978232,1708556,.35));const Le=new ms(16769200,3.2,3,Math.PI*.2,.6,1.2);Le.position.set(.3,1.3,.9),Le.target.position.set(0,0,-.05),Le.castShadow=!0,Le.shadow.mapSize.set(2048,2048),Le.shadow.camera.near=.5,Le.shadow.camera.far=2.4,Le.shadow.bias=-3e-4,Le.shadow.normalBias=.001,i.add(Le,Le.target);const He=new Vn(16769696,.6,.9,1.5);He.position.set(.48,.42,-.08),i.add(He);const Ze=new Vn(16760944,.35,.35,1.6);Ze.position.set(.02,.12,-.08),i.add(Ze);const Ne=new Vn(16756848,1.2,3,1.5);Ne.position.set(1.3,.3,-1),i.add(Ne);const Fe=oa(o);return{id:"pesebre",splineData:n,trackOpts:{ledColors:[16765802,16774880,8374527,16752832],curbColors:[13185068,16118506],steelColor:10259060,glowGroundY:.002},suelos:[o],tomas:[{p:[.05,.5,.75],m:[0,.08,-.08]},{p:[.03,.09,.14],m:[.02,.05,-.1]},{p:[.22,.32,.25],m:[.48,.2,-.08]},{p:[-.25,.2,0],m:[-.45,.1,-.25]}],actualizar(ve,Se,Ee){Ee.renderer.toneMappingExposure=.92,Ee.bloomPass.strength=.32,Ee.bloomPass.radius=.35,Ee.bloomPass.threshold=1.1;for(const We of Fe)We(ve);He.intensity=.55+Math.sin(ve*2.2)*.08,me.children.forEach((We,Z)=>{We.visible=Math.sin(ve*1.5+Z*1.7)>-.6}),ae.children.forEach((We,Z)=>{We.visible=Math.sin(ve*2+Z*.8)>-.5})}}}function vl(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const o=new zt(n);return o.colorSpace=jt,o.anisotropy=4,o}async function P1(i,{reverso:e=!1}={}){const t=a0(A1),n=e?Ar(t):t;i.background=new ze(789010),i.fog=new ta(789010,.11);const o=new et;o.name="Altar",i.add(o);const s=new we({color:14209216,roughness:.6}),a=new I(new Re(1.7,.95,.86),s);a.position.y=-.48,a.receiveShadow=!0,o.add(a);const r=new we({color:16184298,roughness:.85}),l=new I(new Re(1.74,.006,.9),r);l.position.y=-.003,l.receiveShadow=!0,o.add(l);const c=vl(512,128,(Y,ge,V)=>{Y.fillStyle="#f6f3ea",Y.fillRect(0,0,ge,V),Y.strokeStyle="#c8b98f",Y.lineWidth=3;for(let te=0;te<ge;te+=32)Y.beginPath(),Y.arc(te+16,V-10,14,Math.PI,0),Y.stroke(),Y.beginPath(),Y.moveTo(te+16,8),Y.lineTo(te+16,V-26),Y.stroke();Y.fillStyle="#b8892a",Y.fillRect(0,0,ge,6)});c.wrapS=Ut,c.repeat.set(8,1);const d=new I(new Re(1.745,.12,.905),[new we({map:c,roughness:.85}),new we({map:c,roughness:.85}),r,r,new we({map:c,roughness:.85}),new we({map:c,roughness:.85})]);d.position.y=-.065,o.add(d);const h=new I(new Zt(.8,.6),new we({map:vl(512,384,(Y,ge,V)=>{Y.fillStyle="#7a1218",Y.fillRect(0,0,ge,V),Y.strokeStyle="#d9a93a",Y.lineWidth=10,Y.strokeRect(14,14,ge-28,V-28),Y.fillStyle="#e2b84a",Y.fillRect(ge/2-14,60,28,260),Y.fillRect(ge/2-90,130,180,28)}),roughness:.6}));h.position.set(0,-.45,.432),o.add(h);const f=s1({ancho:.16,alto:.18});f.position.set(0,0,-.2),o.add(f);const p=new I(new Re(.5,.03,.12),at.marfil);p.position.set(0,.015,-.34),p.receiveShadow=!0,p.castShadow=!0,o.add(p);const v=gs({alto:.42,mat:at.maderaOscura,cristo:at.marfil});v.position.set(0,.03,-.34),o.add(v);const S=Mc({alto:.3});S.position.set(-.42,0,-.2),o.add(S);const m=Mc({alto:.3});m.position.set(.42,0,-.2),o.add(m);const u=bd({alto:.085});u.position.set(.12,0,.13),o.add(u);const g=new I(new Zt(.12,.12),new we({color:16777215,roughness:.9}));g.rotation.x=-Math.PI/2,g.position.set(.12,.0012,.13),o.add(g);const M=new et,w=new I(new Re(.16,.012,.11),at.oroViejo);w.position.y=.035,w.rotation.x=-.35,M.add(w);const A=new I(new Re(.12,.035,.02),at.oroViejo);A.position.set(0,.017,-.03),M.add(A);const y=ks({ancho:.15,largo:.1,grueso:.018,color:"#5a1018",titulo:"MISAL"});y.position.set(0,.043,.004),y.rotation.x=-.35,M.add(y),M.position.set(-.18,0,.14),M.rotation.y=.25,o.add(M);const C=dr({alto:.22,colores:[16777215,15913547,16777215]});C.position.set(-.7,0,-.3),o.add(C);const _=dr({alto:.22,colores:[16777215,14828922,16777215]});_.position.set(.7,0,-.3),o.add(_);for(const[Y,ge]of[[.62,.22],[.66,.24]]){const V=new I(new st(.008,.012,.04,16),new we({color:14675967,roughness:.05,transparent:!0,opacity:.6}));V.position.set(Y,.02,ge),o.add(V)}const b=new I(new jn(.014,.022,20,1,!0),at.oro);b.position.set(-.66,.011,.22),o.add(b);for(const Y of[-.2,.2]){const ge=ia({alto:.06,radio:.009});ge.position.set(Y,0,-.3),o.add(ge)}const x=new et,R=new we({color:9208952,roughness:.95}),U=new I(new Zt(10,10),new we({map:vl(512,512,(Y,ge,V)=>{for(let te=0;te<8;te++)for(let $=0;$<8;$++)Y.fillStyle=($+te)%2?"#2a2420":"#d8d0c0",Y.fillRect($*ge/8,te*V/8,ge/8,V/8)}),roughness:.35,metalness:.1}));U.material.map.wrapS=U.material.map.wrapT=Ut,U.material.map.repeat.set(8,8),U.rotation.x=-Math.PI/2,U.position.y=-.95,U.receiveShadow=!0,x.add(U);for(let Y=0;Y<2;Y++){const ge=new I(new Re(3.4-Y*.4,.08,2-Y*.4),at.marfil);ge.position.set(0,-.91+Y*.08-.08,-.2-Y*.1),ge.receiveShadow=!0,x.add(ge)}const O=2.2,N=7;for(let Y=0;Y<N;Y++){const ge=Math.PI+Y/(N-1)*Math.PI-Math.PI/2,V=Math.sin(ge)*O,te=-.6+Math.cos(ge)*O,$=new I(new Zt(1.1,4.2),R);$.position.set(V,1,te),$.lookAt(0,1,-.6),x.add($);const q=new I(new Zt(.6,1.7),new kt({map:ur(Y%2?"b":"a",256,512),color:new ze(1.5,1.4,1.3),toneMapped:!1}));q.position.set(V*.985,.75,-.6+(te+.6)*.985),q.lookAt(0,.75,-.6),x.add(q);const pe=di(1.2,Y%2?"120,150,255":"255,140,110",.12);pe.position.copy(q.position).multiplyScalar(.92),pe.position.y=.75,x.add(pe)}const k=new I(new Zi(.55,64),new kt({map:ur("roseton",1024,1024),color:new ze(1.5,1.4,1.3),toneMapped:!1}));k.position.set(0,2.3,-2.75),x.add(k);const z=new we({color:12432806,roughness:.85});for(const Y of[-1,1])for(let ge=0;ge<4;ge++){const V=new I(new st(.11,.13,3.6,20),z);V.position.set(Y*1.7,.85,.6+ge*1.3),V.castShadow=!0,x.add(V);const te=new I(new Nn(.65,.09,10,24,Math.PI),z);te.position.set(Y*1.7,2.65,1.25+ge*1.3),te.rotation.y=Math.PI/2,x.add(te)}for(const Y of[-1,1])for(let ge=0;ge<5;ge++){const V=new et,te=new I(new Re(1.1,.05,.35),at.maderaOscura);te.position.y=.42;const $=new I(new Re(1.1,.5,.05),at.maderaOscura);$.position.set(0,.68,-.16);const q=new I(new Re(.05,.9,.4),at.maderaOscura);q.position.set(-.55,.45,0);const pe=q.clone();pe.position.x=.55,V.add(te,$,q,pe),V.position.set(Y*.85,-.95,1.4+ge*.75),V.rotation.y=Math.PI,x.add(V)}const K=new I(new st(.004,.004,1.6,6),at.oroViejo);K.position.set(.9,1.7,-.3),x.add(K);const he=new I(new Pt(.05,16,12),new kt({color:new ze(2.4,.3,.25),toneMapped:!1}));he.position.set(.9,.88,-.3),x.add(he);const J=di(.5,"255,60,50",.5);J.position.copy(he.position),x.add(J),i.add(x),i.add(new na(8029896,2759184,.3));const ie=new ms(16773336,1.45,4.5,Math.PI*.16,.55,1);ie.position.set(.25,2.6,1),ie.target.position.set(0,0,-.05),ie.castShadow=!0,ie.shadow.mapSize.set(2048,2048),ie.shadow.camera.near=1.2,ie.shadow.camera.far=3.6,ie.shadow.bias=-3e-4,ie.shadow.normalBias=.001,i.add(ie,ie.target);const F=new Ao(9085183,.35);F.position.set(-1,1.5,-2),i.add(F);const H=[];for(const Y of[-.42,.42]){const ge=new Vn(16754768,.32,.7,1.6);ge.position.set(Y,.43,-.2),i.add(ge),H.push(ge)}const Q=oa(o);return{id:"capilla",splineData:n,trackOpts:{ledColors:[16765802,16777215,16739162,9087231],curbColors:[14264634,16249832],railColor:15260080,steelColor:12098138,glowGroundY:.001},suelos:[o],tomas:[{p:[0,.55,.95],m:[0,.1,-.1]},{p:[-.18,.2,.2],m:[-.42,.22,-.2]},{p:[.15,.12,.12],m:[0,.12,-.2]},{p:[.3,.16,.28],m:[.12,.06,.13]}],actualizar(Y,ge,V){V.renderer.toneMappingExposure=.86,V.bloomPass.strength=.24,V.bloomPass.radius=.4,V.bloomPass.threshold=1.1;for(const te of Q)te(Y);H.forEach((te,$)=>{te.intensity=.3+Math.sin(Y*11+$*3)*.03+Math.sin(Y*27+$)*.02})}}}function Lu(i,e,t,n=null){const o=document.createElement("canvas");o.width=i,o.height=e,t(o.getContext("2d"),i,e);const s=new zt(o);return s.colorSpace=jt,n&&(s.wrapS=s.wrapT=Ut,s.repeat.set(...n)),s}function Ad(i){let e=i;return()=>(e=e*16807%2147483647,e/2147483647)}function I1(i,e,t,n){const o=i.samples,s=o.length,a=14,r=[],l=[],c=Ad(11),d=[];for(let v=0;v<=a;v++)d.push(c());const h=(t-e+s)%s;for(let v=0;v<=h;v++){const S=o[(e+v)%s],m=new L(...S.position),u=new L(...S.right),g=new L(...S.normal),M=Math.sin(v/h*Math.PI);for(let w=0;w<=a;w++){const A=w/a*Math.PI,y=.024+.006*Math.sin(v*.7+w*1.3)*d[w]+.01*M,C=m.clone().addScaledVector(u,Math.cos(A)*y*1.1).addScaledVector(g,Math.sin(A)*y-.004);if(r.push(C.x,C.y,C.z),v<h&&w<a){const _=v*(a+1)+w,b=_+a+1;l.push(_,b,_+1,_+1,b,b+1)}}}const f=new Bt;f.setAttribute("position",new vt(r,3)),f.setIndex(l),f.computeVertexNormals();const p=new I(f,new we({color:n,roughness:.95,side:on,flatShading:!0}));return p.castShadow=!0,p.receiveShadow=!0,p}async function L1(i,{reverso:e=!1}={}){const t=a0(C1),n=e?Ar(t):t,o=new ze(15901534);i.background=o.clone(),i.fog=new xr(14718314,1.4,6.5);const s=new et;s.name="Gruta",i.add(s);const a=Ad(5),r=new I(new Pt(7,32,16),new an({side:Rn,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP;
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
        }`}));i.add(r);const l=Lu(512,512,(X,j,G)=>{X.fillStyle="#b9ab92",X.fillRect(0,0,j,G);for(let B=0;B<8;B++)for(let E=0;E<8;E++){const ae=160+Math.floor(a()*40);X.fillStyle=`rgb(${ae},${ae-10},${ae-30})`,X.fillRect(E*j/8+3+B%2*16,B*G/8+3,j/8-6,G/8-6)}},[6,4]),c=new I(new Re(1.7,.04,1.1),new we({map:l,roughness:.9}));c.position.y=-.02,c.receiveShadow=!0,s.add(c);const d=new I(new Zi(6,48),new we({map:Lu(256,256,(X,j,G)=>{X.fillStyle="#4f7a34",X.fillRect(0,0,j,G);for(let B=0;B<4e3;B++)X.fillStyle=a()<.5?"#5d8a3c":"#3f6a2a",X.fillRect(a()*j,a()*G,2,2)},[30,30]),roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=-.04,d.receiveShadow=!0,s.add(d);const h=9076850,f=new Zt(1.7,.62,120,44),p=f.attributes.position,v=[],S=new ze(h),m=new ze(2761758),u={x:-.12,y:.33,rx:.09,ry:.13},g={x:-.42,y:.13,rx:.17,ry:.13};for(let X=0;X<p.count;X++){const j=p.getX(X),G=p.getY(X)+.31;let B=0;B+=Math.sin(j*23+G*7)*.008+Math.sin(j*61-G*37)*.004+Math.sin(j*9+G*19)*.01,B=Math.min(B,.012);let E=0;for(const xe of[u,g]){const Me=((j-xe.x)/xe.rx)**2+((G-xe.y)/xe.ry)**2;Me<1&&(B-=(xe===g?.12:.055)*(1-Me),E=Math.max(E,(1-Me)*(xe===g?.9:.6)))}B-=Math.max(0,G-.45)*.4,p.setXYZ(X,j-.12,G,-.377+B);const ae=S.clone().lerp(m,E).multiplyScalar(.92+.08*Math.sin(j*13+G*9));v.push(ae.r,ae.g,ae.b)}f.setAttribute("color",new vt(v,3)),f.computeVertexNormals();const M=new I(f,new we({vertexColors:!0,roughness:.95,flatShading:!0}));M.castShadow=!0,M.receiveShadow=!0,s.add(M);for(const[X,j,G,B,E]of[[-.55,-.62,.32,.72,1],[-.1,-.66,.36,.8,2],[.35,-.62,.3,.7,3],[-.92,-.45,.2,.4,4],[.78,-.48,.2,.42,5]]){const ae=js({radio:G,alto:B,color:h,semilla:E,detalle:3});ae.position.set(X,0,j),ae.scale.z=.5,s.add(ae)}for(const[X,j,G,B,E]of[[-.6,-.2,.08,.06,12],[-.5,-.29,.07,.08,13],[-.36,-.33,.08,.1,14],[-.12,-.34,.09,.11,15],[.1,-.33,.08,.1,16],[.26,-.29,.06,.09,17]]){const ae=js({radio:G,alto:B,color:8287334,semilla:E,detalle:2});ae.position.set(X,0,j),s.add(ae)}const w=new I(new Re(.12,.012,.07),new we({color:h,roughness:.95}));w.position.set(-.12,.236,-.395),s.add(w);const A=yd({alto:.17,pedestal:.01});A.position.set(-.12,.242,-.4);const y=new I(new Nn(.021,.004,8,24),at.celeste);y.rotation.x=Math.PI/2,y.position.y=.095,A.add(y),s.add(A);const C=dr({alto:.06,colores:[15913547,16770688],jarron:null,n:10});C.position.set(-.07,.236,-.39),s.add(C);const _=new Vn(14674175,.4,.45,1.5);_.position.set(-.12,.34,-.3),s.add(_);const b=n.samples.length;let x=n.samples.findIndex(X=>X.sector===5);e&&(x=(b-x)%b);const R=e?(x-70+b)%b:(x-30+b)%b;s.add(I1(n,R,(R+75)%b,8682092));const U=js({radio:.05,alto:.04,color:9076850,semilla:21});U.position.set(.45,0,-.1),s.add(U);const O=gs({alto:.3,mat:at.maderaOscura,cristo:at.marfil,base:!1});O.position.set(.45,.02,-.1),O.rotation.y=-.6,s.add(O);const N=new et,k=new we({color:2763310,roughness:.5,metalness:.8});for(let X=0;X<3;X++){const j=new I(new Re(.24,.004,.022),k);j.position.set(0,.03+X*.028,-X*.022),N.add(j);for(let G=0;G<9;G++){const B=ia({alto:.014+a()*.012,radio:.0032,platillo:!1});B.position.set(-.11+G*.0275,.032+X*.028,-X*.022),N.add(B)}}for(const X of[-.12,.12]){const j=new I(new Re(.006,.1,.06),k);j.position.set(X,.05,-.022),N.add(j)}N.position.set(.02,0,.06),s.add(N);const z=new Vn(16752714,.45,.6,1.5);z.position.set(.02,.12,.05),s.add(z);const K=new et,he=new I(new st(.1,.105,.02,32,1,!0),new we({color:12432288,roughness:.8,side:on}));he.position.y=.01,K.add(he);const J=new we({color:6267848,roughness:.05,metalness:.4,transparent:!0,opacity:.85}),ie=new I(new Zi(.098,32),J);ie.rotation.x=-Math.PI/2,ie.position.y=.016,K.add(ie);const F=new I(new st(.002,.004,.06,8),new we({color:13625599,transparent:!0,opacity:.6}));F.position.y=.045,K.add(F),K.position.set(-.36,0,.08),s.add(K);for(const[X,j,G]of[[-.62,.38,16777215],[.66,.4,14828922],[-.7,-.15,15913547],[.7,.05,16777215]]){const B=dr({alto:.09,colores:[G,9356783,G],jarron:null,n:16});B.position.set(X,0,j),s.add(B)}const H=new we({color:2376490,roughness:.9});for(const[X,j,G]of[[.74,-.34,.5],[-.76,-.3,.55],[1,-.6,.7],[-1.05,-.55,.65],[1.2,.3,.6],[-1.2,.35,.6]]){const B=new I(new jn(.06,G,12),H);B.position.set(X,G/2,j),B.scale.x=.8,B.castShadow=!0,s.add(B)}const Q=new et,Y=new we({color:13221806,roughness:.9}),ge=new I(new Re(.9,.5,.4),Y);ge.position.y=.25;const V=new I(new Re(.18,.9,.18),Y);V.position.set(0,.45,.22);const te=new I(new jn(.12,.6,8),new we({color:5925498,roughness:.6}));te.position.set(0,1.2,.22);const $=new I(new jn(.5,.25,4),new we({color:5925498,roughness:.6}));$.rotation.y=Math.PI/4,$.scale.z=.5,$.position.y=.62,Q.add(ge,V,te,$),Q.position.set(1.6,.6,-4.2),Q.rotation.y=-.4,s.add(Q);const q=new I(new Pt(1.6,24,12,0,Math.PI*2,0,Math.PI/2),new we({color:4151858,roughness:1}));q.scale.set(1.6,.4,1),q.position.set(1.4,-.04,-4.4),s.add(q);for(const[X,j,G]of[[-3,-5,2.4],[0,-6,3],[3.5,-5.5,2.6]]){const B=new I(new jn(G,G*.7,6),new we({color:5986938,roughness:1,flatShading:!0}));B.position.set(X,G*.3,j),s.add(B)}i.add(new na(16763034,3815978,.55));const pe=new Ao(16756848,1.7);pe.position.set(1.6,.9,.9),pe.castShadow=!0,pe.shadow.mapSize.set(2048,2048),pe.shadow.camera.left=-.9,pe.shadow.camera.right=.9,pe.shadow.camera.top=.7,pe.shadow.camera.bottom=-.7,pe.shadow.camera.near=.2,pe.shadow.camera.far=4,pe.shadow.bias=-4e-4,pe.shadow.normalBias=.0012,i.add(pe);const se=new Ao(10137855,.35);se.position.set(-1,.8,1),i.add(se);const Pe=di(1.6,"255,190,120",.35);Pe.position.set(5.6,.9,-4.2),i.add(Pe);const de=oa(s);return{id:"gruta",splineData:n,trackOpts:{ledColors:[16765802,16777215,9356783,16765802],curbColors:[3108792,16118506],railColor:14735040,steelColor:9076850,glowGroundY:.001},suelos:[s],tomas:[{p:[.1,.45,.85],m:[-.05,.12,-.2]},{p:[-.1,.27,-.14],m:[-.12,.3,-.37]},{p:[.25,.2,.15],m:[.45,.12,-.1]},{p:[-.15,.1,.3],m:[.02,.06,.06]}],actualizar(X,j,G){G.renderer.toneMappingExposure=.88,G.bloomPass.strength=.22,G.bloomPass.radius=.35,G.bloomPass.threshold=1.15;for(const B of de)B(X);z.intensity=.42+Math.sin(X*9)*.04+Math.sin(X*23)*.03}}}const D1={escritorio:y1,pesebre:R1,capilla:P1,gruta:L1},Du={escritorio:"«Lámpara es tu palabra para mis pasos» · Sal 119,105",pesebre:"«Hoy os ha nacido un Salvador» · Lc 2,11",capilla:"«Haced esto en memoria mía» · Lc 22,19",gruta:"«Yo soy la Inmaculada Concepción» · Lourdes, 1858"},er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Do{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U1=new Sr(-1,1,1,-1,0,1);class N1 extends Bt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}}const F1=new N1;class Cr{constructor(e){this._mesh=new I(F1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cd extends Do{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Cr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uu extends Do{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const o=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class O1 extends Do{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class B1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cd(er),this.copyPass.material.blending=yi,this.timer=new Yh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let o=0,s=this.passes.length;o<s;o++){const a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Uu!==void 0&&(a instanceof Uu?n=!0:a instanceof O1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class z1 extends Do{constructor(e,t,n=null,o=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=o,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,n){const o=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=o}}const Wa={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class k1 extends Do{constructor(e,t,n){super(),this.scene=e,this.camera=t;const o=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Hn(1,1,{minFilter:wn,magFilter:wn,type:qn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new ud,this._materialDepth.depthPacking=rf,this._materialDepth.blending=yi;const r=ps.clone(Wa.uniforms);r.tDepth.value=this._renderTargetDepth.texture,r.focus.value=o,r.aspect.value=t.aspect,r.aperture.value=s,r.maxblur.value=a,r.nearClip.value=t.near,r.farClip.value=t.far,this.materialBokeh=new an({defines:Object.assign({},Wa.defines),uniforms:r,vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader}),this.uniforms=r,this._fsQuad=new Cr(this.materialBokeh),this._oldClearColor=new ze}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(o),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const V1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xs extends Do{constructor(e,t=1,n,o){super(),this.strength=t,this.radius=n,this.threshold=o,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(s,a,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Hn(s,a,{type:qn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Hn(s,a,{type:qn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const r=V1;this.highPassUniforms=ps.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(er.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,premultipliedAlpha:!0,blending:Gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new kt,this._fsQuad=new Cr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(n,o);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,o),this.renderTargetsVertical[s].setSize(n,o),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/n,1/o),n=Math.round(n/2),o=Math.round(o/2)}render(e,t,n,o,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}xs.BlurDirectionX=new Ue(1,0);xs.BlurDirectionY=new Ue(0,1);const Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class G1 extends Do{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(Xa.uniforms),this.material=new cd({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new Cr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===en&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Rc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const H1={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ue(1/1024,1/512)}},vertexShader:`

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

		}`};class W1 extends $s{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Re;e.deleteAttribute("uv");const t=new we({side:Rn}),n=new we,o=new Vn(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const s=new I(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Hi(e,n,6),r=new sn;r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),r.updateMatrix(),a.setMatrixAt(0,r.matrix),r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),r.updateMatrix(),a.setMatrixAt(1,r.matrix),r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),r.updateMatrix(),a.setMatrixAt(2,r.matrix),r.position.set(-2.017,.018,6.124),r.rotation.set(0,.333,0),r.scale.set(2.002,4.566,2.064),r.updateMatrix(),a.setMatrixAt(3,r.matrix),r.position.set(2.291,-.756,-2.621),r.rotation.set(0,-.286,0),r.scale.set(1.546,1.552,1.496),r.updateMatrix(),a.setMatrixAt(4,r.matrix),r.position.set(-2.193,-.369,-5.547),r.rotation.set(0,.516,0),r.scale.set(3.875,3.487,2.986),r.updateMatrix(),a.setMatrixAt(5,r.matrix),this.add(a);const l=new I(e,es(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new I(e,es(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new I(e,es(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const h=new I(e,es(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new I(e,es(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new I(e,es(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function es(i){return new Vh({color:0,emissive:16777215,emissiveIntensity:i})}const X1=`
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
`,ja={alta:{pixel:2,bokeh:!0,sombras:!0,bloom:!0},media:{pixel:1.5,bokeh:!1,sombras:!0,bloom:!0},baja:{pixel:1,bokeh:!1,sombras:!1,bloom:!1}};function j1(i){const e=new Wv({antialias:!0,powerPreference:"high-performance"});e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Vs,e.toneMapping=mr,e.toneMappingExposure=.8,i.appendChild(e.domElement);const t=new Xn(46,window.innerWidth/window.innerHeight,.0018,12);let n=new $s;const s=new xc(e).fromScene(new W1,.04).texture,a=new B1(e),r=e.getDrawingBufferSize(new Ue);a.renderTarget1.depthTexture=new Eo(r.x,r.y,ni),a.renderTarget2.depthTexture=new Eo(r.x,r.y,ni);const l=new z1(n,t);a.addPass(l);const c=new k1(n,t,{focus:.12,aperture:0,maxblur:0}),d=c._renderTargetDepth||c.renderTargetDepth;d&&d.dispose(),c.setSize=function(_,b){this.materialBokeh.uniforms.aspect.value=_/b},c.materialBokeh.defines.DEPTH_PACKING=0,c.materialBokeh.fragmentShader=X1,c.materialBokeh.needsUpdate=!0,a.addPass(c);const h=new xs(new Ue(window.innerWidth,window.innerHeight),.06,.22,1.15);a.addPass(h),a.addPass(new G1);const f=new Cd(H1);a.addPass(f);const p=new $s,v=new Set;function S(_,b,x){const R=_._fsQuad||_.fsQuad;R&&(R.material=x,R.render(b))}c.render=function(_,b,x){this.uniforms.tColor.value=x.texture,this.uniforms.tDepth.value=x.depthTexture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,_.setRenderTarget(this.renderToScreen?null:b),!this.renderToScreen&&this.clear&&_.clear(),S(this,_,this.materialBokeh),m(_,x)};function m(_,b){if(!v.size)return;for(const R of v){const U=R.material.uniforms;U&&(U.tSceneDepth.value=b.depthTexture,U.uNearClip.value=t.near,U.uFarClip.value=t.far,U.uFocus.value=c.uniforms.focus.value,U.uAperture.value=c.uniforms.aperture.value,U.uMaxBlur.value=c.uniforms.maxblur.value,U.uResolution.value.set(b.width,b.height))}const x=_.autoClear;_.autoClear=!1,_.render(p,t),_.autoClear=x}let u=ja.alta,g="alta";function M(_){u=ja[_]||ja.alta,g=ja[_]?_:"alta";const b=Math.min(window.devicePixelRatio||1,u.pixel);e.setPixelRatio(b),a.setPixelRatio(b),e.shadowMap.enabled=u.sombras,n.traverse(x=>{if(x.material){const R=Array.isArray(x.material)?x.material:[x.material];for(const U of R)U.needsUpdate=!0}}),w()}function w(){const _=window.innerWidth,b=window.innerHeight;t.aspect=_/b,t.updateProjectionMatrix(),e.setSize(_,b),a.setSize(_,b);const x=e.getDrawingBufferSize(new Ue);f.material.uniforms.resolution.value.set(1/x.x,1/x.y),h.setSize(_,b)}window.addEventListener("resize",w);function A(_){n=_,n.environment=s,(n.environmentIntensity===void 0||n.environmentIntensity===1)&&(n.environmentIntensity=.1),l.scene=_,c.scene=_}function y(_,b,x){c.uniforms.focus.value=_,c.uniforms.aperture.value=u.bokeh?b:0,c.uniforms.maxblur.value=u.bokeh?x:0}function C(){h.enabled=u.bloom;for(const _ of v)_.parent!==p&&p.add(_);a.render()}return{renderer:e,camera:t,composer:a,bloomPass:h,bokehPass:c,get escena(){return n},get calidad(){return g},setEscena:A,setCalidad:M,setEnfoque:y,redimensionar:w,render:C,agregarChispas(_){v.add(_)},quitarChispas(_){v.delete(_),_.parent&&_.parent.remove(_)}}}const _l=["persecucion","lejana","cabina"],q1={persecucion:"Persecución",lejana:"Lejana",cabina:"Cabina"};function Y1(i){const e=i.camera,t=new L,n=new L,o=new L(0,1,0),s=new L,a=new L,r=new L,l=new L,c=new L;let d=0,h=0,f="persecucion",p=.05;function v(A,y=.0018){(Math.abs(e.fov-A)>.001||Math.abs(e.near-y)>1e-7)&&(e.fov=A,e.near=y,e.updateProjectionMatrix())}function S(A,y,C=o){e.position.copy(A),e.up.copy(C),e.lookAt(y)}function m(A,y,C,_={}){const b=A.boostActive>0?1:0;s.copy(A.tangent).applyAxisAngle(A.normal,(A.headingYaw||0)*.4).normalize();const x=(_.escala??.38)/.38,R=Math.max(0,(_.altoVehiculo??.008)-.0085)*(_.escala??.38);let U,O,N;if(f==="cabina"?(U=-.0022,O=.0034,N=.032):f==="lejana"?(U=.03*x+R*1.5,O=.0145*x+R*1.8,N=.03):(U=.0154*x+R*2.2,O=.0074*x+R*2.6,N=.024),a.copy(A.position).addScaledVector(s,-U).addScaledVector(A.normal,O+A.hopHeight*.38),r.copy(A.position).addScaledVector(s,N).addScaledVector(A.normal,.003*x+A.hopHeight*.22),d>0){d=Math.max(0,d-y);const z=d/.18*h;a.addScaledVector(A.right,Math.sin(C*95)*8e-4*z).addScaledVector(A.normal,Math.cos(C*125)*8e-4*z)}f==="cabina"?l.copy(A.normal):l.set(0,.58,0).addScaledVector(A.normal,.42).normalize(),o.lerp(l,1-Math.exp(-y*16)).normalize(),t.copy(a),n.copy(r);const k=f==="cabina"?46:41.5+b*5+Math.min(1,Math.abs(A.speed)/.3)*3;v($e.lerp(e.fov,k,1-Math.exp(-y*4)),.0018),S(t,n,o),u(A.position,f==="cabina"?0:1)}function u(A,y=1,C=!1){e.getWorldDirection(c);const _=$e.clamp(a.copy(A).sub(e.position).dot(c),.003,3);p=$e.lerp(p,_,.4),C?i.setEnfoque(p,.0065*y,.0035*y):i.setEnfoque(p,.0015*y,.0011*y)}function g(A,y,C=40,_=.002){v(C,_),t.copy(A),n.copy(y),o.set(0,1,0),S(t,n,o)}function M(A,y,C,_,b=38){a.set(A.x+Math.cos(_)*y,A.y+C,A.z+Math.sin(_)*y),g(a,A,b)}function w(A,y,C,_,b,x=50){const R=A(y),U=R.position.clone(),O=R.right.clone(),N=R.normal.clone(),k=A(y+b);a.copy(U).addScaledVector(O,_).addScaledVector(N,C),r.copy(k.position),g(a,r,x)}return{camera:e,seguir:m,toma:g,orbita:M,sobrevuelo:w,enfocarEn:u,temblar(A){d=.18,h=A},get modo(){return f},set modo(A){f=A},siguienteModo(){return f=_l[(_l.indexOf(f)+1)%_l.length],f}}}const os=3,Ml=[15,12,10,8,6,4],Ed="gran-premio-fe-v1",ss=[{id:"lucia",nombre:"Lucía",color:3837920,traje:1194606,tocado:"casco",habilidad:"Luz de salida",texto:"Arranca con un turbo más largo.",bono:{turbo:1.08}},{id:"pedro",nombre:"Pedro",color:4175968,traje:1331242,tocado:"casco",habilidad:"Pescador de hombres",texto:"Acelera con fuerza de remero.",bono:{aceleracion:1.05}},{id:"miguel",nombre:"Miguel",color:14699082,traje:7215642,tocado:"casco",habilidad:"Pie firme",texto:"Se agarra mejor en las curvas.",bono:{agarre:1.06}},{id:"ana",nombre:"Ana",color:11037408,traje:4464734,tocado:"casco",habilidad:"Oración constante",texto:"Su derrape carga el turbo más rápido.",bono:{turbo:1.06,manejo:1.02}},{id:"tomas",nombre:"Padre Tomás",color:14262842,casco:1710623,traje:1579038,tocado:"clerical",habilidad:"Bendición",texto:"Velocidad punta serena y constante.",bono:{velocidad:1.03}},{id:"tobias",nombre:"Tobías",color:5231045,traje:1331788,tocado:"casco",habilidad:"Guiado por Rafael",texto:"Dirección más precisa.",bono:{manejo:1.06}},{id:"rosa",nombre:"Rosa",color:16744118,traje:8003146,tocado:"casco",habilidad:"Aura de paz",texto:"Equilibrada en todo.",bono:{velocidad:1.01,aceleracion:1.02,manejo:1.02}},{id:"clara",nombre:"Hermana Clara",color:6979520,casco:1909302,traje:2764613,tocado:"velo",habilidad:"Campanas",texto:"Sale disparada de cada curva.",bono:{aceleracion:1.03,turbo:1.04}}],as=[{id:"kart",tipo:"kart",nombre:"Kart Peregrino",clase:"Coche",desc:"El clásico. Equilibrado en todo.",velocidad:1,aceleracion:1,manejo:1,agarre:1,turbo:1,peso:1},{id:"bolido",tipo:"bolido",nombre:"Bólido de la Fe",clase:"Coche",desc:"Monoplaza de carreras: punta y agarre, pero arranca lento.",velocidad:1.07,aceleracion:.9,manejo:1.04,agarre:1.1,turbo:.95,peso:.9},{id:"furgoneta",tipo:"furgoneta",nombre:"Furgoneta Misionera",clase:"Coche",desc:"Pesada y estable. Nadie la saca del camino.",velocidad:.97,aceleracion:.94,manejo:.9,agarre:1.14,turbo:1.05,peso:1.45},{id:"papamovil",tipo:"papamovil",nombre:"Papamóvil",clase:"Coche",desc:"Lento al salir, imparable en recta. Su turbo dura más.",velocidad:1.05,aceleracion:.84,manejo:.86,agarre:1.02,turbo:1.22,peso:1.6},{id:"moto",tipo:"moto",nombre:"Moto Peregrina",clase:"Moto",desc:"Deportiva: acelera y gira de maravilla, se agarra menos.",velocidad:1.03,aceleracion:1.12,manejo:1.14,agarre:.9,turbo:1.05,peso:.7},{id:"scooter",tipo:"scooter",nombre:"Scooter Parroquial",clase:"Moto",desc:"Ágil y ligerísimo. Ideal para las curvas cerradas.",velocidad:.95,aceleracion:1.26,manejo:1.2,agarre:.95,turbo:1.1,peso:.55},{id:"chopper",tipo:"chopper",nombre:"Chopper del Arcángel",clase:"Moto",desc:"Rapidísimo en recta, pide frenar antes de las curvas.",velocidad:1.08,aceleracion:1.02,manejo:.86,agarre:.9,turbo:1.12,peso:.95}],Rd=[["velocidad","Velocidad"],["aceleracion","Aceleración"],["manejo","Manejo"],["agarre","Agarre"],["turbo","Turbo"],["peso","Peso"]],Sc=[{id:"facil",nombre:"Fácil",texto:"Rivales tranquilos que se equivocan a menudo.",ritmo:.88,errores:1.8},{id:"normal",nombre:"Normal",texto:"Una carrera pareja.",ritmo:1,errores:1},{id:"dificil",nombre:"Difícil",texto:"Rivales rápidos que aprovechan cada recta.",ritmo:1.08,errores:.5}],yc=[{id:"escritorio",nombre:"El escritorio del catequista",corto:"Escritorio",desc:"Biblias, el cirio pascual y la Virgen entre teclado y lámpara."},{id:"pesebre",nombre:"El Pesebre de Belén",corto:"Pesebre",desc:"Musgo, el río de papel plata, pastores y la estrella."},{id:"capilla",nombre:"El altar de la capilla",corto:"Capilla",desc:"Entre velas, el sagrario y los vitrales encendidos."},{id:"gruta",nombre:"La gruta de Lourdes",corto:"Gruta",desc:"Rocas, velas y flores al atardecer junto a la Virgen."}],hr=[{id:"esperanza",nombre:"Copa de la Esperanza",icono:"🕊️",desc:"Tres mundos para empezar el camino.",carreras:[{mundo:"escritorio"},{mundo:"pesebre"},{mundo:"capilla"}]},{id:"luz",nombre:"Copa de la Luz",icono:"🕯️",desc:"La gruta y dos mundos recorridos al revés.",carreras:[{mundo:"gruta"},{mundo:"capilla",reverso:!0},{mundo:"pesebre",reverso:!0}]},{id:"gloria",nombre:"Copa de la Gloria",icono:"👑",desc:"Los cuatro mundos. Solo para peregrinos valientes.",carreras:[{mundo:"pesebre"},{mundo:"escritorio",reverso:!0},{mundo:"gruta",reverso:!0},{mundo:"capilla"}]}];function tr(i){return yc.find(e=>e.id===i)||yc[0]}function pr(i,e){const t={};for(const[n]of Rd)t[n]=i[n]*(e&&e.bono&&e.bono[n]||1);return t}function Z1(i){return Math.max(1,Math.min(5,Math.round(3+(i-1)*12)))}function ea(i){return`#${i.toString(16).padStart(6,"0")}`}const En=i=>document.getElementById(i);function ao(i){if(i==null||!isFinite(i))return"--:--.--";const e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*100%100);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}.${String(n).padStart(2,"0")}`}const $1=["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fffaf0","#fff4dc","#ffeec6","#ffe6ad","#ffdd92","#ffd478","#ffca5e","#ffc046","#ffb534","#ffaa22","#ff9f14","#ff930a","#ff8800"];function J1(){const i=En("hud-root"),e=En("hud-pos-digit"),t=En("hud-pos-suffix"),n=En("hud-pos-total"),o=En("lb-entries"),s=En("hud-lap-curr"),a=En("hud-lap-total"),r=En("hud-lap-timer"),l=En("hud-lap-split"),c=En("hud-scale-speed"),d=En("hud-aviso"),h=En("hud-f1-countdown"),f=[0,1,2,3,4,5].map(k=>En(`lap-d${k}`));let p={},v=null,S=null;const m=[],u=En("speedo-ticks-group"),g=En("speedo-bar-casing");if(u){if(g){const V=[[18.384,106.02400000000002],[64.4,33.2],[269.208,5.904999999999999],[280.108,21.904999999999998],[78.5,49.6],[31.683999999999997,117.82400000000001]];g.setAttribute("points",V.map(([te,$])=>`${te.toFixed(1)},${$.toFixed(1)}`).join(" "))}let Q="";const Y=.13,ge=(V,te,$,q,pe)=>`<polygon id="speedo-seg-${V}" class="speedo-seg" points="${te.toFixed(2)},${$.toFixed(2)} ${q.toFixed(2)},${pe.toFixed(2)} ${(q+10.5).toFixed(2)},${(pe+11.2).toFixed(2)} ${(te+10.5).toFixed(2)},${($+11.2).toFixed(2)}" />`;for(let V=0;V<6;V++)Q+=ge(V,66-(6-V-Y)*7.2,36-(6-V-Y)*-10.8,66-(6-V-1+Y)*7.2,36-(6-V-1+Y)*-10.8);for(let V=0;V<12;V++)Q+=ge(6+V,66+(V+Y)*16.4,36+(V+Y)*-2.25,66+(V+1-Y)*16.4,36+(V+1-Y)*-2.25);u.innerHTML=Q;for(let V=0;V<18;V++)m.push(En(`speedo-seg-${V}`))}const M=En("minimap-canvas"),w=M?M.getContext("2d"):null;let A=null,y=k=>k,C=(k,z,K)=>K;function _(k){if(!M)return;A=document.createElement("canvas"),A.width=M.width,A.height=M.height;const z=A.getContext("2d"),K=A.width,he=A.height,J=k.samples,ie=J.length,F=(B,E,ae)=>B-E*.36+ae*.08,H=(B,E,ae)=>ae*1.08-E*1.48;let Q=1/0,Y=-1/0,ge=1/0,V=-1/0,te=1/0,$=-1/0;for(const B of J){const[E,ae,xe]=B.position;Q=Math.min(Q,F(E,ae,xe)),Y=Math.max(Y,F(E,ae,xe)),ge=Math.min(ge,H(E,ae,xe)),V=Math.max(V,H(E,ae,xe)),te=Math.min(te,ae),$=Math.max($,ae)}const q=Math.min((K-88)/Math.max(1e-4,Y-Q),(he-76)/Math.max(1e-4,V-ge)),pe=(K-(Y-Q)*q)/2-Q*q,se=(he-(V-ge)*q)/2-ge*q;y=(B,E,ae)=>F(B,E,ae)*q+pe,C=(B,E,ae)=>H(B,E,ae)*q+se;const Pe=J.map(B=>({x:y(...B.position),y:C(...B.position),e:B.position[1]})),de=(B,E=-1/0,ae=1/0)=>{z.beginPath();let xe=!1;for(let Me=0;Me<=ie+1;Me++){const oe=Pe[Me%ie],P=Pe[(Me+1)%ie];if(oe.e>=E&&oe.e<=ae){const T=(oe.x+P.x)/2,W=(oe.y+P.y)/2+B;xe||(z.moveTo(oe.x,oe.y+B),xe=!0),z.quadraticCurveTo(oe.x,oe.y+B,T,W)}else xe=!1}z.stroke()};z.lineJoin="round",z.lineCap="round",z.save(),z.shadowColor="rgba(0,0,0,0.9)",z.shadowBlur=20,z.shadowOffsetY=9,z.strokeStyle="rgba(0,0,0,0.68)",z.lineWidth=17.5,de(2.5),z.restore();const X=6,j=($-te)/X||1;for(let B=0;B<X;B++){const E=B===0?-1/0:te+B*j-j*.15,ae=B===X-1?1/0:te+(B+1)*j,xe=205+B*10;z.strokeStyle="rgba(0,0,0,0.85)",z.lineWidth=19.2,de(2.2,E,ae),z.strokeStyle=`rgb(${92+B*8},${78+B*8},${60+B*6})`,z.lineWidth=12.2,de(4,E,ae),z.strokeStyle=`rgb(${Math.min(255,xe+30)},${Math.min(255,xe+18)},${xe-8})`,z.lineWidth=12,de(0,E,ae)}const G=Pe[k.start_finish_index??0];z.fillStyle="#ffffff",z.fillRect(G.x-7,G.y-3,14,6)}function b(k,z,K,he,J){w.fillStyle="rgba(0,8,16,0.75)",w.beginPath(),w.arc(k,z,he+2.5,0,Math.PI*2),w.fill(),w.fillStyle=K,w.beginPath(),w.arc(k,z,he,0,Math.PI*2),w.fill(),w.fillStyle=J,w.beginPath(),w.arc(k,z,he*.4,0,Math.PI*2),w.fill()}function x(k,z){if(!w||!A)return;w.clearRect(0,0,M.width,M.height),w.drawImage(A,0,0);for(const ie of z){const F=ie.modelo.kartRoot.position;b(y(F.x,F.y,F.z),C(F.x,F.y,F.z),ea(ie.color),7.5,"#ffffff")}const K=y(k.x,k.y,k.z),he=C(k.x,k.y,k.z),J=w.createRadialGradient(K,he,3,K,he,26);J.addColorStop(0,"rgba(255,214,110,0.9)"),J.addColorStop(1,"rgba(255,190,60,0)"),w.fillStyle=J,w.beginPath(),w.arc(K,he,26,0,Math.PI*2),w.fill(),b(K,he,"#ffd25a",10,"#fff8e0")}function R(k,z,K){const he=Math.round(Math.abs(k.speed)*102.35*3.6);if(he!==p.kmh){p.kmh=he,c&&(c.textContent=String(he));const Y=he<=0?0:Math.min(18,Math.max(1,Math.round(he/104*18)));Y!==p.seg&&(p.seg=Y,m.forEach((ge,V)=>{ge&&(ge.style.fill=V<Y?$1[V]:"rgba(255,255,255,0.12)",V<Y&&V>=10?ge.setAttribute("filter","url(#speedoCyanGlow)"):ge.removeAttribute("filter"))}))}const J=z.clasificacion(),ie=J.indexOf(z.yo)+1;ie!==p.puesto&&(p.puesto=ie,e.textContent=String(ie),t.textContent="º",e.className=`hud-pos-digit pos-${ie===1?"1st":ie===2?"2nd":ie===3?"3rd":"4th"}`,n&&(n.textContent=`/${J.length}`));const F=J.map((Y,ge)=>{let V;return ge===0?V=Y.llego?ao(Y.tiempo):"LÍDER":Y.llego&&J[0].llego?V=`+${(Y.tiempo-J[0].tiempo).toFixed(1)}s`:V=`+${Math.max(0,(J[0].progreso-Y.progreso)/.2).toFixed(1)}s`,`<div class="lb-row ${Y.esJugador?"is-player":""}"><div class="lb-row-left"><span class="lb-pos">${ge+1}</span><span class="lb-dot" style="background:${ea(Y.color)};"></span><span class="lb-name">${Y.esJugador?"TÚ":Y.nombre.toUpperCase()}</span></div><span class="lb-gap">${V}</span></div>`}).join("");F!==p.filas&&(p.filas=F,o.innerHTML=F);const H=Math.min(os,z.yo.vuelta);H!==p.vuelta&&(p.vuelta=H,s.textContent=String(H),a&&(a.textContent=String(os)));const Q=ao(z.yo.llego?z.yo.tiempo:K);if(Q!==p.crono){p.crono=Q;const Y=[0,1,3,4,6,7];f.forEach((ge,V)=>{ge&&ge.textContent!==Q[Y[V]]&&(ge.textContent=Q[Y[V]])}),r.setAttribute("aria-label",Q)}x(k.position,z.rivales)}function U(k,z=1600,K=""){d&&(d.textContent=k,d.className=`hud-aviso ${K}`,d.offsetWidth,d.classList.add("anim"),clearTimeout(v),v=setTimeout(()=>d.classList.add("hidden"),z))}function O(k){l&&(l.textContent=k,l.classList.remove("hidden"),clearTimeout(S),S=setTimeout(()=>l.classList.add("hidden"),2600))}function N(k){if(h){if(!k){h.classList.add("hidden");return}h.textContent=k,h.classList.remove("hidden"),h.classList.remove("pulso"),h.offsetWidth,h.classList.add("pulso")}}return{mostrar(k){i.classList.toggle("oculto",!k)},prepararMapa:_,actualizar:R,aviso:U,parcial:O,cuenta:N,reiniciar(){p={},l==null||l.classList.add("hidden"),d==null||d.classList.add("hidden"),N("")}}}function K1({alPausa:i,alCamara:e,alSonido:t,alConfirmar:n}={}){const o=new Set,s={acel:!1,freno:!1,izq:!1,der:!1};let a={};const r=h=>h.target&&["INPUT","TEXTAREA","SELECT"].includes(h.target.tagName);window.addEventListener("keydown",h=>{r(h)||h.metaKey||h.ctrlKey||h.altKey||(o.add(h.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(h.code)&&h.preventDefault(),!h.repeat&&(h.code==="Escape"||h.code==="KeyP"?i==null||i():h.code==="KeyC"?e==null||e():h.code==="KeyM"?t==null||t():(h.code==="Enter"||h.code==="Space")&&(n==null||n())))}),window.addEventListener("keyup",h=>o.delete(h.code)),window.addEventListener("blur",()=>{o.clear();for(const h of Object.keys(s))s[h]=!1});const l={forward:"acel",backward:"freno",left:"izq",right:"der"};for(const h of document.querySelectorAll("[data-control]")){const f=l[h.dataset.control],p=S=>{S.preventDefault(),s[f]=!0,h.classList.add("is-pressed");try{h.setPointerCapture(S.pointerId)}catch{}},v=()=>{s[f]=!1,h.classList.remove("is-pressed")};h.addEventListener("pointerdown",p);for(const S of["pointerup","pointercancel","lostpointercapture"])h.addEventListener(S,v);h.addEventListener("contextmenu",S=>S.preventDefault())}function c(){const h={acel:!1,freno:!1,izq:!1,der:!1,pausa:!1,camara:!1,ok:!1};if(!navigator.getGamepads)return h;let f=null;for(const m of navigator.getGamepads())if(m&&m.connected){f=m;break}if(!f)return h;const p=m=>!!(f.buttons[m]&&f.buttons[m].pressed),v=m=>f.buttons[m]?f.buttons[m].value:0,S=f.axes[0]||0;return{acel:p(0)||v(7)>.3,freno:p(1)||v(6)>.3,izq:S<-.35||p(14),der:S>.35||p(15),pausa:p(9),camara:p(3),ok:p(0)}}function d(){const h=c();return h.pausa&&!a.pausa&&(i==null||i()),h.camara&&!a.camara&&(e==null||e()),h.ok&&!a.ok&&(n==null||n()),a=h,{acel:o.has("KeyW")||o.has("ArrowUp")||s.acel||h.acel,freno:o.has("KeyS")||o.has("ArrowDown")||s.freno||h.freno,izq:o.has("KeyA")||o.has("ArrowLeft")||s.izq||h.izq,der:o.has("KeyD")||o.has("ArrowRight")||s.der||h.der}}return{leer:d,teclas:o,tactil:s}}const qa=["inicio","modo","piloto","vehiculo","pista"],Q1={modo:"Paso 1 de 4 · Modo y clase",piloto:"Paso 2 de 4 · Piloto",vehiculo:"Paso 3 de 4 · Vehículo",pista:"Paso 4 de 4 · Copa o circuito",ajustes:"Ajustes"};function e_({sel:i,ajustes:e,datos:t,alCambiarVitrina:n,alJugar:o,alAjuste:s,alSalir:a}){const r=document.getElementById("menu"),l=document.getElementById("menu-panel");let c="inicio";const d=()=>ss.find(u=>u.id===i.piloto)||ss[0],h=()=>as.find(u=>u.id===i.vehiculo)||as[0];function f(u,g){const M=pr(u,g);return`<div class="barras">${Rd.map(([w,A])=>`<span>${A}</span><span class="barra"><span style="width:${Z1(M[w])*20}%"></span></span>`).join("")}</div>`}function p(u){const g=t.trofeos[u];return g?g===1?" · 🏆 Oro":g===2?" · 🥈 Plata":g===3?" · 🥉 Bronce":` · ${g}º`:""}const v={inicio:()=>`
      <div class="menu-cab">
        <div class="welcome-eyebrow">CARRERAS DE PEREGRINOS · ESCALA 1:87</div>
        <div class="menu-titulo">Gran Premio<small>DE LA FE</small></div>
      </div>
      <p class="nota">Corre en coche o en moto por <b>cuatro mundos</b>: el escritorio del catequista, el pesebre de Belén, el altar de la capilla y la gruta de Lourdes. Gana las copas y llévate el <b>Cáliz de Oro</b>.</p>
      <div class="botones-panel" style="justify-content:flex-start">
        <button class="welcome-start-btn" data-ir="modo" type="button"><span class="welcome-start-text">JUGAR</span></button>
        <button class="btn-sec" data-ir="ajustes" type="button">AJUSTES</button>
        ${a?'<button class="btn-sec" data-accion="salir" type="button">SALIR</button>':""}
      </div>
      <h2>Tus copas</h2>
      <div class="lista-mundos">${hr.map(u=>`<div class="paso-copa"><i>${u.icono}</i>${u.nombre}${p(u.id)||" · sin ganar todavía"}</div>`).join("")}</div>
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
      </div>
      <h2>Clase de los rivales</h2>
      <div class="chips">${Sc.map((u,g)=>`<button class="chip${i.dif===g?" on":""}" data-dif="${g}" type="button">${u.nombre}</button>`).join("")}</div>
      <p class="nota">${Sc[i.dif].texto}</p>`,piloto:()=>{const u=d();return`
      <h2>Elige tu piloto</h2>
      <div class="rejilla cuatro">${ss.map(g=>`<button class="carta carta-piloto${g.id===u.id?" on":""}" data-piloto="${g.id}" type="button">
          <span class="avatar" style="background:${ea(g.color)}">${g.nombre.replace("Padre ","").replace("Hermana ","")[0]}</span>
          <b>${g.nombre}</b><small>${g.habilidad}</small></button>`).join("")}</div>
      <p class="nota"><b>${u.nombre} · ${u.habilidad}.</b> ${u.texto}</p>`},vehiculo:()=>{const u=d();return`
      <h2>Elige tu vehículo</h2>
      <div class="rejilla dos">${as.map(g=>`<button class="carta${g.id===i.vehiculo?" on":""}" data-vehiculo="${g.id}" type="button">
          <span class="etiqueta${g.clase==="Moto"?" moto":""}">${g.clase.toUpperCase()}</span>
          <b>${g.nombre}</b><small>${g.desc}</small>${f(g,u)}</button>`).join("")}</div>
      <p class="nota">Las barras ya incluyen la habilidad de <b>${u.nombre}</b>.</p>`},pista:()=>i.modo==="copa"?`
        <h2>Elige la copa</h2>
        <div class="rejilla">${hr.map(u=>`<button class="carta${u.id===i.copa?" on":""}" data-copa="${u.id}" type="button">
            <b>${u.icono} ${u.nombre}${p(u.id)}</b><small>${u.desc}</small>
            <div class="lista-mundos">${u.carreras.map((g,M)=>`<div class="paso-copa"><i>${M+1}</i>${tr(g.mundo).nombre}${g.reverso?' <span class="reverso">REVERSO</span>':""}</div>`).join("")}</div>
          </button>`).join("")}</div>`:`
      <h2>Elige el mundo</h2>
      <div class="rejilla dos">${yc.map(u=>`<button class="carta${u.id===i.mundo?" on":""}" data-mundo="${u.id}" type="button"><b>${u.nombre}</b><small>${u.desc}</small>${t.mejores[`${u.id}${i.reverso?"-r":""}`]?`<small>Tu mejor tiempo: ${t.mejores[`${u.id}${i.reverso?"-r":""}`]}</small>`:""}</button>`).join("")}</div>
      <h2>Sentido</h2>
      <div class="chips">
        <button class="chip${i.reverso?"":" on"}" data-reverso="0" type="button">Normal</button>
        <button class="chip${i.reverso?" on":""}" data-reverso="1" type="button">Reverso</button>
      </div>`};function S(){const u=c==="inicio"?"":`<div class="menu-pie">
            <button class="btn-sec" data-accion="atras" type="button">ATRÁS</button>
            ${c==="ajustes"?"":`<button class="welcome-start-btn" data-accion="siguiente" type="button"><span class="welcome-start-text">${c==="pista"?"¡A CORRER!":"SIGUIENTE"}</span></button>`}
          </div>`;l.innerHTML=`${c!=="inicio"?`<div class="menu-paso">${Q1[c]}</div>`:""}${v[c]()}${u}`,n(d(),h())}function m(u){c=u,S(),l.scrollTop=0}return l.addEventListener("click",u=>{const g=u.target.closest("button");if(!g)return;const M=g.dataset;if(M.ir)return m(M.ir);if(M.accion==="atras")return m(c==="ajustes"?"inicio":qa[Math.max(0,qa.indexOf(c)-1)]);if(M.accion==="siguiente")return c==="pista"?o({...i}):m(qa[qa.indexOf(c)+1]);if(M.accion==="salir")return a==null?void 0:a();M.modo&&(i.modo=M.modo),M.dif!==void 0&&(i.dif=Number(M.dif)),M.piloto&&(i.piloto=M.piloto),M.vehiculo&&(i.vehiculo=M.vehiculo),M.copa&&(i.copa=M.copa),M.mundo&&(i.mundo=M.mundo),M.reverso!==void 0&&(i.reverso=M.reverso==="1"),S()}),l.addEventListener("change",u=>{const g=u.target.dataset.ajuste;if(!g)return;const M=u.target.type==="checkbox"?u.target.checked:u.target.value;s(g,M)}),{mostrar(u,g){r.classList.toggle("oculto",!u),u&&m(g||c)},confirmar(){const u=l.querySelector('[data-accion="siguiente"], [data-ir="modo"]');u==null||u.click()},get paso(){return c},ir:m}}function t_(){const i=new $s;i.background=new ze(854550),i.fog=new xr(854550,.25,.9),i.environmentIntensity=.25,i.add(new na(12571903,2759184,.45));const e=new ms(16773590,.45,.8,Math.PI*.16,.6,1);e.position.set(.06,.22,.14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.near=.05,e.shadow.camera.far=.6,e.shadow.bias=-4e-4,i.add(e,e.target);const t=new Ao(10470655,.7);t.position.set(-.1,.1,-.2),i.add(t);const n=new I(new Zi(.6,64),new we({color:2761266,roughness:.25,metalness:.2}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,i.add(n);const o=new I(new Zi(.1,64),new kt({map:ur("roseton",1024,1024),color:new ze(1.15,1.1,1.05),toneMapped:!1}));o.position.set(0,.105,-.22),i.add(o);const s=new I(new Nn(.1,.006,12,64),new we({color:3814208,roughness:.8}));s.position.copy(o.position),i.add(s);const a=di(.45,"150,170,255",.18);a.position.set(0,.1,-.2),i.add(a);for(const J of[-.16,.16]){const ie=new I(new st(.012,.014,.3,24),new we({color:14275267,roughness:.7}));ie.position.set(J,.15,-.16),ie.castShadow=!0,i.add(ie)}const r=[];for(const J of[-.11,.11]){const ie=Mc({alto:.3});ie.scale.setScalar(.22),ie.position.set(J,0,-.09),i.add(ie),r.push(ie)}const l=oa(i),c=new et,d=new I(new st(.03,.032,.004,64),new we({color:3813446,roughness:.35,metalness:.3}));d.position.y=.002,d.receiveShadow=!0,d.castShadow=!0;const h=new I(new Nn(.0305,7e-4,8,64),new kt({color:new ze(1.8,1.35,.5),toneMapped:!1}));h.rotation.x=Math.PI/2,h.position.y=.0041,c.add(d,h),i.add(c);let f=null,p="";function v(J,ie){const F=i0({tipo:ie.tipo,color:J.color,colorSecundario:16251388,colorCasco:J.casco??J.color,colorTraje:J.traje,tocado:J.tocado,conLuces:!1});return F.kartRoot.traverse(H=>{H.isMesh&&(H.castShadow=!0)}),F}function S(J){var ie;J&&((ie=J.kartRoot.parent)==null||ie.remove(J.kartRoot),J.dispose())}function m(J,ie){const F=`${J.id}|${ie.id}`;F!==p&&(p=F,S(f),f=v(J,ie),f.kartRoot.position.y=.004,c.add(f.kartRoot))}const u=new et;u.visible=!1,i.add(u);const g=[.016,.011,.007],M=[0,-.032,.032],w=["1","2","3"];for(let J=0;J<3;J++){const ie=new I(new Re(.03,g[J],.03),J===0?at.oro:J===1?at.plata:at.oroViejo);ie.position.set(M[J],g[J]/2,0),ie.castShadow=!0,ie.receiveShadow=!0,u.add(ie);const F=document.createElement("canvas");F.width=128,F.height=128;const H=F.getContext("2d");H.fillStyle="#1a1206",H.font="bold 96px Georgia, serif",H.textAlign="center",H.textBaseline="middle",H.fillText(w[J],64,70);const Q=new zt(F),Y=new I(new Zt(.012,.012),new kt({map:Q,transparent:!0}));Y.position.set(M[J],g[J]/2,.0152),u.add(Y)}let A=[];const y=bd({alto:.03});y.visible=!1,i.add(y);const C=di(.08,"255,210,120",0);y.add(C),C.position.y=.02;const _=260,b=new Hi(new Zt(.0016,.001),new we({side:on,roughness:.4,metalness:.6}),_),x=[],R=[16765530,16777215,15905338,9356783,16771496];for(let J=0;J<_;J++)x.push({p:new L,v:new L,r:new ii,w:new L(Math.random()*8,Math.random()*8,Math.random()*8)}),b.setColorAt(J,new ze(R[J%R.length]));b.visible=!1,b.frustumCulled=!1,i.add(b);const U=new Vt,O=new Yn,N=new L(1,1,1);function k(){b.visible=!0;for(const J of x)J.p.set((Math.random()-.5)*.12,.12+Math.random()*.08,(Math.random()-.5)*.06),J.v.set((Math.random()-.5)*.01,-.01-Math.random()*.012,(Math.random()-.5)*.006)}function z(J,ie=!1){c.visible=!1,u.visible=!0;for(const F of A)S(F);A=[],J.slice(0,3).forEach((F,H)=>{const Q=v(F.piloto,F.vehiculo);Q.kartRoot.position.set(M[H],g[H],.002),Q.kartRoot.rotation.y=.25*(H===1?1:H===2?-1:0),Q.kartRoot.scale.setScalar(.85),i.add(Q.kartRoot),A.push(Q)}),y.visible=ie,y.position.set(0,g[0]+.022,-.012),C.material.opacity=ie?.8:0,k()}function K(){c.visible=!0,u.visible=!1,y.visible=!1,b.visible=!1;for(const J of A)S(J);A=[]}function he(J,ie){for(const F of l)F(J);a.material.opacity=.15+Math.sin(J*.8)*.04,c.visible&&(c.rotation.y=J*.6),f&&f.updateWheels(ie,.02,Math.sin(J*.7)*.3),y.visible&&(y.rotation.y=J*.8),b.visible&&(x.forEach((F,H)=>{F.v.y=Math.max(F.v.y-.02*ie,-.03),F.p.addScaledVector(F.v,ie),F.p.x+=Math.sin(J*3+H)*8e-5,F.p.y<0&&(F.p.y=.2),F.r.set(J*F.w.x,J*F.w.y,J*F.w.z),O.setFromEuler(F.r),U.compose(F.p,O,N),b.setMatrixAt(H,U)}),b.instanceMatrix.needsUpdate=!0)}return{scene:i,mostrarVehiculo:m,mostrarVitrina:K,mostrarPodio:z,actualizar:he,velas:r}}const n_=[-.0036,.0036],i_=.03,o_=.026;function Pd(i){return{offset:o_+Math.floor(i/2)*i_,lateral:n_[i%2]}}function Nu(i,e,t){let n=e-i;return n>t/2?n-=t:n<-t/2&&(n+=t),n}function s_({scene:i,physics:e,jugador:t,rivales:n,slotJugador:o,dificultad:s,alEvento:a}){const r=e.totalLength,l=e.sampleTrackAtArcLength,c=e.startFinishArc,d={index:0,sector:1,position:new L,tangent:new L,right:new L,normal:new L,bankDeg:0,signedCurvature:0,slope:0},h={...d,position:new L,tangent:new L,right:new L,normal:new L},f=new L,p=new Vt,v=new Yn,S=new Yn;new L(0,0,1);let m=0,u=!1,g=.38;const M=n.length+1,w=[];for(let F=0;F<M;F++)w.push(Pd(F));const A=w.filter((F,H)=>H!==o),y={id:"jugador",esJugador:!0,piloto:t.piloto,vehiculo:t.vehiculo,nombre:t.piloto.nombre,color:t.piloto.color,progreso:-w[o].offset,ultimaS:e.state.s,vuelta:1,llego:!1,tiempo:null,vueltas:[],inicioVuelta:0,stats:pr(t.vehiculo,t.piloto)},C=n.map((F,H)=>{const Q=A[H],Y=pr(F.vehiculo,F.piloto),ge=i0({tipo:F.vehiculo.tipo,color:F.piloto.color,colorSecundario:16251388,colorCasco:F.piloto.casco??F.piloto.color,colorTraje:F.piloto.traje,tocado:F.piloto.tocado,numero:String(H+2),conLuces:!1});ge.kartRoot.scale.setScalar(g),i.add(ge.kartRoot);const V=(c-Q.offset+r)%r;return{id:F.piloto.id,esJugador:!1,piloto:F.piloto,vehiculo:F.vehiculo,nombre:F.piloto.nombre,color:F.piloto.color,stats:Y,modelo:ge,s:V,ultimaS:V,progreso:-Q.offset,lateral:Q.lateral,lateralObjetivo:Q.lateral,carril:(Math.random()-.5)*.006,velocidad:0,giro:0,inclinacion:0,turbo:0,rebufo:!1,espera:0,despiste:0,fase:Math.random()*Math.PI*2,ritmoPropio:.985+Math.random()*.03,reaccion:.05+Math.random()*.25,vuelta:1,llego:!1,tiempo:null,vueltas:[],inicioVuelta:0}}),_=[y,...C];function b(F,H){const Q=l(F.s,d);F.modelo.kartRoot.position.copy(Q.position).addScaledVector(Q.right,F.lateral).addScaledVector(Q.normal,3e-4),f.crossVectors(Q.normal,Q.tangent).normalize(),p.makeBasis(f,Q.normal,Q.tangent),v.setFromRotationMatrix(p);const Y=$e.clamp(-Q.signedCurvature*.45+(F.lateralObjetivo-F.lateral)*25,-.45,.45);F.giro=$e.lerp(F.giro,Y,Math.min(1,H*7)),S.setFromAxisAngle(Q.normal,$e.clamp(F.giro*.22,-.15,.15)),F.modelo.kartRoot.quaternion.copy(S.multiply(v));const ge=$e.clamp(Q.signedCurvature*.4*Math.min(1,F.velocidad/.12),-.55,.55);F.inclinacion=$e.lerp(F.inclinacion,ge,Math.min(1,H*6)),F.modelo.updateKartVisuals(H,{speed:F.velocidad,steerAngle:F.giro,steerInput:-F.giro/.45,leanAngle:F.inclinacion,boostActive:F.turbo>0||F.rebufo?1:0,isDrifting:Math.abs(Q.signedCurvature)>.9&&F.velocidad>.15,normal:Q.normal,right:Q.right,tangent:Q.tangent})}for(const F of C)b(F,.016);function x(F){const H=Math.min(os,Math.max(1,Math.floor(F.progreso/r)+1));if(!F.llego&&F.progreso>=os*r){F.llego=!0,F.tiempo=m,F.vueltas.push(m-F.inicioVuelta),a({tipo:"meta",corredor:F});return}H>F.vuelta&&(F.vueltas.push(m-F.inicioVuelta),F.inicioVuelta=m,F.vuelta=H,a({tipo:"vuelta",corredor:F,vuelta:H}))}function R(){return[..._].sort((F,H)=>F.llego&&H.llego?F.tiempo-H.tiempo:F.llego?-1:H.llego?1:H.progreso-F.progreso)}const U=e.state;function O(F,H,Q){if(F.llego)F.velocidad=$e.lerp(F.velocidad,.12,Math.min(1,H*1.5));else if(m<F.reaccion)F.velocidad=0;else{const ge=l(F.s,d);let V=Math.abs(ge.signedCurvature);for(const Pe of[.03,.06,.1])V=Math.max(V,Math.abs(l(F.s+Pe,h).signedCurvature)*(1-Pe*3));const te=F.stats;let q=.25*te.velocidad*s.ritmo*F.ritmoPropio*(1+Math.sin(m*1.3+F.fase)*.025);q*=1-$e.clamp((V-.5)/2,0,1)*.2/Math.sqrt(te.agarre),V<.2&&(q*=1.04),q*=$e.clamp(1-ge.slope*.35,.85,1.1),F.rebufo&&(q*=1.12),F.turbo>0?(F.turbo-=H,q=Math.max(q,.3*te.velocidad)):V<.25&&Math.random()<1-Math.exp(-H*.18*te.turbo)&&(F.turbo=.7+Math.random()*.5*te.turbo),F.despiste>0?(F.despiste-=H,q*=.72):Math.random()<1-Math.exp(-H*.05*s.errores)&&(F.despiste=.5+Math.random()*.5);const pe=y.progreso-F.progreso;y.llego||(q*=1+$e.clamp(pe/1.5,-.04,.05)),F.progreso<Q-.6&&(q*=1.02);const se=.5*te.aceleracion;F.velocidad<q?F.velocidad=Math.min(q,F.velocidad+se*H):F.velocidad=Math.max(q,F.velocidad-.7*H)}const Y=F.s;F.s=(F.s+F.velocidad*H)%r,u&&(F.progreso+=Nu(Y,F.s,r),x(F))}function N(F){const H=_.map(Q=>Q.esJugador?{c:Q,s:U.s,lat:U.lateralOffset,v:U.speed,peso:y.stats.peso}:{c:Q,s:Q.s,lat:Q.lateral,v:Q.velocidad,peso:Q.stats.peso});for(const Q of H){if(Q.c.esJugador)continue;const Y=Q.c;let ge=null,V=.065;for(const te of H){if(te===Q)continue;const $=(te.s-Q.s+r)%r;$>.003&&$<V&&(V=$,ge=te)}Y.rebufo=!1,ge&&V<.045&&Math.abs(Y.lateral-ge.lat)<.0038?(Y.rebufo=!0,Y.espera<=0&&(Y.espera=1.4,Y.lateralObjetivo=ge.lat<=0?.0038:-.0038)):Y.espera<=0&&(Y.lateralObjetivo=$e.clamp(Y.carril+Math.sin(m*.9+Y.fase)*.0018,-.004,.004)),Y.espera=Math.max(0,Y.espera-F)}for(let Q=0;Q<H.length;Q++)for(let Y=Q+1;Y<H.length;Y++){const ge=H[Q],V=H[Y],te=Math.min((V.s-ge.s+r)%r,(ge.s-V.s+r)%r);if(te>.016)continue;const $=V.lat-ge.lat,q=.0042;if(Math.abs($)>=q)continue;const pe=q-Math.abs($),se=$>=0?1:-1,Pe=ge.peso+V.peso,de=pe*Math.min(1,F*14);k(ge,-se*de*(V.peso/Pe)),k(V,se*de*(ge.peso/Pe));const j=(V.s-ge.s+r)%r<r/2?ge:V;j.c.esJugador?te<.012&&(U.speed*=1-Math.min(.5,F*3)):j.c.velocidad*=1-Math.min(.5,F*2.5),(ge.c.esJugador||V.c.esJugador)&&a({tipo:"roce"})}}function k(F,H){F.c.esJugador?U.lateralOffset=$e.clamp(U.lateralOffset+H,-.0088,.0088):F.c.lateral=$e.clamp(F.c.lateral+H,-.0062,.0062),F.lat+=H}let z=_.map(F=>F.id);function K(F){u&&(m+=F);const H=U.s;u&&(y.progreso+=Nu(y.ultimaS,H,r),x(y)),y.ultimaS=H;const Q=Math.max(..._.map($=>$.progreso));if(u){N(F);for(const $ of C)O($,F,Q)}for(const $ of C)$.lateral=$e.lerp($.lateral,$.lateralObjetivo,Math.min(1,F*3.2)),$.lateral=$e.clamp($.lateral,-.0062,.0062),b($,F);const ge=R().map($=>$.id),V=z.indexOf("jugador"),te=ge.indexOf("jugador");u&&te!==V&&a({tipo:te<V?"adelanta":"pierde",puesto:te+1}),z=ge}function he(){for(const F of C){if(F.llego)continue;const H=os*r-F.progreso;F.llego=!0,F.tiempo=m+H/Math.max(.12,F.velocidad||.18)}}function J(F){g=F;for(const H of C)H.modelo.kartRoot.scale.setScalar(F)}function ie(){for(const F of C)i.remove(F.modelo.kartRoot),F.modelo.dispose()}return{yo:y,rivales:C,todos:_,get reloj(){return m},get enMarcha(){return u},arrancar(){u=!0,m=0},paso:K,clasificacion:R,cerrar:he,setEscala:J,destruir:ie,sparkPoints:C.map(F=>F.modelo.sparkPoints)}}function a_(){const i=document.getElementById("cine"),e=i.querySelector(".cine-titulo"),t=document.getElementById("cine-antetitulo"),n=document.getElementById("cine-titulo"),o=document.getElementById("cine-subtitulo"),s=document.getElementById("cine-rotulo");let a=null;return{mostrar(){i.classList.remove("oculto"),i.classList.add("entrando"),requestAnimationFrame(()=>requestAnimationFrame(()=>i.classList.remove("entrando")))},ocultar(){i.classList.add("oculto"),e.classList.remove("visible"),s.classList.remove("visible"),a=null},titulo(r,l,c){if(!r&&!l){e.classList.remove("visible");return}t.textContent=r||"",n.textContent=l||"",o.textContent=c||"",e.classList.remove("visible"),requestAnimationFrame(()=>e.classList.add("visible"))},rotulo(r){if(r!==a){if(a=r,!r){s.classList.remove("visible");return}s.innerHTML=r,s.classList.add("visible")}}}}let Gi=null;function Ya(i,e=1){if(!i)return;try{Gi=Gi||new(window.AudioContext||window.webkitAudioContext),Gi.state==="suspended"&&Gi.resume()}catch{return}const t=[[1,.5],[2,.28],[2.76,.2],[5.4,.1],[8.9,.05]],n=392;for(let o=0;o<e;o++){const s=Gi.currentTime+o*.55,a=Gi.createGain();a.gain.value=.18,a.connect(Gi.destination);for(const[r,l]of t){const c=Gi.createOscillator();c.type="sine",c.frequency.value=n*r*(o%2?.75:1);const d=Gi.createGain();d.gain.setValueAtTime(1e-4,s),d.gain.exponentialRampToValueAtTime(l,s+.01),d.gain.exponentialRampToValueAtTime(1e-4,s+2.6/Math.sqrt(r)),c.connect(d),d.connect(a),c.start(s),c.stop(s+3)}}}const wl=.38,ts=matchMedia("(pointer: coarse)").matches,Sl=window.parent&&window.parent!==window,Fu=["alta","media","baja"],r_={1:50,2:30,3:20};function l_(){try{const i=JSON.parse(localStorage.getItem(Ed)||"null");if(i&&typeof i=="object")return{ajustes:{calidad:"auto",camara:"persecucion",sonido:!0,autoAcelerar:!1,cinematicas:!0,...i.ajustes},sel:i.sel||null,trofeos:i.trofeos||{},mejores:i.mejores||{},puntosCircuito:i.puntosCircuito||{},calidadAuto:i.calidadAuto||null}}catch{}return{ajustes:{calidad:"auto",camara:"persecucion",sonido:!0,autoAcelerar:ts,cinematicas:!0},sel:null,trofeos:{},mejores:{},puntosCircuito:{},calidadAuto:null}}function Ou(i){const e=i.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}const yl=i=>i*i*(3-2*i);async function c_(){var Tn;ts&&document.body.classList.add("es-tactil");const i=l_(),e=i.ajustes,t={modo:"copa",dif:1,piloto:"lucia",vehiculo:"kart",copa:"esperanza",mundo:"escritorio",reverso:!1,...i.sel||{}},n=()=>{try{localStorage.setItem(Ed,JSON.stringify({ajustes:e,sel:t,trofeos:i.trofeos,mejores:i.mejores,puntosCircuito:i.puntosCircuito,calidadAuto:i.calidadAuto}))}catch{}},o=j1(document.getElementById("canvas-container"));Sl&&document.body.classList.add("en-juma");let s="alta";function a(){s=e.calidad==="auto"?i.calidadAuto||(ts?"media":"alta"):e.calidad,o.setCalidad(s),C&&r(C)}function r(_e){const ye=s==="alta"?2048:1024;_e.traverse(De=>{De.isLight&&De.castShadow&&De.shadow&&De.shadow.mapSize.x!==ye&&(De.shadow.mapSize.set(ye,ye),De.shadow.map&&(De.shadow.map.dispose(),De.shadow.map=null))})}const l={t:0,cuadros:0};function c(_e){if(e.calidad!=="auto"||s==="baja"||(l.t+=_e,l.cuadros+=1,l.t<4))return;const ye=l.cuadros/l.t;l.t=0,l.cuadros=0,ye<38&&(i.calidadAuto=Fu[Fu.indexOf(s)+1],n(),a(),p.aviso("Gráficos más ligeros",1200))}function d(){let _e=0;for(const ye of Object.values(i.puntosCircuito))_e+=Number(ye)||0;for(const ye of Object.values(i.trofeos))_e+=r_[ye]||0;return _e}function h(){if(Sl)try{window.parent.postMessage({tipo:"juma-puntos",juego:"granpremio",total:d()},location.origin)}catch{}}const f=Y1(o);f.modo=e.camara;const p=J1(),v=a_(),S=t_(),m=$v();(Tn=m.preload)==null||Tn.call(m);let u=!1,g="menu",M=0,w=0,A=!1,y=null,C=null,_=null,b=null,x=null,R=null,U=null,O=null,N=null,k=null,z=0,K=-1,he=1,J=null;const ie=document.getElementById("btn-mute-sound");function F(){ie.classList.toggle("is-muted",!u),document.getElementById("icon-sound-on").classList.toggle("hidden",!u),document.getElementById("icon-sound-off").classList.toggle("hidden",u)}function H(_e){u=!!_e;try{m.setEnabled(u)}catch{}F()}ie.addEventListener("click",()=>{e.sonido=!u,H(e.sonido),n()});const Q=K1({alPausa:()=>Z(),alCamara:()=>Y(),alSonido:()=>ie.click(),alConfirmar:()=>{g!=="menu"&&["intro","parrilla","llegada","podio"].includes(g)&&T()}});document.getElementById("btn-camara").addEventListener("click",()=>Y()),document.getElementById("btn-pausa").addEventListener("click",()=>Z()),document.getElementById("cine").addEventListener("pointerdown",()=>T());function Y(){if(g!=="carrera"&&g!=="cuenta")return;const _e=f.siguienteModo();U==null||U.setCockpitRoadOnly(_e==="cabina"),p.aviso(`Cámara: ${q1[_e]}`,900),e.camara=_e,n()}const ge=e_({sel:t,ajustes:e,datos:i,alCambiarVitrina:(_e,ye)=>S.mostrarVehiculo(_e,ye),alJugar:_e=>{Object.assign(t,_e),n(),e.sonido&&H(!0),V(),t.modo==="copa"?pe(hr.find(ye=>ye.id===t.copa)||hr[0]):(N=null,k=$(),E({mundo:t.mundo,reverso:t.reverso}))},alAjuste:(_e,ye)=>{e[_e]=ye,_e==="calidad"&&a(),_e==="camara"&&(f.modo=ye),_e==="sonido"&&H(ye),n()},alSalir:Sl?()=>window.parent.postMessage({tipo:"juma-cerrar"},location.origin):null});async function V(){if(ts)try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen({navigationUI:"hide"}),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}function te(){g="menu",A=!1,Fe(),v.ocultar(),p.mostrar(!1),Ke(!1),de(),S.mostrarVitrina(),o.setEscena(S.scene),o.renderer.toneMappingExposure=.95,o.bloomPass.strength=.25,o.bloomPass.threshold=.9,ge.mostrar(!0,"inicio")}function $(){const _e=Ou(ss.filter(De=>De.id!==t.piloto)).slice(0,5),ye=Ou(as);return _e.map((De,it)=>({piloto:De,vehiculo:ye[it%ye.length]}))}function q(){return{piloto:ss.find(_e=>_e.id===t.piloto)||ss[0],vehiculo:as.find(_e=>_e.id===t.vehiculo)||as[0]}}function pe(_e){const ye=$(),De={jugador:0};for(const it of ye)De[it.piloto.id]=0;N={def:_e,indice:0,puntos:De,rivales:ye,resultados:[]},E(_e.carreras[0])}function se(){if(!N||N.indice===0)return 4;const _e=Object.entries(N.puntos).sort((ye,De)=>De[1]-ye[1]).map(([ye])=>ye);return Math.min(5,_e.indexOf("jugador"))}function Pe(_e){const ye=new $h;ye.camera=o.camera;const De=new L(0,-1,0),it=new L;for(const dt of _e)dt.updateMatrixWorld(!0);return(dt,yt,bt)=>{it.set(dt,bt-.007,yt),ye.set(it,De),ye.far=2;const Ht=ye.intersectObjects(_e,!0).filter(Wt=>Wt.object.isMesh&&Wt.object.visible&&!Wt.object.material.transparent);return Ht.length?Ht[0].point.y:0}}function de(){if(R){for(const _e of R.sparkPoints)o.quitarChispas(_e);R.destruir(),R=null}U&&(o.quitarChispas(U.sparkPoints),U.dispose(),U=null),C&&(C.traverse(_e=>{if(_e.geometry&&_e.geometry.dispose(),_e.material){const ye=Array.isArray(_e.material)?_e.material:[_e.material];for(const De of ye)De.dispose()}}),C.clear()),C=null,y=null,_=null,b=null,x=null}const X=document.getElementById("cargando"),j=document.getElementById("cargando-progreso");function G(_e,ye,De){X.classList.toggle("oculto",!_e),ye&&(document.getElementById("cargando-titulo").textContent=ye),De!==void 0&&(document.getElementById("cargando-cita").textContent=De)}const B=()=>new Promise(_e=>requestAnimationFrame(()=>setTimeout(_e,0)));async function E(_e){O=_e,ge.mostrar(!1),Fe(),p.mostrar(!1),v.ocultar(),g="cargando";const ye=tr(_e.mundo);G(!0,ye.nombre+(_e.reverso?" · Reverso":""),Du[_e.mundo]||""),j.style.width="10%",await B(),de(),j.style.width="25%",await B();const De=new $s;C=De,y=await D1[_e.mundo](De,{reverso:!!_e.reverso}),j.style.width="60%",await B(),_=jv(y.splineData,{...y.trackOpts,customStart:!0,groundAt:Pe(y.suelos)}),De.add(_.trackGroup),_.underTrackLedGroup&&De.add(_.underTrackLedGroup),b=c1(y.splineData),De.add(b.grupo),j.style.width="80%",await B();const it=q(),dt=N?N.rivales:k||$(),yt=se(),bt=Pd(yt);x=qv(y.splineData,{gridOffset:bt.offset,lateral:bt.lateral}),x.setVehicle(pr(it.vehiculo,it.piloto)),x.onRailImpact(Wt=>{var cn;f.temblar(Wt),u&&((cn=m.playRailImpact)==null||cn.call(m,Wt))}),U=i0({tipo:it.vehiculo.tipo,color:it.piloto.color,colorSecundario:16251388,colorCasco:it.piloto.casco??it.piloto.color,colorTraje:it.piloto.traje,tocado:it.piloto.tocado,numero:"1",conLuces:!0}),U.kartRoot.scale.setScalar(wl),De.add(U.kartRoot),o.agregarChispas(U.sparkPoints);let Ht=dt;N&&N.indice>0&&(Ht=[...dt].sort((Wt,cn)=>N.puntos[cn.piloto.id]-N.puntos[Wt.piloto.id])),R=s_({scene:De,physics:x,jugador:it,rivales:Ht,slotJugador:yt,dificultad:Sc[t.dif],alEvento:W});for(const Wt of R.sparkPoints)o.agregarChispas(Wt);ae(.016),o.setEscena(De),r(De),p.prepararMapa(y.splineData),p.reiniciar(),U.setCockpitRoadOnly(!1),x.state.countdownLocked=!0,j.style.width="100%",o.render(),await B(),G(!1),Me()}function ae(_e){const ye=x.state;U.kartRoot.position.copy(ye.position),U.kartRoot.quaternion.copy(ye.quaternion),U.updateKartVisuals(_e,ye)}function xe(_e){g=_e,M=0}function Me(){A=!1,he=1;const _e=tr(O.mundo),ye=N?`${N.def.nombre.toUpperCase()} · CARRERA ${N.indice+1} DE ${N.def.carreras.length}`:"CARRERA LIBRE";if(v.mostrar(),v.titulo(ye,_e.nombre+(O.reverso?" · Reverso":""),Du[O.mundo]||""),!e.cinematicas){oe(!0);return}xe("intro")}function oe(_e=!1){v.titulo(null),xe("parrilla"),_e&&(M=99)}function P(){v.ocultar(),p.mostrar(!0),Ke(ts),f.modo=e.camara,U.setCockpitRoadOnly(f.modo==="cabina"),K=-1,b.setVelas(0),xe("cuenta")}function T(){g==="intro"?oe():g==="parrilla"?P():g==="llegada"?ke():g==="podio"&&!Ze()&&Se()}function W(_e){var ye;if(_e.tipo==="vuelta"&&_e.corredor.esJugador){const De=_e.corredor.vueltas[_e.corredor.vueltas.length-1];p.parcial(`VUELTA ${_e.vuelta-1} · ${ao(De)}`),_e.vuelta===os&&p.aviso("¡Última vuelta!",1800),u&&((ye=m.playLapChime)==null||ye.call(m))}else if(_e.tipo==="meta"&&_e.corredor.esJugador)ne();else if(_e.tipo==="adelanta"||_e.tipo==="pierde"){if(g!=="carrera"||w-z<1.2||R.reloj<3)return;z=w,p.aviso(`${_e.puesto}º`,800,_e.tipo==="adelanta"?"bueno":"malo")}else _e.tipo==="roce"&&g==="carrera"&&f.temblar(.25)}function ne(){var dt;const _e=R.clasificacion().indexOf(R.yo)+1;x.setAutopilot(!0),p.mostrar(!1),U.setCockpitRoadOnly(!1),v.mostrar(),v.titulo("¡META!",_e===1?"¡Victoria!":`Puesto ${_e}º`,`Tiempo ${ao(R.yo.tiempo)}`),u&&((dt=m.playRaceFinishFanfare)==null||dt.call(m)),Ya(u,3);const ye=`${O.mundo}${O.reverso?"-r":""}`,De=R.yo.tiempo,it=i.mejores[ye];(!it||De<be(it))&&(i.mejores[ye]=ao(De),n()),xe("llegada"),he=.3,Ke(!1)}function be(_e){const[ye,De]=_e.split(":");return Number(ye)*60+Number(De)}let me=null;function ke(){R.cerrar();const _e=R.clasificacion();me=_e,N&&(_e.forEach((De,it)=>{N.puntos[De.esJugador?"jugador":De.piloto.id]+=Ml[it]||0}),N.resultados.push(_e)),p.mostrar(!1),v.mostrar();const ye=tr(O.mundo);v.titulo("PODIO",ye.nombre,_e[0].esJugador?"¡Ganaste la carrera!":`Ganó ${_e[0].nombre}`),S.mostrarPodio(_e.map(De=>({piloto:De.piloto,vehiculo:De.vehiculo})),!1),o.setEscena(S.scene),o.renderer.toneMappingExposure=.95,o.bloomPass.strength=.3,o.bloomPass.threshold=.9,Ya(u,2),xe("podio")}const Le=document.getElementById("panel"),He=document.getElementById("panel-card"),Ze=()=>!Le.classList.contains("oculto");function Ne(_e){He.innerHTML=_e,Le.classList.remove("oculto");const ye=He.querySelector(".welcome-start-btn");ye==null||ye.focus({preventScroll:!0})}function Fe(){Le.classList.add("oculto")}function ve(_e,ye,De){const it=_e.vehiculo;return`<div class="fila-res${_e.esJugador?" yo":""}">
      <span class="pos">${ye+1}º</span>
      <span class="nom"><span class="d" style="background:${ea(_e.piloto.color)}"></span>${_e.esJugador?`${_e.piloto.nombre} (tú)`:_e.piloto.nombre} <em>${it.nombre}</em></span>
      <span class="t">${De.tiempo??""}</span>
      <span class="pts">${De.pts??""}</span>
    </div>`}function Se(){v.ocultar();const _e=me,ye=_e.indexOf(R.yo)+1,De=`${O.mundo}${O.reverso?"-r":""}`,it=Ml[ye-1]||0;it>(i.puntosCircuito[De]||0)&&(i.puntosCircuito[De]=it,n()),h();const dt=_e.map((Ht,Wt)=>ve(Ht,Wt,{tiempo:ao(Ht.tiempo),pts:N?`+${Ml[Wt]||0}`:""})).join(""),yt=Math.min(...R.yo.vueltas);let bt;N?bt=N.indice<N.def.carreras.length-1?'<button class="welcome-start-btn" data-accion="siguiente" type="button"><span class="welcome-start-text">SIGUIENTE MUNDO ▸</span></button>':'<button class="welcome-start-btn" data-accion="copa" type="button"><span class="welcome-start-text">VER LA COPA</span></button>':bt='<button class="welcome-start-btn" data-accion="repetir" type="button"><span class="welcome-start-text">REPETIR</span></button>',Ne(`
      <div class="welcome-eyebrow">${N?`${N.def.nombre.toUpperCase()} · CARRERA ${N.indice+1} DE ${N.def.carreras.length}`:"CARRERA LIBRE"}</div>
      <h2>${ye===1?"¡Primer puesto!":`Puesto ${ye}º`}</h2>
      <div class="frase">${Ee(ye)}</div>
      <div class="tabla-res">${dt}</div>
      <p class="ayuda">Tu tiempo: <b>${ao(R.yo.tiempo)}</b> · Mejor vuelta: <b>${ao(yt)}</b></p>
      <div class="botones-panel">${bt}<button class="btn-sec" data-accion="menu" type="button">MENÚ</button></div>`)}function Ee(_e){return _e===1?"«He combatido el buen combate, he terminado la carrera» · 2 Tim 4,7":_e<=3?"«Corred de manera que lo obtengáis» · 1 Cor 9,24":"«Los últimos serán los primeros» · Mt 20,16"}function We(){const _e=Object.entries(N.puntos).sort((dt,yt)=>yt[1]-dt[1]).map(([dt,yt])=>{if(dt==="jugador")return{esJugador:!0,...q(),pts:yt};const bt=N.rivales.find(Ht=>Ht.piloto.id===dt);return{esJugador:!1,piloto:bt.piloto,vehiculo:bt.vehiculo,pts:yt}}),ye=_e.findIndex(dt=>dt.esJugador)+1,De=i.trofeos[N.def.id];(!De||ye<De)&&(i.trofeos[N.def.id]=ye,n()),h(),S.mostrarPodio(_e,!0),o.setEscena(S.scene),Ya(u,5),xe("copa");const it=ye===1?"¡Ganaste el Cáliz de Oro!":ye===2?"Cáliz de Plata":ye===3?"Cáliz de Bronce":"Sigue entrenando, peregrino";Ne(`
      <div class="welcome-eyebrow">${N.def.icono} ${N.def.nombre.toUpperCase()}</div>
      <h2>${it}</h2>
      <div class="frase">«Corramos con constancia la carrera que se nos propone» · Hb 12,1</div>
      <div class="tabla-res">${_e.map((dt,yt)=>ve(dt,yt,{pts:`${dt.pts} pts`})).join("")}</div>
      <div class="botones-panel">
        <button class="welcome-start-btn" data-accion="otra-copa" type="button"><span class="welcome-start-text">JUGAR OTRA VEZ</span></button>
        <button class="btn-sec" data-accion="menu" type="button">MENÚ</button>
      </div>`)}He.addEventListener("click",_e=>{const ye=_e.target.closest("button");if(!ye)return;const De=ye.dataset.accion;De==="siguiente"?(N.indice+=1,E(N.def.carreras[N.indice])):De==="copa"?We():De==="repetir"?E(O):De==="otra-copa"?pe(N.def):De==="menu"?te():De==="continuar"?Z(!1):De==="reiniciar"&&(A=!1,N&&N.resultados.length>N.indice&&N.resultados.pop(),E(O))});function Z(_e){["carrera","cuenta","llegada"].includes(g)&&(A=_e===void 0?!A:_e,A?Ne(`
        <div class="welcome-eyebrow">PAUSA</div>
        <h2>Un respiro</h2>
        <div class="frase">«Venid a mí todos los que estáis cansados» · Mt 11,28</div>
        <div class="botones-panel">
          <button class="welcome-start-btn" data-accion="continuar" type="button"><span class="welcome-start-text">SEGUIR</span></button>
          <button class="btn-sec" data-accion="reiniciar" type="button">REINICIAR</button>
          <button class="btn-sec" data-accion="menu" type="button">MENÚ</button>
        </div>`):Fe())}document.addEventListener("visibilitychange",()=>{document.hidden&&g==="carrera"&&Z(!0)});const Be=document.getElementById("girar"),Ve=document.getElementById("mobile-touch-controls");function Ke(_e){Ve.classList.toggle("hidden",!_e)}function re(){const _e=ts&&innerHeight>innerWidth&&["carrera","cuenta","intro","parrilla"].includes(g);Be.classList.toggle("oculto",!_e),_e&&g==="carrera"&&!A&&Z(!0)}window.addEventListener("resize",re);const ee=new L,Te=new L;function Ye(_e){const ye=y.tomas,De=x.sampleTrackAtArcLength,it=x.totalLength,dt=x.startFinishArc,yt=y.splineData.sectors||[];if(_e<3.2){const bt=yl(_e/3.2),Ht=ye[0];Te.fromArray(Ht.m),ee.fromArray(Ht.p).sub(Te).multiplyScalar(1.35-.35*bt).add(Te),ee.y+=(1-bt)*.08,f.toma(ee,Te,42),f.enfocarEn(Te,.3,!0),v.rotulo(null)}else if(_e<6.6){v.titulo(null);const bt=(_e-3.2)/3.4,Ht=dt+it*(.08+.32*bt);f.sobrevuelo(De,Ht,.016+.01*Math.sin(bt*3),.006*Math.sin(bt*2.4),.06,56),f.enfocarEn(De(Ht+.05).position,.8,!0);const Wt=De(Ht),cn=yt.find(Pn=>Pn.id===Wt.sector);v.rotulo(cn?`${cn.name}<small>SECTOR ${cn.id}</small>`:null)}else if(_e<9.6){const bt=(_e-6.6)/3,Ht=1+(N?N.indice:0)%Math.max(1,ye.length-1),Wt=ye[Ht]||ye[0];Te.fromArray(Wt.m),ee.fromArray(Wt.p).sub(Te),ee.applyAxisAngle(new L(0,1,0),(bt-.5)*.5).add(Te),f.toma(ee,Te,38),f.enfocarEn(Te,1,!0),v.rotulo(null)}else oe()}function ut(_e){const ye=[...R.todos].sort((In,Fn)=>In.progreso-Fn.progreso),De=.95,it=Math.floor(_e/De);if(it>=ye.length){P();return}const dt=ye[it],yt=(_e-it*De)/De,bt=dt.esJugador?U.kartRoot:dt.modelo.kartRoot,Ht=x.state,Wt=dt.esJugador?Ht:x.sampleTrackAtArcLength(dt.s),cn=dt.esJugador||dt.lateral>0?1:-1,Pn=-dt.progreso>.05?1:-1;Te.copy(bt.position).addScaledVector(Wt.normal,.003),ee.copy(bt.position).addScaledVector(Wt.tangent,Pn*(.016-yt*.006)).addScaledVector(Wt.right,-cn*(.013+yt*.002)).addScaledVector(Wt.normal,.006),f.toma(ee,Te,36),f.enfocarEn(Te,1.2,!0),v.rotulo(`<span class="marca" style="background:${ea(dt.piloto.color)}"></span>${dt.esJugador?`${dt.piloto.nombre} · TÚ`:dt.piloto.nombre}<small>${dt.vehiculo.nombre.toUpperCase()} · ${dt.piloto.habilidad.toUpperCase()}</small>`)}function gt(_e,ye){var dt,yt;const De=x.state,it=Math.min(5,Math.floor(_e/.8));if(it!==K&&_e<4&&(K=it,b.setVelas(it),it>=1&&p.cuenta(String(6-it)),it>=1&&u&&((dt=m.playF1CountdownBeep)==null||dt.call(m,!1))),_e>=4){b.setVelas(5,!0),p.cuenta("¡YA!"),setTimeout(()=>p.cuenta(""),700),u&&((yt=m.playF1CountdownBeep)==null||yt.call(m,!0)),Ya(u,1),x.state.countdownLocked=!1,x.notifyLightsOut(),R.arrancar(),xe("carrera");return}if(f.seguir(De,ye,w,{escala:wl,altoVehiculo:U.alto}),_e<1.4){const bt=yl(_e/1.4);ee.copy(De.position).addScaledVector(De.tangent,-.05).addScaledVector(De.normal,.035),f.camera.position.lerp(ee,1-bt),Te.copy(De.position).addScaledVector(De.tangent,.024*bt).addScaledVector(De.normal,.003),f.camera.lookAt(Te)}}function Ct(_e,ye){const De=x.state;if(_e<1.6){const it=_e*1.4+.6;Te.copy(De.position).addScaledVector(De.normal,.003),ee.copy(De.position).addScaledVector(De.right,Math.cos(it)*.02).addScaledVector(De.tangent,Math.sin(it)*.02).addScaledVector(De.normal,.008),f.toma(ee,Te,34),f.enfocarEn(Te,1.2,!0),he=.3}else if(_e<6.5){if(he=1,!J||w-J.t0>1.7){const it=De.s+.08,dt=x.sampleTrackAtArcLength(it),yt=Math.random()<.5?-1:1;J={t0:w,p:dt.position.clone().addScaledVector(dt.right,yt*.03).addScaledVector(dt.normal,.012)}}Te.copy(De.position).addScaledVector(De.normal,.003),f.toma(J.p,Te,30),f.enfocarEn(Te,1,!0)}else ke()}function Gt(_e){const ye=yl(Math.min(1,_e/4));ee.set(Math.sin(_e*.25)*.012,.034-ye*.006,.12-ye*.03),Te.set(0,.016,0),f.toma(ee,Te,36,.002),f.enfocarEn(Te,1.2,!0),_e>5.5&&!Ze()&&g==="podio"&&Se()}function un(_e){ee.set(Math.sin(_e*.2)*.012+.035,.019,.046),Te.set(0,.006,0),f.toma(ee,Te,36,.002),f.enfocarEn(Te,1.4,!0);const ye=f.camera,De=document.getElementById("menu-panel").getBoundingClientRect().width;if(innerWidth>760){const it=(De+innerWidth)/2/innerWidth;ye.setViewOffset(innerWidth,innerHeight,-(it-.5)*innerWidth,0,innerWidth,innerHeight)}else ye.view&&ye.view.enabled&&ye.clearViewOffset()}let gn=performance.now();function ln(_e){var dt;requestAnimationFrame(ln);let ye=(_e-gn)/1e3;gn=_e,ye>0||(ye=0),ye=Math.min(ye,.05),w+=ye;const De=f.camera;if(g!=="menu"&&De.view&&De.view.enabled&&De.clearViewOffset(),g==="menu"||g==="cargando"){S.actualizar(w,ye),g==="menu"&&un(w),g==="menu"&&o.render();return}if(g==="podio"||g==="copa"){M+=ye,S.actualizar(w,ye),Gt(M),o.render();return}if(!y||!x)return;if(A){o.render();return}const it=ye*he;if(M+=ye,g==="carrera"&&!R.yo.llego){const yt=Q.leer();e.autoAcelerar&&!yt.freno&&(yt.acel=!0),x.setInput(yt)}else{const yt=Q.leer();x.setInput({acel:g==="cuenta"&&(yt.acel||e.autoAcelerar)})}g!=="intro"&&g!=="parrilla"&&x.stepPhysics(it),R.paso(it),ae(it),y.actualizar(w,it,{renderer:o.renderer,bloomPass:o.bloomPass}),(dt=_.updateUnderTrackLed)==null||dt.call(_,w,1),b.animar(w,ye),g==="intro"?Ye(M):g==="parrilla"?ut(M):g==="cuenta"?gt(M,ye):g==="carrera"?f.seguir(x.state,ye,w,{escala:wl,altoVehiculo:U.alto}):g==="llegada"&&Ct(M),(g==="carrera"||g==="cuenta")&&p.actualizar(x.state,R,R.reloj),g==="carrera"&&c(ye),u&&m.update(x.state),re(),o.render()}window.__juego={get estado(){return g},get carrera(){return R},get physics(){return x},get copa(){return N},get sel(){return t},get render(){return o},get escena(){return C},saltar:T,empezarCarrera:E,empezarCopa:pe,irAlMenu:te,alternarPausa:Z,set escalaTiempo(_e){he=_e},set tEstado(_e){M=_e},darSalida(){(g==="intro"||g==="parrilla")&&P(),g==="cuenta"&&gt(4,.016)},simular(_e){if(!(!x||!R)){x.setAutopilot(!0);for(let ye=0;ye<_e*60&&g==="carrera";ye++)x.stepPhysics(1/60),R.paso(1/60);ae(1/60)}}},a(),F(),te(),requestAnimationFrame(ln)}c_().catch(i=>{console.error("No se pudo iniciar el Gran Premio de la Fe:",i)});
