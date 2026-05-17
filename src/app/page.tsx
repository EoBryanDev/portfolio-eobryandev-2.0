import { CareerTimeline } from '@/components/CareerTimeline';
import { Hero } from '@/components/Hero';
import { PersonaWords } from '@/components/PersonaWords';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <PersonaWords />
        <TechStack />
        <CareerTimeline />
        <ProjectShowcase />
      </main>
    </div>
  );
}
