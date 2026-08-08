'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ASLogo from '@/components/common/ASLogo';
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
    <div
      className={`sticky top-0 z-50 transition-all duration-1000 ${
        scrolled
          ? 'bg-soft-white border-b border-gray-300'
          : 'bg-white border-white'
      }`}
    >
      <div className="navbar flex justify-between mx-auto content px-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-heading"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <a href="/#home" className="flex items-center border-0 lg:ps-5 no-underline">
            <ASLogo className="h-8 w-8 sm:h-10 sm:w-10" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold text-heading">
              Abdullah
            </p>
          </a>
        </div>

        <div className="lg:flex items-center">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex text-[16px] font-medium shrink-0 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-block px-4 py-2 mx-0.5 rounded-md text-heading no-underline transition-colors duration-300 hover:text-picto-primary"
                >
                  {link.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-picto-primary rounded-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 py-4 px-6 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-heading hover:text-picto-primary hover:bg-picto-primary/5 rounded-md font-medium no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
