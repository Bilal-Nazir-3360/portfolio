import ContactCards from "./ContactCards"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="08 — Contact"
          title="Let’s build something that ships."
          copy="Open to full-stack roles, AI product work, and cybersecurity research collaborations."
        />
      </Reveal>

      <ContactCards />
      <Reveal delay={80}>
        <p className="mt-6 text-center text-sm text-slate-200">The fastest way to reach me is email.</p>
      </Reveal>
    </section>
  )
}
