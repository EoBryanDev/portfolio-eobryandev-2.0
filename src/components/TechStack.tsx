'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronUp, Layers, Terminal, Users } from 'lucide-react';
import type React from 'react';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ITechSkill {
  readonly name: string;
  readonly level: string;
}

interface ITechCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
  readonly skills: readonly ITechSkill[];
}

const TECH_CATEGORIES: readonly ITechCategory[] = [
  {
    id: 'fullstack',
    title: 'Fullstack',
    description:
      'Aplicações web de alta performance, interfaces responsivas e desenvolvimento de APIs escaláveis.',
    icon: <Layers className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Node.js / Express', level: 'Avançado' },
      { name: 'React.js / Next.js', level: 'Avançado' },
      { name: 'TypeScript / JavaScript', level: 'Avançado' },
      { name: 'PL/SQL & PostgreSQL', level: 'Avançado' },
      { name: 'MongoDB / Redis', level: 'Intermediário' },
      { name: 'Tailwind CSS', level: 'Avançado' },
      { name: 'IA', level: 'Intermediário' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description:
      'Automação de infraestrutura, pipelines de integração contínua e orquestração de deploys.',
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Docker / Containers', level: 'Avançado' },
      { name: 'Kubernetes', level: 'Intermediário' },
      { name: 'Ansible / Terraform', level: 'Intermediário' },
      { name: 'Linux', level: 'Intermediário' },
      { name: 'Git', level: 'Avançado' },
      { name: 'Pipelines CI/CD', level: 'Intermediário' },
      { name: 'Cloud Computing', level: 'Básico' },
    ],
  },
  {
    id: 'softskills',
    title: 'Soft Skills',
    description:
      'Comunicação técnica eficaz, resolução autônoma de problemas e metodologias ágeis.',
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Comunicação Técnica', level: 'Avançado' },
      { name: 'Engenharia Iterativa', level: 'Avançado' },
      { name: 'Resolução de Problemas', level: 'Avançado' },
      { name: 'Colaboração & Ágil', level: 'Avançado' },
    ],
  },
];

export function TechStack(): React.JSX.Element {
  const [expandedId, setExpandedId] = useState<string | null>('fullstack');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.tech-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tech-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      const categories = gsap.utils.toArray<HTMLElement>('.tech-category');
      categories.forEach((category) => {
        gsap.fromTo(
          category as HTMLElement,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: category,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    },
    { scope: containerRef, dependencies: [TECH_CATEGORIES.length] },
  );

  const toggleCategory = (id: string): void => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="py-24 mt-24 border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="tech-header text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Stack Tecnológico &amp; Competências
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base">
            Uma visão abrangente das especialidades centrais em arquitetura
            frontend, infraestrutura backend e processos essenciais.
          </p>
        </div>

        <div className="tech-categories flex flex-col gap-6">
          {TECH_CATEGORIES.map((category) => {
            const isExpanded = expandedId === category.id;
            return (
              <div
                key={category.id}
                className="tech-category transition-all duration-300 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/2 transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-neutral-400 line-clamp-1 md:line-clamp-none">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 ml-4 text-neutral-400 hover:text-primary transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-8 pb-8 pt-2 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                        >
                          <span className="font-medium text-white text-sm">
                            {skill.name}
                          </span>
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
