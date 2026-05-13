'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter z-50">
          EoBryanDev<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="#tech-stack"
            className="hover:text-primary transition-colors"
          >
            Stack
          </Link>
          <Link
            href="#timeline"
            className="hover:text-primary transition-colors"
          >
            Timeline
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden z-40">
            <Link
              href="#tech-stack"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              Stack
            </Link>
            <Link
              href="#timeline"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              Timeline
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
