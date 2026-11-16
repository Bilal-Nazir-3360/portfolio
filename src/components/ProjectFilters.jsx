const categories = ["All", "Full-Stack", "AI/ML", "Security"]

export default function ProjectFilters({ activeCategory, onCategoryChange }) {
  return (
    <div className="mb-7 flex flex-wrap gap-2" aria-label="Filter projects">
      {categories.map((category) => {
        const isActive = activeCategory === category

        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              isActive
                ? "border-transparent bg-gradient-to-r from-teal-300 via-violet-400 to-amber-300 font-semibold text-[#07090f]"
                : "border-white/15 bg-white/[0.04] text-slate-300 hover:border-teal-300/50 hover:text-white"
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
