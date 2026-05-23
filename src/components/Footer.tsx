import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-background/50 py-12 mt-24"
    >
      <div className="w-full px-4 md:px-12 flex flex-col items-center justify-center gap-8">
        <div className="flex gap-6">
          <Link
            href="https://github.com/EoBryanDev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-foreground"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/eobryandev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>

        <div className="text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} EoBryanDev. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
