import Link from 'next/link';
import { Code, Briefcase, Mail, Globe, Heart } from 'lucide-react';
import { navLinks, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  github: Code,
  linkedin: Briefcase,
  email: Mail,
  portfolio: Globe,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdullah Saleem
            </h3>
            <p className="text-gray-400 leading-relaxed">
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
                  className="block text-gray-400 hover:text-purple-300 transition-colors duration-200"
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
                const Icon = iconMap[link.key as keyof typeof iconMap];
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} Abdullah Saleem. Made with
            <Heart className="w-4 h-4 text-pink-400 fill-current" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}