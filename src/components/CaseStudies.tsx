"use client";

import { motion } from "framer-motion";
import { Cloud, Monitor, GitBranch, Code2, Shield } from "lucide-react";

const caseStudies = [
  {
    icon: Cloud,
    title: "MinorityDesk",
    subtitle: "Cloud Migration & Infrastructure",
    challenge:
      "Legacy on-premise HR system causing reliability issues and limiting business growth across multiple locations.",
    solution:
      "Full cloud migration to AWS with containerised microservices, automated CI/CD, and disaster recovery.",
    technology: ["AWS", "Docker", "Terraform", "PostgreSQL", "Next.js"],
    impact: "99.9% uptime, 60% reduction in infrastructure costs, 3x faster deployments.",
    color: "from-electric-blue to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Microsoft 365 Deployment",
    subtitle: "Enterprise Modern Workplace",
    challenge:
      "Fragmented communication tools and no centralised identity management across 200+ users.",
    solution:
      "Full Microsoft 365 deployment with Entra ID, Intune MDM, conditional access policies and Teams.",
    technology: ["Microsoft 365", "Entra ID", "Intune", "Exchange Online", "Teams"],
    impact: "100% user adoption within 4 weeks, zero security incidents, unified identity.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    subtitle: "DevOps Pipeline Modernisation",
    challenge:
      "Manual deployments taking hours with frequent rollbacks and no automated testing in place.",
    solution:
      "GitHub Actions CI/CD pipelines with automated testing, security scanning, and zero-downtime deployments.",
    technology: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "SonarQube"],
    impact: "Deployment time reduced from 4 hours to 8 minutes, zero failed releases in 6 months.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    subtitle: "Cloud Infrastructure Automation",
    challenge:
      "Manually provisioned cloud resources leading to drift, inconsistency and compliance gaps.",
    solution:
      "Complete IaC implementation with Terraform, modular infrastructure, and automated compliance checks.",
    technology: ["Terraform", "AWS", "GitHub Actions", "CloudWatch", "OPA"],
    impact: "100% infrastructure parity, 80% faster environment provisioning, full audit trail.",
    color: "from-emerald to-teal-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity Assessment",
    subtitle: "Security Posture Review",
    challenge:
      "Growing organisation with no formal security baseline, unclear risk exposure, and compliance requirements.",
    solution:
      "Comprehensive security assessment covering cloud, identity, endpoints, and network with prioritised remediation roadmap.",
    technology: ["Microsoft Security", "Azure Sentinel", "CIS Benchmarks", "NIST"],
    impact: "40+ critical vulnerabilities identified and remediated, achieved Cyber Essentials certification.",
    color: "from-cyber-purple to-pink-600",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-light-grey dark:bg-navy/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Real Results, Real Impact
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-200 text-lg">
            See how we&apos;ve helped organisations transform their technology
            landscape and achieve measurable business outcomes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
                {/* Left - Title */}
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-4`}
                  >
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-navy dark:text-white">
                    {study.title}
                  </h3>
                  <p className="text-sm text-electric-blue font-medium">
                    {study.subtitle}
                  </p>
                </div>

                {/* Middle - Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-grey dark:text-gray-400 uppercase tracking-wider mb-1">
                      Challenge
                    </h4>
                    <p className="text-sm text-navy dark:text-gray-200">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-grey dark:text-gray-400 uppercase tracking-wider mb-1">
                      Solution
                    </h4>
                    <p className="text-sm text-navy dark:text-gray-200">
                      {study.solution}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technology.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-electric-blue/10 text-electric-blue rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Impact */}
                <div className="lg:text-right">
                  <h4 className="text-xs font-semibold text-slate-grey dark:text-gray-400 uppercase tracking-wider mb-2">
                    Business Impact
                  </h4>
                  <p className="text-sm font-medium text-emerald leading-relaxed">
                    {study.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
