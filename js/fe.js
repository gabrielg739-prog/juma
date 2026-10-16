/* Vida de fe: hoy, oraciones, catequesis, rosario, rosario misionero, misa, colores litúrgicos. Mapa de la Consolata. */
const $ = (s, r = document) => r.querySelector(s);
const esc = (t) => String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const CM = (f, w = 640) => 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(f) + '?width=' + w;
const pic = (src, fb, alt) => `<img class="fe-img" loading="lazy" src="${esc(src)}" alt="${esc(alt)}" onerror="this.onerror=null;this.src='${fb}'">`;

/* ---------- calendario litúrgico (calculado en el teléfono, sin internet) ---------- */
const D = (y, m, d) => new Date(y, m, d);
const add = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const z = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const dif = (a, b) => Math.round((z(a) - z(b)) / 864e5);
const same = (a, b) => dif(a, b) === 0;
const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const MESL = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const fd = (d) => d.getDate() + ' ' + MES[d.getMonth()] + ' ' + d.getFullYear();
const R = (n) => { const v = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]; let s = ''; for (const [k, l] of v) while (n >= k) { s += l; n -= k; } return s; };
function pascua(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  return D(y, Math.floor((h + l - 7 * m + 114) / 31) - 1, ((h + l - 7 * m + 114) % 31) + 1);
}
function adviento(y) { const n = D(y, 11, 25); const s = add(n, -(n.getDay() || 7)); return add(s, -21); }
function bautismo(y) { const e = D(y, 0, 6); return add(e, (7 - e.getDay()) || 7); }
const COLORES = [
  { k: 'verde', hex: '#17824A', n: 'Verde', s: 'Esperanza y vida que crece. La Iglesia camina día a día con Jesús.', c: 'Tiempo Ordinario (la mayor parte del año).' },
  { k: 'morado', hex: '#5B2C83', n: 'Morado', s: 'Conversión, penitencia y espera.', c: 'Adviento y Cuaresma. También puede usarse en misas de difuntos.' },
  { k: 'blanco', hex: '#FFFFFF', n: 'Blanco', s: 'Alegría, pureza, luz y gloria de Dios.', c: 'Navidad, Pascua, fiestas del Señor, de la Virgen María y de santos que no fueron mártires. Jueves Santo.' },
  { k: 'rojo', hex: '#C8322D', n: 'Rojo', s: 'El fuego del Espíritu Santo y la sangre de los mártires.', c: 'Domingo de Ramos, Viernes Santo, Pentecostés, fiestas de apóstoles, evangelistas y mártires.' },
  { k: 'rosa', hex: '#E58AB3', n: 'Rosa', s: 'Alegría en medio de la espera: ¡ya falta poco!', c: 'III domingo de Adviento (Gaudete) y IV domingo de Cuaresma (Laetare).' },
  { k: 'dorado', hex: '#D4A72C', n: 'Dorado', s: 'Gran fiesta y solemnidad.', c: 'Puede reemplazar al blanco, al rojo o al verde en las celebraciones más solemnes.' },
  { k: 'negro', hex: '#1A1A1A', n: 'Negro', s: 'Luto y oración por los difuntos.', c: 'Se permite en misas de difuntos; hoy se usa poco.' }
];
const CK = Object.fromEntries(COLORES.map((c) => [c.k, c]));
const FIJAS = { '1-1': ['Santa María, Madre de Dios', 'blanco'], '1-6': ['Epifanía del Señor', 'blanco'], '2-16': ['San José Allamano, fundador (familia Consolata)', 'blanco'], '3-19': ['San José, esposo de la Virgen María', 'blanco'], '3-25': ['Anunciación del Señor', 'blanco'], '6-20': ['Nuestra Señora de la Consolata (familia Consolata)', 'blanco'], '6-29': ['San Pedro y San Pablo, apóstoles', 'rojo'], '8-15': ['Asunción de la Virgen María', 'blanco'], '10-1': ['Santa Teresita del Niño Jesús, patrona de las misiones', 'blanco'], '11-1': ['Todos los Santos', 'blanco'], '11-2': ['Fieles Difuntos', 'morado'], '12-8': ['Inmaculada Concepción de la Virgen María', 'blanco'], '12-12': ['Nuestra Señora de Guadalupe, patrona de América', 'blanco'] };
function liturgia(dt) {
  const d = z(dt || new Date()), y = d.getFullYear(), dow = d.getDay(), dn = DIAS[dow];
  const E = pascua(y), ash = add(E, -46), palm = add(E, -7), pent = add(E, 49), adv = adviento(y), nav = D(y, 11, 25), bap = bautismo(y);
  const start = d >= adv ? y : y - 1;
  const ciclo = 'ABC'[(((start - 2022) % 3) + 3) % 3], par = (start + 1) % 2 === 0 ? 'II' : 'I';
  let t = '', n = '', c = 'verde';
  if (d >= adv && d < nav) { t = 'Adviento'; c = 'morado'; const w = Math.floor(dif(d, adv) / 7) + 1; n = dow === 0 ? R(w) + ' Domingo de Adviento' : dn + ' de la ' + R(w) + ' semana de Adviento'; if (dow === 0 && w === 3) c = 'rosa'; }
  else if (d >= nav || d <= bap) { t = 'Navidad'; c = 'blanco'; n = same(d, nav) ? 'Natividad del Señor' : same(d, bap) ? 'Bautismo del Señor' : 'Tiempo de Navidad'; }
  else if (d < ash) { t = 'Tiempo Ordinario'; const w = Math.floor(dif(d, bap) / 7) + 1; n = dow === 0 ? R(w) + ' Domingo del Tiempo Ordinario' : dn + ' de la ' + R(w) + ' semana del Tiempo Ordinario'; }
  else if (d < palm) { t = 'Cuaresma'; c = 'morado'; const l1 = add(ash, 4); if (same(d, ash)) n = 'Miércoles de Ceniza'; else if (d < l1) n = dn + ' después de Ceniza'; else { const w = Math.floor(dif(d, l1) / 7) + 1; n = dow === 0 ? R(w) + ' Domingo de Cuaresma' : dn + ' de la ' + R(w) + ' semana de Cuaresma'; if (dow === 0 && w === 4) c = 'rosa'; } }
  else if (d < E) { t = 'Semana Santa'; const k = dif(d, palm); n = ['Domingo de Ramos de la Pasión del Señor', 'Lunes Santo', 'Martes Santo', 'Miércoles Santo', 'Jueves Santo · Misa de la Cena del Señor', 'Viernes Santo · Pasión del Señor', 'Sábado Santo · Vigilia Pascual en la noche'][k]; c = ['rojo', 'morado', 'morado', 'morado', 'blanco', 'rojo', 'blanco'][k]; }
  else if (d < pent) { t = 'Pascua'; c = 'blanco'; const k = dif(d, E), w = Math.floor(k / 7) + 1; n = k === 0 ? 'Domingo de Pascua de la Resurrección del Señor' : k < 7 ? dn + ' de la Octava de Pascua' : dow === 0 ? R(w) + ' Domingo de Pascua' : dn + ' de la ' + R(w) + ' semana de Pascua'; }
  else if (same(d, pent)) { t = 'Pascua'; c = 'rojo'; n = 'Domingo de Pentecostés'; }
  else { t = 'Tiempo Ordinario'; const w = 34 - Math.floor((dif(adv, d) - 1) / 7); n = dow === 0 ? R(w) + ' Domingo del Tiempo Ordinario' : dn + ' de la ' + R(w) + ' semana del Tiempo Ordinario'; if (same(d, add(adv, -7))) { n = 'Jesucristo, Rey del Universo'; c = 'blanco'; } if (same(d, add(pent, 7))) { n = 'Santísima Trinidad'; c = 'blanco'; } }
  const fx = FIJAS[(d.getMonth() + 1) + '-' + d.getDate()];
  let fiesta = '';
  if (fx && !(dow === 0 && /Adviento|Cuaresma|Pascua|Semana Santa/.test(t))) { fiesta = fx[0]; if (t !== 'Semana Santa') c = fx[1]; }
  const oct = D(y, 9, 31), domund = add(oct, -(oct.getDay()) - 7);
  if (same(d, domund)) fiesta = 'Domingo Mundial de las Misiones (DOMUND)';
  return { fecha: d, texto: DIAS[dow] + ' ' + d.getDate() + ' de ' + MESL[d.getMonth()] + ' de ' + y, tiempo: t, nombre: n, fiesta, color: CK[c], ciclo, par };
}
function calendario(dt) {
  const d = z(dt || new Date()); const y0 = d >= adviento(d.getFullYear()) ? d.getFullYear() : d.getFullYear() - 1, y1 = y0 + 1;
  const adv = adviento(y0), bap = bautismo(y1), E = pascua(y1), ash = add(E, -46), palm = add(E, -7), pent = add(E, 49), adv2 = adviento(y1);
  return [
    ['Adviento', adv, D(y0, 11, 24), 'morado', 'III domingo en rosa'], ['Navidad', D(y0, 11, 25), bap, 'blanco', 'Hasta el Bautismo del Señor'],
    ['Tiempo Ordinario (1.ª parte)', add(bap, 1), add(ash, -1), 'verde', ''], ['Cuaresma', ash, add(palm, -1), 'morado', 'Empieza el Miércoles de Ceniza; IV domingo en rosa'],
    ['Semana Santa', palm, add(E, -1), 'rojo', 'Ramos y Viernes Santo en rojo; Jueves Santo en blanco'], ['Pascua', E, pent, 'blanco', '50 días; Pentecostés en rojo'],
    ['Tiempo Ordinario (2.ª parte)', add(pent, 1), add(adv2, -1), 'verde', 'Termina con Cristo Rey (blanco)']
  ].map(([n, a, b, c, x]) => ({ n, a, b, c: CK[c], x, hoy: d >= a && d <= b }));
}

/* ---------- rosario ---------- */
const MISTERIOS = {
  gozosos: { n: 'Misterios gozosos', dias: 'lunes y sábado', l: ['La Encarnación del Hijo de Dios', 'La Visitación de María a su prima Isabel', 'El Nacimiento del Hijo de Dios en Belén', 'La Presentación de Jesús en el Templo', 'El Niño Jesús perdido y hallado en el Templo'] },
  luminosos: { n: 'Misterios luminosos', dias: 'jueves', l: ['El Bautismo de Jesús en el Jordán', 'Jesús en las bodas de Caná', 'El anuncio del Reino de Dios invitando a la conversión', 'La Transfiguración del Señor', 'La institución de la Eucaristía'] },
  dolorosos: { n: 'Misterios dolorosos', dias: 'martes y viernes', l: ['La oración de Jesús en el Huerto', 'La flagelación del Señor', 'La coronación de espinas', 'Jesús con la cruz a cuestas camino del Calvario', 'La crucifixión y muerte de Nuestro Señor'] },
  gloriosos: { n: 'Misterios gloriosos', dias: 'miércoles y domingo', l: ['La Resurrección del Hijo de Dios', 'La Ascensión del Señor al cielo', 'La venida del Espíritu Santo', 'La Asunción de la Virgen María al cielo', 'La Coronación de María como Reina del cielo y de la tierra'] }
};
const misteriosHoy = (dt) => MISTERIOS[['gloriosos', 'gozosos', 'dolorosos', 'gloriosos', 'luminosos', 'dolorosos', 'gozosos'][(dt || new Date()).getDay()]];
const PASOS = [
  ['Señal de la cruz', 'senal'], ['Credo de los Apóstoles', 'credo'], ['Padre Nuestro', 'padre'], ['Tres Avemarías: por la fe, la esperanza y la caridad', 'ave'], ['Gloria', 'gloria'],
  ['Para cada uno de los 5 misterios: se anuncia el misterio, 1 Padre Nuestro, 10 Avemarías, 1 Gloria y la jaculatoria «Oh Jesús mío»', 'fatima'],
  ['Al terminar: la Salve', 'salve'], ['Letanías a la Virgen (opcional)', 'letanias'], ['Oración final del rosario', 'final']
];
const MISIONERO = [
  ['verde', '#17824A', 'África', 'El verde de sus selvas y praderas.'], ['rojo', '#C8322D', 'América', 'El fuego de la fe que llegó con los primeros misioneros.'],
  ['blanco', '#FFFFFF', 'Europa', 'El blanco del Papa, pastor de toda la Iglesia.'], ['azul', '#2A5FE6', 'Oceanía', 'El mar azul que rodea sus islas.'], ['amarillo', '#F5C518', 'Asia', 'La luz del sol que nace en el oriente.']
];
function rosarioSVG() {
  const W = 300, H = 340, cx = 150, cy = 140, rx = 118, ry = 118; let s = '';
  const N = 55; let idx = 0;
  for (let dec = 0; dec < 5; dec++) {
    for (let b = 0; b < 11; b++) {
      const a = -Math.PI / 2 + Math.PI * 0.08 + (idx / N) * Math.PI * 1.84; idx++;
      const x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a), big = b === 0;
      s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${big ? 8 : 5.2}" fill="${big ? '#0C2D74' : MISIONERO[dec][1]}" stroke="#061536" stroke-width="1"/>`;
    }
  }
  const by = cy + ry + 14;
  s += `<circle cx="${cx}" cy="${by}" r="9" fill="#8EC9FF" stroke="#061536"/>`;
  [0, 1, 2].forEach((i) => { s += `<circle cx="${cx}" cy="${by + 22 + i * 15}" r="5.2" fill="#F6F9FE" stroke="#061536"/>`; });
  s += `<circle cx="${cx}" cy="${by + 72}" r="8" fill="#0C2D74" stroke="#061536"/>`;
  s += `<path d="M${cx} ${by + 86}v44M${cx - 13} ${by + 100}h26" stroke="#061536" stroke-width="6" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 ${W} ${H + 40}" role="img" aria-label="Rosario misionero con cinco decenas de colores">${s}</svg>`;
}

