/* =====================================================================
   Demonios 3D de «Luz contra el pecado».
   Anatomía realista (unas 7,5 cabezas de alto): músculos torneados con
   perfiles de revolución, cuernos curvos, garras largas, taparrabos, alas
   y colas. Piel procedural con venas en relieve, estrías musculares y
   mapa de normales. Cada tipo se construye una sola vez, se fusionan las
   mallas por hueso y cada demonio es un clon con sus propios materiales.
   Animaciones: reposo, andar/correr, ataque (según el poder), herido,
   muerte, repelido por el rosario y rugido.
   ===================================================================== */
let TH = null;
const rnd = Math.random;
const ri = (n) => Math.floor(rnd() * n);
const lerp = (a, b, k) => a + (b - a) * k;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const suave = (k) => k * k * (3 - 2 * k);
const PI = Math.PI;

export function iniciarDemonios(THREE) { TH = THREE; }

/* =====================================================================
   Texturas: color, normales (Sobel de un mapa de alturas) y brillo
   ===================================================================== */
const TEXS = {};
function lienzo(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function rgb(c, a) { return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a == null ? 1 : a})`; }
function normalDesde(alt, w, h, fuerza) {
  const src = alt.getImageData(0, 0, w, h).data;
  const H = new Float32Array(w * h); for (let i = 0; i < w * h; i++) H[i] = src[i * 4] / 255;
  const [c, g] = lienzo(w, h); const img = g.createImageData(w, h), d = img.data;
  for (let y = 0; y < h; y++) {
    const ya = ((y - 1 + h) % h) * w, yb = y * w, yc = ((y + 1) % h) * w;
    for (let x = 0; x < w; x++) {
      const xa = (x - 1 + w) % w, xc = (x + 1) % w;
      const dx = (H[ya + xc] + 2 * H[yb + xc] + H[yc + xc]) - (H[ya + xa] + 2 * H[yb + xa] + H[yc + xa]);
      const dy = (H[yc + xa] + 2 * H[yc + x] + H[yc + xc]) - (H[ya + xa] + 2 * H[ya + x] + H[ya + xc]);
      const nx = -dx * fuerza, ny = -dy * fuerza, l = Math.sqrt(nx * nx + ny * ny + 1);
      const i = (yb + x) * 4; d[i] = (nx / l * 0.5 + 0.5) * 255; d[i + 1] = (ny / l * 0.5 + 0.5) * 255; d[i + 2] = 255 / l; d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0); return c;
}
// Venas ramificadas: trazo de color y relieve en el mapa de alturas
function venas(g, ga, n, color, ancho, largo, w) {
  const rama = (x, y, a, l, grosor, prof) => {
    for (let k = 0; k < l; k++) {
      const nx = x + Math.cos(a) * 4, ny = y + Math.sin(a) * 4;
      for (const [ctx, col, extra] of [[g, color, 0], [ga, 'rgba(255,255,255,.9)', 1.2]]) {
        ctx.strokeStyle = col; ctx.lineWidth = grosor + extra; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke();
      }
      x = nx; y = ny; a += (rnd() - 0.5) * 0.7; grosor *= 0.985;
      if (prof < 3 && rnd() < 0.07) rama(x, y, a + (rnd() < 0.5 ? 0.8 : -0.8), l * 0.5, grosor * 0.65, prof + 1);
      if (x < -20 || y < -20 || x > w + 20 || y > w + 20) break;
    }
  };
  for (let i = 0; i < n; i++) rama(rnd() * w, rnd() * w, rnd() * PI * 2, largo * (0.6 + rnd() * 0.6), ancho * (0.6 + rnd() * 0.6), 0);
}
// pal: { base, sombra, luz, vena, estrias, escamas, roca, grietas, pustulas, seco, relieve, nVenas }
const MOVIL = typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0;
function texturaPiel(clave, pal, rep) {
  if (TEXS[clave]) return TEXS[clave];
  const w = MOVIL ? 256 : 512;
  const [c, g] = lienzo(w, w), [, ga] = lienzo(w, w);
  const ca = ga.canvas;
  g.fillStyle = rgb(pal.base); g.fillRect(0, 0, w, w);
  ga.fillStyle = '#808080'; ga.fillRect(0, 0, w, w);
  // Manchas grandes de luz y sombra (volumen de la carne)
  for (let i = 0; i < 70; i++) {
    const x = rnd() * w, y = rnd() * w, r = 30 + rnd() * 90, osc = rnd() < 0.55;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, rgb(osc ? pal.sombra : pal.luz, 0.22 + rnd() * 0.2)); gr.addColorStop(1, rgb(osc ? pal.sombra : pal.luz, 0));
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // Estrías del músculo: fibras casi verticales
  if (pal.estrias !== false) for (let i = 0; i < 520; i++) {
    const x = rnd() * w, y = rnd() * w, l = 30 + rnd() * 80, cur = (rnd() - 0.5) * 18;
    g.strokeStyle = rgb(pal.sombra, 0.12 + rnd() * 0.12); g.lineWidth = 1 + rnd() * 1.5;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + cur, y + l / 2, x + cur * 0.3, y + l); g.stroke();
    ga.strokeStyle = rnd() < 0.5 ? 'rgba(90,90,90,.35)' : 'rgba(170,170,170,.35)'; ga.lineWidth = 2;
    ga.beginPath(); ga.moveTo(x, y); ga.quadraticCurveTo(x + cur, y + l / 2, x + cur * 0.3, y + l); ga.stroke();
  }
  // Escamas (Leviatán) o placas de roca (Abadón)
  if (pal.escamas) for (let y = 0; y < w; y += 12) for (let x = (y / 12) % 2 ? 6 : 0; x < w; x += 12) {
    const gr = g.createRadialGradient(x, y - 3, 0, x, y, 8);
    gr.addColorStop(0, rgb(pal.luz, 0.35)); gr.addColorStop(1, rgb(pal.sombra, 0.5));
    g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, 7, 6, 0, 0, PI * 2); g.fill();
    const ha = ga.createRadialGradient(x, y - 2, 0, x, y, 8); ha.addColorStop(0, '#d8d8d8'); ha.addColorStop(1, '#404040');
    ga.fillStyle = ha; ga.beginPath(); ga.ellipse(x, y, 7, 6, 0, 0, PI * 2); ga.fill();
  }
  if (pal.roca) for (let i = 0; i < 140; i++) {
    const x = rnd() * w, y = rnd() * w, r = 10 + rnd() * 30;
    g.fillStyle = rgb(rnd() < 0.5 ? pal.luz : pal.sombra, 0.25); g.beginPath(); ga.beginPath();
    for (let k = 0; k < 7; k++) { const a = k / 7 * PI * 2, rr = r * (0.7 + rnd() * 0.4); g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); ga.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
    g.fill(); const v = 120 + ri(110); ga.fillStyle = `rgba(${v},${v},${v},.5)`; ga.fill();
  }
  // Venas en una capa aparte, que se suaviza una sola vez (el filtro por trazo es lentísimo)
  { const [cv, gv] = lienzo(w, w), [cva, gva] = lienzo(w, w);
    venas(gv, gva, pal.nVenas || 26, rgb(pal.vena, 0.42), 2.4, 40, w);
    g.filter = 'blur(0.8px)'; g.drawImage(cv, 0, 0); g.filter = 'none';
    ga.filter = 'blur(1.2px)'; ga.drawImage(cva, 0, 0); ga.filter = 'none'; }
  // Grietas que brillan (lava) en un mapa de emisión aparte
  let em = null;
  if (pal.grietas) {
    const [ce, ge] = lienzo(w, w); ge.fillStyle = '#000'; ge.fillRect(0, 0, w, w);
    for (let i = 0; i < 38; i++) {
      let x = rnd() * w, y = rnd() * w, a = rnd() * PI * 2; const gros = 1.5 + rnd() * 3;
      for (let k = 0; k < 26; k++) {
        const nx = x + Math.cos(a) * 7, ny = y + Math.sin(a) * 7;
        for (const [ctx, col, lw] of [[g, '#120402', gros + 3], [ge, rgb(pal.grietas), gros], [ga, '#202020', gros + 2]]) { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke(); }
        x = nx; y = ny; a += (rnd() - 0.5) * 1.1;
      }
    }
    em = new TH.CanvasTexture(ce); em.colorSpace = TH.SRGBColorSpace;
  }
  // Pústulas (Belfegor)
  if (pal.pustulas) for (let i = 0; i < 60; i++) {
    const x = rnd() * w, y = rnd() * w, r = 3 + rnd() * 7;
    const gr = g.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r); gr.addColorStop(0, rgb(pal.pustulas)); gr.addColorStop(1, rgb(pal.sombra, 0.6));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, PI * 2); g.fill();
    const ha = ga.createRadialGradient(x, y, 0, x, y, r); ha.addColorStop(0, '#fff'); ha.addColorStop(1, '#808080'); ga.fillStyle = ha; ga.beginPath(); ga.arc(x, y, r, 0, PI * 2); ga.fill();
  }
  // Poros y suciedad
  { const a = g.getImageData(0, 0, w, w), b = ga.getImageData(0, 0, w, w), A = a.data, B = b.data;
    for (let i = 0; i < A.length; i += 4) { if (rnd() < 0.05) { const k = 1 - rnd() * 0.22; A[i] *= k; A[i + 1] *= k; A[i + 2] *= k; B[i] *= 0.75; B[i + 1] *= 0.75; B[i + 2] *= 0.75; } }
    g.putImageData(a, 0, 0); ga.putImageData(b, 0, 0); }
  if (pal.seco) for (let i = 0; i < 400; i++) { g.strokeStyle = rgb(pal.sombra, 0.35); g.lineWidth = 0.8; const x = rnd() * w, y = rnd() * w; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - 0.5) * 30, y + (rnd() - 0.5) * 8); g.stroke(); }
  const repetir = (t) => { t.wrapS = t.wrapT = TH.RepeatWrapping; t.repeat.set(rep || 1, rep || 1); t.anisotropy = 4; return t; };
  const map = repetir(new TH.CanvasTexture(c)); map.colorSpace = TH.SRGBColorSpace;
  const normalMap = repetir(new TH.CanvasTexture(normalDesde(ga, w, w, pal.relieve || 2.2)));
  if (em) repetir(em);
  void ca;
  return (TEXS[clave] = { map, normalMap, emissiveMap: em });
}
function texturaCuerno(clave, base, oscuro) {
  if (TEXS[clave]) return TEXS[clave];
  const w = 64, h = 256;
  const [c, g] = lienzo(w, h), [, ga] = lienzo(w, h);
  g.fillStyle = base; g.fillRect(0, 0, w, h); ga.fillStyle = '#888'; ga.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 3 + rnd() * 5) {
    g.fillStyle = `rgba(0,0,0,${0.2 + rnd() * 0.4})`; g.fillRect(0, y, w, 1.5);
    ga.fillStyle = '#333'; ga.fillRect(0, y, w, 2); ga.fillStyle = '#bbb'; ga.fillRect(0, y + 2, w, 1);
  }
  const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, oscuro); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(255,255,255,${rnd() * 0.06})`; g.fillRect(rnd() * w, rnd() * h, 1, 4); }
  const map = new TH.CanvasTexture(c); map.colorSpace = TH.SRGBColorSpace;
  return (TEXS[clave] = { map, normalMap: new TH.CanvasTexture(normalDesde(ga, w, h, 3)) });
}
function texturaTela(clave, base) {
  if (TEXS[clave]) return TEXS[clave];
  const w = 128;
  const [c, g] = lienzo(w, w), [, ga] = lienzo(w, w);
  g.fillStyle = base; g.fillRect(0, 0, w, w); ga.fillStyle = '#808080'; ga.fillRect(0, 0, w, w);
  for (let y = 0; y < w; y += 2) { g.fillStyle = y % 4 ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.18)'; g.fillRect(0, y, w, 1); ga.fillStyle = y % 4 ? '#999' : '#666'; ga.fillRect(0, y, w, 1); }
  for (let i = 0; i < 40; i++) { const x = rnd() * w; g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 2 + rnd() * 3; g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (rnd() - 0.5) * 20, w); g.stroke(); }
  for (let i = 0; i < 25; i++) { g.fillStyle = 'rgba(30,10,5,.35)'; g.beginPath(); g.arc(rnd() * w, rnd() * w, 2 + rnd() * 8, 0, PI * 2); g.fill(); }
  const map = new TH.CanvasTexture(c); map.colorSpace = TH.SRGBColorSpace; map.wrapS = map.wrapT = TH.RepeatWrapping;
  const nm = new TH.CanvasTexture(normalDesde(ga, w, w, 2)); nm.wrapS = nm.wrapT = TH.RepeatWrapping;
  return (TEXS[clave] = { map, normalMap: nm });
}

