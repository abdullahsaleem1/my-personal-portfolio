'use client';

import { motion } from 'framer-motion';
import { educationData } from '@/lib/portfolio-data';

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="content py-10 md:py-25 px-2 max-2xl:px-4 bg-soft-white"
      id="education"
    >
      <p className="section-title text-center mb-12">Education</p>
      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-picto-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            <h3 className="text-xl font-semibold text-heading">
              {edu.degree} — {edu.field}
            </h3>
            <p className="text-picto-primary font-medium mt-1">
              {edu.institution}
            </p>
            <p className="text-sm text-body-text mt-1">
              📍 Defence Road, Lahore
            </p>
            <p className="text-sm text-body-text mt-2">
              {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate || '')}
            </p>
            {edu.description && (
              <p className="text-body-text mt-4 text-sm leading-relaxed">
                {edu.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
