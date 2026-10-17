/* Carrera de la fe · partículas: chispas de derrape, humo, polvo, destellos y confeti.
   Dos sistemas (uno aditivo para brillos y otro normal para humo) con un solo shader. */
import * as THREE from '../lib/three.module.min.js';
import { texBrillo } from './texturas.js';

const VERT = `
  attribute vec4 aColor; attribute float aSize; varying vec4 vC; uniform float uEscala;
  void main() {
    vC = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uEscala / max(0.5, -mv.z);
    gl_Position = projectionMatrix * mv;
  }`;
const FRAG = `
  uniform sampler2D uMapa; varying vec4 vC;
  void main() {
    vec4 t = texture2D(uMapa, gl_PointCoord);
    float a = vC.a * t.a;
    if (a < 0.02) discard;
    gl_FragColor = vec4(vC.rgb, a);
  }`;

class Sistema {
  constructor(escena, max, aditivo, mapa) {
    this.max = max; this.vivos = [];
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 4); this.tam = new Float32Array(max);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4));
    this.geo.setAttribute('aSize', new THREE.BufferAttribute(this.tam, 1));
    this.uniforms = { uMapa: { value: mapa }, uEscala: { value: 400 } };
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms, transparent: true, depthWrite: false, blending: aditivo ? THREE.AdditiveBlending : THREE.NormalBlending });
    this.puntos = new THREE.Points(this.geo, this.mat);
    this.puntos.frustumCulled = false;
    escena.add(this.puntos);
    this.siguiente = 0;
  }
  emitir(p) {
    const i = this.siguiente; this.siguiente = (this.siguiente + 1) % this.max;
    this.vivos[i] = p;
  }
  actualizar(dt) {
    for (let i = 0; i < this.max; i++) {
      const p = this.vivos[i];
      if (!p) { this.tam[i] = 0; continue; }
      p.vida -= dt;
      if (p.vida <= 0) { this.vivos[i] = null; this.tam[i] = 0; this.col[i * 4 + 3] = 0; continue; }
      const u = p.vida / p.total;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.vy -= (p.g || 0) * dt;
      const fr = Math.pow(p.roce ?? 0.9, dt * 60);
      p.vx *= fr; p.vz *= fr; p.vy *= fr;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      this.col[i * 4] = p.r; this.col[i * 4 + 1] = p.gr; this.col[i * 4 + 2] = p.b;
      this.col[i * 4 + 3] = (p.alfa ?? 1) * Math.min(1, u * 2);
      this.tam[i] = p.tam * (1 + (p.crece || 0) * (1 - u));
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;
  }
}

export class Efectos {
  constructor(escena, renderer) {
    this.mapa = texBrillo();
    this.brillo = new Sistema(escena, 700, true, this.mapa);
    this.humo_ = new Sistema(escena, 400, false, this.mapa);
    this.renderer = renderer;
    this.alto = 700;
  }
  /* Ajusta el tamaño de las partículas según la pantalla y el campo de visión */
  ajustar(altoPx, fovGrados) {
    const esc = altoPx / (2 * Math.tan((fovGrados * Math.PI) / 360));
    this.brillo.uniforms.uEscala.value = esc;
    this.humo_.uniforms.uEscala.value = esc;
  }
  _rgb(hex) { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; }
  chispa(x, y, z, color, n = 1) {
    const [r, g, b] = this._rgb(color);
    for (let k = 0; k < n; k++) {
      this.brillo.emitir({ x, y, z, vx: (Math.random() - 0.5) * 90, vy: 40 + Math.random() * 80, vz: (Math.random() - 0.5) * 90,
        r, gr: g, b, vida: 0.3 + Math.random() * 0.25, total: 0.55, tam: 1.6 + Math.random() * 1.2, g: 260, roce: 0.97 });
    }
  }
  destello(x, y, z, color, n = 18) {
    const [r, g, b] = this._rgb(color);
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, s = 120 + Math.random() * 160;
      this.brillo.emitir({ x, y, z, vx: Math.cos(a) * s, vy: 60 + Math.random() * 120, vz: Math.sin(a) * s,
        r, gr: g, b, vida: 0.45 + Math.random() * 0.3, total: 0.75, tam: 4 + Math.random() * 3, g: 200, roce: 0.94, crece: 0.6 });
    }
  }
  humo(x, y, z, color = '#ffffff', n = 1) {
    const [r, g, b] = this._rgb(color);
    for (let k = 0; k < n; k++) {
      this.humo_.emitir({ x: x + (Math.random() - 0.5) * 4, y, z: z + (Math.random() - 0.5) * 4, vx: (Math.random() - 0.5) * 20, vy: 30 + Math.random() * 20, vz: (Math.random() - 0.5) * 20,
        r: r * 0.6 + 0.3, gr: g * 0.6 + 0.3, b: b * 0.6 + 0.3, alfa: 0.55, vida: 0.7 + Math.random() * 0.4, total: 1.1, tam: 7, crece: 1.2, roce: 0.96 });
    }
  }
  polvo(x, y, z) {
    for (let k = 0; k < 2; k++) {
      this.humo_.emitir({ x: x + (Math.random() - 0.5) * 10, y, z: z + (Math.random() - 0.5) * 10, vx: (Math.random() - 0.5) * 50, vy: 20 + Math.random() * 30, vz: (Math.random() - 0.5) * 50,
        r: 0.72, gr: 0.6, b: 0.42, alfa: 0.7, vida: 0.5, total: 0.5, tam: 6, crece: 1.5, roce: 0.9 });
    }
  }
  /* Confeti de colores para la llegada */
  confeti(x, y, z, n = 40) {
    const colores = ['#ffd25a', '#ff6fb0', '#55c8ff', '#7be07a', '#ffffff', '#b58cff'];
    for (let k = 0; k < n; k++) {
      const [r, g, b] = this._rgb(colores[k % colores.length]);
      const a = Math.random() * Math.PI * 2, s = 60 + Math.random() * 160;
      this.humo_.emitir({ x, y, z, vx: Math.cos(a) * s, vy: 180 + Math.random() * 200, vz: Math.sin(a) * s, r, gr: g, b,
        vida: 2.2 + Math.random() * 1.2, total: 3.2, tam: 5, g: 260, roce: 0.985, crece: 0 });
    }
  }
  actualizar(dt) { this.brillo.actualizar(dt); this.humo_.actualizar(dt); }
}
