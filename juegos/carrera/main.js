/* Carrera de la fe · punto de entrada: menú por pasos (modo, clase, personaje, kart, copa y pista), flujo de la carrera (sobrevuelo, cuenta, carrera, llegada, podio), copa, puntos, controles y bucle de juego */
import * as THREE from '../lib/three.module.min.js';
import { PISTAS, PERSONAJES, KARTS, CUPAS, DIFICULTADES, VUELTAS, VMAX, PUNTOS_POS, CLAVE, CLAVE_AJUSTES, OBJETOS } from './datos.js';
import { construirPista } from './pista.js';
import { crearMundo, actualizarMundo } from './escena.js';
import { crearKart, animarKart } from './karts.js';
import { Efectos } from './particulas.js';
import { crearParrilla, paso as pasoFisica, eventos, reiniciarReloj, tiempoCarrera, ordenar } from './fisica.js';
import { Objetos } from './objetos.js';
import { controlIA, decidirUso } from './ia.js';
import { Camara, poseSeguir, mezcla } from './camara.js';
import { Hud } from './hud.js';
import { Vitrina } from './vitrina.js';
import * as SON from './sonido.js';

const $ = (id) => document.getElementById(id);
const PASO = 1 / 60;
const QUIETO = { acel: false, freno: false, giro: 0, deriva: false };
const TEXTOS_CUENTA = ['3', '2', '1', '¡YA!'];
const COLOR_MT = { 1: '#55c8ff', 2: '#ff9a3a', 3: '#c06bff' };
const ESTADO = { MENU: 'menu', INTRO: 'intro', CUENTA: 'cuenta', CORRE: 'corre', LLEGADA: 'llegada', PODIO: 'podio', RESULTADOS: 'resultados' };
const EN_CARRERA = [ESTADO.INTRO, ESTADO.CUENTA, ESTADO.CORRE, ESTADO.LLEGADA];
/* Pasos del menú (ajustes se abre desde el inicio) */
const PASOS = ['inicio', 'modo', 'personaje', 'kart', 'pista'];
const SUBTITULOS = {
  inicio: 'Corre con personajes de la fe',
  ajustes: 'Ajustes',
  modo: 'Paso 1 de 4 · Modo y clase',
  personaje: 'Paso 2 de 4 · Personaje',
  kart: 'Paso 3 de 4 · Kart',
  pista: 'Paso 4 de 4 · Copa y pista',
};

