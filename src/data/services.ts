export type ServiceIconName =
  | "hammer"
  | "leaf"
  | "snowflake"
  | "droplets"
  | "treePine"
  | "truck"
  | "package"
  | "sparkles";

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  icon: ServiceIconName;
  items: string[];
  benefits: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "kiinteistonhuolto",
    slug: "kiinteistonhuolto",
    title: "Kiinteistönhuolto",
    shortTitle: "Kiinteistönhuolto",
    description:
      "Kattava huoltopalvelu omakotitaloille, taloyhtiöille ja liikekiinteistöille – vuoden ympäri.",
    longDescription:
      "Tarjoamme monipuolisia kiinteistönhuoltopalveluita, jotka kattavat ulkoalueiden hoidon, vikailmoitukset, liputukset ja ylläpitopalvelut. Olemme luotettava kumppani kiinteistösi arjen sujuvuudelle.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    icon: "hammer",
    items: [
      "Huoltopalvelut",
      "Ulkoalueiden hoito",
      "Vikailmoitukset",
      "Liputukset",
      "Kiinteistön ylläpitopalvelut",
      "Muut kiinteistöhuollon osa-alueet",
    ],
    benefits: [
      "Kokonaisvaltainen huolto vuoden ympäri",
      "Nopea reagointi vikatilanteisiin",
      "Sopimusasiakkaille kiinteät hinnat",
    ],
  },
  {
    id: "nurmikko",
    slug: "nurmikon-kunnossapito",
    title: "Nurmikon kunnossapito",
    shortTitle: "Nurmikko",
    description:
      "Leikkuu, kastelu, lannoitus ja paikkaukset – unelmapiha alkaa täydellisestä nurmikosta.",
    longDescription:
      "Ammattitaitoinen nurmikon hoito kaikkine osa-alueineen. Hoidamme nurmikon leikkuun, kastelun, lannoituksen ja paikkaukset – niin että pihasi on aina edustava.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80",
    icon: "leaf",
    items: [
      "Leikkuu",
      "Paikkaukset",
      "Kastelu",
      "Siirtonurmen asennus",
      "Lannoitukset ja kalkitukset",
      "Rikkakasvien torjunta",
    ],
    benefits: [
      "Säännöllinen hoitoohjelma",
      "Ammattilaisen lannoitusneuvonta",
      "Siirtonurmen asennus ja hoito",
    ],
  },
  {
    id: "talvikunnossapito",
    slug: "lumityot-talvikunnossapito",
    title: "Lumityöt & talvikunnossapito",
    shortTitle: "Talvikunnossapito",
    description:
      "Lumenpudotus, auraus, hiekoitus ja poiskuljetus – päivystys 24/7 talvikaudella.",
    longDescription:
      "Luotettava talvikunnossapito koko talvikauden. Hoidamme lumenpudotukset, auraus-, hiekoitus- ja poiskuljetustyöt ammattitaidolla. Päivystys 24/7.",
    image:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&q=80",
    icon: "snowflake",
    items: [
      "Lumenpudotus",
      "Lumenauraus ja käsilumityöt",
      "Hiekoitukset",
      "Lumen poiskuljetus",
      "Hiekanpoisto",
    ],
    benefits: [
      "Päivystys 24/7 talvikaudella",
      "Nopea reagointi lumitilanteisiin",
      "Lumen poiskuljetus kiinteään hintaan",
    ],
  },
  {
    id: "pesupalvelut",
    slug: "pesupalvelut",
    title: "Kiinteistö- & teollisuuspesut",
    shortTitle: "Pesupalvelut",
    description:
      "Julkisivut, huopakatot, teollisuus- ja korkeapainepesut ammattilaisen otteella.",
    longDescription:
      "Ammattitaitoiset pesupalvelut julkisivuista teollisuuskiinteistöihin. Graffitin poisto, korkeapainepesut ja parkkihallipesut – siisti julkisivu ja turvallinen ympäristö.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    icon: "droplets",
    items: [
      "Graffitin poistot",
      "Julkisivupesut",
      "Parkkihallipesut",
      "Korkeapainepesut",
      "Muut töhrynpoistot",
    ],
    benefits: [
      "Ympäristöystävälliset pesuaineet",
      "Korkeapainetekniikka",
      "Teollisuus- ja julkisivukokemus",
    ],
  },
  {
    id: "viherrakentaminen",
    slug: "viherrakentaminen",
    title: "Viherrakentaminen & rakentaminen",
    shortTitle: "Viherrakentaminen",
    description:
      "Pihasuunnittelu, istutukset ja viherrakentaminen – luomme pihasi unelmien mukaiseksi.",
    longDescription:
      "Suunnittelemme ja rakennamme pihoja, joissa on hyvä olla. Viherrakentaminen, saneeraus, pienkorjaus ja maalaustyöt ammattilaisen otteella.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    icon: "treePine",
    items: [
      "Uudisrakentaminen",
      "Saneeraus",
      "Viherrakentaminen",
      "Pienkorjaus",
      "Maalaustyöt",
    ],
    benefits: [
      "Kokonaisvaltainen pihasuunnittelu",
      "Laadukkaat materiaalit",
      "Joustava toteutus",
    ],
  },
  {
    id: "asfaltti",
    slug: "asfaltti-paallystetyot",
    title: "Asfaltti- ja päällystetyöt",
    shortTitle: "Asfaltti",
    description:
      "Halkeamien korjaus, reikien paikkaus ja routa- sekä juurivaurioiden korjaukset.",
    longDescription:
      "Asfaltin korjaus ja päällystetyöt pihoille, pysäköintialueille ja teille. Korjaamme halkeamat, reiät ja routa- sekä juurivauriot kestävästi.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
    icon: "truck",
    items: [
      "Halkeamat",
      "Asfaltti reiät",
      "Routa- ja juurivauriot",
      "Kaivojen korjaukset",
      "Muut asfalttipientyöt",
    ],
    benefits: [
      "Nopea korjaus",
      "Kestävä lopputulos",
      "Pienet ja suuret kohteet",
    ],
  },
  {
    id: "puutarha",
    slug: "lehdet-puut-pensaat",
    title: "Lehdet, puut & pensaat",
    shortTitle: "Puutarha",
    description:
      "Lehtien puhallus, istutukset, talvisuojaukset ja alas-leikkaukset ammattitaidolla.",
    longDescription:
      "Hoidamme puiden, pensaiden ja lehtien käsittelyn ammattitaidolla. Syksyn lehtien puhallus, istutukset, talvisuojaukset ja leikkaukset.",
    image:
      "https://images.unsplash.com/photo-1466693908841-165274d6c555?w=1200&q=80",
    icon: "treePine",
    items: [
      "Lehtien puhallus ja haravointi",
      "Istutukset",
      "Lehtijätteen poisvienti",
      "Talvisuojaukset",
      "Alas-leikkaukset",
    ],
    benefits: [
      "Kausittainen hoito-ohjelma",
      "Puunkaato ja raivaus",
      "Jätteen asianmukainen käsittely",
    ],
  },
  {
    id: "pihapesu",
    slug: "pihapesu",
    title: "Pihapesu",
    shortTitle: "Pihapesu",
    description:
      "Pihakivet, terassipesu, rännien puhdistus ja piha-aidat – pihasi loistaa kuin uusi.",
    longDescription:
      "Pihapesu ja ulkoalueiden siivous palauttaa pihasi entiseen loistoonsa. Pihakivet, terassit, rännit ja piha-aidat – kaikki hoidetaan ammattitaidolla.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    icon: "sparkles",
    items: [
      "Pihakivet ja laatoitukset",
      "Terassipesu ja käsittely",
      "Rännien puhdistus ja kattopesu",
      "Piha-aidat",
    ],
    benefits: [
      "Korkeapainepesu",
      "Suojakäsittelyt terasseille",
      "Kattoturvallinen työskentely",
    ],
  },
  {
    id: "suursakit",
    slug: "suursakit",
    title: "Suursäkit",
    shortTitle: "Suursäkit",
    description:
      "Mullat, hiekat, kivituhkat ja koriste- sekä kuorikatteet – toimitus ja nouto.",
    longDescription:
      "Toimitamme laadukkaat maa-ainekset suoraan kohteeseen. Mullat, hieat, kivituhkat, kivimurskat, sepelit ja koriste- sekä kuorikatteet.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    icon: "package",
    items: [
      "Mullat",
      "Hiekat ja kivituhkat",
      "Kivimurskat ja sepelit",
      "Koriste- ja kuorikatteet",
      "Noutopalvelut",
    ],
    benefits: [
      "Nopea toimitus",
      "Laadukkaat materiaalit",
      "Joustava noutopalvelu",
    ],
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const services: Service[] = serviceDetails.map((s) => ({
  id: s.id,
  title: s.title,
  description: s.description,
  image: s.image.replace("1200", "800"),
  href: `/palvelut/${s.slug}`,
}));

export const serviceCategories = [
  {
    title: "Omakotitalot & loma-asunnot",
    description:
      "Henkilökohtainen palvelu ja joustavat ratkaisut omakotitalojen ja lomakiinteistöjen tarpeisiin.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Taloyhtiöt & liikekiinteistöt",
    description:
      "Luotettava kumppani taloyhtiöiden ja liikekiinteistöjen ylläpitoon ja huoltoon.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Kaupungit & kunnat",
    description:
      "Laajamittainen kiinteistönhuolto ja ulkoalueiden hoito julkisille toimijoille.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return serviceDetails.map((s) => s.slug);
}
