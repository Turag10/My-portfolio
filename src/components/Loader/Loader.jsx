import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // 2.5 sec loader
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🚂 MyPortfolio
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
