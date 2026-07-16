import { motion } from "framer-motion";

const experiences = [
  {
    year: "Since 2020",
    title: "Stock Market Trader",
    company: "Independent",
    description:
      "Passionate Indian Stock Market Trader focused on disciplined, data-driven investing.",
  },
  {
    year: "Since 2026",
    title: "Forex Market Trader",
    company: "Independent",
    description:
      "Analyzing global currency markets through technical analysis and smart risk management.",
  },
  {
    year: "2026",
    title: "Data Analyst",
    company: "Learning Journey",
    description:
      "Data Science Enthusiast | Python • Machine Learning • Data Visualization",
  },
  {
    year: "2026",
    title: "DSA",
    company: "Learning Journey",
    description:
      "Mastering Data Structures & Algorithms to Build Efficient and Scalable Solutions",
  },
  {
  year: "since 2025",
  title: "Head Cultural Activities",
  company: "Student Activity Council (SAC) OIST",
  description:
    "Directed college cultural events, coordinated cross-functional teams, and delivered engaging experiences while strengthening leadership and organizational skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className=" text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-6 top-0 w-1 h-full bg-gray-700"></div>

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative flex items-start mb-16"
            >
              {/* Dot */}
              <motion.div
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 25px white",
                }}
                className="w-5 h-5 rounded-full bg-white border-4 border-black z-10"
              />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="ml-10 w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-6 transition-all"
              >
                <span className="text-sm text-gray-400">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-violet-400 mt-1">
                  {item.company}
                </p>

                <p className="text-gray-300 mt-4 leading-7">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}