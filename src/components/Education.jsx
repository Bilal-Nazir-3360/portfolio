import { education } from "../data"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading kicker="06 — Education" title="FAST NUCES, class of 2026." />
      </Reveal>
      <Reveal delay={80}>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
          <p className="font-mono text-xs tracking-wide text-teal-200/80 uppercase">{education.years}</p>
          <h3 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">{education.degree}</h3>
          <p className="mt-3 text-base text-slate-300">{education.school}</p>
          <p className="mt-1 text-sm text-slate-500">{education.campus}</p>
        </article>
      </Reveal>
    </section>
  )
}
