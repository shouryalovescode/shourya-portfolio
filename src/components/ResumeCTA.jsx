import { Download } from 'lucide-react'
import { Reveal, Magnetic } from './ui'
import { LINKS } from '../data/config'

export default function ResumeCTA() {
  return (
    <section aria-labelledby="resume-h" className="border-y border-line bg-neutral-50/60">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-6 py-24 md:flex-row md:items-end md:px-12 md:py-32">
        <Reveal>
          <h2 id="resume-h" className="text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tighter">Looking for the<br />next opportunity.</h2>
          <p className="mt-6 max-w-lg text-lg text-mute">I'm currently open to full-time fresher opportunities in software development and full-stack engineering.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <Magnetic><a href={LINKS.resume} download className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent">
            <Download size={16} /> DOWNLOAD RESUME</a></Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
