import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionPage } from "@/components/ui/SectionPage";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Study, teach, and grow across Ghana and Francophone Africa.",
};

const steps = [
  { title: "Send us a message", body: "Tell us who you are and what you are looking for." },
  { title: "We review and match", body: "Our team connects you with the right program or placement." },
  { title: "Get ready", body: "We support you with preparation, paperwork, and logistics." },
];

export default function OpportunitiesPage() {
  return (
    <SectionPage
      eyebrow="Opportunities"
      title="Find your next opportunity"
      description="Study, teach, and grow across Ghana and Francophone Africa. Here is how to get started."
      heroImage="/photos/grads-card.jpg"
      heroAlt="ROLAC students celebrating graduation"
    >
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-16 sm:px-10 sm:pb-24">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image src="/photos/students-card.jpg" alt="Students in a ROLAC class" width={800} height={600} sizes="(max-width: 640px) 100vw, 50vw" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">Students</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Move, study, and open new horizons.</p>
                <ul className="mt-4 space-y-2">
                  {["Exchange Programs", "Study in Ghana", "International Opportunities", "Application Support"].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image src="/photos/lectures-card.jpg" alt="A ROLAC teacher leading a lesson" width={800} height={600} sizes="(max-width: 640px) 100vw, 50vw" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">Teachers</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Teach abroad with the right support.</p>
                <ul className="mt-4 space-y-2">
                  {["Teach in Francophone Africa", "Teacher Recruitment", "Accommodation", "Relocation Support"].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">How it works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-sky-600">Step {index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
            <Image src="/photos/grads-card.jpg" alt="ROLAC students celebrating graduation" width={800} height={1000} sizes="(max-width: 1024px) 100vw, 900px" className="h-64 w-full object-cover sm:h-80" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-700">Apply now</Link>
            <Link href="/programs" className="rounded-full border border-slate-300 px-6 py-4 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-slate-50">Browse programs</Link>
          </div>
        </div>
      </section>
    </SectionPage>
  );
}
