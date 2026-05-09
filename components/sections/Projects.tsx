'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/lib/portfolio-data';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-2xl:p-2"
      id="projects"
    >
      <div className="xl:mb-18 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-[577px]">
          <p className="section-title">Portfolio</p>
          <p className="font-normal text-lg max-sm:text-sm pt-6 text-gray-400">
            Here&apos;s a selection of my recent work, showcasing my skills in
            building full-stack applications and solving real-world problems.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="max-w-[424px] rounded-lg hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 overflow-hidden"
            >
              {/* Project image/visual */}
              <div className="h-48 bg-gradient-to-br from-picto-primary/10 via-soft-white to-picto-primary-light/30 flex items-center justify-center">
                <div className="text-center space-y-2 p-4">
                  <div className="w-16 h-16 mx-auto bg-picto-primary/10 rounded-xl flex items-center justify-center text-picto-primary text-2xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                  <p className="text-sm text-picto-primary font-medium">{project.status}</p>
                </div>
              </div>

              <div className="p-4 sm:p-8">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  {project.stack.join(' • ')}
                </p>
                <p className="text-gray-900 text-lg font-semibold pt-1 mb-3">
                  {project.title}
                </p>
                <p className="text-gray-600 text-sm leading-5">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-5 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-md hover:border-picto-primary hover:text-picto-primary bg-white text-sm font-semibold transition-all duration-300 no-underline text-heading"
                    >
                      Live Demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-md hover:border-picto-primary hover:text-picto-primary bg-white text-sm font-semibold transition-all duration-300 no-underline text-heading"
                    >
                      Code
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-md bg-white text-sm font-semibold text-gray-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}