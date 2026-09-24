import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Direction = 'up' | 'left' | 'right' | 'none'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  as?: 'div' | 'section'
  once?: boolean
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -28 },
  right: { x: 28 },
  none: {},
}

export default function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
}: AnimatedSectionProps) {
  const offset = offsets[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  once?: boolean
}

export function StaggerGroup({ children, className = '', stagger = 0.08, once = true }: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: Direction
}) {
  const offset = offsets[direction]
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
