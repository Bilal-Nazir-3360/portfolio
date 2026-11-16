import { profile } from "../data"
import { IconGitHub, IconLinkedIn, IconMail } from "./Icons"
import Reveal from "./Reveal"

const contacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: IconMail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mbilal-nazir",
    href: profile.linkedin,
    icon: IconLinkedIn,
  },
  {
    label: "GitHub",
    value: "github.com/Bilal-Nazir-3360",
    href: profile.github,
    icon: IconGitHub,
  },
]

export default function ContactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {contacts.map((item, index) => {
        const Icon = item.icon
        const external = item.href.startsWith("http")

        return (
          <Reveal key={item.label} delay={index * 70}>
            <a
              href={item.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="contact-card flex h-full min-h-48 flex-col rounded-3xl p-6"
            >
              <Icon className="h-7 w-7 text-teal-200" />
              <p className="mt-6 text-sm font-semibold tracking-wide text-white">{item.label}</p>
              <p className="mt-2 break-all text-sm text-slate-300">{item.value}</p>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}
