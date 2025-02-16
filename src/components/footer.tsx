"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  // Combined animations for sections
  const sectionAnimations = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    whileHover: { y: -5 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Agentia World Section */}
          <motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-black/95 via-gray-900/95 to-purple-950/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-purple-800/30 hover:shadow-purple-900/30 hover:border-purple-700/40 hover:bg-gradient-to-br hover:from-black/98 hover:via-gray-900/98 hover:to-purple-950/60 transition-all duration-300"
            {...sectionAnimations(0.1)}
          >
            <Link href="/">
              <div className="inline-block group">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg 
                      className="h-8 w-8 text-purple-400 group-hover:scale-110 transform transition-all duration-300" 
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
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                    Agentia World
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
            <div className="flex space-x-6 mt-4">
              {[
                { 
                  href: 'https://github.com', 
                  icon: 'github', 
                  color: 'text-gray-400 hover:text-white',
                  hoverScale: 1.15
                },
                { 
                  href: 'https://linkedin.com', 
                  icon: 'linkedin', 
                  color: 'text-gray-400 hover:text-blue-400',
                  hoverScale: 1.15
                },
                { 
                  href: 'https://twitter.com', 
                  icon: 'twitter', 
                  color: 'text-gray-400 hover:text-sky-400',
                  hoverScale: 1.15
                }
              ].map(({ href, icon, color, hoverScale }) => (
                <motion.a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} transition-all duration-300 p-2 rounded-full hover:bg-gray-800`}
                  whileHover={{ 
                    scale: hoverScale,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon === 'github' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {icon === 'linkedin' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {icon === 'twitter' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Section */}
          <motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-black/95 via-gray-900/95 to-blue-950/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-blue-800/30 hover:shadow-blue-900/30 hover:border-blue-700/40 hover:bg-gradient-to-br hover:from-black/98 hover:via-gray-900/98 hover:to-blue-950/60 transition-all duration-300"
            {...sectionAnimations(0.2)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-blue-400">Product</h3>
            </div>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-black/95 via-gray-900/95 to-indigo-950/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-indigo-800/30 hover:shadow-indigo-900/30 hover:border-indigo-700/40 hover:bg-gradient-to-br hover:from-black/98 hover:via-gray-900/98 hover:to-indigo-950/60 transition-all duration-300"
            {...sectionAnimations(0.3)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-indigo-400">Company</h3>
            </div>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div 
            className="p-6 rounded-2xl bg-gradient-to-br from-black/95 via-gray-900/95 to-emerald-950/50 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-emerald-800/30 hover:shadow-emerald-900/30 hover:border-emerald-700/40 hover:bg-gradient-to-br hover:from-black/98 hover:via-gray-900/98 hover:to-emerald-950/60 transition-all duration-300"
            {...sectionAnimations(0.4)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-emerald-400">Legal</h3>
            </div>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-800"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
        >
          <p className="text-center text-gray-400 text-sm mb-8 px-4">
            © 2025 Agentia World. Powered by Panaversity. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
