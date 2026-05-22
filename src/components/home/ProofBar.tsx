"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Recycle,
  Receipt,
  Shield,
  Award,
} from "lucide-react";

const proofs = [
  { icon: MapPin, label: "Helsinki · Espoo · Vantaa" },
  { icon: Clock, label: "Päivystys 24/7" },
  { icon: Receipt, label: "Kotitalousvähennys" },
  { icon: Recycle, label: "Vastuullinen kierrätys" },
  { icon: Shield, label: "Tilaajavastuu.fi" },
  { icon: Award, label: "Luotettava kumppani" },
];

export function ProofBar() {
  return (
    <section className="relative border-y border-white/5 bg-charcoal-light/40 py-8 backdrop-blur-sm">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-cream/65 md:gap-x-12">
          {proofs.map((proof, i) => {
            const Icon = proof.icon;
            return (
              <motion.div
                key={proof.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] sm:text-sm"
              >
                <Icon className="h-4 w-4 text-sun" />
                {proof.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
