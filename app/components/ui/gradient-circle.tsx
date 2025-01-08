
'use client'

import { motion } from "framer-motion"


interface GradientCircleProps {
  size: number
  color1: string
  color2: string
}

export function GradientCircle({ size, color1, color2 }: GradientCircleProps) {
  return (
    <motion.div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(45deg, ${color1}, ${color2})`,
       
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    />
  )
}

