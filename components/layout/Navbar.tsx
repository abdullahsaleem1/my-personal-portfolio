'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '@/lib/portfolio-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);

      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false);
        setMobileMenuOpen(false);
      } else if (lastScrollY.current - currentY > 10) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <div
      className={`fixed inset-x-0 z-50 px-3 sm:px-6 transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'top-3 sm:top-4' : 'top-4 sm:top-6'}`}
    >
      <div className="content mx-auto">
        <div
          className={`flex justify-between items-center rounded-full transition-all duration-500 px-4 sm:px-7 py-2.5 sm:py-3 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20'
              : 'bg-black/85 backdrop-blur-sm'
          }`}
        >
          {/* Brand */}
          <Link
            href="/#home"
            className={`font-semibold text-xl sm:text-2xl tracking-tight no-underline transition-colors duration-300 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Abdullah <span className="text-clark-gold">Saleem</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center text-[15px] font-medium shrink-0 list-none m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative inline-block px-4 py-2 mx-0.5 rounded-md no-underline transition-colors duration-300 ${
                    scrolled
                      ? 'text-gray-700 hover:text-clark-gold-dark'
                      : 'text-white/90 hover:text-clark-gold'
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
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled
                  ? 'text-black hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`lg:hidden mt-2 rounded-2xl py-3 px-4 shadow-xl ${
                scrolled
                  ? 'bg-white/90 backdrop-blur-xl border border-gray-100'
                  : 'bg-black/90 backdrop-blur-xl'
              }`}
            >
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium no-underline transition-colors duration-200 ${
                      scrolled
                        ? 'text-gray-700 hover:text-clark-gold-dark hover:bg-clark-gold/10'
                        : 'text-white/90 hover:text-clark-gold hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
