"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  MapPin,
  Shield,
  Leaf,
  Phone,
  CheckCircle,
} from "lucide-react";
import { whyChooseUs } from "@/data/testimonials";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/utils";
import { usePrefersNativeScroll } from "@/hooks/use-native-scroll";
import { IMAGES } from "@/data/images";
import { Button } from "@/components/ui/button";
import {
  fadeUpVariants,
  slideInRight,
  staggerContainer,
} from "@/components/ui/motion";

const iconMap = {
  clock: Clock,
  map: MapPin,
  shield: Shield,
  leaf: Leaf,
};

const promises = [
  "Vastaamme aina 24 tunnin sisällä – ja yleensä jo saman päivän",
  "Pidämme aikataulun ja sovitun hinnan – ei yllätyslaskuja",
  "Työ tehdään kerralla loppuun, siisteys taattu",
  "Sopimusasiakkaille kiinteät hinnat ja oma yhteyshenkilö",
];

export function WhyChooseUs() {
  const prefersNative = usePrefersNativeScroll();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-forest/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sun/10 blur-[100px]" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          {/* Kuva ja päällekkäiset kortit */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/8 shadow-2xl shadow-black/40">
              <motion.div
                style={prefersNative ? undefined : { y: imageY }}
                className={prefersNative ? "absolute inset-0" : "absolute inset-0 scale-110"}
              >
                <Image
                  src={IMAGES.etusivuMiksiMe}
                  alt="Ammattitaitoinen piha- ja kiinteistönhuolto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            </div>

            {/* 24/7 -badge */}
            <motion.div
              style={prefersNative ? undefined : { y: badgeY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute -bottom-6 -right-3 glass-panel rounded-2xl p-5 gold-glow md:-right-8 md:p-7"
            >
              <p className="font-display text-4xl font-bold text-sun md:text-5xl">
                24/7
              </p>
              <p className="mt-1 text-xs font-medium text-cream/70 md:text-sm">
                Päivystyspalvelu
              </p>
            </motion.div>

            {/* Asiakaspalaute-bubblet */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="absolute -left-3 top-8 hidden max-w-[230px] rounded-2xl border border-white/10 bg-charcoal-light/85 p-4 shadow-xl backdrop-blur-md md:block"
            >
              <div className="flex items-center gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-cream/85">
                &ldquo;Puhelusta meni alle 2 h kun ensimmäinen oli jo paikalla.&rdquo;
              </p>
              <p className="mt-1.5 text-[10px] uppercase tracking-wider text-cream/45">
                Laura · Espoo
              </p>
            </motion.div>
          </div>

          {/* Teksti ja syyt */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUpVariants}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sun"
            >
              Miksi Sun Piha?
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="font-display text-4xl font-bold tracking-tight text-cream md:text-5xl text-balance"
            >
              Suomalainen kiinteistökumppani, johon voi oikeasti luottaa
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="mt-6 text-lg leading-relaxed text-cream/65"
            >
              Sun Piha syntyi yksinkertaisesta ajatuksesta: pihan- ja
              kiinteistönhuollon pitää olla helppoa, ennustettavaa ja
              ammattimaista. Me huolehdimme kiinteistöstäsi kuin omastamme.
            </motion.p>

            {/* Palvelulupaus */}
            <motion.ul variants={staggerContainer} className="mt-8 space-y-3">
              {promises.map((promise) => (
                <motion.li
                  key={promise}
                  variants={fadeUpVariants}
                  className="flex items-start gap-3 text-sm leading-relaxed text-cream/75"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
                  {promise}
                </motion.li>
              ))}
            </motion.ul>

            {/* Syyt kortteina */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {whyChooseUs.map((item, i) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={item.title}
                    variants={slideInRight}
                    custom={i}
                    className="rounded-2xl border border-white/5 bg-charcoal-light/40 p-5 transition-colors hover:border-sun/15 hover:bg-charcoal-light/70"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun/10">
                      <Icon className="h-5 w-5 text-sun" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/55">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUpVariants}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="btn-shine gold-glow">
                <a href={PHONE_HREF}>
                  <Phone className="h-5 w-5" />
                  Soita {PHONE_NUMBER}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/yritys">Lue lisää meistä</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
