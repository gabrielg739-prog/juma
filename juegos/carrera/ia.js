/* Carrera de la fe · cerebro de los rivales: siguen su carril, frenan antes de las curvas, se esquivan y usan sus objetos a tiempo */
import { VMAX } from './datos.js';
import { tiempoCarrera } from './fisica.js';

/* Decide acelerar, frenar, girar y derrapar para un kart rival */
export function controlIA(k, karts, P, dt) {
  const v = Math.hypot(k.vx, k.vy);
  const fx = Math.cos(k.h), fy = Math.sin(k.h);
  const paso = P.L / P.N;
  k.pausaIA ??= 0;

  /* Carril y esquive: si hay un kart justo delante, la meta se corre hacia el lado libre */
  let carril = k.carril * P.mitad;
  for (const o of karts) {
    if (o === k) continue;
    const dx = o.x - k.x, dy = o.y - k.y;
    const delante = dx * fx + dy * fy;
    const lat = -dx * fy + dy * fx;
    if (delante > 0 && delante < 120 && Math.abs(lat) < 46) carril += lat > 0 ? -46 : 46;
  }
  carril = Math.max(-P.mitad * 0.8, Math.min(P.mitad * 0.8, carril));

  /* Punto al que se dirige: un poco adelante, más lejos cuanto más rápido va */
  const j = (k.idx + Math.round((110 + v * 0.32) / paso)) % P.N;
  const px = P.xs[j] - P.ty[j] * carril, py = P.ys[j] + P.tx[j] * carril;
  let dif = Math.atan2(py - k.y, px - k.x) - k.h;
  while (dif > Math.PI) dif -= Math.PI * 2;
  while (dif < -Math.PI) dif += Math.PI * 2;
  const giro = Math.max(-1, Math.min(1, dif * 2.4));

  /* Velocidad segura: la curva más cerrada de los próximos metros marca el límite */
  let curv = 0;
  for (const d of [30, 70, 120, 180, 250]) curv = Math.max(curv, P.curv[(k.idx + Math.round(d / paso)) % P.N]);
  const vel = k.dif ? k.dif.vel : 1;
  let meta = Math.min(VMAX * 1.02 * vel, Math.sqrt(150 / Math.max(curv, 0.0004)) * (0.95 + 0.05 * k.agarre));
  if (Math.abs(dif) > 0.9) meta *= 0.85;

  /* Arranque con el retardo de cada personaje y pequeñas distracciones de vez en cuando */
  if (k.pausaIA > 0) k.pausaIA -= dt;
  else if (Math.random() < dt * 0.15 * (k.dif ? k.dif.errores : 1)) k.pausaIA = 0.35;
  const arranco = tiempoCarrera() > (k.retardo || 0);
  const acel = arranco && k.pausaIA <= 0 && v < meta + 10;
  const freno = v > meta + 60;
  /* La mitad de los rivales derrapa en las curvas cerradas (y así también consigue mini-turbos) */
  const deriva = Math.abs(giro) > 0.55 && v > 200 && k.i % 2 === 0;
  return { acel, freno, giro, deriva };
}

/* ¿Ya conviene usar el objeto que lleva el kart? */
export function decidirUso(k, karts, dt) {
  if (!k.item) return false;
  k.tiempoItem = (k.tiempoItem || 0) + dt;
  if (k.tiempoItem < (1 + (k.retardo || 1) * 0.6) * (k.dif ? k.dif.reaccion : 1)) return false;
  const detras = (d) => karts.some((o) => o !== k && o.dist < k.dist && k.dist - o.dist < d);
  const delante = karts.some((o) => o !== k && o.dist > k.dist && o.dist - k.dist < 300);
  const cerca = karts.some((o) => o !== k && Math.abs(o.dist - k.dist) < 280);
  switch (k.item) {
    case 'vela': return true;
    case 'rosario': return detras(260);
    case 'estrella': return k.puesto >= 4 || k.tiempoItem > 7;
    case 'incienso': return detras(230);
    case 'agua': return detras(200);
    case 'campanilla': return cerca;
    case 'paloma': return k.puesto > 1 && delante;
    default: return false;
  }
}
