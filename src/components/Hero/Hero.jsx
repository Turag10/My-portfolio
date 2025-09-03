// src/components/Hero/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilePic from "../../assets/your-photo.jpg"; // Replace with your photo

const sentences = [
  "I code cool websites",
  "I build modern web applications",
  "I design responsive interfaces"
];

export default function Hero() {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect with deleting
  useEffect(() => {
    const current = sentences[currentSentence];
    
    if (!isDeleting && index < current.length) {
      // Typing mode
      const timeout = setTimeout(() => {
        setDisplayText(current.substring(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === current.length) {
      // Pause at the end of sentence
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      // Deleting mode
      const timeout = setTimeout(() => {
        setDisplayText(current.substring(0, index - 1));
        setIndex(index - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      // Move to next sentence
      setIsDeleting(false);
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }
  }, [index, currentSentence, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-8 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Profile Picture and Main Heading */}
        <div className="flex flex-col items-center md:items-start md:w-2/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={profilePic}
              alt="Abdullah AL Fahad"
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-600 shadow-2xl"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center md:text-left mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Abdullah AL Fahad
          </motion.h1>

          <motion.div 
            className="h-12 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
              {displayText}
              <span className="ml-1 animate-pulse">|</span>
            </h2>
          </motion.div>
        </div>

        {/* Right Side - Description and Contact Info */}
        <motion.div 
          className="md:w-3/5 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Hello, I'm Abdullah AL Fahad</h3>
            <p className="text-gray-300 text-lg mb-6">
              UX/UI Designer and Front-end Developer based in Bangladesh. 
              I specialize in creating modern, responsive, and interactive web applications.
            </p>
            
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">E:</span> 
                <a href="mailto:abdullah@example.com" className="hover:text-blue-300 transition-colors">
                  abdullah@example.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">T:</span> 
                <a href="tel:+1234567890" className="hover:text-blue-300 transition-colors">
                  +1 (234) 567 890
                </a>
              </p>
            </div>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            
            <motion.a
              href="#projects"
              className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}