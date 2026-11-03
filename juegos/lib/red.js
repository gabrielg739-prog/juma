/* =====================================================================
   JUMA · Juego conectado: varios teléfonos o computadoras jugando juntos
   en la misma wifi (o por internet).

   Cómo funciona
   - Un jugador crea la sala (anfitrión) y los demás se unen con un código
     de 4 letras. El anfitrión reparte los mensajes entre todos (estrella).
   - Los datos del juego viajan directo entre los equipos con WebRTC: en la
     misma wifi no salen a internet y llegan en pocos milisegundos.
   - Para que los equipos se encuentren hace falta intercambiar una «tarjeta
     de presentación» (SDP). Hay tres formas:
       · nube   – con el código de 4 letras, a través de Firestore (proyecto
                  JUMA). Necesita internet solo durante unos segundos.
       · local  – en el mismo equipo (dos pestañas), con localStorage. Sirve
                  para probar.  Se elige con ?senal=local en la dirección.
       · manual – sin internet: el invitado muestra un código QR, el
                  anfitrión lo escanea (o pega el texto) y responde con otro.
   - Dos canales por jugador: «fiable» (ordenado, para eventos) y «rapido»
     (sin reenvíos, para posiciones que se mandan muchas veces por segundo).
   - Puente por internet: entre teléfonos la conexión directa a veces no se
     abre (el router no deja que se vean, o uno usa datos móviles). Si en unos
     segundos no se abre, ese jugador sigue conectado a través de la Realtime
     Database del proyecto JUMA (salasRed/<código>). Va algo más lento, pero
     funciona en cualquier red con internet.

   Uso
     const red = crearRed({ juego: 'luz', nombre: 'Ana' });
     red.on('mensaje', (m, de) => …); red.on('entra', (j) => …); red.on('sale', (j) => …);
     const codigo = await red.crearSala();      // anfitrión
     await red.unirse('ABCD');                   // invitado
     red.enviar({ t: 'hola' });                  // a todos
     red.enviar({ t: 'pos', x, y }, { a: id, rapido: true });
   ===================================================================== */

const ICE = [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }];
const LETRAS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const COLECCION = 'salasJuego';
// Carpeta js/ de la app vista desde juegos/lib/ (y desde juegos/gran-premio/): dos niveles arriba
const CARPETA_APP = '../../js/';
const ID_ANFITRION = 'h';
const LATIDO = 1000;            // ms entre latidos
const SIN_RESPUESTA = 20000;    // ms sin noticias de un jugador: se da por desconectado (cargar un mundo puede tardar)
const ESPERA_ICE = 2500;        // ms máximos reuniendo direcciones (en la misma wifi basta con menos)
const ESPERA_RESPUESTA = 40000; // ms esperando a que el anfitrión responda al invitado
const ESPERA_CANAL = 15000;     // ms esperando a que se abra la conexión directa
const ESPERA_DIRECTA = 6000;    // ms dándole una oportunidad a la conexión directa antes de usar el puente
const ESPERA_PUENTE = 25000;    // ms esperando la bienvenida por el puente
const TICK_PUENTE = 120;        // ms entre envíos de posiciones por el puente
const forzarPuente = () => /[?&]forzarPuente=1\b/.test(location.search); // pruebas: sin conexión directa

const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const azar = (n, abc = LETRAS) => Array.from({ length: n }, () => abc[Math.floor(Math.random() * abc.length)]).join('');

export class ErrorRed extends Error {
  constructor(codigo, mensaje) { super(mensaje); this.codigo = codigo; }
}

/* ---------------------------------------------------------------------
   Almacenes para la señal (dónde se dejan las tarjetas de presentación)
   --------------------------------------------------------------------- */
function configFirebase() {
  try { if (window.parent && window.parent !== window && window.parent.JUMA_FIREBASE) return window.parent.JUMA_FIREBASE; } catch (e) { /* otro origen */ }
  return globalThis.JUMA_FIREBASE || null;
}
function cargarScript(url) {
  return new Promise((ok, mal) => { const s = document.createElement('script'); s.src = url; s.onload = ok; s.onerror = mal; document.head.appendChild(s); });
}
async function asegurarConfig() {
  if (configFirebase()) return configFirebase();
  try { await cargarScript(new URL(CARPETA_APP + 'firebase-config.js', import.meta.url).href); } catch (e) { /* sin archivo */ }
  return configFirebase();
}

