import { Section, Reveal } from './ui'

export default function About() {
  return (
    <Section id="about" index="01" title="ABOUT">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tighter">
            Turning ideas into <span className="text-accent">functional</span> digital products.
          </h2>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-mute lg:pt-3">
          <Reveal delay={0.1}><p>I'm a B.Tech Information Technology student at Maharaja Surajmal Institute of Technology, New Delhi, focused on full stack development.</p></Reveal>
          <Reveal delay={0.2}><p>I've interned as a Full Stack Developer at <span className="text-ink">Airports Authority of India</span> and <span className="text-ink">Infinite Computer Solutions</span>, building React and Node.js applications with REST APIs and databases.</p></Reveal>
          <Reveal delay={0.3}><p>I'm interested in software engineering and data-driven applications, and I'm looking for fresher opportunities where I can keep building.</p></Reveal>
        </div>
      </div>
    </Section>
  )
}
