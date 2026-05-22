"use client";

import { motion } from "framer-motion";

// Deterministiset siemenarvot, jotta SSR ja CSR ovat identtiset.
const SEEDS = [
  { x: 8, y: 22, s: 2, d: 0.4, t: 6.2 },
  { x: 17, y: 65, s: 1, d: 1.2, t: 5.5 },
  { x: 24, y: 88, s: 3, d: 2.1, t: 7.0 },
  { x: 33, y: 38, s: 1, d: 0.9, t: 4.8 },
  { x: 42, y: 12, s: 2, d: 3.0, t: 6.5 },
  { x: 49, y: 71, s: 1, d: 1.6, t: 5.2 },
  { x: 57, y: 28, s: 3, d: 0.2, t: 7.5 },
  { x: 63, y: 54, s: 2, d: 2.7, t: 5.8 },
  { x: 71, y: 18, s: 1, d: 1.0, t: 4.5 },
  { x: 78, y: 82, s: 2, d: 3.4, t: 6.8 },
  { x: 84, y: 46, s: 1, d: 0.6, t: 5.0 },
  { x: 90, y: 73, s: 3, d: 1.8, t: 7.2 },
  { x: 14, y: 92, s: 1, d: 2.4, t: 5.6 },
  { x: 35, y: 60, s: 2, d: 0.1, t: 6.4 },
  { x: 51, y: 8, s: 1, d: 1.5, t: 4.9 },
  { x: 66, y: 35, s: 2, d: 2.9, t: 6.7 },
  { x: 82, y: 6, s: 1, d: 0.7, t: 5.3 },
  { x: 95, y: 30, s: 2, d: 1.9, t: 6.9 },
];

export function HeroParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {SEEDS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-sun-glow shadow-[0_0_10px_rgba(255,204,106,0.6)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: p.t,
            delay: p.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
