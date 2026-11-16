import { profile } from "../data"
import BackToTopButton from "./BackToTopButton"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07090f]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
        <BackToTopButton />
      </div>
    </footer>
  )
}
