/* Descarga en segundo plano todo el sitio para usarlo sin internet: páginas, juegos, fotos, videos,
   libros y los módulos de Firebase. Va archivo por archivo: si se corta, sigue la próxima vez.
   Solo vuelve a bajar lo que cambió (la lista y las huellas las genera tools/generar-precache.mjs). */
const LISTA = 'precache.json';
const CLAVE_HUELLAS = 'juma-offline-huellas';
const CLAVE_DATOS_MOVILES = 'juma-offline-datos-moviles';
const EN_PARALELO = 4;
const estado = { corriendo: false };

const leer = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (e) { return d; } };
const escribir = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin espacio o bloqueado */ } };

/* ---------- Aviso discreto abajo de la pantalla ---------- */
let aviso = null;
function barra() {
  if (aviso) return aviso;
  aviso = document.createElement('div');
  aviso.id = 'juma-sin-conexion';
  aviso.setAttribute('role', 'status');
  aviso.setAttribute('aria-live', 'polite');
  aviso.style.cssText = 'display:none;position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 12px);transform:translateX(-50%);z-index:9000;width:min(92vw,420px);background:#0A235C;color:#fff;border-radius:16px;padding:10px 14px;font:600 14px/1.35 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;box-shadow:0 10px 26px rgba(0,0,0,.28);flex-direction:column;gap:8px';
  document.body.appendChild(aviso);
  return aviso;
}
function mostrar(texto, progreso, accion) {
  const b = barra();
  b.style.display = 'flex';
  b.replaceChildren();
  const p = document.createElement('div');
  p.textContent = texto;
  b.appendChild(p);
  if (progreso != null) {
    const pista = document.createElement('div');
    pista.style.cssText = 'height:6px;border-radius:3px;background:rgba(255,255,255,.22);overflow:hidden';
    const barraCompleta = document.createElement('i');
    barraCompleta.style.cssText = `display:block;height:100%;width:${Math.round(progreso)}%;background:#FFD25A;transition:width .3s`;
    pista.appendChild(barraCompleta);
    b.appendChild(pista);
  }
  if (accion) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = accion.texto;
    btn.style.cssText = 'align-self:flex-end;border:0;border-radius:999px;padding:8px 16px;background:#FFD25A;color:#0A235C;font:800 14px system-ui,sans-serif;cursor:pointer';
    btn.addEventListener('click', accion.onClick);
    b.appendChild(btn);
  }
}
function ocultarEn(ms) { setTimeout(() => { if (aviso) aviso.style.display = 'none'; }, ms); }

/* ---------- Descarga ---------- */
/* Pide cada archivo; las direcciones de otros sitios se piden con CORS (Firebase y las fuentes lo permiten) */
async function traer(url) {
  if (new URL(url).origin === location.origin) return fetch(url, { cache: 'no-cache' });
  try { return await fetch(url, { mode: 'cors', cache: 'no-cache' }); } catch (e) { return fetch(url, { mode: 'no-cors' }); }
}
/* Dentro de los módulos de Firebase y de las hojas de fuentes hay otros archivos que también hacen falta */
const RE_IMPORTA = /(?:\bfrom\s*|\bimport\s*\(?\s*)["'](\.{1,2}\/[^"']+|https:\/\/[^"']+)["']|url\(\s*["']?(https:\/\/[^"')\s]+)["']?\s*\)/g;
const DIRECCIONES_PERMITIDAS = /^https:\/\/(?:www\.gstatic\.com\/firebasejs\/|fonts\.gstatic\.com\/)/;
function importados(texto, base) {
  const salida = [];
  for (const m of texto.matchAll(RE_IMPORTA)) {
    try {
      const u = new URL(m[1] || m[2], base).href;
      if (DIRECCIONES_PERMITIDAS.test(u)) salida.push(u);
    } catch (e) { /* dirección no válida: se omite */ }
  }
  return salida;
}

async function iniciar({ permitirDatos = false } = {}) {
  if (estado.corriendo || !('caches' in window) || !('serviceWorker' in navigator) || !navigator.onLine) return;
  const red = navigator.connection || {};
  if (red.saveData) return;
  estado.corriendo = true;
  try {
    await navigator.serviceWorker.ready;
    const respuesta = await fetch(new URL(LISTA, document.baseURI), { cache: 'no-cache' });
    if (!respuesta.ok) return;
    const lista = await respuesta.json();
    const almacen = await caches.open(lista.recursos);
    const huellas = leer(CLAVE_HUELLAS, {});

    /* Lo que falta: archivos del sitio que cambiaron o no están, y direcciones externas no guardadas */
    const cola = [];
    const vistos = new Set();
    const meter = (url, hash, local, tamano) => {
      if (vistos.has(url)) return;
      vistos.add(url);
      cola.push({ url, hash, local, tamano });
    };
    for (const a of lista.archivos) {
      const url = new URL(a.ruta, document.baseURI).href;
      if (huellas[url] !== a.hash || !(await almacen.match(url))) meter(url, a.hash, true, a.tamano);
    }
    for (const u of lista.externos) {
      if (!(await almacen.match(u))) meter(u, null, false, 0);
    }
    const locales = cola.filter((x) => x.local);
    if (!cola.length) return;

    /* Con datos móviles se pregunta una vez antes de bajar todo */
    const bytes = locales.reduce((s, x) => s + (x.tamano || 0), 0);
    if (locales.length && red.type === 'cellular' && !permitirDatos && localStorage.getItem(CLAVE_DATOS_MOVILES) !== 'si') {
      mostrar(`Descargar JUMA para usar sin internet (≈ ${Math.round(bytes / 1e6)} MB). Estás con datos móviles.`, null, {
        texto: 'Descargar',
        onClick: () => { escribir(CLAVE_DATOS_MOVILES, 'si'); iniciar({ permitirDatos: true }); }
      });
      return;
    }

    let hechos = 0, fallosLocales = 0;
    const pintar = () => {
      if (locales.length) mostrar(`Preparando JUMA para usar sin internet… ${Math.floor(100 * hechos / vistos.size)} %`, 100 * hechos / vistos.size);
    };
    const trabajar = async () => {
      while (cola.length) {
        const it = cola.shift();
        try {
          const res = await traer(it.url);
          if (!res.ok && res.type !== 'opaque') throw new Error('HTTP ' + res.status);
          if (/gstatic\.com\/firebasejs\/.*\.js$|fonts\.googleapis\.com/.test(it.url)) {
            const texto = await res.clone().text();
            for (const u of importados(texto, it.url)) meter(u, null, false, 0);
          }
          await almacen.put(it.url, res);
          if (it.hash) { huellas[it.url] = it.hash; escribir(CLAVE_HUELLAS, huellas); }
        } catch (e) {
          if (it.local) fallosLocales++;
        }
        hechos++;
        pintar();
      }
    };
    pintar();
    await Promise.all(Array.from({ length: EN_PARALELO }, trabajar));

    if (locales.length) {
      if (fallosLocales === 0) {
        mostrar('✓ JUMA ya funciona sin internet', 100);
        ocultarEn(6000);
      } else {
        mostrar(`Faltan ${fallosLocales} archivos. Se volverán a intentar la próxima vez que abras JUMA con internet.`, null);
        ocultarEn(9000);
      }
    }
  } catch (e) {
    /* Sin conexión o sin el servicio: se intenta de nuevo en la próxima visita */
  } finally {
    estado.corriendo = false;
  }
}

window.addEventListener('load', () => setTimeout(() => iniciar(), 3000));
window.addEventListener('online', () => iniciar());
