# Prepara build/app/gene/: index.html sin dependencias externas (tipografías locales) + audio + fuentes.
import re,shutil,os,sys
here=os.path.dirname(os.path.abspath(__file__));out=os.path.join(here,'build','app','gene')
shutil.rmtree(os.path.join(here,'build','app'),ignore_errors=True);os.makedirs(out)
h=open(os.path.join(here,'index.html'),encoding='utf8').read()
h=re.sub(r'<link rel="preconnect"[^>]*>','',h)
h=re.sub(r'<link href="https://fonts\.googleapis\.com[^>]*>','<link rel="stylesheet" href="fonts.css">',h)
assert 'fonts.googleapis' not in h
open(os.path.join(out,'index.html'),'w',encoding='utf8').write(h)
shutil.copy(os.path.join(here,'fonts.css'),out);shutil.copytree(os.path.join(here,'fonts'),os.path.join(out,'fonts'))
used=set(re.findall(r'audio/([a-z0-9]+)\.mp3',h));os.makedirs(os.path.join(out,'audio'))
for i in used:shutil.copy(os.path.join(here,'audio',i+'.mp3'),os.path.join(out,'audio'))
print('archivos de audio',len(used),'tamaño',sum(os.path.getsize(os.path.join(dp,f)) for dp,_,fs in os.walk(out) for f in fs)//1048576,'MB')
