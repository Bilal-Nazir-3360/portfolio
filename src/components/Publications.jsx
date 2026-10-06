import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const publication = {
  title:
    "Protocol-Compliant Low-Latency Adversarial Traffic Generation for Network Intrusion Detection Systems Using Transformer Generative Pre-Training and Policy Optimization",
  journal: "Engineering Applications of Artificial Intelligence (Elsevier)",
  manuscriptNumber: "EAAI-26-32239",
  status: "Under Review",
  authors: [
    "Muhammad Sheheryar Khan",
    "Muhammad Bilal Nazir",
    "Waleed Alnumay",
    "Fazal Wahab",
    "Muhammad Saad Zubair",
  ],
  supervisor: "Dr. Anwar Shah — FAST NUCES",
  orcid: "https://orcid.org/0009-0008-1498-625X",
}

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <SectionHeading
        kicker="05 — Publications"
        title="Research publication in progress."
        copy="A journal manuscript focused on low-latency adversarial traffic generation and adaptive intrusion detection systems."
      />

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 via-[#0e131c] to-violet-500/5 p-7 sm:p-10"
      >
        <div className="pointer-events-none absolute -top-18 -right-16 h-56 w-56 rounded-full bg-amber-400/15 blur-3xl" />

        <div className="relative flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium tracking-wide text-amber-200 uppercase">
            {publication.status}
          </span>
          <span className="text-xs text-slate-500">{publication.journal}</span>
        </div>

        <h3 className="relative mt-5 max-w-4xl font-display text-2xl font-semibold text-white sm:text-3xl">
          {publication.title}
        </h3>

        <div className="relative mt-6 grid gap-4 rounded-2xl border border-white/10 bg-[#07090f]/40 p-5 sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Journal</p>
            <p className="mt-2 text-sm text-slate-200">{publication.journal}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Manuscript No.</p>
            <p className="mt-2 text-sm text-slate-200">{publication.manuscriptNumber}</p>
          </div>
        </div>

        <div className="relative mt-6">
          <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Authors</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {publication.authors.join(" • ")}
          </p>
        </div>

        <div className="relative mt-6">
          <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">Supervised by</p>
          <p className="mt-3 text-sm text-slate-300">{publication.supervisor}</p>
        </div>

        <div className="relative mt-6">
          <a
            href={publication.orcid}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-violet-300/30 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-300/15"
          >
            ORCID
          </a>
        </div>
      </motion.article>
    </section>
  )
}
