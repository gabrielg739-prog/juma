/* Carrera de la fe · punto de entrada: menús, flujo de la carrera (sobrevuelo, cuenta, carrera, llegada, podio), copa, puntos y bucle de juego */
import * as THREE from '../lib/three.module.min.js';
import { PISTAS, PERSONAJES, VUELTAS, VMAX, PUNTOS_POS, CLAVE, CLAVE_AJUSTES, OBJETOS } from './datos.js';
import { construirPista } from './pista.js';
import { crearMundo, actualizarMundo } from './escena.js';
import { crearKart, animarKart } from './karts.js';
import { Efectos } from './particulas.js';
import { crearParrilla, paso as pasoFisica, eventos, reiniciarReloj, tiempoCarrera, ordenar } from './fisica.js';
import { Objetos } from './objetos.js';
import { controlIA, decidirUso } from './ia.js';
import { Camara, poseSeguir, mezcla } from './camara.js';
import { Hud } from './hud.js';
import * as SON from './sonido.js';

const $ = (id) => document.getElementById(id);
const PASO = 1 / 60;
const QUIETO = { acel: false, freno: false, giro: 0, deriva: false };
const TEXTOS_CUENTA = ['3', '2', '1', '¡YA!'];
const COLOR_MT = { 1: '#55c8ff', 2: '#ff9a3a', 3: '#c06bff' };
const ESTADO = { MENU: 'menu', INTRO: 'intro', CUENTA: 'cuenta', CORRE: 'corre', LLEGADA: 'llegada', PODIO: 'podio', RESULTADOS: 'resultados' };
const EN_CARRERA = [ESTADO.INTRO, ESTADO.CUENTA, ESTADO.CORRE, ESTADO.LLEGADA];

/* ---------- Ajustes y puntos guardados (mismo formato que la versión anterior) ---------- */
function leerAjustes() {
  try {
    const a = JSON.parse(localStorage.getItem(CLAVE_AJUSTES) || 'null');
    if (a && typeof a === 'object') return { sonido: a.sonido !== false, musica: a.musica !== false, calidad: a.calidad || 'auto' };
  } catch (e) { /* sin almacenamiento */ }
  return { sonido: true, musica: true, calidad: 'auto' };
}
function guardarAjustes() {
  try { localStorage.setItem(CLAVE_AJUSTES, JSON.stringify(ajustes)); } catch (e) { /* sin almacenamiento */ }
}
function leerDatos() {
  try {
    const d = JSON.parse(localStorage.getItem(CLAVE) || 'null');
    if (d && typeof d === 'object' && d.mejores && typeof d.mejores === 'object') return d;
  } catch (e) { /* sin almacenamiento */ }
  return { mejores: {} };
}
function guardarDatos() {
  try { localStorage.setItem(CLAVE, JSON.stringify(datos)); } catch (e) { /* sin almacenamiento */ }
}
function puntosTotales() { return Object.values(datos.mejores).reduce((s, v) => s + (Number(v) || 0), 0); }
function reportarPuntos() {
  try {
    if (window.parent && window.parent !== window) window.parent.postMessage({ tipo: 'juma-puntos', juego: 'kart', total: puntosTotales() }, location.origin);
  } catch (e) { /* nada que hacer */ }
}

const ajustes = leerAjustes();
let datos = leerDatos();

/* ---------- Render y cámara ---------- */
const renderer = new THREE.WebGLRenderer({ canvas: $('lienzo'), antialias: true, powerPreference: 'high-performance' });
renderer.setClearColor(0x1f0f33, 1);
const movil = matchMedia('(pointer: coarse)').matches;
const camara = new Camara(innerWidth / innerHeight);
const hud = new Hud();
let calidad = null;

function ajustarTamano() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, calidad ? calidad.pixel : 1));
  renderer.setSize(innerWidth, innerHeight, false);
  camara.ajustarAspecto(innerWidth / innerHeight);
  for (const m of mundos.values()) m.fx.ajustar(renderer.domElement.height, camara.cam.fov);
}
function fijarCalidad() {
  const nivel = ajustes.calidad === 'auto' ? (movil ? 'media' : 'alta') : ajustes.calidad;
  calidad = {
    alta: { sombras: true, mapa: 2048, pixel: 2 },
    media: { sombras: true, mapa: 1024, pixel: 1.5 },
    baja: { sombras: false, mapa: 512, pixel: 1 },
  }[nivel];
  renderer.shadowMap.enabled = calidad.sombras;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  ajustarTamano();
}

