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
    <section id="education" className="py-28 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 relative">
      <div className="max-w-6xl mx-auto space-y-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500" />

              <div className="relative p-9 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree} - {edu.field}
                </h3>
                <p className="text-blue-300 font-medium mt-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-300 mt-2">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate || '')}
                </p>
                {edu.description && (
                  <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
