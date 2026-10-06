import { about, profile } from "../data"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading kicker="01 — About" title="Full-stack builder. Research-minded engineer." />
      </Reveal>
      <Reveal delay={80}>
        <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr]">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-[2rem] border border-white/10 sm:h-56 sm:w-56">
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090f]/40 to-transparent" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-base leading-8 text-slate-300">{about}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