/* ---------- Pistas y mundos (se construyen una vez y se reutilizan) ---------- */
const pistasP = [];
const mundos = new Map();
function pistaP(i) {
  if (!pistasP[i]) pistasP[i] = construirPista(PISTAS[i]);
  return pistasP[i];
}
function mundoDe(i) {
  if (!mundos.has(i)) {
    const m = crearMundo(pistaP(i), calidad);
    m.fx = new Efectos(m.escena, renderer);
    m.obj = new Objetos(m.escena, m.fx);
    m.fx.ajustar(renderer.domElement.height, camara.cam.fov);
    mundos.set(i, m);
  }
  return mundos.get(i);
}
function reiniciarPista(P) {
  for (const c of P.cajas) { c.vivo = true; c.espera = 0; }
  for (const m of P.medallas) { m.vivo = true; m.espera = 0; }
}

/* ---------- Estado de la partida ---------- */
let estado = ESTADO.MENU, tEstado = 0, tTotal = 0, acum = 0, pausado = false;
let modo = 'copa', pistaSel = 0, pistaActual = 0;
let copa = { activa: false, total: [0, 0, 0, 0, 0, 0] };
let P = null, mundo = null, mundoKarts = null;
let karts = [], motores = [], humano = null, ordenados = [];
let vueltaAviso = 1, cuentaIdx = -1, cuentaLimpia = false, confetiIdx = -1, ultimoHud = 0;
let ultimoT = performance.now();
const tactil = { izq: false, der: false, freno: false, deriva: false };
const teclas = new Set();

function cambiar(nuevo) { estado = nuevo; tEstado = 0; }

function limpiarKarts() {
  if (mundoKarts) for (const m of motores) mundoKarts.escena.remove(m.g, m.sombra);
  motores = []; karts = []; humano = null; ordenados = []; mundoKarts = null;
}

/* Muestra una pista de fondo en el menú */
function previsualizar(i) {
  pistaSel = i;
  limpiarKarts();
  P = pistaP(i);
  mundo = mundoDe(i);
  mundo.podio.visible = false;
}

function crearCarrera() {
  limpiarKarts();
  karts = crearParrilla(P, PERSONAJES);
  motores = karts.map((k) => crearKart(k, mundo.escena, k.i));
  humano = karts.find((k) => k.humano);
  ordenados = ordenar(karts);
  ordenados.forEach((k, i) => { k.puesto = i + 1; });
  mundoKarts = mundo;
  mundo.obj.reiniciar();
  mundo.podio.visible = false;
}

function empezarCopa() {
  copa = { activa: true, total: [0, 0, 0, 0, 0, 0] };
  empezarCarrera(0);
}

function empezarCarrera(i) {
  pistaActual = i;
  pistaSel = i;
  SON.activar();
  P = pistaP(i);
  reiniciarPista(P);
  mundo = mundoDe(i);
  crearCarrera();
  reiniciarReloj();
  eventos.length = 0;
  acum = 0; vueltaAviso = 1; cuentaIdx = -1; cuentaLimpia = false; confetiIdx = -1; pausado = false;
  $('menu').hidden = true;
  hud.ocultarVelo();
  hud.mostrar(true);
  hud.tactil(movil);
  hud.cuenta('');
  hud.item(null);
  hud.deriva(0, 0);
  hud.vuelta(1, VUELTAS);
  hud.puesto(humano.puesto, karts.length);
  hud.tiempo(0);
  cambiar(ESTADO.INTRO);
  SON.empezarMusica('carrera');
}

function volverMenu() {
  copa.activa = false;
  pausado = false;
  limpiarKarts();
  cambiar(ESTADO.MENU);
  hud.mostrar(false);
  hud.tactil(false);
  hud.ocultarVelo();
  hud.cuenta('');
  $('menu').hidden = false;
  previsualizar(pistaSel);
  pintarMenu();
  if (ajustes.sonido && ajustes.musica) SON.empezarMusica('menu');
}

