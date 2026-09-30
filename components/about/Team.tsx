import Image from "next/image";

const team = [
  { name: "Rosemary Amankwah", role: "Chief Executive Officer (CEO)" },
  { name: "Mr. Brew Seth", role: "Personal Assistant / Secretary" },
  { name: "Ms. Paulyn Esinam", role: "Public Relations Officer (PRO)" },
  { name: "Evans Buckman", role: "IT / Coordinator" },
  { name: "M. Mawuli", role: "International Relations Officer" },
];

export function Team() {
  return (
    <section aria-labelledby="team-title" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          The people behind ROLAC
        </p>
        <h2
          id="team-title"
          className="mt-4 text-[clamp(1.75rem,6vw,2.75rem)] font-semibold tracking-tight text-slate-950"
        >
          Meet the team
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          A small, committed team connecting Ghana and the Francophone world
          through education, language, and mobility.
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/9]">
          <Image
            src="/photos/program-wide.jpg"
            alt="ROLAC team members at a programme event"
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-full w-full object-cover"
          />
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
            >
              <div className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold tracking-tight text-white"
                >
                  {member.name
                    .replace(/^(Mr\.|Ms\.)\s*/, "")
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-slate-950">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {member.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
