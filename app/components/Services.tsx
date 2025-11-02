"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: GlobeAltIcon,
      title: "Web Development",
      features: [
        "Custom web applications",
        "Progressive Web Apps",
        "E-commerce Platforms",
        "CMS Integration",
        "API Development",
      ],
      description:
        "Custom web applications built with cutting-edge technologies. From responsive websites to complex enterprise systems, we deliver scalable solutions that grow with your business.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Applications",
      features: [
        "iOS & Android Native Apps",
        "React Native Development",
        "Flutter Solutions",
        "App Store Deployment",
      ],
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences. We create apps that your users will love, optimized for performance and engagement.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: CloudIcon,
      title: "Cloud & Hosting Solutions",
      features: [
        "AWS & Azure Deployment",
        "DevOps Integration",
        "24/7 Monitoring",
        "Auto-scaling Solutions",
      ],
      description:
        "Reliable cloud infrastructure and hosting solutions. We ensure your applications are secure, scalable, and always available with 99.9% uptime guarantee.",
      color: "from-orange-500 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-navy-primary mb-4"
              variants={cardVariants}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={cardVariants}
            >
              Comprehensive software development solutions tailored to your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-navy-primary mb-4">{service.title}</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium">
                    Learn More
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
