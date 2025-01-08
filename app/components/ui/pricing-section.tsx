'use client'

import { motion } from "framer-motion"
import { Check } from 'lucide-react'
import { RainbowButton } from "./rainbow-button"




const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    features: [
      "5 AI models",
      "100,000 API calls/month",
      "Basic support",
      "1 project",
    ],
  },
  {
    name: "Pro",
    price: "$299",
    features: [
      "20 AI models",
      "1,000,000 API calls/month",
      "Priority support",
      "5 projects",
      "Custom model training",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited AI models",
      "Unlimited API calls",
      "24/7 dedicated support",
      "Unlimited projects",
      "Custom model training",
      "On-premises deployment",
    ],
  },
]

export function PricingSection() {
 
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Pricing <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">  Plans</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-800 p-6 rounded-lg flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">{plan.price}</p>
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2 text-white">
                  <Check className="w-5 h-5 mr-2 text-[#FF689F]" />
                  {feature}
                </li>
              ))}
            </ul>
            <RainbowButton className="rounded-full">Choose Plan</RainbowButton>
          </motion.div>
        ))}
      </div>
    </div>
    
  )
}

