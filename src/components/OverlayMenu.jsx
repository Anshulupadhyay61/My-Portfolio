import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Contact",
];

export default function OverlayMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-xl"
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:text-cyan-400 transition"
          >
            <X size={36} />
          </button>

          {/* Menu */}

          <div className="flex flex-col justify-center items-center h-full">

            {navLinks.map((item, index) => (

              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.08,
                  x: 12,
                }}
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-white
                  py-4
                  transition
                  hover:text-cyan-400
                  hover:drop-shadow-[0_0_20px_#00FFC8]
                "
              >
                {item}
              </motion.a>

            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-gray-400 tracking-widest"
            >
              © 2026 Anshul Upadhyay
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}