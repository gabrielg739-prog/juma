/* Carrera de la fe · física de los karts: aceleración, giro, derrape y mini-turbo, zonas de turbo, vueltas y choques */
import { VMAX, ACEL, FRENO, FRICC, GIRO, AGARRE, AGARRE_DERIVA, VUELTAS, PERSONAJES } from './datos.js';
import { lateral, indiceCercano, enDistancia, padEn } from './pista.js';

const TOPE_ATRAS = -120;
/* Cola de sucesos para que el sonido y los efectos reaccionen (la lee main.js cada cuadro) */
export const eventos = [];
let reloj = 0;
export const tiempoCarrera = () => reloj;

/* Crea los seis karts en la parrilla de salida, detrás de la línea de meta */
export function crearParrilla(P, personajes = PERSONAJES) {
  return personajes.map((p, i) => {
    const d0 = -(70 + Math.floor(i / 2) * 80);
    const lado = (i % 2 === 0 ? -1 : 1) * P.mitad * 0.42;
    const idx = enDistancia(P, d0);
    const x = P.xs[idx] - P.ty[idx] * lado, y = P.ys[idx] + P.tx[idx] * lado;
    return {
      i, nombre: p.nombre, color: p.color, borde: p.borde, humano: !!p.humano,
      peso: p.peso, acel: p.acel, agarre: p.agarre,
      x, y, h: Math.atan2(P.ty[idx], P.tx[idx]), vx: 0, vy: 0,
      idx, dist: d0, vuelta: 1, listo: false, fin: null,
      item: null, tiempoItem: 0, retardo: 1 + Math.random() * 2, carril: p.humano ? 0 : (Math.random() - 0.5) * 0.7,
      escudo: 0, aturd: 0, lento: 0, turbo: 0, turboPad: 0, estrella: 0,
      deriva: 0, tierDerivaActiva: 0, giroVis: 0, fuera: 0, ritmo: 1, medallas: 0, ultimoPad: null, velMax: 0,
    };
  });
}

