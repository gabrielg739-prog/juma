// Crea un único archivo HTML con todo incluido (audios en Opus incrustados).
// Uso: node bundle.js  (requiere ffmpeg y haber ejecutado build.js y tts.py)
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const D=__dirname,out=path.join(D,'build','opus');fs.mkdirSync(out,{recursive:true});
const man=JSON.parse(fs.readFileSync(path.join(D,'audio/manifest.json'),'utf8'));
const html=fs.readFileSync(path.join(D,'index.html'),'utf8');
const used=[...new Set([...html.matchAll(/audio\/([a-z0-9]+)\.mp3/g)].map(m=>m[1]))];
const AUDB={};let bytes=0;
for(const id of used){const o=path.join(out,id+'.webm');if(!fs.existsSync(o))execFileSync('ffmpeg',['-loglevel','error','-y','-i',path.join(D,'audio',id+'.mp3'),'-c:a','libopus','-b:a','20k','-ac','1','-application','voip',o]);const b=fs.readFileSync(o);bytes+=b.length;AUDB[id]=b.toString('base64')}
const inj=`<script>var AUDB=${JSON.stringify(AUDB)};</script>\n`;
const res=html.replace('<script>',()=>inj+'<script>');
const dest=path.join(D,'build','Gene-optimizacion.html');fs.writeFileSync(dest,res);
console.log(`audios ${used.length}, opus ${(bytes/1048576).toFixed(1)} MB, archivo ${(res.length/1048576).toFixed(1)} MB → ${dest}`);
