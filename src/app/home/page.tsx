"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const messages = [
  "Hello! I'm your AI agent. How can I enhance your business today?",
  "I can help optimize your workflows with neural networks.",
  "Let me assist you with advanced data analytics.",
  "Would you like to explore our AI integration solutions?",
  "Intelligent. Adaptive. Limitless. Transform Your Business with AI-Powered Innovation."
];

export default function Home() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (currentIndex < messages[currentMessageIndex].length) {
        currentText += messages[currentMessageIndex][currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
        timeout = setTimeout(typeWriter, 50); // Typing speed
      } else {
        // Wait before starting next message
        timeout = setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          currentIndex = 0;
          currentText = '';
        }, 2000); // Pause between messages
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, [currentMessageIndex]);

  return (
    <section id="home" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        {/* Centered Panaversity with Animated Bullets */}
        <motion.div className="w-full flex justify-center mb-12">
          <motion.div className="flex items-center space-x-3">
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-2 w-2 rounded-full bg-purple-500"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 font-semibold tracking-wider"
            >
              POWERED BY PANAVERSITY
            </motion.p>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="h-2 w-2 rounded-full bg-blue-500"
            />
          </motion.div>
        </motion.div>

        {/* Then start your flex columns */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            {/* Animated Main Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-center lg:text-left"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent bg-[size:200%]"
              >
                Enterprise AI Agents for the Future
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-400 max-w-2xl text-center lg:text-left"
            >
              Intelligent. Adaptive. Limitless. Transform Your Business with AI-Powered Innovation.
            </motion.p>

            {/* AI Assistant Message Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full max-w-2xl mx-auto mb-8"
            >
              <div className="flex items-start space-x-4">
                {/* AI Icon */}
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
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-2 backdrop-blur-sm border border-purple-500/20"
                >
                  <svg 
                    className="w-full h-full text-purple-400" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </motion.div>

                {/* Message Box */}
                <div className="flex-1 relative">
                  <div className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-gray-400"
                    >
                      <span>
                        {displayedText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="inline-block w-0.5 h-4 bg-gray-400 ml-1"
                        />
                      </span>
                    </motion.div>
                  </div>
                  {/* Message box arrow */}
                  <div className="absolute -left-2 top-4 w-4 h-4 transform rotate-45 bg-gray-900/50 border-l border-t border-gray-700" />
                </div>
              </div>
            </motion.div>

            {/* Buttons with more spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
            >
              <Link href="/get-started">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                  Get Started
                </button>
              </Link>
              <Link href="/demo">
                <button className="px-8 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - AI Robot Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative"
              >
                <svg 
                  className="w-full h-full text-purple-400" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
