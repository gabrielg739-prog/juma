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
.mp-map{position:relative;background:#0A1F4D;border-radius:18px;padding:10px;overflow:hidden}
.mp-map svg{display:block;width:100%;height:auto}
.mp-map .po{fill:#1C3A78;stroke:#0A1F4D;stroke-width:.5}
.mp-map .pc{stroke:#0A1F4D;stroke-width:.6;cursor:pointer;transition:opacity .2s}
.mp-map .pc.af{fill:#17824A}.mp-map .pc.am{fill:#C8322D}.mp-map .pc.eu{fill:#FFFFFF}.mp-map .pc.as{fill:#F5C518}
.mp-map .pc:hover,.mp-map .pc:focus{opacity:.75;outline:none}
.mp-map .pc.sel{stroke:#8EC9FF;stroke-width:2}
.mp-map .pin .dot{fill:#8EC9FF;stroke:#fff;stroke-width:1.4}
.mp-map .pin.jm .dot{fill:#F5C518}
.mp-map .pin .pulse{fill:#8EC9FF;transform-box:fill-box;transform-origin:center;animation:mpPulse 2.2s cubic-bezier(.23,1,.32,1) infinite}
.mp-map .pin.jm .pulse{fill:#F5C518}
@keyframes mpPulse{from{opacity:.7;transform:scale(1)}to{opacity:0;transform:scale(3.2)}}
.mp-info{background:#fff;color:var(--ink);border-radius:16px;padding:18px}
.mp-info h3{margin:0;font:800 26px/1 var(--display);text-transform:uppercase;color:var(--cloth)}
.mp-info p{margin:8px 0 0;font-size:15px;line-height:1.5}
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
.mp-map .pc.mc{stroke:#fff;stroke-width:.9;stroke-dasharray:2 1.5}
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
const WEB = { p: (d) => `Página de la Consolata en ${d.n}`, r: (d) => `Página de la Consolata en ${CONT[d.c][0]}`, g: () => 'Sitio oficial de la Consolata', d: () => 'Página de la diócesis sobre la Consolata', m: () => 'Página de las Misioneras de la Consolata' };
function paisInfo(k) {
  const d = PAISES[k]; if (!d) return '';
  const quien = d.q === 'mc' ? 'Misioneras de la Consolata' : 'Misioneros de la Consolata';
  const desde = d.y ? `<p class="mp-year"><b>${d.y}</b><span>${d.y === 1901 ? 'fundación del Instituto' : `llegada de ${d.q === 'mc' ? 'las' : 'los'} ${quien}`}</span></p>` : `<p><b>${quien}</b> · año de llegada por confirmar</p>`;
  return `<h3>${esc(d.n)}</h3><p><b>${CONT[d.c][0]}</b>${d.y && d.y !== 1901 ? ` · ${new Date().getFullYear() - d.y} años de presencia` : ''}</p>${desde}${d.q === 'mc' ? '<p>En este país sirven las <b>Misioneras de la Consolata</b>, la rama femenina fundada también por san José Allamano.</p>' : ''}${d.x ? `<p>${esc(d.x)}</p>` : ''}<p class="mp-links"><a class="fe-tab mp-web" href="${d.w}" target="_blank" rel="noopener">${esc(WEB[d.t](d))} ↗</a><button type="button" class="fe-tab" data-mpreset>Ver todos</button></p>`;
}
async function mapa() {
  const box = $('#mapa-app'); if (!box) return;
  const keys = Object.keys(PAISES);
  box.innerHTML = `<div class="mp-wrap"><div class="mp-map" id="mp-svg" aria-busy="true"></div><div class="mp-info" id="mp-info" aria-live="polite"><h3>Toca un país</h3><p>Los países de color son donde están los Misioneros y las Misioneras de la Consolata. Toca uno para ver desde qué año están allí y su página web. El punto amarillo es Duaca: ¡aquí estamos nosotros!</p><div class="mp-stats"><div><b>${keys.length}</b><span>países</span></div><div><b>4</b><span>continentes</span></div><div><b>1901</b><span>año de fundación</span></div><div><b>898</b><span>misioneros (2024)</span></div></div></div></div><div class="mp-list" id="mp-list"></div><p class="fe-note" style="color:#BFD3F2">Los países con borde punteado tienen presencia de las Misioneras de la Consolata. Datos: Consolata América, Consolata Africa, sitios oficiales de la Consolata en cada país y GCatholic (2024). La presencia de las comunidades puede cambiar con los años.</p>`;
  $('#mp-list').innerHTML = Object.keys(CONT).map((c) => { const ks = keys.filter((k) => PAISES[k].c === c).sort((a, b) => (PAISES[a].y || 9999) - (PAISES[b].y || 9999)); return `<div><b><i style="background:${CONT[c][1]}"></i>${CONT[c][0]} (${ks.length})</b><ul>${ks.map((k) => `<li><button type="button" data-mpk="${k}">${esc(PAISES[k].n)}<span>${PAISES[k].y || '—'}</span></button></li>`).join('')}</ul></div>`; }).join('');
  let ps = [];
  const sel = (k, scroll) => {
    ps.forEach((x) => x.classList.toggle('sel', x.dataset.k === k));
    document.querySelectorAll('[data-mpk]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.mpk === k));
    $('#mp-info').innerHTML = paisInfo(k);
    if (scroll && window.matchMedia('(max-width:860px)').matches) $('#mp-info').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  $('#mp-list').addEventListener('click', (e) => { const b = e.target.closest('[data-mpk]'); if (b) sel(b.dataset.mpk, true); });
  $('#mp-info').addEventListener('click', (e) => { if (e.target.closest('[data-mpreset]')) mapa(); });
  try {
    const r = await fetch('img/mapa-consolata.svg?v=2'); const s = await r.text();
    const m = $('#mp-svg'); m.innerHTML = s; m.removeAttribute('aria-busy');
    ps = Array.from(m.querySelectorAll('.pc'));
    ps.forEach((p) => { const d = PAISES[p.dataset.k]; if (!d) return; p.setAttribute('tabindex', '0'); p.setAttribute('role', 'button'); p.setAttribute('aria-label', `${d.n}${d.y ? ', desde ' + d.y : ''}`); const t = document.createElementNS('http://www.w3.org/2000/svg', 'title'); t.textContent = `${d.n}${d.y ? ' · desde ' + d.y : ''}`; p.appendChild(t); });
    m.addEventListener('click', (e) => { const p = e.target.closest('.pc'); if (p) sel(p.dataset.k, true); });
    m.addEventListener('keydown', (e) => { const p = e.target.closest('.pc'); if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); sel(p.dataset.k, true); } });
  } catch (e) { $('#mp-svg').innerHTML = '<p style="color:#fff;padding:20px">No se pudo cargar el mapa.</p>'; }
}

/* ---------- arranque ---------- */
(function init() {
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  render(); mapa();
  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-fe]'); if (b) { tab = b.dataset.fe; render(); return; }
    const v = e.target.closest && e.target.closest('[data-ver]');
    if (v) { const o = buscar(v.dataset.ver); const box = $('#fe-ver'); if (o && box) { box.innerHTML = `<div class="fe-grid" style="margin-top:16px">${card(o).replace('<details', '<details open')}</div>`; box.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }
  });
  fetch('oraciones.json?t=' + Date.now()).then((r) => r.json()).then((d) => { ORA = { oraciones: d.oraciones || [], catequesis: d.catequesis || [] }; if (tab !== 'hoy') render(); }).catch(() => {});
  window.JUMA_FE = {
    liturgia, misteriosHoy, MISIONERO, CANTOS, MISA, COLORES, PAISES,
    paisMapa: (k) => { const s = $('#mapa'); if (s) s.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const b = document.querySelector(`[data-mpk="${k}"]`); if (b) b.click(); }, 450); },
    oracion: (t) => { const all = ORA.oraciones.concat(ORA.catequesis); return all.find((o) => (o.k || []).some((k) => t.includes(' ' + k + ' ') || t.includes(' ' + k))); },
    abrir: (k) => { tab = k; render(); const s = $('#fe'); if (s) s.scrollIntoView({ behavior: 'smooth' }); }
  };
})();
