"use client";

import { createContext, useContext, useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

interface SmoothScrollContextValue {
  stop: () => void;
  start: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  stop: () => {},
  start: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoResize: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    const observer = new ResizeObserver(() => {
      lenis.resize();
    });
    if (typeof document !== "undefined" && document.body) {
      observer.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.resize();
      const timeoutId = setTimeout(() => {
        lenisRef.current?.resize();
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return (
    <SmoothScrollContext.Provider value={{ stop, start }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

