'use client';

import { motion } from 'framer-motion';

const blogData = [
  {
    id: 1,
    date: 'Coming Soon',
    comments: 0,
    title: 'Building Full-Stack MERN Applications from Scratch',
  },
  {
    id: 2,
    date: 'Coming Soon',
    comments: 0,
    title: 'Tips for Effective Dashboard Layouts and Usability',
  },
  {
    id: 3,
    date: 'Coming Soon',
    comments: 0,
    title: 'Laravel vs Node.js: Choosing the Right Backend',
  },
  {
    id: 4,
    date: 'Coming Soon',
    comments: 0,
    title: 'Getting Started with AI/ML for Web Developers',
  },
];

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="content py-25 px-2 relative"
      id="blog"
    >
      <div className="max-w-[540px] text-center mx-auto pb-18">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs sm:text-base md:text-lg text-gray-400">
          Coming soon. I&apos;ll share build notes, case studies, and lessons learned
          from shipping real projects.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300"
          >
            <div className="h-[226px] bg-gradient-to-br from-picto-primary/5 via-white to-picto-primary-light/20 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto bg-picto-primary/10 rounded-lg flex items-center justify-center text-picto-primary text-xl mb-3">
                  📝
                </div>
                <p className="text-sm text-picto-primary font-medium">Blog Post</p>
              </div>
            </div>
            <div className="m-6">
              <p className="text-xs sm:text-sm font-normal text-gray-400">
                {data.date}
              </p>
              <p className="text-sm sm:text-lg font-medium text-heading mt-2">
                {data.title.length > 40
                  ? `${data.title.slice(0, 40)}...`
                  : data.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
