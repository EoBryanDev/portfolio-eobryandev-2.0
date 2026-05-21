'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { ParticleBackground } from './ParticleBackground';

gsap.registerPlugin(ScrollTrigger);

const words = ['life long learner', 'pluviophile', 'tech lover', 'optimist'];

export function PersonaWords() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wordElements = gsap.utils.toArray('.persona-word') as HTMLElement[];

      gsap.set(wordElements, { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${words.length * 100}%`,
          scrub: 1,
          pin: true,
        },
      });

      wordElements.forEach((word) => {
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }).to(
          word,
          {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power2.in',
          },
          '+=0.5',
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-background overflow-hidden relative border-t border-b border-border/10"
    >
      <ParticleBackground />
      {words.map((word) => (
        <h2
          key={word}
          className="persona-word absolute text-5xl md:text-7xl lg:text-[10rem] font-black text-center uppercase tracking-tighter text-foreground px-4 leading-none z-10"
        >
          {word}
          <span className="text-primary">.</span>
        </h2>
      ))}
    </section>
  );
}
