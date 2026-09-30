import Image from "next/image";

const serviceAreas = [
  {
    title: "Education",
    number: "01",
    description: "Open doors to learning across languages, classrooms, and borders.",
    items: ["Professional English", "French programs", "Student exchange", "Study opportunities"],
    image: "/photos/lectures-card.jpg",
    alt: "A ROLAC lecturer teaching a class",
    accent: "bg-amber-300",
  },
  {
    title: "Language",
    number: "02",
    description: "Make communication clearer, more confident, and more connected.",
    items: ["Translation", "Interpretation", "French laboratories"],
    image: "/photos/students-card.jpg",
    alt: "Students practising language together",
    accent: "bg-sky-300",
  },
  {
    title: "Mobility",
    number: "03",
    description: "Turn international ambition into practical, supported movement.",
    items: ["Teacher recruitment", "Student placement", "Accommodation"],
    image: "/photos/grads-card.jpg",
    alt: "ROLAC students celebrating graduation",
    accent: "bg-indigo-300",
  },
  {
    title: "Culture",
    number: "04",
    description: "Create shared experiences that make language and identity come alive.",
    items: ["National Oral French Quiz", "Bilingual Reality Show", "Events & engagement"],
    image: "/photos/program-card.jpg",
    alt: "Community members at a ROLAC event",
    accent: "bg-rose-300",
  },
];

export function ServiceEcosystem() {
  return (
    <section
      aria-labelledby="ecosystem-title"
      className="bg-slate-50 py-20 motion-safe:animate-fade-in sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            The service ecosystem
          </p>
          <h2
            id="ecosystem-title"
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
          >
            What we make possible.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            One connected ecosystem for education, language, mobility, and
            culture.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <article
              key={area.title}
              className="group relative flex min-h-[23rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl motion-safe:animate-slide-up sm:min-h-[27rem] sm:p-7"
            >
              <Image
                src={area.image}
                alt={area.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:opacity-60"
              />
              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${area.accent} opacity-80 transition duration-500 group-hover:scale-150`}
              />
              <div className="relative flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                  {area.number}
                </span>
                <span className="h-3 w-3 rounded-full bg-white/80 shadow-[0_0_18px_4px_rgba(255,255,255,0.25)]" />
              </div>
              <div className="relative">
                <h3 className="text-3xl font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {area.description}
                </p>
                <ul className="mt-7 space-y-3 border-t border-white/15 pt-5">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-100"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