/** Firestore por su API REST: no hace falta cargar el SDK de Firebase dentro del juego. */
export function almacenNube() {
  let base = null, clave = '';
  async function preparar() {
    if (base) return;
    const c = await asegurarConfig();
    if (!c || !c.projectId || !c.apiKey || /REEMPLAZA/i.test(c.apiKey)) throw new ErrorRed('sin-config', 'Falta la configuración de Firebase de la app.');
    base = `https://firestore.googleapis.com/v1/projects/${c.projectId}/databases/(default)/documents/`;
    clave = encodeURIComponent(c.apiKey);
  }
  const aCampos = (o) => { const f = {}; for (const [k, v] of Object.entries(o)) f[k] = v instanceof Date ? { timestampValue: v.toISOString() } : typeof v === 'number' ? { integerValue: String(Math.round(v)) } : { stringValue: String(v) }; return f; };
  const deCampos = (f) => { const o = {}; for (const [k, v] of Object.entries(f || {})) o[k] = v.stringValue ?? v.timestampValue ?? (v.integerValue != null ? Number(v.integerValue) : null); return o; };
  async function pedir(metodo, ruta, params, cuerpo) {
    await preparar();
    const url = base + ruta + '?key=' + clave + (params ? '&' + params : '');
    let r;
    try {
      r = await fetch(url, { method: metodo, headers: cuerpo ? { 'Content-Type': 'application/json' } : undefined, body: cuerpo ? JSON.stringify(cuerpo) : undefined, cache: 'no-store' });
    } catch (e) {
      throw new ErrorRed('sin-internet', 'No hay conexión a internet.');
    }
    if (r.status === 404) return null;
    if (r.status === 409) throw new ErrorRed('existe', 'Ya existe.');
    if (r.status === 403) throw new ErrorRed('sin-permiso', 'El juego conectado por internet aún no está activado en Firebase.');
    if (!r.ok) throw new ErrorRed('nube', 'La nube respondió con un error (' + r.status + ').');
    const t = await r.text();
    return t ? JSON.parse(t) : {};
  }
  return {
    nombre: 'nube',
    async crear(ruta, id, datos) { await pedir('POST', ruta, 'documentId=' + encodeURIComponent(id), { fields: aCampos(datos) }); },
    async leer(ruta) { const d = await pedir('GET', ruta); return d ? deCampos(d.fields) : null; },
    async listar(ruta) { const d = await pedir('GET', ruta, 'pageSize=40'); return ((d && d.documents) || []).map((x) => ({ id: x.name.split('/').pop(), datos: deCampos(x.fields) })); },
    async actualizar(ruta, datos) { const m = Object.keys(datos).map((k) => 'updateMask.fieldPaths=' + k).join('&'); await pedir('PATCH', ruta, m + '&currentDocument.exists=true', { fields: aCampos(datos) }); },
    async borrar(ruta) { try { await pedir('DELETE', ruta); } catch (e) { /* ya no estaba */ } }
  };
}

/** En el mismo equipo: localStorage es compartido entre pestañas del mismo sitio. */
export function almacenLocal() {
  const P = 'juma-senal/';
  const leer = (ruta) => { try { return JSON.parse(localStorage.getItem(P + ruta) || 'null'); } catch (e) { return null; } };
  return {
    nombre: 'local',
    async crear(ruta, id, datos) { const k = ruta + '/' + id; if (leer(k)) throw new ErrorRed('existe', 'Ya existe.'); localStorage.setItem(P + k, JSON.stringify(datos)); },
    async leer(ruta) { return leer(ruta); },
    async listar(ruta) {
      const out = [], pre = P + ruta + '/';
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(pre) && !k.slice(pre.length).includes('/')) out.push({ id: k.slice(pre.length), datos: JSON.parse(localStorage.getItem(k)) }); }
      return out;
    },
    async actualizar(ruta, datos) { const d = leer(ruta); if (!d) throw new ErrorRed('no-existe', 'No existe.'); localStorage.setItem(P + ruta, JSON.stringify(Object.assign(d, datos))); },
    async borrar(ruta) { localStorage.removeItem(P + ruta); }
  };
}

export function almacenPorDefecto() {
  return /[?&]senal=local\b/.test(location.search) ? almacenLocal() : almacenNube();
}

/* ---------------------------------------------------------------------
   Puente por internet (Firebase Realtime Database, por su API REST)
   Cada jugador tiene un buzón: salasRed/<código>/a/<id>/<remitente>/…
     f/q0000001 … mensajes fiables numerados (se entregan en orden)
     r/<clave>    lo último de cada tipo de mensaje rápido (posiciones)
   El buzón se escucha con EventSource (eventos «put» y «patch»).
   --------------------------------------------------------------------- */
async function urlPuente() {
  const q = location.search.match(/[?&]puente=([^&]+)/);
  if (q) return decodeURIComponent(q[1]).replace(/\/$/, '');
  const c = await asegurarConfig();
  if (!c) return null;
  return (c.databaseURL || (c.projectId ? `https://${c.projectId}-default-rtdb.firebaseio.com` : '')).replace(/\/$/, '') || null;
}

