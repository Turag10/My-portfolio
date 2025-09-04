// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/projects/projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Contact from "./components/Contact/Contact";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import { useState, useEffect } from "react";
import LineLoader from "./components/LineLoader/LineLoader";
import PageTransition from "./components/PageTransition/PageTransition";
import Resume from "./components/Resume/Resume";


// Simple wrapper so page background stays consistent
function PageWrapper({ children }) {
  return <motion.div className="min-h-screen bg-gray-700">{children}</motion.div>;
}

// Small opacity overlay for route change cinematic effect
function OpacityCover() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black z-[9998]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  );
}

function AnimatedRoutes({ firstLoad, setFirstLoad }) {
  const location = useLocation();
  const [stage, setStage] = useState(firstLoad ? "first-line" : "done");

  // ✅ First load → LineLoader → PageTransition (cover+reveal) → Done
  useEffect(() => {
    if (firstLoad) {
      setStage("first-line");
      const timers = [
        setTimeout(() => setStage("first-slices"), 2500), // PageTransition
        setTimeout(() => {
          setStage("done");
          setFirstLoad(false);
        }, 8000), // after reveal ends
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [firstLoad, setFirstLoad]);

  // ✅ Route change → LineLoader → OpacityCover → LineLoader → PageTransition (reveal) → Done
  useEffect(() => {
    if (!firstLoad) {
      setStage("line");
      const timers = [
        setTimeout(() => setStage("cover"), 2500),    // OpacityCover
        setTimeout(() => setStage("line-2"), 4000),   // LineLoader again
        setTimeout(() => setStage("reveal"), 6500),   // PageTransition reveal
        setTimeout(() => setStage("done"), 10500),    // show page
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {/* 🔥 First load */}
      {stage === "first-line" && <LineLoader key="line-loader-first" />}
      {stage === "first-slices" && <PageTransition key="slices-first" mode="full" />}

      {/* 🔥 Route change cinematic */}
      {stage === "line" && <LineLoader key="line-loader" />}
      {stage === "cover" && <OpacityCover key="opacity-cover" />}
    
      {stage === "reveal" && <PageTransition key="slices-reveal" mode="reveal" />}

      {/* 🔥 Done → Render actual page */}
      {stage === "done" && (
        <Routes location={location} key={location.pathname}>
  <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
  <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
  <Route path="/projects/:id" element={<PageWrapper><ProjectDetails /></PageWrapper>} />
  <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
  <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />

  
</Routes>

      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [firstLoad, setFirstLoad] = useState(true);

  return (
    <Router>
      <Navbar />
      <AnimatedBackground />
      <AnimatedRoutes firstLoad={firstLoad} setFirstLoad={setFirstLoad} />
    </Router>
  );
}
