/* Puntos Misioneros de JUMA Duaca.
   Puntos = tiempo jugado (horas × PUNTOS_POR_HORA) + bonificaciones por partida.
   El tiempo lo mide la app mientras el juego está abierto y visible; las bonificaciones
   llegan desde cada juego con su total. Para sumar un nivel o un juego, edita NIVELES o JUEGOS. */

/* Ritmo base: 100 pts por hora (una hora de juego = 100 pts) */
export const PUNTOS_POR_HORA = 100;
/* Una sola sesión cuenta como máximo 3 horas (evita que una pestaña abierta suba los puntos) */
export const TOPE_SESION_SEG = 3 * 3600;
/* Bonificación máxima que puede dar un solo aviso de un juego sin registro propio */
const TOPE_PARTIDA = 200;

/* Curva exponencial: cada nivel exige bastante más que el anterior (≈10 h, 60 h y 300 h de juego) */
export const NIVELES = [
  { id: 1, nombre: 'Misionero novato', desde: 0 },
  { id: 2, nombre: 'Misionero fiel', desde: 1000 },
  { id: 3, nombre: 'Misionero entregado', desde: 6000 },
  { id: 4, nombre: 'Misionero de la Consolata', desde: 30000 },
];

/* Juegos que dan bonificación. «tope» limita lo que suma un solo aviso del juego. */
export const JUEGOS = {
  kart: { nombre: 'Carrera de la fe', tope: 300 },
  angel: { nombre: 'Ángel que vuela', tope: 150 },
  huir: { nombre: 'Huyendo del pecado', tope: 200 },
  bloques: { nombre: 'Bloques de fe', tope: 200 },
  caney: { nombre: 'Cuentas de gracia', tope: 200 },
  doom: { nombre: 'Luz contra el pecado', tope: 200 },
  camino: { nombre: 'Camino del misionero', tope: 200 },
  palabras: { nombre: 'Palabras JUMA', tope: 200 },
};

const CLAVE = 'juma-mis-v1';
let uid = null;
let datos = { seg: 0, bonus: 0, max: {}, piso: 0 };
let sesion = null, tic = null, ultimoGuardado = 0;
const escuchas = [];

function leerTodo() { try { return JSON.parse(localStorage.getItem(CLAVE) || '{}') || {}; } catch (e) { return {}; } }
function cargar() {
  const d = uid ? leerTodo()[uid] : null;
  return { seg: Number(d && d.seg) || 0, bonus: Number(d && d.bonus) || 0, max: (d && d.max) || {}, piso: Number(d && d.piso) || 0 };
}
function guardarLocal() {
  if (!uid) return;
  const todo = leerTodo(); todo[uid] = datos;
  try { localStorage.setItem(CLAVE, JSON.stringify(todo)); } catch (e) { /* almacenamiento lleno o bloqueado */ }
  ultimoGuardado = Date.now();
}
function emitir() { for (const fn of escuchas) { try { fn(); } catch (e) { /* una escucha rota no para a las demás */ } } }

/* Puntos totales: el tiempo ya jugado más la sesión en curso */
export function puntos() {
  const seg = datos.seg + (sesion ? sesion.seg : 0);
  /* «piso» = lo que ya estaba guardado en la nube (por si se juega desde otro teléfono): nunca se baja */
  return Math.max(datos.piso, Math.floor(seg * PUNTOS_POR_HORA / 3600) + datos.bonus);
}

/* Fija el mínimo de puntos con el valor guardado en la nube */
export function fijarPiso(n) {
  n = Math.floor(Number(n) || 0);
  if (n > datos.piso) { datos.piso = n; guardarLocal(); emitir(); }
}

/* Nivel actual, siguiente nivel y avance (0 a 1) */
export function nivelDe(pts) {
  let i = 0;
  NIVELES.forEach((n, k) => { if (pts >= n.desde) i = k; });
  const act = NIVELES[i], sig = NIVELES[i + 1] || null;
  const progreso = sig ? Math.min(1, Math.max(0, (pts - act.desde) / (sig.desde - act.desde))) : 1;
  return { ...act, indice: i, siguiente: sig, progreso, faltan: sig ? Math.max(0, sig.desde - pts) : 0 };
}

export function estado() {
  const pts = puntos();
  const seg = datos.seg + (sesion ? sesion.seg : 0);
  return { pts, horas: seg / 3600, bonus: datos.bonus, nivel: nivelDe(pts) };
}

/* Quién juega: al cambiar de cuenta se carga su progreso (sin cuenta, todo es 0) */
export function usuario(id) {
  if (id === uid) return;
  terminarSesion();
  uid = id || null;
  datos = cargar();
  emitir();
}

/* Suscribirse a cambios (tiempo, bonificaciones, cuenta). Devuelve nada; la barra se repinta sola. */
export function alCambiar(fn) { escuchas.push(fn); }

export function iniciarSesion(juegoId) {
  if (sesion || !uid) return;
  sesion = { juego: juegoId, seg: 0 };
  tic = setInterval(() => {
    if (!sesion) return;
    if (!document.hidden) sesion.seg = Math.min(TOPE_SESION_SEG, sesion.seg + 1);
    if (Date.now() - ultimoGuardado > 15000) guardarLocal();
    emitir();
  }, 1000);
}

export function terminarSesion() {
  if (tic) { clearInterval(tic); tic = null; }
  if (!sesion) return;
  datos.seg += sesion.seg;
  sesion = null;
  guardarLocal();
  emitir();
}

/* Bonificación: solo cuenta lo que supera el mejor total ya registrado de ese juego */
export function partida(juegoId, total) {
  const id = String(juegoId || 'otro').slice(0, 20);
  const t = Math.max(0, Number(total) || 0);
  const previo = datos.max[id] || 0;
  if (t > previo) {
    const tope = (JUEGOS[id] && JUEGOS[id].tope) || TOPE_PARTIDA;
    datos.bonus += Math.min(t - previo, tope);
    datos.max[id] = t;
  }
  guardarLocal();
  emitir();
}

/* Al salir de la página se guarda lo jugado */
addEventListener('pagehide', terminarSesion);
