'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialData = [
  {
    message:
      'Abdullah delivered exceptional work with great attention to detail. His technical skills and communication made the entire process smooth.',
    quote: `From the initial discussion to the final delivery, every step was handled professionally. The end result exceeded our expectations and impressed everyone involved. Highly recommended!`,
    name: 'Project Collaborator',
    designation: 'University of Lahore',
  },
  {
    message:
      'His expertise in MERN stack development helped us build a robust application with clean, maintainable code.',
    quote: `Abdullah demonstrated deep understanding of the requirements and delivered a solution that was both performant and user-friendly. Clear communication throughout.`,
    name: 'Client Feedback',
    designation: 'Freelance Project',
  },
  {
    message:
      'Professional, reliable, and creative—everything you want in a development partner.',
    quote: `He delivered on time and went above and beyond to ensure quality. The features he built have made a significant difference. Looking forward to working together again.`,
    name: 'Satisfied Client',
    designation: 'IT Consulting Project',
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex mx-auto justify-center px-2 max-w-[872px] pb-10 md:pb-25"
    >
      <div className="w-full h-full">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col h-full"
          >
            <div className="text-center mx-auto">
              <p className="text-xs sm:text-sm md:text-lg pb-5 sm:pb-10 md:pb-14 max-w-[577px] text-soft-dark mx-auto">
                {testimonialData[activeIndex].message}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-lg font-medium pb-6 max-w-3xl mx-auto">
                &ldquo;{testimonialData[activeIndex].quote}&rdquo;
              </p>
              <div className="mx-auto">
                <p className="text-sm sm:text-base md:text-lg font-medium mb-2 text-heading">
                  {testimonialData[activeIndex].name}
                </p>
                <p className="text-sm md:text-base font-light text-body-text">
                  {testimonialData[activeIndex].designation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-8 h-2 bg-heading'
                  : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
