"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "499",
      features: [
        "2 AI Agent Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support"
      ],
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/20"
    },
    {
      name: "Professional",
      price: "999",
      features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security"
      ],
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/20",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training"
      ],
      gradient: "from-emerald-500 to-teal-500",
      shadowColor: "shadow-emerald-500/20"
    }
  ];

  return (
    <section id="pricing" className="min-h-screen bg-black relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400">Scale your AI capabilities with our flexible pricing</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="relative">
              {plan.popular && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div className={`relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 ${plan.shadowColor} transition-all duration-300`}>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="ml-2 text-gray-400">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li key={feature} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.1 }} className="flex items-center text-gray-300">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.gradient} mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.location.href = '/get-started'} className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${plan.gradient} text-white font-medium transition-transform duration-200`}>
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
