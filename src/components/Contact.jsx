import { useState } from "react"
import emailjs from "emailjs-com"
import { profile } from "../data"
import { IconGitHub, IconLinkedIn, IconMail } from "./Icons"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ type: "idle", message: "" })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: "idle", message: "" })
    setIsSending(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const notificationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !notificationTemplateId || !autoReplyTemplateId || !publicKey) {
      setIsSending(false)
      setStatus({
        type: "error",
        message:
          "EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your environment variables.",
      })
      return
    }

    const notificationParams = {
      to_name: "Muhammad Bilal Nazir",
      from_name: formData.name,
      from_email: formData.email,
      email: formData.email,
      name: formData.name,
      message: formData.message,
    }

    const autoReplyParams = {
      to_name: formData.name,
      from_name: "Muhammad Bilal Nazir",
      from_email: "bachohan786@gmail.com",
      email: formData.email,
      to_email: formData.email,
      reply_to: "bachohan786@gmail.com",
      name: formData.name,
      message: formData.message,
    }

    try {
      await emailjs.send(serviceId, notificationTemplateId, notificationParams, publicKey)
      await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey)

      setStatus({ type: "success", message: "Your message has been sent successfully. I will get back to you soon." })
      setFormData({ name: "", email: "", message: "" })
      event.target.reset()
    } catch (error) {
      console.error("EmailJS send error:", error)
      setStatus({
        type: "error",
        message: "Something went wrong while sending the message. Please email me directly at bachohan786@gmail.com.",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <Reveal>
        <SectionHeading
          kicker="08 — Contact"
          title="Let’s build something that ships."
          copy="Open to full-stack roles, AI product work, and cybersecurity research collaborations."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {contacts.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.label} delay={i * 70}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-teal-300/40 hover:bg-white/[0.07]"
                >
                  <Icon className="h-6 w-6 text-teal-300" />
                  <p className="mt-5 text-xs tracking-widest text-slate-500 uppercase">{item.label}</p>
                  <p className="mt-2 break-all text-sm text-white">{item.value}</p>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={80} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-[#0b1118] px-4 py-3 text-white outline-none transition focus:border-teal-300/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-[#0b1118] px-4 py-3 text-white outline-none transition focus:border-teal-300/50"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-[#0b1118] px-4 py-3 text-white outline-none transition focus:border-teal-300/50"
                placeholder="Tell me about your project or opportunity"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 ease-out hover:brightness-110 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-75 ${
                isSending ? "scale-[0.98] from-amber-300 to-teal-300" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status.message ? (
              <p
                aria-live="polite"
                className={`text-sm transition-opacity duration-500 ${
                  status.type === "success" ? "text-emerald-300 opacity-100" : "text-rose-300 opacity-100"
                }`}
                style={{ opacity: 1 }}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
