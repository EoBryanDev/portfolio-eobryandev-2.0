'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center rounded-2xl animate-pulse">
      <div className="text-neutral-500 text-sm">Loading 3D Experience...</div>
    </div>
  ),
});

export function Hero() {
  const container = useRef<HTMLElement>(null);
  const splineContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate 3D container
      if (splineContainer.current) {
        gsap.fromTo(
          splineContainer.current,
          { scale: 0.8, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
        );
      }

      // Marquee infinite animation
      gsap.to('.marquee-content', {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: 'none',
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden w-full"
    >
      {/* Location Badge */}
      <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 z-40 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-sm pointer-events-auto">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
        Interior de São Paulo, Brasil.
      </div>

      {/* 3D Spline Container */}
      <div
        ref={splineContainer}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] md:h-[600px] z-10 pointer-events-none"
      >
        <div className="w-full h-full pointer-events-auto">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
      </div>

      {/* Marquee Text Overlay */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-30 pointer-events-none mix-blend-difference overflow-visible flex">
        <div className="marquee-content flex whitespace-nowrap text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8rem] font-bold tracking-tighter leading-none text-white uppercase">
          <span className="px-8">MAURICIO BRYAN DE ANDRADE VIANA</span>
          <span className="px-8">MAURICIO BRYAN DE ANDRADE VIANA</span>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
