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
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          {skillsData.legend.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  item.color === 'blue' ? 'bg-picto-primary' : 'bg-amber-400'
                }`}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skillsData.skills.map((skill, index) => (
          <motion.div
            key={`${skill.category}-${skill.name}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            viewport={{ once: true }}
            className="relative p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-picto-primary/5 to-picto-primary-light/10 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-heading">
                  {skill.name}
                </h3>
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    skill.status === 'confident' ? 'bg-picto-primary' : 'bg-amber-400'
                  }`}
                />
              </div>

              <p className="text-sm text-body-text">{skill.category}</p>

              <div className="mt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-body-text">Proficiency</span>
                  <span className="text-xs text-picto-primary font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-picto-primary to-picto-primary-dark"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
