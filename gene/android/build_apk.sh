#!/bin/bash
# Construye Gene.apk (requiere: openjdk, aapt, apksigner, zipalign, dalvik-exchange, android-sdk-platform-23)
set -e
D="$(cd "$(dirname "$0")/.." && pwd)"; A="$D/android"; B="$D/build/apk"; AJ=/usr/lib/android-sdk/platforms/android-23/android.jar
rm -rf "$B"; mkdir -p "$B/classes" "$B/assets"
python3 "$D/prepare_app.py"
cp -r "$D/build/app/gene" "$B/assets/gene"
javac -source 8 -target 8 -bootclasspath "$AJ" -d "$B/classes" "$A"/src/com/gene/app/*.java 2>&1 | grep -v "warning\|^Note" || true
dalvik-exchange --dex --output="$B/classes.dex" "$B/classes"
aapt package -f -M "$A/AndroidManifest.xml" -S "$A/res" -A "$B/assets" -I "$AJ" --min-sdk-version 21 --target-sdk-version 33 -F "$B/unsigned.apk"
( cd "$B" && aapt add unsigned.apk classes.dex >/dev/null )
zipalign -f -p 4 "$B/unsigned.apk" "$B/aligned.apk"
[ -f "$A/gene.jks" ] || keytool -genkeypair -keystore "$A/gene.jks" -storepass genegene -keypass genegene -alias gene -keyalg RSA -keysize 2048 -validity 36500 -dname "CN=Gene, O=Gene Tutor, C=VE" 2>/dev/null
apksigner sign --ks "$A/gene.jks" --ks-pass pass:genegene --key-pass pass:genegene --out "$D/build/Gene.apk" "$B/aligned.apk"
apksigner verify --verbose "$D/build/Gene.apk" | head -4
ls -la "$D/build/Gene.apk"
