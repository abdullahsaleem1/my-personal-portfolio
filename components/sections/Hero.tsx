'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Briefcase, Mail, Globe } from 'lucide-react';
import { heroData, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  github: Code,
  linkedin: Briefcase,
  email: Mail,
  portfolio: Globe,
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [12, -12]);
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(event.clientX - innerWidth / 2);
      mouseY.set(event.clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30 blur-3xl" />

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-200">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
            {heroData.status}
          </span>

          <div className="space-y-4">
            <p className="text-gray-400 text-lg">Hi, I am</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {heroData.role}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {heroData.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={heroData.primaryCta.href}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
            >
              {heroData.primaryCta.label}
            </Link>
            <Link
              href={heroData.secondaryCta.href}
              className="px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              {heroData.secondaryCta.label}
            </Link>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.key as keyof typeof iconMap];
              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:text-purple-300 hover:border-purple-500/40 transition"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full h-[380px] rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-40" />
          <div className="relative text-center space-y-3">
            <h3 className="text-2xl font-semibold text-white">Creative Developer</h3>
            <p className="text-gray-400">Building modern web apps with Next.js and MERN</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-20 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"
      />
    </section>
  );
}