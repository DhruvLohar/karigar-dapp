"use client";
import { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useMotionValueEvent, useScroll } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { scrollY } = useScroll();
  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    try {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        smoothWheel: true,
        
      });

      let rafId: number;
      
      function raf(time: number) {
        lenisRef.current?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      return () => {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
        cancelAnimationFrame(rafId);
      };
    } catch (error) {
      console.error('Error initializing smooth scroll:', error);
      return () => {};
    }
  }, []);

  if (process.env.NODE_ENV === 'development') {
    useMotionValueEvent(scrollY, "change", (latest) => {
      console.log("Page scroll: ", latest);
    });
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
