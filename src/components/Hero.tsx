'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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
  const textContainer = useRef<HTMLDivElement>(null);
  const splineContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate text elements
      if (textContainer.current) {
        tl.fromTo(
          textContainer.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
        );
      }

      // Animate 3D container
      if (splineContainer.current) {
        tl.fromTo(
          splineContainer.current,
          { scale: 0.8, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 1.5 },
          '-=0.8',
        );
      }
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center justify-center relative min-h-[500px]">
          {/* Text Content */}
          <div
            ref={textContainer}
            className="flex flex-col items-center text-center z-10 w-full"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-sm mb-8 z-30 relative">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Interior de São Paulo, Brasil.
            </div>

            <h1 className="text-[15vw] md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-none mb-6 text-foreground z-10 relative pointer-events-none">
              EoBryan
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed z-30 relative mt-4">
              I build high-performance web applications focusing on exceptional
              user interfaces, seamless interactions, and robust scalable
              architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 z-30 relative">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-neutral-300 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-foreground font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* 3D Spline Container */}
          <div
            ref={splineContainer}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] md:h-[600px] z-20 pointer-events-none"
          >
            <div className="w-full h-full pointer-events-auto">
              <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
