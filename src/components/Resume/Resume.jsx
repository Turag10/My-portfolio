import { motion } from "framer-motion";
import { useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaCode, FaPenFancy, FaBullhorn, FaGamepad, FaCheck } from "react-icons/fa";

// Manually created icon components for the Interests section
const FootballIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-16 h-16 text-green-400"
    fill="currentColor"
  >
    <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM192 124c-20 4.1-39.7 12.3-58 24.3l83.6 83.6c-24.8 19.8-43.7 44.5-56.9 72.3-2.6-1.5-5.2-3.1-7.8-4.8L28.1 369.8c-1.3 2.5-2.6 5-3.8 7.5l-.2-.5c-20-41.2-30.1-85-30.1-129.5 0-11.4 1-22.6 2.8-33.6L129.5 28.1c-11.2-2.7-22.7-4.1-34.4-4.1-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248z" />
  </svg>
);

const CampingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-16 h-16 text-green-400"
    fill="currentColor"
  >
    <path d="M490.3 400.9L262.1 26.6C258.9 19.3 252.3 16 248 16c-4.3 0-10.9 3.3-14.1 10.6L21.7 400.9C18.5 408.2 21.6 416 30 416h452c8.4 0 11.5-7.8 8.3-15.1zM248 349.5l-133.5-167.3L248 83.6l133.5 167.3-133.5 98.6z" />
  </svg>
);

const ChessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-16 h-16 text-green-400"
    fill="currentColor"
  >
    <path d="M128 0C110.3 0 96 14.3 96 32c0 12.9 7.4 24.6 19.1 30C100.4 79.7 64 118.9 64 167.1V314.7c0 53.4-14.2 104.5-40 148.8c-7.3 12.3-6 27.5 3 38.3s23.7 15.6 37.1 12.4l41.5-10.4c17.1-4.3 32.9-12.7 47.1-25.1L128 416l25.1 21.4c14.2 12.4 30.1 20.7 47.1 25.1l41.5 10.4c13.4 3.3 28.1-1.6 37.1-12.4s10.3-26 3-38.3c-25.8-44.3-40-95.4-40-148.8V167.1c0-48.2-36.4-87.4-71.1-105.1C344.6 56.6 352 44.9 352 32c0-17.7-14.3-32-32-32H128zM96 320V167.1c0-10.4 4.1-20.3 11.4-27.6l19.2-19.2c2.4-2.4 5.4-3.8 8.7-4.1C136.5 115.1 143.2 112 152 112h20c8.8 0 15.5 3.1 22.7 8.3c3.3 .3 6.3 1.7 8.7 4.1l19.2 19.2c7.3 7.3 11.4 17.2 11.4 27.6V320H96z" />
  </svg>
);

const BodyBuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="w-16 h-16 text-green-400"
    fill="currentColor"
  >
    <path d="M96 64C43 64 0 107 0 160V352c0 53 43 96 96 96H288V416H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h192V64H96zm384 0v64h96c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H352v32H544c53 0 96-43 96-96V160c0-53-43-96-96-96H480zM288 192v32h64V192H288zm96 0v32h64V192H384zM320 0c-17.7 0-32 14.3-32 32V128c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32z" />
  </svg>
);

