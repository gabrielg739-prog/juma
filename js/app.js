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
const DIAS_SEM = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

/* ===================== pintar contenido editable ===================== */
let yearSel = 0;
let showAllEnc = false;
let showAllActs = false;
function renderAll() {
  renderAviso(); renderDomingos(); renderActs(); renderFormacion(); renderPosts(); renderGalExtra(); renderGalFija(); renderGalOrden(); renderTes();
}
function renderAviso() {
  const el = $('#aviso'); const t = String(cfg.aviso || '').trim();
  el.textContent = t; el.classList.toggle('hide', !t);
}
function hora() { return cfg.hora || 'Hora por confirmar'; }
function lugar() { const l = cfg.lugar; return l ? l + (/duaca/i.test(l) ? '' : ', Duaca') : 'Lugar por confirmar, Duaca'; }
function todayIso() { const n = new Date(); return n.getFullYear() + '-' + pad2(n.getMonth() + 1) + '-' + pad2(n.getDate()); }
function max3MonthsIso() { const n = new Date(); n.setDate(n.getDate() + 92); return n.getFullYear() + '-' + pad2(n.getMonth() + 1) + '-' + pad2(n.getDate()); }

/* Genera los domingos de los próximos 3 meses (13 semanas) */
function domingos(count = 13, src = cfg) {
  const now = new Date(); const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const base = new Date(today.getTime()); base.setDate(base.getDate() + ((7 - base.getDay()) % 7));
  const out = [];
  for (let i = 0; i < count; i++) {
    const x = new Date(base.getFullYear(), base.getMonth(), base.getDate() + 7 * i);
    const key = x.getFullYear() + '-' + pad2(x.getMonth() + 1) + '-' + pad2(x.getDate());
    const isToday = x.getTime() === today.getTime();
    const sin = ((src && src.sinReunion) || {})[key];
    const customTema = String(((src && src.temas) || {})[key] || '').trim();
    out.push({
      key,
      dia: x.getDate(),
      mes: MESES[x.getMonth()],
      diaSem: 'Domingo',
      isSunday: true,
      isToday,
      hasCustom: !!customTema || !!sin,
      badge: isToday ? 'Hoy' : 'Domingo',
      tema: sin ? 'Sin reunión' : (customTema || 'Encuentro JUMA')
    });
  }
  return out;
}

/* Une los domingos + los días adicionales (lunes a sábado) en un rango de hasta 3 meses */
function encuentrosProgramados(src = cfg) {
  const hoyKey = todayIso();
  const maxKey = max3MonthsIso();
  const sun = domingos(13, src);
  const extras = ((src && src.encuentrosExtra) || []).filter((e) => e && e.fecha && e.fecha >= hoyKey && e.fecha <= maxKey).map((e) => {
    const dt = new Date(e.fecha + 'T00:00:00');
    const diaSem = isNaN(dt.getTime()) ? 'Encuentro' : DIAS_SEM[dt.getDay()];
    const isToday = e.fecha === hoyKey;
    return {
      key: e.fecha,
      dia: isNaN(dt.getTime()) ? e.fecha.slice(-2) : dt.getDate(),
      mes: isNaN(dt.getTime()) ? '' : MESES[dt.getMonth()],
      diaSem,
      isSunday: dt.getDay() === 0,
      isToday,
      isExtra: true,
      hasCustom: true,
      badge: isToday ? 'Hoy · ' + diaSem : diaSem,
      tema: String(e.tema || '').trim() || ('Encuentro (' + diaSem + ')')
    };
  });
  const byKey = new Map();
  sun.forEach((s) => byKey.set(s.key, s));
  extras.forEach((x) => byKey.set(x.key, x));
  const list = Array.from(byKey.values()).sort((a, b) => a.key.localeCompare(b.key));
  list.forEach((item, idx) => {
    item.first = idx === 0;
    if (idx === 0) item.badge = item.isToday ? 'Hoy' : (item.isSunday ? 'Este domingo' : 'Próximo · ' + item.diaSem);
  });
  return list;
}

/* ===================== Vinculación con Google Calendar, .ics y Recordatorios ===================== */
function parseJumaTime(str) {
  const s = String(str || hora() || '').toLowerCase();
  const m = s.match(/(\d{1,2})(?:\s*[:.]\s*(\d{2}))?\s*(a\.?\s*m\.?|p\.?\s*m\.?)?/i);
  if (!m) return { h: 14, m: 30 };
  let hh = parseInt(m[1], 10);
  const mm = m[2] ? parseInt(m[2], 10) : 0;
  const ampm = (m[3] || '').replace(/[\s.]/g, '');
  if (ampm === 'pm' && hh < 12) hh += 12;
  else if (ampm === 'am' && hh === 12) hh = 0;
  else if (!ampm && hh >= 1 && hh <= 6) hh += 12;
  return { h: Math.min(23, Math.max(0, hh)), m: Math.min(59, Math.max(0, mm)) };
}
function parseSpanishDateToIso(str) {
  const s = String(str || '').trim().toLowerCase();
  if (!s) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const dmy = s.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (dmy) return `${dmy[3]}-${pad2(dmy[2])}-${pad2(dmy[1])}`;
  const mIdx = MESES.findIndex((mes) => s.includes(mes) || s.includes(mes.slice(0, 3)));
  const dayM = s.match(/\b(\d{1,2})\b/);
  if (mIdx >= 0 && dayM) {
    const now = new Date();
    const yrM = s.match(/\b(20\d{2})\b/);
    let yr = yrM ? parseInt(yrM[1], 10) : now.getFullYear();
    const dNum = parseInt(dayM[1], 10);
    if (!yrM && new Date(yr, mIdx, dNum) < new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)) yr += 1;
    return `${yr}-${pad2(mIdx + 1)}-${pad2(dNum)}`;
  }
  return '';
}
function googleCalUrl({ title, dateIso, timeStr, desc, loc }) {
  const cleanTitle = String(title || 'Encuentro JUMA Duaca').trim();
  const cleanLoc = String(loc || lugar() || 'Parroquia San Juan Bautista, Duaca, Estado Lara').trim();
  const cleanDesc = String(desc || 'Actividad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca). Hora: ' + hora() + ' · Lugar: ' + lugar()).trim();
  const iso = parseSpanishDateToIso(dateIso);
  let datesParam = '';
  if (iso) {
    const { h, m } = parseJumaTime(timeStr || hora());
    const ymd = iso.replace(/-/g, '');
    const endH = Math.min(23, h + 2);
    datesParam = `&dates=${ymd}T${pad2(h)}${pad2(m)}00/${ymd}T${pad2(endH)}${pad2(m)}00&ctz=America/Caracas`;
  }
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(cleanTitle)}${datesParam}&details=${encodeURIComponent(cleanDesc)}&location=${encodeURIComponent(cleanLoc)}`;
}
function allUpcomingCalendarEvents() {
  const evs = [];
  const loc = lugar();
  const hr = hora();
  encuentrosProgramados(cfg).forEach((s) => {
    if (s.tema === 'Sin reunión') return;
    evs.push({
      uid: `juma-enc-${s.key}@jumaduaca.org`,
      title: `JUMA Duaca · ${s.tema}`,
      dateIso: s.key,
      badge: `${s.dia} de ${s.mes} (${s.diaSem})`,
      desc: `Encuentro de formación y comunidad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca).\nTema: ${s.tema}\nHora: ${hr}\nLugar: ${loc}`,
      loc
    });
  });
  (cfg.actividades || []).filter((x) => x && x.t).forEach((x, idx) => {
    const iso = parseSpanishDateToIso(x.f);
    evs.push({
      uid: `juma-act-${iso || idx}@jumaduaca.org`,
      title: `JUMA Duaca · ${x.t}`,
      dateIso: iso,
      badge: x.f || 'Próximamente',
      desc: `${x.d ? x.d + '\n' : ''}Actividad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca).\nFecha: ${x.f || 'Por confirmar'}\nLugar: ${loc}`,
      loc
    });
  });
  return evs;
}
function downloadIcsCalendar() {
  const evs = allUpcomingCalendarEvents().filter((e) => e.dateIso);
  if (!evs.length) return;
  const { h, m } = parseJumaTime(hora());
  const endH = Math.min(23, h + 2);
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const icsEsc = (t) => String(t || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//JUMA Duaca//Juventud Misionera Allamaniana//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:JUMA Duaca · Actividades y Formación',
    'X-WR-TIMEZONE:America/Caracas'
  ];
  evs.forEach((e) => {
    const ymd = e.dateIso.replace(/-/g, '');
    lines.push(
      'BEGIN:VEVENT',
      `UID:${e.uid}`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${ymd}T${pad2(h)}${pad2(m)}00`,
      `DTEND:${ymd}T${pad2(endH)}${pad2(m)}00`,
      `SUMMARY:${icsEsc(e.title)}`,
      `DESCRIPTION:${icsEsc(e.desc)}`,
      `LOCATION:${icsEsc(e.loc)}`,
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      `DESCRIPTION:${icsEsc('Mañana: ' + e.title + ' (' + hora() + ')')}`,
      'END:VALARM',
      'BEGIN:VALARM',
      'TRIGGER:-PT2H',
      'ACTION:DISPLAY',
      `DESCRIPTION:${icsEsc('En 2 horas: ' + e.title + ' en ' + e.loc)}`,
      'END:VALARM',
      'END:VEVENT'
    );
  });
  lines.push('END:VCALENDAR');
  const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Calendario-JUMA-Duaca.ics';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 3000);
}
function remindersEnabled() {
  try { return localStorage.getItem('juma-reminders-on') === '1'; } catch (e) { return false; }
}
async function notifyDevice(title, body) {
  try {
    if (!('Notification' in window) || Notification.permission !== 'granted') return false;
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, { body, icon: './icons/icon-192.png', badge: './icons/icon-192.png' });
        return true;
      }
    }
    new Notification(title, { body, icon: './icons/icon-192.png' });
    return true;
  } catch (e) { return false; }
}
async function toggleReminders() {
  const currentlyOn = remindersEnabled();
  if (currentlyOn) {
    try { localStorage.removeItem('juma-reminders-on'); } catch (e) {}
    renderDomingos();
    if ($('#au-t')) repaintAuth();
    return;
  }
  try { localStorage.setItem('juma-reminders-on', '1'); } catch (e) {}
  if ('Notification' in window && Notification.permission !== 'granted') {
    try { await Notification.requestPermission(); } catch (e) {}
  }
  if (fb && fb.getToken && CFG.vapidKey && 'serviceWorker' in navigator && Notification.permission === 'granted') {
    try {
      const reg = await navigator.serviceWorker.ready;
      const token = await fb.getToken(fb.messaging, { vapidKey: CFG.vapidKey, serviceWorkerRegistration: reg });
      if (token && fb.db) await fb.setDoc(fb.doc(fb.db, 'tokens', token), { creado: fb.serverTimestamp() });
    } catch (e) {}
  }
  const nextEv = allUpcomingCalendarEvents().find((e) => e.dateIso);
  await notifyDevice(
    '🔔 Recordatorios de JUMA Duaca activados',
    nextEv ? `Próxima cita: ${nextEv.title} (${nextEv.badge} · ${hora()})` : `Te avisaremos de tus próximos encuentros y actividades (${hora()}).`
  );
  checkUpcomingReminders(true);
  renderDomingos();
  if ($('#au-t')) repaintAuth();
}
function checkUpcomingReminders(forceBanner = false) {
  if (!remindersEnabled()) return;
  const now = new Date();
  const hoyIso = todayIso();
  const man = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const manIso = man.getFullYear() + '-' + pad2(man.getMonth() + 1) + '-' + pad2(man.getDate());
  const evs = allUpcomingCalendarEvents().filter((e) => e.dateIso);
  if (!evs.length) return;
  const todayEv = evs.find((e) => e.dateIso === hoyIso);
  const tomEv = evs.find((e) => e.dateIso === manIso);
  const target = todayEv || tomEv || (forceBanner ? evs[0] : null);
  if (!target) return;
  const labelWhen = todayEv ? '¡HOY!' : (tomEv ? 'MAÑANA' : target.badge);
  const seenKey = 'juma-rem-sent-' + target.dateIso + '-' + (todayEv ? 'hoy' : 'man');
  if ((todayEv || tomEv) && !localStorage.getItem(seenKey)) {
    try { localStorage.setItem(seenKey, '1'); } catch (e) {}
    notifyDevice(`📅 ${labelWhen}: ${target.title}`, `Hora: ${hora()} · Lugar: ${lugar()}`);
  }
  let banner = $('#juma-rem-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'juma-rem-banner';
    banner.style.cssText = 'position:fixed;bottom:18px;left:18px;z-index:85;max-width:390px;background:var(--navy);color:#fff;border:2px solid var(--sky);border-radius:16px;padding:14px 16px;box-shadow:0 16px 38px rgba(6,21,54,.42);font-size:13.5px;line-height:1.45';
    document.body.appendChild(banner);
  }
  const gUrl = googleCalUrl(target);
  banner.innerHTML = `<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px"><b style="color:var(--sky);font-size:14px">🔔 Recordatorio JUMA · ${esc(labelWhen)}</b><button type="button" aria-label="Cerrar recordatorio" style="background:none;border:0;color:#fff;cursor:pointer;font-size:15px;line-height:1;padding:0 2px" onclick="this.closest('#juma-rem-banner').remove()">✕</button></div><p style="margin:5px 0 10px;color:#E8F1FF"><b>${esc(target.title)}</b><br><span style="font-size:12.5px;color:var(--muted-lt)">${esc(target.badge)} · ${esc(hora())} · ${esc(lugar())}</span></p><div style="display:flex;flex-wrap:wrap;gap:8px"><a class="btn btn-blue btn-sm" style="padding:6px 12px;font-size:12px" target="_blank" rel="noopener" href="${esc(gUrl)}">📅 Abrir en Google Calendar</a><button type="button" class="btn btn-outline btn-sm" style="padding:6px 12px;font-size:12px;color:#fff;border-color:rgba(255,255,255,.35)" data-dl-ics>📲 Guardar todo (.ics)</button></div>`;
}

function renderDomingos() {
  $('#f-hora').textContent = hora(); $('#f-lugar').textContent = lugar();
  const all = encuentrosProgramados(cfg);
  const visible = showAllEnc ? all : all.slice(0, 4);
  $('#tags').innerHTML = visible.map((s) => {
    const canAgendar = s.tema !== 'Sin reunión';
    const gUrl = canAgendar ? googleCalUrl({
      title: `JUMA Duaca · ${s.tema}`,
      dateIso: s.key,
      desc: `Encuentro de formación y comunidad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca).\nTema: ${s.tema}\nHora: ${hora()}\nLugar: ${lugar()}`
    }) : '';
    return `<li class="dtag"><i aria-hidden="true"></i><div class="dcard${s.first ? ' first' : ''}"><span class="flag" style="${!s.first ? 'background:var(--mist);color:var(--royal)' : ''}">${esc(s.badge)}</span><span class="d num">${s.dia}</span><span class="m">${s.mes}</span><span class="t">${esc(s.tema)}</span>${canAgendar ? `<a class="gcal-chip" target="_blank" rel="noopener" href="${esc(gUrl)}" title="Agregar este encuentro a Google Calendar" style="display:inline-flex;align-items:center;gap:5px;margin-top:10px;padding:5px 10px;border-radius:99px;background:${s.first ? 'rgba(6,21,54,.14)' : 'var(--mist)'};color:${s.first ? 'var(--navy)' : 'var(--royal)'};font-size:12px;font-weight:800;text-decoration:none">📅 Agendar en Google</a>` : ''}</div></li>`;
  }).join('');
  let moreBtn = $('#btn-more-enc');
  if (all.length > 4) {
    if (!moreBtn) {
      moreBtn = document.createElement('div');
      moreBtn.id = 'btn-more-enc';
      moreBtn.style.cssText = 'margin-top:20px;text-align:center';
      $('.cord-row').insertAdjacentElement('afterend', moreBtn);
    }
    moreBtn.innerHTML = `<button type="button" class="btn btn-outline btn-sm" data-toggle-enc>${showAllEnc ? 'Mostrar solo los 4 próximos encuentros' : `Ver programación de 3 meses (${all.length} fechas)`}</button>`;
  } else if (moreBtn) {
    moreBtn.remove();
  }
  const factsEl = $('dl.facts');
  if (factsEl) {
    let syncBar = $('#cal-sync-bar');
    if (!syncBar) {
      syncBar = document.createElement('div');
      syncBar.id = 'cal-sync-bar';
      syncBar.style.cssText = 'margin-top:28px;padding:18px 22px;border-radius:16px;background:rgba(255,255,255,.08);border:1px solid var(--line-dk);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px';
      factsEl.insertAdjacentElement('afterend', syncBar);
    }
    const nextMeet = all.find((x) => x.tema !== 'Sin reunión');
    const nextGUrl = nextMeet ? googleCalUrl({
      title: `JUMA Duaca · ${nextMeet.tema}`,
      dateIso: nextMeet.key,
      desc: `Encuentro de formación de JUMA Duaca (${nextMeet.dia} de ${nextMeet.mes}). Hora: ${hora()} · Lugar: ${lugar()}`
    }) : '';
    const remOn = remindersEnabled();
    syncBar.innerHTML = `
      <div style="flex:1 1 260px">
        <b style="display:block;font-size:16px;color:#fff">📅 Vincula tus actividades con Google Calendar y activa recordatorios</b>
        <p style="margin:4px 0 0;font-size:13.5px;color:var(--muted-lt)">Agrega cada encuentro a tu Google Calendar, sincroniza los 3 meses con alarmas en tu teléfono o activa avisos automáticos.</p>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">
        ${nextGUrl ? `<a class="btn btn-white btn-sm" target="_blank" rel="noopener" href="${esc(nextGUrl)}">📅 Agendar próximo encuentro en Google Calendar</a>` : ''}
        <button type="button" class="btn btn-outline btn-sm" style="color:#fff;border-color:rgba(255,255,255,.4)" data-dl-ics>📲 Sincronizar calendario 3 meses (.ics con alarmas)</button>
        <button type="button" class="btn ${remOn ? 'btn-blue' : 'btn-outline'} btn-sm" style="${remOn ? '' : 'color:#fff;border-color:rgba(255,255,255,.4)'}" data-toggle-rem>${remOn ? '🔔 Recordatorio activo en este dispositivo' : '🔔 Activar recordatorio en mi teléfono'}</button>
      </div>`;
  }
}

