import Link from "next/link";
import { Media } from "@/components/ui/Media";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section
      className="bg-white motion-safe:animate-fade-in"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:gap-14 sm:px-10 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow motion-safe:animate-slide-up">Education</p>
          <h1
            id="hero-title"
            className="motion-safe:animate-slide-up mt-6 max-w-xl text-[clamp(2.75rem,11vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl"
          >
            Education
            <br />
            without
            <br />
            borders.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600 sm:text-xl">
            Connecting Ghana and the Francophone world through education, language,
            mobility and opportunity.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/opportunities" className="btn btn-primary">
              Explore opportunities
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Work with ROLAC
            </Link>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-sky-100 p-4 sm:min-h-[34rem] sm:p-8">
          <div className="motion-safe:animate-float absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-300/80" />
          <div className="motion-safe:animate-float-delayed absolute -bottom-20 -left-14 h-64 w-64 rounded-full bg-sky-300/80" />
          <div className="relative flex h-full min-h-[19rem] items-center justify-center overflow-hidden rounded-[1.5rem] border-white/70 bg-white/35 p-3 backdrop-blur-sm sm:min-h-[29rem] sm:p-5">
            <Media
              src={images.gtvInterview}
              alt="The ROLAC CEO interviewed by GTV during a laboratory installation in the Upper West Region, speaking about the importance of the work"
              width={800}
              height={1000}
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="h-full max-h-[26rem] w-auto rounded-[1.25rem] object-cover shadow-2xl sm:max-h-[36rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
