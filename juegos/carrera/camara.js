/* Carrera de la fe · cámaras: persecución suave, sobrevuelo de entrada, vuelta de victoria y el podio */
import * as THREE from '../lib/three.module.min.js';

/* Dónde debe estar la cámara para seguir a un kart (detrás y arriba; con velocidad se aleja y se abre) */
export function poseSeguir(k) {
  const v = Math.hypot(k.vx, k.vy), f = Math.min(1, v / 380);
  const fx = Math.cos(k.h), fz = Math.sin(k.h), d = 135 + f * 22;
  return {
    p: { x: k.x - fx * d, y: 74 + f * 12, z: k.y - fz * d },
    m: { x: k.x + fx * 60, y: 20, z: k.y + fz * 60 },
    fov: 62 + f * 10 + (k.turbo > 0 || k.turboPad > 0 ? 6 : 0),
  };
}

export function mezcla(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t };
}

export class Camara {
  constructor(aspecto) {
    this.cam = new THREE.PerspectiveCamera(62, aspecto, 2, 9000);
    this.p = { x: 0, y: 500, z: 1200 };
    this.m = { x: 0, y: 0, z: 0 };
    this.golpe = 0;
    this.aplicar(0);
  }

  ajustarAspecto(a) { this.cam.aspect = a; this.cam.updateProjectionMatrix(); }

  /* Desplaza la imagen (sin mover la cámara) para que un punto del mundo caiga en la fracción f del ancho.
     Sirve para que el personaje de la vitrina quede a la derecha del panel del menú. f nulo: vuelve a lo normal */
  encuadrar(punto, f) {
    const c = this.cam, W = innerWidth, H = innerHeight;
    /* Antes de medir hay que quitar el desplazamiento del fotograma anterior, o la imagen oscila */
    if (c.view && c.view.enabled) c.clearViewOffset();
    if (f == null) return;
    c.updateMatrixWorld();
    const v = new THREE.Vector3(punto.x, punto.y, punto.z).project(c);
    const x = (v.x + 1) / 2 * W;
    c.setViewOffset(W, H, x - f * W, 0, W, H);
  }

  /* Colocación directa, sin suavizar */
  fijar(p, m) { this.p = { ...p }; this.m = { ...m }; }

  /* Se acerca poco a poco al punto deseado (vel: cuánto más alto, más rápido) */
  mover(p, m, dt, vel) {
    const a = 1 - Math.exp(-dt * vel);
    this.p = mezcla(this.p, p, a);
    this.m = mezcla(this.m, m, a);
  }

  seguir(k, dt, vel = 6) {
    const c = poseSeguir(k);
    this.mover(c.p, c.m, dt, vel);
    const a = 1 - Math.exp(-dt * 3);
    this.cam.fov += (c.fov - this.cam.fov) * a;
    this.cam.updateProjectionMatrix();
  }

  /* Sacudida al recibir un golpe (se apaga sola) */
  sacudir(f) { this.golpe = Math.max(this.golpe, f); }

  actualizar(dt) {
    this.golpe *= Math.exp(-dt * 9);
    this.aplicar(this.golpe);
  }

  aplicar(sacudida) {
    const c = this.cam, s = sacudida;
    c.position.set(
      this.p.x + (Math.random() - 0.5) * s,
      this.p.y + (Math.random() - 0.5) * s,
      this.p.z + (Math.random() - 0.5) * s);
    c.lookAt(this.m.x, this.m.y, this.m.z);
  }
}
