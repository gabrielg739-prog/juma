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

/* ---------- iconos vectoriales (los mismos del prototipo v2). Los emojis de contenido se quedan; los de botones y menús son estos. ---------- */
const P = {
  home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  calcheck:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  cap:'<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  book:'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  news:'<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>',
  msg:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  userplus:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
  login:'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  back:'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>', down:'<path d="m6 9 6 6 6-6"/>',
  menu:'<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>', x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  cake:'<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>',
  pin:'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  idcard:'<path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/>',
  send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  like:'<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
  comment:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/>',
  megaphone:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  gamepad:'<path d="M6 12h4M8 10v4"/><path d="M15 13h.01M18 11h.01"/><rect width="20" height="12" x="2" y="6" rx="4"/>',
  library:'<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone:'<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  drop:'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  star:'<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  sparkles:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  edit:'<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
  church:'<path d="M10 9h4"/><path d="M12 7v5"/><path d="M14 22v-4a2 2 0 0 0-4 0v4"/><path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"/><path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-10.382a1 1 0 0 1 .553-.894L6 7"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  expand:'<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  play:'<path d="M6 3v18l15-9z"/>', pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  vol:'<path d="M3 9.5v5h4l5 4.5v-14L7 9.5H3z" fill="currentColor"/><path d="M15.5 8.8a4.5 4.5 0 0 1 0 6.4"/><path d="M18.3 6a8.5 8.5 0 0 1 0 12"/>',
  mute:'<path d="M3 9.5v5h4l5 4.5v-14L7 9.5H3z" fill="currentColor"/><path d="m16 9.5 5 5"/><path d="m21 9.5-5 5"/>'
};
/* Iconos extra, del mismo juego de trazos (Lucide), para botones que el prototipo no tenía */
Object.assign(P, {
  up:'<path d="m18 15-6-6-6 6"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  settings:'<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  qr:'<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  shirt:'<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>'
});
const ic = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ''}</svg>`;
/* Botón de sonido de los videos de noticias */
const SND_ON = ic('vol') + '<span>Con sonido</span>';
const SND_OFF = ic('mute') + '<span>Activar sonido</span>';

let cfg = {};      // contenido publicado (contenido.json) o el borrador del editor
let pub = {};      // contenido publicado tal como está en GitHub
let fb = null;      // módulos de firebase
/* Rol con permisos especiales del usuario con sesión iniciada. Solo se toma de Firestore
   (roles/{correo}) o de la cuenta maestra verificada; nunca del perfil propio ni del navegador.
   'admin' | 'coordinador' | 'asesor' | '' */
let privRole = '';
const ROLES_SIN_PERMISO = ['participante', 'visitante', 'colaborador'];
const rolSinPermiso = (r) => (ROLES_SIN_PERMISO.includes(String(r || '').toLowerCase()) ? String(r).toLowerCase() : 'participante');
/* Coordinadores y asesores que ya existían antes de roles/{correo} (los asignó la Cuenta Maestra en la versión anterior):
   las listas coordinadoresEmails / asesoresEmails de site/config, el rol guardado en la planilla y la cuenta de Gabriel Gómez.
   Las reglas de Firestore reconocen exactamente lo mismo. */
const GABRIEL_CORREO = 'gabrielg739@gmail.com';
const rolConPermiso = (r) => { const x = String(r || '').trim().toLowerCase(); return x === 'coordinador' || x === 'asesor' ? x : ''; };
let listasRoles = { coord: [], ases: [], cargadas: false };
function tomarListasRoles(d) {
  const lista = (l) => (Array.isArray(l) ? l : []).map((x) => String(x || '').trim().toLowerCase()).filter(Boolean);
  listasRoles = { coord: lista(d && d.coordinadoresEmails), ases: lista(d && d.asesoresEmails), cargadas: true };
}
function rolAntiguo(email, rec) {
  const em = String(email || '').trim().toLowerCase();
  if (em && em === GABRIEL_CORREO) return 'coordinador';
  if (em && listasRoles.coord.includes(em)) return 'coordinador';
  if (em && listasRoles.ases.includes(em)) return 'asesor';
  return rolConPermiso(rec && rec.rol);
}

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
  renderAviso(); renderDomingos(); renderActs(); renderFormacion(); renderPosts(); renderGalExtra(); renderGalFija(); renderGalOrden(); renderTes(); renderComunidadView();
  /* Si se acaba de abrir un enlace directo (#testimonios…), el contenido nuevo no debe dejarlo fuera de la vista */
  requestAnimationFrame(reajustarDestino);
}
function renderAviso() {
  const el = $('#aviso'); const t = String(cfg.aviso || '').trim();
  el.textContent = t; el.classList.toggle('hide', !t);
}
function hora() { return cfg.hora || 'Hora por confirmar'; }
function lugar() { const l = cfg.lugar; return l ? l + (/duaca/i.test(l) ? '' : ', Duaca') : 'Lugar por confirmar, Duaca'; }
function mapsUrl() {
  const u = String((cfg && cfg.mapsUrl) || '').trim();
  if (u && (/^https?:\/\//i.test(u) || /^geo:/i.test(u))) return u;
  if (u && /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(u)) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(u);
  }
  const l = lugar();
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(l);
}
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
  /* Avisos del servidor al teléfono: solo para miembros con sesión (tokens/{uid}) */
  if ('Notification' in window && Notification.permission === 'granted') await registrarTokenPush(false);
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
  banner.innerHTML = `<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px"><b style="color:var(--sky);font-size:14px">🔔 Recordatorio JUMA · ${esc(labelWhen)}</b><button type="button" aria-label="Cerrar recordatorio" style="background:none;border:0;color:#fff;cursor:pointer;font-size:15px;line-height:1;padding:0 2px" onclick="this.closest('#juma-rem-banner').remove()">✕</button></div><p style="margin:5px 0 10px;color:#E8F1FF"><b>${esc(target.title)}</b><br><span style="font-size:12.5px;color:var(--muted-lt)">${esc(target.badge)} · ${esc(hora())} · ${esc(lugar())}</span></p><div style="display:flex;flex-wrap:wrap;gap:8px"><a class="btn btn-blue btn-sm" style="padding:6px 12px;font-size:12px" target="_blank" rel="noopener" href="${esc(gUrl)}">📅 Abrir en Google Calendar</a><button type="button" class="btn btn-sm" style="padding:6px 12px;font-size:12px;background:rgba(255,255,255,0.15);color:#fff;border:1.5px solid rgba(255,255,255,0.4)" data-dl-ics>📲 Guardar todo (.ics)</button></div>`;
}

function canUseGoogleCalendar() {
  return !!(typeof currentUser !== 'undefined' && currentUser) || !!(typeof myProfile !== 'undefined' && myProfile);
}

function renderDomingos() {
  $('#f-hora').textContent = hora(); $('#f-lugar').textContent = lugar();
  const mapsLnk = $('#lnk-maps-lugar');
  if (mapsLnk) {
    mapsLnk.href = mapsUrl();
    mapsLnk.setAttribute('title', 'Ver en Google Maps cómo llegar a: ' + lugar());
  }
  const all = encuentrosProgramados(cfg);
  const visible = showAllEnc ? all : all.slice(0, 4);
  const canCal = canUseGoogleCalendar();
  const mUrl = mapsUrl();
  $('#tags').innerHTML = visible.map((s) => {
    const canAgendar = canCal && s.tema !== 'Sin reunión';
    const gUrl = canAgendar ? googleCalUrl({
      title: `JUMA Duaca · ${s.tema}`,
      dateIso: s.key,
      desc: `Encuentro de formación y comunidad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca).\nTema: ${s.tema}\nHora: ${hora()}\nLugar: ${lugar()}\nUbicación en Google Maps: ${mUrl}`
    }) : '';
    return `<li class="dtag"><i aria-hidden="true"></i><div class="dcard${s.first ? ' first' : ''}"><span class="flag" style="${!s.first ? 'background:var(--mist);color:var(--royal)' : ''}">${esc(s.badge)}</span><span class="d num">${s.dia}</span><span class="m">${s.mes}</span><span class="t">${esc(s.tema)}</span><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${canAgendar ? `<a class="gcal-chip" target="_blank" rel="noopener" href="${esc(gUrl)}" title="Agregar este encuentro a Google Calendar" style="display:inline-flex;align-items:center;gap:4px;padding:4px 9px;border-radius:99px;background:${s.first ? 'rgba(6,21,54,.14)' : 'var(--mist)'};color:${s.first ? 'var(--navy)' : 'var(--royal)'};font-size:11.5px;font-weight:800;text-decoration:none">📅 Agendar</a>` : ''}<a class="gcal-chip" target="_blank" rel="noopener" href="${esc(mUrl)}" title="Ver cómo llegar en Google Maps" style="display:inline-flex;align-items:center;gap:4px;padding:4px 9px;border-radius:99px;background:${s.first ? 'rgba(6,21,54,.14)' : 'var(--mist)'};color:${s.first ? 'var(--navy)' : 'var(--royal)'};font-size:11.5px;font-weight:800;text-decoration:none">📍 Cómo llegar</a></div></div></li>`;
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
  const oldSyncBar = $('#cal-sync-bar');
  if (oldSyncBar) oldSyncBar.remove();
}

function renderActs() {
  const a = (cfg.actividades || []).filter((x) => x && x.t);
  $('#acts-wrap').classList.toggle('hide', !a.length);
  const visible = showAllActs ? a : a.slice(0, 4);
  const canCal = canUseGoogleCalendar();
  $('#acts').innerHTML = visible.map((x) => {
    const gUrl = canCal ? googleCalUrl({
      title: `JUMA Duaca · ${x.t}`,
      dateIso: x.f || '',
      desc: `${x.d ? x.d + '\n' : ''}Actividad de la Juventud Misionera Allamaniana de Duaca (JUMA Duaca).\nFecha: ${x.f || 'Por confirmar'}\nLugar: ${lugar()}`
    }) : '';
    return `<li><b>${esc(x.t)}</b><span class="f">${esc(x.f || '')}</span><p>${esc(x.d || '')}</p>${canCal ? `<div style="margin-top:14px"><a class="btn btn-outline btn-sm" style="padding:6px 12px;font-size:12px;color:var(--sky);border-color:rgba(142,201,255,.4)" target="_blank" rel="noopener" href="${esc(gUrl)}">📅 Agendar en Google Calendar</a></div>` : ''}</li>`;
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
    foto: '',
    video: 'img/caminata-misionera-2026.mp4'
  }
];
function getPostsList(src = cfg) {
  const custom = ((src && src.posts) || []).filter((p) => p && (p.t || p.x)).map((p) => {
    if (p.id === 'doblete-amor-2026') return Object.assign({}, p, { foto: '' });
    return p;
  });
  const hiddenIds = new Set((src && src.postsOcultos) || []);
  const seenIds = new Set(custom.map((p) => p.id).filter(Boolean));
  const defaults = DEFAULT_POSTS.filter((d) => !hiddenIds.has(d.id) && !seenIds.has(d.id));
  return custom.concat(defaults);
}
const postVideoFileCache = new Map();
const postVideoBlobUrlCache = new Map();
const postVideoPromiseCache = new Map();
const postMediaFileCache = new Map();

function dataUrlToFile(dataUrl, filename = 'Noticia-JUMA.jpg') {
  try {
    const s = String(dataUrl || '');
    const parts = s.split(',');
    if (parts.length < 2) return null;
    const mimeMatch = parts[0].match(/:(.*?);/);
    const mime = (mimeMatch && mimeMatch[1]) || 'image/jpeg';
    const ext = mime.includes('png') ? 'png' : (mime.includes('webp') ? 'webp' : 'jpg');
    const safeName = filename.endsWith('.' + ext) ? filename : (filename.replace(/\.[^.]+$/, '') + '.' + ext);
    const byteString = atob(parts[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], { type: mime });
    return new File([blob], safeName, { type: mime });
  } catch (e) {
    return null;
  }
}

function u8ToB64(u8) {
  let s = '';
  for (let i = 0; i < u8.length; i += 0x8000) {
    s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
  }
  return btoa(s);
}
function b64ToU8(b64) {
  const bin = atob(String(b64 || '').replace(/\s/g, ''));
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}
async function resolveCloudVideo(vidRef) {
  if (!vidRef || !String(vidRef).startsWith('juma-vid:')) return vidRef;
  if (postVideoBlobUrlCache.has(vidRef)) return postVideoBlobUrlCache.get(vidRef);
  if (postVideoPromiseCache.has(vidRef)) return postVideoPromiseCache.get(vidRef);

  const p = (async () => {
    const vidId = String(vidRef).slice(9);
    const cacheKey = 'https://juma.local/cloud-video/' + encodeURIComponent(vidId);
    try {
      if ('caches' in globalThis) {
        const c = await caches.open('juma-cloud-videos-v1');
        const hit = await c.match(cacheKey);
        if (hit) {
          const blob = await hit.blob();
          const url = URL.createObjectURL(blob);
          postVideoBlobUrlCache.set(vidRef, url);
          if ('File' in globalThis) {
            postVideoFileCache.set(vidRef, new File([blob], 'Noticia-JUMA.mp4', { type: blob.type || 'video/mp4' }));
          }
          return url;
        }
      }
    } catch (e) {}

    for (let w = 0; w < 25 && !(fb && fb.db); w++) {
      await new Promise((r) => setTimeout(r, 200));
    }
    if (!fb || !fb.db) return '';

    const metaSnap = await fb.getDoc(fb.doc(fb.db, 'site', 'vid_' + vidId));
    if (!metaSnap.exists()) return '';
    const meta = metaSnap.data() || {};
    const total = Number(meta.chunks || 0);
    if (!total) return '';

    const snaps = await Promise.all(
      Array.from({ length: total }, (_, idx) => fb.getDoc(fb.doc(fb.db, 'site', `vid_${vidId}_${idx}`)))
    );
    const parts = snaps.map((s) => (s.exists() && s.data() && s.data().d ? b64ToU8(s.data().d) : new Uint8Array(0)));
    const mime = meta.mime || 'video/mp4';
    const blob = new Blob(parts, { type: mime });
    const url = URL.createObjectURL(blob);
    postVideoBlobUrlCache.set(vidRef, url);
    if ('File' in globalThis) {
      postVideoFileCache.set(vidRef, new File([blob], meta.name || 'Noticia-JUMA.mp4', { type: mime }));
    }
    try {
      if ('caches' in globalThis) {
        const c = await caches.open('juma-cloud-videos-v1');
        await c.put(cacheKey, new Response(blob, { headers: { 'Content-Type': mime } }));
      }
    } catch (e) {}
    return url;
  })();

  postVideoPromiseCache.set(vidRef, p);
  try {
    return await p;
  } finally {
    postVideoPromiseCache.delete(vidRef);
  }
}

function mediaHtml(p, idx) {
  const yt = p.video && String(p.video).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
  if (yt) return `<div class="post-media"><iframe class="yt" loading="lazy" src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="${esc(p.t)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  if (p.video) {
    const isCloud = String(p.video).startsWith('juma-vid:');
    const readySrc = isCloud ? (postVideoBlobUrlCache.get(p.video) || '') : p.video;
    return `<div class="post-media is-reel" data-post-media="${idx}" ${isCloud ? `data-cloud-vid="${esc(p.video)}"` : ''}>
      <button type="button" class="post-sound-btn" data-toggle-post-sound="${idx}">${SND_ON}</button>
      <video controls preload="auto" playsinline loop ${readySrc ? `src="${esc(readySrc)}"` : ''} data-post-video="${idx}"></video>
    </div>`;
  }
  if (p.foto) return `<div class="post-media"><img class="photo" loading="lazy" src="${esc(p.foto)}" alt="${esc(p.t)}"></div>`;
  return '';
}
let postMediaObserver = null;
let audioGestureBound = false;

function stopAndMuteVideo(box) {
  const vid = box ? box.querySelector('video') : null;
  const sndBtn = box ? box.querySelector('[data-toggle-post-sound]') : null;
  if (!vid) return;
  vid.muted = true;
  if (!vid.paused) {
    try { vid.pause(); } catch (e) {}
  }
  if (sndBtn) sndBtn.innerHTML = SND_OFF;
}

function playWithSound(box) {
  const vid = box ? box.querySelector('video') : null;
  const sndBtn = box ? box.querySelector('[data-toggle-post-sound]') : null;
  if (!vid || !vid.getAttribute('src')) return;
  /* Silencia y pausa cualquier otro video para que solo suene el que se está viendo */
  $$('[data-post-media]').forEach((other) => {
    if (other !== box) stopAndMuteVideo(other);
  });
  vid.muted = false;
  vid.volume = 1;
  if (sndBtn) sndBtn.innerHTML = SND_ON;
  vid.play().then(() => {
    if (box.dataset.inView !== '1') {
      stopAndMuteVideo(box);
      return;
    }
    vid.muted = false;
    vid.volume = 1;
    if (sndBtn) sndBtn.innerHTML = SND_ON;
  }).catch(() => {
    /* Si el navegador aún no ha recibido el primer toque en la página, inicia el video de inmediato y enciende el audio al primer toque o deslizamiento */
    if (box.dataset.inView !== '1') return;
    vid.muted = true;
    vid.play().catch(() => {});
  });
}

function bindGlobalAudioUnlock() {
  if (audioGestureBound) return;
  audioGestureBound = true;
  const onUserGesture = () => {
    $$('[data-post-media]').forEach((b) => {
      const vid = b.querySelector('video');
      const sndBtn = b.querySelector('[data-toggle-post-sound]');
      if (!vid || !vid.getAttribute('src')) return;
      if (b.dataset.inView === '1') {
        if (b.dataset.userMuted !== '1') {
          vid.muted = false;
          vid.volume = 1;
          if (sndBtn) sndBtn.innerHTML = SND_ON;
        }
        if (vid.paused) vid.play().catch(() => {});
      } else if (!vid.dataset.unlocked) {
        /* Desbloquea el canal de audio del elemento de video en segundo plano durante el primer toque del usuario */
        vid.dataset.unlocked = '1';
      }
    });
  };
  ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown'].forEach((ev) => {
    document.addEventListener(ev, onUserGesture, { capture: true, passive: true });
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      $$('[data-post-media]').forEach((b) => stopAndMuteVideo(b));
    } else {
      $$('[data-post-media]').forEach((b) => {
        if (b.dataset.inView === '1') playWithSound(b);
      });
    }
  });
}

async function postMediaToFile(p) {
  if (!p) return null;
  const cacheKey = p.id || String(p.t || '');
  if (postMediaFileCache.has(cacheKey)) {
    const hit = postMediaFileCache.get(cacheKey);
    if (hit instanceof File) return hit;
  }
  if (p.foto) {
    if (postMediaFileCache.has(p.foto)) {
      const hit = postMediaFileCache.get(p.foto);
      if (hit instanceof File) return hit;
    }
    const slug = (p.t || 'Noticia-JUMA').replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]+/g, '-').slice(0, 30) || 'Noticia-JUMA';
    if (String(p.foto).startsWith('data:')) {
      const f = dataUrlToFile(p.foto, `${slug}.jpg`);
      if (f) {
        postMediaFileCache.set(cacheKey, f);
        postMediaFileCache.set(p.foto, f);
        return f;
      }
    }
    try {
      const res = await fetch(p.foto, { mode: 'cors' });
      if (res.ok) {
        const blob = await res.blob();
        const mime = blob.type || 'image/jpeg';
        const ext = mime.includes('png') ? 'png' : (mime.includes('webp') ? 'webp' : 'jpg');
        const f = new File([blob], `${slug}.${ext}`, { type: mime });
        postMediaFileCache.set(cacheKey, f);
        postMediaFileCache.set(p.foto, f);
        return f;
      }
    } catch (e) {
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = p.foto;
        });
        const cv = document.createElement('canvas');
        cv.width = img.naturalWidth || img.width || 800;
        cv.height = img.naturalHeight || img.height || 600;
        cv.getContext('2d').drawImage(img, 0, 0);
        const dataUrl = cv.toDataURL('image/jpeg', 0.85);
        const f = dataUrlToFile(dataUrl, `${slug}.jpg`);
        if (f) {
          postMediaFileCache.set(cacheKey, f);
          postMediaFileCache.set(p.foto, f);
          return f;
        }
      } catch (e2) {}
    }
  }
  if (p.video) {
    const cachedVid = postVideoFileCache.get(p.video);
    if (cachedVid instanceof File) return cachedVid;
  }
  return null;
}

function preloadPostMediaFiles(list) {
  (list || []).forEach((p, idx) => {
    if (!p) return;
    const cacheKey = p.id || String(idx);

    // Pre-cargar archivo de imagen para compartir al instante en WhatsApp
    if (p.foto && !postMediaFileCache.has(cacheKey) && !postMediaFileCache.has(p.foto)) {
      if (String(p.foto).startsWith('data:')) {
        const slug = (p.t || 'Noticia-JUMA').replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]+/g, '-').slice(0, 30) || 'Noticia-JUMA';
        const f = dataUrlToFile(p.foto, `${slug}.jpg`);
        if (f) {
          postMediaFileCache.set(cacheKey, f);
          postMediaFileCache.set(p.foto, f);
        }
      } else if ('fetch' in globalThis) {
        fetch(p.foto).then((r) => (r.ok ? r.blob() : null)).then((blob) => {
          if (blob) {
            const ext = blob.type.includes('png') ? 'png' : (blob.type.includes('webp') ? 'webp' : 'jpg');
            const f = new File([blob], `Noticia-JUMA.${ext}`, { type: blob.type || 'image/jpeg' });
            postMediaFileCache.set(cacheKey, f);
            postMediaFileCache.set(p.foto, f);
          }
        }).catch(() => {});
      }
    }

    // Pre-cargar video
    const v = p.video;
    if (!v || /^(https?:)?\/\/(?:www\.)?(?:youtube\.com|youtu\.be)/i.test(v)) return;
    if (String(v).startsWith('juma-vid:')) {
      resolveCloudVideo(v).catch(() => {});
      return;
    }
    if (!('File' in globalThis) || !navigator.canShare || postVideoFileCache.has(v)) return;
    postVideoFileCache.set(v, 'loading');
    fetch(v).then((r) => (r.ok ? r.blob() : null)).then((blob) => {
      if (blob) {
        const vidFile = new File([blob], 'Doblete-de-Amor-JUMA.mp4', { type: blob.type || 'video/mp4' });
        postVideoFileCache.set(v, vidFile);
        postMediaFileCache.set(cacheKey, vidFile);
      } else {
        postVideoFileCache.delete(v);
      }
    }).catch(() => { postVideoFileCache.delete(v); });
  });
}

/* Videos de las noticias: carga los videos de la nube y los reproduce solo cuando se ven en pantalla.
   (Se había borrado por error en una actualización y la página dejaba de arrancar.) */
function setupPostVideos() {
  bindGlobalAudioUnlock();
  if (postMediaObserver) { try { postMediaObserver.disconnect(); } catch (e) {} postMediaObserver = null; }
  const boxes = $$('[data-post-media]');
  if (!boxes.length) return;
  boxes.forEach((b) => {
    const cloudRef = b.dataset.cloudVid;
    if (cloudRef) {
      resolveCloudVideo(cloudRef).then((url) => {
        const vid = b.querySelector('video');
        if (vid && url && vid.getAttribute('src') !== url) {
          vid.src = url;
          if (b.dataset.inView === '1') playWithSound(b);
        }
      }).catch(() => {});
    }
  });
  if ('IntersectionObserver' in globalThis) {
    postMediaObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const box = en.target;
        const vid = box.querySelector('video');
        if (!vid) return;
        const visibleNow = en.isIntersecting && en.intersectionRatio >= 0.08;
        box.dataset.inView = visibleNow ? '1' : '0';
        if (visibleNow) {
          box.dataset.userMuted = '0';
          playWithSound(box);
        } else {
          stopAndMuteVideo(box);
        }
      });
    }, { threshold: [0, 0.08, 0.2, 0.5] });
    boxes.forEach((b) => postMediaObserver.observe(b));
  } else {
    boxes.forEach((b) => { b.dataset.inView = '1'; playWithSound(b); });
  }
}

function showPostShareModal(p, file, fullText) {
  const modal = document.createElement('div');
  modal.className = 'overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.style.zIndex = '999999';

  const imgSrc = p.foto;
  const title = p.t || 'Noticia JUMA Duaca';
  const slug = (p.t || 'Noticia-JUMA').replace(/[^a-zA-Z0-9]+/g, '-').slice(0, 30) || 'Noticia-JUMA';

  modal.innerHTML = `
    <div class="sheet" style="max-width:480px;background:#061536;color:#fff;border:2.5px solid #F5C518;border-radius:24px;box-shadow:0 24px 70px rgba(0,0,0,0.85)">
      <div style="padding:16px 20px;border-bottom:1.5px solid rgba(245,197,24,0.3);display:flex;align-items:center;justify-content:space-between">
        <div>
          <b style="font-size:16px;color:#F5C518;display:flex;align-items:center;gap:8px">${ic('news')}Compartir Noticia con Foto</b>
          <span style="font-size:12.5px;color:#DCE7F8">${esc(title.slice(0, 40))}${title.length > 40 ? '…' : ''}</span>
        </div>
        <button type="button" class="jchat-x" data-close-post-modal aria-label="Cerrar" style="color:#fff;border-color:rgba(255,255,255,0.4)">${ic('x')}</button>
      </div>

      <div style="padding:20px;text-align:center;overflow-y:auto;max-height:75vh">
        <div style="border-radius:14px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.5);border:1.5px solid rgba(255,255,255,0.2);margin-bottom:16px;max-width:320px;margin-left:auto;margin-right:auto">
          <img src="${esc(imgSrc)}" alt="${esc(title)}" style="width:100%;height:auto;display:block;max-height:260px;object-fit:cover">
        </div>

        <p style="font-size:13.5px;color:#DCE7F8;line-height:1.5;margin:0 0 16px">
          ¡El texto de la noticia ya se copió automáticamente al portapapeles! Puedes descargar la foto y adjuntarla en tu grupo o chat de WhatsApp.
        </p>

        <div style="display:flex;flex-direction:column;gap:10px">
          ${file && navigator.canShare && navigator.canShare({ files: [file] }) ? `
          <button type="button" class="btn btn-sm" data-action-share-native-post-img style="min-height:44px;font-size:14px;font-weight:800;background:#25D366;color:#fff;border:0;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 6px 18px rgba(37,211,102,0.4);border-radius:14px;cursor:pointer">
            ${ic('share')}Compartir Foto directamente en WhatsApp
          </button>` : ''}
          <button type="button" class="btn btn-sm" data-action-download-post-img style="min-height:44px;font-size:14px;font-weight:800;background:#F5C518;color:#061536;border:0;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 6px 18px rgba(245,197,24,0.4);border-radius:14px;cursor:pointer">
            ${ic('download')}Descargar Foto de la Noticia
          </button>

          <a class="btn btn-blue" href="https://wa.me/?text=${encodeURIComponent(fullText)}" target="_blank" rel="noopener" style="min-height:44px;font-size:14px;font-weight:800;background:#17824A;color:#fff;border:0;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 6px 16px rgba(23,130,74,0.4);border-radius:14px;text-decoration:none">
            ${ic('msg')}Abrir WhatsApp con el Texto
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeFn = () => modal.remove();
  modal.querySelectorAll('[data-close-post-modal]').forEach((b) => b.addEventListener('click', closeFn));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeFn(); });

  const shareImgBtn = modal.querySelector('[data-action-share-native-post-img]');
  if (shareImgBtn && file) {
    shareImgBtn.addEventListener('click', async () => {
      try {
        await navigator.share({ files: [file], title: title });
      } catch (err) {}
    });
  }

  const dlBtn = modal.querySelector('[data-action-download-post-img]');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = imgSrc;
      a.download = `${slug}.jpg`;
      a.click();
    });
  }
}

async function sharePostWhatsApp(idx, btnEl) {
  const list = getPostsList();
  const p = list[idx];
  if (!p) return;
  const fullText = [p.t, p.x].filter((s) => String(s || '').trim()).join('\n\n');
  const origHtml = btnEl ? btnEl.innerHTML : '';
  if (btnEl) btnEl.innerHTML = '<span>⏳ Preparando…</span>';

  /* 1. Siempre copia el texto al portapapeles como respaldo */
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullText).catch(() => {});
    }
  } catch (e) {}

  /* 2. Obtiene el archivo multimedia (foto o video) */
  let fileToShare = await postMediaToFile(p);

  /* 3. En teléfonos móviles: comparte el ARCHIVO (foto o video) a través de la interfaz nativa del teléfono */
  if (fileToShare && navigator.share && navigator.canShare) {
    try {
      if (navigator.canShare({ files: [fileToShare] })) {
        if (btnEl) btnEl.innerHTML = origHtml;
        try {
          /* En WhatsApp Android, si se pasa "text" y "files" a la vez, WhatsApp a veces omite la foto.
             Compartiendo primero el archivo (o con texto como respaldo) WhatsApp abre la pantalla de la imagen */
          await navigator.share({
            files: [fileToShare],
            title: p.t || 'Noticia JUMA Duaca'
          });
          return;
        } catch (shareErr) {
          if (shareErr && shareErr.name === 'AbortError') return;
          await navigator.share({
            files: [fileToShare],
            title: p.t || 'Noticia JUMA',
            text: fullText
          });
          return;
        }
      }
    } catch (err) {
      if (btnEl) btnEl.innerHTML = origHtml;
      if (err && err.name === 'AbortError') return;
      console.warn('navigator.share con archivo falló, usando método alternativo:', err);
    }
  }

  if (btnEl) btnEl.innerHTML = origHtml;

  /* 4. Si tiene foto: muestra modal interactivo para descargar la foto o abrir WhatsApp */
  if (p.foto && !p.video) {
    showPostShareModal(p, fileToShare, fullText);
    return;
  }

  /* 5. Apertura directa en WhatsApp (para publicaciones solo de texto o enlaces a video) */
  const isCloud = p.video && String(p.video).startsWith('juma-vid:');
  const videoAbsUrl = p.video ? (isCloud ? (location.origin + location.pathname + '#novedades') : new URL(p.video, location.href).href) : location.href;
  const waMsg = fullText + (p.video ? '\n\n🎥 Ver video aquí: ' + videoAbsUrl : '');
  if (btnEl) {
    btnEl.innerHTML = '<span>✔ Abriendo WhatsApp…</span>';
    setTimeout(() => { btnEl.innerHTML = origHtml; }, 2200);
  }
  window.open('https://wa.me/?text=' + encodeURIComponent(waMsg), '_blank', 'noopener');
}

/* Noticias: se ven 3 y «Cargar más noticias» muestra 3 más (las demás ya están en la página, solo ocultas) */
let postsVisibles = 3;
function aplicarPaginaNoticias(enfocar) {
  const arts = $$('#posts > .post');
  arts.forEach((a, i) => a.classList.toggle('hide', i >= postsVisibles));
  let box = $('#posts-more');
  const posts = $('#posts');
  if (!box && posts) { box = document.createElement('div'); box.id = 'posts-more'; box.className = 'list-more'; posts.insertAdjacentElement('afterend', box); }
  if (!box) return;
  const quedan = arts.length - postsVisibles;
  box.innerHTML = quedan > 0 ? `<button type="button" class="btn btn-ghost" data-more-posts>${ic('down')}Cargar más noticias <small style="font-weight:400;color:var(--muted)">(${quedan} más)</small></button>` : '';
  if (enfocar) {
    const nuevo = arts[postsVisibles - 3];
    if (nuevo) { const t = nuevo.querySelector('.post-lead'); if (t) { t.setAttribute('tabindex', '-1'); try { t.focus({ preventScroll: true }); } catch (e) {} } nuevo.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); }
  }
}
function renderPosts() {
  const list = getPostsList();
  preloadPostMediaFiles(list);
  $('#novedades').classList.toggle('hide', !list.length);
  const navNov = $('#nav-nov'); if (navNov) navNov.classList.toggle('hide', !list.length);
  $('#posts').innerHTML = list.map((p, idx) => {
    const hasMore = !!String(p.x || '').trim();
    return `<article class="post">
      ${mediaHtml(p, idx)}
      <div class="post-body">
        ${p.fecha ? `<time>${ic('calendar')} ${esc(fmtF(p.fecha))}</time>` : ''}
        <p class="post-lead">${esc(p.t)}</p>
        ${hasMore ? `<div class="post-more-wrap">
          <button type="button" class="post-more-btn" data-toggle-post-more="${idx}" aria-expanded="false">Ver más ▾</button>
          <div class="post-more-txt hide" id="post-more-${idx}">${esc(p.x)}</div>
        </div>` : ''}
        <div class="post-actions">
          <button type="button" class="btn-wa-share" data-share-post="${idx}">
            ${ic('share')}<span>Compartir por WhatsApp</span>
          </button>
        </div>
      </div>
    </article>`;
  }).join('');
  aplicarPaginaNoticias(false);
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
  paginarGaleria(false);
}
/* Galería: se ven 9 fotos y «Cargar más fotos» muestra 9 más (las ocultas desde el editor no cuentan) */
let fotosVisibles = 9;
function paginarGaleria(enfocar) {
  const box = $('#galeria .gallery'); if (!box) return;
  const figs = $$('figure.gal', box).filter((f) => f.style.display !== 'none');
  figs.forEach((f, i) => f.classList.toggle('gal-mas', i >= fotosVisibles));
  let more = $('#gal-more');
  if (!more) { more = document.createElement('div'); more.id = 'gal-more'; more.className = 'list-more'; box.insertAdjacentElement('afterend', more); }
  const quedan = figs.length - fotosVisibles;
  more.innerHTML = quedan > 0 ? `<button type="button" class="btn btn-ghost" data-more-gal>${ic('image')}Cargar más fotos <small style="font-weight:400;color:var(--muted)">(${quedan} más)</small></button>` : '';
  if (enfocar) { const f = figs[fotosVisibles - 9]; if (f) f.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' }); if (unrollCheck) unrollCheck(); }
}

/* ===================== desenrollar al entrar en pantalla ===================== */
function setupUnroll() {
  try {
    const root = $('#root');
    if (reduced()) return;
    const els = $$('[data-unroll]');
    root.setAttribute('data-motion', '1');
    /* Una foto dentro de un bloque todavía escondido (inicio con «Cargar más») tiene medidas en cero: se desenrolla cuando aparece */
    const visible = (el) => el.getClientRects().length > 0;
    const check = () => {
      const h = window.innerHeight || 800;
      els.forEach((el) => { if (el.hasAttribute('data-in') || !visible(el)) return; const r = el.getBoundingClientRect(); if (r.top < h * 0.92 && r.bottom > 0) el.setAttribute('data-in', '1'); });
    };
    let tick = 0;
    const on = () => { if (!tick) tick = requestAnimationFrame(() => { tick = 0; check(); }); };
    window.addEventListener('scroll', on, { passive: true, capture: true }); window.addEventListener('resize', on);
    unrollCheck = on;
    check(); setTimeout(check, 400); setTimeout(check, 1200);
    /* Respaldo: si algo visible no llegó a desenrollarse (por ejemplo, sin desplazamiento), se muestra igual */
    const resp = setInterval(() => {
      els.forEach((el) => { if (!el.hasAttribute('data-in') && visible(el)) { const r = el.getBoundingClientRect(); if (r.bottom < (window.innerHeight || 800) * 1.5) el.setAttribute('data-in', '1'); } });
      if (els.every((el) => el.hasAttribute('data-in'))) clearInterval(resp);
    }, 2500);
  } catch (e) {}
}

/* ===================== ventanas ===================== */
const modalRoot = $('#modal-root');
let modalKey = null;
function lock(on) {
  document.documentElement.style.overflow = on ? 'hidden' : '';
  document.body.style.overflow = on ? 'hidden' : '';
}
let closeTimer = 0;
let focoAntesModal = null;
function openModal(html, onKey) {
  /* Si una ventana se estaba cerrando, se cancela ese cierre para no borrar la ventana nueva */
  clearTimeout(closeTimer); closeTimer = 0;
  /* Al cerrar, el foco vuelve al botón que abrió la primera ventana */
  if (!modalRoot.firstChild && document.activeElement && !modalRoot.contains(document.activeElement)) focoAntesModal = document.activeElement;
  modalRoot.innerHTML = html; lock(true); modalKey = onKey || null;
  setTimeout(() => { const f = modalRoot.querySelector('input,textarea'); if (f) f.focus(); }, 260);
}
function closeModal() {
  if (modalKey === 'force-photo') return;
  if (typeof form !== 'undefined' && form.sending) return;
  if (typeof stopQrCamera === 'function') stopQrCamera();
  if (typeof stopSelfieCamera === 'function') stopSelfieCamera();
  const ov = $('.overlay', modalRoot);
  const done = () => {
    closeTimer = 0; modalRoot.innerHTML = ''; lock(false); modalKey = null;
    const f = focoAntesModal; focoAntesModal = null;
    if (f && document.contains(f) && f.offsetParent !== null) { try { f.focus({ preventScroll: true }); } catch (e) {} }
  };
  clearTimeout(closeTimer);
  if (!ov || reduced()) return done();
  ov.classList.add('is-out'); closeTimer = setTimeout(done, 180);
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalRoot.firstChild && modalKey !== 'force-photo') closeModal(); });
modalRoot.addEventListener('click', (e) => {
  if (modalKey === 'force-photo') return;
  if (e.target.closest('[data-close]') || e.target.classList.contains('overlay') || e.target === modalRoot) closeModal();
});
let touchModalStartY = 0;
modalRoot.addEventListener('touchstart', (e) => {
  const head = e.target.closest('.sheet-head, .chat-top, .notif-head');
  if (head && e.touches && e.touches[0]) {
    touchModalStartY = e.touches[0].clientY;
  } else {
    touchModalStartY = 0;
  }
}, { passive: true });
modalRoot.addEventListener('touchend', (e) => {
  if (touchModalStartY > 0 && e.changedTouches && e.changedTouches[0]) {
    const diffY = e.changedTouches[0].clientY - touchModalStartY;
    if (diffY > 60 && modalRoot.firstChild && modalKey !== 'force-photo') {
      closeModal();
    }
  }
  touchModalStartY = 0;
}, { passive: true });
const closeBtn = '<button type="button" class="btn btn-soft btn-sm" data-close aria-label="Cerrar ventana" style="min-height:44px;min-width:44px;padding:0;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;border:1.5px solid rgba(255,255,255,.35);background:rgba(255,255,255,.14);color:#fff;cursor:pointer;flex:0 0 auto">' + ic('x') + '</button>';
const sheetHead = (kicker, title, id) => `<div class="sheet-head"><div class="ribbon" aria-hidden="true" style="position:absolute;top:0;left:0;right:0"></div><div style="display:flex;align-items:center;gap:16px"><div style="flex:1 1 auto;min-width:0"><div style="font-size:13px;color:var(--muted-lt)">${esc(kicker)}</div><h2 id="${id}" class="h-display" style="margin-top:4px;font-size:clamp(28px,4vw,38px)">${esc(title)}</h2></div>${closeBtn}</div></div>`;
const sheetHeadNoClose = (kicker, title, id) => `<div class="sheet-head"><div class="ribbon" aria-hidden="true" style="position:absolute;top:0;left:0;right:0"></div><div style="display:flex;align-items:center;gap:16px"><div style="flex:1 1 auto;min-width:0"><div style="font-size:13px;color:var(--muted-lt)">${esc(kicker)}</div><h2 id="${id}" class="h-display" style="margin-top:4px;font-size:clamp(28px,4vw,38px)">${esc(title)}</h2></div></div></div>`;

/* ===================== estado de usuario, registro y planilla ===================== */
let currentUser = null;   // usuario real de Firebase Auth (lo único que da acceso)
let myProfile = null;     // perfil (inscripciones/{uid}) del usuario con sesión; el navegador solo lo guarda como copia para mostrarlo rápido
let perfilEnNube = false; // true cuando el perfil existe en Firestore en inscripciones/{uid}
let allInscripciones = []; // planillas completas: SOLO se cargan para coordinadores y la cuenta maestra
let miembros = [];        // directorio mínimo (miembros/{uid}) visible para miembros con sesión
/* Limpieza: versiones anteriores guardaban en cada teléfono las planillas y los chats de TODOS
   (datos personales y mensajes privados) y banderas que daban permisos sin iniciar sesión. */
try {
  ['juma-inscripciones-local', 'juma-chat-cache', 'juma-ultimo-perfil', 'juma-master-device', 'juma-custom-master'].forEach((k) => localStorage.removeItem(k));
} catch (e) {}
let allMensajes = [];
let insQuery = '';
let authTab = 'user'; // 'user' | 'master'
let authErr = '', authOk = '', authBusy = false;
let authEmailPrev = ''; // conserva el correo escrito si hay que repetir el intento

const form = { step: 1, d: {}, consent: false, done: false, err: '', isUpdate: false };
const FLD = {
  1: [['nombres','Nombres *','text','given-name'],['apellidos','Apellidos *','text','family-name'],['cedula','Cédula de identidad (para tu carnet)','text','','','Ej.: 28.429.102'],['nac','Fecha de nacimiento','date','bday'],['@edad'],['celular','Celular *','tel','tel'],['madre','Nombre de la madre'],['padre','Nombre del padre'],['hermano','Hermano/a'],['ocupacion','Ocupación'],['direccion','Dirección','text','street-address','w'],['parroquia','Parroquia','text','','w']],
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
    ['Nombre', ((d.nombres || '') + ' ' + (d.apellidos || '')).trim()], ['Cédula', d.cedula], ['Sexo', d.sexo], ['Fecha de nacimiento', d.nac ? d.nac.split('-').reverse().join('/') : ''], ['Edad', e ? e + ' años' : ''],
    ['Celular', d.celular], ['Correo', d.correo], ['Madre', d.madre], ['Padre', d.padre], ['Hermano/a', d.hermano], ['Ocupación', d.ocupacion], ['Dirección', d.direccion], ['Parroquia', d.parroquia],
    ['Representante', d.repNombre], ['Cédula del representante', d.repCedula], ['Celular del representante', d.repCelular], ['Ocupación del representante', d.repOcupacion],
    ['Grupo sanguíneo', d.sangre], ['Enfermedad', d.enf ? (d.enf === 'Sí' ? 'Sí: ' + (d.enfCual || 'sin especificar') : 'No') : ''], ['Medicamento', d.med ? (d.med === 'Sí' ? 'Sí: ' + (d.medCual || 'sin especificar') : 'No') : ''],
    ['Alergia a medicamentos', d.alMed], ['Alergia a alimentos', d.alAli], ['Otras alergias', d.alOtros], ['Observaciones', d.obs]
  ].filter((r) => r[1]);
}
function validate(st) {
  const d = form.d;
  if (d.tipoRegistro === 'visitante') {
    if (!d.foto || !String(d.foto).trim()) return '⚠️ La foto de perfil es obligatoria para tu identificación en la comunidad JUMA. Tómate una foto o sube una de tu galería.';
    if (!(d.nombres || '').trim() || !(d.apellidos || '').trim()) return 'Escribe tus nombres y apellidos completos.';
    if (!(d.cedula || '').trim()) return 'Escribe tu número de cédula de identidad.';
    if (!(d.correo || '').trim() && !(d.celular || '').trim()) return 'Escribe tu correo electrónico o celular de contacto.';
    if (!currentUser && !form.isUpdate && d.correo && String(d.password || '').length < 6) return 'Crea una contraseña de al menos 6 caracteres para tu acceso.';
    return '';
  }
  if (st === 1) {
    if (!d.foto || !String(d.foto).trim()) return '⚠️ La foto de perfil es obligatoria para generar tu carnet misionero. Tómate una foto o elige una de tu galería para continuar.';
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
  try {
    if (typeof createImageBitmap === 'function') {
      const bmp = await createImageBitmap(file);
      const s = Math.min(bmp.width, bmp.height);
      const sx = Math.round((bmp.width - s) / 2), sy = Math.round((bmp.height - s) / 2);
      const cv = document.createElement('canvas'); cv.width = 500; cv.height = 500;
      cv.getContext('2d').drawImage(bmp, sx, sy, s, s, 0, 0, 500, 500);
      return cv.toDataURL('image/jpeg', 0.86);
    }
  } catch (e) {}
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(img.naturalWidth || img.width, img.naturalHeight || img.height);
        const sx = Math.round(((img.naturalWidth || img.width) - s) / 2);
        const sy = Math.round(((img.naturalHeight || img.height) - s) / 2);
        const cv = document.createElement('canvas'); cv.width = 500; cv.height = 500;
        cv.getContext('2d').drawImage(img, sx, sy, s, s, 0, 0, 500, 500);
        resolve(cv.toDataURL('image/jpeg', 0.86));
      };
      img.onerror = () => resolve(reader.result);
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ===================== Cámara en vivo para foto de perfil y Alerta Obligatoria (Lismar y Juli) ===================== */
let selfieStream = null;
let selfieFacing = 'user';
let selfieTarget = ''; // 'form' | 'force' | 'auth'
let forcePhotoTemp = '';
let forceCedulaTemp = '';
let forceSexoTemp = '';
let forceSaving = false;
let forceErr = '';

function stopSelfieCamera() {
  if (selfieStream) {
    try { selfieStream.getTracks().forEach((t) => t.stop()); } catch (e) {}
    selfieStream = null;
  }
  selfieTarget = '';
}

async function startSelfieCamera(target = 'form', flip = false) {
  if (flip) selfieFacing = selfieFacing === 'user' ? 'environment' : 'user';
  else selfieFacing = 'user';
  if (selfieStream) {
    try { selfieStream.getTracks().forEach((t) => t.stop()); } catch (e) {}
    selfieStream = null;
  }
  selfieTarget = target;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    selfieTarget = '';
    const camIn = document.getElementById(target === 'force' ? 'fp-cam-in' : (target === 'auth' ? 'au-cam-in' : 'f-avatar-cam'));
    if (camIn) camIn.click();
    return;
  }
  try {
    selfieStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: selfieFacing }, width: { ideal: 720 }, height: { ideal: 720 } },
      audio: false
    });
    if (target === 'force') repaintForcePhoto();
    else if (target === 'auth') repaintAuth();
    else repaintForm();
    const v = document.getElementById('selfie-live-video');
    if (v) {
      v.srcObject = selfieStream;
      await v.play().catch(() => {});
    }
  } catch (err) {
    stopSelfieCamera();
    const camIn = document.getElementById(target === 'force' ? 'fp-cam-in' : (target === 'auth' ? 'au-cam-in' : 'f-avatar-cam'));
    if (camIn) camIn.click();
  }
}

async function captureSelfieFromVideo() {
  const v = document.getElementById('selfie-live-video');
  const target = selfieTarget || 'form';
  if (!v || !v.videoWidth) return;
  const s = Math.min(v.videoWidth, v.videoHeight);
  const sx = Math.round((v.videoWidth - s) / 2);
  const sy = Math.round((v.videoHeight - s) / 2);
  const cv = document.createElement('canvas');
  cv.width = 420;
  cv.height = 420;
  const ctx = cv.getContext('2d');
  if (selfieFacing === 'user') {
    ctx.translate(420, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(v, sx, sy, s, s, 0, 0, 420, 420);
  const dataUrl = cv.toDataURL('image/jpeg', 0.85);
  stopSelfieCamera();
  if (target === 'force') {
    forcePhotoTemp = dataUrl;
    forceErr = '';
    repaintForcePhoto();
  } else if (target === 'auth') {
    await cambiarFotoPerfil(() => dataUrl);
  } else {
    form.d.foto = dataUrl;
    form.err = '';
    repaintForm();
  }
}

function selfieBoxHtml(target) {
  if (selfieTarget !== target || !selfieStream) return '';
  return `<div style="width:100%;margin-top:12px;padding:14px;border-radius:14px;background:#061536;color:#fff;text-align:center">
    <div style="width:210px;height:210px;margin:0 auto 12px;border-radius:50%;overflow:hidden;border:3.5px solid var(--sky);background:#000;position:relative">
      <video id="selfie-live-video" autoplay playsinline muted style="width:100%;height:100%;object-fit:cover;${selfieFacing === 'user' ? 'transform:scaleX(-1)' : ''}"></video>
    </div>
    <p style="margin:0 0 10px;font-size:13px;color:#CFE2FF">Ubica tu rostro en el círculo y pulsa «Capturar foto»</p>
    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px">
      <button type="button" class="btn btn-white btn-sm" data-capture-selfie style="min-height:40px;padding:0 16px">${ic('camera')}Capturar foto</button>
      <button type="button" class="btn btn-sm" data-flip-selfie="${esc(target)}" style="min-height:38px;padding:0 12px;background:rgba(255,255,255,.16);color:#fff;border:1.5px solid rgba(255,255,255,.45)">${ic('back')}Voltear cámara</button>
      <button type="button" class="btn btn-danger btn-sm" data-cancel-selfie style="min-height:38px;padding:0 12px">Cancelar</button>
    </div>
  </div>`;
}

async function saveNewProfilePhoto(url, extraFields = {}) {
  if (!currentUser) { authErr = 'Inicia sesión para guardar tu foto de perfil.'; openAuthModal(); return 'error'; }
  let resultado = 'ok';
  const esNuevo = !myProfile || !perfilEnNube;
  if (!myProfile) {
    const email = String(currentUser.email || '').trim().toLowerCase();
    const uidNew = currentUser.uid;
    myProfile = { id: uidNew, uid: uidNew, correo: email, nombre: currentUser.displayName || 'Joven Misionero', foto: url, datos: { correo: email, foto: url } };
  } else {
    myProfile.foto = url;
    myProfile.datos = myProfile.datos || {};
    myProfile.datos.foto = url;
  }
  if (extraFields.cedula) {
    myProfile.cedula = extraFields.cedula;
    myProfile.datos.cedula = extraFields.cedula;
  }
  if (extraFields.sexo) {
    myProfile.sexo = extraFields.sexo;
    myProfile.datos.sexo = extraFields.sexo;
  }
  myProfile.fotoCarnetOk = true;
  myProfile.actualizado = new Date().toISOString();
  const uid = currentUser.uid;
  myProfile.uid = uid;
  if (!myProfile.id) myProfile.id = uid;
  guardarPerfilLocal();
  const ix = allInscripciones.findIndex((x) => x && (x.id === uid || x.uid === uid));
  if (ix >= 0) allInscripciones[ix] = Object.assign({}, allInscripciones[ix], { foto: url, datos: myProfile.datos });
  if (fb && fb.db) {
    /* Se actualizan solo estos campos (merge). Si el perfil aún no existe en la nube se crea como participante. */
    const campos = { foto: url, fotoCarnetOk: true, datos: myProfile.datos, actualizado: myProfile.actualizado };
    if (extraFields.cedula) campos.cedula = extraFields.cedula;
    if (extraFields.sexo) campos.sexo = extraFields.sexo;
    if (esNuevo) Object.assign(campos, { id: uid, uid, correo: myProfile.correo || '', nombre: myProfile.nombre || '', rol: 'participante', tipoRegistro: 'participante' });
    try {
      await withTimeout(fb.setDoc(fb.doc(fb.db, 'inscripciones', uid), campos, { merge: true }), 4500);
      perfilEnNube = true;
      upsertMiembro();
      if (esNuevo) iniciarEscuchasDeMiembro();
    } catch (e) { resultado = e && e.message === 'timeout' ? 'lento' : 'error'; }
  } else resultado = 'error';
  updateAuthUI();
  return resultado;
}

/* Copia del perfil propio en este teléfono (solo para mostrar nombre y foto al instante). */
function guardarPerfilLocal() {
  if (!currentUser || !myProfile) return;
  try { localStorage.setItem('juma-perfil-' + currentUser.uid, JSON.stringify(myProfile)); } catch (e) {}
}
function leerPerfilLocal(uid) {
  try { const s = localStorage.getItem('juma-perfil-' + uid); return s ? JSON.parse(s) : null; } catch (e) { return null; }
}

function needsMandatoryPhoto(rec) {
  if (!rec) return false;
  const isGoogle = currentUser && currentUser.providerData && currentUser.providerData.some((p) => p.providerId === 'google.com');
  if (isGoogle) return false;
  const foto = (rec && (rec.foto || (rec.datos && rec.datos.foto))) || '';
  return !foto || !String(foto).trim();
}

function forcePhotoModalHtml() {
  const d = (myProfile && myProfile.datos) || {};
  const nombre = (myProfile && myProfile.nombre) || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Misionero(a)';
  const primerNombre = nombre.split(/\s+/)[0] || 'Misionero(a)';
  const previewFoto = forcePhotoTemp || (myProfile && (myProfile.foto || d.foto)) || '';
  const curSexo = forceSexoTemp || d.sexo || detectGender(myProfile);
  const curCed = forceCedulaTemp || d.cedula || '';
  const tempRec = Object.assign({}, myProfile || {}, {
    foto: previewFoto,
    datos: Object.assign({}, d, { foto: previewFoto, cedula: curCed, sexo: curSexo })
  });
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="fp-t"><div class="sheet" style="max-width:620px">${sheetHead('Carnet Misionero · JUMA Duaca', 'Foto para tu Carnet Misionero', 'fp-t')}<div style="padding:clamp(22px,4vw,36px)">
    <div style="padding:16px 18px;border-radius:14px;background:#FFF8E1;border:2px solid #F5C518;color:#5C4300;margin-bottom:20px;line-height:1.55;font-size:15px">
      <b style="display:block;font-size:16.5px;color:#7A5200;margin-bottom:4px">⚠️ ¡Hola, ${esc(primerNombre)}! Falta tu foto de perfil para tu Carnet</b>
      Como ya estás registrada en <b>JUMA Duaca</b>, necesitamos tu foto de perfil para generar tu <b>Carnet Misionero Digital con Código QR</b>.<br>
      <b>Para poder continuar usando la aplicación, tómate una foto ahora o súbela desde tu galería.</b>
    </div>

    <div style="padding:18px;border-radius:16px;background:#fff;border:1.5px solid var(--royal);margin-bottom:18px">
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px">
        <div style="width:92px;height:92px;border-radius:50%;background:var(--mist);border:3px solid var(--royal);overflow:hidden;display:flex;align-items:center;justify-content:center;flex:0 0 auto;margin:0 auto">
          ${previewFoto ? `<img src="${esc(previewFoto)}" alt="Vista previa" style="width:100%;height:100%;object-fit:cover">` : `<span style="color:var(--royal)">${ic('camera', 'ic-xl')}</span>`}
        </div>
        <div style="flex:1 1 220px">
          <b style="display:block;font-size:16px;color:var(--ink)">1. Coloca tu foto de perfil *</b>
          <p style="margin:4px 0 12px;font-size:13.5px;color:var(--muted)">Elige una foto donde se vea bien tu rostro para tu carnet de JUMA.</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <button type="button" class="btn btn-blue btn-sm" data-start-selfie="force" style="min-height:40px;padding:0 14px">${ic('camera')}Tomarme una foto</button>
            <label class="btn btn-soft btn-sm" style="min-height:40px;padding:0 14px;cursor:pointer;margin:0">${ic('image')}<span>Elegir de la galería</span><input type="file" accept="image/*" id="fp-gal-in" style="display:none"></label>
            <input type="file" accept="image/*" capture="user" id="fp-cam-in" style="display:none">
          </div>
        </div>
      </div>
      ${selfieBoxHtml('force')}
      <div style="display:flex;flex-wrap:wrap;gap:14px;margin-top:16px;padding-top:14px;border-top:1px solid var(--line)">
        <div class="fld" style="flex:1 1 180px">
          <label for="fp-cedula">Cédula de identidad (para tu carnet)</label>
          <input id="fp-cedula" type="text" value="${esc(curCed)}" placeholder="Ej.: 30.123.456">
        </div>
        <div class="fld" style="flex:1 1 180px">
          <span class="flabel">Diseño de carnet</span>
          <div style="display:flex;gap:8px">
            <button type="button" class="chip" data-fp-sexo="Mujer" aria-pressed="${curSexo === 'Mujer'}" style="flex:1;min-height:44px;border:2px solid ${curSexo === 'Mujer' ? '#2452C8' : '#B9C8E4'};background:${curSexo === 'Mujer' ? '#2452C8' : '#fff'};color:${curSexo === 'Mujer' ? '#fff' : '#0A1B3F'}">👧 Mujer</button>
            <button type="button" class="chip" data-fp-sexo="Hombre" aria-pressed="${curSexo === 'Hombre'}" style="flex:1;min-height:44px;border:2px solid ${curSexo === 'Hombre' ? '#2452C8' : '#B9C8E4'};background:${curSexo === 'Hombre' ? '#2452C8' : '#fff'};color:${curSexo === 'Hombre' ? '#fff' : '#0A1B3F'}">👦 Hombre</button>
          </div>
        </div>
      </div>
    </div>

    ${previewFoto ? `<div style="margin-bottom:18px;padding:16px;border-radius:16px;background:#F2F7FF;border:1.5px solid #B9C8E4;text-align:center">
      <b style="display:flex;align-items:center;gap:6px;font-size:14.5px;color:var(--navy);margin-bottom:10px">${ic('idcard')}Así quedará tu Carnet Misionero JUMA:</b>
      ${carnetCardOnlyHtml(tempRec)}
    </div>` : ''}

    ${forceErr ? `<p role="alert" style="margin:0 0 14px;padding:12px 16px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:14.5px;font-weight:700">${esc(forceErr)}</p>` : ''}

    <button type="button" class="btn btn-blue" data-save-force-photo ${!previewFoto || forceSaving ? 'disabled' : ''} style="width:100%;min-height:52px;font-size:16px;opacity:${previewFoto ? '1' : '.55'}">
      ${forceSaving ? '⏳ Guardando tu foto y generando tu carnet…' : (previewFoto ? ic('check') + 'Guardar mi foto y continuar a la App' : ic('lock') + 'Coloca tu foto arriba para desbloquear la App')}
    </button>
  </div></div></div>`;
}

function openForcePhotoModal() {
  const d = (myProfile && myProfile.datos) || {};
  forcePhotoTemp = (myProfile && (myProfile.foto || d.foto)) || '';
  forceCedulaTemp = d.cedula || '';
  forceSexoTemp = d.sexo || detectGender(myProfile);
  forceErr = '';
  forceSaving = false;
  openModal(forcePhotoModalHtml(), 'force-photo');
}
function repaintForcePhoto() {
  if (modalKey !== 'force-photo') return;
  modalRoot.innerHTML = forcePhotoModalHtml();
  const ov = $('.overlay', modalRoot);
  if (ov) { ov.style.animation = 'none'; const sh = $('.sheet', modalRoot); if (sh) sh.style.animation = 'none'; }
}
function checkMandatoryPhotoGate() {
  if (needsMandatoryPhoto(myProfile)) {
    if (modalKey !== 'force-photo') openForcePhotoModal();
    return true;
  }
  return false;
}

/* ===================== Generador de Carnet Misionero y Mockup (Hombre / Mujer) ===================== */
let carnetViewMode = 'carnet'; // 'carnet' | 'mockup'
let carnetGenderOverride = ''; // '' | 'Hombre' | 'Mujer'
const generatedMockups = new Set();
const mockupGenderMap = new Map();

function detectGender(rec) {
  const d = (rec && rec.datos) || {};
  const explicit = String(rec?.sexo || d.sexo || '').trim().toLowerCase();
  if (explicit === 'mujer' || explicit === 'femenino' || explicit === 'f') return 'Mujer';
  if (explicit === 'hombre' || explicit === 'masculino' || explicit === 'm') return 'Hombre';
  const full = String(rec?.nombre || d.nombres || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const first = full.split(/\s+/)[0] || '';
  const femNames = ['juli', 'julieth', 'lismar', 'clara', 'maria', 'ana', 'carmen', 'luisa', 'valeria', 'sofia', 'gabriela', 'daniela', 'paola', 'andrea', 'genesis', 'mariana', 'camila', 'isabella', 'alejandra', 'fernanda', 'victoria', 'natalia', 'veronica', 'karen', 'laura', 'rosa', 'elena', 'patricia', 'carolina', 'estefania', 'oriadna', 'yulimar', 'anyeli', 'leidymar', 'milagros', 'valentina', 'lucia', 'paula', 'sara', 'nicole', 'genesis', 'barbara', 'genesis', 'karla', 'fabiana', 'mariangel', 'mariangela', 'mariale', 'genesis'];
  const mascNames = ['jesus', 'angel', 'gabriel', 'carlos', 'jose', 'juan', 'luis', 'pedro', 'miguel', 'alejandro', 'daniel', 'david', 'rafael', 'andres', 'diego', 'santiago', 'samuel', 'leonardo', 'manuel', 'francisco', 'antonio', 'jorge', 'ricardo', 'eduardo', 'fernando', 'roberto', 'moises', 'elias', 'matias', 'sebastian', 'nicolas', 'adrian', 'victor', 'hector', 'oscar', 'cesar', 'julio', 'marco', 'marcos', 'pablo', 'sergio'];
  if (femNames.includes(first)) return 'Mujer';
  if (mascNames.includes(first)) return 'Hombre';
  if (first.endsWith('a') && first !== 'luca' && first !== 'josua') return 'Mujer';
  return 'Hombre';
}

function formatCedula(raw) {
  const clean = String(raw || '').trim();
  if (!clean) return '';
  const digits = clean.replace(/\D/g, '');
  if (digits.length >= 6 && digits.length <= 10) {
    return 'C.I. ' + digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return /^c\.?i\.?/i.test(clean) ? clean.toUpperCase() : ('C.I. ' + clean);
}

function getCarnetDisplayData(rec) {
  const d = (rec && rec.datos) || {};
  const fullNom = String(rec?.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'JOVEN MISIONERO').trim();
  const parts = fullNom.split(/\s+/).filter(Boolean);
  let shortNom = fullNom;
  if (parts.length >= 4) shortNom = parts[0] + ' ' + parts[2];
  else if (parts.length === 3) shortNom = parts[0] + ' ' + parts[1];
  const rol = userRole(rec);
  const gender = detectGender(rec);
  const rolUpper = rol === 'coordinador' ? (gender === 'Mujer' ? 'COORDINADORA' : 'COORDINADOR') : (rol === 'asesor' ? (gender === 'Mujer' ? 'ASESORA' : 'ASESOR') : 'PARTICIPANTE');
  const cedulaTxt = formatCedula(rec?.cedula || d.cedula || '');
  const subTxt = cedulaTxt || (d.parroquia ? d.parroquia.toUpperCase() : 'JUMA DUACA');
  const foto = (rec && (rec.foto || d.foto)) || '';
  const qrPayload = qrPayloadFor(rec || {});
  const qrUrl = qrImgUrl(qrPayload, 260);
  return { fullNom, shortNom: shortNom.toUpperCase(), rolUpper, cedulaTxt, subTxt, foto, qrPayload, qrUrl, gender };
}

function carnetCardOnlyHtml(rec, compact = false) {
  const info = getCarnetDisplayData(rec);
  return `<div class="j-carnet" style="${compact ? 'max-width:100%;width:100%;height:100%;border-radius:6px;box-shadow:none' : ''}">
    <div class="ribbon" style="position:absolute;top:0;left:0;right:0;height:${compact ? '3px' : '5px'};z-index:3"></div>
    <img class="j-carnet-wm" src="img/logo.png" alt="" aria-hidden="true">
    <div class="j-carnet-top" style="${compact ? 'padding:6% 5% 1%' : ''}">
      <img class="j-carnet-logo" src="img/logo.png" alt="JUMA" style="${compact ? 'width:40%' : ''}">
    </div>
    <div class="j-carnet-pic" style="${compact ? 'width:46%;border-width:2px;margin-top:2%' : ''}">
      ${info.foto ? `<img src="${esc(info.foto)}" alt="${esc(info.fullNom)}">` : `<span style="font-size:${compact ? '18px' : '42px'};font-weight:900;color:var(--royal)">${esc(info.shortNom.charAt(0))}</span>`}
    </div>
    <div class="j-carnet-info" style="${compact ? 'padding:3% 4% 1%;gap:0' : ''}">
      <span class="j-carnet-rol" style="${compact ? 'font-size:5.2px;letter-spacing:.08em' : ''}">${esc(info.rolUpper)}</span>
      <b class="j-carnet-nom" style="${compact ? 'font-size:9px;margin-top:1px' : ''}">${esc(info.shortNom)}</b>
      <span class="j-carnet-ci" style="${compact ? 'font-size:6px;margin-top:1px' : ''}">${esc(info.subTxt)}</span>
    </div>
    <div class="j-carnet-foot" style="${compact ? 'padding:7% 6% 5%;gap:5px;border-top-left-radius:50% 10px;border-top-right-radius:50% 10px' : ''}">
      <div class="j-carnet-qr" style="${compact ? 'width:26px;height:26px;padding:1.5px;border-radius:4px' : ''}">
        <img src="${esc(info.qrUrl)}" alt="QR">
      </div>
      <div class="j-carnet-ftxt">
        <b style="${compact ? 'font-size:5px;letter-spacing:.03em' : ''}">FAMILIA CONSOLATA</b>
        <span style="${compact ? 'font-size:4.5px;margin-top:1px' : ''}">- VENEZUELA -</span>
        ${!compact ? `<span style="font-size:9.5px;color:#8EC9FF;margin-top:2px">JUMA DUACA</span>` : ''}
      </div>
    </div>
  </div>`;
}

function carnetMockupHtml(rec, forcedGender) {
  const info = getCarnetDisplayData(rec);
  const g = forcedGender || carnetGenderOverride || info.gender;
  const isMujer = g === 'Mujer';
  const bgSrc = isMujer ? 'img/mockup-mujer.jpg' : 'img/mockup-hombre.jpg';
  const slotStyle = isMujer
    ? 'left:42.22%;top:54.88%;width:17.08%;height:21.63%'
    : 'left:42.36%;top:54.25%;width:16.94%;height:18.78%';
  return `<div class="j-mockup-wrap">
    <img class="j-mockup-bg" src="${bgSrc}" alt="Mockup de Carnet JUMA (${esc(g)})">
    <div class="j-mockup-slot" style="${slotStyle}">
      ${carnetCardOnlyHtml(rec, true)}
      <div class="j-mockup-gloss"></div>
    </div>
  </div>`;
}

const mockupPreviewDataUrlMap = new Map();

async function generateMockupDataUrl(rec, forcedGender) {
  const targetRec = rec || myProfile || { datos: form.d, foto: form.d.foto };
  const info = getCarnetDisplayData(targetRec);
  const uid = String((targetRec && (targetRec.id || targetRec.uid)) || 'me');
  const g = forcedGender || mockupGenderMap.get(uid) || carnetGenderOverride || info.gender;
  const cacheKey = `${uid}__${g}`;
  if (mockupPreviewDataUrlMap.has(cacheKey)) {
    return mockupPreviewDataUrlMap.get(cacheKey);
  }
  try {
    const isMujer = g === 'Mujer';
    const bgImg = await loadImageSafe(isMujer ? 'img/mockup-mujer.jpg' : 'img/mockup-hombre.jpg');
    const carnetCv = await renderCarnetToCanvas(targetRec);
    if (bgImg && carnetCv) {
      const mCv = document.createElement('canvas');
      mCv.width = bgImg.width;
      mCv.height = bgImg.height;
      const mCtx = mCv.getContext('2d');
      mCtx.drawImage(bgImg, 0, 0);

      const bx = Math.round(bgImg.width * (isMujer ? 0.4222 : 0.4236));
      const by = Math.round(bgImg.height * (isMujer ? 0.5488 : 0.5425));
      const bw = Math.round(bgImg.width * (isMujer ? 0.1708 : 0.1694));
      const bh = Math.round(bgImg.height * (isMujer ? 0.2163 : 0.1878));

      mCtx.save();
      roundRectPath(mCtx, bx, by, bw, bh, 10);
      mCtx.clip();
      mCtx.drawImage(carnetCv, bx, by, bw, bh);
      const gloss = mCtx.createLinearGradient(bx, by, bx + bw, by + bh);
      gloss.addColorStop(0, 'rgba(255,255,255,0.22)');
      gloss.addColorStop(0.45, 'rgba(255,255,255,0)');
      gloss.addColorStop(1, 'rgba(255,255,255,0.08)');
      mCtx.fillStyle = gloss;
      mCtx.fillRect(bx, by, bw, bh);
      mCtx.restore();

      const dataUrl = mCv.toDataURL('image/png');
      mockupPreviewDataUrlMap.set(cacheKey, dataUrl);
      return dataUrl;
    }
  } catch (e) {
    console.warn('Error generando imagen de mockup', e);
  }
  return null;
}

function carnetInteractiveSectionHtml(rec, contextKey = 'profile') {
  const info = getCarnetDisplayData(rec);
  const uid = String((rec && (rec.id || rec.uid)) || 'me');
  const g = mockupGenderMap.get(uid) || carnetGenderOverride || info.gender;
  const isMockupReady = generatedMockups.has(uid);
  const cacheKey = `${uid}__${g}`;
  const previewDataUrl = mockupPreviewDataUrlMap.get(cacheKey);

  return `<div style="padding:18px;margin-bottom:6px;border-radius:18px;background:linear-gradient(180deg,#F2F7FF 0%,#FFFFFF 100%);border:2px solid var(--royal);box-shadow:0 10px 30px rgba(36,82,200,0.08)">
    <div style="margin-bottom:14px;text-align:left">
      <b style="display:flex;align-items:center;gap:8px;font-size:17.5px;color:var(--navy)">${ic('idcard')}Carnet Misionero Digital JUMA</b>
      <p style="margin:4px 0 0;font-size:13.5px;color:var(--muted)">Tu carnet oficial con código QR y opción de generar el mockup realista en la franela misionera.</p>
    </div>

    <!-- 1. VISTA DEL CARNET -->
    <div style="padding:10px 0 16px;text-align:center">
      ${carnetCardOnlyHtml(rec, false)}
    </div>

    <div style="display:flex;justify-content:center;margin-bottom:20px">
      <button type="button" class="btn btn-blue btn-sm" data-dl-carnet-png="${esc(uid)}" style="min-height:44px;font-size:14px;font-weight:800;padding:0 24px">
        ${ic('download')}Descargar Carnet (PNG HD)
      </button>
    </div>

    <!-- 2. SECCIÓN DEL MOCKUP CON BOTÓN GENERAR -->
    <div style="padding:18px;border-radius:16px;background:${isMockupReady ? '#FFFFFF' : '#EBF3FF'};border:${isMockupReady ? '2px solid var(--royal)' : '1.5px dashed var(--royal)'};text-align:center">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <div>
          <b style="font-size:15px;color:var(--navy);display:flex;align-items:center;gap:6px;text-align:left">${ic('shirt')}Mockup en Franela Oficial JUMA (${esc(g)})</b>
          <span style="font-size:12.5px;color:var(--muted);display:block;text-align:left">${isMockupReady ? '¡Mockup generado con éxito! Revísalo abajo y descárgalo cuando quieras.' : 'Toca «Generar» para ver el diseño en pantalla primero sin tener que descargarlo.'}</span>
        </div>
        <div style="display:flex;gap:6px">
          <button type="button" class="chip" data-toggle-mock-gender="${esc(uid)}:Hombre" aria-pressed="${g === 'Hombre'}" style="min-height:32px;padding:0 10px;font-size:12px;border:1.5px solid ${g === 'Hombre' ? '#2452C8' : '#B9C8E4'};background:${g === 'Hombre' ? '#2452C8' : '#fff'};color:${g === 'Hombre' ? '#fff' : '#0A1B3F'}">👦 Hombre</button>
          <button type="button" class="chip" data-toggle-mock-gender="${esc(uid)}:Mujer" aria-pressed="${g === 'Mujer'}" style="min-height:32px;padding:0 10px;font-size:12px;border:1.5px solid ${g === 'Mujer' ? '#2452C8' : '#B9C8E4'};background:${g === 'Mujer' ? '#2452C8' : '#fff'};color:${g === 'Mujer' ? '#fff' : '#0A1B3F'}">👧 Mujer</button>
        </div>
      </div>

      ${!isMockupReady ? `
        <div style="padding:22px 14px;background:#fff;border-radius:12px;border:1px solid #D2E3FC;margin-bottom:6px">
          <span class="ico-big" aria-hidden="true">${ic('shirt')}</span>
          <b style="font-size:15px;color:var(--navy);display:block">¿Quieres ver cómo queda en la franela oficial?</b>
          <p style="font-size:13.5px;color:var(--muted);margin:4px 0 16px">Al darle a Generar, se muestra primero aquí en pantalla y luego podrás descargarlo.</p>
          <button type="button" class="btn btn-blue" data-action-generate-mockup="${esc(uid)}" style="min-height:46px;font-size:14.5px;font-weight:800;padding:0 26px">
            ${ic('sparkles')}Generar Mockup (${esc(g)})
          </button>
        </div>
      ` : `
        <!-- SE MUESTRA EL MOCKUP EN PANTALLA PRIMERO -->
        <div style="margin-bottom:16px;box-shadow:0 8px 24px rgba(6,21,54,0.14);border-radius:14px;overflow:hidden;background:#0A1B3F;max-width:360px;margin-left:auto;margin-right:auto">
          ${previewDataUrl ? `<img src="${previewDataUrl}" alt="Mockup en Franela Oficial JUMA (${esc(g)})" style="width:100%;height:auto;display:block">` : carnetMockupHtml(rec, g)}
        </div>
        <!-- SOLO ASI LUEGO DE MOSTRARSE APARECE LA OPCION DE DESCARGAR -->
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px">
          <button type="button" class="btn btn-blue" data-dl-mockup-png="${esc(uid)}" data-gender="${esc(g)}" style="min-height:46px;font-size:14.5px;font-weight:800;padding:0 26px">
            ${ic('download')}Descargar Mockup (${esc(g)}) (PNG HD)
          </button>
        </div>
      `}
    </div>
  </div>`;
}

async function loadImageSafe(src) {
  if (!src) return null;
  try {
    if (src.startsWith('data:')) {
      const res = await fetch(src);
      const blob = await res.blob();
      return await createImageBitmap(blob);
    }
    const res = await fetch(src, { mode: 'cors', credentials: 'omit' });
    if (res.ok) {
      const blob = await res.blob();
      return await createImageBitmap(blob);
    }
  } catch (e) {}
  return new Promise((resolve) => {
    const im = new Image();
    im.crossOrigin = 'anonymous';
    im.onload = () => resolve(im);
    im.onerror = () => resolve(null);
    im.src = src;
  });
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawQrOnCanvas(ctx, payload, x, y, size) {
  try {
    if (typeof window !== 'undefined' && window.qrcode) {
      const qr = window.qrcode(0, 'M');
      qr.addData(payload);
      qr.make();
      const count = qr.getModuleCount();
      const cellSize = size / count;
      ctx.fillStyle = '#000000';
      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          if (qr.isDark(r, c)) {
            ctx.fillRect(Math.round(x + c * cellSize), Math.round(y + r * cellSize), Math.ceil(cellSize), Math.ceil(cellSize));
          }
        }
      }
      return true;
    }
  } catch (e) {}
  return false;
}

async function renderCarnetToCanvas(rec) {
  const info = getCarnetDisplayData(rec);
  const W = 900, H = 1420;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');

  /* Fondo degradado con esquinas redondeadas */
  ctx.save();
  roundRectPath(ctx, 0, 0, W, H, 56);
  ctx.clip();

  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(0.36, '#FFFFFF');
  bgGrad.addColorStop(0.70, '#DCEBFF');
  bgGrad.addColorStop(1, '#7BAEF6');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  /* Cinta misionera de 5 colores en el borde superior */
  const cols = ['#D62828', '#1B8A4B', '#F1F5FB', '#F4B400', '#1849B6'];
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = cols[i];
    ctx.fillRect(i * (W / 5), 0, Math.ceil(W / 5), 14);
  }

  /* Cargar recursos gráficos (logo, foto de perfil, QR) */
  const [logoImg, avatarImg, qrImg] = await Promise.all([
    loadImageSafe('img/logo.png'),
    info.foto ? loadImageSafe(info.foto) : Promise.resolve(null),
    loadImageSafe(info.qrUrl)
  ]);

  /* Marca de agua central del logo JUMA */
  if (logoImg) {
    ctx.save();
    ctx.globalAlpha = 0.075;
    const wmW = 680;
    const wmH = wmW * (logoImg.height / logoImg.width);
    ctx.drawImage(logoImg, (W - wmW) / 2, 330, wmW, wmH);
    ctx.restore();

    /* Logo principal superior */
    const lgW = 350;
    const lgH = lgW * (logoImg.height / logoImg.width);
    ctx.drawImage(logoImg, (W - lgW) / 2, 48, lgW, lgH);
  }

  /* Foto circular del participante en el centro */
  const cx = W / 2, cy = 575, r = 205;
  ctx.save();
  ctx.shadowColor = 'rgba(8, 31, 92, 0.24)';
  ctx.shadowBlur = 32;
  ctx.shadowOffsetY = 12;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 14, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = '#E8F1FF';
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  if (avatarImg) {
    const s = Math.min(avatarImg.width, avatarImg.height);
    const sx = (avatarImg.width - s) / 2;
    const sy = (avatarImg.height - s) / 2;
    ctx.drawImage(avatarImg, sx, sy, s, s, cx - r, cy - r, r * 2, r * 2);
  } else {
    ctx.fillStyle = '#1849B6';
    ctx.font = '900 160px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(info.shortNom.charAt(0), cx, cy);
  }
  ctx.restore();

  /* Textos: ROL, NOMBRE, C.I. */
  ctx.textAlign = 'center';
  ctx.fillStyle = '#123478';
  ctx.font = '800 35px "Segoe UI", Arial, sans-serif';
  ctx.fillText(info.rolUpper, W / 2, 855);

  ctx.fillStyle = '#071E54';
  let fontSize = 68;
  ctx.font = `900 ${fontSize}px "Segoe UI", Arial, sans-serif`;
  while (ctx.measureText(info.shortNom).width > W - 90 && fontSize > 38) {
    fontSize -= 3;
    ctx.font = `900 ${fontSize}px "Segoe UI", Arial, sans-serif`;
  }
  ctx.fillText(info.shortNom, W / 2, 935);

  ctx.fillStyle = '#123478';
  ctx.font = '700 41px "Segoe UI", Arial, sans-serif';
  ctx.fillText(info.subTxt, W / 2, 998);

  /* Onda azul real inferior */
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, 1125);
  ctx.quadraticCurveTo(W * 0.52, 1185, W, 1085);
  ctx.lineTo(W, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  const footGrad = ctx.createLinearGradient(0, 1085, W, H);
  footGrad.addColorStop(0, '#0F56C8');
  footGrad.addColorStop(1, '#083282');
  ctx.fillStyle = footGrad;
  ctx.fill();
  ctx.restore();

  /* Caja blanca con el Código QR abajo a la izquierda */
  const qrBoxX = 68, qrBoxY = 1142, qrBoxS = 224;
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.25)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 6;
  roundRectPath(ctx, qrBoxX, qrBoxY, qrBoxS, qrBoxS, 28);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.restore();

  const qrMargin = 16;
  const qrDrawn = drawQrOnCanvas(ctx, info.qrPayload, qrBoxX + qrMargin, qrBoxY + qrMargin, qrBoxS - qrMargin * 2);
  if (!qrDrawn && qrImg) {
    ctx.drawImage(qrImg, qrBoxX + 14, qrBoxY + 14, qrBoxS - 28, qrBoxS - 28);
  }

  /* Texto FAMILIA CONSOLATA - VENEZUELA abajo a la derecha */
  const rightCenterX = qrBoxX + qrBoxS + (W - (qrBoxX + qrBoxS)) / 2 - 10;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 38px "Segoe UI", Arial, sans-serif';
  ctx.fillText('FAMILIA CONSOLATA', rightCenterX, 1236);
  ctx.font = '800 35px "Segoe UI", Arial, sans-serif';
  ctx.fillText('- VENEZUELA -', rightCenterX, 1286);
  ctx.fillStyle = '#9ECAFF';
  ctx.font = '800 27px "Segoe UI", Arial, sans-serif';
  ctx.fillText('JUMA DUACA', rightCenterX, 1332);

  ctx.restore();
  return cv;
}

async function downloadCarnetPng(rec, mode = 'carnet', forcedGender = '') {
  const targetRec = rec || myProfile || { datos: form.d, foto: form.d.foto };
  const rol = userRole(targetRec);
  if (rol !== 'coordinador' && rol !== 'asesor' && rol !== 'participante') {
    showToast('Los visitantes y colaboradores no poseen carnet misionero.');
    return;
  }
  const info = getCarnetDisplayData(targetRec);
  const slug = info.shortNom.replace(/[^A-Z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'Misionero';
  const carnetCv = await renderCarnetToCanvas(targetRec);

  if (mode === 'mockup') {
    const g = forcedGender || carnetGenderOverride || info.gender;
    const isMujer = g === 'Mujer';
    const bgImg = await loadImageSafe(isMujer ? 'img/mockup-mujer.jpg' : 'img/mockup-hombre.jpg');
    if (bgImg) {
      const mCv = document.createElement('canvas');
      mCv.width = bgImg.width;
      mCv.height = bgImg.height;
      const mCtx = mCv.getContext('2d');
      mCtx.drawImage(bgImg, 0, 0);

      const bx = Math.round(bgImg.width * (isMujer ? 0.4222 : 0.4236));
      const by = Math.round(bgImg.height * (isMujer ? 0.5488 : 0.5425));
      const bw = Math.round(bgImg.width * (isMujer ? 0.1708 : 0.1694));
      const bh = Math.round(bgImg.height * (isMujer ? 0.2163 : 0.1878));

      mCtx.save();
      roundRectPath(mCtx, bx, by, bw, bh, 10);
      mCtx.clip();
      mCtx.drawImage(carnetCv, bx, by, bw, bh);
      const gloss = mCtx.createLinearGradient(bx, by, bx + bw, by + bh);
      gloss.addColorStop(0, 'rgba(255,255,255,0.22)');
      gloss.addColorStop(0.45, 'rgba(255,255,255,0)');
      gloss.addColorStop(1, 'rgba(255,255,255,0.08)');
      mCtx.fillStyle = gloss;
      mCtx.fillRect(bx, by, bw, bh);
      mCtx.restore();

      const a = document.createElement('a');
      a.href = mCv.toDataURL('image/png');
      a.download = `Mockup-Carnet-JUMA-${slug}.png`;
      a.click();
      return;
    }
  }

  const a = document.createElement('a');
  a.href = carnetCv.toDataURL('image/png');
  a.download = `Carnet-JUMA-${slug}.png`;
  a.click();
}

function sixMonthsAgoIso() {
  const n = new Date(); n.setDate(n.getDate() - 183);
  return n.getFullYear() + '-' + pad2(n.getMonth() + 1) + '-' + pad2(n.getDate());
}
/* Rol que se MUESTRA como etiqueta de una planilla. No da ningún permiso: los permisos
   vienen solo de roles/{correo} en Firestore (privRole) y de las reglas del servidor. */
function userRole(rec) {
  if (!rec) return 'participante';
  const em = String(rec.correo || (rec.datos && rec.datos.correo) || '').trim().toLowerCase();
  if (em && isMasterEmail(em)) return 'coordinador';
  const r = String(rec.rol || (rec.datos && rec.datos.rol) || (rec.datos && rec.datos.tipoRegistro) || '').trim().toLowerCase();
  if (r === 'coordinador' || r === 'asesor' || r === 'participante' || r === 'visitante' || r === 'colaborador') return r;
  return 'participante';
}
/* Rol del usuario con sesión iniciada: el privilegiado viene de Firestore; si no, el de su planilla sin permisos. */
function myRole() {
  if (privRole === 'admin') return 'coordinador';
  if (privRole === 'coordinador' || privRole === 'asesor') return privRole;
  return rolSinPermiso(myProfile ? userRole(myProfile) : 'participante');
}
function roleLabel(rol) {
  if (rol === 'coordinador') return 'Coordinador(a)';
  if (rol === 'asesor') return 'Asesor(a)';
  if (rol === 'visitante') return 'Visitante / Oyente';
  if (rol === 'colaborador') return 'Colaborador(a)';
  return 'Participante';
}
function roleBadgeHtml(rol) {
  if (rol === 'coordinador') return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:800;background:#E8F1FF;color:#0C2D74;border:1px solid #2452C8">★ Coordinador(a)</span>';
  if (rol === 'asesor') return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:800;background:#FFF3CD;color:#7A5200;border:1px solid #F5C518">◆ Asesor(a)</span>';
  if (rol === 'visitante') return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:800;background:#F1F5F9;color:#334155;border:1px solid #94A3B8">👁 Visitante</span>';
  if (rol === 'colaborador') return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:800;background:#FDF4FF;color:#86198F;border:1px solid #C084FC">🤝 Colaborador(a)</span>';
  return '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:800;background:#E4F5EA;color:#14532D;border:1px solid #17824A">● Participante</span>';
}
function qrPayloadFor(rec) {
  const id = (rec && (rec.uid || rec.id)) || (currentUser && currentUser.uid) || ('juma-' + sha256(String((rec && rec.correo) || 'juma')).slice(0, 16));
  return 'JUMA:' + id;
}
/* ---------- QR de asistencia a pantalla completa (como en el prototipo v2) ----------
   El contenido del QR es siempre qrPayloadFor(rec): el mismo que lee el escáner del coordinador. */
function qrSVG(text) {
  try {
    const q = window.qrcode(0, 'M'); q.addData(text); q.make();
    const n = q.getModuleCount(); let r = '';
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (q.isDark(y, x)) r += `M${x} ${y}h1v1h-1z`;
    return `<svg viewBox="-2 -2 ${n + 4} ${n + 4}" role="img" aria-label="Código QR de asistencia" shape-rendering="crispEdges"><rect x="-2" y="-2" width="${n + 4}" height="${n + 4}" fill="#fff"/><path d="${r}" fill="#061536"/></svg>`;
  } catch (e) {
    return `<img src="${esc(qrImgUrl(text, 300))}" alt="Código QR de asistencia" style="display:block;width:100%;height:100%">`;
  }
}
function qrCardHtml(rec) {
  const info = getCarnetDisplayData(rec || {});
  return `<div class="qr-card">
    <div><b>Tu QR de asistencia</b><p>Tócalo para verlo en grande y que el coordinador lo escanee el domingo.</p></div>
    <button type="button" class="qr-btn" id="qr-btn" data-qr-open data-qr="${esc(info.qrPayload)}" data-qr-n="${esc(info.fullNom)}" data-qr-s="${esc(info.rolUpper + (info.subTxt ? ' · ' + info.subTxt : ''))}" aria-label="Ver mi código QR en grande">${qrSVG(info.qrPayload)}<span>${ic('expand')}Toca para ampliar</span></button>
  </div>`;
}
let qrWake = null, qrOrigen = null;
function qrPedirPantallaEncendida() {
  try { if (navigator.wakeLock && navigator.wakeLock.request) navigator.wakeLock.request('screen').then((w) => { qrWake = w; }).catch(() => {}); } catch (e) {}
}
function qrSoltarPantalla() { try { if (qrWake) qrWake.release(); } catch (e) {} qrWake = null; }
function qrFlip(desde, hasta) {
  const a = desde.getBoundingClientRect(), b = hasta.getBoundingClientRect();
  if (!a.width || !b.width) return 'none';
  return `translate(${a.left + a.width / 2 - (b.left + b.width / 2)}px, ${a.top + a.height / 2 - (b.top + b.height / 2)}px) scale(${a.width / b.width})`;
}
function openQR(btn, origen) {
  if (!btn) return;
  let ov = $('#qr-full');
  if (!ov) {
    ov = document.createElement('section');
    ov.id = 'qr-full'; ov.className = 'qr-full';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Código QR de asistencia');
    ov.addEventListener('click', (e) => { if (e.target.closest('[data-qr-close]')) closeQR(); });
    document.body.appendChild(ov);
  }
  qrOrigen = origen || btn.querySelector('svg, img') || btn;
  ov.innerHTML = `<button type="button" class="icon-btn x x-btn" data-qr-close aria-label="Cerrar código QR">${ic('x')}</button>
    <div><div class="qr-big">${qrSVG(btn.dataset.qr || '')}</div>
    <h2>${esc(btn.dataset.qrN || '')}</h2>
    <p>${esc(btn.dataset.qrS || '')}</p>
    <p><b style="color:var(--ink)">Muéstralo al coordinador para marcar tu asistencia.</b></p>
    <span class="tip">${ic('sun')}Sube el brillo de tu pantalla</span></div>`;
  ov.classList.add('on');
  const big = $('.qr-big', ov);
  if (!reduced() && big && big.animate && qrOrigen) {
    big.animate([{ transform: qrFlip(qrOrigen, big) }, { transform: 'none' }], { duration: 380, easing: 'cubic-bezier(.23,1,.32,1)' });
    ov.animate([{ backgroundColor: 'rgba(255,255,255,0)' }, { backgroundColor: '#fff' }], { duration: 260, easing: 'ease-out' });
  }
  qrPedirPantallaEncendida();
  setTimeout(() => { const x = $('[data-qr-close]', ov); if (x) x.focus(); }, 50);
}
function closeQR() {
  const ov = $('#qr-full'); if (!ov || !ov.classList.contains('on')) return;
  const volver = $('#qr-btn') || (qrOrigen && document.contains(qrOrigen) ? qrOrigen : null);
  const done = () => { ov.classList.remove('on'); ov.innerHTML = ''; qrSoltarPantalla(); if (volver && volver.focus) { try { volver.focus({ preventScroll: true }); } catch (e) {} } };
  const big = $('.qr-big', ov); const destino = qrOrigen && document.contains(qrOrigen) ? qrOrigen : null;
  if (!reduced() && big && destino && big.animate) {
    const an = big.animate([{ transform: 'none' }, { transform: qrFlip(destino, big) }], { duration: 240, easing: 'cubic-bezier(.4,0,1,1)' });
    ov.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240, easing: 'ease-in' });
    an.onfinish = done;
  } else done();
}
/* Esc cierra primero el QR (sin cerrar el perfil que está debajo) y el foco no se escapa de la pantalla del QR */
window.addEventListener('keydown', (e) => {
  const ov = $('#qr-full'); if (!ov || !ov.classList.contains('on')) return;
  if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); closeQR(); }
  else if (e.key === 'Tab') { e.preventDefault(); const x = $('[data-qr-close]', ov); if (x) x.focus(); }
}, true);
document.addEventListener('visibilitychange', () => { const ov = $('#qr-full'); if (document.visibilityState === 'visible' && ov && ov.classList.contains('on')) qrPedirPantallaEncendida(); });
modalRoot.addEventListener('click', (e) => {
  const b = e.target.closest('[data-qr-open]');
  if (b) { e.preventDefault(); openQR(b); return; }
  const mini = e.target.closest('.j-carnet-qr');
  if (mini) { const qb = $('#qr-btn'); if (qb) { e.preventDefault(); openQR(qb, mini); } }
});
function qrImgUrl(payload, size = 260) {
  try {
    if (typeof window !== 'undefined' && window.qrcode) {
      const qr = window.qrcode(0, 'M');
      qr.addData(payload);
      qr.make();
      return qr.createDataURL(Math.max(3, Math.floor(size / 30)), 4);
    }
  } catch (e) {}
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
    const isVis = d.tipoRegistro === 'visitante';
    if (isVis) {
      return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t">
        <div class="sheet">
          ${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', 'Registro de Visitante / Colaborador', 'pl-t')}
          <div style="padding:clamp(24px,4vw,44px);text-align:center">
            <div class="u-badge" style="background:#E4F5EA;color:#14532D;margin-bottom:14px">✔ Registro completado con éxito</div>
            <div style="display:flex;justify-content:center;margin-bottom:14px">
              ${d.foto ? `<img src="${esc(d.foto)}" alt="" style="width:84px;height:84px;border-radius:50%;object-fit:cover;border:3px solid var(--royal)">` : ''}
            </div>
            <h3 class="h-display h-lg" style="margin:0 0 10px">¡Bienvenido(a) a la comunidad, ${esc((d.nombres || '').trim().split(' ')[0] || 'amigo(a)')}!</h3>
            <p class="body" style="margin:0 auto 20px;max-width:54ch">Tu registro como <b>${esc(d.categoriaVisitante || 'Visitante / Colaborador')}</b> ha quedado guardado. Ya puedes interactuar en el chat y estar al tanto de las actividades de JUMA Duaca.</p>
            <div style="display:flex;justify-content:center;gap:12px;margin-top:20px;flex-wrap:wrap">
              <button type="button" class="btn btn-blue" data-go-profile>Ir a mi perfil</button>
              <button type="button" class="btn btn-soft" data-open-chat>${ic('msg')}Abrir chat</button>
              <button type="button" class="btn btn-soft" data-close>Cerrar</button>
            </div>
          </div>
        </div>
      </div>`;
    }
    const wa = waNums();
    const recDone = myProfile || { datos: d, foto: d.foto, correo: d.correo, nombre: ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() };
    return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', 'Registro y Carnet Misionero', 'pl-t')}<div style="padding:clamp(24px,4vw,44px)"><div class="u-badge" style="background:#E4F5EA;color:#14532D;margin-bottom:12px">✔ Cuenta, planilla y carnet listos</div><div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px">${d.foto ? `<img src="${esc(d.foto)}" alt="" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid var(--royal)">` : ''}<h3 class="h-display h-lg" style="margin:0">¡Bienvenido(a) a JUMA, ${esc((d.nombres || '').trim().split(' ')[0] || 'misionero')}!</h3></div><p class="body" style="margin:0 0 18px;max-width:58ch">${form.saved ? 'Tu registro, tu planilla y tu Carnet Misionero con Código QR ya quedaron guardados en la nube de JUMA. ' : '<b>Atención:</b> no se pudo confirmar el guardado en la nube (revisa tu internet). Envía tu planilla por WhatsApp con los botones de abajo para que no se pierda. '}Aquí puedes ver cómo queda tu carnet en el mockup y descargarlo en alta calidad:</p>${carnetInteractiveSectionHtml(recDone, 'done')}<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:22px"><button type="button" class="btn btn-blue" data-go-profile>Ir a mi perfil misionero</button>${wa.map((n) => `<a class="btn btn-soft" target="_blank" rel="noopener" href="https://wa.me/${n}?text=${encodeURIComponent(planillaTexto())}">Enviar planilla por WhatsApp (${esc(waLabel(n))})</a>`).join('')}<button type="button" class="btn btn-soft" data-dl>Descargar planilla</button><button type="button" class="btn btn-soft" data-close>Cerrar</button></div></div></div></div>`;
  }
  const isVisitante = d.tipoRegistro === 'visitante';
  const names = isVisitante ? ['Visitante / Colaborador'] : ['Cuenta y datos', 'Representante', 'Salud', 'Confirmar'];
  const prog = isVisitante
    ? `<div class="on"><i aria-hidden="true"></i><span>Registro de Visitante / Colaborador</span></div>`
    : names.map((l, i) => `<div class="${i + 1 === st ? 'on' : (i + 1 < st ? 'ok' : '')}"><i aria-hidden="true"></i><span>${l}</span></div>`).join('');
  let body = '';
  if (st === 1) {
    const loginBanner = !currentUser ? `<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;margin-bottom:20px;border-radius:12px;background:var(--mist);font-size:14.5px"><span>¿Ya te registraste antes en la app?</span><button type="button" class="btn btn-soft btn-sm" data-switch-login style="min-height:36px;padding:0 14px;background:#fff">Iniciar sesión</button></div>` : `<div style="padding:12px 16px;margin-bottom:20px;border-radius:12px;background:#E4F5EA;color:#14532D;font-size:14.5px;font-weight:700">Sesión activa como ${esc(currentUser.email)} · Actualizando tu planilla</div>`;
    const googleQuickBtn = !currentUser ? `<div style="margin-bottom:14px"><button type="button" class="btn btn-soft btn-sm" data-google-form style="width:100%;background:#fff;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;gap:10px"><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg><span>Conectar con mi cuenta de Google</span></button></div>` : '';
    const tipoSelector = !form.isUpdate ? `
      <div style="margin-bottom:18px;padding:12px 14px;border-radius:14px;background:#F0F4FA;border:1.5px solid var(--line)">
        <span style="display:block;font-size:12.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--navy);margin-bottom:8px">¿Cómo deseas registrarte?</span>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button type="button" class="chip" data-chip="tipoRegistro" data-v="participante" aria-pressed="${!isVisitante}" style="flex:1 1 140px;min-height:42px;border:2px solid ${!isVisitante ? '#2452C8' : '#B9C8E4'};background:${!isVisitante ? '#2452C8' : '#fff'};color:${!isVisitante ? '#fff' : '#0A1B3F'};font-weight:700">👦 Joven Misionero</button>
          <button type="button" class="chip" data-chip="tipoRegistro" data-v="visitante" aria-pressed="${isVisitante}" style="flex:1 1 140px;min-height:42px;border:2px solid ${isVisitante ? '#2452C8' : '#B9C8E4'};background:${isVisitante ? '#2452C8' : '#fff'};color:${isVisitante ? '#fff' : '#0A1B3F'};font-weight:700">🤝 Visitante / Colaborador</button>
        </div>
      </div>
    ` : '';
    const accountFields = `<div style="width:100%;padding:16px 18px;margin-bottom:14px;border-radius:14px;background:#fff;border:1.5px solid var(--line)"><div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--royal);margin-bottom:12px">Datos de tu cuenta en la App</div>${googleQuickBtn}<div style="display:flex;flex-wrap:wrap;gap:16px">${inputHtml('correo', 'Correo electrónico *', 'email', 'email', '', 'tucorreo@ejemplo.com')}${!currentUser ? inputHtml('password', 'Contraseña para la app * (mín. 6 caracteres)', 'password', 'new-password', '', 'Mínimo 6 caracteres') : ''}</div></div>`;
    const photoField = `<div style="width:100%;padding:16px 18px;margin-bottom:14px;border-radius:14px;background:${d.foto ? '#F2FAF5' : '#FFFDF5'};border:2px solid ${d.foto ? '#17824A' : '#F5C518'};display:flex;flex-wrap:wrap;align-items:center;gap:16px">
      <div style="width:82px;height:82px;border-radius:50%;background:var(--mist);border:3px solid ${d.foto ? '#17824A' : 'var(--royal)'};display:flex;align-items:center;justify-content:center;overflow:hidden;flex:0 0 auto">
        ${d.foto ? `<img src="${esc(d.foto)}" alt="Tu foto de perfil" style="width:100%;height:100%;object-fit:cover">` : `<span style="color:var(--royal)" aria-hidden="true">${ic('camera', 'ic-xl')}</span>`}
      </div>
      <div style="flex:1 1 220px">
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px">
          <b style="font-size:16px;color:var(--ink)">Foto para tu Perfil e Identificación * (Obligatoria)</b>
          <span style="padding:2px 9px;border-radius:99px;font-size:11.5px;font-weight:800;background:${d.foto ? '#E4F5EA;color:#14532D' : '#FCE8E7;color:#8A1C1C'}">${d.foto ? '✔ Foto cargada' : 'Requerida para continuar'}</span>
        </div>
        <p style="margin:4px 0 10px;font-size:13.5px;color:var(--muted)">Esta foto identificará tu perfil en la comunidad JUMA. Puedes tomarte una foto en vivo o elegir una de tu galería.</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
          <button type="button" class="btn btn-blue btn-sm" data-start-selfie="form" style="min-height:40px;padding:0 14px">${ic('camera')}Tomarme una foto</button>
          <label class="btn btn-soft btn-sm" style="min-height:38px;padding:0 14px;cursor:pointer;margin:0">${ic('image')}<span>${d.foto ? 'Cambiar de galería' : 'Usar de la galería'}</span><input type="file" accept="image/*" id="f-avatar" style="display:none"></label>
          <input type="file" accept="image/*" capture="user" id="f-avatar-cam" style="display:none">
          ${d.foto ? `<button type="button" class="btn btn-danger btn-sm" data-rm-avatar style="min-height:38px;padding:0 12px">Quitar</button>` : ''}
        </div>
      </div>
      ${selfieBoxHtml('form')}
    </div>`;

    if (isVisitante) {
      const catChips = ['Hermana Religiosa', 'Representante / Familiar', 'Sacerdote / Asesor', 'Colaborador(a)', 'Visitante / Oyente'];
      body = loginBanner + tipoSelector + `
        <h3 class="h-display h-md">Registro de Visitante / Colaborador</h3>
        <p class="body" style="margin:8px 0 16px;font-size:15px">Registro simplificado para hermanas religiosas, sacerdotes, representantes y miembros que acompañan a JUMA Duaca.</p>
        ${accountFields}
        ${photoField}
        <div style="width:100%;padding:14px 16px;margin-bottom:14px;border-radius:14px;background:#fff;border:1.5px solid var(--line)">
          <span class="flabel" style="margin-bottom:8px">¿Cuál es tu rol o vínculo con la comunidad?</span>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${chips('categoriaVisitante', catChips)}</div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:16px">
          ${inputHtml('nombres', 'Nombres *', 'text', 'given-name')}
          ${inputHtml('apellidos', 'Apellidos *', 'text', 'family-name')}
          ${inputHtml('cedula', 'Cédula de identidad *', 'text', '', '', 'Ej.: 12.345.678')}
          ${inputHtml('celular', 'Teléfono / Celular de contacto', 'tel', 'tel')}
        </div>
      `;
    } else {
      const sexoField = `<div class="fld" style="flex:1 1 220px"><span class="flabel">Sexo (para el diseño del mockup de tu carnet) *</span><div style="display:flex;gap:10px">${chips('sexo', ['Hombre', 'Mujer'])}</div></div>`;
      body = loginBanner + tipoSelector + '<h3 class="h-display h-md">Tus datos personales y foto de carnet</h3><p class="body" style="margin:8px 0 18px;font-size:15px">Con estos datos creamos tu perfil, tu planilla y tu Carnet Misionero en JUMA. Los campos con * son obligatorios.</p>' + accountFields + photoField + '<div style="display:flex;flex-wrap:wrap;gap:18px;margin-top:14px">' + sexoField + FLD[1].map((f) => f[0] === '@edad' ? `<div class="fld"><span class="flabel">Edad</span><div class="fake num" id="edad-box">${edadDe() ? edadDe() + ' años' : 'Se calcula sola'}</div></div>` : inputHtml(f[0], f[1], f[2], f[3], f[4], f[5])).join('') + '</div>';
    }
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
    const previewRec = { datos: d, foto: d.foto, correo: d.correo, nombre: ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() };
    body = `<h3 class="h-display h-md">Revisa tu Carnet y confirma tu registro</h3><p class="body" style="margin:8px 0 18px;font-size:15px">Verifica cómo luce tu Carnet Misionero y que todos tus datos estén bien antes de guardar.</p>
    <div style="margin-bottom:20px;padding:16px;border-radius:16px;background:#F2F7FF;border:1.5px solid #B9C8E4;text-align:center">
      <b style="display:flex;align-items:center;gap:6px;font-size:14.5px;color:var(--navy);margin-bottom:10px">${ic('idcard')}Vista previa de tu Carnet Misionero:</b>
      ${carnetCardOnlyHtml(previewRec, false)}
    </div>
    <dl style="margin:0;background:#fff;border:1px solid var(--line);border-radius:14px;padding:6px 22px">${summaryRows().map((r) => `<div style="display:flex;flex-wrap:wrap;gap:4px 18px;padding:12px 0;border-bottom:1px solid var(--mist)"><dt style="flex:0 0 190px;font-size:14px;font-weight:700;color:var(--royal)">${esc(r[0])}</dt><dd style="margin:0;flex:1 1 200px;min-width:0;font-size:15px;overflow-wrap:anywhere">${esc(r[1])}</dd></div>`).join('')}</dl>
<label style="display:flex;gap:14px;align-items:flex-start;margin-top:22px;padding:18px 20px;border-radius:14px;background:var(--mist);font-size:15px;line-height:1.55;cursor:pointer"><input type="checkbox" id="f-consent" ${form.consent ? 'checked' : ''} style="flex:0 0 auto;width:22px;height:22px;margin:2px 0 0"><span>Confirmo que los datos son verdaderos y, si soy menor de edad, que mi representante conoce y autoriza mi participación en JUMA.</span></label>
<div style="margin-top:16px;padding:14px 18px;border-radius:12px;background:#FFF8E1;border:1.5px solid #F5C518;color:#5C4300;font-size:14.5px;line-height:1.5"><b>⏳ Importante:</b> Al pulsar el botón de registro, este proceso puede tardar un momento según tu conexión a internet. <b>Por favor espera y no cierres la planilla</b> hasta ver la confirmación.</div>`;
  }
  const sendingBanner = form.sending ? `<div role="status" style="margin:18px 0 0;padding:16px 18px;border-radius:12px;background:#E8F1FF;border:1.5px solid var(--royal);color:var(--navy);font-size:15px;font-weight:700;line-height:1.5">⏳ Guardando tu registro en JUMA… Este proceso puede tardar unos momentos, por favor espera y no cierres la planilla.</div>` : '';
  const bottomActionButtons = isVisitante ? `
    <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:30px">
      <button type="button" class="btn btn-blue" data-submit ${form.sending ? 'disabled' : ''}>${form.sending ? 'Guardando… Por favor espera' : ic('check') + 'Guardar mi registro de Visitante / Colaborador'}</button>
    </div>
  ` : `
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-top:30px">
      <div>${st > 1 && !form.sending ? '<button type="button" class="btn btn-soft" data-back>Atrás</button>' : ''}</div>
      <div>${st < 4 ? '<button type="button" class="btn btn-blue" data-next>Siguiente</button>' : `<button type="button" class="btn btn-blue" data-submit ${form.sending ? 'disabled' : ''}>${form.sending ? 'Guardando… Por favor espera' : (form.isUpdate ? 'Guardar cambios' : 'Registrarme y generar mi carnet')}</button>`}</div>
    </div>
  `;
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pl-t"><div class="sheet">${sheetHead('Instituto Misioneros de la Consolata · Barquisimeto', form.isUpdate ? 'Actualizar mi planilla' : (isVisitante ? 'Registro de Visitante / Colaborador' : 'Registro e inscripción misionera'), 'pl-t')}<div style="padding:clamp(22px,4vw,40px)">${prog}${body}${sendingBanner}${form.err ? `<p role="alert" style="margin:20px 0 0;padding:14px 18px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:15px;font-weight:700">${esc(form.err)}</p>` : ''}${bottomActionButtons}</div></div></div>`;
}

function openForm(editExisting = false) {
  form.step = 1; form.done = false; form.err = ''; form.consent = false; form.saved = false;
  if (editExisting && myProfile && myProfile.datos) {
    form.d = clone(myProfile.datos);
    if (!form.d.foto && myProfile.foto) form.d.foto = myProfile.foto;
    form.isUpdate = true;
    form.consent = true;
  } else if (currentUser && perfilEnNube && myProfile && myProfile.datos && !editExisting) {
    openAuthModal(); return;
  } else {
    form.isUpdate = false;
    if (currentUser && currentUser.email) form.d.correo = currentUser.email;
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
  if (d.correo) d.correo = email;

  if (fb && fb.auth && !currentUser && email && pass) {
    try {
      const cred = await withTimeout(fb.au.createUserWithEmailAndPassword(fb.auth, email, pass), 8000);
      currentUser = cred.user;
    } catch (err) {
      if (err && (err.code === 'auth/email-already-in-use' || /already-in-use/i.test(err.message || ''))) {
        try {
          const cred = await withTimeout(fb.au.signInWithEmailAndPassword(fb.auth, email, pass), 8000);
          currentUser = cred.user;
        } catch (e2) {
          throw new Error('Ese correo ya está registrado. Escribe tu contraseña correcta o entra en «Iniciar sesión».');
        }
      } else if (err && /weak-password/i.test(err.code || '')) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.');
      } else if (err && /invalid-email/i.test(err.code || '')) {
        throw new Error('El correo electrónico no es válido.');
      } else {
        throw new Error('No se pudo crear tu cuenta en este momento. Revisa tu conexión a internet e intenta de nuevo.');
      }
    }
    if (currentUser) {
      try { localStorage.removeItem('juma-is-logged-out'); } catch (e) {}
      if (fb.au.updateProfile) fb.au.updateProfile(currentUser, { displayName: ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() }).catch(() => {});
      if (fb.au.sendEmailVerification && !currentUser.emailVerified) fb.au.sendEmailVerification(currentUser).catch(() => {});
    }
  }
  /* Con sesión: la planilla se guarda en inscripciones/{uid} (uid real de Firebase).
     Sin sesión (sin correo/contraseña): se guarda como registro nuevo con id «juma-…», como antes. */
  const uid = currentUser ? currentUser.uid : ('juma-' + sha256(email || ((d.nombres || '') + (d.celular || ''))).slice(0, 20));
  /* Con sesión, el correo de la planilla es siempre el de la cuenta (las reglas lo exigen) */
  const correoCuenta = currentUser && currentUser.email ? String(currentUser.email).trim().toLowerCase() : email;
  d.correo = correoCuenta || d.correo;
  const isVisitante = d.tipoRegistro === 'visitante';
  const esActualizacion = !!(currentUser && perfilEnNube && myProfile && (myProfile.uid === uid || myProfile.id === uid));

  const rec = {
    id: uid,
    uid,
    correo: correoCuenta,
    nombre: ((d.nombres || '') + ' ' + (d.apellidos || '')).trim(),
    cedula: d.cedula || '',
    sexo: d.sexo || detectGender({ datos: d }),
    foto: d.foto || '',
    fotoCarnetOk: true,
    tipoRegistro: isVisitante ? 'visitante' : 'participante',
    categoriaVisitante: d.categoriaVisitante || '',
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
  /* El rol y las asistencias nunca se escriben desde la planilla (las reglas lo impiden): solo al crear
     se pone un rol SIN permisos; coordinador/asesor lo asigna la cuenta maestra en roles/{correo} y las
     asistencias las registran los coordinadores con el QR. */
  if (!esActualizacion) {
    rec.rol = isVisitante ? (d.categoriaVisitante === 'Colaborador(a)' ? 'colaborador' : 'visitante') : 'participante';
  }
  const local = Object.assign({}, myProfile || {}, rec);
  if (currentUser) {
    myProfile = local;
    guardarPerfilLocal();
  }

  let cloudSaved = false;
  if (fb && fb.db) {
    try {
      const datosNube = Object.assign({}, rec);
      if (!esActualizacion) datosNube.creado = fb.serverTimestamp();
      await withTimeout(fb.setDoc(fb.doc(fb.db, 'inscripciones', uid), datosNube, { merge: true }), 6000);
      cloudSaved = true;
      if (currentUser) {
        perfilEnNube = true;
        upsertMiembro();
        iniciarEscuchasDeMiembro();
      }
    } catch (e) {
      cloudSaved = false;
    }
  }
  updateAuthUI();
  return cloudSaved;
}

/* Busca una planilla ya cargada (solo coordinadores tienen la lista completa) o la copia propia. */
function findProfileRecord(uid, email) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanUid = String(uid || '').trim();
  const match = (allInscripciones || []).find((x) => {
    if (!x) return false;
    if (cleanUid && (x.id === cleanUid || x.uid === cleanUid)) return true;
    const xEmail = String(x.correo || (x.datos && x.datos.correo) || '').trim().toLowerCase();
    return !!(cleanEmail && xEmail && xEmail === cleanEmail && x.uid === cleanUid);
  });
  if (match) return match;
  if (cleanUid) return leerPerfilLocal(cleanUid);
  return null;
}

/* Carga el perfil propio desde inscripciones/{uid}. Si no existe pero hay una planilla antigua con el
   mismo correo (ids «juma-…»), la copia a inscripciones/{uid} sin tocar la antigua. */
async function loadUserProfile(user) {
  if (!user) return null;
  const uid = user.uid;
  const email = String(user.email || '').trim().toLowerCase();
  const local = leerPerfilLocal(uid);
  if (local && !myProfile) { myProfile = local; updateAuthUI(); }
  if (!fb || !fb.db) return myProfile;
  try {
    const snap = await withTimeout(fb.getDoc(fb.doc(fb.db, 'inscripciones', uid)), 6000);
    if (snap.exists()) {
      myProfile = Object.assign({ id: snap.id }, snap.data());
      myProfile.uid = myProfile.uid || uid;
      perfilEnNube = true;
      guardarPerfilLocal();
      return myProfile;
    }
  } catch (e) {
    return myProfile; // sin conexión: se usa la copia local solo para mostrar
  }
  perfilEnNube = false;
  myProfile = null;
  if (email && user.emailVerified) {
    try {
      const q = fb.query(fb.collection(fb.db, 'inscripciones'), fb.where('correo', '==', email), fb.limit(1));
      const qs = await withTimeout(fb.getDocs(q), 6000);
      if (!qs.empty) {
        const legacy = Object.assign({}, qs.docs[0].data());
        const legacyId = qs.docs[0].id;
        const copia = Object.assign({}, legacy, {
          id: uid,
          uid,
          correo: email,
          rol: rolSinPermiso(legacy.rol || (legacy.datos && legacy.datos.tipoRegistro)),
          asistencias: Array.isArray(legacy.asistencias) ? legacy.asistencias : [],
          migradoDe: legacyId,
          migradoEn: new Date().toISOString(),
          actualizado: new Date().toISOString()
        });
        await withTimeout(fb.setDoc(fb.doc(fb.db, 'inscripciones', uid), copia, { merge: true }), 6000);
        myProfile = copia;
        perfilEnNube = true;
        guardarPerfilLocal();
        return myProfile;
      }
    } catch (e) {}
  }
  return null;
}

/* Lee el rol con permisos desde Firestore: roles/{correo}. Solo cuentas con correo verificado. */
async function loadPrivRole(user) {
  privRole = '';
  if (!user || !user.email) return '';
  const email = String(user.email).trim().toLowerCase();
  if (user.emailVerified && email === ADMIN) { privRole = 'admin'; return privRole; }
  if (!user.emailVerified || !fb || !fb.db) return '';
  try {
    const snap = await withTimeout(fb.getDoc(fb.doc(fb.db, 'roles', email)), 6000);
    if (snap.exists()) {
      const r = String((snap.data() || {}).rol || '').toLowerCase();
      if (r === 'coordinador' || r === 'asesor') privRole = r;
    }
  } catch (e) {}
  return privRole;
}

/* Vigila roles/{correo} en vivo: si la Cuenta Maestra habilita a alguien con la sesión abierta,
   el rango y el menú de coordinador aparecen al instante (sin cerrar sesión). */
let rolUnsub = null;
function vigilarRol(user) {
  if (rolUnsub) { try { rolUnsub(); } catch (e) {} rolUnsub = null; }
  if (!user || !user.email || !user.emailVerified || !fb || !fb.db || !fb.onSnapshot) return;
  const email = String(user.email).trim().toLowerCase();
  if (email === ADMIN) return;
  const uidAct = user.uid;
  try {
    rolUnsub = fb.onSnapshot(fb.doc(fb.db, 'roles', email), (snap) => {
      if (!currentUser || currentUser.uid !== uidAct) return;
      let r = '';
      if (snap.exists()) {
        const v = String((snap.data() || {}).rol || '').toLowerCase();
        if (v === 'coordinador' || v === 'asesor') r = v;
      }
      if (!r && privRole && privRole !== 'admin' && !snap.exists()) {
        /* rol quitado por la Cuenta Maestra: respetar el rol antiguo si lo hay */
        r = rolAntiguo(email, perfilEnNube ? myProfile : null) || '';
      }
      if (r === privRole) return;
      privRole = r;
      updateAuthUI();
      if (isMemberUI()) { iniciarEscuchasDeMiembro(); upsertMiembro(); }
      if (coordUI()) { showFab(); loadAllInscripciones(); }
      try { if (document.querySelector('.p-modal')) openAuthModal(); } catch (e) {}
      try { refreshBadges(); } catch (e) {}
    }, () => {});
  } catch (e) {}
}

/* ===================== presencia: punto verde cuando la app está abierta ===================== */
let presenciaMap = new Map(); // uid -> ms del último latido con la app abierta
let presenciaTimer = 0, presenciaUnsub = null;
const PRESENCIA_MAX_MS = 4 * 60 * 1000;
function estaEnLinea(uid) { const t = presenciaMap.get(uid); return !!t && Date.now() - t < PRESENCIA_MAX_MS; }
/* Pinta el punto verde en los elementos con data-pres, sin volver a dibujar la lista */
function repintarEnLinea() {
  document.querySelectorAll('[data-pres]').forEach((el) => el.classList.toggle('en-linea', estaEnLinea(el.dataset.pres)));
}
async function latidoPresencia(activo) {
  if (!currentUser || !fb || !fb.db || !isMemberUI()) return;
  try { await withTimeout(fb.setDoc(fb.doc(fb.db, 'presencia', currentUser.uid), { uid: currentUser.uid, activo: !!activo, visto: fb.serverTimestamp() }, { merge: true }), 5000); } catch (e) {}
}
function iniciarPresencia() {
  if (presenciaTimer || !currentUser || !isMemberUI() || !fb || !fb.onSnapshot || !fb.db) return;
  if (!presenciaUnsub) {
    try {
      presenciaUnsub = fb.onSnapshot(fb.collection(fb.db, 'presencia'), (snap) => {
        const m = new Map();
        snap.forEach((d) => { const x = d.data() || {}; if (x.activo && x.visto && x.visto.toMillis) m.set(d.id, x.visto.toMillis()); });
        presenciaMap = m;
        repintarEnLinea();
      }, () => {});
    } catch (e) {}
  }
  latidoPresencia(document.visibilityState === 'visible');
  presenciaTimer = setInterval(() => { if (document.visibilityState === 'visible') latidoPresencia(true); }, 2 * 60 * 1000);
}
function pararPresencia() {
  if (presenciaTimer) { clearInterval(presenciaTimer); presenciaTimer = 0; }
  if (presenciaUnsub) { try { presenciaUnsub(); } catch (e) {} presenciaUnsub = null; }
  presenciaMap = new Map();
}
/* Con la app en segundo plano o minimizada, el punto se apaga al instante */
document.addEventListener('visibilitychange', () => {
  if (!currentUser || !presenciaTimer) return;
  latidoPresencia(document.visibilityState === 'visible');
});

async function refrescarListasRoles() {
  try {
    const s = await withTimeout(fb.getDoc(fb.doc(fb.db, 'site', 'config')), 6000);
    tomarListasRoles(s.exists() ? s.data() : {});
  } catch (e) {}
  return listasRoles.cargadas;
}
/* Coordinadores y asesores de antes: siguen siéndolo sin que nadie tenga que volver a asignarlos */
async function cargarRolAntiguo(user) {
  if (privRole || !user || !user.email || !user.emailVerified || !fb || !fb.db) return privRole;
  const email = String(user.email).trim().toLowerCase();
  if (email !== GABRIEL_CORREO) await refrescarListasRoles();
  let r = rolAntiguo(email, perfilEnNube ? myProfile : null);
  if (!r && perfilEnNube && myProfile && myProfile.migradoDe) {
    try {
      const s = await withTimeout(fb.getDoc(fb.doc(fb.db, 'inscripciones', String(myProfile.migradoDe))), 6000);
      if (s.exists()) {
        const d = s.data() || {};
        if (String(d.correo || '').trim().toLowerCase() === email) r = rolConPermiso(d.rol);
      }
    } catch (e) {}
  }
  if (r) privRole = r;
  return privRole;
}

/* Directorio mínimo para que los miembros se encuentren (sin datos personales): miembros/{uid}. */
async function miniaturaFoto(src) {
  const s = String(src || '');
  if (/^https?:\/\//i.test(s)) return s.slice(0, 1500);
  if (!/^data:image\//.test(s)) return '';
  try {
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = s; });
    const cv = document.createElement('canvas'); cv.width = 96; cv.height = 96;
    const w = img.naturalWidth || img.width, h = img.naturalHeight || img.height, m = Math.min(w, h);
    cv.getContext('2d').drawImage(img, (w - m) / 2, (h - m) / 2, m, m, 0, 0, 96, 96);
    const out = cv.toDataURL('image/jpeg', 0.7);
    return out.length < 24000 ? out : '';
  } catch (e) { return ''; }
}
let miembroSubido = '';
async function upsertMiembro() {
  if (!currentUser || !fb || !fb.db) return;
  const soyMaestra = isAdminUser();
  if (!soyMaestra && (!perfilEnNube || !myProfile)) return;
  const mp = myProfile || {};
  const d = mp.datos || {};
  const nombre = String(mp.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || currentUser.displayName || (soyMaestra ? 'Cuenta Maestra JUMA' : 'Misionero JUMA')).slice(0, 80);
  const nac = String(d.nac || mp.nac || '');
  const cumple = /^\d{4}-\d{2}-\d{2}$/.test(nac) ? nac.slice(5) : '';
  const foto = await miniaturaFoto(mp.foto || d.foto || currentUser.photoURL || '');
  const rec = {
    uid: currentUser.uid,
    nombre,
    primerNombre: (d.nombres ? d.nombres.trim().split(' ')[0] : nombre.split(' ')[0]) || 'Misionero',
    foto,
    rol: myRole(),
    parroquia: String(mp.parroquia || d.parroquia || '').slice(0, 80),
    cumple,
    sexo: String(mp.sexo || d.sexo || '').slice(0, 10),
    actualizado: new Date().toISOString()
  };
  const firma = JSON.stringify(Object.assign({}, rec, { actualizado: '' }));
  if (firma === miembroSubido) return;
  try {
    await withTimeout(fb.setDoc(fb.doc(fb.db, 'miembros', currentUser.uid), rec, { merge: true }), 6000);
    miembroSubido = firma;
  } catch (e) {}
}

/* Planillas completas: solo coordinadores, asesores y la cuenta maestra (las reglas lo exigen). */
/* Amigos misioneros: los coordinadores agregan al directorio (miembros/{id}) a todos los inscritos,
   también a los que aún no han entrado a la app. Solo nombre, foto pequeña, rol sin permisos, parroquia,
   día y mes de cumpleaños y sexo (nunca cédula, teléfono ni dirección). Lo que el dueño escribió no se toca. */
let planillasCopiadas = new Set();
let sincronizandoDirectorio = false;
async function sincronizarDirectorio() {
  if (sincronizandoDirectorio || !coordUI() || !fb || !fb.db || !fb.getDocs || !currentUser) return;
  sincronizandoDirectorio = true;
  try {
    const snap = await withTimeout(fb.getDocs(fb.collection(fb.db, 'miembros')), 8000);
    const existentes = new Map();
    snap.forEach((d) => existentes.set(d.id, d.data() || {}));
    for (const rec of allInscripciones.slice()) {
      const id = String((rec && rec.id) || '').trim();
      if (!id || id.includes('/')) continue;
      const ya = existentes.get(id);
      if (ya && !ya.sinCuenta) continue; // ya lo mantiene su dueño (o ya se agregó)
      const d = rec.datos || {};
      const nombre = String(rec.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || '').replace(/\s+/g, ' ').trim().slice(0, 80);
      if (!nombre) continue;
      const nac = String(d.nac || rec.nac || '');
      const doc = {
        uid: id,
        nombre,
        primerNombre: ((d.nombres ? d.nombres.trim().split(' ')[0] : nombre.split(' ')[0]) || 'Misionero').slice(0, 40),
        foto: await miniaturaFoto(rec.foto || d.foto || ''),
        rol: rolSinPermiso(userRole(rec)),
        parroquia: String(rec.parroquia || d.parroquia || '').slice(0, 80),
        cumple: /^\d{4}-\d{2}-\d{2}$/.test(nac) ? nac.slice(5) : '',
        sexo: String(rec.sexo || d.sexo || '').slice(0, 10)
      };
      const sinCuenta = /^juma-/.test(id);
      if (sinCuenta) doc.sinCuenta = true;
      if (ya && ['nombre', 'primerNombre', 'foto', 'rol', 'parroquia', 'cumple', 'sexo'].every((k) => String(ya[k] || '') === String(doc[k] || ''))) continue;
      doc.actualizado = new Date().toISOString();
      try { await withTimeout(fb.setDoc(fb.doc(fb.db, 'miembros', id), doc), 6000); } catch (e) {}
      await new Promise((r) => setTimeout(r, 0)); // deja respirar la pantalla
    }
    /* Planillas antiguas que ya pasaron a una cuenta: se quita su entrada repetida «sin cuenta» */
    for (const id of planillasCopiadas) {
      const ya = existentes.get(id);
      if (ya && ya.sinCuenta && fb.deleteDoc) { try { await withTimeout(fb.deleteDoc(fb.doc(fb.db, 'miembros', id)), 6000); } catch (e) {} }
    }
  } catch (e) {}
  sincronizandoDirectorio = false;
}
async function loadAllInscripciones() {
  if (!coordUI() || !fb || !fb.db) return;
  try {
    const snap = await withTimeout(fb.getDocs(fb.collection(fb.db, 'inscripciones')), 8000);
    const arr = [];
    snap.docs.forEach((x) => arr.push(Object.assign({ id: x.id }, x.data())));
    /* Si una planilla antigua ya fue copiada a la cuenta nueva, se muestra solo la nueva */
    const migradas = new Set(arr.map((x) => x.migradoDe).filter(Boolean));
    planillasCopiadas = migradas;
    allInscripciones = arr.filter((x) => !migradas.has(x.id)).sort((a, b) => String(b.actualizado || '').localeCompare(String(a.actualizado || '')));
    sincronizarDirectorio();
    if (currentSection === 'comunidad') renderComunidadView();
    if (fb.setDoc) fb.setDoc(fb.doc(fb.db, 'site', 'stats'), { inscritos: allInscripciones.length }, { merge: true }).catch(() => {});
  } catch (e) {}
}

/* ===================== Navegación v2: inicio con «Cargar más», menú lateral, barra inferior y avisos ===================== */
/* El inicio es una sola página hecha de bloques (#feed > .blk) que ya están en el HTML: «Cargar más» solo los
   muestra (quita la clase .blk-oculto), así los videos, animaciones y observadores siguen funcionando igual.
   Los enlaces #quienes, #domingos, #mapa, #fe, #testimonios… muestran los bloques hasta llegar a ese y bajan hasta él. */
let currentSection = 'inicio';

let toastTimer = 0;
function showToast(msg) {
  const existing = $('#juma-toast');
  if (existing) existing.remove();
  clearTimeout(toastTimer);
  const t = document.createElement('div');
  t.id = 'juma-toast';
  t.className = 'toast';
  t.setAttribute('role', 'status');
  t.setAttribute('aria-live', 'polite');
  t.textContent = msg;
  document.body.appendChild(t);
  toastTimer = setTimeout(() => { if (t.parentNode) t.remove(); }, 3200);
}

function timeAgo(iso) {
  const d = Date.parse(iso || '');
  if (!d) return 'Reciente';
  const diffSec = Math.floor((Date.now() - d) / 1000);
  if (diffSec < 60) return 'Hace un momento';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `Hace ${diffMin} min`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `Hace ${diffHr} hora${diffHr === 1 ? '' : 's'}`;
  const diffDay = Math.floor(diffHr / 24);
  return `Hace ${diffDay} día${diffDay === 1 ? '' : 's'}`;
}

/* ---------- bloques del inicio ---------- */
const bloques = () => $$('#feed > .blk');
const siguienteOculto = () => bloques().find((b) => b.classList.contains('blk-oculto')) || null;
let unrollCheck = null; // lo define setupUnroll: vuelve a mirar qué fotos se ven para desenrollarlas
function despuesDeRevelar() {
  if (unrollCheck) { unrollCheck(); setTimeout(unrollCheck, 120); }
  /* Algunas partes (videos, mapa, carrusel) miran el desplazamiento: se les avisa que hay contenido nuevo */
  try { window.dispatchEvent(new Event('scroll')); window.dispatchEvent(new Event('resize')); } catch (e) {}
}
function revelarHasta(blk) {
  const all = bloques(); const idx = all.indexOf(blk);
  if (idx < 0) return false;
  let cambio = false;
  all.slice(0, idx + 1).forEach((b) => { if (b.classList.contains('blk-oculto')) { b.classList.remove('blk-oculto'); cambio = true; } });
  if (cambio) despuesDeRevelar();
  actualizarMas();
  return cambio;
}
function actualizarMas() {
  const box = $('#feed-more'); if (!box) return;
  const nx = siguienteOculto();
  box.innerHTML = nx
    ? `<button type="button" class="more-btn" data-cargar-mas aria-describedby="feed-more-sig"><span>${ic('down')} Cargar más</span><small id="feed-more-sig">Siguiente página: ${esc(nx.dataset.blkT || '')}</small></button>`
    : `<div class="more-line">Llegaste al final</div><button type="button" class="more-top" data-view-target="inicio">${ic('up')}Volver al inicio</button>`;
}
function cargarMas() {
  const nx = siguienteOculto(); if (!nx) return;
  nx.classList.remove('blk-oculto');
  if (!reduced()) { nx.classList.add('blk-nuevo'); setTimeout(() => nx.classList.remove('blk-nuevo'), 450); }
  despuesDeRevelar(); actualizarMas();
  const first = nx.querySelector('section[id]');
  if (first) {
    currentSection = first.id;
    try { history.replaceState(null, '', '#' + first.id); } catch (e) {}
    marcarNav(first.id);
  }
  nx.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
  /* El foco pasa al título del bloque nuevo, para quien navega con teclado o lector de pantalla */
  const h = nx.querySelector('h1, h2');
  if (h) { if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1'); try { h.focus({ preventScroll: true }); } catch (e) {} }
}

/* ---------- ir a una parte de la página ---------- */
let ajusteScroll = 0, tocoUsuario = false;
/* A dónde se pidió ir: si después llega contenido (noticias, testimonios, fotos) que empuja la página, se vuelve a ajustar */
let destinoPendiente = null;
['wheel', 'touchstart', 'keydown'].forEach((ev) => window.addEventListener(ev, () => { tocoUsuario = true; destinoPendiente = null; }, { passive: true }));
function elementoDestino(id) {
  const el = document.getElementById(id); if (!el) return null;
  if (el.getClientRects().length > 0) return el;
  const blk = el.closest('#feed > .blk'); return blk && blk.getClientRects().length ? blk : null;
}
function reajustarDestino() {
  const d = destinoPendiente;
  if (!d || tocoUsuario || Date.now() > d.hasta || VISTAS.includes(currentSection)) return;
  const el = elementoDestino(d.id); if (!el) return;
  const top = el.getBoundingClientRect().top;
  const esperado = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--top-h')) || 64) + 12;
  if (Math.abs(top - esperado) > 40) el.scrollIntoView({ behavior: 'auto', block: 'start' });
}
function bajarA(id, smooth) {
  const el = elementoDestino(id);
  if (!el) return;
  tocoUsuario = false;
  destinoPendiente = { id, hasta: Date.now() + 6000 };
  el.scrollIntoView({ behavior: smooth && !reduced() ? 'smooth' : 'auto', block: 'start' });
  /* Si una foto de arriba terminó de cargar y empujó el contenido, se corrige */
  clearTimeout(ajusteScroll);
  ajusteScroll = setTimeout(() => { reajustarDestino(); setTimeout(reajustarDestino, 1200); }, 1000);
}
const VISTAS = ['comunidad', 'biblioteca', 'juegos'];
function mostrarPagina(cual) {
  const feed = $('#feed');
  if (feed) feed.classList.toggle('hide', VISTAS.includes(cual));
  VISTAS.forEach((v) => { const el = $('#view-' + v); if (el) el.classList.toggle('hide', cual !== v); });
}
/* Devuelve el id al que se fue ('comunidad', 'inicio' o el id de la sección / ancla) */
function irA(destino, opt = {}) {
  let id = String(destino || '').replace(/^#\/?/, '').trim() || 'inicio';
  if (id === 'main' || id === 'contenido') id = 'inicio';
  /* Enlace de un aviso del teléfono (#mensajes): abre el chat en cuanto la sesión esté lista */
  if (id === 'mensajes') {
    chatPendiente = true;
    id = 'inicio';
    try { history.replaceState(null, '', location.pathname + location.search + '#inicio'); } catch (e) {}
    setTimeout(abrirChatPendiente, 0);
  }
  if (VISTAS.includes(id)) {
    mostrarPagina(id);
    currentSection = id;
    if (id === 'comunidad') renderComunidadView();
    else if (id === 'biblioteca') renderBibliotecaView();
    else renderJuegosView();
    if (opt.scroll !== false) window.scrollTo({ top: 0, behavior: 'auto' });
    marcarNav(id);
    return id;
  }
  const feed = $('#feed');
  let el = document.getElementById(id);
  if (!el || !feed || !feed.contains(el)) { id = 'inicio'; el = document.getElementById('inicio'); }
  mostrarPagina('inicio');
  const blk = el.closest('#feed > .blk');
  if (blk) revelarHasta(blk);
  currentSection = id;
  marcarNav(id);
  if (opt.scroll !== false) {
    if (id === 'inicio') { destinoPendiente = null; window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); }
    /* Una sección escondida (por ejemplo testimonios todavía sin contenido) lleva a su bloque, y se ajusta cuando aparezca */
    else requestAnimationFrame(() => bajarA(id, opt.smooth !== false));
  }
  return id;
}
let chatPendiente = false;
function abrirChatPendiente() {
  if (!chatPendiente || !currentUser || !isMemberUI()) return;
  chatPendiente = false;
  if (modalKey !== 'chat') openChatModal();
}
function switchSection(sectionId, updateHash = true) {
  if (modalRoot && modalRoot.firstChild && modalKey !== 'force-photo') closeModal();
  cerrarMenu(false);
  const id = irA(sectionId);
  if (updateHash && location.hash !== '#' + id) {
    try { history.pushState(null, '', '#' + id); } catch (e) {}
  }
}
/* Para js/fe.js (oraciones y mapa) y cualquier otro módulo de la página */
window.JUMA_NAV = {
  revelar(id) { const el = document.getElementById(String(id || '').replace(/^#/, '')); const blk = el && el.closest('#feed > .blk'); if (blk) { mostrarPagina('inicio'); revelarHasta(blk); } return !!el; },
  ir(id) { switchSection(id); }
};

/* ---------- menú lateral, barra inferior y hoja de secciones ---------- */
const NAV_CONOCENOS = [
  ['inicio', 'Inicio', 'home'],
  ['quienes', 'Quiénes somos', 'users'],
  ['vive', 'Así se vive', 'sparkles'],
  ['domingos', 'Domingos', 'calendar'],
  ['consolata', 'La Consolata', 'globe'],
  ['formacion', 'Formación', 'cap'],
  ['fe', 'Vida de fe', 'book'],
  ['novedades', 'Noticias', 'news'],
  ['galeria', 'Galería', 'image'],
  ['biblioteca', 'Biblioteca', 'library'],
  ['juegos', 'Juegos', 'gamepad'],
  ['unete', 'Únete a JUMA', 'userplus']
];
/* Qué entrada del menú se ilumina según la parte de la página que se está viendo */
const NAV_DE_SECCION = { biblioteca: 'biblioteca', juegos: 'juegos', inicio: 'inicio', quienes: 'quienes', vive: 'vive', domingos: 'domingos', pilares: 'domingos', consolata: 'consolata', mapa: 'consolata', identidad: 'consolata', formacion: 'formacion', fe: 'fe', areas: 'fe', novedades: 'novedades', testimonios: 'novedades', galeria: 'galeria', 'muro-sec': 'galeria', logo: 'unete', unete: 'unete', comunidad: 'comunidad' };
let navActual = 'inicio';
function seccionDeElemento(id) {
  if (NAV_DE_SECCION[id]) return NAV_DE_SECCION[id];
  const el = document.getElementById(id);
  const sec = el && el.closest('#feed section[id]');
  return sec ? (NAV_DE_SECCION[sec.id] || 'inicio') : 'inicio';
}
function marcarNav(id) {
  navActual = seccionDeElemento(id);
  $$('[data-nav]').forEach((a) => {
    if (a.dataset.nav === navActual) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  $$('#tabbar [data-tb]').forEach((t) => {
    const on = (t.dataset.tb === 'noticias' && navActual === 'novedades') || (t.dataset.tb === 'inicio' && navActual !== 'novedades' && navActual !== 'comunidad' && navActual !== 'biblioteca' && navActual !== 'juegos');
    if (on) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
  });
}
function navItem(k, t, i, extra = '') {
  return `<a class="nav-it" href="#${k}" data-nav="${k}" data-view-target="${k}"${k === 'novedades' ? ' id="nav-nov"' : ''}${k === 'comunidad' ? ' id="nav-comunidad"' : ''}>${ic(i)}<span>${esc(t)}</span>${extra}</a>`;
}
function datosCabecera() {
  const d = (myProfile && myProfile.datos) || {};
  const fullName = String(
    (myProfile && (myProfile.nombre || (d.nombres ? (d.nombres + ' ' + (d.apellidos || '')).trim() : ''))) ||
    (currentUser && currentUser.displayName) ||
    (currentUser && currentUser.email ? currentUser.email.split('@')[0] : '') ||
    'Mi perfil'
  ).trim();
  const nombreCorto = (d.nombres ? d.nombres.trim().split(' ')[0] : (fullName ? fullName.split(' ')[0] : 'Mi perfil')) || 'Mi perfil';
  const foto = (myProfile && (myProfile.foto || d.foto)) || (currentUser && currentUser.photoURL) || '';
  return { fullName, nombreCorto, foto };
}
/* Foto redonda con la inicial debajo: si la foto no carga, queda la inicial */
const avatarHtml = (foto, letra, cls = '') => `<span class="avatar ${cls}"><span aria-hidden="true">${esc(letra)}</span>${foto ? `<img src="${esc(foto)}" alt="" onerror="this.remove()">` : ''}</span>`;
function renderShell() {
  const side = $('#sidebar'); const tabs = $('#tabbar');
  const isAuth = !!currentUser;
  const coord = coordUI();
  const editor = typeof isEditor === 'function' && isEditor();
  const hayNoticias = getPostsList(cfg).length > 0;
  const conocenos = NAV_CONOCENOS.filter(([k]) => !(isAuth && k === 'novedades'));
  if (side) {
    const { fullName, nombreCorto, foto } = datosCabecera();
    const rolTxt = isAuth ? (privRole === 'admin' ? 'Cuenta maestra' : roleLabel(myRole())) : '';
    side.innerHTML = `
      <div class="side-top"><img src="img/logo.png" alt=""><b>JUMA Duaca</b><button type="button" class="icon-btn side-x" data-close-menu aria-label="Cerrar menú">${ic('x')}</button></div>
      <nav class="nav-group" aria-label="Conócenos"><h2>Conócenos</h2>${conocenos.map(([k, t, i]) => navItem(k, t, i)).join('')}</nav>
      ${isAuth ? `<nav class="nav-group" aria-label="Comunidad"><h2>Comunidad</h2>
        ${navItem('novedades', 'Noticias', 'news')}
        <button type="button" class="nav-it" data-open-chat>${ic('msg')}<span>Mensajes</span><span class="num hide" id="side-chat-badge"></span></button>
        <button type="button" class="nav-it" data-open-notifs>${ic('bell')}<span>Notificaciones</span><span class="num hide" id="side-notif-badge"></span></button>
        ${navItem('comunidad', 'Amigos', 'users')}
        <button type="button" class="nav-it" data-open-encuentros>${ic('calcheck')}<span>Eventos</span></button>
        <button type="button" class="nav-it" data-open-auth>${ic('user')}<span>Mi perfil</span></button>
      </nav>` : ''}
      ${coord || editor ? `<nav class="nav-group" aria-label="Coordinación"><h2>Coordinación</h2>
        ${coord ? `<button type="button" class="nav-it" data-coord-panel="ins">${ic('users')}<span>Inscritos</span></button>
        <button type="button" class="nav-it" data-coord-panel="qr">${ic('camera')}<span>Asistencia con QR</span></button>
        <button type="button" class="nav-it" data-coord-panel="cum">${ic('cake')}<span>Cumpleaños y flyers</span></button>` : ''}
        <button type="button" class="nav-it" data-coord-panel="">${ic('edit')}<span>Editar la página</span></button>
      </nav>` : ''}
      ${isAuth
        ? `<div class="side-card"><div class="me">${avatarHtml(foto, nombreCorto.charAt(0).toUpperCase())}<div><b>${esc(fullName)}</b><span>${esc(rolTxt)}</span></div></div></div>`
        : `<div class="side-card"><b>¿Eres de JUMA?</b>Inicia sesión para ver mensajes, amigos, eventos y tu carnet.<button type="button" class="btn btn-primary" data-open-auth>${ic('login')}Iniciar sesión</button></div>`}`;
    const nn = $('#nav-nov'); if (nn) nn.classList.toggle('hide', !hayNoticias);
  }
  if (tabs) {
    const tb = (k, t, i, extra = '') => { const dest = k === 'noticias' ? 'novedades' : 'inicio'; return `<a class="tb" href="#${dest}" data-tb="${k}" data-view-target="${dest}">${ic(i)}<span>${t}</span>${extra}</a>`; };
    tabs.innerHTML = isAuth
      ? tb('inicio', 'Inicio', 'home') +
        `<button type="button" class="tb" data-open-guest-menu aria-haspopup="dialog">${ic('grid')}<span>Secciones</span></button>` +
        tb('noticias', 'Noticias', 'news') +
        `<button type="button" class="tb" data-open-chat aria-label="Mensajes">${ic('msg')}<span>Mensajes</span><span class="dot hide" id="tab-chat-badge"></span></button>` +
        `<button type="button" class="tb" data-open-auth>${ic('user')}<span>Perfil</span></button>`
      : tb('inicio', 'Inicio', 'home') +
        `<button type="button" class="tb" data-open-guest-menu aria-haspopup="dialog">${ic('grid')}<span>Secciones</span></button>` +
        `<button type="button" class="tb" data-open-form>${ic('userplus')}<span>Únete</span></button>`;
  }
  marcarNav(currentSection);
}

/* Cajón del menú en tableta (y en teléfono si alguien lo abre) */
let focoAntesMenu = null;
function abrirMenu() {
  const side = $('#sidebar'); if (!side) return;
  focoAntesMenu = document.activeElement;
  side.classList.add('open'); $('#scrim').classList.add('on');
  const b = $('#menu-btn'); if (b) b.setAttribute('aria-expanded', 'true');
  setTimeout(() => { const f = side.querySelector('[aria-current="page"], .nav-it'); if (f) f.focus(); }, 40);
}
function cerrarMenu(volverFoco = true) {
  const side = $('#sidebar'); if (!side || !side.classList.contains('open')) return;
  side.classList.remove('open'); $('#scrim').classList.remove('on');
  const b = $('#menu-btn'); if (b) b.setAttribute('aria-expanded', 'false');
  if (volverFoco && focoAntesMenu && document.contains(focoAntesMenu)) { try { focoAntesMenu.focus(); } catch (e) {} }
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth >= 1024) cerrarMenu(false); }, { passive: true });

/* Mientras se baja por el inicio, el menú marca la sección que se está viendo */
(function espiaSecciones() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((es) => {
    if (currentSection === 'comunidad') return;
    es.forEach((e) => { if (e.isIntersecting) marcarNav(e.target.id); });
  }, { rootMargin: '-40% 0px -55% 0px' });
  $$('#feed section[id]').forEach((s) => io.observe(s));
})();

/* ---------- Marcas de lectura por usuario: lecturas/{uid} en Firestore + copia en este teléfono ----------
   Se comparan siempre con la hora del SERVIDOR de cada mensaje (creado), nunca con el reloj de otro teléfono. */
const LECTURAS_VACIAS = () => ({ chatGeneral: 0, chatCoord: 0, dm: {}, notifVistos: [] });
let lecturas = LECTURAS_VACIAS();
let lecturasTimer = 0;
let lecturasPendientes = false;
const lecturasKey = (uid) => 'juma-lecturas-' + uid;
function mezclarLecturas(a, b) {
  a = a || {}; b = b || {};
  const out = {
    chatGeneral: Math.max(+a.chatGeneral || 0, +b.chatGeneral || 0),
    chatCoord: Math.max(+a.chatCoord || 0, +b.chatCoord || 0),
    dm: Object.assign({}, a.dm || {}),
    notifVistos: []
  };
  Object.keys(b.dm || {}).forEach((k) => { out.dm[k] = Math.max(+out.dm[k] || 0, +b.dm[k] || 0); });
  out.notifVistos = Array.from(new Set([].concat(a.notifVistos || [], b.notifVistos || []))).slice(-300);
  return out;
}
async function cargarLecturas() {
  lecturas = LECTURAS_VACIAS();
  if (!currentUser) return;
  const uid = currentUser.uid;
  try { const s = localStorage.getItem(lecturasKey(uid)); if (s) lecturas = mezclarLecturas(lecturas, JSON.parse(s)); } catch (e) {}
  refreshBadges();
  if (fb && fb.db) {
    try {
      const snap = await withTimeout(fb.getDoc(fb.doc(fb.db, 'lecturas', uid)), 6000);
      if (snap.exists() && currentUser && currentUser.uid === uid) lecturas = mezclarLecturas(lecturas, snap.data());
    } catch (e) {}
  }
  refreshBadges();
}
function escribirLecturasNube(uid) {
  lecturasPendientes = false;
  if (!fb || !fb.db || !uid) return Promise.resolve();
  return fb.setDoc(fb.doc(fb.db, 'lecturas', uid), {
    chatGeneral: lecturas.chatGeneral,
    chatCoord: lecturas.chatCoord,
    dm: lecturas.dm,
    notifVistos: lecturas.notifVistos,
    actualizado: fb.serverTimestamp()
  }, { merge: true }).catch(() => {});
}
function guardarLecturas() {
  if (!currentUser) return;
  const uid = currentUser.uid;
  try { localStorage.setItem(lecturasKey(uid), JSON.stringify(lecturas)); } catch (e) {}
  lecturasPendientes = true;
  clearTimeout(lecturasTimer);
  lecturasTimer = setTimeout(() => { if (currentUser && currentUser.uid === uid) escribirLecturasNube(uid); }, 700);
}
function flushLecturas() {
  clearTimeout(lecturasTimer);
  if (lecturasPendientes && currentUser) return escribirLecturasNube(currentUser.uid);
  return Promise.resolve();
}

/* ---------- Mensajes: hora del servidor, dueño y canal ---------- */
function msgTime(m) {
  if (!m) return 0;
  const c = m.creado;
  if (c && typeof c.toMillis === 'function') return c.toMillis();
  if (c && typeof c.seconds === 'number') return c.seconds * 1000;
  return Date.parse(m.fecha || '') || 0;
}
function miUid() { return currentUser ? currentUser.uid : ''; }
function miCorreo() { return String((currentUser && currentUser.email) || '').trim().toLowerCase(); }
function esMio(m) {
  const uid = miUid(), email = miCorreo();
  return !!((uid && (m.uid === uid || m.deUid === uid)) || (email && m.correo && String(m.correo).toLowerCase() === email));
}
const canalDe = (m) => (m && m.canal) || 'general';
function dmKeyDe(m) { return (m && m.dmKey) || [(m && (m.deUid || m.uid)) || '', (m && m.paraUid) || ''].sort().join('_'); }
function dmKeyCon(targetUid) { return [miUid(), targetUid || ''].sort().join('_'); }
function esDmParaMi(m) {
  const uid = miUid(), email = miCorreo();
  return canalDe(m) === 'dm' && !!((uid && m.paraUid === uid) || (email && m.paraEmail && String(m.paraEmail).toLowerCase() === email));
}
function chatUnreadCounts() {
  const out = { general: 0, coord: 0, dm: 0, porDm: {}, total: 0 };
  if (!isMemberUI()) return out;
  const coord = coordUI();
  (chatMessages || []).forEach((m) => {
    if (!m || esMio(m)) return;
    const t = msgTime(m);
    const c = canalDe(m);
    if (c === 'general') { if (t > lecturas.chatGeneral) out.general++; }
    else if (c === 'coord') { if (coord && t > lecturas.chatCoord) out.coord++; }
    else if (c === 'dm' && esDmParaMi(m)) {
      const k = dmKeyDe(m);
      if (t > (+lecturas.dm[k] || 0)) { out.dm++; out.porDm[k] = (out.porDm[k] || 0) + 1; }
    }
  });
  out.total = out.general + out.coord + out.dm;
  return out;
}
function getUnreadChatCount() { return chatUnreadCounts().total; }
function maxTiempo(filtro) {
  let mx = 0;
  (chatMessages || []).forEach((m) => { if (m && filtro(m)) mx = Math.max(mx, msgTime(m)); });
  return mx;
}
/* Marca como leído lo que el usuario está viendo AHORA en el chat (canal o conversación abierta). */
function marcarVistaChatActual() {
  if (!currentUser || modalKey !== 'chat' || chatActiveTab !== 'chat') return false;
  let changed = false;
  if (chatChannel === 'general') {
    const t = maxTiempo((m) => canalDe(m) === 'general');
    if (t > lecturas.chatGeneral) { lecturas.chatGeneral = t; changed = true; }
  } else if (chatChannel === 'coord' && coordUI()) {
    const t = maxTiempo((m) => canalDe(m) === 'coord');
    if (t > lecturas.chatCoord) { lecturas.chatCoord = t; changed = true; }
  } else if (chatChannel === 'dm' && chatDmTarget) {
    const k = dmKeyCon(chatDmTarget.uid || chatDmTarget.id);
    const t = maxTiempo((m) => canalDe(m) === 'dm' && dmKeyDe(m) === k);
    if (t > (+lecturas.dm[k] || 0)) { lecturas.dm[k] = t; changed = true; }
  }
  if (changed) guardarLecturas();
  refreshBadges();
  return changed;
}

/* ---------- Notificaciones internas (campana) ----------
   Cada aviso tiene un id estable. Los «fijos» (próximo encuentro, carnet, recordatorio de chat) nunca
   cuentan para el punto rojo. Al abrir la campana o «Avisos y Novedades» se marcan todos como vistos. */
function idDePost(post) {
  return 'post-' + String(post.id || sha256(String(post.t || '') + '|' + String(post.fecha || '')).slice(0, 16));
}
function getInternalNotifications() {
  const notifs = [];
  if (!currentUser) return notifs;
  const hoy = todayIso();
  const mmdd = hoy.slice(5);

  // 1. Cumpleaños de hoy (del directorio de miembros)
  const yaCumple = new Set();
  const fuentes = (miembros || []).slice();
  (allInscripciones || []).forEach((r) => {
    const nac = String((r && ((r.datos && r.datos.nac) || r.nac)) || '');
    if (/^\d{4}-\d{2}-\d{2}$/.test(nac)) fuentes.push({ uid: r.uid || r.id, nombre: r.nombre || ((r.datos && ((r.datos.nombres || '') + ' ' + (r.datos.apellidos || '')).trim()) || ''), cumple: nac.slice(5), sexo: r.sexo || (r.datos && r.datos.sexo) || '' });
  });
  fuentes.forEach((p) => {
    if (!p || !p.uid || p.cumple !== mmdd || p.uid === miUid() || yaCumple.has(p.uid)) return;
    yaCumple.add(p.uid);
    const isF = p.sexo === 'Mujer';
    notifs.push({
      id: 'cumple-' + p.uid + '-' + hoy,
      icon: 'cake',
      iconBg: '#FEF3C7',
      iconColor: '#92400E',
      title: isF ? '¡Cumpleaños de una hermana misionera!' : '¡Cumpleaños de un hermano misionero!',
      body: `Hoy <b>${esc(p.nombre)}</b> está de cumpleaños. ¡Felicítale en su día!`,
      time: 'Hoy',
      action: { type: 'dm', uid: p.uid, icon: 'msg', label: 'Felicitar por chat' }
    });
  });

  // 2. Próximo encuentro (fijo: no cuenta para el punto rojo)
  const prox = encuentrosProgramados()[0];
  notifs.push({
    id: 'encuentro-' + (prox ? prox.key : 'prox'),
    fijo: true,
    icon: 'pin',
    iconBg: '#E0E7FF',
    iconColor: '#2452C8',
    title: 'Próximo Encuentro de JUMA',
    body: `<b>${esc(prox ? prox.tema : 'Encuentro JUMA')}</b>${prox ? ' · ' + esc(prox.diaSem + ' ' + prox.dia + ' de ' + prox.mes) : ''} a las ${esc(hora())} en ${esc(lugar())}.`,
    time: prox && prox.isToday ? 'Hoy' : 'Próximamente',
    action: { type: 'maps', url: mapsUrl(), icon: 'pin', label: 'Cómo llegar en Google Maps' }
  });

  // 3. Noticias del muro (las 3 más recientes)
  getPostsList(cfg).slice(0, 3).forEach((post) => {
    if (!post) return;
    notifs.push({
      id: idDePost(post),
      icon: 'news',
      iconBg: '#E4F5EA',
      iconColor: '#17824A',
      title: post.t ? esc(post.t) : 'Novedad de JUMA Duaca',
      body: post.x ? esc(String(post.x).slice(0, 100)) + (String(post.x).length > 100 ? '…' : '') : 'Publicación en el muro de JUMA.',
      time: post.fecha ? timeAgo(post.fecha) : 'Reciente',
      action: { type: 'section', section: 'novedades', icon: 'news', label: 'Ver noticia' }
    });
  });

  // 4. Mensajes sin leer (fijo: ya tienen su propio globo en el botón de chat)
  const unreadChat = getUnreadChatCount();
  if (unreadChat > 0) {
    notifs.push({
      id: 'chat-unread',
      fijo: true,
      icon: 'msg',
      iconBg: '#FCE7F3',
      iconColor: '#9D174D',
      title: 'Mensajes sin leer',
      body: `Tienes <b>${unreadChat} mensaje${unreadChat === 1 ? '' : 's'} nuevo${unreadChat === 1 ? '' : 's'}</b> en la app.`,
      time: 'Ahora',
      action: { type: 'chat', icon: 'msg', label: 'Abrir chat' }
    });
  }

  // 5. Carnet Misionero (fijo)
  if (myProfile && perfilEnNube) {
    notifs.push({
      id: 'carnet-ok',
      fijo: true,
      icon: 'idcard',
      iconBg: '#E8F1FF',
      iconColor: '#0C2D74',
      title: 'Carnet Misionero Digital Activo',
      body: 'Tu Carnet Misionero oficial con Código QR está disponible para presentar o descargar.',
      time: 'Siempre activo',
      action: { type: 'profile', icon: 'idcard', label: 'Ver mi carnet' }
    });
  }
  return notifs;
}
function getUnreadNotifCount() {
  if (!currentUser) return 0;
  const vistos = new Set(lecturas.notifVistos || []);
  return getInternalNotifications().filter((n) => !n.fijo && !vistos.has(n.id)).length;
}
function marcarNotificacionesVistas() {
  if (!currentUser) return;
  const set = new Set(lecturas.notifVistos || []);
  let changed = false;
  getInternalNotifications().forEach((n) => { if (!n.fijo && !set.has(n.id)) { set.add(n.id); changed = true; } });
  if (changed) { lecturas.notifVistos = Array.from(set).slice(-300); guardarLecturas(); }
  refreshBadges();
}

/* ---------- Un solo lugar que actualiza TODOS los globos rojos ---------- */
function setBadge(sel, n) {
  const el = $(sel);
  if (!el) return;
  if (n > 0) {
    const estaba = el.classList.contains('hide');
    el.textContent = n > 99 ? '99+' : String(n); el.classList.remove('hide');
    if (estaba && !reduced()) { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  }
  else { el.textContent = ''; el.classList.add('hide'); }
}
function refreshBadges() {
  const chat = getUnreadChatCount();
  const notif = getUnreadNotifCount();
  /* Barra superior, menú lateral, barra inferior del teléfono y botón de mensajes del perfil */
  ['#top-chat-badge', '#side-chat-badge', '#tab-chat-badge', '#profile-chat-badge'].forEach((b) => setBadge(b, chat));
  ['#top-notif-badge', '#side-notif-badge'].forEach((b) => setBadge(b, notif));
  const bell = $('#btn-top-notif'); if (bell) bell.setAttribute('aria-label', notif ? `Notificaciones, ${notif} nueva${notif === 1 ? '' : 's'}` : 'Notificaciones');
  const msg = $('#btn-top-chat'); if (msg) msg.setAttribute('aria-label', chat ? `Mensajes, ${chat} sin leer` : 'Mensajes');
  try {
    if (navigator.setAppBadge) {
      if (chat + notif > 0) navigator.setAppBadge(chat + notif).catch(() => {});
      else if (navigator.clearAppBadge) navigator.clearAppBadge().catch(() => {});
    }
  } catch (e) {}
}
function updateNotifBadge() { refreshBadges(); }
function updateChatBadge() { refreshBadges(); }

function openNotificationsModal() {
  if (!currentUser) { openAuthModal(); return; }
  const notifs = getInternalNotifications();
  const vistos = new Set(lecturas.notifVistos || []);
  const html = `<div class="overlay overlay-pop" role="dialog" aria-modal="true" aria-labelledby="notif-t">
    <div class="sheet notif-sheet">
      <div class="chat-top notif-head">
        <div style="display:flex;align-items:center;gap:10px;min-width:0">
          <span class="ico-badge" aria-hidden="true">${ic('bell')}</span>
          <div style="min-width:0">
            <b id="notif-t" style="font-size:17px;display:block">Notificaciones</b>
            <small style="font-size:12.5px">Novedades internas de JUMA Duaca</small>
          </div>
        </div>
        <button type="button" class="x-btn" data-close aria-label="Cerrar notificaciones">${ic('x')}</button>
      </div>
      <div class="notif-list">
        ${!notifs.length ? `<div class="chat-empty">No hay notificaciones nuevas por ahora.</div>` : notifs.map((n) => {
          const nueva = !n.fijo && !vistos.has(n.id);
          return `
          <div class="notif-item${nueva ? ' new' : ''}">
            <div class="notif-icon" style="background:${n.iconBg};color:${n.iconColor || 'var(--royal)'}" aria-hidden="true">${ic(n.icon)}</div>
            <div style="flex:1 1 auto;min-width:0">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:2px">
                <b style="font-size:15px;color:var(--navy)">${n.title}${nueva ? '<span class="notif-new">Nuevo</span>' : ''}</b>
                <span style="font-size:12px;color:var(--muted);flex:0 0 auto">${n.time}</span>
              </div>
              <p style="margin:0 0 8px;font-size:14px;color:var(--ink);line-height:1.45">${n.body}</p>
              ${n.action ? (
                n.action.type === 'maps'
                  ? `<a class="btn btn-soft btn-sm" href="${esc(n.action.url)}" target="_blank" rel="noopener" style="min-height:36px;padding:0 12px;font-size:13px;background:#E8F1FF;color:var(--royal);font-weight:700">${ic(n.action.icon || 'pin')}${n.action.label}</a>`
                  : `<button type="button" class="btn btn-soft btn-sm" data-notif-act="${esc(n.action.type)}" data-notif-val="${esc(n.action.uid || n.action.section || '')}" style="min-height:36px;padding:0 12px;font-size:13px;background:#E8F1FF;color:var(--royal);font-weight:700">${n.action.icon ? ic(n.action.icon) : ''}${n.action.label}</button>`
              ) : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="notif-foot" style="padding:10px 16px calc(10px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:10px">
        <span style="font-size:12.5px;color:var(--muted)">Notificaciones internas de la app</span>
        <button type="button" class="btn btn-primary btn-sm" data-close style="min-height:40px;padding:0 18px">Cerrar</button>
      </div>
    </div>
  </div>`;
  openModal(html, 'notifs');
  marcarNotificacionesVistas();
}

/* Hoja «Secciones» (barra inferior del teléfono): las mismas entradas del menú lateral */
function openGuestMenuModal() {
  const isAuth = !!currentUser;
  const item = (k, t, i) => `<button type="button" class="nav-it" data-guest-nav="${k}"${seccionDeElemento(currentSection) === k ? ' aria-current="page"' : ''}>${ic(i)}<span>${esc(t)}</span></button>`;
  const html = `<div class="overlay overlay-sheet" role="dialog" aria-modal="true" aria-labelledby="gm-t">
    <div class="sheet sheet-auto" style="max-width:440px">
      <div class="chat-top notif-head">
        <div><b id="gm-t" style="font-size:19px;display:block">Secciones</b><small style="font-size:12.5px">JUMA Duaca · todo en una página</small></div>
        <button type="button" class="x-btn" data-close aria-label="Cerrar secciones">${ic('x')}</button>
      </div>
      <div style="padding:12px 14px 18px;display:flex;flex-direction:column;gap:4px">
        ${NAV_CONOCENOS.filter(([k]) => !(isAuth && k === 'novedades')).map(([k, t, i]) => item(k, t, i)).join('')}
        ${isAuth ? `<div class="nav-group" style="margin-top:10px"><h2>Comunidad</h2>
          ${item('novedades', 'Noticias', 'news')}
          ${item('comunidad', 'Amigos', 'users')}
          <button type="button" class="nav-it" data-open-notifs>${ic('bell')}<span>Notificaciones</span></button>
          <button type="button" class="nav-it" data-open-encuentros>${ic('calcheck')}<span>Eventos</span></button>
        </div>` : `<div style="margin-top:10px;padding-top:14px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:8px">
          <button type="button" class="btn btn-primary" data-open-form style="width:100%">${ic('userplus')}Quiero ser parte (Inscripción)</button>
          <button type="button" class="btn btn-ghost" data-open-auth style="width:100%">${ic('login')}Iniciar sesión</button>
        </div>`}
        ${coordUI() || isEditor() ? `<div class="nav-group" style="margin-top:10px"><h2>Coordinación</h2>
          ${coordUI() ? `<button type="button" class="nav-it" data-coord-panel="qr">${ic('camera')}<span>Asistencia con QR</span></button>
          <button type="button" class="nav-it" data-coord-panel="cum">${ic('cake')}<span>Cumpleaños y flyers</span></button>` : ''}
          <button type="button" class="nav-it" data-coord-panel="">${ic('edit')}<span>Editar la página</span></button>
        </div>` : ''}
      </div>
    </div>
  </div>`;
  openModal(html, 'guest-menu');
}

/* Busca a un miembro por uid en el directorio (o en las planillas si eres coordinador). */
function buscarMiembro(targetUid) {
  const members = getRegisteredMembersForDm(miUid(), miCorreo());
  let target = members.find((m) => m.uid === targetUid || m.id === targetUid);
  if (!target && coordUI()) {
    const rec = (allInscripciones || []).find((r) => r.id === targetUid || r.uid === targetUid);
    if (rec) target = normalizeMember(rec);
  }
  return target || null;
}
function openChatWithMember(targetUid) {
  if (!currentUser) { openAuthModal(); return; }
  const target = buscarMiembro(targetUid);
  if (target) {
    chatChannel = 'dm';
    chatDmTarget = target;
  }
  openChatModal('chat');
}

let comunidadFilter = 'todos';
let comunidadSearch = '';

let amigosVisibles = 12;
function renderComunidadMembersList(enfocar) {
  const container = $('#comunidad-members-list');
  if (!container) return;
  const members = getRegisteredMembersForDm(miUid(), miCorreo());

  const filtered = members.filter((m) => {
    if (!comunidadSearch) return true;
    const q = comunidadSearch.toLowerCase();
    return (m.nombre && m.nombre.toLowerCase().includes(q)) ||
      (m.primerNombre && m.primerNombre.toLowerCase().includes(q));
  });

  const countEl = $('#comunidad-members-count');
  if (countEl) countEl.textContent = `${filtered.length} amigo${filtered.length === 1 ? '' : 's'} en JUMA`;

  if (!filtered.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:32px 14px;background:var(--paper);border-radius:14px;border:1px dashed var(--line-2)">
        <span class="ico-big" aria-hidden="true">${ic(members.length ? 'search' : 'users')}</span>
        <b style="font-size:15px;color:var(--navy);display:block">${members.length ? 'No se encontraron amigos' : 'Aún no hay amigos en el directorio'}</b>
        <p style="margin:4px 0 0;font-size:13.5px;color:var(--muted)">${members.length ? 'Intenta escribiendo otro nombre en la búsqueda.' : 'Aquí aparecen todos los inscritos en JUMA Duaca.'}</p>
      </div>`;
    return;
  }

  /* Se muestran 12 y «Ver más amigos» agrega 12 más */
  const visibles = filtered.slice(0, amigosVisibles);
  const quedan = filtered.length - visibles.length;
  container.innerHTML = visibles.map((m, i) => `
      <div class="person" data-amigo="${i}">
        <div style="display:flex;align-items:center;gap:12px;min-width:0;flex:1">
          <div style="width:44px;height:44px;border-radius:50%;overflow:hidden;background:var(--mist);display:flex;align-items:center;justify-content:center;flex:0 0 auto;border:2px solid var(--royal)">
            ${m.foto ? `<img src="${esc(m.foto)}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<b style="font-size:17px;color:var(--royal)">${esc(m.primerNombre.charAt(0).toUpperCase())}</b>`}
          </div>
          <div style="min-width:0;flex:1">
            <b style="font-size:15px;color:var(--navy);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(m.nombre)}</b>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex:0 0 auto">
          ${m.sinCuenta ? '<span style="font-size:12.5px;color:var(--muted);text-align:right;line-height:1.25" title="Podrás escribirle cuando entre a la app con su correo">Aún no usa<br>la app</span>' : `<button type="button" class="btn btn-primary btn-sm" data-open-dm="${esc(m.uid)}" style="min-height:40px;padding:0 14px;font-size:13.5px" title="Escribir mensaje">${ic('msg')}Escribir</button>`}
        </div>
      </div>
    `).join('') + (quedan > 0 ? `<div class="list-more" style="margin-top:6px"><button type="button" class="btn btn-ghost" data-more-amigos>${ic('down')}Ver más amigos <small style="font-weight:400;color:var(--muted)">(${quedan} más)</small></button></div>` : '');
  if (enfocar) { const n = container.querySelector(`[data-amigo="${amigosVisibles - 12}"] [data-open-dm]`); if (n) n.focus(); }
}

/* ===================== Biblioteca (libros 3D, se agregan progresivamente) ===================== */
const LIBROS = [
  { id: 'manual-juma', titulo: 'Manual de identidad JUMA', autor: 'Juventud Misionera Allamaniana', desc: 'Quiénes somos, nuestra identidad, estructura y camino de formación. Libro interactivo con índice y buscador.', url: 'biblioteca/manual-juma.html', color: '#0A235C', portada: 'img/logo.png' },
  { id: 'los-quiero-asi', titulo: 'Los quiero así', autor: 'José Allamano', desc: 'Espiritualidad y pedagogía misionera del beato José Allamano, fundador de los Misioneros y Misioneras de la Consolata, reunida a partir de sus conferencias y escritos.', url: 'biblioteca/los-quiero-asi.html', color: '#6b3d1e', portada: 'img/logo.png' }
  /* Para agregar un libro: sube su archivo .html a la carpeta biblioteca/ y añade una línea aquí. */
];
function renderBibliotecaView() {
  const el = $('#view-biblioteca'); if (!el) return;
  el.innerHTML = `<div class="wrap lib-wrap">
    <p class="eyebrow">Biblioteca JUMA</p>
    <h1 class="h-display h-lg">Libros para leer y crecer</h1>
    <p class="body" style="max-width:56ch;margin:10px 0 28px">Aquí iremos cargando libros poco a poco. Elige uno y pásale las páginas como un libro de verdad.</p>
    <div class="lib-grid">
      ${LIBROS.map((b) => `<article class="lib-card">
        <div class="lib-cover" style="--bk:${b.color}"><img src="${esc(b.portada)}" alt="" width="72" height="72" decoding="async"><b>${esc(b.titulo)}</b></div>
        <div class="lib-info"><h2>${esc(b.titulo)}</h2><small>${esc(b.autor)}</small><p>${esc(b.desc)}</p>
        <button type="button" class="btn btn-primary btn-sm" data-leer-libro="${esc(b.id)}">${ic('book')}Leer libro</button></div>
      </article>`).join('')}
      <article class="lib-card lib-soon"><div class="lib-cover lib-cover-empty" aria-hidden="true">${ic('library')}</div><div class="lib-info"><h2>Próximamente</h2><p>Nuevos libros se agregarán aquí.</p></div></article>
    </div></div>`;
}
function abrirLibro(id) {
  const b = LIBROS.find((x) => x.id === id); if (!b) return;
  if ($('#lib-reader')) return;
  const r = document.createElement('div');
  r.id = 'lib-reader';
  r.setAttribute('role', 'dialog'); r.setAttribute('aria-modal', 'true'); r.setAttribute('aria-label', b.titulo);
  r.innerHTML = `<button type="button" class="lib-close" data-cerrar-libro aria-label="Cerrar libro">${ic('x')}<span>Cerrar</span></button><iframe title="${esc(b.titulo)}" src="${esc(b.url)}" allow="fullscreen"></iframe>`;
  document.body.appendChild(r);
  document.documentElement.style.overflow = 'hidden';
}
function cerrarLibro() {
  const r = $('#lib-reader'); if (r) r.remove();
  document.documentElement.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const l = e.target.closest('[data-leer-libro]'); if (l) { abrirLibro(l.dataset.leerLibro); return; }
  if (e.target.closest('[data-cerrar-libro]')) cerrarLibro();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('#lib-reader')) cerrarLibro(); });

function renderJuegosView() {
  const el = $('#view-juegos'); if (!el) return;
  el.innerHTML = `<div class="wrap lib-wrap">
    <p class="eyebrow">Juegos JUMA</p>
    <h1 class="h-display h-lg">Juegos para compartir</h1>
    <p class="body" style="max-width:56ch;margin:10px 0 28px">Juega, aprende de la fe y de la misión, y suma puntos misioneros que aparecen en tu perfil.</p>
    <div class="lib-grid">
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#1F4FB0;background-image:url(juegos/portadas/camino.jpg)" role="img" aria-label="Portada de Camino del misionero"><b>Camino del misionero</b></div>
        <div class="lib-info"><h2>Camino del misionero</h2><small>Aventura en 3D · ¡Nuevo!</small><p>Recorre un pueblo en 3D y conversa con ocho personas: un anciano viudo, una madre preocupada, un biólogo, un joven, una hermana de otra iglesia y más. Tus respuestas abren el camino: aprende a evangelizar escuchando, acompañando y anunciando a Jesús.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/camino-del-misionero.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#6A3A10;background-image:url(juegos/portadas/sacristan.jpg)" role="img" aria-label="Portada de Sacristán"><b>Sacristán</b></div>
        <div class="lib-info"><h2>Sacristán</h2><small>La Misa y la misión</small><p>Elige el color litúrgico, prepara el altar y sirve en cada momento de la Misa en una iglesia en 3D, mientras ves al sacerdote celebrar. Incluye la Misa de hoy según el calendario litúrgico, rangos de monaguillo a maestro de ceremonias y la misión al salir.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/sacristan.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#5A2A8E;background-image:url(juegos/portadas/bloques.jpg)" role="img" aria-label="Portada de Bloques de fe"><b>Bloques de fe</b></div>
        <div class="lib-info"><h2>Bloques de fe</h2><small>Bloques · ¡Nuevo!</small><p>Encaja las piezas, borra filas y columnas y descubre un versículo palabra por palabra. Sube de rango, compra mejoras y desbloquea estilos.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/bloques-de-fe.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#0A235C;background-image:url(juegos/portadas/palabras.jpg)" role="img" aria-label="Portada de Palabras JUMA"><b>Palabras JUMA</b></div>
        <div class="lib-info"><h2>Palabras JUMA</h2><small>Crucigrama y rueda de letras</small><p>Forma palabras del manual y de la fe, completa los crucigramas y arma los cuadros de cada capítulo.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/palabras-juma.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#4A2A6E;background-image:url(juegos/portadas/memoria.jpg)" role="img" aria-label="Portada de Memoria de santos"><b>Memoria de santos</b></div>
        <div class="lib-info"><h2>Memoria de santos</h2><small>Juego de memoria · 15 niveles</small><p>Une santos y signos de la fe con su nombre, en tres dificultades, y aprende algo nuevo en cada pareja.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/memoria-santos.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#7A2E5C;background-image:url(juegos/portadas/cuentas.jpg)" role="img" aria-label="Portada de Cuentas de gracia"><b>Cuentas de gracia</b></div>
        <div class="lib-info"><h2>Cuentas de gracia</h2><small>Tres en línea · símbolos de la fe</small><p>Une la Virgen, el Sagrado Corazón, la Biblia, el cáliz y las manos que oran; crea rayos de luz, bendiciones y la paloma del Espíritu en 40 niveles.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/cuentas-de-gracia.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#2A1640;background-image:url(juegos/portadas/luz.jpg)" role="img" aria-label="Portada de Luz contra el pecado"><b>Luz contra el pecado</b></div>
        <div class="lib-info"><h2>Luz contra el pecado</h2><small>Acción en primera persona · San José Allamano</small><p>Siete lugares oscuros, cuatro armas de la fe y seis pecados que vencer, hasta llegar al Tentador.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/luz-contra-el-pecado.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover con-img" style="--bk:#3B2A5E;background-image:url(juegos/portadas/huyendo.jpg)" role="img" aria-label="Portada de Huyendo del pecado"><b>Huyendo del pecado</b></div>
        <div class="lib-info"><h2>Huyendo del pecado</h2><small>Carrera sin fin · San José Allamano</small><p>Corre por el camino, esquiva las sombras del pecado, recoge monedas de gracia y usa el escudo de la fe, el imán y el agua bendita.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/huyendo-del-pecado.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover" style="--bk:#17675C" role="img" aria-label="Portada de Rueda y pinta"><b>Rueda y pinta</b></div>
        <div class="lib-info"><h2>Rueda y pinta</h2><small>Puzle de caminos · 15 niveles · ¡Nuevo!</small><p>Desliza la bola: rueda en línea recta hasta chocar y pinta cada casilla por la que pasa. Pinta todo el camino con los menos movimientos posibles y gana estrellas.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/rueda-y-pinta.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card">
        <div class="lib-cover" style="--bk:#B5462E" role="img" aria-label="Portada de Carrera de la fe"><b>Carrera de la fe</b></div>
        <div class="lib-info"><h2>Carrera de la fe</h2><small>Carreras de karts · 4 pistas · ¡Nuevo!</small><p>Corre junto a Lucía, Pedro, Miguel, Ana y el Padre Tomás por caminos de la fe. Recoge cajas de gracia y usa la vela, el rosario, el incienso, la campanilla o la paloma para llegar primero.</p>
        <button type="button" class="btn btn-primary btn-sm" data-jugar-juego="juegos/carrera-de-la-fe.html">${ic('gamepad')}Jugar</button></div>
      </article>
      <article class="lib-card lib-soon"><div class="lib-cover lib-cover-empty" aria-hidden="true">${ic('gamepad')}</div><div class="lib-info"><h2>Próximamente</h2><p>Aquí aparecerán nuevos juegos.</p></div></article>
    </div></div>`;
}
/* Juego a pantalla completa (mismo marco que la Biblioteca) */
function abrirJuego(url) {
  if (!currentUser) { openAuthModal(); return; }
  if ($('#lib-reader')) return;
  const r = document.createElement('div');
  r.id = 'lib-reader';
  r.setAttribute('role', 'dialog'); r.setAttribute('aria-modal', 'true'); r.setAttribute('aria-label', 'Juego');
  r.innerHTML = `<iframe title="Juego" src="${esc(url)}?v=103" allow="fullscreen"></iframe>`;
  document.body.appendChild(r);
  document.documentElement.style.overflow = 'hidden';
}
document.addEventListener('click', (e) => {
  const j = e.target.closest('[data-jugar-juego]'); if (j) abrirJuego(j.dataset.jugarJuego);
});
/* El juego envía sus puntos misioneros; se guardan en el perfil público (miembros/{uid}) */
window.addEventListener('message', (e) => {
  if (e.origin !== location.origin || !e.data) return;
  if (e.data.tipo === 'juma-cerrar') { cerrarLibro(); return; }
  if (e.data.tipo !== 'juma-puntos') return;
  /* Cada juego guarda su propio total; el perfil muestra la suma de todos */
  let mapa = {};
  try { mapa = JSON.parse(localStorage.getItem('juma-puntos-juegos') || '{}') || {}; } catch (x) { mapa = {}; }
  mapa[String(e.data.juego || 'palabras').slice(0, 20)] = Math.max(0, Number(e.data.total) || 0);
  try { localStorage.setItem('juma-puntos-juegos', JSON.stringify(mapa)); } catch (x) {}
  guardarPuntosMisioneros(Object.values(mapa).reduce((a, b) => a + (Number(b) || 0), 0));
});
let ultimoEnvioPuntos = -1;
function guardarPuntosMisioneros(total) {
  if (!currentUser || !fb.setDoc || !fb.db) return;
  if (total === ultimoEnvioPuntos) return;
  ultimoEnvioPuntos = total;
  fb.setDoc(fb.doc(fb.db, 'miembros', currentUser.uid), { puntosMisioneros: total, puntosActualizado: fb.serverTimestamp() }, { merge: true }).catch(() => {});
}

/* ===================== Amigos: todos los registrados con nombre y foto ===================== */
function openFriendsModal() {
  if (!currentUser) { openAuthModal(); return; }
  const lista = getRegisteredMembersForDm(miUid(), miCorreo());
  const fila = (m) => `<button type="button" class="fr-row" data-open-dm="${esc(m.uid)}"><span class="av-wrap" data-pres="${esc(m.uid)}">${avatarHtml(m.foto, (m.primerNombre || m.nombre).charAt(0).toUpperCase())}</span><span class="fr-n"><b>${esc(m.nombre)}</b><small>${esc(roleLabel(m.rol))} · ★ ${Number((m.raw && m.raw.puntosMisioneros) || 0).toLocaleString('es-VE')}</small></span></button>`;
  openModal(`<div class="overlay overlay-sheet" role="dialog" aria-modal="true" aria-labelledby="fr-t">
    <div class="sheet sheet-auto" style="max-width:460px">
      <div class="chat-top notif-head"><div><b id="fr-t" style="font-size:19px;display:block">Amigos</b><small style="font-size:12.5px">${lista.length} registrado${lista.length === 1 ? '' : 's'} en JUMA</small></div>
      <button type="button" class="x-btn" data-close aria-label="Cerrar">${ic('x')}</button></div>
      <div class="fr-list">${lista.length ? lista.map(fila).join('') : '<p class="body" style="padding:24px;text-align:center">Aún no hay otros registrados.</p>'}</div>
    </div></div>`, 'friends');
  repintarEnLinea();
}
/* Cambiar la clave de la app (puede ser distinta a la del correo). Pide la actual antes de cambiarla. */
function abrirCambiarClave() {
  if (!currentUser) { openAuthModal(); return; }
  const tieneClave = (currentUser.providerData || []).some((p) => p && p.providerId === 'password');
  const campo = (id, txt, ac) => `<label style="display:flex;flex-direction:column;gap:5px;font-size:13.5px;font-weight:700;color:var(--ink);text-align:left">${txt}<input id="${id}" type="password" autocomplete="${ac}" style="min-height:44px;border:1.5px solid var(--line-2);border-radius:12px;padding:0 12px;font:inherit;font-weight:500"></label>`;
  openModal(`<div class="overlay overlay-sheet" role="dialog" aria-modal="true" aria-labelledby="cc-t">
    <div class="sheet sheet-auto" style="max-width:420px">
      <div class="chat-top notif-head"><div><b id="cc-t" style="font-size:19px;display:block">Cambiar contraseña</b><small style="font-size:12.5px">Es la clave para entrar a la app, puede ser distinta a la de tu correo</small></div>
      <button type="button" class="x-btn" data-close aria-label="Cerrar">${ic('x')}</button></div>
      <div style="padding:16px 18px 20px;display:flex;flex-direction:column;gap:12px">
        ${tieneClave ? campo('cc-old', 'Contraseña actual', 'current-password') : '<p class="body" style="margin:0">Tu cuenta entra con Google. Crea aquí una clave propia para entrar también con tu correo.</p>'}
        ${campo('cc-new', 'Contraseña nueva (mínimo 6 caracteres)', 'new-password')}
        ${campo('cc-new2', 'Repite la contraseña nueva', 'new-password')}
        <p id="cc-msg" role="status" style="margin:0;font-size:13.5px;color:#B91C1C;min-height:18px"></p>
        <button type="button" class="btn btn-primary" id="cc-go" style="min-height:46px">Guardar contraseña</button>
      </div></div></div>`, 'cambiar-clave');
}
function errorClave(x) {
  const c = String((x && x.code) || '');
  if (/wrong-password|invalid-credential/.test(c)) return 'La contraseña actual no es correcta.';
  if (/weak-password/.test(c)) return 'La contraseña es muy débil: usa al menos 6 caracteres.';
  if (/requires-recent-login/.test(c)) return 'Por seguridad, cierra sesión, vuelve a entrar y prueba de nuevo.';
  if (/credential-already-in-use|email-already-in-use/.test(c)) return 'Esa cuenta ya tiene clave. Usa «Cambiar contraseña» con la actual.';
  return 'No se pudo cambiar la contraseña. Revisa tu conexión e intenta de nuevo.';
}
async function guardarClaveNueva() {
  const set = (t) => { const m = $('#cc-msg'); if (m) m.textContent = t; };
  const vieja = ($('#cc-old') || {}).value || '';
  const nueva = ($('#cc-new') || {}).value || '';
  const repite = ($('#cc-new2') || {}).value || '';
  const tieneClave = !!$('#cc-old');
  if (nueva.length < 6) return set('La contraseña nueva debe tener al menos 6 caracteres.');
  if (nueva !== repite) return set('Las dos contraseñas no coinciden.');
  if (tieneClave && !vieja) return set('Escribe tu contraseña actual.');
  if (!currentUser || !fb || !fb.au) return set('Espera a que la app se conecte e intenta de nuevo.');
  set('Guardando…');
  try {
    if (tieneClave) {
      await fb.au.reauthenticateWithCredential(currentUser, fb.au.EmailAuthProvider.credential(currentUser.email, vieja));
      await fb.au.updatePassword(currentUser, nueva);
    } else {
      await fb.au.linkWithCredential(currentUser, fb.au.EmailAuthProvider.credential(currentUser.email, nueva));
    }
    closeModal();
    showToast('Contraseña cambiada. Úsala la próxima vez que entres.');
  } catch (x) { set(errorClave(x)); }
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-cambiar-clave]')) { e.preventDefault(); abrirCambiarClave(); return; }
  if (e.target.closest('#cc-go')) { e.preventDefault(); guardarClaveNueva(); }
});

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-open-friends]')) {
    e.preventDefault();
    if (modalKey === 'friends') { closeModal(); return; }
    openFriendsModal();
  }
});

function renderComunidadView() {
  const el = $('#view-comunidad');
  if (!el) return;
  if (!currentUser) {
    el.innerHTML = `
      <div class="wrap" style="padding:60px 20px;text-align:center">
        <span class="ico-big" aria-hidden="true">${ic('lock')}</span>
        <h2 class="h-display h-lg">Espacio Exclusivo para Miembros de JUMA</h2>
        <p class="body" style="max-width:54ch;margin:12px auto 24px">Inicia sesión con tu cuenta o llena tu planilla de inscripción para acceder al directorio de hermanos, el chat comunitario, mensajes directos y avisos.</p>
        <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
          <button type="button" class="btn btn-primary" data-open-auth>${ic('login')}Iniciar sesión</button>
          <button type="button" class="btn btn-ghost" data-open-form>${ic('userplus')}Quiero ser parte</button>
        </div>
      </div>`;
    return;
  }
  if (!isMemberUI()) {
    el.innerHTML = `
      <div class="wrap" style="padding:60px 20px;text-align:center">
        <span class="ico-big" aria-hidden="true">${ic('edit')}</span>
        <h2 class="h-display h-lg">Completa tu planilla para entrar</h2>
        <p class="body" style="max-width:56ch;margin:12px auto 24px">Ya iniciaste sesión como <b>${esc(currentUser.email || currentUser.displayName || 'usuario')}</b>, pero aún no hay una planilla de JUMA en tu cuenta. Llénala una sola vez para acceder al directorio, el chat y los mensajes.</p>
        <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
          <button type="button" class="btn btn-primary" data-open-form>${ic('edit')}Llenar mi planilla</button>
          <button type="button" class="btn btn-ghost" data-open-auth>${ic('user')}Ver mi cuenta</button>
        </div>
      </div>`;
    return;
  }

  const d = (myProfile && myProfile.datos) || {};
  const nombre = (myProfile && (myProfile.nombre || (d.nombres ? (d.nombres + ' ' + (d.apellidos || '')).trim() : ''))) || currentUser.displayName || 'Misionero';
  const primerNombre = (d.nombres ? d.nombres.trim().split(' ')[0] : nombre.split(' ')[0]) || 'Misionero';
  const foto = (myProfile && (myProfile.foto || d.foto)) || currentUser.photoURL || '';
  const role = myRole();
  const isJumaMember = role === 'coordinador' || role === 'asesor' || role === 'participante';
  const roleLabelTxt = privRole === 'admin' ? 'Cuenta Maestra' : roleLabel(role);

  const members = getRegisteredMembersForDm(miUid(), miCorreo());
  const nextDom = encuentrosProgramados()[0] || null;
  const lastPost = getPostsList(cfg)[0];

  el.innerHTML = `
    <div class="wrap" style="padding:32px clamp(16px,3vw,32px)">
      <!-- Banner estilo Facebook -->
      <div style="padding:24px 28px;border-radius:var(--r-lg);background:linear-gradient(135deg,var(--cloth) 0%,var(--navy) 100%);color:#fff;box-shadow:var(--shadow-lg);margin-bottom:24px">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px">
          <div style="display:flex;align-items:center;gap:16px;flex:1 1 260px">
            <div style="width:72px;height:72px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.15);border:3px solid var(--sky);display:flex;align-items:center;justify-content:center;flex:0 0 auto">
              ${foto ? `<img src="${esc(foto)}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<b style="font-size:28px;color:#fff">${esc(primerNombre.charAt(0).toUpperCase())}</b>`}
            </div>
            <div>
              <span class="u-badge" style="background:rgba(255,255,255,.18);color:#fff;margin-bottom:4px">${esc(roleLabelTxt)}</span>
              <h2 class="h-display h-md" style="margin:2px 0 0;color:#fff">¡Hola, ${esc(primerNombre)}!</h2>
              <p style="margin:4px 0 0;font-size:14px;color:var(--sky)">${d.parroquia ? esc(d.parroquia) : 'Juventud Misionera Allamaniana · Duaca'}</p>
            </div>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:10px">
            ${isJumaMember ? `<button type="button" class="btn btn-white btn-sm" data-open-auth>${ic('idcard')}Mi carnet con QR</button>` : `<button type="button" class="btn btn-white btn-sm" data-open-auth>${ic('user')}Mi perfil</button>`}
            <button type="button" class="btn btn-blue btn-sm" data-open-chat>${ic('msg')}Abrir chat</button>
            <button type="button" class="btn btn-soft btn-sm" data-open-notifs style="background:rgba(255,255,255,.16);color:#fff;border:1px solid rgba(255,255,255,.4)">${ic('bell')}Notificaciones</button>
          </div>
        </div>
      </div>

      <!-- Cuadrícula estilo Red Social -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:24px;align-items:start">
        <!-- Columna 1: Directorio de Hermanos de JUMA -->
        <div class="com-card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:10px">
            <div>
              <b class="com-h">${ic('users')} Amigos en JUMA</b>
              <small id="comunidad-members-count" style="color:var(--muted);font-size:12.5px;display:block">${members.length} amigos registrados</small>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" data-open-chat style="min-height:40px;padding:0 12px;font-size:13.5px">${ic('msg')}Abrir chat</button>
          </div>
          <div style="margin-bottom:14px">
            <label class="sr" for="comunidad-search-in">Buscar amigos por nombre</label>
            <input type="search" id="comunidad-search-in" value="${esc(comunidadSearch)}" placeholder="Buscar amigos por nombre…" class="chat-input" style="width:100%;min-height:44px;background:var(--paper)">
          </div>
          <div id="comunidad-members-list" style="display:flex;flex-direction:column;gap:10px"></div>
        </div>

        <!-- Columna 2: Próximo Encuentro y Novedades -->
        <div style="display:flex;flex-direction:column;gap:20px">
          <div class="com-card">
            <span class="u-badge" style="background:#E0E7FF;color:var(--royal);margin-bottom:8px">${ic('calendar')} Próximo encuentro</span>
            <h3 class="h-display h-md" style="margin:4px 0 8px;font-size:22px">${esc((nextDom && nextDom.tema) || 'Encuentro Formativo')}</h3>
            <p style="margin:0 0 14px;font-size:14.5px;color:var(--muted)">
              ${nextDom ? esc(nextDom.diaSem + ' ' + nextDom.dia + ' de ' + nextDom.mes) : ''} · Hora: <b>${esc(hora())}</b><br>
              Lugar: <b>${esc(lugar())}</b>
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:10px">
              <a class="btn btn-primary btn-sm" href="${esc(mapsUrl())}" target="_blank" rel="noopener">${ic('pin')}Cómo llegar en Google Maps</a>
              <button type="button" class="btn btn-ghost btn-sm" data-view-target="domingos">${ic('calendar')}Ver calendario completo</button>
            </div>
          </div>
          <div class="com-card">
            <b class="com-h" style="font-size:16px;margin-bottom:12px">${ic('news')} Última noticia de JUMA</b>
            ${lastPost ? `
              <div>
                ${lastPost.foto ? `<img src="${esc(lastPost.foto)}" alt="" style="width:100%;max-height:180px;object-fit:cover;border-radius:12px;margin-bottom:10px">` : ''}
                <b style="display:block;font-size:15px;color:var(--ink);margin-bottom:4px">${esc(lastPost.t || 'Novedad')}</b>
                <p style="margin:0 0 10px;font-size:13.5px;color:var(--muted);line-height:1.4">${esc((lastPost.x || '').slice(0, 120))}${(lastPost.x || '').length > 120 ? '…' : ''}</p>
                <button type="button" class="btn btn-ghost btn-sm" data-view-target="novedades">${ic('news')}Ver más noticias</button>
              </div>
            ` : `<p style="font-size:14px;color:var(--muted);margin:0">No hay noticias publicadas aún.</p>`}
          </div>
        </div>
      </div>
    </div>
  `;
  renderComunidadMembersList();
}

function updateAuthUI() {
  const btnAuth = $('#btn-auth');
  const btnJoin = $('#btn-join');
  const heroBtnJoin = $('#hero-btn-join');
  const footAuth = $('#lnk-perfil-foot');
  const fab = $('#fab-edit');
  const btnTopNotif = $('#btn-top-notif');
  const btnTopChat = $('#btn-top-chat');

  /* Solo una sesión real de Firebase cuenta como «con sesión». */
  const isAuth = !!currentUser;
  const member = isMemberUI();
  if (fab) fab.classList.toggle('hide', !(coordUI() || isEditor()));
  syncFab();

  if (isAuth) {
    document.body.classList.add('is-authenticated');
    document.body.classList.remove('is-guest');
    const { fullName, nombreCorto, foto } = datosCabecera();
    if (btnAuth) {
      /* En la barra superior queda la foto (o la inicial): lleva al perfil y al carnet */
      btnAuth.innerHTML = avatarHtml(foto, nombreCorto.charAt(0).toUpperCase()) + `<span class="sr">${esc(nombreCorto)}</span>`;
      btnAuth.className = 'av-btn';
      btnAuth.setAttribute('title', fullName);
      btnAuth.setAttribute('aria-label', 'Mi perfil: ' + fullName);
    }
    if (btnJoin) {
      /* Con sesión pero sin planilla: se invita a completarla; con planilla, el botón desaparece */
      btnJoin.classList.toggle('hide', member);
      btnJoin.innerHTML = ic('userplus') + '<span>Completar planilla</span>';
      btnJoin.setAttribute('data-open-form', '');
      btnJoin.removeAttribute('data-open-auth');
    }
    if (heroBtnJoin) heroBtnJoin.style.display = member ? 'none' : 'inline-flex';
    if (footAuth) footAuth.textContent = nombreCorto + ' (Mi perfil)';
  } else {
    document.body.classList.add('is-guest');
    document.body.classList.remove('is-authenticated');
    if (btnAuth) {
      btnAuth.innerHTML = ic('login') + '<span>Entrar</span>';
      btnAuth.className = 'btn btn-ghost btn-sm';
      btnAuth.removeAttribute('title');
      btnAuth.setAttribute('aria-label', 'Iniciar sesión');
    }
    if (btnJoin) {
      btnJoin.classList.remove('hide');
      btnJoin.innerHTML = ic('userplus') + '<span>Quiero ser parte</span>';
      btnJoin.setAttribute('data-open-form', '');
      btnJoin.removeAttribute('data-open-auth');
    }
    if (heroBtnJoin) heroBtnJoin.style.display = 'inline-flex';
    if (footAuth) footAuth.textContent = 'Iniciar sesión';
  }
  if (btnTopNotif) btnTopNotif.classList.toggle('hide', !isAuth);
  if (btnTopChat) btnTopChat.classList.toggle('hide', !isAuth);
  const btnTopFr = $('#btn-top-friends'); if (btnTopFr) btnTopFr.classList.toggle('hide', !isAuth);

  renderShell();
  refreshBadges();
  if (currentSection === 'comunidad') renderComunidadView();
}

document.addEventListener('input', (e) => {
  if (e.target.id === 'comunidad-search-in') {
    comunidadSearch = e.target.value.toLowerCase().trim();
    amigosVisibles = 12;
    renderComunidadMembersList();
    return;
  }
});

modalRoot.addEventListener('input', (e) => {
  if (e.target.id === 'chat-dm-search-in') {
    chatDmSearch = e.target.value.toLowerCase().trim();
    const listEl = $('#chat-dm-list');
    if (listEl) {
      const myUid = (currentUser && currentUser.uid) || (myProfile && (myProfile.uid || myProfile.id)) || '';
      const myEmail = String((currentUser && currentUser.email) || (myProfile && myProfile.correo) || '').trim().toLowerCase();
      listEl.innerHTML = renderDmMembersList(myUid, myEmail);
    }
    return;
  }
  if (e.target.id === 'fp-cedula') { forceCedulaTemp = e.target.value; return; }
  const k = e.target.dataset && e.target.dataset.k; if (!k || !$('#pl-t')) return;
  form.d[k] = e.target.value;
  if (k === 'nac') { const b = $('#edad-box'); if (b) b.textContent = edadDe() ? edadDe() + ' años' : 'Se calcula sola'; }
});
modalRoot.addEventListener('change', async (e) => {
  if (e.target.id === 'f-consent') { form.consent = e.target.checked; return; }
  if ((e.target.id === 'f-avatar' || e.target.id === 'f-avatar-cam') && e.target.files && e.target.files[0]) {
    try {
      stopSelfieCamera();
      form.d.foto = await shrinkAvatarDataUrl(e.target.files[0]);
      form.err = '';
      repaintForm();
    } catch (x) {
      form.err = 'No se pudo cargar esa foto. Intenta con otra imagen.';
      repaintForm();
    }
    return;
  }
  if ((e.target.id === 'fp-gal-in' || e.target.id === 'fp-cam-in') && e.target.files && e.target.files[0]) {
    try {
      stopSelfieCamera();
      forcePhotoTemp = await shrinkAvatarDataUrl(e.target.files[0]);
      forceErr = '';
      repaintForcePhoto();
    } catch (x) {
      forceErr = 'No se pudo cargar esa foto. Intenta con otra imagen.';
      repaintForcePhoto();
    }
    return;
  }
  if ((e.target.id === 'au-avatar' || e.target.id === 'au-cam-in' || e.target.id === 'au-avatar-sub') && e.target.files && e.target.files[0]) {
    const archivo = e.target.files[0];
    try { e.target.value = ''; } catch (x) {}
    stopSelfieCamera();
    await cambiarFotoPerfil(() => shrinkAvatarDataUrl(archivo));
    return;
  }
});

/* Eventos globales dentro de modales para Cámara Selfie, Carnet, Mockup y Alerta Obligatoria */
modalRoot.addEventListener('click', async (e) => {
  const startCamBtn = e.target.closest('[data-start-selfie]');
  if (startCamBtn) {
    e.preventDefault();
    await startSelfieCamera(startCamBtn.dataset.startSelfie, false);
    return;
  }
  const flipCamBtn = e.target.closest('[data-flip-selfie]');
  if (flipCamBtn) {
    e.preventDefault();
    await startSelfieCamera(flipCamBtn.dataset.flipSelfie, true);
    return;
  }
  if (e.target.closest('[data-capture-selfie]')) {
    e.preventDefault();
    await captureSelfieFromVideo();
    return;
  }
  if (e.target.closest('[data-cancel-selfie]')) {
    e.preventDefault();
    const prevTarget = selfieTarget;
    stopSelfieCamera();
    if (prevTarget === 'force') repaintForcePhoto();
    else if (prevTarget === 'auth') repaintAuth();
    else repaintForm();
    return;
  }
  const fpSexoBtn = e.target.closest('[data-fp-sexo]');
  if (fpSexoBtn) {
    forceSexoTemp = fpSexoBtn.dataset.fpSexo;
    repaintForcePhoto();
    return;
  }
  if (e.target.closest('[data-save-force-photo]')) {
    if (!forcePhotoTemp) {
      forceErr = 'Por favor tómate una foto o elige una de tu galería antes de continuar.';
      repaintForcePhoto();
      return;
    }
    forceSaving = true; forceErr = ''; repaintForcePhoto();
    await saveNewProfilePhoto(forcePhotoTemp, { cedula: forceCedulaTemp, sexo: forceSexoTemp });
    forceSaving = false;
    modalKey = null;
    openAuthModal();
    return;
  }
  const viewBtn = e.target.closest('[data-carnet-view]');
  if (viewBtn) {
    carnetViewMode = viewBtn.dataset.carnetView;
    if ($('#au-t')) repaintAuth();
    else if ($('#pl-t')) repaintForm();
    else if ($('#ed-t')) repaintEd();
    return;
  }
  const genBtn = e.target.closest('[data-carnet-gender]');
  if (genBtn) {
    carnetGenderOverride = genBtn.dataset.carnetGender;
    if ($('#au-t')) repaintAuth();
    else if ($('#pl-t')) repaintForm();
    else if ($('#ed-t')) repaintEd();
    return;
  }
  const dlCarnetBtn = e.target.closest('[data-dl-carnet-png]');
  if (dlCarnetBtn) {
    const uidTarget = dlCarnetBtn.dataset.dlCarnetPng;
    const recTarget = uidTarget === 'me' ? (myProfile || { datos: form.d, foto: form.d.foto }) : (allInscripciones.find((x) => x && (x.id === uidTarget || x.uid === uidTarget)) || myProfile);
    const orig = dlCarnetBtn.innerHTML;
    dlCarnetBtn.innerHTML = '⏳ Generando Carnet HD…';
    await downloadCarnetPng(recTarget, 'carnet');
    setTimeout(() => { dlCarnetBtn.innerHTML = orig; }, 1200);
    return;
  }
  const dlMockupBtn = e.target.closest('[data-dl-mockup-png]');
  if (dlMockupBtn) {
    const uidTarget = dlMockupBtn.dataset.dlMockupPng;
    const g = dlMockupBtn.dataset.gender || '';
    const recTarget = uidTarget === 'me' ? (myProfile || { datos: form.d, foto: form.d.foto }) : (allInscripciones.find((x) => x && (x.id === uidTarget || x.uid === uidTarget)) || myProfile);
    const orig = dlMockupBtn.innerHTML;
    dlMockupBtn.innerHTML = '⏳ Generando Mockup…';
    await downloadCarnetPng(recTarget, 'mockup', g);
    setTimeout(() => { dlMockupBtn.innerHTML = orig; }, 1200);
    return;
  }
  const genMockBtn = e.target.closest('[data-action-generate-mockup]');
  if (genMockBtn) {
    const uidTarget = genMockBtn.dataset.actionGenerateMockup;
    const recTarget = uidTarget === 'me' ? (myProfile || { datos: form.d, foto: form.d.foto }) : (allInscripciones.find((x) => x && (x.id === uidTarget || x.uid === uidTarget)) || myProfile);
    const g = mockupGenderMap.get(uidTarget) || carnetGenderOverride || (recTarget && detectGender(recTarget)) || 'Hombre';
    genMockBtn.innerHTML = '⏳ Generando mockup HD…';
    genMockBtn.disabled = true;
    generatedMockups.add(uidTarget);
    await generateMockupDataUrl(recTarget, g);
    if ($('#au-t')) repaintAuth();
    else if ($('#ed-t')) repaintEd();
    else if ($('#pl-t')) repaintForm();
    return;
  }
  const mockGTag = e.target.closest('[data-toggle-mock-gender]');
  if (mockGTag) {
    const parts = (mockGTag.dataset.toggleMockGender || '').split(':');
    const uidTarget = parts[0] || 'me';
    const newG = parts[1] || 'Hombre';
    mockupGenderMap.set(uidTarget, newG);
    if (uidTarget === 'me') carnetGenderOverride = newG;
    const recTarget = uidTarget === 'me' ? (myProfile || { datos: form.d, foto: form.d.foto }) : (allInscripciones.find((x) => x && (x.id === uidTarget || x.uid === uidTarget)) || myProfile);
    if (generatedMockups.has(uidTarget)) {
      mockGTag.disabled = true;
      await generateMockupDataUrl(recTarget, newG);
    }
    if ($('#au-t')) repaintAuth();
    else if ($('#ed-t')) repaintEd();
    else if ($('#pl-t')) repaintForm();
    return;
  }
});

modalRoot.addEventListener('click', async (e) => {
  if (e.target.closest('[data-chat-older]')) {
    const box = $('#chat-msgs-box');
    const antes = box ? box.scrollHeight - box.scrollTop : 0;
    const k = chatClaveVer();
    chatVerMas[k] = (chatVerMas[k] || 40) + 40;
    repaintChat();
    const nb = $('#chat-msgs-box');
    if (nb) nb.scrollTop = nb.scrollHeight - antes;
    const b = $('[data-chat-older]'); if (b) b.focus({ preventScroll: true }); else { const i = $('#chat-msg-in'); if (i) i.focus({ preventScroll: true }); }
    return;
  }
  const notifAct = e.target.closest('[data-notif-act]');
  if (notifAct) {
    const act = notifAct.dataset.notifAct;
    const val = notifAct.dataset.notifVal;
    closeModal();
    if (act === 'dm') openChatWithMember(val);
    else if (act === 'chat') openChatModal();
    else if (act === 'section') switchSection(val);
    else if (act === 'profile') openAuthModal();
    return;
  }
  if (e.target.closest('[data-switch-login]')) { authTab = 'user'; authErr = ''; authOk = ''; openAuthModal(); return; }
  if (e.target.closest('[data-go-profile]')) { openAuthModal(); return; }
  if (e.target.closest('[data-rm-avatar]')) { delete form.d.foto; repaintForm(); return; }
  if (e.target.closest('[data-google-form]')) {
    if (!fb || !fb.auth || !fb.au.GoogleAuthProvider) { form.err = 'Espera un momento a que conecte o usa tu correo y contraseña.'; repaintForm(); return; }
    try {
      const cred = await fb.au.signInWithPopup(fb.auth, new fb.au.GoogleAuthProvider());
      await handleUser(cred.user);
      if (perfilEnNube && myProfile) {
        /* Esta cuenta ya tiene planilla: se muestra el perfil en vez de llenar otra */
        openAuthModal();
        showToast('¡Hola! Ya tienes tu planilla en JUMA.');
        return;
      }
      if (currentUser.email) form.d.correo = currentUser.email;
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
  /* En la tableta el menú es un cajón: al elegir algo, se cierra */
  if (e.target.closest('#sidebar .nav-it, #sidebar .btn')) cerrarMenu(false);
  if (e.target.closest('#menu-btn')) {
    e.preventDefault();
    if ($('#sidebar').classList.contains('open')) cerrarMenu(); else abrirMenu();
    return;
  }
  if (e.target.closest('#scrim, [data-close-menu]')) { e.preventDefault(); cerrarMenu(); return; }
  if (e.target.closest('[data-skip]')) {
    e.preventDefault();
    const m = $('#main'); if (m) { try { m.focus({ preventScroll: true }); } catch (x) { m.focus(); } }
    return;
  }
  if (e.target.closest('[data-cargar-mas]')) { e.preventDefault(); cargarMas(); return; }
  const coordBtn = e.target.closest('[data-coord-panel]');
  if (coordBtn) {
    e.preventDefault();
    if (modalRoot.firstChild) closeModal();
    const t = coordBtn.dataset.coordPanel;
    if (t) tab = t;
    if (isEditor() || coordUI()) { showFab(); openEditor(); } else askPass();
    return;
  }
  if (e.target.closest('[data-open-encuentros]')) {
    e.preventDefault();
    if (!currentUser) { openAuthModal(); return; }
    profileActiveTab = 'encuentros';
    openAuthModal();
    return;
  }
  const masNoticias = e.target.closest('[data-more-posts]');
  if (masNoticias) { e.preventDefault(); postsVisibles += 3; aplicarPaginaNoticias(true); return; }
  const masFotos = e.target.closest('[data-more-gal]');
  if (masFotos) { e.preventDefault(); fotosVisibles += 9; paginarGaleria(true); return; }
  const masAmigos = e.target.closest('[data-more-amigos]');
  if (masAmigos) { e.preventDefault(); amigosVisibles += 12; renderComunidadMembersList(true); return; }
  const carnetBtn = e.target.closest('[data-view-member-carnet]');
  if (carnetBtn) {
    e.preventDefault();
    if (typeof openMemberCarnetModal === 'function') openMemberCarnetModal(carnetBtn.dataset.viewMemberCarnet);
    return;
  }
  const filterBtn = e.target.closest('[data-comunidad-filter]');
  if (filterBtn) {
    e.preventDefault();
    const targetFilter = filterBtn.dataset.comunidadFilter;
    if (comunidadFilter === targetFilter && targetFilter !== 'todos') {
      comunidadFilter = 'todos';
    } else {
      comunidadFilter = targetFilter;
    }
    renderComunidadMembersList();
    return;
  }
  const viewTarget = e.target.closest('[data-view-target]');
  if (viewTarget) {
    e.preventDefault();
    const target = viewTarget.dataset.viewTarget;
    switchSection(target);
    return;
  }
  if (e.target.closest('[data-open-guest-menu]')) {
    e.preventDefault();
    if (modalKey === 'guest-menu') { closeModal(); return; }
    openGuestMenuModal();
    return;
  }
  const guestNav = e.target.closest('[data-guest-nav]');
  if (guestNav) {
    e.preventDefault();
    closeModal();
    switchSection(guestNav.dataset.guestNav);
    return;
  }
  if (e.target.closest('[data-open-notifs]')) {
    e.preventDefault();
    if (modalKey === 'notifs') { closeModal(); return; }
    openNotificationsModal();
    return;
  }
  if (e.target.closest('[data-open-chat]')) {
    e.preventDefault();
    if (modalKey === 'chat') { closeModal(); return; }
    openChatModal();
    return;
  }
  const openDmBtn = e.target.closest('[data-open-dm]');
  if (openDmBtn) {
    e.preventDefault();
    openChatWithMember(openDmBtn.dataset.openDm);
    return;
  }
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
  const flyerBtn = e.target.closest('[data-share-flyer-id]');
  if (flyerBtn) {
    e.preventDefault();
    shareBirthdayFlyer(flyerBtn.dataset.shareFlyerId, flyerBtn);
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
      if (box) box.dataset.userMuted = vid.muted ? '1' : '0';
      if (vid.paused) vid.play().catch(() => {});
      sndBtn.innerHTML = vid.muted ? SND_OFF : SND_ON;
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
      if (snd) snd.innerHTML = SND_ON;
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
    if (currentUser && perfilEnNube && myProfile) openAuthModal();
    else openForm(false);
    return;
  }
  if (e.target.closest('[data-open-auth]')) {
    e.preventDefault();
    if (modalKey === 'auth') { closeModal(); return; }
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
/* Cuenta maestra = sesión real de Firebase con jumaduaca@gmail.com y correo verificado (igual que en las reglas). */
function isAdminUser() {
  return !!(currentUser && currentUser.emailVerified && String(currentUser.email || '').trim().toLowerCase() === ADMIN);
}
function isMasterAccount() { return isAdminUser(); }
/* Coordinadores, asesores y la cuenta maestra (solo interfaz: el servidor vuelve a comprobarlo). */
function coordUI() { return isAdminUser() || privRole === 'coordinador' || privRole === 'asesor'; }
/* Miembro = sesión real + planilla propia en la nube (o coordinador). */
function isMemberUI() { return !!currentUser && (coordUI() || !!(perfilEnNube && myProfile)); }

let profileActiveTab = 'carnet';

function renderProfileTabContent(tab, rec, user, d, email, misAsistencias, proxEventos, remOn, masterOn, trueMaster, role, isParticipant) {
  if (tab === 'carnet' && isParticipant) {
    return `
      <div style="text-align:left;animation:fadeInView .2s ease">
        ${qrCardHtml(rec || { uid: user && user.uid, correo: email, nombre: rec && rec.nombre, datos: d })}
        <div style="display:flex;gap:8px;align-items:flex-start;font-size:13.5px;color:#475569;margin-bottom:12px;background:#F8FAFC;padding:10px 14px;border-radius:12px;border:1px solid var(--line)">
          <span style="color:var(--royal);display:inline-flex;margin-top:1px" aria-hidden="true">${ic('idcard')}</span><span><b>Tu Carnet Oficial JUMA</b> con QR de asistencia integrado y mockup realista con la franela misionera. Puedes rotarlo o descargarlo en alta definición.</span>
        </div>
        ${carnetInteractiveSectionHtml(rec || { uid: user && user.uid, correo: email, nombre: rec && rec.nombre, foto: (rec && rec.foto) || (user && user.photoURL), datos: d }, 'profile')}
      </div>
    `;
  }

  if (tab === 'datos') {
    return `
      <div style="text-align:left;animation:fadeInView .2s ease">
        <div class="p-info-grid">
          <div class="p-info-card">
            <small>${ic('church')}Parroquia / Capilla</small>
            <b>${esc(d.parroquia || 'San Juan Bautista de Duaca')}</b>
          </div>
          <div class="p-info-card">
            <small>${ic('cake')}Nacimiento / Edad</small>
            <b>${d.nac ? esc(d.nac.split('-').reverse().join('/')) : 'Registrado'}${edadDe(d) ? ' (' + edadDe(d) + ' años)' : ''}</b>
          </div>
          <div class="p-info-card">
            <small>${ic('phone')}Teléfono celular</small>
            <b>${esc(d.celular || 'No registrado')}</b>
          </div>
          <div class="p-info-card">
            <small>${ic('mail')}Correo electrónico</small>
            <b>${esc(email || 'No registrado')}</b>
          </div>
          <div class="p-info-card">
            <small>${ic('drop')}Grupo sanguíneo</small>
            <b>${esc(d.sangre || 'No registrado')}</b>
          </div>
          <div class="p-info-card">
            <small>${ic('calcheck')}Asistencias dominicales</small>
            <b>${misAsistencias.length} en últimos 6 meses</b>
          </div>
          ${d.direccion ? `
          <div class="p-info-card" style="grid-column:1/-1">
            <small>${ic('home')}Dirección de habitación</small>
            <b>${esc(d.direccion)}</b>
          </div>` : ''}
          ${d.contacto ? `
          <div class="p-info-card" style="grid-column:1/-1">
            <small>${ic('shield')}Contacto de emergencia</small>
            <b>${esc(d.contacto)}</b>
          </div>` : ''}
        </div>
        <div style="margin-top:16px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
          <button type="button" class="btn btn-soft btn-sm" data-edit-my-form style="font-weight:700">${ic('edit')}Editar mis datos</button>
          <button type="button" class="btn btn-soft btn-sm" data-dl-profile style="font-weight:700">${ic('download')}Descargar mi planilla (PDF/HTML)</button>
        </div>
      </div>
    `;
  }

  if (tab === 'encuentros') {
    return `
      <div style="text-align:left;animation:fadeInView .2s ease">
        <div style="background:#F8FAFD;border:1.5px solid #E2E8F0;border-radius:14px;padding:14px;margin-bottom:14px">
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px">
            <div>
              <b style="font-size:14px;color:#061536;display:block">Guarda los domingos en tu teléfono</b>
              <span style="font-size:12px;color:#64748B">${remOn ? 'Recordatorios de avisos activos' : 'Sincroniza con Google Calendar o Apple'}</span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              <button type="button" class="btn ${remOn ? 'btn-blue' : 'btn-outline'} btn-sm" data-toggle-rem style="min-height:36px;padding:0 12px;font-size:12.5px">${ic('bell')}${remOn ? 'Recordatorio activo' : 'Activar recordatorio'}</button>
              <button type="button" class="btn btn-soft btn-sm" data-dl-ics style="min-height:36px;padding:0 12px;font-size:12.5px">${ic('calendar')}Sincronizar (.ics)</button>
            </div>
          </div>
        </div>
        ${proxEventos.length ? `
          <div style="display:grid;gap:8px">
            ${proxEventos.map((ev) => `
              <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding:12px 14px;border-radius:12px;background:#ffffff;border:1.5px solid #E2E8F0;box-shadow:0 2px 6px rgba(6,21,54,.04)">
                <div>
                  <b style="font-size:14px;color:#061536">${esc(ev.title)}</b>
                  <span style="display:block;font-size:12px;color:#64748B">${esc(ev.badge)} · ${esc(hora())} · ${esc(lugar())}</span>
                </div>
                <a class="btn btn-outline btn-sm" style="padding:6px 12px;font-size:12px;font-weight:700" target="_blank" rel="noopener" href="${esc(googleCalUrl(ev))}">${ic('calendar')}Google Cal</a>
              </div>
            `).join('')}
          </div>
        ` : '<p style="color:#64748B;font-size:13px;text-align:center;margin:16px 0">No hay eventos próximos programados.</p>'}
      </div>
    `;
  }

  if (tab === 'coord' && masterOn) {
    return `
      <div style="text-align:left;animation:fadeInView .2s ease">
        <div style="background:#F0F6FF;border:1.5px solid #C7DCFF;border-radius:16px;padding:16px">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
            <span class="ico-badge" aria-hidden="true">${ic('star')}</span>
            <div>
              <b style="font-size:15px;color:#061536;display:block">${trueMaster ? 'Panel Maestro de Coordinación' : 'Panel de Coordinación JUMA'}</b>
              <small style="color:#2563EB;font-size:12px;font-weight:700">Herramientas activas de gestión, escaneo y edición</small>
            </div>
          </div>
          <p style="margin:0 0 14px;font-size:13px;color:#334155">Accede a las herramientas administrativas del grupo:</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            <button type="button" class="btn btn-blue btn-sm" data-open-qr-scanner style="font-weight:800;padding:8px 16px">${ic('camera')}Escanear QR de asistencia</button>
            <button type="button" class="btn btn-soft btn-sm" data-open-cumple-tab style="background:#ffffff;border:1.5px solid #C7DCFF;color:#1E40AF;font-weight:800;padding:8px 16px">${ic('cake')}Lista de cumpleaños</button>
            <button type="button" class="btn btn-outline btn-sm" data-open-master-panel style="font-weight:800;padding:8px 16px">${ic('settings')}Abrir panel administrativo</button>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

function authModalHtml() {
  const trueMaster = isMasterAccount();
  const role = myRole();
  const isJumaMember = role === 'coordinador' || role === 'asesor' || role === 'participante';
  const masterOn = coordUI();
  if (currentUser) {
    const d = (myProfile && myProfile.datos) || {};
    const nombre = (myProfile && (myProfile.nombre || (d.nombres ? (d.nombres + ' ' + (d.apellidos || '')).trim() : ''))) || (currentUser && currentUser.displayName) || (currentUser && currentUser.email) || (isJumaMember ? 'Joven Misionero' : 'Colaborador(a) / Visitante');
    const email = (currentUser && currentUser.email) || (myProfile && (myProfile.correo || d.correo)) || '';
    const foto = (myProfile && (myProfile.foto || d.foto)) || (currentUser && currentUser.photoURL) || '';
    const misAsistencias = asistenciasUltimos6Meses(myProfile);
    const proxEventos = allUpcomingCalendarEvents().slice(0, 4);
    const remOn = remindersEnabled();
    const badgeTxt = trueMaster ? '★ Perfil Maestro · JUMA Duaca' : (role === 'coordinador' ? '★ Coordinador(a) · JUMA Duaca' : (role === 'asesor' ? '◆ Asesor(a) · JUMA Duaca' : (role === 'visitante' ? '👁 Visitante · JUMA Duaca' : (role === 'colaborador' ? '🤝 Colaborador(a) · JUMA Duaca' : '● Participante · JUMA Duaca'))));
    const isParticipant = role === 'participante';

    // Determinar tab efectivo
    let activeTab = profileActiveTab;
    if (!isParticipant && activeTab === 'carnet') activeTab = 'datos';
    if (!masterOn && activeTab === 'coord') activeTab = isParticipant ? 'carnet' : 'datos';

    return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="au-t">
      <div class="sheet p-modal" style="max-height:92vh;overflow-y:auto;-webkit-overflow-scrolling:touch">
        <!-- Portada moderna con degradado y red sutil -->
        <div class="p-cover">
          <div class="p-cover-mesh"></div>
          <div class="p-cover-badge">JUMA Duaca · Consolata</div>
          <button type="button" class="p-close-btn" data-close aria-label="Cerrar perfil" title="Cerrar">${ic('x')}</button>
        </div>

        <!-- Cuerpo del perfil moderno -->
        <div class="p-body">
          <!-- Avatar Hero Centrado -->
          <div class="p-avatar-wrap">
            ${foto ? `<img src="${esc(foto)}" alt="Foto de perfil" class="p-avatar-img">` : `<div class="p-avatar-init">${esc(nombre.charAt(0).toUpperCase())}</div>`}
            <button type="button" data-start-selfie="auth" class="p-avatar-cam-badge" title="Tomar foto con cámara" aria-label="Tomar selfie">${ic('camera')}</button>
          </div>

          <!-- Nombre y Rol -->
          <h2 id="au-t" class="p-name">${esc(nombre)}</h2>
          <div class="p-role-badge">${esc(badgeTxt)}</div>
          <small style="color:#64748B;font-size:12.5px;font-weight:600;margin-bottom:8px">${perfilEnNube ? 'Miembro activo de la comunidad parroquial' : 'Sesión iniciada · ' + esc(email)}</small>
          ${!perfilEnNube && !trueMaster ? `<div style="width:100%;margin:4px 0 12px;padding:12px 14px;border-radius:12px;background:#FFF8E1;border:1.5px solid #F5C518;color:#5C4300;font-size:13.5px;text-align:left">
            <b style="display:flex;align-items:center;gap:6px;margin-bottom:4px">${ic('edit')}Aún no hay una planilla en esta cuenta</b>
            Llénala una sola vez para activar tu carnet, el chat y el directorio de JUMA.
            <div style="margin-top:8px"><button type="button" class="btn btn-blue btn-sm" data-go-register style="min-height:34px;padding:0 14px;font-size:13px">Llenar mi planilla</button></div>
          </div>` : ''}
          ${currentUser && !currentUser.emailVerified ? `<div style="width:100%;margin:4px 0 12px;padding:12px 14px;border-radius:12px;background:#E8F1FF;border:1.5px solid #C7DCFF;color:#0C2D74;font-size:13.5px;text-align:left">
            <b style="display:flex;align-items:center;gap:6px;margin-bottom:4px">${ic('mail')}Verifica tu correo</b>
            Abre el enlace que te enviamos a <b>${esc(email)}</b>. Los permisos de coordinación y la recuperación de planillas antiguas necesitan un correo verificado.
            <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px"><button type="button" class="btn btn-soft btn-sm" data-verify-email style="min-height:34px;padding:0 12px;font-size:12.5px">Reenviar enlace</button><button type="button" class="btn btn-soft btn-sm" data-reload-user style="min-height:34px;padding:0 12px;font-size:12.5px">Ya lo verifiqué</button></div>
          </div>` : ''}

          ${fotoEstadoHtml()}
          <!-- Botones directos de foto -->
          <div style="display:flex;gap:8px;margin-bottom:12px;align-items:center;justify-content:center">
            <button type="button" data-start-selfie="auth" class="btn btn-soft btn-sm" style="min-height:38px;padding:0 12px;font-size:13px;font-weight:700">${ic('camera')}Tomar selfie</button>
            <label class="btn btn-soft btn-sm" style="min-height:38px;padding:0 12px;font-size:13px;font-weight:700;cursor:pointer;margin:0">
              ${ic('image')}<span>Elegir foto</span>
              <input type="file" accept="image/*" id="au-avatar" style="display:none">
            </label>
            <input type="file" accept="image/*" capture="user" id="au-cam-in" style="display:none">
          </div>

          ${selfieBoxHtml('auth')}

          <!-- Botones de Acción Estilo App Moderna -->
          <div class="p-actions">
            <button type="button" class="p-act-btn" data-open-chat style="position:relative">${ic('msg')}Mensajes <span class="chat-badge hide" id="profile-chat-badge"></span></button>
            <button type="button" class="p-act-btn" data-edit-my-form>${ic('edit')}Editar datos</button>
            <button type="button" class="p-act-btn" data-cambiar-clave>${ic('lock')}Cambiar contraseña</button>
            <button type="button" class="p-act-btn p-act-danger" data-logout>${ic('logout')}Cerrar sesión</button>
          </div>

          <!-- Barra de pestañas segmentadas -->
          <div class="p-tabs" role="tablist">
            ${isParticipant ? `<button type="button" role="tab" class="p-tab ${activeTab === 'carnet' ? 'active' : ''}" data-profile-tab="carnet" aria-selected="${activeTab === 'carnet'}">${ic('idcard')}Mi carnet</button>` : ''}
            <button type="button" role="tab" class="p-tab ${activeTab === 'datos' ? 'active' : ''}" data-profile-tab="datos" aria-selected="${activeTab === 'datos'}">${ic('user')}Mis datos</button>
            <button type="button" role="tab" class="p-tab ${activeTab === 'encuentros' ? 'active' : ''}" data-profile-tab="encuentros" aria-selected="${activeTab === 'encuentros'}">${ic('calendar')}Encuentros</button>
            ${masterOn ? `<button type="button" role="tab" class="p-tab ${activeTab === 'coord' ? 'active' : ''}" data-profile-tab="coord" aria-selected="${activeTab === 'coord'}">${ic('star')}Coordinación</button>` : ''}
          </div>

          <!-- Contenido de la pestaña activa -->
          <div style="width:100%">
            ${renderProfileTabContent(activeTab, myProfile, currentUser, d, email, misAsistencias, proxEventos, remOn, masterOn, trueMaster, role, isParticipant)}
          </div>

          <!-- Botón inferior para cerrar perfil -->
          <div style="margin-top:20px;padding-top:14px;border-top:1.5px solid #E2E8F0;width:100%;display:flex;justify-content:center">
            <button type="button" class="btn btn-soft" data-close style="min-height:44px;padding:0 26px;border-radius:99px;font-weight:800;font-size:14px">${ic('x')}Cerrar perfil</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="au-t"><div class="sheet" style="max-width:520px">${sheetHead('Juventud Misionera Allamaniana · Duaca', 'Iniciar sesión', 'au-t')}<div style="padding:clamp(22px,4vw,40px)">
    <button type="button" class="btn btn-soft" data-google-login ${authBusy ? 'disabled' : ''} style="width:100%;background:#fff;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:18px">
      <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
      <span>Continuar con Google</span>
    </button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;color:var(--muted);font-size:13px"><span style="flex:1;height:1px;background:var(--line)"></span><span>o con tu correo y contraseña</span><span style="flex:1;height:1px;background:var(--line)"></span></div>
    <form id="login-user-form" style="display:flex;flex-direction:column;gap:16px">
      <div class="fld w"><label for="lu-email">Correo electrónico</label><input id="lu-email" type="email" autocomplete="email" required placeholder="tucorreo@ejemplo.com" value="${esc(authEmailPrev)}"></div>
      <div class="fld w"><label for="lu-pass">Contraseña</label><input id="lu-pass" type="password" autocomplete="current-password" required placeholder="Tu contraseña"></div>
      ${authErr ? `<p role="alert" style="margin:0;padding:12px 16px;border-radius:10px;background:#FCE8E7;color:#8A1C1C;font-size:14.5px;font-weight:700">${esc(authErr)}</p>` : ''}
      ${authOk ? `<p role="status" class="eok" style="margin:0">${esc(authOk)}</p>` : ''}
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:6px">
        <button type="submit" class="btn btn-blue" ${authBusy ? 'disabled' : ''}>${authBusy ? 'Ingresando…' : 'Iniciar sesión'}</button>
        <button type="button" class="btn btn-soft btn-sm" data-reset-pw>Olvidé mi contraseña</button>
        <button type="button" class="btn btn-soft btn-sm" data-create-account ${authBusy ? 'disabled' : ''}>Crear mi cuenta</button>
      </div>
    </form>
    <div style="margin-top:18px;padding:14px 16px;border-radius:14px;background:#F0F6FF;border:1.5px solid #C7DCFF">
      <b style="display:flex;align-items:center;gap:6px;font-size:14px;color:var(--navy);margin-bottom:4px">${ic('info')}¿Ya llenaste tu planilla antes?</b>
      <p style="margin:0;font-size:12.5px;color:var(--muted);line-height:1.5">Entra con <b>Google</b> o con tu <b>correo y contraseña</b> usando el mismo correo de tu planilla: la app la encuentra y la pasa a tu cuenta. Si no recuerdas la contraseña, pulsa «Olvidé mi contraseña».</p>
    </div>
    <div style="margin-top:26px;padding-top:20px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
      <div><b style="font-size:16px;color:var(--ink)">¿Aún no tienes cuenta?</b><p style="margin:2px 0 0;font-size:14px;color:var(--muted)">Llena tu planilla y queda registrado en la app.</p></div>
      <button type="button" class="btn btn-outline btn-sm" data-go-register>Quiero ser parte (Planilla)</button>
    </div>
  </div></div></div>`;
}
function openAuthModal() { openModal(authModalHtml(), 'auth'); }
/* Cambio de foto desde «Mi perfil»: se ve al instante y se sube sin dejar la pantalla esperando */
let fotoEstado = ''; // '' | 'preparando' | 'guardando'
const repaintAuthSiAbierto = () => { if (modalKey === 'auth') repaintAuth(); };
async function cambiarFotoPerfil(obtenerFoto) {
  if (fotoEstado) return;
  fotoEstado = 'preparando';
  repaintAuthSiAbierto();
  let resultado = 'error';
  try {
    const url = await obtenerFoto();
    if (url) {
      fotoEstado = 'guardando';
      const guardado = saveNewProfilePhoto(url); // la foto nueva ya queda en el perfil antes de subirla
      repaintAuthSiAbierto();
      resultado = await guardado;
    }
  } catch (x) {}
  fotoEstado = '';
  repaintAuthSiAbierto();
  if (resultado === 'ok') showToast('Foto guardada');
  else if (resultado === 'lento') showToast('La conexión está lenta: tu foto se sigue subiendo. No cierres la app por unos segundos.');
  else showToast('No se pudo guardar la foto. Revisa tu conexión e inténtalo otra vez.');
}
const fotoEstadoHtml = () => (fotoEstado ? `<p role="status" style="margin:0 0 12px;text-align:center;font-size:13px;font-weight:700;color:var(--royal)">${fotoEstado === 'preparando' ? 'Preparando tu foto…' : 'Guardando tu foto…'}</p>` : '');
function repaintAuth() { modalRoot.innerHTML = authModalHtml(); const ov = $('.overlay', modalRoot); if (ov) { ov.style.animation = 'none'; const sh = $('.sheet', modalRoot); if (sh) sh.style.animation = 'none'; } }

/* ===================== Chat Comunitario, Mensajes Directos y Avisos Sociales ===================== */
let chatChannel = 'general'; // 'general' | 'coord' | 'dm'
let chatActiveTab = 'chat'; // 'chat' | 'notif'
let chatMessages = [];
let chatDmTarget = null; // Destinatario seleccionado para mensajes directos
let chatDmSearch = '';

function normalizeMember(x) {
  if (!x) return null;
  const d = x.datos || {};
  const rawNom = x.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Misionero JUMA';
  const nombre = String(rawNom).trim();
  const primerNombre = x.primerNombre || (d.nombres ? d.nombres.trim().split(' ')[0] : nombre.split(' ')[0]) || 'Misionero';
  const foto = x.foto || d.foto || '';
  const correo = String(x.correo || d.correo || '').trim().toLowerCase();
  const uid = String(x.uid || x.id || '').trim();
  if (!uid) return null;
  const rol = userRole(x);
  const parroquia = x.parroquia || d.parroquia || '';
  return { id: x.id || uid, uid, nombre, primerNombre, foto, correo, rol, parroquia, sinCuenta: !!x.sinCuenta, raw: x };
}

/* Directorio para escribir mensajes: viene de miembros/{uid} (solo miembros con cuenta). */
function getRegisteredMembersForDm(myUid, myEmail) {
  const normMyEmail = String(myEmail || '').trim().toLowerCase();
  const list = [];
  const seen = new Set();
  const clave = (n) => String(n || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const conCuenta = new Set((miembros || []).filter((x) => x && !x.sinCuenta).map((x) => clave(x.nombre)));
  (miembros || []).forEach((rec) => {
    const m = normalizeMember(rec);
    if (!m) return;
    if (m.sinCuenta && conCuenta.has(clave(m.nombre))) return; // ya está con su cuenta
    if ((myUid && m.uid === myUid) || (normMyEmail && m.correo && m.correo === normMyEmail)) return; // Excluirme a mí mismo
    if (seen.has(m.uid)) return;
    seen.add(m.uid);
    list.push(m);
  });
  const rank = { coordinador: 1, asesor: 2, participante: 3 };
  return list.sort((a, b) => {
    const rA = rank[a.rol] || 9;
    const rB = rank[b.rol] || 9;
    if (rA !== rB) return rA - rB;
    return a.nombre.localeCompare(b.nombre, 'es');
  });
}
function fotoDeAutor(m) {
  if (m && m.foto) return m.foto;
  const mem = (miembros || []).find((x) => x && x.uid === (m && m.uid));
  return (mem && mem.foto) || '';
}

function renderDmMembersList(myUid, myEmail) {
  const members = getRegisteredMembersForDm(myUid, myEmail).filter((m) => !m.sinCuenta);
  const q = String(chatDmSearch || '').trim().toLowerCase();
  const filtered = members.filter((m) => {
    if (!q) return true;
    return m.nombre.toLowerCase().includes(q) ||
      m.parroquia.toLowerCase().includes(q) ||
      m.rol.toLowerCase().includes(q);
  });

  if (!filtered.length) {
    return `<div class="chat-empty" style="padding:24px 14px">
      <span class="ico-big" aria-hidden="true">${ic('search')}</span>
      <b style="font-size:15px;color:var(--ink)">${members.length ? 'No se encontraron misioneros' : 'Aún no hay misioneros en el directorio'}</b>
      <p style="margin:4px 0 0;font-size:13px;color:var(--muted)">${members.length ? 'Intenta con otro nombre o parroquia.' : 'Cada miembro aparece cuando inicia sesión en la app con su cuenta.'}</p>
    </div>`;
  }
  const porDm = chatUnreadCounts().porDm;
  // Orden: primero quien te escribió sin leer, luego quien escribió más recientemente, y el resto por nombre
  const ultimoPorDm = {};
  (chatMessages || []).forEach((msg) => {
    if (!msg || canalDe(msg) !== 'dm') return;
    const kk = dmKeyDe(msg);
    const tt = msgTime(msg);
    if (tt > (ultimoPorDm[kk] || 0)) ultimoPorDm[kk] = tt;
  });
  const ordenados = filtered.slice().sort((a, b) => {
    const ka = dmKeyCon(a.uid), kb = dmKeyCon(b.uid);
    const na = (porDm[ka] || 0) > 0 ? 1 : 0, nb = (porDm[kb] || 0) > 0 ? 1 : 0;
    if (na !== nb) return nb - na;
    const ta = ultimoPorDm[ka] || 0, tb = ultimoPorDm[kb] || 0;
    if (ta !== tb) return tb - ta;
    return String(a.nombre || '').localeCompare(String(b.nombre || ''), 'es');
  });
  return ordenados.map((m) => {
    const k = dmKeyCon(m.uid);
    const lastMsg = chatMessages.slice().reverse().find((msg) => canalDe(msg) === 'dm' && dmKeyDe(msg) === k);
    const unreadFromThis = porDm[k] || 0;
    const rolBadge = m.rol === 'coordinador' ? '★ Coordinador' : (m.rol === 'asesor' ? '◆ Asesor' : 'Participante');
    const rolBg = m.rol === 'coordinador' ? '#FEF3C7' : (m.rol === 'asesor' ? '#E0E7FF' : '#E8F1FF');
    const rolColor = m.rol === 'coordinador' ? '#92400E' : (m.rol === 'asesor' ? '#3730A3' : 'var(--royal)');
    return `<div class="chat-dm-member-card" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border-radius:14px;background:#fff;border:1.5px solid ${unreadFromThis > 0 ? 'var(--royal)' : 'var(--line)'};box-shadow:0 2px 6px rgba(0,0,0,.03)">
      <div style="display:flex;align-items:center;gap:12px;min-width:0;flex:1">
        <div style="width:44px;height:44px;border-radius:50%;overflow:hidden;background:var(--mist);display:flex;align-items:center;justify-content:center;flex:0 0 auto;border:2px solid ${m.rol === 'coordinador' ? '#F5C518' : 'var(--royal)'}">
          ${m.foto ? `<img src="${esc(m.foto)}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<b style="font-size:18px;color:var(--royal)">${esc(m.primerNombre.charAt(0).toUpperCase())}</b>`}
        </div>
        <div style="min-width:0;flex:1">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:2px">
            <b style="font-size:15px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(m.nombre)}</b>
            <span style="font-size:10.5px;padding:1px 7px;border-radius:99px;background:${rolBg};color:${rolColor};font-weight:800">${esc(rolBadge)}</span>
            ${unreadFromThis > 0 ? `<span class="chat-badge pill">${unreadFromThis} nuevo${unreadFromThis === 1 ? '' : 's'}</span>` : ''}
          </div>
          <div style="font-size:12.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            ${m.parroquia ? esc(m.parroquia) : 'Misionero JUMA'}
            ${lastMsg ? ` · <span style="color:var(--ink);font-weight:600">“${esc(String(lastMsg.texto || '').slice(0, 32))}${String(lastMsg.texto || '').length > 32 ? '…' : ''}”</span>` : ''}
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-blue btn-sm" data-select-dm="${esc(m.uid)}" style="min-height:40px;padding:0 14px;font-size:13.5px;flex:0 0 auto">
        ${ic('msg')}Escribir
      </button>
    </div>`;
  }).join('');
}

function fmtChatTime(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const timeStr = d.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: true });
    if (isToday) return timeStr;
    const mesNom = (typeof MESES !== 'undefined' && MESES[d.getMonth()]) ? MESES[d.getMonth()].slice(0, 3) : '';
    return d.getDate() + ' ' + mesNom + ' · ' + timeStr;
  } catch (e) { return ''; }
}

function scrollChatBottom() {
  setTimeout(() => {
    const box = $('#chat-msgs-box');
    if (box) box.scrollTop = box.scrollHeight;
  }, 60);
}

function chatNoMiembroHtml() {
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="cnm-t"><div class="sheet" style="max-width:520px">${sheetHead('Comunidad JUMA Duaca', 'Chat para miembros', 'cnm-t')}<div style="padding:clamp(22px,4vw,36px)">
    <p class="body" style="margin:0 0 18px">Ya iniciaste sesión, pero tu cuenta aún no tiene una planilla de JUMA. Llénala una sola vez para escribir en el chat de la comunidad y enviar mensajes directos.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px"><button type="button" class="btn btn-blue" data-open-form>Llenar mi planilla</button><button type="button" class="btn btn-soft" data-close>Cerrar</button></div>
  </div></div></div>`;
}

function openChatModal(targetTab) {
  if (!currentUser) { openAuthModal(); return; }
  if (!isMemberUI()) { openModal(chatNoMiembroHtml(), 'chat-nomiembro'); return; }
  if (targetTab) chatActiveTab = targetTab;
  if (chatChannel === 'coord' && !coordUI()) chatChannel = 'general';
  openModal(chatModalHtml(), 'chat');
  if (chatActiveTab === 'notif') marcarNotificacionesVistas();
  else marcarVistaChatActual();
  scrollChatBottom();
}

function repaintChat() {
  if (modalKey !== 'chat') return;
  const scrollBox = $('#chat-msgs-box');
  const wasNearBottom = scrollBox ? (scrollBox.scrollHeight - scrollBox.scrollTop - scrollBox.clientHeight < 140) : true;
  /* Conserva lo que el usuario está escribiendo cuando llega un mensaje nuevo */
  const act = document.activeElement;
  const actId = act && act.id && modalRoot.contains(act) ? act.id : '';
  const inMsg = $('#chat-msg-in');
  const borrador = inMsg ? inMsg.value : '';
  const selIni = act && typeof act.selectionStart === 'number' ? act.selectionStart : null;
  modalRoot.innerHTML = chatModalHtml();
  const ov = $('.overlay', modalRoot);
  if (ov) { ov.style.animation = 'none'; const sh = $('.sheet', modalRoot); if (sh) sh.style.animation = 'none'; }
  const nuevoIn = $('#chat-msg-in');
  if (nuevoIn && borrador) nuevoIn.value = borrador;
  if (actId) {
    const el = document.getElementById(actId);
    if (el) { el.focus(); if (selIni != null && el.setSelectionRange) { try { el.setSelectionRange(selIni, selIni); } catch (e) {} } }
  }
  if (wasNearBottom) scrollChatBottom();
}

const chatVerMas = {};
function chatClaveVer() { return chatChannel === 'dm' ? 'dm:' + (chatDmTarget ? dmKeyCon(chatDmTarget.uid || chatDmTarget.id) : '') : chatChannel; }
function chatModalHtml() {
  const isCoord = coordUI();
  if (chatChannel === 'coord' && !isCoord) chatChannel = 'general';

  const myUid = miUid();
  const myEmail = miCorreo();
  const counts = chatUnreadCounts();

  let filteredMsgs = [];
  if (chatChannel === 'coord') {
    filteredMsgs = chatMessages.filter((m) => canalDe(m) === 'coord');
  } else if (chatChannel === 'dm') {
    if (chatDmTarget) {
      const k = dmKeyCon(chatDmTarget.uid || chatDmTarget.id);
      filteredMsgs = chatMessages.filter((m) => canalDe(m) === 'dm' && dmKeyDe(m) === k);
    }
  } else {
    filteredMsgs = chatMessages.filter((m) => canalDe(m) === 'general');
  }

  const cumples = getCumpleanosList().filter((c) => c.diasFaltan <= 7);
  const postsList = getPostsList(cfg).slice(0, 3);
  const proxEncuentro = encuentrosProgramados()[0] || null;
  /* Historial: se ven los últimos 40 mensajes; «Cargar mensajes anteriores» agrega 40 más */
  const claveVer = chatClaveVer();
  const totalMsgs = filteredMsgs.length;
  const desde = Math.max(0, totalMsgs - (chatVerMas[claveVer] || 40));
  filteredMsgs = filteredMsgs.slice(desde);
  const pill = (n) => (n > 0 ? `<span class="chat-badge pill" style="margin-left:4px">${n > 99 ? '99+' : n}</span>` : '');

  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="chat-t"><div class="sheet chat-sheet">
    <div class="chat-top">
      <div style="display:flex;align-items:center;gap:12px;min-width:0">
        <img src="img/logo.png" alt="" style="width:40px;height:36px;flex:0 0 auto;object-fit:contain">
        <div style="min-width:0">
          <div class="kick" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em">Red social misionera</div>
          <h2 id="chat-t" style="margin:0;font:800 21px/1.05 var(--display);text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Comunidad JUMA Duaca</h2>
        </div>
      </div>
      <button type="button" class="x-btn" data-close aria-label="Cerrar chat">${ic('x')}</button>
    </div>

    <!-- Pestañas: Chat vs Notificaciones -->
    <div class="chat-tabs">
      <button type="button" class="chat-tab ${chatActiveTab === 'chat' ? 'active' : ''}" data-chat-tab="chat">
        ${ic('msg')}<span>Chat y mensajes</span>${pill(counts.total)}
      </button>
      <button type="button" class="chat-tab ${chatActiveTab === 'notif' ? 'active' : ''}" data-chat-tab="notif">
        ${ic('bell')}<span>Avisos y novedades</span>${pill(getUnreadNotifCount())}
      </button>
    </div>

    ${chatActiveTab === 'chat' ? `
      <!-- Selector de Canales y Mensajes Directos -->
      <div class="chat-channels">
        <button type="button" class="chat-channel-btn ${chatChannel === 'general' ? 'active' : ''}" data-switch-channel="general">
          ${ic('users')}<span>Comunidad</span>${pill(counts.general)}
        </button>
        ${isCoord ? `
        <button type="button" class="chat-channel-btn ${chatChannel === 'coord' ? 'active' : ''}" data-switch-channel="coord" style="border-color:${chatChannel === 'coord' ? 'var(--royal)' : '#F5C518'};color:${chatChannel === 'coord' ? 'var(--royal)' : '#7A5200'}">
          ${ic('star')}<span>Coordinación</span>${pill(counts.coord)}
        </button>` : ''}
        <button type="button" class="chat-channel-btn ${chatChannel === 'dm' ? 'active' : ''}" data-switch-channel="dm">
          ${ic('mail')}<span>Mensajes directos</span>${pill(counts.dm)}
        </button>
      </div>

      ${chatChannel === 'dm' && !chatDmTarget ? `
        <!-- Directorio de Misioneros para Mensajes Directos -->
        <div style="padding:10px 16px;background:#F6F9FE;border-bottom:1px solid var(--line);display:flex;flex-direction:column;gap:8px">
          <div>
            <b style="font-size:14.5px;color:var(--navy);display:flex;align-items:center;gap:6px">${ic('mail')}Escribir a un misionero</b>
            <small style="font-size:12px;color:var(--muted)">Selecciona a un participante, coordinador o asesor para chatear en privado:</small>
          </div>
          <label class="sr" for="chat-dm-search-in">Buscar misionero</label>
          <input type="search" id="chat-dm-search-in" class="chat-input" placeholder="Buscar misionero por nombre, rol o parroquia…" value="${esc(chatDmSearch)}" style="width:100%;min-height:38px;padding:8px 12px;border-radius:10px;background:#fff;font-size:16px">
        </div>
        <div class="chat-msgs-wrap" id="chat-dm-list" style="padding:14px 16px;display:flex;flex-direction:column;gap:10px;background:#FAFBFD">
          ${renderDmMembersList(myUid, myEmail)}
        </div>
      ` : `
        ${chatChannel === 'dm' && chatDmTarget ? `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:#F0F4F9;border-bottom:1.5px solid var(--line);gap:10px">
            <button type="button" class="btn btn-ghost btn-sm" data-clear-dm style="min-height:40px;padding:0 12px;font-size:13px;display:inline-flex;align-items:center;gap:6px">
              ${ic('back')}<span>Lista de misioneros</span>
            </button>
            <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1;justify-content:flex-end">
              <div style="width:34px;height:34px;border-radius:50%;overflow:hidden;background:var(--mist);display:flex;align-items:center;justify-content:center;flex:0 0 auto;border:2px solid var(--royal)">
                ${chatDmTarget.foto ? `<img src="${esc(chatDmTarget.foto)}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<b style="font-size:14px;color:var(--royal)">${esc((chatDmTarget.primerNombre || 'M').charAt(0).toUpperCase())}</b>`}
              </div>
              <div style="min-width:0;text-align:right">
                <b style="font-size:14px;color:var(--navy);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(chatDmTarget.nombre)}</b>
                <span style="font-size:11px;color:var(--muted)">Mensaje privado</span>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Contenedor de Mensajes (Comunidad, Coord o DM activo) -->
        <div class="chat-msgs-wrap" id="chat-msgs-box">
          ${desde > 0 ? `<button type="button" class="older" data-chat-older>${ic('up')} Cargar mensajes anteriores (${desde})</button>` : ''}
          ${!filteredMsgs.length ? `
            <div class="chat-empty">
              <span class="ico-big" aria-hidden="true">${ic(chatChannel === 'dm' ? 'mail' : 'msg')}</span>
              <b style="font-size:16px;color:var(--navy);display:block">
                ${chatChannel === 'dm' ? `Inicia la conversación con ${esc(chatDmTarget ? chatDmTarget.primerNombre : 'el misionero')}` : (chatChannel === 'coord' ? '¡Bienvenido al Chat de Coordinación!' : '¡Bienvenido al Chat de la Comunidad!')}
              </b>
              <p style="margin:6px 0 0;color:var(--muted);font-size:13.5px">
                ${chatChannel === 'dm' ? 'Solo ustedes dos pueden leer esta conversación.' : 'Sé el primero en enviar un saludo o mensaje a los misioneros.'}
              </p>
            </div>` : filteredMsgs.map((m) => {
              const isMine = esMio(m);
              /* El nombre se toma del directorio (miembros/{uid}) cuando existe; el del mensaje lo escribe quien lo envía */
              const mem = (miembros || []).find((x) => x && x.uid === m.uid);
              const author = (mem && mem.nombre) || m.autor || 'Misionero JUMA';
              const firstLetter = author.charAt(0).toUpperCase() || 'M';
              const fotoUrl = fotoDeAutor(m);
              const time = fmtChatTime(m.creado && m.creado.toDate ? m.creado.toDate().toISOString() : m.fecha);
              const rolBadge = m.rol === 'coordinador' ? '★ Coordinador' : (m.rol === 'asesor' ? '◆ Asesor' : '');
              return `<div class="chat-bubble-row ${isMine ? 'mine' : 'theirs'}">
                ${!isMine ? (fotoUrl ? `<img src="${esc(fotoUrl)}" alt="" class="chat-avatar">` : `<span class="chat-avatar-init">${esc(firstLetter)}</span>`) : ''}
                <div class="chat-bubble ${isMine ? 'mine' : 'theirs'}">
                  ${!isMine ? `<div class="chat-meta">
                    <span class="chat-author">${esc(author)}</span>
                    ${rolBadge ? `<span style="font-size:10px;padding:1px 6px;border-radius:99px;background:#E8F1FF;color:var(--royal);font-weight:800">${esc(rolBadge)}</span>` : ''}
                  </div>` : ''}
                  <div style="white-space:pre-wrap">${esc(m.texto)}</div>
                  <div class="chat-time">${esc(time)}</div>
                </div>
              </div>`;
            }).join('')}
        </div>

        <!-- Entrada de Texto -->
        <div class="chat-input-bar">
          <form id="chat-send-form" style="display:flex;align-items:center;gap:8px;width:100%;margin:0">
            <input type="text" id="chat-msg-in" class="chat-input" placeholder="${chatChannel === 'dm' ? `Escribe un mensaje privado a ${esc(chatDmTarget ? chatDmTarget.primerNombre : 'misionero')}…` : (chatChannel === 'coord' ? 'Escribe a los coordinadores…' : 'Escribe un mensaje a la comunidad…')}" maxlength="1000" autocomplete="off" required>
            <label class="sr" for="chat-msg-in">Escribe tu mensaje</label>
            <button type="submit" class="chat-send-btn" title="Enviar mensaje" aria-label="Enviar mensaje">${ic('send')}</button>
          </form>
        </div>
      `}
      ` : `
      <!-- Pestaña de Notificaciones y Avisos -->
      <div style="flex:1 1 auto;overflow-y:auto;padding:18px 20px;display:flex;flex-direction:column;gap:14px;background:#FAFBFD">
        <div style="padding:14px 16px;border-radius:14px;background:#fff;border:1.5px solid #F5C518;box-shadow:0 2px 8px rgba(245,197,24,.1)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <span style="color:#92400E;display:inline-flex" aria-hidden="true">${ic('cake')}</span>
            <b style="font-size:15px;color:#7A5200">Cumpleaños de esta semana</b>
          </div>
          ${cumples.length ? `<div style="display:flex;flex-direction:column;gap:8px">${cumples.map((c) => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;background:#FFFDF5;border-radius:10px;border:1px solid #FDE68A">
              <div>
                <b style="font-size:14px;color:var(--ink)">${esc(c.nombre)}</b>
                <div style="font-size:12px;color:var(--muted)">${c.esHoy ? '🎉 ¡HOY ES SU CUMPLEAÑOS!' : (c.esManana ? 'Mañana ' : '') + c.dia + ' de ' + c.mesNombre}</div>
              </div>
              ${c.waUrl ? `<a class="btn btn-soft btn-sm" target="_blank" rel="noopener" href="${esc(c.waUrl)}" style="min-height:34px;padding:0 10px;font-size:12.5px">${ic('share')}Felicitar</a>` : (c.id && !c.isExtra && c.id !== myUid ? `<button type="button" class="btn btn-soft btn-sm" data-open-dm="${esc(c.id)}" style="min-height:34px;padding:0 10px;font-size:12.5px">${ic('msg')}Felicitar</button>` : '')}
            </div>`).join('')}</div>` : `<p style="margin:0;font-size:13px;color:var(--muted)">No hay cumpleaños en los próximos 7 días.</p>`}
        </div>

        ${proxEncuentro ? `
        <div style="padding:14px 16px;border-radius:14px;background:#fff;border:1.5px solid var(--royal);box-shadow:0 2px 8px rgba(36,82,200,.08)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <span style="color:var(--royal);display:inline-flex" aria-hidden="true">${ic('calendar')}</span>
            <b style="font-size:15px;color:var(--navy)">Próximo encuentro</b>
          </div>
          <p style="margin:0 0 6px;font-size:14.5px;color:var(--ink)"><b>${esc(proxEncuentro.tema)}</b></p>
          <div style="font-size:12.5px;color:var(--muted);margin-bottom:10px">${esc(proxEncuentro.diaSem + ' ' + proxEncuentro.dia + ' de ' + proxEncuentro.mes)} · ${esc(hora())} · ${esc(lugar())}</div>
          <a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="${esc(mapsUrl())}" style="display:inline-flex;align-items:center;gap:6px;font-weight:800;color:var(--royal);border-color:var(--royal)">
            ${ic('pin')}<span>Cómo llegar en Google Maps</span>
          </a>
        </div>` : ''}

        ${postsList.length ? `
        <div style="padding:14px 16px;border-radius:14px;background:#fff;border:1.5px solid var(--line)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span style="color:var(--royal);display:inline-flex" aria-hidden="true">${ic('news')}</span>
            <b style="font-size:15px;color:var(--navy)">Últimas publicaciones de JUMA</b>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${postsList.map((p) => `
              <div style="padding:10px 12px;border-radius:10px;background:var(--paper);border:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:10px">
                <div style="min-width:0">
                  <b style="display:block;font-size:13.5px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(p.t || 'Publicación JUMA')}</b>
                  <span style="font-size:11.5px;color:var(--muted)">${p.fecha ? fmtF(p.fecha) : 'Reciente'}</span>
                </div>
                <button type="button" class="btn btn-soft btn-sm" data-view-target="novedades" style="min-height:36px;padding:0 12px;font-size:12.5px;flex:0 0 auto">Ver</button>
              </div>`).join('')}
          </div>
        </div>` : ''}
      </div>`}
  </div></div>`;
}

async function sendChatMessage(texto) {
  const clean = String(texto || '').trim();
  if (!clean) return;
  if (!currentUser) { openAuthModal(); return; }
  if (!isMemberUI()) { showToast('Completa tu planilla para escribir en el chat.'); return; }
  if (!fb || !fb.db || !fb.addDoc) { showToast('Sin conexión con el chat. Intenta de nuevo en un momento.'); return; }
  if (chatChannel === 'coord' && !coordUI()) chatChannel = 'general';
  const isDm = chatChannel === 'dm';
  if (isDm && !chatDmTarget) return;

  const d = (myProfile && myProfile.datos) || {};
  const fullName = String(
    (myProfile && (myProfile.nombre || (d.nombres ? (d.nombres + ' ' + (d.apellidos || '')).trim() : ''))) ||
    currentUser.displayName ||
    (currentUser.email ? currentUser.email.split('@')[0] : '') ||
    'Misionero JUMA'
  ).trim().slice(0, 80);
  /* La foto no se copia dentro del mensaje (antes iba la imagen completa en cada uno): solo un enlace http(s) */
  const fotoRaw = String((myProfile && (myProfile.foto || d.foto)) || currentUser.photoURL || '');
  const foto = /^https?:\/\//i.test(fotoRaw) ? fotoRaw.slice(0, 1500) : '';
  const uid = currentUser.uid;
  const myEmail = miCorreo();

  const msg = {
    canal: chatChannel,
    texto: clean.slice(0, 1000),
    autor: fullName,
    foto,
    rol: myRole(),
    uid,
    correo: myEmail,
    fecha: new Date().toISOString(),
    creado: fb.serverTimestamp()
  };
  if (isDm) {
    const targetUid = chatDmTarget.uid || chatDmTarget.id || '';
    const targetEmail = String(chatDmTarget.correo || '').trim().toLowerCase();
    Object.assign(msg, {
      dmKey: [uid, targetUid].sort().join('_'),
      deUid: uid,
      deEmail: myEmail,
      deNombre: fullName,
      paraUid: targetUid,
      paraEmail: targetEmail,
      paraNombre: String(chatDmTarget.nombre || '').slice(0, 80),
      participantes: [uid, targetUid],
      emails: [myEmail, targetEmail].filter(Boolean)
    });
  }
  try {
    await fb.addDoc(fb.collection(fb.db, 'chat_mensajes'), msg);
  } catch (e) {
    showToast('No se pudo enviar el mensaje. Revisa tu conexión.');
  }
  marcarVistaChatActual();
}

/* ---------- Escuchas de Firestore (una por canal; las reglas no filtran, así que cada consulta
   pide solo lo que el usuario puede leer) ---------- */
let escuchas = [];
const chatPorConsulta = new Map();
function reconstruirChat() {
  const all = new Map();
  chatPorConsulta.forEach((mapa) => mapa.forEach((v, k) => all.set(k, v)));
  chatMessages = Array.from(all.values()).sort((a, b) => msgTime(a) - msgTime(b));
  if (modalKey === 'chat') { repaintChat(); marcarVistaChatActual(); }
  else refreshBadges();
}
function escucharConsulta(nombre, construir) {
  let unsub = null;
  let cerrado = false;
  const arrancar = (conOrden) => {
    if (cerrado) return;
    try {
      unsub = fb.onSnapshot(construir(conOrden), (snap) => {
        const mapa = new Map();
        snap.forEach((docu) => mapa.set(docu.id, Object.assign({ id: docu.id }, docu.data({ serverTimestamps: 'estimate' }))));
        chatPorConsulta.set(nombre, mapa);
        reconstruirChat();
      }, (err) => {
        /* Falta el índice compuesto: se repite sin orderBy y se ordena aquí */
        if (conOrden && !cerrado && err && (err.code === 'failed-precondition' || /index/i.test(String(err.message || '')))) {
          try { if (unsub) unsub(); } catch (e) {}
          arrancar(false);
        }
      });
    } catch (e) {
      if (conOrden) arrancar(false);
    }
  };
  arrancar(true);
  escuchas.push(() => { cerrado = true; try { if (unsub) unsub(); } catch (e) {} });
}
function iniciarEscuchasDeMiembro() {
  if (escuchas.length || !currentUser || !isMemberUI() || !fb || !fb.db || !fb.onSnapshot) return;
  const uid = currentUser.uid;
  const col = () => fb.collection(fb.db, 'chat_mensajes');
  const consulta = (filtros) => (conOrden) => (conOrden
    ? fb.query(col(), ...filtros(), fb.orderBy('fecha', 'desc'), fb.limit(120))
    : fb.query(col(), ...filtros(), fb.limit(400)));
  escucharConsulta('general', consulta(() => [fb.where('canal', '==', 'general')]));
  if (coordUI()) escucharConsulta('coord', consulta(() => [fb.where('canal', '==', 'coord')]));
  escucharConsulta('dm-enviados', consulta(() => [fb.where('deUid', '==', uid)]));
  escucharConsulta('dm-recibidos', consulta(() => [fb.where('paraUid', '==', uid)]));
  try {
    const un = fb.onSnapshot(fb.collection(fb.db, 'miembros'), (snap) => {
      const arr = [];
      snap.forEach((docu) => arr.push(Object.assign({ uid: docu.id }, docu.data())));
      miembros = arr;
      if (modalKey === 'friends') openFriendsModal();
      if (currentSection === 'comunidad') renderComunidadView();
      if (modalKey === 'chat' && chatChannel === 'dm' && !chatDmTarget) repaintChat();
      refreshBadges();
    }, () => {});
    escuchas.push(un);
  } catch (e) {}
}
function pararEscuchasDeMiembro() {
  escuchas.forEach((f) => { try { f(); } catch (e) {} });
  escuchas = [];
  chatPorConsulta.clear();
}

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
  } catch (x) { ok = /timeout/i.test(String((x && x.message) || '')); }
  if (ok) {
    msg.textContent = 'Gracias. Tu mensaje será revisado por un coordinador antes de publicarse.';
    $('#m-nombre').value = ''; $('#m-texto').value = '';
  } else {
    msg.textContent = 'No se pudo enviar en este momento. Intenta de nuevo más tarde.';
  }
});

/* ===================== avisos al teléfono (notificaciones) ===================== */
function setupPush() {
  if (!fb || !fb.onMessage || !fb.messaging) return;
  try {
    /* Con la app abierta: aviso dentro de la página y se actualizan los globos rojos */
    fb.onMessage(fb.messaging, (p) => {
      const n = (p && p.notification) || {};
      const d = (p && p.data) || {};
      const titulo = n.title || d.title || 'JUMA Duaca';
      const cuerpo = n.body || d.body || '';
      showToast(titulo + (cuerpo ? ': ' + cuerpo : ''));
      refreshBadges();
    });
  } catch (e) {}
}
/* Guarda el token de avisos del teléfono en tokens/{uid} (solo miembros con sesión y permiso). */
async function registrarTokenPush(pedirPermiso) {
  try {
    if (!currentUser || !isMemberUI() || !fb || !fb.db || !fb.getToken || !fb.messaging || !CFG.vapidKey || !fb.arrayUnion) return false;
    if (!('Notification' in window) || !('serviceWorker' in navigator)) return false;
    if (Notification.permission !== 'granted') {
      if (!pedirPermiso) return false;
      const r = await Notification.requestPermission();
      if (r !== 'granted') return false;
    }
    const reg = await navigator.serviceWorker.ready;
    const token = await fb.getToken(fb.messaging, { vapidKey: CFG.vapidKey, serviceWorkerRegistration: reg });
    if (!token) return false;
    const uid = currentUser.uid;
    const yaKey = 'juma-push-token-' + uid;
    try { if (localStorage.getItem(yaKey) === token) return true; } catch (e) {}
    await fb.setDoc(fb.doc(fb.db, 'tokens', uid), { tokens: fb.arrayUnion(token), uid, actualizado: fb.serverTimestamp() }, { merge: true });
    try { localStorage.setItem(yaKey, token); } catch (e) {}
    return true;
  } catch (e) { return false; }
}

/* ===================== firebase (Auth + Firestore optimizado para móviles + Messaging) ===================== */
let appStats = { descargasApk: 0, historialDescargas: [] };
function detectDeviceName() {
  const ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) {
    const m = ua.match(/Android\s+[\d.]+;\s*([^;)]+)/i);
    return 'Android' + (m && m[1] ? ' (' + m[1].trim() + ')' : '');
  }
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iPhone / iOS';
  if (/Windows/i.test(ua)) return 'Computadora (Windows)';
  if (/Mac/i.test(ua)) return 'Mac';
  return 'Teléfono / Navegador';
}
function totalAppDownloads() {
  const regCount = Math.max(allInscripciones.length, Number(appStats.inscritos) || 0);
  const rawDl = Number(appStats.descargasApk) || 0;
  return Math.max(rawDl, regCount);
}
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
      /* Caché local de Firestore: los cambios hechos sin internet (puntos, perfil) se guardan en el
         teléfono y se envían solos cuando vuelve la conexión */
      let cache;
      try { cache = fs.persistentLocalCache({ tabManager: fs.persistentMultipleTabManager() }); } catch (e) { cache = undefined; }
      db = fs.initializeFirestore(a, { experimentalAutoDetectLongPolling: true, ...(cache ? { localCache: cache } : {}) });
    } catch (e) {
      db = fs.getFirestore(a);
    }
    fb = { app: a, db, auth: au.getAuth(a), au };
    ['doc', 'getDoc', 'setDoc', 'deleteDoc', 'updateDoc', 'collection', 'addDoc', 'getDocs', 'query', 'where', 'orderBy', 'limit', 'onSnapshot', 'serverTimestamp', 'increment', 'arrayUnion'].forEach((k) => { fb[k] = fs[k]; });
    try {
      /* Contenido público de la página (lectura pública en las reglas) */
      fb.onSnapshot(fb.doc(fb.db, 'site', 'config'), (snap) => {
        if (snap.exists()) {
          const remote = snap.data();
          tomarListasRoles(remote);
          if (remote && String(remote.actualizado || '') >= String(cfg.actualizado || '')) {
            pub = clone(remote);
            if (!isEditor() || !pickDraft()) { cfg = clone(remote); renderAll(); refreshBadges(); }
          }
        }
      }, () => {});
      fb.onSnapshot(fb.doc(fb.db, 'site', 'stats'), (snap) => {
        if (snap.exists()) {
          appStats = Object.assign({ descargasApk: 0, historialDescargas: [] }, snap.data());
          const statNumEl = $('#stat-apk-dl-num');
          if (statNumEl) statNumEl.textContent = '📲 ' + totalAppDownloads();
        }
      }, () => {});
      /* Si abre desde la APK instalada y aún no se había contabilizado este teléfono, suma 1 al contador */
      const isInstalledApp = (window.matchMedia && (window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches)) || document.referrer.includes('android-app://') || /; wv\)/i.test(navigator.userAgent || '');
      if (isInstalledApp && fb.increment && !localStorage.getItem('juma-apk-dl-v1')) {
        localStorage.setItem('juma-apk-dl-v1', '1');
        fb.setDoc(fb.doc(fb.db, 'site', 'stats'), {
          descargasApk: fb.increment(1),
          ultimaDescarga: new Date().toISOString()
        }, { merge: true }).catch(() => {});
      }
    } catch (e) {}
    loadMuro();
    await authInit();
    import(base + 'firebase-messaging.js').then(async (ms) => {
      if (await ms.isSupported()) {
        fb.messaging = ms.getMessaging(a); fb.getToken = ms.getToken; fb.onMessage = ms.onMessage;
        setupPush();
        registrarTokenPush(false);
      }
    }).catch(() => {});
  } catch (e) { console.warn('Firebase no disponible', e); }
}

/* ===================== autenticación: solo Firebase Auth da acceso ===================== */
async function authInit() {
  const { isSignInWithEmailLink, signInWithEmailLink, onAuthStateChanged } = fb.au;
  if (isSignInWithEmailLink && isSignInWithEmailLink(fb.auth, location.href)) {
    const email = localStorage.getItem('juma-email') || prompt('Escribe el correo al que llegó el enlace de acceso');
    try { await signInWithEmailLink(fb.auth, email, location.href); localStorage.removeItem('juma-email'); history.replaceState(null, '', location.pathname); } catch (e) {}
  }
  onAuthStateChanged(fb.auth, (u) => { handleUser(u || null); });
}

/* Prepara todo para el usuario (o para el invitado). Se llama una sola vez por cambio de sesión. */
let handleSeq = 0;
let handlePromise = null;
let handledUid = undefined;
function handleUser(u, force = false) {
  const uid = u ? u.uid : null;
  if (!force && handlePromise && handledUid === uid) return handlePromise;
  handledUid = uid;
  const seq = ++handleSeq;
  handlePromise = (async () => {
    pararEscuchasDeMiembro();
    currentUser = u || null;
    privRole = '';
    if (!u && rolUnsub) { try { rolUnsub(); } catch (e) {} rolUnsub = null; }
    perfilEnNube = false;
    myProfile = null;
    miembros = [];
    chatMessages = [];
    allInscripciones = [];
    chatDmTarget = null;
    if (!u) {
      pararPresencia();
      lecturas = LECTURAS_VACIAS();
      updateAuthUI();
      return;
    }
    try { localStorage.removeItem('juma-is-logged-out'); } catch (e) {}
    myProfile = leerPerfilLocal(u.uid); // solo para mostrar nombre y foto mientras carga
    updateAuthUI();
    await Promise.all([loadPrivRole(u), cargarLecturas()]);
    if (seq !== handleSeq) return;
    await loadUserProfile(u);
    if (seq !== handleSeq) return;
    if (!privRole) { await cargarRolAntiguo(u); if (seq !== handleSeq) return; }
    updateAuthUI();
    vigilarRol(u);
    iniciarPresencia();
    if (isMemberUI()) { iniciarEscuchasDeMiembro(); upsertMiembro(); }
    if (coordUI()) { showFab(); loadAllInscripciones(); }
    registrarTokenPush(false);
    refreshBadges();
    abrirChatPendiente();
    setTimeout(() => checkBirthdayCelebration(), 500);
  })();
  return handlePromise;
}

/* ===================== clave del editor (solo el editor local + GitHub) + borradores ===================== */
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
function pickDraft() { const d = readDraft(); if (d && (d._dirty || String(d.actualizado || '') > String(pub.actualizado || ''))) return d; return null; }
/* Modo editor abierto con la clave del editor (5 toques). Solo dura esta sesión del navegador y solo
   permite editar el contenido y publicarlo en GitHub; no da acceso a planillas, chats ni roles. */
const isEditor = () => { try { return sessionStorage.getItem('juma-ed') === '1'; } catch (e) { return false; } };

function prefillFormDesdeCuenta() {
  if (!currentUser) return;
  form.step = 1; form.isUpdate = false; form.done = false; form.err = '';
  form.d.correo = currentUser.email || '';
  if (currentUser.displayName && !form.d.nombres) {
    const parts = currentUser.displayName.trim().split(/\s+/);
    form.d.nombres = parts.slice(0, Math.ceil(parts.length / 2)).join(' ');
    if (parts.length > 1 && !form.d.apellidos) form.d.apellidos = parts.slice(Math.ceil(parts.length / 2)).join(' ');
  }
  if (currentUser.photoURL && !form.d.foto) form.d.foto = currentUser.photoURL;
}
function mensajeErrorLogin(err) {
  const c = String((err && (err.code || err.message)) || '');
  if (/network|timeout|unavailable/i.test(c)) return 'No hay conexión con el servidor. Revisa tu internet e intenta de nuevo.';
  if (/too-many/i.test(c)) return 'Demasiados intentos seguidos. Espera unos minutos o usa «Olvidé mi contraseña».';
  if (/popup|cancel/i.test(c)) return 'Se cerró la ventana de Google antes de terminar. Intenta de nuevo.';
  return 'Correo o contraseña incorrectos. Si nunca creaste una contraseña, usa «Continuar con Google» o «Crear mi cuenta».';
}

/* Eventos del modal de autenticación y perfil */
modalRoot.addEventListener('click', async (e) => {
  if (!$('#au-t')) return;
  const pTab = e.target.closest('[data-profile-tab]');
  if (pTab) {
    e.preventDefault();
    profileActiveTab = pTab.dataset.profileTab;
    repaintAuth();
    return;
  }
  if (e.target.closest('[data-go-register]')) { if (currentUser) prefillFormDesdeCuenta(); openForm(false); return; }
  if (e.target.closest('[data-edit-my-form]')) { if (perfilEnNube) openForm(true); else { prefillFormDesdeCuenta(); openForm(false); } return; }
  if (e.target.closest('[data-dl-profile]')) { if (myProfile && myProfile.datos) downloadPlanillaHtml(myProfile.datos, myProfile); return; }
  if (e.target.closest('[data-open-master-panel]')) { openEditor(); return; }
  if (e.target.closest('[data-open-qr-scanner]')) { tab = 'qr'; openEditor(); return; }
  if (e.target.closest('[data-open-cumple-tab]')) { tab = 'cum'; openEditor(); return; }
  if (e.target.closest('[data-verify-email]')) {
    try { if (fb && fb.au.sendEmailVerification && currentUser) { await fb.au.sendEmailVerification(currentUser); showToast('Te enviamos el enlace de verificación a ' + currentUser.email); } } catch (x) { showToast('No se pudo enviar el enlace ahora. Intenta más tarde.'); }
    return;
  }
  if (e.target.closest('[data-reload-user]')) {
    try {
      if (currentUser && currentUser.reload) await currentUser.reload();
      await handleUser(fb && fb.auth ? fb.auth.currentUser : currentUser, true);
      showToast(currentUser && currentUser.emailVerified ? '✔ Correo verificado.' : 'Aún no aparece verificado. Abre el enlace del correo y vuelve a intentar.');
    } catch (x) {}
    if ($('#au-t')) repaintAuth();
    return;
  }
  if (e.target.closest('[data-logout]')) {
    stopQrCamera();
    const uidSalida = currentUser ? currentUser.uid : '';
    await flushLecturas();
    pararEscuchasDeMiembro();
    pararPresencia();
    try { if (fb && fb.auth) await fb.au.signOut(fb.auth); } catch (x) {}
    try {
      sessionStorage.removeItem('juma-ed');
      if (uidSalida) localStorage.removeItem('juma-perfil-' + uidSalida);
      localStorage.setItem('juma-is-logged-out', '1');
    } catch (x) {}
    await handleUser(null);
    closeModal();
    switchSection('inicio');
    showToast('Has cerrado sesión.');
    return;
  }
  if (e.target.closest('[data-google-login]')) {
    if (!fb || !fb.auth || !fb.au.GoogleAuthProvider) { authErr = 'Espera un momento a que la app se conecte e intenta de nuevo.'; repaintAuth(); return; }
    authBusy = true; authErr = ''; authOk = ''; repaintAuth();
    try {
      const cred = await fb.au.signInWithPopup(fb.auth, new fb.au.GoogleAuthProvider());
      await handleUser(cred.user);
      authBusy = false;
      if (!perfilEnNube && !coordUI()) {
        prefillFormDesdeCuenta();
        openForm(false);
        showToast('¡Hola! Completa tu foto y planilla para activar tu carnet.');
        return;
      }
      if (perfilEnNube && needsMandatoryPhoto(myProfile)) { openForcePhotoModal(); return; }
      closeModal(); switchSection('comunidad');
      showToast(coordUI() ? '¡Bienvenido(a), Coordinación JUMA!' : '¡Hola, ' + ((myProfile && myProfile.nombre) || 'Misionero') + '! Sesión iniciada.');
    } catch (x) {
      authBusy = false;
      authErr = mensajeErrorLogin(x);
      repaintAuth();
    }
    return;
  }
  if (e.target.closest('[data-create-account]')) {
    const em = (($('#lu-email') || {}).value || '').trim().toLowerCase();
    const pw = ($('#lu-pass') || {}).value || '';
    authEmailPrev = em;
    if (!em || pw.length < 6) { authErr = 'Escribe tu correo y una contraseña nueva de al menos 6 caracteres para crear tu cuenta.'; repaintAuth(); return; }
    if (!fb || !fb.auth) { authErr = 'Espera un momento a que la app se conecte e intenta de nuevo.'; repaintAuth(); return; }
    authBusy = true; authErr = ''; authOk = ''; repaintAuth();
    try {
      const cred = await withTimeout(fb.au.createUserWithEmailAndPassword(fb.auth, em, pw), 10000);
      if (fb.au.sendEmailVerification) fb.au.sendEmailVerification(cred.user).catch(() => {});
      await handleUser(cred.user);
      authBusy = false;
      authOk = 'Cuenta creada. Te enviamos un enlace a ' + em + ' para verificar tu correo: al verificarlo, la app busca tu planilla anterior.';
      repaintAuth();
    } catch (x) {
      authBusy = false;
      authErr = /already-in-use/i.test(String((x && x.code) || '')) ? 'Ese correo ya tiene cuenta. Inicia sesión con tu contraseña o usa «Olvidé mi contraseña».' : mensajeErrorLogin(x);
      repaintAuth();
    }
    return;
  }
  if (e.target.closest('[data-reset-pw]')) {
    const em = (($('#lu-email') || {}).value || '').trim();
    authEmailPrev = em.toLowerCase();
    if (!em) { authErr = 'Escribe primero tu correo electrónico arriba para enviarte el enlace de recuperación.'; repaintAuth(); return; }
    try {
      await fb.au.sendPasswordResetEmail(fb.auth, em);
      authErr = ''; authOk = 'Te enviamos un correo a ' + em + ' para cambiar tu contraseña.';
    } catch (x) { authErr = 'No se pudo enviar el correo. Verifica que esté bien escrito.'; }
    repaintAuth();
  }
});

/* Eventos del modal de Chat Comunitario y Mensajes Directos */
modalRoot.addEventListener('click', (e) => {
  if (modalKey !== 'chat') return;
  if (e.target.closest('[data-chat-tab]')) {
    chatActiveTab = e.target.closest('[data-chat-tab]').dataset.chatTab;
    repaintChat();
    if (chatActiveTab === 'notif') marcarNotificacionesVistas();
    else { marcarVistaChatActual(); scrollChatBottom(); }
    return;
  }
  if (e.target.closest('[data-switch-channel]')) {
    chatChannel = e.target.closest('[data-switch-channel]').dataset.switchChannel;
    if (chatChannel !== 'dm') chatDmTarget = null;
    repaintChat();
    marcarVistaChatActual();
    scrollChatBottom();
    return;
  }
  const selectDm = e.target.closest('[data-select-dm]');
  if (selectDm) {
    const target = buscarMiembro(selectDm.dataset.selectDm);
    if (target) {
      chatChannel = 'dm';
      chatDmTarget = target;
      repaintChat();
      marcarVistaChatActual();
      scrollChatBottom();
    }
    return;
  }
  if (e.target.closest('[data-clear-dm]')) {
    chatDmTarget = null;
    repaintChat();
    return;
  }
});

modalRoot.addEventListener('submit', async (e) => {
  if (e.target.id === 'chat-send-form') {
    e.preventDefault();
    const inEl = $('#chat-msg-in');
    const txt = (inEl ? inEl.value : '').trim();
    if (!txt) return;
    inEl.value = '';
    await sendChatMessage(txt);
    return;
  }
  if (e.target.id === 'pw-form') {
    e.preventDefault();
    const v = ($('#pw-in') || {}).value || '';
    if (sha256(normPass(v)) === PASS_HASH) {
      try { sessionStorage.setItem('juma-ed', '1'); } catch (x) {}
      showFab(); renderShell(); const d = pickDraft(); if (d) { cfg = cleanContent(d); renderAll(); }
      openEditor();
    } else { const m = $('#pw-msg'); if (m) m.textContent = 'Clave incorrecta.'; const i = $('#pw-in'); if (i) i.select(); }
    return;
  }
  if (e.target.id === 'login-user-form') {
    e.preventDefault();
    const em = (($('#lu-email') || {}).value || '').trim().toLowerCase();
    const pw = ($('#lu-pass') || {}).value || '';
    authEmailPrev = em;
    if (!em || !pw) return;
    if (!fb || !fb.auth) { authErr = 'Espera un momento a que la app se conecte e intenta de nuevo.'; repaintAuth(); return; }
    authBusy = true; authErr = ''; authOk = ''; repaintAuth();
    try {
      const cred = await withTimeout(fb.au.signInWithEmailAndPassword(fb.auth, em, pw), 10000);
      await handleUser(cred.user);
      authBusy = false;
      if (perfilEnNube && needsMandatoryPhoto(myProfile)) { openForcePhotoModal(); return; }
      repaintAuth();
    } catch (err) {
      authBusy = false;
      authErr = mensajeErrorLogin(err);
      repaintAuth();
    }
  }
});

/* ===================== cargar planillas e intenciones para el Panel Maestro ===================== */
async function loadAdminData() {
  /* Planillas y muro completos: solo coordinadores/asesores/cuenta maestra (las reglas lo exigen) */
  if (!coordUI() || !fb || !fb.db) { allMensajes = []; return; }
  const mmap = new Map();
  await Promise.all([
    loadAllInscripciones(),
    withTimeout(fb.getDocs(fb.collection(fb.db, 'mensajes')), 6000).then((snap) => {
      snap.docs.forEach((d) => mmap.set(d.id, Object.assign({ id: d.id, _src: 'fs' }, d.data())));
    }).catch(() => {}),
    withTimeout(fb.getDoc(fb.doc(fb.db, 'site', 'stats')), 4000).then((snap) => {
      if (snap.exists()) appStats = Object.assign({ descargasApk: 0, historialDescargas: [] }, snap.data());
    }).catch(() => {}),
    cargarRoles()
  ]);
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
      roleLabel(rolEtiqueta(x)),
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

/* ---------- Roles con permisos: roles/{correo} (solo la Cuenta Maestra los cambia) ---------- */
let rolesLista = []; // [{ email, rol, nombre, actualizado }]
async function cargarRoles() {
  if (!coordUI() || !fb || !fb.db) { rolesLista = []; return; }
  try {
    const snap = await withTimeout(fb.getDocs(fb.collection(fb.db, 'roles')), 6000);
    rolesLista = snap.docs.map((d) => Object.assign({ email: d.id }, d.data()))
      .filter((r) => r.rol === 'coordinador' || r.rol === 'asesor')
      .sort((a, b) => String(a.rol).localeCompare(String(b.rol)) || String(a.email).localeCompare(String(b.email)));
  } catch (e) {}
}
/* Etiqueta del rol de una planilla en el panel: primero roles/{correo}, si no, la de la planilla SIN permisos. */
function rolEtiqueta(rec) {
  const em = String((rec && (rec.correo || (rec.datos && rec.datos.correo))) || '').trim().toLowerCase();
  if (em && isMasterEmail(em)) return 'coordinador';
  const r = em ? rolesLista.find((x) => x.email === em) : null;
  if (r) return r.rol;
  return rolAntiguo(em, rec) || rolSinPermiso(userRole(rec));
}
const correoValido = (em) => /^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/.test(String(em || ''));
async function guardarRol(email, rol, nombre) {
  if (!isAdminUser() || !fb || !fb.db) { edErr = 'Solo la Cuenta Maestra (jumaduaca@gmail.com, con sesión iniciada) puede asignar coordinadores y asesores.'; return false; }
  const em = String(email || '').trim().toLowerCase();
  if (!correoValido(em)) { edErr = 'Escribe un correo válido (el mismo con el que esa persona inicia sesión).'; return false; }
  if (rol !== 'coordinador' && rol !== 'asesor') { edErr = 'Elige Coordinador o Asesor.'; return false; }
  try {
    await withTimeout(fb.setDoc(fb.doc(fb.db, 'roles', em), { rol, nombre: String(nombre || '').trim().slice(0, 80), actualizado: new Date().toISOString() }, { merge: true }), 6000);
    await cargarRoles();
    return true;
  } catch (e) {
    edErr = 'No se pudo guardar el rol (revisa la conexión y que las reglas de Firestore estén publicadas).';
    return false;
  }
}
async function quitarRol(email) {
  if (!isAdminUser() || !fb || !fb.db) { edErr = 'Solo la Cuenta Maestra puede quitar coordinadores y asesores.'; return false; }
  const em = String(email || '').trim().toLowerCase();
  try {
    /* Único borrado permitido en la app: un documento de roles (no se pierde ninguna planilla) */
    await withTimeout(fb.deleteDoc(fb.doc(fb.db, 'roles', em)), 6000);
    await quitarRolAntiguo(em);
    await cargarRoles();
    return true;
  } catch (e) {
    edErr = 'No se pudo quitar el rol. Revisa la conexión.';
    return false;
  }
}

/* Quita también el permiso de la versión anterior: listas de site/config y el rol escrito en sus planillas */
async function quitarRolAntiguo(em) {
  if (!isAdminUser() || !fb || !fb.db || !em) return;
  await refrescarListasRoles();
  if (listasRoles.coord.includes(em) || listasRoles.ases.includes(em)) {
    const coord = listasRoles.coord.filter((x) => x !== em), ases = listasRoles.ases.filter((x) => x !== em);
    try {
      await withTimeout(fb.setDoc(fb.doc(fb.db, 'site', 'config'), { coordinadoresEmails: coord, asesoresEmails: ases }, { merge: true }), 6000);
      listasRoles.coord = coord; listasRoles.ases = ases;
    } catch (e) {}
  }
  const conCorreo = (x) => String((x && (x.correo || (x.datos && x.datos.correo))) || '').trim().toLowerCase() === em;
  for (const rec of allInscripciones.filter((x) => conCorreo(x) && rolConPermiso(x.rol))) {
    const ids = [rec.id, rec.migradoDe].filter(Boolean);
    for (const id of ids) {
      try { await withTimeout(fb.setDoc(fb.doc(fb.db, 'inscripciones', id), { rol: 'participante' }, { merge: true }), 6000); } catch (e) {}
    }
    rec.rol = 'participante';
  }
}
async function cambiarRolInscrito(id, nuevoRol) {
  edErr = ''; edOk = '';
  if (!isMasterAccount()) {
    edErr = 'Solo la Cuenta Maestra puede modificar quién es Coordinador, Asesor o Participante.';
    repaintEd();
    return;
  }
  const rec = allInscripciones.find((x) => x && (x.id === id || x.uid === id));
  if (!rec) return;
  const em = String(rec.correo || (rec.datos && rec.datos.correo) || '').trim().toLowerCase();
  if (!em) { edErr = 'Esta planilla no tiene correo: para darle permisos, la persona debe tener cuenta con correo.'; repaintEd(); return; }
  let ok;
  if (nuevoRol === 'coordinador' || nuevoRol === 'asesor') ok = await guardarRol(em, nuevoRol, rec.nombre);
  else ok = await quitarRol(em);
  if (!ok) { repaintEd(); return; }
  /* La etiqueta en la planilla solo se muestra; el permiso real está en roles/{correo} */
  rec.rol = nuevoRol;
  rec.actualizado = new Date().toISOString();
  try { await withTimeout(fb.setDoc(fb.doc(fb.db, 'inscripciones', rec.id), { rol: nuevoRol, actualizado: rec.actualizado }, { merge: true }), 6000); } catch (e) {}
  edOk = `<b>✔ Rol actualizado por la Cuenta Maestra:</b> Ahora <b>${esc(rec.nombre || em)}</b> tiene el rol de <b>${esc(roleLabel(nuevoRol))}</b>. El cambio se activa cuando esa persona vuelva a abrir la app con su correo verificado.`;
  repaintEd();
}

function rolesTabHtml() {
  if (!isAdminUser()) return '<p class="ehint">Solo la Cuenta Maestra puede ver y cambiar esta lista.</p>';
  return `<p class="ehint"><b>Coordinadores y asesores:</b> estas personas pueden ver las planillas, tomar asistencia con QR, moderar el muro y publicar. El permiso se guarda en Firestore (<code>roles/correo</code>) y lo comprueba el servidor. Usa el <b>mismo correo con el que la persona inicia sesión</b> (y que lo tenga verificado).</p>
    <div style="padding:16px 18px;border-radius:14px;background:#fff;border:1.5px solid var(--royal);margin-bottom:16px">
      <b style="display:flex;align-items:center;gap:6px;font-size:15px;color:var(--navy);margin-bottom:10px">${ic('userplus')}Agregar coordinador o asesor</b>
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end">
        <div class="fld" style="flex:2 1 220px"><label for="rol-new-email">Correo</label><input id="rol-new-email" type="email" placeholder="correo@ejemplo.com" autocomplete="off"></div>
        <div class="fld" style="flex:1 1 160px"><label for="rol-new-nombre">Nombre (opcional)</label><input id="rol-new-nombre" type="text" placeholder="Ej.: María Pérez"></div>
        <div class="fld" style="flex:1 1 150px"><label for="rol-new-rol">Rol</label><select id="rol-new-rol" style="min-height:52px;padding:0 12px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:15px;background:#fff"><option value="coordinador">★ Coordinador(a)</option><option value="asesor">◆ Asesor(a)</option></select></div>
        <button type="button" class="btn btn-blue btn-sm" data-add-rol style="min-height:52px">Guardar</button>
      </div>
    </div>
    ${!rolesParaMostrar().length ? '<p class="body" style="font-size:15px">Aún no hay coordinadores ni asesores asignados. La Cuenta Maestra siempre tiene todos los permisos.</p>' : `<div style="display:flex;flex-direction:column;gap:8px">${rolesParaMostrar().map((r) => `<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border-radius:12px;background:#fff;border:1.5px solid var(--line)">
      <div style="min-width:0">${roleBadgeHtml(r.rol) || '<span style="display:inline-block;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:800;background:#E0E7FF;color:#3730A3;border:1px solid #6366F1">◆ Asesor(a)</span>'} <b style="font-size:15px;color:var(--ink);margin-left:6px">${esc(r.nombre || r.email)}</b><div style="font-size:13px;color:var(--muted)">${esc(r.email)}${r.antiguo ? ' · asignado en la versión anterior' : ''}</div></div>
      ${r.email === GABRIEL_CORREO ? '<span style="font-size:13px;color:var(--muted)">Coordinador fijo</span>' : `<button type="button" class="btn btn-danger btn-sm" data-rm-rol="${esc(r.email)}">Quitar permiso</button>`}
    </div>`).join('')}</div>`}`;
}
/* Lista del panel: roles/{correo} + los coordinadores y asesores de la versión anterior */
function rolesParaMostrar() {
  const out = rolesLista.map((r) => Object.assign({}, r));
  const ya = new Set(out.map((r) => r.email));
  const correoDe = (x) => String((x && (x.correo || (x.datos && x.datos.correo))) || '').trim().toLowerCase();
  const nombreDe = (em) => { const x = allInscripciones.find((y) => correoDe(y) === em); return x ? String(x.nombre || '') : ''; };
  const add = (email, rol, nombre) => {
    if (!email || !rol || ya.has(email) || isMasterEmail(email)) return;
    ya.add(email);
    out.push({ email, rol, nombre: nombre || nombreDe(email), antiguo: true });
  };
  add(GABRIEL_CORREO, 'coordinador', '');
  listasRoles.coord.forEach((e) => add(e, 'coordinador', ''));
  listasRoles.ases.forEach((e) => add(e, 'asesor', ''));
  allInscripciones.forEach((x) => add(correoDe(x), rolConPermiso(x.rol), x.nombre));
  return out;
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
  /* Carnet antiguo (id «juma-…»): si esa planilla ya pasó a la cuenta nueva, la asistencia va a la nueva */
  const nueva = allInscripciones.find((x) => x && x.migradoDe && x.migradoDe === rec.id);
  if (nueva) rec = nueva;

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
    guardarPerfilLocal();
  }

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

let dr = {}, tab = 'ins', fy = 0, edErr = '', edOk = '', edBusy = false, draftWarn = false, showAllSunEd = false, cumpleMesFilter = 'todos';
const setters = new Map(); let uid = 0;
function fld(label, val, set, o = {}) {
  const id = 'ed-' + (uid++); setters.set(id, set);
  const tag = o.area ? `<textarea id="${id}" data-ed="${id}" rows="${o.rows || 4}">${esc(val)}</textarea>` : `<input id="${id}" data-ed="${id}" type="${o.type || 'text'}" value="${esc(val)}" placeholder="${esc(o.ph || '')}">`;
  return `<div class="fld ${o.w ? 'w' : ''}">${label ? `<label for="${id}">${label}</label>` : ''}${tag}</div>`;
}
function chk(label, on, set) { const id = 'ed-' + (uid++); setters.set(id, set); return `<label style="display:flex;gap:10px;align-items:center;min-height:52px;font-size:15px;font-weight:700"><input type="checkbox" id="${id}" data-edc="${id}" ${on ? 'checked' : ''} style="width:22px;height:22px;margin:0">${label}</label>`; }

function getCumpleanosList(src = dr) {
  const now = new Date();
  const todayMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const curY = todayMid.getFullYear();
  const out = [];

  const addEntry = ({ id, nombre, nac, celular, rolTxt, foto, isExtra, extraIdx }) => {
    const m = String(nac || '').trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return;
    const yNac = parseInt(m[1], 10);
    const mesIdx = parseInt(m[2], 10) - 1;
    const dia = parseInt(m[3], 10);
    if (mesIdx < 0 || mesIdx > 11 || dia < 1 || dia > 31) return;

    let nextBday = new Date(curY, mesIdx, dia);
    if (nextBday < todayMid) nextBday = new Date(curY + 1, mesIdx, dia);
    const diasFaltan = Math.round((nextBday.getTime() - todayMid.getTime()) / 86400000);
    const edadCumple = yNac > 1900 ? (nextBday.getFullYear() - yNac) : null;

    const celClean = String(celular || '').replace(/\D/g, '');
    const waNum = celClean ? (celClean.startsWith('0') ? '58' + celClean.slice(1) : (celClean.startsWith('58') ? celClean : '58' + celClean)) : '';
    const msgWa = `🎉🎂 ¡Feliz cumpleaños, *${nombre}*! Que Dios y Nuestra Madre la Virgen Consolata te bendigan siempre en tu camino misionero. ¡Un gran abrazo de parte de toda tu familia de JUMA Duaca! 💙✨`;
    const waUrl = waNum.length >= 10 ? `https://wa.me/${waNum}?text=${encodeURIComponent(msgWa)}` : '';

    const ymd = `${nextBday.getFullYear()}${pad2(mesIdx + 1)}${pad2(dia)}`;
    const nextDay = new Date(nextBday.getFullYear(), mesIdx, dia + 1);
    const ymdEnd = `${nextDay.getFullYear()}${pad2(nextDay.getMonth() + 1)}${pad2(nextDay.getDate())}`;
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('🎂 Cumpleaños de ' + nombre + ' (JUMA Duaca)')}&dates=${ymd}/${ymdEnd}&details=${encodeURIComponent('Cumpleaños de ' + nombre + (rolTxt ? ' (' + rolTxt + ')' : '') + ' · Familia misionera JUMA Duaca.')}&recur=RRULE:FREQ=YEARLY`;

    out.push({
      id,
      nombre: nombre || 'Sin nombre',
      nac,
      mesIdx,
      mesNombre: MESES[mesIdx],
      dia,
      yNac,
      edadCumple,
      diasFaltan,
      esHoy: diasFaltan === 0,
      esManana: diasFaltan === 1,
      celular: celular || '',
      rolTxt: rolTxt || 'Participante',
      foto: foto || '',
      waUrl,
      gcalUrl,
      isExtra: !!isExtra,
      extraIdx
    });
  };

  /* Los miembros sin permisos no ven planillas: usan el directorio (solo día y mes, sin año ni teléfono) */
  if (!allInscripciones.length && (miembros || []).length) {
    miembros.forEach((x) => {
      if (!x || !/^\d{2}-\d{2}$/.test(String(x.cumple || ''))) return;
      addEntry({ id: x.uid, nombre: x.nombre || 'Misionero JUMA', nac: '1900-' + x.cumple, celular: '', rolTxt: roleLabel(userRole(x)), foto: x.foto || '', isExtra: false });
    });
  }
  allInscripciones.forEach((x) => {
    const d = x.datos || {};
    const nac = d.nac || x.nac || '';
    if (!nac) return;
    const nom = x.nombre || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Sin nombre';
    addEntry({
      id: x.id || x.uid,
      nombre: nom,
      nac,
      celular: x.celular || d.celular || '',
      rolTxt: roleLabel(coordUI() ? rolEtiqueta(x) : userRole(x)),
      foto: x.foto || d.foto || '',
      isExtra: false
    });
  });

  const extras = ((src && src.cumpleanosExtra) || (cfg && cfg.cumpleanosExtra) || []);
  extras.forEach((ex, idx) => {
    if (!ex || !ex.nombre || !ex.nac) return;
    addEntry({
      id: 'extra-' + idx,
      nombre: ex.nombre,
      nac: ex.nac,
      celular: ex.celular || '',
      rolTxt: ex.rol || 'Miembro JUMA',
      foto: '',
      isExtra: true,
      extraIdx: idx
    });
  });

  return out;
}

/* ===================== Generador de Flyer / Imagen de Felicitación para Grupos ===================== */
const JUMA_WA_GROUP_URL = 'https://chat.whatsapp.com/CJWfGx4mZzJCK3O9jJJRyQ?s=cl&p=a&mlu=4&ilr=4&iam=0';
const JUMA_WA_CHANNEL_URL = 'https://whatsapp.com/channel/0029VaqbBJ972WTqOwLsLL0u';

/* Coordinadores y asesores (solo interfaz). Antes también se daba por un nombre parecido a «Gabriel Gómez»
   o por banderas del navegador: ya no; el permiso viene de roles/{correo} y lo vuelve a comprobar el servidor. */
function isCoordinatorOrAdvisor() { return coordUI(); }
const isCoordinatorOrMaster = isCoordinatorOrAdvisor;

function getCelebrantRecord(targetRecOrId) {
  if (targetRecOrId && typeof targetRecOrId === 'object') return targetRecOrId;
  const id = String(targetRecOrId || '').trim();
  const cumples = getCumpleanosList(dr && Object.keys(dr).length ? dr : cfg);
  const matchCum = cumples.find((c) => c.id === id || ('extra-' + c.extraIdx) === id || String(c.extraIdx) === id);
  if (matchCum) return matchCum;
  const matchIns = allInscripciones.find((x) => x && (x.id === id || x.uid === id));
  if (matchIns) return matchIns;
  return myProfile || null;
}

async function renderBirthdayFlyerCanvas(rec, customMessage) {
  const c = getCelebrantRecord(rec);
  const d = (c && c.datos) || {};
  const nombre = String((c && c.nombre) || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Misionero(a) JUMA').toUpperCase();
  const primerNombre = nombre.split(/\s+/)[0] || 'Misionero';
  const gender = detectGender(c);
  const isFem = gender === 'Mujer';
  const fotoUrl = (c && c.foto) || d.foto || '';

  const W = 1080;
  const H = 1440;
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d');
  const cx = W / 2;

  /* ── 1. Fondo degradado azul profundo misionero ── */
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#040C24');
  bgGrad.addColorStop(0.25, '#081D4E');
  bgGrad.addColorStop(0.55, '#0B2768');
  bgGrad.addColorStop(0.85, '#06173E');
  bgGrad.addColorStop(1, '#030818');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  /* ── 2. Aureola central cálida y festiva ── */
  const glow = ctx.createRadialGradient(cx, 575, 80, cx, 575, 680);
  glow.addColorStop(0, 'rgba(245, 197, 24, 0.16)');
  glow.addColorStop(0.45, 'rgba(142, 201, 255, 0.08)');
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  /* ── 3. Patrón de líneas diagonales estéticas ── */
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = '#8EC9FF';
  ctx.lineWidth = 1.2;
  for (let i = -W; i < W * 2; i += 70) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + H * 0.65, H);
    ctx.stroke();
  }
  ctx.restore();

  /* ── 4. Destellos estelares ── */
  const sparkles = [
    { x: 90, y: 120, s: 10, a: 0.8 }, { x: 990, y: 130, s: 9, a: 0.75 },
    { x: 60, y: 350, s: 12, a: 0.85 }, { x: 1020, y: 360, s: 11, a: 0.8 },
    { x: 140, y: 560, s: 7, a: 0.6 }, { x: 940, y: 570, s: 8, a: 0.65 },
    { x: 95, y: 780, s: 9, a: 0.7 }, { x: 985, y: 790, s: 10, a: 0.75 },
    { x: 180, y: 980, s: 6, a: 0.5 }, { x: 900, y: 990, s: 7, a: 0.55 },
    { x: 110, y: 1200, s: 8, a: 0.65 }, { x: 970, y: 1210, s: 9, a: 0.7 },
    { x: 260, y: 220, s: 6, a: 0.5 }, { x: 820, y: 230, s: 6, a: 0.5 }
  ];
  sparkles.forEach((sp) => {
    ctx.save();
    ctx.translate(sp.x, sp.y);
    ctx.fillStyle = `rgba(255, 255, 255, ${sp.a})`;
    ctx.beginPath();
    for (let j = 0; j < 4; j++) {
      ctx.rotate(Math.PI / 2);
      ctx.moveTo(0, 0);
      ctx.lineTo(sp.s * 0.22, sp.s * 0.85);
      ctx.lineTo(0, sp.s * 2.2);
      ctx.lineTo(-sp.s * 0.22, sp.s * 0.85);
      ctx.closePath();
    }
    ctx.fill();
    ctx.restore();
  });

  /* ── 5. Confeti multicolor disperso ── */
  const confetti = [
    { x: 200, y: 270, w: 13, h: 6, r: 25, c: '#F5C518' }, { x: 880, y: 260, w: 12, h: 5, r: -35, c: '#8EC9FF' },
    { x: 150, y: 460, w: 14, h: 6, r: 45, c: '#FFFFFF' }, { x: 930, y: 470, w: 13, h: 6, r: -20, c: '#F5C518' },
    { x: 220, y: 710, w: 11, h: 5, r: 15, c: '#8EC9FF' }, { x: 860, y: 720, w: 13, h: 6, r: -50, c: '#FFFFFF' },
    { x: 170, y: 910, w: 12, h: 5, r: 55, c: '#F5C518' }, { x: 910, y: 920, w: 12, h: 6, r: -30, c: '#8EC9FF' },
    { x: 240, y: 1140, w: 11, h: 5, r: 20, c: '#FFFFFF' }, { x: 840, y: 1150, w: 12, h: 5, r: -45, c: '#F5C518' }
  ];
  confetti.forEach((cf) => {
    ctx.save();
    ctx.translate(cf.x, cf.y);
    ctx.rotate((cf.r * Math.PI) / 180);
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = cf.c;
    ctx.fillRect(-cf.w / 2, -cf.h / 2, cf.w, cf.h);
    ctx.restore();
  });

  /* ── 6. Cinta superior de los 5 colores Consolata ── */
  const ribbonCols = ['#009B48', '#F5C518', '#0057B7', '#D81E05', '#FFFFFF'];
  const segW = W / ribbonCols.length;
  ribbonCols.forEach((col, idx) => {
    ctx.fillStyle = col;
    ctx.fillRect(idx * segW, 0, segW + 1, 14);
  });

  /* ── 7. Logo oficial JUMA + Allamano (el que envió el usuario) ── */
  let logoImg = null;
  try {
    logoImg = await loadImageSafe('img/logo-juma-allamano.png');
  } catch (e) {}
  if (!logoImg) {
    try { logoImg = await loadImageSafe('img/logo.png'); } catch (e) {}
  }
  if (logoImg) {
    const origW = logoImg.naturalWidth || logoImg.width || 1024;
    const origH = logoImg.naturalHeight || logoImg.height || 785;
    const targetH = 155;
    const targetW = targetH * (origW / origH);
    const logoX = cx - targetW / 2;
    const logoY = 32;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 4;
    ctx.drawImage(logoImg, logoX, logoY, targetW, targetH);
    ctx.restore();
  }

  /* ── 8. Caligrafía "te desea un" con filigranas laterales ── */
  ctx.save();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'italic 34px Georgia, "Times New Roman", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  try { ctx.letterSpacing = '2px'; } catch (e) {}
  const calliY = 222;
  ctx.fillText('te desea un', cx, calliY);

  const txtW = ctx.measureText('te desea un').width;
  ctx.strokeStyle = 'rgba(245, 197, 24, 0.65)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx - txtW / 2 - 20, calliY);
  ctx.lineTo(cx - txtW / 2 - 120, calliY);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx - txtW / 2 - 120, calliY, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = '#F5C518';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx + txtW / 2 + 20, calliY);
  ctx.lineTo(cx + txtW / 2 + 120, calliY);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx + txtW / 2 + 120, calliY, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  /* ── 9. Gran titular "¡FELIZ CUMPLEAÑOS!" dinámico y festivo ── */
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const titleY = 286;

  /* Resplandor áureo */
  ctx.shadowColor = 'rgba(245, 197, 24, 0.75)';
  ctx.shadowBlur = 36;

  /* Degradado metálico dorado brillante */
  const titleGrad = ctx.createLinearGradient(cx - 360, titleY, cx + 360, titleY);
  titleGrad.addColorStop(0, '#FFECA0');
  titleGrad.addColorStop(0.35, '#FFFFFF');
  titleGrad.addColorStop(0.65, '#F5C518');
  titleGrad.addColorStop(1, '#FFECA0');
  ctx.fillStyle = titleGrad;
  ctx.font = '900 66px "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  try { ctx.letterSpacing = '4px'; } catch (e) {}
  ctx.fillText('¡FELIZ CUMPLEAÑOS!', cx, titleY);
  ctx.restore();

  /* Emojis festivos alrededor del titular */
  ctx.font = '36px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🎂', 80, titleY);
  ctx.fillText('✨', 140, titleY - 18);
  ctx.fillText('🎉', 1000, titleY);
  ctx.fillText('🎈', 940, titleY - 18);

  /* ── 10. Marco circular concéntrico con la foto ── */
  const cy = 575;
  const rPhoto = 210;

  /* Anillo exterior sutil */
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, rPhoto + 32, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(142, 201, 255, 0.25)';
  ctx.lineWidth = 2;
  ctx.stroke();

  /* Anillo blanco brillante */
  ctx.beginPath();
  ctx.arc(cx, cy, rPhoto + 18, 0, Math.PI * 2);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4.5;
  ctx.shadowColor = 'rgba(142, 201, 255, 0.6)';
  ctx.shadowBlur = 20;
  ctx.stroke();
  ctx.restore();

  /* Espacio azul marino protector */
  ctx.beginPath();
  ctx.arc(cx, cy, rPhoto + 7, 0, Math.PI * 2);
  ctx.strokeStyle = '#061536';
  ctx.lineWidth = 11;
  ctx.stroke();

  /* Borde interior dorado */
  ctx.beginPath();
  ctx.arc(cx, cy, rPhoto, 0, Math.PI * 2);
  ctx.strokeStyle = '#F5C518';
  ctx.lineWidth = 5;
  ctx.stroke();

  /* Recorte y dibujo de la foto */
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, rPhoto - 3, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  let photoImg = null;
  if (fotoUrl) { photoImg = await loadImageSafe(fotoUrl); }
  if (photoImg) {
    const sw = photoImg.naturalWidth || photoImg.width;
    const sh = photoImg.naturalHeight || photoImg.height;
    const minDim = Math.min(sw, sh);
    const sx = (sw - minDim) / 2;
    const sy = (sh - minDim) / 2;
    ctx.drawImage(photoImg, sx, sy, minDim, minDim, cx - rPhoto, cy - rPhoto, rPhoto * 2, rPhoto * 2);
  } else {
    const avGrad = ctx.createLinearGradient(cx - rPhoto, cy - rPhoto, cx + rPhoto, cy + rPhoto);
    avGrad.addColorStop(0, '#103D96');
    avGrad.addColorStop(1, '#061C48');
    ctx.fillStyle = avGrad;
    ctx.fillRect(cx - rPhoto, cy - rPhoto, rPhoto * 2, rPhoto * 2);
    ctx.fillStyle = '#F5C518';
    ctx.font = '900 130px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(primerNombre.charAt(0).toUpperCase(), cx, cy);
  }
  ctx.restore();

  /* Corona dorada descansando sobre el aro superior */
  ctx.font = '52px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('👑', cx, cy - rPhoto - 4);

  /* ── 11. NOMBRE DEL CUMPLEAÑERO EN FORMATO GIGANTE ── */
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const nameY = 868;

  let nameSize = 72;
  ctx.font = `900 ${nameSize}px "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  while (ctx.measureText(nombre).width > W - 120 && nameSize > 32) {
    nameSize -= 2;
    ctx.font = `900 ${nameSize}px "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  }
  try { ctx.letterSpacing = '3px'; } catch (e) {}

  ctx.shadowColor = 'rgba(245, 197, 24, 0.65)';
  ctx.shadowBlur = 30;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(nombre, cx, nameY);
  ctx.restore();

  /* Divisor dorado estilizado con diamante */
  const lineY = 912;
  ctx.save();
  const nameW = ctx.measureText(nombre).width;
  const barLen = Math.min(Math.max(nameW * 0.45, 180), 260);

  ctx.strokeStyle = '#F5C518';
  ctx.lineWidth = 2.5;
  ctx.globalAlpha = 0.8;
  ctx.beginPath();
  ctx.moveTo(cx - barLen, lineY);
  ctx.lineTo(cx - 14, lineY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx + 14, lineY);
  ctx.lineTo(cx + barLen, lineY);
  ctx.stroke();

  /* Diamante central */
  ctx.fillStyle = '#F5C518';
  ctx.beginPath();
  ctx.moveTo(cx, lineY - 6);
  ctx.lineTo(cx + 6, lineY);
  ctx.lineTo(cx, lineY + 6);
  ctx.lineTo(cx - 6, lineY);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  /* ── 12. MENSAJE MISIONERO FRATERNO (directo sobre el fondo, sin cuadro) ── */
  const msgDefaultGender = isFem
    ? `Hoy celebramos con alegría la vida de nuestra querida hermana misionera.\n¡Que Dios y la Virgen Consolata guíen siempre tus pasos,\nllenando tu corazón de bendiciones, amor y santidad!`
    : `Hoy celebramos con alegría la vida de nuestro querido hermano misionero.\n¡Que Dios y la Virgen Consolata guíen siempre tus pasos,\nllenando tu corazón de bendiciones, amor y santidad!`
  ;

  let msgLines = [];
  if (customMessage && customMessage.trim() && customMessage !== DEFAULT_CUMPLE_MSG) {
    const raw = customMessage.replace(/\{nombre\}/gi, primerNombre).split('\n').filter(Boolean);
    msgLines = raw.slice(0, 3);
  } else {
    msgLines = msgDefaultGender.split('\n');
  }

  ctx.save();
  ctx.fillStyle = '#E8F1FC';
  ctx.font = '500 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let mY = 980;
  msgLines.forEach((line) => {
    ctx.fillText(line.trim(), cx, mY);
    mY += 46;
  });
  ctx.restore();

  /* Emojis fraternos */
  ctx.font = '36px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('💙   ✨   🙏   🎂', cx, mY + 24);

  /* ── 13. PIE DE PÁGINA INSTITUCIONAL ── */
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = '#F5C518';
  ctx.font = '800 21px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  try { ctx.letterSpacing = '4px'; } catch (e) {}
  ctx.fillText('JUVENTUD MISIONERA ALLAMANIANA • DUACA', cx, 1285);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.68)';
  ctx.font = '600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  try { ctx.letterSpacing = '3px'; } catch (e) {}
  ctx.fillText('MISIONEROS DE LA CONSOLATA • VENEZUELA', cx, 1324);
  ctx.restore();

  /* Divisor fino encima del listón */
  ctx.save();
  ctx.strokeStyle = 'rgba(142, 201, 255, 0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(220, 1375);
  ctx.lineTo(W - 220, 1375);
  ctx.stroke();
  ctx.restore();

  /* ── 14. Cinta inferior 5 colores Consolata ── */
  ribbonCols.forEach((col, idx) => {
    ctx.fillStyle = col;
    ctx.fillRect(idx * segW, H - 16, segW + 1, 16);
  });

  return cv;
}

async function generateBirthdayFlyerData(rec) {
  const c = getCelebrantRecord(rec);
  const d = (c && c.datos) || {};
  const nombre = (c && c.nombre) || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Misionero JUMA';
  const slug = nombre.replace(/[^A-Z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'Misionero';
  const gender = detectGender(c);
  const isFem = gender === 'Mujer';
  const hermano = isFem ? 'hermana' : 'hermano';
  const nuestro = isFem ? 'nuestra querida' : 'nuestro querido';

  const cv = await renderBirthdayFlyerCanvas(c);
  const dataUrl = cv.toDataURL('image/png');

  let file = null;
  try {
    const blob = await new Promise((res) => cv.toBlob(res, 'image/png'));
    if (blob) {
      file = new File([blob], `Felicitacion-JUMA-${slug}.png`, { type: 'image/png' });
    }
  } catch (e) {}

  const shareText = `🎉🎂 *¡FELIZ CUMPLEAÑOS!* 🎂🎉\n\nHoy toda la familia misionera de JUMA Duaca celebra con inmensa alegría la vida de ${nuestro} ${hermano} *${nombre}*.\n\nQue Dios y Nuestra Madre la Virgen Consolata ${isFem ? 'la' : 'lo'} bendigan siempre con salud, alegría y santidad. ¡${isFem ? 'Felicítala' : 'Felicítalo'} con mucho amor! 💙✨🙏`;

  return { cv, dataUrl, file, shareText, nombre, slug };
}

function showBirthdayFlyerShareModal(rec, dataUrl, shareText, slug) {
  const c = getCelebrantRecord(rec);
  const d = (c && c.datos) || {};
  const nombre = (c && c.nombre) || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Misionero JUMA';

  const modal = document.createElement('div');
  modal.className = 'overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.style.zIndex = '999999';

  modal.innerHTML = `
    <div class="sheet" style="max-width:480px;background:#061536;color:#fff;border:2.5px solid #F5C518;border-radius:24px;box-shadow:0 24px 70px rgba(0,0,0,0.85)">
      <div style="padding:16px 20px;border-bottom:1.5px solid rgba(245,197,24,0.3);display:flex;align-items:center;justify-content:space-between">
        <div>
          <b style="font-size:17px;color:#F5C518;display:block">🎉 Felicitación Oficial</b>
          <span style="font-size:12.5px;color:#DCE7F8">Cumpleaños de ${esc(nombre)}</span>
        </div>
        <button type="button" class="jchat-x" data-close-flyer-modal aria-label="Cerrar" style="color:#fff;border-color:rgba(255,255,255,0.4)">✕</button>
      </div>

      <div style="padding:20px;text-align:center;overflow-y:auto;max-height:75vh">
        <div style="border-radius:16px;overflow:hidden;box-shadow:0 12px 36px rgba(0,0,0,0.6);border:2px solid #F5C518;margin-bottom:18px;max-width:320px;margin-left:auto;margin-right:auto">
          <img src="${dataUrl}" alt="Flyer de cumpleaños de ${esc(nombre)}" style="width:100%;height:auto;display:block">
        </div>

        <p style="font-size:13.5px;color:#DCE7F8;line-height:1.5;margin:0 0 16px">
          ¡Imagen generada con éxito! Descárgala y compártela donde quieras. El texto de felicitación se copió automáticamente.
        </p>

        <div style="display:flex;flex-direction:column;gap:10px">
          <button type="button" class="btn btn-sm" data-action-download-flyer style="min-height:46px;font-size:14px;font-weight:800;background:#F5C518;color:#061536;border:0;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 6px 18px rgba(245,197,24,0.4);border-radius:14px;cursor:pointer">
            📥 Descargar Imagen HD (PNG)
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeFn = () => modal.remove();
  modal.querySelectorAll('[data-close-flyer-modal]').forEach((b) => b.addEventListener('click', closeFn));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeFn(); });

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).catch(() => {});
    }
  } catch (e) {}

  const dlBtn = modal.querySelector('[data-action-download-flyer]');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `Felicitacion-JUMA-${slug}.png`;
      a.click();
    });
  }
}

async function shareBirthdayFlyer(targetRecOrId, btnEl) {
  if (!isCoordinatorOrAdvisor()) {
    alert('Esta función para compartir en el grupo está reservada exclusivamente para Coordinadores y Asesores de JUMA Duaca.');
    return;
  }
  const rec = getCelebrantRecord(targetRecOrId);
  const origHtml = btnEl ? btnEl.innerHTML : '';
  if (btnEl) btnEl.innerHTML = '⏳ Generando imagen…';

  try {
    const { file, dataUrl, shareText, nombre, slug } = await generateBirthdayFlyerData(rec);
    if (btnEl) btnEl.innerHTML = origHtml;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareText).catch(() => {});
      }
    } catch (e) {}

    if (navigator.share && navigator.canShare && file) {
      try {
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `¡Feliz Cumpleaños ${nombre}! · JUMA Duaca`,
            text: shareText
          });
          return;
        }
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }

    showBirthdayFlyerShareModal(rec, dataUrl, shareText, slug);
  } catch (e) {
    console.error('Error al generar flyer', e);
    if (btnEl) btnEl.innerHTML = origHtml;
  }
}

/* ===================== Animación, Audio en bucle y Avisos de Cumpleaños ===================== */
const DEFAULT_CUMPLE_MSG = '🎉🎂 ¡Feliz cumpleaños, {nombre}!\n\nHoy toda nuestra familia misionera de JUMA Duaca se llena de inmensa alegría y da infinitas gracias a Dios por el hermoso regalo de tu vida. Celebramos tu entrega, tu entusiasmo y ese corazón generoso que siempre busca llevar amor y esperanza a los demás.\n\nQue Nuestra Madre, la Virgen Consolata, te cobije siempre bajo su manto maternal de ternura y protección, y que San José Allamano guíe cada uno de tus pasos, derramando sobre ti abundantes bendiciones, salud, fortaleza y santidad.\n\n¡Gracias por ser luz, testimonio vivo de fe y parte tan especial de nuestro caminar! Te enviamos un abrazo fraterno inmenso con todo el amor de tu familia de JUMA Duaca. 💙✨🔥🙏';

(function () {
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 2500));
  idle(() => { try { if (typeof isUserBirthdayToday === 'function') preloadBirthdayAudio(); } catch (e) {} }, { timeout: 6000 });
})();

function getRegisteredUserRecord() {
  if (myProfile && (myProfile.id || myProfile.uid || myProfile.correo || (myProfile.datos && (myProfile.datos.correo || myProfile.datos.nombres)))) {
    return myProfile;
  }
  if (currentUser && currentUser.email) {
    const emTarget = currentUser.email.toLowerCase();
    const match = allInscripciones.find((x) => {
      const em = (x.correo || (x.datos && x.datos.correo) || '').trim().toLowerCase();
      return em && em === emTarget;
    });
    if (match) return match;
  }
  return null;
}

function isUserBirthdayToday(rec) {
  if (!rec) return false;
  const d = rec.datos || {};
  const nac = String(d.nac || rec.nac || '').trim();
  const m = nac.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return false;
  const now = new Date();
  const mes = parseInt(m[2], 10) - 1;
  const dia = parseInt(m[3], 10);
  return now.getMonth() === mes && now.getDate() === dia;
}

let bdayAudio = null;
let bdayAudioPlaying = false;
let bdayCtx = null, bdayBuf = null, bdaySrc = null, bdayLoading = null, bdayWanted = false;
const BDAY_LOOP_END = 14;

/* Precarga y decodifica el audio una sola vez (en reposo), para que suene al instante y sin trabarse */
function preloadBirthdayAudio() {
  if (bdayLoading) return bdayLoading;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return (bdayLoading = Promise.resolve(null));
  bdayLoading = fetch('audio/cumpleanos.mp3')
    .then((r) => r.arrayBuffer())
    .then((ab) => new Promise((res, rej) => {
      bdayCtx = bdayCtx || new AC();
      bdayCtx.decodeAudioData(ab, res, rej);
    }))
    .then((buf) => { bdayBuf = buf; return buf; })
    .catch(() => null);
  return bdayLoading;
}

function stopBirthdayAudio() {
  bdayWanted = false;
  if (bdaySrc) { try { bdaySrc.stop(); } catch (e) {} bdaySrc = null; }
  if (bdayAudio) { try { bdayAudio.pause(); bdayAudio.currentTime = 0; } catch (e) {} }
  bdayAudioPlaying = false;
  updateBdayCornetaBtn();
}

function startBdayBuffer() {
  if (!bdayBuf || !bdayCtx) return false;
  if (bdaySrc) { try { bdaySrc.stop(); } catch (e) {} }
  const src = bdayCtx.createBufferSource();
  src.buffer = bdayBuf;
  src.loop = true;
  src.loopStart = 0;
  src.loopEnd = Math.min(BDAY_LOOP_END, bdayBuf.duration);
  src.connect(bdayCtx.destination);
  src.start(0);
  bdaySrc = src;
  return true;
}

function playBirthdayAudio() {
  bdayWanted = true;
  const go = () => {
    if (!bdayWanted) return;
    const finish = () => {
      if (!bdayWanted) return;
      if (startBdayBuffer()) {
        bdayAudioPlaying = true;
      } else {
        /* Respaldo con <audio> si WebAudio no está disponible */
        if (!bdayAudio) { bdayAudio = new Audio('audio/cumpleanos.mp3'); bdayAudio.loop = true; }
        bdayAudio.currentTime = 0;
        const p = bdayAudio.play();
        if (p && p.then) p.then(() => { bdayAudioPlaying = true; updateBdayCornetaBtn(); }).catch(() => { bdayAudioPlaying = false; updateBdayCornetaBtn(); });
        return;
      }
      updateBdayCornetaBtn();
    };
    if (bdayCtx && bdayCtx.state === 'suspended') {
      bdayCtx.resume().then(finish).catch(() => {});
    } else finish();
  };
  if (bdayBuf) go(); else preloadBirthdayAudio().then(go);
}

function toggleBirthdayAudio() {
  if (bdayAudioPlaying) stopBirthdayAudio();
  else playBirthdayAudio();
  updateBdayCornetaBtn();
}

function updateBdayCornetaBtn() {
  const btn = $('#cumple-snd-toggle');
  if (!btn) return;
  const isPlaying = !!bdayAudioPlaying;
  btn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
  btn.classList.toggle('is-playing', isPlaying);
}

function generateEmojiRain(container) {
  if (!container) return;
  const emojis = ['🎉', '🎂', '🎈', '✨', '🥳', '🎁', '🎊', '💙', '🍰', '🌟', '🧁', '🙌'];
  const count = 14;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'falling-emoji';
    el.textContent = emojis[i % emojis.length];
    const left = (i * 3.8 + (i % 3) * 1.5) % 96;
    const duration = 3.2 + (i % 5) * 0.7;
    const delay = (i * 0.18) % 3.2;
    const size = 26 + (i % 5) * 4.5;
    el.style.left = left.toFixed(1) + '%';
    el.style.fontSize = size.toFixed(0) + 'px';
    el.style.animationDuration = duration.toFixed(1) + 's';
    el.style.animationDelay = delay.toFixed(2) + 's';
    frag.appendChild(el);
  }
  container.appendChild(frag);
}

function isGabrielGomez(rec) {
  if (!rec) return false;
  const em = String(rec.correo || (rec.datos && rec.datos.correo) || '').trim().toLowerCase();
  if (em === 'gabrielg739@gmail.com') return true;
  const nom = String(rec.nombre || ((rec.datos && ((rec.datos.nombres || '') + ' ' + (rec.datos.apellidos || ''))) || '')).trim().toLowerCase();
  return /gabriel.*g[oó]mez/i.test(nom);
}

function showBirthdayCelebration(rec, isPreview = false) {
  if ($('#juma-cumple-modal')) return;
  const d = (rec && rec.datos) || {};
  const nombre = (rec && rec.nombre) || ((d.nombres || '') + ' ' + (d.apellidos || '')).trim() || 'Gabriel Gómez';
  const primerNombre = nombre.split(/\s+/)[0] || 'Gabriel';
  const foto = (rec && rec.foto) || d.foto || '';

  const tmpl = (dr && dr.cumpleanosMensaje) || (cfg && cfg.cumpleanosMensaje) || DEFAULT_CUMPLE_MSG;
  const msgFinal = tmpl.replace(/\{nombre\}/gi, primerNombre);

  const modal = document.createElement('div');
  modal.id = 'juma-cumple-modal';
  modal.className = 'cumple-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Celebración de Cumpleaños');

  modal.innerHTML = `
    <div class="cumple-box">
      <div class="cumple-bg-wrap" aria-hidden="true"></div>

      <!-- Botón de Corneta para silenciar o activar música (animado al sonar) -->
      <button type="button" class="cumple-snd-btn is-playing" id="cumple-snd-toggle" data-toggle-sound aria-label="Música de cumpleaños" aria-pressed="true" title="Toca para silenciar o activar música">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path class="spk" d="M3 9.5v5h4l5 4.5v-14L7 9.5H3z"/>
          <path class="w" d="M15.5 8.8a4.5 4.5 0 0 1 0 6.4M18.3 6a8.5 8.5 0 0 1 0 12"/>
          <path class="x" d="M16 9.5l5 5M21 9.5l-5 5"/>
        </svg>
      </button>

      <!-- Botón X para cerrar celebración -->
      <button type="button" class="cumple-close-btn" data-close-cumple aria-label="Cerrar celebración">✕</button>

      <!-- Contenido en primer plano sobre el fondo azul -->
      <div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;width:100%">
        ${isPreview ? '<div style="display:inline-block;padding:4px 14px;border-radius:99px;background:#F5C518;color:#061536;font-size:12px;font-weight:900;letter-spacing:.04em;text-transform:uppercase;margin-bottom:12px">Vista Previa · Cuenta Maestra</div>' : ''}
        <div class="cumple-avatar-wrap">
          <span class="crown" aria-hidden="true">👑</span>
          ${foto ? `<img src="${esc(foto)}" alt="${esc(nombre)}" class="cumple-avatar-img">` : `<div class="cumple-avatar-img" style="background:var(--royal);display:flex;align-items:center;justify-content:center;font-size:46px;font-weight:900;color:#fff">${esc(primerNombre.charAt(0).toUpperCase())}</div>`}
        </div>
        <h2 class="cumple-title">¡Feliz Cumpleaños!</h2>
        <div class="cumple-name">${esc(nombre)} 🎉</div>
        <p class="cumple-msg-direct">${esc(msgFinal)}</p>
        ${isCoordinatorOrMaster() ? `<button type="button" class="btn btn-sm" data-share-flyer-id="${esc((rec && (rec.id || ('extra-' + (rec.extraIdx !== undefined ? rec.extraIdx : '')))) || '')}" style="margin-top:14px;min-height:38px;padding:0 18px;font-size:13.5px;font-weight:800;background:#F5C518;color:#061536;border:0;border-radius:99px;box-shadow:0 6px 18px rgba(245,197,24,0.4);cursor:pointer">🎉 Felicitar en el Grupo de WhatsApp</button>` : ''}
        <button type="button" class="btn btn-sm" data-close-cumple style="margin-top:14px;min-height:38px;padding:0 22px;font-size:13.5px;font-weight:800;background:rgba(255,255,255,0.18);color:#fff;border:1.5px solid rgba(255,255,255,0.4);border-radius:99px;cursor:pointer">✕ Cerrar felicitación</button>
      </div>
    </div>

    <!-- Lluvia de emojis cayendo POR ENCIMA del texto, foto y tarjeta (z-index 20) -->
    <div class="cumple-rain-container" id="cumple-rain" style="pointer-events:none"></div>
  `;

  document.body.appendChild(modal);
  /* El modal aparece al instante; lluvia y sonido se arrancan en el siguiente frame */
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (!modal.isConnected) return;
    generateEmojiRain(modal.querySelector('#cumple-rain'));
    playBirthdayAudio();
  }));

  // Escucha pasiva para teléfonos si el navegador bloquea autoplay sin gesto previo
  const mobileStart = () => {
    if (!bdayAudioPlaying) playBirthdayAudio();
    modal.removeEventListener('pointerdown', mobileStart);
    modal.removeEventListener('touchstart', mobileStart);
  };
  modal.addEventListener('pointerdown', mobileStart, { passive: true });
  modal.addEventListener('touchstart', mobileStart, { passive: true });

  const closeFn = () => {
    stopBirthdayAudio();
    modal.classList.add('is-out');
    document.removeEventListener('keydown', onKeyEsc);
    setTimeout(() => modal.remove(), 200);
  };
  const onKeyEsc = (e) => { if (e.key === 'Escape') closeFn(); };
  document.addEventListener('keydown', onKeyEsc);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.id === 'cumple-rain') closeFn();
  });
  modal.querySelectorAll('[data-close-cumple]').forEach((b) => b.addEventListener('click', closeFn));
  const sndBtn = modal.querySelector('[data-toggle-sound]');
  if (sndBtn) sndBtn.addEventListener('click', toggleBirthdayAudio);
}

function checkBirthdayCelebration(forcePreview = false, previewRecord = null) {
  if (forcePreview) {
    showBirthdayCelebration(previewRecord || (myProfile && myProfile.nombre ? myProfile : { nombre: 'Gabriel Gómez', foto: 'img/new-chicas-capilla.jpg' }), true);
    return;
  }
  // No interrumpir si la puerta obligatoria de foto de perfil está activa
  if (needsMandatoryPhoto(myProfile)) return;

  // Solo para usuarios registrados
  const reg = getRegisteredUserRecord();
  if (!reg) return;

  // La animación a pantalla completa solo se activa para la Cuenta Maestra y el Coordinador Gabriel Gómez cuando es su cumpleaños
  const canCelebrate = isMasterAccount() || isGabrielGomez(reg);
  if (canCelebrate && isUserBirthdayToday(reg)) {
    showBirthdayCelebration(reg, false);
    return;
  }
}

function getTabs() {
  const trueMaster = isMasterAccount();
  const coord = coordUI();
  const editorLocal = isEditor();
  const hoyCumpleCount = coord ? getCumpleanosList().filter((c) => c.esHoy).length : 0;
  const tabs = [];
  /* Datos de personas: solo coordinadores/asesores/cuenta maestra con sesión (el servidor lo exige) */
  if (coord) {
    tabs.push(
      ['ins', ic('users') + (trueMaster ? `Inscritos y Roles (${allInscripciones.length})` : `Inscritos (${allInscripciones.length})`)],
      ['cum', ic('cake') + `Cumpleaños${hoyCumpleCount ? ' (' + hoyCumpleCount + ' hoy 🎉)' : ''}`],
      ['qr', ic('camera') + 'Asistencia QR']
    );
  }
  if (trueMaster) tabs.push(['rol', ic('star') + `Coordinadores (${rolesLista.length})`]);
  tabs.push(['enc', ic('calendar') + 'Domingos y Días'], ['dat', ic('clock') + 'Hora, lugar y WhatsApp'], ['act', ic('calcheck') + 'Actividades'], ['for', ic('cap') + 'Formación'], ['nov', ic('news') + 'Noticias']);
  if (trueMaster || editorLocal) tabs.push(['fot', ic('image') + 'Fotos']);
  tabs.push(['tes', ic('comment') + 'Testimonios']);
  if (coord) tabs.push(['mur', ic('megaphone') + `Muro (${allMensajes.filter((m) => !m.aprobado).length})`]);
  if (trueMaster || editorLocal) tabs.push(['apk', ic('phone') + 'App sin URL'], ['pub', ic('send') + 'GitHub']);
  return tabs;
}
function editorBody() {
  setters.clear(); uid = 0;
  const trueMaster = isMasterAccount();
  const permitidas = getTabs().map((t) => t[0]);
  if (!permitidas.includes(tab)) tab = permitidas[0];
  if (tab !== 'qr' && qrCameraOn) stopQrCamera();

  if (tab === 'ins') {
    const q = insQuery.trim().toLowerCase();
    const list = allInscripciones.filter((x) => {
      if (insRoleFilter !== 'todos' && rolEtiqueta(x) !== insRoleFilter) return false;
      return !q || JSON.stringify(x).toLowerCase().includes(q);
    });
    const totalCoord = allInscripciones.filter((x) => rolEtiqueta(x) === 'coordinador').length;
    const totalAses = allInscripciones.filter((x) => rolEtiqueta(x) === 'asesor').length;
    const totalPart = allInscripciones.filter((x) => rolEtiqueta(x) === 'participante').length;
    const menores = allInscripciones.filter((x) => x.esMenor || esMenor(x.datos || {})).length;
    const conSalud = allInscripciones.filter((x) => (x.datos && (x.datos.enf === 'Sí' || x.datos.med === 'Sí' || x.datos.alMed || x.datos.alAli || x.datos.alOtros))).length;
    const totalDl = totalAppDownloads();
    const sinReg = Math.max(0, totalDl - allInscripciones.length);
    const histDl = Array.isArray(appStats.historialDescargas) ? appStats.historialDescargas : [];
    const proxCumples = getCumpleanosList().filter((c) => c.diasFaltan <= 7).sort((a, b) => a.diasFaltan - b.diasFaltan);
    const cumpleBanner = proxCumples.length ? `<div style="margin-bottom:16px;padding:14px 18px;border-radius:14px;background:linear-gradient(90deg,#FFF8E1 0%,#E8F1FF 100%);border:1.5px solid #F5C518;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
      <div>
        <b style="font-size:15px;color:#5C4300">🎂 ${proxCumples.some((c) => c.esHoy) ? '¡Hoy estamos de cumpleaños en JUMA!' : 'Cumpleaños de esta semana en JUMA:'}</b>
        <div style="font-size:13.5px;color:var(--navy);margin-top:3px">${proxCumples.map((c) => `<b>${esc(c.nombre)}</b> (${c.esHoy ? '🎉 ¡HOY!' : (c.esManana ? 'Mañana ' : '') + c.dia + ' de ' + c.mesNombre})`).join(' · ')}</div>
      </div>
      <button type="button" class="btn btn-blue btn-sm" data-tab="cum">${ic('cake')}Abrir Calendario de Cumpleaños</button>
    </div>` : '';
    return `<p class="ehint">${trueMaster ? '<b>Cuenta Maestra:</b> Inicialmente todos los registrados entran como <b>Participantes</b>. Únicamente desde esta Cuenta Maestra puedes decidir y modificar quién es <b>Coordinador</b>, <b>Asesor</b> o <b>Participante</b>, además de ver las asistencias de los últimos 6 meses.' : '<b>Vista de Coordinador:</b> Aquí puedes ver el número de participantes, sus planillas, su código QR y las formaciones/actividades a las que asistieron en los últimos 6 meses. <i>(Solo la Cuenta Maestra puede cambiar roles o editar la galería de fotos)</i>.'}</p>
      ${cumpleBanner}
      <div class="stat-grid">
        <div class="stat-box" style="background:#E8F1FF;border-color:var(--royal)"><b id="stat-apk-dl-num" style="color:var(--royal)">📲 ${totalDl}</b><span style="color:var(--navy);font-weight:800">Descargaron la App</span></div>
        <div class="stat-box" style="background:#E4F5EA;border-color:#17824A"><b style="color:#14532D">✅ ${allInscripciones.length}</b><span style="color:#14532D;font-weight:800">App registrada</span></div>
        <div class="stat-box" style="background:#FFF8E1;border-color:#F5C518"><b style="color:#7A5200">⏳ ${sinReg}</b><span style="color:#7A5200;font-weight:800">Sin registrarse aún</span></div>
        <div class="stat-box"><b>${totalCoord}</b><span>Coordinadores</span></div>
        <div class="stat-box"><b>${totalAses}</b><span>Asesores</span></div>
        <div class="stat-box"><b>${totalPart}</b><span>Participantes</span></div>
        <div class="stat-box"><b>${menores}</b><span>Menores de edad</span></div>
        <div class="stat-box"><b>${conSalud}</b><span>Con alerta médica</span></div>
      </div>
      <details open style="margin-bottom:16px;padding:14px 18px;border-radius:14px;background:#fff;border:1.5px solid var(--royal)">
        <summary style="cursor:pointer;font-size:15px;font-weight:800;color:var(--navy)">📲 Ver quiénes descargaron y registraron la App hasta ahora (${totalDl} en total)</summary>
        <div style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px">
          <div style="padding:12px 14px;border-radius:12px;background:#F2FAF5;border:1px solid #B7E4C7">
            <b style="display:block;font-size:14px;color:#14532D;margin-bottom:8px">✅ Ya descargaron y se registraron con nombre (${allInscripciones.length}):</b>
            <ol style="margin:0;padding-left:20px;font-size:13.5px;line-height:1.65;color:var(--ink)">
              ${allInscripciones.map((u) => {
                const uNom = u.nombre || (((u.datos && u.datos.nombres) || '') + ' ' + ((u.datos && u.datos.apellidos) || '')).trim() || 'Sin nombre';
                const uCel = u.celular || (u.datos && u.datos.celular) || '';
                return `<li><b>${esc(uNom)}</b> <span style="color:var(--muted);font-size:12.5px">(${esc(roleLabel(rolEtiqueta(u)))}${uCel ? ' · ' + esc(uCel) : ''})</span></li>`;
              }).join('')}
            </ol>
          </div>
          <div style="padding:12px 14px;border-radius:12px;background:#FFFDF5;border:1px solid #F5C518">
            <b style="display:block;font-size:14px;color:#7A5200;margin-bottom:6px">⏳ ¿Por qué hay descargas sin nombre todavía? (${sinReg})</b>
            <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#5C4300">Cuando alguien solo descarga el archivo <code>JUMA.apk</code> pero aún no abre la App ni llena su planilla, el teléfono no revela su nombre hasta que se registre en <b>«Quiero ser parte»</b>.</p>
            ${histDl.length ? `<ul style="margin:0;padding-left:18px;font-size:12.5px;color:#5C4300;line-height:1.55">${histDl.slice(0, 8).map((h) => `<li>📲 ${esc(h.dispositivo || 'Teléfono Android')} · ${esc(h.fecha ? fmtF(h.fecha) : 'Reciente')}</li>`).join('')}</ul>` : `<p style="margin:0;font-size:12.5px;color:#14532D;font-weight:700">✔ Todos los que han usado la App hasta ahora ya aparecen registrados en la lista de la izquierda.</p>`}
          </div>
        </div>
      </details>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px">
        ${[['todos', 'Todos (' + allInscripciones.length + ')'], ['coordinador', '★ Coordinadores (' + totalCoord + ')'], ['asesor', '◆ Asesores (' + totalAses + ')'], ['participante', '● Participantes (' + totalPart + ')']].map(([k, lbl]) => `<button type="button" class="chip" data-filter-rol="${k}" aria-pressed="${insRoleFilter === k}" style="min-height:38px;padding:0 14px;font-size:13.5px">${lbl}</button>`).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px;align-items:center">
        <input type="search" id="ins-search" value="${esc(insQuery)}" placeholder="Buscar por nombre, celular, correo, rol o parroquia…" style="flex:1 1 240px;min-height:46px;padding:0 14px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:15px">
        <button type="button" class="btn btn-blue btn-sm" data-go-qr-tab>${ic('camera')}Escanear QR de asistencia</button>
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
        const rol = rolEtiqueta(x);
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
                  <span style="display:inline-block;padding:2px 9px;border-radius:99px;font-size:12px;font-weight:800;background:#E8F1FF;color:var(--royal)">📲 App registrada</span>
                </div>
                <div style="font-size:13.5px;color:var(--muted)">${esc(x.correo || d.correo || 'Sin correo')} · ${esc(x.celular || d.celular || 'Sin celular')}</div>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${waJoven.length >= 10 ? `<a class="btn btn-soft btn-sm" target="_blank" rel="noopener" href="https://wa.me/${waJoven}">WhatsApp</a>` : ''}
              <button type="button" class="btn btn-soft btn-sm" data-open-dm="${esc(x.id || x.uid)}">${ic('msg')}Mensaje App</button>
              <button type="button" class="btn btn-blue btn-sm" data-dl-carnet-png="${esc(x.id || x.uid)}">${ic('download')}Carnet PNG</button>
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
            ${!foto ? `<span style="background:#FCE8E7;color:#8A1C1C">⚠️ Sin foto de carnet aún</span>` : `<span style="background:#E4F5EA;color:#14532D">📷 Foto lista</span>`}
            ${(x.edad || edadDe(d)) ? `<span>${esc(x.edad || edadDe(d))} años</span>` : ''}
            ${(x.esMenor || esMenor(d)) ? `<span style="background:#FFF3CD;color:#7A5200">Menor · Rep: ${esc(d.repNombre || 'Pendiente')}</span>` : ''}
            ${d.sangre ? `<span>Sangre: ${esc(d.sangre)}</span>` : ''}
            ${d.parroquia ? `<span>${esc(d.parroquia)}</span>` : ''}
            ${(d.enf === 'Sí' || d.alMed || d.alAli) ? `<span style="background:#FCE8E7;color:#8A1C1C">⚕ Atención médica</span>` : ''}
          </div>
          <details style="margin-top:10px"><summary style="cursor:pointer;font-size:14px;font-weight:700;color:var(--royal)">🪪 Ver Carnet Misionero y Mockup (${esc(detectGender(x))}) de ${esc(nom)}</summary>
            <div style="margin-top:10px">
              ${carnetInteractiveSectionHtml(x, 'admin')}
            </div>
          </details>
          <details style="margin-top:8px"><summary style="cursor:pointer;font-size:14px;font-weight:700;color:var(--royal)">📅 Ver formaciones y actividades asistidas en los últimos 6 meses (${asis6.length}) y Código QR</summary>
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
          ${!qrCameraOn ? `<button type="button" class="btn btn-blue" data-start-qr-cam>${ic('camera')}Abrir cámara para escanear QR</button>` : `<button type="button" class="btn btn-danger" data-stop-qr-cam>⏹ Detener cámara</button>`}
          <label class="btn btn-soft" style="cursor:pointer;margin:0">${ic('qr')}<span>Escanear tomando foto del QR</span><input type="file" accept="image/*" capture="environment" id="qr-file-in" style="display:none"></label>
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
              <div><b style="font-size:15px;color:var(--ink)">${esc(nom)}</b> <span style="font-size:12.5px;color:var(--muted)">(${esc(roleLabel(rolEtiqueta(x)))})</span></div>
            </div>
            <button type="button" class="btn ${present ? 'btn-soft' : 'btn-blue'} btn-sm" data-toggle-asis="${esc(x.id)}" style="min-height:36px;padding:0 12px;font-size:13px">${present ? 'Asistió ✔ (Quitar)' : 'Marcar asistencia'}</button>
          </div>`;
        }).join('')}</div>`}
      </div>`;
  }

  if (tab === 'cum') {
    const cumples = getCumpleanosList(dr);
    const prox30 = cumples.slice().filter((c) => c.diasFaltan <= 30).sort((a, b) => a.diasFaltan - b.diasFaltan);
    const curMonth = new Date().getMonth();
    const monthOrder = [];
    for (let i = 0; i < 12; i++) monthOrder.push((curMonth + i) % 12);
    const monthsToShow = cumpleMesFilter === 'todos' ? monthOrder : [parseInt(cumpleMesFilter, 10)];

    return `<p class="ehint"><b>🎂 Calendario Privado de Cumpleaños (Exclusivo Coordinadores y Cuenta Maestra):</b> Este calendario toma automáticamente las fechas de nacimiento de todas las planillas registradas en la App y te avisa quién cumple años hoy o próximamente para felicitarlo por WhatsApp o agendar recordatorio.</p>
      <div style="padding:18px 20px;border-radius:16px;background:#fff;border:2px solid var(--royal);margin-bottom:18px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:10px">
          <div>
            <b style="font-size:16.5px;color:var(--navy);display:block">🎉 Animación y Mensaje de Felicitación</b>
            <span style="font-size:13px;color:var(--muted)">Canción en bucle (14s), lluvia de emojis y foto de perfil en el día del cumpleaños.</span>
          </div>
          <button type="button" class="btn btn-blue btn-sm" data-test-cumple-anim style="min-height:40px;padding:0 16px;font-size:13px;font-weight:800">
            🎉 Probar animación de cumpleaños (Música + Emojis + Foto)
          </button>
        </div>
        <div class="fld w" style="margin-bottom:10px">
          <label for="cumple-msg-custom">Mensaje de felicitación para el cumpleañero (puedes usar <code>{nombre}</code>):</label>
          <textarea id="cumple-msg-custom" rows="6" style="font-size:14px;line-height:1.5">${esc(dr.cumpleanosMensaje || cfg.cumpleanosMensaje || DEFAULT_CUMPLE_MSG)}</textarea>
        </div>
        <button type="button" class="btn btn-soft btn-sm" data-save-cumple-msg style="min-height:36px;font-size:13px">💾 Guardar texto en borrador</button>
      </div>
      <div style="padding:18px;border-radius:16px;background:linear-gradient(135deg,#061536 0%,#0C2D74 100%);color:#fff;margin-bottom:18px;border:1.5px solid var(--sky)">
        <b style="display:block;font-size:17px;color:var(--sky);margin-bottom:10px">🎉 Cumpleaños de HOY y próximos 30 días (${prox30.length})</b>
        ${!prox30.length ? `<p style="margin:0;font-size:14px;color:#DCE7F8">No hay cumpleaños en los próximos 30 días.</p>` : `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px">
          ${prox30.map((c) => `<div style="padding:12px 14px;border-radius:12px;background:${c.esHoy ? 'rgba(245,197,24,0.22)' : 'rgba(255,255,255,0.1)'};border:1.5px solid ${c.esHoy ? '#F5C518' : 'rgba(142,201,255,0.35)'};display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:44px;height:44px;border-radius:50%;background:var(--royal);border:2px solid #fff;overflow:hidden;display:flex;align-items:center;justify-content:center;flex:0 0 auto">
                ${c.foto ? `<img src="${esc(c.foto)}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<b style="font-size:18px;color:#fff">${esc(c.nombre.charAt(0).toUpperCase())}</b>`}
              </div>
              <div style="min-width:0;flex:1">
                <span style="display:inline-block;padding:2px 8px;border-radius:99px;font-size:11.5px;font-weight:800;background:${c.esHoy ? '#F5C518;color:#061536' : '#8EC9FF;color:#061536'}">${c.esHoy ? '🎉 ¡CUMPLE HOY!' : (c.esManana ? '⏰ ¡MAÑANA!' : 'En ' + c.diasFaltan + ' días')}</span>
                <b style="display:block;font-size:15.5px;color:#fff;margin-top:2px">${esc(c.nombre)}</b>
                <span style="font-size:12.5px;color:#DCE7F8">📅 ${c.dia} de ${esc(c.mesNombre)}${c.edadCumple ? ' · Cumple ' + c.edadCumple + ' años' : ''} · ${esc(c.rolTxt)}</span>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:2px">
              ${c.waUrl ? `<a class="btn btn-white btn-sm" style="min-height:32px;padding:0 10px;font-size:12px" target="_blank" rel="noopener" href="${esc(c.waUrl)}">📲 Felicitar por WhatsApp</a>` : ''}
              ${isCoordinatorOrMaster() ? `<button type="button" class="btn btn-sm" data-share-flyer-id="${esc(c.id || ('extra-' + (c.extraIdx !== undefined ? c.extraIdx : '')))}" style="min-height:32px;padding:0 12px;font-size:12px;font-weight:800;background:#F5C518;color:#061536;border:0;box-shadow:0 3px 10px rgba(245,197,24,0.35);cursor:pointer">🎉 Felicitar en el Grupo</button>` : ''}
              <a class="btn btn-sm" style="min-height:32px;padding:0 10px;font-size:12px;background:rgba(255,255,255,0.15);color:#fff;border:1.5px solid rgba(255,255,255,0.4)" target="_blank" rel="noopener" href="${esc(c.gcalUrl)}">📅 Recordar en Google</a>
            </div>
          </div>`).join('')}
        </div>`}
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;align-items:center">
        <button type="button" class="chip" data-cum-mes="todos" aria-pressed="${cumpleMesFilter === 'todos'}" style="min-height:34px;padding:0 12px;font-size:13px">Todos los meses (${cumples.length})</button>
        ${MESES.map((mNom, mIdx) => {
          const cnt = cumples.filter((c) => c.mesIdx === mIdx).length;
          const cap = mNom.charAt(0).toUpperCase() + mNom.slice(1);
          return `<button type="button" class="chip" data-cum-mes="${mIdx}" aria-pressed="${String(cumpleMesFilter) === String(mIdx)}" style="min-height:34px;padding:0 12px;font-size:12.5px">${esc(cap)}${mIdx === curMonth ? ' ★' : ''} (${cnt})</button>`;
        }).join('')}
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:14px;margin-bottom:22px">
        ${monthsToShow.map((mIdx) => {
          const mList = cumples.filter((c) => c.mesIdx === mIdx).sort((a, b) => a.dia - b.dia);
          const mCap = MESES[mIdx].charAt(0).toUpperCase() + MESES[mIdx].slice(1);
          const isCur = mIdx === curMonth;
          return `<div style="padding:14px 16px;border-radius:14px;background:#fff;border:${isCur ? '2px solid var(--royal)' : '1.5px solid var(--line)'};box-shadow:${isCur ? '0 8px 24px rgba(36,82,200,.12)' : 'none'}">
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;margin-bottom:10px;border-bottom:1.5px solid var(--mist)">
              <b style="font-size:16px;color:${isCur ? 'var(--royal)' : 'var(--navy)'}">📅 ${esc(mCap)} ${isCur ? '<span style="font-size:11.5px;padding:2px 8px;border-radius:99px;background:#E8F1FF;color:var(--royal);margin-left:4px">Mes actual</span>' : ''}</b>
              <span style="font-size:12.5px;font-weight:700;color:var(--muted)">${mList.length} cumple${mList.length === 1 ? '' : 's'}</span>
            </div>
            ${!mList.length ? `<p style="margin:0;font-size:13px;color:var(--muted)">Sin cumpleaños registrados en ${esc(MESES[mIdx])}.</p>` : `<div style="display:flex;flex-direction:column;gap:8px">
              ${mList.map((c) => `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;border-radius:10px;background:${c.esHoy ? '#FFF8E1' : 'var(--paper)'};border:1px solid ${c.esHoy ? '#F5C518' : 'var(--line)'}">
                <div style="display:flex;align-items:center;gap:10px;min-width:0">
                  <div style="width:36px;height:36px;border-radius:10px;background:${c.esHoy ? '#F5C518' : 'var(--navy)'};color:${c.esHoy ? '#061536' : '#fff'};display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:900;font-size:14px;line-height:1;flex:0 0 auto">
                    <span>${c.dia}</span>
                    <small style="font-size:9px;text-transform:uppercase;opacity:.85">${esc(c.mesNombre.slice(0, 3))}</small>
                  </div>
                  <div style="min-width:0">
                    <b style="display:block;font-size:14px;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.nombre)} ${c.esHoy ? '🎉' : ''}</b>
                    <span style="font-size:12px;color:var(--muted)">${esc(c.rolTxt)}${c.edadCumple ? ' · ' + c.edadCumple + ' años' : ''}</span>
                  </div>
                </div>
                <div style="display:flex;gap:4px;flex:0 0 auto">
                  ${c.waUrl ? `<a class="btn btn-soft btn-sm" style="min-height:30px;padding:0 8px;font-size:12px" target="_blank" rel="noopener" href="${esc(c.waUrl)}" title="Felicitar por WhatsApp">📲</a>` : ''}
                  ${isCoordinatorOrMaster() ? `<button type="button" class="btn btn-soft btn-sm" data-share-flyer-id="${esc(c.id || ('extra-' + (c.extraIdx !== undefined ? c.extraIdx : '')))}" style="min-height:30px;padding:0 8px;font-size:12px;color:var(--royal);font-weight:800" title="Felicitar en el Grupo de WhatsApp (con foto)">🎉</button>` : ''}
                  <a class="btn btn-soft btn-sm" style="min-height:30px;padding:0 8px;font-size:12px" target="_blank" rel="noopener" href="${esc(c.gcalUrl)}" title="Guardar en Google Calendar">📅</a>
                  ${c.isExtra ? `<button type="button" class="btn btn-danger btn-sm" data-rm-cumple-extra="${c.extraIdx}" style="min-height:30px;padding:0 8px;font-size:12px" title="Quitar">✕</button>` : ''}
                </div>
              </div>`).join('')}
            </div>`}
          </div>`;
        }).join('')}
      </div>

      <div style="padding:16px 18px;border-radius:14px;background:#fff;border:1.5px solid var(--line)">
        <b style="display:block;font-size:15.5px;color:var(--navy);margin-bottom:4px">➕ Añadir cumpleaños manual (Sacerdotes, Hermanas, Asesores o Jóvenes sin planilla)</b>
        <p class="ehint" style="margin:0 0 12px">Los jóvenes que llenan su planilla aparecen arriba automáticamente. Usa este recuadro si quieres agregar además a alguien manualmente.</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end">
          <div class="fld" style="flex:2 1 180px"><label for="cum-new-nom">Nombre y Apellido</label><input id="cum-new-nom" type="text" placeholder="Ej.: P. Juan / Hna. María"></div>
          <div class="fld" style="flex:1 1 145px"><label for="cum-new-nac">Fecha de nacimiento</label><input id="cum-new-nac" type="date" style="min-height:46px;padding:0 10px;border-radius:10px;border:1.5px solid #B9C8E4;font-size:14.5px"></div>
          <div class="fld" style="flex:1 1 135px"><label for="cum-new-cel">Celular (opcional)</label><input id="cum-new-cel" type="tel" placeholder="0412-000-0000"></div>
          <div class="fld" style="flex:1 1 135px"><label for="cum-new-rol">Rol / Nota</label><input id="cum-new-rol" type="text" placeholder="Ej.: Sacerdote / Asesor"></div>
          <button type="button" class="btn btn-blue btn-sm" data-add-cumple-extra style="min-height:46px">+ Añadir</button>
        </div>
      </div>`;
  }

  if (tab === 'rol') return rolesTabHtml();
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
  if (tab === 'dat') return '<p class="ehint"><b>Hora, lugar y ubicación en Google Maps:</b> Aparecen en la sección de domingos y en las notificaciones para que los jóvenes toquen «Cómo llegar en Google Maps» y se les abra la ruta en su teléfono. El aviso se muestra como una franja azul arriba de toda la página; déjalo vacío para quitarlo.</p><div style="display:flex;flex-wrap:wrap;gap:18px">' +
    fld('Hora de la reunión', dr.hora || '', (v) => { dr.hora = v; }, { w: 1, ph: 'Ej.: 3:00 p. m.' }) +
    fld('Lugar de la reunión (Nombre del sitio)', dr.lugar || '', (v) => { dr.lugar = v; }, { w: 1, ph: 'Ej.: Salón parroquial San Juan Bautista' }) +
    fld('Ubicación exacta de Google Maps (Enlace o Coordenadas)', dr.mapsUrl || '', (v) => { dr.mapsUrl = v; }, { w: 1, ph: 'Ej.: https://maps.app.goo.gl/… o 10.2871,-69.1623' }) +
    '<div class="w" style="flex:1 1 100%"><b style="font-size:15px">Números de WhatsApp que reciben las planillas</b><p class="ehint" style="margin:4px 0 0">Escríbelos como los marcas en Venezuela, por ejemplo 0412-054-5307. Deja vacío el que no uses.</p></div>' +
    waFields() +
    fld('Aviso en la parte de arriba de la página', dr.aviso || '', (v) => { dr.aviso = v; }, { w: 1, ph: 'Ej.: Este domingo la reunión será en el templo' }) +
    '</div>';
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
  if (tab === 'nov') {
    return `<p class="ehint"><b>Noticias de JUMA (disponible para Cuenta Maestra y Coordinadores):</b> Publica todas las noticias que quieras subiendo un <b>video directo desde tu teléfono</b>, una <b>foto</b> o un enlace de YouTube. Cada publicación muestra el texto corto debajo del video, el botón <b>«Ver más ▾»</b> estilo TikTok y el botón para <b>compartir por WhatsApp</b>.</p>
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:14px">
        <button type="button" class="btn btn-blue" data-newpost>+ Nueva noticia / publicación</button>
        ${edBusy ? `<span style="font-size:14.5px;font-weight:800;color:var(--royal)" id="ed-up-status">${esc(edUploadMsg || 'Subiendo archivo…')}</span>` : ''}
      </div>` + (dr.posts || []).map((p, i) => {
        const hasVid = !!p.video;
        const isCloudVid = hasVid && String(p.video).startsWith('juma-vid:');
        return `<div class="erow" style="flex-direction:column;align-items:stretch;background:#fff;padding:18px;border-radius:14px;border:1.5px solid var(--line);margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:4px">
            <b style="font-size:15px;color:var(--royal)">📰 Publicación #${i + 1} ${i === 0 ? '(Más reciente)' : ''}</b>
            <button type="button" class="btn btn-danger btn-sm" data-rmpost="${i}">Borrar publicación</button>
          </div>
          ${fld('Texto corto principal (aparece debajo del video/foto)', p.t || '', (v) => { dr.posts[i].t = v; }, { w: 1, ph: 'Ej.: ¡Los dobletes no siempre son de catástrofes, esta vez venimos con uno de puro AMOR y CONSOLACIÓN! ❤️🔥✨' })}
          ${fld('Texto completo al tocar «Ver más ▾» (estilo TikTok)', p.x || '', (v) => { dr.posts[i].x = v; }, { w: 1, area: 1, rows: 5, ph: 'Escribe aquí la información completa, ruta, fecha, hora…' })}
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;background:var(--paper);border:1px solid var(--line)">
            <label class="btn btn-blue btn-sm" style="cursor:pointer;position:relative">
              ${ic('play')}<span>${hasVid ? 'Cambiar video del teléfono' : 'Subir video del teléfono'}</span>
              <input type="file" accept="video/*" data-up="video" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0">
            </label>
            ${hasVid ? `<span style="font-size:13.5px;font-weight:800;color:#14532D;background:#E4F5EA;padding:5px 12px;border-radius:99px">✔ Video cargado ${isCloudVid ? '(Nube JUMA)' : ''}</span><button type="button" class="btn btn-soft btn-sm" data-rmvid="${i}">Quitar video</button>` : '<span style="font-size:13.5px;color:var(--muted)">Sin video</span>'}
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-left:auto">
              <label class="btn btn-soft btn-sm" style="cursor:pointer;position:relative" title="Tomar foto con la cámara">
                ${ic('camera')}<span>Tomar foto</span>
                <input type="file" accept="image/*" capture="environment" data-up="foto" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0">
              </label>
              <label class="btn btn-soft btn-sm" style="cursor:pointer;position:relative" title="Elegir foto de la galería">
                ${ic('image')}<span>${p.foto ? 'Cambiar foto' : 'Elegir de galería'}</span>
                <input type="file" accept="image/*" data-up="foto" data-i="${i}" style="position:absolute;width:1px;height:1px;opacity:0">
              </label>
              ${p.foto ? `<div style="display:flex;align-items:center;gap:6px"><img class="ethumb" src="${esc(p.foto)}" alt="" style="width:44px;height:44px;border-radius:8px;object-fit:cover;border:1.5px solid var(--royal)"><span style="font-size:12.5px;font-weight:800;color:#14532D">✔ Foto lista</span><button type="button" class="btn btn-soft btn-sm" data-rmfoto="${i}">Quitar</button></div>` : ''}
            </div>
          </div>
          ${!isCloudVid ? fld('O pega un enlace de YouTube / ruta de video (opcional)', p.video || '', (v) => { dr.posts[i].video = v; }, { w: 1, ph: 'https://youtu.be/… o img/mi-video.mp4' }) : ''}
        </div>`;
      }).join('');
  }
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
  c.cumpleanosExtra = (c.cumpleanosExtra || []).filter((x) => x && String(x.nombre || '').trim() && String(x.nac || '').trim());
  c.cumpleanosMensaje = typeof src.cumpleanosMensaje === 'string' ? src.cumpleanosMensaje.trim() : (cfg.cumpleanosMensaje || '');
  c.posts = (c.posts || []).filter((p) => p && (String(p.t || '').trim() || String(p.x || '').trim() || p.video || p.foto)).slice(0, 25);
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
function showFab() { $('#fab-edit').classList.remove('hide'); syncFab(); }
/* Marca en <body> si el botón «Editar página» está a la vista (para acomodar lo que flota) */
function syncFab() { const f = $('#fab-edit'); document.body.classList.toggle('con-fab', !!(f && !f.classList.contains('hide'))); }
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
async function shrinkToDataUrl(file, maxDim = 960, quality = 0.82) {
  try {
    if (typeof createImageBitmap === 'function') {
      const bmp = await createImageBitmap(file);
      const k = Math.min(1, maxDim / Math.max(bmp.width, bmp.height));
      const cv = document.createElement('canvas');
      cv.width = Math.round(bmp.width * k);
      cv.height = Math.round(bmp.height * k);
      cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
      return cv.toDataURL('image/jpeg', quality);
    }
  } catch (e) {}
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        const k = Math.min(1, maxDim / Math.max(w, h));
        const cv = document.createElement('canvas');
        cv.width = Math.round(w * k);
        cv.height = Math.round(h * k);
        cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
        resolve(cv.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(reader.result);
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
let edUploadMsg = '';
async function uploadVideoToCloud(file, onProgress) {
  if (!file) throw new Error('Selecciona un archivo de video.');
  const maxBytes = 25 * 1024 * 1024;
  if (file.size > maxBytes) {
    throw new Error('El video supera los 25 MB permitidos. Prueba con un video más corto o enviado por WhatsApp.');
  }
  const buf = await file.arrayBuffer();
  const u8 = new Uint8Array(buf);
  const vidId = Date.now() + '-' + Math.random().toString(36).slice(2, 7);
  const mime = file.type || 'video/mp4';

  /* Si tiene llave de GitHub activa en este dispositivo, también lo sube como archivo directo .mp4 */
  if (ghToken()) {
    try {
      if (onProgress) onProgress('⏳ Subiendo video directo a GitHub…');
      const ghFilePath = 'img/subidas/video-' + vidId + '.mp4';
      await ghPut(ghFilePath, u8ToB64(u8), null, 'Sube video de noticia desde la app');
      const blob = new Blob([u8], { type: mime });
      if ('File' in globalThis) postVideoFileCache.set(ghFilePath, new File([blob], file.name || 'Noticia-JUMA.mp4', { type: mime }));
      return ghFilePath;
    } catch (e) {}
  }

  if (!fb || !fb.db) {
    throw new Error('Esperando conexión con la nube de Firebase. Intenta de nuevo en unos segundos.');
  }
  if (!coordUI()) {
    throw new Error('Para subir videos a la nube inicia sesión como coordinador, o conecta la llave de GitHub en la pestaña «GitHub».');
  }
  const chunkSize = 524288; /* 512 KB por bloque (~683 KB en base64, dentro del límite de 1 MB de Firestore) */
  const totalChunks = Math.ceil(u8.length / chunkSize);
  const batchSize = 3;
  for (let start = 0; start < totalChunks; start += batchSize) {
    const end = Math.min(totalChunks, start + batchSize);
    const tasks = [];
    for (let c = start; c < end; c++) {
      const slice = u8.subarray(c * chunkSize, Math.min(u8.length, (c + 1) * chunkSize));
      const b64 = u8ToB64(slice);
      tasks.push(fb.setDoc(fb.doc(fb.db, 'site', `vid_${vidId}_${c}`), { d: b64, i: c }));
    }
    await Promise.all(tasks);
    const pct = Math.round((end / totalChunks) * 100);
    if (onProgress) onProgress(`⏳ Subiendo video a la nube de JUMA… ${pct}%`);
  }
  await fb.setDoc(fb.doc(fb.db, 'site', 'vid_' + vidId), {
    id: vidId,
    mime,
    size: u8.length,
    chunks: totalChunks,
    name: file.name || 'Noticia-JUMA.mp4',
    creado: new Date().toISOString()
  });

  const vidRef = 'juma-vid:' + vidId;
  const blob = new Blob([u8], { type: mime });
  const localUrl = URL.createObjectURL(blob);
  postVideoBlobUrlCache.set(vidRef, localUrl);
  if ('File' in globalThis) {
    postVideoFileCache.set(vidRef, new File([blob], file.name || 'Noticia-JUMA.mp4', { type: mime }));
  }
  try {
    if ('caches' in globalThis) {
      const cacheKey = 'https://juma.local/cloud-video/' + encodeURIComponent(vidId);
      const c = await caches.open('juma-cloud-videos-v1');
      await c.put(cacheKey, new Response(blob, { headers: { 'Content-Type': mime } }));
    }
  } catch (e) {}
  return vidRef;
}
modalRoot.addEventListener('input', (e) => {
  if (e.target.id === 'ins-search') { insQuery = e.target.value; const pos = e.target.selectionStart; repaintEd(); const inp = $('#ins-search'); if (inp) { inp.focus(); try { inp.setSelectionRange(pos, pos); } catch (x) {} } return; }
  if (e.target.id === 'qr-tema-in') { qrTema = e.target.value; return; }
  if (e.target.id === 'cumple-msg-custom') { dr.cumpleanosMensaje = e.target.value; touch(); return; }
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
  edBusy = true; edErr = ''; edUploadMsg = kind === 'video' ? '⏳ Preparando video del teléfono…' : '⏳ Preparando foto…'; repaintEd();
  try {
    if (kind === 'video') {
      const f = files[0];
      const vidRef = await uploadVideoToCloud(f, (msg) => {
        edUploadMsg = msg;
        const stEl = $('#ed-up-status');
        if (stEl) stEl.textContent = msg;
      });
      dr.posts[i].video = vidRef;
      edOk = '<b>✔ ¡Video cargado desde tu teléfono!</b> Ahora pulsa <b>«Publicar cambios»</b> abajo para que aparezca en todos los teléfonos.';
    } else {
      for (const f of files) {
        const url = await shrinkToDataUrl(f);
        if (kind === 'gal') dr.galeria = (dr.galeria || []).concat([{ url, cap: '' }]);
        else if (kind === 'foto') {
          dr.posts[i].foto = url;
          try {
            const fObj = new File([f], f.name || 'Noticia-JUMA.jpg', { type: f.type || 'image/jpeg' });
            if (dr.posts[i].id) postMediaFileCache.set(dr.posts[i].id, fObj);
            postMediaFileCache.set(url, fObj);
          } catch (e) {}
        }
        else if (kind === 'tes') dr.testimonios[i].foto = url;
      }
    }
  } catch (x) {
    edErr = (x && x.message) || (kind === 'video' ? 'No se pudo subir el video. Intenta con un video más corto.' : 'No se pudo leer la foto. Prueba con otra imagen (JPG o PNG).');
  }
  edBusy = false; edUploadMsg = ''; touch(); repaintEd();
});
modalRoot.addEventListener('click', async (e) => {
  if (!$('#ed-t')) return; const t = e.target;
  const q = (s) => t.closest(s);
  if (q('[data-tab]')) { tab = q('[data-tab]').dataset.tab; edErr = ''; edOk = ''; repaintEd(); return; }
  if (q('[data-go-qr-tab]')) { tab = 'qr'; edErr = ''; edOk = ''; repaintEd(); return; }
  if (q('[data-cum-mes]')) { cumpleMesFilter = q('[data-cum-mes]').dataset.cumMes; repaintEd(); return; }
  if (q('[data-test-cumple-anim]')) {
    checkBirthdayCelebration(true, (myProfile && myProfile.nombre) ? myProfile : { nombre: 'Misionero JUMA', foto: 'img/new-chicas-capilla.jpg' });
    return;
  }
  if (q('[data-save-cumple-msg]')) {
    const val = (($('#cumple-msg-custom') || {}).value || '').trim();
    if (val) {
      dr.cumpleanosMensaje = val;
      touch();
      edOk = '✔ Mensaje de felicitación guardado en borrador. Pulsa «Publicar cambios» para guardarlo en la nube.';
      repaintEd();
    }
    return;
  }
  if (q('[data-add-cumple-extra]')) {
    const nom = (($('#cum-new-nom') || {}).value || '').trim();
    const nac = (($('#cum-new-nac') || {}).value || '').trim();
    const cel = (($('#cum-new-cel') || {}).value || '').trim();
    const rol = (($('#cum-new-rol') || {}).value || '').trim() || 'Miembro JUMA';
    if (!nom || !nac) { edErr = 'Escribe el nombre y selecciona la fecha de nacimiento.'; repaintEd(); return; }
    dr.cumpleanosExtra = Array.isArray(dr.cumpleanosExtra) ? dr.cumpleanosExtra : [];
    dr.cumpleanosExtra.push({ nombre: nom, nac, celular: cel, rol });
    edErr = ''; edOk = '✔ Cumpleaños añadido al calendario. Pulsa «Publicar cambios» para guardarlo en la nube.';
    touch(); repaintEd(); return;
  }
  if (q('[data-rm-cumple-extra]')) {
    const idxRm = +q('[data-rm-cumple-extra]').dataset.rmCumpleExtra;
    if (Array.isArray(dr.cumpleanosExtra)) dr.cumpleanosExtra.splice(idxRm, 1);
    touch(); repaintEd(); return;
  }
  if (q('[data-filter-rol]')) { insRoleFilter = q('[data-filter-rol]').dataset.filterRol; repaintEd(); return; }
  if (q('[data-add-rol]')) {
    edErr = ''; edOk = '';
    const em = (($('#rol-new-email') || {}).value || '').trim().toLowerCase();
    const nom = (($('#rol-new-nombre') || {}).value || '').trim();
    const rol = (($('#rol-new-rol') || {}).value || 'coordinador');
    if (await guardarRol(em, rol, nom)) edOk = `✔ <b>${esc(em)}</b> ahora es <b>${esc(roleLabel(rol))}</b>. Debe iniciar sesión con ese correo (verificado) para activar sus permisos.`;
    repaintEd(); return;
  }
  if (q('[data-rm-rol]')) {
    edErr = ''; edOk = '';
    const em = q('[data-rm-rol]').dataset.rmRol;
    if (!confirm('¿Quitar los permisos de coordinación a ' + em + '? Su planilla y sus datos no se borran.')) return;
    if (await quitarRol(em)) edOk = '✔ Se quitaron los permisos de ' + esc(em) + '.';
    repaintEd(); return;
  }
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
    const list = allInscripciones.filter((x) => (insRoleFilter === 'todos' || rolEtiqueta(x) === insRoleFilter) && (!qStr || JSON.stringify(x).toLowerCase().includes(qStr)));
    const item = list[+q('[data-dl-ins]').dataset.dlIns];
    if (item && item.datos) downloadPlanillaHtml(item.datos, item);
    return;
  }
  if (q('[data-rm-ins]')) {
    if (!isMasterAccount()) return;
    const id = q('[data-rm-ins]').dataset.rmIns;
    if (!confirm('¿Borrar esta planilla de inscripción? Esta acción no se puede deshacer.')) return;
    try { if (fb && fb.db) await withTimeout(fb.deleteDoc(fb.doc(fb.db, 'inscripciones', id)), 4000); } catch (x) {}
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
    try { sessionStorage.removeItem('juma-ed'); } catch (x) {}
    if (!coordUI()) $('#fab-edit').classList.add('hide');
    syncFab(); updateAuthUI(); closeModal(); return;
  }
  if (q('[data-newtes]')) { dr.testimonios = [{ n: '', r: '', x: '', foto: '' }].concat(dr.testimonios || []); touch(); repaintEd(); return; }
  if (q('[data-rmtes]')) { dr.testimonios.splice(+q('[data-rmtes]').dataset.rmtes, 1); touch(); repaintEd(); return; }
  if (q('[data-newpost]')) { dr.posts = [{ id: String(Date.now()), t: '', x: '', fecha: new Date().toISOString(), foto: '', video: '' }].concat(dr.posts || []); touch(); repaintEd(); return; }
  if (q('[data-rmpost]')) {
    const idxRm = +q('[data-rmpost]').dataset.rmpost;
    const [removed] = (dr.posts || []).splice(idxRm, 1);
    if (removed && removed.id) {
      dr.postsOcultos = Array.from(new Set((dr.postsOcultos || []).concat([removed.id])));
    }
    touch(); repaintEd(); return;
  }
  if (q('[data-rmvid]')) {
    const idxVid = +q('[data-rmvid]').dataset.rmvid;
    if (dr.posts && dr.posts[idxVid]) dr.posts[idxVid].video = '';
    touch(); repaintEd(); return;
  }
  if (q('[data-rmfoto]')) {
    const idxFot = +q('[data-rmfoto]').dataset.rmfoto;
    if (dr.posts && dr.posts[idxFot]) dr.posts[idxFot].foto = '';
    touch(); repaintEd(); return;
  }
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
  delete local.coordinadoresEmails; delete local.asesoresEmails;
  if (fb && fb.db && coordUI()) await refrescarListasRoles();
  const conListas = (o) => (listasRoles.cargadas ? Object.assign({}, o, { coordinadoresEmails: listasRoles.coord, asesoresEmails: listasRoles.ases }) : o);
  local.actualizado = new Date(Math.max(Date.now(), (Date.parse(newestSeen) || 0) + 1000)).toISOString();
  edBusy = true; edErr = ''; edOk = ''; repaintEd();

  // Si no hay llave de GitHub, publica directamente en Firebase y guarda borrador local
  if (!ghToken()) {
    let fbSaved = false;
    if (fb && fb.db && coordUI()) {
      try {
        await withTimeout(fb.setDoc(fb.doc(fb.db, 'site', 'config'), conListas(local)), 8000);
        fbSaved = true;
      } catch (e) {
        fbSaved = false;
      }
    }
    dr = local;
    draftWarn = !writeDraft(Object.assign({}, local, { _dirty: false }));
    pub = clone(local);
    cfg = clone(local);
    renderAll();
    try { localStorage.setItem('juma-cfg', JSON.stringify(local)); } catch (e) {}
    edBusy = false;
    if (fbSaved) {
      edOk = '<b>✔ ¡Publicado en tiempo real en Firebase!</b> Todos los usuarios de la app y la web ya ven los cambios al instante.';
    } else {
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(local, null, 1)], { type: 'application/json' })); a.download = 'contenido.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      edOk = '<b>Se guardó y descargó contenido.json.</b> Súbelo a GitHub o conecta tu llave en la pestaña «GitHub» para publicar sin descargar archivos.';
    }
    repaintEd();
    return;
  }

  // Si tiene llave de GitHub, sube fotos en paralelo y sincroniza Firebase sin bloqueos
  try {
    const out = clone(local);
    let n = 0;
    const photoUploads = [];
    const collectUpload = (item, prop) => {
      const url = item[prop];
      if (/^data:image\//.test(url || '') && !uploaded.has(url)) {
        const path = 'img/subidas/' + Date.now() + '-' + (++n) + '.jpg';
        photoUploads.push(
          ghPut(path, url.split(',')[1], null, 'Foto nueva desde el editor')
            .then(() => { uploaded.set(url, path); })
        );
      }
    };

    (out.galeria || []).forEach((g) => collectUpload(g, 'url'));
    (out.posts || []).forEach((p) => { if (p.foto) collectUpload(p, 'foto'); });
    (out.testimonios || []).forEach((x) => { if (x.foto) collectUpload(x, 'foto'); });

    // Sube fotos a GitHub y lee el sha actual de contenido.json en paralelo
    const [_, cur] = await Promise.all([
      Promise.all(photoUploads),
      ghGet('contenido.json').catch(() => null)
    ]);

    // Aplica las rutas subidas a GitHub
    for (const g of out.galeria || []) if (uploaded.has(g.url)) g.url = uploaded.get(g.url);
    for (const p of out.posts || []) if (p.foto && uploaded.has(p.foto)) p.foto = uploaded.get(p.foto);
    for (const x of out.testimonios || []) if (x.foto && uploaded.has(x.foto)) x.foto = uploaded.get(x.foto);
    if (out.orden) out.orden = out.orden.map((k) => uploaded.get(k) || k);

    // Guarda en GitHub y Firebase en paralelo
    await Promise.all([
      ghPut('contenido.json', enc64(JSON.stringify(out, null, 1)), cur && cur.sha, 'Actualiza la página desde el editor'),
      fb && fb.db && coordUI() ? fb.setDoc(fb.doc(fb.db, 'site', 'config'), conListas(out)).catch(() => {}) : Promise.resolve()
    ]);

    pub = clone(out);
    newestSeen = out.actualizado;
    dr = local;
    cfg = clone(local);
    renderAll();
    try { localStorage.removeItem(DRAFT); } catch (x) {}

    // Limpia archivos viejos en segundo plano para no demorar al usuario
    if (oldFiles.length) {
      const toClean = oldFiles.slice();
      oldFiles = [];
      setTimeout(async () => {
        for (const f of toClean) {
          try {
            const o = await ghGet(f);
            if (o && o.sha) await ghDelete(f, o.sha);
          } catch (x) {}
        }
      }, 500);
    }

    edOk = '<b>✔ ¡Publicado en Firebase y en GitHub!</b> Todos lo ven al instante en la página y en la app.';
  } catch (x) {
    edErr = x && (x.status === 401 || x.status === 403 || x.status === 404)
      ? 'GitHub no aceptó la llave (pero en Firebase sí se guardó si estaba activo). Revísala en la pestaña «GitHub».'
      : 'No se pudo subir a GitHub, revisa tu conexión.';
  }
  edBusy = false;
  repaintEd();
}

/* ===================== entrada secreta: 5 toques en María Consolata ===================== */
let taps = [];
document.addEventListener('click', (e) => {
  const s = e.target.closest && e.target.closest('.patron-d summary'); if (!s) return;
  const first = $$('.patron-d summary')[0]; if (s !== first) return;
  const now = Date.now(); taps = taps.filter((x) => now - x < 3000); taps.push(now);
  if (taps.length >= 5) { taps = []; e.preventDefault(); if (isEditor() || coordUI()) { showFab(); openEditor(); } else askPass(); }
});
function askPass() {
  openModal(`<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="pw-t"><div class="sheet" style="max-width:520px">${sheetHead('Solo para JUMA', 'Entrar a editar', 'pw-t')}<form id="pw-form" style="padding:clamp(22px,4vw,40px)"><p class="ehint" style="margin:0 0 14px">Con la clave del editor puedes cambiar el contenido de la página y publicarlo con la llave de GitHub. Las planillas, asistencias y permisos solo se ven iniciando sesión como coordinador.</p><div class="fld w"><label for="pw-in">Clave del editor</label><input id="pw-in" type="password" autocomplete="current-password"></div><p id="pw-msg" role="alert" style="margin:14px 0 0;font-size:15px;font-weight:700;color:#8A1C1C"></p><div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:22px"><button type="submit" class="btn btn-blue">Entrar</button><button type="button" class="btn btn-soft" data-close>Cancelar</button></div></form></div></div>`, 'pw');
}

/* ===================== ver foto completa ===================== */
document.addEventListener('click', (e) => {
  const img = e.target.closest && e.target.closest('.gal img, .tri img'); if (!img || modalRoot.firstChild) return;
  e.preventDefault();
  const src = img.currentSrc || img.src;
  openModal(`<div class="overlay lightbox" role="dialog" aria-modal="true" aria-label="${esc(img.alt || 'Foto')}" data-close style="display:flex;align-items:center;justify-content:center;padding:58px 14px 14px;cursor:zoom-out"><img src="${esc(src)}" alt="${esc(img.alt || '')}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:10px"><button type="button" data-close style="position:fixed;top:12px;right:12px;min-height:44px;padding:0 16px;border-radius:12px;border:1.5px solid rgba(255,255,255,.5);background:rgba(6,21,54,.4);color:#fff;font-weight:700;font-size:15px;display:inline-flex;align-items:center;gap:8px">Cerrar ${ic('x')}</button></div>`);
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
.jchat{position:fixed;left:16px;bottom:16px;z-index:70;width:min(380px,calc(100vw - 32px));height:min(600px,calc(100dvh - 32px));display:flex;flex-direction:column;background:var(--paper,#F6F9FE);border-radius:20px;overflow:hidden;box-shadow:0 30px 60px -20px rgba(6,21,54,.6);transform-origin:bottom left;animation:jchatIn 220ms cubic-bezier(0.23,1,0.32,1) both}
@keyframes jchatIn{from{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:none}}
.jchat-head{display:flex;align-items:center;gap:12px;padding:12px 12px 12px 14px;background:var(--navy,#061536);color:#fff}
.jchat-head img{width:46px;height:46px;border-radius:50%}
.jchat-head b{display:block;font-size:16px}
.jchat-head small{display:block;font-size:12.5px;color:#BFD3F2}
.jchat-x{margin-left:auto;width:44px;height:44px;border-radius:10px;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;font-size:18px;cursor:pointer;display:inline-grid;place-items:center}
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
.jhello-x{position:absolute;top:6px;right:6px;width:32px;height:32px;border:0;border-radius:8px;background:transparent;color:#5A6B8C;font-size:15px;cursor:pointer;display:inline-grid;place-items:center}
.jhello-x .ic{width:18px;height:18px}
@media (prefers-reduced-motion:reduce){.jhello{animation:none}.jchat{animation:none}.jtyping i{animation:none;opacity:.6}}
/* Diseño v2: en computadora, a la derecha del menú lateral; en el teléfono, encima de la barra inferior y el chat ocupa casi toda la pantalla */
@media (min-width:1024px){.jchat-btn,.jhello,.jchat{left:calc(var(--side-w,264px) + 16px)}}
@media (max-width:640px){
.jchat-btn{bottom:calc(var(--tab-h,64px) + 12px + env(safe-area-inset-bottom));padding:5px;border-radius:50%}
.jchat-btn span.t{display:none}
.jhello{bottom:calc(var(--tab-h,64px) + 76px + env(safe-area-inset-bottom))}
.jchat{left:0;right:0;bottom:0;width:100%;height:calc(100dvh - 40px);border-radius:20px 20px 0 0;transform-origin:bottom center}
.jchat form{padding-bottom:calc(12px + env(safe-area-inset-bottom))}
}
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
      return P([`Nos reunimos <b>todos los domingos</b>. Hora: <b>${esc(hora())}</b>. Lugar: <b>${esc(lugar())}</b>.`, n ? `El próximo es el <b>${n.dia} de ${n.mes}</b>: ${esc(n.tema)}.` : '', `<a href="${esc(mapsUrl())}" target="_blank" rel="noopener" style="display:inline-block;margin-top:4px;color:var(--royal);font-weight:800;text-decoration:underline">📍 Ver cómo llegar en Google Maps</a>`, 'Cada encuentro tiene oración, formación y compartir. ¡Llega temprano y trae tu alegría!']);
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
    box.innerHTML = `<div class="jchat-head"><img src="${AV}" alt=""><div><b>Joriel</b><small>Asistente de JUMA · en línea</small></div><button type="button" class="jchat-x" aria-label="Cerrar">${ic('x')}</button></div><div class="jchat-log" aria-live="polite"></div><div class="jchips">${CHIPS.map((c) => `<button type="button">${esc(c)}</button>`).join('')}</div><form><label for="jchat-in" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Escribe tu pregunta</label><input id="jchat-in" type="text" autocomplete="off" placeholder="Escribe tu pregunta…"><button type="submit">Enviar</button></form>`;
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
      /* Los botones de Joriel abren el bloque del inicio que haga falta y bajan hasta la sección */
      const g = e.target.closest('[data-goto]'); if (g) { close(); switchSection(String(g.dataset.goto || '').replace(/^#/, '')); }
    });
    if (first) {
      first = false;
      const reg = getRegisteredUserRecord();
      const isCelebrant = reg && isUserBirthdayToday(reg);
      const bdayList = getCumpleanosList(cfg).filter((c) => c.esHoy);
      const primerNom = reg ? (reg.nombre || ((reg.datos && reg.datos.nombres) || '')).trim().split(/\s+/)[0] : '';

      let jMsg = [];
      if (isCelebrant) {
        jMsg = [
          `¡Feliz cumpleaños, <b>${esc(primerNom || 'misionero(a)')}</b>! 🎂🎉`,
          'Hoy el cielo y toda la familia de JUMA Duaca celebramos tu vida. Que Dios y Nuestra Madre la Virgen Consolata te colmen de bendiciones, salud y santidad en tu caminar misionero. ¡Te mando un fuerte abrazo! 🎈🎁✨',
          '¿En qué te puedo ayudar hoy en tu día especial?'
        ];
      } else if (bdayList.length > 0) {
        const nombresHoy = bdayList.map((c) => c.nombre).join(', ');
        const isCoord = isCoordinatorOrMaster();
        const firstIsFem = detectGender(bdayList[0]) === 'Mujer';
        const pronFelicitar = bdayList.length === 1 ? (firstIsFem ? 'felicitarla' : 'felicitarlo') : 'felicitarles';
        const waChatBtns = bdayList.map((c) => {
          const pNom = c.nombre.split(/\s+/)[0] || c.nombre;
          const isCFem = detectGender(c) === 'Mujer';
          const hermanoTxt = isCFem ? 'hermana' : 'hermano';
          const msgWa = `🎉🎂 ¡Feliz cumpleaños, *${c.nombre}*! Que Dios y Nuestra Madre la Virgen Consolata te bendigan siempre en tu camino como ${hermanoTxt} misionero(a). ¡Un gran abrazo de parte de toda tu familia de JUMA Duaca! 💙✨`;
          const link = c.waUrl || `https://wa.me/?text=${encodeURIComponent(msgWa)}`;
          const cId = c.id || ('extra-' + (c.extraIdx !== undefined ? c.extraIdx : ''));
          return `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">
            <a href="${esc(link)}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#17824A;color:#fff;font-size:13px;font-weight:800;padding:8px 14px;border-radius:12px;text-decoration:none;box-shadow:0 4px 14px rgba(23,130,74,0.3)">📲 Felicitar a ${esc(pNom)} por WhatsApp</a>
            ${isCoord ? `<button type="button" class="btn btn-sm" data-share-flyer-id="${esc(cId)}" style="min-height:34px;padding:0 14px;font-size:13px;font-weight:800;background:#F5C518;color:#061536;border:0;border-radius:12px;box-shadow:0 4px 14px rgba(245,197,24,0.35);cursor:pointer">🎉 Felicitar en el Grupo</button>` : ''}
          </div>`;
        }).join('');
        jMsg = [
          `¡Hola${primerNom ? ', <b>' + esc(primerNom) + '</b>' : ''}! Soy <b>Joriel</b> 👋.`,
          `Hoy tenemos una gran fiesta misionera en JUMA: ¡<b>${esc(nombresHoy)}</b> está de cumpleaños hoy! 🎂🎈 No olvides ${pronFelicitar}.`,
          waChatBtns,
          'Te cuento sobre nuestros encuentros, formación, oraciones y cómo participar. ¿Qué quieres saber?'
        ];
      } else {
        jMsg = [
          '¡Hola! Soy <b>Joriel</b>, joven misionero de JUMA Duaca. 👋',
          'Te cuento cuándo nos reunimos, cómo inscribirte, cómo es la formación y quiénes son nuestros santos. ¿Qué quieres saber?'
        ];
      }
      add(`<img class="jfull" src="${FULL}" alt="Joriel saludando">` + P(jMsg));
    }
    setTimeout(() => { try { box.querySelector('input').focus({ preventScroll: true }); } catch (e) {} }, 50);
  }
  function close() { if (!box) return; box.style.display = 'none'; btn.style.display = ''; btn.focus(); }
  btn.addEventListener('click', () => { hideHello(); open(); });

  /* Saludo de presentación al abrir la página (una vez por visita). */
  let hello = null;
  function hideHello() { if (!hello) return; hello.remove(); hello = null; try { sessionStorage.setItem('juma-hola', '1'); } catch (e) {} }
  function showHello() {
    try { if (sessionStorage.getItem('juma-hola')) return; } catch (e) {}
    if (box || hello || modalRoot.firstChild || $('#juma-cumple-modal')) return;
    const reg = getRegisteredUserRecord();
    const isCelebrant = reg && isUserBirthdayToday(reg);
    const bdayList = getCumpleanosList(cfg).filter((c) => c.esHoy);
    const primerNom = reg ? (reg.nombre || ((reg.datos && reg.datos.nombres) || '')).trim().split(/\s+/)[0] : '';

    let bTitle = '¡Hola! Soy Joriel 👋';
    let bText = 'Bienvenido a JUMA Duaca. Si quieres saber cuándo nos reunimos o cómo unirte, pregúntame.';
    let bBtn = 'Hablar con Joriel';

    if (isCelebrant) {
      const isFemMe = reg ? (detectGender(reg) === 'Mujer') : false;
      const termMe = isFemMe ? 'misionera' : 'misionero';
      bTitle = `🎉 ¡Feliz cumpleaños, ${esc(primerNom || termMe)}! 🎂`;
      bText = '¡Soy Joriel! Hoy es tu día especial y toda la familia JUMA Duaca celebramos tu vida. ¡Que Dios te bendiga siempre! 🙏✨';
      bBtn = 'Hablar con Joriel';
    } else if (bdayList.length > 0) {
      const nomCumple = bdayList.map((c) => c.nombre).join(', ');
      const firstIsFem = detectGender(bdayList[0]) === 'Mujer';
      const pronFelicitar = bdayList.length === 1 ? (firstIsFem ? 'felicitarla' : 'felicitarlo') : 'felicitarles';
      bTitle = primerNom ? `¡Hola, ${esc(primerNom)}! Soy Joriel 👋` : '¡Hola! Soy Joriel 👋';
      bText = `🎉 ¡Hoy está de cumpleaños ${esc(nomCumple)}! 🎂🎈 No olvides ${pronFelicitar} en este día tan especial.`;
    }

    let bWaHtml = '';
    if (bdayList.length > 0 && !isCelebrant) {
      const isCoord = isCoordinatorOrMaster();
      const waButtons = bdayList.map((c) => {
        const pNom = c.nombre.split(/\s+/)[0] || c.nombre;
        const isCFem = detectGender(c) === 'Mujer';
        const hermanoTxt = isCFem ? 'hermana' : 'hermano';
        const msgWa = `🎉🎂 ¡Feliz cumpleaños, *${c.nombre}*! Que Dios y Nuestra Madre la Virgen Consolata te bendigan siempre en tu camino como ${hermanoTxt} misionero(a). ¡Un gran abrazo de parte de toda tu familia de JUMA Duaca! 💙✨`;
        const link = c.waUrl || `https://wa.me/?text=${encodeURIComponent(msgWa)}`;
        const cId = c.id || ('extra-' + (c.extraIdx !== undefined ? c.extraIdx : ''));
        return `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">
          <a class="jhello-wa" href="${esc(link)}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#17824A;color:#fff;font-size:12px;font-weight:800;padding:6px 12px;border-radius:99px;text-decoration:none;box-shadow:0 4px 12px rgba(23,130,74,0.35)">📲 Felicitar a ${esc(pNom)} por WhatsApp</a>
          ${isCoord ? `<button type="button" class="btn btn-sm" data-share-flyer-id="${esc(cId)}" style="min-height:30px;padding:0 12px;font-size:12px;font-weight:800;background:#F5C518;color:#061536;border:0;border-radius:99px;box-shadow:0 3px 10px rgba(245,197,24,0.35);cursor:pointer">🎉 Felicitar en el Grupo</button>` : ''}
        </div>`;
      }).join('');
      if (waButtons) {
        bWaHtml = `<div style="display:flex;flex-direction:column;gap:6px;margin:8px 0 4px">${waButtons}</div>`;
      }
    }

    hello = document.createElement('div'); hello.className = 'jhello'; hello.setAttribute('role', 'status');
    hello.innerHTML = `<img src="${FULL}" alt="" class="jhello-img"><div class="jhello-b"><button type="button" class="jhello-x" aria-label="Cerrar saludo">${ic('x')}</button><b>${bTitle}</b><p>${bText}</p>${bWaHtml}<button type="button" class="jhello-go" style="margin-top:4px">${bBtn}</button></div>`;
    document.body.appendChild(hello);
    hello.querySelector('.jhello-x').addEventListener('click', hideHello);
    hello.querySelector('.jhello-go').addEventListener('click', () => { hideHello(); open(); });
    hello.querySelector('.jhello-img').addEventListener('click', () => { hideHello(); open(); });
    /* El saludo se va solo: a los 12 segundos o cuando la persona empieza a desplazarse (pasados 2,5 s) */
    const t0 = Date.now();
    const alDesplazar = () => { if (Date.now() - t0 > 2500) { hideHello(); window.removeEventListener('scroll', alDesplazar); } };
    window.addEventListener('scroll', alDesplazar, { passive: true });
    setTimeout(() => { hideHello(); window.removeEventListener('scroll', alDesplazar); }, 12000);
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
  /* Si Firebase ya trajo una versión publicada más nueva (site/config), el archivo viejo no la pisa */
  if (best && String(best.actualizado || '') >= String((pub && pub.actualizado) || '')) pub = best;
  newestSeen = String((best && best.actualizado) || '');
  oldFiles = names.slice(1).filter((n, i) => got[i + 1]).map((n) => decodeURIComponent(n));
  cfg = clone(pub);
  if (isEditor()) { showFab(); const d = pickDraft(); if (d) cfg = cleanContent(d); }
  renderAll();
  setTimeout(() => checkUpcomingReminders(false), 1200);
}
(function boot() {
  /* Arranca como invitado: la sesión (y con ella el perfil, el chat y los avisos) llega desde Firebase Auth */
  renderAll(); setupUnroll(); updateAuthUI(); lock(false);
  actualizarMas();
  /* Enlace directo (#domingos, #mapa, #fe, #testimonios, #comunidad…): se abren los bloques hasta esa parte y se baja */
  const initHash = location.hash ? location.hash.slice(1) : 'inicio';
  switchSection(initHash, false);
  window.addEventListener('hashchange', () => {
    if (location.hash) switchSection(location.hash.slice(1), false);
  });
  // Photo gate disabled
  setTimeout(() => checkBirthdayCelebration(), 750);
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
  loadContenido();
  initFirebase();
})();
