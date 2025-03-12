"use client";
import { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { useMotionValueEvent, useScroll } from 'framer-motion';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    console.log("Page scroll: ", latest);
  });

  return <>{children}</>;
}