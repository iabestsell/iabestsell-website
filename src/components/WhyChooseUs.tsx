"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Layers,
  Handshake,
  Award,
  Target,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

const reasons = [
  {
    icon: Cloud,
    title: "Enterprise-Grade Cloud Expertise",
    description:
      "Deep knowledge of AWS and Azure architectures for mission-critical workloads.",
  },
  {
    icon: Shield,
    title: "Security-First Mindset",
    description:
      "Every solution we deliver is secure by design, not bolted on as an afterthought.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "We build systems that grow with your business, from startup to enterprise scale.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partner",
    description:
      "We invest in lasting relationships, not one-off projects. Your success is our success.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description:
      "Our team holds industry-recognised certifications across cloud, security and development.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "Technology decisions driven by business outcomes, not trends or complexity.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description:
      "From strategy and architecture through to deployment, monitoring and ongoing management.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We stay ahead of the curve with AI, automation and emerging technologies that create competitive advantage.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald/10 text-emerald text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Why IA Bestsell Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-200 text-lg">
            We combine deep technical expertise with a genuine commitment to
            your business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group text-center p-6"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-electric-blue/10 to-cyber-purple/10 dark:from-electric-blue/20 dark:to-cyber-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-electric-blue" />
              </div>
              <h3 className="font-poppins font-semibold text-base text-navy dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-grey dark:text-gray-200 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
