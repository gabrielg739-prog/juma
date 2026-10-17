/* Carrera de la fe · datos del juego: pistas, copas, personajes con habilidad, karts, dificultades, objetos y reglas */

export const VUELTAS = 3;
export const PUNTOS_POS = [30, 24, 20, 16, 12, 8];
export const CLAVE = 'juma-kart-v1';
export const CLAVE_AJUSTES = 'juma-kart-ajustes-v1';

/* Física base (unidades por segundo) */
export const VMAX = 330;
export const ACEL = 300;
export const FRENO = 520;
export const FRICC = 220;
export const GIRO = 2.6;
export const AGARRE = 6.0;
export const AGARRE_DERIVA = 2.0;
export const ANCHO = 150;      /* ancho de la pista */

/* Seis pistas, cada una con su tema visual. r = radios de los puntos de control (en círculo). */
export const PISTAS = [
  { id: 'emaus', nombre: 'Camino a Emaús', desc: 'Campos soleados y curvas amables', tema: 'campo',
    r: [820, 760, 880, 700, 860, 780, 900, 740, 850, 800, 700, 860, 760, 890, 720, 840],
    cielo: ['#4f9fe8', '#fff1cf'], niebla: '#fff1cf', sol: '#fff4dc', hierba: '#7fc46b', arena: '#e7cf9a', borde: ['#d8362e', '#fff7e6'], luzAmb: 1.0 },
  { id: 'desierto', nombre: 'Sendero del desierto', desc: 'Dunas y atardecer de oro', tema: 'desierto',
    r: [700, 880, 720, 860, 700, 900, 730, 840, 710, 880, 700, 860, 720, 900, 700, 820],
    cielo: ['#e87a3a', '#ffd9a0'], niebla: '#ffd9a0', sol: '#ffd08a', hierba: '#e8c77f', arena: '#f0d7a0', borde: ['#b5462e', '#fff1d6'], luzAmb: 0.95 },
  { id: 'mision', nombre: 'Ruta de la misión', desc: 'Pueblos, arcos y fuentes', tema: 'mision',
    r: [760, 840, 700, 880, 740, 800, 820, 900, 700, 780, 860, 720, 800, 740, 880, 760],
    cielo: ['#5ab8f0', '#e9f7ff'], niebla: '#e9f7ff', sol: '#ffffff', hierba: '#8fcf7a', arena: '#d9ba8c', borde: ['#2d6fb0', '#ffffff'], luzAmb: 1.05 },
  { id: 'santiago', nombre: 'Camino de Santiago', desc: 'Pinares y montañas nevadas', tema: 'montana',
    r: [900, 780, 840, 720, 800, 900, 740, 860, 760, 700, 820, 900, 780, 710, 860, 740],
    cielo: ['#7fb2e0', '#dfeaf5'], niebla: '#dfeaf5', sol: '#fff8ea', hierba: '#6fb36a', arena: '#cfb088', borde: ['#2e7d4f', '#f7fff5'], luzAmb: 0.9 },
  { id: 'catacumba', nombre: 'Catacumbas', desc: 'Piedra oscura iluminada por velas', tema: 'catacumba',
    r: [700, 800, 720, 860, 680, 820, 740, 880, 700, 780, 720, 840, 690, 800, 740, 860],
    cielo: ['#0c0a1a', '#2a1d3a'], niebla: '#2a1d3a', sol: '#ffb46a', hierba: '#3b3340', arena: '#55485e', borde: ['#f2a93b', '#2a1d3a'], luzAmb: 0.55 },
  { id: 'luz', nombre: 'Camino de la luz', desc: 'Neón y estrellas de la noche', tema: 'luz',
    r: [820, 900, 760, 940, 800, 880, 740, 920, 780, 860, 760, 900, 800, 940, 780, 880],
    cielo: ['#06072a', '#2e1a66'], niebla: '#2e1a66', sol: '#9fd8ff', hierba: '#0f1b3d', arena: '#1d2a5a', borde: ['#55f2ff', '#ff5bd1'], luzAmb: 0.7 },
];

/* Copas: tres pistas cada una, se juegan en orden */
export const CUPAS = [
  { nombre: 'Copa de la Esperanza', desc: 'Campos, desierto y misión', pistas: [0, 1, 2] },
  { nombre: 'Copa de la Luz', desc: 'Montañas, catacumbas y noche', pistas: [3, 4, 5] },
];

/* Clases: qué tan rápidos son los rivales, cuánto tardan en reaccionar y cuántos errores cometen */
export const DIFICULTADES = [
  { nombre: 'Fácil', texto: 'Los rivales van más despacio y se equivocan más.', vel: 0.93, reaccion: 1.35, errores: 1.8 },
  { nombre: 'Normal', texto: 'Una carrera pareja, con rivales que también usan objetos.', vel: 1.0, reaccion: 1.0, errores: 1.0 },
  { nombre: 'Difícil', texto: 'Rivales rápidos que usan muy bien sus objetos.', vel: 1.05, reaccion: 0.8, errores: 0.5 },
];

