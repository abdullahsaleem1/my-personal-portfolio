'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    // Hide scroll indicator after 3 seconds
    const timer = setTimeout(() => {
      const indicator = document.getElementById('scroll-indicator');
      if (indicator) {
        indicator.style.opacity = '0';
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 as const,
        delayChildren: 0.4 as const,
      },
    },
  } as const;

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const name = 'Abdullah Saleem';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        pointer-events="none"
      ></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full relative z-10"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-lg mb-2"
        >
          Hi, I'm
        </motion.p>

        {/* Name with letter animation */}
        <motion.h1
          variants={nameVariants}
          className="text-6xl md:text-7xl font-bold font-display mb-4 tracking-tight"
        >
          {name.split('').map((letter, idx) => (
            <motion.span
              key={idx}
              variants={letterVariants}
              className={letter === ' ' ? 'mr-4' : ''}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role with gradient */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold font-display mb-6 bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent"
        >
          Software Engineer
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-lg mb-8 max-w-2xl leading-relaxed"
        >
          Building full-stack MERN applications & exploring AI/ML. 7th Semester
          Software Engineering student at the University of Lahore.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-green text-bg-primary rounded-lg font-semibold hover:bg-accent-green-dim transition-all hover:shadow-glow-green"
          >
            View My Work →
          </Link>
          <Link
            href="/resume/Abdullah_Saleem_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-subtle text-text-primary rounded-lg font-semibold hover:border-accent-green hover:text-accent-green transition-colors"
          >
            Download CV ↓
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          <span className="text-text-secondary text-sm font-medium">Follow</span>
          <div className="flex gap-4">
            {[
              {
                icon: Code,
                href: 'https://github.com/yourusername',
                label: 'GitHub',
              },
              {
                icon: Briefcase,
                href: 'https://linkedin.com/in/yourusername',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:iamabdullahsaleem1@gmail.com',
                label: 'Email',
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-green hover:border-accent-green hover:bg-accent-green/5 transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary transition-opacity duration-300"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}