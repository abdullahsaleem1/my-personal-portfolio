import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:iamabdullahsaleem1@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-text-primary mb-2">
              Abdullah Saleem
            </h3>
            <p className="text-text-secondary text-sm">
              Software Engineer building full-stack applications & exploring AI/ML.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4 text-sm">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-4 text-sm">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-green hover:scale-110 transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-text-secondary text-sm">
            <p>
              © {currentYear} Abdullah Saleem. All rights reserved.
            </p>
            <p>
              Designed & built with <span className="text-accent-green">♥</span> on Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}