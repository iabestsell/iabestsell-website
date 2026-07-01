"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Shield,
  Rocket,
  Activity,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We start by understanding your business, challenges, goals and technical landscape.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We architect solutions that align with your objectives, scale requirements and security needs.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Our engineers build your solution using modern frameworks, best practices and clean code.",
    color: "from-emerald to-teal-600",
  },
  {
    icon: Shield,
    title: "Secure",
    description:
      "Every component is hardened, tested and validated against security best practices.",
    color: "from-cyber-purple to-indigo-600",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Automated, repeatable deployments through CI/CD pipelines with zero-downtime releases.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Activity,
    title: "Monitor",
    description:
      "Real-time observability with alerts, dashboards and performance metrics.",
    color: "from-electric-blue to-blue-600",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Ongoing management, optimisation and support to keep your systems running at peak performance.",
    color: "from-slate-600 to-gray-700",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full mb-4">
            Our Process
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            How We Deliver
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-200 text-lg">
            A proven methodology that ensures quality, security and business
            value at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-cyber-purple to-emerald" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center lg:mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}
                >
                  <div
                    className={`glass-card p-6 inline-block ${
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${
                        index % 2 === 0 ? "lg:ml-auto" : ""
                      }`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-navy dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-grey dark:text-gray-200 leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-navy border-4 border-electric-blue items-center justify-center z-10">
                  <span className="text-xs font-bold text-electric-blue">
                    {index + 1}
                  </span>
                </div>

                {/* Spacer for other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
