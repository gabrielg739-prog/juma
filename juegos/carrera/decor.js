/* Carrera de la fe · decorado de cada tema (árboles, dunas, arcos, montañas, catacumbas, neón).
   Casi todo se dibuja con instancias: muchos objetos iguales en una sola llamada de dibujo. */
import * as THREE from '../lib/three.module.min.js';
import { rng, texBrillo, texPiedra, texAgua } from './texturas.js';

const ayuda = new THREE.Object3D();
const BLANCO = new THREE.Color('#ffffff');

/* Puntos fuera de la pista, a los lados (omin..omax unidades más allá del borde) */
function ubicar(P, r, n, omin, omax) {
  const out = [];
  for (let k = 0; k < n; k++) {
    const i = Math.floor(r() * P.N), lado = r() < 0.5 ? -1 : 1;
    const off = P.mitad + omin + r() * (omax - omin);
    out.push({ x: P.xs[i] - P.ty[i] * lado * off, z: P.ys[i] + P.tx[i] * lado * off, i, k: r() });
  }
  return out;
}
/* Muchas copias de un mismo objeto con colores por instancia */
function instanciar(geo, lista, opt = {}) {
  const mat = opt.material || new THREE.MeshLambertMaterial({ color: BLANCO });
  const im = new THREE.InstancedMesh(geo, mat, lista.length);
  lista.forEach((d, i) => {
    ayuda.position.set(d.x, d.y || 0, d.z);
    ayuda.rotation.set(d.rx || 0, d.ry || 0, d.rz || 0);
    const s = d.sc || [1, 1, 1];
    ayuda.scale.set(s[0], s[1], s[2]);
    ayuda.updateMatrix();
    im.setMatrixAt(i, ayuda.matrix);
    if (d.col) im.setColorAt(i, new THREE.Color(d.col));
  });
  im.instanceMatrix.needsUpdate = true;
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  if (opt.sombra) im.castShadow = true;
  return im;
}
const mat = (color, extra = {}) => new THREE.MeshLambertMaterial(Object.assign({ color }, extra));

function arbol(x, z, s, colorHojas, r) {
  const g = new THREE.Group();
  const tronco = new THREE.Mesh(new THREE.CylinderGeometry(3.5 * s, 4.5 * s, 22 * s, 7), mat('#7a4a1e'));
  tronco.position.set(x, 11 * s, z); tronco.castShadow = true; g.add(tronco);
  const copa = new THREE.Mesh(new THREE.ConeGeometry(24 * s, 58 * s, 8), mat(colorHojas));
  copa.position.set(x, 44 * s, z); copa.castShadow = true; g.add(copa);
  return g;
}
function cruz(x, z) {
  const g = new THREE.Group(), m = mat('#7a4a1e');
  const palo = new THREE.Mesh(new THREE.BoxGeometry(4, 44, 4), m); palo.position.set(x, 22, z);
  const brazo = new THREE.Mesh(new THREE.BoxGeometry(28, 5, 4), m); brazo.position.set(x, 34, z);
  g.add(palo, brazo);
  return g;
}
function capilla(x, z, rot) {
  const g = new THREE.Group(), muro = mat('#f3e6c8'), techo = mat('#8a2c2c');
  const cuerpo = new THREE.Mesh(new THREE.BoxGeometry(48, 30, 34), muro); cuerpo.position.set(x, 15, z);
  const tejado = new THREE.Mesh(new THREE.ConeGeometry(34, 26, 4), techo); tejado.position.set(x, 43, z); tejado.rotation.y = Math.PI / 4;
  const torre = new THREE.Mesh(new THREE.BoxGeometry(12, 40, 12), muro); torre.position.set(x + 16 * Math.cos(rot), 20, z + 16 * Math.sin(rot));
  const pico = new THREE.Mesh(new THREE.ConeGeometry(9, 16, 4), techo); pico.position.set(torre.position.x, 48, torre.position.z);
  const cruzT = new THREE.Mesh(new THREE.BoxGeometry(3, 12, 3), mat('#ffd25a')); cruzT.position.set(torre.position.x, 62, torre.position.z);
  for (const m of [cuerpo, tejado, torre, pico, cruzT]) { m.castShadow = true; g.add(m); }
  return g;
}
function casa(x, z, col, rot) {
  const g = new THREE.Group();
  const pared = new THREE.Mesh(new THREE.BoxGeometry(46, 36, 40), mat(col)); pared.position.set(x, 18, z); pared.rotation.y = rot;
  const techo = new THREE.Mesh(new THREE.ConeGeometry(38, 26, 4), mat('#b5462e')); techo.position.set(x, 49, z); techo.rotation.y = rot + Math.PI / 4;
  pared.castShadow = true; techo.castShadow = true; g.add(pared, techo);
  return g;
}
function fuente(x, z) {
  const g = new THREE.Group();
  const pileta = new THREE.Mesh(new THREE.CylinderGeometry(34, 38, 10, 20), mat('#e9e2d4')); pileta.position.set(x, 5, z);
  const agua = new THREE.Mesh(new THREE.CircleGeometry(30, 24), new THREE.MeshLambertMaterial({ map: texAgua('#4fc1f0', 9) }));
  agua.rotation.x = -Math.PI / 2; agua.position.set(x, 10.5, z);
  const columna = new THREE.Mesh(new THREE.CylinderGeometry(4, 6, 30, 10), mat('#e9e2d4')); columna.position.set(x, 24, z);
  g.add(pileta, agua, columna);
  return g;
}
function arco(P, f) {
  /* Arco sobre la pista: dos pilares y una bóveda por encima del camino */
  const i = Math.floor(f * P.N) % P.N;
  const nx = -P.ty[i], nz = P.tx[i], x = P.xs[i], z = P.ys[i];
  const g = new THREE.Group(), piedra = mat('#e8dcc4');
  for (const s of [-1, 1]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(14, 90, 14), piedra);
    p.position.set(x + nx * (P.mitad + 14) * s, 45, z + nz * (P.mitad + 14) * s); p.castShadow = true; g.add(p);
  }
  /* Media circunferencia en el plano de la pista: su eje X va de borde a borde (la normal) */
  const boveda = new THREE.Mesh(new THREE.TorusGeometry(P.mitad + 14, 8, 8, 24, Math.PI), piedra);
  boveda.position.set(x, 78, z);
  boveda.rotation.set(0, Math.atan2(-nz, nx), 0);
  boveda.castShadow = true; g.add(boveda);
  return g;
}

