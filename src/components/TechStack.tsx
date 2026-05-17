'use client';
import { ChevronDown, ChevronUp, Layers, Terminal, Users } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

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
      'High-performance web applications, responsive interfaces, and scalable API development.',
    icon: <Layers className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'React / Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS / Vanilla CSS', level: 'Advanced' },
      { name: 'Node.js / Express', level: 'Advanced' },
      { name: 'PostgreSQL / SQL', level: 'Intermediate' },
      { name: 'GSAP / Animations', level: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description:
      'Infrastructure automation, continuous integration workflows, and deployment orchestration.',
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Docker / Containers', level: 'Intermediate' },
      { name: 'CI/CD Pipelines', level: 'Intermediate' },
      { name: 'Linux / Bash Scripting', level: 'Advanced' },
      { name: 'Git / Version Control', level: 'Advanced' },
      { name: 'Cloud Hosting (VPS / Vercel)', level: 'Intermediate' },
    ],
  },
  {
    id: 'softskills',
    title: 'Softskills',
    description:
      'Effective technical communication, iterative problem-solving, and collaborative engineering.',
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'Technical Communication', level: 'Advanced' },
      { name: 'Iterative Engineering', level: 'Advanced' },
      { name: 'Autonomous Problem-Solving', level: 'Advanced' },
      { name: 'Agile / Collaboration', level: 'Advanced' },
    ],
  },
];

export function TechStack(): React.JSX.Element {
  const [expandedId, setExpandedId] = useState<string | null>('fullstack');

  const toggleCategory = (id: string): void => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tech-stack" className="py-24 mt-24 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Technical Stack &amp; Proficiencies
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base">
            Minimalist and expandable breakdown of specialized core competencies
            across frontend architecture, backend infrastructure, and essential
            workflows.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {TECH_CATEGORIES.map((category) => {
            const isExpanded = expandedId === category.id;
            return (
              <div
                key={category.id}
                className="transition-all duration-300 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md overflow-hidden"
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
