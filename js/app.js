/* JUMA Duaca · sitio independiente. Sin framework. Firebase solo si lo configuras en js/firebase-config.js */
const CFG = globalThis.JUMA_FIREBASE || {};
const FB_ON = !!CFG.apiKey && !/REEMPLAZA/i.test(CFG.apiKey);
const ADMIN = String(CFG.adminEmail || 'jumaduaca@gmail.com').toLowerCase();
const V = '10.14.1';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (t) => String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad2 = (n) => String(n).padStart(2, '0');
const reduced = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };

let cfg = {};
try { cfg = JSON.parse(localStorage.getItem('juma-cfg') || '{}'); } catch (e) {}
let fb = null;      // módulos de firebase
let isAdmin = false;

/* ===================== datos por defecto: años de formación ===================== */
const T = (arr) => arr.map((t, i) => ({ n: String(i + 1).padStart(2, '0'), t }));
const YEARS = [
  { ord: 'Año 1', name: 'Oceanía', eje: 'Eje IMC', color: '#2A5FE6', ink: '#FFFFFF', title: 'Conocer nuestros orígenes',
    text: 'Un año para conocer los orígenes y la identidad del movimiento. A través de la historia y el carisma del Instituto Misioneros de la Consolata, los jóvenes se adentran en la vida de San José Allamano y en la obra misionera en Venezuela y el mundo.',
    topics: T(['Biografía de Allamano, primera parte','Biografía de Allamano, segunda parte','Historia de la Consolata, primera parte','Historia de la Consolata, segunda parte','Historia de la Consolata en Venezuela','Presencia misionera (Venezuela y mundo)','Carisma y misión ad gentes','Espiritualidad allamaniana','Figuras importantes para el instituto','Estructura del instituto','Características de los misioneros de la Consolata']) },
  { ord: 'Año 2', name: 'Asia', eje: 'Eje espiritualidad', color: '#F5C518', ink: '#061536', title: 'La vida interior',
    text: 'Un año centrado en la relación personal con Dios. Los jóvenes exploran la oración, la Eucaristía y la figura de la Virgen María, y aprenden a manejar la Biblia y la apologética para compartir su fe con claridad.',
    topics: T(['Encuentro conmigo','Encuentro con el otro','Encuentro con Dios','La misión de Jesucristo en los evangelios','La oración y las formas de orar','La Eucaristía','Espiritualidad mariana','Estudio y manejo de la Biblia, parte 1','Estudio y manejo de la Biblia, parte 2','Apologética, parte 1','Apologética, parte 2']) },
  { ord: 'Año 3', name: 'África', eje: 'Eje pastoral', color: '#17824A', ink: '#FFFFFF', title: 'La acción misionera',
    text: 'Un año para pasar a la acción. Los jóvenes se capacitan en pastoral juvenil y en los fundamentos de la evangelización: qué, cómo, cuándo, dónde y por qué, descubriendo su vocación como discípulos misioneros de Cristo.',
    topics: T(['Vocación misionera y discípulo','Juventud en el mundo: carisma, desafío y doctrina','Documentos y calendario de la misión','Qué es la evangelización','Cómo es una evangelización','Cuándo hacer una evangelización','Dónde y en qué espacios evangelizar','Por qué se debe evangelizar','Estructura de la pastoral juvenil, servicios y apostolado','Creatividad para dinámicas, actividades pastorales y espiritualidad','Nuevos modelos de evangelización: redes sociales, revistas digitales, páginas web']) },
  { ord: 'Año 4', name: 'América', eje: 'Eje humano', color: '#C8322D', ink: '#FFFFFF', title: 'Crecer como personas',
    text: 'Un año para el autoconocimiento y las habilidades humanas: identidad, control emocional, autoestima y proyecto de vida, además de liderazgo, comunicación y relaciones, incluido el noviazgo.',
    topics: T(['Identidad: ¿quién soy?','Control de emociones','Autoestima','Proyecto de vida','Estructura familiar','Liderazgo transformacional','Comunicación y oratoria','Perdón','Reconciliación','Uso adecuado de las tecnologías','Noviazgo santo']) },
  { ord: 'Año 5', name: 'Europa', eje: 'Eje social e intercultural', color: '#FFFFFF', ink: '#061536', title: 'Servir con el corazón abierto',
    text: 'El último año se dedica a la dimensión social e intercultural de la misión: trabajo en equipo, metodología para las comunidades y respeto a la diversidad cultural y religiosa, con servicio a niños, jóvenes y adultos mayores.',
    topics: T(['Disposición misionera','Trabajo en equipo (sinodalidad)','Metodología del trabajo en las comunidades','Conociendo las diferentes culturas','Respeto a los demás','Ecumenismo y tolerancia religiosa','Dignidad de la persona','Derecho de la minoría','Servicio social con niños','Servicio social con jóvenes','Servicio social con adultos mayores']) }
];
const FOTOS = [
  { foto: 'img/parque.jpg', pos: '30% 50%', alt: 'Grupo de JUMA reunido en el Parque La Aparición' },
  { foto: 'img/capilla.jpg', pos: '50% 55%', alt: 'Sacerdote en oración ante el altar de una capilla' },
  { foto: 'img/cruz.jpg', pos: '40% 40%', alt: 'Joven de JUMA con la cruz misionera por las calles de Duaca' },
  { foto: 'img/circulo.jpg', pos: '70% 55%', alt: 'Misionero guiando una dinámica con jóvenes en círculo' },
  { foto: 'img/comunidad.jpg', pos: '28% 50%', alt: 'Misioneros de JUMA junto a niños y familias de una comunidad' }
];
const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