/* Un tema → su decorado */
function campo(g, P, r) {
  const arb = ubicar(P, r, 70, 40, 320);
  const hojas = ['#2f7a3c', '#3c8a48', '#4fa35a'];
  g.add(instanciar(new THREE.CylinderGeometry(3.5, 4.5, 22, 7), arb.map((d) => ({ x: d.x, y: 11, z: d.z, sc: [1, 1, 1] })), { sombra: true }));
  g.add(instanciar(new THREE.ConeGeometry(24, 58, 8), arb.map((d) => ({ x: d.x, y: 44, z: d.z, sc: [1 + d.k * 0.4, 1 + d.k * 0.4, 1 + d.k * 0.4], col: hojas[Math.floor(d.k * 3) % 3] })), { sombra: true }));
  const flores = ubicar(P, r, 160, 30, 200);
  g.add(instanciar(new THREE.SphereGeometry(3, 6, 4), flores.map((d) => ({ x: d.x, y: 2, z: d.z, col: ['#ff6fb0', '#ffe25a', '#ffffff', '#b58cff'][Math.floor(d.k * 4) % 4] }))));
  g.add(instanciar(new THREE.DodecahedronGeometry(12, 0), ubicar(P, r, 40, 30, 180).map((d) => ({ x: d.x, y: 5, z: d.z, sc: [1 + d.k, 0.6 + d.k * 0.4, 1], ry: d.k * 6, col: '#9a8d7e' }))));
  for (const d of ubicar(P, r, 20, 60, 260)) g.add(cruz(d.x, d.z));
  for (const d of ubicar(P, r, 6, 160, 300)) g.add(capilla(d.x, d.z, d.k * 6));
}
function desierto(g, P, r) {
  g.add(instanciar(new THREE.SphereGeometry(1, 12, 8), ubicar(P, r, 60, 200, 620).map((d) => ({ x: d.x, y: -10, z: d.z, sc: [180 + d.k * 150, 40 + d.k * 40, 180 + d.k * 120], ry: d.k * 3, col: d.k < 0.5 ? '#e9c98a' : '#f0d39a' }))));
  g.add(instanciar(new THREE.CylinderGeometry(6, 7, 70, 8), ubicar(P, r, 40, 40, 200).map((d) => ({ x: d.x, y: 35, z: d.z, col: '#4f9b4a' })), { sombra: true }));
  for (const d of ubicar(P, r, 16, 40, 160)) {
    const h = 40 + d.k * 60;
    const col = new THREE.Mesh(new THREE.CylinderGeometry(10, 11, h, 12), mat('#f2e3c4')); col.position.set(d.x, h / 2, d.z); col.castShadow = true;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(24, 6, 24), mat('#e0c89a')); cap.position.set(d.x, h + 3, d.z);
    g.add(col, cap);
  }
  g.add(instanciar(new THREE.DodecahedronGeometry(12, 0), ubicar(P, r, 30, 30, 160).map((d) => ({ x: d.x, y: 5, z: d.z, sc: [1 + d.k, 0.6, 1], ry: d.k * 6, col: '#b39370' }))));
}
function mision(g, P, r) {
  const arb = ubicar(P, r, 40, 60, 320);
  g.add(instanciar(new THREE.CylinderGeometry(3.5, 4.5, 22, 7), arb.map((d) => ({ x: d.x, y: 11, z: d.z })), { sombra: true }));
  g.add(instanciar(new THREE.SphereGeometry(30, 10, 8), arb.map((d) => ({ x: d.x, y: 50, z: d.z, sc: [1, 1.2, 1], col: ['#3f9a4a', '#58b35c', '#2f7a3c'][Math.floor(d.k * 3) % 3] })), { sombra: true }));
  for (const d of ubicar(P, r, 22, 120, 330)) g.add(casa(d.x, d.z, ['#f4e6c8', '#f0c7a0', '#e9e0ff', '#fff3c4'][Math.floor(d.k * 4) % 4], d.k * 6));
  for (const d of ubicar(P, r, 5, 120, 240)) g.add(fuente(d.x, d.z));
  for (const f of [0.25, 0.6, 0.9]) g.add(arco(P, f));
}
function montana(g, P, r) {
  const mont = ubicar(P, r, 34, 500, 1100);
  g.add(instanciar(new THREE.ConeGeometry(1, 1, 7), mont.map((d) => ({ x: d.x, y: 180 + d.k * 100, z: d.z, sc: [260 + d.k * 200, 360 + d.k * 260, 260 + d.k * 200], col: d.k < 0.5 ? '#6f7b92' : '#7d8aa3' }))));
  g.add(instanciar(new THREE.ConeGeometry(1, 1, 7), mont.map((d) => ({ x: d.x, y: 330 + d.k * 100, z: d.z, sc: [120 + d.k * 80, 110 + d.k * 60, 120 + d.k * 80], col: '#f4f8ff' }))));
  const pinos = ubicar(P, r, 150, 40, 260);
  g.add(instanciar(new THREE.ConeGeometry(18, 60, 7), pinos.map((d) => ({ x: d.x, y: 30, z: d.z, sc: [1, 1 + d.k * 0.6, 1], col: ['#1f5b3a', '#24683f', '#1a4a31'][Math.floor(d.k * 3) % 3] })), { sombra: true }));
  g.add(instanciar(new THREE.DodecahedronGeometry(14, 0), ubicar(P, r, 50, 30, 200).map((d) => ({ x: d.x, y: 6, z: d.z, sc: [1.4 + d.k, 0.7, 1.2], ry: d.k * 6, col: '#8a8f9a' }))));
}
function catacumba(g, P, r) {
  /* Muros de piedra a los lados de la pista */
  g.add(instanciar(new THREE.BoxGeometry(60, 140, 40), ubicar(P, r, 120, 50, 110).map((d) => ({ x: d.x, y: 70, z: d.z, ry: d.k * 3, sc: [1 + d.k * 0.4, 1, 1], col: d.k < 0.5 ? '#4a4256' : '#3d3650' })), { sombra: true }));
  /* Antorchas con llama: una pared de luz cálida */
  const antorchas = ubicar(P, r, 44, 60, 150);
  g.add(instanciar(new THREE.CylinderGeometry(3, 4, 46, 6), antorchas.map((d) => ({ x: d.x, y: 23, z: d.z, col: '#5a4a3a' }))));
  const brillo = texBrillo();
  for (const d of antorchas) {
    const llama = new THREE.Sprite(new THREE.SpriteMaterial({ map: brillo, color: d.k < 0.5 ? '#ffb040' : '#ff7a2a', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    llama.position.set(d.x, 58, d.z); llama.scale.set(30, 40, 1); g.add(llama);
  }
  /* Losas de tumbas en el suelo */
  g.add(instanciar(new THREE.BoxGeometry(60, 6, 30), ubicar(P, r, 24, 40, 160).map((d) => ({ x: d.x, y: 3, z: d.z, ry: d.k * 6, col: '#6c6378' }))));
}
function luz(g, P, r) {
  /* Pilones de neón a los lados, alternando cian y rosa */
  g.add(instanciar(new THREE.BoxGeometry(6, 150, 6), ubicar(P, r, 70, 60, 240).map((d) => ({ x: d.x, y: 75, z: d.z, col: d.k < 0.5 ? '#55f2ff' : '#ff5bd1' })), { material: new THREE.MeshBasicMaterial({ color: BLANCO }) }));
  /* Cristales brillantes */
  g.add(instanciar(new THREE.OctahedronGeometry(20, 0), ubicar(P, r, 40, 120, 340).map((d) => ({ x: d.x, y: 40 + d.k * 40, z: d.z, ry: d.k * 6, sc: [1, 1.8, 1], col: d.k < 0.5 ? '#9fd8ff' : '#e6a6ff' })), { material: new THREE.MeshLambertMaterial({ color: BLANCO, emissive: '#2a3a7a' }) }));
  /* Nebulosas: manchas de color suave en el cielo */
  const brillo = texBrillo();
  for (let k = 0; k < 14; k++) {
    const a = r() * Math.PI * 2, rad = 1900 + r() * 500;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: brillo, color: ['#7a4cff', '#2aa9ff', '#ff4fb0'][k % 3], transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    s.position.set(Math.cos(a) * rad, 500 + r() * 400, Math.sin(a) * rad); s.scale.set(900, 500, 1); g.add(s);
  }
}

const TEMAS = { campo, desierto, mision, montana, catacumba, luz };
export function crearDecor(P, def) {
  const g = new THREE.Group();
  const r = rng(P.N * 7 + def.id.length * 131 + 5);
  TEMAS[def.tema](g, P, r);
  return g;
}
