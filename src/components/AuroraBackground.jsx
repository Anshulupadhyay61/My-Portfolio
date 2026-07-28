import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -140, 80, 0],
          y: [0, 90, -70, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, 70, -40, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-150px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[170px]"
      />

    </div>
  );
}