/* ---------- Pantallas del menú ---------- */
function pintarMenu() {
  $('elige').hidden = modo === 'copa';
  $('elige').innerHTML = PISTAS.map((p, i) => `<button type="button" class="pista-btn${i === pistaSel ? ' on' : ''}" data-pista="${i}">${p.nombre}<small>${p.desc}</small><small>Tu mejor: ${datos.mejores[p.id] ?? '—'} de ${PUNTOS_POS[0]}</small></button>`).join('');
  document.querySelectorAll('[data-modo]').forEach((b) => b.classList.toggle('on', b.dataset.modo === modo));
  $('mejor').textContent = modo === 'copa'
    ? `Copa de 6 pistas · ${puntosTotales()} puntos guardados`
    : `Tu mejor en esta pista: ${datos.mejores[PISTAS[pistaSel].id] ?? '—'} de ${PUNTOS_POS[0]}`;
  $('calidad').value = ajustes.calidad;
  $('sonido').checked = ajustes.sonido;
  $('musica').checked = ajustes.musica;
}

function mostrarResultados() {
  cambiar(ESTADO.RESULTADOS);
  const rank = ordenados;
  const pos = rank.indexOf(humano) + 1;
  const pts = PUNTOS_POS[pos - 1] || 0;
  if (copa.activa) rank.forEach((k, r) => { copa.total[k.i] += PUNTOS_POS[r] || 0; });
  const id = PISTAS[pistaActual].id;
  if (pts > (datos.mejores[id] || 0)) datos.mejores[id] = pts;
  guardarDatos();
  reportarPuntos();
  const filas = rank.map((k, r) => `<tr class="${k.humano ? 'yo' : ''}"><td>${r + 1}º</td><td>${k.nombre}</td><td>+${PUNTOS_POS[r] || 0}</td></tr>`).join('');
  let botones;
  if (copa.activa) {
    botones = pistaActual < PISTAS.length - 1
      ? `<button type="button" class="sec" data-accion="siguiente">Siguiente pista</button>`
      : `<button type="button" class="sec" data-accion="copa">Ver la copa</button>`;
  } else {
    botones = `<button type="button" class="sec" data-accion="repetir">Repetir</button>`;
  }
  const extra = copa.activa ? '' : ` · Tu mejor aquí: <b>${datos.mejores[id]}</b>`;
  hud.velo(`¡Puesto ${pos}º!`, `<table class="tabla">${filas}</table>
    <p class="puntos-txt">Ganaste <b>${pts}</b> puntos${extra}</p>
    <div class="fila-btn">${botones}<button type="button" class="sec" data-accion="menu">Volver al menú</button></div>`);
}

function mostrarCopa() {
  const lista = PERSONAJES.map((p, i) => ({ nombre: p.nombre, humano: !!p.humano, t: copa.total[i] })).sort((a, b) => b.t - a.t);
  const filas = lista.map((x, r) => `<tr class="${x.humano ? 'yo' : ''}"><td>${r + 1}º</td><td>${x.nombre}</td><td>${x.t}</td></tr>`).join('');
  hud.velo('Resultado de la copa', `<table class="tabla">${filas}</table>
    <div class="fila-btn"><button type="button" class="sec" data-accion="nuevaCopa">Jugar otra copa</button><button type="button" class="sec" data-accion="menu">Volver al menú</button></div>`);
}

function togglePausa(forzar) {
  if (![ESTADO.INTRO, ESTADO.CUENTA, ESTADO.CORRE, ESTADO.LLEGADA].includes(estado)) return;
  pausado = forzar === undefined ? !pausado : forzar;
  if (pausado) {
    hud.velo('Pausa', `<div class="fila-btn"><button type="button" class="gran" data-accion="continuar">Seguir</button></div>
      <div class="fila-btn"><button type="button" class="sec" data-accion="reiniciar">Reiniciar carrera</button><button type="button" class="sec" data-accion="menu">Volver al menú</button></div>`);
  } else {
    hud.ocultarVelo();
  }
}

function accion(a) {
  switch (a) {
    case 'siguiente': empezarCarrera(pistaActual + 1); break;
    case 'copa': mostrarCopa(); break;
    case 'repetir': case 'reiniciar': empezarCarrera(pistaActual); break;
    case 'nuevaCopa': empezarCopa(); break;
    case 'continuar': togglePausa(false); break;
    case 'menu': volverMenu(); break;
    default: break;
  }
}

