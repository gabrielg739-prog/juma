/* =====================================================================
   JUMA · Los santos de los libros, modelados en 3D
   ---------------------------------------------------------------------
   San José Allamano, Beata Leonella Sgorbati, San José Cafasso y Beata
   Irene Stefani (siguiendo sus hojas de personaje), y Don Bosco, San
   Pablo, San Francisco Javier y Santa Teresa de Ávila (de los libros
   «Los quiero así» y el manual JUMA):
     · formas suaves y redondeadas (cabeza, ropa, manos y zapatos),
     · sombreado de dibujo animado en tres tonos y contorno oscuro,
     · caras pintadas de caricatura, con parpadeo,
     · el mismo esqueleto y los mismos nombres que el resto de personajes
       del juego, para usar sus animaciones (correr, saltar, rodar, surf).
   Las medidas siguen las del misionero: cadera a 0,98, hombros a 1,52 y
   cuello a 1,67 (antes de la escala del juego).

   construirSanto(THREE, id)            → el personaje entero (Huyendo del pecado)
   construirPiloto(THREE, id, opciones) → sentado al volante o en la moto, con la
                                           cabeza grande de caricatura, aureola y
                                           animaciones de conducir (Gran Premio)
   ===================================================================== */

let T = null;          // THREE
let GRAD = null;       // degradado de tres tonos
const cacheContorno = new Map();

