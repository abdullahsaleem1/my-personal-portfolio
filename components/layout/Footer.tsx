import Link from 'next/link';
import { Heart } from 'lucide-react';
import { FaGlobe, FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiGmail } from 'react-icons/si';
import { navLinks, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  globe: FaGlobe,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 py-20">
        <div className="grid md:grid-cols-3 gap-14">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Abdullah Saleem
            </h3>
            <p className="text-slate-200 leading-relaxed">
              Software Engineer building full-stack applications and exploring AI/ML.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-200 hover:text-blue-200 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3.5 rounded-xl backdrop-blur-xl bg-white/5 border border-white/20 text-slate-200 hover:text-blue-300 hover:border-blue-500/40 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" style={{ color: link.color }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-200 text-sm flex items-center gap-2">
            © {currentYear} Abdullah Saleem. Made with
            <Heart className="w-4 h-4 text-orange-400 fill-current" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}