function renderActs() {
  const a = (cfg.actividades || []).filter((x) => x && x.t);
  $('#acts-wrap').classList.toggle('hide', !a.length);
  const visible = showAllActs ? a : a.slice(0, 4);
  $('#acts').innerHTML = visible.map((x) => {
    const gUrl = googleCalUrl({
      title: `JUMA Duaca · ${x.t}`,
      dateIso: x.f || '',
      desc: `${x.d ? x.d + '\n' : ''}Actividad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca).\nFecha: ${x.f || 'Por confirmar'}\nLugar: ${lugar()}`
    });
    return `<li><b>${esc(x.t)}</b><span class="f">${esc(x.f || '')}</span><p>${esc(x.d || '')}</p><div style="margin-top:14px"><a class="btn btn-outline btn-sm" style="padding:6px 12px;font-size:12px;color:var(--sky);border-color:rgba(142,201,255,.4)" target="_blank" rel="noopener" href="${esc(gUrl)}">📅 Agendar en Google Calendar</a></div></li>`;
  }).join('');
  let moreActBtn = $('#btn-more-acts');
  if (a.length > 4) {
    if (!moreActBtn) {
      moreActBtn = document.createElement('div');
      moreActBtn.id = 'btn-more-acts';
      moreActBtn.style.cssText = 'margin-top:20px;text-align:center';
      $('#acts').insertAdjacentElement('afterend', moreActBtn);
    }
    moreActBtn.innerHTML = `<button type="button" class="btn btn-outline btn-sm" data-toggle-acts>${showAllActs ? 'Mostrar solo 4 actividades' : `Ver todas las actividades (${a.length} en total)`}</button>`;
  } else if (moreActBtn) {
    moreActBtn.remove();
  }
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
const DEFAULT_POSTS = [
  {
    id: 'doblete-amor-2026',
    t: '¡Los dobletes no siempre son de catástrofes, esta vez venimos con uno de puro AMOR y CONSOLACIÓN! ❤️🔥✨',
    x: 'Este sábado 31 de octubre nos activamos para caminar juntos en la misión, llevando esperanza, sonrisas y el amor de Cristo a donde más se necesita. 🤝🔥 Porque cuando caminamos unidos, ¡cada gesto transforma vidas!\n\n📍 Ruta: Metro Nuevo Circo ➡️ Av. Bolívar ➡️ Parque Los Caobos.\n📅 Fecha: Sábado, 31 de octubre.\n⏰ Hora: 8:00 a. m.\n\n¡Es hora de salir al encuentro y ser testigos del amor! 👟✝️💛\n\nY tú... ¿cuál será doblete de amor?',
    fecha: '2026-10-12T23:35:00.000Z',
    foto: 'img/caminata-misionera-2026.png',
    video: 'img/caminata-misionera-2026.mp4',
    introCoverMs: 2000
  }
];
function getPostsList(src = cfg) {
  const custom = ((src && src.posts) || []).filter((p) => p && (p.t || p.x));
  const hiddenIds = new Set((src && src.postsOcultos) || []);
  const seenIds = new Set(custom.map((p) => p.id).filter(Boolean));
  const defaults = DEFAULT_POSTS.filter((d) => !hiddenIds.has(d.id) && !seenIds.has(d.id));
  return custom.concat(defaults);
}
function mediaHtml(p, idx) {
  const yt = p.video && String(p.video).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
  if (yt) return `<div class="post-media"><iframe class="yt" loading="lazy" src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="${esc(p.t)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  if (p.video && p.foto) {
    const delay = p.introCoverMs || 2000;
    return `<div class="post-media is-reel" data-post-media="${idx}" data-intro-ms="${delay}">
      <div class="post-intro-cover" data-intro-cover="${idx}" title="Toca para ver el video con sonido">
        <img src="${esc(p.foto)}" alt="${esc(p.t)}">
      </div>
      <span class="post-intro-badge" data-intro-badge="${idx}">🖼️ Portada · el video inicia en 2 s…</span>
      <button type="button" class="post-sound-btn" data-toggle-post-sound="${idx}">🔇 Activar sonido</button>
      <video controls preload="auto" playsinline muted loop src="${esc(p.video)}" data-post-video="${idx}"></video>
    </div>`;
  }
  if (p.video) return `<div class="post-media is-reel"><video controls preload="metadata" playsinline src="${esc(p.video)}" data-post-video="${idx}"></video></div>`;
  if (p.foto) return `<div class="post-media"><img class="photo" loading="lazy" src="${esc(p.foto)}" alt="${esc(p.t)}"></div>`;
  return '';
}
let postMediaObserver = null;
function setupPostVideos() {
  if (postMediaObserver) { try { postMediaObserver.disconnect(); } catch (e) {} postMediaObserver = null; }
  const boxes = $$('[data-post-media]');
  if (!boxes.length) return;
  const triggerIntro = (box) => {
    if (box.dataset.introStarted) return;
    box.dataset.introStarted = '1';
    const ms = parseInt(box.dataset.introMs || '2000', 10) || 2000;
    const cover = box.querySelector('[data-intro-cover]');
    const badge = box.querySelector('[data-intro-badge]');
    const vid = box.querySelector('video');
    setTimeout(() => {
      if (cover) cover.classList.add('is-hidden');
      if (badge) { badge.style.opacity = '0'; setTimeout(() => { if (badge) badge.style.display = 'none'; }, 420); }
      if (vid && vid.paused) vid.play().catch(() => {});
    }, ms);
  };
  if ('IntersectionObserver' in globalThis) {
    postMediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const vid = en.target.querySelector('video');
        if (en.isIntersecting) {
          triggerIntro(en.target);
          if (en.target.dataset.introStarted && en.target.querySelector('.post-intro-cover.is-hidden') && vid && vid.paused) {
            vid.play().catch(() => {});
          }
        } else if (vid && !vid.paused) {
          vid.pause();
        }
      });
    }, { threshold: 0.25 });
    boxes.forEach((b) => postMediaObserver.observe(b));
  } else {
    boxes.forEach(triggerIntro);
  }
}
async function sharePostWhatsApp(idx, btnEl) {
  const list = getPostsList();
  const p = list[idx];
  if (!p) return;
  const fullText = [p.t, p.x].filter((s) => String(s || '').trim()).join('\n\n');
  const origHtml = btnEl ? btnEl.innerHTML : '';
  if (btnEl) {
    btnEl.disabled = true;
    btnEl.innerHTML = '<span>⏳ Preparando video y texto…</span>';
  }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(fullText).catch(() => {});
    }
  } catch (e) {}

  /* Cuando se comparte, solo se comparte el archivo de video (no la imagen de portada de 2 s) junto con todo el texto */
  const isLocalVideo = p.video && !/^(https?:)?\/\/(?:www\.)?(?:youtube\.com|youtu\.be)/i.test(p.video);
  if (isLocalVideo && navigator.share && navigator.canShare) {
    try {
      const resp = await fetch(p.video);
      if (resp.ok) {
        const blob = await resp.blob();
        const file = new File([blob], 'Doblete-de-Amor-JUMA.mp4', { type: blob.type || 'video/mp4' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: p.t || 'Noticia JUMA',
            text: fullText
          });
          if (btnEl) {
            btnEl.disabled = false;
            btnEl.innerHTML = '<span>✔ ¡Video y texto listos!</span>';
            setTimeout(() => { btnEl.innerHTML = origHtml; }, 3000);
          }
          return;
        }
      }
    } catch (err) {
      if (err && err.name === 'AbortError') {
        if (btnEl) { btnEl.disabled = false; btnEl.innerHTML = origHtml; }
        return;
      }
    }
  }

  /* Respaldo directo a WhatsApp con el texto completo y enlace directo únicamente al video */
  const videoAbsUrl = p.video ? new URL(p.video, location.href).href : location.href;
  const waMsg = fullText + (p.video ? '\n\n🎥 Video: ' + videoAbsUrl : '');
  window.open('https://wa.me/?text=' + encodeURIComponent(waMsg), '_blank', 'noopener');
  if (btnEl) {
    btnEl.disabled = false;
    btnEl.innerHTML = '<span>✔ Abriendo WhatsApp…</span>';
    setTimeout(() => { btnEl.innerHTML = origHtml; }, 3000);
  }
}
function renderPosts() {
  const list = getPostsList();
  $('#novedades').classList.toggle('hide', !list.length);
  $('#nav-nov').classList.toggle('hide', !list.length);
  $('#posts').innerHTML = list.map((p, idx) => {
    const hasMore = !!String(p.x || '').trim();
    return `<article class="post">
      ${mediaHtml(p, idx)}
      <div class="post-body">
        ${p.fecha ? `<time>📅 ${esc(fmtF(p.fecha))}</time>` : ''}
        <p class="post-lead">${esc(p.t)}</p>
        ${hasMore ? `<div class="post-more-wrap">
          <button type="button" class="post-more-btn" data-toggle-post-more="${idx}" aria-expanded="false">Ver más ▾</button>
          <div class="post-more-txt hide" id="post-more-${idx}">${esc(p.x)}</div>
        </div>` : ''}
        <div class="post-actions">
          <button type="button" class="btn-wa-share" data-share-post="${idx}">
            <span>📲 Compartir por WhatsApp</span>
          </button>
        </div>
      </div>
    </article>`;
  }).join('');
  setupPostVideos();
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
  if (typeof form !== 'undefined' && form.sending) return;
  if (typeof stopQrCamera === 'function') stopQrCamera();
  const ov = $('.overlay', modalRoot);
  const done = () => { modalRoot.innerHTML = ''; lock(false); modalKey = null; };
  if (!ov || reduced()) return done();
  ov.classList.add('is-out'); setTimeout(done, 180);
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalRoot.firstChild) closeModal(); });
const closeBtn = `<button type="button" data-close aria-label="Cerrar" style="flex:0 0 auto;width:46px;height:46px;border-radius:10px;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"></path></svg></button>`;
modalRoot.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
const sheetHead = (kicker, title, id) => `<div class="sheet-head"><div class="ribbon" aria-hidden="true" style="position:absolute;top:0;left:0;right:0"></div><div style="display:flex;align-items:center;gap:16px"><div style="flex:1 1 auto;min-width:0"><div style="font-size:13px;color:var(--muted-lt)">${esc(kicker)}</div><h2 id="${id}" class="h-display" style="margin-top:4px;font-size:clamp(28px,4vw,38px)">${esc(title)}</h2></div>${closeBtn}</div></div>`;

/* ===================== estado de usuario, registro y planilla ===================== */
let currentUser = null;
let myProfile = null;
let allInscripciones = [];
let allMensajes = [];
let insQuery = '';
let authTab = 'user'; // 'user' | 'master'
let authErr = '', authOk = '', authBusy = false;

const form = { step: 1, d: {}, consent: false, done: false, err: '', isUpdate: false };
const FLD = {
  1: [['nombres','Nombres *','text','given-name'],['apellidos','Apellidos *','text','family-name'],['nac','Fecha de nacimiento','date','bday'],['@edad'],['celular','Celular *','tel','tel'],['madre','Nombre de la madre'],['padre','Nombre del padre'],['hermano','Hermano/a'],['ocupacion','Ocupación'],['direccion','Dirección','text','street-address','w'],['parroquia','Parroquia','text','','w']],
  2: [['repNombre','Nombre completo','text','','w'],['repCedula','Cédula'],['repCelular','Celular','tel'],['repOcupacion','Ocupación','text','','w']]
};
function edadDe(src) {
  const d = src || form.d; if (!d.nac) return '';
  const b = new Date(d.nac + 'T00:00:00'); if (isNaN(b.getTime())) return '';
  const n = new Date(); let a = n.getFullYear() - b.getFullYear(); const m = n.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && n.getDate() < b.getDate())) a--;
  return a >= 0 && a < 120 ? String(a) : '';
}
const esMenor = (src) => { const e = edadDe(src); return e !== '' && parseInt(e, 10) < 18; };
function inputHtml(k, label, type, ac, cls, ph) {
  return `<div class="fld ${cls || ''}"><label for="f-${k}">${label}</label><input id="f-${k}" data-k="${k}" type="${type || 'text'}" value="${esc(form.d[k] || '')}" autocomplete="${ac || 'off'}" ${ph ? `placeholder="${esc(ph)}"` : ''}></div>`;
}
const chips = (k, vals) => vals.map((v) => { const on = form.d[k] === v; return `<button type="button" class="chip" data-chip="${k}" data-v="${esc(v)}" aria-pressed="${on}" style="border:2px solid ${on ? '#2452C8' : '#B9C8E4'};background:${on ? '#2452C8' : '#FFFFFF'};color:${on ? '#FFFFFF' : '#0A1B3F'}">${esc(v)}</button>`; }).join('');
function summaryRows(src) {
  const d = src || form.d, e = edadDe(d);
  return [
    ['Nombre', ((d.nombres || '') + ' ' + (d.apellidos || '')).trim()], ['Fecha de nacimiento', d.nac ? d.nac.split('-').reverse().join('/') : ''], ['Edad', e ? e + ' años' : ''],
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
    if (!(d.correo || '').trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.correo.trim())) return 'Escribe un correo electrónico válido para tu cuenta en la app.';
    if (!currentUser && !form.isUpdate && String(d.password || '').length < 6) return 'Crea una contraseña de al menos 6 caracteres para poder ingresar a la app.';
  }
  if (st === 2 && esMenor() && (!(d.repNombre || '').trim() || !(d.repCelular || '').trim())) return 'Como eres menor de edad, escribe el nombre y el celular de tu representante.';
  if (st === 4 && !form.consent) return 'Marca la casilla de confirmación para guardar tu registro.';
  return '';
}
const WA_DEFAULT = '584120545307,584125667767';
function waNums() { return String(cfg.whatsapp || WA_DEFAULT).split(/[,;\n]+/).map((x) => x.replace(/\D/g, '')).map((x) => (x.startsWith('0') ? '58' + x.slice(1) : x)).filter((x) => x.length >= 10).slice(0, 4); }
function waLabel(n) { const d = n.startsWith('58') ? '0' + n.slice(2) : n; return d.length === 11 ? d.slice(0, 4) + '-' + d.slice(4, 7) + '-' + d.slice(7) : d; }
function planillaTexto(src) { return 'PLANILLA DE INSCRIPCIÓN · JUMA Duaca\n\n' + summaryRows(src).map((r) => r[0] + ': ' + r[1]).join('\n'); }
async function shrinkAvatarDataUrl(file) {
  const bmp = await createImageBitmap(file);
  const s = Math.min(bmp.width, bmp.height);
  const sx = Math.round((bmp.width - s) / 2), sy = Math.round((bmp.height - s) / 2);
  const cv = document.createElement('canvas'); cv.width = 240; cv.height = 240;
  cv.getContext('2d').drawImage(bmp, sx, sy, s, s, 0, 0, 240, 240);
  return cv.toDataURL('image/jpeg', 0.78);
}

function sixMonthsAgoIso() {
  const n = new Date(); n.setDate(n.getDate() - 183);
  return n.getFullYear() + '-' + pad2(n.getMonth() + 1) + '-' + pad2(n.getDate());
}
function userRole(rec) {
  if (!rec) return 'participante';
  const em = String(rec.correo || (rec.datos && rec.datos.correo) || '').trim().toLowerCase();
  if (em && isMasterEmail(em)) return 'coordinador';
  const r = String(rec.rol || (rec.datos && rec.datos.rol) || '').trim().toLowerCase();
  if (r === 'coordinador' || r === 'asesor' || r === 'participante') return r;
  const cList = ((cfg && cfg.coordinadoresEmails) || []).map((x) => String(x).toLowerCase());
  if (em && cList.includes(em)) return 'coordinador';
  const aList = ((cfg && cfg.asesoresEmails) || []).map((x) => String(x).toLowerCase());
  if (em && aList.includes(em)) return 'asesor';
  return 'participante';
}
function roleLabel(rol) {
  if (rol === 'coordinador') return 'Coordinador(a)';
  if (rol === 'asesor') return 'Asesor(a)';
  return 'Participante';
}
function roleBadgeHtml(rol) {
  if (rol === 'coordinador') return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12.5px;font-weight:800;background:#E8F1FF;color:#0C2D74;border:1px solid #2452C8">★ Coordinador(a)</span>';
  if (rol === 'asesor') return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12.5px;font-weight:800;background:#FFF3CD;color:#7A5200;border:1px solid #F5C518">◆ Asesor(a)</span>';
  return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12.5px;font-weight:800;background:#E4F5EA;color:#14532D;border:1px solid #17824A">● Participante</span>';
}
function qrPayloadFor(rec) {
  const id = (rec && (rec.uid || rec.id)) || (currentUser && currentUser.uid) || ('juma-' + sha256(String((rec && rec.correo) || 'juma')).slice(0, 16));
  return 'JUMA:' + id;
}
function qrImgUrl(payload, size = 260) {
  return 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&margin=10&ecc=M&data=' + encodeURIComponent(payload);
}
function asistenciasUltimos6Meses(rec) {
  const corte = sixMonthsAgoIso();
  const arr = Array.isArray(rec && rec.asistencias) ? rec.asistencias : [];
  return arr.filter((a) => a && a.fecha && String(a.fecha) >= corte).sort((a, b) => String(b.fecha || '').localeCompare(String(a.fecha || '')));
}

function downloadPlanillaHtml(src, recFull) {
  const d = src || form.d;
  const rec = recFull || myProfile || { datos: d, correo: d.correo };
  const qrData = qrPayloadFor(rec);
  const qrSrc = qrImgUrl(qrData, 220);
  const rolTxt = roleLabel(userRole(rec));
  const fotoHtml = d.foto ? `<img src="${esc(d.foto)}" alt="Foto de perfil" style="width:96px;height:96px;border-radius:50%;object-fit:cover;border:3px solid #2452C8;display:block">` : '';
  const html = '<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Planilla JUMA</title><style>body{font-family:Arial,sans-serif;max-width:720px;margin:32px auto;color:#0A1B3F;padding:0 16px}h1{color:#0C2D74;margin-bottom:4px}h2{font-size:14px;color:#3A4F75;margin-top:0;font-weight:normal}.top{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;padding-bottom:16px;border-bottom:2px solid #2452C8}table{width:100%;border-collapse:collapse;margin-top:20px}td{padding:10px 8px;border-bottom:1px solid #D3DEF0;font-size:15px}td:first-child{width:38%;font-weight:bold;color:#2452C8}.qrbox{text-align:center;padding:10px;border:1.5px solid #D3DEF0;border-radius:12px}</style></head><body><div class="top"><div style="display:flex;align-items:center;gap:16px">' + fotoHtml + '<div><h1>Perfil de inscripción misionero</h1><h2>Instituto Misioneros de la Consolata Barquisimeto · JUMA Duaca</h2><p style="margin:6px 0 0;font-weight:bold;color:#2452C8">Rol: ' + esc(rolTxt) + '</p></div></div><div class="qrbox"><img src="' + esc(qrSrc) + '" alt="QR Asistencia" width="130" height="130"><div style="font-size:11px;color:#3A4F75;margin-top:4px">QR de Asistencia JUMA</div></div></div><table>' + summaryRows(d).map((r) => '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>').join('') + '</table></body></html>';
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' })); a.download = 'Planilla-JUMA-' + ((d.apellidos || d.nombres || 'inscripcion').trim().replace(/[^A-Za-z0-9]+/g, '-')) + '.html'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function formHtml() {
  const st = form.step, d = form.d;
  if (form.done) {
    const wa = waNums();
    return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', 'Registro y planilla misionera', 'pl-t')}<div style="padding:clamp(28px,5vw,56px)"><div class="u-badge" style="background:#E4F5EA;color:#14532D;margin-bottom:12px">✔ Cuenta y planilla guardadas</div><div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">${d.foto ? `<img src="${esc(d.foto)}" alt="" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid var(--royal)">` : ''}<h3 class="h-display h-lg" style="margin:0">¡Bienvenido a JUMA, ${esc((d.nombres || '').trim().split(' ')[0] || 'misionero')}!</h3></div><p class="body" style="margin-top:12px;max-width:54ch">${form.saved ? 'Tu registro, tu planilla y tu código QR personal ya quedaron guardados en la nube de JUMA y tu sesión está iniciada en la app. ' : 'Tu planilla quedó guardada en este dispositivo. '}${wa.length ? 'También puedes enviarla por WhatsApp a un coordinador con un toque o ver tu carnet con QR.' : ''}</p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:28px"><button type="button" class="btn btn-blue" data-go-profile>Ver mi perfil y código QR</button>${wa.map((n) => `<a class="btn btn-soft" target="_blank" rel="noopener" href="https://wa.me/${n}?text=${encodeURIComponent(planillaTexto())}">Enviar por WhatsApp a ${esc(waLabel(n))}</a>`).join('')}<button type="button" class="btn btn-soft" data-dl>Descargar mi planilla</button><button type="button" class="btn btn-soft" data-close>Cerrar</button></div></div></div></div>`;
  }
  const names = ['Cuenta y datos', 'Representante', 'Salud', 'Confirmar'];
  const prog = names.map((l, i) => `<div class="${i + 1 === st ? 'on' : (i + 1 < st ? 'ok' : '')}"><i aria-hidden="true"></i><span>${l}</span></div>`).join('');
  let body = '';
  if (st === 1) {
    const loginBanner = !currentUser ? `<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;margin-bottom:20px;border-radius:12px;background:var(--mist);font-size:14.5px"><span>¿Ya te registraste antes en la app?</span><button type="button" class="btn btn-soft btn-sm" data-switch-login style="min-height:36px;padding:0 14px;background:#fff">Iniciar sesión</button></div>` : `<div style="padding:12px 16px;margin-bottom:20px;border-radius:12px;background:#E4F5EA;color:#14532D;font-size:14.5px;font-weight:700">Sesión activa como ${esc(currentUser.email)} · Actualizando tu planilla</div>`;
    const googleQuickBtn = !currentUser ? `<div style="margin-bottom:14px"><button type="button" class="btn btn-soft btn-sm" data-google-form style="width:100%;background:#fff;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;gap:10px"><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg><span>Conectar con mi cuenta de Google</span></button></div>` : '';
    const accountFields = `<div style="width:100%;padding:16px 18px;margin-bottom:14px;border-radius:14px;background:#fff;border:1.5px solid var(--line)"><div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--royal);margin-bottom:12px">Datos de tu cuenta en la App</div>${googleQuickBtn}<div style="display:flex;flex-wrap:wrap;gap:16px">${inputHtml('correo', 'Correo electrónico *', 'email', 'email', '', 'tucorreo@ejemplo.com')}${!currentUser ? inputHtml('password', 'Contraseña para la app * (mín. 6 caracteres)', 'password', 'new-password', '', 'Mínimo 6 caracteres') : ''}</div></div>`;
    const photoField = `<div style="width:100%;padding:16px 18px;margin-bottom:10px;border-radius:14px;background:#fff;border:1.5px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;gap:16px">
      <div style="width:74px;height:74px;border-radius:50%;background:var(--mist);border:2.5px solid var(--royal);display:flex;align-items:center;justify-content:center;overflow:hidden;flex:0 0 auto">
        ${d.foto ? `<img src="${esc(d.foto)}" alt="Tu foto de perfil" style="width:100%;height:100%;object-fit:cover">` : `<span style="font-size:28px" aria-hidden="true">📷</span>`}
      </div>
      <div style="flex:1 1 200px">
        <b style="display:block;font-size:15.5px;color:var(--ink)">Foto para tu perfil misionero</b>
        <p style="margin:2px 0 10px;font-size:13.5px;color:var(--muted)">Elige una foto tuya para tu carnet y perfil dentro de la app.</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
          <label class="btn btn-soft btn-sm" style="min-height:38px;padding:0 14px;cursor:pointer"><span>${d.foto ? 'Cambiar foto' : 'Subir o tomar foto'}</span><input type="file" accept="image/*" id="f-avatar" style="display:none"></label>
          ${d.foto ? `<button type="button" class="btn btn-danger btn-sm" data-rm-avatar style="min-height:38px;padding:0 12px">Quitar</button>` : ''}
        </div>
      </div>
    </div>`;
    body = loginBanner + '<h3 class="h-display h-md">Tus datos personales</h3><p class="body" style="margin:8px 0 18px;font-size:15px">Con estos datos creamos tu perfil y tu planilla de inscripción en JUMA. Los campos con * son obligatorios.</p>' + accountFields + photoField + '<div style="display:flex;flex-wrap:wrap;gap:18px;margin-top:14px">' + FLD[1].map((f) => f[0] === '@edad' ? `<div class="fld"><span class="flabel">Edad</span><div class="fake num" id="edad-box">${edadDe() ? edadDe() + ' años' : 'Se calcula sola'}</div></div>` : inputHtml(f[0], f[1], f[2], f[3], f[4])).join('') + '</div>';
  } else if (st === 2) {
    const intro = `<h3 class="h-display h-md">Representante</h3><p class="body" style="margin:8px 0 24px;font-size:15px">${esMenor() ? 'Eres menor de edad: necesitamos los datos de tu representante.' : 'Si eres menor de edad, completa los datos de tu representante.'}</p>`;
    body = intro + '<div style="display:flex;flex-wrap:wrap;gap:18px">' + FLD[2].map((f) => inputHtml(f[0], f[1], f[2], f[3], f[4])).join('') + '</div>';
  } else if (st === 3) {
    body = `<h3 class="h-display h-md">Perfil de salud</h3><p class="body" style="margin:8px 0 24px;font-size:15px">Para cuidarte en retiros y actividades. Esta información es confidencial.</p>
<div class="qlabel">Grupo sanguíneo</div><div style="display:flex;flex-wrap:wrap;gap:10px;margin:10px 0 26px">${chips('sangre', ['A+','A-','B+','B-','AB+','AB-','O+','O-'])}</div>
<div class="qlabel">¿Padeces alguna enfermedad?</div><div style="display:flex;gap:10px;margin:10px 0 14px">${chips('enf', ['Sí','No'])}</div>${d.enf === 'Sí' ? `<div style="margin-bottom:22px">${inputHtml('enfCual', '¿Cuál?')}</div>` : ''}
<div class="qlabel" style="margin-top:14px">¿Tomas algún medicamento?</div><div style="display:flex;gap:10px;margin:10px 0 14px">${chips('med', ['Sí','No'])}</div>${d.med === 'Sí' ? `<div style="margin-bottom:22px">${inputHtml('medCual', '¿Cuál?')}</div>` : ''}
<div class="qlabel" style="margin:14px 0 12px">Alergias</div><div style="display:flex;flex-wrap:wrap;gap:18px">${inputHtml('alMed', 'Medicamentos')}${inputHtml('alAli', 'Alimentos')}${inputHtml('alOtros', 'Otras')}<div class="fld w"><label for="f-obs">Observaciones</label><textarea id="f-obs" data-k="obs" rows="3">${esc(d.obs || '')}</textarea></div></div>`;
  } else {
    body = `<h3 class="h-display h-md">Revisa y confirma tu registro</h3><p class="body" style="margin:8px 0 22px;font-size:15px">Verifica que todo esté bien antes de guardar tu cuenta y tu planilla.</p>${d.foto ? `<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px"><img src="${esc(d.foto)}" alt="Foto de perfil" style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:2.5px solid var(--royal)"><span style="font-size:14.5px;font-weight:700;color:var(--royal)">Foto de perfil lista ✔</span></div>` : ''}<dl style="margin:0;background:#fff;border:1px solid var(--line);border-radius:14px;padding:6px 22px">${summaryRows().map((r) => `<div style="display:flex;flex-wrap:wrap;gap:4px 18px;padding:12px 0;border-bottom:1px solid var(--mist)"><dt style="flex:0 0 190px;font-size:14px;font-weight:700;color:var(--royal)">${esc(r[0])}</dt><dd style="margin:0;flex:1 1 200px;min-width:0;font-size:15px;overflow-wrap:anywhere">${esc(r[1])}</dd></div>`).join('')}</dl>
<label style="display:flex;gap:14px;align-items:flex-start;margin-top:22px;padding:18px 20px;border-radius:14px;background:var(--mist);font-size:15px;line-height:1.55;cursor:pointer"><input type="checkbox" id="f-consent" ${form.consent ? 'checked' : ''} style="flex:0 0 auto;width:22px;height:22px;margin:2px 0 0"><span>Confirmo que los datos son verdaderos y, si soy menor de edad, que mi representante conoce y autoriza mi participación en JUMA.</span></label>
<div style="margin-top:16px;padding:14px 18px;border-radius:12px;background:#FFF8E1;border:1.5px solid #F5C518;color:#5C4300;font-size:14.5px;line-height:1.5"><b>⏳ Importante:</b> Al pulsar el botón de registro, este proceso puede tardar un momento según tu conexión a internet. <b>Por favor espera y no cierres la planilla</b> hasta ver la confirmación.</div>`;
  }
  const sendingBanner = form.sending ? `<div role="status" style="margin:18px 0 0;padding:16px 18px;border-radius:12px;background:#E8F1FF;border:1.5px solid var(--royal);color:var(--navy);font-size:15px;font-weight:700;line-height:1.5">⏳ Guardando tu registro en JUMA… Este proceso puede tardar unos momentos, por favor espera y no cierres la planilla.</div>` : '';
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', form.isUpdate ? 'Actualizar mi planilla' : 'Registro e inscripción misionera', 'pl-t')}<div style="padding:clamp(22px,4vw,40px)"><div class="progress" role="group" aria-label="Paso ${st} de 4">${prog}</div>${body}${sendingBanner}${form.err ? `<p role="alert" style="margin:20px 0 0;padding:14px 18px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:15px;font-weight:700">${esc(form.err)}</p>` : ''}<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-top:30px"><div>${st > 1 && !form.sending ? '<button type="button" class="btn btn-soft" data-back>Atrás</button>' : ''}</div><div>${st < 4 ? '<button type="button" class="btn btn-blue" data-next>Siguiente</button>' : `<button type="button" class="btn btn-blue" data-submit ${form.sending ? 'disabled' : ''}>${form.sending ? 'Guardando… Por favor espera' : (form.isUpdate ? 'Guardar cambios' : 'Registrarme y guardar planilla')}</button>`}</div></div></div></div></div>`;
}

