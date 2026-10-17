/* Carrera de la fe · escena 3D de cada pista: cielo, luces con sombras, suelo, pista, turbos, cajas, medallas, meta y podio */
import * as THREE from '../lib/three.module.min.js';
import { texPasto, texArena, texAsfalto, texPiedra, texAgua, texFlechas, texRayas, texPuntos, texCuadros, texCartel } from './texturas.js';
import { crearDecor } from './decor.js';
import { enDistancia } from './pista.js';

const ayuda = new THREE.Object3D();

/* Franja a lo largo de la pista entre dos índices (con vuelta). u sigue la distancia; v va de borde a borde. */
export function cinta(P, mitadW, y, material, escalaU, i0 = 0, n = P.N) {
  const N = P.N;
  const pos = new Float32Array((n + 1) * 2 * 3), uv = new Float32Array((n + 1) * 2 * 2), idx = [];
  const vR = (2 * mitadW) / escalaU;
  for (let k = 0; k <= n; k++) {
    const raw = i0 + k, j = raw % N;
    const vuelta = Math.floor(raw / N);
    const nx = -P.ty[j], nz = P.tx[j], cx = P.xs[j], cz = P.ys[j];
    const a = k * 2, b = k * 2 + 1;
    pos.set([cx + nx * mitadW, y, cz + nz * mitadW], a * 3);
    pos.set([cx - nx * mitadW, y, cz - nz * mitadW], b * 3);
    const u = (P.S[j] + vuelta * P.L) / escalaU;
    uv.set([u, 0], a * 2); uv.set([u, vR], b * 2);
    if (k < n) { const c = (k + 1) * 2, d = (k + 1) * 2 + 1; idx.push(a, c, b, b, c, d); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const malla = new THREE.Mesh(geo, material);
  malla.receiveShadow = true;
  return malla;
}

/* Cúpula de cielo con degradado (color del cielo arriba, color del horizonte abajo) */
function cupula(arriba, horizonte) {
  const geo = new THREE.SphereGeometry(3800, 32, 16);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    c.lerpColors(horizonte, arriba, Math.min(1, Math.max(0, pos.getY(i) / 1800)));
    col.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  m.renderOrder = -1;
  return m;
}
/* Estrellas para las pistas de noche */
function estrellas(semilla = 1) {
  const n = 500, pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  let s = semilla;
  const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2, h = 0.08 + r() * 0.9, rad = 3300;
    pos.set([Math.cos(a) * Math.cos(h * 1.2) * rad, Math.sin(h * 1.2) * rad, Math.sin(a) * Math.cos(h * 1.2) * rad], i * 3);
    const b = 0.6 + r() * 0.4; col.set([b, b, 1], i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const p = new THREE.Points(g, new THREE.PointsMaterial({ size: 14, sizeAttenuation: false, vertexColors: true, fog: false, transparent: true, opacity: 0.9 }));
  return p;
}

function superficies(P) {
  const d = P.def, t = d.tema;
  const suelo = {
    campo: () => texArena(d.arena, 5), desierto: () => texArena(d.arena, 9), mision: () => texPiedra(d.arena, 21),
    montana: () => texArena(d.arena, 31), catacumba: () => texPiedra(d.arena, 23, 'rgba(0,0,0,0.55)'), luz: () => texAsfalto(d.arena, 29),
  }[t]();
  const pista = new THREE.MeshLambertMaterial({ map: suelo, side: THREE.DoubleSide });
  const bordeTex = texRayas(d.borde[0], d.borde[1]);
  /* En la pista de luz, los bordes brillan como neón */
  const borde = t === 'luz' ? new THREE.MeshBasicMaterial({ map: bordeTex, side: THREE.DoubleSide, fog: true })
    : new THREE.MeshLambertMaterial({ map: bordeTex, side: THREE.DoubleSide });
  const linea = new THREE.MeshLambertMaterial({ map: texPuntos(t === 'luz' ? '#ffffff' : '#ffffff'), transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
  return { pista, borde, linea };
}

/* Suelo a los lados de la pista según el tema */
function suelo(P) {
  const d = P.def, t = d.tema;
  const tex = {
    campo: texPasto(d.hierba, 3), desierto: texArena(d.hierba, 13), mision: texPasto(d.hierba, 4),
    montana: texPasto(d.hierba, 8), catacumba: texPiedra(d.hierba, 41, 'rgba(0,0,0,0.4)'), luz: texAsfalto(d.hierba, 43),
  }[t];
  tex.repeat.set(70, 70);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshLambertMaterial({ map: tex, color: t === 'catacumba' ? 0x8a8090 : 0xffffff }));
  m.rotation.x = -Math.PI / 2; m.receiveShadow = true;
  return m;
}

/* Cajas de gracia: cubo dorado con cruz blanca */
function hacerCaja(color) {
  const g = new THREE.Group();
  const cubo = new THREE.Mesh(new THREE.BoxGeometry(22, 22, 22), new THREE.MeshLambertMaterial({ color }));
  cubo.castShadow = true; g.add(cubo);
  const blanco = new THREE.MeshLambertMaterial({ color: '#ffffff' });
  g.add(new THREE.Mesh(new THREE.BoxGeometry(7, 7, 24), blanco), new THREE.Mesh(new THREE.BoxGeometry(24, 7, 7), blanco));
  return g;
}

/* Portico de meta: dos columnas y un cartel con la palabra META */
function porticoMeta(P) {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: P.def.borde[1] });
  const nx = -P.ty[0], nz = P.tx[0], cx = P.xs[0], cz = P.ys[0];
  for (const s of [-1, 1]) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(12, 120, 12), mat);
    c.position.set(cx + nx * (P.mitad + 16) * s, 60, cz + nz * (P.mitad + 16) * s);
    c.castShadow = true; g.add(c);
  }
  /* La viga va de un lado al otro de la pista: su eje largo (Z) se alinea con la normal (nx, nz) */
  const viga = new THREE.Mesh(new THREE.BoxGeometry(12, 22, P.mitad * 2 + 44), new THREE.MeshLambertMaterial({ color: P.def.borde[0] }));
  viga.position.set(cx, 118, cz); viga.rotation.set(0, Math.atan2(nx, nz), 0);
  g.add(viga);
  /* El cartel mira hacia el auto que llega (eje X alineado con la normal) */
  const cartel = new THREE.Mesh(new THREE.PlaneGeometry(P.mitad * 1.2, 30), new THREE.MeshBasicMaterial({ map: texCartel('META', '#2b1a3f', '#ffd25a'), side: THREE.DoubleSide }));
  cartel.position.set(cx, 96, cz); cartel.rotation.set(0, Math.atan2(-nz, nx), 0);
  g.add(cartel);
  /* Cuadros en el suelo (la línea de meta) */
  const linea = new THREE.Mesh(new THREE.PlaneGeometry(P.mitad * 2, 16), new THREE.MeshLambertMaterial({ map: texCuadros() }));
  linea.rotation.set(-Math.PI / 2, Math.atan2(-P.tx[0], -P.ty[0]), 0, 'YXZ');
  linea.position.set(cx, 1.2, cz);
  g.add(linea);
  return g;
}

