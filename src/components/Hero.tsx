'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
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
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background -mt-16"
    >
      {/* Wavy Binary Background on Right */}
      <div className="absolute bottom-0 right-0 w-full h-full z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          aria-label="Wavy Binary Background"
        >
          <defs>
            <pattern
              id="binary-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-15)"
            >
              <text
                x="0"
                y="20"
                className="font-mono text-sm font-black fill-primary/20"
              >
                0 1 0 1 0 1 0
              </text>
              <text
                x="10"
                y="50"
                className="font-mono text-sm font-black fill-primary/20"
              >
                1 0 1 0 1 0 1
              </text>
            </pattern>
            <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
              <path d="M 1 0 C 0.5 0.2, 0.5 0.8, 0 1 L 1 1 Z" />
            </clipPath>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#binary-pattern)"
            clipPath="url(#wave-clip)"
          />
        </svg>
      </div>
      {/* Left Content (Badge + Title) */}
      <div className="absolute top-28 md:top-[25%] left-4 md:left-12 z-30 flex flex-col gap-6 pointer-events-none">
        {/* Location Badge */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          </div>
          <span className="text-base md:text-lg font-medium tracking-wide text-neutral-400">
            Interior de São Paulo, Brasil.
          </span>
        </div>

        {/* Title Overlay */}
        <div className="flex flex-col gap-4">
          <div className="text-white/90 font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-[0.9] max-w-[8em]">
            <span className="text-neutral-500 text-xl md:text-3xl align-top mr-2">
              #
            </span>
            FULLSTACK
            <br />
            DEVELOPER
          </div>

          {/* Subtitle / Education */}
          <div className="flex items-center gap-2 text-neutral-400 mt-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
            <span className="text-sm font-medium tracking-wide">
              Software Engineering, Cruzeiro do Sul 2026
            </span>
          </div>
        </div>
      </div>

      {/* Central Portrait/Asset */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-full flex items-end justify-center pointer-events-none">
        <Image
          src="/hero-me.png"
          alt="Mauricio Bryan"
          width={1000}
          height={1000}
          className="object-contain object-bottom h-[80dvh] md:h-[100dvh] w-auto max-w-none md:max-w-full drop-shadow-2xl grayscale translate-x-4 md:translate-x-24 lg:translate-x-[20vw]"
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* Marquee Text Overlay */}
      {/* It's positioned absolute at the bottom to overlay the image, with mix-blend-difference */}
      <div className="absolute bottom-[7%] md:bottom-[5%] left-0 w-full z-20 pointer-events-none mix-blend-difference overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[100px] md:text-[150px] lg:text-[200px] font-bold tracking-tighter leading-none text-white uppercase w-max"
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
