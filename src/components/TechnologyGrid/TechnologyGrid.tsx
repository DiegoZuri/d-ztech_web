import { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies, techCategories } from '@/data/technologies'
import isotipo from '@/assets/logo/isotipo.png'

const RADIUS = 42

function positionFor(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const x = 50 + RADIUS * Math.cos(angle)
  const y = 50 + RADIUS * Math.sin(angle)
  return { x, y }
}

export default function TechnologyGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
            activeCategory === null
              ? 'border-primary bg-primary text-white'
              : 'border-border text-muted hover:border-border-strong hover:text-text'
          }`}
        >
          All
        </button>
        {techCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'border-primary bg-primary text-white'
                : 'border-border text-muted hover:border-border-strong hover:text-text'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[620px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
          {technologies.map((tech, i) => {
            const { x, y } = positionFor(i, technologies.length)
            const dimmed = activeCategory !== null && tech.category !== activeCategory
            const isHovered = hovered === tech.name
            return (
              <motion.line
                key={tech.name}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="var(--color-border-strong)"
                strokeWidth={isHovered ? 0.6 : 0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: dimmed ? 0.15 : isHovered ? 1 : 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              />
            )
          })}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-surface shadow-soft sm:h-20 sm:w-20">
          <img src={isotipo} alt="D&Z" className="h-8 w-auto sm:h-10" />
        </div>

        {technologies.map((tech, i) => {
          const { x, y } = positionFor(i, technologies.length)
          const dimmed = activeCategory !== null && tech.category !== activeCategory
          return (
            <motion.button
              type="button"
              key={tech.name}
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border bg-surface px-3.5 py-2 text-xs font-medium shadow-soft transition-all duration-300 ease-premium sm:text-[13px]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                borderColor: dimmed ? 'var(--color-border)' : 'var(--color-primary)',
                color: dimmed ? 'var(--color-muted)' : 'var(--color-text)',
                opacity: dimmed ? 0.35 : 1,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: dimmed ? 0.35 : 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {tech.name}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
