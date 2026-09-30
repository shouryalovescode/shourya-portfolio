import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { Magnetic, btnPrimary, btnGhost, ease } from './ui'
import { LINKS } from '../data/config'

const Line = ({ t, i }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.25 + i * 0.13, ease }}>{t}</motion.span>
  </span>
)

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pb-24 pt-32 md:px-12">
      <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mute">
            <span className="h-2 w-2 rounded-full bg-accent" /> B.TECH IT · OPEN TO FRESHER ROLES
          </motion.p>
          <h1 className="text-[clamp(3rem,11vw,9rem)] font-semibold leading-[0.92] tracking-tighter">
            <Line t="FULL STACK" i={0} /><Line t="DEVELOPER" i={1} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease }}
            className="mt-8 max-w-md text-lg text-mute">
            Building modern, scalable web applications and data-driven products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease }}
            className="mt-10 flex flex-wrap gap-3">
            <Magnetic><a href="#projects" className={btnPrimary}>View Projects</a></Magnetic>
            <Magnetic><a href="#contact" className={btnGhost}>Contact Me</a></Magnetic>
            <Magnetic><a href={LINKS.resume} target="_blank" rel="noreferrer" className={btnGhost}>Resume</a></Magnetic>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.9, duration: 1, ease }} className="hidden sm:block">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <i className="h-2.5 w-2.5 rounded-full bg-neutral-200" /><i className="h-2.5 w-2.5 rounded-full bg-neutral-200" /><i className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
              <span className="ml-3 font-mono text-[11px] text-mute">developer.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-ink" aria-label="Code snippet describing the developer">
{`const developer = {
  name: "Shourya Dutt",
  stack: ["React", "Node", "Python"],
  focus: "Building useful products",
  status: `}<span className="text-accent">"open to work"</span>{`
}`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
      <motion.a href="#about" aria-label="Scroll to About" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-mute md:left-12">
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}><ArrowDown size={14} /></motion.span> SCROLL
      </motion.a>
    </section>
  )
}
