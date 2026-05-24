'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const rolesData = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description:
      'I build responsive, high-performance web applications using Laravel, Flask, and the MERN Stack — focusing on clean architecture, RESTful APIs, and role-based access control.',
  },
  {
    id: 2,
    title: 'Automation & Web Scraping',
    description:
      'I design robust automation systems and data pipelines using Python, HTTPX, Selenium, and GraphQL — from reverse-engineering APIs to building production-grade scrapers with 100+ hour uptime.',
  },
  {
    id: 3,
    title: 'AI/ML Integration',
    description:
      'I build AI-powered features using OpenCV and TensorFlow — from vehicle identification systems with ~85% ANPR accuracy to intelligent automation that augments software products.',
  },
];

function Role({ role }: { role: typeof rolesData[0] }) {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-4 sm:p-8 bg-white hover:shadow-xl h-auto shadow-gray-300 ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-picto-primary absolute start-0 h-full mt-[-16px] sm:mt-[-32px] transition-all ${
          mouseHover ? 'duration-200 w-[5px]' : 'w-0'
        }`}
      />
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 pb-4">
          {role.title}
        </p>
        <p className="text-[13px] sm:text-base font-normal text-gray-700">
          {role.description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="content grid md:grid-cols-2 max-2xl:px-4 2xl:px-2 py-10 md:py-15 lg:py-38"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-36 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Do</p>
        <div className="mt-6 text-sm">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building full-stack web applications, designing automation systems,
            and integrating AI/ML capabilities into real-world products.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines clean code with scalable architecture, informed by
            hands-on experience collaborating with US-based clients on production systems.
          </p>
        </div>
        <a
          href="mailto:iamabdullahsaleem1@gmail.com"
          className="mt-5 md:mt-13 btn-primary-picto text-white w-fit py-3 px-6 rounded-md text-xs sm:text-base font-semibold max-md:mx-auto max-md:mb-5 no-underline"
        >
          Say Hello!
        </a>
      </div>
      <div>
        {rolesData.map((role) => (
          <Role role={role} key={role.id} />
        ))}
      </div>
    </motion.div>
  );
}