/* ---------- Ajustes y puntos guardados (mismo formato que la versión anterior, con un ajuste nuevo) ---------- */
function leerAjustes() {
  try {
    const a = JSON.parse(localStorage.getItem(CLAVE_AJUSTES) || 'null');
    if (a && typeof a === 'object') return { sonido: a.sonido !== false, musica: a.musica !== false, calidad: a.calidad || 'auto', autoacel: a.autoacel === true };
  } catch (e) { /* sin almacenamiento */ }
  return { sonido: true, musica: true, calidad: 'auto', autoacel: false };
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
/* Tono de color de cine: más contraste y colores más vivos */
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
const movil = matchMedia('(pointer: coarse)').matches;
const camara = new Camara(innerWidth / innerHeight);
const hud = new Hud();
const vitrina = new Vitrina();
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
let estado = ESTADO.MENU, tEstado = 0, tTotal = 0, acum = 0, pausado = false, pausaGiro = false;
const sel = { modo: 'copa', dif: 1, pi: 0, ki: 0, cup: 0, pista: 0 };
let paso = 'inicio', vitrinaActiva = false;
let rivales = [], equipo = [];
let copa = { activa: false, cup: 0, pistas: [], idx: 0, total: PERSONAJES.map(() => 0) };
let pistaActual = 0;
let P = null, mundo = null, mundoKarts = null;
let karts = [], motores = [], humano = null, ordenados = [];
let vueltaAviso = 1, cuentaIdx = -1, cuentaLimpia = false, confetiIdx = -1, ultimoHud = 0;
let ultimoT = performance.now();
const tactil = { izq: false, der: false, acel: false, freno: false, deriva: false };
const teclas = new Set();
let gpObjetoPrev = false;

function cambiar(nuevo) { estado = nuevo; tEstado = 0; }

function limpiarKarts() {
  if (mundoKarts) for (const m of motores) { mundoKarts.escena.remove(m.g, m.sombra); if (m.paz) mundoKarts.escena.remove(m.paz); }
  motores = []; karts = []; humano = null; ordenados = []; mundoKarts = null;
}

/* Muestra una pista de fondo en el menú */
function previsualizar(i) {
  limpiarKarts();
  P = pistaP(i);
  mundo = mundoDe(i);
  mundo.podio.visible = false;
}

function crearCarrera() {
  limpiarKarts();
  karts = crearParrilla(P, equipo, DIFICULTADES[sel.dif]);
  motores = karts.map((k) => crearKart(k, mundo.escena, k.i));
  humano = karts.find((k) => k.humano);
  ordenados = ordenar(karts);
  ordenados.forEach((k, i) => { k.puesto = i + 1; });
  mundoKarts = mundo;
  mundo.obj.reiniciar();
  mundo.podio.visible = false;
}

/* Cinco rivales distintos al jugador, cada uno con un kart al azar */
function elegirRivales() {
  const otros = PERSONAJES.map((_, i) => i).filter((i) => i !== sel.pi);
  for (let i = otros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otros[i], otros[j]] = [otros[j], otros[i]];
  }
  return otros.slice(0, 5).map((pi) => ({ pi, ki: Math.floor(Math.random() * KARTS.length) }));
}

function empezarCopa(cup) {
  copa = { activa: true, cup, pistas: CUPAS[cup].pistas.slice(), idx: 0, total: PERSONAJES.map(() => 0) };
  rivales = elegirRivales();
  empezarCarrera(copa.pistas[0]);
}

function empezarCarrera(i) {
  pistaActual = i;
  SON.activar();
  equipo = [{ pi: sel.pi, ki: sel.ki, humano: true }, ...rivales];
  P = pistaP(i);
  reiniciarPista(P);
  mundo = mundoDe(i);
  crearCarrera();
  reiniciarReloj();
  eventos.length = 0;
  acum = 0; vueltaAviso = 1; cuentaIdx = -1; cuentaLimpia = false; confetiIdx = -1; pausado = false; pausaGiro = false;
  $('menu').hidden = true;
  hud.ocultarVelo();
  hud.mostrar(true);
  hud.tactil(movil);
  hud.cuenta('');
  hud.item(null);
  hud.deriva(0, 0);
  hud.vuelta(1, VUELTAS);
  hud.monedas(0);
  hud.puesto(humano.puesto, karts.length);
  hud.tiempo(0);
  cambiar(ESTADO.INTRO);
  SON.empezarMusica('carrera');
  revisarOrientacion();
}

function volverMenu() {
  copa.activa = false;
  pausado = false; pausaGiro = false;
  limpiarKarts();
  cambiar(ESTADO.MENU);
  hud.mostrar(false);
  hud.tactil(false);
  hud.ocultarVelo();
  hud.cuenta('');
  hud.limpiarAvisos();
  $('menu').hidden = false;
  paso = 'inicio';
  pintarMenu();
  if (ajustes.sonido && ajustes.musica) SON.empezarMusica('menu');
}

/* ---------- Menú por pasos ---------- */
const nivel = (m) => Math.max(1, Math.min(5, Math.round(3 + (m - 1) * 10)));
const barrasKart = (c) => [['Velocidad', c.vel], ['Aceleración', c.acel], ['Solidez', c.peso], ['Manejo', c.giro]]
  .map(([n, v]) => `<span>${n}</span><span class="barra"><span style="width:${nivel(v) * 20}%"></span></span>`).join('');

