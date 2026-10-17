/* Carrera de la fe · objetos: cajas de gracia, medallas de fe y las armas espirituales (vela, rosario, incienso, campanilla, paloma, agua bendita y estrella) */
import * as THREE from '../lib/three.module.min.js';
import { TABLA_OBJETOS } from './datos.js';
import { lateral } from './pista.js';
import { eventos } from './fisica.js';
import { texEmoji } from './texturas.js';

const R_CAJA = 30, C_CAJA = 36;
const GEO_NUBE = new THREE.SphereGeometry(1, 14, 10);
const MAT_NUBE = new THREE.MeshLambertMaterial({ color: '#eeeaf4', transparent: true, opacity: 0.8, depthWrite: false });
const GEO_CHARCO = new THREE.CircleGeometry(1, 36);
const MAT_CHARCO = new THREE.MeshLambertMaterial({ color: '#5ac8f5', transparent: true, opacity: 0.85, emissive: '#1a5d8a', depthWrite: false });
const GEO_ONDA = new THREE.TorusGeometry(1, 0.1, 6, 48);
const MAT_ONDA = new THREE.MeshBasicMaterial({ color: '#ffe68c', transparent: true, opacity: 0.85, depthWrite: false });
let mapaPaloma = null;

/* ¿El kart está dentro de una caja o medalla? d = distancia en la pista, lado = carril (-0.5 a 0.5 del ancho) */
function cerca(k, d, lado, P, rLargo, rAncho) {
  let dd = (((k.dist - d) % P.L) + P.L) % P.L;
  if (dd > P.L / 2) dd -= P.L;
  return Math.abs(dd) < rLargo && Math.abs(lateral(P, k.idx, k.x, k.y) - lado * P.mitad) < rAncho;
}

export class Objetos {
  constructor(escena, fx) {
    this.escena = escena;
    this.fx = fx;
    this.nubes = []; this.charcos = []; this.palomas = []; this.ondas = [];
  }

  /* Quita todo lo que quedó de la carrera anterior */
  reiniciar() {
    for (const lista of [this.nubes, this.charcos, this.palomas, this.ondas]) for (const o of lista) this.escena.remove(o.obj);
    this.nubes = []; this.charcos = []; this.palomas = []; this.ondas = [];
  }

  /* Da un objeto según el puesto: los de atrás reciben armas más fuertes */
  dar(k, puesto) {
    /* Pedro (buen pescador) saca un puesto mejor: sus cajas traen armas más fuertes */
    const pos = k.habil === 'cajas' ? Math.max(1, puesto - 1) : puesto;
    const tabla = TABLA_OBJETOS[Math.min(6, Math.max(1, pos))];
    k.item = tabla[Math.floor(Math.random() * tabla.length)];
    k.tiempoItem = 0;
    eventos.push({ tipo: 'objeto', k, nombre: k.item });
  }

  /* Un golpe: el escudo del rosario lo bloquea una vez; la estrella de Belén no deja que nada te toque */
  golpear(k, fuerza) {
    if (k.estrella > 0) return false;
    if (k.escudo > 0) { k.escudo = 0; eventos.push({ tipo: 'bloqueo', k }); return false; }
    /* El Padre Tomás (bendición) se recupera más rápido de cualquier golpe */
    const t = (fuerza === 'fuerte' ? 1.2 : fuerza === 'giro' ? 0.9 : 0.6) * (k.habil === 'bendicion' ? 0.6 : 1);
    k.aturd = Math.max(k.aturd, t);
    k.vx *= 0.4; k.vy *= 0.4;
    eventos.push({ tipo: 'golpe', k, fuerte: fuerza === 'fuerte' });
    return true;
  }

  /* Usa el objeto que lleva el kart. orden = karts en su puesto actual */
  usar(k, karts, orden) {
    const tipo = k.item;
    if (!tipo) return false;
    k.item = null;
    const fx = Math.cos(k.h), fy = Math.sin(k.h);
    eventos.push({ tipo: 'usa', k, nombre: tipo });
    switch (tipo) {
      case 'vela':
        k.turbo = Math.max(k.turbo, 2.0);
        this.fx.destello(k.x, 12, k.y, '#ffb040', 16);
        break;
      case 'rosario':
        k.escudo = k.habil === 'escudo' ? 8 : 5;   /* Ana (oración constante) lo mantiene más tiempo */
        break;
      case 'estrella':
        k.estrella = 6;
        break;
      case 'incienso': {
        const obj = this._nube();
        obj.position.set(k.x - fx * 70, 0, k.y - fy * 70);
        this._poner(this.nubes, { obj, x: k.x - fx * 70, y: k.y - fy * 70, vida: 9, dueno: k });
        break;
      }
      case 'agua': {
        const obj = new THREE.Mesh(GEO_CHARCO, MAT_CHARCO);
        obj.rotation.x = -Math.PI / 2; obj.scale.setScalar(44);
        const x = k.x - fx * 55, y = k.y - fy * 55;
        obj.position.set(x, 0.6, y);
        this._poner(this.charcos, { obj, x, y, vida: 12, dueno: k, tocados: new Set() });
        break;
      }
      case 'campanilla': {
        this._onda(k);
        const alcance = k.habil === 'campanas' ? 380 : 280;   /* Hermana Clara (campanas) llega más lejos */
        for (const o of karts) if (o !== k && Math.hypot(o.x - k.x, o.y - k.y) < alcance) this.golpear(o, 'suave');
        break;
      }
      case 'paloma': {
        const i = orden.indexOf(k);
        const objetivo = i > 0 ? orden[i - 1] : null;
        if (!objetivo) { k.turbo = Math.max(k.turbo, 2.0); break; }   /* el primero no tiene a quién perseguir: se convierte en vela */
        if (!mapaPaloma) mapaPaloma = texEmoji('🕊️');
        const obj = new THREE.Sprite(new THREE.SpriteMaterial({ map: mapaPaloma, transparent: true, depthWrite: false }));
        obj.scale.set(30, 30, 1);
        this._poner(this.palomas, { obj, x: k.x, y: k.y, objetivo, vida: 5 });
        break;
      }
      default: break;
    }
    return true;
  }

