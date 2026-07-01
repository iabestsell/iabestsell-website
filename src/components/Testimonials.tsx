"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "HealthFirst Group",
    quote:
      "IA Bestsell Technologies transformed our cloud infrastructure. Their security-first approach gave us the confidence to modernise our healthcare platform without compromising patient data.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Operations Director",
    company: "Nexus Education",
    quote:
      "The team delivered our school management platform on time and on budget. Their understanding of our sector and commitment to quality was exceptional.",
    rating: 5,
  },
  {
    name: "Rachel Hughes",
    role: "Managing Director",
    company: "Sterling Properties",
    quote:
      "From Microsoft 365 deployment to our custom property management system, IA Bestsell has been a phenomenal technology partner. Highly recommended.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Head of Engineering",
    company: "Finova Solutions",
    quote:
      "Their DevSecOps expertise helped us achieve compliance while accelerating our deployment cadence by 10x. A rare combination of speed and security.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-600 text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-navy dark:text-white mb-4">
            Trusted by Businesses
          </h2>
          <p className="max-w-2xl mx-auto text-slate-grey dark:text-gray-300 text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about
            working with IA Bestsell Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-electric-blue/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy dark:text-gray-200 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-cyber-purple flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm text-navy dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-grey dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
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