/* ===================== pintar contenido editable ===================== */
let yearSel = 0;
function renderAll() {
  renderAviso(); renderDomingos(); renderActs(); renderFormacion(); renderPosts(); renderGalExtra();
}
function renderAviso() {
  const el = $('#aviso'); const t = String(cfg.aviso || '').trim();
  el.textContent = t; el.classList.toggle('hide', !t);
}
function hora() { return cfg.hora || 'Hora por confirmar'; }
function lugar() { const l = cfg.lugar; return l ? l + (/duaca/i.test(l) ? '' : ', Duaca') : 'Lugar por confirmar, Duaca'; }
function domingos() {
  const now = new Date(); const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const base = new Date(today.getTime()); base.setDate(base.getDate() + ((7 - base.getDay()) % 7));
  return [0, 1, 2, 3].map((i) => {
    const x = new Date(base.getFullYear(), base.getMonth(), base.getDate() + 7 * i);
    const key = x.getFullYear() + '-' + pad2(x.getMonth() + 1) + '-' + pad2(x.getDate());
    const isToday = x.getTime() === today.getTime();
    const sin = (cfg.sinReunion || {})[key];
    return { key, dia: x.getDate(), mes: MESES[x.getMonth()], first: i === 0, badge: isToday ? 'Hoy' : 'Este domingo',
      tema: sin ? 'Sin reunión' : (String((cfg.temas || {})[key] || '').trim() || 'Encuentro JUMA') };
  });
}
function renderDomingos() {
  $('#f-hora').textContent = hora(); $('#f-lugar').textContent = lugar();
  $('#tags').innerHTML = domingos().map((s) => `<li class="dtag"><i aria-hidden="true"></i><div class="dcard${s.first ? ' first' : ''}">${s.first ? `<span class="flag">${esc(s.badge)}</span>` : ''}<span class="d num">${s.dia}</span><span class="m">${s.mes}</span><span class="t">${esc(s.tema)}</span></div></li>`).join('');
}
function renderActs() {
  const a = (cfg.actividades || []).filter((x) => x && x.t);
  $('#acts-wrap').classList.toggle('hide', !a.length);
  $('#acts').innerHTML = a.map((x) => `<li><b>${esc(x.t)}</b><span class="f">${esc(x.f || '')}</span><p>${esc(x.d || '')}</p></li>`).join('');
}
function yearData(i) {
  const y = Object.assign({}, YEARS[i], { foto: FOTOS[i].foto, pos: FOTOS[i].pos, alt: FOTOS[i].alt });
  const o = (cfg.formacion || {})[String(i)];
  if (o) {
    if (o.title) y.title = o.title; if (o.text) y.text = o.text;
    if (o.topicsText) y.topics = T(String(o.topicsText).split('\n').map((l) => l.trim()).filter(Boolean));
  }
  return y;
}
function renderFormacion() {
  const wrap = $('#pennants');
  wrap.innerHTML = YEARS.map((y, i) => `<button type="button" class="pennant tail" data-y="${i}" aria-pressed="${i === yearSel}" style="background:${y.color};color:${y.ink};transform:translateY(${i === yearSel ? 0 : -46}px)"><span class="yr">${y.ord}</span><span class="cn">${y.name}</span><span class="ej">${y.eje}</span></button>`).join('');
  const y = yearData(yearSel);
  $('#fpanel').style.borderTop = '6px solid ' + YEARS[yearSel].color;
  $('#fp-title').textContent = y.title; $('#fp-text').textContent = y.text;
  $('#fp-topics').innerHTML = y.topics.map((x) => `<li><span>${x.n}</span>${esc(x.t)}</li>`).join('');
  const im = $('#fp-img'); im.src = y.foto; im.alt = y.alt; im.style.objectPosition = y.pos;
}
$('#pennants').addEventListener('click', (e) => {
  const b = e.target.closest('[data-y]'); if (!b) return;
  const i = +b.dataset.y; if (i === yearSel) return;
  yearSel = i; renderFormacion();
  const el = $('#fpanel');
  if (el.animate) el.animate(reduced() ? [{ opacity: .4 }, { opacity: 1 }] : [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }], { duration: reduced() ? 200 : 300, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
});
function fmtF(iso) { const d = new Date(iso); return isNaN(d.getTime()) ? '' : d.getDate() + ' de ' + MESES[d.getMonth()] + ' de ' + d.getFullYear(); }
function mediaHtml(p) {
  const yt = p.video && String(p.video).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
  if (yt) return `<div class="post-media"><iframe class="yt" loading="lazy" src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="${esc(p.t)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  if (p.video) return `<div class="post-media"><video controls preload="metadata" playsinline src="${esc(p.video)}"></video></div>`;
  if (p.foto) return `<div class="post-media"><img class="photo" loading="lazy" src="${esc(p.foto)}" alt="${esc(p.t)}"></div>`;
  return '';
}
function renderPosts() {
  const list = (cfg.posts || []).filter((p) => p && (p.t || p.x));
  $('#novedades').classList.toggle('hide', !list.length);
  $('#nav-nov').classList.toggle('hide', !list.length);
  $('#posts').innerHTML = list.map((p) => `<article class="post">${mediaHtml(p)}<div class="post-body"><time>${esc(fmtF(p.fecha))}</time><h3>${esc(p.t)}</h3><p>${esc(p.x)}</p></div></article>`).join('');
}
function renderGalExtra() {
  $('#gal-extra').innerHTML = (cfg.galeria || []).filter((g) => g && g.url).map((g) => `<figure class="gal g5"><img class="photo" loading="lazy" src="${esc(g.url)}" alt="${esc(g.cap || 'Foto de JUMA')}"><figcaption>${esc(g.cap || '')}</figcaption></figure>`).join('');
}

/* ===================== desenrollar al entrar en pantalla ===================== */
function setupUnroll() {
  try {
    const root = $('#root');
    if (reduced()) return;
    const els = $$('[data-unroll]');
    root.setAttribute('data-motion', '1');
    const check = () => {
      const h = window.innerHeight || 800;
      els.forEach((el) => { if (el.hasAttribute('data-in')) return; const r = el.getBoundingClientRect(); if (r.top < h * 0.92 && r.bottom > 0) el.setAttribute('data-in', '1'); });
    };
    let tick = 0;
    const on = () => { if (!tick) tick = requestAnimationFrame(() => { tick = 0; check(); }); };
    window.addEventListener('scroll', on, { passive: true, capture: true }); window.addEventListener('resize', on);
    check(); setTimeout(check, 400); setTimeout(check, 1200);
    setTimeout(() => els.forEach((el) => el.setAttribute('data-in', '1')), 5000);
  } catch (e) {}
}

/* ===================== ventanas ===================== */
const modalRoot = $('#modal-root');
let modalKey = null;
function lock(on) { document.documentElement.style.overflow = on ? 'hidden' : ''; }
function openModal(html, onKey) {
  modalRoot.innerHTML = html; lock(true); modalKey = onKey || null;
  setTimeout(() => { const f = modalRoot.querySelector('input,textarea'); if (f) f.focus(); }, 260);
}
function closeModal() {
  const ov = $('.overlay', modalRoot);
  const done = () => { modalRoot.innerHTML = ''; lock(false); modalKey = null; };
  if (!ov || reduced()) return done();
  ov.classList.add('is-out'); setTimeout(done, 180);
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalRoot.firstChild) closeModal(); });
const closeBtn = `<button type="button" data-close aria-label="Cerrar" style="flex:0 0 auto;width:46px;height:46px;border-radius:10px;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"></path></svg></button>`;
modalRoot.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
const sheetHead = (kicker, title, id) => `<div class="sheet-head"><div class="ribbon" aria-hidden="true" style="position:absolute;top:0;left:0;right:0"></div><div style="display:flex;align-items:center;gap:16px"><div style="flex:1 1 auto;min-width:0"><div style="font-size:13px;color:var(--muted-lt)">${esc(kicker)}</div><h2 id="${id}" class="h-display" style="margin-top:4px;font-size:clamp(28px,4vw,38px)">${esc(title)}</h2></div>${closeBtn}</div></div>`;

/* ===================== planilla de inscripción ===================== */
const form = { step: 1, d: {}, consent: false, done: false, err: '' };
const FLD = {
  1: [['nombres','Nombres *','text','given-name'],['apellidos','Apellidos *','text','family-name'],['nac','Fecha de nacimiento','date','bday'],['@edad'],['celular','Celular *','tel','tel'],['correo','Correo electrónico','email','email'],['madre','Nombre de la madre'],['padre','Nombre del padre'],['hermano','Hermano/a'],['ocupacion','Ocupación'],['direccion','Dirección','text','street-address','w'],['parroquia','Parroquia','text','','w']],
  2: [['repNombre','Nombre completo','text','','w'],['repCedula','Cédula'],['repCelular','Celular','tel'],['repOcupacion','Ocupación','text','','w']]
};
function edadDe() {
  const d = form.d; if (!d.nac) return '';
  const b = new Date(d.nac + 'T00:00:00'); if (isNaN(b.getTime())) return '';
  const n = new Date(); let a = n.getFullYear() - b.getFullYear(); const m = n.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && n.getDate() < b.getDate())) a--;
  return a >= 0 && a < 120 ? String(a) : '';
}
const esMenor = () => { const e = edadDe(); return e !== '' && parseInt(e, 10) < 18; };
function inputHtml(k, label, type, ac, cls) {
  return `<div class="fld ${cls || ''}"><label for="f-${k}">${label}</label><input id="f-${k}" data-k="${k}" type="${type || 'text'}" value="${esc(form.d[k] || '')}" autocomplete="${ac || 'off'}"></div>`;
}
const chips = (k, vals) => vals.map((v) => { const on = form.d[k] === v; return `<button type="button" class="chip" data-chip="${k}" data-v="${esc(v)}" aria-pressed="${on}" style="border:2px solid ${on ? '#2452C8' : '#B9C8E4'};background:${on ? '#2452C8' : '#FFFFFF'};color:${on ? '#FFFFFF' : '#0A1B3F'}">${esc(v)}</button>`; }).join('');
function summaryRows() {
  const d = form.d, e = edadDe();
  return [
    ['Nombre', ((d.nombres || '') + ' ' + (d.apellidos || '')).trim()], ['Fecha de nacimiento', d.nac ? d.nac.split('-').reverse().join('/') : ''], ['Edad', e],
    ['Celular', d.celular], ['Correo', d.correo], ['Madre', d.madre], ['Padre', d.padre], ['Hermano/a', d.hermano], ['Ocupación', d.ocupacion], ['Dirección', d.direccion], ['Parroquia', d.parroquia],
    ['Representante', d.repNombre], ['Cédula del representante', d.repCedula], ['Celular del representante', d.repCelular], ['Ocupación del representante', d.repOcupacion],
    ['Grupo sanguíneo', d.sangre], ['Enfermedad', d.enf ? (d.enf === 'Sí' ? 'Sí: ' + (d.enfCual || 'sin especificar') : 'No') : ''], ['Medicamento', d.med ? (d.med === 'Sí' ? 'Sí: ' + (d.medCual || 'sin especificar') : 'No') : ''],
    ['Alergia a medicamentos', d.alMed], ['Alergia a alimentos', d.alAli], ['Otras alergias', d.alOtros], ['Observaciones', d.obs]
  ].filter((r) => r[1]);
}
function validate(st) {
  const d = form.d;
  if (st === 1) {
    if (!(d.nombres || '').trim() || !(d.apellidos || '').trim()) return 'Escribe tus nombres y apellidos.';
    if (!(d.celular || '').trim()) return 'Escribe un número de celular para contactarte.';
    if (d.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.correo)) return 'Revisa el correo: parece incompleto.';
  }
  if (st === 2 && esMenor() && (!(d.repNombre || '').trim() || !(d.repCelular || '').trim())) return 'Como eres menor de edad, escribe el nombre y el celular de tu representante.';
  if (st === 4 && !form.consent) return 'Marca la casilla de confirmación para enviar.';
  return '';
}
function planillaTexto() { return 'PLANILLA DE INSCRIPCIÓN · JUMA Duaca\n\n' + summaryRows().map((r) => r[0] + ': ' + r[1]).join('\n'); }
function formHtml() {
  const st = form.step, d = form.d;
  if (form.done) {
    const wa = String(cfg.whatsapp || CFG.whatsapp || '').replace(/\D/g, '');
    return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', 'Perfil de inscripción misionero', 'pl-t')}<div style="padding:clamp(28px,5vw,56px)"><h3 class="h-display h-lg">Tu planilla está lista, ${esc((d.nombres || '').trim().split(' ')[0] || 'bienvenido')}</h3><p class="body" style="margin-top:12px;max-width:54ch">${form.saved ? 'Ya recibimos tu inscripción. ' : ''}Gracias por querer ser parte de JUMA. Descárgala y entrégala a un coordinador el domingo${wa ? ', o envíanosla por WhatsApp' : ''}.</p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:28px"><button type="button" class="btn btn-blue" data-dl>Descargar mi planilla</button>${wa ? `<a class="btn btn-blue" target="_blank" rel="noopener" href="https://wa.me/${wa}?text=${encodeURIComponent(planillaTexto())}">Enviar por WhatsApp</a>` : ''}<button type="button" class="btn btn-soft" data-close>Cerrar</button></div></div></div></div>`;
  }
  const names = ['Tus datos', 'Representante', 'Salud', 'Confirmar'];
  const prog = names.map((l, i) => `<div class="${i + 1 === st ? 'on' : (i + 1 < st ? 'ok' : '')}"><i aria-hidden="true"></i><span>${l}</span></div>`).join('');
  let body = '';
  if (st === 1 || st === 2) {
    const intro = st === 1 ? '<h3 class="h-display h-md">Tus datos</h3><p class="body" style="margin:8px 0 24px;font-size:15px">Los campos con * son obligatorios.</p>' : `<h3 class="h-display h-md">Representante</h3><p class="body" style="margin:8px 0 24px;font-size:15px">${esMenor() ? 'Eres menor de edad: necesitamos los datos de tu representante.' : 'Si eres menor de edad, completa los datos de tu representante.'}</p>`;
    body = intro + '<div style="display:flex;flex-wrap:wrap;gap:18px">' + FLD[st].map((f) => f[0] === '@edad' ? `<div class="fld"><span class="flabel">Edad</span><div class="fake num" id="edad-box">${edadDe() ? edadDe() + ' años' : 'Se calcula sola'}</div></div>` : inputHtml(f[0], f[1], f[2], f[3], f[4])).join('') + '</div>';
  } else if (st === 3) {
    body = `<h3 class="h-display h-md">Perfil de salud</h3><p class="body" style="margin:8px 0 24px;font-size:15px">Para cuidarte en retiros y actividades. Esta información es confidencial.</p>
<div class="qlabel">Grupo sanguíneo</div><div style="display:flex;flex-wrap:wrap;gap:10px;margin:10px 0 26px">${chips('sangre', ['A+','A-','B+','B-','AB+','AB-','O+','O-'])}</div>
<div class="qlabel">¿Padeces alguna enfermedad?</div><div style="display:flex;gap:10px;margin:10px 0 14px">${chips('enf', ['Sí','No'])}</div>${d.enf === 'Sí' ? `<div style="margin-bottom:22px">${inputHtml('enfCual', '¿Cuál?')}</div>` : ''}
<div class="qlabel" style="margin-top:14px">¿Tomas algún medicamento?</div><div style="display:flex;gap:10px;margin:10px 0 14px">${chips('med', ['Sí','No'])}</div>${d.med === 'Sí' ? `<div style="margin-bottom:22px">${inputHtml('medCual', '¿Cuál?')}</div>` : ''}
<div class="qlabel" style="margin:14px 0 12px">Alergias</div><div style="display:flex;flex-wrap:wrap;gap:18px">${inputHtml('alMed', 'Medicamentos')}${inputHtml('alAli', 'Alimentos')}${inputHtml('alOtros', 'Otras')}<div class="fld w"><label for="f-obs">Observaciones</label><textarea id="f-obs" data-k="obs" rows="3">${esc(d.obs || '')}</textarea></div></div>`;
  } else {
    body = `<h3 class="h-display h-md">Revisa y confirma</h3><p class="body" style="margin:8px 0 22px;font-size:15px">Verifica que todo esté bien antes de enviar.</p><dl style="margin:0;background:#fff;border:1px solid var(--line);border-radius:14px;padding:6px 22px">${summaryRows().map((r) => `<div style="display:flex;flex-wrap:wrap;gap:4px 18px;padding:12px 0;border-bottom:1px solid var(--mist)"><dt style="flex:0 0 190px;font-size:14px;font-weight:700;color:var(--royal)">${esc(r[0])}</dt><dd style="margin:0;flex:1 1 200px;min-width:0;font-size:15px;overflow-wrap:anywhere">${esc(r[1])}</dd></div>`).join('')}</dl>
<label style="display:flex;gap:14px;align-items:flex-start;margin-top:22px;padding:18px 20px;border-radius:14px;background:var(--mist);font-size:15px;line-height:1.55;cursor:pointer"><input type="checkbox" id="f-consent" ${form.consent ? 'checked' : ''} style="flex:0 0 auto;width:22px;height:22px;margin:2px 0 0"><span>Confirmo que los datos son verdaderos y, si soy menor de edad, que mi representante conoce y autoriza mi participación en JUMA.</span></label>`;
  }
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', 'Perfil de inscripción misionero', 'pl-t')}<div style="padding:clamp(22px,4vw,40px)"><div class="progress" role="group" aria-label="Paso ${st} de 4">${prog}</div>${body}${form.err ? `<p role="alert" style="margin:20px 0 0;padding:14px 18px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:15px;font-weight:700">${esc(form.err)}</p>` : ''}<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-top:30px"><div>${st > 1 ? '<button type="button" class="btn btn-soft" data-back>Atrás</button>' : ''}</div><div>${st < 4 ? '<button type="button" class="btn btn-blue" data-next>Siguiente</button>' : `<button type="button" class="btn btn-blue" data-submit ${form.sending ? 'disabled' : ''}>${form.sending ? 'Enviando…' : 'Enviar inscripción'}</button>`}</div></div></div></div></div>`;
}
function openForm() { form.step = 1; form.done = false; form.err = ''; form.consent = false; form.saved = false; openModal(formHtml()); }
function repaintForm() { modalRoot.innerHTML = formHtml(); const ov = $('.overlay', modalRoot); if (ov) { ov.style.animation = 'none'; const sh = $('.sheet', modalRoot); if (sh) sh.style.animation = 'none'; } }
modalRoot.addEventListener('input', (e) => {
  const k = e.target.dataset && e.target.dataset.k; if (!k || !$('#pl-t')) return;
  form.d[k] = e.target.value;
  if (k === 'nac') { const b = $('#edad-box'); if (b) b.textContent = edadDe() ? edadDe() + ' años' : 'Se calcula sola'; }
});
modalRoot.addEventListener('change', (e) => { if (e.target.id === 'f-consent') form.consent = e.target.checked; });
modalRoot.addEventListener('click', async (e) => {
  if (!$('#pl-t')) return;
  const chip = e.target.closest('[data-chip]');
  if (chip) { const k = chip.dataset.chip, v = chip.dataset.v; form.d[k] = form.d[k] === v ? '' : v; form.err = ''; repaintForm(); return; }
  if (e.target.closest('[data-back]')) { form.step = Math.max(1, form.step - 1); form.err = ''; repaintForm(); }
  if (e.target.closest('[data-next]')) { const er = validate(form.step); if (er) form.err = er; else { form.step++; form.err = ''; } repaintForm(); const s = $('.sheet', modalRoot); if (s) s.scrollIntoView({ block: 'start' }); }
  if (e.target.closest('[data-submit]')) {
    const er = validate(1) || validate(2) || validate(4);
    if (er) { form.err = er; repaintForm(); return; }
    form.sending = true; repaintForm();
    try { if (fb) { await fb.addDoc(fb.collection(fb.db, 'inscripciones'), { creado: fb.serverTimestamp(), datos: form.d, resumen: summaryRows().map((r) => r[0] + ': ' + r[1]).join('\n'), nombre: ((form.d.nombres || '') + ' ' + (form.d.apellidos || '')).trim(), celular: form.d.celular || '' }); form.saved = true; } } catch (x) { form.saved = false; }
    form.sending = false; form.done = true; repaintForm();
  }
  if (e.target.closest('[data-dl]')) {
    const html = '<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Planilla JUMA</title><style>body{font-family:Arial,sans-serif;max-width:720px;margin:32px auto;color:#0A1B3F}h1{color:#0C2D74;margin-bottom:4px}h2{font-size:14px;color:#3A4F75;margin-top:0;font-weight:normal}table{width:100%;border-collapse:collapse;margin-top:24px}td{padding:10px 8px;border-bottom:1px solid #D3DEF0;font-size:15px}td:first-child{width:38%;font-weight:bold;color:#2452C8}</style></head><body><h1>Perfil de inscripción misionero</h1><h2>Instituto Misioneros de la Consolata Barquisimeto · Juventud Misionera Allamaniana Duaca</h2><table>' + summaryRows().map((r) => '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>').join('') + '</table></body></html>';
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' })); a.download = 'Planilla-JUMA-' + ((form.d.apellidos || 'inscripcion').trim().replace(/[^A-Za-z0-9]+/g, '-')) + '.html'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
});
document.addEventListener('click', (e) => { if (e.target.closest('[data-open-form]')) openForm(); });

/* ===================== muro de mensajes (moderado) ===================== */
async function loadMuro() {
  const box = $('#muro'), sec = $('#muro-sec');
  if (!fb) { sec.classList.add('hide'); return; }
  try {
    const q = fb.query(fb.collection(fb.db, 'mensajes'), fb.where('aprobado', '==', true), fb.limit(30));
    const snap = await fb.getDocs(q);
    box.innerHTML = snap.docs.map((d) => d.data()).sort((a, b) => ((b.creado && b.creado.seconds) || 0) - ((a.creado && a.creado.seconds) || 0)).slice(0, 12).map((m) => { return `<div class="nota"><p>${esc(m.texto)}</p><b>${esc(m.nombre)}</b></div>`; }).join('');
  } catch (e) {}
}
$('#muro-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const n = $('#m-nombre').value.trim(), t = $('#m-texto').value.trim(), msg = $('#m-msg');
  if (!n || !t) return;
  try {
    await fb.addDoc(fb.collection(fb.db, 'mensajes'), { nombre: n.slice(0, 60), texto: t.slice(0, 400), aprobado: false, creado: fb.serverTimestamp() });
    msg.textContent = 'Gracias. Tu mensaje será revisado por un coordinador antes de publicarse.';
    $('#m-nombre').value = ''; $('#m-texto').value = '';
  } catch (x) { msg.textContent = 'No se pudo enviar. Intenta de nuevo más tarde.'; }
});

