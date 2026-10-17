/* Carrera de la fe · geometría de la pista (la misma para la física, la IA, el minimapa y la escena 3D) */
import { ANCHO } from './datos.js';

const K_PTS = 16;   /* puntos de control de la curva */
const M_SEG = 60;   /* muestras por tramo */

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

export function construirPista(def) {
  const pts = [];
  for (let i = 0; i < K_PTS; i++) {
    const a = (Math.PI * 2 * i) / K_PTS;
    pts.push([def.r[i] * Math.cos(a), def.r[i] * Math.sin(a)]);
  }
  const xs = [], ys = [];
  for (let i = 0; i < K_PTS; i++) {
    const p0 = pts[(i - 1 + K_PTS) % K_PTS], p1 = pts[i], p2 = pts[(i + 1) % K_PTS], p3 = pts[(i + 2) % K_PTS];
    for (let m = 0; m < M_SEG; m++) {
      const t = m / M_SEG;
      xs.push(catmull(p0[0], p1[0], p2[0], p3[0], t));
      ys.push(catmull(p0[1], p1[1], p2[1], p3[1], t));
    }
  }
  const N = xs.length;
  const S = new Float64Array(N + 1);
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N;
    S[i + 1] = S[i] + Math.hypot(xs[j] - xs[i], ys[j] - ys[i]);
  }
  const L = S[N];
  const tx = new Float64Array(N), ty = new Float64Array(N), ang = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const a = (i - 1 + N) % N, b = (i + 1) % N;
    const dx = xs[b] - xs[a], dy = ys[b] - ys[a], d = Math.hypot(dx, dy) || 1;
    tx[i] = dx / d; ty[i] = dy / d; ang[i] = Math.atan2(ty[i], tx[i]);
  }
  /* Curvatura: cuánto gira la pista en cada punto (la IA frena antes de las curvas cerradas) */
  const curv = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const a = (i - 2 + N) % N, b = (i + 2) % N;
    let dA = ang[b] - ang[a];
    while (dA > Math.PI) dA -= Math.PI * 2;
    while (dA < -Math.PI) dA += Math.PI * 2;
    curv[i] = Math.abs(dA) / Math.max(1, Math.hypot(xs[b] - xs[a], ys[b] - ys[a]));
  }
  const P = { def, N, xs, ys, S, L, tx, ty, ang, curv, mitad: ANCHO / 2, pads: [], cajas: [], medallas: [] };
  /* Zonas de turbo: tres por vuelta, en el centro del carril */
  for (const f of [0.08, 0.42, 0.74]) {
    const d0 = L * f;
    P.pads.push({ d0, d1: d0 + 110 });
  }
  /* Cajas de gracia: cuatro grupos por vuelta, dos carriles */
  for (let f = 0; f < 4; f++) {
    for (const lado of [-0.45, 0.45]) {
      P.cajas.push({ d: (L * (f + 0.25)) / 4, lado, vivo: true, espera: 0 });
    }
  }
  /* Medallas de fe: una línea en zigzag que marca el camino (24 por vuelta) */
  for (let k = 0; k < 24; k++) {
    const d = (L * k) / 24 + 20;
    P.medallas.push({ d, lado: 0.32 * Math.sin((k * Math.PI) / 2), vivo: true, espera: 0 });
  }
  return P;
}

/* Índice de la pista a una distancia desde la línea de salida */
export function enDistancia(P, d) {
  const a = ((d % P.L) + P.L) % P.L;
  let lo = 0, hi = P.N - 1;
  while (lo < hi) { const m = (lo + hi + 1) >> 1; if (P.S[m] <= a) lo = m; else hi = m - 1; }
  return lo;
}
/* Índice más cercano a un punto, buscando cerca del índice anterior */
export function indiceCercano(P, x, y, idx) {
  let mejor = idx, md = Infinity;
  for (let k = -40; k <= 40; k++) {
    const i = (idx + k + P.N) % P.N;
    const d = (P.xs[i] - x) ** 2 + (P.ys[i] - y) ** 2;
    if (d < md) { md = d; mejor = i; }
  }
  return mejor;
}
/* Distancia con signo al centro (+ = a la izquierda de la marcha) */
export function lateral(P, i, x, y) {
  return -(x - P.xs[i]) * P.ty[i] + (y - P.ys[i]) * P.tx[i];
}
/* Punto en la pista a una distancia y carril (lado: -0.5 a 0.5 del ancho) */
export function puntoLado(P, d, lado) {
  const i = enDistancia(P, d);
  return { x: P.xs[i] - P.ty[i] * lado * P.mitad, y: P.ys[i] + P.tx[i] * lado * P.mitad, i };
}
/* ¿La distancia d está dentro de una zona (con vuelta)? */
export function dentroDe(P, d0, d1, d) {
  const x = ((d - d0) % P.L + P.L) % P.L;
  return x <= d1 - d0;
}
/* Zona de turbo en la que está un kart, o null */
export function padEn(P, d, lat) {
  if (Math.abs(lat) > P.mitad * 0.75) return null;
  for (const p of P.pads) if (dentroDe(P, p.d0, p.d1, d)) return p;
  return null;
}
