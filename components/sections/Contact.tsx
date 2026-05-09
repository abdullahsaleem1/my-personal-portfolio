'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaGlobe, FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiGmail } from 'react-icons/si';
import { contactData, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  globe: FaGlobe,
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
    <section id="contact" className="py-28 md:py-32 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            {contactData.title}
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-9 space-y-5">
              <div className="flex items-start gap-3 text-slate-200">
                <Mail className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-sm text-slate-300">Email</p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-white hover:text-blue-300 transition"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-200">
                <Phone className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-sm text-slate-300">Phone</p>
                  <a
                    href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-blue-300 transition"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-200">
                <MapPin className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-sm text-slate-300">Location</p>
                  <p className="text-white">{contactData.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-200">
                <Globe className="w-5 h-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-sm text-slate-300">Portfolio</p>
                  <a
                    href={`https://${contactData.portfolio}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition"
                  >
                    {contactData.portfolio}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
              <p className="text-sm uppercase tracking-wide text-slate-300 mb-4">
                Socials
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/20 text-slate-200 hover:text-blue-200 hover:border-blue-500/40 transition"
                    >
                      <Icon className="w-4 h-4" style={{ color: link.color }} />
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

            <form
              onSubmit={handleSubmit}
              className="relative p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl space-y-7"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-5 bg-transparent border border-white/20 rounded-xl focus:border-blue-500 outline-none text-white peer"
                    placeholder=" "
                  />
                  <label className="absolute left-5 top-5 text-slate-300 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 bg-black px-1 rounded">
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
                    className="w-full p-5 bg-transparent border border-white/20 rounded-xl focus:border-blue-500 outline-none text-white peer"
                    placeholder=" "
                  />
                  <label className="absolute left-5 top-5 text-slate-300 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 bg-black px-1 rounded">
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-5 bg-transparent border border-white/20 rounded-xl focus:border-blue-500 outline-none text-white"
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
                  className="w-full p-5 bg-transparent border border-white/20 rounded-xl focus:border-blue-500 outline-none text-white peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-5 top-5 text-slate-300 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-300 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-400 bg-black px-1 rounded">
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
                className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 font-semibold text-white hover:scale-[1.02] transition transform duration-300 disabled:opacity-60"
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