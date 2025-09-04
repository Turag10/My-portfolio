import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-gray-900/95 to-black/80 backdrop-blur-md z-50 border-b border-gray-700/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1 
            className="text-2xl font-bold text-lime-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            MyPortfolio
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" isActive={isActive}>
              Home
            </NavLink>
            <NavLink to="/projects" isActive={isActive}>
              Projects
            </NavLink>
            <NavLink to="/contact" isActive={isActive}>
              Contact
            </NavLink>
            <NavLink to="/resume" isActive={isActive} isResume>
              Resume
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lime-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-6">
                <MobileNavLink to="/" isActive={isActive} onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/projects" isActive={isActive} onClick={() => setIsMenuOpen(false)}>
                  Projects
                </MobileNavLink>
                <MobileNavLink to="/contact" isActive={isActive} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </MobileNavLink>
                <MobileNavLink to="/resume" isActive={isActive} isResume onClick={() => setIsMenuOpen(false)}>
                  Resume
                </MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, children, isActive, isResume = false }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
    className="relative"
  >
    <Link
      to={to}
      className={`relative px-3 py-2 transition-all duration-300 ${
        isActive(to) 
          ? "text-lime-400 font-semibold" 
          : "text-amber-50 hover:text-lime-300"
      } ${isResume ? "hover:text-green-400" : ""}`}
    >
      {children}
      {isActive(to) && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  </motion.div>
);

// Mobile NavLink Component
const MobileNavLink = ({ to, children, isActive, onClick, isResume = false }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-3 rounded-lg transition-all duration-300 ${
      isActive(to)
        ? "bg-lime-400/10 text-lime-400 font-semibold border-l-4 border-lime-400"
        : "text-amber-50 hover:bg-gray-700/50"
    } ${isResume ? "hover:text-green-400" : ""}`}
  >
    {children}
  </Link>
);

export default Navbar;