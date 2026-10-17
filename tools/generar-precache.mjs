#!/usr/bin/env node
/* Genera precache.json: la lista de todo lo que el sitio descarga para usarse sin internet
   (páginas, juegos, fotos, videos, audio, libros y los módulos de Firebase).
   Uso, desde la carpeta del sitio:   node tools/generar-precache.mjs
   Hay que volver a ejecutarlo cada vez que cambie algún archivo, antes de publicar. */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative, extname, sep, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const EXTENSIONES = new Set(['.html', '.js', '.mjs', '.json', '.webmanifest', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.ico',
  '.mp4', '.webm', '.mp3', '.pdf', '.epub', '.woff', '.woff2', '.ttf']);
const CARPETAS_EXCLUIDAS = new Set(['tools', 'node_modules']);
/* Archivos de la raíz que no son parte de la página */
const ARCHIVOS_EXCLUIDOS = new Set(['sw.js', 'firebase-messaging-sw.js', 'firebase.json', 'firestore.indexes.json',
  'robots.txt', 'sitemap.xml', 'precache.json']);
/* Módulos de Firebase que carga js/app.js (la versión se toma de ahí) */
const MODULOS_FIREBASE = ['firebase-app.js', 'firebase-firestore.js', 'firebase-auth.js', 'firebase-messaging.js'];

const sha = (buf) => createHash('sha1').update(buf).digest('hex').slice(0, 12);

function caminar(dir, lista = []) {
  for (const nombre of readdirSync(dir).sort()) {
    if (nombre.startsWith('.')) continue;
    const ruta = join(dir, nombre);
    const st = statSync(ruta);
    if (st.isDirectory()) {
      if (!CARPETAS_EXCLUIDAS.has(nombre)) caminar(ruta, lista);
      continue;
    }
    const rel = relative(RAIZ, ruta).split(sep).join('/');
    if (ARCHIVOS_EXCLUIDOS.has(rel)) continue;
    if (!EXTENSIONES.has(extname(nombre).toLowerCase())) continue;
    lista.push({ ruta: rel, tamano: st.size, hash: sha(readFileSync(ruta)) });
  }
  return lista;
}

const archivos = caminar(RAIZ);

/* Versiones que usa el sitio: el caché de recursos y la versión de Firebase */
const swTexto = readFileSync(join(RAIZ, 'sw.js'), 'utf8');
const recursos = swTexto.match(/const RECURSOS = '([^']+)'/)[1];
const appTexto = readFileSync(join(RAIZ, 'js/app.js'), 'utf8');
const versionFirebase = appTexto.match(/const V = '([\d.]+)'/)[1];

/* Direcciones externas: fuentes de Google, imágenes de Wikimedia y los módulos de Firebase */
const externos = new Set(MODULOS_FIREBASE.map((m) => `https://www.gstatic.com/firebasejs/${versionFirebase}/${m}`));
for (const a of archivos) {
  if (!/\.(html|js|mjs|json)$/.test(a.ruta)) continue;
  const texto = readFileSync(join(RAIZ, a.ruta), 'utf8').replace(/&amp;/g, '&');
  for (const m of texto.matchAll(/https:\/\/(?:fonts\.googleapis\.com\/css2\?|upload\.wikimedia\.org\/|commons\.wikimedia\.org\/)[^"'\s<>`)\\]+/g)) {
    externos.add(m[0]);
  }
}

const version = sha(Buffer.from(archivos.map((a) => a.ruta + a.hash).join('|')));
const total = archivos.reduce((s, a) => s + a.tamano, 0);
const salida = { version, recursos, tamano: total, archivos, externos: [...externos] };
writeFileSync(join(RAIZ, 'precache.json'), JSON.stringify(salida, null, 1) + '\n');
console.log(`precache.json: ${archivos.length} archivos, ${(total / 1e6).toFixed(1)} MB, ${externos.size} direcciones externas, versión ${version}`);
