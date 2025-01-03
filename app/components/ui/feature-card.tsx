/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { motion } from "framer-motion"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >


      <Card className="relative overflow-hidden group bg-[#1f2937] rounded-3xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
          whileHover={{ scale: 1.05 }}
        />
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <CardTitle className="text-xl text-gray-100">{title}</CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className="h-1 bg-blue-600/20 rounded-full"
            whileHover={{ scaleX: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}



