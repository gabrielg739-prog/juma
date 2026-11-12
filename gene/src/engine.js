/* ===== Motor de Gene ===== */
const S=DATA;
const letters=t=>{let i=0;return t.split(' ').map(w=>`<span style="white-space:nowrap;animation:none">${[...w].map(c=>`<span style="--i:${i++}">${c}</span>`).join('')}</span>`).join(' ')};
const spikePath=(()=>{let d='M0 60';for(let i=0;i<6;i++){const x=i*125;d+=` L${x+40} 60 L${x+52} 8 L${x+62} 84 L${x+72} 60 L${x+125} 60`}return d})();
function sceneHtml(s){
 if(s.k==='t')return`<h1 class="big">${letters(s.big)}</h1><p class="lead">${s.lead}</p><svg class="spike" viewBox="0 0 760 90"><path d="${spikePath}" fill="none" stroke="var(--acc)" stroke-width="5" stroke-linejoin="round"/></svg>`;
 if(s.k==='q'){return`<div class="qgrid ${s.viz||s.eqh?'two':''}"><div class="qcol"><h2 class="q" style="font-size:clamp(22px,2.6vw,33px)">${s.q}</h2><button class="gauge s" data-s="1" id="gauge" aria-label="Ver la respuesta ya"><svg viewBox="0 0 120 70"><path d="M12 60A48 48 0 0 1 108 60" fill="none" stroke="var(--line)" stroke-width="7"/><path d="M88 21A48 48 0 0 1 108 60" fill="none" stroke="var(--red)" stroke-width="7"/><line id="needle" x1="60" y1="60" x2="60" y2="16" stroke="var(--red)" stroke-width="3"/><circle cx="60" cy="60" r="5" fill="var(--ink)"/></svg><span>Piénsalo. Toca para ver ya.</span></button><div class="ans">${s.ans.map((a,i)=>`<div class="s ${a[1]||''}" data-s="${i+2}">${a[0]}</div>`).join('')}</div><div class="score s" data-s="99">¿La acertaste? <button data-ok="1">Sí</button><button data-ok="0" class="no">No</button></div></div>${s.viz?'<div class="viz" data-v></div>':s.eqh?`<div class="eqp">${s.eqh.map((m,i)=>`<div class="eq s" data-s="${s.eq[i][1]}">${m}${s.eq[i][2]?`<small>${s.eq[i][2]}</small>`:''}</div>`).join('')}</div>`:''}</div>`}
 if(s.k==='end')return endHtml();
 if(s.k==='c'){const st=ckStats();return`<div class="ckbadge">Pregunta de control</div><h2 class="q">${s.q}</h2><div class="opts">${s.o.map((o,i)=>`<button class="opt" data-i="${i}">${o}</button>`).join('')}</div><div class="fb" hidden></div><p class="hint">Responde para continuar. Llevas ${st.ok} correctas de ${st.n} respondidas.</p>`}
 const n=Math.max(0,...s.lines.map(l=>typeof l[1]==='number'?l[1]:0))+1;
 const who=s.who?`<div class="who ${s.big&&!s.viz?'big':''}">${s.who.map((w,k)=>personCard(w).replace('<figure class="pc"',`<figure class="pc" style="--k:${k}"`)).join('')}</div>`:'';
 const eq=s.eqh?`<div class="eqp ${!s.viz&&!s.bl?'big':''}">${s.eqh.map((m,i)=>`<div class="eq s" data-s="${s.eq[i][1]||0}">${m}${s.eq[i][2]?`<small>${s.eq[i][2]}</small>`:''}</div>`).join('')}</div>`:'';
 const bl=s.bl?`<ul class="bl">${s.bl.map(b=>`<li class="s" data-s="${b[1]||0}">${b[0]}</li>`).join('')}</ul>`:'';
 const code=s.code2?`<pre class="code s" data-s="${s.code2[1]||0}">${s.code2[0].replace(/&/g,'&amp;').replace(/</g,'&lt;')}</pre>`:'';
 const viz=s.viz?'<div class="viz" data-v></div>':'';const side=eq+bl+code;let main='';
 if(viz&&side)main=`<div class="lay ve">${viz}<div class="eqp" style="justify-content:flex-start">${side}</div></div>`;
 else if(viz)main=viz;
 else if(s.who&&s.big&&side)main=`<div class="lay pe">${who}<div class="eqp" style="justify-content:flex-start">${side}</div></div>`;
 else if(bl&&(eq||code))main=`<div class="lay ve">${bl}<div class="eqp">${eq}${code}</div></div>`;
 else main=`<div class="lay">${side}</div>`;
 return`${s.yr?`<div class="yr">${s.yr}</div>`:''}<h2 class="q">${s.q}</h2>${s.who&&!(s.big&&side&&!viz)?who:''}${main}${s.key?`<div class="say s" data-s="${n}"><b>Idea clave</b><span>${s.key}</span></div>`:''}${s.note?`<div class="note2 s" data-s="${n}">${s.note}</div>`:''}`}
