import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