const Resume = () => {
  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Design skills data with percentages
  const designSkills = [
    { name: "Web Design", percentage: 80 },
    { name: "Web Hosting", percentage: 60 },
    { name: "Photoshop", percentage: 75 },
    { name: "Graphic Design", percentage: 40 }
  ];

  
  const languageSkills = [
    { name: "English", level: 8 },
    { name: "Hindi", level: 7 },
    { name: "Urdu", level: 5 },
    { name: "Bangla", level: 9 }
  ];

  // Coding skills data with percentages
  const codingSkills = [
    { name: "React/next", percentage: 95 },
    { name: " MYSQL", percentage: 75 },
    { name: "JavaScript", percentage: 90 },
    { name: "HTML / CSS", percentage: 90 }
  ];

  // Knowledge skills data with checkmarks
  const knowledgeSkills = [
    "Website hosting",
    "Create logo design",
    "Modern and mobile-ready",
    "Graphics and animations",
    "iOS and android apps",
    "Design for print",
    "Advertising services include",
    "Search engine marketing"
  ];

  // Interests data with custom icons
  const interests = [
    { name: "Football", icon: <FootballIcon /> },
    { name: "Camping", icon: <CampingIcon /> },
    { name: "Chess", icon: <ChessIcon /> },
    { name: "Body Building", icon: <BodyBuildingIcon /> }
  ];

  const renderDots = (level) => {
    const totalDots = 10;
    const filledDots = level;
    const emptyDots = totalDots - filledDots;

    return (
      <div className="flex space-x-2">
        {[...Array(filledDots)].map((_, i) => (
          <div key={`filled-${i}`} className="w-4 h-4 rounded-full bg-green-400"></div>
        ))}
        {[...Array(emptyDots)].map((_, i) => (
          <div key={`empty-${i}`} className="w-4 h-4 rounded-full bg-gray-600"></div>
        ))}
      </div>
    );
  };

  // Circular progress bar component for Coding Skills
  const CircularProgressBar = ({ percentage, skillName }) => {
    const circumference = 2 * Math.PI * 50; // 2 * PI * R
    const progress = circumference - (percentage / 100) * circumference;

    return (
      <motion.div
        className="relative w-32 h-32 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="64"
            cy="64"
          />
          <motion.circle
            className="text-green-400"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="64"
            cy="64"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: progress,
            }}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: progress }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-white text-lg font-bold">{percentage}%</span>
          <span className="text-gray-400 text-sm mt-1 text-center">{skillName}</span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/bodey.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Top Left Name */}
        <div className="absolute top-6 left-8 z-10">
          <h2 className="text-lg md:text-xl font-semibold text-white">
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
          Resume
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
          <a href="https://www.facebook.com/share/178u1z4QBv/" target="_blank" rel="noreferrer">
            <FaFacebook className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/aatish-aj-0a452a358/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://github.com/Turag10" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
        </div>
      </section>

      {/* Resume Content Section */}
      <section
        ref={detailsRef}
        className="relative bg-gray-900 text-white px-8 py-16"
      >
        <div className="container mx-auto">
          {/* Main Name Section */}
          <div className="absolute top-8 left-8">
            <h2 className="text-xl font-bold text-white">
              Abdullah Al Fahad
            </h2>
          </div>

          {/* Profile Section */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-900 p-8 mb-16">
            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                src="/src/assets/my-resume-pic.png" 
                alt="Profile"
                className="w-48 h-48 object-cover rounded-md"
              />
            </div>

            {/* Resume Details */}
            <div>
              <p className="mb-6 text-gray-300">
                Hello! I'm <span className="font-bold text-white">Abdullah Al Fahad</span>.
                Web developer from Bangladesh. I have rich experience in web
                design and building, and I love to talk with you about your
                projects.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm md:text-base mb-6">
                <p>
                  <span className="text-green-400">Age:</span> 24
                </p>
                <p>
                  <span className="text-green-400">Residence:</span> Bangladesh
                </p>
                <p>
                  <span className="text-green-400">Freelance:</span> Available
                </p>
                <p>
                  <span className="text-green-400">Address:</span> Dhaka
                </p>
                <p>
                  <span className="text-green-400">Phone:</span> +880 1763716692
                </p>
                <p>
                  <span className="text-green-400">E-mail:</span>{" "}
                  taslima2092965@gmail.com
                </p>
              </div>

              {/* Download CV Button */}
              <div className="mt-6">
                <a
                  href="/Abdullah-AL-Fahad CV - Google Docs.pdf" // replace with your CV link
                  download
                  className="px-6 py-3 border-2 border-green-400 text-green-400 font-bold rounded hover:bg-green-400 hover:text-gray-900 transition"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              My Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Web Development */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center">
                    <FaCode className="text-2xl text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Web Development</h3>
                <p className="text-gray-300 text-sm">
                  Modern and mobile-ready website that will help you reach all of your marketing.
                </p>
              </motion.div>

              {/* Story Writing */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center">
                    <FaPenFancy className="text-2xl text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Story Writing</h3>
                <p className="text-gray-300 text-sm">
                  Creative storytelling and content writing services for various media formats.
                </p>
              </motion.div>

              {/* Advertising */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <FaBullhorn className="text-2xl text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Advertising</h3>
                <p className="text-gray-300 text-sm">
                  Strategic advertising campaigns to boost your brand visibility and engagement.
                </p>
              </motion.div>

              {/* Game Development */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center">
                    <FaGamepad className="text-2xl text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Game Development</h3>
                <p className="text-gray-300 text-sm">
                  Interactive game development with engaging gameplay and stunning visuals.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Design Skills Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Design Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-8">
              {designSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="mb-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-green-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Skills Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Languages Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-8">
              {languageSkills.map((language, index) => (
                <motion.div
                  key={language.name}
                  className="flex flex-col items-center sm:items-start mb-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-white text-lg font-bold mb-2 uppercase">{language.name}</span>
                  {renderDots(language.level)}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Skills Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Coding Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-900 p-8">
              {codingSkills.map((skill, index) => (
                <CircularProgressBar
                  key={index}
                  percentage={skill.percentage}
                  skillName={skill.name}
                />
              ))}
            </div>
          </div>

          {/* Knowledge Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Knowledge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-8">
              {knowledgeSkills.map((knowledge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaCheck className="text-green-400 mr-4" />
                  <span>{knowledge}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Interests
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-900 p-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center text-3xl text-green-400 mb-2">
                    {interest.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{interest.name}</h3>
                  <p className="text-gray-400 text-sm text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;