/* Podio para la ceremonia final: tres escalones con el número de cada puesto */
export function crearPodio(P) {
  const g = new THREE.Group();
  const datos = [{ h: 40, x: 0, c: '#ffd25a', n: '1' }, { h: 26, x: -44, c: '#d8dde6', n: '2' }, { h: 16, x: 44, c: '#d9925a', n: '3' }];
  for (const d of datos) {
    const bloque = new THREE.Mesh(new THREE.BoxGeometry(38, d.h, 40), new THREE.MeshLambertMaterial({ color: d.c }));
    bloque.position.set(d.x, d.h / 2, 0); bloque.castShadow = true; bloque.receiveShadow = true; g.add(bloque);
    const numero = new THREE.Mesh(new THREE.PlaneGeometry(22, 22), new THREE.MeshBasicMaterial({ map: texCartel(d.n, '#2b1a3f00', '#2b1a3f'), transparent: true, side: THREE.DoubleSide }));
    numero.position.set(d.x, d.h + 0.5, 20.5); numero.rotation.x = -Math.PI / 2;
    g.add(numero);
  }
  g.userData.posiciones = [{ x: 0, y: 40 }, { x: -44, y: 26 }, { x: 44, y: 16 }];
  g.position.set(0, 0, 0);
  return g;
}

