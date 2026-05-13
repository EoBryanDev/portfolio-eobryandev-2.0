import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface IProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly isFeatured?: boolean;
}

const PROJECT_ITEMS: readonly IProjectItem[] = [
  {
    id: 'project-synit',
    title: 'Synit Core Platform',
    description: 'High-throughput enterprise tenancy application with strict Postgres Row Level Security (RLS) isolation and Next.js server actions. Architected custom Cloudflare R2 image asset load balancers.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Cloudflare R2'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    isFeatured: true,
  },
  {
    id: 'project-aesthetic',
    title: 'CyberAesthetic Portfolio Engine',
    description: 'Ultra-optimized developer showcase framework achieving >90 Lighthouse benchmarks. Integrates seamless infinite horizontal marquees, custom GSAP pinning mechanics, and ambient background state management.',
    tags: ['React', 'GSAP', 'Tailwind CSS', 'Spline 3D'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    isFeatured: true,
  },
  {
    id: 'project-plsql',
    title: 'PL/SQL Distributed Synchronizer',
    description: 'Normalized data synchronization engine orchestrating updates across separate enterprise schemas. Optimized query footprints and implemented thorough audit logging traces for high integrity.',
    tags: ['Oracle PL/SQL', 'Database Architecture', 'Performance Tuning'],
    githubUrl: 'https://github.com/',
  },
  {
    id: 'project-mcp',
    title: 'Context7 Core Agent Integration',
    description: 'Model Context Protocol (MCP) server implementation enabling secure automated documentation fetches, dynamic sandboxed compilation testing, and secure repository indexing.',
    tags: ['MCP Server', 'Agentic AI', 'Node.js', 'System Architecture'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
  },
];

export function ProjectShowcase(): React.JSX.Element {
  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Featured Engineering Projects
            </h2>
            <p className="text-neutral-400 max-w-xl text-base">
              A curated catalog of scalable systems, complex UI engineering solutions, and distributed architectures built with strict aesthetic standards.
            </p>
          </div>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#318CE7] hover:underline transition-all"
          >
            <FaGithub className="w-4 h-4" />
            View Complete Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_ITEMS.map(project => (
            <div
              key={project.id}
              className={`flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-[12px] hover:border-[#318CE7]/50 hover:shadow-[0_0_24px_rgba(49,140,231,0.1)] transition-all duration-300 group ${
                project.isFeatured ? 'md:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#318CE7] group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-[#318CE7] transition-colors p-2 rounded-lg hover:bg-white/5"
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
                        className="text-neutral-400 hover:text-[#318CE7] transition-colors p-2 rounded-lg hover:bg-white/5"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#318CE7] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-400 mb-8 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-md bg-white/5 text-[#318CE7] font-medium border border-[#318CE7]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
