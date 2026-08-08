'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const workStepData = [
  {
    id: 1,
    title: 'Research',
    description:
      'I begin every project with thorough research—understanding requirements, studying the domain, and identifying the best tools.',
    icon: '📋',
  },
  {
    id: 2,
    title: 'Analyze',
    description:
      'Breaking down complex problems into manageable components, planning architecture, and defining clear deliverables.',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Develop',
    description:
      'Writing clean, maintainable code using modern frameworks and best practices. Test-driven, user-centric development.',
    icon: '✏️',
  },
  {
    id: 4,
    title: 'Deploy',
    description:
      'Shipping production-ready applications with CI/CD pipelines, monitoring, and performance optimization.',
    icon: '🚀',
  },
];

function WorkStep({ data, style }: { data: typeof workStepData[0]; style: string }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000 ${style}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-14 h-14 sm:w-18 sm:h-18 ${
          hover ? 'bg-picto-primary' : 'bg-picto-primary-light/50'
        } text-center center rounded-md flex items-center justify-center text-2xl`}
      >
        <span className={hover ? 'grayscale-0 brightness-200' : ''}>{data.icon}</span>
      </div>
      <div className="mt-3 sm:mt-8">
        <p className="font-semibold sm:text-xl text-heading">{`${data.id}. ${data.title}`}</p>
        <p className="mt-3 text-[13px] sm:text-base text-body-text">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="content grid xl:grid-cols-2 xl:items-center px-4 sm:px-6 py-5 md:py-10 lg:py-25 xl:py-35"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-36 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-lg text-sm font-normal max-xl:text-center text-gray-500">
          Driven by clean code and user-focused design, I create digital solutions that
          feel intuitive and perform seamlessly. Every component is crafted with intention — merging usability with visual clarity.
        </p>
        <p className="mt-6 md:text-lg text-sm font-normal max-xl:text-center text-gray-500">
          I blend efficient development with thoughtful architecture to build engaging,
          scalable web applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 justify-end my-2 w-fit mx-auto gap-3">
        {workStepData.map((data, index) => (
          <WorkStep
            data={data}
            style={`p-4 sm:p-8 bg-white aspect-auto sm:max-w-[312px] ${
              index % 2 === 1 ? 'sm:ms-3 sm:mt-6' : 'sm:mb-6'
            }`}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
