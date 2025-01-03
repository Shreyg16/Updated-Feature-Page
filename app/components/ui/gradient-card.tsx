'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { type LucideIcon } from 'lucide-react'

interface GradientCardProps {
  title: string
  children: ReactNode
  icon: LucideIcon
}

export function GradientCard({ title, children, icon: Icon }: GradientCardProps) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden p-1 bg-gradient-to-br from-blue-500 to-green-500"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-800 rounded-lg p-6 h-full">
        <div className="flex items-center mb-4">
          <Icon className="w-6 h-6 text-blue-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        </div>
        <div className="text-gray-300">{children}</div>
      </div>
    </motion.div>
  )
}

