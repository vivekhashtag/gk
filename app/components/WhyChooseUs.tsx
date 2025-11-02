"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: CheckCircleIcon,
      title: "End-to-End Solutions",
      description: "Ideation to deployment",
      details: "Complete software development lifecycle management from concept to maintenance",
    },
    {
      icon: ClockIcon,
      title: "Timely Delivery",
      description: "Respect deadlines",
      details: "Committed to delivering projects on time without compromising quality",
    },
    {
      icon: CogIcon,
      title: "Agile Methodology",
      description: "Flexible development",
      details: "Adaptive approach that responds to changing requirements and market needs",
    },
    {
      icon: ChartBarIcon,
      title: "Scalable Architecture",
      description: "Future-proof solutions",
      details: "Build systems that grow with your business and handle increased demand",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Transparent Communication",
      description: "Regular updates",
      details: "Keep you informed at every stage with clear, consistent communication",
    },
    {
      icon: ShieldCheckIcon,
      title: "Dedicated Support",
      description: "24/7 availability",
      details: "Round-the-clock technical support to ensure your systems run smoothly",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your success is our mission - here&apos;s what makes us different
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-purple-600 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-primary mb-1">{reason.title}</h3>
                    <p className="text-sm text-purple-600 font-medium mb-3">
                      {reason.description}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.details}</p>
                  </div>
                </div>

                {/* Checkmark */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-navy-primary to-navy-dark rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-accent mb-2">50+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-accent mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-accent mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