/* ---------- Materiales ---------- */
function gradiente() {
  if (GRAD) return GRAD;
  GRAD = new T.DataTexture(new Uint8Array([125, 125, 125, 255, 195, 195, 195, 255, 255, 255, 255, 255]), 3, 1, T.RGBAFormat);
  GRAD.minFilter = GRAD.magFilter = T.NearestFilter; GRAD.generateMipmaps = false; GRAD.needsUpdate = true;
  return GRAD;
}
function toon(color, extra) { return new T.MeshToonMaterial(Object.assign({ color, gradientMap: gradiente() }, extra || {})); }
// Contorno: la misma malla vista por dentro e inflada un poco, en color oscuro
function matContorno(color, grosor) {
  const k = color + '|' + grosor;
  if (cacheContorno.has(k)) return cacheContorno.get(k);
  const m = new T.MeshBasicMaterial({ color, side: T.BackSide });
  m.onBeforeCompile = (sh) => { sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>\n transformed += normalize(normal) * ${grosor.toFixed(4)};`); };
  m.customProgramCacheKey = () => 'contorno' + grosor.toFixed(4);
  m.userData.grosor = grosor;
  cacheContorno.set(k, m);
  return m;
}
function contorno(m, color, grosor) {
  const o = new T.Mesh(m.geometry, matContorno(color, grosor));
  o.castShadow = false;
  m.add(o);
  return o;
}

/* ---------- Texturas pintadas ---------- */
function lienzo(w, h, pintar) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  pintar(c.getContext('2d'), w, h);
  const t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
// Tela con pliegues verticales suaves
function texPliegues(n, fuerza) {
  const t = lienzo(256, 64, (g, w, h) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < n; i++) {
      const x = (i + 0.5) * w / n, gr = g.createLinearGradient(x - w / n / 2, 0, x + w / n / 2, 0);
      gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, `rgba(0,0,0,${fuerza})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.fillRect(x - w / n / 2, 0, w / n, h);
    }
  });
  t.wrapS = T.RepeatWrapping;
  return t;
}
/* Cara de caricatura sobre la esfera de la cabeza (en la textura, u = 0,75 es el frente) */
function texCara(o, cerrados) {
  return lienzo(1024, 512, (g, W) => {
    g.fillStyle = hex(o.piel); g.fillRect(0, 0, W, 512);
    const cx = W * 0.75;
    g.lineCap = 'round'; g.lineJoin = 'round';
    // Mejillas sonrosadas
    for (const l of [-1, 1]) { const gr = g.createRadialGradient(cx + l * 74, 308, 2, cx + l * 74, 308, 42); gr.addColorStop(0, 'rgba(235,110,100,.45)'); gr.addColorStop(1, 'rgba(235,110,100,0)'); g.fillStyle = gr; g.fillRect(cx + l * 74 - 46, 262, 92, 92); }
    // Arrugas de la edad
    if (o.viejo) {
      g.strokeStyle = 'rgba(130,70,50,.42)'; g.lineWidth = 3.5;
      for (const k of [0, 1]) { g.beginPath(); g.moveTo(cx - 54 + k * 10, 148 + k * 17); g.quadraticCurveTo(cx, 138 + k * 17, cx + 54 - k * 10, 148 + k * 17); g.stroke(); }
      for (const l of [-1, 1]) {
        for (const k of [-1, 0, 1]) { g.beginPath(); g.moveTo(cx + l * 84, 238 + k * 9); g.lineTo(cx + l * 99, 234 + k * 14); g.stroke(); }
        g.beginPath(); g.moveTo(cx + l * 22, 290); g.quadraticCurveTo(cx + l * 42, 316, cx + l * 38, 342); g.stroke();
      }
    }
    // Ojos grandes con brillo
    for (const l of [-1, 1]) {
      const ex = cx + l * 52, ey = 252;
      if (cerrados) {
        g.strokeStyle = '#2a1a14'; g.lineWidth = 6; g.beginPath(); g.moveTo(ex - 20, ey + 2); g.quadraticCurveTo(ex, ey + 12, ex + 20, ey + 2); g.stroke();
      } else {
        const rx = 22, ry = o.viejo ? 21 : 26;
        g.fillStyle = '#ffffff'; g.beginPath(); g.ellipse(ex, ey, rx, ry, 0, 0, 7); g.fill();
        g.save(); g.beginPath(); g.ellipse(ex, ey, rx, ry, 0, 0, 7); g.clip();
        g.fillStyle = hex(o.ojos); g.beginPath(); g.arc(ex + l, ey + 3, 15, 0, 7); g.fill();
        g.fillStyle = 'rgba(255,255,255,.25)'; g.beginPath(); g.arc(ex + l, ey + 8, 9, 0, Math.PI); g.fill();
        g.fillStyle = '#0e0908'; g.beginPath(); g.arc(ex + l, ey + 3, 7.5, 0, 7); g.fill();
        g.fillStyle = '#ffffff'; g.beginPath(); g.arc(ex + l - 5, ey - 5, 5, 0, 7); g.fill(); g.beginPath(); g.arc(ex + l + 6, ey + 8, 2.4, 0, 7); g.fill();
        g.restore();
        g.strokeStyle = '#2a1a14'; g.lineWidth = 6; g.beginPath(); g.ellipse(ex, ey, rx + 1, ry + 1, 0, Math.PI * 1.06, Math.PI * 1.94); g.stroke();
        if (o.pestanas) { g.lineWidth = 4.5; g.beginPath(); g.moveTo(ex + l * 17, ey - 14); g.lineTo(ex + l * 27, ey - 21); g.stroke(); g.beginPath(); g.moveTo(ex + l * 10, ey - 21); g.lineTo(ex + l * 16, ey - 29); g.stroke(); }
        if (o.viejo) { g.strokeStyle = 'rgba(130,70,50,.5)'; g.lineWidth = 3; g.beginPath(); g.ellipse(ex, ey + 3, rx, ry + 3, 0, Math.PI * 0.18, Math.PI * 0.82); g.stroke(); }
      }
      // Cejas
      g.strokeStyle = hex(o.cejas); g.lineWidth = o.viejo ? 10 : 9;
      g.beginPath(); g.moveTo(ex - l * 18, ey - 33); g.quadraticCurveTo(ex + l * 2, ey - 46, ex + l * 22, ey - 36); g.stroke();
    }
    // Sombra bajo la nariz y sonrisa amable
    g.fillStyle = 'rgba(170,80,60,.2)'; g.beginPath(); g.ellipse(cx, 312, 13, 5, 0, 0, 7); g.fill();
    g.fillStyle = '#8a3a30'; g.beginPath(); g.moveTo(cx - 26, 334); g.quadraticCurveTo(cx, 360, cx + 26, 334); g.quadraticCurveTo(cx, 345, cx - 26, 334); g.fill();
    g.strokeStyle = '#6a2820'; g.lineWidth = 4; g.beginPath(); g.moveTo(cx - 26, 334); g.quadraticCurveTo(cx, 345, cx + 26, 334); g.stroke();
    for (const l of [-1, 1]) { g.lineWidth = 3.5; g.beginPath(); g.moveTo(cx + l * 26, 334); g.lineTo(cx + l * 31, 328); g.stroke(); }
  });
}
// Encaje de la sobrepelliz: blanco, con calados y borde festoneado abajo
function texEncaje() {
  const t = lienzo(256, 256, (g, w, h) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 16) { const gr = g.createLinearGradient(x, 0, x + 16, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, 'rgba(90,100,130,.16)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x, 0, 16, h * 0.78); }
    const y0 = h * 0.78;
    g.fillStyle = '#c3c7d6'; g.fillRect(0, y0 - 3, w, 3);
    g.strokeStyle = '#a7adc2'; g.lineWidth = 2;
    for (let x = 8; x < w; x += 16) { g.beginPath(); g.arc(x, y0 + 16, 6, 0, 7); g.stroke(); }
    g.globalCompositeOperation = 'destination-out';
    for (let x = 8; x < w; x += 16) { g.beginPath(); g.arc(x, y0 + 16, 3.2, 0, 7); g.fill(); g.beginPath(); g.arc(x + 8, y0 + 34, 3.2, 0, 7); g.fill(); }
    for (let x = 0; x < w; x += 16) { g.beginPath(); g.arc(x + 8, h + 4, 10, 0, 7); g.fill(); }
  });
  t.wrapS = T.RepeatWrapping; t.repeat.set(3, 1);
  return t;
}
// Estola dorada bordada con flores y una cruz abajo
function texEstola() {
  return lienzo(64, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#9c7412'); gr.addColorStop(0.5, '#ecc650'); gr.addColorStop(1, '#9c7412');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#6e4e08'; g.lineWidth = 3; g.strokeRect(4, 2, w - 8, h - 4);
    for (let y = 26; y < h - 96; y += 46) {
      g.strokeStyle = '#7a5a0e'; g.lineWidth = 2; g.beginPath(); g.moveTo(w / 2, y - 18); g.bezierCurveTo(10, y - 6, 10, y + 10, w / 2, y + 22); g.bezierCurveTo(w - 10, y + 10, w - 10, y - 6, w / 2, y - 18); g.stroke();
      g.fillStyle = '#b8282c'; g.beginPath(); g.arc(w / 2, y + 2, 6, 0, 7); g.fill();
      g.fillStyle = '#2f7a3a'; g.beginPath(); g.ellipse(w / 2 - 11, y + 6, 6, 3, 0.5, 0, 7); g.ellipse(w / 2 + 11, y + 6, 6, 3, -0.5, 0, 7); g.fill();
    }
    g.fillStyle = '#b8282c'; g.fillRect(w / 2 - 4, h - 86, 8, 40); g.fillRect(w / 2 - 15, h - 74, 30, 8);
    for (let x = 6; x < w - 4; x += 5) { g.fillStyle = x % 10 ? '#ecc650' : '#8a6410'; g.fillRect(x, h - 26, 3, 26); }
  });
}
function texPaja() {
  const t = lienzo(256, 64, (g, w, h) => {
    g.fillStyle = '#dcbb72'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) { g.fillStyle = y % 16 ? 'rgba(255,242,205,.5)' : 'rgba(140,95,35,.32)'; g.fillRect(0, y, w, 4); }
    for (let x = 0; x < w; x += 6) { g.fillStyle = 'rgba(120,80,30,.16)'; g.fillRect(x, 0, 1, h); }
  });
  t.wrapS = T.RepeatWrapping; t.repeat.set(4, 1);
  return t;
}
function texPelo(base) {
  const t = lienzo(256, 128, (g, w, h) => {
    g.fillStyle = hex(base); g.fillRect(0, 0, w, h);
    for (let i = 0; i < 160; i++) { const x = Math.random() * w; g.strokeStyle = Math.random() < 0.5 ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.18)'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(x, 0); g.quadraticCurveTo(x + 8, h / 2, x - 2, h); g.stroke(); }
  });
  t.wrapS = T.RepeatWrapping; t.repeat.set(3, 1);
  return t;
}

