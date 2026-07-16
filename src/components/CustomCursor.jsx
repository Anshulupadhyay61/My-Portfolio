import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
        transition: "transform 0.05s linear",
      }}
    >
      <div
        className="w-20 h-20 rounded-full
                   bg-gradient-to-r
                   from-[#00ffcc]
                   via-[#00c6ff]
                   to-[#00ff99]
                   blur-3xl
                   opacity-70"
      />
    </div>
  );
}