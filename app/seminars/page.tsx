import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Seminars",
  description:
    "Build practical business relationships between Francophone and Anglophone companies with ROLAC.",
};

const benefits = [
  [
    "Find the right language",
    "Move beyond translation and understand how your prospective partner thinks, communicates, and makes decisions.",
  ],
  [
    "Meet across borders",
    "Create structured spaces where Ghanaian and Francophone business owners can exchange ideas and build trust.",
  ],
  [
    "Turn ideas into action",
    "Leave with practical next steps: a shared pilot, a market visit, a referral, or a partnership conversation.",
  ],
];

const audiences = [
  "Business owners and founders",
  "Exporters and importers",
  "Education and training providers",
  "Trade associations and chambers",
  "Investors and development partners",
  "Bilingual professionals and advisors",
];

export default function SeminarsPage() {
  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image
          src="/photos/program-card.jpg"
          alt="Business and community participants at a ROLAC event"
          width={800}
          height={600}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Business seminars
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,8vw,4.5rem)] font-semibold leading-[1.03] tracking-tight">
            Where Francophone and Anglophone business ideas meet.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ROLAC creates practical seminar spaces for business owners to
            understand one another, discover opportunities, and build
            relationships that can cross language and market borders.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
          >
            Discuss a seminar
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              The opportunity
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,6vw,3rem)] font-semibold leading-tight tracking-tight text-slate-950">
              Good business relationships begin with understanding.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A shared language helps, but a shared context matters just as
              much. Our seminars connect Anglophone and Francophone companies
              around the real questions: who should we meet, what can we build,
              and what does a good first step look like?
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map(([title, body], index) => (
              <article
                key={title}
                className="rounded-2xl border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-sky-600">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Who it is for
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,5vw,2.5rem)] font-semibold tracking-tight text-slate-950">
              Bring the right people to the room.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              We can shape a seminar for a closed group, an industry gathering,
              or a wider cross-border business event.
            </p>
            <Link
              href="/partnerships"
              className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Explore partnerships
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-2xl border-slate-200 bg-white p-5 text-sm font-semibold text-slate-800"
              >
                <span className="mr-3 text-sky-600">✦</span>
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
          <div className="rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-12">
            <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-semibold tracking-tight text-white">
              Have a business idea worth connecting?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Tell us your sector, audience, and goal. We will help you explore
              the right format for a ROLAC seminar.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
