'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { aboutData } from '@/lib/portfolio-data';
import { FaDownload } from 'react-icons/fa';

const stats = [
  { value: '6+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
  { value: '1', label: 'Internship' },
];

export default function Profile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white py-20 md:py-28"
      id="about"
    >
      <div className="content px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 lg:items-start">
          {/* Profile visual */}
          <div className="w-full flex flex-col items-center lg:items-start">
            <div className="relative max-w-[420px] w-full lg:ml-20">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-clark-gold rounded-xl" />
              <div className="relative h-[440px] sm:h-[500px] w-full overflow-hidden rounded-xl bg-[#191919] flex items-center justify-center">
                <Image
                  src="/profile-pic.jpeg"
                  alt="Abdullah Saleem"
                  width={460}
                  height={500}
                  className="w-full h-full object-cover object-[center_top]"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 left-6 bg-white rounded-lg shadow-xl border border-gray-100 px-6 py-4">
                <p className="text-clark-gold-dark font-black text-3xl leading-none">1+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">
                  Year of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <div className="heading-clark heading-clark-on-light mb-8">
              <span className="big-word">About</span>
              <h2 className="title">About Me</h2>
              <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed max-w-xl">
                Software Engineer building automation systems and full-stack applications.
              </p>
            </div>

            <div className="text-sm sm:text-base font-normal text-justify text-gray-600 space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-8">
              {aboutData.facts.map((fact) => (
                <p key={fact.label} className="flex gap-2 text-sm py-1">
                  <span className="text-black font-semibold shrink-0">{fact.label}:</span>
                  <span className="text-gray-500">{fact.value}</span>
                </p>
              ))}
            </div>

            {/* Key Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {aboutData.keySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1 bg-clark-gold/10 text-clark-gold-dark rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats band */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-clark-gold-dark">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="btn-clark-gold px-8 py-3"
                href="#projects"
              >
                My Projects
              </a>
              {aboutData.resumeUrl && (
                <Link
                  className="btn-clark-outline-dark px-8 py-3 flex items-center gap-2"
                  href={aboutData.resumeUrl}
                >
                  <FaDownload /> Download CV
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
