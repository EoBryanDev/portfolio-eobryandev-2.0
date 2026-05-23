'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface IProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly isFeatured?: boolean;
  readonly imageUrl?: string;
}

const PROJECT_ITEMS: readonly IProjectItem[] = [
  {
    id: 'project-synit',
    title: 'Synit e-commerce',
    description:
      'E-commerce multi-tenant de alto desempenho com isolamento rigoroso de Row Level Security (RLS) no Postgres e Next.js server actions. Arquitetura personalizada de balanceamento de carga para imagens no Cloudflare R2.',
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Cloudflare R2',
      'Docker',
      'Ansible',
      'ArgoCD',
      'Kubernetes',
    ],
    githubUrl: '',
    liveUrl: 'https://synit-ecommerce.synit.space/',
    isFeatured: true,
  },
  {
    id: 'project-aesthetic',
    title: 'CyberAesthetic Portfolio Engine',
    description:
      'Framework de portfólio ultra-otimizado atingindo mais de 90 no Lighthouse. Integra letreiros contínuos em loop, mecânicas customizadas de pin do GSAP e gerenciamento de estado de fundo ambiente.',
    tags: ['React', 'GSAP', 'Tailwind CSS', 'Spline 3D'],
    githubUrl: 'https://github.com/EoBryanDev/my-portfolio',
    liveUrl: 'https://example.com/',
    isFeatured: true,
  },
  {
    id: 'project-health-check',
    title: 'Health Check System',
    description:
      'Sistema de monitoramento de status de serviços na internet. Desenvolvido com Node.js (Express) no backend utilizando PostgreSQL para persistência e Redis para casos de uso. O frontend foi construído com Next.js, TypeScript e Tailwind CSS.',
    tags: [
      'Node.js',
      'Next.js',
      'PostgreSQL',
      'Redis',
      'TypeScript',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/EoBryanDev/health-check-system',
  },
  {
    id: 'project-workshop-devops',
    title: 'Workshop DevOps - Infra Control Plane',
    description:
      'Ambiente de infraestrutura e control plane para o Workshop DevOps AWS. Utiliza um Node de Controle baseado em Docker provisionado via Ansible para garantir um espaço de trabalho consistente, isolado e de alta performance.',
    tags: ['Ansible', 'Docker', 'AWS', 'Terraform', 'Kubernetes'],
    githubUrl: 'https://github.com/EoBryanDev/workshop-devops-aws',
  },
  {
    id: 'project-nlw-agents-web',
    title: 'NLW AI Agents Web',
    description:
      'Interface web para interação com agentes inteligentes baseados em IA. Desenvolvido durante o evento NLW Agents, utilizando React, Vite e Tailwind CSS para proporcionar uma experiência de usuário responsiva e dinâmica.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI Agents'],
    githubUrl: 'https://github.com/EoBryanDev/nlw-agents-web',
  },
];

export function ProjectShowcase(): React.JSX.Element {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.projects-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card as HTMLElement,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    },
    { scope: containerRef, dependencies: [PROJECT_ITEMS.length] },
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-24 border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="projects-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-neutral-400 max-w-xl text-base">
              Um catálogo curado de sistemas escaláveis, soluções complexas de
              engenharia de UI e arquiteturas distribuídas construídas com
              rigorosos padrões estéticos.
            </p>
          </div>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition-all"
          >
            <FaGithub className="w-4 h-4" />
            Ver Arquivo Completo
          </Link>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_ITEMS.map((project) => (
            <div
              key={project.id}
              className={`project-card flex flex-col rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md hover:border-primary/50 hover:shadow-[0_0_24px_rgba(49,140,231,0.1)] transition-all duration-300 group overflow-hidden ${
                project.isFeatured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Media Header Area */}
              <div className="w-full h-48 sm:h-56 bg-linear-to-br from-white/5 to-transparent border-b border-white/5 flex items-center justify-center relative overflow-hidden group-hover:from-white/10 transition-colors duration-300">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <span className="text-white/20 font-medium text-sm tracking-widest uppercase">
                    Sem Imagem
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-8 flex-1">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub className="w-5 h-5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 h-16">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-400 mb-8 leading-relaxed line-clamp-4 h-24">
                  {project.description}
                </p>

                <div className="flex flex-wrap content-start gap-2 pt-4 border-t border-white/5 min-h-20">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-md bg-white/5 text-primary font-medium border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