/* ---------- Geometría suave ---------- */
// Torno con perfil suavizado (Catmull-Rom) a partir de pocos puntos [radio, altura]
function torno(puntos, segs, pasos) {
  const pts = [], n = puntos.length, k0 = pasos || 6;
  for (let i = 0; i < n - 1; i++) {
    const p0 = puntos[Math.max(0, i - 1)], p1 = puntos[i], p2 = puntos[i + 1], p3 = puntos[Math.min(n - 1, i + 2)];
    for (let k = 0; k < k0; k++) {
      const t = k / k0, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      pts.push(new T.Vector2(Math.max(0.0005, f(p0[0], p1[0], p2[0], p3[0])), f(p0[1], p1[1], p2[1], p3[1])));
    }
  }
  pts.push(new T.Vector2(Math.max(0.0005, puntos[n - 1][0]), puntos[n - 1][1]));
  return new T.LatheGeometry(pts, segs || 32);
}
// Ondas (pliegues) en el borde de abajo de una falda o un velo
function plisar(geo, yBajo, yAlto, n, amp) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x);
    const t = Math.min(1, Math.max(0, (yAlto - y) / (yAlto - yBajo)));
    const k = 1 + Math.sin(a * n) * amp * t * t;
    p.setX(i, x * k); p.setZ(i, z * k);
  }
  geo.computeVertexNormals();
  return geo;
}
// Cinta que sigue una línea (para la estola)
function cinta(centro, ancho) {
  const pos = [], uv = [], idx = [];
  centro.forEach((p, i) => {
    const t = i / (centro.length - 1);
    pos.push(p.x - ancho / 2, p.y, p.z, p.x + ancho / 2, p.y, p.z);
    uv.push(0, 1 - t, 1, 1 - t);
    if (i) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  });
  const g = new T.BufferGeometry();
  g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/* ---------- Ficha de cada santo (según sus hojas de personaje) ---------- */
const SANTOS = {
  allamano: {
    piel: 0xf1c3a0, ojos: 0x4b6a8a, cejas: 0xdcd8d0, viejo: true, pelo: 0xe6e3dc, ropa: 0x2a2930, ropa2: 0x18171c, piernas: 0x1a1a1f, zapato: 0x18171b,
    tipo: 'sotana', solideo: true, botones: true, cuello: 'clerical'
  },
  leonella: {
    piel: 0xf2c6a6, ojos: 0x5a3b24, cejas: 0x9c958c, viejo: true, pestanas: true, ropa: 0x75808f, ropa2: 0x5e6878, piernas: 0x2c2c32, zapato: 0x2b2b30,
    tipo: 'habito', velo: 0x6c7786, banda: 0xf7f6f2, cuello: 'puntas', cruz: 0xd9dee6, cordon: 0x1e1e24
  },
  cafasso: {
    piel: 0xefbe97, ojos: 0x3b2618, cejas: 0x1a120d, pelo: 0x1d1714, ropa: 0x222128, ropa2: 0x141317, piernas: 0x151418, zapato: 0x141317,
    tipo: 'sotana', sobrepelliz: true, estola: true, cuello: 'clerical', peloCorto: true
  },
  irene: {
    piel: 0xf3c8a6, ojos: 0x3d2a1c, cejas: 0x5a3a22, pestanas: true, ropa: 0xf2ecdf, ropa2: 0xd9d0bd, piernas: 0x5a3a24, zapato: 0x7a4a26,
    tipo: 'habito', velo: 0xf7f4ec, cruz: 0x5a3418, cordon: 0xc9ad7a, sombrero: true, cingulo: true, botas: true
  },
  // San Juan Bosco: sotana negra, pelo oscuro ondulado y su sonrisa de siempre
  bosco: {
    piel: 0xf0c09a, ojos: 0x3a2618, cejas: 0x231812, pelo: 0x2a1d16, ropa: 0x1f1e24, ropa2: 0x121116, piernas: 0x141317, zapato: 0x121114,
    tipo: 'sotana', cuello: 'clerical', peloCorto: true, botones: true
  },
  // San Pablo: calvo, barba larga, túnica verde y manto rojo cruzado
  pablo: {
    piel: 0xe2a77e, ojos: 0x3a2618, cejas: 0x4a3326, viejo: true, pelo: 0x4f3a2c, barba: 0x4a3426, ropa: 0x41694c, ropa2: 0x2d4c36, piernas: 0x7a5232, zapato: 0x7a5232,
    tipo: 'habito', manto: 0xa0302a, calvo: true
  },
  // San Francisco Javier: jesuita misionero, sotana negra, barba y crucifijo
  javier: {
    piel: 0xebb994, ojos: 0x2e2016, cejas: 0x1a120d, pelo: 0x1d1612, peloCorto: true, barba: 0x1d1612, ropa: 0x1d1c22, ropa2: 0x111015, piernas: 0x121116, zapato: 0x121114,
    tipo: 'sotana', cuello: 'clerical', cruz: 0xe8c45a, cordon: 0x111015
  },
  // Santa Teresa de Ávila: carmelita, hábito marrón, toca blanca y velo negro
  teresa: {
    piel: 0xf1c3a0, ojos: 0x3a2618, cejas: 0x4a3326, pestanas: true, ropa: 0x6b4a2e, ropa2: 0x553a22, piernas: 0x3a2818, zapato: 0x3a2818,
    tipo: 'habito', velo: 0x18171c, banda: 0xf7f6f2, cuello: 'puntas', manto: 0xf2efe6, cingulo: true, cordon: 0x18171c
  }
};

/* Para el menú y otros juegos */
export const LISTA_SANTOS = Object.keys(SANTOS);

/**
 * Construye un santo y devuelve el objeto de personaje que usan las animaciones del juego.
 */
export async function construirSanto(THREE, id) {
  return construir(THREE, id, {});
}

function construir(THREE, id, op) {
  T = THREE;
  const o = SANTOS[id];
  if (!o) throw new Error('Santo desconocido: ' + id);
  const PIL = !!op.piloto; // versión ligera para ir sentado en un vehículo
  const OSC = 0x17131c;
  const malla = (geo, mat, x, y, z, padre, borde) => {
    const m = new T.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; padre.add(m);
    if (borde !== false) contorno(m, OSC, borde || 0.006);
    return m;
  };
  const piel = toon(o.piel);
  const pliegues = texPliegues(7, 0.1);
  const ropa = toon(o.ropa, { map: pliegues });
  const ropaLisa = toon(o.ropa);
  const ropa2 = toon(o.ropa2);
  const piernasM = toon(PIL && (o.tipo === 'sotana' || o.tipo === 'habito') ? o.ropa2 : o.piernas);
  const zapatoM = toon(o.zapato);
  const blanco = toon(0xf8f7f2);

  /* Esqueleto (igual que el misionero) */
  const raiz = new T.Group();
  const giro = new T.Group(); giro.position.y = 1; raiz.add(giro);
  const cuerpo = new T.Group(); cuerpo.position.y = -1; giro.add(cuerpo);
  const cadera = new T.Group(); cadera.position.y = 0.98; cuerpo.add(cadera);
  const torso = new T.Group(); torso.position.y = 0.04; cadera.add(torso);
  const pecho = new T.Group(); pecho.position.y = 0.22; torso.add(pecho);
  const cabeza = new T.Group(); cabeza.position.set(0, 0.42, 0.0); pecho.add(cabeza);

  /* ---------- Piernas y zapatos ---------- */
  const piernas = [-1, 1].map((l) => {
    const p = new T.Group(); p.position.set(0.09 * l, -0.04, 0); cadera.add(p);
    malla(new T.CapsuleGeometry(PIL ? 0.07 : 0.058, 0.36, 6, 16), piernasM, 0, -0.22, 0, p, 0.004);
    const rod = new T.Group(); rod.position.y = -0.46; p.add(rod);
    malla(PIL ? new T.CylinderGeometry(0.066, 0.085, 0.42, 16) : new T.CapsuleGeometry(0.05, 0.36, 6, 16), piernasM, 0, -0.2, 0, rod, 0.004);
    const tob = new T.Group(); tob.position.y = -0.44; rod.add(tob);
    // Zapato redondeado con suela
    const zap = malla(new T.SphereGeometry(0.07, 26, 16), zapatoM, 0, -0.03, -0.045, tob, 0.005); zap.scale.set(0.95, 0.65, 1.75);
    const suela = malla(new T.CapsuleGeometry(0.065, 0.13, 4, 16), toon(0x0f0d10), 0, -0.068, -0.045, tob, false); suela.rotation.x = Math.PI / 2; suela.scale.set(1, 1, 0.24);
    if (o.botas) {
      malla(new T.CylinderGeometry(0.062, 0.06, 0.2, 24), zapatoM, 0, 0.06, 0, tob, 0.005);
      const cord = toon(0xe9d3a8); for (let k = 0; k < 3; k++) malla(new T.BoxGeometry(0.05, 0.008, 0.01), cord, 0, 0.01 + k * 0.045, -0.062, tob, false);
    }
    return { p, rod, tob };
  });

  /* ---------- Tronco: abdomen y pecho (el pecho gira con los hombros) ---------- */
  malla(torno([[0.0, -0.15], [0.152, -0.14], [0.158, 0.0], [0.164, 0.12], [0.17, 0.22], [0.0, 0.24]], 40, 6), ropaLisa, 0, 0, 0, torso).scale.z = 0.72;
  const perfilPecho = [[0.0, -0.07], [0.168, -0.06], [0.184, 0.05], [0.198, 0.15], [0.208, 0.23], [0.2, 0.3], [0.16, 0.36], [0.09, 0.395], [0.0, 0.41]];
  malla(torno(perfilPecho, 40, 6), ropaLisa, 0, 0, 0, pecho).scale.z = 0.7;
  const frentePecho = (y) => { for (let i = 2; i < perfilPecho.length; i++) if (y <= perfilPecho[i][1]) { const [r0, y0] = perfilPecho[i - 1], [r1, y1] = perfilPecho[i]; return -(r0 + (r1 - r0) * (y - y0) / (y1 - y0)) * 0.7; } return -0.06; };
  for (const l of [-1, 1]) { const h = malla(new T.SphereGeometry(0.084, 24, 16), ropaLisa, 0.2 * l, 0.29, 0, pecho, 0.005); h.scale.set(1, 0.92, 0.9); }
  malla(new T.CylinderGeometry(0.058, 0.064, 0.1, 20), piel, 0, 0.41, 0.005, pecho, 0.004);

  /* ---------- Falda: dos mitades que siguen a las piernas ---------- */
  const largoFalda = o.tipo === 'sotana' ? 0.88 : 0.9, r0 = 0.165, r1 = o.tipo === 'sotana' ? 0.28 : 0.31;
  const matFalda = toon(o.ropa, { map: pliegues, side: T.DoubleSide });
  const forro = toon(o.ropa2, { side: T.BackSide });
  const faldas = (PIL ? [] : [-1, 1]).map((l) => {
    const g = new T.Group(); cadera.add(g);
    const geo = new T.CylinderGeometry(r0, r1, largoFalda, 28, 10, true, l > 0 ? 0 : Math.PI, Math.PI);
    plisar(geo, -largoFalda / 2, largoFalda / 2, 5, 0.025);
    const m = malla(geo, matFalda, 0, -largoFalda / 2 + 0.02, 0, g, 0.006); m.scale.z = 0.78;
    const f = new T.Mesh(geo, forro); f.scale.set(0.985, 0.995, 0.985); m.add(f);
    return { g, l, s: { x: 0, v: 0 }, sz: { x: 0, v: 0 } };
  });
  // Costura o cordón de la cintura
  const cin = malla(new T.TorusGeometry(0.163, o.cingulo ? 0.013 : 0.016, 10, 40), o.cingulo ? toon(o.cordon) : ropa2, 0, 0.01, 0, torso, 0.004);
  cin.rotation.x = Math.PI / 2; cin.scale.set(1, 0.72, 1);

  /* ---------- Brazos y manos ---------- */
  const mangaAncha = o.tipo === 'habito';
  const brazos = [-1, 1].map((l) => {
    const b = new T.Group(); b.position.set(0.215 * l, 0.285, 0); pecho.add(b);
    malla(torno([[0.0, -0.31], [0.058, -0.3], [0.064, -0.2], [0.068, -0.08], [0.062, 0.02], [0.0, 0.03]], 24, 4), ropaLisa, 0, 0, 0, b, 0.005);
    const codo = new T.Group(); codo.position.y = -0.29; b.add(codo);
    malla(new T.SphereGeometry(0.058, 20, 14), ropaLisa, 0, 0, 0, codo, false);
    malla(torno([[0.0, -0.25], [mangaAncha ? 0.08 : 0.054, -0.245], [mangaAncha ? 0.072 : 0.056, -0.2], [0.06, -0.08], [0.058, 0.02], [0.0, 0.03]], 24, 4), ropaLisa, 0, 0, 0, codo, 0.005);
    const puno = malla(new T.TorusGeometry(mangaAncha ? 0.072 : 0.052, 0.012, 8, 24), ropa2, 0, -0.24, 0, codo, false); puno.rotation.x = Math.PI / 2;
    const mano = new T.Group(); mano.position.y = -0.27; codo.add(mano);
    const palma = malla(new T.SphereGeometry(0.048, 22, 16), piel, 0, -0.035, -0.004, mano, 0.004); palma.scale.set(PIL ? 0.8 : 0.62, PIL ? 1.15 : 1, 1.02);
    const dedos = [];
    for (let d = 0; d < (PIL ? 0 : 4); d++) {
      const dg = new T.Group(); dg.position.set(0, -0.07, -0.024 + d * 0.016); mano.add(dg);
      malla(new T.CapsuleGeometry(0.0115, 0.026, 4, 10), piel, 0, -0.018, 0, dg, 0.003);
      const dg2 = new T.Group(); dg2.position.y = -0.034; dg.add(dg2);
      malla(new T.CapsuleGeometry(0.0105, 0.016, 4, 10), piel, 0, -0.01, 0, dg2, 0.003);
      dedos.push(dg, dg2);
    }
    const pulgar = new T.Group(); pulgar.position.set(0.016 * -l, -0.03, -0.032); mano.add(pulgar);
    malla(new T.CapsuleGeometry(0.012, 0.032, 4, 10), piel, 0, -0.02, 0, pulgar, 0.003);
    pulgar.rotation.set(-0.5, 0, 0.4 * -l);
    b.rotation.z = 0.08 * l;
    return { b, codo, mano, dedos, pulgar, l };
  });

  /* ---------- Cabeza con cara de caricatura ---------- */
  const R0 = 0.158, YC = 0.168;
  const geoCab = new T.SphereGeometry(R0, 48, 32);
  { // Mandíbula un poco más estrecha
    const p = geoCab.attributes.position;
    for (let i = 0; i < p.count; i++) { const y = p.getY(i) / R0; if (y < 0) { const k = Math.pow(-y, 1.6); p.setX(i, p.getX(i) * (1 - 0.2 * k)); p.setZ(i, p.getZ(i) * (1 - 0.06 * k)); } }
    geoCab.computeVertexNormals();
  }
  const texA = texCara(o, false), texC = texCara(o, true);
  const matCara = toon(0xffffff, { map: texA });
  const cab = malla(geoCab, matCara, 0, YC, 0, cabeza, 0.006); cab.scale.set(0.95, 1.02, 0.98);
  malla(new T.SphereGeometry(0.019, 16, 12), piel, 0, YC - 0.022, -R0 * 0.955, cabeza, 0.002).scale.set(1.05, 0.85, 0.8); // nariz
  for (const l of [-1, 1]) { const e = malla(new T.SphereGeometry(0.036, 16, 12), piel, R0 * 0.94 * l, YC, 0.006, cabeza, 0.003); e.scale.set(0.45, 1, 0.75); }
  const parpadeo = (cerrado) => { const t = cerrado ? texC : texA; if (matCara.map !== t) matCara.map = t; };

  /* ---------- Pelo, solideo, velo y sombrero ---------- */
  let velo = null, sombrero = null, sombreroBase = null, fisVelo = null;
  if (o.pelo) {
    const mp = toon(0xffffff, { map: texPelo(o.pelo) });
    if (o.peloCorto) {
      // Pelo corto peinado con raya al lado
      const casq = malla(new T.SphereGeometry(R0 * 1.06, 40, 20, 0, Math.PI * 2, 0, Math.PI * 0.56), mp, 0, YC + 0.005, 0.012, cabeza, 0.006); casq.rotation.x = 0.42; casq.scale.set(0.97, 1.02, 1.02);
      const tupe = malla(new T.SphereGeometry(0.09, 24, 14), mp, -0.03, YC + 0.12, -0.075, cabeza, 0.005); tupe.scale.set(1.3, 0.55, 0.9); tupe.rotation.z = 0.22;
      for (const l of [-1, 1]) malla(new T.BoxGeometry(0.018, 0.06, 0.038), mp, R0 * 0.93 * l, YC - 0.014, -0.024, cabeza, 0.003);
    } else {
      // Pelo blanco a los lados y detrás (la coronilla la cubre el solideo)
      malla(new T.SphereGeometry(R0 * 1.07, 40, 20, Math.PI * 1.84, Math.PI * 1.32, Math.PI * 0.2, Math.PI * 0.42), mp, 0, YC, 0.008, cabeza, 0.006).scale.set(0.98, 1.0, 1.02);
      for (const l of [-1, 1]) { const t = malla(new T.SphereGeometry(0.06, 18, 12), mp, R0 * 0.9 * l, YC + 0.05, 0.014, cabeza, 0.004); t.scale.set(0.62, 0.95, 1.3); }
      if (!o.calvo) malla(new T.SphereGeometry(R0 * 1.035, 36, 14, 0, Math.PI * 2, 0, Math.PI * 0.32), mp, 0, YC + 0.003, 0.01, cabeza, false).scale.set(0.96, 1.02, 1.0);
    }
  }
  if (o.solideo) {
    const g = new T.Group(); g.position.set(0, YC + 0.005, 0.018); g.rotation.x = 0.28; cabeza.add(g);
    const neg = toon(0x111116);
    malla(new T.SphereGeometry(R0 * 1.09, 36, 10, 0, Math.PI * 2, 0, Math.PI * 0.2), neg, 0, 0, 0, g, 0.005);
    malla(new T.CylinderGeometry(0.006, 0.009, 0.018, 10), neg, 0, R0 * 1.09 + 0.006, 0, g, false);
    sombrero = g; sombreroBase = { p: g.position.clone(), r: g.rotation.clone() };
  }
  if (o.velo) {
    const mv = toon(o.velo, { side: T.DoubleSide, map: texPliegues(6, 0.1) });
    // Gorro del velo que enmarca la cara, con la banda blanca en la frente
    const gorro = malla(new T.SphereGeometry(R0 * 1.13, 44, 24, 0, Math.PI * 2, 0, Math.PI * 0.62), mv, 0, YC + 0.005, 0.015, cabeza, 0.006);
    gorro.rotation.x = 0.5; gorro.scale.set(1.0, 1.04, 1.06);
    if (o.banda) { const banda = malla(new T.SphereGeometry(R0 * 1.15, 44, 4, 0, Math.PI * 2, Math.PI * 0.53, Math.PI * 0.085), toon(o.banda, { side: T.DoubleSide }), 0, YC + 0.005, 0.015, cabeza, 0.004); banda.rotation.x = 0.5; banda.scale.copy(gorro.scale); }
    // Tela que cae por la espalda y ondea al correr
    const caida = new T.Group(); caida.position.set(0, YC - 0.015, 0.04); cabeza.add(caida);
    const L = o.sombrero ? 0.5 : 0.6;
    const geo = new T.CylinderGeometry(R0 * 1.1, 0.27, L, 32, 6, true, -Math.PI * 0.64, Math.PI * 1.28);
    plisar(geo, -L / 2, L / 2, 5, 0.035);
    malla(geo, mv, 0, -L / 2, 0.02, caida, 0.006).scale.set(1.18, 1, 0.92);
    velo = caida; fisVelo = { x: 0, v: 0 };
  }
  if (o.sombrero) {
    const g = new T.Group(); g.position.set(0, YC + 0.15, 0.01); g.rotation.x = 0.05; cabeza.add(g);
    const paja = toon(0xffffff, { map: texPaja(), side: T.DoubleSide });
    malla(torno([[0.0, 0.013], [0.17, 0.013], [0.3, -0.004], [0.335, -0.022], [0.333, -0.03], [0.3, -0.012], [0.17, 0.005], [0.0, 0.0]], 48, 4), paja, 0, 0, 0, g, 0.006);
    malla(torno([[0.16, 0.0], [0.162, 0.055], [0.15, 0.11], [0.1, 0.15], [0.0, 0.158]], 40, 5), paja, 0, 0.004, 0, g, 0.006);
    malla(new T.CylinderGeometry(0.163, 0.164, 0.034, 40, 1, true), toon(0x6b4426, { side: T.DoubleSide }), 0, 0.026, 0, g, false);
    sombrero = g; sombreroBase = { p: g.position.clone(), r: g.rotation.clone() };
  }

  /* ---------- Cuellos, botones, cruces y ropa de cada uno ---------- */
  if (o.cuello === 'clerical') {
    malla(new T.CylinderGeometry(0.063, 0.067, 0.04, 24), blanco, 0, 0.395, 0.004, pecho, 0.004);
    malla(new T.BoxGeometry(0.028, 0.028, 0.01), blanco, 0, 0.37, -0.058, pecho, false);
  } else if (o.cuello === 'puntas') {
    for (const l of [-1, 1]) { const c = malla(new T.SphereGeometry(0.052, 18, 12), blanco, 0.038 * l, 0.375, -0.062, pecho, 0.004); c.scale.set(1, 0.32, 0.62); c.rotation.set(0.4, 0, -0.5 * l); }
  }
  if (o.botones) {
    const bot = toon(0x45454f);
    for (let i = 0; i < 6; i++) { const y = 0.34 - i * 0.07; malla(new T.SphereGeometry(0.009, 10, 8), bot, 0, y, frentePecho(y) - 0.005, pecho, false); }
    for (let i = 0; i < 3; i++) { const y = 0.2 - i * 0.09; malla(new T.SphereGeometry(0.009, 10, 8), bot, 0, y, -0.165 * 0.72 - 0.005, torso, false); }
    if (faldas.length) for (let i = 0; i < 7; i++) {
      const y = -0.02 - i * 0.12, r = r0 + (r1 - r0) * ((0.02 - y) / largoFalda);
      malla(new T.SphereGeometry(0.009, 10, 8), bot, 0.004, y, -r * 0.78 - 0.004, faldas[1].g, false);
    }
  }
  if (o.cruz) {
    const mc = toon(o.cruz), cord = toon(o.cordon);
    const yC = 0.2, zC = frentePecho(yC) - 0.014;
    for (const l of [-1, 1]) {
      const a = new T.Vector3(0.05 * l, 0.39, -0.045), b = new T.Vector3(0, yC + 0.05, zC), d = b.clone().sub(a);
      const m = malla(new T.CylinderGeometry(0.004, 0.004, d.length(), 6), cord, 0, 0, 0, pecho, false);
      m.position.copy(a).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d.normalize());
    }
    const c = new T.Group(); c.position.set(0, yC, zC); c.rotation.x = 0.18; pecho.add(c);
    malla(new T.BoxGeometry(0.016, 0.075, 0.01), mc, 0, 0, 0, c, 0.003);
    malla(new T.BoxGeometry(0.05, 0.015, 0.01), mc, 0, 0.014, 0, c, 0.003);
  }
  if (o.barba) {
    // Barba de caricatura bajo la boca y bigote
    const mb = toon(0xffffff, { map: texPelo(o.barba) });
    const b = malla(new T.SphereGeometry(R0 * 0.78, 32, 18), mb, 0, YC - R0 * 0.62, -R0 * 0.36, cabeza, 0.006);
    b.scale.set(1.08, o.viejo ? 1.05 : 0.78, 0.82);
    for (const l of [-1, 1]) {
      const p = malla(new T.SphereGeometry(R0 * 0.62, 20, 12), mb, R0 * 0.58 * l, YC - R0 * 0.28, -R0 * 0.32, cabeza, 0.005);
      p.scale.set(0.55, 0.95, 0.75);
      const bg = malla(new T.SphereGeometry(0.036, 14, 10), mb, 0.034 * l, YC - R0 * 0.36, -R0 * 0.93, cabeza, 0.003);
      bg.scale.set(1.25, 0.5, 0.55); bg.rotation.z = 0.35 * l;
    }
  }
  if (o.manto) {
    // Manto cruzado sobre el pecho, del hombro a la cadera
    const mm = toon(o.manto, { map: texPliegues(5, 0.12) });
    const m = malla(new T.TorusGeometry(0.205, 0.05, 12, 40), mm, 0, 0.14, 0.0, pecho, 0.005);
    m.rotation.set(0, 0, 0.62); m.scale.set(1, 1.05, 0.78);
    const h = malla(new T.SphereGeometry(0.1, 20, 14), mm, -0.19, 0.29, 0.01, pecho, 0.005); h.scale.set(1, 0.85, 0.95);
  }
  let colgantes = null;
  if (o.cingulo) {
    const cord = toon(o.cordon), g = new T.Group(); g.position.set(0.07, 0.0, -0.11); torso.add(g);
    for (const [dx, largo] of [[0.012, 0.36], [-0.014, 0.31]]) {
      malla(new T.CylinderGeometry(0.009, 0.009, largo, 8), cord, dx, -largo / 2, 0, g, 0.003);
      malla(new T.SphereGeometry(0.017, 12, 10), cord, dx, -largo, 0, g, 0.003);
    }
    colgantes = [{ g, base: 0.1, k: -0.012, s: { x: 0, v: 0 }, sz: { x: 0, v: 0 }, min: -0.6, max: 0.5 }];
  }
  if (o.sobrepelliz) {
    // Sobrepelliz blanca con encaje hasta las rodillas y mangas anchas
    const enc = toon(0xffffff, { map: texEncaje(), alphaTest: 0.5, side: T.DoubleSide });
    malla(torno(PIL ? [[0.25, -0.26], [0.235, -0.16], [0.222, -0.04], [0.214, 0.12], [0.222, 0.23], [0.215, 0.31], [0.165, 0.36], [0.09, 0.392], [0.07, 0.398]] : [[0.32, -0.76], [0.29, -0.55], [0.245, -0.28], [0.222, -0.04], [0.214, 0.12], [0.222, 0.23], [0.215, 0.31], [0.165, 0.36], [0.09, 0.392], [0.07, 0.398]], 44, 5), enc, 0, 0, 0, pecho, 0.006).scale.z = 0.76;
    for (const l of [-1, 1]) { const h = malla(new T.SphereGeometry(0.09, 24, 16), blanco, 0.2 * l, 0.29, 0, pecho, 0.005); h.scale.set(1, 0.9, 0.9); }
    for (const B of brazos) malla(new T.CylinderGeometry(0.075, 0.15, 0.42, 28, 4, true), enc, 0, -0.2, 0, B.b, 0.005).scale.z = 0.9;
    if (o.estola) {
      const est = toon(0xffffff, { map: texEstola(), side: T.DoubleSide });
      for (const l of [-1, 1]) {
        const pts = [];
        for (let k = 0; k <= 24; k++) {
          const y = 0.37 - k * (PIL ? 0.6 : 1.11) / 24;
          const rf = y > 0.23 ? 0.12 + (0.37 - y) * 0.68 : y > -0.04 ? 0.218 : 0.222 + (-0.04 - y) * 0.13;
          pts.push(new T.Vector3((0.06 + Math.max(0, 0.25 - y) * 0.03) * l, y, -rf * 0.76 - 0.012));
        }
        malla(cinta(pts, 0.08), est, 0, 0, 0, pecho, 0.004);
      }
    }
  }

  return {
    raiz, giro, cuerpo, cadera, torso, pecho, cabeza, piernas, brazos, faldas, malla,
    parpados: [], parpadeo, velo, colgantes, sombrero, sombreroBase,
    M: { zapato: zapatoM },
    fis: { y: null, vy: 0, x: null, vx: 0, ay: 0, ax: 0, parpT: 2 + Math.random() * 3, velo: fisVelo || { x: 0, v: 0 } }
  };
}

