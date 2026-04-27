'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-accent-green rounded-md flex items-center justify-center text-bg-primary font-bold text-lg group-hover:bg-accent-green-dim transition-colors">
              AS
            </div>
            <span className="hidden sm:inline font-display font-bold text-text-primary">
              Abdullah
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-accent-green transition-colors relative group text-sm font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:flex px-6 py-2.5 bg-accent-green text-bg-primary rounded-md font-semibold hover:bg-accent-green-dim transition-colors text-sm"
            >
              Hire Me →
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-text-primary hover:text-accent-green transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-6 px-6 animate-slide-in-right">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-accent-green transition-colors font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border-subtle my-2"></div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-4 py-3 bg-accent-green text-bg-primary rounded-md font-semibold hover:bg-accent-green-dim transition-colors text-center"
            >
              Hire Me →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}