
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* First Section - Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/jungle picc.jpg')", // <-- replace with your asset
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Top Left Name */}
        <div className="absolute top-6 left-8 z-10">
          <h2 className="text-lg md:text-xl font-semibold text-black/70">
            Abdullah Al Fahad
          </h2>
        </div>

        {/* Center Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl sm:text-6xl md:text-7xl font-bold z-10"
        >
          Contact
        </motion.h1>

        {/* Bottom Left Info */}
        <div className="absolute bottom-8 left-8 text-white/80 text-sm md:text-base z-10">
          <p>Email: taslima2092965@gmail.com</p>
          <p>Phone: +880 1763716692</p>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          onClick={scrollToDetails}
          className="absolute bottom-8 cursor-pointer z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white hover:bg-white/20 transition"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-2xl">↓</span>
        </motion.div>

        {/* Follow Me Vertical Bar */}
        <div className="hidden md:flex flex-col items-center gap-6 absolute top-1/2 right-6 -translate-y-1/2 text-gray-300 z-10">
          <div className="rotate-90 tracking-widest text-sm border-t border-gray-500 pt-2">
            Follow Me
          </div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
        </div>
      </section>

      {/* Second Section - Details & Form */}
      <section
        ref={detailsRef}
        className="relative min-h-screen bg-gray-900 text-white px-8 py-16"
      >
        <div className="container mx-auto">
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <FaPhone className="text-green-400 text-3xl mb-2" />
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-300">+880 1763716692</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <FaEnvelope className="text-green-400 text-3xl mb-2" />
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-300">taslima2092965@gmail.com</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-green-400 text-3xl mb-2" />
              <h3 className="text-xl font-bold">Address</h3>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
              <FaUserTie className="text-green-400 text-3xl mb-2" />
              <h3 className="text-xl font-bold">Freelance Available</h3>
              <p className="text-gray-300">Yes</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Send me a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Follow Me Vertical Bar (mobile version bottom) */}
        <div className="flex md:hidden justify-center gap-6 mt-8 text-gray-300">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
