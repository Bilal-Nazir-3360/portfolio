import { profile } from "../data"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  )
}
