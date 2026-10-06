import { highlights, profile } from "../data"
import { IconDownload, IconGitHub, IconLinkedIn, IconPin } from "./Icons"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-slate-300 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal-300" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
            </span>
            Open to full-stack, ML, and security roles
          </p>

          <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.firstName}
            <br />
            <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">{profile.title}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">{profile.tagline}</p>

          <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <IconPin />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-teal-100 hover:text-slate-900"
            >
              <IconLinkedIn className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100"
            >
              <IconGitHub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-teal-300/40 px-5 py-2.5 text-sm font-medium text-teal-200 transition hover:bg-teal-300/15 hover:text-teal-100"
            >
              <IconDownload className="h-4 w-4" />
              Resume
            </a>
            <a
              href={`${profile.cv}?download=1`}
              download
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100"
            >
              <IconDownload className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={profile.cvMern}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100"
            >
              <IconDownload className="h-4 w-4" />
              MERN Resume
            </a>
            <a
              href={`${profile.cvMern}?download=1`}
              download
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100"
            >
              <IconDownload className="h-4 w-4" />
              Download MERN Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e131c]/80 p-6 shadow-[0_0_80px_rgba(45,212,191,0.08)] backdrop-blur">
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>profile.json</span>
              <span className="text-teal-300/80">live</span>
            </div>
            <pre className="overflow-x-auto font-mono text-[12px] leading-7 text-slate-300">
{`{
  "name": "${profile.name}",
  "stack": ["MERN", "AI", "Security"],
  "education": "FAST NUCES '26",
  "location": "${profile.location}"
}`}
            </pre>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {highlights.map(([stat, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3">
                  <div className="font-display text-xl font-bold text-white">{stat}</div>
                  <div className="mt-1 text-[11px] tracking-wide text-slate-500 uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
