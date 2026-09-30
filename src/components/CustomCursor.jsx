import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [on, setOn] = useState(false)
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState('')
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 170, damping: 20, mass: 0.4 })
  const ry = useSpring(y, { stiffness: 170, damping: 20, mass: 0.4 })

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    setOn(true)
    document.body.classList.add('cc')
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const over = (e) => {
      const t = e.target.closest?.('a,button,[data-cursor]')
      setHover(!!t); setLabel(t?.dataset.cursor || '')
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('cc')
    }
  }, [x, y])

  if (!on) return null
  const size = hover ? (label ? 84 : 52) : 32
  return (
    <>
      <motion.div aria-hidden style={{ x: rx, y: ry }} className="pointer-events-none fixed left-0 top-0 z-[100]">
        <motion.div animate={{ width: size, height: size, backgroundColor: label ? '#16a34a' : 'rgba(22,163,74,0)' }}
          transition={{ duration: 0.3 }}
          className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-ink/40 font-mono text-[10px] tracking-widest text-white">
          {label}
        </motion.div>
      </motion.div>
      <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[101]">
        <div className={`-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-ink transition-opacity ${label ? 'opacity-0' : ''}`} />
      </motion.div>
    </>
  )
}
