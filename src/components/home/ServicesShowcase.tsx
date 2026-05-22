"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { serviceDetails } from "@/data/services";
import {
  Reveal,
  SectionHeading,
  fadeUpVariants,
  staggerContainer,
} from "@/components/ui/motion";
import { getServiceIcon } from "@/lib/service-icons";

/** Päänostot, joissa kerrotaan käyttäjän ongelma ja Sun Pihan ratkaisu. */
const heroServices = [
  {
    slug: "kiinteistonhuolto",
    title: "Kiinteistönhuolto",
    promise: "Yksi sopimus, koko vuoden rauha",
    description:
      "Hoidamme kiinteistösi ulkoalueet, ylläpidon ja vikailmoitukset. Sinulla on aina yksi luotettava numero.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
    badge: "Sopimusasiakkaille kiinteät hinnat",
  },
  {
    slug: "lumityot-talvikunnossapito",
    title: "Talvikunnossapito",
    promise: "Lunta ei tarvitse pelätä",
    description:
      "Päivystys 24/7, lumenpudotus, auraus, hiekoitus ja poiskuljetus – nopeasti ja siististi.",
    image:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1400&q=80",
    badge: "Päivystys 24/7",
  },
  {
    slug: "viherrakentaminen",
    title: "Piharemontit",
    promise: "Pihasta unelmapiha",
    description:
      "Pihasuunnittelu, kivetykset, viherrakentaminen ja terassit. Suunnitellaan, toteutetaan ja siivotaan.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80",
    badge: "Kotitalousvähennys saatavilla",
  },
];

function HeroServiceCard({
  service,
  index,
}: {
  service: (typeof heroServices)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Link
      ref={ref}
      href={`/palvelut/${service.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-white/8 bg-charcoal-light/60"
    >
      <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </motion.div>

        {/* Tumma gradientti pohjasta */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10" />

        {/* Sun-glow ylhäältä hoverissa */}
        <div className="absolute inset-x-0 -top-16 h-32 bg-sun/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

        {/* Badge */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-charcoal/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream/80 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-sun" />
          {service.badge}
        </div>

        {/* Numero */}
        <div className="absolute right-5 top-5 font-display text-2xl font-bold text-cream/30 transition-colors group-hover:text-sun">
          0{index + 1}
        </div>

        {/* Sisältö */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun/90">
            {service.promise}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-cream md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
            {service.description}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sun transition-all group-hover:gap-3">
            Lue palvelusta
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesShowcase() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <SectionHeading
          label="Palvelumme"
          title="Kaikki pihasi ja kiinteistösi palvelut yhdeltä luukulta"
          description="Kolme pääsuuntaa kattaa 90 % asiakkaidemme tarpeista – ja sen päälle löydät kymmenkunta erikoispalvelua."
        />

        {/* Kolme pääpalvelua */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid gap-5 lg:grid-cols-3"
        >
          {heroServices.map((s, i) => (
            <motion.div key={s.slug} variants={fadeUpVariants}>
              <HeroServiceCard service={s} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* Kaikki muut palvelut tiiviinä gridinä */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-cream md:text-2xl">
                Muut palvelumme
              </h3>
              <Link
                href="/palvelut"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sun hover:text-sun-bright"
              >
                Kaikki palvelut
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceDetails
              .filter(
                (s) =>
                  !heroServices.find((h) => h.slug === s.slug)
              )
              .map((service, i) => {
                const Icon = getServiceIcon(service.icon);
                return (
                  <Reveal key={service.id} delay={i * 0.05}>
                    <Link
                      href={`/palvelut/${service.slug}`}
                      className="group flex h-full items-center gap-4 rounded-2xl border border-white/5 bg-charcoal-light/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sun/25 hover:bg-charcoal-light/80"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sun/15 to-sun/0 text-sun transition-colors group-hover:from-sun/25">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-sm font-semibold text-cream group-hover:text-sun transition-colors">
                          {service.title}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-cream/50">
                          {service.shortTitle}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-cream/30 transition-all group-hover:text-sun group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Reveal>
                );
              })}
          </div>
        </div>

        {/* CTA: Vain kuva, mutta huomiota herättävä */}
        <Reveal>
          <div className="mt-16 grid items-stretch gap-4 rounded-3xl border border-sun/20 bg-gradient-to-br from-charcoal-light to-charcoal/70 p-8 md:grid-cols-[2fr_1fr] md:gap-8 md:p-10">
            <div>
              <h3 className="font-display text-2xl font-bold text-cream md:text-3xl">
                Etkö ole varma mitä palvelua tarvitset?
              </h3>
              <p className="mt-3 max-w-xl text-cream/65">
                Kerro tilanteestasi muutamalla sanalla, ja räätälöimme
                sinulle sopivan kokonaisuuden. Maksutta ja sitoumuksetta.
              </p>
            </div>
            <div className="flex items-center md:justify-end">
              <Link
                href="/tarjouspyynto"
                className="btn-shine inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-sun px-7 text-base font-semibold text-charcoal hover:bg-sun-bright md:w-auto"
              >
                Räätälöi tarjous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
