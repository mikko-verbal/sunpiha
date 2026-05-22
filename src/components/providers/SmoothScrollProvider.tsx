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
import { getPrefersNativeScroll } from "@/hooks/use-native-scroll";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/** True when scroll position is past the given pixel threshold. */
export function useLenisScrollPast(threshold: number): boolean {
  const lenis = useLenis();
  const [past, setPast] = useState(false);

  useEffect(() => {
    if (lenis) {
      const onScroll = ({ scroll }: { scroll: number }) => {
        setPast(scroll > threshold);
      };

      lenis.on("scroll", onScroll);
      onScroll({ scroll: lenis.scroll });

      return () => {
        lenis.off("scroll", onScroll);
      };
    }

    const onNativeScroll = () => {
      setPast(window.scrollY > threshold);
    };

    onNativeScroll();
    window.addEventListener("scroll", onNativeScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onNativeScroll);
    };
  }, [lenis, threshold]);

  return past;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Lenis + touch = double-smoothing and stutter. Desktop wheel only.
    if (getPrefersNativeScroll()) return;

    const instance = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    setLenis(instance);

    function onFrame({ timestamp }: { timestamp: number }) {
      instance.raf(timestamp);
    }

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
