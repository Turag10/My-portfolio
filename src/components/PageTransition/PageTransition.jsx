// src/components/Transition/PageTransition.jsx
import { motion } from "framer-motion";

export default function PageTransition() {
  const numSlices = 5; // total vertical slices

  // Order in which slices animate (center → outward)
  const order = [3, 4, 2, 5, 1, 6, 0, 7];

  // Direction pattern (center top→down, alternate)
  const directions = ["down", "up", "down", "up", "down", "up", "down", "up"];

  const sliceVariants = {
    initial: (i) => ({
      y: directions[i] === "down" ? "-100%" : "100%",
    }),
    animate: (i) => ({
      y: "0%",
      transition: {
        delay: order.indexOf(i) * 0.25, // ⏳ slower stagger
        duration: 3, // ⏳ slower movement
        ease: [0.76, 0, 0.24, 1], // smoother cubic easing
      },
    }),
    exit: (i) => ({
      y: directions[i] === "down" ? "100%" : "-100%",
      transition: {
        delay: order.indexOf(i) * 0.2, // ⏳ stagger on exit too
        duration: 3,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] flex">
      {Array.from({ length: numSlices }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-cyan-500"
          custom={i}
          variants={sliceVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      ))}
    </div>
  );
}
