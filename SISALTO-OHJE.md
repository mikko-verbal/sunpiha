# Sun Piha – sisällön päivitysohje

Tämä ohje on tarkoitettu henkilölle, joka päivittää sivuston kuvia ja tekstejä **ilman ohjelmointiosaamista**. Noudata ohjetta askel askeleelta.

---

## Nopea yhteenveto

| Mitä haluat muuttaa | Mitä teet |
|---------------------|-----------|
| **Kuva** | Korvaa tiedosto `public/images/[kansion-nimi]/kuva.jpg` |
| **Palvelun teksti** | Muokkaa tiedostoa `src/data/services.ts` |
| **Uutinen** | Muokkaa tiedostoa `src/data/news.ts` |
| **Asiakaspalaute** | Muokkaa tiedostoa `src/data/testimonials.ts` |
| **Puhelin, sähköposti, osoite** | Muokkaa tiedostoa `src/lib/utils.ts` |
| **Jätehinnasto (vaihtolava)** | Muokkaa tiedostoa `src/data/waste-pricing.ts` |

Muutosten jälkeen pyydä kehittäjää julkaisemaan sivusto (tai aja itse `npm run build` jos osaat).

---

## 1. Kuvien vaihtaminen

### Periaate

Jokainen kuva on **omassa kansiossaan**. Kansion nimi kertoo, missä kuva näkyy sivustolla.

```
public/images/
├── etusivu-hero-talon-ulkonakyma/
│   └── kuva.jpg          ← Etusivun iso taustakuva
├── palvelu-nurmikon-kunnossapito/
│   └── kuva.jpg          ← Nurmikkopalvelun kuva
├── uutinen-lumen-poiskuljetus/
│   └── kuva.jpg          ← Uutisen kuva
└── ...
```

### Vaihtaminen (3 askelta)

1. Etsi oikea kansio alla olevasta taulukosta.
2. Valmistele uusi kuva tietokoneellesi (suositus: **JPG**, vähintään **1200 px leveä**, vaaka-asento).
3. **Korvaa** vanha `kuva.jpg` uudella kuvalla **samalla nimellä** (`kuva.jpg`).

> **Tärkeää:** Älä muuta kansion nimeä eikä tiedoston nimeä. Vain `kuva.jpg` vaihdetaan.

### Kuvakartta – missä mikin kuva näkyy

#### Etusivu

| Kansio | Missä näkyy |
|--------|-------------|
| `etusivu-hero-talon-ulkonakyma` | Etusivun yläosa (iso taustakuva) |
| `etusivu-miksi-me-nurmikko` | "Miksi valita meidät" -osion kuva |
| `etusivu-hata-talvikunnossapito` | Hätäbanneri (talvipäivystys) |
| `etusivu-palvelu-kiinteistonhuolto` | Palveluesittely: Kiinteistönhuolto |
| `etusivu-palvelu-talvikunnossapito` | Palveluesittely: Talvikunnossapito |
| `etusivu-palvelu-piharemontit` | Palveluesittely: Piharemontit |

#### Sivut (yläosan taustakuva)

| Kansio | Sivu |
|--------|------|
| `sivu-kiinteistonhuolto-hero` | /kiinteistonhuolto |
| `sivu-kiinteistonhuolto-talvi` | /kiinteistonhuolto (alempi kuva) |
| `sivu-palvelut-hero` | /palvelut |
| `sivu-yritys-hero` | /yritys |
| `sivu-yritys-tiimi` | /yritys (tiimikuva) |
| `sivu-yhteystiedot-hero` | /yhteystiedot |
| `sivu-ajankohtaista-hero` | /ajankohtaista |
| `sivu-tarjouspyynto-hero` | /tarjouspyynto |
| `sivu-tilaa-vaihtolava-hero` | /tilaa-vaihtolava |
| `sivu-tietosuojaseloste-hero` | /tietosuojaseloste |

#### Palvelusivut (9 kpl)

| Kansio | Palvelu |
|--------|---------|
| `palvelu-kiinteistonhuolto` | Kiinteistönhuolto |
| `palvelu-nurmikon-kunnossapito` | Nurmikon kunnossapito |
| `palvelu-lumityot-talvikunnossapito` | Lumityöt & talvikunnossapito |
| `palvelu-pesupalvelut` | Kiinteistö- & teollisuuspesut |
| `palvelu-viherrakentaminen` | Viherrakentaminen & rakentaminen |
| `palvelu-asfaltti-paallystetyot` | Asfaltti- ja päällystetyöt |
| `palvelu-lehdet-puut-pensaat` | Lehdet, puut & pensaat |
| `palvelu-pihapesu` | Pihapesu |
| `palvelu-suursakit` | Suursäkit |

#### Kohderyhmät

| Kansio | Missä näkyy |
|--------|-------------|
| `kohderyhma-omakotitalot` | Omakotitalot & loma-asunnot |
| `kohderyhma-taloyhtiot-liikekiinteistot` | Taloyhtiöt & liikekiinteistöt |
| `kohderyhma-kaupungit-kunnat` | Kaupungit & kunnat |

#### Uutiset