function vistaInicio() {
  return `<div class="inicio-botones">
    <button type="button" class="gran" data-ir="modo">Jugar</button>
    <button type="button" class="sec" data-ir="ajustes">Ajustes</button>
    <button type="button" class="sec" data-accion="salir">Salir del juego</button>
    <p class="mejor">Puntos guardados: <b>${puntosTotales()}</b></p>
    <p class="ayuda">Con botones: ◀ ▶ girar · A acelerar · B frenar · X usar objeto · Y derrapar. En el teclado: flechas o A y D para girar, ↑ acelerar, ↓ frenar, Shift o Z derrapar, Espacio o E usar objeto, P pausar.</p>
  </div>`;
}

function vistaAjustes() {
  const op = (v, t) => `<option value="${v}"${ajustes.calidad === v ? ' selected' : ''}>${t}</option>`;
  return `<div class="bloque">
    <label class="fila">Gráficos
      <select data-ajuste="calidad" aria-label="Calidad de los gráficos">${op('auto', 'Automático')}${op('alta', 'Alta')}${op('media', 'Media')}${op('baja', 'Baja')}</select>
    </label>
    <label class="fila">Sonidos <input type="checkbox" data-ajuste="sonido" ${ajustes.sonido ? 'checked' : ''}></label>
    <label class="fila">Música <input type="checkbox" data-ajuste="musica" ${ajustes.musica ? 'checked' : ''}></label>
    <label class="fila">Acelerar solo <input type="checkbox" data-ajuste="autoacel" ${ajustes.autoacel ? 'checked' : ''}></label>
    <p class="ayuda">Con «Acelerar solo» el kart avanza sin mantener el botón A ni la flecha ↑.</p>
  </div>`;
}

function vistaModo() {
  return `<div class="bloque">
    <h2>¿Cómo quieres correr?</h2>
    <div class="cartas-2">
      <button type="button" class="carta${sel.modo === 'copa' ? ' on' : ''}" data-modo="copa">Copa<small>Tres pistas seguidas y una tabla de puntos</small></button>
      <button type="button" class="carta${sel.modo === 'suelta' ? ' on' : ''}" data-modo="suelta">Una pista<small>Elige la pista y corre una vez</small></button>
    </div>
    <h2>Clase</h2>
    <div class="chips">${DIFICULTADES.map((d, i) => `<button type="button" class="chip-b${sel.dif === i ? ' on' : ''}" data-dif="${i}">${d.nombre}</button>`).join('')}</div>
    <p class="nota">${DIFICULTADES[sel.dif].texto}</p>
    <p class="mejor">${sel.modo === 'copa'
      ? `Puntos guardados: <b>${puntosTotales()}</b>`
      : `Tu mejor en esta pista: <b>${datos.mejores[PISTAS[sel.pista].id] ?? '—'}</b> de ${PUNTOS_POS[0]}`}</p>
  </div>`;
}

function vistaPersonaje() {
  const p = PERSONAJES[sel.pi];
  return `<div class="bloque">
    <h2>Elige tu personaje</h2>
    <div class="cuadricula">${PERSONAJES.map((q, i) => `<button type="button" class="carta-p${i === sel.pi ? ' on' : ''}" data-pi="${i}" style="--c:${q.color};--b:${q.borde}"><span class="avatar">${q.nombre[0]}</span>${q.nombre}<small>${q.habilNombre}</small></button>`).join('')}</div>
    <p class="nota"><b>${p.nombre}: ${p.habilNombre}.</b> ${p.habilTexto}</p>
  </div>`;
}

function vistaKart() {
  return `<div class="bloque">
    <h2>Elige tu kart</h2>
    <div class="lista-k">${KARTS.map((c, i) => `<button type="button" class="carta-k${i === sel.ki ? ' on' : ''}" data-ki="${i}"><b>${c.nombre}</b><small>${c.desc}</small><span class="barras">${barrasKart(c)}</span></button>`).join('')}</div>
    <p class="nota">Tu personaje conduce el kart que elijas. Su habilidad se queda con él.</p>
  </div>`;
}

