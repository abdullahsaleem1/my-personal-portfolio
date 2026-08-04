'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/portfolio-data';

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="content py-10 md:py-25 px-2 max-2xl:px-4"
      id="skills"
    >
      <div className="text-center mb-12">
        <p className="section-title mb-6">{skillsData.title}</p>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Technologies I work with regularly, organized by domain.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillsData.categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-picto-primary/5 to-picto-primary-light/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-heading mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-picto-primary/8 text-picto-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