/* Un paso de física para un kart. ctl = { acel, freno, giro (-1..1), deriva } */
export function avanzar(k, dt, ctl, P) {
  for (const c of ['escudo', 'lento', 'turbo', 'turboPad', 'estrella']) if (k[c] > 0) k[c] = Math.max(0, k[c] - dt);
  if (k.aturd > 0) { k.aturd -= dt; ctl = { acel: false, freno: false, giro: 0, deriva: false }; }

  const fx = Math.cos(k.h), fy = Math.sin(k.h);
  let vf = k.vx * fx + k.vy * fy;
  let vl = -k.vx * fy + k.vy * fx;
  const lat = lateral(P, k.idx, k.x, k.y);
  const enPista = Math.abs(lat) <= P.mitad + 4;

  /* Velocidad máxima: los personajes cambian un poco, las zonas de turbo y los objetos la modifican */
  let vmax = VMAX * (0.5 + 0.5 * k.acel) * (1 + k.medallas * 0.015);
  if (k.turbo > 0) vmax *= 1.3;
  if (k.turboPad > 0) vmax *= 1.2;
  if (k.estrella > 0) vmax *= 1.25;
  if (k.lento > 0) vmax *= 0.5;
  if (!enPista) vmax *= 0.6;
  vmax *= k.ritmo;
  const tasaAcel = ACEL * k.acel * (k.turbo > 0 ? 1.5 : 1) * (k.turboPad > 0 ? 1.3 : 1);

  if (ctl.acel && vf < vmax) vf = Math.min(vmax, vf + tasaAcel * dt);
  else if (vf > vmax) vf = Math.max(vmax, vf - FRICC * 1.5 * dt);
  if (ctl.freno) vf = Math.max(TOPE_ATRAS, vf - FRENO * dt);
  if (!ctl.acel && !ctl.freno) vf -= Math.sign(vf) * Math.min(Math.abs(vf), FRICC * dt * 0.5);

  /* Giro y derrape. Al derrapar el kart gira más y se agarra menos; al soltar sale un empujón */
  const velo = Math.abs(vf);
  const mult = Math.max(0.35, Math.min(1, velo / 120));
  let grip = AGARRE * k.agarre;
  const derivando = ctl.deriva && velo > 150 && ctl.giro !== 0;
  if (derivando) {
    k.deriva += dt; grip = AGARRE_DERIVA;
    k.h += ctl.giro * GIRO * 1.35 * mult * dt;
    k.giroVis = ctl.giro;
    const tier = k.deriva > 2.6 ? 3 : k.deriva > 1.6 ? 2 : k.deriva > 0.8 ? 1 : 0;
    if (tier !== k.tierDerivaActiva) { k.tierDerivaActiva = tier; if (tier > 0) eventos.push({ tipo: 'nivelDeriva', k, tier }); }
  } else {
    if (k.deriva > 0.8) {
      const tier = k.deriva > 2.6 ? 3 : k.deriva > 1.6 ? 2 : 1;
      k.turboPad = Math.max(k.turboPad, [0, 0.5, 0.9, 1.4][tier]);
      eventos.push({ tipo: 'miniturbo', k, tier });
    }
    k.deriva = 0; k.tierDerivaActiva = 0;
    k.h += ctl.giro * GIRO * mult * dt * (vf < 0 ? -1 : 1);
    k.giroVis = ctl.giro;
  }
  const nfx = Math.cos(k.h), nfy = Math.sin(k.h);
  vl *= Math.max(0, 1 - grip * dt);
  k.vx = vf * nfx - vl * nfy;
  k.vy = vf * nfy + vl * nfx;
  k.x += k.vx * dt;
  k.y += k.vy * dt;
  if (k.aturd > 0) { k.vx *= 0.9; k.vy *= 0.9; }

  /* Fuera de la pista: se frena, y si pasa mucho tiempo lejos vuelve al camino */
  const i = indiceCercano(P, k.x, k.y, k.idx);
  const l2 = lateral(P, i, k.x, k.y);
  const tope = P.mitad + 220;
  if (Math.abs(l2) > tope) {
    const lado = Math.sign(l2) * (Math.abs(l2) - tope);
    k.x -= -P.ty[i] * lado; k.y -= P.tx[i] * lado;
    const nx = -P.ty[i], ny = P.tx[i], vn = k.vx * nx + k.vy * ny;
    if (vn * l2 > 0) { k.vx -= nx * vn; k.vy -= ny * vn; }
  }
  if (Math.abs(l2) > P.mitad + 60) {
    k.fuera += dt;
    if (k.fuera > 1.2) {
      k.x = P.xs[i]; k.y = P.ys[i];
      k.h = Math.atan2(P.ty[i], P.tx[i]);
      k.vx = P.tx[i] * 120; k.vy = P.ty[i] * 120;
      k.fuera = 0;
      eventos.push({ tipo: 'rescate', k });
    }
  } else k.fuera = 0;

  /* Avance por la pista y vueltas */
  const j = indiceCercano(P, k.x, k.y, i);
  let delta = P.S[j] - P.S[k.idx];
  if (delta > P.L / 2) delta -= P.L; else if (delta < -P.L / 2) delta += P.L;
  k.dist += delta;
  k.idx = j;
  k.vuelta = Math.max(1, Math.floor(k.dist / P.L) + 1);
  if (!k.listo && k.dist >= P.L * VUELTAS) { k.listo = true; k.fin = reloj; eventos.push({ tipo: 'meta', k }); }

  /* Zonas de turbo: al entrar, empujón (una vez); mientras se está encima, se mantiene */
  const pad = padEn(P, P.S[k.idx], lat);
  if (pad) {
    if (pad !== k.ultimoPad) eventos.push({ tipo: 'pad', k });
    k.turboPad = Math.max(k.turboPad, 0.35);
    k.ultimoPad = pad;
  } else k.ultimoPad = null;

  k.velMax = Math.max(k.velMax || 0, Math.hypot(k.vx, k.vy));
}

/* Los karts no se atraviesan: si se tocan, se separan y pierden un poco de velocidad */
export function chocarKarts(karts) {
  for (let a = 0; a < karts.length; a++) {
    for (let b = a + 1; b < karts.length; b++) {
      const A = karts[a], B = karts[b];
      const dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy);
      const min = 30;
      if (d >= min || d < 0.01) continue;
      const nx = dx / d, ny = dy / d, empuje = (min - d) / 2;
      const rel = (A.vx - B.vx) * nx + (A.vy - B.vy) * ny;
      A.x -= nx * empuje; A.y -= ny * empuje;
      B.x += nx * empuje; B.y += ny * empuje;
      A.vx *= 0.92; A.vy *= 0.92; B.vx *= 0.92; B.vy *= 0.92;
      if (Math.abs(rel) > 120) eventos.push({ tipo: 'choque', a: A, b: B, fuerza: Math.min(1, Math.abs(rel) / 400) });
    }
  }
}

/* Paso completo de la carrera: controles[i] es el control de karts[i] */
export function paso(karts, P, dt, controles) {
  reloj += dt;
  for (let i = 0; i < karts.length; i++) avanzar(karts[i], dt, controles[i], P);
  chocarKarts(karts);
}
export function reiniciarReloj() { reloj = 0; eventos.length = 0; }

/* Orden de la carrera: primero los que ya llegaron (por hora de llegada), luego por distancia recorrida */
export function ordenar(karts) {
  const clave = (k) => (k.listo ? 1e9 - k.fin : k.dist);
  return [...karts].sort((a, b) => clave(b) - clave(a));
}
