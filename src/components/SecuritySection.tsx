"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Fingerprint,
  ShieldCheck,
  AlertTriangle,
  Key,
  FileCheck,
} from "lucide-react";

const securityFeatures = [
  { icon: Lock, label: "Zero Trust Architecture" },
  { icon: Eye, label: "Threat Detection & Response" },
  { icon: Fingerprint, label: "Identity & Access Management" },
  { icon: ShieldCheck, label: "Cloud Security Posture" },
  { icon: AlertTriangle, label: "Vulnerability Management" },
  { icon: Key, label: "Secrets Management" },
  { icon: FileCheck, label: "Compliance & Governance" },
  { icon: Shield, label: "DevSecOps Pipelines" },
];

export default function SecuritySection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1f3d] to-navy" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl"
      />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyber-purple/20 text-cyber-purple text-sm font-medium rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Security Built In
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Security Built Into Everything We Deliver
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Security isn&apos;t an afterthought. From identity management and cloud
              security to DevSecOps and infrastructure hardening, every solution
              we build follows security-first principles designed to protect your
              business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyber-purple/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-cyber-purple" />
                  </div>
                  <span className="text-sm text-gray-200 font-medium">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Shield */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-cyber-purple/30"
              />

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-electric-blue/30"
              />

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-emerald/30"
              />

              {/* Center Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyber-purple to-electric-blue flex items-center justify-center shadow-2xl shadow-cyber-purple/30"
                >
                  <Shield className="w-12 h-12 text-white" />
                </motion.div>
              </div>

              {/* Orbiting dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2,
                  }}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${i * 90}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyber-purple/60" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
