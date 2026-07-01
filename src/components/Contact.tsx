"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const industries = [
  "Healthcare",
  "Education",
  "Retail",
  "Hospitality",
  "Finance",
  "Construction",
  "Government",
  "SME",
  "Startup",
  "Non-Profit",
  "Other",
];

const services = [
  "Cloud Solutions",
  "Cybersecurity",
  "DevOps & DevSecOps",
  "Custom Software",
  "Microsoft Solutions",
  "Managed IT Services",
  "AI & Automation",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Start Your Technology Journey
          </h2>
          <p className="max-w-2xl mx-auto text-navy/70 dark:text-gray-200 text-lg">
            Ready to transform your business with enterprise technology? Let&apos;s
            talk about your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-poppins font-semibold text-xl text-navy dark:text-white mb-4">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-navy/70 dark:text-gray-200 leading-relaxed">
                Whether it&apos;s a cloud migration, security assessment, custom
                application or managed services—we&apos;re here to help you build
                technology that works.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <p className="text-sm text-navy/60 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-medium text-navy dark:text-white">
                    iskandar@iabestsell.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <p className="text-sm text-navy/60 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="font-medium text-navy dark:text-white">
                    +44 7939 653621
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <p className="text-sm text-navy/60 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-medium text-navy dark:text-white">
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 dark:bg-white/[0.06]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                  >
                    Business Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                    placeholder="+44 ..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                  >
                    <option value="">Select industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                  >
                    <option value="">Select service</option>
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy dark:text-white mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.12] border border-gray-200 dark:border-white/[0.15] text-navy dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all resize-none"
                  placeholder="Tell us about your project, challenges and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-electric-blue text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-electric-blue/25 hover:shadow-xl hover:shadow-electric-blue/30 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
