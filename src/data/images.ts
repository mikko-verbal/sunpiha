/**
 * Kaikki sivuston kuvat yhdessä paikassa.
 *
 * Jokainen kuva on kansiossa: public/images/{kansio}/kuva.jpg
 * Amatööri vaihtaa kuvan korvaamalla kuva.jpg-tiedoston – ei tarvitse koskea koodiin.
 *
 * Katso: SISALTO-OHJE.md
 */
const img = (folder: string) => `/images/${folder}/kuva.jpg`;

export const IMAGES = {
  /** Etusivu – iso taustakuva hero-osiossa */
  etusivuHero: img("etusivu-hero-talon-ulkonakyma"),
  /** Etusivu – "Miksi me?" -osion kuva */
  etusivuMiksiMe: img("etusivu-miksi-me-nurmikko"),
  /** Etusivu – hätäbannerin talvikunnossapito-tausta */
  etusivuHataTalvi: img("etusivu-hata-talvikunnossapito"),
  /** Etusivu – palveluesittely: kiinteistönhuolto */
  etusivuPalveluKiinteisto: img("etusivu-palvelu-kiinteistonhuolto"),
  /** Etusivu – palveluesittely: talvikunnossapito */
  etusivuPalveluTalvi: img("etusivu-palvelu-talvikunnossapito"),
  /** Etusivu – palveluesittely: piharemontit */
  etusivuPalveluPiharemontit: img("etusivu-palvelu-piharemontit"),

  /** Sivu /kiinteistonhuolto – yläosan taustakuva */
  sivuKiinteistonhuoltoHero: img("sivu-kiinteistonhuolto-hero"),
  /** Sivu /kiinteistonhuolto – alempi talvikunnossapito-kuva */
  sivuKiinteistonhuoltoTalvi: img("sivu-kiinteistonhuolto-talvi"),
  /** Sivu /palvelut – yläosan taustakuva */
  sivuPalvelutHero: img("sivu-palvelut-hero"),
  /** Sivu /yritys – yläosan taustakuva */
  sivuYritysHero: img("sivu-yritys-hero"),
  /** Sivu /yritys – tiimikuva */
  sivuYritysTiimi: img("sivu-yritys-tiimi"),
  /** Sivu /yhteystiedot – yläosan taustakuva */
  sivuYhteystiedotHero: img("sivu-yhteystiedot-hero"),
  /** Sivu /ajankohtaista – yläosan taustakuva */
  sivuAjankohtaistaHero: img("sivu-ajankohtaista-hero"),
  /** Sivu /tarjouspyynto – yläosan taustakuva */
  sivuTarjouspyyntoHero: img("sivu-tarjouspyynto-hero"),
  /** Sivu /tilaa-vaihtolava – yläosan taustakuva */
  sivuVaihtolavaHero: img("sivu-tilaa-vaihtolava-hero"),
  /** Sivu /tietosuojaseloste – yläosan taustakuva */
  sivuTietosuojaHero: img("sivu-tietosuojaseloste-hero"),
  /** Oletuskuva sivuille, joilla ei ole omaa kuvaa */
  sivuOletusHero: img("sivu-oletus-hero"),

  /** Palvelusivu: Kiinteistönhuolto */
  palveluKiinteistonhuolto: img("palvelu-kiinteistonhuolto"),
  /** Palvelusivu: Nurmikon kunnossapito */
  palveluNurmikko: img("palvelu-nurmikon-kunnossapito"),
  /** Palvelusivu: Lumityöt & talvikunnossapito */
  palveluTalvikunnossapito: img("palvelu-lumityot-talvikunnossapito"),
  /** Palvelusivu: Kiinteistö- & teollisuuspesut */
  palveluPesupalvelut: img("palvelu-pesupalvelut"),
  /** Palvelusivu: Viherrakentaminen & rakentaminen */
  palveluViherrakentaminen: img("palvelu-viherrakentaminen"),
  /** Palvelusivu: Asfaltti- ja päällystetyöt */
  palveluAsfaltti: img("palvelu-asfaltti-paallystetyot"),
  /** Palvelusivu: Lehdet, puut & pensaat */
  palveluPuutarha: img("palvelu-lehdet-puut-pensaat"),
  /** Palvelusivu: Pihapesu */
  palveluPihapesu: img("palvelu-pihapesu"),
  /** Palvelusivu: Suursäkit */
  palveluSuursakit: img("palvelu-suursakit"),

  /** Kohderyhmä: Omakotitalot & loma-asunnot */
  kohderyhmaOmakotitalot: img("kohderyhma-omakotitalot"),
  /** Kohderyhmä: Taloyhtiöt & liikekiinteistöt */
  kohderyhmaTaloyhtiot: img("kohderyhma-taloyhtiot-liikekiinteistot"),
  /** Kohderyhmä: Kaupungit & kunnat */
  kohderyhmaKaupungit: img("kohderyhma-kaupungit-kunnat"),

  /** Uutinen: Circulation-yhteistyö */
  uutinenCirculation: img("uutinen-circulation-yhteistyo"),
  /** Uutinen: Kotitalousvähennys 2025 */
  uutinenKotitalousvahennys: img("uutinen-kotitalousvahennys-2025"),
  /** Uutinen: Lumen poiskuljetus */
  uutinenLumenPoiskuljetus: img("uutinen-lumen-poiskuljetus"),
  /** Uutinen: Rekry koneenkuljettaja */
  uutinenRekryKoneenkuljettaja: img("uutinen-rekry-koneenkuljettaja"),
  /** Uutinen: Avoimet työpaikat */
  uutinenAvoimetTyopaikat: img("uutinen-avoimet-tyopaikat"),
} as const;

