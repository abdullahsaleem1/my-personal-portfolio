'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Briefcase, Globe } from 'lucide-react';
import { contactData, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  github: Code,
  linkedin: Briefcase,
  email: Mail,
  portfolio: Globe,
};

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
    } catch (error) {
      console.error('Contact form error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            {contactData.title}
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-4">
              <div className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-white hover:text-purple-300 transition"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-purple-300 transition"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">{contactData.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <Globe className="w-5 h-5 text-purple-300 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Portfolio</p>
                  <a
                    href={`https://${contactData.portfolio}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition"
                  >
                    {contactData.portfolio}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                Socials
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.key as keyof typeof iconMap];
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-purple-200 hover:border-purple-500/40 transition"
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

            <form
              onSubmit={handleSubmit}
              className="relative p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-transparent border border-white/20 rounded-xl focus:border-pink-500 outline-none text-white peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-pink-400 bg-black px-1 rounded">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-transparent border border-white/20 rounded-xl focus:border-pink-500 outline-none text-white peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-pink-400 bg-black px-1 rounded">
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-transparent border border-white/20 rounded-xl focus:border-pink-500 outline-none text-white"
                >
                  {contactData.subjects.map((subject) => (
                    <option key={subject} value={subject} className="text-black">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-transparent border border-white/20 rounded-xl focus:border-pink-500 outline-none text-white peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-pink-400 bg-black px-1 rounded">
                  Your Message
                </label>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-sm">
                  Message sent! I will get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-semibold text-white hover:scale-[1.02] transition transform duration-300 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}