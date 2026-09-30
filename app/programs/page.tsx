import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage } from "@/components/ui/SectionPage";

export const metadata: Metadata = {
  title: "Programs",
  description: "Programs that help communities grow, connect, and create lasting impact.",
};

const programs = [
  {
    number: "01",
    audience: "For professionals and teams",
    title: "Professional English",
    body: "Confident workplace communication for individuals and teams.",
    items: ["Business communication", "Writing and presentation", "Exam preparation"],
    image: "/photos/lectures-card.jpg",
    alt: "A lecturer teaching a ROLAC class",
  },
  {
    number: "02",
    audience: "For learners at every level",
    title: "French Immersion",
    body: "Learn French with confidence for study, work, and travel.",
    items: ["Beginner to advanced levels", "Conversation labs", "Oral French practice"],
    image: "/photos/students-card.jpg",
    alt: "Students learning together in a ROLAC session",
  },
  {
    number: "03",
    audience: "For students ready to travel",
    title: "Student Exchange",
    body: "Time abroad that counts towards your growth.",
    items: ["Host institutions", "Application support", "Pre-departure preparation"],
    image: "/photos/grads-alt.jpg",
    alt: "ROLAC students celebrating graduation",
  },
  {
    number: "04",
    audience: "For French learners and schools",
    title: "National Oral French Quiz",
    body: "Our flagship annual competition celebrating spoken French.",
    items: ["Regional rounds", "National finals", "Prizes and recognition"],
    image: "/photos/program-alt.jpg",
    alt: "Participants at a ROLAC community event",
  },
  {
    number: "05",
    audience: "For performers and audiences",
    title: "Bilingual Reality Show",
    body: "Two languages. One stage.",
    items: ["Live events", "Public voting", "Talent discovery"],
    image: "/photos/program-alt.jpg",
    alt: "Contestants at a ROLAC bilingual event",
  },
  {
    number: "06",
    audience: "For qualified teachers",
    title: "Teacher Placement",
    body: "Find and prepare for teaching roles across borders.",
    items: ["Recruitment drives", "Interview preparation", "Relocation guidance"],
    image: "/photos/lectures-card.jpg",
    alt: "A ROLAC teacher leading a class",
  },
];

export default function ProgramsPage() {
  return (
    <SectionPage
      eyebrow="Programs"
      title="Ideas into action"
      description="Choose a pathway for learning, language, mobility, or culture. Every ROLAC program is designed to help you take a practical next step."
      heroImage="/photos/students-card.jpg"
      heroAlt="ROLAC students learning together"
    >
      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 pb-16 sm:grid-cols-2 sm:px-10 sm:pb-24">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.2em] text-sky-600">{program.number}</span>
                  <span className="text-right text-xs font-medium uppercase tracking-[0.12em] text-slate-500">{program.audience}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                  {program.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {program.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {program.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-sky-50">
        <div className="mx-auto grid max-w-5xl items-center gap-6 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Not sure where to begin?</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Tell us what you want to achieve.</h2>
            <p className="mt-3 max-w-2xl text-slate-600">We can help you choose the right program, pathway, or next step.</p>
          </div>
          <a href="/contact" className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-700">Talk to ROLAC</a>
        </div>
      </section>
    </SectionPage>
  );
}
