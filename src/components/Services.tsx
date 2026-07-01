"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  GitBranch,
  Code2,
  Monitor,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Enterprise cloud infrastructure designed for scale, security and performance.",
    items: [
      "AWS",
      "Azure",
      "Cloud Migration",
      "Cloud Architecture",
      "Infrastructure as Code",
      "Cloud Optimisation",
      "Monitoring",
      "Disaster Recovery",
    ],
    color: "from-blue-500 to-cyan-500",
    accent: "blue",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your business from evolving threats.",
    items: [
      "Security Assessments",
      "Cloud Security",
      "Microsoft Security",
      "Identity & Access Management",
      "Security Hardening",
      "Vulnerability Management",
      "Threat Detection",
      "Incident Response",
      "Zero Trust",
      "Compliance",
      "Security Awareness",
    ],
    color: "from-purple-500 to-pink-500",
    accent: "purple",
  },
  {
    icon: GitBranch,
    title: "DevOps & DevSecOps",
    description:
      "Automated, secure pipelines that accelerate delivery without compromising security.",
    items: [
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Infrastructure Automation",
      "Pipeline Security",
      "Secrets Management",
      "Container Security",
      "Policy as Code",
      "Observability",
    ],
    color: "from-orange-500 to-red-500",
    accent: "orange",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Bespoke business applications built with modern frameworks and security-first principles.",
    items: [
      "Business Systems",
      "HR Platforms",
      "Inventory Systems",
      "Healthcare Systems",
      "Booking Platforms",
      "Business Portals",
      "Internal Applications",
      "API Development",
      "AI Integrations",
    ],
    color: "from-emerald-500 to-teal-500",
    accent: "emerald",
  },
  {
    icon: Monitor,
    title: "Microsoft Solutions",
    description:
      "Full-spectrum Microsoft 365 and Azure identity management for modern workplaces.",
    items: [
      "Microsoft 365",
      "Entra ID",
      "Intune",
      "SharePoint",
      "Exchange Online",
      "Teams",
      "Endpoint Management",
      "Identity Management",
      "Modern Workplace",
    ],
    color: "from-blue-600 to-indigo-600",
    accent: "indigo",
  },
  {
    icon: Headphones,
    title: "Managed IT Services",
    description:
      "Proactive IT management and support that keeps your business running securely 24/7.",
    items: [
      "24/7 Monitoring",
      "Hosting",
      "Backups",
      "Cloud Support",
      "Patch Management",
      "Performance Optimisation",
      "Remote Support",
      "Infrastructure Management",
      "Helpdesk",
    ],
    color: "from-slate-600 to-gray-700",
    accent: "slate",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-light-grey dark:bg-navy/50">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full mb-4">
            Core Services
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Enterprise Technology Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-300 text-lg">
            End-to-end technology services built with security at the core.
            Every solution we deliver is secure by design.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-xl text-navy dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-grey dark:text-gray-200 mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-slate-grey dark:text-gray-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