/* ---------- Control del jugador ---------- */
function controlHumano() {
  const izq = teclas.has('arrowleft') || teclas.has('a') || tactil.izq;
  const der = teclas.has('arrowright') || teclas.has('d') || tactil.der;
  const freno = teclas.has('arrowdown') || teclas.has('s') || tactil.freno;
  return {
    acel: !freno,
    freno,
    giro: (der ? 1 : 0) - (izq ? 1 : 0),   /* positivo = a la derecha en pantalla */
    deriva: teclas.has('shift') || teclas.has('z') || tactil.deriva,
  };
}

function usarObjetoHumano() {
  if (estado !== ESTADO.CORRE || pausado || !humano || humano.listo) return;
  mundo.obj.usar(humano, karts, ordenados);
}

/* ---------- Flujo de la carrera ---------- */
function intro() {
  const u = Math.min(1, tEstado / 3.4), e = u * u * (3 - 2 * u);
  const a = Math.atan2(P.ys[0], P.xs[0]) - (1 - e) * 1.6;
  const orbita = { x: Math.cos(a) * 1250, y: 520, z: Math.sin(a) * 1250 };
  const c = poseSeguir(humano);
  camara.fijar(mezcla(orbita, c.p, e), mezcla({ x: 0, y: 0, z: 0 }, c.m, e));
  if (tEstado >= 3.4) cambiar(ESTADO.CUENTA);
}

function cuenta(dt) {
  const idx = Math.min(3, Math.floor(tEstado / 0.9));
  if (idx !== cuentaIdx) {
    cuentaIdx = idx;
    hud.cuenta(TEXTOS_CUENTA[idx]);
    SON.cuenta(idx);
  }
  camara.seguir(humano, dt, 10);
  if (tEstado >= 2.7) {
    cambiar(ESTADO.CORRE);
    cuentaIdx = -1;
  }
}

function correr(dt) {
  acum += dt;
  let n = 0;
  while (acum >= PASO && n < 8) { fisicaPaso(PASO); acum -= PASO; n++; }
  if (n >= 8) acum = 0;
  procesarEventos();
  if (!cuentaLimpia && tiempoCarrera() > 0.9) { hud.cuenta(''); cuentaLimpia = true; }
  if (humano.vuelta > vueltaAviso) {
    vueltaAviso = humano.vuelta;
    if (vueltaAviso <= VUELTAS && estado === ESTADO.CORRE) {
      hud.aviso(vueltaAviso === VUELTAS ? '¡Última vuelta!' : `Vuelta ${vueltaAviso}`, 1600);
      SON.vuelta(vueltaAviso === VUELTAS);
    }
  }
  if (estado === ESTADO.LLEGADA) {
    orbitaVictoria(dt);
    if (karts.every((k) => k.listo) || tEstado > 14) prepararPodio();
  } else {
    camara.seguir(humano, dt);
  }
}

function fisicaPaso(dt) {
  ordenados = ordenar(karts);
  ordenados.forEach((k, i) => { k.puesto = i + 1; });
  const lider = Math.max(...karts.map((k) => k.dist));
  for (const k of karts) if (!k.humano) k.ritmo = 1 + Math.min(0.06, ((lider - k.dist) / 4000) * 0.06);
  const ctl = karts.map((k) => {
    if (k.listo) return QUIETO;
    return k.humano ? controlHumano() : controlIA(k, karts, P, dt);
  });
  for (const k of karts) if (!k.humano && !k.listo && decidirUso(k, karts, dt)) mundo.obj.usar(k, karts, ordenados);
  pasoFisica(karts, P, dt, ctl);
  mundo.obj.actualizar(dt, karts);
  mundo.obj.cajas(karts, P, dt, ordenados);
  mundo.obj.medallas(karts, P, dt);
}

