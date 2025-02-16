"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const container: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 }
  };

  // Update the menu items array (remove Home, add Contact)
  const menuItems = [
    { name: 'Features', id: 'features', path: '/features', gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Technology', id: 'technology', path: '/technology', gradient: 'from-indigo-400 to-blue-400' },
    { name: 'Agents', id: 'agents', path: '/agents', gradient: 'from-emerald-400 to-green-400' },
    { name: 'Pricing', id: 'pricing', path: '/pricing', gradient: 'from-pink-400 to-rose-400' },
    { name: 'Contact', id: 'contact', path: '/contact', gradient: 'from-purple-400 to-pink-400' }
  ];

  // Update the MenuButton component
  const MenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
    return (
      <motion.button
        onClick={onClick}
        className="relative p-2.5 rounded-xl text-gray-400 hover:text-white focus:outline-none group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-7 h-7 flex flex-col justify-center items-center relative">
          {/* Lines Container */}
          <div className="w-6 flex flex-col gap-1.5 items-center">
            {/* Top line */}
            <motion.span
              className="h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              animate={{
                width: isOpen ? "24px" : "16px",
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            {/* Middle line */}
            <motion.span
              className="h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
              animate={{
                width: "24px",
                x: isOpen ? 20 : 0,
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            {/* Bottom line */}
            <motion.span
              className="h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-purple-500"
              animate={{
                width: isOpen ? "24px" : "20px",
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          </div>

          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              background: isOpen 
                ? "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.05) 100%)"
                : "radial-gradient(circle, rgba(139,92,246,0.05) 0%, rgba(59,130,246,0.025) 100%)"
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.button>
    );
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="show"
      variants={container}
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with Enhanced Gradient */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    className="h-8 w-8 text-purple-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                    />
                  </svg>
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500">
                  Agentia World
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Menu Items with Gradient Hover */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ name, path, gradient }, index) => (
              <motion.div
                key={name}
                variants={itemVariants}
                custom={index}
              >
                <Link href={path}>
                  <span className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text cursor-pointer transition-all duration-300 group text-sm font-medium">
                    <span className={`bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 absolute inset-0 bg-clip-text transition-opacity duration-300`}>
                      {name}
                    </span>
                    <span className="group-hover:opacity-0 transition-opacity duration-300">
                      {name}
                    </span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-300`}></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Get Started Button */}
          <motion.div variants={itemVariants} className="hidden md:flex items-center">
            <Link href="/get-started">
              <button className="relative overflow-hidden px-6 py-2.5 rounded-lg group">
                <span className="absolute inset-0 w-full h-full transition duration-500 transform -translate-x-full bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 group-hover:translate-x-0"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-500"></span>
                <span className="relative text-white flex items-center text-sm font-medium tracking-wide">
                  Get Started
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.div variants={itemVariants} className="flex md:hidden">
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.2 },
              height: { duration: 0.3 }
            }}
            className="md:hidden bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-xl rounded-b-2xl border border-gray-800/50 overflow-hidden"
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {menuItems.map(({ name, path, gradient }) => (
                <motion.div
                  key={name}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 }
                      }
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 }
                      }
                    }
                  }}
                >
                  <Link href={path}>
                    <span className={`block text-gray-300 hover:text-transparent hover:bg-gradient-to-r ${gradient} hover:bg-clip-text px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium`}>
                      {name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}