import { motion } from 'motion/react'
import { Section, Reveal } from './ui'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" index="04" title="SKILLS">
      <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.1}>
            <h3 className="mb-5 border-b border-line pb-3 font-mono text-xs tracking-[0.2em] text-mute">{g.group.toUpperCase()}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <motion.li key={s} whileHover={{ y: -3 }} className="cursor-default rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent">{s}</motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
