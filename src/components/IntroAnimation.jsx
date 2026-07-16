import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function IntroAnimation({ onFinish }) {
  const greetings = [
    "Hello",
    "नमस्ते",
    "Hola",
    "Bonjour",
    "Ciao",
    "Olá",
    "こんにちは",
    "안녕하세요",
    "مرحبا",
    "Hallo",
    "Salam",
    "Ram Ram",
    "चरण स्पर्श"
  ];

  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 180);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setHide(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    if (hide) {
      gsap.to(".intro-overlay", {
        y: "-100%",
        duration: 1.3,
        ease: "power4.inOut",
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });
    }
  }, [hide, onFinish]);

  return (
    <div className="intro-overlay fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

      <AnimatePresence mode="wait">
        {!hide && (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="relative text-6xl md:text-8xl font-bold text-white"
          >
            {greetings[index]}
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Bottom Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#000"
          d="M0,40 C350,220 1090,220 1440,40 L1440,220 L0,220 Z"
        />
      </svg>

    </div>
  );
}