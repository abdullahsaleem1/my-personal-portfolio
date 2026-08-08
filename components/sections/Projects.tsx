'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '@/lib/portfolio-data';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="bg-white py-20 md:py-28" id="projects">
      <div className="content px-4 sm:px-6">
        <div className="heading-clark heading-clark-on-light heading-clark-center text-center max-w-2xl mx-auto mb-16">
          <span className="big-word">Portfolio</span>
          <h2 className="title">Portfolio</h2>
          <p className="text-sm sm:text-base mt-4">
            Here&apos;s a selection of my recent work, showcasing my skills in building
            full-stack applications and solving real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="project-tile group"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Always-visible caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-clark-gold text-xs font-semibold uppercase tracking-[2px]">
                  {project.status}
                </span>
                <h3 className="text-white text-xl font-semibold mt-1 leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-300">
                <span className="text-clark-gold text-xs font-semibold uppercase tracking-[2px]">
                  {project.stack.slice(0, 4).join(' • ')}
                </span>
                <p className="text-white/80 text-sm leading-relaxed mt-3 line-clamp-4 text-justify">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clark-gold hover:text-white transition-colors no-underline"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
