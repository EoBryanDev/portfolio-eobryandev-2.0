'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export function Hero() {
  const container = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Infinite horizontal scroll for the marquee
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 150,
          ease: 'linear',
        });
      }
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Location Badge */}
      <div className="absolute top-24 z-20 text-sm font-medium tracking-wide text-neutral-400">
        Interior de São Paulo, Brasil.
      </div>

      {/* Central Portrait/Asset */}
      <div className="relative z-10 w-64 h-96 md:w-80 md:h-[30rem] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Placeholder for the user's PNG photo or 3D asset */}
        {/* Replace src with /3d/o.png when available */}
        <div className="text-neutral-600 text-sm">Image Placeholder</div>
      </div>

      {/* Marquee Text Overlay */}
      {/* It's positioned absolute to overlay everything, with mix-blend-difference to ensure it's visible over the image */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 pointer-events-none mix-blend-difference overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[100px] md:text-[150px] lg:text-[200px] font-black tracking-tighter leading-none text-white uppercase w-max"
        >
          <div className="flex shrink-0">
            <span className="px-8">MAURICIO BRYAN DE ANDRADE VIANA</span>
            <span className="px-8">MAURICIO BRYAN DE ANDRADE VIANA</span>
          </div>
          <div className="flex shrink-0">
            <span className="px-8">MAURICIO BRYAN DE ANDRADE VIANA</span>
            <span className="px-8">MAURICIO BRYAN DE ANDRADE VIANA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