function procesarEventos() {
  for (const e of eventos) {
    SON.evento(e, humano);
    const k = e.k || e.a;
    switch (e.tipo) {
      case 'pad':
        mundo.fx.destello(k.x, 8, k.y, '#55f2ff', 14);
        break;
      case 'miniturbo':
        mundo.fx.destello(k.x, 8, k.y, COLOR_MT[e.tier] || '#ffb040', 14);
        break;
      case 'golpe':
        mundo.fx.destello(k.x, 26, k.y, '#fff3c4', 12);
        if (k === humano) camara.sacudir(e.fuerte ? 16 : 10);
        break;
      case 'bloqueo':
        mundo.fx.destello(k.x, 26, k.y, '#ffe68c', 12);
        if (k === humano) hud.aviso('¡Te protegió el rosario!', 1100);
        break;
      case 'choque':
        mundo.fx.chispa(e.a.x, 14, e.a.y, '#ffe68c', 10);
        if (e.a === humano || e.b === humano) camara.sacudir(7);
        break;
      case 'rescate':
        if (k === humano) hud.aviso('¡De vuelta al camino!', 1200);
        break;
      case 'objeto':
        if (k === humano) hud.aviso(`¡Tienes ${OBJETOS[e.nombre].nombre}!`, 1300);
        break;
      case 'usa':
        mundo.fx.destello(k.x, 16, k.y, OBJETOS[e.nombre].color, 10);
        break;
      case 'medalla':
        if (k === humano) mundo.fx.chispa(k.x, 10, k.y, '#ffd25a', 6);
        break;
      case 'meta':
        if (k === humano && estado === ESTADO.CORRE) {
          cambiar(ESTADO.LLEGADA);
          hud.aviso('¡Llegaste a la meta!', 2200);
          hud.deriva(0, 0);
        }
        break;
      default: break;
    }
  }
  eventos.length = 0;
}

function orbitaVictoria(dt) {
  const a = tEstado * 0.5 + 0.8, r = 180;
  camara.mover({ x: humano.x + Math.cos(a) * r, y: 70, z: humano.y + Math.sin(a) * r }, { x: humano.x, y: 25, z: humano.y }, dt, 3);
}

/* Los que llegan se quedan en el podio: el jugador sube solo si queda entre los tres primeros */
function prepararPodio() {
  cambiar(ESTADO.PODIO);
  ordenados = ordenar(karts);
  mundo.podio.visible = true;
  hud.mostrar(false);
  hud.tactil(false);
  hud.limpiarAvisos();
  for (const m of motores) { m.g.visible = false; m.sombra.visible = false; }
}

function podio() {
  const pos = mundo.podio.userData.posiciones;
  ordenados.slice(0, 3).forEach((k, i) => {
    const m = motores[k.i];
    m.g.visible = true;
    m.g.position.set(pos[i].x, pos[i].y, 0);
    m.g.rotation.set(0, -Math.PI / 2, 0);
  });
  camara.fijar({ x: Math.sin(tEstado * 0.25) * 60, y: 118, z: 240 }, { x: 0, y: 34, z: 0 });
  const tic = Math.floor(tEstado / 0.3);
  if (tic !== confetiIdx && tEstado < 6) {
    confetiIdx = tic;
    mundo.fx.confeti((Math.random() - 0.5) * 90, 150, (Math.random() - 0.5) * 40, 10);
  }
  if (tEstado > 6.5) mostrarResultados();
}

function actualizar(dt) {
  tEstado += dt;
  switch (estado) {
    case ESTADO.MENU: camara.fijar(
      { x: Math.cos(tTotal * 0.06) * 1150, y: 520, z: Math.sin(tTotal * 0.06) * 1150 },
      { x: 0, y: 0, z: 0 }); break;
    case ESTADO.INTRO: intro(); break;
    case ESTADO.CUENTA: cuenta(dt); break;
    case ESTADO.CORRE: case ESTADO.LLEGADA: correr(dt); break;
    case ESTADO.PODIO: podio(); break;
    default: break;
  }
}

function actualizarHud() {
  if (!humano) return;
  hud.puesto(humano.puesto, karts.length);
  hud.vuelta(Math.min(VUELTAS, humano.vuelta), VUELTAS);
  hud.tiempo(humano.listo ? humano.fin : tiempoCarrera());
  hud.item(humano.item);
  hud.deriva(humano.tierDerivaActiva, Math.min(1, humano.deriva / 2.6));
  if (tTotal - ultimoHud > 0.1) { ultimoHud = tTotal; hud.mapa(P, karts); }
}

