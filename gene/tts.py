# Genera la narración con Piper (voz es_MX-claude-high).
# Uso: python tts.py <ruta_modelo.onnx>
# Lee build/tts_jobs.json y escribe audio/<id>.mp3 + audio/manifest.json (inicio de cada línea, en segundos).
import json, os, sys, io, wave, subprocess, array
from piper import PiperVoice, SynthesisConfig
here = os.path.dirname(os.path.abspath(__file__))
jobs = json.load(open(os.path.join(here, 'build', 'tts_jobs.json')))
out = os.path.join(here, 'audio'); os.makedirs(out, exist_ok=True)
mpath = os.path.join(out, 'manifest.json')
man = json.load(open(mpath)) if os.path.exists(mpath) else {}
voice = PiperVoice.load(sys.argv[1])
cfg = SynthesisConfig(length_scale=1.0, noise_scale=0.6, noise_w_scale=0.75)
GAP = 0.32
done = 0
for j in jobs:
    mp3 = os.path.join(out, j['id'] + '.mp3')
    if j['id'] in man and os.path.exists(mp3):
        continue
    pcm = array.array('h'); starts = []; sr = None
    for t in j['texts']:
        buf = io.BytesIO()
        with wave.open(buf, 'wb') as w:
            voice.synthesize_wav(t, w, syn_config=cfg)
        buf.seek(0)
        with wave.open(buf, 'rb') as r:
            sr = r.getframerate(); fr = r.readframes(r.getnframes())
        starts.append(round(len(pcm) / sr, 3))
        pcm.frombytes(fr); pcm.extend([0] * int(GAP * sr))
    raw = os.path.join(out, j['id'] + '.raw')
    pcm.tofile(open(raw, 'wb'))
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-f', 's16le', '-ar', str(sr), '-ac', '1', '-i', raw,
                    '-af', 'loudnorm=I=-18:TP=-1.5:LRA=11', '-ar', '22050', '-c:a', 'libmp3lame', '-b:a', '40k', mp3], check=True)
    os.remove(raw)
    man[j['id']] = starts; done += 1
    if done % 20 == 0:
        json.dump(man, open(mpath, 'w')); print('listos', done, flush=True)
# limpiar audios que ya no se usan
ids = {j['id'] for j in jobs}
man = {k: v for k, v in man.items() if k in ids}
for f in os.listdir(out):
    if f.endswith('.mp3') and f[:-4] not in ids:
        os.remove(os.path.join(out, f))
json.dump(man, open(mpath, 'w'))
print('total', len(man), 'nuevos', done)
