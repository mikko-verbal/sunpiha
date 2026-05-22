"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "framer-motion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/** True when Lenis scroll position is past the given pixel threshold. */
export function useLenisScrollPast(threshold: number): boolean {
  const lenis = useLenis();
  const [past, setPast] = useState(false);

  useEffect(() => {
    if (!lenis) return;

    const onScroll = ({ scroll }: { scroll: number }) => {
      setPast(scroll > threshold);
    };

    lenis.on("scroll", onScroll);
    onScroll({ scroll: lenis.scroll });

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis, threshold]);

  return past;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      autoRaf: false,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.35,
      syncTouch: true,
    });

    setLenis(instance);

    function onFrame({ timestamp }: { timestamp: number }) {
      instance.raf(timestamp);
    }

    // Same RAF loop as Framer Motion – avoids two loops fighting each other
    frame.update(onFrame, true);

    return () => {
      cancelFrame(onFrame);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