/* ===================== avisos al teléfono (notificaciones) ===================== */
function setupPush() {
  if (!fb || !fb.getToken || !CFG.vapidKey || !('Notification' in window) || !('serviceWorker' in navigator)) return;
  const b = document.createElement('button'); b.type = 'button'; b.className = 'btn btn-white pushbtn'; b.textContent = 'Recibir avisos de reuniones en este dispositivo';
  $('dl.facts').insertAdjacentElement('afterend', b);
  b.addEventListener('click', async () => {
    try {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') { b.textContent = 'Los avisos están bloqueados en este navegador'; return; }
      const reg = await navigator.serviceWorker.ready;
      const token = await fb.getToken(fb.messaging, { vapidKey: CFG.vapidKey, serviceWorkerRegistration: reg });
      if (token) { await fb.setDoc(fb.doc(fb.db, 'tokens', token), { creado: fb.serverTimestamp() }); b.textContent = 'Avisos activados. Gracias'; b.disabled = true; }
    } catch (e) { b.textContent = 'No se pudieron activar los avisos'; }
  });
  try { fb.onMessage(fb.messaging, (p) => { const n = p.notification || {}; const a = $('#aviso'); a.textContent = (n.title ? n.title + ': ' : '') + (n.body || ''); a.classList.remove('hide'); }); } catch (e) {}
}

