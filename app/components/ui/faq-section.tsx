'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Frequently Asked <span className='bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text'>  Questions</span></h2>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-4"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="flex justify-between items-center w-full text-left p-4 bg-transparent backdrop-blur-sm border border-white rounded-lg transition-colors duration-200"
          >
            <span className=" text-sm text-white">{faq.question}</span>
            <motion.div
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-white" />
            </motion.div>
          </button>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-4 text-sm backdrop-blur-sm border border-white rounded-lg text-gray-300">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

