'use client';

import { motion } from 'framer-motion';
import { heroData, socialLinks } from '@/lib/portfolio-data';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: FaEnvelope,
  globe: FaGlobe,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

const informationSummaryData = [
  { id: 1, title: 'Internships', description: '2' },
  { id: 2, title: 'Projects Completed', description: '6+' },
  { id: 3, title: 'Technologies', description: '15+' },
];

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-28 lg:pt-24 pb-16 lg:pb-24 gap-12 lg:gap-16 px-8 sm:px-16 md:px-24 lg:px-36"
      id="home"
      style={{
        background:
          'radial-gradient(circle at 20% 90%, rgba(255,189,57,0.12) 0%, transparent 45%), radial-gradient(circle at 90% 10%, rgba(255,189,57,0.06) 0%, transparent 40%), #000000',
      }}
    >
      {/* Right side - Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-auto flex justify-center order-1 lg:order-2 lg:self-start lg:mt-10"
      >
        <div className="relative">
          <div className="absolute -inset-3 border-2 border-clark-gold rounded-full opacity-40" />
          <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-black shadow-2xl">
            <Image
              src="/abdullah-photo.jpeg"
              alt="Abdullah Saleem"
              width={320}
              height={320}
              className="w-full h-full object-cover object-[center_top]"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Left side - Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 order-2 lg:order-1"
      >
        <div className="w-full">
          <span className="block text-clark-gold uppercase tracking-[3px] text-sm font-medium mb-2">
            Hello!
          </span>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold w-full text-white leading-tight">
            I&apos;m <span className="text-clark-gold">{heroData.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-light text-white/80 mt-4">
            {heroData.role}
          </h2>
          <p className="text-sm lg:text-base my-6 text-white/60 leading-relaxed max-w-xl">
            Based in Lahore, Pakistan. {heroData.summary}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              className="btn-clark-gold px-8 py-3"
              href="/#contact"
            >
              Hire me
            </Link>
            <Link
              className="btn-clark-outline-white px-8 py-3"
              href="/#projects"
            >
              My works
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 w-full max-w-md">
          <div className="grid grid-cols-3 gap-3">
            {informationSummaryData.map((item) => (
              <div
                key={item.id}
                className="text-center rounded-lg border border-white/10 bg-white/5 py-5"
              >
                <p className="text-xl sm:text-2xl font-bold text-clark-gold">
                  {item.description}
                </p>
                <p className="text-[10px] sm:text-xs font-semibold px-2 text-wrap text-white/50 uppercase tracking-wider mt-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-8 justify-center lg:justify-start">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            if (!Icon) return null;
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-clark-gold hover:text-black hover:border-clark-gold no-underline flex items-center justify-center transition-all duration-300"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
