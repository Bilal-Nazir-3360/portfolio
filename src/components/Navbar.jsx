import { useEffect, useState } from "react"
import { profile } from "../data"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#activities", label: "Activities" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const ids = links.map((l) => l.href.slice(1))
      let current = ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#07090f]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="cursor-pointer font-display text-lg font-bold tracking-tight text-white hover:text-teal-200">
          BN<span className="text-teal-300">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`cursor-pointer text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? "text-teal-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
          className="hidden cursor-pointer rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-sm text-teal-200 transition hover:bg-teal-300/20 hover:text-teal-100 md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-full bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#07090f]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="block py-1 text-teal-300" onClick={() => setOpen(false)}>
                View Resume
              </a>
            </li>
            <li>
              <a href={`${profile.cv}?download=1`} download className="block py-1 text-teal-300" onClick={() => setOpen(false)}>
                Download Resume
              </a>
            </li>
            <li>
              <a href={profile.cvMern} target="_blank" rel="noreferrer" className="block py-1 text-teal-300" onClick={() => setOpen(false)}>
                View MERN Resume
              </a>
            </li>
            <li>
              <a href={`${profile.cvMern}?download=1`} download className="block py-1 text-teal-300" onClick={() => setOpen(false)}>
                Download MERN Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
