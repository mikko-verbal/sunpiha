"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useLenisScrollPast } from "@/components/providers/SmoothScrollProvider";
import { PHONE_HREF } from "@/lib/utils";

/**
 * Mobiilissa aina näkyvä kahden painikkeen sticky-yhteydenotto.
 * Tulee esiin kun käyttäjä on scrollannut hiukan alas.
 */
export function MobileStickyCTA() {
  const visible = useLenisScrollPast(480);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 xl:hidden"
        >
          <div className="glass-panel flex items-stretch gap-2 rounded-2xl p-2 shadow-2xl shadow-black/40">
            <Link
              href="/tarjouspyynto"
              className="btn-shine flex flex-1 items-center justify-center gap-2 rounded-xl bg-sun px-4 py-3 text-sm font-semibold text-charcoal hover:bg-sun-bright transition-colors"
            >
              Pyydä tarjous
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-charcoal/60 px-4 py-3 text-sm font-semibold text-cream hover:border-sun/40 hover:bg-white/5 transition-colors"
              aria-label="Soita Sun Pihan päivystykseen"
            >
              <Phone className="h-4 w-4 text-sun" />
              Soita
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
