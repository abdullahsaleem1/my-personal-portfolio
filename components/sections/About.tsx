'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { aboutData } from '@/lib/portfolio-data';

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5">
            <Image
              src={aboutData.profileImage}
              alt="Profile"
              width={520}
              height={640}
              className="object-cover w-full h-full hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              {aboutData.title}
            </h2>
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {aboutData.highlights.map((highlight) => (
              <motion.div
                key={highlight.label}
                whileHover={{ scale: 1.05 }}
                className="p-7 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-center"
              >
                <h3 className="text-3xl font-bold text-blue-400">
                  {highlight.value}
                </h3>
                <p className="text-slate-300 text-sm mt-2">
                  {highlight.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Key Skills</h3>
            <div className="flex flex-wrap gap-3">
              {aboutData.keySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-orange-500/20 text-blue-100 rounded-full text-sm border border-blue-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutData.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="text-slate-300">{fact.label}:</span> {fact.value}
                </div>
              ))}
            </div>
          </div>

          {aboutData.resumeUrl && (
            <Link
              href={aboutData.resumeUrl}
              className="inline-block mt-2 px-10 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition"
            >
              Download Resume
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}