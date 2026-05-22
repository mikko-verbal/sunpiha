"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed taustakerros – kevyt scroll-reaktio ilman spring-lagia.
 * Raskaat blur-liikkeet poistettu, jotta Lenis-scroll pysyy sulavana.
 */
export function LivingBackdrop() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Suora scroll-linkitys – ei useSpringiä (tuplapehmennyksen lähde)
  const sunY = useTransform(scrollYProgress, [0, 1], ["-8%", "28%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.45, 0.6, 0.35]
  );
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.55]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--color-charcoal)]" />

      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(30, 61, 47, 0.28) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 50% 100%, rgba(20, 26, 22, 0.6) 0%, transparent 60%)",
        }}
      />

      {/* Aurora: CSS-animaatio, ei scroll-ajettu rotaatio */}
      {mounted && (
        <div className="absolute -inset-[20%] animate-aurora bg-conic-aurora opacity-45" />
      )}

      {/* Yksi kevyt hehku scrollilla */}
      {mounted && (
        <motion.div
          style={{ y: sunY, opacity: glowOpacity }}
          className="absolute left-1/2 top-1/3 h-[48vmax] w-[48vmax] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-radial-sun" />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-radial-forest opacity-40" />

      <div className="grid-overlay" />
      <div className="grain-overlay" />

      <motion.div style={{ opacity: vignetteOpacity }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 35%, rgba(11, 16, 13, 0.9) 100%)",
          }}
        />
      </motion.div>
    </div>
  );
}