/* Personajes (ocho). vel, acel y agarre cambian cómo se maneja; habil es su habilidad propia. */
export const PERSONAJES = [
  { nombre: 'Lucía', color: '#3a8fe0', borde: '#123a6e', vel: 1.0, acel: 1.05, agarre: 1.0, habil: 'salida',
    habilNombre: 'Salida de luz', habilTexto: 'Arranca con un empujón de turbo.' },
  { nombre: 'Pedro', color: '#3fb860', borde: '#14502a', vel: 0.99, acel: 1.1, agarre: 0.95, habil: 'cajas',
    habilNombre: 'Buen pescador', habilTexto: 'Sus cajas de gracia traen un objeto mejor.' },
  { nombre: 'Miguel', color: '#e04a4a', borde: '#6e1a1a', vel: 1.0, acel: 0.95, agarre: 1.15, habil: 'agarre',
    habilNombre: 'Pie firme', habilTexto: 'Se agarra mejor en las curvas.' },
  { nombre: 'Ana', color: '#a86ae0', borde: '#44205e', vel: 1.0, acel: 1.0, agarre: 1.0, habil: 'escudo',
    habilNombre: 'Oración constante', habilTexto: 'Su rosario la protege más tiempo.' },
  { nombre: 'Padre Tomás', color: '#ffb838', borde: '#6a4206', vel: 0.98, acel: 0.92, agarre: 1.1, habil: 'bendicion',
    habilNombre: 'Bendición', habilTexto: 'Los golpes le duran menos.' },
  { nombre: 'Tobías', color: '#4fd1c5', borde: '#14524c', vel: 1.05, acel: 1.02, agarre: 0.98, habil: 'veloz',
    habilNombre: 'Chispa veloz', habilTexto: 'Es el más rápido en las rectas.' },
  { nombre: 'Rosa', color: '#ff7eb6', borde: '#7a1e4a', vel: 1.0, acel: 1.0, agarre: 1.0, habil: 'aura',
    habilNombre: 'Aura de paz', habilTexto: 'Frena un poco a los karts que van cerca.' },
  { nombre: 'Hermana Clara', color: '#f4f0e6', borde: '#5a5044', vel: 0.97, acel: 1.0, agarre: 1.05, habil: 'campanas',
    habilNombre: 'Campanas', habilTexto: 'Su campanilla llega más lejos.' },
];

/* Karts (cuatro). Los valores son multiplicadores: 1 = normal. */
export const KARTS = [
  { nombre: 'Carroza de la fe', tipo: 'carroza', desc: 'Equilibrada, para empezar', vel: 1.0, acel: 1.0, peso: 1.0, giro: 1.0, derrape: 1.0 },
  { nombre: 'Bicicleta ligera', tipo: 'bici', desc: 'Gira rápido y acelera', vel: 0.97, acel: 1.1, peso: 0.85, giro: 1.18, derrape: 1.0 },
  { nombre: 'Carreta fuerte', tipo: 'carreta', desc: 'Pesada: nadie la empuja', vel: 1.05, acel: 0.92, peso: 1.3, giro: 0.86, derrape: 0.95 },
  { nombre: 'Triciclo de misión', tipo: 'triciclo', desc: 'Derrapa y sube el turbo rápido', vel: 0.99, acel: 1.04, peso: 0.95, giro: 1.08, derrape: 1.25 },
];

/* Objetos (las cajas de gracia dan uno según el puesto) */
export const OBJETOS = {
  vela: { icono: '🕯️', nombre: 'Vela', texto: 'Turbo de la fe', color: '#ffb040' },
  rosario: { icono: '📿', nombre: 'Rosario', texto: 'Escudo de oración', color: '#ffe68c' },
  incienso: { icono: '🌫️', nombre: 'Incienso', texto: 'Nube que frena', color: '#9a94a0' },
  campanilla: { icono: '🔔', nombre: 'Campanilla', texto: 'Onda que aturde', color: '#ffe68c' },
  paloma: { icono: '🕊️', nombre: 'Paloma', texto: 'Busca al de adelante', color: '#ffffff' },
  agua: { icono: '💧', nombre: 'Agua bendita', texto: 'Charco que hace girar', color: '#6fd3ff' },
  estrella: { icono: '⭐', nombre: 'Estrella de Belén', texto: 'Invencible un momento', color: '#fff06a' },
};

/* Qué objeto puede tocar según el puesto (1º = el que va primero) */
export const TABLA_OBJETOS = {
  1: ['campanilla', 'incienso', 'agua', 'vela'],
  2: ['campanilla', 'incienso', 'vela', 'rosario', 'agua'],
  3: ['vela', 'rosario', 'paloma', 'agua'],
  4: ['vela', 'rosario', 'paloma', 'incienso', 'estrella'],
  5: ['paloma', 'paloma', 'vela', 'campanilla', 'estrella'],
  6: ['paloma', 'campanilla', 'rosario', 'vela', 'estrella', 'estrella'],
};
