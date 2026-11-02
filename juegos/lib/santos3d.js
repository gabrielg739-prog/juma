/* =====================================================================
   JUMA · Santos en 3D a partir de sus hojas de personaje
   ---------------------------------------------------------------------
   Con las vistas dibujadas (frente, espalda y lados) se
   construye un modelo 3D de verdad:
     1. Forma: cada altura del cuerpo es un anillo cuyo ancho sale de la
        vista de frente y cuya profundidad sale de la vista de lado.
        Cabeza, tronco y hábito forman una pieza; brazos y zapatos van
        aparte (los brazos se separan aunque arriba toquen el cuerpo).
     2. Color: cada triángulo se pinta con la vista desde la que se ve
        (frente, espalda o un lado): de frente se ve exactamente el dibujo
        de frente, de espaldas el de espaldas, etc. Lo que mira hacia
        arriba usa la espalda, que es como lo ve la cámara del juego.
     3. Esqueleto: cadera, columna, pecho, cabeza, hombros, codos, manos,
        muslos, rodillas y tobillos, con los mismos nombres y ejes que el
        resto de personajes del juego, para usar sus mismas animaciones.
        El hábito y la sotana se mueven con las piernas.
   ===================================================================== */

const VISTAS = ['frente', 'espalda', 'derecha', 'izquierda'];
const ALTO = 1.86;      // altura de la figura (unidades del juego antes de su escala)
const PASO = 3;         // cada cuántos píxeles de alto se pone un anillo
const LADOS_CUERPO = 30, LADOS_MIEMBRO = 14;
const EXP = 2.35;       // forma de los anillos: 2 = elipse; un poco más, más llena

function cargar(url) {
  return new Promise((ok, mal) => { const im = new Image(); im.onload = () => ok(im); im.onerror = () => mal(new Error('No se pudo cargar ' + url)); im.src = url; });
}
function datos(im) {
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
  const g = c.getContext('2d'); g.drawImage(im, 0, 0);
  const d = g.getImageData(0, 0, c.width, c.height);
  const a = new Uint8Array(c.width * c.height);
  for (let i = 0; i < a.length; i++) a[i] = d.data[i * 4 + 3] > 127 ? 1 : 0;
  return { w: c.width, h: c.height, a, img: d };
}
// Tramos opacos de una fila (se cierran huecos de 1-2 píxeles y se ignoran motas)
function tramos(M, v) {
  const out = []; if (v < 0 || v >= M.h) return out;
  const fila = v * M.w;
  let i = 0;
  while (i < M.w) {
    if (M.a[fila + i]) { let j = i; while (j < M.w && M.a[fila + j]) j++; out.push([i, j]); i = j; } else i++;
  }
  const r = [];
  for (const t of out) { if (r.length && t[0] - r[r.length - 1][1] <= 2) r[r.length - 1][1] = t[1]; else r.push(t.slice()); }
  return r.filter((t) => t[1] - t[0] >= 2);
}
function extremos(M, v) { const t = tramos(M, v); return t.length ? [t[0][0], t[t.length - 1][1]] : null; }
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

/* Atlas con las cinco vistas; los bordes se «estiran» hacia fuera para que no aparezcan halos blancos */
function crearAtlas(Ms) {
  const W = Ms.reduce((s, M) => s + M.w + 4, 0) + 16, H = Math.max(...Ms.map((M) => M.h)) + 2;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const rects = []; let x = 0;
  for (const M of Ms) {
    const d = new ImageData(new Uint8ClampedArray(M.img.data), M.w, M.h);
    const op = Uint8Array.from(M.a);
    for (let pasada = 0; pasada < 10; pasada++) {
      const nuevo = [];
      for (let v = 0; v < M.h; v++) for (let u = 0; u < M.w; u++) {
        const i = v * M.w + u; if (op[i]) continue;
        for (const [du, dv] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const uu = u + du, vv = v + dv; if (uu < 0 || vv < 0 || uu >= M.w || vv >= M.h) continue;
          const j = vv * M.w + uu; if (!op[j]) continue;
          nuevo.push(i, j); break;
        }
      }
      if (!nuevo.length) break;
      for (let k = 0; k < nuevo.length; k += 2) { const i = nuevo[k], j = nuevo[k + 1]; for (let q = 0; q < 3; q++) d.data[i * 4 + q] = d.data[j * 4 + q]; op[i] = 1; }
    }
    for (let i = 0; i < M.w * M.h; i++) d.data[i * 4 + 3] = 255;
    g.putImageData(d, x, 0);
    rects.push({ x, y: 0 });
    x += M.w + 4;
  }
  return { canvas: c, W, H, rects, libre: x };
}