/** Kuvakansio → polku (käytetään ohjeissa) */
export const IMAGE_FOLDERS: Record<keyof typeof IMAGES, string> = {
  etusivuHero: "etusivu-hero-talon-ulkonakyma",
  etusivuMiksiMe: "etusivu-miksi-me-nurmikko",
  etusivuHataTalvi: "etusivu-hata-talvikunnossapito",
  etusivuPalveluKiinteisto: "etusivu-palvelu-kiinteistonhuolto",
  etusivuPalveluTalvi: "etusivu-palvelu-talvikunnossapito",
  etusivuPalveluPiharemontit: "etusivu-palvelu-piharemontit",
  sivuKiinteistonhuoltoHero: "sivu-kiinteistonhuolto-hero",
  sivuKiinteistonhuoltoTalvi: "sivu-kiinteistonhuolto-talvi",
  sivuPalvelutHero: "sivu-palvelut-hero",
  sivuYritysHero: "sivu-yritys-hero",
  sivuYritysTiimi: "sivu-yritys-tiimi",
  sivuYhteystiedotHero: "sivu-yhteystiedot-hero",
  sivuAjankohtaistaHero: "sivu-ajankohtaista-hero",
  sivuTarjouspyyntoHero: "sivu-tarjouspyynto-hero",
  sivuVaihtolavaHero: "sivu-tilaa-vaihtolava-hero",
  sivuTietosuojaHero: "sivu-tietosuojaseloste-hero",
  sivuOletusHero: "sivu-oletus-hero",
  palveluKiinteistonhuolto: "palvelu-kiinteistonhuolto",
  palveluNurmikko: "palvelu-nurmikon-kunnossapito",
  palveluTalvikunnossapito: "palvelu-lumityot-talvikunnossapito",
  palveluPesupalvelut: "palvelu-pesupalvelut",
  palveluViherrakentaminen: "palvelu-viherrakentaminen",
  palveluAsfaltti: "palvelu-asfaltti-paallystetyot",
  palveluPuutarha: "palvelu-lehdet-puut-pensaat",
  palveluPihapesu: "palvelu-pihapesu",
  palveluSuursakit: "palvelu-suursakit",
  kohderyhmaOmakotitalot: "kohderyhma-omakotitalot",
  kohderyhmaTaloyhtiot: "kohderyhma-taloyhtiot-liikekiinteistot",
  kohderyhmaKaupungit: "kohderyhma-kaupungit-kunnat",
  uutinenCirculation: "uutinen-circulation-yhteistyo",
  uutinenKotitalousvahennys: "uutinen-kotitalousvahennys-2025",
  uutinenLumenPoiskuljetus: "uutinen-lumen-poiskuljetus",
  uutinenRekryKoneenkuljettaja: "uutinen-rekry-koneenkuljettaja",
  uutinenAvoimetTyopaikat: "uutinen-avoimet-tyopaikat",
};