  _poner(lista, o) { this.escena.add(o.obj); lista.push(o); }

  _nube() {
    const g = new THREE.Group();
    for (const [x, y, z, s] of [[0, 18, 0, 30], [26, 15, 12, 22], [-24, 22, -14, 24], [6, 32, -28, 18]]) {
      const m = new THREE.Mesh(GEO_NUBE, MAT_NUBE);
      m.position.set(x, y, z); m.scale.setScalar(s); g.add(m);
    }
    return g;
  }

  _onda(k) {
    const obj = new THREE.Mesh(GEO_ONDA, MAT_ONDA);
    obj.rotation.x = -Math.PI / 2; obj.position.set(k.x, 6, k.y); obj.scale.setScalar(10);
    this._poner(this.ondas, { obj, t: 0, vida: 0.7 });
    this.fx.destello(k.x, 10, k.y, '#ffe68c', 20);
  }

  /* Avanza los objetos del mundo: nubes, charcos, palomas y ondas */
  actualizar(dt, karts) {
    this.nubes = this.nubes.filter((n) => {
      n.vida -= dt;
      if (n.vida <= 0) { this.escena.remove(n.obj); return false; }
      for (const k of karts) {
        if (k !== n.dueno && !k.listo && k.estrella <= 0 && (k.x - n.x) ** 2 + (k.y - n.y) ** 2 < 60 * 60) k.lento = Math.max(k.lento, 0.35);
      }
      return true;
    });
    this.charcos = this.charcos.filter((c) => {
      c.vida -= dt;
      if (c.vida <= 0) { this.escena.remove(c.obj); return false; }
      for (const k of karts) {
        if (k !== c.dueno && !c.tocados.has(k) && (k.x - c.x) ** 2 + (k.y - c.y) ** 2 < 46 * 46) {
          c.tocados.add(k);
          this.golpear(k, 'giro');
        }
      }
      return true;
    });
    this.palomas = this.palomas.filter((p) => {
      p.vida -= dt;
      const o = p.objetivo;
      if (p.vida <= 0 || !o || o.listo) { this.escena.remove(p.obj); return false; }
      const dx = o.x - p.x, dy = o.y - p.y, d = Math.hypot(dx, dy) || 1;
      if (d < 40) {
        this.golpear(o, 'fuerte');
        this.fx.destello(o.x, 24, o.y, '#ffffff', 16);
        this.escena.remove(p.obj);
        return false;
      }
      const s = Math.min(d, 560 * dt);
      p.x += (dx / d) * s; p.y += (dy / d) * s;
      p.obj.position.set(p.x, 26 + Math.sin(p.vida * 18) * 4, p.y);
      return true;
    });
    this.ondas = this.ondas.filter((o) => {
      o.vida -= dt; o.t += dt;
      if (o.vida <= 0) { this.escena.remove(o.obj); return false; }
      o.obj.scale.setScalar(10 + (o.t / 0.7) * 260);
      return true;
    });
  }

  /* Cajas de gracia: la primera que toca un kart sin objeto le da uno y desaparece unos segundos */
  cajas(karts, P, dt, orden) {
    for (const c of P.cajas) {
      if (!c.vivo) { c.espera -= dt; if (c.espera <= 0) c.vivo = true; continue; }
      for (const k of karts) {
        if (k.item || k.listo) continue;
        if (cerca(k, c.d, c.lado, P, R_CAJA, C_CAJA)) {
          c.vivo = false; c.espera = 4.5;
          this.dar(k, orden.indexOf(k) + 1);
          break;
        }
      }
    }
  }

  /* Medallas de fe: al pasar sobre ellas suben la velocidad un poco (hasta 12 medallas) */
  medallas(karts, P, dt) {
    for (const m of P.medallas) {
      if (!m.vivo) { m.espera -= dt; if (m.espera <= 0) m.vivo = true; continue; }
      for (const k of karts) {
        if (!k.listo && cerca(k, m.d, m.lado, P, 26, 26)) {
          m.vivo = false; m.espera = 7;
          k.medallas = Math.min(12, k.medallas + 1);
          eventos.push({ tipo: 'medalla', k });
          break;
        }
      }
    }
  }
}