/* ---------- la misa (estructura y respuestas cortas del pueblo) ---------- */
const MISA = [
  ['Ritos iniciales', 'De pie', [['Canto de entrada', 'Mientras entra el sacerdote cantamos juntos.'], ['Saludo', 'Sacerdote: «El Señor esté con ustedes». Todos: «Y con tu espíritu».'], ['Acto penitencial', 'Pedimos perdón con el «Yo confieso» y respondemos «Señor, ten piedad / Cristo, ten piedad».'], ['Gloria', 'Himno de alabanza (no se canta en Adviento ni en Cuaresma).'], ['Oración colecta', 'Al final respondemos: «Amén».']]],
  ['Liturgia de la Palabra', 'Sentados (de pie para el Evangelio)', [['Primera lectura', 'Lector: «Palabra de Dios». Todos: «Te alabamos, Señor».'], ['Salmo responsorial', 'Repetimos la respuesta del salmo.'], ['Segunda lectura (domingos y fiestas)', 'Lector: «Palabra de Dios». Todos: «Te alabamos, Señor».'], ['Aclamación', 'Nos ponemos de pie y cantamos el Aleluya (en Cuaresma, otra aclamación).'], ['Evangelio', 'Sacerdote: «Lectura del santo Evangelio según san…». Todos: «Gloria a ti, Señor». Al final: «Palabra del Señor». Todos: «Gloria a ti, Señor Jesús».'], ['Homilía', 'Escuchamos la explicación de la Palabra.'], ['Credo', 'Profesamos la fe (domingos y solemnidades).'], ['Oración de los fieles', 'Pedimos por la Iglesia y el mundo. Respuesta común: «Te rogamos, óyenos».']]],
  ['Liturgia eucarística', 'Sentados, luego de pie y de rodillas en la consagración', [['Presentación de las ofrendas', 'Se lleva el pan y el vino al altar. Todos: «Bendito seas por siempre, Señor».'], ['Oración sobre las ofrendas', 'Al final: «Amén».'], ['Prefacio', 'Sacerdote: «Levantemos el corazón». Todos: «Lo tenemos levantado hacia el Señor». Sacerdote: «Demos gracias al Señor, nuestro Dios». Todos: «Es justo y necesario».'], ['Santo', 'Cantamos el «Santo, Santo, Santo».'], ['Consagración', 'Jesús se hace presente en el pan y el vino. Momento de máximo silencio y adoración.'], ['Aclamación', 'Sacerdote: «Este es el sacramento de nuestra fe». Todos responden la aclamación de la memoria.'], ['Doxología', 'Termina la plegaria y todos respondemos con fuerza: «Amén».']]],
  ['Rito de comunión', 'De pie', [['Padre Nuestro', 'Lo rezamos todos juntos.'], ['La paz', 'Sacerdote: «La paz del Señor esté siempre con ustedes». Todos: «Y con tu espíritu». Nos damos la paz.'], ['Cordero de Dios', 'Cantamos o rezamos el «Cordero de Dios».'], ['Comunión', 'Sacerdote: «Este es el Cordero de Dios…». Todos: «Señor, no soy digno de que entres en mi casa, pero una palabra tuya bastará para sanarme». Al recibir: «El Cuerpo de Cristo». Respondemos: «Amén».'], ['Oración después de la comunión', 'Al final: «Amén».']]],
  ['Ritos de conclusión', 'De pie', [['Bendición', 'Sacerdote: «La bendición de Dios todopoderoso…». Todos: «Amén».'], ['Despedida', 'Sacerdote: «Pueden ir en paz». Todos: «Demos gracias a Dios». ¡Y salimos a la misión!']]]
];
const CANTOS = [['Entrada', ['Vienen con alegría', 'Juntos como hermanos', 'Alrededor de tu mesa']], ['Ofertorio', ['Te presentamos el vino y el pan', 'Bendito seas, Señor']], ['Comunión', ['Pescador de hombres', 'Una espiga', 'Altísimo Señor']], ['Salida / a la Virgen', ['Santa María del Camino', 'Oh María, Madre mía']], ['Misioneros', ['Id y enseñad', 'Pescador de hombres']]];

/* ---------- oraciones (se cargan de oraciones.json, que se puede ampliar) ---------- */
let ORA = { oraciones: [], catequesis: [] };
const IMGS = {
  padre: [CM("Brooklyn Museum - The Lord's Prayer (Le Pater Noster) - James Tissot - overall.jpg"), 'img/new-lectura-palabra.jpg'],
  ave: [CM('Sassoferrato - Jungfrun i bön.jpg'), 'img/consolata.jpg'], credo: [CM('Angelsatmamre-trinity-rublev-1410.jpg'), 'img/liturgia.jpg'],
  angelus: [CM('Jean-François Millet (II) 001.jpg'), 'img/poster-virgen.jpg'], misa: [CM('Última Cena - Da Vinci 5.jpg', 960), 'img/liturgia.jpg'],
  senal: ['img/cruz.jpg', 'img/cruz.jpg'], gloria: ['img/new-danza-capilla.jpg', 'img/liturgia.jpg'], salve: ['img/consolata.jpg', 'img/poster-virgen.jpg'],
  confieso: ['img/capilla.jpg', 'img/capilla.jpg'], contricion: ['img/capilla.jpg', 'img/capilla.jpg'], angel: ['img/vitral.jpg', 'img/vitral.jpg'],
  espiritu: ['img/new-grupo-presbiterio.jpg', 'img/liturgia.jpg'], pureza: ['img/poster-virgen.jpg', 'img/consolata.jpg'], fatima: ['img/fatima.jpg', 'img/fatima.jpg'],
  alimentos: ['img/cena.jpg', 'img/cena.jpg'], final: ['img/consolata.jpg', 'img/consolata.jpg'], letanias: ['img/poster-virgen.jpg', 'img/consolata.jpg']
};
const oraTxt = (o) => (o.x || []).map((p) => `<p>${esc(p)}</p>`).join('') + (o.l ? `<ol class="fe-ol">${o.l.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>` : '');
const buscar = (id) => ORA.oraciones.concat(ORA.catequesis).find((o) => o.id === id);