function vistaPista() {
  if (sel.modo === 'copa') {
    return `<div class="bloque">
      <h2>Elige la copa</h2>
      <div class="cartas-2">${CUPAS.map((c, i) => `<button type="button" class="carta${i === sel.cup ? ' on' : ''}" data-cup="${i}"><b>${c.nombre}</b><small>${c.desc}</small><small>${c.pistas.map((n) => PISTAS[n].nombre).join(' · ')}</small></button>`).join('')}</div>
      <p class="nota">Al final se suman los puntos de cada rival y se ve quién gana la copa.</p>
    </div>`;
  }
  return `<div class="bloque">
    <h2>Elige la pista</h2>
    <div class="cuadricula-p">${PISTAS.map((p, i) => `<button type="button" class="carta-pista${i === sel.pista ? ' on' : ''}" data-pista="${i}"><b>${p.nombre}</b><small>${p.desc}</small><small>Tu mejor: ${datos.mejores[p.id] ?? '—'}</small></button>`).join('')}</div>
  </div>`;
}

const VISTAS = { inicio: vistaInicio, ajustes: vistaAjustes, modo: vistaModo, personaje: vistaPersonaje, kart: vistaKart, pista: vistaPista };

/* Lo que se ve a la derecha: el kart girando (personaje y kart) o la pista (los demás pasos) */
function actualizarFondo() {
  vitrinaActiva = paso === 'personaje' || paso === 'kart';
  if (vitrinaActiva) vitrina.mostrar(PERSONAJES[sel.pi], KARTS[sel.ki]);
  else previsualizar(sel.pista);
}

function pintarMenu() {
  $('paso').innerHTML = VISTAS[paso]();
  $('subtitulo').textContent = SUBTITULOS[paso] || SUBTITULOS.ajustes;
  $('pie').hidden = paso === 'inicio';
  $('siguiente').hidden = paso === 'ajustes';
  $('siguiente').textContent = paso === 'pista' ? '¡A correr!' : 'Siguiente';
  actualizarFondo();
}

function irA(p) { paso = p; pintarMenu(); }
function siguiente() {
  if (paso === 'pista') return arrancar();
  irA(PASOS[PASOS.indexOf(paso) + 1]);
}
function atras() {
  if (paso === 'ajustes') return irA('inicio');
  irA(PASOS[Math.max(0, PASOS.indexOf(paso) - 1)]);
}

/* Al pulsar «¡A correr!»: pantalla completa y horizontal si el navegador lo permite */
async function pantallaCompleta() {
  if (!movil) return;
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen({ navigationUI: 'hide' });
    if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape');
  } catch (e) { /* el navegador no deja girar la pantalla: se muestra el aviso para girar */ }
}

function arrancar() {
  SON.activar();
  pantallaCompleta();
  if (sel.modo === 'copa') empezarCopa(sel.cup);
  else { rivales = elegirRivales(); empezarCarrera(sel.pista); }
}

/* Teléfono en vertical: el juego pide girarlo y se pausa mientras tanto */
function revisarOrientacion() {
  const pedir = movil && matchMedia('(orientation: portrait)').matches && EN_CARRERA.includes(estado);
  $('girar').hidden = !pedir;
  if (pedir && !pausado) { pausado = true; pausaGiro = true; }
  else if (!pedir && pausaGiro) { pausado = false; pausaGiro = false; }
}