/* ===================== firebase ===================== */
async function initFirebase() {
  if (!FB_ON) return;
  try {
    const base = 'https://www.gstatic.com/firebasejs/' + V + '/';
    const [app, fs, au, st] = await Promise.all([import(base + 'firebase-app.js'), import(base + 'firebase-firestore.js'), import(base + 'firebase-auth.js'), import(base + 'firebase-storage.js')]);
    const a = app.initializeApp(CFG);
    fb = { app: a, db: fs.getFirestore(a), auth: au.getAuth(a), storage: st.getStorage(a), au, st };
    ['doc', 'getDoc', 'setDoc', 'deleteDoc', 'updateDoc', 'collection', 'addDoc', 'getDocs', 'query', 'where', 'orderBy', 'limit', 'onSnapshot', 'serverTimestamp'].forEach((k) => { fb[k] = fs[k]; });
    try {
      const ms = await import(base + 'firebase-messaging.js');
      if (await ms.isSupported()) { fb.messaging = ms.getMessaging(a); fb.getToken = ms.getToken; fb.onMessage = ms.onMessage; }
    } catch (e) {}
    fb.onSnapshot(fb.doc(fb.db, 'site', 'config'), (snap) => {
      cfg = (snap.exists() && snap.data()) || {};
      try { localStorage.setItem('juma-cfg', JSON.stringify(cfg)); } catch (e) {}
      renderAll();
    }, () => {});
    loadMuro(); setupPush();
    await authInit();
  } catch (e) { console.warn('Firebase no disponible', e); }
}

