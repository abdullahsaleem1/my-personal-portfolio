'use client';

import { motion } from 'framer-motion';
import { experienceData, educationData } from '@/lib/portfolio-data';
import { FaDownload } from 'react-icons/fa';

const year = (value: string) => new Date(value).getFullYear();

const formatRange = (start: string, end: string | undefined, current: boolean) => {
  const startYear = year(start);
  const endYear = end ? year(end) : startYear;
  if (current) return `${startYear} - Present`;
  if (startYear === endYear) return `${startYear}`;
  return `${startYear} - ${endYear}`;
};

type ResumeItem = {
  date: string;
  title: string;
  role: string;
  location?: string;
  description: string;
  bullets?: string[];
};

function ResumeCard({ item, index }: { item: ResumeItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="resume-card"
    >
      <span className="date">{item.date}</span>
      <h3>{item.title}</h3>
      <span className="position block mt-1">
        {item.role}
        {item.location ? ` • ${item.location}` : ''}
      </span>
      <p className="mt-4 text-sm leading-relaxed text-justify">{item.description}</p>
      {item.bullets && item.bullets.length > 0 && (
        <ul className="mt-3 space-y-2 list-none pl-0">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-justify">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-clark-gold inline-block" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Resume() {
  const experienceItems: ResumeItem[] = experienceData.map((exp) => ({
    date: formatRange(exp.startDate, exp.endDate, exp.current),
    title: exp.position,
    role: exp.company,
    location: exp.location,
    description: exp.description,
    bullets: exp.bullets,
  }));

  const educationItems: ResumeItem[] = educationData.map((edu) => ({
    date: formatRange(edu.startDate, edu.endDate, edu.current),
    title: `${edu.degree} — ${edu.field}`,
    role: edu.institution,
    location: 'Defence Road, Lahore',
    description: edu.description,
  }));

  return (
    <section
      className="py-20 md:py-28"
      id="experience"
      style={{ background: '#191919' }}
    >
      <div className="content px-4 sm:px-6">
        <div className="heading-clark heading-clark-on-dark heading-clark-center text-center max-w-2xl mx-auto mb-14">
          <span className="big-word">Resume</span>
          <h2 className="title">Resume</h2>
          <p className="text-sm sm:text-base mt-4">
            My academic background and hands-on professional experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <p className="text-xl font-bold text-white mb-4 text-center">
            My Experience
          </p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {experienceItems.map((item, index) => (
              <ResumeCard key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
          <p className="text-xl font-bold text-white text-center mt-14 mb-4">
            My Education
          </p>
          <div className="max-w-2xl mx-auto">
            {educationItems.map((item, index) => (
              <ResumeCard key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            className="btn-clark-gold px-8 py-4"
            href="/resume/Abdullah_Saleem_CV.pdf"
          >
            <span className="inline-flex items-center gap-2">
              <FaDownload /> Download CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
