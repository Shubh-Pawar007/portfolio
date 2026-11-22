import { motion, MotionConfig } from 'framer-motion'
import Hero3D from './components/Hero3D'
import TiltCard from './components/TiltCard'
import { profile, aboutPoints, experience, projects, skillGroups, marqueeSkills } from './data'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="glass mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#top" className="text-sm font-bold tracking-widest text-indigo-300">SP</a>
        <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="#work" className="text-sm text-slate-300 sm:hidden">Work</a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-xl bg-indigo-500/90 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-indigo-400"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <Hero3D />
      <div className="px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 text-sm font-medium tracking-[0.3em] text-cyan-300 uppercase"
        >
          {profile.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          {profile.name.split(' ')[0]}{' '}
          <span className="grad-text">{profile.name.split(' ')[1]}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-5 max-w-xl text-lg text-slate-300"
        >
          {profile.role}, building the web platform and agent stack for{' '}
          <span className="text-indigo-300">{profile.product}</span> AI smart glasses.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="glow-ring rounded-2xl bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400"
          >
            See my work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl px-6 py-3 font-medium text-slate-200 transition hover:border-indigo-400/50 hover:text-white"
          >
            GitHub
          </a>
        </motion.div>
      </div>
      <div className="animate-floaty absolute bottom-8 text-xs tracking-widest text-slate-500 uppercase">
        Scroll
      </div>
    </section>
  )
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="mb-12">
      <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-cyan-300 uppercase">{kicker}</p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading kicker="About" title="What I work on" />
      <motion.p {...fadeUp} className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
        I am a full-stack engineer who likes owning products end to end. At AjnaLens I own Session
        Tracker, the AI session review platform our team relies on, and I develop Gemini-powered
        agent features for our smart glasses. I came to software from mechanical engineering, which
        is why I care about how things work under the UI.
      </motion.p>
      <div className="grid gap-5 sm:grid-cols-2">
        {aboutPoints.map((p, i) => (
          <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
            <TiltCard className="glass h-full rounded-2xl p-6">
              <h3 className="mb-2 text-lg font-semibold text-indigo-300">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{p.body}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHeading kicker="Career" title="Experience" />
      <div className="relative border-l border-indigo-500/30 pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-cyan-300 bg-[#05060f] shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
            <p className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">{job.period}</p>
            <h3 className="mt-1 text-2xl font-bold">
              {job.title} <span className="text-slate-400">· {job.company}</span>
            </h3>
            {job.context && <p className="mt-2 text-sm text-slate-400 italic">{job.context}</p>}
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading kicker="Recent work" title="Latest apps I have built" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.07 }}>
            <TiltCard className="glass flex h-full flex-col rounded-3xl p-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                  {p.tag}
                </span>
                <span className="text-xs text-slate-500">{p.year}</span>
              </div>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
                  >
                    Live app
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:border-indigo-400/50 hover:text-white"
                  >
                    Source
                  </a>
                )}
              </div>
            </TiltCard>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading kicker="Toolbox" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div key={g.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
            <TiltCard className="glass h-full rounded-2xl p-6">
              <h3 className="mb-3 text-sm font-semibold tracking-widest text-cyan-300 uppercase">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-lg bg-white/5 px-2.5 py-1.5 text-sm text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Marquee() {
  const row = [...marqueeSkills, ...marqueeSkills]
  return (
    <div className="overflow-hidden border-y border-white/5 py-5">
      <div className="animate-marquee flex w-max gap-10">
        {row.map((s, i) => (
          <span key={`${s}-${i}`} className="text-sm font-medium tracking-widest text-slate-500 uppercase">
            {s} <span className="text-indigo-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28 text-center">
      <motion.div {...fadeUp}>
        <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-cyan-300 uppercase">Contact</p>
        <h2 className="text-3xl font-bold sm:text-5xl">
          Let us build something <span className="grad-text">real</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-slate-300">
          I am open to full-stack and AI product roles. The fastest way to reach me is email.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="glow-ring rounded-2xl bg-indigo-500 px-7 py-3.5 font-medium text-white hover:bg-indigo-400"
          >
            {profile.email}
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-7 text-sm text-slate-400">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={profile.medium} target="_blank" rel="noreferrer" className="hover:text-white">Medium</a>
        </div>
      </motion.div>
    </section>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user"><div className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Contact />
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600">
        Designed and built by {profile.name} · {new Date().getFullYear()}
      </footer>
    </div></MotionConfig>
  )
}