/* =====================================================================
   Geometría
   ===================================================================== */
// Músculo: perfil de revolución que se ensancha en el vientre muscular y cuelga hacia -Y
function musculo(largo, r0, r1, bulto, pico, seg) {
  const pts = [], n = 14;
  for (let i = n; i >= 0; i--) {
    const t = i / n;
    const s = t < pico ? 0.5 * t / pico : 0.5 + 0.5 * (t - pico) / (1 - pico);
    const r = Math.max(0.002, lerp(r0, r1, t) + bulto * Math.pow(Math.sin(PI * s), 1.3));
    pts.push(new TH.Vector2(r, -t * largo));
  }
  return new TH.LatheGeometry(pts, seg || 12);
}
// Tubo curvo que se afina (cuernos, garras, dedos, huesos de alas)
function tubo(puntos, r0, r1, seg, rad) {
  seg = seg || 14; rad = rad || 8;
  const curva = new TH.CatmullRomCurve3(puntos.map((p) => new TH.Vector3(p[0], p[1], p[2])));
  const fr = curva.computeFrenetFrames(seg, false);
  const pos = [], nor = [], uv = [], idx = [];
  const P = new TH.Vector3(), D = new TH.Vector3();
  for (let i = 0; i <= seg; i++) {
    const t = i / seg; curva.getPointAt(t, P);
    const r = Math.max(0.0005, lerp(r0, r1, Math.pow(t, 0.9)));
    for (let j = 0; j <= rad; j++) {
      const a = j / rad * PI * 2;
      D.copy(fr.normals[i]).multiplyScalar(Math.cos(a)).addScaledVector(fr.binormals[i], Math.sin(a));
      pos.push(P.x + D.x * r, P.y + D.y * r, P.z + D.z * r); nor.push(D.x, D.y, D.z); uv.push(j / rad, t);
    }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < rad; j++) {
    const a = i * (rad + 1) + j, b = a + rad + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new TH.BufferGeometry();
  g.setAttribute('position', new TH.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new TH.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new TH.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); return g;
}
function esfera(r, ws, hs) { return new TH.SphereGeometry(r, ws || 16, hs || 12); }
function malla(padre, geo, mat, x, y, z, sx, sy, sz, rx, ry, rz) {
  const m = new TH.Mesh(geo, mat);
  m.position.set(x || 0, y || 0, z || 0);
  if (sx) m.scale.set(sx, sy == null ? sx : sy, sz == null ? sx : sz);
  m.rotation.set(rx || 0, ry || 0, rz || 0);
  padre.add(m); return m;
}
function hueso(padre, nombre, x, y, z) { const g = new TH.Group(); g.name = nombre || ''; g.position.set(x || 0, y || 0, z || 0); padre.add(g); return g; }
// Fusiona las mallas hijas de cada hueso que comparten material: muchas menos llamadas de dibujo
function fusionar(raiz) {
  const grupos = []; raiz.traverse((o) => { if (!o.isMesh) grupos.push(o); });
  for (const G of grupos) {
    const porMat = new Map();
    for (const c of G.children) if (c.isMesh && !c.userData.libre) { if (!porMat.has(c.material)) porMat.set(c.material, []); porMat.get(c.material).push(c); }
    for (const [mat, lista] of porMat) {
      if (lista.length < 2) continue;
      const P = [], N = [], U = [];
      for (const m of lista) {
        m.updateMatrix();
        const g = (m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone()); g.applyMatrix4(m.matrix);
        const p = g.attributes.position.array, n = g.attributes.normal.array, u = g.attributes.uv ? g.attributes.uv.array : new Float32Array(p.length / 3 * 2);
        // Una escala negativa invierte el sentido de los triángulos
        if (m.matrix.determinant() < 0) {
          for (let i = 0; i < p.length; i += 9) for (let k = 0; k < 3; k++) { let t = p[i + 3 + k]; p[i + 3 + k] = p[i + 6 + k]; p[i + 6 + k] = t; t = n[i + 3 + k]; n[i + 3 + k] = n[i + 6 + k]; n[i + 6 + k] = t; }
          for (let i = 0; i < u.length; i += 6) for (let k = 0; k < 2; k++) { const t = u[i + 2 + k]; u[i + 2 + k] = u[i + 4 + k]; u[i + 4 + k] = t; }
        }
        P.push(p); N.push(n); U.push(u); G.remove(m);
      }
      const cat = (arrs) => { let len = 0; for (const a of arrs) len += a.length; const r = new Float32Array(len); let o = 0; for (const a of arrs) { r.set(a, o); o += a.length; } return r; };
      const geo = new TH.BufferGeometry();
      geo.setAttribute('position', new TH.BufferAttribute(cat(P), 3));
      geo.setAttribute('normal', new TH.BufferAttribute(cat(N), 3));
      geo.setAttribute('uv', new TH.BufferAttribute(cat(U), 2));
      geo.computeBoundingSphere();
      G.add(new TH.Mesh(geo, mat));
    }
  }
}

/* =====================================================================
   Materiales de cada demonio
   ===================================================================== */
const PALETAS = {
  tentador: { base: [128, 22, 16], sombra: [60, 8, 6], luz: [196, 58, 44], vena: [84, 10, 8], relieve: 2.6, nVenas: 34 },
  ira: { base: [44, 30, 26], sombra: [14, 8, 6], luz: [92, 70, 60], vena: [20, 10, 8], roca: true, grietas: [255, 110, 20], estrias: false, relieve: 3.2 },
  pereza: { base: [92, 108, 94], sombra: [40, 50, 44], luz: [140, 156, 138], vena: [74, 40, 86], pustulas: [190, 180, 90], relieve: 2.0, nVenas: 40 },
  soberbia: { base: [150, 138, 156], sombra: [62, 50, 72], luz: [210, 200, 214], vena: [30, 20, 40], relieve: 1.8, nVenas: 46 },
  envidia: { base: [44, 78, 50], sombra: [14, 34, 20], luz: [96, 140, 90], vena: [20, 50, 24], escamas: true, relieve: 2.6, estrias: false },
  lujuria: { base: [166, 66, 94], sombra: [70, 16, 40], luz: [232, 140, 162], vena: [96, 12, 54], relieve: 1.6, nVenas: 30 },
  gula: { base: [104, 92, 44], sombra: [42, 36, 12], luz: [156, 142, 74], vena: [62, 74, 20], pustulas: [150, 170, 70], relieve: 2.3, nVenas: 38 },
  avaricia: { base: [118, 96, 66], sombra: [48, 36, 22], luz: [170, 146, 104], vena: [60, 40, 24], seco: true, relieve: 2.4, nVenas: 20 }
};
function materiales(tipo) {
  const pal = PALETAS[tipo];
  const tp = texturaPiel('p' + tipo, pal, 2);
  const std = (o) => new TH.MeshStandardMaterial(Object.assign({ roughness: 0.75, metalness: 0 }, o));
  const tela = (clave, color, o) => { const t = texturaTela(clave, color); return std(Object.assign({ map: t.map, normalMap: t.normalMap, roughness: 0.95, side: TH.DoubleSide }, o)); };
  const cu = texturaCuerno('cu' + tipo, tipo === 'pereza' ? '#a89a78' : tipo === 'soberbia' ? '#d8d2c4' : '#2a2422', tipo === 'pereza' ? '#3a3020' : '#0a0808');
  const M = {
    piel: std({ map: tp.map, normalMap: tp.normalMap, normalScale: new TH.Vector2(1.1, 1.1), roughness: tipo === 'envidia' ? 0.45 : 0.62, emissiveMap: tp.emissiveMap || null, emissive: tp.emissiveMap ? 0xffffff : 0x000000, emissiveIntensity: tp.emissiveMap ? 1.1 : 0 }),
    cuerno: std({ map: cu.map, normalMap: cu.normalMap, roughness: 0.4 }),
    garra: std({ color: 0x0e0a0a, roughness: 0.28, metalness: 0.2 }),
    diente: std({ color: 0xe8e0c8, roughness: 0.3 }),
    boca: std({ color: 0x2a0404, roughness: 0.5 }),
    ojo: new TH.MeshBasicMaterial({ color: { tentador: 0xffc030, ira: 0xfff070, pereza: 0xd8f070, soberbia: 0xe070ff, envidia: 0xffee40, avaricia: 0xfff6c0, lujuria: 0xff60c0, gula: 0xff3010 }[tipo] }),
    tela: tela('te' + tipo, tipo === 'tentador' ? '#3a1410' : tipo === 'pereza' ? '#2e2a1c' : '#241a14')
  };
  if (tipo === 'soberbia') Object.assign(M, { mascara: std({ color: 0xf2ede4, roughness: 0.22 }), oro: std({ color: 0xffcf6a, metalness: 1, roughness: 0.25 }), halo: new TH.MeshBasicMaterial({ color: 0xc060ff }), capa: tela('capa', '#120a18', { roughness: 0.9 }) });
  if (tipo === 'lujuria') Object.assign(M, { oro: std({ color: 0xffd27a, metalness: 1, roughness: 0.2 }), pelo: std({ color: 0x1a0610, roughness: 0.45, side: TH.DoubleSide }), seda: tela('seda', '#5a0f3a', { roughness: 0.5 }) });
  if (tipo === 'gula') Object.assign(M, {
    insecto: std({ color: 0x4a0400, emissive: 0xff2200, emissiveIntensity: 0.7, roughness: 0.12, metalness: 0.35 }),
    alaMosca: new TH.MeshStandardMaterial({ color: 0xc8dce0, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.38, side: TH.DoubleSide, depthWrite: false }),
    mosca: new TH.MeshBasicMaterial({ color: 0x0c0c08 })
  });
  if (tipo === 'pereza') Object.assign(M, { cadena: std({ color: 0x6e6a64, metalness: 0.9, roughness: 0.42 }) });
  if (tipo === 'ira') Object.assign(M, { lava: std({ color: 0x220600, emissive: 0xff5a10, emissiveIntensity: 3 }), fuego: new TH.MeshBasicMaterial({ color: 0xff8a20, transparent: true, opacity: 0.8, blending: TH.AdditiveBlending, depthWrite: false }) });
  if (tipo === 'avaricia') Object.assign(M, { oro: std({ color: 0xffd34a, metalness: 1, roughness: 0.2, emissive: 0x5a3800, emissiveIntensity: 0.8 }), capa: tela('hab', '#1a160e', { roughness: 1 }) });
  if (tipo === 'tentador') {
    const t = texturaPiel('ala', { base: [70, 10, 10], sombra: [24, 2, 2], luz: [140, 30, 24], vena: [20, 2, 2], relieve: 2, nVenas: 60, estrias: false }, 1);
    Object.assign(M, { ala: std({ map: t.map, normalMap: t.normalMap, roughness: 0.6, side: TH.DoubleSide }), oro: std({ color: 0xffc552, metalness: 1, roughness: 0.25 }) });
  }
  // Leviatán puede volverse casi invisible
  if (tipo === 'envidia') for (const k in M) if (k !== 'ojo') { M[k].transparent = true; M[k].userData.invis = true; }
  return M;
}

/* =====================================================================
   Cuerpo humanoide con proporciones reales (altura ~1 antes de normalizar)
   s: { musc, hombros, barriga, cabeza, brazo, pierna, garra, cuernos, cuernoK, taparrabo }
   ===================================================================== */
function humanoide(M, s) {
  const K = s.musc || 1, HB = s.hombros || 1, BR = s.brazo || 1, PI_ = s.pierna || 1;
  const raiz = new TH.Group(); raiz.name = 'raiz';
  const pelvis = hueso(raiz, 'pelvis', 0, 0.48 * PI_, 0);
  const torso = hueso(pelvis, 'torso', 0, 0.02, 0);
  // Tronco: perfil de pelvis, cintura, costillas, pecho y hombros
  const bz = s.barriga ? 1 : 0;
  const prof = [[0.075, -0.02], [0.098, 0.02], [0.092, 0.08], [0.085 * (1 + bz * 0.6), 0.12], [0.1 * (1 + bz * 0.45), 0.17], [0.118 * K * HB, 0.23], [0.13 * K * HB, 0.28], [0.12 * K * HB, 0.31], [0.07, 0.335], [0.04, 0.345]].map(([r, y]) => new TH.Vector2(r, y));
  malla(torso, new TH.LatheGeometry(prof, 18), M.piel, 0, 0, 0, 1, 1, 0.62 * (1 + bz * 0.25));
  // Pectorales, dorsales, trapecios, abdominales y oblicuos
  for (const l of [1, -1]) {
    malla(torso, esfera(0.062 * K), M.piel, l * 0.05 * HB, 0.255, 0.045 * K, 1.15, 0.7, 0.55, 0.2, 0, -l * 0.2);
    malla(torso, esfera(0.05 * K), M.piel, l * 0.085 * HB, 0.2, -0.015, 0.8, 1.4, 0.7);
    malla(torso, esfera(0.05 * K), M.piel, l * 0.055, 0.31, -0.02, 1.3, 0.6, 0.8, 0, 0, l * 0.4);
    if (!s.barriga) for (let k = 0; k < 3; k++) malla(torso, esfera(0.024 * K), M.piel, l * 0.024, 0.095 + k * 0.042, 0.055, 1.05, 0.8, 0.5);
    malla(torso, esfera(0.03), M.piel, l * 0.07, 0.04, 0.035, 0.7, 1.4, 0.6, 0, 0, l * 0.5);
  }
  if (s.barriga) malla(torso, esfera(0.11), M.piel, 0, 0.13, 0.04, 1.1, 1.0, 0.95);
  for (let k = 0; k < 7; k++) malla(torso, esfera(0.011), M.piel, 0, 0.05 + k * 0.04, -0.06 - (k > 3 ? 0.008 : 0));
  // Cuello y cabeza
  const cuello = hueso(torso, 'cuello', 0, 0.325, -0.005);
  malla(cuello, musculo(0.06, 0.03 * K, 0.036 * K, 0.004, 0.5, 10), M.piel, 0, 0.06, 0);
  for (const l of [1, -1]) malla(cuello, esfera(0.016), M.piel, l * 0.018, 0.03, 0.02, 0.6, 2.2, 0.6, -0.3, 0, l * 0.35);
  const cabeza = hueso(cuello, 'cabeza', 0, 0.055, 0.005);
  const hc = 0.06 * (s.cabeza || 1);
  malla(cabeza, esfera(hc, 18, 14), M.piel, 0, hc * 1.05, -0.004, 0.9, 1.08, 1.08);
  // Rostro: ceño marcado, pómulos, nariz, orejas puntiagudas y ojos hundidos
  malla(cabeza, esfera(hc * 0.45), M.piel, 0, hc * 1.1, hc * 0.8, 1.7, 0.36, 0.42, 0.25, 0, 0);
  for (const l of [1, -1]) {
    malla(cabeza, esfera(hc * 0.3), M.piel, l * hc * 0.5, hc * 0.78, hc * 0.62, 1.2, 0.8, 0.9);
    malla(cabeza, new TH.ConeGeometry(hc * 0.22, hc * 0.9, 6), M.piel, l * hc * 0.92, hc * 1.05, -hc * 0.05, 0.4, 1, 1, -0.4, 0, -l * 1.15);
    malla(cabeza, esfera(hc * 0.12, 10, 8), M.ojo, l * hc * 0.33, hc * 1.0, hc * 0.86, 1.25, 0.6, 0.5);
  }
  malla(cabeza, new TH.ConeGeometry(hc * 0.15, hc * 0.45, 6), M.piel, 0, hc * 0.82, hc * 0.95, 1, 1, 0.7, 1.5, 0, 0);
  // Mandíbula con colmillos
  const mand = hueso(cabeza, 'mandibula', 0, hc * 0.55, hc * 0.15);
  malla(mand, esfera(hc * 0.62, 14, 10), M.piel, 0, -hc * 0.12, hc * 0.38, 0.95, 0.42, 0.95);
  malla(mand, esfera(hc * 0.42, 10, 8), M.boca, 0, -hc * 0.02, hc * 0.5, 0.85, 0.25, 0.7);
  for (let i = -2; i <= 2; i++) {
    malla(mand, new TH.ConeGeometry(hc * 0.05, hc * (Math.abs(i) === 2 ? 0.32 : 0.14), 5), M.diente, i * hc * 0.15, hc * 0.05, hc * 0.8 - Math.abs(i) * hc * 0.06);
    malla(cabeza, new TH.ConeGeometry(hc * 0.05, hc * (Math.abs(i) === 1 ? 0.34 : 0.15), 5), M.diente, i * hc * 0.15, hc * 0.5, hc * 0.86 - Math.abs(i) * hc * 0.06, 1, 1, 1, PI, 0, 0);
  }
  // Cuernos
  const CK = s.cuernoK || 1;
  if (s.cuernos === 'carnero') for (const l of [1, -1]) malla(cabeza, tubo([[l * 0.03, 0.1, 0.01], [l * 0.06, 0.16, -0.02], [l * 0.115, 0.175, -0.05], [l * 0.155, 0.135, -0.03], [l * 0.16, 0.085, 0.02], [l * 0.145, 0.06, 0.06]].map(([x, y, z]) => [x * CK, (y - 0.08) * CK + 0.08, z * CK]), 0.026 * CK, 0.002, 22, 10), M.cuerno);
  if (s.cuernos === 'toro') for (const l of [1, -1]) malla(cabeza, tubo([[l * 0.04, 0.1, 0.0], [l * 0.1, 0.12, 0.01], [l * 0.15, 0.17, 0.03], [l * 0.16, 0.24, 0.05]].map(([x, y, z]) => [x * CK, (y - 0.08) * CK + 0.08, z]), 0.024 * CK, 0.002, 16, 10), M.cuerno);
  if (s.cuernos === 'cortos') for (const l of [1, -1]) malla(cabeza, tubo([[l * 0.03, 0.11, 0.02], [l * 0.045, 0.15, 0.0], [l * 0.05, 0.18, -0.03]], 0.012, 0.0015, 10, 8), M.cuerno);
  // Brazos: deltoides, bíceps, antebrazo con espinas, mano con dedos y garras largas
  for (const l of [1, -1]) {
    const lado = l === 1 ? 'D' : 'I';
    const h = hueso(torso, 'h' + lado, l * 0.15 * HB, 0.29, -0.01);
    malla(h, esfera(0.04 * K), M.piel, l * 0.006, -0.012, 0, 1.0, 1.2, 1.0);
    malla(h, musculo(0.17 * BR, 0.036 * K, 0.026 * K, 0.014 * K, 0.42), M.piel, 0, 0, 0, 1, 1, 0.92);
    const co = hueso(h, 'c' + lado, 0, -0.17 * BR, 0);
    malla(co, esfera(0.026 * K), M.piel, 0, 0, -0.004);
    malla(co, musculo(0.16 * BR, 0.03 * K, 0.019 * K, 0.01 * K, 0.22), M.piel, 0, 0, 0, 1.1, 1, 0.9);
    for (let k = 0; k < 3; k++) malla(co, new TH.ConeGeometry(0.006, 0.03, 5), M.garra, l * 0.02, -0.04 - k * 0.04, -0.018, 1, 1, 1, -2.2, 0, -l * 0.4);
    const mano = hueso(co, 'm' + lado, 0, -0.16 * BR, 0);
    malla(mano, esfera(0.026 * K), M.piel, 0, -0.022, 0.004, 0.95, 1.3, 0.55);
    const G = s.garra || 1;
    for (let d = 0; d < 4; d++) {
      const x = (d - 1.5) * 0.013, ln = (d === 1 || d === 2 ? 0.07 : 0.058) * G;
      malla(mano, tubo([[x, -0.045, 0.004], [x * 1.2, -0.045 - ln * 0.45, 0.012], [x * 1.3, -0.045 - ln * 0.8, 0.028], [x * 1.35, -0.045 - ln, 0.05]], 0.0065, 0.004, 8, 6), M.piel);
      malla(mano, tubo([[x * 1.35, -0.045 - ln, 0.05], [x * 1.4, -0.045 - ln - 0.02 * G, 0.07], [x * 1.4, -0.045 - ln - 0.05 * G, 0.075]], 0.0042, 0.0004, 8, 6), M.garra);
    }
    malla(mano, tubo([[0, -0.02, 0.02], [-l * 0.02, -0.035, 0.035], [-l * 0.022, -0.05, 0.055]], 0.007, 0.002, 6, 6), M.piel);
  }
  // Piernas: cuádriceps, gemelos, pies con garras
  for (const l of [1, -1]) {
    const lado = l === 1 ? 'D' : 'I';
    const p = hueso(pelvis, 'p' + lado, l * 0.055, -0.005, 0);
    const muslo = 0.235 * PI_, pierna = 0.215 * PI_;
    malla(p, musculo(muslo, 0.052 * K, 0.034 * K, 0.014 * K, 0.35, 14), M.piel, 0, 0, 0, 1, 1, 1.05);
    const r = hueso(p, 'r' + lado, 0, -muslo, 0);
    malla(r, esfera(0.034 * K), M.piel, 0, 0, 0.01, 1, 1, 1.05);
    malla(r, musculo(pierna, 0.034 * K, 0.02 * K, 0.012 * K, 0.25, 12), M.piel, 0, 0, -0.004, 1, 1, 1.1);
    malla(r, esfera(0.026 * K), M.piel, 0, -0.06, -0.018, 0.9, 1.7, 0.9);
    const f = hueso(r, 'f' + lado, 0, -pierna, 0);
    malla(f, esfera(0.028), M.piel, 0, -0.008, 0.035, 0.95, 0.5, 2.0);
    for (let d = -1; d <= 1; d++) malla(f, tubo([[d * 0.014, -0.012, 0.075], [d * 0.018, -0.02, 0.095], [d * 0.02, -0.03, 0.105]], 0.006, 0.0005, 6, 6), M.garra);
    malla(f, new TH.ConeGeometry(0.008, 0.035, 5), M.garra, 0, 0.0, -0.025, 1, 1, 1, -2.2, 0, 0);
  }
  // Taparrabos: tiras de cuero que cuelgan del cinturón
  if (s.taparrabo) {
    malla(pelvis, new TH.TorusGeometry(0.093, 0.009, 6, 24), M.tela, 0, 0.015, 0, 1, 1, 0.66, PI / 2, 0, 0);
    let k = 0;
    for (const [z, rot] of [[0.06, 0], [-0.06, PI]]) for (let i = -1; i <= 1; i++) {
      const t = hueso(pelvis, 'tela' + (k++), i * 0.04, 0.01, z);
      t.rotation.y = rot;
      const largo = (i === 0 ? 0.28 : 0.22) * PI_;
      const g = new TH.PlaneGeometry(0.05, largo, 1, 6); g.translate(0, -largo / 2, 0);
      const pos = g.attributes.position;
      for (let v = 0; v < pos.count; v++) { const y = pos.getY(v); pos.setX(v, pos.getX(v) * (1 - (y / -largo) * 0.35) + (y < -largo * 0.9 ? (rnd() - 0.5) * 0.02 : 0)); }
      g.computeVertexNormals();
      malla(t, g, M.tela, 0, 0, 0.005).userData.libre = true;
    }
  }
  return raiz;
}
function nombrar(raiz) { const J = {}; raiz.traverse((o) => { if (o.name) J[o.name] = o; }); return J; }

/* =====================================================================
   Cada demonio
   ===================================================================== */
const CONSTRUIR = {
  // Lucifer: rojo, musculoso, cuernos de carnero, alas, cola y garras largas
  tentador(M) {
    const r = humanoide(M, { musc: 1.18, hombros: 1.12, cuernos: 'carnero', cuernoK: 1.15, garra: 1.4, taparrabo: true });
    const J = nombrar(r);
    for (const l of [1, -1]) {
      const a = hueso(J.torso, 'ala' + (l === 1 ? 0 : 1), l * 0.05, 0.27, -0.06);
      const pts = [[0, 0, 0], [l * 0.22, 0.2, -0.05], [l * 0.42, 0.28, -0.08]];
      malla(a, tubo(pts, 0.012, 0.006, 10, 6), M.cuerno);
      const dedos = [[l * 0.62, 0.12, -0.06], [l * 0.6, -0.08, -0.04], [l * 0.48, -0.22, -0.02], [l * 0.3, -0.26, 0]];
      for (const d of dedos) malla(a, tubo([pts[2], [lerp(pts[2][0], d[0], 0.5), lerp(pts[2][1], d[1], 0.5) + 0.02, -0.06], d], 0.006, 0.001, 8, 5), M.cuerno);
      const sh = new TH.Shape(); sh.moveTo(0, 0); sh.lineTo(0.22, 0.2); sh.lineTo(0.42, 0.28);
      for (const d of dedos) { sh.lineTo(Math.abs(d[0]) * 0.92 + 0.02, d[1] + 0.05); sh.lineTo(Math.abs(d[0]), d[1]); }
      sh.lineTo(0.12, -0.15); sh.lineTo(0, -0.05);
      const mem = malla(a, new TH.ShapeGeometry(sh, 6), M.ala, 0, 0, -0.05);
      if (l === -1) mem.scale.x = -1;
    }
    let p = hueso(J.pelvis, 'cola0', 0, 0.0, -0.07);
    for (let i = 0; i < 9; i++) {
      malla(p, musculo(0.06, 0.022 - i * 0.002, 0.02 - i * 0.002, 0.002, 0.5, 8), M.piel, 0, 0, 0, 1, 1, 1, PI / 2, 0, 0);
      p = hueso(p, 'cola' + (i + 1), 0, 0, -0.055);
    }
    malla(p, new TH.ConeGeometry(0.03, 0.06, 4), M.piel, 0, 0, -0.02, 1, 1, 0.3, -PI / 2, 0, 0);
    malla(J.torso, new TH.TorusGeometry(0.028, 0.006, 6, 16), M.oro, 0, 0.3, 0.06, 1, 1, 1, 0.4, 0, 0);
    return { raiz: r, cfg: { zancada: 1 } };
  },
  // Abadón: coloso de roca con grietas de lava, cuernos de toro y fuego en la cabeza
  ira(M) {
    const r = humanoide(M, { musc: 1.55, hombros: 1.3, cabeza: 0.95, cuernos: 'toro', cuernoK: 1.2, garra: 1.1, brazo: 1.08, pierna: 0.92, taparrabo: true });
    const J = nombrar(r);
    for (const l of [1, -1]) for (let k = 0; k < 3; k++) malla(J['h' + (l === 1 ? 'D' : 'I')], new TH.DodecahedronGeometry(0.03 + k * 0.006, 0), M.piel, l * 0.03, 0.02 - k * 0.012, -0.02 + k * 0.02, 1, 0.7, 1, rnd(), rnd(), rnd());
    for (let k = 0; k < 5; k++) malla(J.torso, new TH.ConeGeometry(0.018, 0.06 - k * 0.006, 5), M.cuerno, 0, 0.3 - k * 0.05, -0.075, 1, 1, 1, -1.9, 0, 0);
    const nucleo = malla(J.torso, esfera(0.03, 12, 10), M.lava, 0, 0.22, 0.06, 1, 1, 0.4); nucleo.name = 'lava0'; nucleo.userData.libre = true;
    for (let i = 0; i < 7; i++) {
      const g = new TH.ConeGeometry(0.022, 0.1 + (i % 3) * 0.03, 6); g.translate(0, 0.05, 0);
      const f = malla(J.cabeza, g, M.fuego, (i - 3) * 0.016, 0.12, -0.02 - Math.abs(i - 3) * 0.006, 1, 1, 1, -0.25, 0, 0); f.name = 'llama' + i; f.userData.libre = true;
    }
    return { raiz: r, cfg: { zancada: 0.8, pesado: 1.8 } };
  },
  // Belfegor: gigante hinchado y encorvado, con cadenas en las muñecas
  pereza(M) {
    const r = humanoide(M, { musc: 1.05, hombros: 1.15, barriga: true, cabeza: 1.1, cuernos: 'cortos', garra: 0.8, brazo: 1.12, pierna: 0.86, taparrabo: true });
    const J = nombrar(r);
    let n = 0;
    for (const lado of ['D', 'I']) {
      malla(J['c' + lado], new TH.TorusGeometry(0.024, 0.007, 6, 14), M.cadena, 0, -0.13, 0, 1, 1, 1, PI / 2, 0, 0);
      let p = hueso(J['c' + lado], 'cadena' + (n++), 0, -0.14, 0);
      for (let i = 0; i < 6; i++) { malla(p, new TH.TorusGeometry(0.014, 0.004, 5, 10), M.cadena, 0, -0.016, 0, 1, 1.4, 1, 0, i % 2 ? 0 : PI / 2, 0); p = hueso(p, 'cadena' + (n++), 0, -0.03, 0); }
    }
    return { raiz: r, cfg: { zancada: 0.5, encorvado: 0.35, arrastre: true } };
  },
  // Luzbel: alto y delgado, piel ceniza, máscara de porcelana, aureola negra y capa
  soberbia(M) {
    const r = humanoide(M, { musc: 0.78, hombros: 0.95, pierna: 1.12, brazo: 1.12, cabeza: 0.95, garra: 1.5, cuernos: 'ninguno' });
    const J = nombrar(r);
    const hc = 0.057;
    malla(J.cabeza, new TH.SphereGeometry(hc * 1.02, 16, 12, 0, PI * 2, 0, PI * 0.55), M.mascara, 0, hc * 1.05, hc * 0.12, 0.95, 1.12, 1.12, PI / 2 - 0.1, 0, 0);
    for (let i = 0; i < 11; i++) { const a = i / 11 * PI * 2; malla(J.cabeza, new TH.ConeGeometry(0.004, 0.035 + (i % 2) * 0.02, 5), M.oro, Math.cos(a) * hc * 0.85, hc * 1.85, Math.sin(a) * hc * 0.85, 1, 1, 1, Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4); }
    const halo = malla(J.cabeza, new TH.TorusGeometry(0.1, 0.005, 6, 32, PI * 1.7), M.halo, 0, 0.18, -0.06, 1, 1, 1, PI / 2 - 0.25, 0, 0); halo.name = 'aureola'; halo.userData.libre = true;
    malla(J.pelvis, new TH.ConeGeometry(0.11, 0.26, 14, 1, true), M.capa, 0, -0.11, 0, 1, 1, 0.8, PI, 0, 0);
    for (let i = 0; i < 5; i++) {
      const t = hueso(J.torso, 'capa' + i, (i - 2) * 0.045, 0.31, -0.07);
      const largo = 0.6 + (2 - Math.abs(i - 2)) * 0.12 + rnd() * 0.06;
      const g = new TH.PlaneGeometry(0.06, largo, 1, 8); g.translate(0, -largo / 2, 0);
      malla(t, g, M.capa).userData.libre = true;
    }
    for (const l of ['D', 'I']) malla(J['c' + l], new TH.TorusGeometry(0.026, 0.005, 6, 14), M.oro, 0, -0.06, 0, 1, 1, 1, PI / 2, 0, 0);
    return { raiz: r, cfg: { zancada: 0.8, flota: 0.025 } };
  },
  // Leviatán: criatura escamosa que corre a cuatro patas, con púas y cola de reptil
  envidia(M) {
    const r = humanoide(M, { musc: 0.82, hombros: 0.9, cabeza: 1.05, brazo: 1.3, pierna: 0.82, garra: 1.6, cuernos: 'cortos' });
    const J = nombrar(r);
    for (let k = 0; k < 8; k++) malla(J.torso, new TH.ConeGeometry(0.012, 0.07 - k * 0.005, 5), M.cuerno, 0, 0.3 - k * 0.04, -0.07, 1, 1, 1, -1.6, 0, 0);
    for (const l of [1, -1]) malla(J.cabeza, esfera(0.006, 8, 6), M.ojo, l * 0.03, 0.078, 0.052);
    let p = hueso(J.pelvis, 'cola0', 0, 0.0, -0.06);
    for (let i = 0; i < 8; i++) { malla(p, musculo(0.07, 0.024 - i * 0.0025, 0.021 - i * 0.0025, 0.003, 0.5, 8), M.piel, 0, 0, 0, 1, 1, 1, PI / 2, 0, 0); p = hueso(p, 'cola' + (i + 1), 0, 0, -0.065); }
    return { raiz: r, cfg: { zancada: 1.1, cuadrupedo: 1.05 } };
  },
  // Asmodeo: esbelto y seductor, piel carmesí, melena negra, joyas de oro,
  // cola de serpiente y, como cuenta la tradición, dos cabezas más (de toro y de carnero)
  lujuria(M) {
    const r = humanoide(M, { musc: 0.86, hombros: 1.0, pierna: 1.08, brazo: 1.05, cabeza: 0.95, garra: 1.3, cuernos: 'carnero', cuernoK: 0.8, taparrabo: true });
    const J = nombrar(r);
    // Melena larga que cae por la espalda
    for (let i = 0; i < 7; i++) {
      const t = hueso(J.cabeza, 'capa' + i, (i - 3) * 0.016, 0.1, -0.05);
      const largo = 0.2 + (3 - Math.abs(i - 3)) * 0.035;
      const g = new TH.PlaneGeometry(0.028, largo, 1, 6); g.translate(0, -largo / 2, 0);
      malla(t, g, M.pelo).userData.libre = true;
    }
    // Collar y brazaletes de oro
    malla(J.cuello, new TH.TorusGeometry(0.036, 0.005, 6, 18), M.oro, 0, 0.012, 0, 1, 1, 1, PI / 2, 0, 0);
    for (const l of ['D', 'I']) malla(J['c' + l], new TH.TorusGeometry(0.024, 0.005, 6, 14), M.oro, 0, -0.1, 0, 1, 1, 1, PI / 2, 0, 0);
    // Faja de seda sobre la cadera
    malla(J.pelvis, new TH.TorusGeometry(0.096, 0.014, 6, 24), M.seda, 0, 0.03, 0, 1, 1, 0.66, PI / 2, 0, 0);
    // Cabezas de toro y de carnero sobre los hombros
    for (const l of [1, -1]) {
      const c = hueso(J.torso, '', l * 0.115, 0.335, -0.01);
      malla(c, esfera(0.032, 12, 10), M.piel, 0, 0.02, 0.005, 0.95, 1, 1.2);
      malla(c, esfera(0.02, 10, 8), M.piel, 0, 0.012, 0.035, 1, 0.8, 1.1);
      for (const k of [1, -1]) {
        malla(c, esfera(0.0055, 8, 6), M.ojo, k * 0.014, 0.028, 0.03);
        if (l === 1) malla(c, tubo([[k * 0.022, 0.035, 0], [k * 0.05, 0.045, 0.01], [k * 0.06, 0.07, 0.025]], 0.007, 0.001, 8, 6), M.cuerno);
        else malla(c, tubo([[k * 0.02, 0.04, -0.005], [k * 0.04, 0.06, -0.02], [k * 0.055, 0.045, -0.01], [k * 0.05, 0.025, 0.01]], 0.008, 0.001, 10, 6), M.cuerno);
      }
    }
    let p = hueso(J.pelvis, 'cola0', 0, 0.0, -0.065);
    for (let i = 0; i < 9; i++) { malla(p, musculo(0.06, 0.018 - i * 0.0015, 0.016 - i * 0.0015, 0.002, 0.5, 8), M.piel, 0, 0, 0, 1, 1, 1, PI / 2, 0, 0); p = hueso(p, 'cola' + (i + 1), 0, 0, -0.055); }
    malla(p, new TH.ConeGeometry(0.018, 0.045, 5), M.piel, 0, 0, -0.015, 1, 1, 0.5, -PI / 2, 0, 0);
    return { raiz: r, cfg: { zancada: 0.95 } };
  },
  // Belcebú, el señor de las moscas: obeso, cabeza de insecto con ojos compuestos,
  // una boca con dientes en la barriga, alas de mosca y un enjambre a su alrededor
  gula(M) {
    const r = humanoide(M, { musc: 1.2, hombros: 1.2, barriga: true, cabeza: 1.1, cuernos: 'ninguno', garra: 1.0, brazo: 1.0, pierna: 0.84, taparrabo: true });
    const J = nombrar(r);
    const hc = 0.066;
    for (const l of [1, -1]) {
      malla(J.cabeza, esfera(0.034, 16, 12), M.insecto, l * 0.036, hc * 1.12, hc * 0.5, 1, 1.15, 0.95);
      // Mandíbulas de insecto y antenas
      malla(J.cabeza, tubo([[l * 0.02, hc * 0.55, hc * 0.85], [l * 0.035, hc * 0.35, hc * 1.05], [l * 0.012, hc * 0.2, hc * 1.15]], 0.007, 0.001, 8, 6), M.garra);
      malla(J.cabeza, tubo([[l * 0.015, hc * 1.8, hc * 0.5], [l * 0.04, hc * 2.4, hc * 0.9], [l * 0.07, hc * 2.6, hc * 1.3]], 0.003, 0.0012, 8, 5), M.garra);
    }
    // Boca en la barriga con un anillo de dientes
    malla(J.torso, esfera(0.055, 16, 12), M.boca, 0, 0.12, 0.135, 1.1, 0.75, 0.35);
    for (let i = 0; i < 12; i++) { const a = i / 12 * PI * 2; malla(J.torso, new TH.ConeGeometry(0.006, 0.026, 5), M.diente, Math.cos(a) * 0.055, 0.12 + Math.sin(a) * 0.04, 0.14, 1, 1, 1, PI / 2 + Math.sin(a) * 0.6, 0, -Math.cos(a) * 0.6 + (Math.sin(a) > 0 ? PI : 0)); }
    // Alas de mosca en la espalda
    for (let i = 0; i < 2; i++) {
      const a = hueso(J.torso, 'alamosca' + i, (i ? -1 : 1) * 0.04, 0.3, -0.08);
      const g = new TH.CircleGeometry(0.13, 18); g.scale(0.42, 1, 1); g.translate(0, -0.12, 0);
      const m = malla(a, g, M.alaMosca, 0, 0, 0, 1, 1, 1, -0.3, 0, (i ? -1 : 1) * 0.5); m.userData.libre = true;
    }
    // Enjambre de moscas
    for (let i = 0; i < 12; i++) { const m = malla(r, esfera(0.006, 6, 4), M.mosca, 0, 0.5, 0, 1.3, 0.8, 1); m.name = 'mosca' + i; m.userData.libre = true; }
    return { raiz: r, cfg: { zancada: 0.55, encorvado: 0.2, pesado: 1.4 } };
  },
  // Mammón: espectro momificado con hábito, máscara de oro y monedas que giran
  avaricia(M) {
    const r = humanoide(M, { musc: 0.6, hombros: 0.92, cabeza: 0.95, garra: 1.7, brazo: 1.05, cuernos: 'ninguno' });
    const J = nombrar(r);
    J.pD.visible = J.pI.visible = false;
    const t = malla(J.pelvis, new TH.ConeGeometry(0.17, 0.5, 16, 4, true), M.capa, 0, -0.22, 0, 1, 1, 0.85); t.name = 'tunica'; t.userData.libre = true;
    malla(J.torso, new TH.CylinderGeometry(0.1, 0.13, 0.3, 14, 1, true), M.capa, 0, 0.17, -0.005, 1, 1, 0.75);
    malla(J.cabeza, new TH.SphereGeometry(0.085, 16, 12, PI, PI, 0, PI * 0.75), M.capa, 0, 0.075, -0.004, 1.05, 1.15, 1.15, -0.15, 0, 0);
    malla(J.cabeza, new TH.SphereGeometry(0.058, 16, 12, 0, PI), M.oro, 0, 0.062, 0.018, 0.95, 1.12, 0.9);
    for (let i = 0; i < 7; i++) { const g = new TH.CylinderGeometry(0.03, 0.03, 0.006, 16); g.rotateX(PI / 2); const m = malla(r, g, M.oro, 0, 0.5, 0); m.name = 'moneda' + i; m.userData.libre = true; }
    return { raiz: r, cfg: { zancada: 0, flota: 0.12 } };
  }
};

/* ---------- Plantillas: una por tipo, medidas y normalizadas a altura 1 ---------- */
const PLANTILLAS = {};
const NOMBRES = ['pelvis', 'torso', 'cuello', 'cabeza', 'mandibula', 'hD', 'hI', 'cD', 'cI', 'mD', 'mI', 'pD', 'pI', 'rD', 'rI', 'fD', 'fI', 'aureola', 'tunica'];
function plantilla(tipo) {
  if (PLANTILLAS[tipo]) return PLANTILLAS[tipo];
  const M = materiales(tipo);
  const { raiz, cfg } = CONSTRUIR[tipo](M);
  fusionar(raiz);
  // Medir la altura real en su pose habitual (el cuadrúpedo, agachado)
  const J = nombrar(raiz);
  if (cfg.cuadrupedo) { J.torso.rotation.x = cfg.cuadrupedo; J.cuello.rotation.x = -0.6; J.cabeza.rotation.x = -0.45; J.hD.rotation.x = J.hI.rotation.x = -cfg.cuadrupedo - 0.15; J.pD.rotation.x = J.pI.rotation.x = -0.5; J.rD.rotation.x = J.rI.rotation.x = 0.9; J.pelvis.position.y -= 0.12; }
  raiz.updateMatrixWorld(true);
  const caja = new TH.Box3().setFromObject(raiz);
  const altura = caja.max.y - Math.min(0, caja.min.y);
  if (cfg.cuadrupedo) J.pelvis.position.y += 0.12;
  for (const k in J) if (J[k] !== raiz && k !== 'aureola' && k !== 'tunica' && !/^(ala|alamosca|cola|tela|capa|cadena|llama|lava|moneda|mosca)/.test(k)) J[k].rotation.set(0, 0, 0);
  return (PLANTILLAS[tipo] = { raiz, cfg, escala: 1 / altura });
}

/* =====================================================================
   Poses de ataque: W = preparando, S = golpe
   hDx/hIx hombros (adelante -), hDz/hIz separar brazos, cD/cI codos (-),
   tx torso (adelante +), ty giro, cab cabeza, boca, agach agacharse
   ===================================================================== */
const POSES = {
  zarpazo: { W: { hDx: -2.2, hDz: 0.9, cD: -1.4, tx: -0.15, ty: -0.55, boca: 0.4, agach: 0.03, hIx: 0.3 }, S: { hDx: -0.9, hDz: -0.4, cD: -0.15, tx: 0.4, ty: 0.65, boca: 0.9, agach: 0.07, hIx: 0.5 } },
  rango: { W: { hDx: -1.5, hIx: -1.5, hDz: 0.25, hIz: 0.25, cD: -1.9, cI: -1.9, tx: -0.25, cab: -0.3, boca: 0.5 }, S: { hDx: -1.55, hIx: -1.55, hDz: 0.05, hIz: 0.05, cD: -0.05, cI: -0.05, tx: 0.18, boca: 1 } },
  temblor: { W: { hDx: -3.0, hIx: -3.0, hDz: 0.2, hIz: 0.2, cD: -0.6, cI: -0.6, tx: -0.38, cab: -0.45, boca: 0.9 }, S: { hDx: -0.5, hIx: -0.5, cD: -0.1, cI: -0.1, tx: 0.85, cab: 0.4, boca: 0.4, agach: 0.12 } },
  carga: { W: { hDx: 0.9, hIx: 0.9, hDz: 0.3, hIz: 0.3, tx: 0.5, cab: 0.4, agach: 0.1, boca: 0.4 }, S: { hDx: 1.0, hIx: 1.0, hDz: 0.3, hIz: 0.3, tx: 0.55, cab: 0.4, agach: 0.06, boca: 1 } },
  salto: { W: { hDx: 0.6, hIx: 0.6, tx: 0.35, agach: 0.14, boca: 0.4 }, S: { hDx: -2.3, hIx: -2.3, hDz: 0.4, hIz: 0.4, cD: -0.3, cI: -0.3, tx: -0.1, boca: 1, agach: -0.03 } },
  tele: { W: { hDx: -1.5, hIx: -1.5, hDz: -0.5, hIz: -0.5, cD: -1.7, cI: -1.7, cab: 0.45, tx: 0.25 }, S: { hDz: 1.4, hIz: 1.4, hDx: -0.3, hIx: -0.3, cab: -0.45, boca: 0.8 } },
  conjuro: { W: { hDx: -2.7, hIx: -2.7, hDz: 0.5, hIz: 0.5, cD: -0.35, cI: -0.35, tx: -0.32, cab: -0.55, boca: 0.6 }, S: { hDx: -1.25, hIx: -1.25, hDz: 1.25, hIz: 1.25, cD: -0.1, cI: -0.1, tx: 0.2, boca: 1 } },
  lanzar: { W: { hDx: -2.9, hDz: 0.35, cD: -1.7, tx: -0.38, ty: -0.65, cab: -0.25, hIx: -0.8 }, S: { hDx: -0.8, cD: -0.1, tx: 0.45, ty: 0.55, boca: 0.7, hIx: 0.3 } },
  drenar: { W: { hDx: -1.55, hIx: -1.55, hDz: 0.15, hIz: 0.15, cD: -0.12, cI: -0.12, tx: 0.12, cab: -0.12, boca: 0.8 }, S: { hDx: -1.55, hIx: -1.55, hDz: 0.15, hIz: 0.15, cD: -0.12, cI: -0.12, tx: 0.12, boca: 0.9 } },
  escupir: { W: { tx: -0.38, cab: -0.6, boca: 0.2, hDx: 0.3, hIx: 0.3, hDz: 0.3, hIz: 0.3 }, S: { tx: 0.4, cab: 0.5, boca: 1 } }
};
const CLASE = { cuerpo: 'zarpazo', robo: 'zarpazo', triple: 'rango', monedas: 'rango', jefe: 'rango', baba: 'escupir', embestida: 'carga', salto: 'salto', temblor: 'temblor', teletransporte: 'tele', sopor: 'conjuro', espinas: 'conjuro', sombra: 'tele', meteoros: 'lanzar', drenar: 'drenar', tinieblas: 'conjuro', invocar: 'conjuro', besos: 'rango', encanto: 'conjuro', ilusiones: 'tele', enjambre: 'conjuro', vomito: 'escupir' };
const CLAVES = ['hDx', 'hIx', 'hDz', 'hIz', 'cD', 'cI', 'tx', 'ty', 'cab', 'boca', 'agach'];
const ROJO = { r: 1, g: 0.12, b: 0.05 };

/* =====================================================================
   Instancia animada
   ===================================================================== */
// Prepara la plantilla de un tipo por adelantado (para repartir el trabajo entre cuadros)
export function prepararDemonio(tipo) { plantilla(tipo); }
export function crearDemonio(tipo, altoJuego) {
  const P = plantilla(tipo);
  const cfg = P.cfg;
  const raiz = P.raiz.clone(true);
  raiz.rotation.order = 'YXZ';
  // Materiales propios para el brillo de cada golpe
  const copia = new Map();
  raiz.traverse((o) => {
    if (!o.isMesh) return;
    let m = copia.get(o.material);
    if (!m) { m = o.material.clone(); if (m.emissive) { m.userData.e0 = m.emissive.clone(); m.userData.i0 = m.emissiveIntensity; } copia.set(o.material, m); }
    o.material = m;
  });
  const mats = [...copia.values()];
  const J = {}; const listas = { cola: [], tela: [], capa: [], ala: [], moneda: [], llama: [], lava: [], cadena: [], alamosca: [], mosca: [] };
  raiz.traverse((o) => {
    if (!o.name) return;
    if (NOMBRES.includes(o.name)) { J[o.name] = o; return; }
    const m = /^([a-z]+)(\d+)$/.exec(o.name);
    if (m && listas[m[1]]) listas[m[1]][+m[2]] = o;
  });
  for (const k in listas) listas[k] = listas[k].filter(Boolean);
  const exterior = new TH.Group(); exterior.add(raiz);
  const escala = altoJuego * P.escala;
  raiz.scale.setScalar(escala);
  const baseY = J.pelvis.position.y;
  const st = { px: null, pz: null, fase: rnd() * 6, yaw: 0, yawIni: false, prev: 'dormido', prepDur: 0.5, prepT: 0, clase: 'zarpazo', wv: 0, sv: 0, golpe: 0, golpeDir: 1, rugeT: 0, vel: 0, resp: rnd() * 6, caida: rnd() < 0.5 ? 1 : -1, rep: 0, opac: 1 };
  const A = {};

  function actualizar(dt, E) {
    // ----- Movimiento real para sincronizar los pasos con el suelo -----
    if (st.px === null) { st.px = E.x; st.pz = E.y; }
    const mx = E.x - st.px, mz = E.y - st.pz; st.px = E.x; st.pz = E.y;
    const v = dt > 0 ? Math.hypot(mx, mz) / dt : 0;
    st.vel = lerp(st.vel, Math.min(v, 9), Math.min(1, dt * 10));
    const zanc = Math.max(0.25, 0.55 * altoJuego);
    st.fase += dt * Math.min(st.vel, 6) * PI / zanc;
    st.resp += dt * 1.7;
    // ----- Orientación: mira al jugador; al pasear, hacia donde camina -----
    let obj = st.yaw;
    if (E.estado === 'embestida' && (E.dashX || E.dashY)) obj = Math.atan2(E.dashX, E.dashY);
    else if (E.estado === 'dormido' && !E.mira) { if (v > 0.05) obj = Math.atan2(mx, mz); }
    else if (!E.muerto) obj = Math.atan2(E.jx - E.x, E.jy - E.y);
    if (!st.yawIni) { st.yaw = obj; st.yawIni = true; }
    let dy = obj - st.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    const giro = E.estado === 'preparando' ? 4 : 8;
    st.yaw += clamp(dy, -dt * giro, dt * giro);
    raiz.rotation.y = st.yaw;
    // ----- Transiciones -----
    if (E.estado !== st.prev) {
      if (E.estado === 'preparando') { st.prepDur = Math.max(0.2, E.tp || 0.5); st.prepT = 0; st.clase = CLASE[E.especial || E.ataque] || 'zarpazo'; }
      else if (st.prev === 'preparando' && E.estado !== 'dolor' && E.estado !== 'muerto' && E.estado !== 'repelido') st.sv = 1;
      if (E.estado === 'embestida') { st.clase = E.ataque === 'embestida' ? 'carga' : 'salto'; st.wv = 1; st.sv = 0; }
      if (E.estado === 'drenando') { st.clase = 'drenar'; st.wv = 1; }
      if (E.estado === 'dolor') { st.golpe = 1; st.golpeDir = rnd() < 0.5 ? 1 : -1; }
      st.prev = E.estado;
    }
    if (E.golpeT > 0.2 && st.golpe < 0.5) { st.golpe = 1; st.golpeDir = rnd() < 0.5 ? 1 : -1; }
    st.rugeT = Math.max(st.rugeT - dt, E.rugido || 0);
    if (E.estado === 'preparando') { st.prepT += dt; st.wv = suave(clamp(st.prepT / st.prepDur, 0, 1)); }
    else if (E.estado !== 'embestida' && E.estado !== 'drenando') st.wv = Math.max(0, st.wv - dt * 6);
    st.sv = Math.max(0, st.sv - dt / 0.3);
    st.golpe = Math.max(0, st.golpe - dt * 3);
    st.rep = lerp(st.rep, E.estado === 'repelido' ? 1 : 0, Math.min(1, dt * 9));
    // ----- 1. Reposo: respiración, mirada y garras -----
    const b = Math.sin(st.resp), quieto = clamp(1 - st.vel / 0.6, 0, 1);
    for (const k of CLAVES) A[k] = 0;
    A.tx = (cfg.encorvado || 0) + b * 0.025; A.cab = -(cfg.encorvado || 0) * 0.6;
    A.hDz = 0.1 + b * 0.02; A.hIz = 0.1 + b * 0.02; A.cD = A.cI = -0.25;
    let mira = Math.sin(st.resp * 0.29) * 0.35 * quieto;
    const munecas = Math.sin(st.resp * 0.7) * 0.15;
    if (E.estado === 'dormido') { A.cab += 0.35; A.tx += 0.1; }
    // ----- 2. Andar / correr -----
    const ph = st.fase, amt = clamp(st.vel / 1.2, 0, 1.25) * (cfg.zancada == null ? 1 : cfg.zancada);
    const corre = clamp((st.vel - 1.5) / 1.5, 0, 1);
    let pDx = -Math.sin(ph) * 0.75 * amt, pIx = Math.sin(ph) * 0.75 * amt;
    let rDx = (0.06 + Math.max(0, Math.cos(ph)) * 1.0) * amt, rIx = (0.06 + Math.max(0, -Math.cos(ph)) * 1.0) * amt;
    const brazos = cfg.arrastre ? 0.3 : 1;
    const andaD = Math.sin(ph) * 0.65 * amt * brazos;
    A.hDx += andaD; A.hIx -= andaD;
    A.cD -= corre * 1.1 + Math.max(0, -A.hDx) * 0.4; A.cI -= corre * 1.1 + Math.max(0, -A.hIx) * 0.4;
    A.tx += corre * 0.3 + amt * 0.06; A.ty += Math.sin(ph) * 0.16 * amt;
    if (E.estado === 'embestida') A.tx += 0.35;
    // ----- 3. Ataque según el poder -----
    const Pz = POSES[st.clase], w = st.wv, s = suave(st.sv);
    for (const k of CLAVES) if (Pz.W[k] != null) A[k] = lerp(A[k], Pz.W[k], w);
    for (const k of CLAVES) if (Pz.S[k] != null) A[k] = lerp(A[k], Pz.S[k], s);
    // Rugido: pecho afuera, brazos abiertos, boca abierta
    if (st.rugeT > 0) {
      const q = Math.sin(clamp(st.rugeT, 0, 1) * PI);
      A.boca = Math.max(A.boca, q); A.cab = lerp(A.cab, -0.55, q); A.tx = lerp(A.tx, -0.3, q);
      A.hDz = lerp(A.hDz, 1.2, q); A.hIz = lerp(A.hIz, 1.2, q); A.hDx = lerp(A.hDx, -0.5, q); A.hIx = lerp(A.hIx, -0.5, q); A.cD = lerp(A.cD, -0.7, q); A.cI = lerp(A.cI, -0.7, q);
    }
    // ----- 4. Repelido por el rosario: se tapa la cara, se aparta y grita -----
    if (st.rep > 0.01) {
      const q = st.rep, tiembla = Math.sin(E.t * 47) * 0.05;
      A.hDx = lerp(A.hDx, -2.2 + tiembla, q); A.hIx = lerp(A.hIx, -2.0 - tiembla, q);
      A.hDz = lerp(A.hDz, -0.35, q); A.hIz = lerp(A.hIz, -0.3, q);
      A.cD = lerp(A.cD, -1.8, q); A.cI = lerp(A.cI, -1.9, q);
      A.tx = lerp(A.tx, -0.42 + tiembla, q); A.cab = lerp(A.cab, 0.4, q); A.ty = lerp(A.ty, 0.5 + tiembla * 2, q); A.boca = lerp(A.boca, 0.95, q);
      mira = lerp(mira, 0.7, q);
    }
    // ----- 5. Herido: se encoge, retrocede y se tambalea -----
    const gk = st.golpe * st.golpe;
    A.tx -= 0.5 * gk; A.cab -= 0.5 * gk; A.hDx += 0.7 * gk; A.hIx -= 0.3 * gk; A.hDz += 0.5 * gk; A.hIz += 0.5 * gk; A.boca = Math.max(A.boca, 0.8 * gk);
    raiz.rotation.z = st.golpeDir * 0.2 * gk;
    // ----- Aplicar al esqueleto -----
    const q4 = cfg.cuadrupedo || 0;
    J.torso.rotation.set(q4 + A.tx, A.ty, 0);
    J.pelvis.rotation.set(0, -A.ty * 0.4, 0);
    J.cuello.rotation.set(A.cab * 0.4 - q4 * 0.55, mira * 0.4, 0);
    J.cabeza.rotation.set(A.cab * 0.6 - q4 * 0.45, mira * 0.6, 0);
    J.mandibula.rotation.x = clamp(A.boca, 0, 1) * 0.55 + 0.04;
    if (q4) {
      // Patas delanteras = brazos apoyados en el suelo, al trote en diagonal
      const g = Math.sin(ph) * 0.6 * amt;
      J.hD.rotation.set(-q4 - 0.1 + pIx * 0.7 + (A.hDx - andaD) * 0.6, 0, (A.hDz - 0.1) * 0.4);
      J.hI.rotation.set(-q4 - 0.1 + pDx * 0.7 + (A.hIx + andaD) * 0.6, 0, -(A.hIz - 0.1) * 0.4);
      J.cD.rotation.x = 0.35 + Math.max(0, g) * 0.6; J.cI.rotation.x = 0.35 + Math.max(0, -g) * 0.6;
      J.mD.rotation.x = 0.6; J.mI.rotation.x = 0.6;
      pDx -= 0.5; pIx -= 0.5; rDx += 0.9; rIx += 0.9;
    } else {
      J.hD.rotation.set(A.hDx, 0, A.hDz); J.hI.rotation.set(A.hIx, 0, -A.hIz);
      J.cD.rotation.x = A.cD; J.cI.rotation.x = A.cI;
      J.mD.rotation.x = -0.2 + munecas; J.mI.rotation.x = -0.2 - munecas;
    }
    // Agacharse: cadera atrás, rodillas dobladas, pelvis baja
    pDx -= A.agach * 4.5; pIx -= A.agach * 4.5; rDx += A.agach * 8; rIx += A.agach * 8;
    J.pD.rotation.set(pDx, 0, 0.04); J.pI.rotation.set(pIx, 0, -0.04);
    J.rD.rotation.x = rDx; J.rI.rotation.x = rIx;
    J.fD.rotation.x = -(pDx + rDx) * 0.9; J.fI.rotation.x = -(pIx + rIx) * 0.9;
    const flota = cfg.flota ? cfg.flota + Math.sin(E.t * 2 + st.resp) * 0.02 : 0;
    J.pelvis.position.y = baseY - A.agach * 0.55 - (q4 ? 0.12 : 0) + Math.abs(Math.sin(ph)) * 0.014 * amt * (cfg.pesado || 1) + flota;
    // ----- Extras de cada demonio -----
    listas.cola.forEach((c, i) => { c.rotation.y = Math.sin(E.t * (E.furia ? 7 : 3.2) - i * 0.6) * 0.28 * (1 + amt); c.rotation.x = i === 0 ? -0.6 : 0.12 + Math.sin(E.t * 2 - i * 0.4) * 0.06; });
    listas.tela.forEach((c, i) => { c.rotation.x = (i < 3 ? -1 : 1) * (Math.max(0, (i % 2 ? pDx : pIx) * -0.5) + Math.sin(E.t * 3 + i) * 0.06 + amt * 0.12); });
    listas.capa.forEach((c, i) => { c.rotation.x = 0.12 + amt * 0.4 + corre * 0.3 + Math.sin(E.t * 2.4 + i * 0.9) * 0.1 + w * 0.3; c.rotation.z = Math.sin(E.t * 1.7 + i) * 0.08; });
    listas.ala.forEach((a, i) => { const l = i === 0 ? 1 : -1, bat = Math.sin(E.t * (E.furia ? 7 : 2.6)) * 0.2, abre = 0.2 + w * 0.8 + (st.rugeT > 0 ? 0.9 : 0) + corre * 0.3; a.rotation.set(0.25, -l * (0.9 - abre) + bat * l * 0.6, bat * 0.3 * l); });
    listas.cadena.forEach((c, i) => { c.rotation.x = Math.sin(ph * 0.8 + i * 0.6) * 0.3 + 0.08; c.rotation.z = Math.sin(E.t * 1.3 + i) * 0.12; });
    listas.llama.forEach((f, i) => { f.scale.set(1 + Math.sin(E.t * 17 + i * 2) * 0.25, 0.7 + Math.abs(Math.sin(E.t * 12 + i * 1.7)) * 0.8 * (E.furia ? 1.6 : 1), 1); f.rotation.z = Math.sin(E.t * 9 + i) * 0.2; });
    listas.alamosca.forEach((a, i) => { const l = i ? -1 : 1; a.rotation.set(0.2 + Math.sin(E.t * 70 + i) * 0.25, l * (0.45 + Math.sin(E.t * 64) * 0.35), 0); });
    listas.mosca.forEach((m, i) => { const a = E.t * (1.8 + (i % 4) * 0.6) * (i % 2 ? 1 : -1) + i * 1.7, r = 0.16 + 0.1 * Math.sin(E.t * 3 + i); m.position.set(Math.cos(a) * r, baseY + 0.3 + Math.sin(E.t * 5 + i * 2) * 0.18, Math.sin(a) * r); });
    listas.lava.forEach((l) => l.scale.setScalar(0.9 + Math.sin(E.t * (E.furia ? 14 : 4)) * 0.2));
    listas.moneda.forEach((m, i) => { const a = E.t * (E.furia ? 3 : 1.4) + i / listas.moneda.length * PI * 2, r = 0.2 + w * 0.08; m.position.set(Math.cos(a) * r, baseY + flota + 0.2 + Math.sin(a * 2 + i) * 0.06, Math.sin(a) * r); m.rotation.y = a * 3; });
    if (J.aureola) { J.aureola.rotation.z += dt * (1.2 + w * 4); J.aureola.scale.setScalar(1 + w * 0.5 + (E.furia ? 0.25 : 0)); }
    if (J.tunica) { J.tunica.scale.set(1 + Math.sin(E.t * 3) * 0.05 + w * 0.15, 1 + Math.sin(E.t * 2.3) * 0.04, 0.85 + Math.sin(E.t * 3.3) * 0.04); J.tunica.rotation.y = E.t * 0.5; }
    // ----- 6. Muerte: tambaleo, cae de rodillas o de espaldas, se calcina -----
    let k = 1, hundir = 0;
    if (E.muerto) {
      const t = E.muerteT, a = suave(clamp(t / 0.3, 0, 1));
      J.torso.rotation.x = lerp(J.torso.rotation.x, q4 - 0.5, a); J.cabeza.rotation.x = -0.6 * a; J.mandibula.rotation.x = 0.6;
      J.hD.rotation.z = lerp(J.hD.rotation.z, 1.1, a); J.hI.rotation.z = lerp(J.hI.rotation.z, -1.1, a);
      if (st.caida > 0 && !q4 && !cfg.flota) {
        // De rodillas y luego de bruces
        const r = suave(clamp((t - 0.25) / 0.35, 0, 1)), f = suave(clamp((t - 0.6) / 0.4, 0, 1));
        J.pD.rotation.x = lerp(J.pD.rotation.x, -0.2, r); J.pI.rotation.x = lerp(J.pI.rotation.x, -0.2, r);
        J.rD.rotation.x = lerp(J.rD.rotation.x, 1.9, r); J.rI.rotation.x = lerp(J.rI.rotation.x, 1.9, r);
        J.fD.rotation.x = J.fI.rotation.x = lerp(0, 0.6, r);
        J.pelvis.position.y = lerp(J.pelvis.position.y, baseY * 0.5, r);
        J.torso.rotation.x = lerp(J.torso.rotation.x, 0.5, r);
        J.hD.rotation.x = lerp(J.hD.rotation.x, -2.6, f); J.hI.rotation.x = lerp(J.hI.rotation.x, -2.6, f);
        raiz.rotation.x = f * 1.25; raiz.position.y = -f * 0.06 * escala;
      } else {
        const f = suave(clamp((t - 0.25) / 0.5, 0, 1));
        raiz.rotation.x = -f * 1.45; raiz.position.y = f * 0.02 * escala;
        J.hD.rotation.x = lerp(J.hD.rotation.x, -2.8, f); J.hI.rotation.x = lerp(J.hI.rotation.x, -2.4, f);
      }
      const d = clamp((t - 0.95) / 0.65, 0, 1); k = 1 - d * 0.3; hundir = d * 0.15;
    } else { raiz.rotation.x = 0; raiz.position.y = 0; }
    raiz.scale.setScalar(escala * k); exterior.position.y = -hundir;
    // ----- Brillo y transparencia -----
    const flash = E.flash > 0, pul = E.furia ? 0.5 + Math.sin(E.t * 12) * 0.5 : E.mayor ? 0.3 + Math.sin(E.t * 4) * 0.2 : 0;
    const opac = E.invis > 0 ? 0.06 + 0.1 * Math.abs(Math.sin(E.t * 9)) : 1;
    st.opac = lerp(st.opac, opac, Math.min(1, dt * 8));
    for (const m of mats) {
      if (m.userData.invis) { m.opacity = st.opac; m.depthWrite = st.opac > 0.9; }
      if (!m.emissive) continue;
      const e0 = m.userData.e0, i0 = m.userData.i0;
      if (flash) { m.emissive.setRGB(1, 0.85, 0.7); m.emissiveIntensity = 1.4; }
      else if (E.muerto) { m.emissive.setRGB(1, 0.35, 0.08); m.emissiveIntensity = 1.6 * (1 - clamp((E.muerteT - 0.4) / 1.1, 0, 1)); }
      else if (st.rep > 0.3) { m.emissive.setRGB(1, 0.75, 0.35); m.emissiveIntensity = 0.08 + Math.abs(Math.sin(E.t * 20)) * 0.14; }
      else { m.emissive.copy(e0); m.emissiveIntensity = i0; if (pul > 0) { m.emissive.lerp(ROJO, pul * 0.6); m.emissiveIntensity = Math.max(i0, 0.2) + pul * 0.8; } }
    }
  }
  function liberar() { for (const m of mats) m.dispose(); }
  return { grupo: exterior, actualizar, liberar };
}
