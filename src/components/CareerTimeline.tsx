'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap } from 'lucide-react';
import type React from 'react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ITimelineItem {
  readonly id: string;
  readonly type: 'work' | 'education';
  readonly title: string;
  readonly organization: string;
  readonly period: string;
  readonly description: string;
  readonly location: string;
  readonly highlights: readonly string[];
}

const TIMELINE_ITEMS: readonly ITimelineItem[] = [
  {
    id: 'role-senior',
    type: 'work',
    title: 'Senior Frontend Engineer',
    organization: 'Tech Innovations Inc.',
    period: '2024 - Present',
    location: 'Remote',
    description:
      'Spearheaded the architectural migration of core micro-frontends to Next.js App Router, boosting rendering speeds and SEO metrics. Implemented strict custom design token systems and high-performance GSAP animations.',
    highlights: ['Next.js App Router', 'TypeScript', 'GSAP', 'Tailwind CSS'],
  },
  {
    id: 'role-fullstack',
    type: 'work',
    title: 'Fullstack Software Engineer',
    organization: 'Digital Solutions Studio',
    period: '2022 - 2024',
    location: 'São Paulo, Brasil',
    description:
      'Architected highly robust internal API infrastructures and real-time dashboard interfaces. Streamlined continuous deployment automation and integrated containerized PostgreSQL database pipelines.',
    highlights: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'edu-cs',
    type: 'education',
    title: 'B.S. in Computer Science',
    organization: 'University of São Paulo (USP)',
    period: '2018 - 2022',
    location: 'São Paulo, Brasil',
    description:
      'Graduated with comprehensive focus on distributed systems, advanced algorithm optimization, and software engineering methodologies.',
    highlights: ['Distributed Systems', 'Algorithms', 'System Architecture'],
  },
];

export function CareerTimeline(): React.JSX.Element {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animate the vertical line drawing down
      const line = containerRef.current?.querySelector('.timeline-line');
      if (line) {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: true,
          },
        });
      }

      // Animate each timeline item (icon first, then card)
      const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];

      items.forEach((item) => {
        const icon = item.querySelector('.timeline-icon');
        const card = item.querySelector('.timeline-card');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        if (icon && card) {
          tl.from(icon, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.5)',
          }).from(
            card,
            {
              y: 50,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            },
            '-=0.2',
          );
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="py-24 border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Career Timeline &amp; Education
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            A chronological journey through high-impact professional engineering
            roles and rigorous foundational academic milestones.
          </p>
        </div>

        <div className="timeline-container relative">
          {/* Vertical central line for Desktop, left-aligned for Mobile */}
          <div className="timeline-line absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 origin-top" />

          <div className="flex flex-col gap-12">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Marker on the central timeline */}
                  <div className="timeline-icon absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#121212] border-2 border-[#318CE7] flex items-center justify-center z-10 shadow-[0_0_16px_rgba(49,140,231,0.2)]">
                    {item.type === 'work' ? (
                      <Briefcase className="w-5 h-5 text-[#318CE7]" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-[#318CE7]" />
                    )}
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="timeline-card w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-[12px] hover:border-[#318CE7]/40 transition-all duration-300 group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold text-[#318CE7] tracking-wider uppercase">
                          {item.period}
                        </span>
                        <span className="text-xs text-neutral-500 font-medium">
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#318CE7] transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-neutral-300 mb-4">
                        {item.organization}
                      </h4>

                      <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300 font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
