import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { GhanaFrancophone } from "@/components/identity/GhanaFrancophone";
import { ServiceEcosystem } from "@/components/services/ServiceEcosystem";
import { NetworkFit } from "@/components/network/NetworkFit";
import { Culture } from "@/components/culture/Culture";

export default function Home() {
  return (
    <>
      <Hero />
      <GhanaFrancophone />
      <ServiceEcosystem />
      <NetworkFit />
      <Culture />
      <section className="bg-sky-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-12">
          <div>
            <h2 className="max-w-2xl text-[clamp(1.75rem,6vw,3rem)] font-semibold leading-tight tracking-tight text-slate-950">
              Ready to connect Ghana and the Francophone world?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us what you are looking for and we will point you in the right
              direction.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-700">Contact ROLAC</Link>
              <Link href="/opportunities" className="rounded-full border border-slate-300 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-950">See opportunities</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/photos/students-portrait.jpg"
              alt="ROLAC students learning together"
              width={900}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
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
