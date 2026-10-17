/* Carrera de la fe · texturas hechas en el momento con canvas (no se descarga ninguna imagen) */
import * as THREE from '../lib/three.module.min.js';

export function rng(semilla) {
  let s = semilla >>> 0;
  return () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const cache = new Map();

function lienzo(w, h, pintar) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  pintar(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
/* Color base con grano suave: sirve para pasto, arena, asfalto y piedra */
function grano(base, varianza, semilla, tam) {
  return lienzo(tam, tam, (x, w, h) => {
    const r = rng(semilla);
    const img = x.createImageData(w, h), d = img.data;
    const c = new THREE.Color(base);
    const br = c.r * 255, bg = c.g * 255, bb = c.b * 255;
    for (let i = 0; i < w * h; i++) {
      const v = (r() - 0.5) * varianza;
      d[i * 4] = Math.max(0, Math.min(255, br + v));
      d[i * 4 + 1] = Math.max(0, Math.min(255, bg + v));
      d[i * 4 + 2] = Math.max(0, Math.min(255, bb + v));
      d[i * 4 + 3] = 255;
    }
    x.putImageData(img, 0, 0);
  });
}
export function texPasto(base, semilla = 3) {
  const k = 'pasto' + base + semilla; if (cache.has(k)) return cache.get(k);
  const t = lienzo(256, 256, (x, w, h) => {
    const r = rng(semilla);
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      x.fillStyle = r() < 0.5 ? 'rgba(0,60,0,0.12)' : 'rgba(255,255,200,0.08)';
      x.beginPath(); x.ellipse(r() * w, r() * h, 2 + r() * 5, 1 + r() * 2, r() * 3, 0, Math.PI * 2); x.fill();
    }
  });
  cache.set(k, t); return t;
}
export function texArena(base, semilla = 5) {
  const k = 'arena' + base + semilla; if (cache.has(k)) return cache.get(k);
  const t = lienzo(256, 256, (x, w, h) => {
    const r = rng(semilla);
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) {
      x.strokeStyle = r() < 0.5 ? 'rgba(120,80,30,0.10)' : 'rgba(255,250,220,0.12)';
      x.lineWidth = 1 + r() * 2;
      x.beginPath(); const y = r() * h; x.moveTo(0, y); x.bezierCurveTo(w * 0.3, y + (r() - 0.5) * 14, w * 0.6, y + (r() - 0.5) * 14, w, y + (r() - 0.5) * 6); x.stroke();
    }
  });
  cache.set(k, t); return t;
}
export function texAsfalto(base, semilla = 7) {
  const k = 'asfalto' + base + semilla; if (cache.has(k)) return cache.get(k);
  const t = lienzo(256, 256, (x, w, h) => {
    const r = rng(semilla);
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 1400; i++) { x.fillStyle = r() < 0.5 ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.05)'; x.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2); }
    for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(0,0,0,0.06)'; x.beginPath(); x.ellipse(r() * w, r() * h, 20 + r() * 40, 10 + r() * 20, 0, 0, Math.PI * 2); x.fill(); }
  });
  cache.set(k, t); return t;
}
/* Piedra en bloques con juntas (catacumbas, arcos, capillas) */
export function texPiedra(base, semilla = 11, juntas = 'rgba(0,0,0,0.35)') {
  const k = 'piedra' + base + semilla; if (cache.has(k)) return cache.get(k);
  const t = lienzo(256, 256, (x, w, h) => {
    const r = rng(semilla);
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let row = 0; row < 4; row++) {
      const off = row % 2 ? 32 : 0;
      for (let col = -1; col < 3; col++) {
        const bx = col * 64 + off + (r() - 0.5) * 4;
        x.fillStyle = `rgba(${Math.round(r() * 30)},${Math.round(r() * 20)},${Math.round(r() * 20)},0.10)`;
        x.fillRect(bx + 2, row * 64 + 2, 60, 60);
        x.strokeStyle = juntas; x.lineWidth = 4; x.strokeRect(bx, row * 64, 64, 64);
      }
    }
    for (let i = 0; i < 500; i++) { x.fillStyle = r() < 0.5 ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.05)'; x.fillRect(r() * w, r() * h, 2, 2); }
  });
  cache.set(k, t); return t;
}
export function texLadrillo(c1, c2, semilla = 13) {
  const k = 'ladrillo' + c1 + c2; if (cache.has(k)) return cache.get(k);
  const t = lienzo(256, 128, (x, w, h) => {
    const r = rng(semilla);
    x.fillStyle = c1; x.fillRect(0, 0, w, h);
    for (let row = 0; row < 8; row++) for (let col = -1; col < 5; col++) {
      x.fillStyle = r() < 0.5 ? c1 : c2; x.globalAlpha = 0.5 + r() * 0.4;
      x.fillRect(col * 64 + (row % 2 ? 32 : 0) + 2, row * 16 + 2, 60, 12); x.globalAlpha = 1;
    }
  });
  cache.set(k, t); return t;
}
/* Agua con ondas claras */
export function texAgua(base = '#3fa6d8', semilla = 17) {
  const k = 'agua' + base; if (cache.has(k)) return cache.get(k);
  const t = lienzo(256, 256, (x, w, h) => {
    const r = rng(semilla);
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) { x.strokeStyle = 'rgba(255,255,255,0.22)'; x.lineWidth = 2; const y = r() * h; x.beginPath(); x.moveTo(0, y); x.quadraticCurveTo(w / 2, y + 10, w, y); x.stroke(); }
  });
  cache.set(k, t); return t;
}
/* Flechas de turbo (zonas que dan velocidad) */
export function texFlechas(color = '#ffe25a') {
  const k = 'flechas' + color; if (cache.has(k)) return cache.get(k);
  const t = lienzo(128, 128, (x, w) => {
    x.clearRect(0, 0, w, w);
    /* Flechas que apuntan hacia la derecha (en el sentido de la marcha) */
    for (let i = 0; i < 2; i++) {
      x.fillStyle = color; x.globalAlpha = 0.95 - i * 0.35;
      const dx = i * 40;
      x.beginPath(); x.moveTo(12 + dx, 20); x.lineTo(60 + dx, 64); x.lineTo(12 + dx, 108); x.lineTo(24 + dx, 108); x.lineTo(72 + dx, 64); x.lineTo(24 + dx, 20); x.closePath(); x.fill();
    }
    x.globalAlpha = 1;
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  cache.set(k, t); return t;
}
/* Rayas rojas y blancas (bordes de la pista) */
export function texRayas(a, b) {
  const k = 'rayas' + a + b; if (cache.has(k)) return cache.get(k);
  const t = lienzo(128, 8, (x) => { x.fillStyle = a; x.fillRect(0, 0, 64, 8); x.fillStyle = b; x.fillRect(64, 0, 64, 8); });
  cache.set(k, t); return t;
}
/* Línea discontinua central */
export function texPuntos(color = '#ffffff') {
  const k = 'puntos' + color; if (cache.has(k)) return cache.get(k);
  const t = lienzo(128, 8, (x) => { x.fillStyle = color; x.fillRect(0, 0, 76, 8); });
  cache.set(k, t); return t;
}
/* Cuadros de meta */
export function texCuadros() {
  const k = 'cuadros'; if (cache.has(k)) return cache.get(k);
  const t = lienzo(64, 16, (x) => { for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) { x.fillStyle = (i + j) % 2 ? '#ffffff' : '#2b1a3f'; x.fillRect(i * 16, j * 8, 16, 8); } });
  t.magFilter = THREE.NearestFilter;
  cache.set(k, t); return t;
}
/* Brillo redondo para chispas, humo y llamas (se pinta con el color de cada partícula) */
export function texBrillo() {
  const k = 'brillo'; if (cache.has(k)) return cache.get(k);
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,0.7)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); cache.set(k, t); return t;
}
/* Etiqueta con nombre (flota sobre cada kart) */
export function texEtiqueta(texto, color) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const x = c.getContext('2d');
  x.font = '800 34px "Trebuchet MS", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.lineWidth = 8; x.strokeStyle = 'rgba(20,8,36,.85)'; x.strokeText(texto, 128, 34);
  x.fillStyle = color; x.fillText(texto, 128, 34);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
/* Emoji como imagen (paloma, objetos flotantes) */
export function texEmoji(txt) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'); x.font = '96px serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 64, 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
/* Cartel de la línea de meta con texto */
export function texCartel(texto, fondo, color) {
  return lienzo(512, 128, (x, w, h) => {
    x.fillStyle = fondo; x.fillRect(0, 0, w, h);
    x.strokeStyle = '#ffd25a'; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, h - 10);
    x.fillStyle = color; x.font = '900 70px Georgia, "Times New Roman", serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(texto, w / 2, h / 2 + 4);
  });
}
