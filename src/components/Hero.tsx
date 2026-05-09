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
    <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 animate-pulse">
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
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5 },
          '-=0.5',
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
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div
            ref={textContainer}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Engineering <br className="hidden lg:block" />
              <span className="text-neutral-400">Digital</span> Experiences.
            </h1>

            <p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed">
              I build high-performance web applications focusing on exceptional
              user interfaces, seamless interactions, and robust scalable
              architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
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
            className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px] relative z-0"
          >
            {/* 
              Using a generic spline scene as placeholder. 
              Can be replaced with the user's specific Spline URL later. 
            */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