/* ---------- estilos ---------- */
const css = `
.fe-tabs{display:flex;gap:8px;overflow-x:auto;padding:4px 2px 8px;margin-top:clamp(28px,4vw,44px);scrollbar-width:none}
.fe-tab{flex:0 0 auto;min-height:46px;padding:0 18px;border-radius:999px;border:2px solid #B9C8E4;background:#fff;color:var(--ink);font:800 15px var(--body);cursor:pointer;transition:background-color .16s,color .16s}
.fe-tab[aria-pressed="true"]{background:var(--navy);border-color:var(--navy);color:#fff}
.fe-panel{margin-top:18px;animation:feIn .32s cubic-bezier(.23,1,.32,1) both}
@keyframes feIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.fe-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));grid-auto-flow:dense;gap:16px}
.fe-card{background:#fff;border-radius:16px;box-shadow:var(--shadow);overflow:hidden;color:var(--ink)}
.fe-card[open]{grid-column:1 / -1}
.fe-card summary{list-style:none;cursor:pointer;display:block}
.fe-card summary::-webkit-details-marker{display:none}
.fe-card summary:focus-visible{outline:3px solid var(--royal);outline-offset:-3px}
.fe-img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--mist)}
.fe-card[open] .fe-img{aspect-ratio:21/9}
.fe-h{display:flex;align-items:center;gap:12px;padding:14px 16px}
.fe-h b{font:800 22px/1.05 var(--display);text-transform:uppercase;color:var(--cloth)}
.fe-h .pd-ic{margin-left:auto}
.fe-x{padding:0 clamp(16px,3vw,32px) 22px;font-size:17px;line-height:1.7;max-width:72ch}
.fe-x p{margin:0 0 12px}
.fe-ol{margin:0;padding-left:22px}.fe-ol li{margin:4px 0}
.fe-hoy{display:grid;grid-template-columns:auto minmax(0,1fr);gap:18px clamp(18px,3vw,32px);align-items:center;padding:clamp(18px,3vw,30px);background:#fff;border-radius:18px;box-shadow:var(--shadow);color:var(--ink)}
.fe-sw{width:clamp(84px,12vw,120px);aspect-ratio:1;border-radius:50%;border:3px solid #D3DEF0;box-shadow:inset 0 0 0 6px rgba(255,255,255,.35)}
.fe-hoy small{display:block;font-size:14px;font-weight:700;color:var(--muted)}
.fe-hoy h3{margin:6px 0 6px;font:800 clamp(26px,3.2vw,40px)/1 var(--display);text-transform:uppercase;color:var(--cloth)}
.fe-hoy p{margin:4px 0;font-size:16px;line-height:1.5}
.fe-btns{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
.fe-btn{display:inline-flex;align-items:center;min-height:46px;padding:0 18px;border-radius:999px;background:var(--royal);color:#fff;font-weight:800;font-size:15px;text-decoration:none}
.fe-btn.alt{background:#fff;color:var(--royal);border:2px solid var(--royal)}
.fe-two{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:22px;align-items:start;margin-top:18px}
.fe-box{background:#fff;border-radius:16px;box-shadow:var(--shadow);padding:clamp(18px,3vw,28px);color:var(--ink)}
.fe-box h3{margin:0 0 10px;font:800 24px/1 var(--display);text-transform:uppercase;color:var(--cloth)}
.fe-steps{margin:0;padding:0;list-style:none;counter-reset:s}
.fe-steps li{counter-increment:s;display:grid;grid-template-columns:34px 1fr;gap:10px;padding:10px 0;border-top:1px solid var(--line);font-size:16px;line-height:1.5}
.fe-steps li::before{content:counter(s);display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:#fff;font-weight:800;font-size:14px}
.fe-steps button{all:unset;cursor:pointer;color:var(--royal);font-weight:700;text-decoration:underline;text-underline-offset:3px}
.fe-mis{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:12px;margin-top:12px}
.fe-mis div{padding:14px;border-radius:12px;background:var(--mist)}
.fe-mis div.on{background:var(--navy);color:#fff}
.fe-mis b{display:block;margin-bottom:6px}
.fe-mis ol{margin:0;padding-left:20px;font-size:15px;line-height:1.45}
.fe-rm{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:22px;align-items:center}
.fe-rm svg{width:100%;max-width:300px;margin:0 auto;display:block}
.fe-dec{display:grid;grid-template-columns:22px 1fr;gap:12px;align-items:start;padding:12px 0;border-top:1px solid var(--line);font-size:16px;line-height:1.5}
.fe-dec i{width:22px;height:22px;border-radius:50%;border:2px solid #061536;margin-top:2px}
.fe-misa{display:grid;gap:14px}
.fe-misa section{background:#fff;border-radius:16px;box-shadow:var(--shadow);padding:clamp(16px,3vw,26px);color:var(--ink)}
.fe-misa h3{margin:0;font:800 24px/1 var(--display);text-transform:uppercase;color:var(--cloth)}
.fe-misa .pos{display:inline-block;margin:8px 0 6px;padding:4px 10px;border-radius:999px;background:var(--mist);font-size:13px;font-weight:800;color:var(--royal)}
.fe-misa dl{margin:0}.fe-misa dt{margin-top:10px;font-weight:800}.fe-misa dd{margin:2px 0 0;font-size:16px;line-height:1.55;color:var(--muted)}
.fe-col{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:14px}
.fe-col article{background:#fff;border-radius:16px;box-shadow:var(--shadow);overflow:hidden;color:var(--ink)}
.fe-col .band{height:56px;border-bottom:1px solid #D3DEF0}
.fe-col div.t{padding:14px 16px 18px}
.fe-col b{font:800 22px/1 var(--display);text-transform:uppercase}
.fe-col p{margin:8px 0 0;font-size:15px;line-height:1.5}
.fe-cal{margin-top:18px;background:#fff;border-radius:16px;box-shadow:var(--shadow);padding:8px clamp(14px,3vw,24px);color:var(--ink)}
.fe-cal div{display:grid;grid-template-columns:18px minmax(0,1fr) auto;gap:12px;align-items:center;padding:12px 0;border-top:1px solid var(--line);font-size:15px}
.fe-cal div:first-child{border-top:0}
.fe-cal div.on{font-weight:800}
.fe-cal i{width:16px;height:16px;border-radius:50%;border:1.5px solid #9DB3D6}
.fe-cal small{display:block;font-weight:400;color:var(--muted)}
.fe-note{margin:14px 0 0;font-size:14px;color:var(--muted)}
.tes-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:16px;margin-top:clamp(28px,4vw,44px)}
.tes{margin:0;background:#fff;border-radius:16px;box-shadow:var(--shadow);overflow:hidden;color:var(--ink)}
.tes img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}
.tes blockquote{margin:0;padding:18px 18px 8px;font-size:17px;line-height:1.6}
.tes figcaption{padding:0 18px 18px;font-size:14px;color:var(--muted)}
.mp-wrap{margin-top:clamp(24px,4vw,40px);display:grid;grid-template-columns:minmax(0,8fr) minmax(0,4fr);gap:20px;align-items:start}
.mp-map{position:relative;background:#0A1F4D;border-radius:18px;padding:10px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(142,201,255,.18)}
.mp-map svg{display:block;width:100%;height:auto;touch-action:manipulation}
.mp-map .po{fill:#1C3A78;stroke:#0A1F4D;stroke-width:.7;vector-effect:non-scaling-stroke}
.mp-map .pc{stroke:#0A1F4D;stroke-width:.8;cursor:pointer;transition:opacity .2s,filter .2s;vector-effect:non-scaling-stroke}
.mp-map .pc.af{fill:#17824A}.mp-map .pc.am{fill:#C8322D}.mp-map .pc.eu{fill:#FFFFFF}.mp-map .pc.as{fill:#F5C518}
.mp-map .pc:hover,.mp-map .pc:focus{opacity:.82;outline:none}
.mp-map .pc.sel{stroke:#8EC9FF;stroke-width:2.5;filter:drop-shadow(0 0 8px rgba(142,201,255,.55))}
.mp-map .pin .dot{fill:#8EC9FF;stroke:#fff;stroke-width:1.4}
.mp-map .pin.jm .dot{fill:#F5C518}
.mp-map .pin .pulse{fill:#8EC9FF;transform-box:fill-box;transform-origin:center;animation:mpPulse 2.2s cubic-bezier(.23,1,.32,1) infinite}
.mp-map .pin.jm .pulse{fill:#F5C518}
@keyframes mpPulse{from{opacity:.75;transform:scale(1)}to{opacity:0;transform:scale(2.8)}}
.mp-casa{cursor:pointer;text-decoration:none;outline:none}
.mp-casa .pin-drop{transform-box:fill-box;transform-origin:50% 100%;animation:mpPinIn .46s cubic-bezier(.23,1,.32,1) both;animation-delay:calc(var(--i,0) * 70ms + 260ms)}
@keyframes mpPinIn{from{opacity:0;transform:translateY(-10px) scale(.9)}to{opacity:1;transform:none}}
.mp-casa .pin-halo{fill:#F5C518;transform-box:fill-box;transform-origin:center;animation:mpHalo 2.4s cubic-bezier(.23,1,.32,1) infinite;animation-delay:calc(var(--i,0) * 70ms + 700ms);opacity:0}
@keyframes mpHalo{from{opacity:.55;transform:scale(.6)}to{opacity:0;transform:scale(2.4)}}
.mp-casa .pin-shadow{fill:rgba(0,0,0,.35)}
.mp-casa .pin-body{fill:#F5C518;stroke:#061536;stroke-width:1.1;transition:fill .16s ease}
.mp-casa.jm .pin-body{fill:#E5483F}
.mp-casa .pin-eye{fill:#061536}
.mp-casa.jm .pin-eye{fill:#fff}
.mp-casa .casa-lbl-bg{fill:rgba(6,21,54,.78);stroke:rgba(142,201,255,.35);stroke-width:.8}
.mp-casa .casa-lbl{fill:#FFFFFF;font:700 8.6px/1 var(--body);letter-spacing:.01em;user-select:none}
.mp-casa .pin-lbl{transition:opacity .16s ease}
.mp-casa.lbl-hover .pin-lbl{opacity:0}
.mp-casa:hover .pin-body,.mp-casa:focus-visible .pin-body{fill:#FFFFFF}
.mp-casa:hover .pin-lbl,.mp-casa:focus-visible .pin-lbl{opacity:1}
.mp-hud{position:absolute;inset:auto 12px 12px 12px;z-index:4;display:flex;justify-content:space-between;align-items:flex-end;gap:8px;pointer-events:none}
.mp-hud-badge{pointer-events:none;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;background:rgba(6,21,54,.7);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#EAF2FF;font:700 12px/1.2 var(--body);border:1px solid rgba(142,201,255,.25);opacity:0;transform:translateY(4px);transition:opacity .22s cubic-bezier(.23,1,.32,1),transform .22s cubic-bezier(.23,1,.32,1)}
.mp-hud-badge.on{opacity:1;transform:none}
.mp-hud-badge svg{width:13px;height:13px;color:#F5C518;flex:0 0 auto}
.mp-hud-btn{pointer-events:auto;width:36px;height:36px;display:grid;place-items:center;border:1px solid rgba(142,201,255,.35);border-radius:50%;background:rgba(6,21,54,.78);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#fff;cursor:pointer;padding:0;transition:transform .14s ease,background-color .15s,opacity .2s}
.mp-hud-btn svg{width:18px;height:18px}
.mp-hud-btn[hidden]{display:none}
@media (hover:hover) and (pointer:fine){.mp-hud-btn:hover{background:#2452C8}}
.mp-hud-btn:active{transform:scale(.94)}
.mp-pin-ic{display:inline-block;width:1em;height:1em;vertical-align:-.14em}
@media (prefers-reduced-motion:reduce){.mp-casa .pin-drop{animation:none}.mp-casa .pin-halo{animation:none;opacity:0}.mp-hud-badge{transition:none}}
.mp-info{background:#fff;color:var(--ink);border-radius:16px;padding:18px}
.mp-info h3{margin:0;font:800 26px/1 var(--display);text-transform:uppercase;color:var(--cloth)}
.mp-info p{margin:8px 0 0;font-size:15px;line-height:1.5}
.mp-casas-box{margin-top:14px;display:grid;gap:8px}
.mp-casas-title{font:800 14px/1.2 var(--body);text-transform:uppercase;letter-spacing:.04em;color:var(--royal);margin:4px 0 2px}
.mp-casa-card{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:10px;align-items:center;padding:10px 12px;border-radius:12px;background:var(--mist);border:1.5px solid #D3DEF0;text-decoration:none;color:var(--ink);transition:border-color .16s,background-color .16s,transform .12s}
.mp-casa-card:hover{border-color:var(--royal);background:#EAF2FF;transform:translateY(-1px)}
.mp-casa-card i{width:34px;height:34px;border-radius:10px;background:var(--cloth);color:#F5C518;display:grid;place-items:center;font-style:normal;font-size:17px}
.mp-casa-card b{display:block;font-size:14.5px;line-height:1.25;color:var(--cloth)}
.mp-casa-card small{display:block;font-size:12.5px;line-height:1.3;color:var(--muted);margin-top:2px}
.mp-casa-card span{padding:6px 10px;border-radius:999px;background:var(--royal);color:#fff;font-size:12px;font-weight:800;white-space:nowrap}
.mp-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:14px}
.mp-stats div{padding:12px;border-radius:12px;background:var(--mist)}
.mp-stats b{display:block;font:800 30px/1 var(--display);color:var(--cloth)}
.mp-stats span{font-size:13px;color:var(--muted)}
.mp-list{margin-top:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr));gap:14px}
.mp-list div{padding:14px;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14)}
.mp-list b{display:flex;align-items:center;gap:8px;font-size:16px;color:#fff}
.mp-list b i{width:14px;height:14px;border-radius:50%;border:1.5px solid #fff}
.mp-list ul{list-style:none;margin:10px 0 0;padding:0;display:grid;gap:4px}
.mp-list li button{all:unset;box-sizing:border-box;width:100%;display:flex;justify-content:space-between;gap:10px;padding:7px 10px;border-radius:9px;font-size:14.5px;line-height:1.3;color:#DCE7F8;cursor:pointer;transition:background-color .15s ease}
.mp-list li button span{font-variant-numeric:tabular-nums;color:#8EC9FF;font-weight:700}
.mp-list li button[aria-pressed="true"]{background:rgba(142,201,255,.22);color:#fff}
.mp-list li button:focus-visible{outline:2px solid #8EC9FF;outline-offset:1px}
@media (hover:hover) and (pointer:fine){.mp-list li button:hover{background:rgba(255,255,255,.1);color:#fff}}
.mp-year{display:flex;align-items:baseline;gap:10px;margin-top:12px!important;padding:12px 14px;border-radius:12px;background:var(--mist)}
.mp-year b{font:800 40px/1 var(--display);color:var(--cloth);font-variant-numeric:tabular-nums}
.mp-year span{font-size:14px;color:var(--muted)}
.mp-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px!important}
.mp-web{display:inline-flex;align-items:center;text-decoration:none;background:var(--cloth);color:#fff!important;border-color:var(--cloth)}
.mp-map .pc.mc{stroke:#fff;stroke-width:.9;stroke-dasharray:2 1.5;vector-effect:non-scaling-stroke}
/* ---------- videos ---------- */
.vclip{display:block;width:100%;height:100%;object-fit:cover;background:#0A1F4D}
.vover{position:absolute;inset:0;opacity:0;background:transparent;transition:opacity 1s ease;pointer-events:none}
.vover.on{opacity:1}
.vbtn{position:absolute;top:12px;right:12px;z-index:3;width:42px;height:42px;padding:0;border:0;border-radius:50%;background:rgba(6,21,54,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);cursor:pointer;display:grid;place-items:center;visibility:hidden;opacity:0;transition:opacity .2s ease,visibility .2s,transform .12s ease}
.vlive > .vbtn{visibility:visible;opacity:1}
.vbtn:active{transform:scale(.94)}
.vbtn:focus-visible{outline:2px solid #8EC9FF;outline-offset:2px}
.vbtn span{display:block;width:13px;height:15px;box-sizing:border-box;border-left:4px solid #fff;border-right:4px solid #fff}
.vbtn[aria-pressed="true"] span{width:0;height:0;border-right:0;border-left:13px solid #fff;border-top:8px solid transparent;border-bottom:8px solid transparent;margin-left:4px}
.vtag{position:absolute;left:14px;bottom:14px;z-index:2;padding:7px 13px;border-radius:999px;background:rgba(6,21,54,.62);color:#fff;font-size:13.5px;font-weight:700;opacity:0;transition:opacity .4s ease}
.vlive > .vtag{opacity:1}
.vive{background:var(--paper);overflow:hidden}
.vive-head{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:20px 64px;align-items:end}
.vive-head .h-display{color:var(--cloth)}
.reels{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,2.6vw,36px);max-width:1040px;margin:clamp(48px,6vw,84px) auto 0}
.reel{position:relative;margin:0;aspect-ratio:9/16;border-radius:22px;overflow:hidden;background:#0A1F4D;box-shadow:0 34px 60px -30px rgba(6,21,54,.6);will-change:transform}
.reel::before{content:"";position:absolute;top:0;left:22px;z-index:2;width:46px;height:6px;border-radius:0 0 4px 4px;background:var(--c2)}
.reel:nth-child(2)::before{background:var(--c3)}.reel:nth-child(3)::before{background:var(--c4)}
.reel figcaption{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:72px 18px 18px;background:linear-gradient(0deg,rgba(6,21,54,.9),rgba(6,21,54,0));color:#fff;pointer-events:none}
.reel figcaption b{display:block;font:800 clamp(26px,2.5vw,34px)/1 var(--display);text-transform:uppercase;letter-spacing:.01em}
.reel figcaption span{display:block;margin-top:6px;font-size:14.5px;line-height:1.35;color:#DCE7F8}
.vsticker{position:relative;display:block;width:clamp(150px,13vw,178px);margin:-56px 6px 0 auto;padding:8px 8px 0;background:#fff;border-radius:14px;box-shadow:0 26px 50px -18px rgba(0,0,0,.6);transform:rotate(4deg);transition:transform .35s cubic-bezier(.23,1,.32,1)}
.vsticker .vclip{height:auto;aspect-ratio:9/16;border-radius:9px}
.vsticker .vbtn{top:16px;right:16px;width:36px;height:36px}
.vsticker figcaption{padding:9px 4px 11px;font-size:13.5px;font-weight:700;line-height:1.25;color:var(--ink);text-align:center}
@media (hover:hover) and (pointer:fine){.vsticker:hover{transform:rotate(1deg) scale(1.03)}}
.vbg{z-index:0}
@media (max-width:860px){.vsticker{width:min(62%,232px);margin:30px auto 0;transform:rotate(-3deg)}}
@media (max-width:760px){
.vive-head{grid-template-columns:minmax(0,1fr)}
.reels{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;overscroll-behavior-x:contain;scrollbar-width:none;margin-left:calc(-1 * clamp(16px,4vw,40px));margin-right:calc(-1 * clamp(16px,4vw,40px));padding:0 clamp(16px,4vw,40px) 6px;scroll-padding:0 clamp(16px,4vw,40px)}
.reels::-webkit-scrollbar{display:none}
.reel{flex:0 0 76%;scroll-snap-align:center}
}
@media (prefers-reduced-motion:reduce){.vover{transition:none}.reel{will-change:auto}}
.vsnd{position:absolute;top:12px;left:12px;z-index:3;display:inline-flex;align-items:center;gap:7px;height:42px;padding:0 14px 0 11px;border:0;border-radius:999px;background:rgba(6,21,54,.6);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#fff;font:700 13.5px/1 var(--body);cursor:pointer;visibility:hidden;opacity:0;transition:opacity .2s ease,visibility .2s,background-color .2s ease,transform .12s ease}
.vlive > .vsnd{visibility:visible;opacity:1}
.vsnd:active{transform:scale(.95)}
.vsnd:focus-visible{outline:2px solid #8EC9FF;outline-offset:2px}
.vsnd svg{width:20px;height:20px;flex:0 0 auto;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.vsnd svg .spk{fill:#fff}
.vsnd .w{display:none}
.vsnd[aria-pressed="true"]{background:rgba(36,82,200,.88)}
.vsnd[aria-pressed="true"] .w{display:inline}
.vsnd[aria-pressed="true"] .x{display:none}
.reel::before{left:auto;right:64px}
.vsticker .vsnd{top:16px;left:16px;height:36px;padding:0 9px}
.vsticker .vsnd span{display:none}
.closing > .vsnd{top:auto;bottom:16px;left:auto;right:66px}
.closing > .vbtn{top:auto;bottom:16px;right:16px}
.hero-chips{gap:8px;margin-top:0}
.hero-at{margin:26px 0 10px;color:#BFD3F2;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.hero-at span{display:none;font-weight:400;letter-spacing:0;text-transform:none}
.hero-chips a{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 15px;border-radius:999px;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.16);color:#fff;font-size:14px;font-weight:700;text-decoration:none;transition:background-color .18s ease,transform .12s ease}
.hero-chips a::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--dot);box-shadow:0 0 0 2px rgba(255,255,255,.18)}
.hero-chips a:active{transform:scale(.97)}
.hero-chips a:focus-visible{outline:2px solid #8EC9FF;outline-offset:2px}
@media (hover:hover) and (pointer:fine){.hero-chips a:hover{background:rgba(255,255,255,.26)}}
.atbar{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;gap:12px;height:calc(60px + env(safe-area-inset-top));padding:env(safe-area-inset-top) 16px 0 14px;background:rgba(255,255,255,.95);-webkit-backdrop-filter:saturate(1.4) blur(12px);backdrop-filter:saturate(1.4) blur(12px);border-bottom:1px solid var(--line);box-shadow:0 12px 28px -20px rgba(6,21,54,.45);transform:translateY(-110%);visibility:hidden;transition:transform .3s cubic-bezier(.23,1,.32,1),visibility .3s;font-family:var(--body)}
.atbar.on{transform:none;visibility:visible}
.atbar-logo{flex:0 0 auto;display:block}
.atbar-logo img{display:block;width:46px;height:38px;object-fit:contain}
.atbar-rail{flex:1 1 auto;min-width:0;display:flex;gap:4px;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;padding:0 18px 0 4px;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 10px,#000 calc(100% - 30px),transparent);mask-image:linear-gradient(90deg,transparent 0,#000 10px,#000 calc(100% - 30px),transparent)}
.atbar-rail::-webkit-scrollbar{display:none}
.atbar-rail a{flex:0 0 auto;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 14px;border-radius:999px;color:var(--ink);font-size:14.5px;font-weight:700;text-decoration:none;white-space:nowrap;transition:background-color .18s ease,color .18s ease}
.atbar-rail a::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--dot)}
.atbar-rail a.on{background:var(--cloth);color:#fff}
.atbar-rail a:focus-visible{outline:2px solid var(--royal);outline-offset:-2px}
@media (hover:hover) and (pointer:fine){.atbar-rail a:not(.on):hover{background:var(--mist)}}
.atbar-cta{flex:0 0 auto}
section[id]{scroll-margin-top:72px}
@media (max-width:760px){
.atbar{height:calc(54px + env(safe-area-inset-top));gap:4px;padding-left:6px;padding-right:0}
.atbar-logo img{width:38px;height:32px}
.atbar-cta{display:none}
.atbar-rail a{min-height:38px;padding:0 12px;font-size:14px}
.hero-chips a{min-height:38px;padding:0 13px;font-size:13.5px}
.hero-at span{display:inline}
.hero-chips{display:grid;grid-auto-flow:column;grid-template-rows:repeat(2,auto);grid-auto-columns:max-content;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;padding:0 40px 4px 0;-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 40px),transparent)}
.hero-chips::-webkit-scrollbar{display:none}
section[id]{scroll-margin-top:62px}
}
@media (prefers-reduced-motion:reduce){.atbar{transition:none}}
.net-off{position:fixed;top:calc(70px + env(safe-area-inset-top));left:50%;z-index:80;max-width:calc(100vw - 32px);padding:10px 18px;border-radius:999px;background:#0A1F4D;color:#fff;font-family:var(--body);font-size:14px;line-height:1.3;white-space:nowrap;box-shadow:0 12px 30px -10px rgba(6,21,54,.6);border:1px solid rgba(142,201,255,.45);transform:translate(-50%,-160%);opacity:0;transition:transform .28s cubic-bezier(.23,1,.32,1),opacity .2s ease;pointer-events:none;text-align:center}
.net-off b{color:#F5C518}
.net-off.on{transform:translate(-50%,0);opacity:1}
@media (prefers-reduced-motion:reduce){.net-off{transition:opacity .2s ease;transform:translate(-50%,0)}}
.mp-map .pc.sel.sel{stroke:#8EC9FF;stroke-width:2;stroke-dasharray:none}
@media (max-width:860px){.fe-two,.fe-rm,.mp-wrap{grid-template-columns:minmax(0,1fr)}}
@media (prefers-reduced-motion:reduce){.fe-panel{animation:none}.mp-map .pin .pulse{animation:none;opacity:0}}
`;

