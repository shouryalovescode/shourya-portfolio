import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Section, Reveal, Magnetic } from './ui'
import { LINKS } from '../data/config'

const field = 'w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-accent'

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [status, setStatus] = useState('')

  const validate = () => {
    const e = {}
    if (v.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email.'
    if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    return e
  }
  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    if (!LINKS.formEndpoint) {
      // No backend configured: fall back to the visitor's mail client.
      window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent('Portfolio message from ' + v.name)}&body=${encodeURIComponent(v.message + '\n\n' + v.email)}`
      return
    }
    setStatus('sending')
    try {
      const r = await fetch(LINKS.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error()
      setStatus('sent'); setV({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }
  const bind = (k) => ({ value: v[k], onChange: (e) => setV({ ...v, [k]: e.target.value }), 'aria-invalid': !!err[k] })

  return (
    <Section id="contact" index="05" title="CONTACT">
      <Reveal>
        <h2 className="text-[clamp(2.75rem,10vw,8.5rem)] font-semibold leading-[0.95] tracking-tighter">LET'S BUILD<br />SOMETHING<span className="text-accent">.</span></h2>
      </Reveal>
      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <Reveal>
          <ul className="divide-y divide-line border-y border-line">
            {[['Email', 'mailto:' + LINKS.email, LINKS.email], ['LinkedIn', LINKS.linkedin, 'Connect on LinkedIn'], ['GitHub', LINKS.github, 'View Github']].map(([l, h, t]) => (
              <li key={l}><a href={h} data-cursor="OPEN" target={l === 'Email' ? undefined : '_blank'} rel="noreferrer" className="group flex items-center justify-between py-6 transition-colors hover:text-accent">
                <span className="font-mono text-xs tracking-widest text-mute">{l.toUpperCase()}</span>
                <span className="flex items-center gap-2 break-all text-lg">{t}<ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </a></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="space-y-8">
            
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
