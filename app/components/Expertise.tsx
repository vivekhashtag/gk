"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertise = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      color: "bg-blue-500",
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "PHP", ".NET Core", "Express.js"],
      color: "bg-green-500",
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
      color: "bg-purple-500",
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      color: "bg-orange-500",
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
      color: "bg-sky-500",
    },
    {
      category: "Tools",
      technologies: ["Git", "Jenkins", "JIRA", "Webpack", "Babel"],
      color: "bg-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="expertise" className="py-20 bg-white">
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
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mastering the latest technologies to build exceptional digital solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                  <h3 className="text-xl font-bold text-navy-primary">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-colors duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg">
              We stay ahead of the curve by continuously updating our skills and adopting emerging
              technologies to deliver innovative solutions that give your business a competitive
              edge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
