import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/motion";
import { COMPANY, SERVICE_EMAIL, PHONE_NUMBER, PHONE_HREF } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tietosuojaseloste",
  description: "Sun Piha Oy:n tietosuojaseloste – henkilötietojen käsittely ja oikeutesi.",
};

const sections = [
  {
    title: "1. Kerätyt tiedot",
    content: [
      "Keräämme henkilötietoja pääasiassa suoraan sinulta, kun käytät verkkosivustoamme tai olet yhteydessä meihin liiketoiminnan puitteissa. Keräämämme tiedot voivat sisältää:",
      "– Nimi\n– Yhteystiedot (sähköpostiosoite, puhelinnumero)\n– Osoitetiedot\n– Asiakastiedot ja tilaushistoria\n– Muita vapaaehtoisesti antamiasi tietoja viestinnässä kanssamme",
    ],
  },
  {
    title: "2. Tietojen käyttötarkoitus",
    content: [
      "Käytämme keräämiämme henkilötietoja seuraaviin tarkoituksiin:",
      "– Asiakassuhteen hoitaminen ja asiakaspalvelu\n– Tilauksien käsittely ja toimitus\n– Markkinointiviestintä, mikäli olet antanut siihen suostumuksesi\n– Verkkosivustomme kehittäminen ja parantaminen\n– Lainsäädännöllisten velvoitteiden noudattaminen",
    ],
  },
  {
    title: "3. Tietojen luovuttaminen ja siirtäminen",
    content: [
      "Emme luovuta henkilötietoja kolmansille osapuolille ilman suostumustasi, paitsi silloin kun se on tarpeen lainsäädännöllisten velvoitteiden tai sopimusten täyttämiseksi. Voimme siirtää tietoja myös ulkopuolisille palveluntarjoajille, jotka käsittelevät tietoja puolestamme sopimusten perusteella.",
    ],
  },
  {
    title: "4. Tietojen säilytysaika",
    content: [
      "Säilytämme henkilötietoja vain niin kauan kuin se on tarpeen tässä tietosuojaselosteessa kuvattujen tarkoitusten toteuttamiseksi tai niin kauan kuin laki niin vaatii.",
    ],
  },
  {
    title: "5. Evästeet ja muut seurantatekniikat",
    content: [
      "Käytämme evästeitä ja muita vastaavia seurantatekniikoita parantaaksemme verkkosivustomme käyttökokemusta ja kerätäksemme tietoja verkkosivustomme käytöstä. Voit hallita evästeasetuksiasi selaimen asetuksista.",
    ],
  },
  {
    title: "6. Tietojen turvallisuus",
    content: [
      "Pidämme huolta keräämiemme tietojen turvallisuudesta ja suojaamme niitä asianmukaisin teknisin ja organisatorisin keinoin.",
    ],
  },
  {
    title: "7. Tietojen käsittelyyn liittyvät oikeutesi",
    content: [
      "Sinulla on oikeus pyytää pääsyä omiin henkilötietoihisi, oikaista virheelliset tiedot, poistaa tietoja tai rajoittaa niiden käsittelyä sekä vastustaa tietojesi käsittelyä tietyissä tilanteissa. Voit käyttää näitä oikeuksia ottamalla meihin yhteyttä yhteystietojemme kautta.",
    ],
  },
  {
    title: "8. Muutokset tietosuojaselosteeseen",
    content: [
      "Pidätämme oikeuden päivittää tätä tietosuojaselostetta tarvittaessa. Suosittelemme tarkistamaan säännöllisesti mahdolliset muutokset.",
    ],
  },
];

export default function TietosuojaselostePage() {
  return (
    <>
      <PageHero
        label="Tietosuoja"
        title="Tietosuojaseloste"
        subtitle="Päivitetty viimeksi: 6.3.2023"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-cream/70">
                Tämä tietosuojaseloste kuvaa, miten {COMPANY.name} kerää, käyttää
                ja käsittelee henkilötietoja verkkosivustollaan ja muissa
                liiketoimintayhteyksissä.
              </p>

              <div className="mt-12 space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="font-display text-xl font-bold text-cream">
                      {section.title}
                    </h2>
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-4 whitespace-pre-line leading-relaxed text-cream/60"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                <div className="rounded-2xl border border-white/5 bg-charcoal-light p-8">
                  <h2 className="font-display text-xl font-bold text-cream">
                    9. Yhteystiedot
                  </h2>
                  <p className="mt-4 text-cream/60">
                    Jos sinulla on kysyttävää tästä tietosuojaselosteesta tai
                    henkilötietojesi käsittelystä, voit ottaa meihin yhteyttä:
                  </p>
                  <ul className="mt-4 space-y-2 text-cream/70">
                    <li>{COMPANY.name}</li>
                    <li>
                      Osoite: {COMPANY.address}, {COMPANY.postalCode}{" "}
                      {COMPANY.city}
                    </li>
                    <li>
                      Sähköposti:{" "}
                      <a
                        href={`mailto:${SERVICE_EMAIL}`}
                        className="text-sun hover:underline"
                      >
                        {SERVICE_EMAIL}
                      </a>
                    </li>
                    <li>
                      Puhelin:{" "}
                      <a href={PHONE_HREF} className="text-sun hover:underline">
                        {PHONE_NUMBER}
                      </a>
                    </li>
                  </ul>
                  <p className="mt-6 text-sm text-cream/40">
                    Tämä tietosuojaseloste on voimassa ja päivitetty viimeksi
                    6.3.2023.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/yhteystiedot"
                  className="text-sm font-semibold text-sun hover:text-sun-bright transition-colors"
                >
                  ← Yhteystiedot
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
