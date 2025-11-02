"use client";

import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Expertise", href: "#expertise" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Applications",
    "Cloud Solutions",
    "API Development",
    "DevOps Integration",
    "24/7 Support",
  ];

  const technologies = [
    "React & Next.js",
    "Node.js",
    "React Native",
    "AWS & Azure",
    "MongoDB & PostgreSQL",
    "Docker & Kubernetes",
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-navy-dark via-navy-primary to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">GURUKRUPA</span>
                <span className="text-xs text-gray-300 tracking-wider">SHRAVAYANTRA KENDRA</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-accent flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Transforming ideas into digital reality. Your trusted technology partner in Mumbai for
              innovative software solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <a href="tel:+918779017795" className="hover:text-orange-accent transition-colors">
                  +91 87790 17795
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <a
                  href="mailto:sales.gurukrupask@gmail.com"
                  className="hover:text-orange-accent transition-colors"
                >
                  sales.gurukrupask@gmail.com
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPinIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 text-sm hover:text-orange-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm flex items-center">
                  <svg className="h-3 w-3 text-orange-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Technologies</h3>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li key={tech} className="text-gray-300 text-sm flex items-center">
                  <svg className="h-3 w-3 text-orange-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} Gurukrupa Shravayantra Kendra. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <button className="hover:text-orange-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-orange-accent transition-colors">Terms of Service</button>
            <button className="hover:text-orange-accent transition-colors">Cookie Policy</button>
          </div>
        </div>

        {/* Credit */}
        <div className="text-center mt-6 text-xs text-gray-500">
          Crafted with excellence by Gurukrupa Shravayantra Kendra
        </div>
      </div>
    </footer>
  );
};

export default Footer;