/* ---------- vistas ---------- */
const TABS = [['hoy', 'Hoy'], ['ora', 'Oraciones'], ['cat', 'Catequesis'], ['ros', 'Rosario'], ['rmi', 'Rosario misionero'], ['misa', 'La Misa'], ['col', 'Colores litúrgicos']];
let tab = 'hoy';
function vHoy() {
  const L = liturgia(new Date()), m = misteriosHoy(new Date());
  return `<div class="fe-hoy" style="border-left:10px solid ${L.color.hex === '#FFFFFF' ? '#D3DEF0' : L.color.hex}"><div class="fe-sw" style="background:${L.color.hex}" role="img" aria-label="Color litúrgico: ${esc(L.color.n)}"></div><div><small>${esc(L.texto)}</small><h3>${esc(L.fiesta || L.nombre)}</h3>${L.fiesta ? `<p>${esc(L.nombre)}</p>` : ''}<p><b>Tiempo:</b> ${esc(L.tiempo)} · <b>Color:</b> ${esc(L.color.n)} · <b>Ciclo dominical:</b> ${L.ciclo} · <b>Año:</b> ${L.par}</p><p><b>Rosario de hoy:</b> ${esc(m.n)}</p>
<div class="fe-btns"><a class="fe-btn" href="https://www.vaticannews.va/es/evangelio-de-hoy.html" target="_blank" rel="noopener">Lecturas y Evangelio de hoy</a><a class="fe-btn alt" href="https://evangeliodeldia.org/" target="_blank" rel="noopener">Evangelio y reflexión del día</a></div></div></div>
<p class="fe-note">El día litúrgico y su color se calculan solos cada día. Las lecturas, el Evangelio y la reflexión se abren en sitios oficiales de la Iglesia. Algunas fiestas propias de cada país o diócesis pueden variar.</p>`;
}
function card(o, img) {
  const im = img || IMGS[o.id] || ['img/liturgia.jpg', 'img/liturgia.jpg'];
  return `<details class="fe-card" id="ora-${esc(o.id)}"><summary>${pic(im[0], im[1], o.t)}<div class="fe-h"><b>${esc(o.t)}</b><i class="pd-ic" aria-hidden="true"></i></div></summary><div class="fe-x">${oraTxt(o)}</div></details>`;
}
const vOra = () => ORA.oraciones.length ? `<div class="fe-grid">${ORA.oraciones.map((o) => card(o)).join('')}</div><p class="fe-note">Toca una oración para leerla completa. Imágenes: obras de arte de dominio público (Wikimedia Commons) y fotos de JUMA.</p>` : '<p class="fe-note">Cargando oraciones…</p>';
const vCat = () => ORA.catequesis.length ? `<div class="fe-grid">${ORA.catequesis.map((o) => card(o, IMGS[o.id] || ['img/formacion.jpg', 'img/formacion.jpg'])).join('')}</div>` : '<p class="fe-note">Cargando…</p>';
function vRos() {
  const hoy = misteriosHoy(new Date());
  const pasos = PASOS.map(([t, id]) => `<li><span>${esc(t)}${buscar(id) ? ` · <button type="button" data-ver="${id}">ver oración</button>` : ''}</span></li>`).join('');
  const mis = Object.values(MISTERIOS).map((m) => `<div class="${m === hoy ? 'on' : ''}"><b>${esc(m.n)}${m === hoy ? ' · HOY' : ''}</b><small>${esc(m.dias)}</small><ol>${m.l.map((x) => `<li>${esc(x)}</li>`).join('')}</ol></div>`).join('');
  return `<div class="fe-two"><div class="fe-box"><h3>Cómo rezar el rosario</h3><ol class="fe-steps">${pasos}</ol></div><div class="fe-box"><h3>Los misterios</h3><p style="margin:0;font-size:15px;color:var(--muted)">Hoy se rezan los <b>${esc(hoy.n.toLowerCase())}</b>.</p><div class="fe-mis">${mis}</div></div></div><div id="fe-ver"></div>`;
}
function vRmi() {
  return `<div class="fe-box fe-rm"><div>${rosarioSVG()}</div><div><h3>El rosario misionero</h3><p style="margin:0 0 6px;font-size:16px;line-height:1.6">Se reza igual que el rosario de siempre, pero cada decena tiene un color y se ofrece por un continente. Fue promovido por el venerable Fulton J. Sheen para rezar por las misiones del mundo entero. ¡Son los mismos colores de los cinco años de formación de JUMA!</p>${MISIONERO.map(([, hex, cont, sig], i) => `<div class="fe-dec"><i style="background:${hex}"></i><div><b>${i + 1}.ª decena · ${cont}</b><br>${esc(sig)} Rezamos por los pueblos de ${cont}, sus misioneros y sus jóvenes.</div></div>`).join('')}</div></div>`;
}
function vMisa() {
  const im = IMGS.misa;
  return `<div class="fe-card" style="margin-bottom:14px">${pic(im[0], im[1], 'La Última Cena, de Leonardo da Vinci')}<div class="fe-x" style="padding-top:16px"><p><b>La misa es el encuentro más importante de la semana:</b> Jesús nos habla en su Palabra y se nos da en la Eucaristía. Aquí tienes cada parte y lo que respondemos.</p></div></div><div class="fe-misa">${MISA.map(([t, pos, items]) => `<section><h3>${esc(t)}</h3><span class="pos">${esc(pos)}</span><dl>${items.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${esc(b)}</dd>`).join('')}</dl></section>`).join('')}</div>
<div class="fe-box" style="margin-top:14px"><h3>Cantos para la misa</h3><p style="margin:0 0 8px;font-size:15px;color:var(--muted)">Algunos cantos conocidos para cada momento. Pregúntale al coro de JUMA cuáles se cantan este domingo.</p>${CANTOS.map(([m, l]) => `<p style="margin:6px 0;font-size:16px"><b>${esc(m)}:</b> ${l.map(esc).join(' · ')}</p>`).join('')}</div>`;
}
function vCol() {
  const cal = calendario(new Date());
  return `<div class="fe-col">${COLORES.map((c) => `<article><div class="band" style="background:${c.hex}"></div><div class="t"><b>${esc(c.n)}</b><p><b>Significa:</b> ${esc(c.s)}</p><p><b>Cuándo se usa:</b> ${esc(c.c)}</p></div></article>`).join('')}</div>
