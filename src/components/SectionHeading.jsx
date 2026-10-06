export default function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs tracking-[0.22em] text-teal-300 uppercase">{kicker}</p>
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{copy}</p> : null}
    </div>
  )
}
