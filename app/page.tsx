'use client'

import { useEffect } from 'react'
import { Brain, Cpu, Globe, Sparkles, Zap, Cloud, Code, Database, BotIcon as Robot, Fingerprint } from 'lucide-react'
// import { FeatureCard } from "./components/ui/feature-card"
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
import Boy from '@/app/boy-removebg-preview.png'
import Image from 'next/image'



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
    
    <div className="min-h-screen  absolute top-0 z-[-2] w-full bg-[radial-gradient(#3d3838_1px,#03061c_1px)] bg-[size:20px_20px] text-gray-100">
      <div className="relative w-full h-full">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(to_bottom,white,rgba(255,255,255,0))] pointer-events-none"></div> */}
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="text-center relative z-10">
              <GradientCircle size={100} color1="#B11AFF" color2="#FF689F" />
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
          </div>
        </section>

       

        {/* Features Grid */}
        <section className="py-24 relative overflow-hidden bg-[#0A0A1B]">
          <div className="container mx-auto px-4">
            
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                // <FeatureCard key={index} {...feature} />
                <GradientCard key={index} title={feature.title} icon={feature.icon}>
                   {feature.description}
                </GradientCard>
              ))}
            </div>
          </div>
          </section>

        {/* Gradient Cards Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-100">Our AI  <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">Capabilities </span> </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gradientCards.map((card, index) => (
                <GradientCard key={index} title={card.title} icon={card.icon}>
                  {card.content}
                </GradientCard>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Section */}
        <section className="py-24 relative overflow-hidden bg-[#0A0A1B]">
          <div className="container mx-auto px-4">
            <UseCaseSection />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <GradientBorder className="mb-16">
              <StatsSection stats={stats} />
            </GradientBorder>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden border-2 border-neutral-700 mx-auto w-[95%] max-w-7xl rounded-2xl backdrop-blur-sm">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialSection />
        </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <PricingSection />
          </div>
        </section>  

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-[#B11AFF] to-[#FF689F] rounded-xl w-[95%] mx-auto my-8 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image 
            src={Boy} 
            alt='Boy Image' 
            className='w-full h-auto max-w-[500px] lg:max-w-[700px] mx-auto lg:-ml-16'
            priority
          />
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <TypingAnimation className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-100">
              Ready to Get Started?
             </TypingAnimation>
            <p className="text-gray-300 mb-8 text-base md:text-lg">
              Join thousands of businesses already leveraging our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RainbowButton className='rounded-full w-full sm:w-auto'>Learn More</RainbowButton>
              <RainbowButton className='rounded-full w-full sm:w-auto'>Contact Sales</RainbowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

        

        {/* FAQ Section */}
        <section className="py-24 relative overflow-hidden  ">
          <div className="container mx-auto px-4">
            <FAQSection faqs={faqs} />
          </div>
        </section>
      </div>
      
    </div>
   
  )
}
{/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
{/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

{/* <div class="bg-gradient-to-r from-[#f3e8ff] to-[#dbeafe] dark:bg-gradient-to-r dark:from-[#210526] dark:to-[#07122b] text-center p-8 w-full h-full rounded-xl"> */}