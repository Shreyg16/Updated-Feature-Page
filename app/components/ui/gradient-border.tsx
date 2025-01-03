'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GradientBorderProps {
  children: ReactNode
  className?: string
}

export function GradientBorder({ children, className = "" }: GradientBorderProps) {
  return (
    <motion.div
      className={`p-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-lg ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-background rounded-lg p-4 h-full">
        {children}
      </div>
    </motion.div>
  )
}