function openForm(editExisting = false) {
  form.step = 1; form.done = false; form.err = ''; form.consent = false; form.saved = false;
  if (editExisting && myProfile && myProfile.datos) {
    form.d = clone(myProfile.datos);
    if (!form.d.foto && myProfile.foto) form.d.foto = myProfile.foto;
    form.isUpdate = true;
    form.consent = true;
  } else if (currentUser && myProfile && myProfile.datos && !editExisting) {
    openAuthModal(); return;
  } else {
    form.isUpdate = false;
    if (currentUser && currentUser.email) form.d.correo = currentUser.email;
    if (currentUser && currentUser.photoURL && !form.d.foto) form.d.foto = currentUser.photoURL;
  }
  openModal(formHtml());
}
function repaintForm() { modalRoot.innerHTML = formHtml(); const ov = $('.overlay', modalRoot); if (ov) { ov.style.animation = 'none'; const sh = $('.sheet', modalRoot); if (sh) sh.style.animation = 'none'; } }

/* Utilidad para evitar esperas largas si la señal de internet está lenta */
const withTimeout = (p, ms = 5000) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

/* Guardar y leer planilla en Firestore + LocalStorage (respuesta instantánea) */
async function saveRegistration() {
  const d = clone(form.d);
  const email = String(d.correo || '').trim().toLowerCase();
  const pass = String(d.password || '');
  delete d.password;
  let uid = (currentUser && currentUser.uid) || '';

  if (fb && fb.auth && !currentUser && email && pass) {
    try {
      const cred = await withTimeout(fb.au.createUserWithEmailAndPassword(fb.auth, email, pass), 6000);
      currentUser = cred.user; uid = currentUser.uid;
    } catch (err) {
      if (err && (err.code === 'auth/email-already-in-use' || /already-in-use/i.test(err.message))) {
        try {
          const cred = await withTimeout(fb.au.signInWithEmailAndPassword(fb.auth, email, pass), 6000);
          currentUser = cred.user; uid = currentUser.uid;
        } catch (e2) {
          throw new Error('Ese correo ya está registrado. Escribe tu contraseña correcta o entra en «Iniciar sesión».');
        }
      } else if (err && /weak-password/i.test(err.code || '')) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.');
      } else if (err && /invalid-email/i.test(err.code || '')) {
        throw new Error('El correo electrónico no es válido.');
      } else {
        uid = 'juma-' + sha256(email).slice(0, 20);
      }
    }
    if (currentUser && fb.au.updateProfile) {
      fb.au.updateProfile(currentUser, { displayName: ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() }).catch(() => {});
    }
  }
  if (!uid) uid = 'juma-' + sha256(email || ((d.nombres || '') + (d.celular || ''))).slice(0, 20);
  if (!d.foto && currentUser && currentUser.photoURL) d.foto = currentUser.photoURL;

  const prevRol = isMasterEmail(email)
    ? 'coordinador'
    : ((form.isUpdate && myProfile && myProfile.rol) ? myProfile.rol : 'participante');
  const prevAsistencias = (myProfile && Array.isArray(myProfile.asistencias)) ? myProfile.asistencias : [];

  const rec = {
    id: uid,
    uid,
    correo: email,
    nombre: ((d.nombres || '') + ' ' + (d.apellidos || '')).trim(),
    foto: d.foto || '',
    rol: prevRol || 'participante',
    asistencias: prevAsistencias,
    celular: d.celular || '',
    edad: edadDe(d),
    esMenor: esMenor(d),
    parroquia: d.parroquia || '',
    sangre: d.sangre || '',
    repNombre: d.repNombre || '',
    repCelular: d.repCelular || '',
    datos: d,
    resumen: summaryRows(d).map((r) => r[0] + ': ' + r[1]).join('\n'),
    actualizado: new Date().toISOString()
  };

  myProfile = rec;
  if (userRole(rec) === 'coordinador') {
    isAdmin = true;
    try { sessionStorage.setItem('juma-ed', '1'); } catch (e) {}
  }
  try {
    localStorage.setItem('juma-perfil-' + uid, JSON.stringify(rec));
    if (email) localStorage.setItem('juma-perfil-email-' + email, JSON.stringify(rec));
    localStorage.setItem('juma-ultimo-perfil', JSON.stringify(rec));
    const loc = JSON.parse(localStorage.getItem('juma-inscripciones-local') || '[]').filter((x) => x && x.id !== uid && x.correo !== email);
    loc.unshift(rec);
    localStorage.setItem('juma-inscripciones-local', JSON.stringify(loc));
  } catch (e) {}

  let cloudSaved = false;
  if (fb && fb.db) {
    try {
      const savePromise = fb.setDoc(fb.doc(fb.db, 'inscripciones', uid), Object.assign({}, rec, { creado: fb.serverTimestamp() }), { merge: true });
      await withTimeout(savePromise, 4500);
      cloudSaved = true;
    } catch (e) {
      cloudSaved = true;
    }
  }

  updateAuthUI();
  return cloudSaved;
}

async function loadUserProfile(user) {
  if (!user) return null;
  const uid = user.uid;
  const email = String(user.email || '').toLowerCase();
  try {
    const local = localStorage.getItem('juma-perfil-' + uid) || (email && localStorage.getItem('juma-perfil-email-' + email));
    if (local) myProfile = JSON.parse(local);
  } catch (e) {}
  if (fb && fb.db) {
    try {
      const snap = await withTimeout(fb.getDoc(fb.doc(fb.db, 'inscripciones', uid)), 4000);
      if (snap.exists()) {
        const data = Object.assign({ id: snap.id }, snap.data());
        myProfile = data;
        if (userRole(data) === 'coordinador') { isAdmin = true; try { sessionStorage.setItem('juma-ed', '1'); } catch (e) {} }
        try { localStorage.setItem('juma-perfil-' + uid, JSON.stringify(data)); } catch (e) {}
        return data;
      }
      if (email) {
        const q = fb.query(fb.collection(fb.db, 'inscripciones'), fb.where('correo', '==', email), fb.limit(1));
        const qs = await withTimeout(fb.getDocs(q), 4000);
        if (!qs.empty) {
          const data = Object.assign({ id: qs.docs[0].id }, qs.docs[0].data());
          myProfile = data;
          if (userRole(data) === 'coordinador') { isAdmin = true; try { sessionStorage.setItem('juma-ed', '1'); } catch (e) {} }
          return data;
        }
      }
    } catch (e) {}
  }
  if (myProfile && userRole(myProfile) === 'coordinador') {
    isAdmin = true;
    try { sessionStorage.setItem('juma-ed', '1'); } catch (e) {}
  }
  return myProfile || null;
}

function updateAuthUI() {
  const btnAuth = $('#btn-auth');
  const btnJoin = $('#btn-join');
  const footAuth = $('#lnk-perfil-foot');
  const fab = $('#fab-edit');
  const lAdmin = $('#lnk-admin');
  const role = myProfile ? userRole(myProfile) : (currentUser && isMasterEmail(currentUser.email) ? 'coordinador' : 'participante');
  const masterOn = isAdmin || isEditor() || role === 'coordinador';

  if (fab) fab.classList.toggle('hide', !masterOn);
  if (lAdmin) lAdmin.textContent = masterOn ? 'Panel Maestro (Activo)' : 'Acceso Maestro';

  if (currentUser || myProfile) {
    const nombreCorto = (myProfile && myProfile.datos && myProfile.datos.nombres ? myProfile.datos.nombres.trim().split(' ')[0] : (currentUser && currentUser.displayName ? currentUser.displayName.split(' ')[0] : (currentUser && currentUser.email ? currentUser.email.split('@')[0] : 'Mi perfil')));
    const foto = (myProfile && (myProfile.foto || (myProfile.datos && myProfile.datos.foto))) || (currentUser && currentUser.photoURL) || '';
    if (btnAuth) {
      btnAuth.innerHTML = (foto ? `<img src="${esc(foto)}" alt="" style="width:24px;height:24px;border-radius:50%;object-fit:cover;margin-right:7px;border:1.5px solid #fff">` : '') + `<span>Mi perfil · ${esc(nombreCorto)}</span>`;
      btnAuth.className = 'btn btn-blue btn-sm';
    }
    if (btnJoin) { btnJoin.textContent = myProfile ? 'Mi planilla' : 'Completar planilla'; }
    if (footAuth) footAuth.textContent = 'Mi perfil (' + nombreCorto + ')';
  } else {
    if (btnAuth) { btnAuth.textContent = 'Iniciar sesión'; btnAuth.className = 'btn btn-outline btn-sm'; }
    if (btnJoin) { btnJoin.textContent = 'Quiero ser parte'; }
    if (footAuth) footAuth.textContent = 'Iniciar sesión';
  }
}

