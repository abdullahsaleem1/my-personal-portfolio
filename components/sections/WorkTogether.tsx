'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function WorkTogether() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-25 max-w-[676px] mx-auto px-2"
    >
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let&apos;s discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I&apos;m always open to discussing new projects and creative ideas. Let&apos;s
          connect and build something amazing together.
        </p>
        <a
          href="#contact"
          className="btn-primary-picto inline-flex items-center gap-3 px-4 md:px-7 py-3 md:py-4 rounded-md text-sm md:text-base font-semibold"
        >
          Let&apos;s work Together
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}
