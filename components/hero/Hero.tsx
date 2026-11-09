import Link from "next/link";
import { Media } from "@/components/ui/Media";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f7f5ef] motion-safe:animate-fade-in"
      aria-labelledby="hero-title"
    >
      <div className="absolute -right-24 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-amber-200/35 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:gap-14 sm:px-10 sm:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:px-12 lg:py-24">
        <div>
          <p className="eyebrow motion-safe:animate-slide-up">Rosa&apos;s Language Centre · Ghana</p>
          <h1
            id="hero-title"
            className="motion-safe:animate-slide-up mt-6 max-w-2xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-slate-950"
          >
            A world of possibility, <span className="text-sky-700">in every language.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            We bring people, schools and opportunity closer together through
            language, education and meaningful connections across Ghana and
            Francophone Africa.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/opportunities" className="btn btn-primary">
              Find your next step <span aria-hidden="true">→</span>
            </Link>
            <Link href="/about" className="btn btn-outline">
              Get to know ROLAC
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm font-medium text-slate-600">
            <span><span className="mr-2 text-amber-500">✦</span>People-first learning</span>
            <span><span className="mr-2 text-amber-500">✦</span>Real-world connections</span>
            <span><span className="mr-2 text-amber-500">✦</span>Across borders</span>
          </div>
        </div>

        <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl sm:min-h-[34rem]">
          <Media
            src={images.teamMampong}
            alt="The ROLAC team together with their CEO at Mampong"
            width={1200}
            height={900}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Real people. Shared progress.</p>
            <p className="mt-2 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">Building confidence and connection, one community at a time.</p>
          </div>
          <div className="absolute right-5 top-5 rounded-full border-white/30 bg-slate-950/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:right-7 sm:top-7">
            Accra, Ghana <span className="mx-1 text-amber-300">·</span> West Africa
          </div>
        </div>
      </div>
    </section>
  );
}
