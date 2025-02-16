"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [networkLines, setNetworkLines] = useState<
    Array<{
      width: number;
      left: number;
      top: number;
      rotation: number;
      duration: number;
    }>
  >([]);

  const [glowingOrbs, setGlowingOrbs] = useState<
    Array<{
      width: number;
      height: number;
      left: number;
      top: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    // Generate network lines
    const lines = [...Array(20)].map(() => ({
      width: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: Math.random() * 5 + 5,
    }));
    setNetworkLines(lines);

    // Generate glowing orbs
    const orbs = [...Array(8)].map(() => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 5,
    }));
    setGlowingOrbs(orbs);
  }, []);

  const features: Feature[] = [
    {
      title: "Neural Capabilities",
      description: "Powered by next-generation artificial intelligence",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      details: [
        "Advanced neural network architectures",
        "Real-time learning capabilities",
        "Adaptive response systems",
        "Dynamic pattern recognition",
      ],
    },
    {
      title: "Autonomous Learning",
      description: "Self-evolving neural networks that continuously adapt",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      details: [
        "Reinforcement learning algorithms",
        "Behavioral adaptation",
        "Performance optimization",
        "Continuous improvement cycles",
      ],
    },
    {
      title: "Multi-Modal Intelligence",
      description: "Process text, voice, and visual data comprehensively",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      details: [
        "Natural language processing",
        "Computer vision integration",
        "Voice recognition systems",
        "Cross-modal learning",
      ],
    },
    {
      title: "Cognitive Integration",
      description: "Seamless integration through advanced cognitive APIs",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      ),
      details: [
        "Neural bridge technology",
        "System interoperability",
        "Cognitive middleware",
        "Adaptive interfaces",
      ],
    },
    {
      title: "Ethical AI Framework",
      description: "Built-in ethical guidelines and safety protocols",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      details: [
        "Responsible AI deployment",
        "Privacy protection",
        "Bias mitigation",
        "Transparent decision-making",
      ],
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis capabilities",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      details: [
        "Time series forecasting",
        "Pattern recognition",
        "Risk assessment",
        "Market trend analysis",
      ],
    },
    {
      title: "Quantum Processing",
      description:
        "Next-gen quantum computing integration for complex calculations",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      details: [
        "Quantum algorithm optimization",
        "Superposition computing",
        "Quantum encryption",
        "Complex problem solving",
      ],
    },
    {
      title: "Adaptive Security",
      description:
        "Self-evolving security protocols with real-time threat detection",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      details: [
        "Real-time threat monitoring",
        "Automated response systems",
        "Behavioral analysis",
        "Zero-day vulnerability protection",
      ],
    },
    {
      title: "Blockchain Integration",
      description: "Secure and transparent distributed ledger technology",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      details: [
        "Smart contract automation",
        "Decentralized processing",
        "Immutable record keeping",
        "Cross-chain compatibility",
      ],
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Neural Network Lines */}
        <div className="absolute inset-0 opacity-20">
          {networkLines.map((line, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"
              style={{
                width: line.width,
                left: `${line.left}%`,
                top: `${line.top}%`,
                transform: `rotate(${line.rotation}deg)`,
              }}
              animate={{
                x: [0, 50, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: line.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating Orbs */}
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
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Neural Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto relative">
            Powered by next-generation artificial intelligence
          </p>
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Enhanced Grid Layout with Container Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 relative"
                animate={{
                  height: expandedIndex === index ? "auto" : "100%",
                }}
                transition={{
                  height: { duration: 0.3, type: "spring", stiffness: 100 },
                }}
              >
                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, rgba(30, 64, 175, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
                      "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, rgba(30, 64, 175, 0.1) 50%, rgba(0, 0, 0, 0) 100%)",
                      "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, rgba(30, 64, 175, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-purple-400"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-4">{feature.description}</p>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedIndex === index ? 1 : 0,
                    height: expandedIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mt-4 border-t border-gray-700/50 pt-4">
                    {feature.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-2"
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 text-purple-400"
                  animate={{
                    rotate: expandedIndex === index ? 180 : 0,
                    scale: expandedIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
