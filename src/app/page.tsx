"use client"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from "next/image";
import Home from "./home/page";
import Features from "./features/page";
import Technology from './technology/page';
import Agents from './agents/page';
import Pricing from './pricing/page';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

const ChatIcon = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
  >
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
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
      />
    </svg>
  </motion.div>
);

const ChatBot = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Array<{
    text: string;
    isUser: boolean;
    isTyping?: boolean;
  }>>([
    { text: "👋 Welcome! I'm your AI Assistant", isUser: false },
    { text: "I'm here to help you explore our AI solutions. What would you like to know?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput("");
    
    // Add user message with animation
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    
    // Show typing indicator with pulse animation
    setMessages(prev => [...prev, { 
      text: "AI is thinking...", 
      isUser: false, 
      isTyping: true 
    }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { 
          text: "I understand what you're looking for. Let me help you with that! 🚀", 
          isUser: false 
        }];
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.8 }}
      className="fixed bottom-24 right-4 w-[350px] h-[400px] bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden z-[60]"
    >
      {/* Header */}
      <div className="relative p-3 border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
              >
                <span className="text-base">🤖</span>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
              />
            </div>
            <div>
              <h3 className="text-base font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Assistant
              </h3>
              <div className="text-xs text-gray-400">Always here to help</div>
            </div>
          </div>
          <motion.button 
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-[280px] overflow-y-auto py-3 px-4 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-gray-800/50">
        <div className="space-y-3">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.isUser ? 50 : -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-2 rounded-xl ${
                message.isUser 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-none shadow-lg' 
                  : 'bg-gray-800 text-gray-100 rounded-bl-none shadow-md'
              }`}>
                {message.isTyping ? (
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-sm">AI is thinking</span>
                    <div className="flex space-x-1">
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-sm">{message.text}</div>
                )}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-800 bg-gray-900/50 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client-side
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-3xl"
      />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: 0 
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1"
        >
          <div 
            className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        </motion.div>
      ))}

      {/* Neural Network Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <motion.path
            d="M0 100 Q 250 50 500 100 T 1000 100"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default function Main() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 0.95, 0.9, 0.85]);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  return (
    <div ref={containerRef} className="relative pt-16">
      {/* Add AnimatedBackground at the top */}
      <AnimatedBackground />

      {/* Home Section with Parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10"
      >
        <Home />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <Features />
      </motion.div>

      {/* Technology Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-30"
      >
        <Technology />
      </motion.div>
      {/* Agents Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-30"
      >
        <Agents />
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-40"
      >
        <Pricing />
      </motion.div>

      {/* Chat Button */}
      <div className="fixed bottom-24 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleChatOpen}
          className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
        >
          <ChatIcon />
        </motion.button>
      </div>

      {/* Chat Interface */}
      <AnimatePresence mode="wait">
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ pointerEvents: 'none' }}
          >
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsChatOpen(false);
                }
              }}
            />
            <div style={{ pointerEvents: 'auto' }}>
              <ChatBot onClose={() => setIsChatOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