function dibujar(dt) {
  if (!mundo) return;
  const enCarrera = EN_CARRERA.includes(estado);
  if (karts.length && estado !== ESTADO.PODIO && estado !== ESTADO.RESULTADOS) {
    for (let i = 0; i < karts.length; i++) {
      const k = karts[i];
      const cerca = humano && Math.hypot(k.x - humano.x, k.y - humano.y) < 1600;
      animarKart(motores[i], k, dt, tTotal, cerca ? mundo.fx : null);
    }
  }
  actualizarMundo(mundo, P, tTotal, enCarrera ? humano : null);
  mundo.fx.actualizar(dt);
  camara.actualizar(dt);
  if (enCarrera && !pausado) actualizarHud();
  const rapidez = humano ? Math.min(1, Math.hypot(humano.vx, humano.vy) / VMAX) : 0;
  SON.motor(rapidez, estado === ESTADO.CORRE && !pausado);
  renderer.render(mundo.escena, camara.cam);
}

function bucle(ahora) {
  requestAnimationFrame(bucle);
  let dt = (ahora - ultimoT) / 1000;
  ultimoT = ahora;
  if (!(dt >= 0)) dt = 0;
  dt = Math.min(dt, 0.1);
  tTotal += dt;
  if (!pausado) actualizar(dt);
  dibujar(pausado ? 0 : dt);
}

/* ---------- Entradas ---------- */
document.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.modo) { SON.activar(); modo = b.dataset.modo; pintarMenu(); }
  else if (b.dataset.pista !== undefined) { SON.activar(); previsualizar(Number(b.dataset.pista)); pintarMenu(); }
  else if (b.dataset.accion) accion(b.dataset.accion);
  else if (b.id === 'arrancar') { SON.activar(); if (modo === 'copa') empezarCopa(); else empezarCarrera(pistaSel); }
  else if (b.id === 'pausa') togglePausa();
});

const TECLAS_JUEGO = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '];
addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (TECLAS_JUEGO.includes(k) && EN_CARRERA.includes(estado)) e.preventDefault();
  teclas.add(k);
  if ((k === ' ' || k === 'e') && !e.repeat && EN_CARRERA.includes(estado)) {
    if (k === ' ' && document.activeElement && document.activeElement.blur) document.activeElement.blur();
    usarObjetoHumano();
  }
  if (k === 'p' || k === 'escape') togglePausa();
});
addEventListener('keyup', (e) => teclas.delete(e.key.toLowerCase()));
addEventListener('blur', () => teclas.clear());
document.addEventListener('visibilitychange', () => { if (document.hidden) togglePausa(true); });

for (const b of document.querySelectorAll('[data-tecla]')) {
  const v = b.dataset.tecla;
  if (v === 'objeto') {
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); usarObjetoHumano(); });
    continue;
  }
  b.addEventListener('pointerdown', (e) => { e.preventDefault(); tactil[v] = true; });
  for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) b.addEventListener(ev, () => { tactil[v] = false; });
}

$('calidad').addEventListener('change', (e) => {
  ajustes.calidad = e.target.value; guardarAjustes();
  mundos.clear();
  fijarCalidad();
  previsualizar(pistaSel);
});
$('sonido').addEventListener('change', (e) => {
  ajustes.sonido = e.target.checked; guardarAjustes();
  SON.configurar(ajustes.sonido, ajustes.musica);
  if (ajustes.sonido && ajustes.musica && estado === ESTADO.MENU) SON.empezarMusica('menu');
});
$('musica').addEventListener('change', (e) => {
  ajustes.musica = e.target.checked; guardarAjustes();
  SON.configurar(ajustes.sonido, ajustes.musica);
  if (ajustes.musica && ajustes.sonido) SON.empezarMusica(estado === ESTADO.MENU ? 'menu' : 'carrera');
  else SON.pararMusica();
});
addEventListener('resize', ajustarTamano);
addEventListener('pointerdown', () => {
  if (estado === ESTADO.MENU && ajustes.sonido && ajustes.musica) SON.empezarMusica('menu');
}, { once: true });

/* Ganchos para pruebas automáticas */
window.__carrera = {
  get estado() { return estado; }, get karts() { return karts; }, get humano() { return humano; },
  get P() { return P; }, get copa() { return copa; }, get tCarrera() { return tiempoCarrera(); },
  get pausado() { return pausado; }, get teclas() { return teclas; },
  get camara() { return camara.cam; }, get motores() { return motores; }, get tEstadoJuego() { return tEstado; },
  empezarCarrera, empezarCopa, accion, togglePausa, usarObjetoHumano, tactil,
};

fijarCalidad();
previsualizar(0);
pintarMenu();
requestAnimationFrame(bucle);
