import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="px-8 py-16 text-center bg-white shadow-inner"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <motion.p 
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        📧 Email:{" "}
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:underline"
        >
          your.email@example.com
        </a>
      </motion.p>
      <motion.p 
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        🔗 Connect on{" "}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </motion.p>
    </motion.section>
  );
};

export default Contact;