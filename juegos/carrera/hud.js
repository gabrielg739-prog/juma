/* Carrera de la fe · HUD al estilo de MK8: objeto arriba a la izquierda, mapa arriba a la derecha, posición y monedas abajo, derrape en el centro; cuenta atrás, avisos y paneles */
import { OBJETOS } from './datos.js';

const $ = (id) => document.getElementById(id);
const formato = (t) => {
  const m = Math.floor(t / 60), s = Math.floor(t % 60), c = Math.floor((t * 100) % 100);
  return `${m}:${String(s).padStart(2, '0')}.${String(c).padStart(2, '0')}`;
};
const reiniciarAnim = (el, clase) => { el.classList.remove(clase); void el.offsetWidth; el.classList.add(clase); };

export class Hud {
  constructor() {
    this.mapaEl = $('mapa');
    this.mapaG = this.mapaEl.getContext('2d');
    this.fondo = document.createElement('canvas');
    this.fondo.width = this.mapaEl.width; this.fondo.height = this.mapaEl.height;
    this.mapaP = null; this.mapaT = null;
    this.avisoT = 0;
  }

  mostrar(v) { $('hud').hidden = !v; }
  tactil(v) { $('controles').hidden = !v; }

  puesto(n, total) { $('puesto').textContent = n; $('puestoTotal').textContent = `de ${total}`; }
  vuelta(n, total) { $('vuelta').textContent = `${n}/${total}`; }
  monedas(n) { $('monedas').textContent = n; }
  tiempo(t) { $('tiempo').textContent = formato(t); }

  /* Caja de objeto: muestra el icono cuando hay uno guardado */
  item(tipo) {
    const c = $('cajaItem');
    if (tipo) { c.textContent = OBJETOS[tipo].icono; c.title = OBJETOS[tipo].nombre; c.classList.add('lleno'); }
    else { c.textContent = '·'; c.title = ''; c.classList.remove('lleno'); }
  }

  /* Barra de derrape: se llena hasta el último nivel de mini-turbo */
  deriva(tier, progreso) {
    const b = $('derivaBarra');
    b.style.width = `${Math.round(progreso * 100)}%`;
    b.dataset.tier = String(tier);
  }

  /* Números grandes de la cuenta atrás */
  cuenta(texto) {
    const el = $('cuenta');
    el.hidden = !texto;
    el.textContent = texto;
    if (texto) reiniciarAnim(el, 'anim');
  }

  /* Aviso que aparece y se va solo */
  aviso(texto, ms = 1500) {
    const el = $('aviso');
    el.textContent = texto; el.hidden = false;
    reiniciarAnim(el, 'anim');
    clearTimeout(this.avisoT);
    this.avisoT = setTimeout(() => { el.hidden = true; }, ms);
  }

  limpiarAvisos() {
    clearTimeout(this.avisoT);
    $('aviso').hidden = true;
    $('cuenta').hidden = true;
  }

  velo(titulo, html) {
    $('veloTitulo').textContent = titulo;
    $('veloCuerpo').innerHTML = html;
    $('velo').hidden = false;
  }

  ocultarVelo() { $('velo').hidden = true; }

  /* Mapa de la pista con los karts: el jugador tiene borde dorado */
  mapa(P, karts) {
    const W = this.mapaEl.width, H = this.mapaEl.height;
    if (this.mapaP !== P) {
      this.mapaP = P;
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (let i = 0; i < P.N; i++) {
        x0 = Math.min(x0, P.xs[i]); x1 = Math.max(x1, P.xs[i]);
        y0 = Math.min(y0, P.ys[i]); y1 = Math.max(y1, P.ys[i]);
      }
      const s = Math.min((W - 22) / (x1 - x0), (H - 22) / (y1 - y0));
      const ox = (W - (x1 - x0) * s) / 2, oy = (H - (y1 - y0) * s) / 2;
      this.mapaT = { x0, y0, s, ox, oy };
      const f = this.fondo.getContext('2d');
      f.clearRect(0, 0, W, H);
      f.lineJoin = 'round'; f.lineCap = 'round';
      f.beginPath();
      for (let i = 0; i <= P.N; i++) {
        const j = i % P.N;
        const px = (P.xs[j] - x0) * s + ox, py = (P.ys[j] - y0) * s + oy;
        if (i) f.lineTo(px, py); else f.moveTo(px, py);
      }
      f.strokeStyle = 'rgba(255,255,255,.92)'; f.lineWidth = 12; f.stroke();
      f.strokeStyle = 'rgba(43,26,63,.75)'; f.lineWidth = 7; f.stroke();
    }
    const t = this.mapaT, g = this.mapaG;
    g.clearRect(0, 0, W, H);
    g.drawImage(this.fondo, 0, 0);
    /* Los rivales van primero; el jugador encima, con borde dorado */
    const orden = [...karts].sort((a, b) => (a.humano ? 1 : 0) - (b.humano ? 1 : 0));
    for (const k of orden) {
      const px = (k.x - t.x0) * t.s + t.ox, py = (k.y - t.y0) * t.s + t.oy;
      g.beginPath();
      g.arc(px, py, k.humano ? 8 : 6, 0, Math.PI * 2);
      g.fillStyle = k.color; g.fill();
      g.lineWidth = k.humano ? 3 : 2;
      g.strokeStyle = k.humano ? '#ffd25a' : k.borde;
      g.stroke();
    }
  }
}