function mostrarResultados() {
  cambiar(ESTADO.RESULTADOS);
  const rank = ordenados;
  const pos = rank.indexOf(humano) + 1;
  const pts = PUNTOS_POS[pos - 1] || 0;
  if (copa.activa) rank.forEach((k, r) => { copa.total[k.pi] += PUNTOS_POS[r] || 0; });
  const id = PISTAS[pistaActual].id;
  if (pts > (datos.mejores[id] || 0)) datos.mejores[id] = pts;
  guardarDatos();
  reportarPuntos();
  const filas = rank.map((k, r) => `<tr class="${k.humano ? 'yo' : ''}"><td>${r + 1}º</td><td>${k.humano ? `${k.nombre} (tú)` : k.nombre}</td><td>+${PUNTOS_POS[r] || 0}</td></tr>`).join('');
  let botones;
  if (copa.activa) {
    botones = copa.idx < copa.pistas.length - 1
      ? '<button type="button" class="sec" data-accion="siguiente">Siguiente pista</button>'
      : '<button type="button" class="sec" data-accion="copa">Ver la copa</button>';
  } else {
    botones = '<button type="button" class="sec" data-accion="repetir">Repetir</button>';
  }
  const extra = copa.activa ? '' : ` · Tu mejor aquí: <b>${datos.mejores[id]}</b>`;
  hud.velo(`¡Puesto ${pos}º!`, `<table class="tabla">${filas}</table>
    <p class="puntos-txt">Ganaste <b>${pts}</b> puntos${extra}</p>
    <div class="fila-btn">${botones}<button type="button" class="sec" data-accion="menu">Volver al menú</button></div>`);
}

function mostrarCopa() {
  const lista = equipo.map((e) => ({ nombre: PERSONAJES[e.pi].nombre, humano: !!e.humano, t: copa.total[e.pi] })).sort((a, b) => b.t - a.t);
  const filas = lista.map((x, r) => `<tr class="${x.humano ? 'yo' : ''}"><td>${r + 1}º</td><td>${x.nombre}${x.humano ? ' (tú)' : ''}</td><td>${x.t}</td></tr>`).join('');
  hud.velo('Resultado de la copa', `<table class="tabla">${filas}</table>
    <div class="fila-btn"><button type="button" class="sec" data-accion="menu">Volver al menú</button></div>`);
}

function togglePausa(forzar) {
  if (!EN_CARRERA.includes(estado)) return;
  pausado = forzar === undefined ? !pausado : forzar;
  pausaGiro = false;
  if (pausado) {
    hud.velo('Pausa', `<div class="fila-btn"><button type="button" class="gran" data-accion="continuar">Seguir</button></div>
      <div class="fila-btn"><button type="button" class="sec" data-accion="reiniciar">Reiniciar carrera</button><button type="button" class="sec" data-accion="menu">Volver al menú</button></div>`);
  } else {
    hud.ocultarVelo();
  }
}

function accion(a) {
  switch (a) {
    case 'siguiente': copa.idx += 1; empezarCarrera(copa.pistas[copa.idx]); break;
    case 'copa': mostrarCopa(); break;
    case 'repetir': case 'reiniciar': empezarCarrera(pistaActual); break;
    case 'continuar': togglePausa(false); break;
    case 'menu': volverMenu(); break;
    case 'salir': try { window.parent.postMessage({ tipo: 'juma-cerrar' }, location.origin); } catch (e) {} break;
    default: break;
  }
}

/* ---------- Control del jugador: teclado, botones táctiles y mando ---------- */
function leerGamepad() {
  const vacio = { izq: false, der: false, acel: false, freno: false, deriva: false, objeto: false };
  if (!navigator.getGamepads) return vacio;
  let g = null;
  for (const p of navigator.getGamepads()) if (p && p.connected) { g = p; break; }
  if (!g) return vacio;
  const b = (i) => !!(g.buttons[i] && g.buttons[i].pressed);
  const v = (i) => (g.buttons[i] ? g.buttons[i].value : 0);
  const eje = g.axes[0] || 0;
  return {
    izq: eje < -0.35 || b(14), der: eje > 0.35 || b(15),
    acel: b(0) || v(7) > 0.3, freno: b(1) || v(6) > 0.3,
    deriva: b(3) || b(4) || b(5), objeto: b(2),
  };
}

