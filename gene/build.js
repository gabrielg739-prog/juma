// Construye gene/index.html (documento completo) y build/body.html (para publicar como artifact).
// Uso: node build.js
const fs=require('fs'),path=require('path'),vm=require('vm'),temml=require('temml');
const R=p=>fs.readFileSync(path.join(__dirname,p),'utf8');
const VOICE='es_MX-claude-high';
const ctx=vm.createContext({console});
for(const f of ['src/defs.js','src/data/c1.js','src/data/c2.js','src/data/c4.js','src/data/fin.js','src/data/extra.js','src/data/refs.js','src/data/checks.js','src/data/cuaderno.js','src/data/resumen.js','src/data/flash.js'])vm.runInContext(R(f),ctx,{filename:f});
const get=e=>vm.runInContext(e,ctx);
let DATA=get('DATA');const CH=get('CH'),CHECKS=get('CHECKS'),NOTES=get('NOTES'),NOTE_KIND=get('NOTE_KIND'),RES=get('RES'),FC=get('FC'),spoken=get('spoken'),hsh=get('hsh'),TL=get('TL'),QS=get('QS'),OPEN=get('OPEN'),TOP=get('TOP'),REFS=get('REFS');
// Preguntas de control: se insertan tras su escena
CHECKS.forEach(c=>{const i=DATA.findIndex(s=>s.k==='l'&&s.q===c.after);if(i<0){console.error('Ancla no encontrada:',c.after);process.exitCode=1;return}DATA.splice(i+1,0,{k:'c',ch:DATA[i].ch,id:hsh(c.q),q:c.q,o:c.o,a:c.a,w:c.w,lines:[[c.q]]})});
// Orden pedagógico de las secciones
const ORD=['inicio','c1','c1a','c1b','c1c','c2','c2a','c2b','c2c','c2d','c2e','c4','c4a','c4b','c4c','c4d','c4e','c4f','r','rs','cu','e1','e2','e4','quiz1','quiz2','quiz3'];
DATA=DATA.map((s,i)=>[s,i]).sort((a,b)=>(ORD.indexOf(a[0].ch)-ORD.indexOf(b[0].ch))||a[1]-b[1]).map(x=>x[0]);
Object.values(NOTES).forEach(N=>{N.eqh=N.items.map(it=>it[2]?temml.renderToString(it[2],{displayMode:false}):null)});
// Orden de capítulos según aparición
const order=[];DATA.forEach(s=>{if(!order.includes(s.ch))order.push(s.ch)});const CH2={};order.forEach(k=>CH2[k]=CH[k]||k);
// Ecuaciones a MathML
let neq=0;DATA.forEach(s=>{if(s.eq){s.eqh=s.eq.map(e=>{neq++;try{return temml.renderToString(e[0],{displayMode:true,throwOnError:true})}catch(err){console.error('LaTeX:',e[0],err.message);process.exitCode=1;return '<code>'+e[0]+'</code>'}})}});
// Segmentos de audio por escena (separados por las pausas de "piénsalo")
const jobs=[];const keyLines=s=>s.k==='l'&&s.key?[...s.lines,['Idea clave: '+s.key]]:s.lines;
DATA.forEach(s=>{const L=keyLines(s);const segs=[[]];L.forEach(l=>{if(l[0]&&l[0].think)segs.push([]);else segs[segs.length-1].push(spoken(l[0]))});s._segs=segs.map(texts=>{const id=hsh(VOICE+'|'+texts.join('\n'));jobs.push({id,texts});return id})});
// Frases sueltas de las pestañas interactivas
const clipT=new Set();TL.forEach(e=>clipT.add(`${e[0]}. ${e[1]}. ${e[2]}`));QS.forEach(q=>{clipT.add(q.q);clipT.add('¡Correcto! '+q.w);clipT.add('No exactamente. '+q.w)});OPEN.forEach(o=>clipT.add('Compárala con la tuya. Respuesta modelo: '+o[1]));
DATA.filter(s=>s.k==='c').forEach(c=>{clipT.add('¡Correcto! '+c.w);clipT.add('No exactamente. La respuesta correcta es: '+c.o[c.a]+'. '+c.w)});FC.forEach(f=>{clipT.add(f[1]);clipT.add(f[2])});
const views=R('src/views.js')+R('src/views2.js');for(const m of views.matchAll(/say\('([^'`$]+)'/g))clipT.add(m[1]);clipT.add('Responde con tus palabras. Yo te corrijo.');clipT.add('Responde con tus palabras. Luego comparas con la respuesta modelo.');
const clips=[...clipT].map(t=>{const sp=spoken(t);return{id:hsh(VOICE+'|clip|'+sp),key:hsh(sp),texts:[sp]}});clips.forEach(c=>jobs.push({id:c.id,texts:c.texts}));
fs.mkdirSync(path.join(__dirname,'build'),{recursive:true});fs.writeFileSync(path.join(__dirname,'build/tts_jobs.json'),JSON.stringify(jobs));
// Manifiesto de audio (lo genera tts.py)
let man={};try{man=JSON.parse(R('audio/manifest.json'))}catch(e){}
let have=0;DATA.forEach(s=>{const a=s._segs.map(id=>man[id]?{f:'audio/'+id+'.mp3',t:man[id]}:null);if(a.every(Boolean)){s.aud=a;have++}delete s._segs;delete s.eq_src});
const CLIPS={};clips.forEach(c=>{if(man[c.id])CLIPS[c.key]='audio/'+c.id+'.mp3'});
// Ensamblado
const data=`var DATA=${JSON.stringify(DATA)};var CH=${JSON.stringify(CH2)};var REFS=${JSON.stringify(REFS)};var CLIPS=${JSON.stringify(CLIPS)};var TL=${JSON.stringify(TL)},TOP=${JSON.stringify(TOP)},QS=${JSON.stringify(QS)},OPEN=${JSON.stringify(OPEN)},NOTES=${JSON.stringify(NOTES)},NOTE_KIND=${JSON.stringify(NOTE_KIND)},RES=${JSON.stringify(RES)},FC=${JSON.stringify(FC)};\n`;
const defsRuntime=R('src/defs.js').replace(/var DATA=\[\],CH=\{\},CLIPS_TXT=\[\];/,'var CLIPS_TXT=[];');
const js=[R('src/helpers.js'),defsRuntime,data,R('src/viz.js'),R('src/viz2.js'),R('src/avatar.js'),R('src/engine.js'),R('src/views.js'),R('src/views2.js')].join('\n');
const body=R('src/shell.html').replace('/*CSS*/',()=>R('src/style.css')).replace('/*JS*/',()=>js);
fs.writeFileSync(path.join(__dirname,'build/body.html'),body);
fs.writeFileSync(path.join(__dirname,'index.html'),'<!doctype html>\n<html lang="es"><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head><body>\n'+body+'\n</body></html>\n');
const words=jobs.reduce((n,j)=>n+j.texts.join(' ').split(/\s+/).length,0);
console.log(`escenas ${DATA.length}, ecuaciones ${neq}, segmentos de audio ${jobs.length} (${have} escenas con audio), palabras ${words}, ~${Math.round(words/150)} min de narración, página ${(body.length/1024).toFixed(0)} KB`);
