"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Bot,
  FileText,
  BarChart3,
  Workflow,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and complex business processes with intelligent workflows.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents for customer support, internal queries and process automation.",
  },
  {
    icon: FileText,
    title: "Document Automation",
    description:
      "Automated document generation, processing and intelligent data extraction.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Data-driven insights and analytics dashboards that inform better decisions.",
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    description:
      "Seamlessly integrate AI capabilities into existing business applications and workflows.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Automation",
    description:
      "End-to-end business process automation powered by machine learning and AI models.",
  },
];

export default function AISection() {
  return (
    <section className="section-padding bg-light-grey dark:bg-navy/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald/10 text-emerald text-sm font-medium rounded-full mb-4">
            <Cpu className="w-4 h-4" />
            AI & Automation
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Intelligent Automation for
            <br />
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-200 text-lg">
            Leverage AI and automation to eliminate manual processes, reduce
            errors, and unlock new levels of business efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald to-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <cap.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-navy dark:text-white mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-grey dark:text-gray-200 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
