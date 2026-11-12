// Crea un único archivo HTML con todo incluido (audios en Opus incrustados).
// Uso: node bundle.js  (requiere ffmpeg y haber ejecutado build.js y tts.py)
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const OP=!!process.env.OPUS,D=__dirname,out=path.join(D,'build',OP?'opus10':'mp3');fs.mkdirSync(out,{recursive:true});
const man=JSON.parse(fs.readFileSync(path.join(D,'audio/manifest.json'),'utf8'));
const html=fs.readFileSync(path.join(D,'index.html'),'utf8');
const used=[...new Set([...html.matchAll(/audio\/([a-z0-9]+)\.mp3/g)].map(m=>m[1]))];
const AUDB={};let bytes=0;
for(const id of used){const o=path.join(out,id+(OP?'.webm':'.m.mp3'));if(!fs.existsSync(o))execFileSync('ffmpeg',['-loglevel','error','-y','-i',path.join(D,'audio',id+'.mp3'),'-ac','1',...(OP?['-ar','16000','-c:a','libopus','-b:a','10k','-application','voip','-vbr','on']:['-ar','16000','-c:a','libmp3lame','-b:a','24k']),o]);const b=fs.readFileSync(o);bytes+=b.length;AUDB[id]=b.toString('base64')}
const inj=`<script>var AUDT='${OP?'audio/webm':'audio/mpeg'}',AUDB=${JSON.stringify(AUDB)};</script>\n`;
const res=html.replace('<script>',()=>inj+'<script>');
const dest=path.join(D,'build',OP?'Gene-movil.html':'Gene-optimizacion.html');fs.writeFileSync(dest,res);
console.log(`audios ${used.length}, mp3 ${(bytes/1048576).toFixed(1)} MB, archivo ${(res.length/1048576).toFixed(1)} MB → ${dest}`);
