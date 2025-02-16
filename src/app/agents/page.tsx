"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Agents() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [networkLines, setNetworkLines] = useState<Array<{
    width: number;
    left: number;
    top: number;
    rotation: number;
    duration: number;
  }>>([]);

  const [glowingOrbs, setGlowingOrbs] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    duration: number;
  }>>([]);

  const [floatingParticles, setFloatingParticles] = useState<Array<{
    left: number;
    top: number;
    xOffset: number;
    yOffset: number;
    scale: number;
    duration: number;
  }>>([]);

  const solutions = [
    {
      title: "Enterprise AI",
      description: "Custom AI agents designed for enterprise-scale operations and decision-making",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: [
        "Scalable Architecture",
        "Real-time Decision Making",
        "Enterprise Integration",
        "Custom Workflows"
      ],
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
      title: "Neural Operations",
      description: "Automated workflow optimization through distributed neural networks",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Distributed Processing",
        "Adaptive Learning",
        "Network Optimization",
        "Automated Scaling"
      ],
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      title: "Secure Intelligence",
      description: "Privacy-first AI solutions with military-grade security protocols",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "Military-grade Encryption",
        "Privacy Protection",
        "Secure Processing",
        "Compliance Standards"
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    // Generate network lines
    const lines = [...Array(20)].map(() => ({
      width: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 5 + 5
    }));
    setNetworkLines(lines);

    // Generate glowing orbs
    const orbs = [...Array(8)].map(() => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 5
    }));
    setGlowingOrbs(orbs);

    // Generate floating particles
    const particles = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 100 - 50,
      yOffset: Math.random() * 100 - 50,
      scale: Math.random() + 0.5,
      duration: Math.random() * 10 + 10
    }));
    setFloatingParticles(particles);
  }, []);

  // Neural network background animation
  const NeuralBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural Network Lines */}
      {networkLines.map((line, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"
          style={{
            width: line.width,
            left: `${line.left}%`,
            top: `${line.top}%`,
            transform: `rotate(${line.rotation}deg)`
          }}
          animate={{
            x: [0, 50, 0],
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
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"
          style={{
            width: orb.width,
            height: orb.height,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );

  // Floating particles effect
  const FloatingParticles = () => (
    <div className="absolute inset-0">
      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            x: [0, particle.xOffset],
            y: [0, particle.yOffset],
            scale: [1, particle.scale, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="agents" className="min-h-screen">
      <div className="min-h-screen bg-black relative overflow-hidden pt-20">
        <NeuralBackground />
        <FloatingParticles />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              AI Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming industries with intelligent agents
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Card Background with Dynamic Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card Content */}
                <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden">
                  {/* Animated Icon */}
                  <motion.div
                    className="text-purple-400 mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {solution.icon}
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {solution.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {solution.description}
                  </p>

                  {/* Features List with Staggered Animation */}
                  <motion.ul className="space-y-3">
                    {solution.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <motion.span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} mr-3`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Interactive Corner Decoration */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    animate={hoveredIndex === index ? {
                      rotate: [0, 90, 180, 270, 360],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${solution.gradient} opacity-50`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Get Started Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/get-started'}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </section>
  );
}