<div class="fe-cal"><h3 style="margin:14px 0 6px;font:800 24px/1 var(--display);text-transform:uppercase;color:var(--cloth)">Calendario de este año litúrgico</h3>${cal.map((r) => `<div class="${r.hoy ? 'on' : ''}"><i style="background:${r.c.hex}"></i><span>${esc(r.n)}${r.hoy ? ' · ahora' : ''}${r.x ? `<small>${esc(r.x)}</small>` : ''}</span><span>${fd(r.a)} – ${fd(r.b)}</span></div>`).join('')}</div>`;
}
const VIEWS = { hoy: vHoy, ora: vOra, cat: vCat, ros: vRos, rmi: vRmi, misa: vMisa, col: vCol };
function render() {
  const app = $('#fe-app'); if (!app) return;
  app.innerHTML = `<div class="fe-tabs" role="group" aria-label="Vida de fe">${TABS.map(([k, t]) => `<button type="button" class="fe-tab" data-fe="${k}" aria-pressed="${k === tab}">${t}</button>`).join('')}</div><div class="fe-panel">${VIEWS[tab]()}</div>`;
}

/* ---------- mapa ---------- */
const CONT = { af: ['África', '#17824A'], am: ['América', '#C8322D'], eu: ['Europa', '#FFFFFF'], as: ['Asia', '#F5C518'] };
/* q: 'imc' = Misioneros de la Consolata · 'mc' = solo Misioneras de la Consolata. y: año de llegada (0 = por confirmar).
   w: página web · t: tipo de página (p = del país, r = de la región, g = general, d = diócesis local, m = Misioneras) */
const CAF = 'https://consolataafrica.org/en/tag/', CAM = 'https://www.consolataamerica.org/es/', MCW = 'https://www.missionariedellaconsolata.org/';
const PAISES = {
  ke: { n: 'Kenia', c: 'af', y: 1902, w: CAF + 'kenya/', t: 'r', x: 'Aquí nació la misión: Kenia fue el primer país al que san José Allamano envió a sus misioneros.' },
  et: { n: 'Etiopía', c: 'af', y: 1913, w: CAF + 'ethiopia/', t: 'r' },
  tz: { n: 'Tanzania', c: 'af', y: 1919, w: CAF + 'tanzania/', t: 'r' },
  mz: { n: 'Mozambique', c: 'af', y: 1925, w: CAF + 'mozambique/', t: 'r' },
  za: { n: 'Sudáfrica', c: 'af', y: 1948, w: CAF + 'south-africa/', t: 'r', x: 'La misión estable comenzó en 1971, en Volksrust.' },
  cd: { n: 'R. D. del Congo', c: 'af', y: 1972, w: CAF + 'drc-congo/', t: 'r' },
  ug: { n: 'Uganda', c: 'af', y: 1985, w: CAF + 'uganda/', t: 'r' },
  ci: { n: 'Costa de Marfil', c: 'af', y: 1995, w: CAF + 'ivory-coast/', t: 'r' },
  dj: { n: 'Yibuti', c: 'af', y: 2004, w: 'https://consolataafrica.org/en/', t: 'r' },
  sz: { n: 'Esuatini', c: 'af', y: 2012, w: 'https://dioceseofmanzini.org/consolata-missionaries', t: 'd', x: 'Antes se llamaba Suazilandia.' },
  ao: { n: 'Angola', c: 'af', y: 2014, w: CAF + 'angola/', t: 'r' },
  mg: { n: 'Madagascar', c: 'af', y: 2018, w: CAF + 'madagascar/', t: 'r', x: 'La misión se abrió en 2018 y el primer grupo de misioneros llegó en 2019.' },
  lr: { n: 'Liberia', c: 'af', y: 0, q: 'mc', w: MCW, t: 'm' },
  gw: { n: 'Guinea-Bisáu', c: 'af', y: 0, q: 'mc', w: MCW, t: 'm' },
  br: { n: 'Brasil', c: 'am', y: 1937, w: 'https://www.consolata.org.br/', t: 'p', x: 'Fue el primer país de América donde llegaron los misioneros.' },
  ar: { n: 'Argentina', c: 'am', y: 1946, w: CAM, t: 'r' },
  us: { n: 'Estados Unidos', c: 'am', y: 1946, w: 'https://www.consolata.us/', t: 'p' },
  co: { n: 'Colombia', c: 'am', y: 1947, w: CAM, t: 'r' },
  ca: { n: 'Canadá', c: 'am', y: 1947, w: 'https://www.consolata.qc.ca/', t: 'p' },
  ve: { n: 'Venezuela', c: 'am', y: 1971, w: CAM, t: 'r', x: '¡Aquí estamos nosotros! JUMA Duaca es parte de esta familia misionera.' },
  ec: { n: 'Ecuador', c: 'am', y: 1987, w: CAM, t: 'r' },
  mx: { n: 'México', c: 'am', y: 2008, w: CAM, t: 'r' },
  pe: { n: 'Perú', c: 'am', y: 2011, w: CAM, t: 'r' },
  bo: { n: 'Bolivia', c: 'am', y: 1991, q: 'mc', w: CAM + 'misioneras-de-la-consolata-en-bolivia-consuelen-a-mi-pueblo-is40/', t: 'm', x: 'Las Misioneras llegaron a Poopó, en la diócesis de Oruro.' },
  it: { n: 'Italia', c: 'eu', y: 1901, w: 'https://www.consolata.org/', t: 'g', x: 'San José Allamano fundó el Instituto en Turín. La casa general está en Roma.' },
  gb: { n: 'Reino Unido', c: 'eu', y: 1936, w: 'https://www.consolata.org/', t: 'g' },
  pt: { n: 'Portugal', c: 'eu', y: 1943, w: 'https://www.consolata.pt/', t: 'p' },
  es: { n: 'España', c: 'eu', y: 1955, w: 'https://www.antenamisionera.org/', t: 'p' },
  pl: { n: 'Polonia', c: 'eu', y: 2008, w: 'https://www.consolata.pl/', t: 'p' },
  kr: { n: 'Corea del Sur', c: 'as', y: 1988, w: 'http://www.consolata.or.kr/', t: 'p' },
  mn: { n: 'Mongolia', c: 'as', y: 2003, w: 'http://www.consolatamissionmongolia.net/it/', t: 'p' },
  tw: { n: 'Taiwán', c: 'as', y: 2014, w: 'https://taiwan.consolata.org/', t: 'p' },
  kz: { n: 'Kazajistán', c: 'as', y: 2020, q: 'mc', w: MCW + 'presenza-e-appartenenza-4-anni-in-kazakistan/', t: 'm' },
  kg: { n: 'Kirguistán', c: 'as', y: 2020, q: 'mc', w: MCW + '2019/12/13/kirghizistan-santuario-alpino-in-asia/', t: 'm' }
};
const CASAS = {
  ve: [
    { n: 'Juventud Misionera Allamaniana de Duaca (JUMA Duaca)', l: 'JUMA Duaca', d: 'Hacen vida en esta parroquia · Parroquia San Juan Bautista de Duaca (Calle 7 entre Carreras 5 y 6, frente a la Plaza Bolívar, Duaca, Estado Lara)', lat: 10.2869, lon: -69.1614, q: 'Iglesia+San+Juan+Bautista+Duaca+Lara+Venezuela', jm: true },
    { n: 'Centro de Animación Misionera (CAM) «La Consolata» · Barquisimeto', l: 'CAM Barquisimeto', d: 'Carrera 17 entre Calles 48 y 49, N.º 48-53, Urb. Santa Inés, Barquisimeto, Estado Lara', lat: 10.0638, lon: -69.3422, q: 'Carrera+17+Con+Calle+48+Barquisimeto+Lara+Venezuela' },
    { n: 'Casa de los Misioneros de la Consolata · Caracas', l: 'Misioneros IMC (Caracas)', d: 'Sede Delegación IMC · Av. Miranda, Quinta Ingrid Consolata, Urb. Washington, El Paraíso (y Parroquia San Joaquín y Santa Ana de Carapita), Caracas', lat: 10.4848, lon: -66.9365, q: 'Urbanizacion+Washington+El+Paraiso+Caracas+Venezuela' },
    { n: 'Casa de las Hermanas Misioneras de la Consolata · Caracas', l: 'Hermanas MC (Caracas)', d: 'Quinta Milagros, Calle 8, Urb. Las Fuentes, El Paraíso (y comunidad de Carapita / Los Manguitos), Caracas', lat: 10.4815, lon: -66.9422, q: 'Calle+8+Urbanizacion+Las+Fuentes+El+Paraiso+Caracas+Venezuela' },
    { n: 'Casa de los Misioneros de la Consolata · Tucupita', l: 'Casa Tucupita', d: 'Vicariato Apostólico de Tucupita (Calle Mariño con Av. Arismendi, sector Catedral Divina Pastora), Tucupita, Estado Delta Amacuro', lat: 9.0581, lon: -62.0510, q: 'Catedral+Divina+Pastora+Tucupita+Delta+Amacuro+Venezuela' },
    { n: 'Casa de la Misión Indígena Warao · Nabasanuka', l: 'Misión Nabasanuka', d: 'Comunidad Indígena de Nabasanuka, Parroquia Manuel Renaud, Municipio Antonio Díaz (Caños del Delta del Orinoco), Estado Delta Amacuro', lat: 9.1467, lon: -61.0664, q: 'Nabasanuka+Delta+Amacuro+Venezuela' },
    { n: 'Casa y Misión Consolata en Barlovento', l: 'Misión Barlovento', d: 'Parroquias de Caucagua, Tapipa, Panaquire y El Clavo, Diócesis de Guarenas, Estado Miranda', lat: 10.2831, lon: -66.3769, q: 'Iglesia+de+Caucagua+Miranda+Venezuela' }
  ],
  co: [
    { n: 'Casa Regional y CAM Misioneros de la Consolata · Bogotá', l: 'Casa Regional Bogotá', d: 'Calle 24A # 81-14, Barrio Modelia, Bogotá D.C.', lat: 4.6685, lon: -74.1225, q: 'Calle+24A+81-14+Modelia+Bogota+Colombia' },
    { n: 'Casa Regional Hermanas Misioneras de la Consolata · Bogotá', l: 'Hermanas MC Bogotá', d: 'Calle 170 # 8G-31, Bogotá D.C.', lat: 4.7482, lon: -74.0298, q: 'Calle+170+8G-31+Bogota+Colombia' },
    { n: 'Parroquia Ntra. Sra. de la Consolata y Casa IMC · Bucaramanga', l: 'Bucaramanga', d: 'Calle 61 # 2W-13 / Cra. 8W # 56-42, Barrio Mutis, Bucaramanga, Santander', lat: 7.1039, lon: -73.1336, q: 'Parroquia+Nuestra+Senora+de+la+Consolata+Mutis+Bucaramanga' },
    { n: 'Centro de Animación Misionera Consolata · Medellín', l: 'Medellín', d: 'Calle 45 (Av. 33) # 22A-67, Medellín, Antioquia', lat: 6.2386, lon: -75.5542, q: 'Calle+45+22A-67+Medellin+Colombia' },
    { n: 'Casa San José y Santuario de Fátima · Manizales', l: 'Manizales', d: 'Calle 65 # 32-04, Barrio Fátima, Manizales, Caldas', lat: 5.0553, lon: -75.4908, q: 'Calle+65+32-04+Manizales+Colombia' },
    { n: 'Centro de Animación y Pastoral Afro · Cali', l: 'Cali', d: 'Carrera 39D # 39-40, Cali, Valle del Cauca', lat: 3.4158, lon: -76.5082, q: 'Carrera+39D+39-40+Cali+Colombia' },
    { n: 'Misión Consolata y Colegio Migani · Florencia', l: 'Florencia (Caquetá)', d: 'Calle 14 con Carrera 16, Arquidiócesis de Florencia, Caquetá', lat: 1.6144, lon: -75.6062, q: 'Catedral+Nuestra+Senora+de+Lourdes+Florencia+Caqueta' }
  ],
  br: [
    { n: 'Casa Regional Instituto Missões Consolata · São Paulo', l: 'Sede São Paulo', d: 'Rua Dom Domingos de Silos 110, Jardim São Bento, CEP 02526-030, São Paulo - SP', lat: -23.4958, lon: -46.6433, q: 'Rua+Dom+Domingos+de+Silos+110+Sao+Paulo+Brasil' },
    { n: 'Paróquia Nossa Senhora Consolata · São Paulo', l: 'Paróquia SP', d: 'Rua Leão XIII 303, Jardim São Bento, CEP 02526-000, São Paulo - SP', lat: -23.4991, lon: -46.6456, q: 'Rua+Leao+XIII+303+Jardim+Sao+Bento+Sao+Paulo' },
    { n: 'Paróquia Nossa Senhora Consolata · Brasília', l: 'Brasília', d: 'SGAN 913, Módulo C (W5 Norte), Asa Norte, CEP 70790-130, Brasília - DF', lat: -15.7412, lon: -47.9056, q: 'Paroquia+Nossa+Senhora+Consolata+Asa+Norte+Brasilia' },
    { n: 'Paróquia Nossa Senhora da Consolata y Misión · Boa Vista', l: 'Boa Vista (Roraima)', d: 'Rua Uraricoera 671, Bairro São Vicente, CEP 69303-453, Boa Vista - RR', lat: 2.8118, lon: -60.6725, q: 'Rua+Uraricoera+671+Sao+Vicente+Boa+Vista+Roraima' },
    { n: 'Misión Indígena Yanomami · Catrimani (Roraima)', l: 'Misión Catrimani', d: 'Río Catrimani, Municipio de Caracaraí, Diócesis de Roraima', lat: 1.7667, lon: -62.2833, q: 'Caracarai+Roraima+Brasil' },
    { n: 'Paróquia Nossa Senhora Consolata · Cascavel', l: 'Cascavel (Paraná)', d: 'Rua Gláuber Rocha 979, Bairro Brasília, CEP 85815-230, Cascavel - PR', lat: -24.9389, lon: -53.4317, q: 'Rua+Glauber+Rocha+979+Cascavel+Parana+Brasil' },
    { n: 'Comunidad Misioneros de la Consolata · Feira de Santana', l: 'Feira de Santana', d: 'Arquidiócesis de Feira de Santana, Bahía', lat: -12.2664, lon: -38.9663, q: 'Missionarios+da+Consolata+Feira+de+Santana+Bahia' }
  ],
  ar: [
    { n: 'Casa Regional Misioneros de la Consolata · Buenos Aires', l: 'Casa Regional Bs.As.', d: 'José Bonifacio 1774, C1406 Flores, Ciudad Autónoma de Buenos Aires', lat: -34.6331, lon: -58.4547, q: 'Jose+Bonifacio+1774+Buenos+Aires+Argentina' },
    { n: 'Casa Misionera Martín Coronado', l: 'Martín Coronado', d: 'Juan XXIII 845, B1683DEP Martín Coronado, Provincia de Buenos Aires', lat: -34.5881, lon: -58.5914, q: 'Juan+XXIII+845+Martin+Coronado+Buenos+Aires+Argentina' },
    { n: 'Comunidad y Parroquia Consolata · San Francisco (Córdoba)', l: 'San Francisco (Córdoba)', d: 'San Francisco, Provincia de Córdoba, Argentina', lat: -31.4280, lon: -62.0827, q: 'Parroquia+Nuestra+Senora+de+la+Consolata+San+Francisco+Cordoba' },
    { n: 'Misión Consolata · Parroquia Ntra. Sra. de Andacollo (San Juan)', l: 'Rivadavia (San Juan)', d: 'Ruta Provincial 12, La Bebida, Rivadavia, J5407 San Juan', lat: -31.5475, lon: -68.6164, q: 'Parroquia+Nuestra+Senora+de+Andacollo+La+Bebida+San+Juan+Argentina' }
  ],
  us: [
    { n: 'Sede Misioneros de la Consolata · Somerset', l: 'Somerset (New Jersey)', d: '2301 Route 27, P.O. Box 5550, Somerset, NJ 08875, EE. UU.', lat: 40.4534, lon: -74.5254, q: '2301+Route+27+Somerset+NJ+08875+USA' },
    { n: 'Casa Hermanas Misioneras de la Consolata · Belmont', l: 'Belmont (Michigan)', d: '6801 Belmont Ave NE, Belmont, MI 49306, EE. UU.', lat: 43.0631, lon: -85.6081, q: '6801+Belmont+Ave+NE+Belmont+MI+49306+USA' }
  ],
  ca: [
    { n: 'Casa Regional Missionnaires de la Consolata · Montréal', l: 'Montréal', d: '2505 Boulevard Gouin Ouest, Montréal, QC H3M 1B5, Canadá', lat: 45.5414, lon: -73.6961, q: '2505+Boulevard+Gouin+Ouest+Montreal+QC+H3M+1B5+Canada' },
    { n: 'Comunidad Consolata · Toronto', l: 'Toronto', d: '2648 Islington Ave, Etobicoke, Toronto, ON M9V 2X5, Canadá', lat: 43.7397, lon: -79.5653, q: '2648+Islington+Ave+Etobicoke+Toronto+Canada' }
  ],
  ec: [
    { n: 'Casa Misioneros de la Consolata · Quito', l: 'Quito', d: 'Sector Norte, Arquidiócesis de Quito, Pichincha, Ecuador', lat: -0.1807, lon: -78.4678, q: 'Misioneros+de+la+Consolata+Quito+Ecuador' },
    { n: 'Misión Amazónica · Puerto Francisco de Orellana (El Coca)', l: 'El Coca (Orellana)', d: 'Vicariato Apostólico de Aguarico, Puerto Francisco de Orellana', lat: -0.4665, lon: -76.9872, q: 'Catedral+Nuestra+Senora+del+Carmen+Francisco+de+Orellana+Ecuador' },
    { n: 'Comunidad Misionera · Santo Domingo de los Tsáchilas', l: 'Santo Domingo', d: 'Diócesis de Santo Domingo en Ecuador', lat: -0.2531, lon: -79.1754, q: 'Diócesis+de+Santo+Domingo+Ecuador' }
  ],
  mx: [
    { n: 'Casa Misioneros de la Consolata · Guadalajara / Juanacaxtle', l: 'Guadalajara (Jalisco)', d: 'San Antonio Juanacaxtle / Juanacatlán, Zona Metropolitana de Guadalajara, Jalisco', lat: 20.5089, lon: -103.1686, q: 'San+Antonio+Juanacaxtle+Jalisco+Mexico' },
    { n: 'Comunidad Misionera Consolata · Chiapas', l: 'Chiapas', d: 'Diócesis de San Cristóbal de las Casas / Tuxtla, Chiapas', lat: 16.7370, lon: -92.6376, q: 'San+Cristobal+de+las+Casas+Chiapas+Mexico' }
  ],
  pe: [
    { n: 'Casa Misioneros de la Consolata · Lima (Carabayllo)', l: 'Lima (Carabayllo)', d: 'Diócesis de Carabayllo, Lima Norte, Perú', lat: -11.8864, lon: -77.0264, q: 'Obispado+de+Carabayllo+Lima+Peru' },
    { n: 'Misión Amazónica Consolata · Loreto / San José del Amazonas', l: 'Amazonía Peruana', d: 'Vicariato Apostólico de San José del Amazonas, Perú', lat: -3.7437, lon: -73.2516, q: 'Vicariato+Apostolico+de+San+Jose+del+Amazonas+Iquitos+Peru' }
  ],
  bo: [
    { n: 'Casa Hermanas Misioneras de la Consolata · Poopó', l: 'Poopó (Oruro)', d: 'Parroquia San Bartolomé de Poopó, Diócesis de Oruro, Bolivia', lat: -18.3806, lon: -66.9656, q: 'Iglesia+de+Poopo+Oruro+Bolivia' }
  ],
  it: [
    { n: 'Santuario della Consolata · Turín (Cuna espiritual)', l: 'Santuario Consolata', d: 'Piazza della Consolata, 10122 Torino TO, Italia', lat: 45.0767, lon: 7.6790, q: 'Santuario+della+Consolata+Piazza+della+Consolata+Torino+Italia' },
    { n: 'Casa Madre · Misioneros de la Consolata (1901)', l: 'Casa Madre (Turín)', d: 'Corso Ferrucci 14, 10138 Torino TO, Italia', lat: 45.0691, lon: 7.6578, q: 'Corso+Ferrucci+14+10138+Torino+Italia' },
    { n: 'Casa Generalicia · Misioneros de la Consolata (IMC)', l: 'Casa General IMC (Roma)', d: 'Viale delle Mura Aurelie 11-13, 00165 Roma RM, Italia', lat: 41.8986, lon: 12.4539, q: 'Viale+delle+Mura+Aurelie+11+00165+Roma+Italia' },
    { n: 'Casa Generalicia · Hermanas Misioneras de la Consolata (MC)', l: 'Casa General MC (Nepi)', d: 'Via Niccolò Machiavelli 18, 01036 Nepi (Viterbo / Roma), Italia', lat: 42.2428, lon: 12.3464, q: 'Via+Niccolo+Machiavelli+18+01036+Nepi+VT+Italia' },
    { n: 'Casa Natal de San José Allamano', l: 'Castelnuovo Don Bosco', d: 'Via San Giovanni Bosco, 14022 Castelnuovo Don Bosco AT, Piamonte', lat: 45.0414, lon: 7.9642, q: 'Casa+Natale+San+Giuseppe+Allamano+Castelnuovo+Don+Bosco' }
  ],
  gb: [
    { n: 'Casa Misioneros de la Consolata · Londres', l: 'Londres (Finchley)', d: '3 Salisbury Avenue, Finchley, London N3 3AJ, Reino Unido', lat: 51.5975, lon: -0.1931, q: '3+Salisbury+Avenue+London+N3+3AJ+UK' }
  ],
  pt: [
    { n: 'Casa Regional Missionários da Consolata · Lisboa', l: 'Casa Regional Lisboa', d: 'Rua Capitão Santiago de Carvalho 9, 1700-096 Lisboa, Portugal', lat: 38.7517, lon: -9.1364, q: 'Rua+Capitao+Santiago+de+Carvalho+9+1700-096+Lisboa+Portugal' },
    { n: 'Casa y Seminario Missionários da Consolata · Fátima', l: 'Seminario Fátima', d: 'Estrada de Minde, 2495-402 Fátima, Portugal', lat: 39.6256, lon: -8.6669, q: 'Missionarios+da+Consolata+Estrada+de+Minde+Fatima+Portugal' }
  ],
  es: [
    { n: 'Curia Provincial Misioneros de la Consolata · Madrid', l: 'Curia Madrid', d: 'Calle Pablo Aranda 18, Chamartín, 28006 Madrid, España', lat: 40.4439, lon: -3.6869, q: 'Calle+Pablo+Aranda+18+28006+Madrid+Espana' },
    { n: 'Casa Misioneros de la Consolata · Barcelona', l: 'Barcelona', d: 'Passeig de Valldaura / Horta-Guinardó, Barcelona, España', lat: 41.4361, lon: 2.1644, q: 'Misioneros+de+la+Consolata+Barcelona+Espana' }
  ],
  pl: [
    { n: 'Dom Zakonny Misjonarzy Consolata · Kiełpin / Varsovia', l: 'Kiełpin (Varsovia)', d: 'ul. Rolnicza 219, 05-092 Kiełpin-Łomianki, Varsovia, Polonia', lat: 52.3533, lon: 20.8736, q: 'Rolnicza+219+05-092+Kielpin+Polonia' }
  ],
  ke: [
    { n: 'Consolata Shrine y Casa Regional · Nairobi', l: 'Nairobi (Sede Regional)', d: 'Waiyaki Way, Westlands, P.O. Box 14930-00800, Nairobi, Kenia', lat: -1.2636, lon: 36.8029, q: 'Consolata+Shrine+Waiyaki+Way+Westlands+Nairobi+Kenya' },
    { n: 'Misión Histórica de Tuthu (1.ª Misión Consolata, 1902)', l: 'Tuthu · Murang’a', d: 'Tuthu, Kangema, Diócesis de Murang’a, Kenia', lat: -0.6847, lon: 36.8906, q: 'Tuthu+Catholic+Mission+Muranga+Kenya' },
    { n: 'Centro Misionero de Mathari y Tumba de la Beata Irene Stefani', l: 'Mathari · Nyeri', d: 'Complejo de la Consolata en Mathari, Arquidiócesis de Nyeri, Kenia', lat: -0.4201, lon: 36.9476, q: 'Mathari+Consolata+Mission+Nyeri+Kenya' }
  ],
  et: [
    { n: 'Casa Regional Misioneros de la Consolata · Adís Abeba', l: 'Adís Abeba', d: 'Capilla Consolata Mariyam, Mekanissa, P.O. Box 5535, Adís Abeba', lat: 8.9806, lon: 38.7269, q: 'Consolata+Missionaries+Mekanissa+Addis+Ababa+Ethiopia' },
    { n: 'Misión Consolata de Modjo / Vicariato de Meki', l: 'Modjo · Meki', d: 'Vicariato Apostólico de Meki, Región de Oromía, Etiopía', lat: 8.5868, lon: 39.1211, q: 'Kidane+Mehret+Cathedral+Meki+Ethiopia' }
  ],
  tz: [
    { n: 'Casa Regional y Procura Consolata · Dar es Salaam', l: 'Dar es Salaam', d: 'Oysterbay / Consolata Mission Centre Bunju, Dar es Salaam, Tanzania', lat: -6.7582, lon: 39.2775, q: 'Consolata+Sisters+Oysterbay+Dar+es+Salaam+Tanzania' },
    { n: 'Casa Regional y Misión Histórica de Tosamaganga · Iringa', l: 'Iringa (Tosamaganga)', d: 'Misión de Tosamaganga, Diócesis de Iringa, Tanzania', lat: -7.8542, lon: 35.5358, q: 'Tosamaganga+Mission+Iringa+Tanzania' }
  ],
  mz: [
    { n: 'Casa Regional y Centro Espiritual San Pablo · Maputo', l: 'Maputo', d: 'Bairro Laulane / Av. Julius Nyerere, Maputo, Mozambique', lat: -25.9150, lon: 32.6080, q: 'Missionarios+da+Consolata+Laulane+Maputo+Mozambique' },
    { n: 'Casa Misionera Consolata · Lichinga (Niassa)', l: 'Lichinga (Niassa)', d: 'Diócesis de Lichinga, Provincia de Niassa, Mozambique', lat: -13.3128, lon: 35.2406, q: 'Diocese+de+Lichinga+Niassa+Mozambique' }
  ],
  za: [
    { n: 'Casa Regional Misioneros de la Consolata · Pretoria', l: 'Pretoria (Waverley)', d: 'Waverley, Pretoria, Gauteng, Sudáfrica', lat: -25.7069, lon: 28.2575, q: 'Consolata+Missionaries+Waverley+Pretoria+South+Africa' },
    { n: 'Seminario y Casa Consolata · Merrivale', l: 'Merrivale (Natal)', d: 'Merrivale, KwaZulu-Natal, Sudáfrica', lat: -29.5167, lon: 30.2333, q: 'Consolata+Missionaries+Merrivale+South+Africa' }
  ],
  cd: [
    { n: 'Casa Regional Misioneros de la Consolata · Kinshasa', l: 'Kinshasa', d: '10ème Rue Limete, Kinshasa, R. D. del Congo', lat: -4.3490, lon: 15.3350, q: 'Missionnaires+de+la+Consolata+Limete+Kinshasa' },
    { n: 'Comunidad Misionera Consolata · Kisangani', l: 'Kisangani', d: 'Arquidiócesis de Kisangani, R. D. del Congo', lat: 0.5153, lon: 25.1910, q: 'Cathédrale+Notre-Dame+du+Très-Saint-Rosaire+Kisangani' }
  ],
  ug: [
    { n: 'Casa Regional Misioneros de la Consolata · Kampala', l: 'Kampala (Bweyogerere)', d: 'Bweyogerere / Kiwanga, P.O. Box 40088 Nakawa, Kampala, Uganda', lat: 0.3519, lon: 32.6625, q: 'Consolata+Missionaries+Bweyogerere+Kampala+Uganda' },
    { n: 'Misión Consolata de Gulu', l: 'Gulu', d: 'Arquidiócesis de Gulu, Norte de Uganda', lat: 2.7724, lon: 32.2881, q: 'St+Joseph+Cathedral+Gulu+Uganda' }
  ],
  ci: [
    { n: 'Casa Regional y Seminario Beata Irene Stefani · Abiyán', l: 'Abiyán', d: 'Cocody / Yopougon, Abiyán, Costa de Marfil', lat: 5.3599, lon: -4.0083, q: 'Missionnaires+de+la+Consolata+Abidjan+Cote+d+Ivoire' },
    { n: 'Misión Consolata de San-Pédro', l: 'San-Pédro', d: 'Diócesis de San-Pédro, Costa de Marfil', lat: 4.7485, lon: -6.6363, q: 'Cathedrale+Saint+Pierre+San-Pedro+Cote+d+Ivoire' }
  ],
  dj: [
    { n: 'Misión Consolata · Catedral Ntra. Sra. del Buen Pastor', l: 'Ciudad de Yibuti', d: 'Boulevard de la République, Diócesis de Yibuti', lat: 11.5950, lon: 43.1481, q: 'Cathedrale+Notre+Dame+du+Bon+Pasteur+Djibouti' }
  ],
  sz: [
    { n: 'Misión Consolata · Parroquia Santa María (Lobamba)', l: 'Lobamba / Manzini', d: 'Lobamba / Kwaluseni, Diócesis de Manzini, Esuatini', lat: -26.4465, lon: 31.2064, q: 'St+Marys+Catholic+Church+Lobamba+Eswatini' }
  ],
  ao: [
    { n: 'Casa y Misión Consolata en Luanda', l: 'Luanda (Viana)', d: 'Viana / Zango, Arquidiócesis de Luanda, Angola', lat: -8.9167, lon: 13.3667, q: 'Paroquia+de+Viana+Luanda+Angola' }
  ],
  mg: [
    { n: 'Casa Misioneros de la Consolata · Antananarivo', l: 'Antananarivo', d: 'Arquidiócesis de Antananarivo, Madagascar', lat: -18.8792, lon: 47.5079, q: 'Antananarivo+Madagascar' },
    { n: 'Misión Consolata de Ambanja / Beandrarezina', l: 'Ambanja', d: 'Diócesis de Ambanja, Norte de Madagascar', lat: -13.6833, lon: 48.4500, q: 'Cathédrale+Saint+Joseph+Ambanja+Madagascar' }
  ],
  lr: [
    { n: 'Casa Hermanas Misioneras de la Consolata · Monrovia', l: 'Monrovia', d: 'Arquidiócesis de Monrovia, Liberia', lat: 6.3156, lon: -10.8074, q: 'Sacred+Heart+Cathedral+Monrovia+Liberia' }
  ],
  gw: [
    { n: 'Casa Hermanas Misioneras de la Consolata · Bisáu', l: 'Bisáu / Bula', d: 'Diócesis de Bisáu, Guinea-Bisáu', lat: 11.8636, lon: -15.5977, q: 'Catedral+de+Bissau+Guinea-Bissau' }
  ],
  kr: [
    { n: 'Casa Regional Misioneros de la Consolata · Incheon / Seúl', l: 'Incheon / Seúl', d: 'Diócesis de Incheon, Área Metropolitana de Seúl, Corea del Sur', lat: 37.4563, lon: 126.7052, q: 'Catholic+Diocese+of+Incheon+South+Korea' },
    { n: 'Centro Misionero Consolata · Daejeon', l: 'Daejeon', d: 'Diócesis de Daejeon, Corea del Sur', lat: 36.3504, lon: 127.3845, q: 'Catholic+Diocese+of+Daejeon+South+Korea' }
  ],
  mn: [
    { n: 'Casa Misioneros de la Consolata · Ulán Bator', l: 'Ulán Bator', d: 'Prefectura Apostólica de Ulán Bator, Mongolia', lat: 47.9212, lon: 106.9186, q: 'Sts+Peter+and+Paul+Cathedral+Ulaanbaatar+Mongolia' },
    { n: 'Casa de la Misión Consolata · Arvaikheer', l: 'Arvaikheer', d: 'Arvaikheer, Provincia de Övörkhangai, Mongolia', lat: 46.2639, lon: 102.7750, q: 'Catholic+Mission+Arvaikheer+Mongolia' }
  ],
  tw: [
    { n: 'Casa Misioneros de la Consolata · Hsinchu', l: 'Hsinchu', d: 'Diócesis de Hsinchu / Zhubei, Taiwán', lat: 24.8138, lon: 120.9675, q: 'Immaculate+Heart+of+Mary+Cathedral+Hsinchu+Taiwan' }
  ],
  kz: [
    { n: 'Casa Hermanas Misioneras de la Consolata · Almatý', l: 'Almatý / Talgar', d: 'Diócesis de la Santísima Trinidad en Almatý, Kazajistán', lat: 43.2389, lon: 76.8897, q: 'Holy+Trinity+Cathedral+Almaty+Kazakhstan' }
  ],
  kg: [
    { n: 'Casa Hermanas Misioneras de la Consolata · Biskek / Talas', l: 'Biskek / Talas', d: 'Administración Apostólica de Kirguistán, Biskek', lat: 42.8746, lon: 74.5698, q: 'Catholic+Church+Bishkek+Kyrgyzstan' }
  ]
};

function geoToSvg(lat, lon) {
  const lam = lon * Math.PI / 180, phi = lat * Math.PI / 180;
  const p2 = phi * phi, p4 = p2 * p2;
  const nx = lam * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4)));
  const ny = phi * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4)));
  return [+(479.76 + 175.21 * nx).toFixed(2), +(270.52 - 175.28 * ny).toFixed(2)];
}

function mapsUrl(c) {
  if (c.q) return `https://www.google.com/maps/search/?api=1&query=${c.q}`;
  return `https://www.google.com/maps?q=${c.lat},${c.lon}+(${encodeURIComponent(c.n)})&z=16`;
}

