"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Technology() {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    scale: number;
    opacity: number;
  }>>([]);

  const [networkLines, setNetworkLines] = useState<Array<{
    width: number;
    left: string;
    top: string;
    rotation: number;
    duration: number;
  }>>([]);

  const [glowingOrbs, setGlowingOrbs] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate fixed positions for particles
    const newParticles = [...Array(50)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.3
    }));
    setParticles(newParticles);

    // Generate network lines
    const lines = [...Array(20)].map(() => ({
      width: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 10
    }));
    setNetworkLines(lines);

    // Generate glowing orbs
    const orbs = [...Array(5)].map(() => ({
      width: Math.random() * 400 + 200,
      height: Math.random() * 400 + 200,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15
    }));
    setGlowingOrbs(orbs);
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 z-0">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.x * 0.2 - 10, 0],
            scale: [1, particle.scale, 1],
            opacity: [0.3, particle.opacity, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const technologies = [
    {
      title: "Neural Networks",
      description: "Advanced neural architectures for complex decision making",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      title: "Deep Learning",
      description: "Sophisticated deep learning models for pattern recognition",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      title: "Advanced ML",
      description: "Cutting-edge machine learning algorithms",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      title: "Global Scale",
      description: "Distributed AI processing across global networks",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section id="technology" className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Add Floating Particles */}
      <FloatingParticles />

      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        
        {/* Neural Network Lines */}
        {networkLines.map((line, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent"
            style={{
              width: line.width,
              left: line.left,
              top: line.top,
              transform: `rotate(${line.rotation}deg)`
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Glowing Orbs */}
        {glowingOrbs.map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl"
            style={{
              width: orb.width,
              height: orb.height,
              left: orb.left,
              top: orb.top,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Powered by Advanced AI
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built on cutting-edge neural architectures
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                animate={{
                  background: [
                    "linear-gradient(to right, rgb(147, 51, 234, 0.5), rgb(59, 130, 246, 0.5))",
                    "linear-gradient(to right, rgb(59, 130, 246, 0.5), rgb(147, 51, 234, 0.5))",
                    "linear-gradient(to right, rgb(147, 51, 234, 0.5), rgb(59, 130, 246, 0.5))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative p-8 bg-gradient-to-br from-gray-900 via-gray-900/90 to-black rounded-2xl backdrop-blur-sm">
                {/* Enhanced icon animation */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-purple-400 mb-4 relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-purple-500/20 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {tech.icon}
                </motion.div>

                {/* Enhanced text animations */}
                <motion.h3
                  className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2"
                  whileHover={{
                    backgroundImage: "linear-gradient(to right, #a855f7, #3b82f6)",
                  }}
                >
                  {tech.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400"
                  whileHover={{ color: "#a855f7" }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.description}
                </motion.p>

                {/* Enhanced pulse indicator */}
                <div className="absolute bottom-4 right-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      boxShadow: [
                        "0 0 0 0 rgba(168, 85, 247, 0.4)",
                        "0 0 0 10px rgba(168, 85, 247, 0)",
                        "0 0 0 0 rgba(168, 85, 247, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