/* ===================== acceso del administrador (enlace por correo) ===================== */
async function authInit() {
  const { isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged } = fb.au;
  if (isSignInWithEmailLink(fb.auth, location.href)) {
    let email = localStorage.getItem('juma-email') || prompt('Escribe el correo al que llegó el enlace de acceso');
    try { await signInWithEmailLink(fb.auth, email, location.href); localStorage.removeItem('juma-email'); history.replaceState(null, '', location.pathname); } catch (e) { alert('El enlace no es válido o ya venció. Pide uno nuevo.'); }
  }
  onAuthStateChanged(fb.auth, (u) => {
    isAdmin = !!(u && u.email && u.email.toLowerCase() === ADMIN);
    $('#fab-edit').classList.toggle('hide', !isAdmin);
    const l = $('#lnk-admin'); if (l) l.textContent = isAdmin ? 'Cerrar sesión de administrador' : 'Administrar';
  });
}
function openLogin() {
  openModal(`<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="lg-t"><div class="sheet" style="max-width:560px">${sheetHead('Solo coordinadores', 'Entrar a administrar', 'lg-t')}<div style="padding:clamp(22px,4vw,40px)"><p class="body" style="font-size:16px">Te enviaremos un enlace de acceso al correo oficial de JUMA (<b>${esc(ADMIN)}</b>). Ábrelo desde ese correo, en este mismo dispositivo, y quedarás dentro.</p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:24px"><button type="button" class="btn btn-blue" id="lg-send">Enviarme el enlace</button><button type="button" class="btn btn-soft" data-close>Cancelar</button></div><p id="lg-msg" class="body" style="margin-top:18px;font-size:15px" role="status"></p></div></div></div>`);
}
modalRoot.addEventListener('click', async (e) => {
  if (e.target.id !== 'lg-send') return;
  const m = $('#lg-msg'); m.textContent = 'Enviando…';
  try {
    await fb.au.sendSignInLinkToEmail(fb.auth, ADMIN, { url: location.origin + location.pathname, handleCodeInApp: true });
    localStorage.setItem('juma-email', ADMIN);
    m.textContent = 'Listo. Revisa la bandeja (y el spam) de ' + ADMIN + ' y abre el enlace.';
  } catch (x) { m.textContent = 'No se pudo enviar el enlace. Revisa que el dominio esté autorizado en Firebase.'; }
});
document.addEventListener('click', async (e) => {
  if (e.target.id === 'lnk-admin') { e.preventDefault(); if (!fb) { alert('El administrador aún no está activado. Sigue el LEEME para conectar Firebase.'); return; } if (isAdmin) await fb.au.signOut(fb.auth); else openLogin(); }
});

