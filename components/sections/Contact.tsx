'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { contactData, socialLinks } from '@/lib/portfolio-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: FaEnvelope,
  globe: FaGlobe,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
  instagram: FaInstagram,
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
      className="flex items-start gap-4 p-3 rounded-lg hover:shadow-lg shadow-gray-200"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-12 w-12 shrink-0 flex items-center justify-center rounded-full border ${
          hover
            ? 'bg-clark-gold border-clark-gold'
            : 'bg-transparent border-gray-200'
        }`}
      >
        <IconComp
          className={`text-lg md:text-xl ${
            hover ? 'text-black' : 'text-clark-gold-dark'
          }`}
        />
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500 font-normal">
          {item.title}:
        </p>
        <p className="text-sm md:text-base text-black font-medium break-all">
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
    <section className="bg-white py-20 md:py-28" id="contact">
      <div className="content px-4 sm:px-6">
        <div className="heading-clark heading-clark-on-light heading-clark-center text-center max-w-2xl mx-auto mb-16">
          <span className="big-word">Contact</span>
          <h2 className="title">Contact Me</h2>
          <p className="text-sm sm:text-base mt-4">
            Have an opportunity, a question, or just want to chat? I&apos;d love to hear
            from you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Info */}
            <div>
              <p className="text-[28px] sm:text-[35px] font-bold text-black">
                Let&apos;s discuss your Project
              </p>
              <p className="text-sm sm:text-base text-gray-500 pt-3">
                {contactData.subtitle}
              </p>

              <div className="mt-8 space-y-2">
                {addressData.map((item, index) => (
                  <AddressItem item={item} key={index} />
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-gray-200 text-clark-gold-dark hover:bg-clark-gold hover:text-black hover:border-clark-gold no-underline flex items-center justify-center transition-all duration-300"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                  rows={4}
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
                  className="btn-clark-gold w-fit px-8 py-3 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <svg
                    className="w-4 md:w-5 aspect-square"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.34 9.32L6.34 2.32C5.79 2.05 5.16 1.95 4.55 2.04C3.94 2.13 3.38 2.41 2.93 2.84C2.48 3.26 2.18 3.82 2.06 4.42C1.94 5.03 2.01 5.66 2.26 6.22L4.66 11.59C4.71 11.72 4.74 11.86 4.74 12C4.74 12.14 4.71 12.28 4.66 12.41L2.26 17.78C2.06 18.24 1.97 18.74 2.01 19.24C2.05 19.73 2.21 20.21 2.48 20.63C2.76 21.05 3.13 21.4 3.57 21.64C4.01 21.88 4.5 22 5 22C5.47 22 5.93 21.89 6.35 21.68L20.35 14.68C20.85 14.43 21.26 14.05 21.56 13.57C21.85 13.1 22 12.56 22 12C22 11.44 21.85 10.9 21.56 10.43C21.26 9.95 20.85 9.57 20.35 9.32H20.34Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
