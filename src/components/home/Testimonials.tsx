"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/motion";

const AUTOPLAY_MS = 6500;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, paused]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/12 blur-[120px]" />
      </div>

      <div className="container-wide relative">
        <SectionHeading
          label="Asiakaskokemukset"
          title="Asiakkaat sanovat sen parhaiten"
          description="500+ tyytyväistä asiakasta pääkaupunkiseudulla – tässä muutama esimerkki."
        />

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="premium-card rounded-3xl p-8 md:p-14 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <Quote className="mx-auto h-10 w-10 text-sun/50" />

                <div className="mt-6 flex items-center justify-center gap-1 text-sun">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sun" />
                  ))}
                </div>

                <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-cream md:text-3xl lg:text-[2rem] text-balance">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div className="mt-8">
                  <p className="font-semibold text-cream">
                    {testimonials[current].author}
                  </p>
                  <p className="mt-1 text-sm text-cream/50">
                    {testimonials[current].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Autoplay-edistymä */}
            <div className="mt-10 h-px overflow-hidden rounded-full bg-white/8">
              <motion.div
                key={current + (paused ? "p" : "r")}
                initial={{ scaleX: 0, transformOrigin: "left center" }}
                animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                className="h-full origin-left bg-gradient-to-r from-sun via-sun-bright to-sun-glow"
              />
            </div>
          </div>

          {/* Kontrollit */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition-colors hover:border-sun/30 hover:bg-white/5"
              aria-label="Edellinen arvostelu"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-sun"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Arvostelu ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream transition-colors hover:border-sun/30 hover:bg-white/5"
              aria-label="Seuraava arvostelu"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mini-stats */}
        <div className="mt-16 grid gap-3 text-center md:grid-cols-3 md:gap-5">
          {[
            { value: "500+", label: "Tyytyväistä asiakasta" },
            { value: "15 v", label: "Kokemusta alalta" },
            { value: "4.9/5", label: "Keskiarvio arvioinneissa" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/5 bg-charcoal-light/50 p-6"
            >
              <p className="font-display text-3xl font-bold text-sun md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cream/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
