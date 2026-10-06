import { skillGroups } from "../data"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="02 — Skills"
          title="MERN in production. Models in the loop."
          copy="Frontend, APIs, databases, and applied machine learning — the stack I use to ship products and research."
        />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className={i === skillGroups.length - 1 ? "sm:col-span-2" : ""}
          >
            <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition duration-300 hover:border-teal-300/30 hover:shadow-[0_0_40px_rgba(45,212,191,0.08)]">
              <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-[#07090f]/60 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
