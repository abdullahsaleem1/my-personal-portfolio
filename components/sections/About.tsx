'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = {
    Frontend: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion'],
    Backend: [
      'Node.js',
      'Express',
      'PHP',
      'Laravel',
      'Python',
      'REST APIs',
    ],
    Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
    Learning: ['TensorFlow', 'scikit-learn', 'OpenCV', 'LangChain'],
  };

  const timeline = [
    {
      year: '2022',
      event: 'Joined University of Lahore, Department of Software Engineering',
    },
    {
      year: '2023',
      event: 'First freelance project & IT Consultant role',
    },
    {
      year: '2024',
      event: 'Built Property Management System with Laravel',
    },
    {
      year: '2024',
      event: 'Created Smart Vehicle Identification system (Python + OpenCV)',
    },
    {
      year: '2025',
      event: 'Shifted focus to MERN Stack development',
    },
    {
      year: '2026',
      event: 'Portfolio launch, targeting DevSinc',
    },
  ];

  return (
    <section className="py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
            About Me
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            I'm a 7th semester Software Engineering student at the University of
            Lahore, passionate about building scalable applications and exploring
            the intersection of AI and full-stack development. I'm drawn to
            companies like DevSinc that move fast, value meritocracy, and treat
            software as a craft.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold font-display mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 bg-bg-secondary border border-border-subtle rounded-lg hover:border-accent-green/30 transition-colors"
              >
                <h3 className="font-semibold text-accent-green mb-4 text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-bg-tertiary border border-border-subtle rounded-full text-sm text-text-secondary hover:text-accent-green hover:border-accent-green transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold font-display mb-8">Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-green/20 via-accent-green/10 to-transparent md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="md:grid md:grid-cols-2 md:gap-8">
                  <div
                    className={`${idx % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}
                  >
                    <div className="ml-12 md:ml-0 flex items-start md:flex-col md:items-end gap-4">
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-green rounded-full -translate-x-1.5 md:-translate-x-1/2 mt-1 md:mt-0 ring-4 ring-bg-primary"></div>

                      <div>
                        <span className="text-accent-green font-semibold text-sm">
                          {item.year}
                        </span>
                        <p className="text-text-secondary mt-1">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Beyond Code */}
        <motion.div variants={itemVariants} className="p-8 bg-bg-secondary border border-accent-green/20 rounded-lg">
          <h2 className="text-2xl font-bold font-display mb-4">Beyond Code</h2>
          <p className="text-text-secondary leading-relaxed">
            Outside of coding, I'm passionate about learning new technologies,
            contributing to open-source projects, and mentoring fellow developers.
            I believe in continuous growth and am actively building in public.
            Based in Lahore, Pakistan — always up for coffee and tech discussions!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}