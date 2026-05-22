"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, ShieldCheck, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER, SERVICE_EMAIL } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Tausta */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/45 via-charcoal to-charcoal-light" />
        <div className="absolute inset-0 bg-radial-sun opacity-50" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sun/25 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-moss/30 blur-[120px]" />
        <div className="grid-overlay opacity-50" />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sun/30 bg-sun/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
            Valmiina aloittamaan?
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-cream text-balance">
            Tee pihastasi <span className="gradient-text-warm">unelmapiha</span> –
            yhdellä puhelinsoitolla.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70 md:text-xl">
            Maksuton tarjous. Vastaus 24 tunnin sisällä. Ei sitoumuksia.
            Käytämme aikaa siihen, että saat oikean ratkaisun – ei myyntipuheita.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="btn-shine w-full gold-glow sm:w-auto"
            >
              <Link href="/tarjouspyynto">
                Pyydä tarjous
                <ArrowRight className="h-5 w-5" />
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
                Soita {PHONE_NUMBER}
              </a>
            </Button>
          </div>

          {/* Trust-rivi */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cream/55">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-sun" />
              Vastaus 24 h sisällä
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-cream/20 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Receipt className="h-3.5 w-3.5 text-sun" />
              Kotitalousvähennys
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-cream/20 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-sun" />
              Tilaajavastuu &amp; Luotettava kumppani
            </span>
          </div>

          {/* Sähköposti-viite */}
          <p className="mt-8 text-xs text-cream/40">
            Voit myös laittaa viestiä:{" "}
            <a
              href={`mailto:${SERVICE_EMAIL}`}
              className="text-sun hover:underline"
            >
              {SERVICE_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function PartnersStrip() {
  const partners = [
    "Circulation",
    "Urakkamaailma.fi",
    "Helsinki",
    "Espoo",
    "Vantaa",
    "Kirkkonummi",
  ];

  return (
    <section className="relative border-y border-white/5 bg-charcoal/30 py-12 backdrop-blur-sm">
      <div className="container-wide">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-cream/35">
          Yhteistyössä &amp; asiakkainamme
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-display text-lg font-semibold text-cream/25 transition-colors hover:text-cream/55 md:text-xl"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
