'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/portfolio-data';

export default function Skills() {
  return (
    <section
      className="py-20 md:py-28"
      id="skills"
      style={{ background: '#191919' }}
    >
      <div className="content px-4 sm:px-6">
        <div className="heading-clark heading-clark-on-dark heading-clark-center text-center max-w-2xl mx-auto mb-16">
          <span className="big-word">Skills</span>
          <h2 className="title">Skills</h2>
          <p className="text-sm sm:text-base mt-4">
            Technologies I work with regularly, organized by domain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              viewport={{ once: true }}
              className="progress-wrap"
            >
              <div className="flex justify-between items-center mb-2">
                <h3>{category.name}</h3>
              </div>
              <div className="clark-progress">
                <div className="bar" style={{ width: `${category.proficiency}%` }}>
                  <span className="percent">{category.proficiency}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-14">
          {skillsData.categories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <h4 className="text-sm font-semibold text-clark-gold uppercase tracking-wider mb-3">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-clark-gold/10 text-white/80 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