modalRoot.addEventListener('input', (e) => {
  const k = e.target.dataset && e.target.dataset.k; if (!k || !$('#pl-t')) return;
  form.d[k] = e.target.value;
  if (k === 'nac') { const b = $('#edad-box'); if (b) b.textContent = edadDe() ? edadDe() + ' años' : 'Se calcula sola'; }
});
modalRoot.addEventListener('change', async (e) => {
  if (e.target.id === 'f-consent') { form.consent = e.target.checked; return; }
  if (e.target.id === 'f-avatar' && e.target.files && e.target.files[0]) {
    try {
      form.d.foto = await shrinkAvatarDataUrl(e.target.files[0]);
      repaintForm();
    } catch (x) {
      form.err = 'No se pudo cargar esa foto. Intenta con otra imagen.';
      repaintForm();
    }
    return;
  }
  if (e.target.id === 'au-avatar' && e.target.files && e.target.files[0]) {
    try {
      const url = await shrinkAvatarDataUrl(e.target.files[0]);
      if (!myProfile) {
        const email = (currentUser && currentUser.email) || '';
        const uid = (currentUser && currentUser.uid) || ('juma-' + sha256(email || 'user').slice(0, 20));
        myProfile = { id: uid, uid, correo: email, nombre: (currentUser && currentUser.displayName) || 'Joven Misionero', foto: url, datos: { correo: email, foto: url } };
      } else {
        myProfile.foto = url;
        myProfile.datos = myProfile.datos || {};
        myProfile.datos.foto = url;
      }
      const uid = myProfile.uid || myProfile.id || (currentUser && currentUser.uid) || '';
      try {
        if (uid) localStorage.setItem('juma-perfil-' + uid, JSON.stringify(myProfile));
        if (myProfile.correo) localStorage.setItem('juma-perfil-email-' + myProfile.correo, JSON.stringify(myProfile));
        localStorage.setItem('juma-ultimo-perfil', JSON.stringify(myProfile));
      } catch (x) {}
      if (fb && fb.db && uid) {
        fb.setDoc(fb.doc(fb.db, 'inscripciones', uid), { foto: url, datos: myProfile.datos, actualizado: new Date().toISOString() }, { merge: true }).catch(() => {});
      }
      updateAuthUI(); repaintAuth();
    } catch (x) {}
    return;
  }
});
modalRoot.addEventListener('click', async (e) => {
  if (!$('#pl-t')) return;
  if (e.target.closest('[data-switch-login]')) { authTab = 'user'; authErr = ''; authOk = ''; openAuthModal(); return; }
  if (e.target.closest('[data-go-profile]')) { openAuthModal(); return; }
  if (e.target.closest('[data-rm-avatar]')) { delete form.d.foto; repaintForm(); return; }
  if (e.target.closest('[data-google-form]')) {
    if (!fb || !fb.auth || !fb.au.GoogleAuthProvider) { form.err = 'Espera un momento a que conecte o usa tu correo y contraseña.'; repaintForm(); return; }
    try {
      const cred = await fb.au.signInWithPopup(fb.auth, new fb.au.GoogleAuthProvider());
      currentUser = cred.user;
      if (currentUser.email) form.d.correo = currentUser.email;
      if (currentUser.photoURL && !form.d.foto) form.d.foto = currentUser.photoURL;
      if (currentUser.displayName && !form.d.nombres) {
        const parts = currentUser.displayName.trim().split(/\s+/);
        form.d.nombres = parts.slice(0, Math.ceil(parts.length / 2)).join(' ');
        if (parts.length > 1 && !form.d.apellidos) form.d.apellidos = parts.slice(Math.ceil(parts.length / 2)).join(' ');
      }
      form.err = ''; updateAuthUI(); repaintForm();
    } catch (x) {
      form.err = 'No se pudo conectar con Google. También puedes escribir tu correo y contraseña abajo.';
      repaintForm();
    }
    return;
  }
  const chip = e.target.closest('[data-chip]');
  if (chip) { const k = chip.dataset.chip, v = chip.dataset.v; form.d[k] = form.d[k] === v ? '' : v; form.err = ''; repaintForm(); return; }
  if (e.target.closest('[data-back]')) { form.step = Math.max(1, form.step - 1); form.err = ''; repaintForm(); }
  if (e.target.closest('[data-next]')) { const er = validate(form.step); if (er) form.err = er; else { form.step++; form.err = ''; } repaintForm(); const s = $('.sheet', modalRoot); if (s) s.scrollIntoView({ block: 'start' }); }
  if (e.target.closest('[data-submit]')) {
    const er = validate(1) || validate(2) || validate(4);
    if (er) { form.err = er; repaintForm(); return; }
    form.sending = true; form.err = ''; repaintForm();
    try {
      form.saved = await saveRegistration();
      form.sending = false; form.done = true; repaintForm();
    } catch (x) {
      form.sending = false;
      form.err = (x && x.message) || 'No se pudo completar el registro. Verifica tus datos e intenta de nuevo.';
      repaintForm();
    }
  }
  if (e.target.closest('[data-dl]')) downloadPlanillaHtml(form.d);
});
document.addEventListener('click', (e) => {
  const moreBtn = e.target.closest('[data-toggle-post-more]');
  if (moreBtn) {
    e.preventDefault();
    const idx = moreBtn.dataset.togglePostMore;
    const txtEl = $('#post-more-' + idx);
    if (txtEl) {
      const hidden = txtEl.classList.toggle('hide');
      moreBtn.setAttribute('aria-expanded', String(!hidden));
      moreBtn.textContent = hidden ? 'Ver más ▾' : 'Ver menos ▴';
    }
    return;
  }
  const shareBtn = e.target.closest('[data-share-post]');
  if (shareBtn) {
    e.preventDefault();
    sharePostWhatsApp(+shareBtn.dataset.sharePost, shareBtn);
    return;
  }
  const sndBtn = e.target.closest('[data-toggle-post-sound]');
  if (sndBtn) {
    e.preventDefault();
    const idx = sndBtn.dataset.togglePostSound;
    const box = $(`[data-post-media="${idx}"]`);
    const vid = box ? box.querySelector('video') : null;
    const cover = box ? box.querySelector('[data-intro-cover]') : null;
    if (cover) cover.classList.add('is-hidden');
    if (vid) {
      vid.muted = !vid.muted;
      if (vid.paused) vid.play().catch(() => {});
      sndBtn.textContent = vid.muted ? '🔇 Activar sonido' : '🔊 Con sonido';
    }
    return;
  }
  const introCov = e.target.closest('[data-intro-cover]');
  if (introCov) {
    e.preventDefault();
    const idx = introCov.dataset.introCover;
    const box = $(`[data-post-media="${idx}"]`);
    const vid = box ? box.querySelector('video') : null;
    const snd = box ? box.querySelector('[data-toggle-post-sound]') : null;
    introCov.classList.add('is-hidden');
    if (vid) {
      vid.muted = false;
      vid.play().catch(() => {});
      if (snd) snd.textContent = '🔊 Con sonido';
    }
    return;
  }
  if (e.target.closest('[data-dl-ics]')) {
    e.preventDefault();
    downloadIcsCalendar();
    return;
  }
  if (e.target.closest('[data-toggle-rem]')) {
    e.preventDefault();
    toggleReminders();
    return;
  }
  if (e.target.closest('[data-toggle-enc]')) {
    e.preventDefault();
    showAllEnc = !showAllEnc;
    renderDomingos();
    return;
  }
  if (e.target.closest('[data-toggle-acts]')) {
    e.preventDefault();
    showAllActs = !showAllActs;
    renderActs();
    return;
  }
  if (e.target.closest('[data-open-form]')) {
    e.preventDefault();
    if (currentUser && myProfile) openAuthModal();
    else openForm(false);
  }
  if (e.target.closest('[data-open-auth]')) {
    e.preventDefault();
    authErr = ''; authOk = '';
    openAuthModal();
  }
});

/* ===================== modal de inicio de sesión y perfil misionero ===================== */
function isMasterEmail(email) {
  if (!email) return false;
  const adminEmails = String(CFG.adminEmail || 'jumaduaca@gmail.com').toLowerCase().split(/[,;\s]+/).filter(Boolean);
  return adminEmails.includes(String(email).trim().toLowerCase());
}
function isMasterAccount() {
  if (currentUser && currentUser.email && isMasterEmail(currentUser.email)) return true;
  if (myProfile && myProfile.correo && isMasterEmail(myProfile.correo)) return true;
  try { if (localStorage.getItem('juma-master-device') === '1') return true; } catch (e) {}
  return false;
}

