'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from '@/lib/portfolio-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6">
      <div className="content mx-auto">
        <div
          className={`flex justify-between items-center rounded-full transition-all duration-500 px-4 sm:px-7 py-2.5 sm:py-3 ${
            scrolled
              ? 'bg-white shadow-[0px_15px_40px_-15px_rgba(0,0,0,0.25)]'
              : 'bg-black/85 backdrop-blur-sm'
          }`}
        >
          {/* Brand */}
          <Link
            href="/#home"
            className={`font-semibold text-xl sm:text-2xl tracking-tight no-underline ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Abdullah <span className="text-clark-gold">Saleem</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center text-[16px] font-medium shrink-0 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative inline-block px-4 py-2 mx-0.5 rounded-md no-underline transition-colors duration-300 ${
                    scrolled
                      ? 'text-black hover:text-clark-gold-dark'
                      : 'text-white hover:text-clark-gold'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      scrolled ? 'bg-clark-gold-dark' : 'bg-clark-gold'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-black' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden mt-2 rounded-2xl py-4 px-6 animate-fade-in shadow-lg ${
              scrolled ? 'bg-white border border-gray-200' : 'bg-black/95'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md font-medium no-underline ${
                    scrolled
                      ? 'text-black hover:text-clark-gold-dark hover:bg-clark-gold/10'
                      : 'text-white hover:text-clark-gold hover:bg-clark-gold/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
