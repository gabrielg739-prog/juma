/* Carrera de la fe · vitrina: el personaje con su kart girando sobre una plataforma, en los pasos de elegir personaje y kart */
import * as THREE from '../lib/three.module.min.js';
import { crearKart } from './karts.js';
import { cupula } from './escena.js';

export class Vitrina {
  constructor() {
    this.escena = new THREE.Scene();
    this.escena.add(cupula(new THREE.Color('#7fb8ff'), new THREE.Color('#fff1cf')));
    this.escena.add(new THREE.HemisphereLight('#ffffff', '#5b4a7a', 1.5));
    const sol = new THREE.DirectionalLight('#fff4dc', 2.0);
    sol.position.set(200, 400, 260);
    this.escena.add(sol);
    /* Plataforma redonda con anillo dorado */
    const plato = new THREE.Mesh(new THREE.CylinderGeometry(118, 124, 12, 48), new THREE.MeshToonMaterial({ color: '#f3d98b' }));
    plato.position.y = -6; plato.receiveShadow = true;
    this.escena.add(plato);
    const anillo = new THREE.Mesh(new THREE.TorusGeometry(118, 3, 8, 64), new THREE.MeshBasicMaterial({ color: '#ffd25a' }));
    anillo.rotation.x = Math.PI / 2; anillo.position.y = 0.5;
    this.escena.add(anillo);
    this.motor = null; this.clave = ''; this.t = 0;
  }

  /* Muestra el kart de un personaje (solo rehace el modelo si cambió la elección) */
  mostrar(personaje, kart) {
    const clave = `${personaje.nombre}|${kart.tipo}`;
    if (clave === this.clave) return;
    this.clave = clave;
    if (this.motor) { this.escena.remove(this.motor.g, this.motor.sombra); if (this.motor.paz) this.escena.remove(this.motor.paz); }
    const k = { nombre: personaje.nombre, color: personaje.color, borde: personaje.borde, humano: true, tipo: kart.tipo, habil: personaje.habil };
    this.motor = crearKart(k, this.escena, 0);
    /* El anillo de paz de Rosa es del mapa, no de la vitrina */
    if (this.motor.paz) { this.escena.remove(this.motor.paz); this.motor.paz = null; }
  }

  /* Gira el kart despacio y hace girar las ruedas */
  actualizar(dt) {
    this.t += dt;
    if (!this.motor) return;
    const m = this.motor;
    m.g.position.set(0, 0.6 + Math.sin(this.t * 2) * 1.2, 0);
    m.g.rotation.set(0, this.t * 0.6, 0);
    m.escudo.visible = false;
    for (const l of m.llamas) l.visible = false;
    for (const r of m.ruedas) r.rotation.y += dt * 5;
    if (m.paz) m.paz.scale.setScalar(1 + 0.04 * Math.sin(this.t * 3));
  }
}
