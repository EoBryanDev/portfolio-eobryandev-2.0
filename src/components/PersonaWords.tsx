'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const words = ['life long learner', 'pluviophile', 'tech lover', 'optimist'];

export function PersonaWords() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wordElements = gsap.utils.toArray('.persona-word') as HTMLElement[];

      // Set initial state
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
        // Fade in and slide up
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        })
          // Fade out and slide up further
          .to(
            word,
            {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: 'power2.in',
            },
            '+=0.5',
          ); // The +=0.5 creates a small pause where the text is fully visible
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-background overflow-hidden relative border-t border-b border-border/10"
    >
      {words.map((word) => (
        <h2
          key={word}
          className="persona-word absolute text-5xl md:text-7xl lg:text-[10rem] font-black text-center uppercase tracking-tighter text-foreground px-4 leading-none"
        >
          {word}
        </h2>
      ))}
    </section>
  );
}
