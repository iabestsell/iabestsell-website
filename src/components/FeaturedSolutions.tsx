"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Pill, Package, Home, School } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    name: "MinorityDesk",
    tagline: "HR Management Platform",
    description:
      "A comprehensive HR management system designed for modern businesses to streamline people operations, payroll, and compliance.",
    icon: Users,
    color: "from-electric-blue to-indigo-600",
    features: ["Employee Management", "Payroll", "Leave Tracking", "Compliance"],
  },
  {
    name: "PharmacyFlow",
    tagline: "Pharmacy Management",
    description:
      "End-to-end pharmacy management solution covering prescriptions, inventory, patient records and regulatory compliance.",
    icon: Pill,
    color: "from-emerald to-teal-600",
    features: ["Prescriptions", "Inventory", "Patient Records", "Compliance"],
  },
  {
    name: "StockPilot",
    tagline: "Inventory Management",
    description:
      "Intelligent inventory management with real-time tracking, automated reordering, and analytics for optimised stock control.",
    icon: Package,
    color: "from-orange-500 to-amber-600",
    features: ["Real-time Tracking", "Auto-reorder", "Analytics", "Multi-location"],
  },
  {
    name: "PropertyHub",
    tagline: "Property Management",
    description:
      "Complete property management platform for landlords and agents with tenant management, maintenance tracking, and financial reporting.",
    icon: Home,
    color: "from-cyber-purple to-pink-600",
    features: ["Tenant Management", "Maintenance", "Financials", "Portal"],
  },
  {
    name: "SchoolHub",
    tagline: "Education Platform",
    description:
      "Modern education management system for schools with student information, attendance, grading, and parent communication.",
    icon: School,
    color: "from-blue-600 to-cyan-500",
    features: ["Student Info", "Attendance", "Grading", "Communication"],
  },
];

export default function FeaturedSolutions() {
  return (
    <section id="solutions" className="section-padding bg-light-grey dark:bg-navy/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full mb-4">
            Featured Solutions
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Purpose-Built Business Software
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-300 text-lg">
            Enterprise-grade applications designed to solve real business
            problems. Each solution is built with security, scalability and
            usability at its core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <solution.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-poppins font-bold text-xl text-navy dark:text-white mb-1">
                {solution.name}
              </h3>
              <p className="text-sm text-electric-blue font-medium mb-3">
                {solution.tagline}
              </p>
              <p className="text-slate-grey dark:text-gray-200 text-sm leading-relaxed mb-5 flex-grow">
                {solution.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-slate-grey dark:text-gray-200 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-electric-blue hover:text-blue-700 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
