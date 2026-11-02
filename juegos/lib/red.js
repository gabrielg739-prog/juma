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
  return new RTCPeerConnection({ iceServers: ICE });
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

  function info(p) { return { id: p.id, nombre: p.nombre, datos: p.datos || {} }; }
  function listaJugadores() { return Array.from(jugadores.values()); }

  /* ---- envío ---- */
  function mandarA(p, env, rapido) {
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
  function sistema(p, s, extra) { mandarA(p, Object.assign({ s }, extra || {}), false); }

  /* ---- recepción ---- */
  function recibir(p, txt, rapido) {
    let env; try { env = JSON.parse(txt); } catch (e) { return; }
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
    canal.onclose = () => { if (!rapido) quitarPeer(p, 'se cortó la conexión'); };
  }

  function quitarPeer(p, motivo) {
    if (!peers.has(p.id)) return;
    peers.delete(p.id);
    try { p.pc.close(); } catch (e) { /* ya cerrada */ }
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
        if (p.fiable && p.fiable.readyState === 'open') sistema(p, 'ping', { t: ahora });
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
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') quitarPeer(p, 'no se pudo conectar'); };
    await pc.setRemoteDescription(oferta);
    await pc.setLocalDescription(await pc.createAnswer());
    await esperarIce(pc, ESPERA_ICE);
    // Si nunca llega a conectar, se libera el lugar
    setTimeout(() => { if (peers.get(id) === p && !(p.fiable && p.fiable.readyState === 'open')) quitarPeer(p, 'no se pudo conectar'); }, ESPERA_CANAL + 5000);
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
    emitir('lista', listaJugadores());
    return codigo;
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
          const resp = await aceptarOferta({ type: 'offer', sdp: datos.oferta }, datos.nombre, id);
          await tienda.actualizar(ruta, { respuesta: resp.sdp });
        } catch (e) { console.warn('No se pudo responder a', id, e); }
      }
    } catch (e) {
      emitir('aviso', e.message || 'Problema con la nube');
    }
    sondeo = setTimeout(sondear, abierta ? 1000 : 3000);
  }

  /* ---- invitado ---- */
  async function prepararInvitado() {
    rol = 'invitado'; cerrada = false;
    const pc = nuevaConexion();
    const p = { id: ID_ANFITRION, nombre: 'Anfitrión', datos: {}, pc, fiable: null, rapido: null, visto: 0, rtt: 0 };
    peers.set(ID_ANFITRION, p);
    prepararCanal(p, pc.createDataChannel('fiable', { ordered: true }));
    prepararCanal(p, pc.createDataChannel('rapido', { ordered: false, maxRetransmits: 0 }));
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') quitarPeer(p, 'no se pudo conectar'); };
    await pc.setLocalDescription(await pc.createOffer());
    await esperarIce(pc, ESPERA_ICE);
    return p;
  }
  function esperarBienvenida(p) {
    return new Promise((ok, mal) => {
      const t = setTimeout(() => { quitarPeerSilencioso(p); mal(new ErrorRed('no-conecta', 'No se pudo conectar con el anfitrión. ¿Están en la misma wifi?')); }, ESPERA_CANAL);
      p._alHola = () => { clearTimeout(t); empezarLatido(); ok(); };
      const presentar = () => sistema(p, 'presento', { nombre, datos: datosPropios });
      if (p.fiable.readyState === 'open') presentar(); else p.fiable.addEventListener('open', presentar, { once: true });
    });
  }
  function quitarPeerSilencioso(p) { peers.delete(p.id); try { p.pc.close(); } catch (e) { /* nada */ } }

  async function unirse(cod) {
    cod = String(cod || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (cod.length !== 4) throw new ErrorRed('codigo', 'El código tiene 4 letras o números.');
    const sala = await tienda.leer(COLECCION + '/' + cod);
    if (!sala) throw new ErrorRed('no-existe', 'No hay ninguna sala con el código ' + cod + '.');
    if (sala.juego && sala.juego !== juego) throw new ErrorRed('otro-juego', 'Esa sala es de otro juego.');
    const p = await prepararInvitado();
    const id = azar(12, 'abcdefghijkmnpqrstuvwxyz23456789');
    const ruta = COLECCION + '/' + cod + '/pedidos/' + id;
    await tienda.crear(COLECCION + '/' + cod + '/pedidos', id, { oferta: p.pc.localDescription.sdp, nombre: String(nombre).slice(0, 24), creado: new Date() });
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
    await p.pc.setRemoteDescription({ type: 'answer', sdp: resp });
    try { await esperarBienvenida(p); } finally { tienda.borrar(ruta); }
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
    for (const p of peers.values()) { if (avisar) sistema(p, 'adios'); try { p.pc.close(); } catch (e) { /* nada */ } }
    peers.clear();
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
    ping(id) { const p = peers.get(id || ID_ANFITRION); return p ? Math.round(p.rtt) : 0; },
    on(ev, f) { (oyentes[ev] = oyentes[ev] || []).push(f); return () => { oyentes[ev] = oyentes[ev].filter((x) => x !== f); }; },
    crearSala, crearSalaManual, responderCodigo, unirse, codigoInvitado, completarInvitado,
    enviar, ponerDatos, ponerNombre, abrirEntrada, cerrar,
    ID_ANFITRION
  };
}
