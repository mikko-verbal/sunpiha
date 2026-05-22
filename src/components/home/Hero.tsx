"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/utils";
import { HeroParticles } from "./HeroParticles";

const heroChips = [
  "Kiinteistönhuolto",
  "Julkisivupesut",
  "Puunkaato & raivaukset",
  "Talvikunnossapito",
  "Asfaltinkorjaus",
  "Graffitinpoistot",
];

const heroStats = [
  { label: "Asiakkaita PK-seudulla", value: "500+" },
  { label: "Vastaus kyselyihin", value: "< 24 h" },
  { label: "Päivystys", value: "24/7" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Vain opacity – ei skaalaa/parallaxia taustakuvassa (raskas scrollatessa)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Kiinteä tausta – ei scroll-linkitettyä transformia */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Kaunis suomalainen piha auringonvalossa"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="editorial-overlay absolute inset-0" />
      </div>

      {/* Sivuille tulevat valoreunukset */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-sun/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-forest/30 blur-[140px]" />
      </div>

      <HeroParticles />

      <motion.div
        className="noise-overlay relative z-10 container-wide"
        style={{ opacity: contentOpacity }}
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-charcoal/50 px-4 py-2 text-xs text-cream/80 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sun" />
            </span>
            <span className="font-medium">
              Päivystys käynnissä – soita {PHONE_NUMBER}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-cream text-balance"
          >
            Monipuolisia kiinteistönhuoltopalveluita{" "}
            <span className="gradient-text-warm">vuoden ympäri</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream md:text-xl text-pretty [text-shadow:0_1px_2px_rgba(11,16,13,0.95),0_2px_12px_rgba(11,16,13,0.85),0_0_28px_rgba(11,16,13,0.7)]"
          >
            Helsingissä, Espoossa ja Vantaalla. Takaamme laadukkaan ja
            ammattitaitoisen palvelukokemuksen jokaiselle asiakkaallemme.
          </motion.p>

          {/* CTA-painikkeet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="btn-shine w-full gold-glow sm:w-auto"
            >
              <Link href="/tarjouspyynto">
                Pyydä maksuton tarjous
                <span className="ml-1 hidden text-xs font-normal opacity-70 sm:inline">
                  · 60 s
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href={PHONE_HREF}>
                <Phone className="h-5 w-5" />
                Soita 24/7
              </a>
            </Button>
          </motion.div>

          {/* Trust-rivi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cream/55"
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-sun text-sun" />
              <span>4.9/5 asiakasarvostelut</span>
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-cream/20 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-sun" />
              Tilaajavastuu &amp; Luotettava kumppani
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-cream/20 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-sun" />
              Vastaus 24 h sisällä
            </span>
          </motion.div>

          {/* Palvelusirpaleet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 hidden flex-wrap items-center justify-center gap-2 sm:flex"
          >
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-cream/75 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Tilastokortit – kelluvat heron alaosaan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-4 text-center md:p-5"
            >
              <p className="font-display text-2xl font-bold text-sun md:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cream/55 md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-indikaattori */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-cream/40"
        >
          <span className="text-[10px] uppercase tracking-[0.22em]">
            Selaa
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* Pohjan fade */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] h-40 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}
