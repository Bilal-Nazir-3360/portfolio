import { activities, activityTags } from "../data"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading kicker="06 — Activities" title="Campus leadership and community." />
      </Reveal>
      <Reveal delay={40}>
        <div className="mb-10 flex flex-wrap gap-2">
          {activityTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-sm text-teal-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[5px] w-px bg-white/10 sm:left-[7px]" />
        <ul className="space-y-6">
          {activities.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <li className="relative grid gap-3 pl-8 sm:grid-cols-[110px_1fr] sm:gap-8 sm:pl-10">
                <span className="absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-teal-300 bg-[#07090f]" />
                <p className="font-mono text-xs text-teal-200/80 sm:pt-0.5">{item.year}</p>
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-400">{item.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
