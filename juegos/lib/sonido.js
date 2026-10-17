/* JUMA · Motor de sonido para los juegos (todo sintetizado, sin archivos de audio)
   - Eco de iglesia (reverberación), compresor y mezcla estéreo
   - Instrumentos: campana, arpa, marimba, coro, órgano, cuerdas, batería, bajo
   - Efectos: golpes, pasos, viento, agua, vidrio, fuego, magia
   - Música de fondo que se compone sola en cada juego (estilos: carrera, oscuro, dulce, calma) */
(function () {
  'use strict';
  let A = null, salida, comp, sfx, mus, duck, envio, eco, ruidoB = null, rosaB = null;
  const J = {
    permitido: () => true,          // cada juego dice si el sonido está encendido
    musicaPermitida: () => true,    // y si la música está encendida
    volMusica: 0.5,
    nivelEco: 0.22
  };
  function ctx() {
    if (!A) {
      try { A = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
      salida = A.createGain(); salida.gain.value = 0.95; salida.connect(A.destination);
      comp = A.createDynamicsCompressor();
      comp.threshold.value = -20; comp.knee.value = 12; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.2;
      // Limitador final: sube el volumen sin que se rompa el sonido en los parlantes del teléfono
      const lim = A.createDynamicsCompressor();
      lim.threshold.value = -3; lim.knee.value = 0; lim.ratio.value = 20; lim.attack.value = 0.001; lim.release.value = 0.12;
      comp.connect(lim); lim.connect(salida);
      sfx = A.createGain(); sfx.gain.value = 1.7; sfx.connect(comp);
      duck = A.createGain(); duck.connect(comp);
      mus = A.createGain(); mus.gain.value = J.volMusica * 1.6; mus.connect(duck);
      eco = A.createConvolver(); eco.buffer = impulso(2.6, 2.4); eco.connect(comp);
      envio = A.createGain(); envio.gain.value = 1; envio.connect(eco);
    }
    if (A.state === 'suspended') A.resume();
    return A;
  }
  // Respuesta de una iglesia: ruido estéreo que se apaga poco a poco, con primeras reflexiones
  function impulso(seg, caida) {
    const n = Math.floor(A.sampleRate * seg), b = A.createBuffer(2, n, A.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < n; i++) {
        const t = i / n;
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, caida) * (i < A.sampleRate * 0.012 ? 0 : 1);
      }
      for (let k = 0; k < 6; k++) { const p = Math.floor(A.sampleRate * (0.015 + Math.random() * 0.06)); if (p < n) d[p] += (Math.random() < 0.5 ? -1 : 1) * 0.6; }
    }
    return b;
  }
  function ruidoBuf() {
    if (!ruidoB) { ruidoB = A.createBuffer(1, A.sampleRate * 2, A.sampleRate); const d = ruidoB.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    return ruidoB;
  }
  function rosa() {
    if (!rosaB) {
      rosaB = A.createBuffer(1, A.sampleRate * 2, A.sampleRate); const d = rosaB.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; b0 = 0.997 * b0 + w * 0.029; b1 = 0.985 * b1 + w * 0.032; b2 = 0.95 * b2 + w * 0.048; d[i] = (b0 + b1 + b2 + w * 0.05) * 1.6; }
    }
    return rosaB;
  }
  // Conecta una voz a la mezcla: paneo, eco y bus (efectos o música)
  function salidaVoz(nodo, o) {
    let n = nodo;
    if (o.pan && A.createStereoPanner) { const p = A.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, o.pan)); n.connect(p); n = p; }
    n.connect(o.bus || sfx);
    const r = o.eco == null ? J.nivelEco : o.eco;
    if (r > 0) { const g = A.createGain(); g.gain.value = r; n.connect(g); g.connect(envio); }
  }
  const ok = (o) => (o && o.bus === mus ? J.musicaPermitida() : J.permitido());

  /* ---------- Piezas básicas ---------- */
  // Oscilador con envolvente (ataque, caída) y barrido de tono
  function osc(o) {
    if (!ctx() || !ok(o)) return;
    const t = A.currentTime + (o.ret || 0), dur = o.dur || 0.2, at = o.at || 0.006;
    const g = A.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.1, t + at);
    if (o.sost) g.gain.setValueAtTime(o.vol || 0.1, t + dur * o.sost);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let dest = g;
    if (o.filtro) { const f = A.createBiquadFilter(); f.type = o.filtro.tipo || 'lowpass'; f.frequency.setValueAtTime(o.filtro.f, t); if (o.filtro.f2) f.frequency.exponentialRampToValueAtTime(o.filtro.f2, t + (o.filtro.t || dur)); f.Q.value = o.filtro.q || 0.8; g.connect(f); dest = f; }
    const voces = o.coro || [0];
    for (const det of voces) {
      const s = A.createOscillator(); s.type = o.tipo || 'sine';
      s.frequency.setValueAtTime(o.f, t); s.detune.value = det;
      if (o.f2) s.frequency.exponentialRampToValueAtTime(o.f2, t + (o.tf || dur));
      if (o.vib) { const l = A.createOscillator(), lg = A.createGain(); l.frequency.value = o.vib[0]; lg.gain.value = o.vib[1]; l.connect(lg); lg.connect(s.detune); l.start(t); l.stop(t + dur + 0.05); }
      const gv = A.createGain(); gv.gain.value = 1 / Math.sqrt(voces.length);
      s.connect(gv); gv.connect(g); s.start(t); s.stop(t + dur + 0.05);
    }
    salidaVoz(dest, o);
  }
  // Ruido filtrado (soplos, golpes, viento, agua, grava)
  function ruido(o) {
    if (!ctx() || !ok(o)) return;
    const t = A.currentTime + (o.ret || 0), dur = o.dur || 0.2;
    const s = A.createBufferSource(); s.buffer = o.rosa ? rosa() : ruidoBuf(); s.loop = true;
    const f = A.createBiquadFilter(); f.type = o.tipo || 'lowpass'; f.Q.value = o.q || 0.9;
    f.frequency.setValueAtTime(o.f || 1000, t);
    if (o.f2) f.frequency.exponentialRampToValueAtTime(o.f2, t + (o.tf || dur));
    const g = A.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.1, t + (o.at || 0.004));
    if (o.sost) g.gain.setValueAtTime(o.vol || 0.1, t + dur * o.sost);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g);
    s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
    salidaVoz(g, o);
  }
  // Campana (síntesis FM con parciales inarmónicos)
  function campana(f, dur, vol, o) {
    o = o || {};
    if (!ctx() || !ok(o)) return;
    const t = A.currentTime + (o.ret || 0);
    const g = A.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const car = A.createOscillator(), mod = A.createOscillator(), mg = A.createGain();
    car.frequency.value = f; mod.frequency.value = f * (o.razon || 3.5);
    mg.gain.setValueAtTime(f * (o.indice || 2.2), t); mg.gain.exponentialRampToValueAtTime(f * 0.05, t + dur * 0.7);
    mod.connect(mg); mg.connect(car.frequency); car.connect(g);
    const mezcla = A.createGain(); g.connect(mezcla);
    const h = A.createOscillator(), hg = A.createGain(); h.frequency.value = f * 2.76;
    hg.gain.setValueAtTime(0.0001, t); hg.gain.exponentialRampToValueAtTime(vol * 0.35, t + 0.003); hg.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.35);
    h.connect(hg); hg.connect(mezcla);
    [car, mod, h].forEach((x) => { x.start(t); x.stop(t + dur + 0.05); });
    salidaVoz(mezcla, o);
  }
  // Cuerda pulsada (arpa, guitarra): ataque con ruido y brillo que se apaga
  function arpa(f, dur, vol, o) {
    o = o || {};
    osc(Object.assign({ f, dur, vol, tipo: 'triangle', at: 0.003, filtro: { f: Math.min(12000, f * 8), f2: f * 1.5, t: dur * 0.6 } }, o));
    osc(Object.assign({ f: f * 2, dur: dur * 0.5, vol: vol * 0.3, tipo: 'sine', at: 0.002 }, o));
    ruido(Object.assign({ dur: 0.03, vol: vol * 0.25, f: Math.min(9000, f * 6), tipo: 'bandpass', q: 2 }, o));
  }
  // Marimba / celesta: tono puro con golpe de mazo
  function marimba(f, dur, vol, o) {
    o = o || {};
    osc(Object.assign({ f, dur, vol, tipo: 'sine', at: 0.002 }, o));
    osc(Object.assign({ f: f * 4, dur: dur * 0.18, vol: vol * 0.35, tipo: 'sine', at: 0.001 }, o));
    osc(Object.assign({ f: f * 10, dur: 0.03, vol: vol * 0.12, tipo: 'sine', at: 0.001 }, o));
  }
  // Coro "aah": sierras desafinadas con formantes de voz y vibrato
  function coro(notas, dur, vol, o) {
    o = o || {};
    if (!ctx() || !ok(o)) return;
    const t = A.currentTime + (o.ret || 0), at = o.at || Math.min(0.6, dur * 0.3);
    const g = A.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + at); g.gain.setValueAtTime(vol, t + dur * 0.65); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const forms = (o.vocal === 'o' ? [[450, 6], [800, 7]] : [[750, 6], [1180, 7], [2600, 9]]).map(([fr, q]) => { const b = A.createBiquadFilter(); b.type = 'bandpass'; b.frequency.value = fr; b.Q.value = q; b.connect(g); return b; });
    const lp = A.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200; lp.connect(g);
    for (const f of notas) for (const det of [-9, 0, 8]) {
      const s = A.createOscillator(); s.type = 'sawtooth'; s.frequency.value = f; s.detune.value = det + (Math.random() * 4 - 2);
      const l = A.createOscillator(), lg = A.createGain(); l.frequency.value = 4.6 + Math.random() * 0.8; lg.gain.value = 14; l.connect(lg); lg.connect(s.detune);
      const sg = A.createGain(); sg.gain.value = 0.22 / notas.length;
      s.connect(sg); forms.forEach((b) => sg.connect(b)); const sl = A.createGain(); sl.gain.value = 0.25; sg.connect(sl); sl.connect(lp);
      s.start(t); l.start(t); s.stop(t + dur + 0.05); l.stop(t + dur + 0.05);
    }
    salidaVoz(g, Object.assign({ eco: 0.6 }, o));
  }
  // Órgano de iglesia: armónicos tipo tubos
  function organo(notas, dur, vol, o) {
    o = o || {};
    for (const f of notas) for (const [m, v] of [[0.5, 0.4], [1, 1], [2, 0.55], [3, 0.25], [4, 0.2]]) osc(Object.assign({ f: f * m, dur, vol: vol * v / notas.length, tipo: 'sine', at: 0.05, sost: 0.8, vib: [5.5, 3] }, o));
  }
  // Cuerdas suaves (colchón)
  function colchon(notas, dur, vol, o) {
    o = o || {};
    for (const f of notas) osc(Object.assign({ f, dur, vol: vol / notas.length, tipo: 'sawtooth', at: dur * 0.35, sost: 0.6, coro: [-12, 0, 11], filtro: { f: 1400, q: 0.5 }, vib: [5, 6] }, o));
  }
  // Batería
  function bombo(o) { o = o || {}; osc(Object.assign({ f: 150, f2: 42, tf: 0.12, dur: 0.32, vol: o.vol || 0.7, tipo: 'sine', at: 0.002, eco: 0.05 }, o)); ruido(Object.assign({ dur: 0.02, vol: (o.vol || 0.7) * 0.25, f: 3000, tipo: 'bandpass', eco: 0 }, o)); }
  function caja(o) { o = o || {}; ruido(Object.assign({ dur: 0.18, vol: o.vol || 0.35, f: 2400, tipo: 'bandpass', q: 0.7, eco: 0.2 }, o)); osc(Object.assign({ f: 220, f2: 160, dur: 0.1, vol: (o.vol || 0.35) * 0.6, tipo: 'triangle', eco: 0.1 }, o)); }
  function platillo(o) { o = o || {}; ruido(Object.assign({ dur: o.abierto ? 0.32 : 0.05, vol: o.vol || 0.12, f: 8000, tipo: 'highpass', eco: 0.05 }, o)); }
  function palmas(o) { o = o || {}; for (let i = 0; i < 3; i++) ruido(Object.assign({ dur: 0.06, vol: (o.vol || 0.25) * (i === 2 ? 1 : 0.6), f: 1600, tipo: 'bandpass', q: 1.2, ret: (o.ret || 0) + i * 0.011, eco: 0.25 })); }
  function timbal(f, o) { o = o || {}; osc(Object.assign({ f, f2: f * 0.8, dur: 1.2, vol: o.vol || 0.5, tipo: 'sine', at: 0.004, eco: 0.5 }, o)); ruido(Object.assign({ dur: 0.25, vol: (o.vol || 0.5) * 0.3, f: 300, eco: 0.4 }, o)); }
  function bajo(f, dur, vol, o) { osc(Object.assign({ f, dur, vol, tipo: 'sawtooth', at: 0.004, filtro: { f: 900, f2: 200, t: dur * 0.7, q: 2 }, eco: 0.02 }, o || {})); osc(Object.assign({ f: f / 2, dur, vol: vol * 0.6, tipo: 'sine', eco: 0 }, o || {})); }
  function acorde(notas, dur, vol, o) { for (const f of notas) osc(Object.assign({ f, dur, vol: vol / notas.length, tipo: 'sawtooth', at: 0.004, coro: [-14, 0, 13], filtro: { f: 4200, f2: 600, t: dur, q: 1.5 } }, o || {})); }

  /* ---------- Efectos ya armados ---------- */
  const E = {
    golpe(vol, o) { vol = vol || 1; o = o || {}; osc(Object.assign({ f: 130, f2: 38, dur: 0.45, vol: 0.55 * vol, tipo: 'sine', at: 0.002, eco: 0.25 }, o)); ruido(Object.assign({ dur: 0.35, vol: 0.4 * vol, f: 1600, f2: 200, tipo: 'lowpass', eco: 0.3 }, o)); },
    soplo(dur, vol, f1, f2, o) { ruido(Object.assign({ dur, vol, f: f1, f2, tipo: 'bandpass', q: 1.6, at: dur * 0.35, rosa: true }, o || {})); },
    vidrio(vol, o) { vol = vol || 1; o = o || {}; ruido(Object.assign({ dur: 0.5, vol: 0.25 * vol, f: 6000, tipo: 'highpass', eco: 0.4 }, o)); for (let i = 0; i < 9; i++) campana(2200 + Math.random() * 3800, 0.25 + Math.random() * 0.4, 0.04 * vol, Object.assign({ ret: (o.ret || 0) + Math.random() * 0.25, razon: 2.7 + Math.random(), indice: 1 }, o)); },
    magia(vol, o) { vol = vol || 1; o = o || {}; const base = [1046.5, 1318.5, 1568, 2093, 2637, 3136]; base.forEach((f, i) => campana(f, 0.9, 0.05 * vol, Object.assign({ ret: (o.ret || 0) + i * 0.045, razon: 2, indice: 0.6, eco: 0.6 }, o))); ruido(Object.assign({ dur: 0.7, vol: 0.05 * vol, f: 7000, tipo: 'highpass', at: 0.2, eco: 0.5 }, o)); },
    moneda(paso, o) { const f = 1568 * Math.pow(1.0595, (paso || 0) % 12); campana(f, 0.5, 0.11, Object.assign({ razon: 2, indice: 0.9, eco: 0.25 }, o)); campana(f * 1.5, 0.4, 0.07, Object.assign({ ret: 0.06, razon: 2, indice: 0.7, eco: 0.25 }, o)); },
    paso(vol, o) { vol = vol || 1; ruido(Object.assign({ dur: 0.09, vol: 0.12 * vol, f: 1800 + Math.random() * 1600, tipo: 'bandpass', q: 1.4, eco: 0.05 }, o || {})); osc(Object.assign({ f: 90, f2: 55, dur: 0.07, vol: 0.12 * vol, tipo: 'sine', eco: 0 }, o || {})); },
    clic(vol, o) { ruido(Object.assign({ dur: 0.025, vol: 0.18 * (vol || 1), f: 3500, tipo: 'bandpass', q: 2, eco: 0.1 }, o || {})); osc(Object.assign({ f: 1400, dur: 0.04, vol: 0.05 * (vol || 1), tipo: 'sine', eco: 0.1 }, o || {})); },
    carta(vol, o) { ruido(Object.assign({ dur: 0.08, vol: 0.2 * (vol || 1), f: 2500, f2: 7000, tipo: 'bandpass', q: 0.9, eco: 0.15 }, o || {})); ruido(Object.assign({ dur: 0.02, vol: 0.12 * (vol || 1), f: 5000, tipo: 'highpass', ret: ((o && o.ret) || 0) + 0.06, eco: 0.1 }, o || {})); },
    bonk(vol, o) { osc(Object.assign({ f: 220, f2: 140, dur: 0.22, vol: 0.18 * (vol || 1), tipo: 'triangle', eco: 0.2 }, o || {})); osc(Object.assign({ f: 233, f2: 148, dur: 0.22, vol: 0.12 * (vol || 1), tipo: 'triangle', eco: 0.2 }, o || {})); },
    fanfarria(o) { o = o || {}; const n = [523.25, 659.25, 783.99, 1046.5]; n.forEach((f, i) => osc(Object.assign({ f, dur: i === 3 ? 1.1 : 0.22, vol: 0.12, tipo: 'sawtooth', coro: [-8, 7], filtro: { f: 2600, q: 0.7 }, ret: (o.ret || 0) + i * 0.11, eco: 0.35, vib: i === 3 ? [5.5, 10] : null }, o))); campana(2093, 1.6, 0.06, Object.assign({ ret: (o.ret || 0) + 0.33, eco: 0.6 }, o)); timbal(98, Object.assign({ vol: 0.35, ret: (o.ret || 0) + 0.33 }, o)); },
    tictac(alto, o) { osc(Object.assign({ f: alto ? 1800 : 1200, dur: 0.05, vol: 0.1, tipo: 'sine', at: 0.001, eco: 0.15 }, o || {})); ruido(Object.assign({ dur: 0.02, vol: 0.1, f: 4000, tipo: 'bandpass', q: 3, eco: 0.1 }, o || {})); }
  };

  /* ---------- Música que se compone sola ---------- */
  const m2f = (n) => 440 * Math.pow(2, (n - 69) / 12);
  let estilo = null, paso = 0, tSig = 0, timer = null, compas = 0, melAnt = 72;
  const ESTILOS = {
    // Carrera: pop latino enérgico (Do · Sol · La m · Fa), 128 pulsos
    carrera: { bpm: 128, acordes: [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]], escala: [60, 62, 64, 67, 69, 72, 74, 76, 79, 81],
      paso(p, r) {
        const q = p % 16, ac = this.acordes[Math.floor(p / 16) % 4];
        if (q % 4 === 0) { bombo({ ret: r, vol: 0.6, bus: mus }); bajarMusica(r); }
        if (q === 4 || q === 12) { caja({ ret: r, vol: 0.28, bus: mus }); palmas({ ret: r, vol: 0.12, bus: mus }); }
        platillo({ ret: r, vol: q % 2 ? 0.03 : 0.05, abierto: q % 4 === 2, bus: mus });
        if (q % 2 === 0) bajo(m2f(ac[0] - 24 + (q % 8 === 6 ? 12 : 0)), 0.2, 0.22, { ret: r, bus: mus });
        if (q === 0 || q === 3 || q === 6 || q === 10) acorde(ac.map((n) => m2f(n)), 0.2, 0.16, { ret: r, bus: mus, eco: 0.15 });
        if (q % 2 === 0 && Math.random() < 0.7) { const n = melodia(this.escala, ac); marimba(m2f(n), 0.3, 0.09, { ret: r, bus: mus, eco: 0.2 }); }
      } },
    // Oscuro: capilla en penumbra, coro grave, timbales y campanas lejanas (Re m · Si♭ · Sol m · La)
    oscuro: { bpm: 72, acordes: [[50, 57, 62, 65], [46, 53, 58, 62], [43, 50, 55, 58], [45, 52, 57, 61]], escala: [62, 64, 65, 67, 69, 70, 72, 74],
      paso(p, r) {
        const q = p % 16, ac = this.acordes[Math.floor(p / 32) % 4];
        if (p % 32 === 0) { coro(ac.slice(1).map(m2f), 9.5, 0.12, { ret: r, bus: mus, vocal: 'o', at: 2.5 }); osc({ f: m2f(ac[0] - 12), dur: 9, vol: 0.12, tipo: 'sawtooth', at: 2, sost: 0.7, filtro: { f: 220 }, ret: r, bus: mus, eco: 0.4 }); }
        if (q === 0) timbal(m2f(ac[0] - 12), { ret: r, vol: 0.28, bus: mus });
        if (q === 10 && Math.random() < 0.5) timbal(m2f(ac[0] - 12) * 1.5, { ret: r, vol: 0.14, bus: mus });
        if (q % 4 === 2) ruido({ dur: 0.06, vol: 0.03, f: 6000, tipo: 'highpass', ret: r, bus: mus, eco: 0.5 });
        if (p % 64 === 48) campana(m2f(ac[1] + 12), 4, 0.05, { ret: r, bus: mus, eco: 0.9, razon: 3.5, indice: 1.6 });
        if (q % 8 === 0 && Math.random() < 0.75) coro([m2f(melodia(this.escala, ac))], 1.6, 0.06, { ret: r, bus: mus, vocal: 'a', at: 0.25 });
      } },
    // Dulce: marimba y arpa alegres para el tres en línea (Fa · Do · Re m · Si♭)
    dulce: { bpm: 104, acordes: [[53, 57, 60], [48, 52, 55], [50, 53, 57], [46, 50, 53]], escala: [65, 67, 69, 72, 74, 77, 79, 81],
      paso(p, r) {
        const q = p % 16, ac = this.acordes[Math.floor(p / 16) % 4];
        if (q === 0) colchon(ac.map((n) => m2f(n + 12)), 2.4, 0.07, { ret: r, bus: mus, eco: 0.5 });
        if (q % 4 === 0) bajo(m2f(ac[0] - 12), 0.35, 0.12, { ret: r, bus: mus });
        if (q % 4 === 2) ruido({ dur: 0.07, vol: 0.04, f: 7000, tipo: 'highpass', ret: r, bus: mus, eco: 0.1 });
        if (q === 8) ruido({ dur: 0.12, vol: 0.06, f: 1800, tipo: 'bandpass', ret: r, bus: mus, eco: 0.3 });
        if (q % 2 === 0 && Math.random() < 0.8) marimba(m2f(melodia(this.escala, ac)), 0.45, 0.1, { ret: r, bus: mus, eco: 0.3 });
        if (q === 14 && Math.random() < 0.5) arpa(m2f(ac[2] + 24), 0.8, 0.05, { ret: r, bus: mus, eco: 0.5 });
      } },
    // Calma: arpa y celesta con colchón de cuerdas (Sol · Mi m · Do · Re)
    calma: { bpm: 84, acordes: [[55, 59, 62], [52, 55, 59], [48, 52, 55], [50, 54, 57]], escala: [67, 69, 71, 74, 76, 79, 81, 83],
      paso(p, r) {
        const q = p % 16, ac = this.acordes[Math.floor(p / 16) % 4];
        if (q === 0) { colchon(ac.map((n) => m2f(n)), 3.2, 0.08, { ret: r, bus: mus, eco: 0.6 }); bajo(m2f(ac[0] - 12), 1.2, 0.08, { ret: r, bus: mus }); }
        if (q % 2 === 0) { const i = (q / 2) % 4; arpa(m2f(ac[i % 3] + 12 + (i === 3 ? 12 : 0)), 1.2, 0.05, { ret: r, bus: mus, eco: 0.55 }); }
        if (q % 4 === 1 && Math.random() < 0.55) marimba(m2f(melodia(this.escala, ac) + 12), 0.9, 0.045, { ret: r, bus: mus, eco: 0.7 });
      } }
  };
  // Melodía: camina por la escala y prefiere notas del acorde
  function melodia(escala, ac) {
    const cerca = escala.filter((n) => Math.abs(n - melAnt) <= 5);
    const tonos = cerca.filter((n) => ac.some((a) => (n - a) % 12 === 0));
    const op = tonos.length && Math.random() < 0.65 ? tonos : (cerca.length ? cerca : escala);
    melAnt = op[Math.floor(Math.random() * op.length)];
    return melAnt;
  }
  function bajarMusica(r) { const t = A.currentTime + r; duck.gain.cancelScheduledValues(t); duck.gain.setValueAtTime(0.6, t); duck.gain.linearRampToValueAtTime(1, t + 0.2); }
  function programar() {
    if (!A || !estilo) return;
    if (!J.musicaPermitida()) { tSig = A.currentTime + 0.05; return; }
    const E2 = ESTILOS[estilo], dt = 60 / E2.bpm / 4;
    if (tSig < A.currentTime) tSig = A.currentTime + 0.05;
    while (tSig < A.currentTime + 0.15) { E2.paso(paso, tSig - A.currentTime); tSig += dt; paso++; }
  }
  function musica(nombre) {
    if (!ctx()) return;
    if (estilo === nombre) return;
    estilo = nombre; paso = 0; tSig = A.currentTime + 0.1;
    mus.gain.cancelScheduledValues(A.currentTime); mus.gain.setValueAtTime(0.0001, A.currentTime); mus.gain.exponentialRampToValueAtTime(J.volMusica * 1.6, A.currentTime + 1.2);
    if (!timer) timer = setInterval(programar, 30);
  }
  function pararMusica() {
    if (!A || !estilo) return;
    estilo = null;
    mus.gain.cancelScheduledValues(A.currentTime); mus.gain.setValueAtTime(mus.gain.value, A.currentTime); mus.gain.linearRampToValueAtTime(0.0001, A.currentTime + 0.6);
  }
  document.addEventListener('visibilitychange', () => { if (!A) return; if (document.hidden) A.suspend(); else if (estilo) A.resume(); });

  window.JumaSonido = Object.assign(J, {
    ctx, osc, ruido, campana, arpa, marimba, coro, organo, colchon, bombo, caja, platillo, palmas, timbal, bajo, acorde, E, m2f,
    musica, pararMusica, get musicaActual() { return estilo; }, _estilos: ESTILOS,
    eco(v) { J.nivelEco = v; },
    // Vibración del teléfono en los momentos fuertes
    vibrar(p) { try { if (J.permitido() && navigator.vibrate) navigator.vibrate(p); } catch (e) { /* sin vibración */ } }
  });
})();
