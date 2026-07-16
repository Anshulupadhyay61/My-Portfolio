import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../assets/Logo.png";
import avator from "../assets/avator.png";

const professions = [
  "Software Engineer",
  "Full Stack Developer",
  "AI & Data Analytics ",
  "Stock Market Trader",
  "Forex Trader",
  "Actor",
  "Voice Artist",
  "Mimicry Artist",
  "Content Creator",
];

const Home = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % professions.length);

    }, 2200);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      id="home"
      className="
      w-full
      min-h-screen
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      justify-between
      px-6
      sm:px-10
      lg:px-24
      py-28
      lg:py-0
      relative
      z-10
      gap-12
      "
    >

      {/* Left Side */}

      <div className="max-w-xl text-center lg:text-left">

        {/* Logo */}

        <img
          src={logo}
          alt="Logo"
          className="
          w-24
          sm:w-28
          lg:w-32
          mb-6
          lg:mb-8
          object-contain
          mx-auto
          lg:mx-0
          "
        />

        {/* Premium Profession Animation */}

        <div
          className="
          inline-flex
          items-center
          gap-3
          px-5
          py-3
          rounded-full
          bg-white/5
          border
          border-[#00FFC8]/30
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(0,255,200,.15)]
          mb-6
          "
        >

          <span className="text-[#00FFC8] font-semibold">
            ✦ CURRENTLY WORKING AS
          </span>

          <AnimatePresence mode="wait">

            <motion.span
              key={professions[current]}
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -25,
                filter: "blur(12px)",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="
              text-[#00FFC8]
              font-bold
              text-sm
              sm:text-base
              lg:text-lg
              tracking-wide
              flex
              items-center
              "
            >
              {professions[current]}

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                className="
                ml-1
                text-[#00FFC8]
                text-xl
                font-light
                "
              >
                |
              </motion.span>

            </motion.span>

          </AnimatePresence>

        </div>

        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          leading-tight
          "
        >
          Hello, I'm <br />

          <span className="text-[#00FFC8]">
            Anshul Upadhyay
          </span>

        </h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
          mt-8
          space-y-3
          text-sm
          sm:text-base
          lg:text-lg
          "
        >

          <motion.p whileHover={{ x: 8 }}>
            <span className="text-[#00FFC8]">◆</span>{" "}
            Turning data into meaningful insights.
          </motion.p>

          <motion.p whileHover={{ x: 8 }}>
            <span className="text-[#00FFC8]">◆</span>{" "}
            Trading Stocks & Forex.
          </motion.p>

          <motion.p whileHover={{ x: 8 }}>
            <span className="text-[#00FFC8]">◆</span>{" "}
            Acting is like living another life.
          </motion.p>

          <motion.p whileHover={{ x: 8 }}>
            <span className="text-[#00FFC8]">◆</span>{" "}
            Creating voices that connect.
          </motion.p>

          <motion.p whileHover={{ x: 8 }}>
            <span className="text-[#00FFC8]">◆</span>{" "}
            Creating content that informs, inspires, and engages.
          </motion.p>

          <motion.p whileHover={{ x: 8 }}>
            <span className="text-[#00FFC8]">◆</span>{" "}
            Being a Cultural Head is about bringing people together through creativity.
          </motion.p>

        </motion.div>

        {/* Buttons */}

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          sm:gap-5
          mt-10
          justify-center
          lg:justify-start
          "
        >

          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,255,200,.45)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Anshulupadhyay61"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-8
            py-4
            rounded-full
            bg-[#00FFC8]
            text-black
            font-semibold
            transition
            text-center
            "
          >
            View Projects
          </motion.a>

          <motion.a
  whileHover={{
    scale: 1.05,
    borderColor: "#00FFC8",
  }}
  whileTap={{ scale: 0.95 }}
  href="/Anshul_Upadhyay_ATS_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-8
    py-4
    rounded-full
    border
    border-white/20
    hover:bg-white/10
    transition
    text-center
  "
>
  📄 View Resume
</motion.a>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center relative">

        {/* Animated Glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          w-[260px]
          h-[260px]
          sm:w-[360px]
          sm:h-[360px]
          lg:w-[520px]
          lg:h-[520px]
          rounded-full
          bg-[#00FFC8]/20
          blur-[90px]
          "
        />

        {/* Rotating Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          w-[260px]
          h-[260px]
          sm:w-[360px]
          sm:h-[360px]
          lg:w-[500px]
          lg:h-[500px]
          rounded-full
          border
          border-dashed
          border-[#00FFC8]/30
          "
        />

        {/* Avatar */}

        <motion.img
          src={avator}
          alt="Hero"
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          className="
          relative
          z-10
          w-[260px]
          sm:w-[340px]
          md:w-[400px]
          lg:w-[470px]
          object-contain
          drop-shadow-[0_0_45px_rgba(0,255,200,.45)]
          "
        />

      </div>

    </section>
  );
};

export default Home;