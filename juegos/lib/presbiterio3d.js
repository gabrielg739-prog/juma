/* JUMA · Presbiterio en 3D para el juego Sacristán
   Iglesia con ábside, vitral con rayos de luz, retablo, Sagrario, altar, ambón y credencia,
   velas con llama y luz, incienso, el sacerdote y el acólito en 3D, y una cámara que se mueve en cada momento de la Misa. */
import * as THREE from './three.module.min.js';

const rnd = Math.random;
function lienzo(w, h, fn, rep) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
function relieve(tex, fuerza) {
  const src = tex.image, w = src.width, h = src.height, d = src.getContext('2d').getImageData(0, 0, w, h).data;
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'), o = g.createImageData(w, h);
  const L = (x, y) => { x = (x + w) % w; y = (y + h) % h; const i = (y * w + x) * 4; return (d[i] + d[i + 1] + d[i + 2]) / 765; };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const dx = (L(x + 1, y) - L(x - 1, y)) * fuerza, dy = (L(x, y + 1) - L(x, y - 1)) * fuerza, n = 1 / Math.hypot(dx, dy, 1), i = (y * w + x) * 4; o.data[i] = (-dx * n * 0.5 + 0.5) * 255; o.data[i + 1] = (dy * n * 0.5 + 0.5) * 255; o.data[i + 2] = (n * 0.5 + 0.5) * 255; o.data[i + 3] = 255; }
  g.putImageData(o, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = tex.wrapS; t.wrapT = tex.wrapT; t.repeat.copy(tex.repeat); return t;
}
const TEX = {};
function texturas() {
  if (TEX.listo) return;
  TEX.marmol = lienzo(256, 256, (g, w, h) => {
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = (x + y) % 2 ? '#e6ddcc' : '#9a7a64'; g.fillRect(x * 64, y * 64, 64, 64); }
    g.globalAlpha = 0.25; g.strokeStyle = '#ffffff'; for (let i = 0; i < 30; i++) { g.lineWidth = 0.5 + rnd() * 1.5; g.beginPath(); g.moveTo(rnd() * w, rnd() * h); g.bezierCurveTo(rnd() * w, rnd() * h, rnd() * w, rnd() * h, rnd() * w, rnd() * h); g.stroke(); }
    g.globalAlpha = 1; g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 1.5; for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); }
  }, [6, 6]);
  TEX.piedra = lienzo(256, 256, (g, w, h) => {
    g.fillStyle = '#b8a888'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < 8; y++) for (let x = 0; x < 4; x++) { const ox = (y % 2) * 32; g.fillStyle = `hsl(36,${18 + rnd() * 10}%,${56 + rnd() * 12}%)`; g.fillRect(x * 64 + ox + 2, y * 32 + 2, 60, 28); }
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.08})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
  }, [4, 2]);
  TEX.madera = lienzo(128, 256, (g, w, h) => {
    g.fillStyle = '#7a4424'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 50; i++) { g.strokeStyle = `rgba(${40 + rnd() * 30},${18 + rnd() * 12},6,${0.25 + rnd() * 0.35})`; g.lineWidth = 0.6 + rnd() * 2; const x = rnd() * w; g.beginPath(); g.moveTo(x, 0); g.bezierCurveTo(x + rnd() * 10 - 5, h * 0.3, x + rnd() * 10 - 5, h * 0.7, x, h); g.stroke(); }
  }, [1, 1]);
  TEX.vitral = lienzo(256, 512, (g, w, h) => {
    g.fillStyle = '#101018'; g.fillRect(0, 0, w, h);
    const cols = ['#2a6ae0', '#e03a5a', '#f0c030', '#3ab05a', '#8a4ae0', '#40c0e0', '#f07a30'];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 8; x++) { g.fillStyle = cols[(x * 3 + y * 5 + ((x * y) % 3)) % cols.length]; g.globalAlpha = 0.75 + rnd() * 0.25; g.beginPath(); g.moveTo(x * 32 + 2 + rnd() * 4, y * 32 + 2); g.lineTo(x * 32 + 30, y * 32 + 2 + rnd() * 4); g.lineTo(x * 32 + 30 - rnd() * 4, y * 32 + 30); g.lineTo(x * 32 + 2, y * 32 + 30 - rnd() * 4); g.fill(); }
    g.globalAlpha = 1;
    // Paloma del Espíritu y cruz en el centro
    g.fillStyle = '#fff6d0'; g.fillRect(118, 120, 20, 200); g.fillRect(70, 170, 116, 20);
    g.beginPath(); g.ellipse(128, 70, 40, 18, 0, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#0a0a10'; g.lineWidth = 3; for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, h); g.stroke(); } for (let i = 0; i <= 16; i++) { g.beginPath(); g.moveTo(0, i * 32); g.lineTo(w, i * 32); g.stroke(); }
  });
  TEX.oro = lienzo(64, 64, (g) => { g.fillStyle = '#999'; g.fillRect(0, 0, 64, 64); for (let i = 0; i < 120; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? 255 : 0},${rnd() < 0.5 ? 255 : 0},${rnd() < 0.5 ? 255 : 0},.12)`; g.beginPath(); g.arc(rnd() * 64, rnd() * 64, 1 + rnd() * 3, 0, 7); g.fill(); } }, [2, 2]);
  TEX.tela = lienzo(64, 64, (g) => { g.fillStyle = '#e8e8e8'; g.fillRect(0, 0, 64, 64); for (let y = 0; y < 64; y += 2) { g.fillStyle = y % 4 ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.12)'; g.fillRect(0, y, 64, 1); } for (let x = 0; x < 64; x += 2) { g.fillStyle = x % 4 ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.08)'; g.fillRect(x, 0, 1, 64); } }, [4, 4]);
  TEX.chispa = lienzo(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.3, 'rgba(255,240,200,.7)'); gr.addColorStop(1, 'rgba(255,220,150,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });
  TEX.humo = lienzo(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(240,240,245,.55)'); gr.addColorStop(1, 'rgba(240,240,245,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });
  TEX.rayos = lienzo(256, 256, (g) => { g.translate(128, 128); for (let i = 0; i < 24; i++) { g.rotate(Math.PI / 12); const gr = g.createLinearGradient(0, 0, 128, 0); gr.addColorStop(0, 'rgba(255,248,210,.9)'); gr.addColorStop(1, 'rgba(255,240,180,0)'); g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0); g.lineTo(128, -6 - (i % 2) * 6); g.lineTo(128, 6 + (i % 2) * 6); g.fill(); } });
  TEX.listo = true;
}

export function crear(contenedor, op) {
  op = op || {};
  texturas();
  const R = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  R.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  R.outputColorSpace = THREE.SRGBColorSpace; R.toneMapping = THREE.ACESFilmicToneMapping; R.toneMappingExposure = 1.15;
  R.shadowMap.enabled = true; R.shadowMap.type = THREE.PCFSoftShadowMap;
  contenedor.appendChild(R.domElement); R.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:none';
  const E = new THREE.Scene(); E.background = new THREE.Color(0x120a06); E.fog = new THREE.Fog(0x120a06, 14, 30);
  const cam = new THREE.PerspectiveCamera(42, 2, 0.1, 60);
  // Reflejos para el oro y la plata
  const pm = new THREE.PMREMGenerator(R), envE = new THREE.Scene();
  envE.add(new THREE.Mesh(new THREE.SphereGeometry(10, 16, 12), new THREE.MeshBasicMaterial({ color: 0x4a3020, side: THREE.BackSide })));
  const bl = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); bl.material.color.setScalar(8); bl.position.set(0, 6, -4); envE.add(bl);
  E.environment = pm.fromScene(envE, 0.04).texture; pm.dispose();
  const est = (c, r, m, x) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: r, metalness: m || 0 }, x || {}));
  const MAT = {
    liso: est(0xf2ebdc, 0.32, 0, { normalMap: relieve(TEX.oro, 0.6), envMapIntensity: 0.6 }),
    marmol: est(0xffffff, 0.35, 0, { map: TEX.marmol, normalMap: relieve(TEX.marmol, 1.5) }),
    piedra: est(0xffffff, 0.85, 0, { map: TEX.piedra, normalMap: relieve(TEX.piedra, 3) }),
    madera: est(0xffffff, 0.6, 0, { map: TEX.madera, normalMap: relieve(TEX.madera, 2.5) }),
    oro: est(0xffcf66, 0.28, 1, { normalMap: relieve(TEX.oro, 1.2), envMapIntensity: 1.6 }),
    mantel: est(0xffffff, 0.8, 0, { map: TEX.tela, normalMap: relieve(TEX.tela, 2) }),
    alba: est(0xf4f0e8, 0.85, 0, { map: TEX.tela }),
    color: est(op.color || 0x2e9a48, 0.75, 0, { map: TEX.tela, normalMap: relieve(TEX.tela, 2) }),
    piel: est(0xd8a07a, 0.55), pelo: est(0x2a1a10, 0.5), cera: est(0xfff6e0, 0.6, 0, { emissive: 0x3a2a10 }),
    rojo: est(op.sotana || 0xc0262f, 0.7, 0, { map: TEX.tela }), lampara: est(0xff2a1a, 0.3, 0, { emissive: 0xff2010, emissiveIntensity: 2.5 })
  };
  const malla = (geo, mat, x, y, z, padre) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; (padre || E).add(m); return m; };

  /* ---------- Arquitectura ---------- */
  malla(new THREE.PlaneGeometry(30, 30), MAT.marmol, 0, 0, 0).rotation.x = -Math.PI / 2;
  // Gradas del presbiterio
  malla(new THREE.BoxGeometry(12, 0.18, 7), MAT.marmol, 0, 0.09, -2.5);
  malla(new THREE.BoxGeometry(10, 0.18, 6), MAT.marmol, 0, 0.27, -3);
  const piso = 0.36;
  // Ábside curvo de piedra
  const absideGeo = new THREE.CylinderGeometry(6.5, 6.5, 9, 40, 1, true, Math.PI * 0.5 + 0.35, Math.PI - 0.7);
  const ab = malla(absideGeo, new THREE.MeshStandardMaterial({ map: TEX.piedra, normalMap: relieve(TEX.piedra, 3), roughness: 0.85, side: THREE.BackSide }), 0, 4.5, -2.5); ab.rotation.y = Math.PI;
  for (const l of [-1, 1]) malla(new THREE.BoxGeometry(4, 9, 0.6), MAT.piedra, l * 8, 4.5, 1.5);
  // Vitral con rayos de luz
  const vit = malla(new THREE.PlaneGeometry(2.2, 4.2), new THREE.MeshBasicMaterial({ map: TEX.vitral }), 0, 5.6, -8.85); vit.castShadow = false;
  malla(new THREE.TorusGeometry(1.1, 0.1, 8, 24, Math.PI), MAT.oro, 0, 7.7, -8.8);
  const haz = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 3.2, 9, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0xffe6b0, transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  haz.position.set(0, 3.2, -5.5); haz.rotation.x = 0.55; E.add(haz);
  // Retablo dorado con crucifijo
  const retablo = new THREE.Group(); retablo.position.set(0, piso, -7.6); E.add(retablo);
  malla(new THREE.BoxGeometry(5, 0.3, 0.5), MAT.oro, 0, 2.6, 0, retablo);
  for (const l of [-1, 1]) { malla(new THREE.CylinderGeometry(0.16, 0.2, 3.8, 16), MAT.oro, l * 2.3, 1.9, 0.1, retablo); malla(new THREE.SphereGeometry(0.22, 12, 10), MAT.oro, l * 2.3, 3.9, 0.1, retablo); }
  const cruz = new THREE.Group(); cruz.position.set(0, 3.6, 0.2); retablo.add(cruz);
  malla(new THREE.BoxGeometry(0.16, 2.2, 0.12), MAT.madera, 0, 0, 0, cruz); malla(new THREE.BoxGeometry(1.2, 0.16, 0.12), MAT.madera, 0, 0.55, 0, cruz);
  malla(new THREE.CapsuleGeometry(0.07, 0.6, 4, 8), MAT.piel, 0, 0.1, 0.1, cruz); malla(new THREE.SphereGeometry(0.08, 10, 8), MAT.piel, 0, 0.55, 0.12, cruz);
  for (const l of [-1, 1]) { const b = malla(new THREE.CapsuleGeometry(0.035, 0.42, 4, 6), MAT.piel, l * 0.27, 0.53, 0.1, cruz); b.rotation.z = Math.PI / 2 + l * 0.2; }
  // Sagrario dorado con su lámpara roja
  const sag = new THREE.Group(); sag.position.set(0, piso, -6.6); E.add(sag);
  malla(new THREE.BoxGeometry(1.4, 0.9, 0.7), MAT.liso, 0, 0.45, 0, sag);
  malla(new THREE.BoxGeometry(0.7, 0.8, 0.5), MAT.oro, 0, 1.3, 0, sag);
  malla(new THREE.ConeGeometry(0.5, 0.4, 4), MAT.oro, 0, 1.9, 0, sag).rotation.y = Math.PI / 4;
  const lamp = malla(new THREE.SphereGeometry(0.1, 12, 10), MAT.lampara, 1.3, 1.5, -6.3);
  const luzLamp = new THREE.PointLight(0xff3020, 1.5, 3); luzLamp.position.copy(lamp.position); E.add(luzLamp);
  // Altar de mármol con mantel y frontal del color litúrgico
  const altar = new THREE.Group(); altar.position.set(0, piso, -3.2); E.add(altar);
  malla(new THREE.BoxGeometry(2.6, 1.0, 1.1), MAT.liso, 0, 0.5, 0, altar);
  malla(new THREE.BoxGeometry(2.75, 0.05, 1.22), MAT.mantel, 0, 1.03, 0, altar);
  const frontal = malla(new THREE.BoxGeometry(1.4, 0.7, 0.02), MAT.color, 0, 0.55, 0.57, altar);
  malla(new THREE.BoxGeometry(0.08, 0.4, 0.01), MAT.oro, 0, 0.55, 0.59, altar); malla(new THREE.BoxGeometry(0.28, 0.08, 0.01), MAT.oro, 0, 0.62, 0.59, altar);
  // Objetos sagrados que el jugador coloca (se ven al ponerlos)
  const OBJ = {};
  const reg = (id, g) => { OBJ[id] = g; g.userData.base = g.scale.x || 1; if (op.vacio) g.visible = false; return g; };
  const grupo = (padre, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); padre.add(g); return g; };
  { const g = grupo(altar, 0, 1.06, 0.05); malla(new THREE.BoxGeometry(0.62, 0.008, 0.55), MAT.mantel, 0, 0, 0, g); malla(new THREE.BoxGeometry(0.06, 0.01, 0.01), est(0xc0262f, 0.6), 0, 0.006, 0.22, g); reg('corporal', g); }
  { const g = grupo(altar, 0.18, 1.07, 0.05); malla(new THREE.CylinderGeometry(0.09, 0.05, 0.12, 16), MAT.oro, 0, 0.2, 0, g); malla(new THREE.CylinderGeometry(0.015, 0.015, 0.12, 8), MAT.oro, 0, 0.08, 0, g); malla(new THREE.SphereGeometry(0.03, 10, 8), MAT.oro, 0, 0.09, 0, g); malla(new THREE.CylinderGeometry(0.07, 0.08, 0.02, 16), MAT.oro, 0, 0.01, 0, g); reg('caliz', g); }
  { const g = grupo(altar, -0.12, 1.075, 0.12); malla(new THREE.CylinderGeometry(0.12, 0.12, 0.012, 24), MAT.oro, 0, 0, 0, g); malla(new THREE.CylinderGeometry(0.08, 0.08, 0.01, 24), est(0xfffbea, 0.6), 0, 0.01, 0, g); reg('patena', g); }
  { const g = grupo(altar, -0.62, 1.06, 0.05); g.rotation.y = 0.35; const atr = malla(new THREE.BoxGeometry(0.3, 0.04, 0.24), MAT.oro, 0, 0.03, 0, g); atr.rotation.x = -0.3; const l = malla(new THREE.BoxGeometry(0.34, 0.06, 0.26), est(0xa8202a, 0.6), 0, 0.1, 0, g); l.rotation.x = -0.3; malla(new THREE.BoxGeometry(0.02, 0.07, 0.01), MAT.oro, 0.05, 0.08, 0.13, g); reg('misal', g); }
  { const g = grupo(altar, 0, 1.05, -0.42); malla(new THREE.CylinderGeometry(0.08, 0.1, 0.05, 12), MAT.oro, 0, 0.03, 0, g); malla(new THREE.BoxGeometry(0.035, 0.6, 0.035), MAT.oro, 0, 0.33, 0, g); malla(new THREE.BoxGeometry(0.26, 0.035, 0.035), MAT.oro, 0, 0.48, 0, g); malla(new THREE.CapsuleGeometry(0.018, 0.16, 3, 6), MAT.piel, 0, 0.42, 0.03, g); reg('crucifijo', g); }
  // Velas del altar con llama y luz que parpadea
  const velas = [];
  const OBJ_VELAS = new THREE.Group(); altar.add(OBJ_VELAS); reg('velas', OBJ_VELAS);
  for (const [x, z] of [[-1.15, -0.2], [1.15, -0.2]]) {
    const g = new THREE.Group(); g.position.set(x, 1.05, z); OBJ_VELAS.add(g);
    malla(new THREE.CylinderGeometry(0.1, 0.13, 0.08, 14), MAT.oro, 0, 0.04, 0, g);
    malla(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 12), MAT.cera, 0, 0.35, 0, g);
    const llama = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.chispa, color: 0xffb040, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    llama.position.y = 0.7; llama.scale.set(0.12, 0.22, 1); g.add(llama);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.chispa, color: 0xff9a30, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.y = 0.7; halo.scale.setScalar(0.7); g.add(halo);
    const luz = new THREE.PointLight(0xffa040, 4, 6, 1.6); luz.position.y = 0.75; g.add(luz);
    velas.push({ g, llama, halo, luz, encendida: true, fase: rnd() * 10 });
  }
  // Ambón (izquierda) y credencia (derecha)
  const ambon = new THREE.Group(); ambon.position.set(-3.3, piso, -1.8); ambon.rotation.y = 0.35; E.add(ambon);
  malla(new THREE.CylinderGeometry(0.35, 0.45, 1.1, 8), MAT.madera, 0, 0.55, 0, ambon);
  const atril = malla(new THREE.BoxGeometry(0.8, 0.06, 0.55), MAT.madera, 0, 1.2, 0, ambon); atril.rotation.x = 0.35;
  { const g = grupo(ambon, 0, 1.25, 0); g.rotation.x = 0.35; malla(new THREE.BoxGeometry(0.44, 0.05, 0.32), est(0x5a2a10, 0.6), 0, 0, 0, g); malla(new THREE.BoxGeometry(0.1, 0.01, 0.16), MAT.oro, 0, 0.03, 0, g); reg('leccionario', g); }
  { const g = grupo(E, -2.55, piso, -2.6); malla(new THREE.CylinderGeometry(0.16, 0.22, 0.5, 12), MAT.oro, 0, 0.25, 0, g); malla(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 14), MAT.cera, 0, 1.0, 0, g); malla(new THREE.BoxGeometry(0.01, 0.16, 0.13), est(0xc0262f, 0.6), 0.061, 1.0, 0, g); const ll = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.chispa, color: 0xffb040, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); ll.position.y = 1.62; ll.scale.set(0.14, 0.26, 1); g.add(ll); reg('cirio', g); if (!op.cirio) g.visible = false; }
  const cred = new THREE.Group(); cred.position.set(3.4, piso, -2.2); E.add(cred);
  malla(new THREE.BoxGeometry(1.2, 0.8, 0.6), MAT.madera, 0, 0.4, 0, cred); malla(new THREE.BoxGeometry(1.28, 0.03, 0.66), MAT.mantel, 0, 0.82, 0, cred);
  { const g = grupo(cred, -0.4, 0.84, 0.05); for (let i = 0; i < 2; i++) { malla(new THREE.CylinderGeometry(0.045, 0.065, 0.18, 12), est(i ? 0xffe0e6 : 0xe0f0ff, 0.08, 0, { transparent: true, opacity: 0.85 }), i * 0.14, 0.09, 0, g); malla(new THREE.CylinderGeometry(0.04, 0.06, 0.1, 12), est(i ? 0x8a1028 : 0xb8e0ff, 0.2), i * 0.14, 0.05, 0, g); } malla(new THREE.BoxGeometry(0.34, 0.01, 0.16), MAT.oro, 0.07, 0, 0, g); reg('vinajeras', g); }
  { const g = grupo(cred, -0.05, 0.84, -0.12); malla(new THREE.BoxGeometry(0.2, 0.03, 0.14), MAT.mantel, 0, 0.015, 0, g); reg('purificador', g); }
  { const g = grupo(cred, 0.15, 0.84, 0.08); malla(new THREE.CylinderGeometry(0.14, 0.1, 0.04, 18), est(0xd8dce4, 0.2, 1), 0, 0.02, 0, g); malla(new THREE.CylinderGeometry(0.04, 0.06, 0.16, 12), est(0xd8dce4, 0.2, 1), 0, 0.12, 0, g); reg('jarra', g); }
  { const g = grupo(cred, 0.42, 0.84, -0.1); malla(new THREE.ConeGeometry(0.06, 0.1, 14, 1, true), MAT.oro, 0, 0.06, 0, g).material = MAT.oro; malla(new THREE.CylinderGeometry(0.01, 0.01, 0.08, 6), MAT.madera, 0, 0.14, 0, g); reg('campanilla', g); }
  { const g = grupo(cred, 0.4, 0.84, 0.14); malla(new THREE.CylinderGeometry(0.05, 0.06, 0.02, 14), MAT.oro, 0, 0.01, 0, g); malla(new THREE.CylinderGeometry(0.012, 0.012, 0.08, 6), MAT.oro, 0, 0.06, 0, g); malla(new THREE.SphereGeometry(0.08, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), MAT.oro, 0, 0.1, 0, g).rotation.x = Math.PI; malla(new THREE.SphereGeometry(0.08, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), MAT.oro, 0, 0.1, 0, g); malla(new THREE.BoxGeometry(0.012, 0.06, 0.012), MAT.oro, 0, 0.2, 0, g); reg('copon', g); }
  { const g = grupo(E, 4.25, piso, -2.0); malla(new THREE.CylinderGeometry(0.012, 0.012, 1.4, 6), MAT.oro, 0, 0.7, 0, g); malla(new THREE.BoxGeometry(0.3, 0.02, 0.02), MAT.oro, 0, 1.4, 0, g); const inc = grupo(g, 0.12, 0.95, 0); for (const k of [-1, 1]) malla(new THREE.CylinderGeometry(0.004, 0.004, 0.45, 4), MAT.oro, k * 0.03, 0.22, 0, inc); malla(new THREE.SphereGeometry(0.08, 14, 10), MAT.oro, 0, 0, 0, inc); reg('incensario', g); }
  { const g = grupo(E, 4.6, piso, -2.6); malla(new THREE.CylinderGeometry(0.025, 0.025, 2.2, 8), MAT.madera, 0, 1.1, 0, g); malla(new THREE.BoxGeometry(0.04, 0.4, 0.04), MAT.oro, 0, 2.35, 0, g); malla(new THREE.BoxGeometry(0.26, 0.04, 0.04), MAT.oro, 0, 2.42, 0, g); malla(new THREE.CylinderGeometry(0.15, 0.2, 0.1, 10), MAT.oro, 0, 0.05, 0, g); reg('cruzalta', g); }
  { const g = grupo(E, 3.95, piso, -1.75); g.rotation.z = 0.18; malla(new THREE.CylinderGeometry(0.02, 0.02, 1.6, 8), MAT.oro, 0, 0.8, 0, g); malla(new THREE.TorusGeometry(0.1, 0.02, 8, 16, Math.PI * 1.4), MAT.oro, 0.08, 1.65, 0, g); reg('baculo', g); }
  { const g = grupo(cred, 0.05, 0.84, 0.05); malla(new THREE.ConeGeometry(0.11, 0.3, 4), est(0xfaf6ee, 0.6), 0, 0.15, 0, g).rotation.y = Math.PI / 4; malla(new THREE.BoxGeometry(0.02, 0.28, 0.16), MAT.oro, 0, 0.15, 0, g); reg('mitra', g); }
  // Bancos de los fieles en primer plano
  for (const l of [-1, 1]) for (let k = 0; k < 2; k++) { const b = new THREE.Group(); b.position.set(l * 2.6, 0, 2.5 + k * 1.6); E.add(b); malla(new THREE.BoxGeometry(3.4, 0.08, 0.5), MAT.madera, 0, 0.5, 0, b); malla(new THREE.BoxGeometry(3.4, 0.6, 0.08), MAT.madera, 0, 0.8, 0.25, b); }

  /* ---------- La asamblea: fieles que se ponen de pie, se sientan o se arrodillan ---------- */
  const fieles = [], ROPA = [0x2a5aa0, 0xc0505a, 0x3a8a5a, 0xe0b040, 0x6a4a8a, 0xd07a3a, 0x4a4a52, 0xf0f0f0];
  for (const l of [-1, 1]) for (let k = 0; k < 2; k++) for (let i = 0; i < 4; i++) {
    if (rnd() < 0.2) continue;
    const f = new THREE.Group(); f.position.set(l * (1.3 + i * 0.78 + rnd() * 0.1), 0, 2.5 + k * 1.6 - 0.32); f.rotation.y = Math.PI; E.add(f);
    const cuerpo = new THREE.Group(); f.add(cuerpo);
    const ropa = est(ROPA[Math.floor(rnd() * ROPA.length)], 0.8);
    malla(new THREE.CapsuleGeometry(0.17, 0.55, 4, 10), ropa, 0, 0.88, 0, cuerpo);
    malla(new THREE.CylinderGeometry(0.14, 0.16, 0.6, 10), est(0x2a2a34, 0.8), 0, 0.3, 0, cuerpo);
    malla(new THREE.SphereGeometry(0.12, 14, 10), est([0xd8a07a, 0xb07850, 0x8a5a3a, 0xe8c0a0][Math.floor(rnd() * 4)], 0.6), 0, 1.36, 0, cuerpo);
    malla(new THREE.SphereGeometry(0.125, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), est([0x1a1010, 0x3a2414, 0x6a4a2a, 0x8a8a8a][Math.floor(rnd() * 4)], 0.6), 0, 1.38, 0.01, cuerpo);
    fieles.push({ cuerpo, y: 0, lean: 0, retraso: rnd() * 0.6, t: 0 });
  }
  let postura = 'pie';
  const POSTURA = { pie: [0, 0], sentado: [-0.34, 0.05], rodillas: [-0.42, 0.28] };

  /* ---------- Personas ---------- */
  function persona(o) {
    const raiz = new THREE.Group(); E.add(raiz);
    const s = o.escala || 1;
    raiz.scale.setScalar(s);
    // Túnica (alba o sotana) y casulla o roquete
    malla(new THREE.CylinderGeometry(0.22, 0.36, 1.35, 20), o.tunica, 0, 0.68, 0, raiz);
    let capa;
    if (o.cruzCasulla) {
      // Casulla con caída de campana
      const perfil = [[0.13, 1.5], [0.3, 1.44], [0.44, 1.25], [0.52, 0.95], [0.56, 0.6], [0.55, 0.52]].map(([r, y]) => new THREE.Vector2(r, y));
      capa = malla(new THREE.LatheGeometry(perfil, 32), o.capa, 0, 0, 0, raiz); capa.material = o.capa.clone(); capa.material.side = THREE.DoubleSide; capa.scale.z = 0.62;
      for (const l of [-1, 1]) malla(new THREE.BoxGeometry(0.07, 0.5, 0.015), MAT.oro, l * 0.07, 0.42, 0.25, raiz);
      malla(new THREE.TorusGeometry(0.12, 0.025, 8, 20), MAT.alba, 0, 1.49, 0, raiz).rotation.x = Math.PI / 2;
    } else { capa = malla(new THREE.CylinderGeometry(0.2, 0.5, 1.0, 24, 1, true), o.capa, 0, 0.98, 0, raiz); capa.material = o.capa.clone(); capa.material.side = THREE.DoubleSide; capa.scale.z = 0.7; }
    if (o.cruzCasulla) { malla(new THREE.BoxGeometry(0.06, 0.8, 0.02), MAT.oro, 0, 1.0, 0.3, raiz); malla(new THREE.BoxGeometry(0.4, 0.06, 0.02), MAT.oro, 0, 1.18, 0.29, raiz); }
    malla(new THREE.SphereGeometry(0.22, 18, 12), o.capa, 0, 1.46, 0, raiz).scale.set(1.25, 0.5, 0.9);
    malla(new THREE.CylinderGeometry(0.07, 0.08, 0.12, 12), MAT.piel, 0, 1.55, 0, raiz);
    const cabeza = new THREE.Group(); cabeza.position.y = 1.72; raiz.add(cabeza);
    malla(new THREE.SphereGeometry(0.15, 22, 18), MAT.piel, 0, 0, 0, cabeza).scale.set(0.9, 1.08, 1);
    malla(new THREE.SphereGeometry(0.155, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), MAT.pelo, 0, 0.02, -0.01, cabeza).rotation.x = -0.35;
    for (const l of [-1, 1]) { malla(new THREE.SphereGeometry(0.018, 8, 6), est(0x1a1010, 0.3), l * 0.05, 0.02, 0.135, cabeza); malla(new THREE.SphereGeometry(0.03, 8, 6), MAT.piel, l * 0.14, 0, 0, cabeza).scale.x = 0.5; }
    malla(new THREE.SphereGeometry(0.022, 8, 6), MAT.piel, 0, -0.03, 0.15, cabeza);
    for (const l of [-1, 1]) malla(new THREE.BoxGeometry(0.05, 0.01, 0.01), MAT.pelo, l * 0.05, 0.06, 0.135, cabeza);
    const boca = malla(new THREE.TorusGeometry(0.03, 0.006, 4, 10, Math.PI), est(0x9a4a3a, 0.5), 0, -0.07, 0.135, cabeza); boca.rotation.z = Math.PI;
    const brazos = [-1, 1].map((l) => {
      const b = new THREE.Group(); b.position.set(l * 0.3, 1.42, 0); raiz.add(b);
      malla(new THREE.CapsuleGeometry(0.075, 0.42, 4, 10), o.capa, 0, -0.26, 0, b);
      malla(new THREE.SphereGeometry(0.055, 10, 8), MAT.piel, 0, -0.56, 0, b);
      return b;
    });
    return { raiz, cabeza, brazos, objetivo: { x: 0, z: 0, ry: 0, bi: [0, 0], bz: [-0.1, 0.1] } };
  }
  const cura = persona({ tunica: MAT.alba, capa: MAT.color, cruzCasulla: true });
  const hostia = malla(new THREE.CylinderGeometry(0.13, 0.13, 0.012, 24), est(0xfffbea, 0.6, 0, { emissive: 0xfff0c0, emissiveIntensity: 0.6 }), 0, -0.62, 0.05, cura.brazos[1]);
  hostia.rotation.x = Math.PI / 2; hostia.visible = false;
  const rayos = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.rayos, color: 0xfff2c0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); rayos.scale.setScalar(3.2); E.add(rayos);
  const luzConsagra = new THREE.PointLight(0xfff0c0, 0, 8, 1.4); E.add(luzConsagra);
  const aco = persona({ tunica: MAT.rojo, capa: MAT.alba, escala: 0.78 });
  aco.raiz.position.set(2.4, piso, -1.6); aco.raiz.rotation.y = -0.5;
  const enMano = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false })); enMano.visible = false; enMano.scale.setScalar(0.42); enMano.position.set(0, 1.0, 0.38); aco.raiz.add(enMano);
  // Incienso: humo que sube junto a la credencia
  const humo = [];
  if (op.solemne) for (let i = 0; i < 28; i++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.humo, transparent: true, depthWrite: false, opacity: 0 })); E.add(sp); humo.push({ sp, t: rnd() * 5 }); }
  // Polvo dorado en la luz del vitral
  const nPol = 160, pos = new Float32Array(nPol * 3);
  for (let i = 0; i < nPol; i++) { pos[i * 3] = (rnd() - 0.5) * 4; pos[i * 3 + 1] = rnd() * 7; pos[i * 3 + 2] = -8 + rnd() * 6; }
  const gPol = new THREE.BufferGeometry(); gPol.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const polvo = new THREE.Points(gPol, new THREE.PointsMaterial({ size: 0.035, map: TEX.chispa, color: 0xffe0a0, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending })); E.add(polvo);

  /* ---------- Luces ---------- */
  E.add(new THREE.HemisphereLight(0xfff0d8, 0x3a2414, 0.55));
  const foco = new THREE.SpotLight(0xffe6c0, 60, 30, 0.5, 0.6, 1.4); foco.position.set(0, 9, 2); foco.target.position.set(0, 0.8, -3.2); foco.castShadow = true; foco.shadow.mapSize.set(1024, 1024); foco.shadow.bias = -0.0004; E.add(foco, foco.target);
  const vitralLuz = new THREE.SpotLight(0x9ab0ff, 25, 18, 0.45, 0.8, 1.2); vitralLuz.position.set(0, 6.5, -8.5); vitralLuz.target.position.set(0, 0, -3); E.add(vitralLuz, vitralLuz.target);
  const luzEnvio = new THREE.PointLight(0xfff4d0, 0, 30, 1); luzEnvio.position.set(0, 3, 6); E.add(luzEnvio);

  /* ---------- Cámara: un plano para cada momento ---------- */
  const PLANOS = {
    general: { p: [0, 2.6, 5.6], m: [0, 1.4, -3.2], ajusta: true },
    procesion: { p: [0, 2.3, 2.4], m: [2.2, 1.0, -0.6] },
    ambon: { p: [-1.2, 1.9, 1.4], m: [-3.2, 1.5, -2.0] },
    altar: { p: [0.6, 1.7, 0.4], m: [0, 1.6, -3.2] },
    consagra: { p: [0.2, 0.95, -0.9], m: [0, 2.3, -3.6] },
    credencia: { p: [1.6, 1.6, 1.0], m: [2.8, 1.1, -2.0] },
    envio: { p: [0, 1.9, 7.5], m: [0, 2.2, -3] },
    preparar: { p: [0, 4.6, 6.2], m: [0, 0.8, -2.3], fov: 56, ajusta: true }
  };
  let plano = op.vacio ? PLANOS.preparar : PLANOS.general;
  const camP = new THREE.Vector3(...plano.p), camM = new THREE.Vector3(...plano.m), vT = new THREE.Vector3();
  cam.position.copy(camP); cam.fov = plano.fov || 42;
  // Posiciones del sacerdote
  const LUGAR = { altar: [0, -4.1, 0], ambon: [-3.45, -2.45, 0.45], entrada: [3.5, 1.2, -1.2], silla: [-1.8, -5.2, 0.3] };
  let lugar = LUGAR.entrada, consagrando = false, envio = false;
  cura.raiz.position.set(lugar[0], piso, lugar[1]);
  function pose(n, consagra) {
    consagrando = !!consagra;
    let pl = 'general', lg = 'altar', bi = [0, 0], bz = [0.12, -0.12], hos = false;
    if (/Procesión/.test(n)) { pl = 'procesion'; lg = 'entrada'; }
    else if (/Saludo|Gloria|colecta|Padre|Santo/.test(n)) { pl = /colecta|Padre/.test(n) ? 'altar' : 'general'; bi = [-0.7, -0.7]; bz = [0.9, -0.9]; }
    else if (/Evangelio|Homilía|Aleluya/.test(n)) { pl = 'ambon'; lg = 'ambon'; if (/Homilía/.test(n)) { bi = [-0.9, -0.3]; bz = [0.4, -0.2]; } }
    else if (/lectura|Salmo|Antes del|Credo|fieles/.test(n)) { pl = /lectura|Salmo/.test(n) ? 'ambon' : 'general'; lg = 'silla'; bi = [-1.2, -1.2]; bz = [0.5, -0.5]; }
    else if (/Consagración/.test(n)) { pl = 'consagra'; bi = [-2.9, -2.9]; bz = [0.25, -0.25]; hos = true; }
    else if (/Ofertorio/.test(n)) { pl = 'altar'; bi = [-1.4, -1.4]; bz = [0.35, -0.35]; }
    else if (/Lavatorio|Purificación/.test(n)) { pl = 'credencia'; bi = [-1.3, -1.3]; bz = [0.3, -0.3]; }
    else if (/Comunión/.test(n)) { pl = 'altar'; bi = [-0.4, -1.5]; bz = [0.2, -0.2]; hos = true; }
    else if (/paz/.test(n)) { bi = [-1.2, -1.2]; bz = [0.8, -0.8]; }
    else if (/Bendición/.test(n)) { bi = [0, -2.6]; bz = [0.12, -0.3]; }
    else if (/Envío/.test(n)) { pl = 'envio'; bi = [-0.6, -0.6]; bz = [1.1, -1.1]; }
    else if (/Confirmación/.test(n)) { pl = 'general'; bi = [-1, -1]; }
    plano = PLANOS[pl]; lugar = LUGAR[lg];
    postura = /Consagración/.test(n) ? 'rodillas' : /lectura|Salmo|Homilía|Ofertorio|Purificación|Antes del|Lavatorio/.test(n) ? 'sentado' : 'pie';
    fieles.forEach((f) => { f.t = 0; });
    cura.objetivo.bi = bi; cura.objetivo.bz = bz.map((v) => -v); hostia.visible = hos;
    envio = /Envío/.test(n);
    return { pie: 'De pie', sentado: 'Sentados', rodillas: 'De rodillas' }[postura];
  }
  function lleva(url) {
    if (!url) { enMano.visible = false; return; }
    const img = new Image(); img.onload = () => { const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; enMano.material.map = t; enMano.material.needsUpdate = true; enMano.visible = true; }; img.src = url;
  }
  function vela(i, encendida) { velas[i].encendida = encendida; }
  // Tocar las velas en la pantalla (para encenderlas si se apagan)
  const ray = new THREE.Raycaster(), ptr = new THREE.Vector2();
  function velaTocada(cx, cy) {
    const r = R.domElement.getBoundingClientRect(); ptr.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, cam);
    let mejor = -1, md = 0.5;
    velas.forEach((v, i) => { const p = new THREE.Vector3(); v.llama.getWorldPosition(p); const d = ray.ray.distanceToPoint(p); if (d < md) { md = d; mejor = i; } });
    return mejor;
  }

  /* ---------- Animación ---------- */
  let t0 = performance.now(), vivo = true, ancho = 0, alto = 0;
  const ap = (o, p, v, k) => { o[p] += (v - o[p]) * k; };
  function cuadro(ahora) {
    if (!vivo) return;
    requestAnimationFrame(cuadro);
    const dt = Math.min(0.05, (ahora - t0) / 1000); t0 = ahora; const t = ahora / 1000;
    const w = contenedor.clientWidth, h = contenedor.clientHeight;
    if (w !== ancho || h !== alto) { ancho = w; alto = h; R.setSize(w, h, false); cam.aspect = w / Math.max(1, h); cam.updateProjectionMatrix(); }
    // Cámara suave hacia el plano del momento, con un leve vaivén
    // En pantallas angostas la cámara se aleja para que quepa todo el presbiterio
    vT.set(...plano.p);
    if (plano.ajusta && cam.aspect < 1.25) { const k = 1 + (1.25 - cam.aspect) * 0.9; vT.x = plano.m[0] + (vT.x - plano.m[0]) * k; vT.y = plano.m[1] + (vT.y - plano.m[1]) * k; vT.z = plano.m[2] + (vT.z - plano.m[2]) * k; }
    camP.lerp(vT, Math.min(1, dt * 1.8));
    const fovO = plano.fov || 42; if (Math.abs(cam.fov - fovO) > 0.1) { cam.fov += (fovO - cam.fov) * Math.min(1, dt * 2); cam.updateProjectionMatrix(); } vT.set(...plano.m); camM.lerp(vT, Math.min(1, dt * 2.2));
    cam.position.set(camP.x + Math.sin(t * 0.3) * 0.08, camP.y + Math.sin(t * 0.4) * 0.04, camP.z); cam.lookAt(camM);
    // El sacerdote camina a su lugar y gira hacia donde corresponde
    const cr = cura.raiz, dx = lugar[0] - cr.position.x, dz = lugar[1] - cr.position.z, dist = Math.hypot(dx, dz);
    const dtm = Math.min(0.25, (ahora - (cuadro.ult || ahora)) / 1000); cuadro.ult = ahora;
    if (dist > 0.05) { const v = Math.min(dist, Math.max(dt, dtm) * 1.8); cr.position.x += dx / dist * v; cr.position.z += dz / dist * v; cr.rotation.y += (Math.atan2(dx, dz) - cr.rotation.y) * Math.min(1, dt * 6); cr.position.y = piso + Math.abs(Math.sin(t * 7)) * 0.03; }
    else { ap(cr.rotation, 'y', lugar[2], Math.min(1, dt * 4)); cr.position.y = piso; }
    const k = Math.min(1, dt * 5);
    cura.brazos.forEach((b, i) => { ap(b.rotation, 'x', cura.objetivo.bi[i], k); ap(b.rotation, 'z', cura.objetivo.bz[i], k); });
    cura.cabeza.rotation.x = Math.sin(t * 0.8) * 0.03 + (consagrando ? -0.3 : 0);
    aco.cabeza.rotation.y = Math.sin(t * 0.5) * 0.2;
    const [py, pl] = POSTURA[postura];
    for (const f of fieles) { f.t += dt; if (f.t < f.retraso) continue; f.y += (py - f.y) * Math.min(1, dt * 3); f.lean += (pl - f.lean) * Math.min(1, dt * 3); f.cuerpo.position.y = f.y; f.cuerpo.rotation.x = f.lean; }
    // Objetos recién puestos: caen con un rebote
    for (const id in OBJ) { const g = OBJ[id]; if (g.userData.anim != null) { g.userData.anim = Math.min(1, g.userData.anim + dt * 2.6); const a = g.userData.anim, e = 1 + 2.4 * Math.pow(a - 1, 3) + 1.4 * Math.pow(a - 1, 2); g.scale.setScalar(g.userData.base * Math.max(0.01, e)); if (a >= 1) g.userData.anim = null; } }
    for (let i = chispas.length - 1; i >= 0; i--) { const c = chispas[i]; c.t += dt; c.sp.position.addScaledVector(c.v, dt); c.v.y -= dt * 2; c.sp.material.opacity = Math.max(0, 1 - c.t / 0.8); if (c.t > 0.8) { E.remove(c.sp); chispas.splice(i, 1); } }
    // Velas: llama viva, luz que parpadea
    for (const v of velas) {
      const f = 0.85 + Math.sin(t * 13 + v.fase) * 0.08 + Math.sin(t * 29 + v.fase) * 0.05;
      const on = v.encendida && OBJ_VELAS.visible; v.llama.visible = v.halo.visible = on; v.luz.intensity = on ? 4 * f : 0;
      v.llama.scale.set(0.12 * f, 0.22 * (2 - f), 1);
    }
    // Consagración: rayos de luz que giran detrás de la hostia
    const ck = consagrando ? 1 : 0;
    rayos.material.opacity += (ck * 0.9 - rayos.material.opacity) * Math.min(1, dt * 2.5);
    rayos.material.rotation = t * 0.3;
    if (hostia.visible) { hostia.getWorldPosition(vT); rayos.position.copy(vT); luzConsagra.position.copy(vT); }
    luzConsagra.intensity += (ck * 12 - luzConsagra.intensity) * Math.min(1, dt * 3);
    luzEnvio.intensity += ((envio ? 25 : 0) - luzEnvio.intensity) * Math.min(1, dt * 1.5);
    haz.material.opacity = 0.07 + Math.sin(t * 0.5) * 0.02;
    for (const hm of humo) { hm.t += dt * 0.35; if (hm.t > 1) hm.t -= 1; hm.sp.position.set(3.0 + Math.sin(hm.t * 6 + hm.sp.id) * 0.2 * hm.t, piso + 0.9 + hm.t * 3.2, -2.2 + Math.cos(hm.t * 5) * 0.15); hm.sp.scale.setScalar(0.3 + hm.t * 1.4); hm.sp.material.opacity = Math.sin(hm.t * Math.PI) * 0.35; }
    const pa = gPol.attributes.position.array; for (let i = 0; i < nPol; i++) { pa[i * 3 + 1] += dt * 0.06; if (pa[i * 3 + 1] > 7) pa[i * 3 + 1] = 0; } gPol.attributes.position.needsUpdate = true;
    R.render(E, cam);
  }
  requestAnimationFrame(cuadro);
  const chispas = [];
  function poner(id) {
    const g = OBJ[id]; if (!g) return;
    g.visible = true; g.userData.anim = 0; g.scale.setScalar(0.01);
    const p = new THREE.Vector3(); g.getWorldPosition(p);
    for (let i = 0; i < 18; i++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.chispa, color: 0xffe08a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); sp.scale.setScalar(0.12); sp.position.copy(p).add(new THREE.Vector3(0, 0.2, 0)); E.add(sp); const a = rnd() * 6.28; chispas.push({ sp, t: 0, v: new THREE.Vector3(Math.cos(a) * 0.8, 0.8 + rnd(), Math.sin(a) * 0.8) }); }
  }
  function todoListo() { for (const id in OBJ) if (id !== 'cirio' || op.cirio) OBJ[id].visible = true; }
  const ZONAS = { altar: [[0, piso + 1.15, -3.2], [1.45, 0.45, 0.65]], ambon: [[-3.3, piso + 1.0, -1.8], [0.55, 0.65, 0.45]], credencia: [[3.6, piso + 0.95, -2.2], [0.95, 0.6, 0.5]] };
  function zonasPantalla() {
    cam.updateMatrixWorld(); const w = contenedor.clientWidth, h = contenedor.clientHeight, res = {}, v = new THREE.Vector3();
    for (const k in ZONAS) {
      const [c, e] = ZONAS[k]; let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) { v.set(c[0] + sx * e[0], c[1] + sy * e[1], c[2] + sz * e[2]).project(cam); const X = (v.x * 0.5 + 0.5) * w, Y = (-v.y * 0.5 + 0.5) * h; x0 = Math.min(x0, X); x1 = Math.max(x1, X); y0 = Math.min(y0, Y); y1 = Math.max(y1, Y); }
      res[k] = { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
    }
    return res;
  }
  function mover(nuevo) { contenedor = nuevo; nuevo.appendChild(R.domElement); ancho = 0; }
  function verPlano(nombre) { plano = PLANOS[nombre] || plano; }
  return {
    pose, lleva, vela, velaTocada, poner, todoListo, zonasPantalla, mover, verPlano,
    destruir() { vivo = false; R.dispose(); R.domElement.remove(); }
  };
}
