import { Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-background/50 py-12 mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Let&apos;s build something.
            </h2>
            <p className="text-neutral-400 max-w-md">
              Focusing on high-performance frontend engineering and scalable
              backend architecture.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="flex gap-4">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-neutral-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} EoBryanDev. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Aesthetic Edition - No PDF Resume provided intentionally.
          </p>
        </div>
      </div>
    </footer>
  );
}