S.forEach(s=>{if(s.k==='l'&&s.key)s.lines.push(['Idea clave: '+s.key,Math.max(0,...s.lines.map(l=>typeof l[1]==='number'?l[1]:0))+1,'happy'])});
S.push({k:'end',ch:'fin',lines:[['¡Terminamos todo el material! Toca un quiz para repetirlo, o ve al Laboratorio para experimentar tú.','','happy']]});
CH.fin='Final';
let qc={},qt={};S.forEach(s=>{if(s.k==='q')qt[s.ch]=(qt[s.ch]||0)+1});S.forEach(s=>{if(s.k==='q'){qc[s.ch]=(qc[s.ch]||0)+1;s.code=`${CH[s.ch].split(': ')[1].split(',')[0]} · pregunta ${qc[s.ch]} de ${qt[s.ch]}`}});

$('#startSlot').innerHTML=geneSvg('startV');$('#hostSlot').innerHTML=geneSvg('gene');
$('#startP').textContent='Te explico con detalle los capítulos 1, 2 y 4 de «Ingeniería de optimización»: la historia completa, cómo se plantea un problema y los métodos clásicos, con cada ejemplo y ecuación. Al final: resúmenes, puntos clave y todos los ejercicios resueltos.';
let ckWait=null,view='class',live=false,sampleFn=null,score={ok:0,no:0,streak:0};
let idx=0,line=0,token=0,playing=false,rendered=-1,muted=false,rate=1,voice=null,hasVoice=false,skip=false,keep=null,ctrl=null,stepNow=-1,prog={},simT=0,marks={},neural=true;
const body=document.body,dial=$('#dial'),cap=$('#cap'),vt=()=>document.getElementById('gene');
const P=k=>prog[k]||0;
function reveal(n){stepNow=n;dial.querySelectorAll('[data-s]').forEach(e=>{const d=+e.dataset.s,on=d<=n;if(on&&!e.classList.contains('on')&&n<99&&dial.scrollHeight>dial.clientHeight)setTimeout(()=>e.scrollIntoView({block:'nearest',behavior:'smooth'}),60);e.classList.toggle('on',on);e.classList.toggle('act',d===n||(n>=99&&false))});if(!playing)snap()}
function snap(){for(let k=0;k<=12;k++)prog[k]=vizStep()>=k?1:0;SNAP=true;try{if(ctrl&&ctrl.tick)ctrl.tick(simT,0,P,vizStep())}finally{SNAP=false}}
const vizStep=()=>view!=='class'?99:S[idx].k==='q'?(stepNow>=2?99:-1):stepNow;
function endHtml(){const rows=Object.keys(CH).filter(k=>k.startsWith('quiz')).map(k=>{let a=0,t=0;S.forEach((s,i)=>{if(s.ch===k&&s.k==='q'&&marks[i]!==undefined){t++;if(marks[i])a++}});return`<button data-go="${k}"><span>${CH[k].split(': ')[1]}</span><b>${t?a+' de '+t+' acertadas':'Sin marcar'}</b></button>`}).join('');return`<h1 class="big">${letters('¡Listo!')}</h1><p class="lead">Toca un quiz para repetirlo.</p><div class="endgrid">${rows}</div>`}
function render(i){const s=S[i],chg=rendered<0||S[rendered].ch!==s.ch;dial.innerHTML=`<canvas id="bgnet" aria-hidden="true"></canvas>${s.code?`<div class="where">${s.code}</div>`:''}<div class="scene">${sceneHtml(s)}</div>${chg&&rendered>=0?'<div class="wipe"></div>':''}`;dial.scrollTop=0;rendered=i;prog={};stepNow=-1;ctrl=null;const host=dial.querySelector('[data-v]');if(host&&s.viz&&V[s.viz])ctrl=V[s.viz](host);bgInit();
if(s.k==='c'){s.answered=false;dial.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answerCheck(s,+b.dataset.i))}const g=$('#gauge');if(g)g.onclick=()=>{skip=true};dial.querySelectorAll('.score button').forEach(b=>{if(marks[i]!==undefined&&(+b.dataset.ok===1)===marks[i])b.classList.add('sel');b.onclick=()=>{marks[i]=b.dataset.ok==='1';dial.querySelectorAll('.score button').forEach(x=>x.classList.toggle('sel',x===b))}});dial.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(S.findIndex(x=>x.ch===b.dataset.go),true));
const w=dial.querySelector('.wipe');if(w)setTimeout(()=>w.remove(),800);updateNav()}
function updateNav(){[...$('#seg').children].forEach((b,i)=>{b.className=(b.dataset.g?'gap ':'')+(i<idx?'done':i==idx?'cur':'')});$('#chap').value=S[idx].ch;$('#pos').textContent=`${idx+1} / ${S.length}`;try{if(location.hash.slice(1)!==S[idx].ch&&S[idx].ch!=='inicio')history.replaceState(null,'','#'+S[idx].ch)}catch(e){}}
let moodT=0;function mood(m,hold=0){const v=vt();if(!v)return;v.classList.remove('think','happy','warn','point','sad');if(m)v.classList.add(m);moodT=hold?performance.now()+hold:0}
/* fondo: malla neuronal tenue */
let bgN=[],bgC=null;function bgInit(){bgC=document.getElementById('bgnet');if(!bgC)return;bgN=Array.from({length:26},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.02,vy:(Math.random()-.5)*.02}))}
function bgDraw(dt){if(!bgC||REDUCED)return;const r=bgC.getBoundingClientRect(),W=Math.round(r.width),H=Math.round(r.height);if(!W||!H)return;if(bgC.width!==W){bgC.width=W;bgC.height=H}const g=bgC.getContext('2d');g.clearRect(0,0,W,H);const col=getComputedStyle(document.documentElement).getPropertyValue('--line').trim()||'#ccc';g.strokeStyle=col;g.fillStyle=col;bgN.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<0||p.x>1)p.vx*=-1;if(p.y<0||p.y>1)p.vy*=-1});for(let i=0;i<bgN.length;i++){const a=bgN[i];g.beginPath();g.arc(a.x*W,a.y*H,2.2,0,7);g.fill();for(let j=i+1;j<bgN.length;j++){const b=bgN[j],d=Math.hypot((a.x-b.x)*W,(a.y-b.y)*H);if(d<170){g.globalAlpha=1-d/170;g.beginPath();g.moveTo(a.x*W,a.y*H);g.lineTo(b.x*W,b.y*H);g.stroke();g.globalAlpha=1}}}}
/* ===== Audio: voz neuronal pregrabada con respaldo a la voz del navegador ===== */
const AU=new Audio();AU.preload='auto';let actx=null,anal=null,abuf=null,segStop=null,level=0;
function ensureAnalyser(){if(actx||location.protocol==='file:')return;try{actx=new (window.AudioContext||window.webkitAudioContext)();const src=actx.createMediaElementSource(AU);anal=actx.createAnalyser();anal.fftSize=512;abuf=new Uint8Array(anal.fftSize);src.connect(anal);anal.connect(actx.destination)}catch(e){actx=null;anal=null}}
function audLevel(){if(AU.paused)return 0;if(anal){anal.getByteTimeDomainData(abuf);let s=0;for(let i=0;i<abuf.length;i++){const v=(abuf[i]-128)/128;s+=v*v}return Math.min(1,Math.sqrt(s/abuf.length)*4.5)}return .45+.4*Math.abs(Math.sin(performance.now()/95))*Math.abs(Math.sin(performance.now()/233))}
function stopAudio(){try{AU.pause()}catch(e){}if(segStop){const f=segStop;segStop=null;f('stop')}}
function stopSpeech(){try{window.speechSynthesis&&speechSynthesis.cancel()}catch(e){}stopAudio()}
const wait=(ms,tok)=>new Promise(r=>{const t0=performance.now();(function f(){if(tok!==token||skip||performance.now()-t0>=ms)return r();setTimeout(f,50)})()});
let sp=null;
function chunks(t){const out=[];t.split(/(?<=[.!?:;])\s+/).forEach(x=>{if(x.length<190){out.push(x);return}let c='';x.split(/(?<=,)\s+/).forEach(p=>{if((c+p).length>180&&c){out.push(c);c=p}else c=c?c+' '+p:p});if(c)out.push(c)});return out.filter(x=>x.trim())}
function playFile(src,tok,ontime){return new Promise(res=>{let done=false;const fin=r=>{if(done)return;done=true;segStop=null;AU.onended=AU.onerror=AU.ontimeupdate=null;res(r)};segStop=fin;AU.onended=()=>fin('ok');AU.onerror=()=>fin('err');AU.ontimeupdate=()=>{if(tok!==token){AU.pause();fin('stop');return}ontime&&ontime(AU.currentTime)};AU.playbackRate=rate;try{AU.preservesPitch=true}catch(e){}resolveAudAsync(src).then(u=>{if(done)return;AU.src=u;AU.playbackRate=rate;AU.play().catch(()=>fin('err'))},()=>fin('err'))})}
function speakTTS(text,tok){const est=Math.max(1200,text.length*66/rate);sp={on:1};const fin=()=>{sp=null};if(muted||!hasVoice)return wait(est,tok).then(fin);
return new Promise(res=>{const ch=chunks(text);let n=0;const nx=()=>{if(tok!==token||n>=ch.length){fin();return res()}const part=ch[n++];const u=new SpeechSynthesisUtterance(part);keep=u;u.lang=voice?voice.lang:'es-MX';if(voice)u.voice=voice;u.rate=rate*.96;u.pitch=1.05;let done=false;const end=()=>{if(done)return;done=true;clearTimeout(wd);setTimeout(nx,70)};u.onend=end;u.onerror=end;const wd=setTimeout(end,part.length*66/rate*2.5+3000);speechSynthesis.speak(u)};nx()})}
/* Frases sueltas (pestañas interactivas): clip pregrabado si existe */
async function sayAudio(text,tok){const c=window.CLIPS&&CLIPS[hsh(spoken(text))];if(neural&&c&&!muted){const r=await playFile(c,tok);if(r!=='err')return}return speakTTS(spoken(text),tok)}
let last=performance.now(),nextBlink=performance.now()+1800,blink=0,gazeX=3,gazeY=0,gazeT=0;
function frame(now){const dtr=Math.min(.05,(now-last)/1000);last=now;const act=playing||live;const dt=act&&!REDUCED?dtr:0;if(act)simT+=dtr;
const vs=vizStep();for(let k=0;k<=12;k++){const tg=vs>=k?1:0,c=prog[k]||0;prog[k]=act?c+(tg-c)*Math.min(1,dtr*2.6):c;if(Math.abs(tg-prog[k])<.002)prog[k]=tg}
try{if(ctrl&&ctrl.tick)ctrl.tick(simT,dt,P,vs)}catch(e){console.error(e);ctrl=null}
bgDraw(dtr);
const v=vt();if(v){const talking=!AU.paused||!!sp;const lv=!AU.paused?audLevel():sp?.4+.4*Math.abs(Math.sin(now/90)):0;level+=(lv-level)*.4;v.classList.toggle('talking',talking);
if(now>nextBlink){blink=1;nextBlink=now+2200+Math.random()*3000}blink=Math.max(0,blink-dtr*7);v.querySelector('.lid').setAttribute('height',blink>.5?34:0);
if(now>gazeT){const l=Math.random();gazeX=l<.72?4:(l<.9?0:-3);gazeY=l<.72?(Math.random()*2):0;gazeT=now+900+Math.random()*1800}if(v.classList.contains('think')){gazeX=3;gazeY=-5}v.querySelector('.pup').setAttribute('transform',`translate(${gazeX} ${gazeY})`);
const b=talking?Math.sin(now/170)*1.2:0;const bob=v.querySelector('.bob');bob.style.transform=`translateY(${b}px) rotate(${talking?Math.sin(now/410)*1.2:0}deg)`;bob.style.transformOrigin='140px 95px';
animGene(v,now,dtr,level,talking);if(moodT&&now>moodT&&!v.classList.contains('think'))mood(null)}
requestAnimationFrame(frame)}requestAnimationFrame(frame);
async function think(s,tok){const n=$('#needle'),ms=(s.long?14000:7500)/rate;mood('think');cap.textContent='Piénsalo y responde en voz alta…';skip=false;if(n){n.style.transition='none';n.style.transform='rotate(-65deg)';n.getBoundingClientRect();n.style.transition=`transform ${ms}ms linear`;n.style.transform='rotate(65deg)'}await wait(ms,tok);skip=false;if(tok===token)mood('happy',1200)}
const stepAt=(s,l)=>{let st=-1;for(let k=0;k<=l;k++){const x=s.lines[k];if(x[0]&&x[0].think)st=Math.max(st,1);else if(typeof x[1]==='number')st=Math.max(st,x[1])}return st};
function showLine(s,li){const l=s.lines[li];reveal(stepAt(s,li));if(l[2])mood(l[2],l[2]==='point'?3500:2600);else if(typeof l[1]==='number'&&l[1]>0&&s.k!=='q')mood('point',1800);cap.textContent=l[0];line=li}
async function playScene(s,tok){while(line<s.lines.length){if(tok!==token)return;const l=s.lines[line];
 if(l[0].think){reveal(stepAt(s,line));await think(s,tok);if(tok!==token)return;line++;continue}
 let st=line;while(st>0&&!s.lines[st-1][0].think)st--;let end=line;while(end<s.lines.length&&!s.lines[end][0].think)end++;const seg=s.lines.slice(0,st).filter(x=>x[0].think).length;const a=s.aud&&s.aud[seg];
 if(neural&&!muted&&a){const ts=a.t,from=line;showLine(s,from);const r=await new Promise(res=>{playFile(a.f+(from>st?'#t='+ts[from-st].toFixed(2):''),tok,tt=>{let k=0;for(let j=0;j<ts.length;j++)if(tt>=ts[j]-.08)k=j;if(st+k!==line&&st+k>=from)showLine(s,st+k)}).then(res)});
  if(tok!==token)return;if(r==='ok'){line=end;continue}if(r==='stop')return;neural=false;$('#vmode').value='tts'}
 for(;line<end;line++){if(tok!==token)return;showLine(s,line);await speakTTS(spoken(s.lines[line][0]),tok)}}}
