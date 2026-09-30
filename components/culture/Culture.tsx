import Image from "next/image";
import Link from "next/link";

const cultureExperiences = [
  {
    title: "National Oral French Quiz",
    message: "Speak. Compete. Connect.",
    action: "Discover",
    href: "/culture",
    image: "/photos/program-card.jpg",
    alt: "Contestants at a ROLAC bilingual event",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    symbol: "01",
  },
  {
    title: "Bilingual Reality Show",
    message: "Two languages. One stage.",
    action: "Explore",
    href: "/culture",
    image: "/photos/grads-card.jpg",
    alt: "ROLAC students celebrating an achievement",
    accent: "from-sky-400 via-indigo-500 to-violet-600",
    symbol: "02",
  },
];

export function Culture() {
  return (
    <section
      aria-labelledby="culture-title"
      className="overflow-hidden bg-slate-950 py-20 text-white motion-safe:animate-fade-in sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Culture & participation
          </p>
          <h2 id="culture-title" className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Language is more than learning. It&apos;s participation.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-2">
          {cultureExperiences.map((experience) => (
            <article
              key={experience.title}
              className={`group relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-gradient-to-br ${experience.accent} p-6 transition duration-500 hover:-translate-y-2 hover:shadow-2xl motion-safe:animate-slide-up sm:min-h-[30rem] sm:p-10`}
            >
              <Image
                src={experience.image}
                alt={experience.alt}
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/20" />
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[32px] border-white/15 transition duration-700 group-hover:scale-125 group-hover:rotate-45" />
              <div className="absolute bottom-8 right-8 text-8xl font-black text-white/10 transition duration-500 group-hover:text-white/20">
                {experience.symbol}
              </div>
              <div className="relative flex h-full flex-col justify-between">
                <div className="max-w-md">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                    Featured experience
                  </p>
                  <h3 className="mt-8 text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
                    {experience.title}
                  </h3>
                  <p className="mt-5 text-xl font-medium uppercase tracking-[0.08em] text-white/90">
                    {experience.message}
                  </p>
                </div>
                <Link
                  href={experience.href}
                  className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:gap-5"
                >
                  {experience.action} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
