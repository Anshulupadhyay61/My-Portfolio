import { motion } from "framer-motion";
import { FaCode, FaTerminal } from "react-icons/fa";

import GitHubCard from "../components/GitHubCard";
import AuroraBackground from "../components/AuroraBackground";
import MouseGlow from "../components/MouseGlow";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden py-24 md:py-32 px-6"
    >
      <MouseGlow />
      <AuroraBackground />

      {/* Background Effects */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <div
          className="absolute left-1/2 top-20 h-[700px] w-[700px]
          -translate-x-1/2 rounded-full
          bg-cyan-500/10 blur-[180px]"
        />

        <div
          className="absolute bottom-0 right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/10
          blur-[180px]"
        />

        <div
          className="absolute left-0 top-96
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-500/10
          blur-[140px]"
        />

      </div>

      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >

          <div
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            backdrop-blur-xl
            px-6
            py-3"
          >

            <FaCode className="text-cyan-400 text-lg" />

            <span
              className="
              uppercase
              tracking-[4px]
              text-cyan-300
              text-sm"
            >
              Developer Dashboard
            </span>

          </div>

          <p className="mt-6 text-base md:text-lg text-gray-400">
            My Open Source Contribution Activity
          </p>

        </motion.div>
                {/* Terminal */}

        <motion.div
          id="developer-terminal"
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >

          {/* Glow */}

          <div
            className="
            absolute
            inset-0
            rounded-[40px]
            bg-cyan-500/10
            blur-[120px]"
          />

          {/* Terminal */}

          <div
            className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-cyan-400/20
            bg-[#0d1117]/95
            backdrop-blur-3xl
            shadow-[0_20px_80px_rgba(0,255,255,.15)]"
          >

            {/* Header */}

            <div
              className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-black/30
              px-5
              md:px-8
              py-4
              md:py-5"
            >

              <div className="flex gap-3">

                <div className="h-3.5 w-3.5 rounded-full bg-red-500" />

                <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />

                <div className="h-3.5 w-3.5 rounded-full bg-green-500" />

              </div>

              <div
                className="
                flex
                items-center
                gap-3
                text-sm
                md:text-base
                text-gray-400"
              >

                <FaTerminal />

                <span>● ● ●                    developer@portfolio                🟢 LIVE</span>

              </div>

            </div>

            {/* Body */}

            <div className="relative p-6 md:p-10">

              <div
                className="
                absolute
                -left-10
                top-0
                h-72
                w-72
                rounded-full
                bg-cyan-500/10
                blur-[100px]"
              />

              <div
                className="
                absolute
                right-0
                bottom-0
                h-72
                w-72
                rounded-full
                bg-violet-500/10
                blur-[100px]"
              />

              <div className="relative mx-auto w-full max-w-6xl">

                <GitHubCard />

              </div>

            </div>

          </div>

        </motion.div>

              </div>

      {/* Bottom Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        h-40
        bg-gradient-to-b
        from-transparent
        to-[#08111b]
        pointer-events-none"
      />

    </section>
  );
}