/* =====================================================================
   Pilotos: el santo sentado en su vehículo
   ===================================================================== */
const POSTURAS = {
  // muslo/rodilla/tobillo: piernas · brazo/codo: brazos hacia el volante · espalda: inclinación (+ hacia atrás)
  kart: { muslo: 1.42, rodilla: -0.62, tobillo: 0.3, brazo: 0.92, codo: 0.78, abre: 0.12, espalda: 0.16 },
  erguido: { muslo: 1.5, rodilla: -1.45, tobillo: 0.0, brazo: 0.7, codo: 0.95, abre: 0.1, espalda: 0.04 },
  moto: { muslo: 1.0, rodilla: -1.8, tobillo: 0.5, brazo: 2.05, codo: 0.3, abre: 0.2, espalda: -0.85 },
  scooter: { muslo: 1.45, rodilla: -1.45, tobillo: 0.1, brazo: 1.95, codo: 0.2, abre: 0.22, espalda: -0.42 },
  // En el sillón del papamóvil: bendice y saluda con la mano derecha
  trono: { muslo: 1.5, rodilla: -1.5, tobillo: 0.0, brazo: 0.35, codo: 1.1, abre: 0.12, espalda: 0.05, saluda: true },
  chopper: { muslo: 1.35, rodilla: -0.75, tobillo: 0.35, brazo: 2.3, codo: 0.08, abre: 0.4, espalda: 0.1 },
};

