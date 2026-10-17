/* Carrera de la fe · modelo y animación de cada kart */
import * as THREE from '../lib/three.module.min.js';
import { texEtiqueta, texBrillo } from './texturas.js';
import { VMAX } from './datos.js';

const TIRE = new THREE.CylinderGeometry(6.5, 6.5, 5, 14);
const RIM = new THREE.CylinderGeometry(3.4, 3.4, 5.4, 10);
const CASCO = new THREE.SphereGeometry(7.4, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
const CARA = new THREE.SphereGeometry(6.5, 16, 12);
const OJO = new THREE.SphereGeometry(0.9, 6, 4);
const LLAMA = new THREE.ConeGeometry(4.2, 20, 8);
const ESCAPE = new THREE.CylinderGeometry(2, 2.4, 6, 8);
const AURA = new THREE.SphereGeometry(30, 16, 10);
const HALO = new THREE.TorusGeometry(4.5, 0.6, 6, 18);
const SOMBRA = new THREE.CircleGeometry(24, 18);
const COLOR_TURBO = { 0: '#ffb040', 1: '#55c8ff', 2: '#ff9a3a', 3: '#c06bff', pad: '#55f2ff' };

/* Construye el kart de un personaje y lo agrega a la escena */
export function crearKart(k, escena, id) {
  const g = new THREE.Group();
  g.rotation.order = 'YXZ';
  const mat = (c, e) => new THREE.MeshLambertMaterial({ color: c, emissive: e || '#000000' });
  const pieza = (geo, m, x, y, z, sombra = true) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = sombra; g.add(o); return o; };
  const cuerpo = mat(k.color), borde = mat(k.borde), negro = mat('#1d1420'), piel = mat('#ffe0bd'), metal = mat('#8e8a99');
  const blanco = new THREE.MeshLambertMaterial({ color: '#ffffff', emissive: '#333333' });

  pieza(new THREE.BoxGeometry(30, 6, 20), cuerpo, 0, 7, 0);
  pieza(new THREE.BoxGeometry(32, 3, 22), borde, 0, 3.5, 0);
  pieza(new THREE.BoxGeometry(11, 5, 16), cuerpo, 17, 8.5, 0);
  pieza(new THREE.BoxGeometry(12, 6, 14), borde, -2, 13, 0);
  /* Cruz blanca en el morro */
  pieza(new THREE.BoxGeometry(0.6, 6, 1.2), blanco, 22.7, 10, 0, false);
  pieza(new THREE.BoxGeometry(0.6, 1.2, 4), blanco, 22.7, 11, 0, false);
  /* Alerón trasero */
  pieza(new THREE.BoxGeometry(2.5, 8, 2.5), borde, -14, 13, 9);
  pieza(new THREE.BoxGeometry(2.5, 8, 2.5), borde, -14, 13, -9);
  pieza(new THREE.BoxGeometry(6, 1.8, 26), borde, -14, 18.5, 0);
  /* Escapes */
  for (const z of [-5, 5]) {
    const e = new THREE.Mesh(ESCAPE, metal); e.rotation.z = Math.PI / 2; e.position.set(-16.5, 5.5, z); g.add(e);
  }
  /* Piloto con halo y gorra del color del borde */
  pieza(CARA, piel, 0.5, 21.5, 0);
  pieza(CASCO, borde, 0.5, 22.3, 0);
  for (const z of [-2.6, 2.6]) pieza(OJO, negro, 6.2, 22, z, false);
  const halo = new THREE.Mesh(HALO, new THREE.MeshLambertMaterial({ color: '#ffd25a', emissive: '#7a5a00' }));
  halo.rotation.x = Math.PI / 2; halo.position.set(0.5, 31, 0); g.add(halo);
  /* Llamas de turbo (en los dos escapes) */
  const llamas = [];
  for (const z of [-5, 5]) {
    const f = new THREE.Mesh(LLAMA, new THREE.MeshBasicMaterial({ color: COLOR_TURBO[0], transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    f.rotation.z = -Math.PI / 2; f.position.set(-25, 5.5, z); f.visible = false; g.add(f); llamas.push(f);
  }
  /* Ruedas: un pivote por rueda (gira para ponerse de canto) y dentro el neumático y la llanta que giran */
  const ruedas = [];
  for (const [x, z] of [[11, 13], [11, -13], [-11, 13], [-11, -13]]) {
    const piv = new THREE.Group(); piv.position.set(x, 6.5, z); piv.rotation.x = Math.PI / 2;
    const giro = new THREE.Group();
    const t = new THREE.Mesh(TIRE, negro); t.castShadow = true;
    const l = new THREE.Mesh(RIM, metal);
    giro.add(t, l); piv.add(giro); g.add(piv); ruedas.push(giro);
  }
  /* Escudo y estrella (aparecen cuando el objeto está activo) */
  const escudo = new THREE.Group();
  const anillo = new THREE.Mesh(new THREE.TorusGeometry(28, 2, 8, 32), new THREE.MeshBasicMaterial({ color: '#ffe68c' }));
  anillo.rotation.x = Math.PI / 2; anillo.position.y = 14;
  const burbuja = new THREE.Mesh(new THREE.SphereGeometry(28, 16, 10), new THREE.MeshBasicMaterial({ color: '#fff3c4', transparent: true, opacity: 0.18, depthWrite: false }));
  burbuja.position.y = 14;
  escudo.add(anillo, burbuja); escudo.visible = false; g.add(escudo);
  const aura = new THREE.Mesh(AURA, new THREE.MeshBasicMaterial({ color: '#fff06a', transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }));
  aura.position.y = 14; aura.visible = false; g.add(aura);
  /* Nombre sobre el kart */
  const nombre = new THREE.Sprite(new THREE.SpriteMaterial({ map: texEtiqueta(k.nombre, k.humano ? '#ffd25a' : '#ffffff'), transparent: true, depthWrite: false }));
  nombre.scale.set(30, 7.5, 1); nombre.position.y = 50; g.add(nombre);
  /* Sombra en el suelo (no gira con el kart) */
  const sombra = new THREE.Mesh(SOMBRA, new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.25, depthWrite: false }));
  sombra.rotation.x = -Math.PI / 2; sombra.position.y = 0.3;
  escena.add(g, sombra);
  return { g, sombra, ruedas, llamas, escudo, aura, cuerpo, colorBase: k.color, colorEstrella: '#fff06a', nombre, id, spin: 0, vPrev: 0, acc: 0, bufanda: null };
}

/* Mueve y anima un kart. fx = efectos de partículas. dt y t en segundos. */
export function animarKart(m, k, dt, t, fx) {
  const v = Math.hypot(k.vx, k.vy);
  const avance = k.vx * Math.cos(k.h) + k.vy * Math.sin(k.h);
  const f = Math.min(1, v / VMAX);
  /* Trompo cuando lo golpean */
  if (k.aturd > 0) m.spin += dt * 14; else m.spin *= Math.exp(-dt * 8);
  const derrape = k.deriva > 0.3 ? (k.giroVis || 0) * 0.25 : 0;
  const acel = dt > 0 ? (v - m.vPrev) / dt : 0;
  m.vPrev = v;
  m.g.position.set(k.x, 0.2 + Math.abs(Math.sin(t * 16 + m.id)) * 0.5 * f, k.y);
  m.g.rotation.set(-(k.giroVis || 0) * 0.14 * f, -k.h - m.spin - derrape, Math.max(-0.1, Math.min(0.1, acel * 0.00028)));
  m.sombra.position.set(k.x, 0.3, k.y);
  m.sombra.scale.setScalar(1 + f * 0.1);
  for (const r of m.ruedas) r.rotation.y += avance * dt / 6.5;
  /* Efectos de turbo y de estrella */
  const color = k.tierDerivaActiva > 0 ? COLOR_TURBO[k.tierDerivaActiva] : k.turboPad > 0 ? COLOR_TURBO.pad : COLOR_TURBO[0];
  const turbo = k.turbo > 0 || k.turboPad > 0 || k.tierDerivaActiva > 0;
  for (const l of m.llamas) {
    l.visible = turbo;
    if (turbo) { l.material.color.set(color); l.scale.set(1, 0.8 + Math.random() * 0.6, 1); }
  }
  m.escudo.visible = k.escudo > 0;
  m.escudo.rotation.y = t * 2;
  m.aura.visible = k.estrella > 0;
  if (k.estrella > 0) { m.cuerpo.color.set(Math.floor(t * 10) % 2 ? m.colorEstrella : m.colorBase); }
  else m.cuerpo.color.set(m.colorBase);
  /* Chispas de derrape en las ruedas traseras (el color sube con el nivel de derrape) */
  if (fx && k.deriva > 0.45 && f > 0.3) {
    m.acc += dt;
    if (m.acc > 0.035) {
      m.acc = 0;
      const col = k.tierDerivaActiva > 0 ? COLOR_TURBO[k.tierDerivaActiva] : '#ffffff';
      for (const s of [-1, 1]) {
        const x = k.x - Math.cos(k.h) * 11 - Math.sin(k.h) * 13 * s, z = k.y - Math.sin(k.h) * 11 + Math.cos(k.h) * 13 * s;
        fx.chispa(x, 2, z, col, 2);
      }
    }
  }
  /* Polvo cuando se sale de la pista */
  if (fx && k.fuera > 0.2 && f > 0.2) { m.acc2 = (m.acc2 || 0) + dt; if (m.acc2 > 0.08) { m.acc2 = 0; fx.polvo(k.x, 3, k.y); } }
  /* Gotas de humo del escape cuando va a fondo */
  if (fx && k.turbo > 0 && Math.random() < 0.5) fx.humo(k.x - Math.cos(k.h) * 22, 6, k.y - Math.sin(k.h) * 22, color, 1);
}
export { COLOR_TURBO };
