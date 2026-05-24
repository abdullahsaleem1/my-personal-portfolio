'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
  { id: 1, title: 'CGPA', description: '3.00' },
  { id: 2, title: 'Projects Completed', description: '4+' },
  { id: 3, title: 'Technologies', description: '15+' },
];

export default function Hero() {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 lg:mb-28 max-xl:gap-2 p-2 max-2xl:px-4"
      id="home"
    >
      {/* Left side - Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col justify-between max-lg:text-center"
      >
        <div className="pt-13 me-0 lg:me-32 w-full lg:w-auto">
          <p className="text-3xl sm:text-4xl xl:text-6xl font-semibold w-full text-heading">
            Hello, I&apos;m
            <span className="text-nowrap shrink-0 inline-block w-full bg-gradient-to-r from-picto-primary to-picto-primary-dark bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </p>
          <p className="text-sm lg:text-lg my-6 text-body-text">
            I&apos;m a <span className="bg-highlight">Software Engineer</span>{' '}
            and <span className="bg-highlight">Full-Stack Developer</span> based in
            Lahore, Pakistan. {heroData.summary}
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary-picto inline-block px-8 py-3 rounded-md text-white font-semibold"
              href={`mailto:iamabdullahsaleem1@gmail.com`}
            >
              Say Hello!
            </a>
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <div key={item.id} className="bg-picto-primary-light/50 text-center">
                <div className="w-auto h-auto mx-2 sm:mx-4 my-5 sm:my-4">
                  <p className="text-lg sm:text-3xl font-semibold text-gray-700">
                    {item.description}
                  </p>
                  <p className="text-xs sm:text-base font-normal px-3 sm:px-4 text-wrap text-gray-500">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-3 mt-6 max-lg:justify-center">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            if (!Icon) return null;
            return (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-picto-primary hover:bg-picto-primary hover:text-white p-3 rounded-md text-xl no-underline"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Right side - Profile card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[536px] w-full h-full max-lg:mx-auto aspect-[536/636] relative"
      >
        <div className="shadow-2xl shadow-gray-200 w-full h-full rounded-3xl bg-gradient-to-br from-picto-primary/20 via-white to-picto-primary-light flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg">
              <Image 
                src="/abdullah-photo.jpg" 
                alt="Abdullah Saleem" 
                width={128} 
                height={128} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-heading">Software Engineer</h3>
            <p className="text-body-text">
              Building automation systems, full-stack apps & AI solutions
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {['Python', 'Laravel', 'Flask', 'React'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-picto-primary/10 text-picto-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}