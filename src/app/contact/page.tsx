"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [randomValues, setRandomValues] = useState<Array<{
    width: number;
    height: number;
    x: number;
    y: number;
    color: string;
  }>>([]);

  // Generate random values after component mounts
  useEffect(() => {
    const values = [...Array(3)].map(() => ({
      width: Math.random() * 500 + 300,
      height: Math.random() * 500 + 300,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      color: `rgba(${
        Math.random() * 79 + 176
      }, ${
        Math.random() * 51 + 51
      }, ${
        Math.random() * 233 + 22
      }, 0.1)`
    }));
    setRandomValues(values);
  }, []);

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section id="contact" className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {randomValues.map((value, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay filter blur-3xl"
            style={{
              width: value.width,
              height: value.height,
              backgroundImage: `radial-gradient(circle, ${value.color} 0%, transparent 70%)`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center"
            }}
            animate={{
              x: [0, value.x],
              y: [0, value.y],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
          initial={{
            top: `${i * 10}%`,
            left: `${i * 10}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 2 + (i * 0.2),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with top animation */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            Ready to transform your business with AI?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Contact Info with left side animation */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              delay: 0.2
            }}
            className="space-y-8 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Add animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-[0.15]"
              style={{
                backgroundImage: "linear-gradient(90deg, #4f46e5, #9333ea, #ec4899, #4f46e5)",
                backgroundSize: "400% 100%",
                backgroundPosition: "0% 0%"
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Content remains the same but add stagger effect to children */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
              className="relative space-y-8"
            >
              {/* Add variants to each section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                {/* Contact Information Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
                  <motion.div className="space-y-6">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>contact@agentiaworld.com</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span>www.agentiaworld.com</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Silicon Valley, CA, United States</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Why Choose Us Section - Made more compact */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <h2 className="text-2xl font-semibold text-white">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-medium">24/7 Support</h3>
                    </div>
                    <p className="text-gray-400 text-sm">Always here when you need us</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-medium">Security First</h3>
                    </div>
                    <p className="text-gray-400 text-sm">Enterprise-grade protection</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links - Made more compact */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <h2 className="text-2xl font-semibold text-white">Connect With Us</h2>
                <div className="flex space-x-4">
                  {/* Twitter */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://twitter.com/agentiaworld"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/company/agentiaworld"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/agentiaworld"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* Trust Badges - Made more compact */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-900/50 rounded-full border border-indigo-800/30 text-sm text-gray-300 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ISO 27001</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-900/50 rounded-full border border-indigo-800/30 text-sm text-gray-300 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>GDPR</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form with right side animation */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              delay: 0.2
            }}
            className="p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Add animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-[0.15]"
              style={{
                backgroundImage: "linear-gradient(90deg, #4f46e5, #9333ea, #ec4899, #4f46e5)",
                backgroundSize: "400% 100%",
                backgroundPosition: "0% 0%"
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Form content with bottom-up animations for fields */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 h-full flex flex-col relative"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {/* Update each form field with bottom-up animation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* First Name */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <label className="block text-gray-300 mb-2 text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    value={formState.firstName}
                    onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                {/* Last Name */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    value={formState.lastName}
                    onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>
              </motion.div>

              {/* Email Address */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Message field with flex-grow */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="flex-grow"
              >
                <label className="block text-gray-300 mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full h-[calc(100%-2rem)] min-h-[150px] px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
