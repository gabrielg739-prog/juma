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

let cfg = {};      // contenido publicado (contenido.json) o el borrador del editor
let pub = {};      // contenido publicado tal como está en GitHub
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
  { foto: 'img/new-lectura-palabra.jpg', pos: '50% 40%', alt: 'Jóvenes de JUMA leyendo la Palabra en grupo' },
  { foto: 'img/cruz.jpg', pos: '40% 40%', alt: 'Joven de JUMA con la cruz misionera por las calles de Duaca' },
  { foto: 'img/circulo.jpg', pos: '70% 55%', alt: 'Misionero guiando una dinámica con jóvenes en círculo' },
  { foto: 'img/comunidad.jpg', pos: '28% 50%', alt: 'Misioneros de JUMA junto a niños y familias de una comunidad' }
];
const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

/* ===================== pintar contenido editable ===================== */
let yearSel = 0;
function renderAll() {
  renderAviso(); renderDomingos(); renderActs(); renderFormacion(); renderPosts(); renderGalExtra(); renderGalFija(); renderGalOrden(); renderTes();
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
/* Fotos fijas de la galería: se pueden ocultar o cambiar su pie desde el editor. */
const GAL_FIJA = Array.from(document.querySelectorAll('#galeria figure.gal')).filter((f) => !f.closest('#gal-extra')).map((f) => {
  const im = f.querySelector('img'); const cap = f.querySelector('figcaption');
  return { el: f, src: im ? im.getAttribute('src') : '', cap: cap ? cap.textContent : '', capEl: cap };
});
function renderGalFija() {
  const ocultas = new Set(cfg.ocultas || []); const pies = cfg.pies || {};
  GAL_FIJA.forEach((g) => {
    g.el.style.display = ocultas.has(g.src) ? 'none' : '';
    if (g.capEl) g.capEl.textContent = pies[g.src] != null && String(pies[g.src]).trim() ? pies[g.src] : g.cap;
  });
}
function renderTes() {
  const sec = $('#testimonios'); if (!sec) return;
  const list = (cfg.testimonios || []).filter((t) => t && String(t.x || '').trim());
  sec.classList.toggle('hide', !list.length);
  $('#testimonios-list').innerHTML = list.map((t) => `<figure class="tes">${t.foto ? `<img src="${esc(t.foto)}" alt="" loading="lazy">` : ''}<blockquote>“${esc(t.x)}”</blockquote><figcaption><b>${esc(t.n || '')}</b>${t.r ? ' · ' + esc(t.r) : ''}</figcaption></figure>`).join('');
}
function renderGalExtra() {
  const box = $('#galeria .gallery'); if (!box) return;
  $$('figure[data-extra]', box).forEach((f) => f.remove());
  (cfg.galeria || []).filter((g) => g && g.url).forEach((g) => {
    const f = document.createElement('figure'); f.className = 'gal'; f.setAttribute('data-extra', '1');
    f.innerHTML = `<img class="photo" loading="lazy" src="${esc(g.url)}" alt="${esc(g.cap || 'Foto de JUMA')}"><figcaption>${esc(g.cap || '')}</figcaption>`;
    box.appendChild(f);
  });
}
/* Orden de la galería: primero las fotos en el orden elegido en el editor, luego el resto en su orden original. */
function galKey(f) { const im = f.querySelector('img'); return im ? im.getAttribute('src') : ''; }
function renderGalOrden() {
  const box = $('#galeria .gallery'); if (!box) return;
  const figs = GAL_FIJA.map((g) => g.el).concat($$('figure[data-extra]', box));
  const pos = new Map((cfg.orden || []).map((k, i) => [k, i]));
  figs.map((f, i) => ({ f, i, p: pos.has(galKey(f)) ? pos.get(galKey(f)) : 1e6 + i }))
    .sort((a, b) => a.p - b.p).forEach((x) => box.appendChild(x.f));
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
const WA_DEFAULT = '584120545307,584125667767';
function waNums() { return String(cfg.whatsapp || WA_DEFAULT).split(/[,;\n]+/).map((x) => x.replace(/\D/g, '')).map((x) => (x.startsWith('0') ? '58' + x.slice(1) : x)).filter((x) => x.length >= 10).slice(0, 4); }
function waLabel(n) { const d = n.startsWith('58') ? '0' + n.slice(2) : n; return d.length === 11 ? d.slice(0, 4) + '-' + d.slice(4, 7) + '-' + d.slice(7) : d; }
function planillaTexto() { return 'PLANILLA DE INSCRIPCIÓN · JUMA Duaca\n\n' + summaryRows().map((r) => r[0] + ': ' + r[1]).join('\n'); }
function formHtml() {
  const st = form.step, d = form.d;
  if (form.done) {
    const wa = waNums();
    return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', 'Perfil de inscripción misionero', 'pl-t')}<div style="padding:clamp(28px,5vw,56px)"><h3 class="h-display h-lg">Tu planilla está lista, ${esc((d.nombres || '').trim().split(' ')[0] || 'bienvenido')}</h3><p class="body" style="margin-top:12px;max-width:54ch">${form.saved ? 'Ya recibimos tu inscripción. ' : ''}Gracias por querer ser parte de JUMA. ${wa.length ? 'Envíala por WhatsApp a uno de nuestros coordinadores: se abrirá con tus datos ya escritos y solo tienes que pulsar enviar. También puedes descargarla y entregarla el domingo.' : 'Descárgala y entrégala a un coordinador el domingo.'}</p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:28px">${wa.map((n) => `<a class="btn btn-blue" target="_blank" rel="noopener" href="https://wa.me/${n}?text=${encodeURIComponent(planillaTexto())}">Enviar por WhatsApp a ${esc(waLabel(n))}</a>`).join('')}<button type="button" class="btn btn-soft" data-dl>Descargar mi planilla</button><button type="button" class="btn btn-soft" data-close>Cerrar</button></div></div></div></div>`;
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

/* ===================== editor: clave maestra + contenido.json ===================== */
/* Nadie más ve el editor. Los cambios se guardan como borrador en este navegador y se publican
   subiendo el archivo contenido.json al repositorio de GitHub. */
const PASS_HASH = '3e59691dec3e065c5739943a603c5c121329d499cc48c77ae62da74d312d82eb';
const DRAFT = 'juma-borrador';
const normPass = (t) => String(t || '').trim().toLowerCase().replace(/\s+/g, ' ');
function sha256(str) {
  const K = [], H = []; let n = 0;
  for (let c = 2; n < 64; c++) {
    let prime = true; for (let d = 2; d * d <= c; d++) if (c % d === 0) { prime = false; break; }
    if (!prime) continue;
    if (n < 8) H[n] = (Math.pow(c, 1 / 2) * 4294967296) | 0;
    K[n++] = (Math.pow(c, 1 / 3) * 4294967296) | 0;
  }
  const b = Array.from(new TextEncoder().encode(str)); const bits = b.length * 8;
  b.push(0x80); while (b.length % 64 !== 56) b.push(0);
  b.push(0, 0, 0, 0, (bits >>> 24) & 255, (bits >>> 16) & 255, (bits >>> 8) & 255, bits & 255);
  const w = new Array(64); const r = (x, k) => (x >>> k) | (x << (32 - k));
  for (let i = 0; i < b.length; i += 64) {
    for (let j = 0; j < 16; j++) w[j] = (b[i + 4 * j] << 24) | (b[i + 4 * j + 1] << 16) | (b[i + 4 * j + 2] << 8) | b[i + 4 * j + 3];
    for (let j = 16; j < 64; j++) { const s0 = r(w[j - 15], 7) ^ r(w[j - 15], 18) ^ (w[j - 15] >>> 3); const s1 = r(w[j - 2], 17) ^ r(w[j - 2], 19) ^ (w[j - 2] >>> 10); w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0; }
    let [a, bb, c, d, e, f, g, h] = H;
    for (let j = 0; j < 64; j++) {
      const t1 = (h + (r(e, 6) ^ r(e, 11) ^ r(e, 25)) + ((e & f) ^ (~e & g)) + K[j] + w[j]) | 0;
      const t2 = ((r(a, 2) ^ r(a, 13) ^ r(a, 22)) + ((a & bb) ^ (a & c) ^ (bb & c))) | 0;
      h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = bb; bb = a; a = (t1 + t2) | 0;
    }
    H[0] = (H[0] + a) | 0; H[1] = (H[1] + bb) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
    H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
  }
  return H.map((x) => (x >>> 0).toString(16).padStart(8, '0')).join('');
}
const clone = (o) => JSON.parse(JSON.stringify(o || {}));
function readDraft() { try { const s = localStorage.getItem(DRAFT); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function writeDraft(o) { try { localStorage.setItem(DRAFT, JSON.stringify(o)); return true; } catch (e) { return false; } }
/* Usa el borrador solo si tiene cambios sin guardar o es más nuevo que lo publicado. */
function pickDraft() { const d = readDraft(); if (d && (d._dirty || String(d.actualizado || '') > String(pub.actualizado || ''))) return d; return null; }
const isEditor = () => { try { return sessionStorage.getItem('juma-ed') === '1'; } catch (e) { return false; } };

/* ===================== publicar directo en GitHub ===================== */
/* La llave (token) se guarda SOLO en este navegador; nunca va dentro del código de la página. */
const GH = (() => {
  let owner = 'gabrielg739-prog', repo = 'juma';
  try { if (/\.github\.io$/.test(location.hostname)) { owner = location.hostname.split('.')[0]; const seg = location.pathname.split('/').filter(Boolean)[0]; if (seg) repo = seg; } } catch (e) {}
  let api = 'https://api.github.com'; try { api = localStorage.getItem('juma-gh-api') || api; } catch (e) {}
  return { owner, repo, branch: 'main', api };
})();
const ghToken = () => { try { return localStorage.getItem('juma-gh-token') || ''; } catch (e) { return ''; } };
const enc64 = (str) => { const b = new TextEncoder().encode(str); let s = ''; for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(s); };
const dec64 = (b64) => { const bin = atob(String(b64 || '').replace(/\s/g, '')); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new TextDecoder().decode(u); };
async function gh(path, opts = {}, token = ghToken()) {
  const r = await fetch(GH.api + path, Object.assign({}, opts, { headers: Object.assign({ Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + token, 'X-GitHub-Api-Version': '2022-11-28' }, opts.body ? { 'Content-Type': 'application/json' } : {}) }));
  let data = null; try { data = await r.json(); } catch (e) {}
  return { ok: r.ok, status: r.status, data };
}
const ghPath = (f) => '/repos/' + GH.owner + '/' + GH.repo + '/contents/' + f.split('/').map(encodeURIComponent).join('/');
async function ghGet(file) { const r = await gh(ghPath(file) + '?ref=' + GH.branch + '&t=' + Date.now()); return r.ok ? r.data : null; }
async function ghPut(file, b64, sha, msg) {
  const body = { message: msg, content: b64, branch: GH.branch }; if (sha) body.sha = sha;
  const r = await gh(ghPath(file), { method: 'PUT', body: JSON.stringify(body) });
  if (!r.ok) { const e = new Error('put'); e.status = r.status; throw e; }
  return r.data;
}
async function ghDelete(file, sha) { return gh(ghPath(file), { method: 'DELETE', body: JSON.stringify({ message: 'Limpia ' + file, sha, branch: GH.branch }) }); }
async function ghCheck(token) {
  const r = await gh('/repos/' + GH.owner + '/' + GH.repo, {}, token);
  if (!r.ok) return r.status === 401 ? 'La llave no es válida. Revisa que la copiaste completa.' : 'La llave no tiene acceso al repositorio ' + GH.repo + '.';
  if (!(r.data && r.data.permissions && r.data.permissions.push)) return 'La llave puede leer pero no escribir. En GitHub, dale el permiso «Contents: Read and write».';
  return '';
}
const uploaded = new Map(); // foto (data URL) -> ruta ya subida en esta sesión
let ghState = '', ghMsg = '';

let dr = {}, tab = 'enc', fy = 0, edErr = '', edOk = '', edBusy = false, draftWarn = false;
const setters = new Map(); let uid = 0;
function fld(label, val, set, o = {}) {
  const id = 'ed-' + (uid++); setters.set(id, set);
  const tag = o.area ? `<textarea id="${id}" data-ed="${id}" rows="${o.rows || 4}">${esc(val)}</textarea>` : `<input id="${id}" data-ed="${id}" type="text" value="${esc(val)}" placeholder="${esc(o.ph || '')}">`;
  return `<div class="fld ${o.w ? 'w' : ''}">${label ? `<label for="${id}">${label}</label>` : ''}${tag}</div>`;
}
function chk(label, on, set) { const id = 'ed-' + (uid++); setters.set(id, set); return `<label style="display:flex;gap:10px;align-items:center;min-height:52px;font-size:15px;font-weight:700"><input type="checkbox" id="${id}" data-edc="${id}" ${on ? 'checked' : ''} style="width:22px;height:22px;margin:0">${label}</label>`; }
const tabs = [['enc', 'Domingos'], ['dat', 'Hora, lugar y WhatsApp'], ['act', 'Actividades'], ['for', 'Formación'], ['nov', 'Novedades'], ['fot', 'Fotos'], ['tes', 'Testimonios'], ['pub', 'Conexión con GitHub']];
function editorBody() {
  setters.clear(); uid = 0;
  if (tab === 'enc') return '<p class="ehint">Escribe el tema de cada domingo o marca que no habrá reunión. Las fechas se calculan solas.</p>' + domingos().map((x) => `<div class="erow">${fld('Domingo ' + x.dia + ' de ' + x.mes, (dr.temas || {})[x.key] || '', (v) => { dr.temas = dr.temas || {}; dr.temas[x.key] = v; }, { ph: 'Tema del encuentro (opcional)' })}${chk('No habrá reunión', !!(dr.sinReunion || {})[x.key], (v) => { dr.sinReunion = dr.sinReunion || {}; dr.sinReunion[x.key] = v; })}</div>`).join('');
  if (tab === 'dat') return '<p class="ehint">La hora y el lugar aparecen en la sección de domingos. El aviso se muestra como una franja azul arriba de toda la página; déjalo vacío para quitarlo.</p><div style="display:flex;flex-wrap:wrap;gap:18px">' + fld('Hora de la reunión', dr.hora || '', (v) => { dr.hora = v; }, { w: 1, ph: 'Ej.: 3:00 p. m.' }) + fld('Lugar de la reunión', dr.lugar || '', (v) => { dr.lugar = v; }, { w: 1, ph: 'Ej.: Salón parroquial' }) + '<div class="w" style="flex:1 1 100%"><b style="font-size:15px">Números de WhatsApp que reciben las planillas</b><p class="ehint" style="margin:4px 0 0">Escríbelos como los marcas en Venezuela, por ejemplo 0412-054-5307. Deja vacío el que no uses.</p></div>' + waFields() + fld('Aviso en la parte de arriba de la página', dr.aviso || '', (v) => { dr.aviso = v; }, { w: 1, ph: 'Ej.: Este domingo la reunión será en el templo' }) + '</div>';
  if (tab === 'act') { let h = '<p class="ehint">Retiros, campamentos, misiones, jornadas… Las filas vacías no se muestran.</p>'; for (let i = 0; i < 6; i++) { const g = (k) => ((dr.actividades || [])[i] || {})[k] || ''; const s = (k) => (v) => { dr.actividades = dr.actividades || []; dr.actividades[i] = Object.assign({ t: '', f: '', d: '' }, dr.actividades[i], { [k]: v }); }; h += `<div class="erow">${fld('Actividad', g('t'), s('t'))}${fld('Fecha', g('f'), s('f'), { ph: 'Sábado 24 de octubre' })}${fld('Detalle', g('d'), s('d'), { w: 1 })}</div>`; } return h; }
  if (tab === 'for') {
    const fo = (dr.formacion || {})[String(fy)] || {}; const y = YEARS[fy];
    const s = (k) => (v) => { dr.formacion = dr.formacion || {}; dr.formacion[String(fy)] = Object.assign({}, dr.formacion[String(fy)], { [k]: v }); };
    return `<p class="ehint">Elige el año y cambia su título, su texto o la lista de temas (un tema por línea).</p><div class="etabs">${YEARS.map((x, i) => `<button type="button" class="etab" data-fy="${i}" aria-pressed="${i === fy}">${x.name}</button>`).join('')}</div><div style="display:flex;flex-wrap:wrap;gap:18px">${fld('Título', fo.title != null ? fo.title : y.title, s('title'), { w: 1 })}${fld('Texto', fo.text != null ? fo.text : y.text, s('text'), { w: 1, area: 1 })}${fld('Temas (uno por línea)', fo.topicsText != null ? fo.topicsText : y.topics.map((t) => t.t).join('\n'), s('topicsText'), { w: 1, area: 1, rows: 10 })}</div>`;
  }
  if (tab === 'nov') return `<p class="ehint">Publica novedades con texto y una foto, o con un enlace de YouTube para los videos. La más nueva aparece primero.</p><button type="button" class="btn btn-soft" data-newpost>Nueva entrada</button>${edBusy ? '<p class="ehint" style="margin-top:12px">Preparando la foto…</p>' : ''}` + (dr.posts || []).map((p, i) => `<div class="erow" style="flex-direction:column;align-items:stretch">${fld('Título', p.t || '', (v) => { dr.posts[i].t = v; }, { w: 1 })}${fld('Texto', p.x || '', (v) => { dr.posts[i].x = v; }, { w: 1, area: 1 })}${fld('Enlace de YouTube (opcional)', p.video || '', (v) => { dr.posts[i].video = v; }, { w: 1, ph: 'https://youtu.be/…' })}<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><label class="btn btn-soft btn-sm" style="cursor:pointer;position:relative">Elegir foto<input type="file" accept="image/*" data-up="foto" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0"></label>${p.foto ? `<img class="ethumb" src="${esc(p.foto)}" alt="">` : '<span style="font-size:14px;color:var(--muted)">Sin foto</span>'}<button type="button" class="btn btn-soft btn-sm" data-rmpost="${i}" style="margin-left:auto">Quitar entrada</button></div></div>`).join('');
  if (tab === 'fot') {
    const items = galItems(dr); const ocultas = new Set(dr.ocultas || []); const pies = dr.pies || {};
    const rows = items.map((it, n) => {
      const off = it.kind === 'fija' && ocultas.has(it.key);
      const cap = it.kind === 'fija' ? (pies[it.key] != null ? pies[it.key] : it.cap) : it.cap;
      const set = it.kind === 'fija' ? (v) => { dr.pies = dr.pies || {}; dr.pies[it.key] = v; } : (v) => { dr.galeria[it.idx].cap = v; };
      const quitar = it.kind === 'fija' ? `<button type="button" class="btn btn-soft btn-sm" data-hidefija="${n}">${off ? 'Mostrar' : 'Quitar'}</button>` : `<button type="button" class="btn btn-soft btn-sm" data-rmgal="${it.idx}">Borrar</button>`;
      return `<div class="erow" style="${off ? 'opacity:.5' : ''}"><div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:0 0 auto"><span style="font-weight:800;font-size:14px;color:var(--royal)">${n + 1}</span><button type="button" class="btn btn-soft btn-sm" data-mv="${n}" data-d="-1" aria-label="Subir" ${n === 0 ? 'disabled' : ''}>↑</button><button type="button" class="btn btn-soft btn-sm" data-mv="${n}" data-d="1" aria-label="Bajar" ${n === items.length - 1 ? 'disabled' : ''}>↓</button></div><img class="ethumb" src="${esc(it.src)}" alt="" loading="lazy">${fld(off ? 'Oculta (no se ve en la página)' : (it.kind === 'nueva' ? 'Foto nueva · pie de foto' : 'Pie de foto'), cap, set)}<div style="display:flex;flex-direction:column;gap:6px">${quitar}<button type="button" class="btn btn-soft btn-sm" data-top="${n}" ${n === 0 ? 'disabled' : ''}>Al inicio</button></div></div>`;
    }).join('');
    return `<p class="ehint">Agrega fotos, cambia su pie, quítalas o muévelas con las flechas ↑ ↓ (o «Al inicio»). El número es su lugar en la galería. Las fotos que quitas no se borran: puedes volver a mostrarlas.</p><label class="btn btn-blue" style="cursor:pointer;position:relative">Agregar fotos nuevas<input type="file" accept="image/*" multiple data-up="gal" style="position:absolute;width:1px;height:1px;opacity:0"></label>${edBusy ? '<p class="ehint" style="margin-top:12px">Preparando las fotos…</p>' : ''}<h3 class="h-display" style="font-size:22px;margin:22px 0 4px">Fotos de la galería (${items.length})</h3>${rows}`;
  }

  if (tab === 'tes') return `<p class="ehint">Escribe experiencias de jóvenes, familias o misioneros. Se muestran en la sección «Experiencias que nos marcaron». Si no hay ninguna, la sección no aparece.</p><button type="button" class="btn btn-blue" data-newtes>Nuevo testimonio</button>${edBusy ? '<p class="ehint" style="margin-top:12px">Preparando la foto…</p>' : ''}` + (dr.testimonios || []).map((x, i) => `<div class="erow" style="flex-direction:column;align-items:stretch">${fld('Nombre', x.n || '', (v) => { dr.testimonios[i].n = v; }, { w: 1, ph: 'Ej.: María Pérez' })}${fld('¿Quién es? (opcional)', x.r || '', (v) => { dr.testimonios[i].r = v; }, { w: 1, ph: 'Ej.: joven de 2.º año, mamá de un misionero' })}${fld('Testimonio', x.x || '', (v) => { dr.testimonios[i].x = v; }, { w: 1, area: 1, rows: 4 })}<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><label class="btn btn-soft btn-sm" style="cursor:pointer;position:relative">Elegir foto<input type="file" accept="image/*" data-up="tes" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0"></label>${x.foto ? `<img class="ethumb" src="${esc(x.foto)}" alt="">` : '<span style="font-size:14px;color:var(--muted)">Sin foto</span>'}<button type="button" class="btn btn-soft btn-sm" data-rmtes="${i}" style="margin-left:auto">Quitar</button></div></div>`).join('');
  if (tab === 'pub') {
    const on = !!ghToken();
    return `<p class="ehint">${on ? '<b style="color:#17824A">✔ Conectado.</b> Al pulsar <b>Publicar</b>, los cambios se suben solos a tu GitHub y todos los ven en 1 o 2 minutos.' : '<b>Aún no está conectado.</b> Conéctalo una sola vez y el botón <b>Publicar</b> subirá los cambios solo, sin descargar archivos.'}</p>
<ol class="ehint" style="padding-left:20px;line-height:1.7">
<li>Abre <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener"><b>este enlace</b></a> (con tu cuenta de GitHub abierta).</li>
<li>En <b>Token name</b> escribe <b>juma</b>. En <b>Expiration</b> elige la fecha más lejana que te deje.</li>
<li>En <b>Repository access</b> marca <b>Only select repositories</b> y elige <b>${esc(GH.repo)}</b>.</li>
<li>En <b>Permissions</b> → <b>Repository permissions</b> → <b>Contents</b>, elige <b>Read and write</b>.</li>
<li>Abajo pulsa <b>Generate token</b> y copia el código que empieza con <b>github_pat_</b>.</li>
<li>Pégalo aquí y pulsa <b>Conectar</b>.</li></ol>
<div class="fld w"><label for="gh-tok">Llave de GitHub</label><input id="gh-tok" type="password" autocomplete="off" placeholder="github_pat_…"></div>
<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:14px"><button type="button" class="btn btn-blue" data-ghsave>${ghState === 'busy' ? 'Probando…' : 'Conectar'}</button>${on ? '<button type="button" class="btn btn-soft" data-ghdel>Desconectar este dispositivo</button>' : ''}</div>
${ghMsg ? `<p class="ehint" role="status" style="margin-top:12px;font-weight:700">${esc(ghMsg)}</p>` : ''}
<p class="ehint" style="margin-top:16px">La llave queda guardada solo en este dispositivo. Haz esto en cada teléfono o computadora desde donde quieras publicar.</p>`;
  }
  return '';
}
function waFields() {
  const cur = String(dr.whatsapp != null ? dr.whatsapp : '0412-054-5307, 0412-566-7767').split(/[,;\n]+/).map((x) => x.trim());
  let h = '';
  for (let i = 0; i < 4; i++) h += fld('WhatsApp ' + (i + 1), cur[i] || '', (v) => { const a = String(dr.whatsapp != null ? dr.whatsapp : '0412-054-5307, 0412-566-7767').split(/[,;\n]+/).map((x) => x.trim()); while (a.length < 4) a.push(''); a[i] = v.trim(); dr.whatsapp = a.filter(Boolean).join(', '); }, { ph: i === 0 ? '0412-054-5307' : '' });
  return h;
}
function editorHtml() {
  const ok = edOk ? `<div class="eok" role="status" style="line-height:1.55">${edOk}</div>` : '';
  const warn = draftWarn ? '<p class="ehint" style="color:#8A1C1C">El borrador es muy grande para guardarse en este navegador. No cierres la página sin descargar contenido.json.</p>' : '';
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="ed-t" id="ed-ov"><div class="sheet">${sheetHead('Solo tú ves esto', 'Editar la página', 'ed-t')}<div style="padding:clamp(22px,4vw,40px)"><div class="etabs" role="group" aria-label="Qué quieres editar">${tabs.map(([k, t]) => `<button type="button" class="etab" data-tab="${k}" aria-pressed="${k === tab}">${t}</button>`).join('')}</div><div id="ed-body">${editorBody()}</div>${warn}${edErr ? `<p role="alert" style="margin:20px 0 0;padding:14px 18px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:15px;font-weight:700">${esc(edErr)}</p>` : ''}${ok}<div style="display:flex;flex-wrap:wrap;justify-content:flex-end;gap:12px;margin-top:28px"><button type="button" class="btn btn-soft" data-discard>Descartar borrador</button><button type="button" class="btn btn-soft" data-close>Cerrar</button><button type="button" class="btn btn-blue" data-save ${edBusy ? 'disabled' : ''}>${edBusy ? 'Publicando…' : (ghToken() ? 'Publicar' : 'Guardar y descargar')}</button></div></div></div></div>`;
}
function repaintEd() { const sc = $('#ed-ov'); const top = sc ? sc.scrollTop : 0; modalRoot.innerHTML = editorHtml(); const o = $('#ed-ov'); if (o) { o.style.animation = 'none'; $('.sheet', o).style.animation = 'none'; o.scrollTop = top; } }
function cleanContent(src) {
  const c = clone(src);
  c.actividades = (c.actividades || []).filter((a) => a && String(a.t || '').trim());
  c.posts = (c.posts || []).filter((p) => p && (String(p.t || '').trim() || String(p.x || '').trim()));
  c.galeria = (c.galeria || []).filter((g) => g && g.url);
  c.testimonios = (c.testimonios || []).filter((x) => x && String(x.x || '').trim());
  if (c.orden) { const ok = new Set(GAL_FIJA.map((g) => g.src).concat(c.galeria.map((g) => g.url))); c.orden = c.orden.filter((k) => ok.has(k)); }
  delete c._dirty;
  return c;
}
/* Lista de fotos de la galería en el orden actual: fijas + nuevas. */
function galItems(d) {
  const base = GAL_FIJA.map((g) => ({ key: g.src, src: g.src, cap: g.cap, kind: 'fija' }))
    .concat((d.galeria || []).map((g, idx) => ({ key: g.url, src: g.url, cap: g.cap || '', kind: 'nueva', idx })));
  const pos = new Map((d.orden || []).map((k, i) => [k, i]));
  return base.map((x, i) => Object.assign(x, { p: pos.has(x.key) ? pos.get(x.key) : 1e6 + i })).sort((a, b) => a.p - b.p);
}
let previewTimer = 0;
function touch() {
  edOk = '';
  clearTimeout(previewTimer);
  dr._dirty = true;
  previewTimer = setTimeout(() => { draftWarn = !writeDraft(dr); cfg = cleanContent(dr); renderAll(); }, 350);
}
function showFab() { $('#fab-edit').classList.remove('hide'); }
async function openEditor() {
  if (ghToken()) { try { const f = await ghGet('contenido.json'); if (f && f.content) { const c = JSON.parse(dec64(f.content)); if (String(c.actualizado || '') >= String(pub.actualizado || '')) pub = c; } } catch (e) {} }
  dr = clone(pickDraft() || pub);
  tab = 'enc'; fy = 0; edErr = ''; edOk = ''; draftWarn = false;
  openModal(editorHtml());
}
$('#fab-edit').addEventListener('click', openEditor);
async function shrinkToDataUrl(file) {
  const bmp = await createImageBitmap(file); const k = Math.min(1, 1280 / Math.max(bmp.width, bmp.height));
  const cv = document.createElement('canvas'); cv.width = Math.round(bmp.width * k); cv.height = Math.round(bmp.height * k);
  cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
  return cv.toDataURL('image/jpeg', 0.78);
}
modalRoot.addEventListener('input', (e) => { const id = e.target.dataset && e.target.dataset.ed; if (id && setters.has(id)) { setters.get(id)(e.target.value); touch(); } });
modalRoot.addEventListener('change', async (e) => {
  const t = e.target; const c = t.dataset && t.dataset.edc;
  if (c && setters.has(c)) { setters.get(c)(t.checked); touch(); return; }
  const kind = t.dataset && t.dataset.up; if (!kind || !t.files || !t.files.length) return;
  const files = Array.from(t.files); const i = +t.dataset.i;
  edBusy = true; edErr = ''; repaintEd();
  try {
    for (const f of files) {
      const url = await shrinkToDataUrl(f);
      if (kind === 'gal') dr.galeria = (dr.galeria || []).concat([{ url, cap: '' }]);
      else if (kind === 'foto') dr.posts[i].foto = url;
      else if (kind === 'tes') dr.testimonios[i].foto = url;
    }
  } catch (x) { edErr = 'No se pudo leer la foto. Prueba con otra imagen (JPG o PNG).'; }
  edBusy = false; touch(); repaintEd();
});
modalRoot.addEventListener('click', (e) => {
  if (!$('#ed-t')) return; const t = e.target;
  const q = (s) => t.closest(s);
  if (q('[data-tab]')) { tab = q('[data-tab]').dataset.tab; edErr = ''; repaintEd(); return; }
  if (q('[data-fy]')) { fy = +q('[data-fy]').dataset.fy; repaintEd(); return; }
  if (q('[data-newtes]')) { dr.testimonios = [{ n: '', r: '', x: '', foto: '' }].concat(dr.testimonios || []); touch(); repaintEd(); return; }
  if (q('[data-rmtes]')) { dr.testimonios.splice(+q('[data-rmtes]').dataset.rmtes, 1); touch(); repaintEd(); return; }
  if (q('[data-newpost]')) { dr.posts = [{ id: String(Date.now()), t: '', x: '', fecha: new Date().toISOString(), foto: '', video: '' }].concat(dr.posts || []); touch(); repaintEd(); return; }
  if (q('[data-rmpost]')) { dr.posts.splice(+q('[data-rmpost]').dataset.rmpost, 1); touch(); repaintEd(); return; }
  if (q('[data-mv]') || q('[data-top]')) {
    const b = q('[data-mv]') || q('[data-top]'); const keys = galItems(dr).map((x) => x.key); const n = +(b.dataset.mv != null ? b.dataset.mv : b.dataset.top);
    const to = b.dataset.top != null ? 0 : n + (+b.dataset.d); if (to < 0 || to >= keys.length) return;
    const [k] = keys.splice(n, 1); keys.splice(to, 0, k); dr.orden = keys; touch(); repaintEd(); return;
  }
  if (q('[data-hidefija]')) { const g = galItems(dr)[+q('[data-hidefija]').dataset.hidefija]; const s = new Set(dr.ocultas || []); if (s.has(g.src)) s.delete(g.src); else s.add(g.src); dr.ocultas = Array.from(s); touch(); repaintEd(); return; }
  if (q('[data-rmgal]')) { const [g] = dr.galeria.splice(+q('[data-rmgal]').dataset.rmgal, 1); if (g && dr.orden) dr.orden = dr.orden.filter((k) => k !== g.url); touch(); repaintEd(); return; }
  if (q('[data-discard]')) {
    if (!confirm('¿Descartar el borrador y volver a lo que está publicado?')) return;
    try { localStorage.removeItem(DRAFT); } catch (x) {}
    dr = clone(pub); cfg = clone(pub); renderAll(); edOk = ''; repaintEd(); return;
  }
  if (q('[data-ghsave]')) {
    const v = ($('#gh-tok') || {}).value; const tok = String(v || '').trim();
    if (!tok) { ghMsg = 'Pega la llave primero.'; repaintEd(); return; }
    ghState = 'busy'; ghMsg = ''; repaintEd();
    ghCheck(tok).then((err) => {
      ghState = '';
      if (err) ghMsg = err; else { try { localStorage.setItem('juma-gh-token', tok); } catch (x) {} ghMsg = 'Listo, quedó conectado. Ya puedes usar el botón Publicar.'; }
      repaintEd();
    }).catch(() => { ghState = ''; ghMsg = 'No se pudo comprobar la llave. Revisa tu conexión a internet.'; repaintEd(); });
    return;
  }
  if (q('[data-ghdel]')) { try { localStorage.removeItem('juma-gh-token'); } catch (x) {} ghMsg = 'Este dispositivo quedó desconectado.'; repaintEd(); return; }
  if (q('[data-save]')) { if (!edBusy) saveAll(); return; }
});

async function saveAll() {
  const local = cleanContent(dr);
  local.actualizado = new Date(Math.max(Date.now(), (Date.parse(newestSeen) || 0) + 1000)).toISOString();
  if (!ghToken()) {
    dr = local; draftWarn = !writeDraft(Object.assign({}, local, { _dirty: false })); cfg = clone(local); renderAll();
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(local, null, 1)], { type: 'application/json' })); a.download = 'contenido.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    edOk = '<b>Se descargó contenido.json.</b> Súbelo a GitHub con <b>Add file → Upload files → Commit changes</b> (aunque se llame «contenido (1).json»). <br><br>Para no tener que descargar nada, conecta tu GitHub en la pestaña <b>Conexión con GitHub</b>: así el botón publica solo.';
    repaintEd(); return;
  }
  edBusy = true; edErr = ''; edOk = ''; repaintEd();
  try {
    const out = clone(local); let n = 0;
    const upPhoto = async (url) => {
      if (!/^data:image\//.test(url || '')) return url;
      if (uploaded.has(url)) return uploaded.get(url);
      const path = 'img/subidas/' + Date.now() + '-' + (++n) + '.jpg';
      await ghPut(path, url.split(',')[1], null, 'Foto nueva desde el editor');
      uploaded.set(url, path); return path;
    };
    for (const g of out.galeria || []) g.url = await upPhoto(g.url);
    for (const p of out.posts || []) if (p.foto) p.foto = await upPhoto(p.foto);
    for (const x of out.testimonios || []) if (x.foto) x.foto = await upPhoto(x.foto);
    if (out.orden) out.orden = out.orden.map((k) => uploaded.get(k) || k);
    const cur = await ghGet('contenido.json');
    await ghPut('contenido.json', enc64(JSON.stringify(out, null, 1)), cur && cur.sha, 'Actualiza la página desde el editor');
    pub = clone(out); newestSeen = out.actualizado;
    dr = local; cfg = clone(local); renderAll();
    try { localStorage.removeItem(DRAFT); } catch (x) {}
    for (const f of oldFiles) { try { const o = await ghGet(f); if (o && o.sha) await ghDelete(f, o.sha); } catch (x) {} }
    oldFiles = [];
    edOk = '<b>¡Publicado!</b> En 1 o 2 minutos todos lo ven en la página y en la app. Si alguien la tenía abierta, que la cierre y la vuelva a abrir.';
  } catch (x) {
    edErr = x && (x.status === 401 || x.status === 403 || x.status === 404) ? 'GitHub no aceptó la llave. Revísala en la pestaña «Conexión con GitHub».' : 'No se pudo publicar. Revisa tu conexión a internet e intenta otra vez; tus cambios siguen guardados en este dispositivo.';
  }
  edBusy = false; repaintEd();
}

/* ===================== entrada secreta: 5 toques en María Consolata ===================== */
let taps = [];
document.addEventListener('click', (e) => {
  const s = e.target.closest && e.target.closest('.patron-d summary'); if (!s) return;
  const first = $$('.patron-d summary')[0]; if (s !== first) return;
  const now = Date.now(); taps = taps.filter((x) => now - x < 3000); taps.push(now);
  if (taps.length >= 5) { taps = []; e.preventDefault(); if (isEditor()) { showFab(); openEditor(); } else askPass(); }
});
function askPass() {
  openModal(`<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pw-t"><div class="sheet" style="max-width:520px">${sheetHead('Solo para JUMA', 'Entrar a editar', 'pw-t')}<form id="pw-form" style="padding:clamp(22px,4vw,40px)"><div class="fld w"><label for="pw-in">Clave</label><input id="pw-in" type="password" autocomplete="current-password"></div><p id="pw-msg" role="alert" style="margin:14px 0 0;font-size:15px;font-weight:700;color:#8A1C1C"></p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:22px"><button type="submit" class="btn btn-blue">Entrar</button><button type="button" class="btn btn-soft" data-close>Cancelar</button></div></form></div></div>`);
}
modalRoot.addEventListener('submit', (e) => {
  if (e.target.id !== 'pw-form') return;
  e.preventDefault();
  const v = $('#pw-in').value;
  if (sha256(normPass(v)) === PASS_HASH) {
    try { sessionStorage.setItem('juma-ed', '1'); } catch (x) {}
    showFab(); const d = pickDraft(); if (d) { cfg = cleanContent(d); renderAll(); }
    openEditor();
  } else { $('#pw-msg').textContent = 'Clave incorrecta.'; $('#pw-in').select(); }
});

/* ===================== ver foto completa ===================== */
document.addEventListener('click', (e) => {
  const img = e.target.closest && e.target.closest('.gal img, .tri img'); if (!img || modalRoot.firstChild) return;
  e.preventDefault();
  const src = img.currentSrc || img.src;
  openModal(`<div class="overlay lightbox" role="dialog" aria-modal="true" aria-label="${esc(img.alt || 'Foto')}" data-close style="display:flex;align-items:center;justify-content:center;padding:58px 14px 14px;cursor:zoom-out"><img src="${esc(src)}" alt="${esc(img.alt || '')}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:10px"><button type="button" data-close style="position:fixed;top:12px;right:12px;min-height:44px;padding:0 16px;border-radius:10px;border:1.5px solid rgba(255,255,255,.5);background:transparent;color:#fff;font-weight:700;font-size:15px">Cerrar ✕</button></div>`);
});

/* ===================== Joriel, el asistente de JUMA ===================== */
/* Funciona dentro de la página, sin internet extra ni pagos: responde con la información de JUMA. */
(function chatbot() {
  const AV = 'img/joriel-avatar.png'; const FULL = 'img/joriel.jpg';
  const css = `
.jchat,.jchat-btn{font-family:var(--body,'Atkinson Hyperlegible','Segoe UI',system-ui,sans-serif)}
.jchat *{font-family:inherit}
.jchat-head b{font-family:var(--display,'Big Shoulders Display',sans-serif);font-size:20px;letter-spacing:.01em;text-transform:uppercase;line-height:1}
.jchat-btn{position:fixed;left:16px;bottom:16px;z-index:41;display:flex;align-items:center;gap:10px;padding:6px 18px 6px 6px;border:0;border-radius:999px;background:#fff;color:var(--navy);font-weight:800;font-size:15px;box-shadow:0 14px 30px -10px rgba(6,21,54,.55);cursor:pointer;transition:transform 160ms cubic-bezier(0.23,1,0.32,1)}
.jchat-btn:active{transform:scale(.97)}
.jchat-btn img{width:48px;height:48px;border-radius:50%;display:block;box-shadow:0 0 0 2px #8EC9FF}
.jchat-btn .dot{position:absolute;left:44px;top:6px;width:12px;height:12px;border-radius:50%;background:#17824A;border:2px solid #fff}
.jchat{position:fixed;left:16px;bottom:16px;z-index:60;width:min(380px,calc(100vw - 32px));height:min(600px,calc(100dvh - 32px));display:flex;flex-direction:column;background:var(--paper,#F6F9FE);border-radius:20px;overflow:hidden;box-shadow:0 30px 60px -20px rgba(6,21,54,.6);transform-origin:bottom left;animation:jchatIn 220ms cubic-bezier(0.23,1,0.32,1) both}
@keyframes jchatIn{from{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:none}}
.jchat-head{display:flex;align-items:center;gap:12px;padding:12px 12px 12px 14px;background:var(--navy,#061536);color:#fff}
.jchat-head img{width:46px;height:46px;border-radius:50%}
.jchat-head b{display:block;font-size:16px}
.jchat-head small{display:block;font-size:12.5px;color:#BFD3F2}
.jchat-x{margin-left:auto;width:44px;height:44px;border-radius:10px;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;font-size:18px;cursor:pointer}
.jchat-log{flex:1 1 auto;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:10px;overscroll-behavior:contain}
.jmsg{display:flex;gap:8px;align-items:flex-end;max-width:92%}
.jmsg > img{width:30px;height:30px;border-radius:50%;flex:0 0 auto}
.jmsg .b img.jfull{display:block;width:120px;height:auto;max-width:100%;margin:0 auto 8px;border-radius:12px}
.jmsg .b{padding:10px 13px;border-radius:16px 16px 16px 4px;background:#fff;color:var(--ink,#0A1B3F);font-size:15px;line-height:1.5;box-shadow:0 1px 2px rgba(6,21,54,.08)}
.jmsg .b p{margin:0 0 6px}.jmsg .b p:last-child{margin:0}
.jmsg .b a{color:var(--royal,#2452C8);font-weight:700}
.jmsg.me{align-self:flex-end}
.jmsg.me .b{background:var(--royal,#2452C8);color:#fff;border-radius:16px 16px 4px 16px}
.jmsg .b .jbtn{display:inline-block;margin-top:8px;padding:9px 14px;border-radius:999px;background:var(--royal,#2452C8);color:#fff;font-weight:700;text-decoration:none;border:0;font-size:14px;cursor:pointer}
.jtyping .b{display:flex;gap:4px;padding:14px}
.jtyping i{width:7px;height:7px;border-radius:50%;background:#9DB3D6;animation:jdot 1s infinite}
.jtyping i:nth-child(2){animation-delay:.15s}.jtyping i:nth-child(3){animation-delay:.3s}
@keyframes jdot{0%,60%,100%{opacity:.3}30%{opacity:1}}
.jchips{display:flex;gap:8px;overflow-x:auto;padding:8px 14px;border-top:1px solid #E1E9F6;scrollbar-width:none}
.jchips button{flex:0 0 auto;padding:8px 12px;border-radius:999px;border:1.5px solid #B9C8E4;background:#fff;color:var(--ink,#0A1B3F);font-size:13.5px;font-weight:700;cursor:pointer;white-space:nowrap}
.jchat form{display:flex;gap:8px;padding:10px 12px 12px;background:#fff;border-top:1px solid #E1E9F6}
.jchat input{flex:1 1 auto;min-width:0;min-height:46px;padding:0 14px;border-radius:12px;border:1.5px solid #B9C8E4;font-size:16px;color:var(--ink,#0A1B3F)}
.jchat form button{min-width:84px;min-height:46px;border:0;border-radius:12px;background:var(--royal,#2452C8);color:#fff;font-weight:800;font-size:15px;cursor:pointer}
.jhello{position:fixed;left:16px;bottom:76px;z-index:42;display:flex;align-items:flex-end;gap:6px;max-width:min(340px,calc(100vw - 32px));animation:jhelloIn 320ms cubic-bezier(0.23,1,0.32,1) both;transform-origin:bottom left}
@keyframes jhelloIn{from{opacity:0;transform:translateY(12px) scale(.96)}to{opacity:1;transform:none}}
.jhello-img{width:92px;flex:0 0 auto;border-radius:14px;cursor:pointer;filter:drop-shadow(0 10px 18px rgba(6,21,54,.35))}
.jhello-b{position:relative;padding:14px 16px;background:#fff;border-radius:16px 16px 16px 4px;box-shadow:0 18px 40px -14px rgba(6,21,54,.55);font-family:var(--body,'Atkinson Hyperlegible','Segoe UI',system-ui,sans-serif);color:var(--ink,#0A1B3F)}
.jhello-b b{display:block;font-size:16px;padding-right:26px}
.jhello-b p{margin:6px 0 10px;font-size:14.5px;line-height:1.45}
.jhello-go{min-height:40px;padding:0 14px;border:0;border-radius:999px;background:var(--royal,#2452C8);color:#fff;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit}
.jhello-x{position:absolute;top:6px;right:6px;width:32px;height:32px;border:0;border-radius:8px;background:transparent;color:#5A6B8C;font-size:15px;cursor:pointer}
@media (prefers-reduced-motion:reduce){.jhello{animation:none}.jchat{animation:none}.jtyping i{animation:none;opacity:.6}}
@media (max-width:520px){.jchat-btn span.t{display:none}.jchat-btn{padding:6px}}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ\s]/g, ' ');
  const has = (t, words) => words.some((w) => t.includes(w));
  const P = (arr) => arr.filter(Boolean).map((x) => `<p>${x}</p>`).join('');
  const txt = (el) => (el ? el.textContent.trim() : '');
  const FRASES = [
    '«No basta hacer el bien, hay que hacerlo bien.»',
    '«Sed santos sin ruido.»',
    '«Si tu corazón no arde de amor cuando haces misión, no te emocionas, permaneces indiferente, deberías cuestionarte si este carisma es para ti.»'
  ];
  const santo = (i) => { const d = $$('.patron-d')[i]; if (!d) return ''; const name = txt(d.querySelector('summary b')); const ps = $$('.pd-txt p', d).map((p) => p.innerHTML); return `<p><b>${esc(name)}</b></p>` + P(ps); };
  const waLinks = () => waNums().map((n) => `<a href="https://wa.me/${n}" target="_blank" rel="noopener">${esc(waLabel(n))}</a>`).join(' o ');

  function answer(q) {
    const t = ' ' + norm(q) + ' ';
    if (has(t, ['quien eres', 'eres real', 'eres un robot', 'eres una ia', 'como te llamas', 'tu nombre', 'joriel'])) return P(['¡Soy <b>Joriel</b>! Un joven misionero de JUMA y el asistente de esta página. 😄', 'Te cuento sobre nuestros encuentros, la formación, los santos y cómo inscribirte. Soy un asistente automático: si algo no lo sé, te paso con un coordinador.']);
    const FE = window.JUMA_FE;
    if (FE) {
      if (has(t, ['rosario misionero'])) return P(['El <b>rosario misionero</b> se reza como el de siempre, pero cada decena tiene un color y se ofrece por un continente:', FE.MISIONERO.map(([, , c, s], i) => `• <b>${i + 1}.ª ${esc(c)}:</b> ${esc(s)}`).join('<br>'), '¡Son los mismos colores de nuestros cinco años de formación!']) + '<button type="button" class="jbtn" data-feopen="rmi">Ver el rosario misionero</button>';
      if (has(t, [' rosario', ' misterio'])) { const m = FE.misteriosHoy(new Date()); return P([`Hoy se rezan los <b>${esc(m.n.toLowerCase())}</b>:`, m.l.map((x, i) => `${i + 1}. ${esc(x)}`).join('<br>'), 'En cada misterio: 1 Padre Nuestro, 10 Avemarías y 1 Gloria.']) + '<button type="button" class="jbtn" data-feopen="ros">Ver la guía del rosario</button>'; }
      if (has(t, [' color', ' tiempo liturgico', ' liturgia de hoy', ' dia liturgico'])) { const L = FE.liturgia(new Date()); return P([`Hoy es <b>${esc(L.fiesta || L.nombre)}</b>.`, `Tiempo: <b>${esc(L.tiempo)}</b>. Color: <b>${esc(L.color.n)}</b>.`, `Significa: ${esc(L.color.s)}`]) + '<button type="button" class="jbtn" data-feopen="col">Ver los colores litúrgicos</button>'; }
      if (has(t, [' evangelio', ' lecturas', ' lectura de hoy', ' palabra de hoy', ' reflexion del dia'])) { const L = FE.liturgia(new Date()); return P([`Hoy es <b>${esc(L.fiesta || L.nombre)}</b> (ciclo ${L.ciclo}, año ${L.par}).`, 'Aquí puedes leer las lecturas, el Evangelio y la reflexión de hoy:', '<a href="https://www.vaticannews.va/es/evangelio-de-hoy.html" target="_blank" rel="noopener">Lecturas y Evangelio de hoy (Vatican News)</a><br><a href="https://evangeliodeldia.org/" target="_blank" rel="noopener">Evangelio y reflexión del día</a>']); }
      if (has(t, [' cancion', ' canto', ' cantar', ' musica', ' alabanza'])) return P(['Algunos cantos conocidos para la misa:', FE.CANTOS.map(([m, l]) => `• <b>${esc(m)}:</b> ${l.map(esc).join(', ')}`).join('<br>'), 'Pregúntale al coro de JUMA cuáles se cantan este domingo. 🎶']);
      if (has(t, [' misa', ' eucaristia', ' consagracion', ' comulgar', ' comunion ', ' responder en misa'])) return P(['La misa tiene cinco partes:', FE.MISA.map(([n, p]) => `• <b>${esc(n)}</b> — ${esc(p.toLowerCase())}`).join('<br>'), 'Cuando el sacerdote dice «El Señor esté con ustedes», respondemos: «Y con tu espíritu».']) + '<button type="button" class="jbtn" data-feopen="misa">Ver la guía de la misa</button>';
      const AL = { cd: ['congo'], us: ['eeuu', 'usa', 'norteamerica'], kr: ['corea'], sz: ['suazilandia', 'eswatini'], dj: ['djibouti'], gw: ['guinea bisau', 'guinea'], kz: ['kazajstan', 'kazakhstan'], kg: ['kirguizistan', 'kirguistan'], gb: ['inglaterra', 'gran bretana', 'londres'], ci: ['costa de marfil'] };
      const PK = FE.PAISES ? Object.keys(FE.PAISES).find((k) => [norm(FE.PAISES[k].n).trim()].concat(AL[k] || []).some((x) => t.includes(' ' + x + ' '))) : null;
      if (PK && has(t, [' desde', ' cuando', ' llegaron', ' llego', ' estan', ' esta la', ' consolata', ' misioner', ' mision', ' pagina', ' web', ' ano ', ' anos'])) {
        const d = FE.PAISES[PK]; const quien = d.q === 'mc' ? 'Misioneras de la Consolata' : 'Misioneros de la Consolata';
        return P([d.y ? (d.y === 1901 ? `Los Misioneros de la Consolata nacieron en <b>${esc(d.n)}</b> en <b>1901</b>.` : `Los <b>${quien}</b> están en <b>${esc(d.n)}</b> desde <b>${d.y}</b>.`) : `En <b>${esc(d.n)}</b> están las <b>${quien}</b>.`].concat(d.x ? [esc(d.x)] : []).concat([`Su página: <a href="${d.w}" target="_blank" rel="noopener">${esc(d.w.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))}</a>`])) + `<button type="button" class="jbtn" data-mapk="${PK}">Verlo en el mapa</button>`;
      }
      if (has(t, [' mapa', ' paises', ' en el mundo', ' donde estan los misioneros', ' donde estan'])) return P([`Los Misioneros y las Misioneras de la Consolata están en <b>${FE.PAISES ? Object.keys(FE.PAISES).length : 34} países</b> de África, América, Europa y Asia. ¡Y Duaca está en ese mapa!`, 'Pregúntame por un país, por ejemplo: «¿Desde cuándo están en Argentina?»']) + '<button type="button" class="jbtn" data-goto="#mapa">Ver el mapa</button>';
      if (has(t, [' testimonio', ' experiencia'])) return P(['En la sección «Experiencias que nos marcaron» puedes leer testimonios de jóvenes y misioneros de JUMA.']) + '<button type="button" class="jbtn" data-goto="#testimonios">Ver testimonios</button>';
      const o = FE.oracion(t);
      if (o) return `<p><b>${esc(o.t)}</b></p>` + (o.x || []).map((p) => `<p>${esc(p)}</p>`).join('') + (o.l ? `<p>${o.l.map((x, i) => `${i + 1}. ${esc(x)}`).join('<br>')}</p>` : '');
      if (has(t, [' oracion', ' oraciones', ' rezar', ' orar'])) return P(['Tengo muchas oraciones: el Padre Nuestro, el Ave María, el Credo, la Salve, el Ángel de la guarda, el acto de contrición y más. Escríbeme el nombre de la que quieras.']) + '<button type="button" class="jbtn" data-feopen="ora">Ver todas las oraciones</button>';
    }
    if (has(t, [' hola ', 'buenas', 'buen dia', 'saludos', ' hey '])) return P(['¡Hola! Qué alegría que estés aquí. 😊', 'Pregúntame lo que quieras sobre JUMA: cuándo nos reunimos, cómo inscribirte, la formación o nuestros santos.']);
    if (has(t, ['gracias', 'chao', 'adios', 'hasta luego', 'bendicion'])) return P(['¡A ti! Que Dios te bendiga y la Virgen Consolata te acompañe. Te esperamos el domingo. 💙']);
    if (has(t, ['inscrib', 'planilla', 'formulario', 'unirme', 'unir ', 'entrar', 'participar', 'formar parte', 'ser parte', 'como me meto', 'registr'])) return P(['¡Qué bueno que quieras ser parte de JUMA!', 'Llena la planilla de inscripción aquí mismo. Al final la envías por WhatsApp a un coordinador con un toque.']) + '<button type="button" class="jbtn" data-open-form>Llenar la planilla</button>';
    if (has(t, ['whatsapp', 'contacto', 'telefono', 'numero', 'llamar', 'escribir', 'instagram', 'tiktok', 'redes'])) return P([`Puedes escribirle a un coordinador por WhatsApp: ${waLinks()}.`, 'También estamos en <a href="https://www.instagram.com/juma_duaca/" target="_blank" rel="noopener">Instagram</a>, <a href="https://www.tiktok.com/@juma.duaca" target="_blank" rel="noopener">TikTok</a> y en nuestro <a href="https://whatsapp.com/channel/0029VaqbBJ972WTqOwLsLL0u" target="_blank" rel="noopener">canal de WhatsApp</a>.']);
    const ys = YEARS.map((y) => norm(y.name).trim());
    const yi = ys.findIndex((n) => t.includes(' ' + n + ' ') || t.includes(' ' + n));
    if (yi >= 0) { const y = yearData(yi); return P([`<b>${esc(y.ord)} · ${esc(y.name)} (${esc(y.eje)})</b>`, `<b>${esc(y.title)}.</b> ${esc(y.text)}`, 'Algunos temas: ' + y.topics.slice(0, 5).map((x) => esc(x.t)).join(', ') + '.']); }
    if (has(t, ['formacion', 'anos', 'continente', 'curso', 'temas', 'estudi', 'aprend'])) return P(['La formación dura <b>cinco años</b>, y cada año lleva el color y la franela de un continente:', YEARS.map((y) => `• <b>${esc(y.ord)}, ${esc(y.name)}:</b> ${esc(y.title)}`).join('<br>'), 'Pregúntame por un continente (por ejemplo «Asia») y te cuento más.']);
    if (has(t, ['actividad', 'evento', 'retiro', 'campament', 'mision', 'proxim', 'calendario', 'agenda', 'fecha'])) {
      const a = (cfg.actividades || []).filter((x) => x && x.t);
      if (a.length) return P(['Estas son las próximas actividades:', a.map((x) => `• <b>${esc(x.t)}</b>${x.f ? ' — ' + esc(x.f) : ''}${x.d ? ': ' + esc(x.d) : ''}`).join('<br>'), 'Y además nos vemos todos los domingos.']);
      return P(['Hacemos retiros, campamentos, misiones en caseríos y servicio social. Las fechas se anuncian en el canal de WhatsApp y en nuestras redes.']);
    }
    if (has(t, ['cuando', 'hora', 'dia ', 'domingo', 'reun', 'encuentro', 'donde', 'lugar', 'direccion', 'ubicacion', 'semana'])) {
      const d = domingos(); const n = d[0];
      return P([`Nos reunimos <b>todos los domingos</b>. Hora: <b>${esc(hora())}</b>. Lugar: <b>${esc(lugar())}</b>.`, n ? `El próximo es el <b>${n.dia} de ${n.mes}</b>: ${esc(n.tema)}.` : '', 'Cada encuentro tiene oración, formación y compartir. ¡Llega temprano y trae tu alegría!']);
    }
    if (has(t, ['frase', 'cita', 'consejo', 'mensaje', 'reflexion', 'palabra'])) return P(['Una frase de San José Allamano:', FRASES[Math.floor(Math.random() * FRASES.length)]]);
    if (has(t, ['cafasso'])) return santo(2);
    if (has(t, ['leonella', 'sgorbati', 'perdono', 'somalia'])) return santo(3);
    if (has(t, ['irene', 'stefani', 'nyaatha', 'kenia'])) return santo(4);
    if (has(t, ['allamano', 'fundador', 'jose'])) return santo(1);
    if (has(t, ['virgen', 'consolata', 'maria', 'patrona', 'madre'])) return santo(0);
    if (has(t, ['santo', 'santos', 'beata', 'beato'])) return P(['Nos acompañan María Consolata, San José Allamano, San José Cafasso, la beata Leonella Sgorbati y la beata Irene Stefani.', 'Pregúntame por cualquiera de ellos y te cuento su historia.']);
    if (has(t, ['area', 'servir', 'coro', 'liturgia', 'logistica', 'ayudar', 'donde puedo'])) { const ar = $$('#areas .areas h3').map((h) => esc(txt(h))); return P(['Cada joven tiene un lugar donde servir. Nuestras áreas son:', ar.join(', ') + '.', 'Cada área tiene un encargado y un auxiliar.']); }
    if (has(t, ['pilar', 'evangeliz', 'animacion', 'recreacion'])) return P(['Cuatro pilares sostienen cada mes: <b>formación</b>, <b>evangelización</b>, <b>animación</b> y <b>recreación y compartir</b>.']);
    if (has(t, ['mision ', 'vision', 'objetivo', 'que buscan', 'proposito'])) return P(['<b>Nuestro objetivo:</b> promover en los jóvenes espacios de formación, evangelización y misión a través del carisma de los Misioneros de la Consolata.']);
    if (has(t, ['edad', 'anos tengo', 'menor', 'mayor', 'puedo ir', 'quien puede'])) return P(['JUMA es para jóvenes. Si eres menor de edad, en la planilla te pedimos los datos de tu representante.', `Si tienes dudas sobre tu edad, escríbele a un coordinador: ${waLinks()}.`]);
    if (has(t, ['juma', 'que es', 'quienes', 'movimiento', 'significa'])) return P(['<b>JUMA</b> significa <b>Juventud Misionera Allamaniana</b>. Somos el movimiento juvenil de los Misioneros de la Consolata en Duaca.', 'Cada domingo nos reunimos para orar, formarnos y salir a la misión. ¡Somos «misioneros en la cabeza, en la boca y en el corazón»!']);
    return P(['Mmm, esa no me la sé todavía. 🙏', `Puedes preguntarle a un coordinador por WhatsApp: ${waLinks()}.`, 'O toca una de las preguntas de abajo.']);
  }

  const CHIPS = ['¿Qué es JUMA?', '¿Cuándo se reúnen?', '¿Cómo me inscribo?', 'Evangelio de hoy', 'Misterios del rosario de hoy', '¿Qué color litúrgico es hoy?', 'Padre Nuestro', 'Partes de la misa', '¿Desde cuándo está la Consolata en Venezuela?', 'Próximas actividades', 'Los 5 años de formación', '¿Quién fue Allamano?', 'Contacto'];
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'jchat-btn'; btn.setAttribute('aria-label', 'Hablar con Joriel, el asistente de JUMA');
  btn.innerHTML = `<img src="${AV}" alt=""><i class="dot" aria-hidden="true"></i><span class="t">Joriel</span>`;
  document.body.appendChild(btn);
  let box = null, log = null, first = true;

  function add(html, me) {
    const m = document.createElement('div'); m.className = 'jmsg' + (me ? ' me' : '');
    m.innerHTML = (me ? '' : `<img src="${AV}" alt="">`) + `<div class="b">${html}</div>`;
    log.appendChild(m); log.scrollTop = log.scrollHeight;
  }
  function reply(q) {
    const ty = document.createElement('div'); ty.className = 'jmsg jtyping'; ty.innerHTML = `<img src="${AV}" alt=""><div class="b"><i></i><i></i><i></i></div>`;
    log.appendChild(ty); log.scrollTop = log.scrollHeight;
    setTimeout(() => { ty.remove(); add(answer(q)); }, reduced() ? 150 : 650);
  }
  function ask(q) { q = String(q || '').trim(); if (!q) return; add(esc(q), true); reply(q); }
  function open() {
    if (box) { box.style.display = ''; btn.style.display = 'none'; setTimeout(() => { try { box.querySelector('input').focus({ preventScroll: true }); } catch (e) {} }, 50); return; }
    box = document.createElement('section'); box.className = 'jchat'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Joriel, asistente de JUMA');
    box.innerHTML = `<div class="jchat-head"><img src="${AV}" alt=""><div><b>Joriel</b><small>Asistente de JUMA · en línea</small></div><button type="button" class="jchat-x" aria-label="Cerrar">✕</button></div><div class="jchat-log" aria-live="polite"></div><div class="jchips">${CHIPS.map((c) => `<button type="button">${esc(c)}</button>`).join('')}</div><form><label for="jchat-in" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Escribe tu pregunta</label><input id="jchat-in" type="text" autocomplete="off" placeholder="Escribe tu pregunta…"><button type="submit">Enviar</button></form>`;
    document.body.appendChild(box); btn.style.display = 'none';
    log = box.querySelector('.jchat-log');
    box.querySelector('.jchat-x').addEventListener('click', close);
    box.querySelector('.jchips').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) ask(b.textContent); });
    box.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); const i = box.querySelector('input'); ask(i.value); i.value = ''; });
    box.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    box.addEventListener('click', (e) => {
      if (e.target.closest('[data-open-form]')) close();
      const f = e.target.closest('[data-feopen]'); if (f && window.JUMA_FE) { close(); window.JUMA_FE.abrir(f.dataset.feopen); }
      const mk = e.target.closest('[data-mapk]'); if (mk && window.JUMA_FE) { close(); window.JUMA_FE.paisMapa(mk.dataset.mapk); }
      const g = e.target.closest('[data-goto]'); if (g) { close(); const s = document.querySelector(g.dataset.goto); if (s) s.scrollIntoView({ behavior: 'smooth' }); }
    });
    if (first) { first = false; add(`<img class="jfull" src="${FULL}" alt="Joriel saludando">` + P(['¡Hola! Soy <b>Joriel</b>, joven misionero de JUMA Duaca. 👋', 'Te cuento cuándo nos reunimos, cómo inscribirte, cómo es la formación y quiénes son nuestros santos. ¿Qué quieres saber?'])); }
    setTimeout(() => { try { box.querySelector('input').focus({ preventScroll: true }); } catch (e) {} }, 50);
  }
  function close() { if (!box) return; box.style.display = 'none'; btn.style.display = ''; btn.focus(); }
  btn.addEventListener('click', () => { hideHello(); open(); });

  /* Saludo de presentación al abrir la página (una vez por visita). */
  let hello = null;
  function hideHello() { if (!hello) return; hello.remove(); hello = null; try { sessionStorage.setItem('juma-hola', '1'); } catch (e) {} }
  function showHello() {
    try { if (sessionStorage.getItem('juma-hola')) return; } catch (e) {}
    if (box || hello || modalRoot.firstChild) return;
    hello = document.createElement('div'); hello.className = 'jhello'; hello.setAttribute('role', 'status');
    hello.innerHTML = `<img src="${FULL}" alt="" class="jhello-img"><div class="jhello-b"><button type="button" class="jhello-x" aria-label="Cerrar saludo">✕</button><b>¡Hola! Soy Joriel 👋</b><p>Bienvenido a JUMA Duaca. Si quieres saber cuándo nos reunimos o cómo unirte, pregúntame.</p><button type="button" class="jhello-go">Hablar con Joriel</button></div>`;
    document.body.appendChild(hello);
    hello.querySelector('.jhello-x').addEventListener('click', hideHello);
    hello.querySelector('.jhello-go').addEventListener('click', () => { hideHello(); open(); });
    hello.querySelector('.jhello-img').addEventListener('click', () => { hideHello(); open(); });
  }
  setTimeout(showHello, 1800);
})();

/* ===================== arranque ===================== */
let newestSeen = '', oldFiles = [];
async function loadContenido() {
  /* Si la computadora guardó el archivo como «contenido (1).json», «contenido (2).json»…,
     también se lee: gana el que tenga la fecha de guardado más reciente. */
  const names = ['contenido.json'].concat([1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => 'contenido%20(' + n + ').json'));
  const got = await Promise.all(names.map(async (n) => {
    try { const r = await fetch(n + '?t=' + Date.now(), { cache: 'no-store' }); return r.ok ? await r.json() : null; } catch (e) { return null; }
  }));
  let best = got[0] || null;
  got.forEach((c) => { if (c && String(c.actualizado || '') > String((best && best.actualizado) || '')) best = c; });
  if (best) pub = best;
  newestSeen = String((best && best.actualizado) || '');
  oldFiles = names.slice(1).filter((n, i) => got[i + 1]).map((n) => decodeURIComponent(n));
  cfg = clone(pub);
  if (isEditor()) { showFab(); const d = pickDraft(); if (d) cfg = cleanContent(d); }
  renderAll();
}
(function boot() {
  renderAll(); setupUnroll();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
  loadContenido();
  initFirebase();
})();
