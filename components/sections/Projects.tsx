'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Property Management System',
      tagline: 'Full-stack Laravel app for property listings',
      category: 'Laravel/PHP',
      tags: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS'],
      image: '/projects/property-management.jpg',
      slug: 'property-management-system',
      featured: true,
      github: '#',
      live: '#',
    },
    {
      title: 'Smart Vehicle Identification',
      tagline: 'Real-time vehicle detection with Python & OpenCV',
      category: 'Python',
      tags: ['Python', 'OpenCV', 'Machine Learning'],
      image: '/projects/vehicle-identification.jpg',
      slug: 'smart-vehicle-identification',
      featured: true,
      github: '#',
    },
  ];

  const filters = ['All', 'MERN', 'Laravel/PHP', 'Python', 'AI/ML'];

  const filtered = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Projects
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            A collection of full-stack applications and ML experiments that
            showcase my problem-solving approach and technical depth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                filter === f
                  ? 'bg-accent-green text-bg-primary'
                  : 'border border-border-subtle text-text-secondary hover:border-accent-green hover:text-accent-green'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-bg-secondary border border-border-subtle rounded-lg overflow-hidden hover:border-accent-green/50 transition-all hover:shadow-glow-green"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-bg-tertiary border-b border-border-subtle flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <div className="text-text-muted text-sm">
                  Project Screenshot
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-accent-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {project.tagline}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-bg-tertiary border border-border-subtle rounded text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 px-4 py-2 bg-accent-green/10 border border-accent-green/30 text-accent-green rounded hover:bg-accent-green/20 transition-colors text-sm font-medium text-center"
                  >
                    View Case Study
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-border-subtle text-text-secondary hover:text-accent-green hover:border-accent-green transition-colors rounded flex items-center gap-2"
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}