import { LINKS } from '../data/config'

export default function Footer() {
  const a = 'transition-colors hover:text-accent'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-end md:px-12">
        <div><p className="text-sm font-semibold tracking-[0.18em]">SHOURYA DUTT</p><p className="mt-1 text-sm text-mute">Full Stack Developer</p></div>
        <ul className="flex gap-6 font-mono text-xs tracking-widest text-mute">
          <li><a className={a} href={LINKS.github} target="_blank" rel="noreferrer">GITHUB</a></li>
          <li><a className={a} href={LINKS.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a></li>
          <li><a className={a} href={'mailto:' + LINKS.email}>EMAIL</a></li>
        </ul>
        <p className="font-mono text-xs text-mute">© 2026 SHOURYA DUTT</p>
      </div>
    </footer>
  )
}
