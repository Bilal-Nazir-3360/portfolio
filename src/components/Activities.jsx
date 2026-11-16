import { activityTags } from "../data"
import ActivityTimeline from "./ActivityTimeline"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading kicker="07 — Activities" title="Campus leadership and community." />
      </Reveal>
      <Reveal delay={40}>
        <div className="mb-10 flex flex-wrap gap-2">
          {activityTags.map((tag) => (
            <span
              key={tag}
              className="activity-tag rounded-full px-3 py-1.5 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
      <ActivityTimeline />
    </section>
  )
}
