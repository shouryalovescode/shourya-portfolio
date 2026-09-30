import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'

const nav = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const href = (n) => '#' + n.toLowerCase()
  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-12">
        <a href="#home" className="text-sm font-semibold tracking-[0.18em]">SHOURYA DUTT</a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n}><a href={href(n)} className="group relative font-mono text-[11px] tracking-[0.15em] text-mute transition-colors hover:text-ink">
              {n.toUpperCase()}<span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-white px-6 md:hidden">
            {nav.map((n) => (
              <li key={n}><a href={href(n)} onClick={() => setOpen(false)} className="block py-4 text-2xl font-medium tracking-tight">{n}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
