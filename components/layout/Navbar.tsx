'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ASLogo from '@/components/common/ASLogo';

const navItems = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Process', href: '#work-process' },
  { id: 4, name: 'Portfolio', href: '#projects' },
  { id: 5, name: 'Blog', href: '#blog' },
  { id: 6, name: 'Services', href: '#services' },
];

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
          <Link href="/" className="flex items-center border-0 lg:ps-5">
            <ASLogo className="h-8 w-8 sm:h-10 sm:w-10" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold text-heading">
              Abdullah
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex text-[16px] font-medium shrink-0 list-none m-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="hover:text-picto-primary hover:bg-picto-primary/10 px-5 py-3 mx-1 rounded-md text-heading no-underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn-primary-picto px-4 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 py-4 px-6 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-heading hover:text-picto-primary hover:bg-picto-primary/5 rounded-md font-medium no-underline"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}