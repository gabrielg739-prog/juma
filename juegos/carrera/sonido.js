/* Carrera de la fe · sonidos del juego: motor, derrape, objetos, golpes, cuenta atrás y una música de carrera propia (sintetizada con el motor de sonido JUMA) */

const S = () => window.JumaSonido || null;
const f = (n) => S().m2f(n);
let activo = true, conMusica = true;
let motorN = null;
const mus = { on: false, timer: null, paso: 0, sig: 0, modo: 'carrera', bpm: 146 };
/* Progresión propia: Mi menor · Do · Sol · Re */
const ACORDES = [[52, 55, 59], [48, 52, 55], [55, 59, 62], [50, 54, 57]];
const MELODIA = [64, 67, 69, 71, 74, 76, 79, 81];

export function configurar(sonido, musica) {
  activo = !!sonido; conMusica = !!musica;
  const js = S();
  if (js) { js.permitido = () => activo; js.musicaPermitida = () => conMusica; }
  if (!conMusica) pararMusica();
}

/* Se llama con un toque del jugador: el navegador solo deja sonar después de un gesto */
export function activar() { const js = S(); if (js) js.ctx(); }

/* Motor: un zumbido que sube de tono con la velocidad */
export function motor(frac, encendido) {
  const js = S();
  if (!js || (!motorN && !encendido)) return;
  const A = js.ctx();
  if (!motorN) {
    const g = A.createGain(); g.gain.value = 0.0001; g.connect(A.destination);
    const flt = A.createBiquadFilter(); flt.type = 'lowpass'; flt.frequency.value = 500; flt.Q.value = 2; flt.connect(g);
    const o1 = A.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 60;
    const o2 = A.createOscillator(); o2.type = 'square'; o2.frequency.value = 30;
    const m2 = A.createGain(); m2.gain.value = 0.5;
    o1.connect(flt); o2.connect(m2); m2.connect(flt);
    o1.start(); o2.start();
    motorN = { g, flt, o1, o2 };
  }
  const t = A.currentTime, n = motorN, hz = 56 + frac * 120;
  n.g.gain.setTargetAtTime(encendido && activo ? 0.012 + 0.018 * frac : 0.0001, t, 0.1);
  n.o1.frequency.setTargetAtTime(hz, t, 0.06);
  n.o2.frequency.setTargetAtTime(hz / 2, t, 0.06);
  n.flt.frequency.setTargetAtTime(350 + frac * 1200, t, 0.1);
}

export function derrape() {
  const js = S();
  if (js && activo) js.ruido({ dur: 0.18, vol: 0.05, f: 2600, tipo: 'bandpass', q: 1.2, eco: 0.05 });
}

/* Sonidos de cada suceso. Solo suenan con fuerza los del jugador; los demás, si chocan cerca */
export function evento(e, humano) {
  const js = S();
  if (!js || !activo) return;
  const k = e.k || e.a;
  const mio = k === humano;
  switch (e.tipo) {
    case 'nivelDeriva':
      if (mio) js.campana(f(76 + e.tier * 4), 0.18, 0.05, { razon: 2, indice: 0.5 });
      break;
    case 'miniturbo':
      if (mio) {
        js.E.soplo(0.35, 0.16, 800, 2600);
        js.campana(f(72 + e.tier * 4), 0.35, 0.06, { razon: 2, indice: 0.8, eco: 0.2 });
      }
      break;
    case 'pad':
      if (mio) { js.E.soplo(0.45, 0.12, 500, 3500); js.campana(f(76), 0.3, 0.045, { eco: 0.2 }); }
      break;
    case 'objeto':
      if (mio) js.campana(f(88), 0.25, 0.05, { razon: 2, indice: 0.6, eco: 0.2 });
      break;
    case 'usa':
      if (mio) usar(js, e.nombre);
      break;
    case 'golpe':
      if (mio) { js.E.bonk(1); js.E.golpe(0.5); }
      break;
    case 'bloqueo':
      if (mio) js.E.vidrio(0.6);
      break;
    case 'choque':
      if (e.a === humano || e.b === humano) js.E.golpe(0.2 + e.fuerza * 0.3);
      break;
    case 'rescate':
      if (mio) js.E.bonk(0.7);
      break;
    case 'medalla':
      if (mio) js.campana(f(84), 0.2, 0.05, { eco: 0.15 });
      break;
    case 'meta':
      if (mio) js.E.fanfarria();
      break;
    default: break;
  }
}

