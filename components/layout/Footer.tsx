import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/portfolio-data';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

const copyrightYear = new Date().getFullYear();

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: FaEnvelope,
  globe: FaGlobe,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export default function Footer() {
  return (
    <footer style={{ background: '#000000' }}>
      <div className="content px-4 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Link
            href="/#home"
            className="font-semibold text-2xl sm:text-3xl tracking-tight no-underline text-white"
          >
            Abdullah <span className="text-clark-gold">Saleem</span>
          </Link>

          <div className="mt-8 flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              if (!Icon) return null;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-clark-gold hover:text-black no-underline flex items-center justify-center transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="inline-block relative text-sm text-neutral-400 hover:text-white no-underline"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-neutral-500 mt-8">
            Copyright &copy; {copyrightYear} Abdullah Saleem. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600 mt-2">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
