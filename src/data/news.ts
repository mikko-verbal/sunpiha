import { IMAGES } from "./images";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "circulation",
    slug: "circulation-yhteistyo",
    title:
      "Sun Piha Oy ja Circulation tekevät tiivistä yhteistyötä kiertotalouden edistämiseksi",
    excerpt:
      "Kiinteistöhuollossa asianmukainen jätteiden käsittely ja kierrätys ovat keskeisiä keinoja ympäristökuormituksen vähentämiseksi.",
    date: "15.1.2025",
    image: IMAGES.uutinenCirculation,
    category: "Ajankohtaista",
    content: [
      "Kiinteistöhuollossa asianmukainen jätteiden käsittely ja kierrätys ovat keskeisiä keinoja ympäristökuormituksen vähentämiseksi ja arvokkaiden luonnonvarojen säästämiseksi.",
      "Yhdessä Circulationin kanssa varmistamme, että materiaalit saavat uuden elämän sen sijaan, että ne päätyisivät kaatopaikoille. Kiertotalous on osa arkipäiväämme – emme näe jätettä ongelmana vaan mahdollisuutena.",
      "Yhteistyömme kattaa muun muassa rakennus- ja purkujätteen, puu- ja biojätteen sekä maa-ainesten asianmukaisen lajittelun ja kierrätyksen. Asiakkaamme voivat luottaa siihen, että jätteet käsitellään vastuullisesti ja lainsäädännön mukaisesti.",
      "Kiertotalouden edistäminen on investointi tulevaisuuteen – sekä ympäristöön että asiakkaidemme kiinteistöjen arvoon.",
    ],
  },
  {
    id: "kotitalousvahennys",
    slug: "kotitalousvahennys-2025",
    title: "Kotitalousvähennys vuonna 2025",
    excerpt:
      "Hyödynnä kotitalousvähennys pihatyöpalveluissamme – autamme sinua selvittämään oikeuden vähennykseen.",
    date: "8.1.2025",
    image: IMAGES.uutinenKotitalousvahennys,
    category: "Ajankohtaista",
    content: [
      "Vuonna 2025 kotitalousvähennykseen on tullut muutoksia, jotka vaikuttavat kodin remontti- ja huoltotöiden verovähennyksiin. Uudet säännökset koskevat myös kiinteistönhuolto- ja rakentamispalveluitamme.",
      "Kotitalousvähennyksen uudet enimmäismäärät ja prosentit vuonna 2025:",
      "• Enimmäismäärä: 1 600 euroa per henkilö vuodessa. Puolisoiden yhteinen enimmäismäärä on 3 200 euroa vuodessa.",
      "• Vähennysprosentti: 35 % yritykseltä ostetun työn arvonlisäverollisesta osuudesta.",
      "• Omavastuu: 150 euroa vuodessa.",
      "Moni pihatyöpalvelumme kuuluu kotitalousvähennyksen piiriin. Autamme mielellämme selvittämään, mitkä työt ovat vähennyskelpoisia ja miten voit hyödyntää vähennystä parhaalla mahdollisella tavalla.",
      "Ota yhteyttä ja kysy lisää – autamme sinua hyödyntämään kotitalousvähennyksen.",
    ],
  },
  {
    id: "lumen-kuljetus",
    slug: "lumen-poiskuljetus",
    title: "Lumen poiskuljetus kiinteään hintaan",
    excerpt:
      "Tarjoamme lumen poiskuljetuksen kiinteään hintaan koko talvikauden ajan – ei yllätyksiä laskussa.",
    date: "20.12.2024",
    image: IMAGES.uutinenLumenPoiskuljetus,
    category: "Ajankohtaista",
    content: [
      "Etsitkö nopeaa ja luotettavaa tapaa päästä eroon lumesta? Sun Piha Oy tarjoaa helpon ja edullisen ratkaisun lumenpoiskuljetukseen pääkaupunkiseudulla!",
      "Palvelumme sisältää lumen poiskuljetuksen kiinteään hintaan 379,00 € (sis. alv). Kuorman tilavuus: yhteen kuormaan mahtuu noin 30 m³ lunta, joten palvelumme sopii mainiosti sekä yksityisille että yrityksille.",
      "Miksi valita meidät?",
      "• Kiinteä hinta – ei yllätyksiä laskussa",
      "• Nopea toimitus pääkaupunkiseudulla",
      "• Ammattitaitoinen tiimi ja moderni kalusto",
      "• Päivystys 24/7 talvikaudella",
      "Tilaa helposti soittamalla päivystysnumeroomme 041 312 1139 tai täyttämällä tarjouspyyntölomakkeen.",
    ],
  },
  {
    id: "rekry",
    slug: "rekry-koneenkuljettaja",
    title: "Rekrytoimme kokenutta koneenkuljettajaa talvikunnossapitoon",
    excerpt:
      "Etsimme ammattitaitoista koneenkuljettajaa vahvistamaan talvikunnossapidon tiimiämme.",
    date: "5.11.2024",
    image: IMAGES.uutinenRekryKoneenkuljettaja,
    category: "Ajankohtaista",
    content: [
      "Haemme kokenutta koneenkuljettajaa talvikunnossapitoon pääkaupunkiseudun alueelle.",
      "Työtehtävään kuuluu erilaiset talvikunnossapitotyötehtävät, kuten lumenauraus, hiekoitus ja lumen poiskuljetus. Työskentelet osana ammattitaitoista tiimiä ja käytät moderneja koneita.",
      "Edellytämme:",
      "• Voimassa oleva työkoneajokortti (T-kortti)",
      "• Kokemusta talvikunnossapidosta",
      "• Luotettavaa ja itsenäistä työotetta",
      "• Hyvää suomen kielen taitoa",
      "Tarjoamme vakituisen työsuhteen, kilpailukykyisen palkan ja hyvät työolosuhteet. Vastuullisuus, eettisyys ja työhyvinvointi ovat kaiken toimintamme pohjana.",
      "Lähetä avoin hakemuksesi sähköpostitse: asiakaspalvelu@sunpiha.com",
    ],
  },
  {
    id: "tyopaikat",
    slug: "avoimet-tyopaikat",
    title: "Avoimet työpaikat",
    excerpt:
      "Tutustu avoimiin työpaikkoihin Sun Piha Oy:llä – rakennamme yhdessä alan parasta tiimiä.",
    date: "1.10.2024",
    image: IMAGES.uutinenAvoimetTyopaikat,
    category: "Ajankohtaista",
    content: [
      "Kiinnostaako työ kiinteistöhuollon parissa? Etsitkö pidempiaikaista työtä, vai sopisiko sinulle kausiluonteinen työ?",
      "Vastuullisuus, eettisyys ja työhyvinvointi ovat kaiken toimintamme pohjana. Haemme nyt kiinteistöhuollosta kiinnostuneita ja motivoituneita tekijöitä eri työtehtäviin pääkaupunkiseudun alueelle.",
      "Odotamme sinulta työtä pelkäämätöntä asennetta sekä reipasta itsenäistä otetta työntekoon. Etsimme:",
      "• Kiinteistöhoitajia",
      "• Koneenkuljettajia",
      "• Vihertyöntekijöitä",
      "• Erilaisia kausityöntekijöitä",
      "Työtehtäviä meillä on tarjolla reilusti, joten ota rohkeasti yhteyttä – kerro itsestäsi ja kiinnostuksistasi.",
      "Hakemukset: asiakaspalvelu@sunpiha.com",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs() {
  return newsArticles.map((a) => a.slug);
}
