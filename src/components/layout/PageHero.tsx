"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/motion";
import { IMAGES } from "@/data/images";
import { usePrefersNativeScroll } from "@/hooks/use-native-scroll";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  label?: string;
}

export function PageHero({
  title,
  subtitle,
  image = IMAGES.sivuOletusHero,
  label,
}: PageHeroProps) {
  const prefersNative = usePrefersNativeScroll();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[55vh] items-end overflow-hidden pt-24 md:min-h-[62vh]"
    >
      <motion.div
        className="absolute inset-0"
        style={prefersNative ? undefined : { y: bgY, scale: bgScale }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="editorial-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/15" />
      </motion.div>

      {/* Hehkut */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-sun/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-forest/30 blur-[140px]" />
      </div>

      <motion.div
        className="container-wide relative z-10 pb-16 pt-24 md:pt-28"
        style={prefersNative ? undefined : { opacity: fade }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {label && (
            <motion.p
              variants={fadeUpVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sun" />
              {label}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUpVariants}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream md:text-5xl lg:text-6xl text-balance"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/65 md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      {/* Pohja */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}
