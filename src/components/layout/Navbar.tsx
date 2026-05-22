"use client";

import { useEffect, useState } from "react";
import { useLenisScrollPast } from "@/components/providers/SmoothScrollProvider";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NAV_LINKS,
  PHONE_HREF,
  PHONE_NUMBER,
  cn,
} from "@/lib/utils";

export function Navbar() {
  const scrolled = useLenisScrollPast(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-panel py-2.5 shadow-lg shadow-black/30"
            : "bg-transparent py-4 md:py-5"
        )}
      >
        <nav className="container-wide flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sun via-sun-bright to-sun-glow shadow-lg shadow-sun/30"
            >
              <span className="font-display text-lg font-black text-charcoal">
                S
              </span>
              <div className="absolute inset-0 rounded-full bg-sun/30 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="block font-display text-base font-bold leading-none tracking-tight text-cream md:text-lg">
                Sun Piha
              </span>
              <span className="mt-0.5 block text-[9px] uppercase tracking-[0.22em] text-cream/50 md:text-[10px]">
                Kiinteistöpalvelut · 24/7
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.filter(
              (l) => l.label !== "Tarjouspyyntö" && l.label !== "Yhteystiedot"
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-cream/75 transition-colors hover:text-cream"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-sun to-sun-glow transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-medium text-cream/85 transition-colors hover:border-sun/40 hover:text-sun md:inline-flex"
            >
              <Phone className="h-4 w-4 text-sun" />
              <span className="hidden lg:inline">{PHONE_NUMBER}</span>
              <span className="lg:hidden">Soita</span>
            </a>

            <Button
              asChild
              size="sm"
              className="btn-shine hidden gold-glow md:inline-flex"
            >
              <Link href="/tarjouspyynto">
                Pyydä tarjous
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream transition-colors hover:border-sun/30 hover:bg-white/5 xl:hidden"
              aria-label="Avaa valikko"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-charcoal/85 backdrop-blur-md xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm border-l border-white/5 bg-charcoal-light/95 backdrop-blur-2xl xl:hidden"
              data-lenis-prevent
            >
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sun to-sun-bright">
                      <span className="font-display text-sm font-black text-charcoal">
                        S
                      </span>
                    </div>
                    <span className="font-display text-lg font-bold text-cream">
                      Sun Piha
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream hover:bg-white/5"
                    aria-label="Sulje valikko"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-10 flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg text-cream/85 transition-colors hover:bg-white/5 hover:text-sun"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-3 pt-8">
                  <Button asChild className="btn-shine w-full gold-glow" size="lg">
                    <Link
                      href="/tarjouspyynto"
                      onClick={() => setMobileOpen(false)}
                    >
                      Pyydä tarjous
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" className="w-full" size="lg">
                    <a href={PHONE_HREF}>
                      <Phone className="h-5 w-5" />
                      Soita {PHONE_NUMBER}
                    </a>
                  </Button>
                  <p className="pt-3 text-center text-xs text-cream/40">
                    Päivystys ympäri vuorokauden. Vastaamme yhteydenottoihin
                    24 tunnin sisällä.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
