"use client";

import { motion } from "framer-motion";

const technologies = [
  "AWS",
  "Azure",
  "Microsoft 365",
  "Docker",
  "Terraform",
  "Kubernetes",
  "GitHub",
  "GitHub Actions",
  "Linux",
  "PostgreSQL",
  "Next.js",
  "Node.js",
  "Python",
  "Cloudflare",
  "Nginx",
  "Railway",
  "OpenTelemetry",
  "Prometheus",
  "Grafana",
  "Azure DevOps",
];

export default function TechStack() {
  return (
    <section className="section-padding bg-light-grey dark:bg-navy/50 overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full mb-4">
            Technology Stack
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Featured Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-200 text-lg">
            We leverage industry-leading technologies to deliver robust,
            scalable and secure solutions.
          </p>
        </motion.div>
      </div>

      {/* Scrolling tech logos - Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light-grey dark:from-navy/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light-grey dark:from-navy/50 to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 mb-6"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 px-6 py-3 bg-white dark:bg-white/[0.1] rounded-xl border border-gray-200/50 dark:border-white/[0.15] shadow-sm"
            >
              <span className="text-sm font-medium text-navy dark:text-white whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - reverse direction */}
        <motion.div
          animate={{ x: [-1920, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-6"
        >
          {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map(
            (tech, index) => (
              <div
                key={`${tech}-rev-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-white dark:bg-white/[0.1] rounded-xl border border-gray-200/50 dark:border-white/[0.15] shadow-sm"
              >
                <span className="text-sm font-medium text-navy dark:text-white whitespace-nowrap">
                  {tech}
                </span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
