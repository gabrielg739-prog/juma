/* =====================================================================
   JUMA · Sala del juego conectado (pantalla común para todos los juegos)
   Crear sala, unirse con el código de 4 letras, o conectarse sin internet
   con un código QR. Muestra quién está en la sala y, para el anfitrión,
   las opciones del juego y el botón para empezar.
   ===================================================================== */
import { crearRed } from './red.js';

const CSS = `
.jsala{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 56px) 14px calc(env(safe-area-inset-bottom,0px) + 14px);background:rgba(6,3,12,.82);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);font-family:inherit;color:#fff7e6;touch-action:auto;user-select:text;-webkit-user-select:text}
.jsala[hidden]{display:none!important}
.jsala *{box-sizing:border-box}
.jsala-card{width:100%;max-width:480px;max-height:100%;overflow:auto;padding:18px 16px 16px;border-radius:22px;background:linear-gradient(180deg,rgba(38,22,58,.98),rgba(14,8,26,.99));border:2px solid var(--jsala-acento,#ffd25a);box-shadow:0 20px 50px rgba(0,0,0,.6);text-align:center}
.jsala h2{margin:2px 0 4px;font-size:22px;color:var(--jsala-acento,#ffd25a)}
.jsala p{margin:8px 0;font-size:14px;line-height:1.45}
.jsala small,.jsala .jsala-nota{font-size:12.5px;opacity:.8}
.jsala-fila{display:flex;gap:8px;align-items:center;margin:8px 0}
.jsala-fila>*{flex:1}
.jsala input,.jsala textarea{width:100%;padding:12px 12px;border-radius:12px;border:2px solid rgba(255,255,255,.22);background:rgba(0,0,0,.35);color:#fff;font:inherit;font-size:16px}
.jsala input:focus,.jsala textarea:focus{outline:none;border-color:var(--jsala-acento,#ffd25a)}
.jsala .jsala-codigo-in{text-transform:uppercase;letter-spacing:.35em;text-align:center;font-weight:900;font-size:22px}
.jsala textarea{min-height:64px;font-size:12px;font-family:ui-monospace,monospace;word-break:break-all}
.jsala-btn{display:block;width:100%;min-height:50px;margin-top:9px;border:0;border-radius:999px;font:inherit;font-weight:900;font-size:16px;color:#2a1800;background:linear-gradient(180deg,#ffe28a,#d9a02a);box-shadow:0 4px 0 #7a5410;cursor:pointer}
.jsala-btn:active{transform:translateY(2px)}
.jsala-btn[disabled]{opacity:.45;cursor:default}
.jsala-btn.sec{color:#fff;background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.25);box-shadow:0 4px 0 rgba(0,0,0,.4)}
.jsala-btn.peq{min-height:40px;font-size:14px}
.jsala-enlace{background:none;border:0;color:var(--jsala-acento,#ffd25a);font:inherit;font-size:14px;text-decoration:underline;margin-top:12px;cursor:pointer}
.jsala-codigo{font-size:44px;font-weight:900;letter-spacing:.22em;color:var(--jsala-acento,#ffd25a);margin:2px 0;font-family:ui-monospace,monospace}
.jsala-lista{list-style:none;margin:10px 0;padding:0;text-align:left}
.jsala-lista li{display:flex;align-items:center;gap:10px;padding:8px 10px;margin:5px 0;border-radius:12px;background:rgba(255,255,255,.07)}
.jsala-lista i{width:12px;height:12px;border-radius:50%;flex:none;background:#7bd86b}
.jsala-lista b{flex:1}
.jsala-lista em{font-style:normal;font-size:12px;opacity:.75}
.jsala-error{color:#ffb3b3;font-weight:700}
.jsala-ok{color:#bff0b0;font-weight:700}
.jsala-qr{display:block;margin:8px auto;width:min(62vw,240px);height:auto;image-rendering:pixelated;background:#fff;border-radius:10px;padding:6px}
.jsala-video{width:100%;max-height:220px;border-radius:12px;background:#000;object-fit:cover}
.jsala-opciones{text-align:left;margin:8px 0}
.jsala-opciones label{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:7px 0;font-weight:700;font-size:14px}
.jsala-opciones select{padding:8px 10px;border-radius:10px;background:#1d1030;color:#fff;border:2px solid rgba(255,255,255,.25);font:inherit;font-size:14px;max-width:60%}
.jsala-opciones:empty{display:none}
.jsala-gira{display:inline-block;width:18px;height:18px;border:3px solid rgba(255,255,255,.3);border-top-color:var(--jsala-acento,#ffd25a);border-radius:50%;animation:jsala-g 1s linear infinite;vertical-align:middle;margin-right:6px}
@keyframes jsala-g{to{transform:rotate(360deg)}}
@media (max-height:500px){.jsala{padding-top:calc(env(safe-area-inset-top,0px) + 10px)}.jsala-card{max-width:620px}.jsala-codigo{font-size:34px}.jsala-qr{width:min(40vh,200px)}}
`;