async function play(){const tok=++token;playing=true;body.classList.remove('paused');$('#play').textContent='Pausar';ensureAnalyser();try{actx&&actx.resume()}catch(e){}
while(idx<S.length){if(rendered!==idx){render(idx);mood(null)}const s=S[idx];await playScene(s,tok);if(tok!==token)return;
if(s.k==='c'){if(!s.answered){mood('think');cap.textContent='Elige una respuesta para continuar…';await new Promise(r=>{ckWait=r;(function f(){if(tok!==token||s.answered)return r();setTimeout(f,120)})()})}if(tok!==token)return;mood(s.ok?'happy':'sad',3000);cap.textContent=s.fbt;await sayAudio(s.fbt,tok);if(tok!==token)return;await wait(500,tok)}else if(s.k==='q'){reveal(99);await wait(1700,tok)}else await wait(s.k==='t'?300:800,tok);if(tok!==token)return;if(idx===S.length-1)break;idx++;line=0;mood(null)}
line=S[idx].lines.length-1;pause()}
function pause(){token++;playing=false;stopSpeech();sp=null;body.classList.add('paused');$('#play').textContent='Reproducir';const n=$('#needle');if(n){const c=getComputedStyle(n).transform;n.style.transition='none';n.style.transform=c}}
function go(i,auto=playing){token++;stopSpeech();sp=null;skip=false;idx=clamp(i,0,S.length-1);line=0;render(idx);mood(null);playing=false;reveal(-1);cap.textContent=S[idx].lines[0][0].think?'':S[idx].lines[0][0];if(auto)play();else{body.classList.add('paused');$('#play').textContent='Reproducir'}}
const seg=$('#seg');let lastc='';S.forEach((s,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Escena '+(i+1));if(s.ch!==lastc&&i)b.dataset.g=1;lastc=s.ch;b.onclick=()=>go(i);seg.appendChild(b)});
Object.entries(CH).forEach(([k,v])=>{const o=document.createElement('option');o.value=k;o.textContent=v;$('#chap').appendChild(o)});
$('#chap').onchange=e=>go(S.findIndex(s=>s.ch===e.target.value));$('#prev').onclick=()=>go(idx-1);$('#next').onclick=()=>go(idx+1);
$('#play').onclick=()=>{if(playing)pause();else{if(idx===S.length-1&&line>=S[idx].lines.length-1)go(0,false);play()}};
$('#rate').onchange=e=>{rate=+e.target.value;AU.playbackRate=rate};$('#mute').onclick=()=>{muted=!muted;$('#mute').textContent='Voz: '+(muted?'no':'sí');if(muted)stopSpeech()};
$('#vmode').onchange=e=>{neural=e.target.value==='neural';$('#vsel').hidden=neural||!hasVoice};$('#vsel').onchange=e=>{voice=voices[+e.target.value]||voice};
document.addEventListener('keydown',e=>{if(/SELECT|INPUT|TEXTAREA/.test(e.target.tagName)||!$('#start').classList.contains('hide')||view!=='class')return;if(e.code==='Space'&&e.target.tagName!=='BUTTON'){e.preventDefault();$('#play').click()}if(e.code==='ArrowRight')go(idx+1);if(e.code==='ArrowLeft')go(idx-1)});
let voices=[];function loadVoices(){if(!window.speechSynthesis)return;const all=speechSynthesis.getVoices();const es=all.filter(v=>/^es/i.test(v.lang));voices=es;if(!es.length)return;
const sc=v=>(/natural|neural/i.test(v.name)?12:0)+(/online|premium|enhanced/i.test(v.name)?8:0)+(/google/i.test(v.name)?5:0)+(/sabina|paola|paulina|m[oó]nica|dalia|elena|helena/i.test(v.name)?2:0)+(/espeak|compact/i.test(v.name)?-8:0)+(/419|MX|US|CO|AR/i.test(v.lang)?2:0);es.sort((a,b)=>sc(b)-sc(a));voice=es[0];hasVoice=true;const sel=$('#vsel');sel.innerHTML='';es.forEach((v,i)=>{const o=document.createElement('option');o.value=i;o.textContent=v.name.replace(/Microsoft |Google /,'');sel.appendChild(o)});sel.hidden=neural}
if(window.speechSynthesis){speechSynthesis.onvoiceschanged=loadVoices;loadVoices()}
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(CH[h]&&S[idx].ch!==h){const i=S.findIndex(s=>s.ch===h);if(i>=0)go(i)}});
const hh=location.hash.slice(1);if(CH[hh])idx=Math.max(0,S.findIndex(s=>s.ch===hh));render(idx);reveal(-1);cap.textContent=S[idx].lines[0][0];
$('#go').onclick=()=>{$('#start').classList.add('hide');ensureAnalyser();play()};

