import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Activity, GitBranch, Cloud, CheckCircle2 } from 'lucide-react'

const nodes = [
  { x: 60, y: 40 },
  { x: 200, y: 20 },
  { x: 300, y: 90 },
  { x: 150, y: 140 },
  { x: 40, y: 160 },
  { x: 260, y: 190 },
]

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
  [2, 5],
]

export default function HeroVisual() {
  const { t } = useTranslation()
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] sm:max-w-[520px]">
      {/* backdrop grid + glow */}
      <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.02]" />
      <div className="absolute inset-0 rounded-[32px] grid-noise radial-fade opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[90px]" />

      {/* connected node graph */}
      <motion.svg
        viewBox="0 0 340 220"
        className="absolute left-1/2 top-[8%] w-[86%] -translate-x-1/2 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#edgeGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4fa6ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4fa6ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 1 ? 6 : 4}
            fill={i === 1 ? '#4fa6ff' : '#0b0d12'}
            stroke="#4fa6ff"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </motion.svg>

      {/* metrics card */}
      <motion.div
        className="absolute -left-4 top-[6%] w-[168px] rounded-2xl border border-white/10 bg-[#12151d]/90 p-4 shadow-elevated backdrop-blur-xl sm:-left-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-medium text-muted-inverse">{t('heroVisual.deployments')}</span>
            <Activity size={13} className="text-primary" />
          </div>
          <div className="flex items-end gap-1.5">
            {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
              <motion.span
                key={i}
                className="block w-2.5 rounded-sm bg-gradient-to-t from-primary/40 to-primary"
                initial={{ height: 0 }}
                animate={{ height: `${h * 0.5}px` }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.06, ease: 'easeOut' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* status card */}
      <motion.div
        className="absolute right-0 top-[2%] w-[150px] rounded-2xl border border-white/10 bg-[#12151d]/90 p-3.5 shadow-elevated backdrop-blur-xl sm:-right-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-white">{t('heroVisual.allSystemsLive')}</span>
        </motion.div>
      </motion.div>

      {/* code snippet card */}
      <motion.div
        className="absolute bottom-[6%] left-1/2 w-[240px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0d1015]/95 p-4 font-mono shadow-elevated backdrop-blur-xl sm:w-[260px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
          <div className="mb-2.5 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 flex items-center gap-1 text-[10px] text-muted-inverse">
              <GitBranch size={10} /> main
            </span>
          </div>
          <div className="space-y-1 text-[11px] leading-relaxed">
            <p>
              <span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">deploy</span>{' '}
              <span className="text-white/70">= async () =&gt; {'{'}</span>
            </p>
            <p className="pl-3">
              <span className="text-[#c586c0]">await</span> <span className="text-[#dcdcaa]">build</span>
              <span className="text-white/70">(app);</span>
            </p>
            <p className="pl-3">
              <span className="text-[#c586c0]">return</span> <span className="text-[#ce9178]">'success'</span>
              <span className="text-white/70">;</span>
            </p>
            <p className="text-white/70">{'};'}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* cloud badge */}
      <motion.div
        className="absolute -left-2 bottom-[26%] flex items-center gap-1.5 rounded-full border border-white/10 bg-[#12151d]/90 px-3 py-1.5 shadow-elevated backdrop-blur-xl sm:-left-6"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-1.5"
        >
          <Cloud size={13} className="text-primary" />
          <span className="text-[11px] font-medium text-white">{t('heroVisual.cloudSynced')}</span>
          <CheckCircle2 size={12} className="text-emerald-400" />
        </motion.div>
      </motion.div>
    </div>
  )
}