function controlHumano() {
  const gp = leerGamepad();
  const izq = teclas.has('arrowleft') || teclas.has('a') || tactil.izq || gp.izq;
  const der = teclas.has('arrowright') || teclas.has('d') || tactil.der || gp.der;
  const freno = teclas.has('arrowdown') || teclas.has('s') || tactil.freno || gp.freno;
  const quiereAcelerar = teclas.has('arrowup') || teclas.has('w') || tactil.acel || gp.acel;
  return {
    acel: (ajustes.autoacel || quiereAcelerar) && !freno,
    freno,
    giro: (der ? 1 : 0) - (izq ? 1 : 0),   /* positivo = a la derecha en pantalla */
    deriva: teclas.has('shift') || teclas.has('z') || tactil.deriva || gp.deriva,
  };
}

/* El botón X del mando usa el objeto una vez por pulsación */
function revisarMandoObjeto() {
  const objeto = leerGamepad().objeto;
  if (objeto && !gpObjetoPrev) usarObjetoHumano();
  gpObjetoPrev = objeto;
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
    /* Lucía (salida de luz) arranca con un empujón */
    for (const k of karts) if (k.habil === 'salida') k.turbo = Math.max(k.turbo, 1.0);
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
  /* Rosa (aura de paz) frena un poco a los karts que van cerca de ella */
  for (const a of karts) {
    if (a.habil !== 'aura' || a.listo) continue;
    for (const o of karts) if (o !== a && (o.x - a.x) ** 2 + (o.y - a.y) ** 2 < 240 * 240) o.ralenti = 0.2;
  }
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
  $('girar').hidden = true;
  for (const m of motores) { m.g.visible = false; m.sombra.visible = false; if (m.paz) m.paz.visible = false; }
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
    case ESTADO.MENU:
      if (vitrinaActiva) camara.fijar({ x: Math.sin(tTotal * 0.25) * 40, y: 56, z: 180 }, { x: -34, y: 22, z: 0 });
      else camara.fijar({ x: Math.cos(tTotal * 0.06) * 1150, y: 520, z: Math.sin(tTotal * 0.06) * 1150 }, { x: -260, y: 0, z: 0 });
      break;
    case ESTADO.INTRO: intro(); break;
    case ESTADO.CUENTA: cuenta(dt); break;
    case ESTADO.CORRE: case ESTADO.LLEGADA:
      revisarMandoObjeto();
      correr(dt);
      break;
    case ESTADO.PODIO: podio(); break;
    default: break;
  }
}

function actualizarHud() {
  if (!humano) return;
  hud.puesto(humano.puesto, karts.length);
  hud.vuelta(Math.min(VUELTAS, humano.vuelta), VUELTAS);
  hud.monedas(humano.medallas);
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
  /* En la vitrina, el personaje va al centro de la zona libre a la derecha del panel (en vertical el panel ocupa todo) */
  if (estado === ESTADO.MENU && vitrinaActiva) {
    const panel = document.querySelector('.menu').getBoundingClientRect();
    const f = panel.width >= innerWidth * 0.9 ? 0.5 : (panel.right + innerWidth) / (2 * innerWidth);
    camara.encuadrar({ x: 0, y: 10, z: 0 }, f);
  } else camara.encuadrar({ x: 0, y: 0, z: 0 }, null);
  /* Nombres sobre los karts: se desvanecen con la distancia a la cámara y no aparecen sobre el jugador */
  if (enCarrera) karts.forEach((k, i) => {
    const m = motores[i];
    if (!m) return;
    const d = m.g.position.distanceTo(camara.cam.position);
    m.nombre.visible = !k.humano;
    m.nombre.material.opacity = Math.max(0, Math.min(1, 1 - (d - 240) / 160));
  });
  if (enCarrera && !pausado) actualizarHud();
  const rapidez = humano ? Math.min(1, Math.hypot(humano.vx, humano.vy) / VMAX) : 0;
  SON.motor(rapidez, estado === ESTADO.CORRE && !pausado);
  if (estado === ESTADO.MENU && vitrinaActiva) {
    vitrina.actualizar(dt);
    renderer.render(vitrina.escena, camara.cam);
  } else {
    renderer.render(mundo.escena, camara.cam);
  }
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
  SON.activar();
  if (b.id === 'siguiente') return siguiente();
  if (b.id === 'atras') return atras();
  if (b.id === 'pausa') return togglePausa();
  if (b.dataset.ir) return irA(b.dataset.ir);
  if (b.dataset.modo) { sel.modo = b.dataset.modo; return pintarMenu(); }
  if (b.dataset.dif !== undefined) { sel.dif = Number(b.dataset.dif); return pintarMenu(); }
  if (b.dataset.pi !== undefined) { sel.pi = Number(b.dataset.pi); return pintarMenu(); }
  if (b.dataset.ki !== undefined) { sel.ki = Number(b.dataset.ki); return pintarMenu(); }
  if (b.dataset.cup !== undefined) { sel.cup = Number(b.dataset.cup); sel.pista = CUPAS[sel.cup].pistas[0]; return pintarMenu(); }
  if (b.dataset.pista !== undefined) { sel.pista = Number(b.dataset.pista); return pintarMenu(); }
  if (b.dataset.accion) return accion(b.dataset.accion);
});