/**
 * Construye el santo. Devuelve el mismo tipo de objeto que los demás personajes del juego.
 * @param {object} THREE
 * @param {string} id        nombre del personaje (allamano, leonella…)
 * @param {string} carpeta   carpeta de las vistas (personajes/)
 * @param {object} op        { colorPiernas: 0x222222 }
 */
export async function construirSanto(THREE, id, carpeta, op = {}) {
  const imgs = await Promise.all(VISTAS.map((v) => cargar(`${carpeta}${id}-${v}.png`)));
  const [F, B, D, I] = imgs.map(datos);
  const s = ALTO / F.h;                          // unidades por píxel
  const y2v = (y, M) => Math.round(M.h - y / s); // altura → fila de una vista
  const v2y = (v) => (F.h - v) * s;
  const cxF = F.w / 2, cxB = B.w / 2;
  // Centro del cuerpo en las vistas de lado: el de la fila a media altura
  const centroLado = (M) => { const e = extremos(M, Math.round(M.h * 0.55)) || [0, M.w]; return (e[0] + e[1]) / 2; };
  const cxD = centroLado(D), cxI = centroLado(I);
  const profundidad = (y) => {
    const e = extremos(D, y2v(y, D));
    return e ? [-(e[1] - cxD) * s, -(e[0] - cxD) * s] : null; // [zmin, zmax]
  };

  /* ---------- Partes en la vista de frente ---------- */
  const filas = [];
  for (let v = 0; v < F.h; v++) filas.push(tramos(F, v));
  const ancho = (v) => { const t = filas[v]; return t.length ? t[t.length - 1][1] - t[0][0] : 0; };
  const top = filas.findIndex((t) => t.length);
  let bottom = F.h - 1; while (bottom > 0 && !filas[bottom].length) bottom--;
  const h = bottom - top;
  // Cuello: la fila más estrecha entre el 8 % y el 32 % de la altura
  let cuello = top + Math.round(h * 0.2), anchoCuello = 1e9;
  for (let v = top + Math.round(h * 0.08); v < top + Math.round(h * 0.32); v++) { const a = ancho(v); if (a > 0 && a < anchoCuello) { anchoCuello = a; cuello = v; } }
  // Tramo del cuerpo en una fila: el que contiene el centro (o el más cercano)
  const tramoCuerpo = (v) => {
    const t = filas[v]; if (!t.length) return -1;
    let mejor = 0, d = 1e9;
    t.forEach((r, i) => { const dd = cxF >= r[0] && cxF < r[1] ? 0 : Math.min(Math.abs(cxF - r[0]), Math.abs(cxF - r[1])); if (dd < d) { d = dd; mejor = i; } });
    return mejor;
  };
  // Zapatos: abajo del todo la silueta se parte en dos
  let dobladillo = bottom;
  while (dobladillo > top + h * 0.75 && filas[dobladillo - 1].length >= 2) dobladillo--;
  if (bottom - dobladillo < 3) dobladillo = bottom - Math.round(h * 0.05);
  // Brazos: filas (entre el cuello y la cadera) con un tramo separado a cada lado
  const zonaBrazo0 = cuello + 4, zonaBrazo1 = Math.min(dobladillo - 4, top + Math.round(h * 0.72));
  const sep = [[], []]; // [lado][{v, ext, int}]
  for (let v = zonaBrazo0; v < zonaBrazo1; v++) {
    const t = filas[v], k = tramoCuerpo(v); if (k < 0) continue;
    if (k > 0) sep[0].push({ v, ext: t[0][0], int: t[k - 1][1], cuerpo: t[k][0] });
    if (k < t.length - 1) sep[1].push({ v, ext: t[t.length - 1][1], int: t[k + 1][0], cuerpo: t[k][1] });
  }
  const ultimaSep = (lado, v) => { let q = null; for (const x of sep[lado]) { if (x.v <= v) q = x; else break; } return q; };
  const brazos = [0, 1].map((lado) => {
    const L = sep[lado];
    if (L.length < 4) return null;
    const v0 = L[0].v, vFin = L[L.length - 1].v + 3;
    // Borde interior del brazo donde se separa; hacia arriba se prolonga en línea recta
    const muestra = L.slice(0, Math.min(10, L.length));
    const n = muestra.length, mv = muestra.reduce((a, b) => a + b.v, 0) / n, mi = muestra.reduce((a, b) => a + b.int, 0) / n;
    let num = 0, den = 0; for (const q of muestra) { num += (q.v - mv) * (q.int - mi); den += (q.v - mv) ** 2; }
    const pend = den ? Math.max(-0.6, Math.min(0.6, num / den)) : 0;
    const interior = (v) => mi + pend * (v - mv);
    const hombro = Math.round(cuello + (v0 - cuello) * 0.28);
    const anchoMin = Math.max(4, Math.abs(muestra[0].ext - muestra[0].int) * 0.75);
    const anillos = [];
    for (let v = hombro; v <= vFin; v += 1) {
      const t = filas[v]; if (!t.length) continue;
      const q = L.find((x) => x.v === v);
      let a, b;
      if (q) { a = Math.min(q.ext, q.int); b = Math.max(q.ext, q.int); }
      else if (v < v0) {
        const e = lado === 0 ? t[0][0] : t[t.length - 1][1];
        let i = interior(v);
        if (Math.abs(i - e) < anchoMin) i = e + (lado === 0 ? anchoMin : -anchoMin);
        a = Math.min(e, i); b = Math.max(e, i);
      } else {
        // La mano toca el hábito: se sigue con el último ancho conocido
        const ult = ultimaSep(lado, v); a = Math.min(ult.ext, ult.int); b = Math.max(ult.ext, ult.int);
      }
      anillos.push({ v, a, b });
    }
    return { lado, hombro, v0, vFin, anillos, interior };
  });
  // Ancho del cuerpo en cada fila (sin los brazos)
  const cuerpoEn = (v) => {
    const t = filas[v]; if (!t.length) return null;
    let a = t[0][0], b = t[t.length - 1][1];
    const k = tramoCuerpo(v);
    for (const br of brazos) {
      if (!br || v < br.hombro || v > br.vFin) continue;
      let borde;
      if (v < br.v0) borde = br.interior(v) + (br.lado === 0 ? -2 : 2);
      else { const q = sep[br.lado].find((x) => x.v === v) || ultimaSep(br.lado, v); borde = q.cuerpo; }
      if (br.lado === 0) a = Math.max(a, borde); else b = Math.min(b, borde);
    }
    return b - a > 2 ? [a, b] : null;
  };

  /* ---------- Malla ---------- */
  const piezas = []; // { anillos: [{y, cx, cz, rx, rz}], lados, parte, lado }
  const suaviza = (arr, k) => arr.map((r, i) => { const o = { ...r }; for (const c of k) { let sum = 0, n = 0; for (let j = -1; j <= 1; j++) { const q = arr[i + j]; if (q) { sum += q[c]; n++; } } o[c] = sum / n; } return o; });
  // Cuerpo: cabeza, tronco y hábito hasta el dobladillo
  let an = [];
  for (let v = top; v <= dobladillo; v += (v < top + 6 ? 1 : PASO)) {
    const c = cuerpoEn(v); if (!c) continue;
    const y = v2y(v), z = profundidad(y) || [-0.1, 0.1];
    an.push({ y, cx: -((c[0] + c[1]) / 2 - cxF) * s, rx: (c[1] - c[0]) / 2 * s, cz: (z[0] + z[1]) / 2, rz: Math.max(0.02, (z[1] - z[0]) / 2) });
  }
  an = suaviza(an, ['cx', 'rx', 'cz', 'rz']);
  piezas.push({ anillos: an, lados: LADOS_CUERPO, parte: 'cuerpo' });
  // Brazos
  for (const br of brazos) {
    if (!br) continue;
    let ab = [];
    for (let i = 0; i < br.anillos.length; i += PASO) {
      const r = br.anillos[i], y = v2y(r.v), z = profundidad(y) || [-0.1, 0.1];
      const rx = (r.b - r.a) / 2 * s;
      ab.push({ y, cx: -((r.a + r.b) / 2 - cxF) * s, rx, cz: (z[0] + z[1]) / 2 - rx * 0.1, rz: rx * 0.95 });
    }
    ab = suaviza(ab, ['cx', 'rx', 'cz', 'rz']);
    if (ab.length >= 3) piezas.push({ anillos: ab, lados: LADOS_MIEMBRO, parte: 'brazo', lado: br.lado });
  }
  // Zapatos
  const zapatos = [[], []];
  for (let v = dobladillo - 2; v <= bottom; v += 2) {
    const t = filas[v]; if (!t.length) continue;
    const y = v2y(v), z = profundidad(y) || [-0.08, 0.08];
    const izq = t.filter((r) => (r[0] + r[1]) / 2 < cxF), der = t.filter((r) => (r[0] + r[1]) / 2 >= cxF);
    for (const [lado, rs] of [[0, izq], [1, der]]) {
      if (!rs.length) continue;
      const a = rs[0][0], b = rs[rs.length - 1][1];
      zapatos[lado].push({ y, cx: -((a + b) / 2 - cxF) * s, rx: (b - a) / 2 * s, cz: (z[0] + z[1]) / 2, rz: (z[1] - z[0]) / 2 });
    }
  }
  const pieX = [0, 1].map((l) => (zapatos[l].length ? zapatos[l].reduce((a, r) => a + r.cx, 0) / zapatos[l].length : (l ? -0.09 : 0.09)));
  for (const l of [0, 1]) if (zapatos[l].length >= 2) piezas.push({ anillos: suaviza(zapatos[l], ['cx', 'rx']), lados: LADOS_MIEMBRO, parte: 'zapato', lado: l });

  /* ---------- Esqueleto (mismos nombres que el resto de personajes) ---------- */
  const yCuello = v2y(cuello), alturaCuerpo = yCuello / 0.876;
  const yCadera = alturaCuerpo * 0.516, yPecho = alturaCuerpo * 0.653, yTorso = alturaCuerpo * 0.537;
  const yDob = v2y(dobladillo), yRodilla = lerp(yDob, yCadera, 0.45), yTobillo = Math.max(0.05, v2y(dobladillo) - 0.02);
  // Piernas (medias o pantalón) escondidas bajo el hábito: se ven al levantar el pie
  const radioPierna = Math.max(0.03, Math.min(0.05, (zapatos[0][0] ? zapatos[0][0].rx : 0.05) * 0.62));
  for (const l of [0, 1]) {
    const an2 = [];
    for (let k = 0; k <= 8; k++) { const y = lerp(yTobillo + 0.02, lerp(yDob, yCadera, 0.55), k / 8); an2.push({ y, cx: pieX[l], rx: radioPierna * lerp(1, 1.12, k / 8), cz: 0, rz: radioPierna * lerp(1, 1.12, k / 8) }); }
    an2.reverse();
    piezas.push({ anillos: an2, lados: 10, parte: 'pierna', lado: l, color: true });
  }

  const Bn = (nombre, x, y, z, padre, abs) => { const b = new THREE.Bone(); b.name = nombre; b.userData.abs = new THREE.Vector3(x, y, z); if (padre) { b.position.set(x - padre.userData.abs.x, y - padre.userData.abs.y, z - padre.userData.abs.z); padre.add(b); } else b.position.set(x, y, z); return b; };
  const cadera = Bn('cadera', 0, yCadera, 0, null);
  const torso = Bn('torso', 0, yTorso, 0, cadera);
  const pecho = Bn('pecho', 0, yPecho, 0, torso);
  const cabeza = Bn('cabeza', 0, yCuello, 0, pecho);
  const huesosBrazo = brazos.map((br, i) => {
    const lado = i === 0 ? 1 : -1; // el brazo 0 está en el lado de la x negativa del juego
    const pieza = piezas.find((p) => p.parte === 'brazo' && p.lado === i);
    const ar = pieza ? pieza.anillos : [{ y: yPecho, cx: 0.2 * lado }, { y: yCadera, cx: 0.22 * lado }];
    const yH = ar[0].y, yM = ar[ar.length - 1].y, xH = ar[0].cx;
    const yC = lerp(yH, yM, 0.46), yMu = lerp(yH, yM, 0.8);
    const xC = ar[Math.round((ar.length - 1) * 0.46)].cx, xMu = ar[Math.round((ar.length - 1) * 0.8)].cx;
    const hom = Bn('hombro' + i, xH, yH - 0.02, 0, pecho);
    const codo = Bn('codo' + i, xC, yC, 0, hom);
    const mano = Bn('mano' + i, xMu, yMu, 0, codo);
    return { hom, codo, mano, yH, yC, yMu, yM };
  });
  const huesosPierna = [0, 1].map((l) => {
    const p = Bn('muslo' + l, pieX[l], yCadera - 0.03, 0, cadera);
    const rod = Bn('rodilla' + l, pieX[l], yRodilla, 0, p);
    const tob = Bn('tobillo' + l, pieX[l], yTobillo, 0, rod);
    return { p, rod, tob };
  });
  // El brazo 0 del juego está en la x negativa: si en el dibujo es el otro, se intercambian
  const brazosJuego = [0, 1].map((k) => huesosBrazo.find((b) => Math.sign(b.hom.userData.abs.x || (k ? 1 : -1)) === (k ? 1 : -1)) || huesosBrazo[k]);
  const piernasJuego = [0, 1].map((k) => huesosPierna.find((p) => Math.sign(p.p.userData.abs.x || (k ? 1 : -1)) === (k ? 1 : -1)) || huesosPierna[k]);
  const huesos = [cadera, torso, pecho, cabeza, ...huesoBrazoLista(huesosBrazo), ...huesosPierna.flatMap((p) => [p.p, p.rod, p.tob])];
  function huesoBrazoLista(hb) { return hb.flatMap((b) => [b.hom, b.codo, b.mano]); }
  const idx = (b) => huesos.indexOf(b);

  // Pesos de cada vértice según la parte y la altura
  function pesos(parte, lado, x, y) {
    const w = [];
    const pon = (b, p) => { if (p > 0.001) w.push([idx(b), p]); };
    if (parte === 'cuerpo') {
      if (y >= yCuello - 0.02) { const t = sstep(yCuello - 0.04, yCuello + 0.03, y); pon(cabeza, t); pon(pecho, 1 - t); }
      else if (y >= yPecho) pon(pecho, 1);
      else if (y >= yCadera) { const t = sstep(yCadera, yPecho, y); pon(pecho, t); pon(torso, 1 - t); }
      else {
        // Falda: abajo sigue a los muslos (cada mitad al suyo)
        const wl = Math.pow(Math.min(1, Math.max(0, (yCadera - y) / Math.max(0.05, yCadera - yDob))), 0.8) * 0.85;
        const f = sstep(-0.05, 0.05, x - (pieX[0] + pieX[1]) / 2);
        const izq = pieX[0] < pieX[1] ? 0 : 1; // pierna con x menor
        const mL = huesosPierna[izq].p, mR = huesosPierna[1 - izq].p;
        pon(cadera, 1 - wl); pon(mL, wl * (1 - f)); pon(mR, wl * f);
      }
    } else if (parte === 'brazo') {
      const hb = huesosBrazo[lado];
      if (y > hb.yC + 0.03) { const t = sstep(hb.yH - 0.06, hb.yH + 0.01, y); pon(pecho, t * 0.6); pon(hb.hom, 1 - t * 0.6); }
      else if (y > hb.yMu) { const t = sstep(hb.yC - 0.03, hb.yC + 0.03, y); pon(hb.hom, t); pon(hb.codo, 1 - t); }
      else { const t = sstep(hb.yMu - 0.02, hb.yMu + 0.02, y); pon(hb.codo, t); pon(hb.mano, 1 - t); }
    } else if (parte === 'zapato') pon(huesosPierna[lado].tob, 1);
    else if (parte === 'pierna') {
      const hp = huesosPierna[lado];
      if (y > yRodilla) pon(hp.p, 1); else { const t = sstep(yRodilla - 0.04, yRodilla + 0.04, y); pon(hp.p, t); pon(hp.rod, 1 - t); }
    }
    let sum = w.reduce((a, b) => a + b[1], 0) || 1;
    while (w.length < 4) w.push([0, 0]);
    return w.slice(0, 4).map(([i, p]) => [i, p / sum]);
  }

  /* ---------- Pintura: cada triángulo con la vista desde la que se ve ---------- */
  const atlas = crearAtlas([F, B, D, I]);
  // Una manchita del color de las piernas
  const g = atlas.canvas.getContext('2d');
  const colP = op.colorPiernas ?? muestreaColor(F, Math.round((dobladillo + bottom) / 2 - (bottom - dobladillo) * 0.3));
  g.fillStyle = typeof colP === 'number' ? '#' + colP.toString(16).padStart(6, '0') : colP; g.fillRect(atlas.libre, 0, 12, 12);
  const R0 = atlas.rects;
  const anchoMax = Math.max(...filas.map((t) => (t.length ? t[t.length - 1][1] - t[0][0] : 0)));
  const uv = (vista, p) => {
    let u, v, M, r;
    if (vista === 0) { M = F; r = R0[0]; u = cxF - p.x / s; v = F.h - p.y / s; }
    else if (vista === 1) { M = B; r = R0[1]; u = cxB + p.x / s; v = B.h - p.y / s; }
    else if (vista === 2) { M = D; r = R0[2]; u = cxD - p.z / s; v = D.h - p.y / s; }
    else { M = I; r = R0[3]; u = cxI + p.z / s; v = I.h - p.y / s; }
    u = Math.min(M.w - 0.5, Math.max(0.5, u)); v = Math.min(M.h - 0.5, Math.max(0.5, v));
    return [(r.x + u) / atlas.W, 1 - (r.y + v) / atlas.H];
  };
  const uvColor = [(atlas.libre + 6) / atlas.W, 1 - 6 / atlas.H];

  const pos = [], nor = [], uvs = [], sIdx = [], sW = [];
  const P = new THREE.Vector3(), Q = new THREE.Vector3(), Rv = new THREE.Vector3(), N = new THREE.Vector3(), e1 = new THREE.Vector3(), e2 = new THREE.Vector3();
  for (const pz of piezas) {
    const n = pz.lados, an3 = pz.anillos, filasV = [];
    // Vértices de la pieza (con normales suaves)
    for (const r of an3) {
      const fila = [];
      for (let k = 0; k < n; k++) {
        const a = (k / n) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
        const fx = Math.sign(c) * Math.abs(c) ** (2 / EXP), fz = Math.sign(sn) * Math.abs(sn) ** (2 / EXP);
        fila.push(new THREE.Vector3(r.cx + r.rx * fx, r.y, r.cz + r.rz * fz));
      }
      filasV.push(fila);
    }
    const normal = filasV.map(() => Array.from({ length: n }, () => new THREE.Vector3()));
    const tri = [];
    for (let i = 0; i < filasV.length - 1; i++) for (let k = 0; k < n; k++) {
      const k2 = (k + 1) % n;
      tri.push([[i, k], [i + 1, k2], [i + 1, k]], [[i, k], [i, k2], [i + 1, k2]]);
    }
    for (const t of tri) {
      const [a, b, c] = t.map(([i, k]) => filasV[i][k]);
      e1.subVectors(b, a); e2.subVectors(c, a); N.crossVectors(e1, e2);
      for (const [i, k] of t) normal[i][k].add(N);
    }
    for (const fila of normal) for (const v of fila) v.normalize();
    const emitir = (pts, nrm) => {
      e1.subVectors(pts[1], pts[0]); e2.subVectors(pts[2], pts[0]); N.crossVectors(e1, e2).normalize();
      let vista;
      if (pz.color) vista = -1;
      else if (N.y > 0.72) vista = 1;
      else if (Math.abs(N.x) > Math.abs(N.z)) vista = N.x > 0 ? 2 : 3;
      else vista = N.z < 0 ? 0 : 1;
      for (let j = 0; j < 3; j++) {
        const p = pts[j];
        pos.push(p.x, p.y, p.z); nor.push(nrm[j].x, nrm[j].y, nrm[j].z);
        const t = vista < 0 ? uvColor : uv(vista, p); uvs.push(t[0], t[1]);
        const w = pesos(pz.parte, pz.lado, p.x, p.y);
        for (const [i, q] of w) { sIdx.push(i); sW.push(q); }
      }
    };
    for (const t of tri) emitir(t.map(([i, k]) => filasV[i][k]), t.map(([i, k]) => normal[i][k]));
    // Tapas arriba y abajo
    for (const [i, arriba] of [[0, true], [filasV.length - 1, false]]) {
      const fila = filasV[i], c = fila.reduce((a, v) => a.add(v), new THREE.Vector3()).multiplyScalar(1 / n);
      const nn = new THREE.Vector3(0, arriba ? 1 : -1, 0);
      for (let k = 0; k < n; k++) {
        const a = fila[k], b = fila[(k + 1) % n];
        emitir(arriba ? [c, b, a] : [c, a, b], [nn, nn, nn]);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(sIdx, 4));
  geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sW, 4));

  const tex = new THREE.CanvasTexture(atlas.canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.MeshLambertMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.5, color: 0xbfbfbf });
  const malla3d = new THREE.SkinnedMesh(geo, mat);
  malla3d.castShadow = true; malla3d.frustumCulled = false;

  /* ---------- Jerarquía igual a la de los demás personajes ---------- */
  const raiz = new THREE.Group();
  const giro = new THREE.Group(); giro.position.y = 1; raiz.add(giro);
  const cuerpo = new THREE.Group(); cuerpo.position.y = -1; giro.add(cuerpo);
  cuerpo.add(cadera); cuerpo.add(malla3d);
  raiz.updateMatrixWorld(true);
  malla3d.bind(new THREE.Skeleton(huesos));
  const nada = () => new THREE.Object3D();
  const malla = (geo2, mat2, x, y, z, padre) => { const m = new THREE.Mesh(geo2, mat2); m.position.set(x, y, z); m.castShadow = true; padre.add(m); return m; };
  return {
    raiz, giro, cuerpo, cadera, torso, pecho, cabeza, malla, malla3d, material: mat,
    piernas: piernasJuego.map((p) => ({ p: p.p, rod: p.rod, tob: p.tob })),
    brazos: brazosJuego.map((b, i) => ({ b: b.hom, codo: b.codo, mano: b.mano, dedos: [], pulgar: nada(), l: i ? 1 : -1 })),
    parpados: [], faldas: [],
    M: { zapato: new THREE.MeshLambertMaterial() },
    fis: { y: null, vy: 0, x: null, vx: 0, ay: 0, ax: 0, parpT: 9 },
    medidas: { yCadera, yCuello, alturaCuerpo }
  };
}

function muestreaColor(M, v) {
  const t = tramos(M, v); if (!t.length) return 0x222222;
  const u = Math.round((t[0][0] + t[0][1]) / 2), i = (v * M.w + u) * 4, d = M.img.data;
  const f = 0.8; // un poco más oscuro que el zapato
  return ((Math.round(d[i] * f) << 16) | (Math.round(d[i + 1] * f) << 8) | Math.round(d[i + 2] * f));
}
