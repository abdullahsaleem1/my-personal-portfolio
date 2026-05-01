'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Briefcase } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          subject: 'Job Opportunity',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Get in Touch
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            Have an opportunity, a question, or just want to chat? I'd love to
            hear from you. Fill out the form or reach out directly.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-bg-secondary border border-border-subtle rounded-lg"
          >
            <Mail className="w-6 h-6 text-accent-green mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:iamabdullahsaleem1@gmail.com"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              iamabdullahsaleem1@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-bg-secondary border border-border-subtle rounded-lg"
          >
            <Phone className="w-6 h-6 text-accent-green mb-3" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a
              href="tel:+923259733970"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              +92 325 9733970
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-bg-secondary border border-border-subtle rounded-lg"
          >
            <MapPin className="w-6 h-6 text-accent-green mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-text-secondary">
              Lahore, Pakistan
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:border-accent-green focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:border-accent-green focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:border-accent-green focus:outline-none transition-colors"
                >
                  <option>Job Opportunity</option>
                  <option>Freelance</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border-subtle rounded-lg focus:border-accent-green focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-accent-green/10 border border-accent-green/30 rounded-lg text-accent-green text-sm">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-accent-green text-bg-primary rounded-lg font-semibold hover:bg-accent-green-dim transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <div className="space-y-4">
              {[
                {
                  icon: Code,
                  label: 'GitHub',
                  href: 'https://github.com/yourusername',
                },
                {
                  icon: Briefcase,
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/yourusername',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  href: 'mailto:iamabdullahsaleem1@gmail.com',
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-bg-secondary border border-border-subtle rounded-lg hover:border-accent-green hover:bg-accent-green/5 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-green transition-colors" />
                  <span className="group-hover:text-accent-green transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}