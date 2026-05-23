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
    title: 'Fullstack Developer',
    organization: 'Senior Sistemas (Senior Mega)',
    period: 'Dez 2022 - Atualmente',
    location: 'Itu, São Paulo',
    description:
      'Desenvolvimento de integrações complexas entre sistemas de terceiros e o MEGA ERP (segmentos de manufatura, empresarial, construção, etc...). Atuação em equipe de serviços de software focada no cliente, prestando suporte técnico avançado e apoiando a revitalização de sistemas legados. Apoio técnico estratégico em iniciativas de DevOps e inovação, incluindo a estruturação e automação de servidores de publicação.',
    highlights: [
      'Integrações de Sistemas',
      'MEGA ERP',
      'PLSQL',
      'DevOps & Inovação',
      'Node.js / TS',
      'Revitalização de Legados',
    ],
  },
  {
    id: 'edu-eng',
    type: 'education',
    title: 'Bacharelado em Engenharia de Software',
    organization: 'Centro Universitário Nossa Senhora do Patrocínio (CEUNSP)',
    period: '2022 - 2025',
    location: 'Itu, São Paulo',
    description:
      'Formação transdisciplinar focada no ciclo de vida completo do software. Experiência prática em arquitetura de sistemas, metodologias ágeis, segurança da informação e governança de TI. Ênfase em engenharia de qualidade, automação (DevOps) e soluções escaláveis em nuvem.',
    highlights: [
      'Arquitetura de Sistemas',
      'Engenharia de Qualidade',
      'Segurança da Informação',
      'DevOps & Nuvem',
      'Metodologias Ágeis',
      'Governança de TI',
      'PLSQL / JAVA',
    ],
  },
  {
    id: 'edu-senai',
    type: 'education',
    title: 'Técnico em Desenvolvimento Web Full Stack',
    organization: 'Escola SENAI de Informática',
    period: '2020 - 2022',
    location: 'São Paulo',
    description:
      'Formação técnica intensiva focada no desenvolvimento de ponta a ponta. Experiência prática com estruturação de interfaces responsivas, modelagem de banco de dados, construção de APIs robustas, testes de software e implantação de sistemas.',
    highlights: [
      'Desenvolvimento Front-end',
      'APIs RESTful',
      'Modelagem de Dados',
      'Testes de Software',
      'Implantação de Sistemas',
      'Java',
      'Javascript / Angular / Jasmine',
    ],
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
    { scope: containerRef, dependencies: [TIMELINE_ITEMS.length] },
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
            Trajetória Profissional &amp; Educação
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Uma jornada cronológica através de experiências de alto impacto no
            desenvolvimento de software e conquistas fundamentais na academia.
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
                  <div className="timeline-icon absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_16px_rgba(49,140,231,0.2)]">
                    {item.type === 'work' ? (
                      <Briefcase className="w-5 h-5 text-primary" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    )}
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="timeline-card w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="p-8 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md hover:border-primary transition-all duration-300 group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold text-primary tracking-wider uppercase">
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

                      <p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-1">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
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