| Kansio | Uutinen |
|--------|---------|
| `uutinen-circulation-yhteistyo` | Circulation-yhteistyö |
| `uutinen-kotitalousvahennys-2025` | Kotitalousvähennys 2025 |
| `uutinen-lumen-poiskuljetus` | Lumen poiskuljetus |
| `uutinen-rekry-koneenkuljettaja` | Rekry: koneenkuljettaja |
| `uutinen-avoimet-tyopaikat` | Avoimet työpaikat |

### Uuden kuvan lisääminen uuteen paikkaan

Jos tarvitset kuvan **uuteen paikkaan** (ei listassa), pyydä kehittäjää luomaan uusi kansio. Amatööri voi vaihtaa vain valmiiksi määriteltyjä kuvia.

---

## 2. Tekstien muokkaaminen

Tekstit ovat **tekstitiedostoissa** (`.ts`). Avaa tiedosto Cursorissa, VS Codessa tai muulla editorilla. Muokkaa vain lainausmerkkien `"..."` sisällä olevaa tekstiä.

### Yhteystiedot ja navigaatio

**Tiedosto:** `src/lib/utils.ts`

| Kenttä | Esimerkki |
|--------|-----------|
| `PHONE_NUMBER` | `"041 312 1139"` |
| `EMAIL` | `"info@sunpiha.com"` |
| `SERVICE_EMAIL` | `"asiakaspalvelu@sunpiha.com"` |
| `COMPANY.address` | `"Kuminatie 39b"` |
| `COMPANY.businessId` | `"3330218-7"` |

### Palvelut

**Tiedosto:** `src/data/services.ts`

Jokaisella palvelulla on:
- `title` – otsikko
- `description` – lyhyt kuvaus (kortti)
- `longDescription` – pitkä kuvaus (palvelusivu)
- `items` – palveluluettelo (bullet-lista)
- `benefits` – edut

> Kuvat tulevat automaattisesti `src/data/images.ts` -tiedostosta – **älä muokkaa `image`-kenttiä** ellei kehittäjä pyydä.

### Uutiset

**Tiedosto:** `src/data/news.ts`

Jokaisella uutisella on:
- `title` – otsikko
- `excerpt` – lyhyt esittely (listaus)
- `date` – päivämäärä (esim. `"15.1.2025"`)
- `content` – artikkelin kappaleet (taulukko)

### Asiakaspalautteet

**Tiedosto:** `src/data/testimonials.ts`

- `quote` – lainaus
- `author` – nimi
- `location` – paikkakunta
- `project` – (valinnainen) projektin nimi

### Jätehinnasto (vaihtolava)

**Tiedosto:** `src/data/waste-pricing.ts`

Muokkaa `wasteType`- ja `price`-kenttiä. Älä muuta `lowCode`, `rd` tai `materialCode` ilman asiantuntijaa.

---

## 3. Mitä EI kannata muuttaa itse

- Tiedostot `src/app/` ja `src/components/` – sivujen rakenne ja ulkoasu
- `src/data/images.ts` – kuvien tekninen kartta (kehittäjän tehtävä)
- `package.json`, `next.config.ts` – tekniset asetukset
- CSS-tyylit (`globals.css`) – ulkoasu

Jos haluat muuttaa sivun **rakennetta** (esim. uusi osio etusivulle), ota yhteyttä kehittäjään.

---

## 4. Muutosten tarkistus

Kehittäjä tai sinä (jos osaat):

```bash
cd SunPiha
npm run dev
```

Avaa selaimessa **http://localhost:3000** ja tarkista muuttamasi sivut.

Ennen julkaisua:

```bash
npm run test
```

Tämä varmistaa, ettei tekstimuutoksissa ole kirjoitusvirheitä, jotka rikkovat sivuston.

---

## 5. Julkaisu tuotantoon

1. Tallenna kaikki muutetut tiedostot.
2. Lähetä muutokset GitHubiin (pyydä kehittäjää tai käytä Git-työkalua).
3. Hosting-palvelu (esim. Vercel) rakentaa sivuston automaattisesti uudelleen.

---

## 6. Usein kysytyt kysymykset

**Kuva ei päivity selaimessa?**  
Tyhjennä selaimen välimuisti (Ctrl+Shift+R / Cmd+Shift+R) tai odota hetki.

**Voinko käyttää PNG-kuvaa?**  
Kyllä, mutta nimeä se silti `kuva.jpg` **tai** pyydä kehittäjää muuttamaan tiedostotyyppi koodissa. JPG on suositeltu (pienempi tiedosto).

**Sama kuva useassa paikassa?**  
Kopioi sama tiedosto jokaiseen kansioon erikseen. Jokainen paikka on itsenäinen.

**Poistanko vanhan kuvan ensin?**  
Voit korvata suoraan: vedä uusi kuva samaan kansioon ja hyväksy korvaus.

---

## Yhteystiedot kehittäjälle

Jos jokin menee pieleen, lähetä kehittäjälle:
1. Mitä yritit muuttaa
2. Mikä kansio/tiedosto
3. Kuvakaappaus virheestä (jos sellainen näkyy)
