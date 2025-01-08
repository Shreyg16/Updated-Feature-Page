'use client'

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function StatsSection({ stats }: StatsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8  backdrop-blur-sm  border-2 border-neutral-700 rounded-xl w-full"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 + 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text mb-2"
          >
            {stat.value}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className="text-sm text-white"
          >
            {stat.label}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

