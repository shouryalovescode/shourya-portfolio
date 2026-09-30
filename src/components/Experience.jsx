import { Section, Reveal } from './ui'

const jobs = [
  { org: 'AIRPORTS AUTHORITY OF INDIA', role: 'Full Stack Developer Intern', place: 'IGI Airport T3', date: 'June 2026 – August 2026',
    points: ['Built AeroMind, an AI-powered airport management platform.', 'Developed responsive interfaces with React.js and Tailwind CSS.', 'Built REST APIs with Node.js and Express.js, with MongoDB for operational data.', 'Implemented flight management, incident monitoring and airport operations modules.'] },
  { org: 'INFINITE COMPUTER SOLUTIONS', role: 'Full Stack Developer Intern', place: 'Noida', date: 'June 2026 – August 2026',
    points: ['Developed a full-stack Employee/HR Management System with React.js, Node.js, Express.js and PostgreSQL.', 'Implemented JWT authentication, role-based access control and protected routes.', 'Built 15+ REST endpoints with CRUD, validation, search, pagination and bcrypt password hashing.'] },
]

export default function Experience() {
  return (
    <Section id="experience" index="02" title="EXPERIENCE">
      <ol className="border-l border-line">
        {jobs.map((j, i) => (
          <Reveal key={j.org} delay={i * 0.1}>
            <li className="group relative grid gap-6 py-10 pl-8 transition-colors hover:bg-neutral-50/70 md:grid-cols-[1fr_1.5fr] md:gap-16 md:pl-12">
              <span className="absolute -left-[5px] top-[3.15rem] h-2.5 w-2.5 rounded-full border border-ink bg-white transition-all duration-300 group-hover:scale-125 group-hover:border-accent group-hover:bg-accent" />
              <div>
                <p className="font-mono text-xs tracking-widest text-mute">{j.date}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{j.org}</h3>
                <p className="mt-2 text-mute">{j.role} · {j.place}</p>
              </div>
              <ul className="space-y-3 text-ink/80">
                {j.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />{p}</li>)}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
