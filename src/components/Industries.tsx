"use client";

import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Banknote,
  HardHat,
  Landmark,
  Building2,
  Rocket,
  HandHeart,
} from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare", color: "from-red-500 to-pink-500" },
  { icon: GraduationCap, name: "Education", color: "from-blue-500 to-indigo-500" },
  { icon: ShoppingBag, name: "Retail", color: "from-orange-500 to-amber-500" },
  { icon: Hotel, name: "Hospitality", color: "from-teal-500 to-cyan-500" },
  { icon: Banknote, name: "Finance", color: "from-green-500 to-emerald-500" },
  { icon: HardHat, name: "Construction", color: "from-yellow-600 to-orange-500" },
  { icon: Landmark, name: "Government", color: "from-slate-600 to-gray-700" },
  { icon: Building2, name: "SMEs", color: "from-purple-500 to-violet-500" },
  { icon: Rocket, name: "Startups", color: "from-electric-blue to-cyan-500" },
  { icon: HandHeart, name: "Non-Profit", color: "from-pink-500 to-rose-500" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald/10 text-emerald text-sm font-medium rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Technology Solutions Across Sectors
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-200 text-lg">
            We understand the unique challenges of every sector and deliver
            tailored solutions that drive real business outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-sm text-navy dark:text-white">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
