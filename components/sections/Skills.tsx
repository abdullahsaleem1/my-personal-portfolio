'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/portfolio-data';

const statusDot = {
  confident: 'bg-blue-400',
  learning: 'bg-orange-400',
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 relative">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"
          >
            {skillsData.title}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            {skillsData.legend.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.color === 'blue' ? 'bg-blue-400' : 'bg-orange-400'
                  }`}
                ></span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skillsData.skills.map((skill, index) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      statusDot[skill.status as keyof typeof statusDot]
                    }`}
                  />
                </div>

                <p className="text-sm text-slate-300">{skill.category}</p>

                <div className="mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-300">Proficiency</span>
                    <span className="text-xs text-blue-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
