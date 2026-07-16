import { Menu } from "lucide-react";
import { useState } from "react";
import OverlayMenu from "./OverlayMenu";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Contact",
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <nav
          className="
          flex items-center justify-between
          px-8 py-4
          rounded-full
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_30px_rgba(0,255,180,.15)]
        "
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-3xl font-black text-[#00FFC8]">/</span>

            <div>
              <h1 className="text-xl font-bold text-white">ANSHUL</h1>
              <p className="text-xs text-gray-400 tracking-[2px]">
                ENGINEER • TRADER • ACTOR • VOICE ARTIST
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  relative
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:w-0
                  after:h-[2px]
                  after:bg-[#00FFC8]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <a
              href="#contact"
              className="
              hidden md:flex
              px-6 py-3
              rounded-full
              font-semibold
              text-black
              bg-gradient-to-r
              from-[#00FFC8]
              to-[#00A6FF]
              shadow-[0_0_20px_rgba(0,255,180,.45)]
              hover:scale-105
              transition
              duration-300
              "
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu size={30} />
            </button>

          </div>
        </nav>
      </header>

      {/* Overlay Menu */}

      <OverlayMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;