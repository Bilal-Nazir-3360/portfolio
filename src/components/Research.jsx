import { research } from "../data"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading kicker="04 — Research" title="Undergraduate research at the IDS frontier." />
      </Reveal>
      <Reveal delay={80}>
        <article className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-[#0e131c] to-teal-500/5 p-7 sm:p-10">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
          <div className="relative flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium tracking-wide text-amber-200 uppercase">
              UNDERGRADUATE RESEARCH PROJECT
            </span>
            <span className="text-xs text-slate-500">{research.venue}</span>
          </div>
          <h3 className="font-display relative mt-5 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
            {research.title}
          </h3>
          <p className="relative mt-2 text-sm text-teal-200/80">{research.subtitle}</p>
          <p className="relative mt-4 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
            {research.description}
          </p>
          <ul className="relative mt-6 grid gap-3 sm:grid-cols-3">
            {research.outcomes.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-[#07090f]/40 px-4 py-3 text-sm leading-6 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </section>
  )
}
