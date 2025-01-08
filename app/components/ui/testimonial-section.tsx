/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from "framer-motion"
// import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Implementing this AI solution has revolutionized our business processes. We've seen a 40% increase in efficiency across the board.",
    // avatar: "/app/guide.webp",
   
  },
  {
    name: "Michael Chen",
    role: "Data Scientist, InnovateCo",
    content: "The machine learning models provided are state-of-the-art. They've allowed us to gain insights we never thought possible.",
    // avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, FutureTech",
    content: "The customer support team is exceptional. They've been there every step of the way, ensuring we get the most out of the platform.",
    // avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialSection() {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">What Our <span className='bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text'> Clients Say</span> </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
            <div>
                <h3 className="font-semibold text-gray-200">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-200 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

