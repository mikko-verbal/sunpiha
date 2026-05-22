export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "tuomas",
    quote:
      "Työt hoidettiin sovitusti ja aikataulussa. Työnosuus ja materiaalikustannukset pysyivät myös liki alkuperäisessä hinta-arviossa. Voin vahvasti suositella!",
    author: "Tuomas K.",
    location: "Helsinki",
  },
  {
    id: "saini",
    quote:
      "Kiitos koko porukalle! Toivottavasti lunta on hieman vähemmän ensitalvena 🙂 Loistava palvelu!",
    author: "Saini L.",
    location: "Vantaa",
  },
  {
    id: "laura",
    quote:
      "Puhelusta meni alle 2h kun ensimmäinen oli jo paikalla. Sovittiinkin jo alustavasti kesämökille toinenkin projekti. Kiitos R & J!",
    author: "Laura",
    location: "Espoo",
  },
  {
    id: "rivitalo",
    quote:
      "Paljon kiitoksia hyvin tehdystä piharemontista! Nyt pihalla on mukava viettää aikaa, kun remontin lopputulos on erittäin siisti.",
    author: "Urakkamaailma.fi",
    location: "Espoo",
  },
  {
    id: "takapiha",
    quote:
      "Sun Piha teki meille takapihan (maantäyttö, mullan levitys, kivetysalueen). Olemme erittäin tyytyväisiä työn toteutukseen ja palveluun. Hommat sujuivat nopeasti ja sovitussa ajassa.",
    author: "Urakkamaailma.fi",
    location: "Vantaa",
  },
];

export const whyChooseUs = [
  {
    title: "Päivystys 24/7",
    description:
      "Päivystysaikana suoritetaan työt, joita ei voida turvallisuussyistä siirtää seuraavaan arkipäivään – lumenpudotukset, liukkaudentorjunta ja myrskyraivaus.",
    icon: "clock",
  },
  {
    title: "Paikallinen tiimi",
    description:
      "Paikallisena huoltoyhtiönä pystymme reagoimaan nopeasti – apu on aina lähellä Helsingissä, Espoossa ja Vantaalla.",
    icon: "map",
  },
  {
    title: "Laatutakuu",
    description:
      "Takaamme laadukkaan ja ammattitaitoisen palvelukokemuksen jokaiselle asiakkaallemme – työ tehdään kerralla oikein.",
    icon: "shield",
  },
  {
    title: "Kestävyys",
    description:
      "Yhdessä Circulationin kanssa varmistamme, että materiaalit saavat uuden elämän ja ympäristökuormitus pienenee.",
    icon: "leaf",
  },
];
