/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect } from 'react'
import { Brain, Cpu, Globe, Sparkles, Zap, Shield, Cloud, Smartphone, Code, Database, BotIcon as Robot, Fingerprint } from 'lucide-react'
import { FeatureCard } from "./components/ui/feature-card"
import { StatsSection } from "./components/ui/stats-section"
import { GradientCard } from "./components/ui/gradient-card"
import { GradientCircle } from "./components/ui/gradient-circle"
import { GradientBorder } from "./components/ui/gradient-border"
import { FAQSection } from "./components/ui/faq-section"
import { TestimonialSection } from "./components/ui/testimonial-section"
import { PricingSection } from "./components/ui/pricing-section"
import { UseCaseSection } from "./components/ui/use-case-section"
import { motion } from "framer-motion"
import InteractiveHoverButton from './components/ui/interactive-hover-button'
import TypingAnimation from './components/ui/typing-animation'
import { RainbowButton } from './components/ui/rainbow-button'


export default function AIFeatures() {
  useEffect(() => {
    document.body.classList.add('dark')
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
    return () => {
      document.body.classList.remove('dark')
      clearTimeout(timer)
    }
  }, [])

  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for human-like text understanding and generation",
      icon: Brain,
    },
    {
      title: "Machine Learning Models",
      description: "State-of-the-art ML models trained on diverse datasets",
      icon: Cpu,
    },
    {
      title: "Global AI Infrastructure",
      description: "Distributed AI processing centers for optimal performance",
      icon: Globe,
    },
    {
      title: "Smart Automation",
      description: "Intelligent automation solutions for business processes",
      icon: Sparkles,
    },
    {
      title: "Deep Learning",
      description: "Neural networks that mimic human brain function for complex problem-solving",
      icon: Robot,
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video analysis for object detection and recognition",
      icon: Fingerprint,
    },
  ]

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "150ms", label: "Response Time" },
    { value: "1M+", label: "API Calls" },
    { value: "50+", label: "AI Models" },
  ]

  const gradientCards = [
    { title: "Real-time Processing", content: "Process data in real-time with our advanced AI algorithms", icon: Zap },
    { title: "Scalable Solutions", content: "Our AI solutions scale effortlessly with your business needs", icon: Cloud },
    { title: "Custom AI Models", content: "Tailor AI models to your specific industry requirements", icon: Code },
    { title: "Continuous Learning", content: "AI models that continuously improve with new data", icon: Database },
  ]

  const faqs = [
    {
      question: "What is AI and how can it benefit my business?",
      answer: "AI, or Artificial Intelligence, refers to systems that can perform tasks that typically require human intelligence. It can benefit your business by automating processes, providing insights from data, enhancing customer experiences, and enabling predictive analytics for better decision-making."
    },
    {
      question: "How secure is your AI platform?",
      answer: "Our AI platform employs state-of-the-art security measures, including end-to-end encryption, regular security audits, and compliance with industry standards. We prioritize data protection and privacy to ensure your information remains secure."
    },
    {
      question: "Can I integrate your AI solutions with my existing systems?",
      answer: "Yes, our AI solutions are designed to be flexible and easily integrated with a wide range of existing systems and technologies. We provide comprehensive APIs and documentation to facilitate seamless integration."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 technical support, comprehensive documentation, regular training sessions, and dedicated account managers for enterprise clients. Our team is committed to ensuring you get the most out of our AI solutions."
    },
    {
      question: "How do you handle data privacy and compliance?",
      answer: "We adhere to strict data privacy regulations such as GDPR and CCPA. Our platform is designed with privacy-by-design principles, ensuring that your data is always protected and used only for the purposes you specify."
    },
  ]

  return (
    <>
     <div className="min-h-screen bg-gray-950 text-gray-100">
     <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        
        <div className="text-center mb-16 relative">
          <GradientCircle size={100} color1="#3b82f6" color2="#10b981" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypingAnimation className="text-center text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Powering the Future with
            </TypingAnimation>
             <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">Artificial Intelligence</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to transform your business with intelligent solutions
            </p>
          </motion.div>
          <div className="mt-16 flex flex-col items-center justify-center p-4">
      <InteractiveHoverButton className="bg-gradient-to-r from-[#18a0fb]/70 via-[#ee46d3]/50 to-[#00c5df]/50 text-white" />
    </div>

        </div>
        

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16  ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Gradient Cards Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Our AI Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gradientCards.map((card, index) => (
              <GradientCard key={index} title={card.title} icon={card.icon}>
                {card.content}
              </GradientCard>
            ))}
          </div>
        </div>

        {/* Use Case Section */}
        <UseCaseSection />

        {/* Stats Section */}
        <GradientBorder className="mb-16">
          <StatsSection stats={stats} />
        </GradientBorder>

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <div className="mb-16">
          <FAQSection faqs={faqs} />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
          >
          <h2 className="text-3xl font-bold mb-4 text-gray-100">Ready to <span className='bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text'> Get Started? </span> </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of businesses already leveraging our AI solutions
          </p>
          <div className="flex gap-4 justify-center">
            <RainbowButton className='bg-white rounded-full'> Learn More </RainbowButton>
            <RainbowButton className='bg-[#B11AFF] rounded-full'> Contact Sales </RainbowButton>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  )
}

