import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  )
}

export function Section({ id, index, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-[1400px] scroll-mt-4 px-6 py-24 md:px-12 md:py-40">
      <Reveal>
        <p className="mb-12 font-mono text-xs tracking-[0.2em] text-mute md:mb-20">
          <span className="text-accent">{index}</span> / {title}
        </p>
      </Reveal>
      {children}
    </section>
  )
}

export function Magnetic({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.25)
    y.set((e.clientY - r.top - r.height / 2) * 0.25)
  }
  const leave = () => { x.set(0); y.set(0) }
  return <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={leave} className="inline-block">{children}</motion.div>
}

export const btnPrimary = 'inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent'
export const btnGhost = 'inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink'