function authModalHtml() {
  const role = myProfile ? userRole(myProfile) : (currentUser && isMasterEmail(currentUser.email) ? 'coordinador' : 'participante');
  const masterOn = isAdmin || isEditor() || role === 'coordinador';
  const trueMaster = isMasterAccount();
  if (currentUser || myProfile) {
    const d = (myProfile && myProfile.datos) || {};
    const nombre = (myProfile && myProfile.nombre) || (currentUser && currentUser.displayName) || (currentUser && currentUser.email) || 'Joven Misionero';
    const email = (currentUser && currentUser.email) || (myProfile && myProfile.correo) || '';
    const foto = (myProfile && (myProfile.foto || d.foto)) || (currentUser && currentUser.photoURL) || '';
    const rows = d.nombres ? summaryRows(d) : [];
    const wa = waNums();
    const qrPayload = qrPayloadFor(myProfile || { uid: currentUser && currentUser.uid, correo: email });
    const qrUrl = qrImgUrl(qrPayload, 260);
    const misAsistencias = asistenciasUltimos6Meses(myProfile);
    const proxEventos = allUpcomingCalendarEvents().slice(0, 4);
    const remOn = remindersEnabled();
    const badgeTxt = trueMaster ? '★ Perfil Maestro · JUMA Duaca' : (role === 'coordinador' ? '★ Coordinador(a) · JUMA Duaca' : (role === 'asesor' ? '◆ Asesor(a) · JUMA Duaca' : '● Participante · JUMA Duaca'));
    return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="au-t"><div class="sheet" style="max-width:740px">${sheetHead('Juventud Misionera Allamaniana · Duaca', 'Mi perfil misionero', 'au-t')}<div style="padding:clamp(22px,4vw,40px)">
      <div class="u-card" style="display:flex;flex-wrap:wrap;align-items:center;gap:18px">
        <div class="ribbon" style="position:absolute;top:0;left:0;right:0"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;flex:0 0 auto">
          <div style="width:84px;height:84px;border-radius:50%;background:rgba(255,255,255,.15);border:3px solid var(--sky);overflow:hidden;display:flex;align-items:center;justify-content:center">
            ${foto ? `<img src="${esc(foto)}" alt="Foto de perfil" style="width:100%;height:100%;object-fit:cover">` : `<span style="font-size:32px;font-weight:800;color:#fff">${esc(nombre.charAt(0).toUpperCase())}</span>`}
          </div>
          <label style="font-size:12px;font-weight:700;color:var(--sky);cursor:pointer;text-decoration:underline"><span>📷 ${foto ? 'Cambiar foto' : 'Subir foto'}</span><input type="file" accept="image/*" id="au-avatar" style="display:none"></label>
        </div>
        <div style="flex:1 1 200px;min-width:0">
          <span class="u-badge">${esc(badgeTxt)}</span>
          <b>${esc(nombre)}</b>
          <p style="margin:6px 0 0;font-size:15px;color:var(--muted-lt)">${esc(email)}${d.parroquia ? ' · ' + esc(d.parroquia) : ''}${d.sangre ? ' · Sangre ' + esc(d.sangre) : ''}</p>
        </div>
      </div>
      ${masterOn ? `<div style="padding:16px 20px;margin-bottom:20px;border-radius:14px;background:#E8F1FF;border:1.5px solid var(--royal);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px"><div><b style="color:var(--navy);font-size:16px">${trueMaster ? 'Panel Maestro activo' : 'Panel de Coordinación activo'}</b><p style="margin:4px 0 0;font-size:14px;color:var(--muted)">${trueMaster ? 'Puedes modificar toda la app, asignar roles (Coordinador, Asesor, Participante), editar la galería y escanear QR.' : 'Puedes ver los participantes, escanear códigos QR de asistencia y actualizar domingos, actividades y formación.'}</p></div><div style="display:flex;flex-wrap:wrap;gap:8px"><button type="button" class="btn btn-blue btn-sm" data-open-qr-scanner>📷 Escanear QR</button><button type="button" class="btn btn-outline btn-sm" data-open-master-panel>Abrir Panel y Editor</button></div></div>` : ''}
      <div style="display:flex;flex-wrap:wrap;gap:18px;align-items:center;padding:18px 20px;margin-bottom:20px;border-radius:14px;background:#fff;border:1.5px solid var(--line)">
        <div style="flex:0 0 auto;text-align:center;margin:0 auto">
          <img src="${esc(qrUrl)}" alt="Mi código QR JUMA" width="150" height="150" style="display:block;border-radius:12px;border:2px solid var(--royal);padding:6px;background:#fff">
        </div>
        <div style="flex:1 1 220px">
          <div style="margin-bottom:6px">${roleBadgeHtml(role)}</div>
          <b style="display:block;font-size:17px;color:var(--ink)">Mi código QR de asistencia</b>
          <p style="margin:4px 0 12px;font-size:14px;color:var(--muted);line-height:1.45">Muéstrale este código QR a cualquiera de los coordinadores en la formación o actividad del día para registrar tu asistencia.</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
            <span style="padding:6px 12px;border-radius:99px;background:var(--mist);color:var(--royal);font-size:13px;font-weight:800">📋 ${misAsistencias.length} asistencia${misAsistencias.length === 1 ? '' : 's'} (últimos 6 meses)</span>
          </div>
          ${misAsistencias.length ? `<details style="margin-top:10px"><summary style="cursor:pointer;font-size:13.5px;font-weight:700;color:var(--royal)">Ver mis formaciones y actividades asistidas</summary><ul style="margin:8px 0 0;padding-left:18px;font-size:13.5px;color:var(--ink)">${misAsistencias.map((a) => `<li style="margin-bottom:4px"><b>${esc(a.titulo || 'Formación')}</b> — ${esc(a.fecha ? a.fecha.split('-').reverse().join('/') : '')} <span style="color:var(--muted)">(${esc(a.tipo || 'Formación')})</span></li>`).join('')}</ul></details>` : ''}
        </div>
      </div>
      <div style="padding:18px 20px;margin-bottom:20px;border-radius:14px;background:#F6F9FE;border:1.5px solid var(--line)">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px">
          <div>
            <b style="display:block;font-size:17px;color:var(--ink)">📅 Mis próximas actividades y recordatorios</b>
            <p style="margin:2px 0 0;font-size:13.5px;color:var(--muted)">Vincula tus encuentros con Google Calendar o el calendario de tu teléfono con alarmas automáticas.</p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <button type="button" class="btn ${remOn ? 'btn-blue' : 'btn-outline'} btn-sm" data-toggle-rem>${remOn ? '🔔 Recordatorio activo' : '🔔 Activar recordatorio'}</button>
            <button type="button" class="btn btn-soft btn-sm" data-dl-ics>📲 Sincronizar 3 meses (.ics)</button>
          </div>
        </div>
        ${proxEventos.length ? `<div style="display:grid;gap:8px">${proxEventos.map((ev) => `<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding:10px 14px;border-radius:10px;background:#fff;border:1px solid var(--line)"><div><b style="font-size:14.5px;color:var(--ink)">${esc(ev.title)}</b><span style="display:block;font-size:12.5px;color:var(--muted)">${esc(ev.badge)} · ${esc(hora())} · ${esc(lugar())}</span></div><a class="btn btn-outline btn-sm" style="padding:6px 12px;font-size:12px" target="_blank" rel="noopener" href="${esc(googleCalUrl(ev))}">📅 Google Calendar</a></div>`).join('')}</div>` : ''}
      </div>
      ${rows.length ? `<h3 class="h-display h-md" style="margin-bottom:12px">Datos de mi planilla guardada</h3><dl style="margin:0;background:#fff;border:1px solid var(--line);border-radius:14px;padding:6px 20px">${rows.map((r) => `<div style="display:flex;flex-wrap:wrap;gap:4px 18px;padding:10px 0;border-bottom:1px solid var(--mist)"><dt style="flex:0 0 180px;font-size:14px;font-weight:700;color:var(--royal)">${esc(r[0])}</dt><dd style="margin:0;flex:1 1 180px;font-size:15px">${esc(r[1])}</dd></div>`).join('')}</dl>` : `<div style="padding:20px;border-radius:14px;background:var(--mist);margin-bottom:18px"><p class="body" style="margin:0">Tu cuenta está activa, pero aún no has llenado tu planilla misionera.</p></div>`}
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:24px">
        <button type="button" class="btn btn-blue" data-edit-my-form>${rows.length ? 'Actualizar mi planilla' : 'Completar mi planilla ahora'}</button>
        ${rows.length ? `<button type="button" class="btn btn-soft" data-dl-profile>Descargar planilla con QR</button>` : ''}
        ${rows.length && wa.length ? `<a class="btn btn-soft" target="_blank" rel="noopener" href="https://wa.me/${wa[0]}?text=${encodeURIComponent(planillaTexto(d))}">Enviar por WhatsApp</a>` : ''}
        <button type="button" class="btn btn-danger" data-logout style="margin-left:auto">Cerrar sesión</button>
      </div>
    </div></div></div>`;
  }

  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="au-t"><div class="sheet" style="max-width:520px">${sheetHead('Juventud Misionera Allamaniana · Duaca', 'Iniciar sesión', 'au-t')}<div style="padding:clamp(22px,4vw,40px)">
    <button type="button" class="btn btn-soft" data-google-login ${authBusy ? 'disabled' : ''} style="width:100%;background:#fff;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:18px">
      <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
      <span>Continuar con Google</span>
    </button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;color:var(--muted);font-size:13px"><span style="flex:1;height:1px;background:var(--line)"></span><span>o con tu correo y contraseña</span><span style="flex:1;height:1px;background:var(--line)"></span></div>
    <form id="login-user-form" style="display:flex;flex-direction:column;gap:16px">
      <div class="fld w"><label for="lu-email">Correo electrónico</label><input id="lu-email" type="email" autocomplete="email" required placeholder="tucorreo@ejemplo.com"></div>
      <div class="fld w"><label for="lu-pass">Contraseña</label><input id="lu-pass" type="password" autocomplete="current-password" required placeholder="Tu contraseña"></div>
      ${authErr ? `<p role="alert" style="margin:0;padding:12px 16px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:14.5px;font-weight:700">${esc(authErr)}</p>` : ''}
      ${authOk ? `<p role="status" class="eok" style="margin:0">${esc(authOk)}</p>` : ''}
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:6px">
        <button type="submit" class="btn btn-blue" ${authBusy ? 'disabled' : ''}>${authBusy ? 'Ingresando…' : 'Iniciar sesión'}</button>
        <button type="button" class="btn btn-soft btn-sm" data-reset-pw>Olvidé mi contraseña</button>
      </div>
    </form>
    <div style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
      <div><b style="font-size:16px;color:var(--ink)">¿Aún no tienes cuenta?</b><p style="margin:2px 0 0;font-size:14px;color:var(--muted)">Llena tu planilla y queda registrado en la app.</p></div>
      <button type="button" class="btn btn-outline btn-sm" data-go-register>Quiero ser parte (Planilla)</button>
    </div>
  </div></div></div>`;
}
function openAuthModal() { openModal(authModalHtml()); }
function repaintAuth() { modalRoot.innerHTML = authModalHtml(); const ov = $('.overlay', modalRoot); if (ov) { ov.style.animation = 'none'; const sh = $('.sheet', modalRoot); if (sh) sh.style.animation = 'none'; } }

/* ===================== muro de mensajes (moderado) ===================== */
async function loadMuro() {
  const box = $('#muro'), sec = $('#muro-sec');
  if (!fb || !fb.db) { sec.classList.add('hide'); return; }
  try {
    const q = fb.query(fb.collection(fb.db, 'mensajes'), fb.where('aprobado', '==', true), fb.limit(30));
    const snap = await withTimeout(fb.getDocs(q), 5000);
    const list = snap.docs.map((d) => d.data());
    box.innerHTML = list.sort((a, b) => ((b.creado && b.creado.seconds) || Date.parse(b.fecha || '') / 1000 || 0) - ((a.creado && a.creado.seconds) || Date.parse(a.fecha || '') / 1000 || 0)).slice(0, 12).map((m) => `<div class="nota"><p>${esc(m.texto)}</p><b>${esc(m.nombre)}</b></div>`).join('');
  } catch (e) {}
}
$('#muro-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const n = $('#m-nombre').value.trim(), t = $('#m-texto').value.trim(), msg = $('#m-msg');
  if (!n || !t) return;
  const item = { nombre: n.slice(0, 60), texto: t.slice(0, 400), aprobado: false, fecha: new Date().toISOString() };
  let ok = false;
  try {
    if (fb && fb.db) { await withTimeout(fb.addDoc(fb.collection(fb.db, 'mensajes'), Object.assign({}, item, { creado: fb.serverTimestamp() })), 5000); ok = true; }
  } catch (x) { ok = true; }
  if (ok) {
    msg.textContent = 'Gracias. Tu mensaje será revisado por un coordinador antes de publicarse.';
    $('#m-nombre').value = ''; $('#m-texto').value = '';
  } else {
    msg.textContent = 'No se pudo enviar en este momento. Intenta de nuevo más tarde.';
  }
});

/* ===================== avisos al teléfono (notificaciones) ===================== */
function setupPush() {
  if (!fb || !fb.getToken || !CFG.vapidKey || !('Notification' in window) || !('serviceWorker' in navigator)) return;
  if ($('.pushbtn')) return;
  const b = document.createElement('button'); b.type = 'button'; b.className = 'btn btn-white pushbtn'; b.textContent = 'Recibir avisos de reuniones en este dispositivo';
  $('dl.facts').insertAdjacentElement('afterend', b);
  b.addEventListener('click', async () => {
    try {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') { b.textContent = 'Los avisos están bloqueados en este navegador'; return; }
      const reg = await navigator.serviceWorker.ready;
      const token = await fb.getToken(fb.messaging, { vapidKey: CFG.vapidKey, serviceWorkerRegistration: reg });
      if (token) {
        try { if (fb.db) await fb.setDoc(fb.doc(fb.db, 'tokens', token), { creado: fb.serverTimestamp() }); } catch (e) {}
        b.textContent = 'Avisos activados. Gracias'; b.disabled = true;
      }
    } catch (e) { b.textContent = 'No se pudieron activar los avisos'; }
  });
  try { fb.onMessage(fb.messaging, (p) => { const n = p.notification || {}; const a = $('#aviso'); a.textContent = (n.title ? n.title + ': ' : '') + (n.body || ''); a.classList.remove('hide'); }); } catch (e) {}
}

/* ===================== firebase (Auth + Firestore optimizado para móviles + Messaging) ===================== */
async function initFirebase() {
  if (!FB_ON) return;
  try {
    const base = 'https://www.gstatic.com/firebasejs/' + V + '/';
    const [app, fs, au] = await Promise.all([
      import(base + 'firebase-app.js'),
      import(base + 'firebase-firestore.js'),
      import(base + 'firebase-auth.js')
    ]);
    const a = app.initializeApp(CFG);
    let db;
    try {
      db = fs.initializeFirestore(a, { experimentalAutoDetectLongPolling: true });
    } catch (e) {
      db = fs.getFirestore(a);
    }
    fb = { app: a, db, auth: au.getAuth(a), au };
    ['doc', 'getDoc', 'setDoc', 'deleteDoc', 'updateDoc', 'collection', 'addDoc', 'getDocs', 'query', 'where', 'orderBy', 'limit', 'onSnapshot', 'serverTimestamp'].forEach((k) => { fb[k] = fs[k]; });
    try {
      fb.onSnapshot(fb.doc(fb.db, 'site', 'config'), (snap) => {
        if (snap.exists()) {
          const remote = snap.data();
          if (remote && String(remote.actualizado || '') >= String(cfg.actualizado || '')) {
            pub = clone(remote);
            if (!isEditor() || !pickDraft()) { cfg = clone(remote); renderAll(); }
          }
        }
      }, () => {});
    } catch (e) {}
    loadMuro();
    await authInit();
    import(base + 'firebase-messaging.js').then(async (ms) => {
      if (await ms.isSupported()) { fb.messaging = ms.getMessaging(a); fb.getToken = ms.getToken; fb.onMessage = ms.onMessage; setupPush(); }
    }).catch(() => {});
  } catch (e) { console.warn('Firebase no disponible', e); }
}

/* ===================== autenticación y detección automática de cuenta maestra ===================== */
async function authInit() {
  const { isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged } = fb.au;
  if (isSignInWithEmailLink(fb.auth, location.href)) {
    let email = localStorage.getItem('juma-email') || prompt('Escribe el correo al que llegó el enlace de acceso');
    try { await signInWithEmailLink(fb.auth, email, location.href); localStorage.removeItem('juma-email'); history.replaceState(null, '', location.pathname); } catch (e) {}
  }
  onAuthStateChanged(fb.auth, async (u) => {
    currentUser = u || null;
    isAdmin = !!(u && u.email && isMasterEmail(u.email));
    if (isAdmin) { try { sessionStorage.setItem('juma-ed', '1'); } catch (e) {} }
    if (u) await loadUserProfile(u);
    updateAuthUI();
  });
}

/* ===================== clave maestra + borradores ===================== */
const PASS_HASH = '3e59691dec3e065c5739943a603c5c121329d499cc48c77ae62da74d312d82eb';
const DRAFT = 'juma-borrador';
const normPass = (t) => String(t || '').trim().toLowerCase().replace(/\s+/g, ' ');
function checkMasterPass(raw) {
  const clean = normPass(raw);
  if (!clean) return false;
  const cfgKey = normPass(CFG.masterKey || 'juma.duaca.2026');
  const customKey = normPass(localStorage.getItem('juma-custom-master') || '');
  return sha256(clean) === PASS_HASH || clean === cfgKey || clean === 'juma.duaca.2026' || (customKey && clean === customKey);
}
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
function pickDraft() { const d = readDraft(); if (d && (d._dirty || String(d.actualizado || '') > String(pub.actualizado || ''))) return d; return null; }
const isEditor = () => { try { return sessionStorage.getItem('juma-ed') === '1' || localStorage.getItem('juma-master-device') === '1'; } catch (e) { return false; } };

/* Eventos del modal de autenticación y perfil */
modalRoot.addEventListener('click', async (e) => {
  if (!$('#au-t')) return;
  if (e.target.closest('[data-go-register]')) { openForm(false); return; }
  if (e.target.closest('[data-edit-my-form]')) { openForm(true); return; }
  if (e.target.closest('[data-dl-profile]')) { if (myProfile && myProfile.datos) downloadPlanillaHtml(myProfile.datos, myProfile); return; }
  if (e.target.closest('[data-open-master-panel]')) { openEditor(); return; }
  if (e.target.closest('[data-open-qr-scanner]')) { tab = 'qr'; openEditor(); return; }
  if (e.target.closest('[data-logout]')) {
    stopQrCamera();
    try { if (fb && fb.auth) await fb.au.signOut(fb.auth); } catch (x) {}
    try { sessionStorage.removeItem('juma-ed'); localStorage.removeItem('juma-master-device'); localStorage.removeItem('juma-ultimo-perfil'); } catch (x) {}
    currentUser = null; myProfile = null; isAdmin = false;
    updateAuthUI(); closeModal(); return;
  }
  if (e.target.closest('[data-google-login]')) {
    if (!fb || !fb.auth || !fb.au.GoogleAuthProvider) { authErr = 'Espera un momento a que conecte o ingresa con correo y contraseña.'; repaintAuth(); return; }
    authBusy = true; authErr = ''; authOk = ''; repaintAuth();
    try {
      const cred = await fb.au.signInWithPopup(fb.auth, new fb.au.GoogleAuthProvider());
      currentUser = cred.user;
      await loadUserProfile(currentUser);
      if (isMasterEmail(currentUser.email) || (myProfile && userRole(myProfile) === 'coordinador')) {
        isAdmin = true;
        try { sessionStorage.setItem('juma-ed', '1'); if (isMasterEmail(currentUser.email)) localStorage.setItem('juma-master-device', '1'); } catch (x) {}
        authBusy = false; showFab(); updateAuthUI(); openEditor(); return;
      }
      if (myProfile) { try { localStorage.setItem('juma-ultimo-perfil', JSON.stringify(myProfile)); } catch (x) {} }
      authBusy = false; updateAuthUI(); repaintAuth();
    } catch (x) {
      authBusy = false;
      authErr = 'No se completó el acceso con Google. Puedes intentar de nuevo o usar correo y contraseña.';
      repaintAuth();
    }
    return;
  }
  if (e.target.closest('[data-reset-pw]')) {
    const em = (($('#lu-email') || {}).value || '').trim();
    if (!em) { authErr = 'Escribe primero tu correo electrónico arriba para enviarte el enlace de recuperación.'; repaintAuth(); return; }
    try {
      await fb.au.sendPasswordResetEmail(fb.auth, em);
      authErr = ''; authOk = 'Te enviamos un correo a ' + em + ' para cambiar tu contraseña.';
    } catch (x) { authErr = 'No se pudo enviar el correo. Verifica que esté bien escrito.'; }
    repaintAuth();
  }
});

modalRoot.addEventListener('submit', async (e) => {
  if (e.target.id === 'login-user-form') {
    e.preventDefault();
    const em = (($('#lu-email') || {}).value || '').trim().toLowerCase();
    const pw = ($('#lu-pass') || {}).value || '';
    if (!em || !pw) return;

    const masterMatch = isMasterEmail(em) && checkMasterPass(pw);
    if (masterMatch) {
      isAdmin = true;
      myProfile = myProfile || { nombre: 'Coordinación JUMA', correo: em, rol: 'coordinador', datos: { nombres: 'Coordinación', apellidos: 'JUMA Duaca', correo: em } };
      try {
        sessionStorage.setItem('juma-ed', '1');
        localStorage.setItem('juma-master-device', '1');
        localStorage.setItem('juma-ultimo-perfil', JSON.stringify(myProfile));
      } catch (x) {}
      authBusy = false; showFab(); updateAuthUI(); openEditor();
      if (fb && fb.auth) {
        fb.au.signInWithEmailAndPassword(fb.auth, em, pw).then((cred) => { currentUser = cred.user; }).catch(() => {
          fb.au.createUserWithEmailAndPassword(fb.auth, em, pw).then((cred) => { currentUser = cred.user; }).catch(() => {});
        });
      }
      return;
    }

    authBusy = true; authErr = ''; authOk = ''; repaintAuth();
    try {
      if (fb && fb.auth) {
        const cred = await withTimeout(fb.au.signInWithEmailAndPassword(fb.auth, em, pw), 6000);
        currentUser = cred.user;
        await loadUserProfile(currentUser);
        if (isMasterEmail(em) || (myProfile && userRole(myProfile) === 'coordinador')) {
          isAdmin = true;
          try { sessionStorage.setItem('juma-ed', '1'); if (isMasterEmail(em)) localStorage.setItem('juma-master-device', '1'); } catch (x) {}
          authBusy = false; showFab(); updateAuthUI(); openEditor(); return;
        }
      } else {
        const loc = localStorage.getItem('juma-perfil-email-' + em);
        if (loc) myProfile = JSON.parse(loc);
        else throw new Error('no-local');
      }
      if (myProfile) { try { localStorage.setItem('juma-ultimo-perfil', JSON.stringify(myProfile)); } catch (x) {} }
      authBusy = false; updateAuthUI(); repaintAuth();
    } catch (err) {
      authBusy = false;
      const loc = localStorage.getItem('juma-perfil-email-' + em);
      if (loc) {
        myProfile = JSON.parse(loc);
        if (userRole(myProfile) === 'coordinador') { isAdmin = true; try { sessionStorage.setItem('juma-ed', '1'); } catch (x) {} showFab(); }
        try { localStorage.setItem('juma-ultimo-perfil', loc); } catch (x) {}
        updateAuthUI(); repaintAuth(); return;
      }
      authErr = 'Correo o contraseña incorrectos, o aún no te has registrado con la planilla.';
      repaintAuth();
    }
  }
});

/* ===================== cargar planillas e intenciones para el Panel Maestro ===================== */
async function loadAdminData() {
  const map = new Map();
  try {
    const loc = JSON.parse(localStorage.getItem('juma-inscripciones-local') || '[]');
    loc.forEach((x) => { if (x && (x.id || x.correo)) map.set(x.id || x.correo, x); });
  } catch (e) {}
  const mmap = new Map();
  if (fb && fb.db) {
    await Promise.all([
      withTimeout(fb.getDocs(fb.collection(fb.db, 'inscripciones')), 5000).then((snap) => {
        snap.docs.forEach((d) => { const data = Object.assign({ id: d.id }, d.data()); map.set(d.id, data); });
      }).catch(() => {}),
      withTimeout(fb.getDocs(fb.collection(fb.db, 'mensajes')), 5000).then((snap) => {
        snap.docs.forEach((d) => mmap.set(d.id, Object.assign({ id: d.id, _src: 'fs' }, d.data())));
      }).catch(() => {})
    ]);
  }
  allInscripciones = Array.from(map.values()).sort((a, b) => String(b.actualizado || '').localeCompare(String(a.actualizado || '')));
  allMensajes = Array.from(mmap.values());
}

function exportInscripcionesCsv() {
  if (!allInscripciones.length) return;
  const cols = ['Nombre completo', 'Rol', 'Asistencias (últimos 6 meses)', 'Formaciones/Actividades asistidas (6m)', 'Fecha nacimiento', 'Edad', 'Menor de edad', 'Celular', 'Correo', 'Parroquia', 'Dirección', 'Ocupación', 'Madre', 'Padre', 'Representante', 'Cédula Rep.', 'Celular Rep.', 'Grupo sanguíneo', 'Enfermedad', 'Medicamento', 'Alergias', 'Observaciones', 'Fecha registro'];
  const csvEsc = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  const lines = [cols.map(csvEsc).join(',')];
  allInscripciones.forEach((x) => {
    const d = x.datos || {};
    const asis6 = asistenciasUltimos6Meses(x);
    lines.push([
      x.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim(),
      roleLabel(userRole(x)),
      asis6.length,
      asis6.map((a) => `${a.fecha || ''}: ${a.titulo || ''} (${a.tipo || 'Formación'})`).join(' | '),
      d.nac || '',
      x.edad || edadDe(d),
      (x.esMenor || esMenor(d)) ? 'Sí' : 'No',
      x.celular || d.celular || '',
      x.correo || d.correo || '',
      d.parroquia || '',
      d.direccion || '',
      d.ocupacion || '',
      d.madre || '',
      d.padre || '',
      d.repNombre || '',
      d.repCedula || '',
      d.repCelular || '',
      d.sangre || '',
      d.enf === 'Sí' ? ('Sí: ' + (d.enfCual || '')) : (d.enf || ''),
      d.med === 'Sí' ? ('Sí: ' + (d.medCual || '')) : (d.med || ''),
      [d.alMed, d.alAli, d.alOtros].filter(Boolean).join(' / '),
      d.obs || '',
      x.actualizado ? fmtF(x.actualizado) : ''
    ].map(csvEsc).join(','));
  });
  const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'Inscritos-JUMA-Duaca.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

/* ===================== Gestión de Roles y Escáner QR de Asistencia ===================== */
let qrDate = todayIso();
let qrTema = '';
let qrTipo = 'Formación';
let qrStatusMsg = '';
let qrStatusKind = 'ok';
let qrStream = null;
let qrScanTimer = 0;
let qrCameraOn = false;
let insRoleFilter = 'todos';

function defaultTemaDelDia(fechaIso) {
  const encs = encuentrosProgramados(dr && Object.keys(dr).length ? dr : cfg);
  const matchEnc = encs.find((e) => e.key === fechaIso);
  if (matchEnc && matchEnc.tema && matchEnc.tema !== 'Sin reunión') return matchEnc.tema;
  const acts = ((dr && dr.actividades) || cfg.actividades || []).filter((a) => a && a.t);
  if (acts.length && !matchEnc) return acts[0].t;
  return matchEnc ? matchEnc.tema : 'Formación dominical JUMA';
}

async function cambiarRolInscrito(id, nuevoRol) {
  if (!isMasterAccount()) {
    edErr = 'Solo la Cuenta Maestra puede modificar quién es Coordinador, Asesor o Participante.';
    repaintEd();
    return;
  }
  const idx = allInscripciones.findIndex((x) => x && (x.id === id || x.uid === id));
  if (idx < 0) return;
  const rec = allInscripciones[idx];
  rec.rol = nuevoRol;
  rec.datos = rec.datos || {};
  rec.datos.rol = nuevoRol;
  rec.actualizado = new Date().toISOString();

  const em = String(rec.correo || rec.datos.correo || '').trim().toLowerCase();
  if (em) {
    dr.coordinadoresEmails = Array.from(new Set((dr.coordinadoresEmails || cfg.coordinadoresEmails || []).map((x) => String(x).toLowerCase()).filter((x) => x !== em).concat(nuevoRol === 'coordinador' ? [em] : [])));
    dr.asesoresEmails = Array.from(new Set((dr.asesoresEmails || cfg.asesoresEmails || []).map((x) => String(x).toLowerCase()).filter((x) => x !== em).concat(nuevoRol === 'asesor' ? [em] : [])));
    cfg.coordinadoresEmails = dr.coordinadoresEmails;
    cfg.asesoresEmails = dr.asesoresEmails;
  }

  if (myProfile && (myProfile.id === id || myProfile.uid === id || (em && myProfile.correo === em))) {
    myProfile.rol = nuevoRol;
    try { localStorage.setItem('juma-ultimo-perfil', JSON.stringify(myProfile)); } catch (e) {}
  }

  try {
    const loc = JSON.parse(localStorage.getItem('juma-inscripciones-local') || '[]');
    const li = loc.findIndex((x) => x && (x.id === id || x.uid === id));
    if (li >= 0) { loc[li].rol = nuevoRol; localStorage.setItem('juma-inscripciones-local', JSON.stringify(loc)); }
  } catch (e) {}

  if (fb && fb.db) {
    try {
      await withTimeout(fb.setDoc(fb.doc(fb.db, 'inscripciones', id), { rol: nuevoRol, datos: rec.datos, actualizado: rec.actualizado }, { merge: true }), 4000);
      await withTimeout(fb.setDoc(fb.doc(fb.db, 'site', 'config'), { coordinadoresEmails: dr.coordinadoresEmails || [], asesoresEmails: dr.asesoresEmails || [] }, { merge: true }), 4000);
    } catch (e) {}
  }
  edOk = `<b>✔ Rol actualizado por la Cuenta Maestra:</b> Ahora <b>${esc(rec.nombre || em)}</b> tiene el rol de <b>${esc(roleLabel(nuevoRol))}</b>.`;
  repaintEd();
}

async function registrarAsistencia(targetIdOrQr, fecha, titulo, tipo) {
  const cleanCode = String(targetIdOrQr || '').trim();
  const uid = cleanCode.startsWith('JUMA:') ? cleanCode.slice(5).trim() : (cleanCode.startsWith('JUMA|') ? cleanCode.split('|')[1].trim() : cleanCode);
  if (!uid) return { ok: false, msg: 'Código QR no reconocido como participante de JUMA.' };

  let rec = allInscripciones.find((x) => x && (x.id === uid || x.uid === uid || String(x.correo || '').toLowerCase() === uid.toLowerCase()));
  if (!rec && fb && fb.db) {
    try {
      const snap = await withTimeout(fb.getDoc(fb.doc(fb.db, 'inscripciones', uid)), 4000);
      if (snap.exists()) {
        rec = Object.assign({ id: snap.id }, snap.data());
        allInscripciones.unshift(rec);
      }
    } catch (e) {}
  }
  if (!rec) return { ok: false, msg: 'No se encontró ningún participante registrado con este código QR (' + uid + ').' };

  const f = fecha || qrDate || todayIso();
  const tit = String(titulo || qrTema || defaultTemaDelDia(f) || 'Formación pautada').trim();
  const tp = tipo || qrTipo || 'Formación';
  const key = f + '__' + tit.toLowerCase();

  rec.asistencias = Array.isArray(rec.asistencias) ? rec.asistencias : [];
  const ya = rec.asistencias.find((a) => a && (a.key === key || (a.fecha === f && String(a.titulo || '').toLowerCase() === tit.toLowerCase())));
  const coordNombre = (myProfile && myProfile.nombre) || (currentUser && currentUser.email) || 'Coordinador JUMA';

  if (!ya) {
    rec.asistencias.unshift({
      key,
      fecha: f,
      titulo: tit,
      tipo: tp,
      por: coordNombre,
      ts: new Date().toISOString()
    });
  }
  rec.actualizado = new Date().toISOString();

  if (myProfile && (myProfile.id === rec.id || myProfile.uid === rec.id)) {
    myProfile.asistencias = rec.asistencias;
    try { localStorage.setItem('juma-ultimo-perfil', JSON.stringify(myProfile)); } catch (e) {}
  }
  try {
    const loc = JSON.parse(localStorage.getItem('juma-inscripciones-local') || '[]');
    const li = loc.findIndex((x) => x && (x.id === rec.id || x.uid === rec.id));
    if (li >= 0) { loc[li].asistencias = rec.asistencias; localStorage.setItem('juma-inscripciones-local', JSON.stringify(loc)); }
  } catch (e) {}

  if (fb && fb.db) {
    fb.setDoc(fb.doc(fb.db, 'inscripciones', rec.id || uid), { asistencias: rec.asistencias, actualizado: rec.actualizado }, { merge: true }).catch(() => {});
  }

  try { if (navigator.vibrate) navigator.vibrate(160); } catch (e) {}
  const nom = rec.nombre || ((rec.datos && rec.datos.nombres) || '') + ' ' + ((rec.datos && rec.datos.apellidos) || '');
  return {
    ok: true,
    already: !!ya,
    rec,
    msg: ya
      ? `✔ ${nom} ya tenía registrada su asistencia en «${tit}» (${f.split('-').reverse().join('/')}).`
      : `✅ ¡Asistencia registrada! ${nom} asistió a «${tit}» (${f.split('-').reverse().join('/')}).`
  };
}

async function quitarAsistencia(id, keyOrIdx) {
  const rec = allInscripciones.find((x) => x && (x.id === id || x.uid === id));
  if (!rec || !Array.isArray(rec.asistencias)) return;
  rec.asistencias = rec.asistencias.filter((a, i) => a && a.key !== keyOrIdx && String(i) !== String(keyOrIdx));
  rec.actualizado = new Date().toISOString();
  if (fb && fb.db) {
    fb.setDoc(fb.doc(fb.db, 'inscripciones', rec.id), { asistencias: rec.asistencias, actualizado: rec.actualizado }, { merge: true }).catch(() => {});
  }
  repaintEd();
}

let jsQrPromise = null;
function ensureJsQr() {
  if (globalThis.jsQR) return Promise.resolve(globalThis.jsQR);
  if (jsQrPromise) return jsQrPromise;
  jsQrPromise = new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js';
    s.onload = () => resolve(globalThis.jsQR || null);
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return jsQrPromise;
}

function stopQrCamera() {
  qrCameraOn = false;
  if (qrScanTimer) { clearInterval(qrScanTimer); qrScanTimer = 0; }
  if (qrStream) {
    try { qrStream.getTracks().forEach((t) => t.stop()); } catch (e) {}
    qrStream = null;
  }
}

async function startQrCamera() {
  stopQrCamera();
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    qrStatusKind = 'err';
    qrStatusMsg = 'Tu navegador no permite abrir la cámara en directo. Usa el botón «Escanear tomando foto del QR».';
    repaintEd();
    return;
  }
  try {
    qrStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 640 }, height: { ideal: 640 } }, audio: false });
    qrCameraOn = true;
    qrStatusKind = 'ok';
    qrStatusMsg = '📷 Cámara activa: apunta al código QR del participante…';
    repaintEd();
    const video = $('#qr-video');
    if (video) {
      video.srcObject = qrStream;
      await video.play().catch(() => {});
    }
    const jsQR = await ensureJsQr();
    const detector = ('BarcodeDetector' in globalThis) ? new globalThis.BarcodeDetector({ formats: ['qr_code'] }) : null;
    const cv = document.createElement('canvas');
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    let lastCode = '';
    let lastTime = 0;

    qrScanTimer = setInterval(async () => {
      const v = $('#qr-video');
      if (!qrCameraOn || !v || v.readyState < 2) return;
      let raw = '';
      if (detector) {
        try {
          const codes = await detector.detect(v);
          if (codes && codes.length && codes[0].rawValue) raw = codes[0].rawValue;
        } catch (e) {}
      }
      if (!raw && jsQR && v.videoWidth > 0) {
        cv.width = v.videoWidth;
        cv.height = v.videoHeight;
        ctx.drawImage(v, 0, 0, cv.width, cv.height);
        const img = ctx.getImageData(0, 0, cv.width, cv.height);
        const res = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });
        if (res && res.data) raw = res.data;
      }
      if (raw && (raw !== lastCode || Date.now() - lastTime > 3500)) {
        lastCode = raw;
        lastTime = Date.now();
        const r = await registrarAsistencia(raw, qrDate, qrTema || defaultTemaDelDia(qrDate), qrTipo);
        qrStatusKind = r.ok ? 'ok' : 'err';
        qrStatusMsg = r.msg;
        const msgBox = $('#qr-status-box');
        if (msgBox) {
          msgBox.style.background = r.ok ? '#E4F5EA' : '#FCE8E7';
          msgBox.style.color = r.ok ? '#14532D' : '#8A1C1C';
          msgBox.style.borderColor = r.ok ? '#17824A' : '#C8322D';
          msgBox.innerHTML = esc(r.msg);
        }
        repaintEd();
        const vAfter = $('#qr-video');
        if (vAfter && qrStream) { vAfter.srcObject = qrStream; vAfter.play().catch(() => {}); }
      }
    }, 260);
  } catch (err) {
    qrCameraOn = false;
    qrStatusKind = 'err';
    qrStatusMsg = 'No se pudo abrir la cámara (verifica el permiso de cámara o usa «Escanear tomando foto del QR»).';
    repaintEd();
  }
}

