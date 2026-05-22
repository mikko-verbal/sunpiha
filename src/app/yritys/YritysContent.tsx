"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Leaf } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, SectionHeading } from "@/components/ui/motion";

const values = [
  {
    icon: Users,
    title: "Paikallinen tiimi",
    description:
      "Olemme kasvaneet pääkaupunkiseudulla ja tunnemme alueen erityispiirteet – olemme aina lähellä.",
  },
  {
    icon: Award,
    title: "Laatu ensin",
    description:
      "Jokainen työ tehdään ammattitaidolla ja huolella. Emme tingi laadusta – se on lupauksemme.",
  },
  {
    icon: Leaf,
    title: "Kestävyys",
    description:
      "Ympäristövastuullisuus on osa arkeamme. Kierrätämme materiaalit ja vähennämme ympäristökuormitusta.",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Perustaminen",
    description:
      "Sun Piha Oy perustettiin tarjoamaan laadukkaita pihapalveluita pääkaupunkiseudulla.",
  },
  {
    year: "2015",
    title: "Laajentuminen",
    description:
      "Palveluvalikoima laajeni kiinteistönhuoltoon, talvikunnossapitoon ja pesupalveluihin.",
  },
  {
    year: "2020",
    title: "24/7 päivystys",
    description:
      "Käynnistimme ympärivuorokautisen päivystyspalvelun asiakkaidemme turvallisuuden tueksi.",
  },
  {
    year: "2025",
    title: "Kiertotalous",
    description:
      "Tiivistä yhteistyötä Circulationin kanssa kiertotalouden edistämiseksi kiinteistöhuollossa.",
  },
];

export default function YritysContent() {
  return (
    <>
      <PageHero
        label="Yritys"
        title="Sun Piha Oy"
        subtitle="Luotettava kumppani kiinteistönhuoltoon ja pihapalveluihin pääkaupunkiseudulla vuodesta 2010."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
                Ammattitaitoa ja intoa jokaisessa työssä
              </h2>
              <div className="mt-6 space-y-4 text-cream/60 leading-relaxed">
                <p>
                  Sun Piha Oy on pääkaupunkiseudulla toimiva kiinteistönhuolto-
                  ja pihapalveluyritys. Palvelemme omakotitalojen omistajia,
                  taloyhtiöitä, liikekiinteistöjä sekä kaupunkeja ja kuntia
                  laadukkailla ja luotettavilla palveluilla.
                </p>
                <p>
                  Tiimimme koostuu kokeneista ammattilaisista, jotka hoitavat
                  jokaisen työn kuin omaansa. Vastaamme nopeasti, toimimme
                  joustavasti ja takaamme laadukkaan lopputuloksen – vuoden
                  jokaisena päivänä.
                </p>
                <p>
                  Takaamme laadukkaan ja ammattitaitoisen palvelukokemuksen
                  jokaiselle asiakkaallemme Helsingissä, Espoossa ja Vantaalla.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Sun Piha tiimi työssä"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <SectionHeading
            label="Arvomme"
            title="Mihin uskomme"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/5 bg-charcoal/50 p-8 text-center transition-colors hover:border-sun/15">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sun/10">
                    <value.icon className="h-7 w-7 text-sun" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/50">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            label="Historia"
            title="Matkamme tähän asti"
            align="center"
          />
          <div className="mx-auto max-w-2xl">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1}>
                <div className="relative flex gap-8 pb-12 last:pb-0">
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[27px] top-14 bottom-0 w-px bg-white/10" />
                  )}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sun/30 bg-sun/10">
                    <span className="text-xs font-bold text-sun">
                      {item.year}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-sun/20 bg-gradient-to-br from-forest/20 to-charcoal p-10 text-center md:p-16">
              <CheckCircle className="mx-auto h-12 w-12 text-sun" />
              <h2 className="mt-6 font-display text-3xl font-bold text-cream md:text-4xl">
                Haluatko liittyä tiimiimme?
              </h2>
              <p className="mt-4 text-cream/60">
                Etsimme jatkuvasti ammattitaitoisia tekijöitä vahvistamaan
                tiimiämme. Tutustu avoimiin työpaikkoihin.
              </p>
              <motion.a
                href="/ajankohtaista/avoimet-tyopaikat"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center rounded-full bg-sun px-8 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-sun-bright"
              >
                Avoimet työpaikat
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
