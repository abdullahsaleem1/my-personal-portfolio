'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { contactData, socialLinks } from '@/lib/portfolio-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: FaEnvelope,
  globe: FaGlobe,
};

const addressData = [
  {
    icon: MapPin,
    title: 'Address',
    description: contactData.location,
  },
  {
    icon: Mail,
    title: 'My Email',
    description: contactData.email,
  },
  {
    icon: Phone,
    title: 'Call Me Now',
    description: contactData.phone,
  },
];

function AddressItem({ item }: { item: typeof addressData[0] }) {
  const [hover, setHover] = useState(false);
  const IconComp = item.icon;

  return (
    <div
      className="max-w-[336px] p-3 md:p-4 lg:p-6 flex rounded-lg bg-white hover:scale-[1] duration-450 cursor-pointer hover:shadow-lg shadow-gray-200 max-sm:mx-auto my-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${
          hover ? 'bg-picto-primary' : 'bg-picto-primary-light/50'
        } center rounded flex items-center justify-center`}
      >
        <IconComp
          className={`text-lg md:text-xl ${
            hover ? 'text-white' : 'text-picto-primary'
          }`}
        />
      </div>
      <div className="ms-3">
        <p className="text-xs md:text-sm text-body-text font-normal">
          {item.title}:
        </p>
        <p className="text-sm md:text-base text-heading font-medium">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: contactData.subjects[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: contactData.subjects[0],
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-26 lg:flex-row justify-between">
          {/* Left side - Info */}
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-heading">
                Let&apos;s discuss your Project
              </p>
              <p className="text-xs sm:text-sm md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                {contactData.subtitle}
              </p>
            </div>
            <div className="my-9 sm:max-lg:flex justify-between items-center flex-wrap">
              {addressData.map((item, index) => (
                <AddressItem item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4 flex gap-1 max-lg:justify-center flex-wrap">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-picto-primary hover:bg-picto-primary hover:text-white p-2 sm:p-3 rounded-md no-underline"
                    aria-label={link.label}
                  >
                    <Icon className="text-xl w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full overflow-y-auto py-7">
            <p className="text-xl mb-2 sm:text-2xl md:text-[38px] font-semibold text-heading lg:hidden text-center">
              Let&apos;s discuss your Project
            </p>
            <p className="text-xs sm:text-sm max-lg:text-center md:text-lg font-normal text-soft-dark mb-4">
              I&apos;m always open to discussing product development or collaboration
              opportunities.
            </p>
            <div className="mx-2">
              <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input-picto"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input-picto"
                  required
                />

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input-picto"
                >
                  {contactData.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input-picto resize-none"
                  rows={3}
                  required
                />

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-600 text-sm">
                    Message sent! I will get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-picto gap-3 max-lg:mx-auto rounded-sm mt-5 text-sm md:text-base w-fit font-semibold lg:mt-13 px-4 md:px-6 py-3 flex items-center disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Submit'}
                  <svg
                    className="w-4 md:w-5 aspect-square"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.34 9.32L6.34 2.32C5.79 2.05 5.16 1.95 4.55 2.04C3.94 2.13 3.38 2.41 2.93 2.84C2.48 3.26 2.18 3.82 2.06 4.42C1.94 5.03 2.01 5.66 2.26 6.22L4.66 11.59C4.71 11.72 4.74 11.86 4.74 12C4.74 12.14 4.71 12.28 4.66 12.41L2.26 17.78C2.06 18.24 1.97 18.74 2.01 19.24C2.05 19.73 2.21 20.21 2.48 20.63C2.76 21.05 3.13 21.4 3.57 21.64C4.01 21.88 4.5 22 5 22C5.47 22 5.93 21.89 6.35 21.68L20.35 14.68C20.85 14.43 21.26 14.05 21.56 13.57C21.85 13.1 22 12.56 22 12C22 11.44 21.85 10.9 21.56 10.43C21.26 9.95 20.85 9.57 20.35 9.32H20.34Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}