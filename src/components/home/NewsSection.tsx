"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { newsArticles } from "@/data/news";
import { NewsCard } from "@/components/news/NewsCard";
import { SectionHeading } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/utils";

export function NewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="ajankohtaista"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="Ajankohtaista"
            title="Uutiset ja tiedotteet"
            description="Kotitalousvähennys, kausikampanjat ja avoimet työpaikat – pysy ajan tasalla."
            align="left"
          />
          <div className="mb-16 flex shrink-0 gap-2 md:mb-0">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition-colors hover:border-sun/30 hover:bg-white/5"
              aria-label="Edellinen"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition-colors hover:border-sun/30 hover:bg-white/5"
              aria-label="Seuraava"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:-mx-0 md:px-0"
          data-lenis-prevent
        >
          {newsArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[320px] shrink-0 md:w-[380px]"
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="/ajankohtaista">
              Kaikki uutiset
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function EmergencyBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden py-24 md:py-28"
    >
      <motion.div style={{ x, scale }} className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />
        <div className="absolute inset-0 bg-charcoal/55" />
      </motion.div>

      <div className="container-wide relative">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
              <AlertTriangle className="h-3.5 w-3.5" />
              Päivystys 24/7
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold text-cream md:text-5xl lg:text-6xl text-balance">
              Apu on aina <span className="gradient-text-warm">lähellä</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              Päivystysaikana hoidamme työt, joita ei voida turvallisuussyistä
              siirtää – lumenpudotukset, liukkaudentorjunta, myrskyraivaus ja
              muut kiireelliset tilanteet. Paikallisena tiiminä reagoimme
              minuuteissa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sun px-7 text-base font-semibold text-charcoal hover:bg-sun-bright"
              >
                <Phone className="h-5 w-5" />
                Soita {PHONE_NUMBER}
              </a>
              <Link
                href="/tilaa-vaihtolava"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-base font-medium text-cream hover:border-sun/40 hover:bg-white/5"
              >
                Tilaa vaihtolava
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Päivystyspuhelin-kortti */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel relative ml-auto w-full max-w-md rounded-3xl p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sun">
              Päivystysnumero
            </p>
            <a
              href={PHONE_HREF}
              className="mt-3 block font-display text-3xl font-bold tracking-tight text-cream hover:text-sun-glow md:text-4xl"
            >
              {PHONE_NUMBER}
            </a>
            <p className="mt-3 text-sm text-cream/65">
              Vastaamme ympäri vuorokauden, 365 päivää vuodessa.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-cream/55">
              <li>· Liukkaudentorjunta</li>
              <li>· Lumenpudotukset</li>
              <li>· Myrskyraivaus</li>
              <li>· Kiinteistöä vaarantavat tilanteet</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