const WEB = { p: (d) => `Página de la Consolata en ${d.n}`, r: (d) => `Página de la Consolata en ${CONT[d.c][0]}`, g: () => 'Sitio oficial de la Consolata', d: () => 'Página de la diócesis sobre la Consolata', m: () => 'Página de las Misioneras de la Consolata' };
const PIN_IC_HTML = '<svg class="mp-pin-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
function paisInfo(k) {
  const d = PAISES[k]; if (!d) return '';
  const quien = d.q === 'mc' ? 'Misioneras de la Consolata' : 'Misioneros de la Consolata';
  const desde = d.y ? `<p class="mp-year"><b>${d.y}</b><span>${d.y === 1901 ? 'fundación del Instituto' : `llegada de ${d.q === 'mc' ? 'las' : 'los'} ${quien}`}</span></p>` : `<p><b>${quien}</b> · año de llegada por confirmar</p>`;
  const casas = CASAS[k] || [];
  const casasHtml = casas.length ? `<div class="mp-casas-box"><div class="mp-casas-title">Casas en ${esc(d.n)} (${casas.length})</div><p style="margin:0 0 6px;font-size:13.5px;color:var(--muted)">Toca un pin del mapa o una casa de esta lista para abrirla en Google Maps:</p>${casas.map((c) => `<a class="mp-casa-card" href="${mapsUrl(c)}" target="_blank" rel="noopener"><i>${PIN_IC_HTML}</i><div><b>${esc(c.n)}</b><small>${esc(c.d)}</small></div><span>Google Maps ↗</span></a>`).join('')}</div>` : '';
  return `<h3>${esc(d.n)}</h3><p><b>${CONT[d.c][0]}</b>${d.y && d.y !== 1901 ? ` · ${new Date().getFullYear() - d.y} años de presencia` : ''}</p>${desde}${d.q === 'mc' ? '<p>En este país sirven las <b>Misioneras de la Consolata</b>, la rama femenina fundada también por san José Allamano.</p>' : ''}${d.x ? `<p>${esc(d.x)}</p>` : ''}${casasHtml}<p class="mp-links"><a class="fe-tab mp-web" href="${d.w}" target="_blank" rel="noopener">${esc(WEB[d.t](d))} ↗</a><button type="button" class="fe-tab" data-mpreset>Ver mapa mundial</button></p>`;
}
async function mapa() {
  const box = $('#mapa-app'); if (!box) return;
  const keys = Object.keys(PAISES);
  const totalCasas = Object.values(CASAS).reduce((acc, l) => acc + l.length, 0);
  box.innerHTML = `<div class="mp-wrap"><div class="mp-map" id="mp-svg" aria-busy="true"></div><div class="mp-info" id="mp-info" aria-live="polite"><h3>Toca un país del menú o del mapa</h3><p>Al seleccionar un país, el mapa hará <b>zoom automático</b> y mostrará un <b>pin de ubicación</b> en cada casa de las casas de los Misioneros y Hermanas de la Consolata. Al tocar un pin se abre en <b>Google Maps</b>.</p><div class="mp-stats"><div><b>${keys.length}</b><span>países</span></div><div><b>${totalCasas}</b><span>casas registradas</span></div><div><b>1901</b><span>año de fundación</span></div><div><b>898</b><span>misioneros (2024)</span></div></div></div></div><div class="mp-list" id="mp-list"></div><p class="fe-note" style="color:#BFD3F2">Los países con borde punteado tienen presencia de las Misioneras de la Consolata. Toca cualquier país del menú inferior para acercar el mapa y ver sus casas misioneras con enlace directo a Google Maps.</p>`;
  $('#mp-list').innerHTML = Object.keys(CONT).map((c) => { const ks = keys.filter((k) => PAISES[k].c === c).sort((a, b) => (PAISES[a].y || 9999) - (PAISES[b].y || 9999)); return `<div><b><i style="background:${CONT[c][1]}"></i>${CONT[c][0]} (${ks.length})</b><ul>${ks.map((k) => `<li><button type="button" data-mpk="${k}">${esc(PAISES[k].n)}<span>${PIN_IC_HTML} ${(CASAS[k] || []).length} · ${PAISES[k].y || '—'}</span></button></li>`).join('')}</ul></div>`; }).join('');
  let ps = [], svgEl = null, casasLayer = null, hudEl = null, curVb = [0, 0, 960, 470], animId = 0, selK = '';
  const PIN_IC = '<svg class="mp-pin-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  const GLOBO_IC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';
  const hud = (txt) => {
    if (!hudEl) return;
    hudEl.innerHTML = `<span class="mp-hud-badge">${txt ? PIN_IC + esc(txt) : ''}</span><button type="button" class="mp-hud-btn" data-mpreset aria-label="Ver mapa mundial" title="Ver mapa mundial"${txt ? '' : ' hidden'}>${GLOBO_IC}</button>`;
    const b = hudEl.querySelector('.mp-hud-badge');
    if (txt) requestAnimationFrame(() => b.classList.add('on'));
  };

  /* Escala de los pines: siempre del mismo tamaño en pantalla (≈26 px de alto en el teléfono, 30 px en computadora) */
  const escalaPin = (vw) => {
    const ancho = (svgEl && svgEl.getBoundingClientRect().width) || 600;
    const px = ancho < 520 ? 26 : 30;
    return Math.max(0.02, Math.min(1.2, (px / 22) * (vw / ancho)));
  };
  const updateCasasScale = (vw) => {
    if (!casasLayer) return;
    const s = escalaPin(vw);
    casasLayer.querySelectorAll('.mp-casa-inner').forEach((g) => {
      g.setAttribute('transform', `scale(${s.toFixed(4)})`);
    });
  };

  const animateViewBox = (targetVb) => {
    if (!svgEl) return;
    if (animId) cancelAnimationFrame(animId);
    const startVb = curVb.slice();
    const t0 = performance.now();
    const dur = matchMedia('(prefers-reduced-motion: reduce)').matches ? 10 : 520;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      curVb = startVb.map((v, i) => v + (targetVb[i] - v) * ease);
      svgEl.setAttribute('viewBox', curVb.map((n) => n.toFixed(2)).join(' '));
      updateCasasScale(curVb[2]);
      if (p < 1) animId = requestAnimationFrame(step);
      else animId = 0;
    };
    animId = requestAnimationFrame(step);
  };

  const renderCasasSvg = (targetVw) => {
    if (!casasLayer) return;
    /* En la vista general del mapamundi NO se muestran casas; solo cuando se selecciona un país */
    if (!selK) {
      casasLayer.innerHTML = '';
      return;
    }
    const list = CASAS[selK] || [];
    const vw = targetVw || curVb[2] || 60;
    const s = escalaPin(vw);
    const minDist = 17 * s;
    const pts = list.map((c) => {
      const [ox, oy] = geoToSvg(c.lat, c.lon);
      return { c, ox, oy, x: ox, y: oy };
    });
    /* Separa suavemente los iconos de casas en la misma ciudad (p. ej. Barquisimeto o Caracas) para que todas se vean claras */
    for (let iter = 0; iter < 30; iter++) {
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          let dx = pts[j].x - pts[i].x, dy = pts[j].y - pts[i].y;
          let dist = Math.hypot(dx, dy);
          if (dist < minDist) {
            if (dist < 0.01) {
              const ang = ((i + j + 1) * Math.PI) / 3;
              dx = Math.cos(ang) * 0.1; dy = Math.sin(ang) * 0.1; dist = 0.1;
            }
            const push = (minDist - dist) * 0.52;
            const ux = dx / dist, uy = dy / dist;
            pts[i].x -= ux * push; pts[i].y -= uy * push;
            pts[j].x += ux * push; pts[j].y += uy * push;
          }
        }
      }
    }
    const items = [];
    pts.forEach(({ c, ox, oy, x, y }, idx) => {
      const isJm = !!c.jm;
      const lbl = c.l || c.n;
      const w = Math.max(40, lbl.length * 4.7 + 14);
      const muchos = pts.length > 2;
      if (Math.hypot(x - ox, y - oy) > 0.35) {
        items.push(`<line x1="${ox.toFixed(2)}" y1="${oy.toFixed(2)}" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" stroke="#F5C518" stroke-width="1.4" stroke-dasharray="2 2" vector-effect="non-scaling-stroke" opacity="0.85"/>`);
        items.push(`<circle cx="${ox.toFixed(2)}" cy="${oy.toFixed(2)}" r="${(2.6 * s).toFixed(2)}" fill="#F5C518" stroke="#061536" stroke-width="1" vector-effect="non-scaling-stroke"/>`);
      }
      items.push(`<a class="mp-casa${isJm ? ' jm' : ''}${muchos ? ' lbl-hover' : ''}" href="${mapsUrl(c)}" target="_blank" rel="noopener" data-k="${selK}" data-idx="${idx}" transform="translate(${x.toFixed(2)} ${y.toFixed(2)})" style="--i:${idx}" aria-label="Abrir en Google Maps: ${esc(c.n)}, ${esc(c.d)}"><title>${esc(c.n)} — ${esc(c.d)} (Toca para abrir en Google Maps)</title><g class="mp-casa-inner"><ellipse class="pin-halo" cx="0" cy="0" rx="7" ry="2.6"/><g class="pin-drop"><ellipse class="pin-shadow" cx="0" cy="0.4" rx="3.6" ry="1.3"/><path class="pin-body" d="M0 0C-1.6-4.6-8-8.4-8-14.2A8 8 0 0 1 8-14.2C8-8.4 1.6-4.6 0 0Z"/><circle class="pin-eye" cx="0" cy="-14.2" r="3"/><g class="pin-lbl" transform="translate(0 9.5)"><rect class="casa-lbl-bg" x="${(-w / 2).toFixed(1)}" y="-6.5" width="${w.toFixed(1)}" height="12.5" rx="6.2"/><text class="casa-lbl" text-anchor="middle" y="2.6">${esc(lbl)}</text></g></g></g></a>`);
    });
    casasLayer.innerHTML = items.join('');
    updateCasasScale(curVb[2]);
  };

  const resetZoom = () => {
    selK = '';
    ps.forEach((x) => x.classList.remove('sel'));
    document.querySelectorAll('[data-mpk]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    hud('');
    renderCasasSvg(960);
    animateViewBox([0, 0, 960, 470]);
    const keysAll = Object.keys(PAISES);
    $('#mp-info').innerHTML = `<h3>Toca un país del menú o del mapa</h3><p>Al seleccionar un país, el mapa hará <b>zoom automático</b> y mostrará un <b>pin de ubicación</b> en cada casa de las casas de los Misioneros y Hermanas de la Consolata. Al tocar un pin se abre en <b>Google Maps</b>.</p><div class="mp-stats"><div><b>${keysAll.length}</b><span>países</span></div><div><b>${totalCasas}</b><span>casas registradas</span></div><div><b>1901</b><span>año de fundación</span></div><div><b>898</b><span>misioneros (2024)</span></div></div>`;
  };

  const sel = (k, scroll) => {
    const d = PAISES[k]; if (!d) return;
    selK = k;
    ps.forEach((x) => x.classList.toggle('sel', x.dataset.k === k));
    document.querySelectorAll('[data-mpk]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.mpk === k));
    $('#mp-info').innerHTML = paisInfo(k);
    const pEl = ps.find((x) => x.dataset.k === k);
    if (pEl && svgEl) {
      const bb = pEl.getBBox();
      let minX = bb.x, maxX = bb.x + bb.width, minY = bb.y, maxY = bb.y + bb.height;
      /* Para EE.UU. y Canadá enfocamos la región continental donde están las casas para que el zoom sea cercano y claro */
      if (k === 'us') { minX = 175; maxX = 308; minY = 118; maxY = 192; }
      if (k === 'ca') { minX = 240; maxX = 336; minY = 100; maxY = 145; }
      (CASAS[k] || []).forEach((c) => {
        const [cx, cy] = geoToSvg(c.lat, c.lon);
        if (cx < minX) minX = cx; if (cx > maxX) maxX = cx;
        if (cy < minY) minY = cy; if (cy > maxY) maxY = cy;
      });
      const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
      let w = Math.max(46, (maxX - minX) * 1.75);
      let h = Math.max(22.5, (maxY - minY) * 1.85);
      const ratio = 960 / 470;
      if (w / h > ratio) h = w / ratio; else w = h * ratio;
      w = Math.min(960, w); h = Math.min(470, h);
      const vx = Math.max(0, Math.min(960 - w, cx - w / 2));
      const vy = Math.max(0, Math.min(470 - h, cy - h / 2));
      renderCasasSvg(w);
      animateViewBox([vx, vy, w, h]);
    }
    { const n = (CASAS[k] || []).length; hud(`${d.n} · ${n} ${n === 1 ? 'casa' : 'casas'}`); }
    if (scroll && svgEl) {
      const r = svgEl.getBoundingClientRect();
      if (r.top < 50 || r.bottom > (window.innerHeight || 800)) {
        $('#mp-svg').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  $('#mp-list').addEventListener('click', (e) => { const b = e.target.closest('[data-mpk]'); if (b) sel(b.dataset.mpk, true); });
  box.addEventListener('click', (e) => { if (e.target.closest('[data-mpreset]')) resetZoom(); });
  try {
    const r = await fetch('img/mapa-consolata.svg?v=2'); const s = await r.text();
    const m = $('#mp-svg');
    m.innerHTML = `<div class="mp-hud" id="mp-hud"></div>` + s;
    m.removeAttribute('aria-busy');
    svgEl = m.querySelector('svg');
    hudEl = m.querySelector('#mp-hud');
    /* quitamos los puntos fijos de la vista general para que el mapa mundial esté limpio y las casas solo salgan al elegir un país */
    m.querySelectorAll('.pin').forEach((p) => p.remove());
    casasLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    casasLayer.setAttribute('id', 'mp-casas-layer');
    svgEl.appendChild(casasLayer);
    ps = Array.from(m.querySelectorAll('.pc'));
    ps.forEach((p) => { const d = PAISES[p.dataset.k]; if (!d) return; p.setAttribute('tabindex', '0'); p.setAttribute('role', 'button'); p.setAttribute('aria-label', `${d.n}${d.y ? ', desde ' + d.y : ''}`); const t = document.createElementNS('http://www.w3.org/2000/svg', 'title'); t.textContent = `${d.n}${d.y ? ' · desde ' + d.y : ''} (Toca para ver sus casas)`; p.appendChild(t); });
    renderCasasSvg(960);
    m.addEventListener('click', (e) => {
      const casa = e.target.closest('.mp-casa');
      if (casa) {
        e.stopPropagation();
        return;
      }
      const p = e.target.closest('.pc');
      if (p) sel(p.dataset.k, false);
    });
    m.addEventListener('keydown', (e) => { const p = e.target.closest('.pc'); if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); sel(p.dataset.k, false); } });
  } catch (e) { $('#mp-svg').innerHTML = '<p style="color:#fff;padding:20px">No se pudo cargar el mapa.</p>'; }
}

/* ---------- videos: se cargan al acercarse, se reproducen en pantalla y se pausan al salir.
   Empiezan sin sonido (los teléfonos no dejan otra cosa); con el botón de sonido se escucha
   y, mientras el sonido esté activado, suena solo un video a la vez. ---------- */
function videos() {
  const REMOTO = 'https://gabrielg739-prog.github.io/juma/';
  document.querySelectorAll('img.photo').forEach((im) => {
    im.addEventListener('error', () => {
      const s = im.getAttribute('src') || '';
      if (s && !/^https?:/i.test(s) && !im.dataset.remoto) { im.dataset.remoto = '1'; im.src = REMOTO + s.replace(/^\.?\//, ''); }
    });
    if (im.complete && im.naturalWidth === 0) im.dispatchEvent(new Event('error'));
  });
  const vs = Array.from(document.querySelectorAll('video.vclip[data-src]')); if (!vs.length) return;
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ahorro = !!(navigator.connection && navigator.connection.saveData);
  const parado = new WeakSet();
  let sonido = false, suena = null;
  const box = (v) => v.parentElement;
  const marcar = (v, play) => { const b = box(v).querySelector('.vbtn'); if (b) { b.setAttribute('aria-pressed', play ? 'false' : 'true'); b.setAttribute('aria-label', play ? 'Pausar video' : 'Reproducir video'); } };
  const marcarSon = (v, on) => { const b = box(v).querySelector('.vsnd'); if (!b) return; b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.setAttribute('aria-label', on ? 'Quitar sonido' : 'Activar sonido'); const t = b.querySelector('span'); if (t) t.textContent = on ? 'Sonido' : 'Activar sonido'; };
  const callar = (v) => { v.muted = true; marcarSon(v, false); if (suena === v) suena = null; };
  const sonar = (v) => { vs.forEach((x) => { if (x !== v && !x.muted) callar(x); }); v.muted = false; suena = v; marcarSon(v, true); };
  const cargar = (v) => { if (v.getAttribute('src')) return true; if (v.dataset.media && !matchMedia(v.dataset.media).matches) return false; v.src = v.dataset.src; return true; };
  const reproducir = (v) => { const p = v.play(); if (p) p.catch(() => { if (!v.muted) { callar(v); const q = v.play(); if (q) q.catch(() => {}); } }); };
  const pasar = () => { if (!sonido || suena) return; const w = vs.find((x) => !x.paused && x.muted); if (w) sonar(w); };
  const tocar = (v) => { if (parado.has(v) || !cargar(v)) return; if (sonido && !suena) sonar(v); reproducir(v); };
  vs.forEach((v) => {
    v.muted = true; v.defaultMuted = true;
    v.addEventListener('error', () => {
      const s = v.dataset.src || '';
      if (s && !/^https?:/i.test(s) && !v.dataset.remoto) { v.dataset.remoto = '1'; v.src = REMOTO + s.replace(/^\.?\//, ''); reproducir(v); }
    });
    v.addEventListener('playing', () => {
      marcar(v, true);
      clearTimeout(v._tOn);
      if (v.classList.contains('vover')) {
        v._tOn = setTimeout(() => { if (!v.paused) { v.classList.add('on'); box(v).classList.add('vlive'); } }, 850);
      } else {
        v.classList.add('on'); box(v).classList.add('vlive');
      }
    });
    v.addEventListener('pause', () => { clearTimeout(v._tOn); marcar(v, false); if (suena === v) { callar(v); pasar(); } });
  });
  document.addEventListener('click', (e) => {
    const s = e.target.closest('.vsnd');
    if (s) { const v = box(s).querySelector('video.vclip'); if (!v) return;
      if (!v.muted) { callar(v); sonido = false; return; }
      sonido = true; parado.delete(v); if (!cargar(v)) return; sonar(v); reproducir(v); return; }
    const b = e.target.closest('.vbtn'); if (!b) return; const v = box(b).querySelector('video.vclip'); if (!v) return;
    if (v.paused) { parado.delete(v); tocar(v); } else { if (suena === v) sonido = false; parado.add(v); v.pause(); }
  });
  if (quieto || ahorro) { vs.forEach((v) => { if (v.poster) { box(v).classList.add('vlive'); marcar(v, false); parado.add(v); } }); return; }
  const cerca = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { cargar(en.target); cerca.unobserve(en.target); } }), { rootMargin: '360px 0px' });
  const dentro = (en) => en.isIntersecting && en.intersectionRatio >= 0.35;
  const vista = new IntersectionObserver((es) => {
    es.filter((en) => !dentro(en)).forEach((en) => {
      const v = en.target; clearTimeout(v._tOn);
      if (suena === v) callar(v);
      if (!v.paused) v.pause();
      if (v.classList.contains('vover')) { v.classList.remove('on'); box(v).classList.remove('vlive'); }
    });
    es.filter(dentro).forEach((en) => tocar(en.target));
  }, { threshold: [0, 0.35, 0.75] });
  vs.forEach((v) => { cerca.observe(v); vista.observe(v); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) vs.forEach((v) => { if (!v.paused) v.pause(); }); });
}
/* ---------- atajos: subtítulos que llevan a cada parte de la página ---------- */
const ATAJOS = [['quienes', 'Quiénes somos'], ['vive', 'Así se vive'], ['domingos', 'Domingos'], ['pilares', 'Pilares'], ['consolata', 'La Consolata'], ['mapa', 'Mapa'], ['identidad', 'Ser misionero'], ['formacion', 'Formación'], ['fe', 'Oración'], ['areas', 'Servicio'], ['novedades', 'Novedades'], ['testimonios', 'Testimonios'], ['galeria', 'Galería'], ['muro-sec', 'Escríbenos'], ['logo', 'Nuestro logo'], ['unete', 'Únete']];
function atajos() {
  // Desactivado: ahora se navega exclusivamente con la barra principal superior para evitar duplicados
  return;
}

/* abanico de los videos al desplazarse (solo en pantallas grandes) */
function reelsFan() {
  const box = document.querySelector('[data-reels]'); if (!box) return;
  const cards = Array.from(box.children); const mq = matchMedia('(min-width: 761px) and (prefers-reduced-motion: no-preference)');
  let vis = false, raf = 0;
  const tick = () => {
    raf = 0;
    if (!mq.matches) { cards.forEach((c) => { c.style.transform = ''; }); return; }
    const r = box.getBoundingClientRect(); const vh = window.innerHeight || 800;
    const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
    cards.forEach((c, i) => { const o = i - 1; c.style.transform = `translate3d(${(o * p * -22).toFixed(1)}px, ${((o === 0 ? -1 : 1) * p * 52).toFixed(1)}px, 0) rotate(${(o * p * 7).toFixed(2)}deg)`; });
  };
  const req = () => { if (vis && !raf) raf = requestAnimationFrame(tick); };
  new IntersectionObserver((es) => { vis = es[0].isIntersecting; req(); }, { rootMargin: '120px 0px' }).observe(box);
  window.addEventListener('scroll', req, { passive: true }); window.addEventListener('resize', req);
  if (mq.addEventListener) mq.addEventListener('change', () => { vis = true; tick(); });
}

/* ---------- arranque ---------- */
(function init() {
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  render(); mapa(); videos(); reelsFan(); atajos();
  /* aviso de "sin internet" */
  const net = document.createElement('div'); net.className = 'net-off'; net.setAttribute('role', 'status');
  net.innerHTML = '<b>Sin internet</b> · Viendo lo último guardado'; (document.getElementById('root') || document.body).appendChild(net);
  const upd = () => net.classList.toggle('on', !navigator.onLine);
  window.addEventListener('online', upd); window.addEventListener('offline', upd); upd();
  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-fe]'); if (b) { tab = b.dataset.fe; render(); return; }
    const v = e.target.closest && e.target.closest('[data-ver]');
    if (v) { const o = buscar(v.dataset.ver); const box = $('#fe-ver'); if (o && box) { box.innerHTML = `<div class="fe-grid" style="margin-top:16px">${card(o).replace('<details', '<details open')}</div>`; box.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }
  });
  fetch('oraciones.json?t=' + Date.now()).then((r) => r.json()).then((d) => { ORA = { oraciones: d.oraciones || [], catequesis: d.catequesis || [] }; if (tab !== 'hoy') render(); }).catch(() => {});
  window.JUMA_FE = {
    liturgia, misteriosHoy, MISIONERO, CANTOS, MISA, COLORES, PAISES,
    /* En el inicio con «Cargar más», primero se abre el bloque donde está la sección (window.JUMA_NAV lo da app.js) */
    paisMapa: (k) => { abrirBloque('mapa'); const s = $('#mapa'); if (s) s.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const b = document.querySelector(`[data-mpk="${k}"]`); if (b) b.click(); }, 450); },
    oracion: (t) => { const all = ORA.oraciones.concat(ORA.catequesis); return all.find((o) => (o.k || []).some((k) => t.includes(' ' + k + ' ') || t.includes(' ' + k))); },
    abrir: (k) => { abrirBloque('fe'); tab = k; render(); const s = $('#fe'); if (s) s.scrollIntoView({ behavior: 'smooth' }); }
  };
  function abrirBloque(id) { try { if (window.JUMA_NAV) window.JUMA_NAV.revelar(id); if (history.replaceState) history.replaceState(null, '', '#' + id); } catch (e) {} }
})();