export function crearMundo(P, calidad) {
  const def = P.def, escena = new THREE.Scene();
  const arriba = new THREE.Color(def.cielo[0]), horizonte = new THREE.Color(def.cielo[1]);
  escena.background = horizonte.clone();
  const niebla = def.tema === 'catacumba' ? [400, 1600] : def.tema === 'luz' ? [600, 2600] : [900, 3200];
  escena.fog = new THREE.Fog(def.niebla, niebla[0], niebla[1]);
  escena.add(cupula(arriba, horizonte));
  if (def.tema === 'catacumba' || def.tema === 'luz') escena.add(estrellas(def.tema === 'luz' ? 7 : 3));

  const hemi = new THREE.HemisphereLight(arriba, new THREE.Color(def.hierba).multiplyScalar(0.55), 1.25 * def.luzAmb);
  const sol = new THREE.DirectionalLight(def.sol, 2.0 * def.luzAmb);
  sol.position.set(300, 700, 200);
  if (calidad.sombras) {
    sol.castShadow = true;
    sol.shadow.mapSize.set(calidad.mapa, calidad.mapa);
    const c = sol.shadow.camera; c.left = -240; c.right = 240; c.top = 240; c.bottom = -240; c.near = 50; c.far = 2200;
    sol.shadow.bias = -0.0008; sol.shadow.normalBias = 0.8;
  }
  escena.add(hemi, sol, sol.target);
  escena.add(suelo(P));

  /* Pista: asfalto/arena con bordes a rayas, línea central y zonas de turbo */
  const s = superficies(P);
  escena.add(cinta(P, P.mitad, 0.7, s.pista, def.tema === 'luz' ? 70 : 60));
  escena.add(cinta(P, P.mitad + 10, 0.5, s.borde, 60));
  escena.add(cinta(P, 2.6, 0.9, s.linea, 40));
  const flechas = def.tema === 'luz' ? '#55f2ff' : def.tema === 'catacumba' ? '#ffb040' : '#ffe25a';
  const pads = P.pads.map((p) => {
    const i0 = enDistancia(P, p.d0), n = Math.max(4, Math.round((p.d1 - p.d0) / (P.L / P.N)));
    const tex = texFlechas(flechas);
    const mesh = cinta(P, P.mitad * 0.55, 1.1, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide }), 40, i0, n);
    escena.add(mesh);
    return { mesh, tex };
  });
  /* Agua en las pistas de campo y de misión: charcos a los lados (solo decoración) */
  if (def.tema === 'mision') {
    const agua = new THREE.Mesh(new THREE.CircleGeometry(120, 32), new THREE.MeshLambertMaterial({ map: texAgua('#4fc1f0', 3), transparent: true, opacity: 0.92 }));
    agua.rotation.x = -Math.PI / 2; agua.position.set(0, 0.4, 0); escena.add(agua);
  }

  escena.add(porticoMeta(P));
  escena.add(crearDecor(P, def, calidad));

  /* Cajas de gracia (se muestran u ocultan según estén disponibles) */
  const cajas = P.cajas.map((c) => { const g = hacerCaja('#ffd25a'); escena.add(g); return { c, g }; });

  /* Medallas de fe: discos dorados que giran (una sola malla con instancias) */
  const medGeo = new THREE.CylinderGeometry(9, 9, 2.4, 18);
  medGeo.rotateX(Math.PI / 2);
  const medallas = new THREE.InstancedMesh(medGeo, new THREE.MeshLambertMaterial({ color: '#ffd25a', emissive: '#7a4a00', emissiveIntensity: 0.6 }), P.medallas.length);
  escena.add(medallas);

  const podio = crearPodio(P);
  podio.visible = false;
  escena.add(podio);

  return { escena, sol, hemi, pads, cajas, medallas, podio, estrellas: escena.children.find((o) => o.isPoints) || null, flechasTex: pads.map((p) => p.tex) };
}

/* Mueve las cosas que giran o pulsan. dt en segundos, t en segundos totales */
export function actualizarMundo(mundo, P, t, jugador) {
  for (const p of mundo.pads) if (p.tex) p.tex.offset.x = (t * 1.4) % 1;
  for (const c of mundo.cajas) {
    c.g.visible = c.c.vivo;
    if (!c.c.vivo) continue;
    const pos = posCaja(P, c.c);
    c.g.position.set(pos.x, 16 + Math.sin(t * 3 + c.c.d) * 2.5, pos.y);
    c.g.rotation.y = t * 1.6;
  }
  const m = mundo.medallas;
  for (let k = 0; k < P.medallas.length; k++) {
    const md = P.medallas[k];
    if (!md.vivo) { ayuda.scale.setScalar(0.0001); }
    else {
      const pos = posCarril(P, md.d, md.lado);
      ayuda.position.set(pos.x, 14 + Math.sin(t * 4 + k) * 2, pos.y);
      ayuda.rotation.set(0, t * 3 + k, 0);
      ayuda.scale.setScalar(1);
    }
    ayuda.updateMatrix();
    m.setMatrixAt(k, ayuda.matrix);
  }
  m.instanceMatrix.needsUpdate = true;
  /* La sombra del sol sigue al jugador para que siempre se vean sus sombras */
  if (jugador && mundo.sol.castShadow) {
    mundo.sol.target.position.set(jugador.x, 0, jugador.y);
    mundo.sol.position.set(jugador.x + 300, 700, jugador.y + 200);
  }
  if (mundo.estrellas) mundo.estrellas.rotation.y = t * 0.003;
}

function posCarril(P, d, lado) {
  const i = enDistancia(P, d);
  return { x: P.xs[i] - P.ty[i] * lado * P.mitad, y: P.ys[i] + P.tx[i] * lado * P.mitad };
}
function posCaja(P, c) { return posCarril(P, c.d, c.lado); }

export { posCarril, posCaja };