/* Preguntas de control */
let PR={ck:{},fc:{},exam:null};try{PR=Object.assign(PR,JSON.parse(localStorage.getItem('gene-progreso')||'{}'))}catch(e){}
function savePR(){try{localStorage.setItem('gene-progreso',JSON.stringify(PR))}catch(e){}}
function ckStats(){const v=Object.values(PR.ck);return{n:v.length,ok:v.filter(Boolean).length,total:S.filter(s=>s.k==='c').length}}
function answerCheck(s,i){if(s.answered)return;s.answered=true;s.ok=i===s.a;if(!(s.id in PR.ck)){PR.ck[s.id]=s.ok;savePR()}
 dial.querySelectorAll('.opt').forEach(b=>{b.disabled=true;if(+b.dataset.i===s.a)b.classList.add('good')});if(!s.ok)dial.querySelector(`.opt[data-i="${i}"]`).classList.add('bad');
 s.fbt=s.ok?'¡Correcto! '+s.w:'No exactamente. La respuesta correcta es: '+s.o[s.a]+'. '+s.w;const fb=dial.querySelector('.fb');fb.hidden=false;fb.className='fb '+(s.ok?'okf':'nof');fb.textContent=s.fbt;
 const st=ckStats();const h=dial.querySelector('.hint');if(h)h.textContent=`Llevas ${st.ok} correctas de ${st.n} respondidas (de ${st.total} preguntas de control).`;
 if(!playing){mood(s.ok?'happy':'sad',3000);say(s.fbt,s.ok?'happy':'sad').then(()=>{})}}

