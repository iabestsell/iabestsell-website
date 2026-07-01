"use client";

import Link from "next/link";
import { ExternalLink, Code2, Mail, Globe } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  Services: [
    { name: "Cloud Solutions", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "DevOps & DevSecOps", href: "#services" },
    { name: "Custom Software", href: "#services" },
    { name: "Microsoft Solutions", href: "#services" },
    { name: "Managed IT", href: "#services" },
  ],
  Solutions: [
    { name: "MinorityDesk", href: "#solutions" },
    { name: "PharmacyFlow", href: "#solutions" },
    { name: "StockPilot", href: "#solutions" },
    { name: "PropertyHub", href: "#solutions" },
    { name: "SchoolHub", href: "#solutions" },
  ],
  Industries: [
    { name: "Healthcare", href: "#industries" },
    { name: "Education", href: "#industries" },
    { name: "Finance", href: "#industries" },
    { name: "Retail", href: "#industries" },
    { name: "Government", href: "#industries" },
  ],
  Resources: [
    { name: "Knowledge Base", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Support Portal", href: "#" },
    { name: "Client Portal", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-max px-4 md:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-cyber-purple flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-lg">
                  IA
                </span>
              </div>
              <div>
                <span className="font-poppins font-semibold text-white text-base">
                  IA Bestsell
                </span>
                <span className="block text-xs text-gray-400 -mt-0.5">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Engineering Better Businesses. Helping organisations modernise,
              secure and scale through innovative technology solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-gray-400 hover:text-electric-blue" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
              >
                <Globe className="w-4 h-4 text-gray-400 hover:text-electric-blue" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
              >
                <Code2 className="w-4 h-4 text-gray-400 hover:text-electric-blue" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-electric-blue/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-400 hover:text-electric-blue" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white mb-1">
                Stay Updated
              </h4>
              <p className="text-sm text-gray-400">
                Get insights on cloud, security and technology delivered to your
                inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
              />
              <button className="px-6 py-2.5 bg-electric-blue text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} IA Bestsell Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
