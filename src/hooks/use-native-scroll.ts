"use client";

import { useEffect, useState } from "react";

/** Touch / mobile / reduced-motion → native scroll, no Lenis or parallax. */
export const NATIVE_SCROLL_QUERY =
  "(max-width: 1023px), (pointer: coarse), (prefers-reduced-motion: reduce)";

export function getPrefersNativeScroll(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia(NATIVE_SCROLL_QUERY).matches;
}

export function usePrefersNativeScroll(): boolean {
  const [prefersNative, setPrefersNative] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia(NATIVE_SCROLL_QUERY);
    const update = () => setPrefersNative(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return prefersNative;
}
