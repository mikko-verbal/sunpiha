"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Snowflake,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/utils";
import { Reveal, SectionHeading } from "@/components/ui/motion";

const situations = [
  {
    id: "omakoti",
    icon: Home,
    label: "Omakotitalo tai mökki",
    headline: "Pihatyöt ammattilaisen otteella",
    description:
      "Säännöllinen pihahuolto, lumityöt, nurmikko ja piharemontit – kuin omalle pihalleen.",
    primary: { label: "Pyydä tarjous", href: "/tarjouspyynto?asiakas=omakoti" },
    secondary: {
      label: "Tutustu palveluihin",
      href: "/palvelut",
    },
    accent: "from-emerald-500/20 to-emerald-700/5",
  },
  {
    id: "taloyhtio",
    icon: Building2,
    label: "Taloyhtiö tai liikekiinteistö",
    headline: "Yksi sopimus, kaikki palvelut",
    description:
      "Kokonaisvaltainen kiinteistönhuolto, talvikunnossapito ja sopimusasiakkaiden kiinteät hinnat.",
    primary: {
      label: "Pyydä huoltosopimustarjous",
      href: "/tarjouspyynto?asiakas=taloyhtio",
    },
    secondary: { label: "Lue kiinteistönhuollosta", href: "/kiinteistonhuolto" },
    accent: "from-sun/20 to-sun/0",
  },
  {
    id: "talvi",
    icon: Snowflake,
    label: "Lumityöt & talvikunnossapito",
    headline: "Kun lumi yllättää, soita meille",
    description:
      "Lumenpudotus, auraus, hiekoitus ja poiskuljetus – paikallinen tiimi ja päivystys 24/7.",
    primary: {
      label: "Lumityötarjous nopeasti",
      href: "/tarjouspyynto?palvelu=talvikunnossapito",
    },
    secondary: {
      label: "Talvikunnossapito",
      href: "/palvelut/lumityot-talvikunnossapito",
    },
    accent: "from-sky-500/20 to-slate-500/5",
  },
  {
    id: "remontti",
    icon: Sparkles,
    label: "Piharemontti tai pesut",
    headline: "Unelmapiha tai uudenveroinen julkisivu",
    description:
      "Kiveykset, viherrakentaminen, terassit, asfaltti, julkisivu- ja pihapesut yhden katon alta.",
    primary: {
      label: "Suunnitellaan yhdessä",
      href: "/tarjouspyynto?palvelu=viherrakentaminen",
    },
    secondary: {
      label: "Piharemontit",
      href: "/palvelut/viherrakentaminen",
    },
    accent: "from-amber-500/20 to-rose-500/5",
  },
  {
    id: "kiire",
    icon: AlertTriangle,
    label: "Kiireellinen päivystys",
    headline: "Apu on aina lähellä – 24/7",
    description:
      "Lumenpudotukset, liukkaudentorjunta, myrskyraivaus ja muut kiireelliset työt.",
    primary: { label: `Soita ${PHONE_NUMBER}`, href: PHONE_HREF, external: true },
    secondary: { label: "Mitä päivystys kattaa", href: "/palvelut/lumityot-talvikunnossapito" },
    accent: "from-red-500/20 to-orange-500/5",
  },
];

export function SituationPicker() {
  const [active, setActive] = useState(0);
  const current = situations[active];
  const Icon = current.icon;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-divider-top" />

      <div className="container-wide relative">
        <SectionHeading
          label="Aloita tästä"
          title="Kerro tilanteesi – ehdotamme oikean tien"
          description="Sun Piha hoitaa koko kiinteistösi vuoden ympäri. Valitse alta lähin tilanne ja saat seuraavaksi suoraviivaisen ohjeen."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:gap-12">
          {/* Vaihtoehdot */}
          <Reveal>
            <div className="flex flex-col gap-2">
              {situations.map((s, i) => {
                const ItemIcon = s.icon;
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-sun/40 bg-charcoal-light/80"
                        : "border-white/5 bg-charcoal-light/30 hover:border-white/15 hover:bg-charcoal-light/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-sun text-charcoal"
                            : "bg-white/5 text-cream/80 group-hover:bg-white/10"
                        }`}
                      >
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-base font-semibold text-cream">
                          {s.label}
                        </p>
                        <p className="mt-0.5 text-xs text-cream/50">
                          {s.headline}
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 transition-all ${
                          isActive
                            ? "translate-x-0 text-sun opacity-100"
                            : "-translate-x-1 text-cream/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Aktiivinen näkymä */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-3xl border border-white/8 bg-charcoal-light/70 p-8 backdrop-blur-md md:p-12"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${current.accent} opacity-70`}
                />
                <div className="grid-overlay opacity-50" />

                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-charcoal shadow-lg shadow-sun/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-cream md:text-3xl">
                    {current.headline}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                    {current.description}
                  </p>

                  <ul className="mt-8 grid gap-3 text-sm text-cream/70 sm:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                      Maksuton tarjous &amp; selkeä hinta
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                      Sovittu aikataulu, ei yllätyksiä
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                      Paikallinen tiimi PK-seudulla
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                      Vastuullinen kierrätys &amp; jälkityöt
                    </li>
                  </ul>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {current.primary &&
                      ("external" in current.primary && current.primary.external ? (
                        <a
                          href={current.primary.href}
                          className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sun px-7 text-base font-semibold text-charcoal transition-all hover:bg-sun-bright"
                        >
                          <Phone className="h-5 w-5" />
                          {current.primary.label}
                        </a>
                      ) : (
                        <Link
                          href={current.primary.href}
                          className="btn-shine inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sun px-7 text-base font-semibold text-charcoal transition-all hover:bg-sun-bright"
                        >
                          {current.primary.label}
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      ))}
                    <Link
                      href={current.secondary.href}
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-base font-medium text-cream/85 transition-colors hover:border-sun/40 hover:bg-white/5"
                    >
                      {current.secondary.label}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
