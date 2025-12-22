import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HoverSwipeItem = ({ to, children }) => (
  <motion.div whileHover={{ x: 8 }} transition={{ type: "tween", duration: 0.2 }}>
    <Link to={to} className="block px-4 py-2">
      {children}
    </Link>
  </motion.div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-xl" : "bg-white/10 backdrop-blur-lg"
      } border-b border-white/20`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

   
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="text-2xl font-semibold text-white">
          <img src="logo.png" alt="Biometric EVM Logo" className="inline-block mr-2 w-8 h-8" />
            Biometric EVM
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">

     
          <motion.div whileHover={{ y: -2 }}>

            
            <Link to="/" className="hover:text-blue-300 duration-200">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>

            
            <Link to="/project-overview" className="hover:text-blue-300 duration-200">
              Project Overview
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <Link to="/features" className="hover:text-blue-300 duration-200">
              Features
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <Link to="/architecture" className="hover:text-blue-300 duration-200">
              Architecture
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <Link to="/team" className="hover:text-blue-300 duration-200">
              Team
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <Link to="/gallery" className="hover:text-blue-300 duration-200">
              Gallery
            </Link>
          </motion.div>

     
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <div className="flex items-center select-none">
              <span className="mr-1">Solutions</span>
              <ChevronDown size={18} />
            </div>

            <AnimatePresence>
              {drop && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 bg-black/80 text-white rounded-xl p-3 backdrop-blur-2xl shadow-xl space-y-2"
                >
                  <HoverSwipeItem to="/why-choose">Why Choose Us</HoverSwipeItem>
                  <HoverSwipeItem to="/how-it-works">How It Works</HoverSwipeItem>
                  <HoverSwipeItem to="/recognition">Recognition</HoverSwipeItem>
                  <HoverSwipeItem to="/testimonials">Testimonials</HoverSwipeItem>
                  <HoverSwipeItem to="/future-development">Future Development</HoverSwipeItem>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-xl text-white px-6 py-6 space-y-4 rounded-b-2xl"
          >
            <Link to="/" className="block">Home</Link>
            <Link to="/project-overview" className="block">Project Overview</Link>
            <Link to="/features" className="block">Features</Link>
            <Link to="/architecture" className="block">Architecture</Link>
            <Link to="/team" className="block">Team</Link>
            <Link to="/contact" className="block">Contact</Link>

      
            <div>
              <div
                onClick={() => setDrop(!drop)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown size={20} />
              </div>

              {drop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4 mt-2 space-y-2 text-gray-300"
                >
                  <Link to="/why-choose" className="block">Why Choose Us</Link>
                  <Link to="/how-it-works" className="block">How It Works</Link>
                  <Link to="/recognition" className="block">Recognition</Link>
                  <Link to="/testimonials" className="block">Testimonials</Link>
                  <Link to="/future-development" className="block">Future Development</Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
