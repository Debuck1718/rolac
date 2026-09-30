const opportunityGroups = [
  {
    title: "Students",
    items: [
      "Exchange Programs",
      "Study in Ghana",
      "International Opportunities",
      "Application Support",
    ],
  },
  {
    title: "Teachers",
    items: [
      "Teach in Francophone Africa",
      "Teacher Recruitment",
      "Accommodation",
      "Relocation Support",
    ],
  },
];

export function Opportunities() {
  return (
    <section aria-labelledby="opportunities-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Opportunities
        </p>
        <h2
          id="opportunities-title"
          className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl"
        >
          Find your next opportunity.
        </h2>
        <div className="mt-12 grid gap-10 border-y border-slate-200 py-10 md:grid-cols-2 md:gap-16">
          {opportunityGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-slate-100 pb-4 text-lg text-slate-800 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a
          href="/opportunities"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:gap-3"
        >
          View all opportunities <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
