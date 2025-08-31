import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Hi, I'm Abdullah AL Fahad 👋
      </motion.h2>

      <motion.p
        className="text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        A passionate <span className="text-blue-600">React Developer</span>{" "}
        who builds modern, responsive, and interactive web applications.
      </motion.p>

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Download Resume
      </motion.a>
    </motion.section>
  );
};

export default Hero;
