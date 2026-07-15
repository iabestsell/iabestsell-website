"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Cloud,
  Server,
  Code2,
  Network,
  Lock,
  Cpu,
  Database,
  Monitor,
  Zap,
} from "lucide-react";
import Link from "next/link";

const floatingIcons = [
  { Icon: Cloud, delay: 0, x: "10%", y: "20%" },
  { Icon: Shield, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Server, delay: 1, x: "75%", y: "70%" },
  { Icon: Code2, delay: 1.5, x: "15%", y: "75%" },
  { Icon: Network, delay: 2, x: "50%", y: "10%" },
  { Icon: Lock, delay: 2.5, x: "90%", y: "45%" },
  { Icon: Cpu, delay: 3, x: "5%", y: "50%" },
  { Icon: Database, delay: 3.5, x: "60%", y: "80%" },
  { Icon: Monitor, delay: 4, x: "30%", y: "85%" },
  { Icon: Zap, delay: 4.5, x: "40%", y: "5%" },
];

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30 dark:from-navy dark:via-navy dark:to-[#0a1f3d]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating icons */}
      <div aria-hidden="true">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: delay * 0.3, duration: 0.8 }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12 text-electric-blue dark:text-electric-blue/60" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full mb-8"
        >
          <Shield className="w-4 h-4 text-electric-blue" />
          <span className="text-sm font-medium text-electric-blue">
            Secure by Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-navy dark:text-white leading-tight mb-6"
        >
          Engineering Better
          <br />
          <span className="gradient-text">Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-slate-grey dark:text-gray-300 mb-10 leading-relaxed"
        >
          We help organisations modernise, secure and scale with cloud
          infrastructure, cybersecurity, DevOps, custom software, AI automation
          and managed IT services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-electric-blue text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-electric-blue/25 hover:shadow-2xl hover:shadow-electric-blue/30 hover:-translate-y-0.5"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 bg-white dark:bg-white/10 text-navy dark:text-white font-semibold rounded-full border border-gray-200 dark:border-white/20 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Our Solutions
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-slate-grey dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald" />
            <span className="text-sm font-medium">Security-First</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-electric-blue" />
            <span className="text-sm font-medium">Cloud Native</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyber-purple" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium">Enterprise-Grade</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy to-transparent" />
    </section>
  );
}
