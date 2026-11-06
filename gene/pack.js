// Agrupa los mp3 en paquetes para la versión publicada (límite de archivos por versión).
const fs=require('fs'),path=require('path');const D=__dirname,out=path.join(D,'build','packs');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
const body=fs.readFileSync(path.join(D,'build','body.html'),'utf8');const ids=[];for(const m of body.matchAll(/audio\/([a-z0-9]+)\.mp3/g))if(!ids.includes(m[1]))ids.push(m[1]);
const MAX=3.2*1048576;const P={f:[],i:{}};let cur=[],size=0;const flush=()=>{if(!cur.length)return;const n=P.f.length,name=`packs/p${String(n).padStart(2,'0')}.mp3`;let off=0;const bufs=cur.map(id=>{const b=fs.readFileSync(path.join(D,'audio',id+'.mp3'));P.i[id]=[n,off,b.length];off+=b.length;return b});fs.writeFileSync(path.join(D,'build',name),Buffer.concat(bufs));P.f.push(name);cur=[];size=0};
for(const id of ids){const s=fs.statSync(path.join(D,'audio',id+'.mp3')).size;if(size+s>MAX)flush();cur.push(id);size+=s}flush();
fs.writeFileSync(path.join(D,'build','body_pub.html'),body.replace('<script>',()=>`<script>var PACKS=${JSON.stringify(P)};</script><script>`));
console.log(`paquetes ${P.f.length}, audios ${ids.length}`);console.log(JSON.stringify(P.f.map(f=>({path:f}))));
