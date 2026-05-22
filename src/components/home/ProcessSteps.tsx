"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Hammer, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/motion";

const steps = [
  {
    icon: MessageSquare,
    label: "Vaihe 1",
    title: "Ota yhteyttä",
    description:
      "Soita tai täytä tarjouslomake. Saat vastauksen viimeistään 24 tunnin sisällä.",
    detail: "60 sekuntia",
  },
  {
    icon: ClipboardList,
    label: "Vaihe 2",
    title: "Arvioimme kohteen",
    description:
      "Käymme tarvittaessa paikan päällä, suunnittelemme työn ja annamme selkeän hinnan.",
    detail: "Maksuton arvio",
  },
  {
    icon: Hammer,
    label: "Vaihe 3",
    title: "Hoidamme työn",
    description:
      "Sovittu aikataulu, ammattilainen paikalla – sinun ei tarvitse jännittää lopputulosta.",
    detail: "Sovittu aikataulu",
  },
  {
    icon: Sparkles,
    label: "Vaihe 4",
    title: "Siisti lopputulos",
    description:
      "Kohde luovutetaan siistinä. Pidämme yhteyttä ja varmistamme, että olet tyytyväinen.",
    detail: "Laatutakuu",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <SectionHeading
          label="Näin etenemme"
          title="Helppoa kuin yksi puhelinsoitto"
          description="Olemme rakentaneet prosessin niin, että saat selkeän kuvan koko projektista jo ensimmäisten päivien aikana."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="premium-card group relative h-full rounded-3xl p-7 md:p-8">
                  {/* Numero taustalla */}
                  <span className="absolute right-5 top-4 font-display text-7xl font-black leading-none text-cream/[0.06] transition-colors group-hover:text-sun/15">
                    0{i + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sun via-sun-bright to-sun-glow text-charcoal shadow-md shadow-sun/25">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun/90">
                    {step.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    {step.description}
                  </p>

                  <p className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-cream/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-sun" />
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-12 max-w-xl text-center"
          >
            <Link
              href="/tarjouspyynto"
              className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sun px-7 text-base font-semibold text-charcoal hover:bg-sun-bright"
            >
              Aloita vaiheesta 1
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-4 text-xs text-cream/40">
              Maksutta, sitoutumatta. Saat selkeän hinta-arvion vuorokauden sisällä.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
