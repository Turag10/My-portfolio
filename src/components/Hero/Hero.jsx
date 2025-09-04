// src/components/Hero/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilePic from "../../assets/my-pic.jpg"; // replace with your photo

const sentences = [
  "I code cool websites",
  "I build modern web app",
  "I design responsive interfaces",
];

export default function Hero() {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFullHeader, setShowFullHeader] = useState(false);

  // Typing + deleting loop
  useEffect(() => {
    const current = sentences[currentSentence];
    
    if (!isDeleting && index < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.substring(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === current.length) {
      setShowFullHeader(true);
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(current.substring(0, index - 1));
        setIndex(index - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setShowFullHeader(false);
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }
  }, [index, currentSentence, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Angled background overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/texture.png')] opacity-20" />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-tr from-gray-800/80 to-black/30"
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        
        {/* Left side: Pic + Contact + Animated Header */}
        <div className="flex flex-col items-start md:w-1/2 space-y-6">
          {/* Profile picture in parallelogram + Name */}
          <div className="flex items-center gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-44 h-52"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
              }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* semi-transparent border */}
              <div
                className="absolute inset-0 border-4 border-blue-500/70 pointer-events-none"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl font-bold text-white"
            >
              Abdullah AL Fahad
            </motion.h1>
          </div>

          {/* Contact info */}
          <motion.div 
            className="mb-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-sm md:text-base text-gray-300">
              <span className="text-green-400">E:</span>{" "}
              <a href="mailto:taslima2092965@gmail.com" className="hover:text-white transition-colors">
                taslima2092965@gmail.com
              </a>
            </p>
            <p className="text-sm md:text-base text-gray-300">
              <span className="text-green-400">T:</span>{" "}
              <a href="tel:01763716692" className="hover:text-white transition-colors">
                01763716692
              </a>
            </p>
          </motion.div>

          {/* Animated Header */}
          <motion.div 
            className="h-16 md:h-20 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              {showFullHeader ? (
                <>
                  <span className="text-white">
                    {sentences[currentSentence].split(" ").slice(0, -1).join(" ")}
                  </span>{" "}
                  <span className="text-green-400">
                    {sentences[currentSentence].split(" ").slice(-1)}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-white">
                    {displayText.split(" ").slice(0, -1).join(" ")}
                  </span>{" "}
                  <span className="text-green-400">
                    {displayText.split(" ").slice(-1)}
                  </span>
                </>
              )}
            </h3>
          </motion.div>
        </div>

        {/* Right side: Short description */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="md:w-1/2 text-lg md:text-xl text-gray-300"
        >
          <div className="text-right">
            <p>
              Hello, I'm{" "}
              <span className="text-green-400 font-semibold">
                Abdullah AL Fahad
              </span>
              , a passionate UX/UI Designer and Front-end Developer.
            </p>
            <p className="mt-4">
              I focus on creating modern, responsive, and interactive web
              applications.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Follow Me vertical bar at very right edge */}
      <div className="absolute top-0 right-0 h-full w-16 border-l border-gray-700 flex flex-col items-center justify-center space-y-6">
        <span className="text-xs uppercase tracking-widest text-gray-400 rotate-90">
          Follow Me On
        </span>
        <div className="flex flex-col space-y-6 text-lg text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><FaLinkedinIn /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-200 transition-colors"><FaGithub /></a>
        </div>
      </div>
    </section> 
  );
}
