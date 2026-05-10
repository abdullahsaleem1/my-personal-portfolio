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
      className="relative mx-4 2xl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="about"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile visual */}
        <div className="2xl:max-w-[424px] w-auto h-auto 2xl:max-h-[504px]">
          <div className="max-w-[424px] h-[468px] overflow-hidden rounded-xl bg-gradient-to-br from-picto-primary/10 via-soft-white to-picto-primary-light flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-36 h-36 mx-auto overflow-hidden rounded-[2rem] border-4 border-white shadow-lg">
                <Image 
                  src="/abdullah-photo.jpg" 
                  alt="Abdullah Saleem" 
                  width={144} 
                  height={144} 
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
              <p className="text-xl font-semibold text-heading">Abdullah Saleem</p>
              <p className="text-body-text text-sm">Software Engineer</p>
            </div>
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-[264px] py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white flex gap-1">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-picto-primary hover:bg-picto-primary hover:text-white p-2 sm:p-3 rounded-md no-underline"
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
        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] max-md:text-center font-semibold mb-8 text-heading">
            {aboutData.title}
          </h2>
          <div className="text-sm sm:text-base lg:text-lg font-normal max-md:text-center text-gray-600">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-3' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Skills */}
          <div className="mt-6 flex flex-wrap gap-2 max-md:justify-center">
            {aboutData.keySkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-picto-primary/10 text-picto-primary rounded-full text-sm font-medium"
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
