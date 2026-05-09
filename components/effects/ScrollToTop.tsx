'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-end relative sm:me-10 z-10 transition-all">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 me-5 w-10 h-10 sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white ${
          position < 200 ? 'scale-0' : ''
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>
    </div>
  );
}