const CARPETA_APP = '../../js/'; // js/ de la app, dos niveles arriba de este archivo
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function cargarScript(url) { return new Promise((ok, mal) => { const s = document.createElement('script'); s.src = url; s.onload = ok; s.onerror = mal; document.head.appendChild(s); }); }
async function qrComoImagen(texto) {
  if (!window.qrcode) { try { await cargarScript(new URL(CARPETA_APP + 'qrcode.min.js', import.meta.url).href); } catch (e) { return ''; } }
  try { const q = window.qrcode(0, 'L'); q.addData(texto); q.make(); return q.createDataURL(5, 2); } catch (e) { return ''; }
}

const MENSAJE_NUBE = {
  'sin-permiso': 'El juego por código todavía no está activado en la nube de JUMA. Usa «Sin internet (código QR)».',
  'sin-internet': 'No hay internet. Usa «Sin internet (código QR)»: funciona en la misma wifi.',
  'sin-config': 'Abre el juego desde la app JUMA, o usa «Sin internet (código QR)».'
};

/**
 * @param {object} o
 * @param {string} o.juego        identificador del juego ('luz', 'granpremio'…)
 * @param {string} o.titulo       nombre que se ve arriba
 * @param {string} [o.acento]     color de los botones
 * @param {object} [o.datos]      datos del jugador que verán los demás (personaje, vehículo…)
 * @param {number} [o.max]        jugadores como máximo
 * @param {(el:HTMLElement, red:object)=>void} [o.opciones]  pinta las opciones del anfitrión
 * @param {(red:object)=>void} o.alEmpezar   el anfitrión pulsó EMPEZAR
 * @param {()=>void} [o.alSalir]  el jugador salió de la sala
 * @param {(j:object)=>string} [o.detalle]   texto pequeño junto a cada jugador
 */