function usar(js, tipo) {
  switch (tipo) {
    case 'vela': js.E.soplo(0.5, 0.2, 300, 1800); break;
    case 'rosario': js.E.magia(0.6); break;
    case 'estrella': [0, 4, 7, 12].forEach((n, i) => js.arpa(f(72 + n), 0.3, 0.06, { ret: i * 0.06 })); break;
    case 'incienso': js.E.soplo(0.6, 0.15, 200, 900); break;
    case 'campanilla':
      js.campana(f(72), 1.2, 0.09);
      js.campana(f(79), 1.0, 0.07, { ret: 0.1 });
      js.campana(f(84), 1.0, 0.05, { ret: 0.2 });
      break;
    case 'paloma':
      js.osc({ f: 1800, f2: 2600, tf: 0.12, dur: 0.14, vol: 0.07, tipo: 'sine' });
      js.osc({ f: 2000, f2: 2900, tf: 0.1, dur: 0.12, vol: 0.05, tipo: 'sine', ret: 0.14 });
      break;
    case 'agua':
      js.osc({ f: 1400, f2: 300, tf: 0.25, dur: 0.28, vol: 0.12, tipo: 'sine' });
      js.ruido({ dur: 0.2, vol: 0.08, f: 1800, tipo: 'bandpass' });
      break;
    default: break;
  }
}

/* Pitidos de la cuenta atrás: idx 0..2 = 3, 2, 1 · idx 3 = ¡YA! */
export function cuenta(idx) {
  const js = S();
  if (!js || !activo) return;
  if (idx < 3) js.E.tictac(false);
  else { js.E.tictac(true); js.campana(f(76), 0.6, 0.08, { eco: 0.3 }); }
}

export function vuelta(ultima) {
  const js = S();
  if (!js || !activo) return;
  js.campana(f(72), 0.5, 0.08);
  js.campana(f(76), 0.5, 0.08, { ret: 0.12 });
  if (ultima) js.E.tictac(true);
}

/* ---------- Música: se compone en tiempo real con bloques de 16 pulsos ---------- */
function pulso(p, r) {
  const js = S();
  const q = p % 16, ac = ACORDES[Math.floor(p / 16) % 4];
  const con = mus.modo === 'carrera';
  if (con) {
    if (q % 4 === 0) js.bombo({ ret: r, vol: 0.3 });
    if (q === 4 || q === 12) js.caja({ ret: r, vol: 0.12 });
    js.platillo({ ret: r, vol: q % 4 === 2 ? 0.03 : 0.015, abierto: q === 6 || q === 14 });
  }
  if (q % 2 === 0) js.bajo(f(ac[0] - (q % 4 === 0 ? 24 : 12)), 0.2, con ? 0.12 : 0.07, { ret: r });
  if (q === 0 || q === 8) js.acorde(ac.map((n) => f(n)), 0.95, con ? 0.07 : 0.09, { ret: r, eco: 0.3 });
  if (q % 2 === 1) js.arpa(f(ac[(q >> 1) % 3] + 12), 0.25, 0.045, { ret: r, eco: 0.3 });
  if ([0, 6, 10, 12].includes(q) && Math.random() < 0.6) {
    js.marimba(f(MELODIA[Math.floor(Math.random() * MELODIA.length)]), 0.35, 0.06, { ret: r, eco: 0.3 });
  }
  if (p % 64 === 60) js.campana(f(MELODIA[7]), 0.8, 0.03, { ret: r, eco: 0.6, razon: 3.5, indice: 1.4 });
}

function programar() {
  const js = S();
  if (!js || !mus.on || !conMusica || !activo) return;
  const A = js.ctx(), ahora = A.currentTime;
  if (mus.sig < ahora) mus.sig = ahora + 0.05;
  const paso = 60 / mus.bpm / 4;
  while (mus.sig < ahora + 0.15) { pulso(mus.paso, mus.sig - ahora); mus.sig += paso; mus.paso++; }
}

export function empezarMusica(modo = 'carrera') {
  const js = S();
  if (!js || !conMusica || !activo) return;
  js.ctx();
  if (mus.on && mus.modo === modo) return;
  mus.on = true; mus.modo = modo; mus.paso = 0; mus.sig = 0;
  if (!mus.timer) mus.timer = setInterval(programar, 25);
}

export function pararMusica() {
  mus.on = false;
  if (mus.timer) { clearInterval(mus.timer); mus.timer = null; }
}

configurar(true, true);
