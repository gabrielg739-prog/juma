/* ===== Gene: una red neuronal con anillo de ADN ===== */
const GN={L1:[[112,186],[140,182],[168,186]],L2:[[96,214],[122,218],[158,218],[184,214]],L3:[[124,248],[156,248]]};
const geneSvg=id=>{const E=[];GN.L1.forEach(a=>GN.L2.forEach(b=>E.push([a,b,0])));GN.L2.forEach(a=>GN.L3.forEach(b=>E.push([a,b,1])));
const mesh=[[84,60],[100,48],[124,56],[150,46],[178,54],[196,66],[90,118],[196,116],[140,136]];
return `<svg id="${id}" class="gene" viewBox="0 0 280 300" role="img" aria-label="Gene, una red neuronal con cara">
<defs><linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#47E0D2"/><stop offset="1" stop-color="#E85BA8"/></linearGradient><radialGradient id="${id}r"><stop offset="0" stop-color="#47E0D2" stop-opacity=".55"/><stop offset="1" stop-color="#47E0D2" stop-opacity="0"/></radialGradient></defs>
<g class="float"><g class="jump">
<g class="dna" fill="none" stroke-linecap="round"><polyline class="sa" stroke="#47E0D2" stroke-width="3"/><polyline class="sb" stroke="#E85BA8" stroke-width="3"/><g class="rg" stroke="#B9AEE0" stroke-width="2"></g></g>
<g class="armL"><line x1="96" y1="190" x2="54" y2="214" stroke="url(#${id}g)" stroke-width="4"/><circle cx="52" cy="216" r="9" fill="#17122B" stroke="#47E0D2" stroke-width="3"/><circle cx="52" cy="216" r="3.5" fill="#9FF5EC"/></g>
<g class="armR"><line x1="184" y1="190" x2="226" y2="214" stroke="url(#${id}g)" stroke-width="4"/><circle cx="228" cy="216" r="9" fill="#17122B" stroke="#E85BA8" stroke-width="3"/><circle cx="228" cy="216" r="3.5" fill="#FFC1E0"/></g>
<line x1="140" y1="150" x2="140" y2="182" stroke="url(#${id}g)" stroke-width="5"/>
<g class="net">${E.map(e=>`<line class="syn" data-l="${e[2]}" x1="${e[0][0]}" y1="${e[0][1]}" x2="${e[1][0]}" y2="${e[1][1]}" stroke="#8C7FC0" stroke-width="2"/>`).join('')}${[...GN.L1,...GN.L2,...GN.L3].map((p,i)=>`<circle class="nd" data-i="${i}" cx="${p[0]}" cy="${p[1]}" r="${i<3?8:i<7?7:9}" fill="#17122B" stroke="${i<3?'#47E0D2':i<7?'#B9AEE0':'#E85BA8'}" stroke-width="3"/>`).join('')}</g>
<g class="bob">
<line x1="140" y1="40" x2="140" y2="20" stroke="#B9AEE0" stroke-width="4"/><circle cx="140" cy="16" r="16" fill="url(#${id}r)"/><circle class="bulb" cx="140" cy="16" r="8"/>
<rect x="68" y="38" width="144" height="114" rx="40" fill="#17122B" stroke="url(#${id}g)" stroke-width="5"/>
<g class="mesh" stroke="#47E0D2" stroke-opacity=".22" stroke-width="1.5">${mesh.map((p,i)=>mesh.slice(i+1,i+3).map(q=>`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>`).join('')).join('')}${mesh.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="2.2" fill="#47E0D2" fill-opacity=".5" stroke="none"/>`).join('')}</g>
<path class="browL" d="M96 68 q14 -7 28 0" stroke="#9FF5EC" stroke-width="4" fill="none" stroke-linecap="round"/><path class="browR" d="M156 68 q14 -7 28 0" stroke="#FFC1E0" stroke-width="4" fill="none" stroke-linecap="round"/>
<g class="eyes"><circle cx="110" cy="90" r="15" fill="#0E0B1C" stroke="#47E0D2" stroke-width="3"/><circle cx="170" cy="90" r="15" fill="#0E0B1C" stroke="#E85BA8" stroke-width="3"/><g class="pup"><circle cx="110" cy="90" r="6.5" fill="#9FF5EC"/><circle cx="170" cy="90" r="6.5" fill="#FFC1E0"/><circle cx="112.5" cy="87.5" r="2" fill="#fff"/><circle cx="172.5" cy="87.5" r="2" fill="#fff"/></g><rect class="lid" x="92" y="73" width="96" height="0" fill="#17122B"/></g>
<g class="hap" stroke-width="5" fill="none" stroke-linecap="round"><path d="M98 94 q12 -14 24 0" stroke="#9FF5EC"/><path d="M158 94 q12 -14 24 0" stroke="#FFC1E0"/></g>
<g class="mo">${Array.from({length:9},(_,i)=>`<rect x="${121+i*4.6}" y="124" width="3" height="2" rx="1.5" fill="${i<4?'#47E0D2':i>4?'#E85BA8':'#fff'}"/>`).join('')}</g>
</g>
<g class="dots3" fill="#EDE9F7"><circle cx="224" cy="54" r="5"/><circle cx="240" cy="38" r="7"/><circle cx="260" cy="18" r="10"/></g><text class="excl" x="226" y="62" font-size="52" style="fill:#FFC94A;font-weight:700">!</text><path class="tear" d="M96 108q-6 10 0 14q6-4 0-14z" fill="#86B2F2"/><g class="stars" fill="#FFC94A"><path d="M30 70l5 12 12 5-12 5-5 12-5-12-12-5 12-5z"/><path d="M246 46l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/></g>
</g></g></svg>`};
let dnaPh=0;
function animGene(v,now,dtr,level,talking){
  dnaPh+=dtr*(talking?2.6:.9);const cx=140,cy=96,rx=124,ry=24,tl=-.16;let a='',b='',rg='';
  for(let i=0;i<=64;i++){const th=i/64*Math.PI*2,x0=cx+rx*Math.cos(th),y0=cy+ry*Math.sin(th),o=6*Math.sin(5*th+dnaPh),rot=(x,y)=>[cx+(x-cx)*Math.cos(tl)-(y-cy)*Math.sin(tl),cy+(x-cx)*Math.sin(tl)+(y-cy)*Math.cos(tl)];const p=rot(x0,y0-o),q=rot(x0,y0+o);a+=p[0].toFixed(1)+','+p[1].toFixed(1)+' ';b+=q[0].toFixed(1)+','+q[1].toFixed(1)+' ';if(i%4===0&&i<64)rg+=`<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}"/>`}
  v.querySelector('.sa').setAttribute('points',a);v.querySelector('.sb').setAttribute('points',b);v.querySelector('.rg').innerHTML=rg;
  const bars=v.querySelectorAll('.mo rect');bars.forEach((r,i)=>{const c=1-Math.abs(i-4)/5.2;let h=talking?Math.max(2,level*30*c*(.65+.35*Math.sin(now/70+i*1.7))):(v.classList.contains('happy')?(i>1&&i<7?3+2*Math.sin(i):2):2);r.setAttribute('height',h.toFixed(1));r.setAttribute('y',(125-h/2).toFixed(1))});
  const ph=now/160;v.querySelectorAll('.syn').forEach((e,i)=>{const l=+e.dataset.l,s=talking?.25+.75*Math.max(0,Math.sin(ph-l*1.4+i*.35)):.35;e.style.strokeOpacity=s;e.style.stroke=talking&&s>.8?'#FFC94A':''});
  v.querySelectorAll('.nd').forEach((e,i)=>{const L=i<3?0:i<7?1:2,s=talking?Math.max(0,Math.sin(ph-L*1.4+.6)):0;e.style.fill=s>.7?(L==2?'#E85BA8':L==1?'#B9AEE0':'#47E0D2'):'#17122B'});
}