function crearPuente(base, codigo) {
  const raiz = `${base}/salasRed/${codigo}`;
  const json = (ruta) => `${raiz}/${ruta}.json`;
  async function pedir(metodo, ruta, cuerpo, intentos = 3) {
    for (let i = 0; i < intentos; i++) {
      try {
        const r = await fetch(json(ruta) + (metodo === 'GET' ? '?shallow=true' : '?print=silent'), { method: metodo, body: cuerpo === undefined ? undefined : JSON.stringify(cuerpo), cache: 'no-store' });
        if (r.ok) return true;
        if (r.status === 401 || r.status === 403 || r.status === 404) return false;
      } catch (e) { /* se reintenta */ }
      await espera(300 * (i + 1));
    }
    return false;
  }

  /** Escucha el buzón de `yo` y entrega cada mensaje una sola vez y en orden. */
  function escuchar(yo, alMensaje, alEstado) {
    const estado = new Map(); // remitente → { f: último fiable entregado, pend: Map, r: Map clave→n }
    let es = null, cerrado = false, fallos = 0;
    const de = (rem) => { if (!estado.has(rem)) estado.set(rem, { f: 0, pend: new Map(), r: new Map() }); return estado.get(rem); };
    function hoja(rem, tipo, clave, val) {
      if (!val || typeof val !== 'object' || typeof val.e !== 'string') return;
      const st = de(rem), n = Number(val.n) || 0;
      let env; try { env = JSON.parse(val.e); } catch (e) { return; }
      if (tipo === 'r') {
        if (n <= (st.r.get(clave) || 0)) return;
        st.r.set(clave, n);
        alMensaje(rem, env, true);
      } else if (tipo === 'f') {
        if (n <= st.f || st.pend.has(n)) return;
        st.pend.set(n, env);
        while (st.pend.has(st.f + 1)) { st.f++; const m = st.pend.get(st.f); st.pend.delete(st.f); alMensaje(rem, m, false); }
      }
    }
    function bajar(segs, d) {
      if (d === null || d === undefined) return;
      if (segs.length === 3) return hoja(segs[0], segs[1], segs[2], d);
      if (typeof d !== 'object') return;
      for (const k of Object.keys(d)) bajar(segs.concat(k), d[k]);
    }
    function tratar(ev) {
      let d; try { d = JSON.parse(ev.data); } catch (e) { return; }
      if (!d) return;
      fallos = 0;
      const segs = String(d.path || '/').split('/').filter(Boolean);
      bajar(segs, d.data);
    }
    function abrir() {
      if (cerrado) return;
      es = new EventSource(json('a/' + yo));
      es.addEventListener('open', () => { alEstado && alEstado('abierto'); });
      es.addEventListener('put', tratar);
      es.addEventListener('patch', tratar);
      es.addEventListener('cancel', () => { cerrado = true; if (es) es.close(); alEstado && alEstado('sin-permiso'); });
      es.onerror = () => {
        // El navegador reintenta solo; si se rinde, se vuelve a abrir unas cuantas veces
        fallos++;
        if (fallos > 12) { cerrado = true; if (es) es.close(); alEstado && alEstado('error'); return; }
        if (es && es.readyState === EventSource.CLOSED) { es = null; setTimeout(abrir, 1200 * Math.min(fallos, 5)); }
      };
    }
    abrir();
    return { cerrar() { cerrado = true; if (es) es.close(); es = null; } };
  }

  /** Envío de `yo` al buzón de `a`: fiables numerados y rápidos agrupados (lo último de cada uno). */
  function enlace(yo, a) {
    let seq = 0, n = 0, enCurso = false, cerrado = false, timer = null;
    const pend = new Map();
    function vaciar() {
      timer = null;
      if (cerrado || enCurso || !pend.size) return;
      const lote = {};
      for (const [k, env] of pend) lote[k] = { n: ++n, e: JSON.stringify(env) };
      pend.clear();
      enCurso = true;
      pedir('PATCH', `a/${a}/${yo}/r`, lote, 1).finally(() => { enCurso = false; if (pend.size && !timer) timer = setTimeout(vaciar, TICK_PUENTE); });
    }
    return {
      fiable(env) {
        if (cerrado) return;
        const k = ++seq;
        pedir('PUT', `a/${a}/${yo}/f/q${String(k).padStart(7, '0')}`, { n: k, e: JSON.stringify(env) }, 5);
      },
      rapido(env) {
        if (cerrado) return;
        const m = env.m || {};
        const clave = String((env.d || '') + '_' + (m.t || env.s || 'x') + (m.s != null ? '_' + m.s : '')).replace(/[.#$\[\]\/]/g, '_');
        pend.set(clave, env);
        if (!timer && !enCurso) timer = setTimeout(vaciar, TICK_PUENTE);
      },
      cerrar() { cerrado = true; clearTimeout(timer); pend.clear(); }
    };
  }

  return {
    escuchar,
    enlace,
    /** ¿Está activada la Realtime Database y se puede usar esta sala? */
    disponible: () => pedir('GET', 'a', undefined, 2),
    borrar: (ruta) => pedir('DELETE', ruta, undefined, 1),
    borrarTodo: () => fetch(`${raiz}.json`, { method: 'DELETE', cache: 'no-store' }).catch(() => {})
  };
}

/* ---------------------------------------------------------------------
   Tarjeta de presentación compacta (para el modo sin internet)
   Se guarda solo lo imprescindible de la SDP y se reconstruye al otro lado.
   --------------------------------------------------------------------- */
const hexABase64 = (hex) => btoa(String.fromCharCode(...hex.split(':').map((h) => parseInt(h, 16))));
const base64AHex = (b) => Array.from(atob(b), (c) => c.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase()).join(':');

export function comprimirSdp(sdp, tipo) {
  const linea = (re) => (sdp.match(re) || [])[1];
  const ufrag = linea(/a=ice-ufrag:(\S+)/), pwd = linea(/a=ice-pwd:(\S+)/), fp = linea(/a=fingerprint:sha-256 (\S+)/i), setup = linea(/a=setup:(\S+)/);
  if (!ufrag || !pwd || !fp) throw new ErrorRed('sdp', 'No se pudo preparar el código.');
  const cands = [];
  for (const m of sdp.matchAll(/a=candidate:\S+ 1 udp \d+ (\S+) (\d+) typ (host|srflx)/gi)) {
    const c = (m[3] === 'host' ? 'h' : 's') + m[1] + ',' + m[2];
    if (!cands.includes(c)) cands.push(c);
  }
  if (!cands.length) throw new ErrorRed('sin-red', 'Este equipo no está conectado a ninguna red wifi.');
  return ['J1', tipo === 'offer' ? 'o' : 'a', { actpass: 'x', active: 'c', passive: 'p' }[setup] || 'x', ufrag, pwd, hexABase64(fp), cands.slice(0, 5).join(';')].join('~');
}
export function descomprimirSdp(txt) {
  const p = String(txt || '').trim().replace(/\s+/g, '').split('~');
  if (p.length !== 7 || p[0] !== 'J1') throw new ErrorRed('codigo', 'Ese código no es válido. Cópialo completo.');
  const [, t, s, ufrag, pwd, fp, cands] = p;
  const tipo = t === 'o' ? 'offer' : 'answer';
  const lineas = [
    'v=0', 'o=- ' + (Date.now() % 1e12) + ' 2 IN IP4 127.0.0.1', 's=-', 't=0 0', 'a=group:BUNDLE 0', 'a=msid-semantic: WMS',
    'm=application 9 UDP/DTLS/SCTP webrtc-datachannel', 'c=IN IP4 0.0.0.0',
    'a=ice-ufrag:' + ufrag, 'a=ice-pwd:' + pwd, 'a=ice-options:trickle',
    'a=fingerprint:sha-256 ' + base64AHex(fp), 'a=setup:' + ({ x: 'actpass', c: 'active', p: 'passive' }[s] || 'actpass'),
    'a=mid:0', 'a=sctp-port:5000', 'a=max-message-size:262144'
  ];
  cands.split(';').filter(Boolean).forEach((c, i) => {
    const host = c[0] === 'h', [dir, puerto] = c.slice(1).split(',');
    lineas.push(`a=candidate:${i + 1} 1 udp ${host ? 2122260223 - i : 1686052607 - i} ${dir} ${puerto} typ ${host ? 'host' : 'srflx raddr 0.0.0.0 rport 0'} generation 0`);
  });
  lineas.push('a=end-of-candidates');
  return { type: tipo, sdp: lineas.join('\r\n') + '\r\n' };
}

/* ---------------------------------------------------------------------
   Conexión con otro equipo
   --------------------------------------------------------------------- */
function esperarIce(pc, ms) {
  if (pc.iceGatheringState === 'complete') return Promise.resolve();
  return new Promise((ok) => {
    const t = setTimeout(fin, ms);
    function fin() { clearTimeout(t); pc.removeEventListener('icegatheringstatechange', mira); ok(); }
    function mira() { if (pc.iceGatheringState === 'complete') fin(); }
    pc.addEventListener('icegatheringstatechange', mira);
  });
}
function nuevaConexion() {
  if (typeof RTCPeerConnection === 'undefined') throw new ErrorRed('sin-webrtc', 'Este navegador no permite el juego conectado.');
  // En las pruebas se puede simular que la conexión directa no se abre nunca
  if (forzarPuente()) return new RTCPeerConnection({ iceServers: [], iceTransportPolicy: 'relay' });
  return new RTCPeerConnection({ iceServers: ICE });
}
/** Qué direcciones encontró este equipo (para explicar por qué no conecta). */
function resumenDirecciones(sdp) {
  const t = { local: 0, mdns: 0, publica: 0 };
  for (const m of String(sdp || '').matchAll(/a=candidate:\S+ \d+ udp \d+ (\S+) \d+ typ (host|srflx)/gi)) {
    if (m[2] === 'srflx') t.publica++;
    else if (/\.local$/i.test(m[1])) t.mdns++;
    else t.local++;
  }
  return t;
}

/* ---------------------------------------------------------------------
   La red del juego
   --------------------------------------------------------------------- */
export function crearRed({ juego, nombre = 'Jugador', max = 6, almacen = null } = {}) {
  const oyentes = {};
  const emitir = (ev, ...a) => { for (const f of oyentes[ev] || []) { try { f(...a); } catch (e) { console.error(e); } } };
  const peers = new Map();     // id → { id, nombre, datos, pc, fiable, rapido, visto, rtt }
  const jugadores = new Map(); // id → { id, nombre, datos }
  let rol = null;              // 'anfitrion' | 'invitado'
  let miId = null, codigo = null, abierta = false, cerrada = false, sondeo = null, latido = null;
  let datosPropios = {};
  const tienda = almacen || almacenPorDefecto();
  const procesados = new Set();
  let puente = null;        // conexión con la Realtime Database (si está disponible)
  let buzon = null;         // mi buzón en el puente
  let miBuzon = null;       // id de mi buzón (anfitrión: 'h'; invitado: el id de su pedido)
  let diagnostico = '';

  function info(p) { return { id: p.id, nombre: p.nombre, datos: p.datos || {} }; }
  function listaJugadores() { return Array.from(jugadores.values()); }

  /* ---- envío ---- */
  const directa = (p) => !!(p.fiable && p.fiable.readyState === 'open');
  const unido = (p) => directa(p) || !!p.puente;
  function mandarA(p, env, rapido) {
    // Por la conexión directa si está abierta; si no, por el puente de internet
    if (!directa(p) && p.puente) { if (rapido) p.puente.rapido(env); else p.puente.fiable(env); return; }
    const c = rapido ? p.rapido : p.fiable;
    if (!c || c.readyState !== 'open') { if (rapido && p.fiable && p.fiable.readyState === 'open' && !p.rapido) p.fiable.send(JSON.stringify(env)); return; }
    if (rapido && c.bufferedAmount > 65536) return; // va atrasado: se descarta la posición vieja
    try { c.send(JSON.stringify(env)); } catch (e) { /* se cerró */ }
  }
  function enviar(m, op = {}) {
    if (cerrada) return;
    const a = op.a ?? null, rapido = !!op.rapido;
    if (rol === 'anfitrion') {
      const env = { d: ID_ANFITRION, a, m };
      if (a === null) { for (const p of peers.values()) if (p.id !== op.excepto) mandarA(p, env, rapido); }
      else if (a !== ID_ANFITRION) { const p = peers.get(a); if (p) mandarA(p, env, rapido); }
    } else if (rol === 'invitado') {
      const p = peers.get(ID_ANFITRION); if (p) mandarA(p, { a, m }, rapido);
    }
  }
  // Los latidos (ping/pong) van por el canal rápido: por el puente no se guardan uno tras otro
  function sistema(p, s, extra) { mandarA(p, Object.assign({ s }, extra || {}), s === 'ping' || s === 'pong'); }

  /* ---- recepción ---- */
  function recibir(p, txt, rapido) {
    let env;
    if (typeof txt === 'string') { try { env = JSON.parse(txt); } catch (e) { return; } } else env = txt;
    if (!env) return;
    p.visto = performance.now();
    if (env.s) return sistemaRecibido(p, env);
    if (rol === 'anfitrion') {
      const de = p.id, a = env.a ?? null;
      if (a === null) { emitir('mensaje', env.m, de); for (const q of peers.values()) if (q !== p) mandarA(q, { d: de, a: null, m: env.m }, rapido); }
      else if (a === ID_ANFITRION) emitir('mensaje', env.m, de);
      else { const q = peers.get(a); if (q) mandarA(q, { d: de, a, m: env.m }, rapido); }
    } else {
      emitir('mensaje', env.m, env.d);
    }
  }
  function sistemaRecibido(p, env) {
    switch (env.s) {
      case 'ping': sistema(p, 'pong', { t: env.t }); break;
      case 'pong': p.rtt = performance.now() - env.t; break;
      case 'hola': // el anfitrión da la bienvenida y el número del invitado
        miId = env.id; jugadores.clear();
        for (const j of env.jugadores) jugadores.set(j.id, j);
        emitir('lista', listaJugadores());
        if (p._alHola) p._alHola();
        break;
      case 'presento': // el invitado dice su nombre y sus datos
        if (rol !== 'anfitrion') break;
        // Si llega dos veces (por la directa y por el puente), solo se le vuelve a dar la bienvenida
        if (jugadores.has(p.id)) { sistema(p, 'hola', { id: p.id, jugadores: listaJugadores() }); break; }
        p.nombre = String(env.nombre || p.nombre).slice(0, 24); p.datos = env.datos || {};
        jugadores.set(p.id, info(p));
        sistema(p, 'hola', { id: p.id, jugadores: listaJugadores() });
        for (const q of peers.values()) if (q !== p) sistema(q, 'entra', { jugador: info(p) });
        emitir('entra', info(p)); emitir('lista', listaJugadores());
        break;
      case 'entra': jugadores.set(env.jugador.id, env.jugador); emitir('entra', env.jugador); emitir('lista', listaJugadores()); break;
      case 'sale': { const j = jugadores.get(env.id); jugadores.delete(env.id); if (j) emitir('sale', j); emitir('lista', listaJugadores()); break; }
      case 'datos': {
        const id = rol === 'anfitrion' ? p.id : env.id;
        const j = jugadores.get(id); if (!j) break;
        j.datos = env.datos || {};
        if (rol === 'anfitrion') { p.datos = j.datos; for (const q of peers.values()) if (q !== p) sistema(q, 'datos', { id, datos: j.datos }); }
        emitir('lista', listaJugadores());
        break;
      }
      case 'adios': quitarPeer(p, 'se fue'); break;
    }
  }

  function prepararCanal(p, canal) {
    const rapido = canal.label === 'rapido';
    if (rapido) p.rapido = canal; else p.fiable = canal;
    canal.onmessage = (e) => recibir(p, e.data, rapido);
    canal.onclose = () => {
      if (rapido || p.puente) return;
      // Se cortó la conexión directa: si hay puente se sigue por internet
      if (p._rescate) p._rescate(); else quitarPeer(p, 'se cortó la conexión');
    };
  }

  function quitarPeer(p, motivo) {
    if (!peers.has(p.id)) return;
    peers.delete(p.id);
    try { p.pc && p.pc.close(); } catch (e) { /* ya cerrada */ }
    if (p.puente) {
      p.puente.cerrar();
      if (puente && p.idSenal) { puente.borrar('a/' + p.idSenal); puente.borrar('a/' + ID_ANFITRION + '/' + p.idSenal); }
    }
    if (rol === 'anfitrion') {
      const j = jugadores.get(p.id); jugadores.delete(p.id);
      for (const q of peers.values()) sistema(q, 'sale', { id: p.id });
      if (j) emitir('sale', j, motivo);
      emitir('lista', listaJugadores());
    } else if (!cerrada) {
      // El invitado perdió al anfitrión: la sala terminó
      cerrar(false);
      emitir('cerrada', motivo === 'se fue' ? 'El anfitrión cerró la sala.' : 'Se perdió la conexión con el anfitrión.');
    }
  }

  function empezarLatido() {
    clearInterval(latido);
    let anterior = performance.now();
    latido = setInterval(() => {
      const ahora = performance.now();
      // Si este equipo estuvo ocupado (cargando un mundo), los mensajes de los demás siguen en cola:
      // no se cuenta ese tiempo como silencio de los demás
      const bloqueado = ahora - anterior > LATIDO * 2.5;
      anterior = ahora;
      if (bloqueado) for (const p of peers.values()) if (p.visto) p.visto = ahora;
      for (const p of Array.from(peers.values())) {
        if (unido(p)) sistema(p, 'ping', { t: ahora });
        if (p.visto && ahora - p.visto > SIN_RESPUESTA) quitarPeer(p, 'no responde');
      }
    }, LATIDO);
  }

  /* ---- anfitrión ---- */
  async function aceptarOferta(oferta, nombreInv, idSenal) {
    const id = 'j' + azar(5, 'abcdefghijkmnpqrstuvwxyz23456789');
    const pc = nuevaConexion();
    const p = { id, nombre: nombreInv || 'Jugador', datos: {}, pc, fiable: null, rapido: null, visto: 0, rtt: 0, idSenal };
    peers.set(id, p);
    pc.ondatachannel = (e) => prepararCanal(p, e.channel);
    // Si la conexión directa falla, el invitado puede seguir por el puente: se le espera un poco más
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed' && !p.puente && !puente) quitarPeer(p, 'no se pudo conectar'); };
    // Si la directa se corta a mitad de partida y hay puente, se le da tiempo al invitado para pasarse a él
    p._rescate = () => {
      if (!puente) return quitarPeer(p, 'se cortó la conexión');
      setTimeout(() => { if (peers.get(p.id) === p && !unido(p)) quitarPeer(p, 'se cortó la conexión'); }, 10000);
    };
    await pc.setRemoteDescription(oferta);
    await pc.setLocalDescription(await pc.createAnswer());
    await esperarIce(pc, ESPERA_ICE);
    // Si nunca llega a conectar (ni directo ni por el puente), se libera el lugar
    setTimeout(() => { if (peers.get(id) === p && !unido(p)) quitarPeer(p, 'no se pudo conectar'); }, ESPERA_CANAL + ESPERA_PUENTE);
    return pc.localDescription;
  }

  async function crearSala() {
    rol = 'anfitrion'; miId = ID_ANFITRION; cerrada = false;
    jugadores.clear(); jugadores.set(miId, { id: miId, nombre, datos: datosPropios });
    for (let intento = 0; intento < 6; intento++) {
      const c = azar(4);
      try {
        await tienda.crear(COLECCION, c, { juego, creado: new Date() });
        codigo = c; break;
      } catch (e) {
        if (e.codigo !== 'existe') throw e;
        // Una sala vieja (de hace más de 3 horas) se puede reutilizar
        const vieja = await tienda.leer(COLECCION + '/' + c).catch(() => null);
        if (vieja && vieja.creado && Date.now() - new Date(vieja.creado).getTime() > 3 * 3600e3) { await tienda.borrar(COLECCION + '/' + c); intento--; }
      }
    }
    if (!codigo) throw new ErrorRed('nube', 'No se pudo crear la sala. Prueba otra vez.');
    abierta = true; empezarLatido(); sondear();
    abrirPuenteAnfitrion();
    emitir('lista', listaJugadores());
    return codigo;
  }

  /* ---- puente ---- */
  let puenteProbado = null;
  async function prepararPuente(cod) {
    if (puente) return puente;
    if (puenteProbado === cod) return null; // ya se vio que no está activado
    const base = await urlPuente().catch(() => null);
    if (!base || typeof EventSource === 'undefined' || typeof fetch === 'undefined') return null;
    const pt = crearPuente(base, cod);
    if (!(await pt.disponible())) { puenteProbado = cod; return null; }
    if (cerrada) return null;
    puente = pt;
    return puente;
  }
  async function abrirPuenteAnfitrion() {
    const pt = await prepararPuente(codigo);
    if (!pt || cerrada) return;
    // Una sala vieja con el mismo código pudo dejar mensajes: se empieza de cero
    await pt.borrarTodo();
    if (cerrada) return;
    miBuzon = ID_ANFITRION;
    buzon = pt.escuchar(ID_ANFITRION, (rem, env, rapido) => {
      // ¿Quién es? El id del buzón del invitado es el de su pedido
      let p = null;
      for (const q of peers.values()) if (q.idSenal === rem) { p = q; break; }
      if (!p) {
        // Entra por el puente un invitado cuya conexión directa ya se había dado por perdida
        if (!abierta || peers.size + 1 >= max || env.s !== 'presento') return;
        p = { id: 'j' + azar(5, 'abcdefghijkmnpqrstuvwxyz23456789'), nombre: 'Jugador', datos: {}, pc: null, fiable: null, rapido: null, visto: 0, rtt: 0, idSenal: rem };
        peers.set(p.id, p);
      }
      if (!p.puente) p.puente = pt.enlace(ID_ANFITRION, rem);
      recibir(p, env, rapido);
    }, (est) => { if (est === 'sin-permiso') { puente = null; } });
  }

  /** Anfitrión sin internet: también vale para recibir invitados por código QR. */
  function crearSalaManual() {
    rol = 'anfitrion'; miId = ID_ANFITRION; cerrada = false; abierta = true; codigo = null;
    jugadores.clear(); jugadores.set(miId, { id: miId, nombre, datos: datosPropios });
    empezarLatido(); emitir('lista', listaJugadores());
  }
  async function responderCodigo(texto) {
    if (rol !== 'anfitrion' || cerrada) crearSalaManual();
    if (peers.size + 1 >= max) throw new ErrorRed('llena', 'La sala está llena.');
    const oferta = descomprimirSdp(texto);
    if (oferta.type !== 'offer') throw new ErrorRed('codigo', 'Ese es un código de respuesta: escanea el código del invitado.');
    const resp = await aceptarOferta(oferta, 'Jugador');
    return comprimirSdp(resp.sdp, 'answer');
  }

  async function sondear() {
    clearTimeout(sondeo);
    if (cerrada || !codigo || codigo === 'QR' || rol !== 'anfitrion') return;
    try {
      const pedidos = await tienda.listar(COLECCION + '/' + codigo + '/pedidos');
      for (const { id, datos } of pedidos) {
        if (procesados.has(id) || datos.respuesta) continue;
        procesados.add(id);
        const ruta = COLECCION + '/' + codigo + '/pedidos/' + id;
        // Con la partida en marcha no entra nadie: se le avisa para que espere
        if (!abierta) { tienda.actualizar(ruta, { respuesta: 'EMPEZADA' }).catch(() => {}); continue; }
        if (peers.size + 1 >= max) { tienda.actualizar(ruta, { respuesta: 'LLENA' }).catch(() => {}); continue; }
        try {
          if (!datos.oferta) throw new ErrorRed('sin-webrtc', 'El invitado no tiene conexión directa');
          const resp = await aceptarOferta({ type: 'offer', sdp: datos.oferta }, datos.nombre, id);
          await tienda.actualizar(ruta, { respuesta: resp.sdp });
        } catch (e) {
          // Sin conexión directa posible (en este equipo o en el del invitado): que entre por el puente
          if (puente) tienda.actualizar(ruta, { respuesta: 'PUENTE' }).catch(() => {});
          else console.warn('No se pudo responder a', id, e);
        }
      }
    } catch (e) {
      emitir('aviso', e.message || 'Problema con la nube');
    }
    sondeo = setTimeout(sondear, abierta ? 1000 : 3000);
  }

  /* ---- invitado ---- */
  async function prepararInvitado(soloPuenteSiHaceFalta = false) {
    rol = 'invitado'; cerrada = false;
    if (soloPuenteSiHaceFalta && typeof RTCPeerConnection === 'undefined') {
      // Este navegador no tiene conexión directa: se usará solo el puente
      const p = { id: ID_ANFITRION, nombre: 'Anfitrión', datos: {}, pc: null, fiable: null, rapido: null, visto: 0, rtt: 0 };
      peers.set(ID_ANFITRION, p);
      return p;
    }
    const pc = nuevaConexion();
    const p = { id: ID_ANFITRION, nombre: 'Anfitrión', datos: {}, pc, fiable: null, rapido: null, visto: 0, rtt: 0 };
    peers.set(ID_ANFITRION, p);
    prepararCanal(p, pc.createDataChannel('fiable', { ordered: true }));
    prepararCanal(p, pc.createDataChannel('rapido', { ordered: false, maxRetransmits: 0 }));
    pc.onconnectionstatechange = () => {
      if (pc.connectionState !== 'failed') return;
      if (p._alFallar) p._alFallar();
      else if (p.puente) return;
      else if (p._rescate) p._rescate();
      else quitarPeer(p, 'no se pudo conectar');
    };
    await pc.setLocalDescription(await pc.createOffer());
    await esperarIce(pc, ESPERA_ICE);
    return p;
  }
  /**
   * Espera la bienvenida del anfitrión. Primero por la conexión directa; si no se abre a tiempo
   * (o falla) y hay puente (`conPuente` devuelve el enlace), sigue por internet.
   */
  function esperarBienvenida(p, conPuente) {
    return new Promise((ok, mal) => {
      let hecho = false, tPuente = null, t = null;
      const fallar = () => {
        if (hecho) return; hecho = true; clearTimeout(tPuente); clearTimeout(t);
        quitarPeerSilencioso(p);
        const d = resumenDirecciones(p.pc && p.pc.localDescription && p.pc.localDescription.sdp);
        diagnostico = `directa: no se abrió · direcciones: ${d.local} locales, ${d.mdns} ocultas, ${d.publica} públicas · puente: ${p.puente ? 'sin respuesta' : 'no disponible'}`;
        mal(new ErrorRed('no-conecta', p.puente
          ? 'No se pudo conectar con el anfitrión ni directo ni por internet. Revisen que los dos tengan internet y prueben otra vez.'
          : 'No se pudo conectar con el anfitrión. La conexión directa no funcionó en esta red.'));
      };
      t = setTimeout(fallar, ESPERA_CANAL);
      p._alHola = () => {
        if (hecho) return;
        hecho = true; clearTimeout(t); clearTimeout(tPuente); p._alFallar = null;
        // Más adelante, si se corta la directa, se sigue por el puente
        if (conPuente) p._rescate = async () => {
          if (p.puente) return;
          const enl = await conPuente().catch(() => null);
          if (!enl) return quitarPeer(p, 'se cortó la conexión');
          p.puente = enl;
          sistema(p, 'ping', { t: performance.now() });
        };
        empezarLatido(); ok();
      };
      const presentar = () => { if (!hecho) sistema(p, 'presento', { nombre, datos: datosPropios }); };
      const usarPuente = async () => {
        clearTimeout(tPuente); tPuente = null;
        if (hecho || p.puente || directa(p) || !conPuente) return;
        const enl = await conPuente().catch(() => null);
        if (hecho || directa(p)) { if (enl) enl.cerrar(); return; }
        if (!enl) return; // sin puente: sigue esperando la directa hasta el final
        p.puente = enl;
        clearTimeout(t); t = setTimeout(fallar, ESPERA_PUENTE);
        presentar();
      };
      p._alFallar = usarPuente;
      if (!p.fiable || (p.pc && p.pc.signalingState === 'closed')) usarPuente();
      else if (p.fiable.readyState === 'open') presentar();
      else {
        p.fiable.addEventListener('open', presentar, { once: true });
        tPuente = setTimeout(usarPuente, forzarPuente() ? 1500 : ESPERA_DIRECTA);
      }
    });
  }
  function quitarPeerSilencioso(p) {
    peers.delete(p.id);
    try { p.pc && p.pc.close(); } catch (e) { /* nada */ }
    if (p.puente) { p.puente.cerrar(); p.puente = null; }
    if (buzon) { buzon.cerrar(); buzon = null; }
  }

  async function unirse(cod) {
    cod = String(cod || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (cod.length !== 4) throw new ErrorRed('codigo', 'El código tiene 4 letras o números.');
    const sala = await tienda.leer(COLECCION + '/' + cod);
    if (!sala) throw new ErrorRed('no-existe', 'No hay ninguna sala con el código ' + cod + '.');
    if (sala.juego && sala.juego !== juego) throw new ErrorRed('otro-juego', 'Esa sala es de otro juego.');
    const p = await prepararInvitado(true);
    const id = azar(12, 'abcdefghijkmnpqrstuvwxyz23456789');
    const ruta = COLECCION + '/' + cod + '/pedidos/' + id;
    await tienda.crear(COLECCION + '/' + cod + '/pedidos', id, { oferta: p.pc ? p.pc.localDescription.sdp : '', nombre: String(nombre).slice(0, 24), creado: new Date() });
    const limite = Date.now() + ESPERA_RESPUESTA;
    let resp = null;
    while (!resp && Date.now() < limite && peers.has(ID_ANFITRION)) {
      await espera(800);
      const d = await tienda.leer(ruta).catch(() => null);
      if (d && d.respuesta) resp = d.respuesta;
    }
    if (!resp) { quitarPeerSilencioso(p); tienda.borrar(ruta); throw new ErrorRed('sin-respuesta', 'El anfitrión no respondió. Revisa el código.'); }
    if (resp === 'LLENA') { quitarPeerSilencioso(p); tienda.borrar(ruta); throw new ErrorRed('llena', 'La sala está llena.'); }
    if (resp === 'EMPEZADA') { quitarPeerSilencioso(p); tienda.borrar(ruta); throw new ErrorRed('empezada', 'La partida ya empezó. Espera a que vuelvan a la sala.'); }
    if (resp !== 'PUENTE' && p.pc) await p.pc.setRemoteDescription({ type: 'answer', sdp: resp });
    else if (p.pc) { try { p.pc.close(); } catch (e) { /* nada */ } }
    // Puente por internet para este invitado: escucha su buzón y escribe en el del anfitrión
    const conPuente = async () => {
      const pt = await prepararPuente(cod);
      if (!pt) return null;
      miBuzon = id;
      if (!buzon) {
        buzon = pt.escuchar(id, (rem, env, rapido) => {
          const q = peers.get(ID_ANFITRION);
          if (rem === ID_ANFITRION && q) recibir(q, env, rapido);
        });
      }
      return pt.enlace(id, ID_ANFITRION);
    };
    try { await esperarBienvenida(p, conPuente); } finally { tienda.borrar(ruta); }
    codigo = cod;
  }

  /** Invitado sin internet: devuelve el código que hay que mostrarle al anfitrión. */
  let invitadoManual = null;
  async function codigoInvitado() {
    if (invitadoManual) quitarPeerSilencioso(invitadoManual);
    invitadoManual = await prepararInvitado();
    return comprimirSdp(invitadoManual.pc.localDescription.sdp, 'offer');
  }
  async function completarInvitado(texto) {
    const p = invitadoManual;
    if (!p) throw new ErrorRed('codigo', 'Primero crea tu código.');
    const resp = descomprimirSdp(texto);
    if (resp.type !== 'answer') throw new ErrorRed('codigo', 'Ese es tu propio código: escanea el que te muestra el anfitrión.');
    await p.pc.setRemoteDescription(resp);
    await esperarBienvenida(p);
    invitadoManual = null; codigo = 'QR';
  }

  /* ---- común ---- */
  function ponerDatos(d) {
    datosPropios = Object.assign({}, d);
    if (!miId) return;
    const j = jugadores.get(miId); if (j) j.datos = datosPropios;
    if (rol === 'anfitrion') for (const p of peers.values()) sistema(p, 'datos', { id: miId, datos: datosPropios });
    else { const p = peers.get(ID_ANFITRION); if (p) sistema(p, 'datos', { datos: datosPropios }); }
    emitir('lista', listaJugadores());
  }
  function ponerNombre(n) { nombre = String(n || 'Jugador').slice(0, 24); const j = miId && jugadores.get(miId); if (j) j.nombre = nombre; }

  /** Abre o cierra la entrada de jugadores nuevos (al empezar la partida se cierra). */
  function abrirEntrada(v) {
    abierta = !!v;
    sondear();
  }

  function cerrar(avisar = true) {
    if (cerrada) return;
    cerrada = true; abierta = false;
    clearTimeout(sondeo); clearInterval(latido);
    for (const p of peers.values()) { if (avisar) sistema(p, 'adios'); try { p.pc && p.pc.close(); } catch (e) { /* nada */ } }
    // El «adiós» por el puente sale un instante después: se cierra el envío y el buzón tras enviarlo
    const enlaces = Array.from(peers.values()).map((p) => p.puente).filter(Boolean);
    peers.clear();
    if (buzon) { buzon.cerrar(); buzon = null; }
    const pt = puente;
    setTimeout(() => {
      for (const e of enlaces) e.cerrar();
      if (pt) { if (rol === 'anfitrion') pt.borrarTodo(); else if (miBuzon) { pt.borrar('a/' + miBuzon); pt.borrar('a/' + ID_ANFITRION + '/' + miBuzon); } }
    }, 1500);
    puente = null;
    if (rol === 'anfitrion' && codigo && codigo !== 'QR') tienda.borrar(COLECCION + '/' + codigo);
  }
  addEventListener('pagehide', () => cerrar());

  return {
    get esAnfitrion() { return rol === 'anfitrion'; },
    get rol() { return rol; },
    get miId() { return miId; },
    get codigo() { return codigo; },
    get conectada() { return !cerrada && (rol === 'anfitrion' || peers.has(ID_ANFITRION)); },
    get jugadores() { return listaJugadores(); },
    get almacen() { return tienda.nombre; },
    /** 'directa' o 'internet' para un jugador (el anfitrión ve la de cada uno; el invitado, la suya). */
    via(id) {
      const p = rol === 'anfitrion' ? peers.get(id) : peers.get(ID_ANFITRION);
      if (!p) return '';
      return directa(p) ? 'directa' : p.puente ? 'internet' : '';
    },
    get diagnostico() { return diagnostico; },
    ping(id) { const p = peers.get(id || ID_ANFITRION); return p ? Math.round(p.rtt) : 0; },
    on(ev, f) { (oyentes[ev] = oyentes[ev] || []).push(f); return () => { oyentes[ev] = oyentes[ev].filter((x) => x !== f); }; },
    crearSala, crearSalaManual, responderCodigo, unirse, codigoInvitado, completarInvitado,
    enviar, ponerDatos, ponerNombre, abrirEntrada, cerrar,
    ID_ANFITRION
  };
}
