'use client'

import { motion } from "framer-motion"
import { Brain, ShieldCheck, TrendingUp, Users } from 'lucide-react'

const useCases = [
  {
    title: "Natural Language Processing",
    description: "Enhance customer interactions with AI-powered chatbots and sentiment analysis.",
    icon: Brain,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with machine learning models.",
    icon: TrendingUp,
  },
  {
    title: "Fraud Detection",
    description: "Protect your business with advanced AI algorithms that identify suspicious activities.",
    icon: ShieldCheck,
  },
  {
    title: "Personalization",
    description: "Deliver tailored experiences to your customers using AI-driven recommendations.",
    icon: Users,
  },
]

export function UseCaseSection() {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-100">AI Use  <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text"> Cases </span> </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg flex items-start"
          >
            <useCase.icon className="w-8 h-8 mr-4 text-[#B11AFF] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{useCase.title}</h3>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