/* ===== Retratos recreados (ilustraciones estilizadas, no fotografías) ===== */
const SK=['#F2D2B6','#E8BE9A','#D9A57E','#C08A62','#9A6A47'],HC={k:'#2A2420',b:'#5A3B26',g:'#9C9893',w:'#E9E6E0',y:'#C9A25A',r:'#9A4A2A',s:'#6E6A66'};
function face(p){const sk=SK[p.sk||0],hc=HC[p.hc||'k'],dk='#3B2A22',cl=p.cc||'#36405A';let back='',front='',x='';
 // ropa
 const shoulders=`<path d="M8 140 Q12 112 60 106 Q108 112 112 140Z" fill="${cl}"/>`;
 let collar='';switch(p.co){case 'toga':collar=`<path d="M8 140 Q12 112 60 106 Q108 112 112 140Z" fill="#E9E1CF"/><path d="M30 140 Q50 112 92 110 L100 120 Q60 122 46 140Z" fill="#C9B994"/>`;break;
 case 'ruff':collar=`<ellipse cx="60" cy="108" rx="30" ry="9" fill="#F4F1EA" stroke="#CFC8B8" stroke-width="1.5"/>${[0,1,2,3,4,5,6].map(i=>`<path d="M${34+i*8} 104 q4 8 8 0" fill="none" stroke="#CFC8B8" stroke-width="1.2"/>`).join('')}`;break;
 case 'band':collar=`<path d="M44 106 L60 126 L76 106 L72 104 L60 116 L48 104Z" fill="#F4F1EA"/>`;break;
 case 'cravat':collar=`<path d="M48 106 L60 128 L72 106Z" fill="#F4F1EA"/><path d="M54 110 q6 6 12 0 l-6 12z" fill="#E6E0D4"/>`;break;
 case 'suit':collar=`<path d="M46 108 L60 138 L74 108Z" fill="#F4F1EA"/><path d="M57 112 L63 112 L61 136 L59 136Z" fill="${p.tie||'#7A2F3B'}"/><path d="M40 112 L56 140 L46 140Z M80 112 L64 140 L74 140Z" fill="rgba(0,0,0,.18)"/>`;break;
 case 'sweater':collar=`<path d="M44 108 Q60 118 76 108" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="5"/>`;break;
 case 'robe':collar=`<path d="M40 108 L60 140 L80 108" fill="none" stroke="#C9A25A" stroke-width="4"/>`;break;}
 // pelo trasero
 if(p.ha==='long')back=`<path d="M30 60 Q28 108 40 118 L80 118 Q92 108 90 60Z" fill="${hc}"/>`;
 if(p.ha==='wig')back=`<path d="M24 56 Q18 112 32 128 Q46 120 44 100 L76 100 Q74 120 88 128 Q102 112 96 56Z" fill="${hc}"/>${[0,1,2,3,4].map(i=>`<circle cx="${27+i%2*4}" cy="${70+i*12}" r="8" fill="${hc}"/><circle cx="${93-i%2*4}" cy="${70+i*12}" r="8" fill="${hc}"/>`).join('')}`;
 if(p.ha==='puff')back=`<circle cx="30" cy="62" r="13" fill="${hc}"/><circle cx="90" cy="62" r="13" fill="${hc}"/><circle cx="32" cy="80" r="10" fill="${hc}"/><circle cx="88" cy="80" r="10" fill="${hc}"/>`;
 const head=`<rect x="52" y="90" width="16" height="20" fill="${sk}" filter="brightness(.9)"/><ellipse cx="33" cy="70" rx="5" ry="8" fill="${sk}"/><ellipse cx="87" cy="70" rx="5" ry="8" fill="${sk}"/><ellipse cx="60" cy="66" rx="27" ry="33" fill="${sk}"/>`;
 // pelo frontal
 switch(p.ha){case 'short':case 'long':case 'wig':front=`<path d="M33 62 Q30 30 60 31 Q90 30 87 62 Q82 44 62 43 Q44 42 33 62Z" fill="${hc}"/>`;break;
 case 'side':front=`<path d="M33 62 Q30 30 60 30 Q90 30 87 60 Q84 46 66 42 Q50 50 36 52Z" fill="${hc}"/>`;break;
 case 'curly':front=[[38,44],[48,36],[60,33],[72,36],[82,44],[34,56],[86,56]].map(c=>`<circle cx="${c[0]}" cy="${c[1]}" r="9" fill="${hc}"/>`).join('');break;
 case 'bald':front=`<path d="M33 66 Q32 54 38 50 L40 66Z M87 66 Q88 54 82 50 L80 66Z" fill="${hc}"/>`;break;
 case 'balding':front=`<path d="M33 66 Q31 46 40 42 L42 64Z M87 66 Q89 46 80 42 L78 64Z" fill="${hc}"/><path d="M46 38 Q60 33 74 38" stroke="${hc}" stroke-width="3" fill="none"/>`;break;
 case 'puff':front=`<path d="M36 56 Q40 36 60 34 Q80 36 84 56 Q76 46 60 46 Q44 46 36 56Z" fill="${hc}"/>`;break;
 case 'crop':front=`<path d="M34 58 Q34 34 60 33 Q86 34 86 58 Q80 44 60 42 Q40 44 34 58Z" fill="${hc}"/>`;break;}
 // cara
 const eyeR=p.ey==='squint'?`<path d="M66 64 h10" stroke="${dk}" stroke-width="2.5" stroke-linecap="round"/>`:`<ellipse cx="71" cy="64" rx="3" ry="3.4" fill="${dk}"/>`;
 const fc=`<ellipse cx="49" cy="64" rx="3" ry="3.4" fill="${dk}"/>${eyeR}<path d="M43 ${56-(p.br||0)} q6 -${3+(p.br||0)} 12 0 M65 ${56-(p.br||0)} q6 -${3+(p.br||0)} 12 0" stroke="${p.hc==='w'||p.hc==='g'?'#8A8580':hc}" stroke-width="${p.bt||2.5}" fill="none" stroke-linecap="round"/><path d="M60 64 q-5 11 0 13" stroke="rgba(0,0,0,.35)" stroke-width="2" fill="none"/><path d="M52 86 q8 ${p.sm?5:3} 16 0" stroke="#8A4A45" stroke-width="2.5" fill="none" stroke-linecap="round"/>${p.ag?`<path d="M48 44 q12 -3 24 0 M50 49 q10 -2 20 0" stroke="rgba(0,0,0,.18)" stroke-width="1.5" fill="none"/><path d="M42 78 q3 6 6 8 M78 78 q-3 6 -6 8" stroke="rgba(0,0,0,.18)" stroke-width="1.5" fill="none"/>`:''}`;
 // barba y bigote
 let bd='';const bc=p.bc?HC[p.bc]:hc;switch(p.be){case 'full':bd=`<path d="M34 70 Q36 106 60 110 Q84 106 86 70 Q80 90 60 92 Q40 90 34 70Z" fill="${bc}"/>`;break;
 case 'long':bd=`<path d="M34 70 Q34 118 60 128 Q86 118 86 70 Q80 92 60 94 Q40 92 34 70Z" fill="${bc}"/>`;break;
 case 'point':bd=`<path d="M44 88 Q60 96 76 88 L60 112Z" fill="${bc}"/>`;break;
 case 'goatee':bd=`<path d="M54 92 Q60 98 66 92 L60 102Z" fill="${bc}"/>`;break;
 case 'short':bd=`<path d="M36 74 Q40 100 60 102 Q80 100 84 74 Q78 92 60 94 Q42 92 36 74Z" fill="${bc}"/>`;break;
 case 'side':bd=`<path d="M33 62 L33 86 Q36 88 40 84 L38 62Z M87 62 L87 86 Q84 88 80 84 L82 62Z" fill="${bc}"/>`;break;}
 const mu=p.mu?`<path d="M48 82 Q54 77 60 80 Q66 77 72 82 Q66 84 60 82 Q54 84 48 82Z" fill="${bc}"/>`:'';
 const gl=p.gl==='round'?`<g fill="none" stroke="#2A2420" stroke-width="2"><circle cx="49" cy="64" r="8"/><circle cx="71" cy="64" r="8"/><path d="M57 64 h6 M41 63 l-8 -2 M79 63 l8 -2"/></g>`:p.gl==='rect'?`<g fill="none" stroke="#2A2420" stroke-width="2.4"><rect x="40" y="58" width="17" height="12" rx="3"/><rect x="63" y="58" width="17" height="12" rx="3"/><path d="M57 63 h6 M40 62 l-7 -2 M80 62 l7 -2"/></g>`:'';
 let hat='';switch(p.hat){case 'turban':hat=`<path d="M30 54 Q30 22 60 20 Q90 22 90 54 Q76 44 60 44 Q44 44 30 54Z" fill="#7B5A8C"/><path d="M34 46 Q60 30 86 46 M36 38 Q60 24 84 38" stroke="#5E4470" stroke-width="3" fill="none"/>`;break;
 case 'skull':hat=`<path d="M34 50 Q36 26 60 26 Q84 26 86 50 Q74 42 60 42 Q46 42 34 50Z" fill="#2E2A3A"/>`;break;
 case 'laurel':hat=[...Array(7)].map((_,i)=>`<ellipse cx="${36+i*8}" cy="${42-Math.sin(i/6*Math.PI)*8}" rx="5" ry="3" transform="rotate(${-30+i*10} ${36+i*8} ${42-Math.sin(i/6*Math.PI)*8})" fill="#6B8E3A"/>`).join('');break;
 case 'cap':hat=`<path d="M32 50 Q34 26 60 25 Q86 26 88 50 Z" fill="#3A3A48"/><rect x="28" y="47" width="64" height="6" rx="3" fill="#2A2A36"/>`;break;}
 return `<svg viewBox="0 0 120 140" class="pt">${shoulders}${collar}${back}${head}${front}${fc}${bd}${mu}${gl}${hat}</svg>`}
