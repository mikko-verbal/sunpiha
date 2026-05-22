"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Wrench, Heart, Shield, Award } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { IMAGES } from "@/data/images";

const values = [
  {
    icon: Wrench,
    title: "Ammattitaito",
    description:
      "Ammattitaito ja asiakastyytyväisyys kulkevat meillä käsikädessä. Panostamme nopeaan, hyvään ja ystävälliseen palveluun. Työt tehdään aina sovitusti ja ajallaan.",
  },
  {
    icon: Heart,
    title: "Helppous",
    description:
      "Vaivaton ja helppo palvelu, joka on saatavilla silloin kun sitä tarvitset.",
  },
  {
    icon: Shield,
    title: "Vastuullisuus",
    description:
      "Vastuullisuus ja eettisyys ovat kaiken toimintamme pohjana.",
  },
  {
    icon: Award,
    title: "Luotettava",
    description:
      "Hoidamme verotuksen, vakuutukset ja muut lakisääteiset velvoitteet asiaankuuluvasti. Kuulumme tilaajavastuu.fi sekä Luotettava kumppani –palveluihin.",
  },
];

export default function YritysContent() {
  return (
    <>
      <PageHero
        label="Yritys"
        title="Sun Piha Oy"
        subtitle="Kotimainen palveluyritys – olemme apunasi vuoden jokaisena päivänä, tarvittaessa vaikka kellon ympäri."
        image={IMAGES.sivuYritysHero}
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl text-balance">
                Haluamme tarjota asiakkaille kokonaisvaltaista ja luotettavaa
                palvelua
              </h2>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-cream/65 md:text-xl">
                Laatu ja asiakkaan tarpeet ovat aina etusijalla. Näemme
                mahdollisuuden uudistaa alaa – tuoda siihen enemmän
                asiakaslähtöisyyttä ja nykyaikaisia ratkaisuja. Tehtävämme on
                tuoda arjen ylellisyys jokaisen ulottuville laadukkaan ja
                kokonaisvaltaisen palvelumme avulla.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <SectionHeading
            label="Miksi me?"
            title="Monta syytä valita meidät"
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/5 bg-charcoal/50 p-6 transition-colors hover:border-sun/15 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun/10">
                    <value.icon className="h-6 w-6 text-sun" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/55">
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
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={IMAGES.sivuYritysTiimi}
                  alt="Sun Piha tiimi työssä"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
                Palvelemme pääkaupunkiseudulla
              </h2>
              <div className="mt-6 space-y-4 text-cream/60 leading-relaxed">
                <p>
                  Sun Piha Oy on pääkaupunkiseudulla toimiva kiinteistönhuolto-
                  ja pihapalveluyritys. Palvelemme omakotitalojen omistajia,
                  taloyhtiöitä, liikekiinteistöjä sekä kaupunkeja ja kuntia.
                </p>
                <p>
                  Takaamme laadukkaan ja ammattitaitoisen palvelukokemuksen
                  jokaiselle asiakkaallemme Helsingissä, Espoossa ja Vantaalla.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-sun/20 bg-gradient-to-br from-forest/20 to-charcoal p-8 text-center md:p-16">
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