/* Ajustes del menú (cambian al instante) */
$('paso').addEventListener('change', (e) => {
  const campo = e.target.dataset.ajuste;
  if (!campo) return;
  if (campo === 'calidad') {
    ajustes.calidad = e.target.value; guardarAjustes();
    mundos.clear(); fijarCalidad(); actualizarFondo();
  } else if (campo === 'sonido') {
    ajustes.sonido = e.target.checked; guardarAjustes();
    SON.configurar(ajustes.sonido, ajustes.musica);
    if (ajustes.sonido && ajustes.musica) SON.empezarMusica('menu');
  } else if (campo === 'musica') {
    ajustes.musica = e.target.checked; guardarAjustes();
    SON.configurar(ajustes.sonido, ajustes.musica);
    if (ajustes.musica && ajustes.sonido) SON.empezarMusica('menu'); else SON.pararMusica();
  } else if (campo === 'autoacel') {
    ajustes.autoacel = e.target.checked; guardarAjustes();
    $('controles').classList.toggle('sin-a', ajustes.autoacel);
  }
});

const TECLAS_JUEGO = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '];
addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (TECLAS_JUEGO.includes(k) && EN_CARRERA.includes(estado)) e.preventDefault();
  teclas.add(k);
  if ((k === ' ' || k === 'e' || k === 'x') && !e.repeat && EN_CARRERA.includes(estado)) {
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

addEventListener('resize', () => { ajustarTamano(); revisarOrientacion(); });
addEventListener('orientationchange', revisarOrientacion);
addEventListener('pointerdown', () => {
  if (estado === ESTADO.MENU && ajustes.sonido && ajustes.musica) SON.empezarMusica('menu');
}, { once: true });

/* Ganchos para pruebas automáticas */
window.__carrera = {
  get estado() { return estado; }, get paso() { return paso; }, get sel() { return sel; },
  get karts() { return karts; }, get humano() { return humano; }, get equipo() { return equipo; },
  get P() { return P; }, get copa() { return copa; }, get tCarrera() { return tiempoCarrera(); },
  get pausado() { return pausado; }, get teclas() { return teclas; }, get ajustes() { return ajustes; },
  get camara() { return camara.cam; }, get motores() { return motores; }, get tEstadoJuego() { return tEstado; },
  get vitrinaActiva() { return vitrinaActiva; },
  irA, arrancar, empezarCarrera, empezarCopa, accion, togglePausa, usarObjetoHumano, tactil,
};

$('controles').classList.toggle('sin-a', ajustes.autoacel);
fijarCalidad();
pintarMenu();
requestAnimationFrame(bucle);