const PEOPLE={
euclides:{n:'Euclides',y:'c. 325 – 265 a. C.',o:'Alejandría',f:{sk:1,hc:'g',ha:'bald',be:'long',co:'toga',ag:1}},
heron:{n:'Herón de Alejandría',y:'c. 10 – 70 d. C.',o:'Alejandría',f:{sk:2,hc:'k',ha:'curly',be:'full',co:'toga'}},
kepler:{n:'Johannes Kepler',y:'1571 – 1630',o:'Alemania',f:{sk:0,hc:'b',ha:'crop',be:'point',mu:1,co:'ruff',cc:'#2A2A30'}},
snell:{n:'Willebrord Snell',y:'1580 – 1626',o:'Países Bajos',f:{sk:0,hc:'b',ha:'short',be:'short',mu:1,co:'ruff',cc:'#26262C'}},
huygens:{n:'Christiaan Huygens',y:'1629 – 1695',o:'Países Bajos',f:{sk:0,hc:'b',ha:'wig',mu:1,co:'band',cc:'#2A2A30'}},
descartes:{n:'René Descartes',y:'1596 – 1650',o:'Francia',f:{sk:0,hc:'k',ha:'long',mu:1,be:'goatee',co:'band',cc:'#1E1E24'}},
fermat:{n:'Pierre de Fermat',y:'1601 – 1665',o:'Francia',f:{sk:0,hc:'b',ha:'wig',mu:1,co:'band',cc:'#2A2A30'}},
newton:{n:'Isaac Newton',y:'1643 – 1727',o:'Inglaterra',f:{sk:0,hc:'w',ha:'wig',co:'cravat',cc:'#6B2B33',ag:1}},
galileo:{n:'Galileo Galilei',y:'1564 – 1642',o:'Italia',f:{sk:1,hc:'w',ha:'bald',be:'full',mu:1,co:'robe',cc:'#2A2A30',ag:1}},
bernoulli:{n:'Johann Bernoulli',y:'1667 – 1748',o:'Suiza',f:{sk:0,hc:'g',ha:'wig',co:'cravat',cc:'#3A3048'}},
euler:{n:'Leonhard Euler',y:'1707 – 1783',o:'Suiza',f:{sk:0,hc:'b',ha:'short',hat:'turban',ey:'squint',co:'robe',cc:'#4A3A2A'}},
lagrange:{n:'Joseph-Louis Lagrange',y:'1736 – 1813',o:'Italia y Francia',f:{sk:0,hc:'w',ha:'puff',co:'cravat',cc:'#2E3A5A'}},
maupertuis:{n:'Pierre-Louis de Maupertuis',y:'1698 – 1759',o:'Francia',f:{sk:0,hc:'w',ha:'puff',co:'cravat',cc:'#5A2E2E',sm:1}},
monge:{n:'Gaspard Monge',y:'1746 – 1818',o:'Francia',f:{sk:1,hc:'g',ha:'short',co:'cravat',cc:'#24324E',ag:1}},
gauss:{n:'Carl Friedrich Gauss',y:'1777 – 1855',o:'Alemania',f:{sk:0,hc:'w',ha:'short',hat:'skull',co:'cravat',cc:'#2A2A30',ag:1}},
legendre:{n:'Adrien-Marie Legendre',y:'1752 – 1833',o:'Francia',f:{sk:0,hc:'w',ha:'puff',co:'cravat',cc:'#2E2E36',ag:1}},
adrain:{n:'Robert Adrain',y:'1775 – 1843',o:'Irlanda y EE. UU.',f:{sk:0,hc:'b',ha:'side',co:'cravat',cc:'#2A2A30'}},
ricardo:{n:'David Ricardo',y:'1772 – 1823',o:'Inglaterra',f:{sk:0,hc:'k',ha:'curly',co:'cravat',cc:'#2A2A30'}},
cauchy:{n:'Augustin-Louis Cauchy',y:'1789 – 1857',o:'Francia',f:{sk:0,hc:'b',ha:'balding',be:'side',co:'cravat',cc:'#22222A'}},
hamilton:{n:'William Rowan Hamilton',y:'1805 – 1865',o:'Irlanda',f:{sk:0,hc:'b',ha:'curly',be:'side',co:'cravat',cc:'#22222A'}},
kirkman:{n:'Thomas Kirkman',y:'1806 – 1895',o:'Inglaterra',f:{sk:0,hc:'w',ha:'balding',be:'full',co:'cravat',cc:'#22222A',ag:1}},
babbage:{n:'Charles Babbage',y:'1791 – 1871',o:'Inglaterra',f:{sk:0,hc:'g',ha:'balding',be:'side',co:'cravat',cc:'#22222A',ag:1}},
jensen:{n:'Johan Jensen',y:'1859 – 1925',o:'Dinamarca',f:{sk:0,hc:'g',ha:'balding',mu:1,co:'suit',cc:'#2A2A30'}},
hancock:{n:'Harris Hancock',y:'1867 – 1944',o:'EE. UU.',f:{sk:0,hc:'b',ha:'side',mu:1,co:'suit',cc:'#2A2A30'}},
menger:{n:'Karl Menger',y:'1902 – 1985',o:'Austria',f:{sk:0,hc:'k',ha:'side',co:'suit',cc:'#30303A'}},
gardner:{n:'Martin Gardner',y:'1914 – 2010',o:'EE. UU.',f:{sk:0,hc:'w',ha:'balding',co:'suit',cc:'#3A3A44',ag:1}},
kantorovich:{n:'Leonid Kantorovich',y:'1912 – 1986',o:'Unión Soviética',f:{sk:0,hc:'k',ha:'balding',gl:'rect',co:'suit',cc:'#2E2E36'}},
koopmans:{n:'Tjalling Koopmans',y:'1910 – 1985',o:'Países Bajos y EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'round',co:'suit',cc:'#33333C'}},
dantzig:{n:'George Dantzig',y:'1914 – 2005',o:'EE. UU.',f:{sk:0,hc:'k',ha:'balding',gl:'rect',co:'suit',cc:'#2E3440'}},
karush:{n:'William Karush',y:'1917 – 1997',o:'EE. UU.',f:{sk:0,hc:'k',ha:'side',gl:'round',co:'suit',cc:'#2E3440'}},
kuhn:{n:'Harold Kuhn',y:'1925 – 2014',o:'EE. UU.',f:{sk:0,hc:'b',ha:'side',gl:'rect',co:'suit',cc:'#3A3A44'}},
tucker:{n:'Albert W. Tucker',y:'1905 – 1995',o:'Canadá y EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'round',co:'suit',cc:'#2E2E36',ag:1}},
bellman:{n:'Richard Bellman',y:'1920 – 1984',o:'EE. UU.',f:{sk:0,hc:'k',ha:'side',co:'suit',cc:'#2E3440'}},
vonneumann:{n:'John von Neumann',y:'1903 – 1957',o:'Hungría y EE. UU.',f:{sk:0,hc:'b',ha:'balding',co:'suit',cc:'#2A2A30',sm:1}},
morgenstern:{n:'Oskar Morgenstern',y:'1902 – 1977',o:'Austria y EE. UU.',f:{sk:0,hc:'k',ha:'side',mu:1,co:'suit',cc:'#2A2A30'}},
turing:{n:'Alan Turing',y:'1912 – 1954',o:'Inglaterra',f:{sk:0,hc:'k',ha:'side',co:'suit',cc:'#3A3428',tie:'#4A3A2A'}},
welchman:{n:'Gordon Welchman',y:'1906 – 1985',o:'Inglaterra',f:{sk:0,hc:'b',ha:'side',gl:'round',co:'suit',cc:'#33333C'}},
holland:{n:'John Holland',y:'1929 – 2015',o:'EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'rect',co:'shirt',cc:'#4A5A7A',ag:1}},
dejong:{n:'Kenneth De Jong',y:'1944',o:'EE. UU.',f:{sk:0,hc:'g',ha:'short',gl:'rect',be:'short',co:'shirt',cc:'#5A6A7A'}},
rechenberg:{n:'Ingo Rechenberg',y:'1934 – 2021',o:'Alemania',f:{sk:0,hc:'w',ha:'balding',co:'suit',cc:'#33333C',ag:1}},
schwefel:{n:'Hans-Paul Schwefel',y:'1940',o:'Alemania',f:{sk:0,hc:'g',ha:'short',gl:'rect',co:'suit',cc:'#3A3A44'}},
bienert:{n:'Peter Bienert',y:'',o:'Alemania',f:{sk:0,hc:'b',ha:'short',co:'shirt',cc:'#5A6A7A'}},
fogel:{n:'Lawrence J. Fogel',y:'1928 – 2007',o:'EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'rect',co:'suit',cc:'#2E3440'}},
kirkpatrick:{n:'Scott Kirkpatrick',y:'1941',o:'EE. UU.',f:{sk:0,hc:'g',ha:'short',be:'short',co:'shirt',cc:'#4A5A7A'}},
gelatt:{n:'C. Daniel Gelatt',y:'',o:'EE. UU.',f:{sk:0,hc:'b',ha:'side',co:'shirt',cc:'#5A6A7A'}},
vecchi:{n:'Mario P. Vecchi',y:'',o:'EE. UU.',f:{sk:1,hc:'k',ha:'short',mu:1,co:'shirt',cc:'#4A5A7A'}},
glover:{n:'Fred Glover',y:'1937',o:'EE. UU.',f:{sk:0,hc:'w',ha:'short',co:'suit',cc:'#33333C',ag:1}},
dorigo:{n:'Marco Dorigo',y:'1961',o:'Italia',f:{sk:1,hc:'g',ha:'short',be:'short',co:'shirt',cc:'#3A4A6A'}},
koza:{n:'John R. Koza',y:'1944',o:'EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'rect',co:'suit',cc:'#2E3440'}},
kennedy:{n:'James Kennedy',y:'',o:'EE. UU.',f:{sk:0,hc:'b',ha:'short',be:'full',co:'shirt',cc:'#5A6A7A'}},
eberhart:{n:'Russell C. Eberhart',y:'',o:'EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'rect',co:'suit',cc:'#33333C'}},
wolpert:{n:'David H. Wolpert',y:'',o:'EE. UU.',f:{sk:0,hc:'b',ha:'short',be:'short',co:'shirt',cc:'#4A5A7A'}},
macready:{n:'William G. Macready',y:'',o:'EE. UU.',f:{sk:0,hc:'b',ha:'crop',co:'shirt',cc:'#3A4A6A'}},
geem:{n:'Zong Woo Geem',y:'',o:'Corea del Sur',f:{sk:1,hc:'k',ha:'side',gl:'rect',co:'suit',cc:'#2E3440'}},
nakrani:{n:'Sunil Nakrani',y:'',o:'',f:{sk:3,hc:'k',ha:'short',co:'shirt',cc:'#4A5A7A'}},
tovey:{n:'Craig Tovey',y:'',o:'EE. UU.',f:{sk:0,hc:'b',ha:'balding',be:'short',co:'shirt',cc:'#5A6A7A'}},
pham:{n:'Duc Truong Pham',y:'',o:'Reino Unido',f:{sk:1,hc:'k',ha:'side',gl:'rect',co:'suit',cc:'#2E3440'}},
karaboga:{n:'Derviş Karaboğa',y:'',o:'Turquía',f:{sk:1,hc:'k',ha:'short',mu:1,co:'suit',cc:'#33333C'}},
yang:{n:'Xin-She Yang',y:'',o:'China y Reino Unido',f:{sk:1,hc:'k',ha:'side',gl:'rect',co:'suit',cc:'#2E3440'}},
hestenes:{n:'Magnus Hestenes',y:'1906 – 1991',o:'EE. UU.',f:{sk:0,hc:'w',ha:'balding',gl:'round',co:'suit',cc:'#33333C',ag:1}},
stiefel:{n:'Eduard Stiefel',y:'1909 – 1978',o:'Suiza',f:{sk:0,hc:'b',ha:'side',gl:'round',co:'suit',cc:'#2E3440'}},
lanczos:{n:'Cornelius Lanczos',y:'1893 – 1974',o:'Hungría',f:{sk:0,hc:'w',ha:'puff',co:'suit',cc:'#33333C',ag:1}},
saad:{n:'Yousef Saad',y:'',o:'',f:{sk:2,hc:'g',ha:'balding',mu:1,co:'shirt',cc:'#4A5A7A'}},
schultz:{n:'Martin H. Schultz',y:'',o:'EE. UU.',f:{sk:0,hc:'b',ha:'side',gl:'rect',co:'suit',cc:'#33333C'}},
agrawal:{n:'Manindra Agrawal',y:'1966',o:'India',f:{sk:3,hc:'k',ha:'side',co:'shirt',cc:'#5A6A7A'}},
dorfman:{n:'Robert Dorfman',y:'1916 – 2002',o:'EE. UU.',f:{sk:0,hc:'g',ha:'balding',gl:'rect',co:'suit',cc:'#33333C'}}
};
function personCard(id){const p=PEOPLE[id];if(!p)return'';return`<figure class="pc"><div class="pf">${face(p.f)}</div><figcaption><b>${p.n}</b><span>${[p.y,p.o].filter(Boolean).join(' · ')}</span></figcaption></figure>`}
