#!/usr/bin/env bash
# Lataa nykyiset kuvat Unsplashista paikallisiin kansioihin.
# Aja kerran: bash scripts/download-images.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

download() {
  local folder="$1"
  local url="$2"
  mkdir -p "public/images/$folder"
  echo "→ public/images/$folder/kuva.jpg"
  /usr/bin/curl -fsSL "$url" -o "public/images/$folder/kuva.jpg"
}

# kansio|unsplash-url
while IFS='|' read -r folder url; do
  [[ -z "$folder" || "$folder" =~ ^# ]] && continue
  download "$folder" "$url"
done <<'EOF'
etusivu-hero-talon-ulkonakyma|https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85
etusivu-miksi-me-nurmikko|https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85
etusivu-hata-talvikunnossapito|https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=85
etusivu-palvelu-kiinteistonhuolto|https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85
etusivu-palvelu-talvikunnossapito|https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=85
etusivu-palvelu-piharemontit|https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85
sivu-kiinteistonhuolto-hero|https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85
sivu-kiinteistonhuolto-talvi|https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=85
sivu-palvelut-hero|https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85
sivu-yritys-hero|https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=85
sivu-yritys-tiimi|https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=85
sivu-yhteystiedot-hero|https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=85
sivu-ajankohtaista-hero|https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=85
sivu-tarjouspyynto-hero|https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85
sivu-tilaa-vaihtolava-hero|https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=85
sivu-tietosuojaseloste-hero|https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=85
sivu-oletus-hero|https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85
palvelu-kiinteistonhuolto|https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85
palvelu-nurmikon-kunnossapito|https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85
palvelu-lumityot-talvikunnossapito|https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=85
palvelu-pesupalvelut|https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85
palvelu-viherrakentaminen|https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85
palvelu-asfaltti-paallystetyot|https://images.unsplash.com/photo-1772852331753-fc11e83a7288?w=1920&q=85
palvelu-lehdet-puut-pensaat|https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=85
palvelu-pihapesu|https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85
palvelu-suursakit|https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85
kohderyhma-omakotitalot|https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85
kohderyhma-taloyhtiot-liikekiinteistot|https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85
kohderyhma-kaupungit-kunnat|https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=85
uutinen-circulation-yhteistyo|https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=85
uutinen-kotitalousvahennys-2025|https://images.unsplash.com/photo-1554224311-beee415c201f?w=1920&q=85
uutinen-lumen-poiskuljetus|https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=85
uutinen-rekry-koneenkuljettaja|https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=85
uutinen-avoimet-tyopaikat|https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=85
EOF

count=$(find public/images -name 'kuva.jpg' | wc -l | tr -d ' ')
echo ""
echo "Valmis! $count kuvaa ladattu public/images/-kansioon."
