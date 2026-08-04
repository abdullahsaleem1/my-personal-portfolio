'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { aboutData, socialLinks } from '@/lib/portfolio-data';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: FaEnvelope,
  globe: FaGlobe,
};

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative mx-4 2xl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-20 lg:p-16 md:p-12 sm:p-8 p-4 border border-gray-100"
      id="about"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-10">
        {/* Profile visual */}
        <div className="w-full md:w-auto flex flex-col items-center">
          <div className="max-w-[460px] w-full md:w-[420px] h-[480px] overflow-hidden rounded-2xl bg-gradient-to-br from-picto-primary/10 via-soft-white to-picto-primary-light flex items-center justify-center border border-gray-100">
            <div className="text-center space-y-5">
              <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl hover:scale-[1.03] transition-transform duration-500">
                <Image 
                  src="/abdullah-photo.jpg" 
                  alt="Abdullah Saleem" 
                  width={224} 
                  height={224} 
                  className="w-full h-full object-cover object-[center_top]"
                  priority
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-heading">Abdullah Saleem</p>
                <p className="text-body-text text-sm font-medium mt-1">Software Engineer</p>
              </div>
            </div>
          </div>
          {/* Social media section */}
          <div className="relative bottom-8">
            <div className="flex justify-center">
              <div className="px-6 py-3 z-50 text-center bg-white rounded-xl shadow-xl flex gap-2 border border-gray-100">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-picto-primary hover:bg-picto-primary hover:text-white p-2.5 rounded-md no-underline transition-colors duration-300"
                      aria-label={link.label}
                    >
                      <Icon className="text-xl w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:flex-1 max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold mb-6 text-heading max-md:text-center">
            {aboutData.title}
          </h2>
          <div className="text-sm sm:text-base lg:text-lg font-normal text-justify text-gray-600 space-y-4">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-justify leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Skills */}
          <div className="mt-8 flex flex-wrap gap-2 max-md:justify-center">
            {aboutData.keySkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1 bg-picto-primary/10 text-picto-primary rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex max-md:justify-center gap-4 flex-wrap">
            <a
              className="btn-primary-picto px-6 py-3 rounded-md text-sm sm:text-base font-semibold"
              href="#projects"
            >
              My Projects
            </a>
            {aboutData.resumeUrl && (
              <Link
                className="px-6 py-3 rounded-md border-2 border-gray-200 hover:border-picto-primary bg-white text-heading hover:text-picto-primary transition-all text-sm sm:text-base font-semibold flex items-center gap-2 no-underline"
                href={aboutData.resumeUrl}
              >
                <FaDownload /> Download CV
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
