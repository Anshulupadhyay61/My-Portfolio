import React from "react";
import { motion } from "framer-motion";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

const projects = [
  {
    title: "PassOP Password Manager",
    image: p1,
    description:
      "A secure password management application built with React. Store, organize, and manage your passwords efficiently with a clean, responsive interface.",
    tech: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Local Storage",
    ],
    github:
      "https://github.com/Anshulupadhyay61/passop-password-manager",
  },

  {
    title: "Netflix Clone",
    image: p2,
    description:
      "A modern Netflix-inspired landing page with responsive layouts, smooth UI interactions, and a premium streaming platform experience.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive UI",
    ],
    github:
      "https://github.com/Anshulupadhyay61/project-1--netflix-clone-",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 overflow-hidden text-white"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[150px] rounded-full left-1/2 top-40 -translate-x-1/2"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center text-5xl md:text-6xl font-bold mb-20 bg-gradient-to-r from-white via-green-300 to-cyan-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (

  <motion.div
    key={index}
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.95,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: index * 0.2,
    }}
    whileHover={{
      y: -12,
      scale: 1.02,
    }}
    className="
      group
      rounded-3xl
      overflow-hidden
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      hover:border-green-400/50
      transition-all
      duration-500
      shadow-[0_0_40px_rgba(34,197,94,.12)]
      hover:shadow-[0_0_70px_rgba(34,197,94,.35)]
    "
  >

    {/* Image */}

    <div className="relative overflow-hidden">

      <motion.img
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: .5,
        }}
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-[280px]
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-transparent
        "
      />

    </div>

    {/* Content */}

    <div className="p-8">

      <h3
        className="
          text-3xl
          font-bold
          text-green-400
        "
      >
        {project.title}
      </h3>

      <p
        className="
          mt-5
          text-gray-300
          leading-8
        "
      >
        {project.description}
      </p>

      {/* Tech Stack */}

      <div className="flex flex-wrap gap-3 mt-8">

        {project.tech.map((tech) => (

          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-green-500/10
              border
              border-green-400/20
              text-green-300
              text-sm
            "
          >
            {tech}
          </span>

        ))}

      </div>
            {/* Button */}

      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          inline-flex
          items-center
          justify-center
          mt-8
          px-7
          py-3
          rounded-xl
          font-semibold
          text-black
          bg-gradient-to-r
          from-green-400
          to-cyan-400
          shadow-[0_0_25px_rgba(34,197,94,.4)]
          hover:shadow-[0_0_40px_rgba(34,197,94,.7)]
          transition-all
          duration-300
        "
      >
        View Project →
      </motion.a>

    </div>

  </motion.div>

))}
        </div>

      </div>

    </section>
  );
}

