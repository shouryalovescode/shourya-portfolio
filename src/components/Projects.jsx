import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Section, Reveal } from './ui'
import { projects } from '../data/projects'

const Frame = ({ title, children }) => (
  <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
    <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
      <i className="h-2 w-2 rounded-full bg-neutral-200" /><i className="h-2 w-2 rounded-full bg-neutral-200" /><i className="h-2 w-2 rounded-full bg-neutral-200" />
      <span className="ml-3 font-mono text-[10px] text-mute">{title} · UI preview</span>
    </div>
    <div className="p-5">{children}</div>
  </div>
)
const Bar = ({ l, w }) => (
  <div className="flex items-center gap-3 font-mono text-[10px] text-mute">
    <span className="w-20 shrink-0">{l}</span>
    <div className="h-1.5 flex-1 rounded bg-neutral-100"><div className="h-full rounded bg-accent" style={{ width: w + '%' }} /></div>
  </div>
)

const mocks = {
  fairmatch: (
    <Frame title="fairmatch">
      <div className="mb-5 flex items-end justify-between"><span className="font-mono text-[10px] text-mute">RESUME SCORE</span><span className="text-4xl font-semibold tracking-tighter">87%</span></div>
      <div className="space-y-3">
        <Bar l="Skill Match" w={90} /><Bar l="Similarity" w={78} /><Bar l="Experience" w={70} /><Bar l="Education" w={65} /><Bar l="Projects" w={82} />
      </div>
    </Frame>
  ),
  retail: (
    <Frame title="retail-insight">
      <div className="mb-4 grid grid-cols-3 gap-2">
        {['Sales', 'Customers', 'Revenue'].map((k) => <div key={k} className="rounded-lg border border-line p-2.5"><p className="font-mono text-[9px] text-mute">{k.toUpperCase()}</p><div className="mt-2 h-2 w-8 rounded bg-neutral-200" /></div>)}
      </div>
      <div className="mb-4 flex h-20 items-end gap-1.5">
        {[35, 50, 42, 66, 58, 80, 72, 92].map((h, i) => <div key={i} className="flex-1 rounded-t bg-accent/70" style={{ height: h + '%' }} />)}
      </div>
      <p className="mb-2 font-mono text-[9px] text-mute">FEATURE IMPORTANCE</p>
      <div className="space-y-2"><Bar l="Feature A" w={85} /><Bar l="Feature B" w={55} /><Bar l="Feature C" w={30} /></div>
    </Frame>
  ),
  hr: (
    <Frame title="hr-portal">
      <div className="grid grid-cols-[90px_1fr] gap-4">
        <ul className="space-y-2 font-mono text-[10px] text-mute">
          {['Dashboard', 'Employees', 'Attendance', 'Roles'].map((n, i) => <li key={n} className={i === 1 ? 'text-accent' : ''}>{n}</li>)}
        </ul>
        <div className="space-y-2">
          {[0, 1, 2, 3, 4].map((r) => (
            <div key={r} className="flex items-center gap-3 rounded-md border border-line px-3 py-2">
              <span className="h-5 w-5 rounded-full bg-neutral-200" /><span className="h-2 flex-1 rounded bg-neutral-100" />
              <span className="rounded bg-accent/10 px-1.5 font-mono text-[9px] text-accent">{r === 0 ? 'ADMIN' : 'USER'}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  ),
}

function LinkOrSoon({ href, label, cursor }) {
  const cls = 'inline-flex items-center gap-1.5 text-sm font-medium'
  return href
    ? <a href={href} target="_blank" rel="noreferrer" data-cursor={cursor} className={`${cls} border-b border-ink pb-0.5 hover:border-accent hover:text-accent`}>{label}<ArrowUpRight size={15} /></a>
    : <span className={`${cls} text-mute/60`} title="Link not added yet">{label} · soon</span>
}

export default function Projects() {
  return (
    <Section id="projects" index="03" title="PROJECTS">
      <div>
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.4 }} data-cursor="VIEW"
              className="group grid items-center gap-10 border-t border-line py-12 transition-colors duration-500 hover:bg-neutral-50/70 md:py-20 lg:grid-cols-2 lg:gap-16">
              <div className={`transition-transform duration-700 group-hover:scale-[1.03] ${i % 2 ? 'lg:order-2' : ''}`}>{mocks[p.id]}</div>
              <div>
                <p className="font-mono text-xs tracking-widest text-accent">0{i + 1}</p>
                <h3 className="mt-3 flex items-start gap-2 text-4xl font-semibold tracking-tighter md:text-5xl">
                  {p.name}<ArrowUpRight className="mt-2 shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" size={28} />
                </h3>
                <p className="mt-5 text-lg text-mute">{p.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px]">{s}</li>)}
                </ul>
                <ul className="mt-6 grid gap-x-6 gap-y-1.5 text-sm text-ink/80 sm:grid-cols-2">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-px w-3 shrink-0 bg-accent" />{f}</li>)}
                </ul>
                <div className="mt-8 flex flex-wrap gap-6">
                  <LinkOrSoon href={p.live} label="Live demo" cursor="OPEN" />
                  <LinkOrSoon href={p.github} label="GitHub" cursor="OPEN" />
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
