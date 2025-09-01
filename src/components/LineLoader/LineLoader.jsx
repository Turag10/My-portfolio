import { motion } from "framer-motion";

const LineLoader = () => {
  return (
    <motion.div
      className="fixed top-16 left-1/2 -translate-x-1/2 w-[2px] h-full bg-black z-50"
      initial={{ scaleY: 0, originY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, originY: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
};

export default LineLoader;
