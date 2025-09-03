// src/components/PageTransition/PageTransition.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ mode = "full", onComplete }) {
  const numSlices = 8;
  const order = [3, 4, 2, 5, 1, 6, 0, 7];
  const directions = ["down", "up", "down", "up", "down", "up", "down", "up"];

  const [phase, setPhase] = useState(mode === "reveal" ? "reveal" : "cover");

  useEffect(() => {
    if (mode === "full") {
      const timers = [
        setTimeout(() => setPhase("reveal"), 2500), // hold before reveal
        setTimeout(() => onComplete && onComplete(), 6000),
      ];
      return () => timers.forEach(clearTimeout);
    }
    if (mode === "reveal") {
      const t = setTimeout(() => onComplete && onComplete(), 5000);
      return () => clearTimeout(t);
    }
  }, [mode, onComplete]);

  const sliceVariants = {
    cover: (i) => ({
      y: "0%",
      transition: {
        delay: order.indexOf(i) * 0.35,
        duration: 2.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    reveal: (i) => ({
      y: directions[i] === "down" ? "100%" : "-100%",
      transition: {
        delay: order.indexOf(i) * 0.4,
        duration: 3.5, // ⏳ slower cinematic retract
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] flex bg-black">
      {Array.from({ length: numSlices }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-gray-900"
          custom={i}
          initial={{ y: directions[i] === "down" ? "-100%" : "100%" }}
          animate={phase}
          variants={sliceVariants}
        />
      ))}
    </div>
  );
}