/**
 * Une las mallas que se mueven juntas (menos dibujos por cuadro):
 *  - las de color liso pasan a un solo material con el color en cada vértice,
 *  - los contornos se inflan aquí (en la geometría) y comparten un material,
 *  - las que llevan textura (cara, pelo, telas) se unen por material.
 */
let MAT_VC = null, MAT_VC2 = null, MAT_BORDE = null;
function fusionar(raiz, animados, unir) {
  raiz.updateMatrixWorld(true);
  MAT_VC = MAT_VC || new T.MeshToonMaterial({ vertexColors: true, gradientMap: gradiente() });
  MAT_VC2 = MAT_VC2 || new T.MeshToonMaterial({ vertexColors: true, gradientMap: gradiente(), side: T.DoubleSide });
  MAT_BORDE = MAT_BORDE || new T.MeshBasicMaterial({ color: 0x17131c, side: T.BackSide });
  const cubos = new Map();
  const quitar = [];
  const inv = new T.Matrix4();
  raiz.traverse((o) => {
    if (!o.isMesh) return;
    let anc = o.parent;
    while (anc && anc !== raiz && !animados.has(anc)) anc = anc.parent;
    if (!anc) anc = raiz;
    inv.copy(anc.matrixWorld).invert();
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new T.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.morphAttributes = {};
    let mat = o.material;
    if (mat.userData && mat.userData.grosor) {
      // Contorno: se infla la copia a lo largo de sus normales
      const pos = g.attributes.position, nor = g.attributes.normal, e = mat.userData.grosor;
      for (let i = 0; i < pos.count; i++) pos.setXYZ(i, pos.getX(i) + nor.getX(i) * e, pos.getY(i) + nor.getY(i) * e, pos.getZ(i) + nor.getZ(i) * e);
      mat = MAT_BORDE;
    } else if (mat.isMeshToonMaterial && !mat.map && !mat.transparent && !mat.alphaTest) {
      const n = g.attributes.position.count, col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { col[i * 3] = mat.color.r; col[i * 3 + 1] = mat.color.g; col[i * 3 + 2] = mat.color.b; }
      g.setAttribute('color', new T.Float32BufferAttribute(col, 3));
      mat = mat.side === T.DoubleSide ? MAT_VC2 : MAT_VC;
    }
    g.applyMatrix4(new T.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    const clave = anc.uuid + '|' + mat.uuid;
    if (!cubos.has(clave)) cubos.set(clave, { anc, mat, geos: [], sombra: o.castShadow });
    cubos.get(clave).geos.push(g.index ? g : g);
    quitar.push(o);
  });
  for (const o of quitar) if (o.parent) o.parent.remove(o);
  for (const c of cubos.values()) {
    const indexadas = c.geos.filter((g) => g.index);
    const sueltas = c.geos.filter((g) => !g.index);
    for (const lote of [indexadas, sueltas]) {
      if (!lote.length) continue;
      const geo = lote.length === 1 ? lote[0] : unir(lote, false);
      if (!geo) continue;
      const m = new T.Mesh(geo, c.mat);
      m.castShadow = false;
      m.receiveShadow = false;
      c.anc.add(m);
      for (const g of lote) if (g !== geo) g.dispose();
    }
  }
}

/**
 * Santo sentado al volante (o en la moto) con cabeza de caricatura y aureola.
 * Devuelve { raiz, animar(dt, estado) } — raiz mira hacia +Z (el frente del vehículo).
 * opciones: { postura, cabeza (escala de la cabeza), fusionar (mergeGeometries de three) }
 */
export function construirPiloto(THREE, id, opciones = {}) {
  const S = construir(THREE, id, { piloto: true });
  const o = SANTOS[id];
  const { raiz, cadera, torso, pecho, cabeza, piernas, brazos, velo } = S;
  const P = POSTURAS[opciones.postura] || POSTURAS.kart;
  const R0 = 0.158, YC = 0.168;
  cabeza.scale.setScalar(opciones.cabeza ?? 1.7);
  cabeza.position.y += 0.02;

  // Aureola dorada que brilla
  const halo = new T.Mesh(new T.TorusGeometry(0.16, 0.017, 8, 36), new T.MeshBasicMaterial({ color: new T.Color(1.6, 1.25, 0.45), toneMapped: false }));
  halo.rotation.x = Math.PI / 2;
  halo.position.set(0, o.sombrero ? YC + 0.36 : o.velo || o.solideo ? YC + R0 + 0.08 : YC + R0 + 0.05, 0.02);
  cabeza.add(halo);

  // Postura fija de las piernas
  for (const L of piernas) {
    L.p.rotation.x = P.muslo;
    L.rod.rotation.x = P.rodilla;
    L.tob.rotation.x = P.tobillo;
  }
  for (const L of piernas) L.p.rotation.z = (L === piernas[0] ? 1 : -1) * 0.06;

  const animados = new Set([raiz, torso, pecho, cabeza]);
  for (const B of brazos) { animados.add(B.b); animados.add(B.codo); }
  if (velo) animados.add(velo);
  if (opciones.fusionar) fusionar(raiz, animados, opciones.fusionar);
  else raiz.traverse((m) => { if (m.isMesh) m.castShadow = false; });

  // Mira hacia el frente del vehículo (+Z)
  raiz.rotation.y = Math.PI;

  let t = Math.random() * 10;
  let parpT = 1 + Math.random() * 3;
  let cerrado = 0;
  let giroS = 0;
  const lerp = (a, b, k) => a + (b - a) * k;

  /**
   * estado: { giro (+ izquierda), vel, turbo, golpe (0..1, da vueltas), lanzar (0..1), festejo }
   */
  function animar(dt, e = {}) {
    t += dt;
    const k = Math.min(1, dt * 10);
    giroS = lerp(giroS, THREE.MathUtils.clamp(e.giro || 0, -0.55, 0.55), k);
    const g = giroS;
    const vel = Math.abs(e.vel || 0);
    const golpe = e.golpe || 0;
    const lanzar = e.lanzar || 0;
    const festejo = !!e.festejo;

    // Tronco: se echa hacia atrás con el turbo e inclina hacia la curva
    const traque = vel > 0.01 ? Math.sin(t * 38) * 0.008 : 0;
    torso.rotation.x = P.espalda + (e.turbo ? 0.1 : 0) + traque;
    torso.rotation.z = lerp(torso.rotation.z, g * 0.32 + (golpe ? Math.sin(t * 20) * 0.25 : 0), k);
    pecho.rotation.y = lerp(pecho.rotation.y, g * 0.18, k);

    // Cabeza: mira hacia la curva; con el golpe, se marea
    cabeza.rotation.y = lerp(cabeza.rotation.y, g * 0.7 + (festejo ? Math.sin(t * 2) * 0.4 : 0), k);
    cabeza.rotation.z = lerp(cabeza.rotation.z, golpe ? Math.sin(t * 14) * 0.3 : -g * 0.12, k);
    cabeza.rotation.x = lerp(cabeza.rotation.x, -P.espalda * 0.6 + (golpe ? 0.25 : 0), k);

    // Brazos: al volante (una mano sube y otra baja al girar), agitados con el golpe,
    // el derecho lanza el poder y los dos arriba al celebrar
    for (const B of brazos) {
      const l = B.l;
      let bx = P.brazo + l * g * 0.55;
      let bz = l * (P.abre - g * 0.08);
      let cx = P.codo - l * g * 0.25;
      if (golpe) {
        bx = 2.7 + Math.sin(t * 22 + l) * 0.35;
        bz = l * (0.55 + Math.sin(t * 18) * 0.2);
        cx = 0.3;
      } else if (festejo && (l > 0 || Math.sin(t * 1.3) > 0)) {
        bx = 2.9 + Math.sin(t * 9 + l) * 0.15;
        bz = l * 0.35;
        cx = 0.25 + Math.sin(t * 9) * 0.25;
      } else if (P.saluda && l > 0) {
        bx = 2.45 + Math.sin(t * 2.2) * 0.1;
        bz = 0.3 + Math.sin(t * 5) * 0.22;
        cx = 0.45 + Math.sin(t * 5 + 1) * 0.2;
      } else if (lanzar > 0 && l > 0) {
        const s = Math.sin(lanzar * Math.PI);
        bx = lerp(P.brazo, 2.6, s);
        cx = lerp(P.codo, 0.1, s);
        bz = 0.3 * s;
      }
      B.b.rotation.x = lerp(B.b.rotation.x, bx, golpe || festejo || lanzar ? Math.min(1, dt * 18) : k);
      if (P.saluda && !golpe && !festejo) B.b.rotation.x = bx;
      B.b.rotation.z = lerp(B.b.rotation.z, bz, k);
      B.codo.rotation.x = lerp(B.codo.rotation.x, cx, k);
    }

    // Velo: ondea hacia atrás con la velocidad
    if (velo) velo.rotation.x = lerp(velo.rotation.x, -(0.1 + Math.min(0.9, vel * 3.2)) - Math.sin(t * 17) * 0.06 * Math.min(1, vel * 5), k);

    // Aureola que gira despacio
    halo.rotation.z = t * 0.6;

    // Parpadeo (y ojos cerrados al recibir un golpe)
    parpT -= dt;
    if (parpT <= 0) { cerrado = 0.12; parpT = 2 + Math.random() * 3.5; }
    cerrado = Math.max(0, cerrado - dt);
    S.parpadeo(cerrado > 0 || golpe > 0.2);
  }

  return { raiz, animar, alturaCadera: 0.98, santo: S };
}
