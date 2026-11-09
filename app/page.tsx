import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { ImpactStories } from "@/components/impact/ImpactStories";
import { GhanaFrancophone } from "@/components/identity/GhanaFrancophone";
import { ServiceEcosystem } from "@/components/services/ServiceEcosystem";
import { NetworkFit } from "@/components/network/NetworkFit";
import { Culture } from "@/components/culture/Culture";
import { Media } from "@/components/ui/Media";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero />
      <GhanaFrancophone />
      <ImpactStories />
      <ServiceEcosystem />
      <NetworkFit />
      <Culture />
      <section className="bg-[#f7f5ef]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12">
          <div>
            <p className="eyebrow">Your next conversation starts here</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,6vw,3rem)] font-semibold leading-tight tracking-tight text-slate-950">
              Ready to connect Ghana and the Francophone world?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you are a learner, educator, school or partner, tell us what
              you hope to achieve. We&apos;ll help you find a thoughtful next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn btn-primary">Start a conversation <span aria-hidden="true">→</span></Link>
              <Link href="/opportunities" className="btn btn-outline bg-white">See opportunities</Link>
            </div>
          </div>
          <div className="media-frame relative min-h-72">
            <Media
              src={images.interpretationManhyia}
              alt="ROLAC providing interpretation services at Manhyia Palace in Kumasi"
              width={1000}
              height={750}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-5 pt-16 text-sm font-medium text-white sm:px-7 sm:pb-7">
              Language creates understanding. Understanding brings us closer.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*
  Previous homepage draft retained below for reference.
  The homepage now uses the dedicated hero architecture.
  This legacy draft is intentionally commented out.

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24 sm:px-10">
      <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        ROLAC
      </p>
      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
        Building meaningful connections and opportunities.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
        Welcome to ROLAC. Explore our programs, services, culture, and
        partnerships as we create lasting impact together.
      </p>
      <nav aria-label="Explore ROLAC" className="mt-12 flex-wrap gap-3">
        {sections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="rounded-full border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            {section.label}
          </a>
        ))}
        {
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </nav>
    </main>
  );
}
*/
