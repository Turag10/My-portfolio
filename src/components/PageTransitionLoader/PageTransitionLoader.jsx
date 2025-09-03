import { motion } from "framer-motion";

const PageTransitionLoader = () => {
  const slices = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 z-50 flex">
      {slices.map((_, i) => {
        const isMiddle = i === 3 || i === 4; 
        const direction = isMiddle ? "down" : i < 3 ? "up" : "down";

        return (
          <motion.div
            key={i}
            className="flex-1 bg-blue-600"
            initial={{ y: direction === "down" ? "-100%" : "100%" }}
            animate={{ y: 0 }}
            exit={{ y: direction === "down" ? "-100%" : "100%" }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default PageTransitionLoader;
