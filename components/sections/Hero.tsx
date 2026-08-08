'use client';

import { motion } from 'framer-motion';
import { heroData, socialLinks } from '@/lib/portfolio-data';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: FaEnvelope,
  globe: FaGlobe,
};

const informationSummaryData = [
  { id: 1, title: 'Internship', description: 'BitBash' },
  { id: 2, title: 'Projects Completed', description: '6+' },
  { id: 3, title: 'Technologies', description: '15+' },
];

export default function Hero() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center pt-14 lg:pt-24 pb-4 lg:mb-20 gap-12 lg:gap-16 px-8 sm:px-16 md:px-24 lg:px-36"
      id="home"
    >
      {/* Left side - Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-auto flex justify-center"
      >
        <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full border-4 border-white shadow-xl hover:scale-[1.03] transition-transform duration-500">
          <Image
            src="/abdullah-photo.jpg"
            alt="Abdullah Saleem"
            width={288}
            height={288}
            className="w-full h-full object-cover object-[center_top]"
            priority
          />
        </div>
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
      >
        <div className="w-full">
          <p className="text-3xl sm:text-4xl xl:text-5xl font-semibold w-full text-heading">
            Hello, I&apos;m{' '}
            <span className="bg-gradient-to-r from-picto-primary to-picto-primary-dark bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </p>
          <p className="text-sm lg:text-lg my-6 text-body-text leading-relaxed max-w-xl">
            I&apos;m a <span className="bg-highlight font-medium">Software Engineer</span> based in
            Lahore, Pakistan. {heroData.summary}
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              className="btn-primary-picto inline-block px-8 py-3 rounded-md text-white font-semibold"
              href="/#projects"
            >
              View Projects
            </a>
            <a
              className="inline-block px-8 py-3 rounded-md border-2 border-gray-200 hover:border-picto-primary bg-white text-heading hover:text-picto-primary font-semibold transition-all"
              href={heroData.secondaryCta.href}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-2">
            {informationSummaryData.map((item) => (
              <div key={item.id} className="bg-picto-primary-light/50 text-center rounded-lg">
                <div className="w-auto h-auto mx-2 sm:mx-4 my-4 sm:my-3">
                  <p className="text-base sm:text-2xl font-bold text-gray-800">
                    {item.description}
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold px-2 text-wrap text-gray-500 uppercase tracking-wider">
                    {item.title}
                  </p>
                </div>
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
                className="text-picto-primary hover:bg-picto-primary hover:text-white p-3 rounded-md text-xl no-underline border border-picto-primary/10 hover:scale-105 transition-all duration-300"
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