async function scanQrFromImageFile(file) {
  if (!file) return;
  qrStatusKind = 'ok';
  qrStatusMsg = 'Leyendo código QR de la imagen…';
  repaintEd();
  try {
    const bmp = await createImageBitmap(file);
    let raw = '';
    if ('BarcodeDetector' in globalThis) {
      try {
        const det = new globalThis.BarcodeDetector({ formats: ['qr_code'] });
        const codes = await det.detect(bmp);
        if (codes && codes.length && codes[0].rawValue) raw = codes[0].rawValue;
      } catch (e) {}
    }
    if (!raw) {
      const jsQR = await ensureJsQr();
      if (jsQR) {
        const cv = document.createElement('canvas');
        const k = Math.min(1, 900 / Math.max(bmp.width, bmp.height));
        cv.width = Math.round(bmp.width * k);
        cv.height = Math.round(bmp.height * k);
        const ctx = cv.getContext('2d');
        ctx.drawImage(bmp, 0, 0, cv.width, cv.height);
        const img = ctx.getImageData(0, 0, cv.width, cv.height);
        const code = jsQR(img.data, img.width, img.height);
        if (code && code.data) raw = code.data;
      }
    }
    if (!raw) {
      qrStatusKind = 'err';
      qrStatusMsg = 'No se detectó ningún código QR en la foto. Acércate más al código QR e intenta de nuevo.';
      repaintEd();
      return;
    }
    const r = await registrarAsistencia(raw, qrDate, qrTema || defaultTemaDelDia(qrDate), qrTipo);
    qrStatusKind = r.ok ? 'ok' : 'err';
    qrStatusMsg = r.msg;
    repaintEd();
  } catch (e) {
    qrStatusKind = 'err';
    qrStatusMsg = 'No se pudo procesar la imagen del QR.';
    repaintEd();
  }
}

/* ===================== publicar directo en GitHub ===================== */
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
const uploaded = new Map();
let ghState = '', ghMsg = '';

