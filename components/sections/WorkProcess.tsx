'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, Code2, Rocket } from 'lucide-react';

const serviceData = [
  {
    id: 1,
    title: 'Research',
    description:
      'I begin every project with thorough research — understanding requirements, studying the domain, and identifying the best tools.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Analyze',
    description:
      'Breaking down complex problems into manageable components, planning architecture, and defining clear deliverables.',
    icon: BarChart3,
  },
  {
    id: 3,
    title: 'Develop',
    description:
      'Writing clean, maintainable code using modern frameworks and best practices. Test-driven, user-centric development.',
    icon: Code2,
  },
  {
    id: 4,
    title: 'Deploy',
    description:
      'Shipping production-ready applications with CI/CD pipelines, monitoring, and performance optimization.',
    icon: Rocket,
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-white py-20 md:py-28" id="work-process">
      <div className="content px-4 sm:px-6">
        <div className="heading-clark heading-clark-on-light heading-clark-center text-center max-w-2xl mx-auto mb-16">
          <span className="big-word">Services</span>
          <h2 className="title">Services</h2>
          <p className="text-sm sm:text-base mt-4">
            Driven by clean code and user-focused design, I create digital solutions
            that feel intuitive and perform seamlessly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {serviceData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="service-card text-center group cursor-pointer"
              >
                <span className="icon group-hover:scale-110 transition-transform duration-300">
                  <Icon strokeWidth={1.5} size={60} />
                </span>
                <h3>{service.title}</h3>
                <p className="mt-5 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
