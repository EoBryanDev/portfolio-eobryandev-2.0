import { CareerTimeline } from '@/components/CareerTimeline';
import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <TechStack />
        <CareerTimeline />
        <ProjectShowcase />
      </main>
    </div>
  );
}
