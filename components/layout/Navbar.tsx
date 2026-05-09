'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/portfolio-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1f]/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
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
                className="text-slate-200 hover:text-blue-200 transition-colors relative group text-sm font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-5">
            <Link
              href="/#contact"
              className="hidden md:flex px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold hover:opacity-90 transition-colors text-sm"
            >
              Contact
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-blue-200 transition-colors"
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
        <div className="md:hidden bg-[#0a0f1f]/95 backdrop-blur-md border-b border-white/10 py-8 px-6 sm:px-10 animate-slide-in-right">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-blue-200 transition-colors font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-3"></div>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}