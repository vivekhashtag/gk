"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Discover",
      description: "Understanding requirements and business goals",
      color: "from-blue-500 to-blue-600",
      details: [
        "Requirement gathering",
        "Market research",
        "Competitive analysis",
        "Goal definition",
      ],
    },
    {
      icon: PencilSquareIcon,
      title: "Design",
      description: "Creating intuitive UI/UX and system architecture",
      color: "from-purple-500 to-purple-600",
      details: [
        "Wireframing",
        "UI/UX design",
        "System architecture",
        "Prototype development",
      ],
    },
    {
      icon: CodeBracketIcon,
      title: "Develop",
      description: "Building robust solutions with clean code",
      color: "from-orange-500 to-orange-600",
      details: [
        "Agile development",
        "Code reviews",
        "Quality assurance",
        "Continuous integration",
      ],
    },
    {
      icon: RocketLaunchIcon,
      title: "Deploy",
      description: "Launching and maintaining your solution",
      color: "from-green-500 to-green-600",
      details: [
        "Production deployment",
        "Performance monitoring",
        "Ongoing support",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Development Process
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured approach to transform your vision into reality
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 transform -translate-y-1/2 z-0"></div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md">
                      <span className="text-sm font-bold text-navy-primary">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
                    <h3 className="text-2xl font-bold text-navy-primary mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg
                            className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your project with our proven process?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
