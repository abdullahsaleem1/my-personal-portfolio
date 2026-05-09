'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { projectsData } from '@/lib/portfolio-data';

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"
        >
          Work I Have Shipped
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {(project.liveUrl || project.githubUrl) && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition"
                      >
                        <ExternalLink className="text-white w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition"
                      >
                        <Code className="text-white w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-7 space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wide text-blue-200 bg-blue-500/10 border border-blue-500/30 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full border border-white/20 bg-white/5 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition"
                    >
                      <Code className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}