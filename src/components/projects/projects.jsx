import { Link } from "react-router-dom";
import { ProjectData } from "../../data/ProjectData";
import engineImg from "../../assets/train engine.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Import train sound files
import trainWhistle from "../../assets/sounds/train-whistle.mp3";
import trainChugging from "../../assets/sounds/train-chugging.mp3";
import trainBrakes from "../../assets/sounds/train-brakes.mp3";

const Projects = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const whistleSound = useRef(null);
  const chuggingSound = useRef(null);
  const brakesSound = useRef(null);

  // 🚂 Initialize audio elements
  useEffect(() => {
    whistleSound.current = new Audio(trainWhistle);
    chuggingSound.current = new Audio(trainChugging);
    brakesSound.current = new Audio(trainBrakes);
    
    // Set loop for chugging sound
    chuggingSound.current.loop = true;
    
    // Play initial whistle when component mounts
    const playInitialWhistle = setTimeout(() => {
      if (whistleSound.current && !isMuted) {
        whistleSound.current.volume = 0.7;
        whistleSound.current.play().catch(e => console.log("Audio play failed:", e));
      }
    }, 1000);
    
    // Start chugging sound after whistle
    const startChugging = setTimeout(() => {
      if (chuggingSound.current && !isMuted) {
        chuggingSound.current.volume = 0.5;
        chuggingSound.current.play().catch(e => console.log("Audio play failed:", e));
      }
    }, 3000);
    
    // Clean up function to stop all sounds when component unmounts
    return () => {
      clearTimeout(playInitialWhistle);
      clearTimeout(startChugging);
      
      // Stop all sounds
      if (whistleSound.current) {
        whistleSound.current.pause();
        whistleSound.current.currentTime = 0;
      }
      if (chuggingSound.current) {
        chuggingSound.current.pause();
        chuggingSound.current.currentTime = 0;
      }
      if (brakesSound.current) {
        brakesSound.current.pause();
        brakesSound.current.currentTime = 0;
      }
    };
  }, [isMuted]);

  // 🌀 Smoke follows mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".smoke-puff").forEach((puff, i) => {
        puff.style.transform = `translate(${e.clientX * 0.01 * (i + 1)}px, ${e.clientY * -0.01 * (i + 1)}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle train container hover (play/pause sounds)
  const handleTrainHover = (isHovering) => {
    setIsHovering(isHovering);
    
    if (isHovering) {
      // Play brakes sound when hovering (train stopping)
      if (brakesSound.current && !isMuted) {
        brakesSound.current.volume = 0.6;
        brakesSound.current.play().catch(e => console.log("Audio play failed:", e));
      }
      
      // Pause chugging sound
      if (chuggingSound.current) {
        chuggingSound.current.pause();
      }
    } else {
      // Play whistle and resume chugging when mouse leaves
      if (whistleSound.current && !isMuted) {
        whistleSound.current.volume = 0.7;
        whistleSound.current.play().catch(e => console.log("Audio play failed:", e));
      }
      
      // Resume chugging after a short delay
      setTimeout(() => {
        if (chuggingSound.current && !isMuted) {
          chuggingSound.current.play().catch(e => console.log("Audio play failed:", e));
        }
      }, 1500);
    }
  };

  // Play click sound when a project is selected
  const handleProjectClick = () => {
    if (whistleSound.current && !isMuted) {
      whistleSound.current.volume = 0.5;
      whistleSound.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (isMuted) {
      // Unmute - restart sounds
      if (chuggingSound.current) {
        chuggingSound.current.volume = 0.5;
        chuggingSound.current.play().catch(e => console.log("Audio play failed:", e));
      }
    } else {
      // Mute - pause all sounds
      if (whistleSound.current) {
        whistleSound.current.pause();
      }
      if (chuggingSound.current) {
        chuggingSound.current.pause();
      }
      if (brakesSound.current) {
        brakesSound.current.pause();
      }
    }
  };

  return (
    <motion.section
      className="overflow-hidden bg-gray-900 py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <style>
        {`
          /* 🌌 Night sky with twinkling stars */
          section::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
            animation: twinkle 3s infinite alternate;
            opacity: 0.5;
            z-index: 0;
          }
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.8; }
          }

          @keyframes wheelSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes smoke {
            0% { transform: translateY(0) scale(0.5); opacity: 0.6; }
            50% { transform: translateY(-40px) scale(0.7); opacity: 0.3; }
            100% { transform: translateY(-80px) scale(1); opacity: 0; }
          }
          @keyframes smoke2 {
            0% { transform: translateY(0) scale(0.6); opacity: 0.5; }
            50% { transform: translateY(-50px) scale(0.8); opacity: 0.25; }
            100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
          }
          @keyframes spark {
            0% { transform: translateY(0) rotate(0deg) scale(0.2); opacity: 1; }
            50% { transform: translateY(-10px) rotate(45deg) scale(0.5); opacity: 0.6; }
            100% { transform: translateY(-20px) rotate(90deg) scale(0.8); opacity: 0; }
          }
          @keyframes bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }

          /* Train movement animation */
          @keyframes trainMove {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          
          /* ✨ Sparks with glow */
          .wheel::after {
            content: '';
            position: absolute;
            top: -6px;
            left: 50%;
            width: 8px;
            height: 8px;
            background: rgba(255, 200, 50, 1);
            box-shadow: 0 0 15px rgba(255, 200, 50, 1), 0 0 25px rgba(255, 120, 0, 0.8);
            border-radius: 50%;
            transform: translateX(-50%);
            animation: spark 1s infinite;
          }
          .wheel:nth-child(2)::after { animation-delay: 0.3s; }

          /* ⛔ Pause on hover */
          .train-container:hover .wheel,
          .train-container:hover .wheel::after,
          .train-container:hover .smoke-puff,
          .train-container:hover .animate-train {
            animation-play-state: paused;
          }

          /* 🌫 Glowing Smoke */
          .smoke-puff {
            position: absolute;
            top: -20px;
            left: 10px;
            width: 20px;
            height: 20px;
            background: rgba(200,200,255,0.6);
            border-radius: 50%;
            animation: smoke 2s linear infinite;
            box-shadow: 0 0 15px rgba(200,200,255,0.6);
          }
          .smoke-puff:nth-child(2) { animation: smoke2 2.5s linear infinite; left: 25px; width: 18px; height: 18px; opacity:0.5; box-shadow: 0 0 12px rgba(200,200,255,0.5);}
          .smoke-puff:nth-child(3) { animation: smoke 3s linear infinite; left: 40px; width: 22px; height: 22px; opacity:0.4; box-shadow: 0 0 18px rgba(200,200,255,0.4);}
          .smoke-puff:nth-child(4) { animation: smoke2 3.5s linear infinite; left: 55px; width: 16px; height: 16px; opacity:0.3; box-shadow: 0 0 10px rgba(200,200,255,0.3);}
        `}
      </style>

      <h2 className="text-3xl font-bold text-center mb-10 text-white relative z-10">🚂 My Projects</h2>

      <div 
        className="relative w-full overflow-hidden train-container z-10"
        onMouseEnter={() => handleTrainHover(true)}
        onMouseLeave={() => handleTrainHover(false)}
      >
        <motion.div
          className="flex items-start animate-train"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Engine */}
          <motion.div
            className="flex flex-col items-center mx-4 relative train-part"
            whileHover={{ scale: 1.05 }}
          >
            {/* Glowing Smoke */}
            <div className="smoke-puff"></div>
            <div className="smoke-puff"></div>
            <div className="smoke-puff"></div>
            <div className="smoke-puff"></div>

            <div className="min-w-[120px] sm:min-w-[150px] p-2 flex items-center justify-center">
              <img src={engineImg} alt="Train Engine" className="w-full h-auto filter drop-shadow-lg" />
            </div>

            <div className="flex space-x-4 sm:space-x-6 mt-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full wheel"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full wheel"></div>
            </div>
          </motion.div>

          {/* Compartments */}
          {ProjectData.map((p) => (
            <motion.div
              key={p.id}
              className="flex items-start train-part"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-4 h-2 sm:w-6 sm:h-2 bg-gray-600 mx-2 rounded mt-6 sm:mt-8"></div>

              <Link
                to={`/projects/${p.id}`}
                className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
                onClick={handleProjectClick}
              >
                <div className="min-w-[180px] sm:min-w-[250px] bg-gray-800 text-white rounded-xl shadow-lg p-4 sm:p-6 text-center cursor-pointer filter drop-shadow-lg">
                  <h3 className="text-lg sm:text-xl font-semibold">{p.name}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {p.description}
                  </p>
                </div>
                <div className="flex space-x-6 sm:space-x-8 mt-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full wheel"></div>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full wheel"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="h-1 sm:h-2 bg-gray-700 mt-6 rounded-full mx-4 sm:mx-6 z-10 relative"></div>
      
      {/* Sound controls UI */}
      <div className="absolute bottom-4 right-4 z-20">
        <button 
          className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center"
          onClick={toggleMute}
        >
          {isMuted ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              Unmute
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z" />
              </svg>
              Mute
            </>
          )}
        </button>
      </div>
    </motion.section>
  );
};

export default Projects;