/* ===================== editor ===================== */
let dr = {}, tab = 'enc', fy = 0, edErr = '', edOk = false, edBusy = false, extra = { mens: [], insc: [] };
const setters = new Map(); let uid = 0;
function fld(label, val, set, o = {}) {
  const id = 'ed-' + (uid++); setters.set(id, set);
  const tag = o.area ? `<textarea id="${id}" data-ed="${id}" rows="${o.rows || 4}">${esc(val)}</textarea>` : `<input id="${id}" data-ed="${id}" type="text" value="${esc(val)}" placeholder="${esc(o.ph || '')}">`;
  return `<div class="fld ${o.w ? 'w' : ''}">${label ? `<label for="${id}">${label}</label>` : ''}${tag}</div>`;
}
function chk(label, on, set) { const id = 'ed-' + (uid++); setters.set(id, set); return `<label style="display:flex;gap:10px;align-items:center;min-height:52px;font-size:15px;font-weight:700"><input type="checkbox" id="${id}" data-edc="${id}" ${on ? 'checked' : ''} style="width:22px;height:22px;margin:0">${label}</label>`; }
const tabs = [['enc', 'Domingos'], ['dat', 'Hora y lugar'], ['act', 'Actividades'], ['for', 'Formación'], ['nov', 'Novedades'], ['fot', 'Fotos'], ['men', 'Mensajes'], ['ins', 'Inscripciones'], ['avi', 'Avisos']];
function editorBody() {
  setters.clear(); uid = 0;
  if (tab === 'enc') return '<p class="ehint">Escribe el tema de cada domingo o marca que no habrá reunión. Las fechas se calculan solas.</p>' + domingos().map((x) => `<div class="erow">${fld('Domingo ' + x.dia + ' de ' + x.mes, (dr.temas || {})[x.key] || '', (v) => { dr.temas = dr.temas || {}; dr.temas[x.key] = v; }, { ph: 'Tema del encuentro (opcional)' })}${chk('No habrá reunión', !!(dr.sinReunion || {})[x.key], (v) => { dr.sinReunion = dr.sinReunion || {}; dr.sinReunion[x.key] = v; })}</div>`).join('');
  if (tab === 'dat') return '<p class="ehint">Estos datos aparecen en la sección de domingos. El aviso se muestra como una franja azul arriba de toda la página; déjalo vacío para quitarlo.</p><div style="display:flex;flex-wrap:wrap;gap:18px">' + fld('Hora de la reunión', dr.hora || '', (v) => { dr.hora = v; }, { w: 1, ph: 'Ej.: 3:00 p. m.' }) + fld('Lugar de la reunión', dr.lugar || '', (v) => { dr.lugar = v; }, { w: 1, ph: 'Ej.: Salón parroquial' }) + fld('WhatsApp para recibir planillas (con código de país, sin +)', dr.whatsapp || '', (v) => { dr.whatsapp = v; }, { w: 1, ph: 'Ej.: 584121234567' }) + fld('Aviso en la parte de arriba de la página', dr.aviso || '', (v) => { dr.aviso = v; }, { w: 1, ph: 'Ej.: Este domingo la reunión será en el templo' }) + '</div>';
  if (tab === 'act') { let h = '<p class="ehint">Retiros, campamentos, misiones, jornadas… Las filas vacías no se muestran.</p>'; for (let i = 0; i < 6; i++) { const g = (k) => ((dr.actividades || [])[i] || {})[k] || ''; const s = (k) => (v) => { dr.actividades = dr.actividades || []; dr.actividades[i] = Object.assign({ t: '', f: '', d: '' }, dr.actividades[i], { [k]: v }); }; h += `<div class="erow">${fld('Actividad', g('t'), s('t'))}${fld('Fecha', g('f'), s('f'), { ph: 'Sábado 24 de octubre' })}${fld('Detalle', g('d'), s('d'), { w: 1 })}</div>`; } return h; }
  if (tab === 'for') {
    const fo = (dr.formacion || {})[String(fy)] || {}; const y = yearData(fy);
    const s = (k) => (v) => { dr.formacion = dr.formacion || {}; dr.formacion[String(fy)] = Object.assign({}, dr.formacion[String(fy)], { [k]: v }); };
    return `<p class="ehint">Elige el año y cambia su título, su texto o la lista de temas (un tema por línea).</p><div class="etabs">${YEARS.map((x, i) => `<button type="button" class="etab" data-fy="${i}" aria-pressed="${i === fy}">${x.name}</button>`).join('')}</div><div style="display:flex;flex-wrap:wrap;gap:18px">${fld('Título', fo.title != null ? fo.title : y.title, s('title'), { w: 1 })}${fld('Texto', fo.text != null ? fo.text : y.text, s('text'), { w: 1, area: 1 })}${fld('Temas (uno por línea)', fo.topicsText != null ? fo.topicsText : y.topics.map((t) => t.t).join('\n'), s('topicsText'), { w: 1, area: 1, rows: 10 })}</div>`;
  }
  if (tab === 'nov') return `<p class="ehint">Publica novedades con texto y una foto, un video corto o un enlace de YouTube. La más nueva aparece primero.</p><button type="button" class="btn btn-soft" data-newpost>Nueva entrada</button>${edBusy ? '<p class="ehint" style="margin-top:12px">Subiendo…</p>' : ''}` + (dr.posts || []).map((p, i) => `<div class="erow" style="flex-direction:column;align-items:stretch">${fld('Título', p.t || '', (v) => { dr.posts[i].t = v; }, { w: 1 })}${fld('Texto', p.x || '', (v) => { dr.posts[i].x = v; }, { w: 1, area: 1 })}${fld('Enlace de YouTube (opcional)', /youtu/.test(p.video || '') ? p.video : '', (v) => { dr.posts[i].video = v; if (v) dr.posts[i].foto = ''; }, { w: 1, ph: 'https://youtu.be/…' })}<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><label class="btn btn-soft btn-sm" style="cursor:pointer">Foto<input type="file" accept="image/*" data-up="foto" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0"></label><label class="btn btn-soft btn-sm" style="cursor:pointer">Video<input type="file" accept="video/*" data-up="video" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0"></label><span style="font-size:14px;color:var(--muted)">${p.video ? 'Video cargado' : (p.foto ? 'Foto cargada' : 'Sin foto ni video')}</span><button type="button" class="btn btn-soft btn-sm" data-rmpost="${i}" style="margin-left:auto">Quitar entrada</button></div></div>`).join('');
  if (tab === 'fot') return `<p class="ehint">Las fotos que subas aparecen al final de la galería. Se ajustan solas para que la página cargue rápido.</p><label class="btn btn-soft" style="cursor:pointer">Subir una foto<input type="file" accept="image/*" data-up="gal" style="position:absolute;width:1px;height:1px;opacity:0"></label>${edBusy ? '<p class="ehint" style="margin-top:12px">Subiendo…</p>' : ''}` + (dr.galeria || []).map((g, i) => `<div class="erow"><img class="ethumb" src="${esc(g.url)}" alt="">${fld('Pie de foto', g.cap || '', (v) => { dr.galeria[i].cap = v; })}<button type="button" class="btn btn-soft btn-sm" data-rmgal="${i}">Quitar</button></div>`).join('');
  if (tab === 'men') return '<p class="ehint">Los mensajes del público no se ven hasta que los apruebes.</p>' + (extra.mens.length ? extra.mens.map((m) => `<div class="pend"><p><b>${esc(m.nombre)}</b>: ${esc(m.texto)} ${m.aprobado ? '<em>(publicado)</em>' : ''}</p>${m.aprobado ? '' : `<button type="button" class="btn btn-blue btn-sm" data-ok="${m.id}">Aprobar</button>`}<button type="button" class="btn btn-soft btn-sm" data-delm="${m.id}">Borrar</button></div>`).join('') : '<p class="ehint">No hay mensajes todavía.</p>');
  if (tab === 'ins') return `<p class="ehint">Inscripciones recibidas desde la página. Contienen datos personales y de salud: descárgalas y guárdalas con cuidado.</p><button type="button" class="btn btn-soft" data-csv>Descargar todo (CSV)</button>` + extra.insc.map((m) => `<div class="pend"><p><b>${esc(m.nombre)}</b> · ${esc(m.celular)}<br><span style="color:var(--muted)">${esc(m.fecha)}</span></p><button type="button" class="btn btn-soft btn-sm" data-seei="${m.id}">Ver</button><button type="button" class="btn btn-soft btn-sm" data-deli="${m.id}">Borrar</button></div>`).join('');
  if (tab === 'avi') return `<p class="ehint">Escribe un aviso y se enviará como notificación a los dispositivos que activaron los avisos. Requiere haber desplegado la función de envío (ver LEEME). También puedes enviarlo desde Firebase Console → Messaging.</p><div style="display:flex;flex-wrap:wrap;gap:18px">${fld('Título', extra.avT || '', (v) => { extra.avT = v; }, { w: 1, ph: 'Reunión de este domingo' })}${fld('Mensaje', extra.avM || '', (v) => { extra.avM = v; }, { w: 1, area: 1, rows: 3 })}</div><button type="button" class="btn btn-blue" style="margin-top:18px" data-sendaviso>Enviar aviso</button>`;
  return '';
}
function editorHtml() {
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="ed-t" id="ed-ov"><div class="sheet">${sheetHead('Solo tú ves esto', 'Editar la página', 'ed-t')}<div style="padding:clamp(22px,4vw,40px)"><div class="etabs" role="group" aria-label="Qué quieres editar">${tabs.map(([k, t]) => `<button type="button" class="etab" data-tab="${k}" aria-pressed="${k === tab}">${t}</button>`).join('')}</div><div id="ed-body">${editorBody()}</div>${edErr ? `<p role="alert" style="margin:20px 0 0;padding:14px 18px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:15px;font-weight:700">${esc(edErr)}</p>` : ''}${edOk ? '<p class="eok" role="status">Guardado. Ya lo ven todos los visitantes.</p>' : ''}<div style="display:flex;flex-wrap:wrap;justify-content:flex-end;gap:12px;margin-top:28px"><button type="button" class="btn btn-soft" data-close>Cerrar</button><button type="button" class="btn btn-blue" data-save>Guardar cambios</button></div></div></div></div>`;
}
function repaintEd(full) {
  if (full) { const sc = $('#ed-ov'); const top = sc ? sc.scrollTop : 0; modalRoot.innerHTML = editorHtml(); const o = $('#ed-ov'); if (o) { o.style.animation = 'none'; $('.sheet', o).style.animation = 'none'; o.scrollTop = top; } }
  else { $('#ed-body').innerHTML = editorBody(); }
}
async function loadExtra() {
  try {
    const m = await fb.getDocs(fb.query(fb.collection(fb.db, 'mensajes'), fb.orderBy('creado', 'desc'), fb.limit(60)));
    extra.mens = m.docs.map((d) => Object.assign({ id: d.id }, d.data()));
    const i = await fb.getDocs(fb.query(fb.collection(fb.db, 'inscripciones'), fb.orderBy('creado', 'desc'), fb.limit(300)));
    extra.insc = i.docs.map((d) => { const x = d.data(); return Object.assign({ id: d.id, fecha: x.creado && x.creado.toDate ? x.creado.toDate().toLocaleString('es-VE') : '' }, x); });
    if ($('#ed-ov')) repaintEd(true);
  } catch (e) {}
}
$('#fab-edit').addEventListener('click', () => { dr = JSON.parse(JSON.stringify(cfg || {})); tab = 'enc'; fy = 0; edErr = ''; edOk = false; openModal(editorHtml()); loadExtra(); });
async function shrink(file) {
  try {
    const bmp = await createImageBitmap(file); const k = Math.min(1, 1400 / Math.max(bmp.width, bmp.height));
    const cv = document.createElement('canvas'); cv.width = Math.round(bmp.width * k); cv.height = Math.round(bmp.height * k);
    cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
    return (await new Promise((r) => cv.toBlob(r, 'image/jpeg', 0.8))) || file;
  } catch (e) { return file; }
}
async function upload(blob, name) {
  const r = fb.st.ref(fb.storage, 'media/' + Date.now() + '-' + name.replace(/[^\w.-]+/g, '_'));
  await fb.st.uploadBytes(r, blob); return fb.st.getDownloadURL(r);
}
modalRoot.addEventListener('input', (e) => { const id = e.target.dataset && e.target.dataset.ed; if (id && setters.has(id)) { setters.get(id)(e.target.value); edOk = false; } });
modalRoot.addEventListener('change', async (e) => {
  const t = e.target; const c = t.dataset && t.dataset.edc;
  if (c && setters.has(c)) { setters.get(c)(t.checked); return; }
  const kind = t.dataset && t.dataset.up; if (!kind || !t.files || !t.files[0]) return;
  const f = t.files[0]; const i = +t.dataset.i;
  if (kind === 'video' && f.size > 50 * 1024 * 1024) { edErr = 'El video pesa más de 50 MB. Súbelo a YouTube y pega el enlace.'; repaintEd(true); return; }
  edBusy = true; edErr = ''; repaintEd(true);
  try {
    const url = await upload(kind === 'video' ? f : await shrink(f), f.name);
    if (kind === 'gal') { dr.galeria = (dr.galeria || []).concat([{ url, cap: '' }]); }
    else if (kind === 'foto') { dr.posts[i].foto = url; dr.posts[i].video = ''; }
    else { dr.posts[i].video = url; dr.posts[i].foto = ''; }
  } catch (x) { edErr = 'No se pudo subir el archivo. Revisa que Storage esté activado en Firebase.'; }
  edBusy = false; repaintEd(true);
});
modalRoot.addEventListener('click', async (e) => {
  if (!$('#ed-t')) return; const t = e.target;
  const q = (s) => t.closest(s);
  if (q('[data-tab]')) { tab = q('[data-tab]').dataset.tab; edErr = ''; repaintEd(true); return; }
  if (q('[data-fy]')) { fy = +q('[data-fy]').dataset.fy; repaintEd(true); return; }
  if (q('[data-newpost]')) { dr.posts = [{ id: String(Date.now()), t: '', x: '', fecha: new Date().toISOString(), foto: '', video: '' }].concat(dr.posts || []); repaintEd(true); return; }
  if (q('[data-rmpost]')) { dr.posts.splice(+q('[data-rmpost]').dataset.rmpost, 1); repaintEd(true); return; }
  if (q('[data-rmgal]')) { dr.galeria.splice(+q('[data-rmgal]').dataset.rmgal, 1); repaintEd(true); return; }
  if (q('[data-ok]')) { try { await fb.updateDoc(fb.doc(fb.db, 'mensajes', q('[data-ok]').dataset.ok), { aprobado: true }); } catch (x) {} await loadExtra(); loadMuro(); return; }
  if (q('[data-delm]')) { try { await fb.deleteDoc(fb.doc(fb.db, 'mensajes', q('[data-delm]').dataset.delm)); } catch (x) {} await loadExtra(); loadMuro(); return; }
  if (q('[data-deli]')) { if (confirm('¿Borrar esta inscripción?')) { try { await fb.deleteDoc(fb.doc(fb.db, 'inscripciones', q('[data-deli]').dataset.deli)); } catch (x) {} await loadExtra(); } return; }
  if (q('[data-seei]')) { const m = extra.insc.find((x) => x.id === q('[data-seei]').dataset.seei); if (m) alert(m.resumen || ''); return; }
  if (q('[data-csv]')) {
    const rows = extra.insc.map((m) => { const d = m.datos || {}; return [m.fecha, d.nombres, d.apellidos, d.nac, d.celular, d.correo, d.madre, d.padre, d.direccion, d.parroquia, d.repNombre, d.repCelular, d.sangre, d.enf === 'Sí' ? d.enfCual : 'No', d.med === 'Sí' ? d.medCual : 'No', d.alMed, d.alAli, d.alOtros, d.obs].map((x) => '"' + String(x || '').replace(/"/g, '""') + '"').join(','); });
    const csv = '﻿"Fecha","Nombres","Apellidos","Nacimiento","Celular","Correo","Madre","Padre","Dirección","Parroquia","Representante","Cel. representante","Sangre","Enfermedad","Medicamento","Alergia med.","Alergia alim.","Otras alergias","Observaciones"\n' + rows.join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); a.download = 'inscripciones-juma.csv'; a.click(); return;
  }
  if (q('[data-sendaviso]')) {
    if (!extra.avT || !extra.avM) { edErr = 'Escribe el título y el mensaje del aviso.'; repaintEd(true); return; }
    try { await fb.addDoc(fb.collection(fb.db, 'avisos'), { titulo: extra.avT, mensaje: extra.avM, creado: fb.serverTimestamp() }); edErr = ''; edOk = true; extra.avT = ''; extra.avM = ''; } catch (x) { edErr = 'No se pudo registrar el aviso.'; }
    repaintEd(true); return;
  }
  if (q('[data-save]')) {
    const c = JSON.parse(JSON.stringify(dr));
    c.actividades = (c.actividades || []).filter((a) => a && String(a.t || '').trim());
    c.posts = (c.posts || []).filter((p) => p && (String(p.t || '').trim() || String(p.x || '').trim()));
    c.updatedAt = new Date().toISOString();
    try { await fb.setDoc(fb.doc(fb.db, 'site', 'config'), c); dr = c; edOk = true; edErr = ''; } catch (x) { edOk = false; edErr = 'No se pudo guardar. Verifica que hayas entrado como administrador.'; }
    repaintEd(true);
  }
});

/* ===================== arranque ===================== */
(function boot() {
  const f = $('.foot-in'); const lk = document.createElement('a'); lk.href = '#'; lk.id = 'lnk-admin'; lk.textContent = 'Administrar'; lk.style.cssText = 'font-size:14px;padding:10px 0;color:var(--muted-lt)';
  const c = $('.foot > div:last-child'); if (c) c.appendChild(document.createTextNode(' · ')), c.appendChild(lk);
  renderAll(); setupUnroll();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
  initFirebase();
})();
