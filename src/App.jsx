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

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const [loadingStage, setLoadingStage] = useState("line"); 
  // "line" → LineLoader → "transition" → PageTransition → "done" → show content

  useEffect(() => {
    setLoadingStage("line");

    const timers = [
      setTimeout(() => setLoadingStage("transition"), 1000),  // LineLoader 1s
      setTimeout(() => setLoadingStage("done"), 2200),        // PageTransition another 1.2s
    ];

    return () => timers.forEach(clearTimeout);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {loadingStage === "line" && <LineLoader key="line-loader" />}
      {loadingStage === "transition" && <PageTransition key="page-transition" />}
      {loadingStage === "done" && (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/projects/:id" element={<PageWrapper><ProjectDetails /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedBackground />
      <AnimatedRoutes />
    </Router>
  );
}