export function abrirSala(o) {
  if (!document.getElementById('jsala-css')) { const st = document.createElement('style'); st.id = 'jsala-css'; st.textContent = CSS; document.head.appendChild(st); }
  const raiz = document.createElement('div');
  raiz.className = 'jsala';
  raiz.style.setProperty('--jsala-acento', o.acento || '#ffd25a');
  raiz.innerHTML = '<div class="jsala-card"></div>';
  document.body.appendChild(raiz);
  const card = raiz.firstChild;
  // Las teclas escritas aquí no deben mover al jugador
  for (const ev of ['keydown', 'keyup', 'pointerdown', 'wheel']) raiz.addEventListener(ev, (e) => e.stopPropagation());

  let nombre = '';
  try { nombre = localStorage.getItem('juma-nombre-red') || ''; } catch (e) { /* nada */ }
  const red = crearRed({ juego: o.juego, nombre: nombre || 'Jugador', max: o.max || 6 });
  if (o.datos) red.ponerDatos(o.datos);
  let vista = 'inicio', error = '', ocupado = '', manual = { mio: '', qr: '', respuesta: '', qrResp: '' };
  let camara = null;

  function guardarNombre() {
    const v = (card.querySelector('[data-nombre]')?.value || '').trim().slice(0, 24);
    if (v) { nombre = v; try { localStorage.setItem('juma-nombre-red', v); } catch (e) { /* nada */ } }
    red.ponerNombre(nombre || 'Jugador');
    return !!nombre;
  }
  const textoError = (e) => MENSAJE_NUBE[e && e.codigo] || (e && e.message) || 'Algo salió mal. Prueba otra vez.';

  function lista() {
    return `<ul class="jsala-lista">${red.jugadores.map((j) => `<li><i style="background:${esc(j.datos?.color || '#7bd86b')}"></i><b>${esc(j.nombre)}${j.id === red.miId ? ' (tú)' : ''}${j.id === red.ID_ANFITRION ? ' · anfitrión' : ''}</b><em>${esc(o.detalle ? o.detalle(j) : '')}</em></li>`).join('')}</ul>`;
  }

  function pintar() {
    pararCamara();
    const err = error ? `<p class="jsala-error">${esc(error)}</p>` : '';
    const ocup = ocupado ? `<p><span class="jsala-gira"></span>${esc(ocupado)}</p>` : '';
    let h = '';
    if (vista === 'inicio') {
      h = `<h2>${esc(o.titulo || 'Jugar con amigos')}</h2>
        <p>Jueguen juntos en la <b>misma wifi</b>. Uno crea la sala y los demás se unen con el código.</p>
        <input data-nombre maxlength="24" placeholder="Tu nombre" value="${esc(nombre)}" autocomplete="off">
        ${err}${ocup}
        <button class="jsala-btn" data-a="crear" type="button"${ocupado ? ' disabled' : ''}>CREAR SALA</button>
        <div class="jsala-fila" style="margin-top:12px"><input class="jsala-codigo-in" data-codigo maxlength="4" placeholder="CÓDIGO" autocomplete="off" autocapitalize="characters"><button class="jsala-btn" style="margin:0" data-a="unirse" type="button"${ocupado ? ' disabled' : ''}>UNIRME</button></div>
        <button class="jsala-enlace" data-a="manual" type="button">Sin internet (código QR) ›</button>
        <button class="jsala-btn sec peq" data-a="salir" type="button">Volver</button>`;
    } else if (vista === 'manual') {
      h = `<h2>Sin internet</h2>
        <p>Los equipos deben estar en la <b>misma wifi</b> (o uno compartiendo su punto de acceso). Un equipo hace de anfitrión.</p>
        <input data-nombre maxlength="24" placeholder="Tu nombre" value="${esc(nombre)}" autocomplete="off">
        ${err}
        <button class="jsala-btn" data-a="manual-anfitrion" type="button">SOY EL ANFITRIÓN</button>
        <button class="jsala-btn sec" data-a="manual-invitado" type="button">QUIERO UNIRME</button>
        <button class="jsala-enlace" data-a="volver" type="button">‹ Volver</button>`;
    } else if (vista === 'manual-invitado') {
      h = `<h2>Unirme sin internet</h2>
        <p><b>1.</b> Muéstrale este código al anfitrión (o envíale el texto).</p>
        ${manual.qr ? `<img class="jsala-qr" src="${manual.qr}" alt="Código QR">` : ''}
        ${manual.mio ? `<textarea readonly data-mio>${esc(manual.mio)}</textarea><div class="jsala-fila"><button class="jsala-btn sec peq" data-a="copiar" type="button">Copiar</button><button class="jsala-btn sec peq" data-a="compartir" type="button">Compartir</button></div>` : '<p><span class="jsala-gira"></span>Preparando tu código…</p>'}
        <p><b>2.</b> Escanea o pega el código de respuesta del anfitrión.</p>
        ${'BarcodeDetector' in window ? '<button class="jsala-btn sec peq" data-a="escanear" type="button">📷 Escanear</button><video class="jsala-video" data-video playsinline muted hidden></video>' : ''}
        <textarea data-pegar placeholder="Pega aquí el código del anfitrión"></textarea>
        ${err}${ocup}
        <button class="jsala-btn" data-a="conectar-invitado" type="button"${ocupado || !manual.mio ? ' disabled' : ''}>CONECTAR</button>
        <button class="jsala-enlace" data-a="volver" type="button">‹ Volver</button>`;
    } else if (vista === 'manual-anfitrion') {
      h = `<h2>Añadir un jugador</h2>
        ${manual.respuesta ? `<p class="jsala-ok">Ahora el invitado debe escanear este código:</p>
          ${manual.qrResp ? `<img class="jsala-qr" src="${manual.qrResp}" alt="Código QR de respuesta">` : ''}
          <textarea readonly data-mio>${esc(manual.respuesta)}</textarea><div class="jsala-fila"><button class="jsala-btn sec peq" data-a="copiar" type="button">Copiar</button><button class="jsala-btn sec peq" data-a="compartir" type="button">Compartir</button></div>
          <p class="jsala-nota"><span class="jsala-gira"></span>Esperando a que se conecte…</p>`
        : `<p>Escanea o pega el código que muestra el teléfono del invitado.</p>
          ${'BarcodeDetector' in window ? '<button class="jsala-btn sec peq" data-a="escanear" type="button">📷 Escanear</button><video class="jsala-video" data-video playsinline muted hidden></video>' : ''}
          <textarea data-pegar placeholder="Pega aquí el código del invitado"></textarea>
          ${err}${ocup}
          <button class="jsala-btn" data-a="responder" type="button"${ocupado ? ' disabled' : ''}>CREAR RESPUESTA</button>`}
        <button class="jsala-enlace" data-a="a-sala" type="button">‹ Ver la sala</button>`;
    } else if (vista === 'sala') {
      const anf = red.esAnfitrion, n = red.jugadores.length;
      h = `${red.codigo && red.codigo !== 'QR' ? `<small>CÓDIGO DE LA SALA</small><div class="jsala-codigo">${esc(red.codigo)}</div><p class="jsala-nota">${anf ? 'Díselo a tus amigos: abren este mismo juego, tocan «Con amigos» y escriben el código.' : 'Estás dentro de la sala.'}</p>` : `<h2>${esc(o.titulo || 'Sala')}</h2><p class="jsala-nota">Conectados sin internet.</p>`}
        ${lista()}
        ${anf ? '<div class="jsala-opciones" data-opciones></div>' : ''}
        ${err}${ocup}
        ${anf ? `<button class="jsala-btn" data-a="empezar" type="button"${n < 2 ? ' disabled' : ''}>${esc(o.textoEmpezar || 'EMPEZAR')}</button>${n < 2 ? '<p class="jsala-nota">Esperando a que entre al menos otro jugador…</p>' : ''}
          ${red.codigo === 'QR' || !red.codigo ? '<button class="jsala-btn sec peq" data-a="manual-anfitrion" type="button">+ Añadir jugador (código QR)</button>' : '<button class="jsala-enlace" data-a="manual-anfitrion" type="button">Añadir un jugador sin internet (QR) ›</button>'}`
        : `<p><span class="jsala-gira"></span>${esc(o.textoEspera || 'Esperando a que el anfitrión empiece…')}</p>`}
        <button class="jsala-btn sec peq" data-a="salir-sala" type="button">Salir de la sala</button>`;
    }
    card.innerHTML = h;
    const op = card.querySelector('[data-opciones]');
    if (op && o.opciones) o.opciones(op, red);
  }

  /* ---- cámara para leer códigos QR ---- */
  async function escanear() {
    const v = card.querySelector('[data-video]'); if (!v) return;
    try {
      const det = new window.BarcodeDetector({ formats: ['qr_code'] });
      const flujo = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      camara = { flujo, t: 0 };
      v.srcObject = flujo; v.hidden = false; await v.play();
      const mira = async () => {
        if (!camara) return;
        try {
          const r = await det.detect(v);
          const txt = r && r[0] && r[0].rawValue;
          if (txt && txt.startsWith('J1~')) { const t = card.querySelector('[data-pegar]'); if (t) t.value = txt; pararCamara(); card.querySelector('[data-a="responder"],[data-a="conectar-invitado"]')?.click(); return; }
        } catch (e) { /* sigue mirando */ }
        camara.t = setTimeout(mira, 280);
      };
      mira();
    } catch (e) {
      error = 'No se pudo usar la cámara. Pega el código como texto.'; pintar();
    }
  }
  function pararCamara() {
    if (!camara) return;
    clearTimeout(camara.t);
    for (const t of camara.flujo.getTracks()) t.stop();
    camara = null;
  }

  /* ---- acciones ---- */
  async function accion(a) {
    error = '';
    if (a === 'crear') {
      if (!guardarNombre()) { error = 'Escribe tu nombre.'; return pintar(); }
      ocupado = 'Creando la sala…'; pintar();
      try { await red.crearSala(); ocupado = ''; vista = 'sala'; } catch (e) { ocupado = ''; error = textoError(e); }
      return pintar();
    }
    if (a === 'unirse') {
      if (!guardarNombre()) { error = 'Escribe tu nombre.'; return pintar(); }
      const cod = card.querySelector('[data-codigo]').value;
      ocupado = 'Entrando en la sala…'; pintar();
      try { await red.unirse(cod); ocupado = ''; vista = 'sala'; } catch (e) { ocupado = ''; error = textoError(e); }
      return pintar();
    }
    if (a === 'manual') { guardarNombre(); vista = 'manual'; return pintar(); }
    if (a === 'volver') { vista = red.conectada ? 'sala' : 'inicio'; return pintar(); }
    if (a === 'a-sala') { manual.respuesta = ''; vista = 'sala'; return pintar(); }
    if (a === 'manual-anfitrion') {
      guardarNombre();
      if (!red.conectada) red.crearSalaManual();
      manual.respuesta = ''; vista = 'manual-anfitrion'; return pintar();
    }
    if (a === 'manual-invitado') {
      if (!guardarNombre()) { error = 'Escribe tu nombre.'; return pintar(); }
      vista = 'manual-invitado'; manual.mio = ''; manual.qr = ''; pintar();
      try { manual.mio = await red.codigoInvitado(); manual.qr = await qrComoImagen(manual.mio); } catch (e) { error = textoError(e); }
      return pintar();
    }
    if (a === 'responder') {
      const txt = card.querySelector('[data-pegar]').value;
      ocupado = 'Preparando la respuesta…'; pintar();
      try { manual.respuesta = await red.responderCodigo(txt); manual.qrResp = await qrComoImagen(manual.respuesta); } catch (e) { error = textoError(e); }
      ocupado = ''; return pintar();
    }
    if (a === 'conectar-invitado') {
      const txt = card.querySelector('[data-pegar]').value;
      ocupado = 'Conectando…'; pintar();
      try { await red.completarInvitado(txt); vista = 'sala'; } catch (e) { error = textoError(e); }
      ocupado = ''; return pintar();
    }
    if (a === 'copiar') { const t = card.querySelector('[data-mio]'); t.select(); try { await navigator.clipboard.writeText(t.value); } catch (e) { document.execCommand && document.execCommand('copy'); } return; }
    if (a === 'compartir') { const t = card.querySelector('[data-mio]').value; try { await navigator.share({ text: t }); } catch (e) { try { await navigator.clipboard.writeText(t); } catch (x) { /* nada */ } } return; }
    if (a === 'escanear') return escanear();
    if (a === 'empezar') { if (red.jugadores.length >= 2) o.alEmpezar(red); return; }
    if (a === 'salir-sala') { red.cerrar(); destruir(); o.alSalir && o.alSalir(); return; }
    if (a === 'salir') { red.cerrar(); destruir(); o.alSalir && o.alSalir(); return; }
  }
  card.addEventListener('click', (e) => { const b = e.target.closest('[data-a]'); if (b && !b.disabled) accion(b.dataset.a); });
  card.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (e.target.matches('[data-codigo]')) accion('unirse');
    else if (e.target.matches('[data-nombre]') && vista === 'inicio') accion('crear');
  });

  red.on('lista', () => {
    if (vista === 'manual-anfitrion' && manual.respuesta) { manual.respuesta = ''; vista = 'sala'; }
    if (vista === 'sala' && !raiz.hidden) {
      // No repintar mientras escribe en las opciones
      if (raiz.contains(document.activeElement) && document.activeElement.matches('input,select,textarea')) { const l = card.querySelector('.jsala-lista'); if (l) l.outerHTML = lista(); const b = card.querySelector('[data-a="empezar"]'); if (b) b.disabled = red.jugadores.length < 2; return; }
      pintar();
    }
  });
  red.on('cerrada', (motivo) => { error = motivo; vista = 'inicio'; if (!raiz.hidden) pintar(); });

  function destruir() { pararCamara(); raiz.remove(); }
  pintar();
  return {
    red,
    mostrar(txt) { raiz.hidden = false; vista = red.conectada ? 'sala' : 'inicio'; error = txt || ''; pintar(); },
    ocultar() { pararCamara(); raiz.hidden = true; },
    refrescar() { if (!raiz.hidden) pintar(); },
    error(txt) { error = txt; if (!raiz.hidden) pintar(); },
    destruir,
    get visible() { return !raiz.hidden; }
  };
}