/* En el archivo descargable, los audios van incrustados (base64) y se convierten en blobs al usarse */
const AUDC={};function resolveAud(src){if(!window.AUDB)return src;const m=src.match(/audio\/([^.#]+)\.mp3(#.*)?$/);if(!m||!AUDB[m[1]])return src;if(!AUDC[m[1]]){const b=atob(AUDB[m[1]]),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);AUDC[m[1]]=URL.createObjectURL(new Blob([u],{type:window.AUDT||'audio/mpeg'}))}return AUDC[m[1]]+(m[2]||'')}

/* En la página publicada, los audios vienen agrupados en paquetes (pNN.bin) */
const PKC={};async function resolveAudAsync(src){if(!window.PACKS)return resolveAud(src);const m=src.match(/audio\/([^.#]+)\.mp3(#.*)?$/);const e=m&&PACKS.i[m[1]];if(!e)return src;if(!AUDC[m[1]]){if(!PKC[e[0]])PKC[e[0]]=fetch(PACKS.f[e[0]]).then(r=>{if(!r.ok)throw new Error('paquete');return r.arrayBuffer()});const buf=await PKC[e[0]];AUDC[m[1]]=URL.createObjectURL(new Blob([buf.slice(e[1],e[1]+e[2])],{type:'audio/mpeg'}))}return AUDC[m[1]]+(m[2]||'')}
