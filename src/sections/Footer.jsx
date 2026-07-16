import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-20 lg:py-24 border-t border-green-500/20">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-black" />

      {/* Magic Portal */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-6
          lg:top-8
          -translate-x-1/2
          w-52
          h-52
          sm:w-64
          sm:h-64
          lg:w-72
          lg:h-72
          rounded-full
          border
          border-green-500/20
        "
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-6
          lg:top-8
          -translate-x-1/2
          w-36
          h-36
          sm:w-44
          sm:h-44
          lg:w-52
          lg:h-52
          rounded-full
          border
          border-green-400/30
        "
      />

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          lg:top-28
          -translate-x-1/2
          w-52
          h-52
          sm:w-64
          sm:h-64
          lg:w-72
          lg:h-72
          bg-green-500/20
          blur-[120px]
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            text-white
          "
        >
          Anshul Upadhyay
        </motion.h2>

        <p
          className="
            mt-5
            text-sm
            sm:text-base
            text-gray-400
          "
        >
          Frontend Developer • Actor • Data Analyst  • Problem Solver
        </p>

        {/* Social Buttons */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-4
            sm:gap-5
            mt-10
          "
        >

          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://github.com/Anshulupadhyay61"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5
              sm:px-6
              py-3
              rounded-full
              bg-green-500/10
              border
              border-green-500/40
              hover:bg-green-500/20
              transition
            "
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://www.linkedin.com/in/anshul-upadhyay-0750b4331/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5
              sm:px-6
              py-3
              rounded-full
              bg-green-500/10
              border
              border-green-500/40
              hover:bg-green-500/20
              transition
            "
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://instagram.com/Anshulupadhyay61"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5
              sm:px-6
              py-3
              rounded-full
              bg-green-500/10
              border
              border-green-500/40
              hover:bg-green-500/20
              transition
            "
          >
            Instagram
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            href="https://leetcode.com/u/anshulupadhyay61/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5
              sm:px-6
              py-3
              rounded-full
              bg-green-500/10
              border
              border-green-500/40
              hover:bg-green-500/20
              transition
            "
          >
            Leetcode
          </motion.a>

        </div>

        {/* Back to Top */}

        <motion.button
          whileHover={{
            scale: 1.15,
            rotate: 360,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            mt-12
            lg:mt-14
            w-14
            h-14
            lg:w-16
            lg:h-16
            rounded-full
            bg-green-500
            text-black
            text-xl
            lg:text-2xl
            font-bold
            shadow-[0_0_30px_#22c55e]
          "
        >
          ↑
        </motion.button>

        <p
          className="
            mt-10
            text-gray-500
            text-xs
            sm:text-sm
            px-4
          "
        >
          © {new Date().getFullYear()} Anshul Upadhyay. Crafted with React &
          Framer Motion.
        </p>

      </div>

    </footer>
  );
}