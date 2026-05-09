import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          EoBryanDev<span className="text-blue-500">.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="#tech-stack"
            className="hover:text-blue-400 transition-colors"
          >
            Stack
          </Link>
          <Link
            href="#timeline"
            className="hover:text-blue-400 transition-colors"
          >
            Timeline
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
