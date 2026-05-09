'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/lib/portfolio-data';

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Experience Timeline
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 transform -translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {experienceData.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.position}`}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="absolute left-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-black transform -translate-x-1/2 z-10" />

                  <div className="w-full md:w-5/12 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate || '')}
                    </p>
                    {exp.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        {exp.location}
                      </p>
                    )}
                    {exp.description && (
                      <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
