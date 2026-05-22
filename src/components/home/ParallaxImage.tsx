"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 = ei liikettä, 1 = liikkuu yhtä paljon kuin scroll
  scaleRange?: [number, number];
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
}

/**
 * Kuva, joka liikkuu pystysuunnassa hitaammin kuin scroll – luo syvyyden tuntua.
 * Lisäksi pieni scale-efekti viewport-skannaukseen.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.25,
  scaleRange = [1.08, 1.18],
  priority = false,
  sizes = "100vw",
  overlay = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-speed * 50}%`, `${speed * 50}%`]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [
    scaleRange[0],
    scaleRange[1],
    scaleRange[0],
  ]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      aria-hidden={false}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
      {overlay && <div className="cinematic-overlay absolute inset-0" />}
    </div>
  );
}