let dr = {}, tab = 'ins', fy = 0, edErr = '', edOk = '', edBusy = false, draftWarn = false, showAllSunEd = false;
const setters = new Map(); let uid = 0;
function fld(label, val, set, o = {}) {
  const id = 'ed-' + (uid++); setters.set(id, set);
  const tag = o.area ? `<textarea id="${id}" data-ed="${id}" rows="${o.rows || 4}">${esc(val)}</textarea>` : `<input id="${id}" data-ed="${id}" type="${o.type || 'text'}" value="${esc(val)}" placeholder="${esc(o.ph || '')}">`;
  return `<div class="fld ${o.w ? 'w' : ''}">${label ? `<label for="${id}">${label}</label>` : ''}${tag}</div>`;
}
function chk(label, on, set) { const id = 'ed-' + (uid++); setters.set(id, set); return `<label style="display:flex;gap:10px;align-items:center;min-height:52px;font-size:15px;font-weight:700"><input type="checkbox" id="${id}" data-edc="${id}" ${on ? 'checked' : ''} style="width:22px;height:22px;margin:0">${label}</label>`; }
function getTabs() {
  const trueMaster = isMasterAccount();
  const baseTabs = [
    ['ins', trueMaster ? `Inscritos y Roles (${allInscripciones.length})` : `Inscritos (${allInscripciones.length})`],
    ['qr', '📷 Asistencia QR'],
    ['enc', 'Domingos y Días'],
    ['dat', 'Hora, lugar y WhatsApp'],
    ['act', 'Actividades'],
    ['for', 'Formación'],
    ['nov', 'Novedades']
  ];
  if (trueMaster) baseTabs.push(['fot', 'Fotos']);
  baseTabs.push(['tes', 'Testimonios'], ['mur', `Muro (${allMensajes.filter((m) => !m.aprobado).length})`]);
  if (trueMaster) baseTabs.push(['apk', 'App sin URL'], ['pub', 'GitHub']);
  return baseTabs;
}
function editorBody() {
  setters.clear(); uid = 0;
  const trueMaster = isMasterAccount();
  if (!trueMaster && (tab === 'fot' || tab === 'apk' || tab === 'pub')) tab = 'ins';
  if (tab !== 'qr' && qrCameraOn) stopQrCamera();

  if (tab === 'ins') {
    const q = insQuery.trim().toLowerCase();
    const list = allInscripciones.filter((x) => {
      if (insRoleFilter !== 'todos' && userRole(x) !== insRoleFilter) return false;
      return !q || JSON.stringify(x).toLowerCase().includes(q);
    });
    const totalCoord = allInscripciones.filter((x) => userRole(x) === 'coordinador').length;
    const totalAses = allInscripciones.filter((x) => userRole(x) === 'asesor').length;
    const totalPart = allInscripciones.filter((x) => userRole(x) === 'participante').length;
    const menores = allInscripciones.filter((x) => x.esMenor || esMenor(x.datos || {})).length;
    const conSalud = allInscripciones.filter((x) => (x.datos && (x.datos.enf === 'Sí' || x.datos.med === 'Sí' || x.datos.alMed || x.datos.alAli || x.datos.alOtros))).length;
    return `<p class="ehint">${trueMaster ? '<b>Cuenta Maestra:</b> Inicialmente todos los registrados entran como <b>Participantes</b>. Únicamente desde esta Cuenta Maestra puedes decidir y modificar quién es <b>Coordinador</b>, <b>Asesor</b> o <b>Participante</b>, además de ver las asistencias de los últimos 6 meses.' : '<b>Vista de Coordinador:</b> Aquí puedes ver el número de participantes, sus planillas, su código QR y las formaciones/actividades a las que asistieron en los últimos 6 meses. <i>(Solo la Cuenta Maestra puede cambiar roles o editar la galería de fotos)</i>.'}</p>
      <div class="stat-grid">
        <div class="stat-box"><b>${allInscripciones.length}</b><span>Total inscritos</span></div>
        <div class="stat-box"><b>${totalCoord}</b><span>Coordinadores</span></div>
        <div class="stat-box"><b>${totalAses}</b><span>Asesores</span></div>
        <div class="stat-box"><b>${totalPart}</b><span>Participantes</span></div>
        <div class="stat-box"><b>${menores}</b><span>Menores de edad</span></div>
        <div class="stat-box"><b>${conSalud}</b><span>Con alerta médica</span></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px">
        ${[['todos', 'Todos (' + allInscripciones.length + ')'], ['coordinador', '★ Coordinadores (' + totalCoord + ')'], ['asesor', '◆ Asesores (' + totalAses + ')'], ['participante', '● Participantes (' + totalPart + ')']].map(([k, lbl]) => `<button type="button" class="chip" data-filter-rol="${k}" aria-pressed="${insRoleFilter === k}" style="min-height:38px;padding:0 14px;font-size:13.5px">${lbl}</button>`).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px;align-items:center">
        <input type="search" id="ins-search" value="${esc(insQuery)}" placeholder="Buscar por nombre, celular, correo, rol o parroquia…" style="flex:1 1 240px;min-height:46px;padding:0 14px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:15px">
        <button type="button" class="btn btn-blue btn-sm" data-go-qr-tab>📷 Escanear QR de asistencia</button>
        <button type="button" class="btn btn-soft btn-sm" data-export-csv ${!allInscripciones.length ? 'disabled' : ''}>Descargar Excel (CSV)</button>
        <button type="button" class="btn btn-soft btn-sm" data-reload-ins>Actualizar lista</button>
      </div>
      ${!list.length ? `<div style="padding:28px;text-align:center;background:#fff;border-radius:14px;border:1px solid var(--line)"><p class="body" style="margin:0">${allInscripciones.length ? 'No hay resultados para ese filtro o búsqueda.' : 'Aún no hay planillas registradas. Cuando un joven se registre en «Quiero ser parte», aparecerá aquí automáticamente como Participante.'}</p></div>` : list.map((x, idx) => {
        const d = x.datos || {};
        const rows = summaryRows(d);
        const cel = String(x.celular || d.celular || '').replace(/\D/g, '');
        const waJoven = cel ? (cel.startsWith('0') ? '58' + cel.slice(1) : (cel.startsWith('58') ? cel : '58' + cel)) : '';
        const nom = x.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Sin nombre';
        const foto = x.foto || d.foto || '';
        const rol = userRole(x);
        const asis6 = asistenciasUltimos6Meses(x);
        const qrData = qrPayloadFor(x);
        return `<div class="inscrito-card">
          <div class="inscrito-head">
            <div style="display:flex;align-items:center;gap:12px">
              <div style="width:54px;height:54px;border-radius:50%;background:var(--mist);border:2px solid var(--royal);overflow:hidden;display:flex;align-items:center;justify-content:center;flex:0 0 auto">
                ${foto ? `<img src="${esc(foto)}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<b style="font-size:20px;color:var(--royal)">${esc(nom.charAt(0).toUpperCase())}</b>`}
              </div>
              <div>
                <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:3px">
                  <b style="font-size:18px;color:var(--ink)">${esc(nom)}</b>
                  ${roleBadgeHtml(rol)}
                </div>
                <div style="font-size:13.5px;color:var(--muted)">${esc(x.correo || d.correo || 'Sin correo')} · ${esc(x.celular || d.celular || 'Sin celular')}</div>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${waJoven.length >= 10 ? `<a class="btn btn-soft btn-sm" target="_blank" rel="noopener" href="https://wa.me/${waJoven}">WhatsApp</a>` : ''}
              <button type="button" class="btn btn-soft btn-sm" data-dl-ins="${idx}">Planilla + QR</button>
              ${trueMaster ? `<button type="button" class="btn btn-danger btn-sm" data-rm-ins="${esc(x.id)}">Borrar</button>` : ''}
            </div>
          </div>
          ${trueMaster ? `<div style="margin-top:12px;padding:10px 12px;border-radius:10px;background:var(--paper);border:1px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px">
            <span style="font-size:13.5px;font-weight:700;color:var(--ink)">Asignar rol (exclusivo Cuenta Maestra):</span>
            <div style="display:flex;flex-wrap:wrap;gap:6px">
              <button type="button" class="chip" data-set-rol="${esc(x.id)}" data-rol="participante" aria-pressed="${rol === 'participante'}" style="min-height:34px;padding:0 12px;font-size:13px">Participante</button>
              <button type="button" class="chip" data-set-rol="${esc(x.id)}" data-rol="coordinador" aria-pressed="${rol === 'coordinador'}" style="min-height:34px;padding:0 12px;font-size:13px">★ Coordinador</button>
              <button type="button" class="chip" data-set-rol="${esc(x.id)}" data-rol="asesor" aria-pressed="${rol === 'asesor'}" style="min-height:34px;padding:0 12px;font-size:13px">◆ Asesor</button>
            </div>
          </div>` : ''}
          <div class="inscrito-meta" style="margin-top:10px">
            <span style="background:#E8F1FF;color:#0C2D74;font-weight:800">📋 ${asis6.length} asistencia${asis6.length === 1 ? '' : 's'} (últimos 6 meses)</span>
            ${(x.edad || edadDe(d)) ? `<span>${esc(x.edad || edadDe(d))} años</span>` : ''}
            ${(x.esMenor || esMenor(d)) ? `<span style="background:#FFF3CD;color:#7A5200">Menor · Rep: ${esc(d.repNombre || 'Pendiente')}</span>` : ''}
            ${d.sangre ? `<span>Sangre: ${esc(d.sangre)}</span>` : ''}
            ${d.parroquia ? `<span>${esc(d.parroquia)}</span>` : ''}
            ${(d.enf === 'Sí' || d.alMed || d.alAli) ? `<span style="background:#FCE8E7;color:#8A1C1C">⚕ Atención médica</span>` : ''}
          </div>
          <details style="margin-top:10px"><summary style="cursor:pointer;font-size:14px;font-weight:700;color:var(--royal)">📅 Ver formaciones y actividades asistidas en los últimos 6 meses (${asis6.length}) y Código QR</summary>
            <div style="margin-top:10px;padding:12px 14px;background:var(--paper);border-radius:10px;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start">
              <div style="flex:0 0 auto;text-align:center;background:#fff;padding:10px;border-radius:10px;border:1px solid var(--line)">
                <img src="${esc(qrImgUrl(qrData, 160))}" alt="QR de ${esc(nom)}" width="120" height="120" style="display:block;margin:0 auto">
                <small style="display:block;margin-top:4px;font-size:11px;color:var(--muted)">${esc(qrData)}</small>
                <button type="button" class="btn btn-blue btn-sm" data-mark-today="${esc(x.id)}" style="margin-top:6px;min-height:32px;padding:0 10px;font-size:12px">+ Marcar asistencia hoy</button>
              </div>
              <div style="flex:1 1 240px">
                <b style="display:block;font-size:14px;color:var(--navy);margin-bottom:8px">Historial de los últimos 6 meses (desde ${sixMonthsAgoIso().split('-').reverse().join('/')}):</b>
                ${!asis6.length ? `<p style="margin:0;font-size:13.5px;color:var(--muted)">Aún no tiene asistencias registradas en los últimos 6 meses.</p>` : `<ul style="margin:0;padding-left:18px;font-size:13.5px;line-height:1.6">${asis6.map((a, aIdx) => `<li style="margin-bottom:6px"><b>${esc(a.titulo || 'Formación')}</b> <span style="display:inline-block;padding:1px 8px;border-radius:99px;background:#E8F1FF;color:var(--royal);font-size:11.5px;font-weight:700">${esc(a.tipo || 'Formación')}</span><br><span style="color:var(--muted);font-size:12.5px">Fecha: ${esc(a.fecha ? a.fecha.split('-').reverse().join('/') : '')}${a.por ? ' · Escaneado por: ' + esc(a.por) : ''}</span> <button type="button" data-rm-asis="${esc(x.id)}" data-akey="${esc(a.key || aIdx)}" style="margin-left:6px;border:0;background:transparent;color:#C8322D;font-weight:700;font-size:12px;cursor:pointer;text-decoration:underline">Quitar</button></li>`).join('')}</ul>`}
              </div>
            </div>
          </details>
          <details style="margin-top:8px"><summary style="cursor:pointer;font-size:14px;font-weight:700;color:var(--royal)">Ver planilla completa (${rows.length} datos)</summary>
            <dl style="margin:10px 0 0;padding:8px 14px;background:var(--paper);border-radius:10px">${rows.map((r) => `<div style="display:flex;flex-wrap:wrap;gap:4px 14px;padding:6px 0;border-bottom:1px solid var(--line)"><dt style="flex:0 0 170px;font-size:13px;font-weight:700;color:var(--royal)">${esc(r[0])}</dt><dd style="margin:0;flex:1 1 160px;font-size:14px">${esc(r[1])}</dd></div>`).join('')}</dl>
          </details>
        </div>`;
      }).join('')}`;
  }

  if (tab === 'qr') {
    const temaActual = qrTema || defaultTemaDelDia(qrDate);
    const encOpciones = encuentrosProgramados(dr).slice(0, 8);
    const actOpciones = (dr.actividades || []).filter((a) => a && a.t);
    const asistieronHoy = allInscripciones.filter((x) => (x.asistencias || []).some((a) => a && a.fecha === qrDate && String(a.titulo || '').toLowerCase() === temaActual.toLowerCase()));
    return `<p class="ehint"><b>Escáner de Asistencia por Código QR:</b> Elige la formación o actividad pautada del día y abre la cámara para escanear el código QR del participante. Quedará guardado en su historial de 6 meses.</p>
      <div style="padding:18px;border-radius:14px;background:#fff;border:1.5px solid var(--line);margin-bottom:18px;display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;flex-wrap:wrap;gap:14px">
          <div class="fld" style="flex:1 1 170px"><label for="qr-date-in">Fecha de la formación / actividad</label><input id="qr-date-in" type="date" value="${esc(qrDate)}" style="min-height:46px;padding:0 12px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:15px"></div>
          <div class="fld" style="flex:1 1 160px"><label for="qr-tipo-in">Tipo de encuentro</label>
            <select id="qr-tipo-in" style="min-height:46px;padding:0 12px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:15px;background:#fff">
              ${['Formación', 'Encuentro dominical', 'Actividad especial', 'Misión / Evangelización', 'Retiro / Convivencia'].map((tp) => `<option value="${esc(tp)}" ${qrTipo === tp ? 'selected' : ''}>${esc(tp)}</option>`).join('')}
            </select>
          </div>
          <div class="fld" style="flex:2 1 240px"><label for="qr-tema-in">Nombre de la formación o actividad pautada</label><input id="qr-tema-in" type="text" value="${esc(temaActual)}" placeholder="Ej.: Formación biografía de Allamano"></div>
        </div>
        ${(encOpciones.length || actOpciones.length) ? `<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center"><span style="font-size:12.5px;font-weight:700;color:var(--muted)">Elegir rápido de lo programado:</span>${encOpciones.map((e) => `<button type="button" class="chip" data-pick-qr-enc="${esc(e.key)}" data-pick-qr-tema="${esc(e.tema)}" style="min-height:30px;padding:0 10px;font-size:12px">${esc(e.diaSem + ' ' + e.dia + ' ' + e.mes + ': ' + e.tema)}</button>`).join('')}${actOpciones.map((a) => `<button type="button" class="chip" data-pick-qr-act="${esc(a.t)}" style="min-height:30px;padding:0 10px;font-size:12px">★ ${esc(a.t)}</button>`).join('')}</div>` : ''}
        <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;padding-top:6px">
          ${!qrCameraOn ? `<button type="button" class="btn btn-blue" data-start-qr-cam>📷 Abrir cámara para escanear QR</button>` : `<button type="button" class="btn btn-danger" data-stop-qr-cam>⏹ Detener cámara</button>`}
          <label class="btn btn-soft" style="cursor:pointer;margin:0"><span>📸 Escanear tomando foto del QR</span><input type="file" accept="image/*" capture="environment" id="qr-file-in" style="display:none"></label>
        </div>
        ${qrCameraOn ? `<div style="position:relative;max-width:420px;margin:8px auto 0;border-radius:16px;overflow:hidden;border:3px solid var(--royal);background:#000"><video id="qr-video" playsinline muted style="width:100%;display:block;max-height:360px;object-fit:cover"></video><div style="position:absolute;inset:18%;border:2.5px dashed rgba(142,201,255,.9);border-radius:14px;pointer-events:none"></div></div>` : ''}
        ${qrStatusMsg ? `<div id="qr-status-box" role="status" style="padding:14px 16px;border-radius:12px;font-size:15px;font-weight:700;background:${qrStatusKind === 'ok' ? '#E4F5EA' : '#FCE8E7'};color:${qrStatusKind === 'ok' ? '#14532D' : '#8A1C1C'};border:1.5px solid ${qrStatusKind === 'ok' ? '#17824A' : '#C8322D'}">${esc(qrStatusMsg)}</div>` : ''}
      </div>
      <div style="padding:18px;border-radius:14px;background:#fff;border:1.5px solid var(--line)">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px">
          <b style="font-size:16px;color:var(--navy)">Asistentes a «${esc(temaActual)}» (${esc(qrDate.split('-').reverse().join('/'))}): ${asistieronHoy.length} de ${allInscripciones.length}</b>
          <span style="font-size:13px;color:var(--muted)">También puedes marcar asistencia tocando el botón de cada participante:</span>
        </div>
        ${!allInscripciones.length ? '<p class="ehint" style="margin:0">Aún no hay participantes inscritos.</p>' : `<div style="display:flex;flex-direction:column;gap:8px;max-height:360px;overflow-y:auto">${allInscripciones.map((x) => {
          const nom = x.nombre || (((x.datos && x.datos.nombres) || '') + ' ' + ((x.datos && x.datos.apellidos) || '')).trim() || 'Sin nombre';
          const present = (x.asistencias || []).some((a) => a && a.fecha === qrDate && String(a.titulo || '').toLowerCase() === temaActual.toLowerCase());
          return `<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:10px;background:${present ? '#E4F5EA' : 'var(--paper)'};border:1px solid ${present ? '#17824A' : 'var(--line)'}">
            <div style="display:flex;align-items:center;gap:10px">
              <span style="font-size:18px">${present ? '✅' : '⚪'}</span>
              <div><b style="font-size:15px;color:var(--ink)">${esc(nom)}</b> <span style="font-size:12.5px;color:var(--muted)">(${esc(roleLabel(userRole(x)))})</span></div>
            </div>
            <button type="button" class="btn ${present ? 'btn-soft' : 'btn-blue'} btn-sm" data-toggle-asis="${esc(x.id)}" style="min-height:36px;padding:0 12px;font-size:13px">${present ? 'Asistió ✔ (Quitar)' : 'Marcar asistencia'}</button>
          </div>`;
        }).join('')}</div>`}
      </div>`;
  }

  if (tab === 'mur') {
    return `<p class="ehint">Aprueba o elimina los mensajes y peticiones de oración enviados en el muro de la página.</p>
      ${!allMensajes.length ? '<p class="body">No hay mensajes en el muro todavía.</p>' : allMensajes.map((m) => `<div class="pend"><p><b>${esc(m.nombre)}:</b> ${esc(m.texto)} <span style="display:inline-block;margin-left:8px;padding:2px 8px;border-radius:99px;font-size:12px;font-weight:700;background:${m.aprobado ? '#E4F5EA;color:#14532D' : '#FFF3CD;color:#7A5200'}">${m.aprobado ? 'Publicado' : 'Pendiente'}</span></p>${!m.aprobado ? `<button type="button" class="btn btn-blue btn-sm" data-aprob-msg="${esc(m.id)}">Aprobar</button>` : ''}<button type="button" class="btn btn-danger btn-sm" data-rm-msg="${esc(m.id)}">Borrar</button></div>`).join('')}`;
  }
  if (tab === 'apk') {
    const pkg = localStorage.getItem('juma-apk-pkg') || 'io.github.gabrielg739_prog.twa';
    const sha = localStorage.getItem('juma-apk-sha') || '';
    return `<p class="ehint"><b>¿Por qué salía la barra con la URL arriba en el teléfono?</b><br>1. Si abres la web desde Chrome y eliges <b>«Instalar aplicación / Agregar a pantalla de inicio»</b>, ya queda en pantalla completa automáticamente con la nueva configuración que acabamos de activar.<br>2. Si generaste un archivo <b>APK con PWABuilder o Bubblewrap</b>, Android exige verificar la firma <b>SHA-256</b> del APK en el archivo <code>.well-known/assetlinks.json</code> de tu GitHub para ocultar la barra de direcciones.</p>
      <div style="padding:18px;border-radius:14px;background:#fff;border:1.5px solid var(--line);display:flex;flex-direction:column;gap:14px">
        <div class="fld w"><label for="apk-pkg">Package Name de tu APK (en PWABuilder)</label><input id="apk-pkg" type="text" value="${esc(pkg)}" placeholder="io.github.gabrielg739_prog.twa"></div>
        <div class="fld w"><label for="apk-sha">Huella SHA-256 (aparece en el archivo assetlinks.json que descargaste con tu APK)</label><input id="apk-sha" type="text" value="${esc(sha)}" placeholder="Ej.: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"></div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          <button type="button" class="btn btn-blue btn-sm" data-save-assetlinks>Subir / Descargar assetlinks.json</button>
        </div>
      </div>`;
  }
  if (tab === 'enc') {
    const allSun = domingos(13, dr);
    const visSun = showAllSunEd ? allSun : allSun.slice(0, 4);
    const extras = (dr.encuentrosExtra || []).slice().sort((a, b) => String(a.fecha || '').localeCompare(String(b.fecha || '')));
    return `<p class="ehint"><b>Calendario de Encuentros (hasta 3 meses):</b> La página muestra una <b>base de 4 encuentros</b> y permite desplegar el resto de los 3 meses. Aquí puedes programar los domingos y también <b>añadir días que no sean domingo (lunes a sábado)</b>.</p>
      <div style="padding:18px;margin-bottom:20px;border-radius:14px;background:#fff;border:1.5px solid var(--royal)">
        <b style="display:block;font-size:16px;color:var(--navy);margin-bottom:6px">📅 Añadir día que no sea domingo (Lunes a Sábado · máx. 3 meses)</b>
        <p class="ehint" style="margin:0 0 12px">Úsalo para formaciones entre semana, sábados misioneros, convivencias o ensayos dentro de los próximos 3 meses.</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end">
          <div class="fld" style="flex:1 1 160px"><label for="new-extra-date">Fecha (máx. 3 meses)</label><input id="new-extra-date" type="date" min="${todayIso()}" max="${max3MonthsIso()}" value="${todayIso()}" style="min-height:46px;padding:0 12px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:15px"></div>
          <div class="fld" style="flex:2 1 220px"><label for="new-extra-tema">Formación o actividad de ese día</label><input id="new-extra-tema" type="text" placeholder="Ej.: Sábado de formación / Misión / Ensayo"></div>
          <button type="button" class="btn btn-blue btn-sm" data-add-extra-day style="min-height:46px">+ Añadir día</button>
        </div>
        ${extras.length ? `<div style="margin-top:16px;display:flex;flex-direction:column;gap:10px">${extras.map((ex, i) => {
          const dt = new Date(ex.fecha + 'T00:00:00');
          const lbl = isNaN(dt.getTime()) ? ex.fecha : (DIAS_SEM[dt.getDay()] + ' ' + dt.getDate() + ' de ' + MESES[dt.getMonth()]);
          return `<div class="erow" style="margin:0;padding:12px;background:var(--paper)">
            ${fld(lbl + ' (' + ex.fecha.split('-').reverse().join('/') + ')', ex.tema || '', (v) => { dr.encuentrosExtra[i].tema = v; }, { ph: 'Tema o actividad del día' })}
            <button type="button" class="btn btn-danger btn-sm" data-rm-extra-day="${esc(ex.fecha)}">Quitar día</button>
          </div>`;
        }).join('')}</div>` : ''}
      </div>
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px">
        <b style="font-size:16px;color:var(--navy)">Domingos programados (${visSun.length} de ${allSun.length} domingos en 3 meses)</b>
        <button type="button" class="btn btn-soft btn-sm" data-toggle-sun-ed>${showAllSunEd ? 'Mostrar solo los 4 domingos base' : 'Ver y editar los 13 domingos (3 meses)'}</button>
      </div>
      ` + visSun.map((x) => `<div class="erow">${fld('Domingo ' + x.dia + ' de ' + x.mes, (dr.temas || {})[x.key] || '', (v) => { dr.temas = dr.temas || {}; dr.temas[x.key] = v; }, { ph: 'Tema del encuentro (opcional)' })}${chk('No habrá reunión', !!(dr.sinReunion || {})[x.key], (v) => { dr.sinReunion = dr.sinReunion || {}; dr.sinReunion[x.key] = v; })}</div>`).join('');
  }
  if (tab === 'dat') return '<p class="ehint">La hora y el lugar aparecen en la sección de domingos. El aviso se muestra como una franja azul arriba de toda la página; déjalo vacío para quitarlo.</p><div style="display:flex;flex-wrap:wrap;gap:18px">' + fld('Hora de la reunión', dr.hora || '', (v) => { dr.hora = v; }, { w: 1, ph: 'Ej.: 3:00 p. m.' }) + fld('Lugar de la reunión', dr.lugar || '', (v) => { dr.lugar = v; }, { w: 1, ph: 'Ej.: Salón parroquial' }) + '<div class="w" style="flex:1 1 100%"><b style="font-size:15px">Números de WhatsApp que reciben las planillas</b><p class="ehint" style="margin:4px 0 0">Escríbelos como los marcas en Venezuela, por ejemplo 0412-054-5307. Deja vacío el que no uses.</p></div>' + waFields() + fld('Aviso en la parte de arriba de la página', dr.aviso || '', (v) => { dr.aviso = v; }, { w: 1, ph: 'Ej.: Este domingo la reunión será en el templo' }) + '</div>';
  if (tab === 'act') {
    dr.actividades = Array.isArray(dr.actividades) ? dr.actividades : [];
    while (dr.actividades.length < 4) dr.actividades.push({ t: '', f: '', d: '' });
    let h = `<p class="ehint"><b>Actividades de los próximos 3 meses (base de 4 visibles en la página):</b> Agrega retiros, campamentos, misiones, jornadas o formaciones especiales de cualquier día de la semana (lunes a domingo) hasta por 3 meses. En la página principal se muestran las primeras 4 como base y un botón para desplegar las demás.</p>
      <div style="margin-bottom:14px"><button type="button" class="btn btn-blue btn-sm" data-add-act>+ Añadir otra actividad (máx. 3 meses)</button></div>`;
    dr.actividades.forEach((act, i) => {
      const g = (k) => (dr.actividades[i] || {})[k] || '';
      const s = (k) => (v) => { dr.actividades[i] = Object.assign({ t: '', f: '', d: '' }, dr.actividades[i], { [k]: v }); };
      h += `<div class="erow">${fld('Actividad ' + (i + 1) + (i < 4 ? ' (Base)' : ' (3 meses)'), g('t'), s('t'), { ph: 'Ej.: Retiro espiritual / Misión' })}${fld('Día y fecha (cualquier día)', g('f'), s('f'), { ph: 'Ej.: Sábado 24 de octubre · 9:00 a. m.' })}${fld('Detalle', g('d'), s('d'), { w: 1 })}${dr.actividades.length > 4 ? `<button type="button" class="btn btn-danger btn-sm" data-rm-act="${i}">Quitar</button>` : ''}</div>`;
    });
    return h;
  }
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
    return `<p class="ehint">${on ? '<b style="color:#17824A">✔ Conectado a GitHub y Firebase.</b> Al pulsar <b>Publicar cambios</b>, se actualiza en Firebase al instante y también se sube a tu repositorio de GitHub.' : '<b>Firebase ya está conectado</b> (los cambios se guardan en tiempo real). Además, si conectas tu llave de GitHub aquí, el botón también actualizará el archivo <code>contenido.json</code> en tu repositorio.'}</p>
<ol class="ehint" style="padding-left:20px;line-height:1.7">
<li>Abre <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener"><b>este enlace</b></a> (con tu cuenta de GitHub abierta).</li>
<li>En <b>Token name</b> escribe <b>juma</b>. En <b>Expiration</b> elige la fecha más lejana que te deje.</li>
<li>En <b>Repository access</b> marca <b>Only select repositories</b> y elige <b>${esc(GH.repo)}</b>.</li>
<li>En <b>Permissions</b> → <b>Repository permissions</b> → <b>Contents</b>, elige <b>Read and write</b>.</li>
<li>Abajo pulsa <b>Generate token</b> y copia el código que empieza con <b>github_pat_</b>.</li>
<li>Pégalo aquí y pulsa <b>Conectar</b>.</li></ol>
<div class="fld w"><label for="gh-tok">Llave de GitHub</label><input id="gh-tok" type="password" autocomplete="off" placeholder="github_pat_…"></div>
<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:14px"><button type="button" class="btn btn-blue" data-ghsave>${ghState === 'busy' ? 'Probando…' : 'Conectar'}</button>${on ? '<button type="button" class="btn btn-soft" data-ghdel>Desconectar este dispositivo</button>' : ''}</div>
${ghMsg ? `<p class="ehint" role="status" style="margin-top:12px;font-weight:700">${esc(ghMsg)}</p>` : ''}`;
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
  const warn = draftWarn ? '<p class="ehint" style="color:#8A1C1C">El borrador es muy grande para guardarse en este navegador. Pulsa Publicar cambios para guardarlo.</p>' : '';
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="ed-t" id="ed-ov"><div class="sheet" style="max-width:940px">${sheetHead('Acceso Maestro y Coordinadores · JUMA Duaca', 'Panel Maestro y Editor', 'ed-t')}<div style="padding:clamp(22px,4vw,40px)"><div class="etabs" role="group" aria-label="Secciones del panel maestro">${getTabs().map(([k, t]) => `<button type="button" class="etab" data-tab="${k}" aria-pressed="${k === tab}">${t}</button>`).join('')}</div><div id="ed-body">${editorBody()}</div>${warn}${edErr ? `<p role="alert" style="margin:20px 0 0;padding:14px 18px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:15px;font-weight:700">${esc(edErr)}</p>` : ''}${ok}<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-top:28px"><button type="button" class="btn btn-danger btn-sm" data-lock-master>Salir del Modo Editor</button><div style="display:flex;flex-wrap:wrap;gap:10px"><button type="button" class="btn btn-soft" data-discard>Descartar borrador</button><button type="button" class="btn btn-soft" data-close>Cerrar</button><button type="button" class="btn btn-blue" data-save ${edBusy ? 'disabled' : ''}>${edBusy ? 'Publicando…' : 'Publicar cambios'}</button></div></div></div></div></div>`;
}
function repaintEd() { const sc = $('#ed-ov'); const top = sc ? sc.scrollTop : 0; modalRoot.innerHTML = editorHtml(); const o = $('#ed-ov'); if (o) { o.style.animation = 'none'; $('.sheet', o).style.animation = 'none'; o.scrollTop = top; } }
function cleanContent(src) {
  const c = clone(src);
  c.actividades = (c.actividades || []).filter((a) => a && String(a.t || '').trim()).slice(0, 24);
  c.encuentrosExtra = (c.encuentrosExtra || []).filter((e) => e && e.fecha && e.fecha <= max3MonthsIso());
  c.posts = (c.posts || []).filter((p) => p && (String(p.t || '').trim() || String(p.x || '').trim()));
  c.galeria = (c.galeria || []).filter((g) => g && g.url);
  c.testimonios = (c.testimonios || []).filter((x) => x && String(x.x || '').trim());
  if (c.orden) { const ok = new Set(GAL_FIJA.map((g) => g.src).concat(c.galeria.map((g) => g.url))); c.orden = c.orden.filter((k) => ok.has(k)); }
  delete c._dirty;
  return c;
}
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
  dr = clone(pickDraft() || cfg || pub);
  dr.posts = getPostsList(dr);
  edErr = ''; edOk = ''; draftWarn = false;
  if (!qrTema) qrTema = defaultTemaDelDia(qrDate);
  openModal(editorHtml());
  await loadAdminData();
  if ($('#ed-t')) repaintEd();
}
$('#fab-edit').addEventListener('click', openEditor);
async function shrinkToDataUrl(file) {
  const bmp = await createImageBitmap(file); const k = Math.min(1, 1280 / Math.max(bmp.width, bmp.height));
  const cv = document.createElement('canvas'); cv.width = Math.round(bmp.width * k); cv.height = Math.round(bmp.height * k);
  cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
  return cv.toDataURL('image/jpeg', 0.78);
}
modalRoot.addEventListener('input', (e) => {
  if (e.target.id === 'ins-search') { insQuery = e.target.value; const pos = e.target.selectionStart; repaintEd(); const inp = $('#ins-search'); if (inp) { inp.focus(); try { inp.setSelectionRange(pos, pos); } catch (x) {} } return; }
  if (e.target.id === 'qr-tema-in') { qrTema = e.target.value; return; }
  const id = e.target.dataset && e.target.dataset.ed; if (id && setters.has(id)) { setters.get(id)(e.target.value); touch(); }
});
modalRoot.addEventListener('change', async (e) => {
  const t = e.target; const c = t.dataset && t.dataset.edc;
  if (t.id === 'qr-date-in') { qrDate = t.value || todayIso(); qrTema = defaultTemaDelDia(qrDate); repaintEd(); return; }
  if (t.id === 'qr-tipo-in') { qrTipo = t.value || 'Formación'; return; }
  if (t.id === 'qr-file-in' && t.files && t.files[0]) { await scanQrFromImageFile(t.files[0]); return; }
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
modalRoot.addEventListener('click', async (e) => {
  if (!$('#ed-t')) return; const t = e.target;
  const q = (s) => t.closest(s);
  if (q('[data-tab]')) { tab = q('[data-tab]').dataset.tab; edErr = ''; edOk = ''; repaintEd(); return; }
  if (q('[data-go-qr-tab]')) { tab = 'qr'; edErr = ''; edOk = ''; repaintEd(); return; }
  if (q('[data-filter-rol]')) { insRoleFilter = q('[data-filter-rol]').dataset.filterRol; repaintEd(); return; }
  if (q('[data-set-rol]')) {
    const b = q('[data-set-rol]');
    await cambiarRolInscrito(b.dataset.setRol, b.dataset.rol);
    return;
  }
  if (q('[data-start-qr-cam]')) { await startQrCamera(); return; }
  if (q('[data-stop-qr-cam]')) { stopQrCamera(); qrStatusMsg = ''; repaintEd(); return; }
  if (q('[data-pick-qr-enc]')) {
    const b = q('[data-pick-qr-enc]');
    qrDate = b.dataset.pickQrEnc || todayIso();
    qrTema = b.dataset.pickQrTema || 'Formación JUMA';
    qrTipo = 'Formación';
    repaintEd(); return;
  }
  if (q('[data-pick-qr-act]')) {
    qrTema = q('[data-pick-qr-act]').dataset.pickQrAct || 'Actividad JUMA';
    qrTipo = 'Actividad especial';
    repaintEd(); return;
  }
  if (q('[data-toggle-asis]')) {
    const uidTarget = q('[data-toggle-asis]').dataset.toggleAsis;
    const temaActual = qrTema || defaultTemaDelDia(qrDate);
    const rec = allInscripciones.find((x) => x && (x.id === uidTarget || x.uid === uidTarget));
    const present = rec && (rec.asistencias || []).some((a) => a && a.fecha === qrDate && String(a.titulo || '').toLowerCase() === temaActual.toLowerCase());
    if (present) {
      await quitarAsistencia(uidTarget, qrDate + '__' + temaActual.toLowerCase());
      qrStatusKind = 'ok'; qrStatusMsg = 'Se quitó la asistencia de ' + (rec.nombre || 'participante') + '.';
    } else {
      const r = await registrarAsistencia('JUMA:' + uidTarget, qrDate, temaActual, qrTipo);
      qrStatusKind = r.ok ? 'ok' : 'err'; qrStatusMsg = r.msg;
    }
    repaintEd(); return;
  }
  if (q('[data-mark-today]')) {
    const uidTarget = q('[data-mark-today]').dataset.markToday;
    const r = await registrarAsistencia('JUMA:' + uidTarget, todayIso(), defaultTemaDelDia(todayIso()), 'Formación');
    edOk = esc(r.msg);
    repaintEd(); return;
  }
  if (q('[data-rm-asis]')) {
    const b = q('[data-rm-asis]');
    await quitarAsistencia(b.dataset.rmAsis, b.dataset.akey);
    return;
  }
  if (q('[data-toggle-sun-ed]')) { showAllSunEd = !showAllSunEd; repaintEd(); return; }
  if (q('[data-add-extra-day]')) {
    const fIn = ($('#new-extra-date') || {}).value || '';
    const tIn = (($('#new-extra-tema') || {}).value || '').trim();
    if (!fIn) { edErr = 'Selecciona la fecha del encuentro o actividad.'; repaintEd(); return; }
    if (fIn < todayIso() || fIn > max3MonthsIso()) { edErr = 'La fecha debe estar dentro de un rango máximo de 3 meses a partir de hoy.'; repaintEd(); return; }
    dr.encuentrosExtra = (dr.encuentrosExtra || []).filter((x) => x && x.fecha !== fIn);
    dr.encuentrosExtra.push({ fecha: fIn, tema: tIn || 'Encuentro / Formación JUMA' });
    edErr = ''; edOk = '✔ Día añadido al calendario de los próximos 3 meses. Pulsa «Publicar cambios» para guardarlo.';
    touch(); repaintEd(); return;
  }
  if (q('[data-rm-extra-day]')) {
    const fRm = q('[data-rm-extra-day]').dataset.rmExtraDay;
    dr.encuentrosExtra = (dr.encuentrosExtra || []).filter((x) => x && x.fecha !== fRm);
    touch(); repaintEd(); return;
  }
  if (q('[data-add-act]')) {
    dr.actividades = Array.isArray(dr.actividades) ? dr.actividades : [];
    if (dr.actividades.length >= 24) { edErr = 'Puedes programar hasta un máximo de 3 meses de actividades (24 actividades).'; repaintEd(); return; }
    dr.actividades.push({ t: '', f: '', d: '' });
    touch(); repaintEd(); return;
  }
  if (q('[data-rm-act]')) {
    const idxRm = +q('[data-rm-act]').dataset.rmAct;
    if (Array.isArray(dr.actividades)) dr.actividades.splice(idxRm, 1);
    touch(); repaintEd(); return;
  }
  if (q('[data-fy]')) { fy = +q('[data-fy]').dataset.fy; repaintEd(); return; }
  if (q('[data-export-csv]')) { exportInscripcionesCsv(); return; }
  if (q('[data-reload-ins]')) { await loadAdminData(); repaintEd(); return; }
  if (q('[data-dl-ins]')) {
    const qStr = insQuery.trim().toLowerCase();
    const list = allInscripciones.filter((x) => (insRoleFilter === 'todos' || userRole(x) === insRoleFilter) && (!qStr || JSON.stringify(x).toLowerCase().includes(qStr)));
    const item = list[+q('[data-dl-ins]').dataset.dlIns];
    if (item && item.datos) downloadPlanillaHtml(item.datos, item);
    return;
  }
  if (q('[data-rm-ins]')) {
    const id = q('[data-rm-ins]').dataset.rmIns;
    if (!confirm('¿Borrar esta planilla de inscripción?')) return;
    try { if (fb && fb.db) await withTimeout(fb.deleteDoc(fb.doc(fb.db, 'inscripciones', id)), 4000); } catch (x) {}
    try {
      const loc = JSON.parse(localStorage.getItem('juma-inscripciones-local') || '[]').filter((x) => x && x.id !== id);
      localStorage.setItem('juma-inscripciones-local', JSON.stringify(loc));
    } catch (x) {}
    await loadAdminData(); repaintEd(); return;
  }
  if (q('[data-aprob-msg]')) {
    const id = q('[data-aprob-msg]').dataset.aprobMsg;
    try { if (fb && fb.db) await withTimeout(fb.updateDoc(fb.doc(fb.db, 'mensajes', id), { aprobado: true }), 4000); } catch (x) {}
    await loadAdminData(); loadMuro(); repaintEd(); return;
  }
  if (q('[data-rm-msg]')) {
    const id = q('[data-rm-msg]').dataset.rmMsg;
    try { if (fb && fb.db) await withTimeout(fb.deleteDoc(fb.doc(fb.db, 'mensajes', id)), 4000); } catch (x) {}
    await loadAdminData(); loadMuro(); repaintEd(); return;
  }
  if (q('[data-save-assetlinks]')) {
    const pkg = (($('#apk-pkg') || {}).value || 'io.github.gabrielg739_prog.twa').trim();
    const sha = (($('#apk-sha') || {}).value || '').trim();
    if (!sha) { edErr = 'Pega la huella SHA-256 de tu APK primero.'; repaintEd(); return; }
    try { localStorage.setItem('juma-apk-pkg', pkg); localStorage.setItem('juma-apk-sha', sha); } catch (x) {}
    const json = JSON.stringify([{ relation: ['delegate_permission/common.handle_all_urls'], target: { namespace: 'android_app', package_name: pkg, sha256_cert_fingerprints: [sha] } }], null, 2);
    if (ghToken()) {
      edBusy = true; edErr = ''; repaintEd();
      try {
        const cur = await ghGet('.well-known/assetlinks.json');
        await ghPut('.well-known/assetlinks.json', enc64(json), cur && cur.sha, 'Configura assetlinks.json para APK sin barra de URL');
        const nj = await ghGet('.nojekyll');
        if (!nj) await ghPut('.nojekyll', enc64('\n'), null, 'Agrega .nojekyll para servir .well-known');
        edOk = '<b>¡Listo!</b> Se subió <code>.well-known/assetlinks.json</code> y <code>.nojekyll</code> a tu GitHub. En 2 minutos tu APK abrirá sin barra de URL.';
      } catch (x) { edErr = 'No se pudo subir a GitHub. Se descargará el archivo para que lo subas.'; }
      edBusy = false; repaintEd();
    } else {
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' })); a.download = 'assetlinks.json'; a.click();
      edOk = 'Se descargó <b>assetlinks.json</b>. Colócalo dentro de la carpeta <code>.well-known/</code> en tu repositorio de GitHub.';
      repaintEd();
    }
    return;
  }
  if (q('[data-lock-master]')) {
    stopQrCamera();
    try { sessionStorage.removeItem('juma-ed'); localStorage.removeItem('juma-master-device'); } catch (x) {}
    if (!isAdmin) $('#fab-edit').classList.add('hide');
    updateAuthUI(); closeModal(); return;
  }
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
  edBusy = true; edErr = ''; edOk = ''; repaintEd();

  let fbSaved = false;
  if (fb && fb.db) {
    try { await withTimeout(fb.setDoc(fb.doc(fb.db, 'site', 'config'), local), 4500); fbSaved = true; } catch (e) { fbSaved = true; }
  }

  if (!ghToken()) {
    dr = local; draftWarn = !writeDraft(Object.assign({}, local, { _dirty: false })); pub = clone(local); cfg = clone(local); renderAll();
    try { localStorage.setItem('juma-cfg', JSON.stringify(local)); } catch (e) {}
    edBusy = false;
    if (fbSaved) {
      edOk = '<b>¡Publicado en tiempo real en Firebase!</b> Todos los usuarios de la app y la web ya ven los cambios al instante.';
    } else {
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(local, null, 1)], { type: 'application/json' })); a.download = 'contenido.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      edOk = '<b>Se guardó y descargó contenido.json.</b> Súbelo a GitHub o conecta tu llave en la pestaña «GitHub» para publicar sin descargar archivos.';
    }
    repaintEd(); return;
  }
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
    if (fb && fb.db) { fb.setDoc(fb.doc(fb.db, 'site', 'config'), out).catch(() => {}); }
    pub = clone(out); newestSeen = out.actualizado;
    dr = local; cfg = clone(local); renderAll();
    try { localStorage.removeItem(DRAFT); } catch (x) {}
    for (const f of oldFiles) { try { const o = await ghGet(f); if (o && o.sha) await ghDelete(f, o.sha); } catch (x) {} }
    oldFiles = [];
    edOk = '<b>¡Publicado en Firebase y en GitHub!</b> Todos lo ven al instante en la página y en la app.';
  } catch (x) {
    edErr = x && (x.status === 401 || x.status === 403 || x.status === 404) ? 'GitHub no aceptó la llave (pero en Firebase sí se guardó si estaba activo). Revísala en la pestaña «GitHub».' : 'No se pudo subir a GitHub, revisa tu conexión.';
  }
  edBusy = false; repaintEd();
}

/* ===================== entrada secreta: 5 toques en María Consolata ===================== */
let taps = [];
document.addEventListener('click', (e) => {
  const s = e.target.closest && e.target.closest('.patron-d summary'); if (!s) return;
  const first = $$('.patron-d summary')[0]; if (s !== first) return;
  const now = Date.now(); taps = taps.filter((x) => now - x < 3000); taps.push(now);
  if (taps.length >= 5) { taps = []; e.preventDefault(); if (isEditor() || isAdmin) { showFab(); openEditor(); } else { authTab = 'master'; authErr = ''; openAuthModal(); } }
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
  setTimeout(() => checkUpcomingReminders(false), 1200);
}
(function boot() {
  try {
    const last = localStorage.getItem('juma-ultimo-perfil');
    if (last) myProfile = JSON.parse(last);
  } catch (e) {}
  renderAll(); setupUnroll(); updateAuthUI();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
  loadContenido();
  initFirebase();
})();
