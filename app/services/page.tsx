import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage } from "@/components/ui/SectionPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Education, language, mobility, and culture services from ROLAC.",
};

const services = [
  { title: "Education", body: "Open doors to learning across languages, classrooms, and borders.", items: ["Professional English", "French programs", "Student exchange", "Study opportunities"], image: "/photos/lectures-card.jpg", alt: "A ROLAC lecturer teaching a class" },
  { title: "Language", body: "Make communication clearer, more confident, and more connected.", items: ["Translation", "Interpretation", "French laboratories"], image: "/photos/students-card.jpg", alt: "Students practising language together" },
  { title: "Mobility", body: "Turn international ambition into practical, supported movement.", items: ["Teacher recruitment", "Student placement", "Accommodation"], image: "/photos/grads-card.jpg", alt: "ROLAC students celebrating a graduation" },
  { title: "Culture", body: "Create shared experiences that make language and identity come alive.", items: ["National Oral French Quiz", "Bilingual Reality Show", "Events and engagement"], image: "/photos/program-card.jpg", alt: "People gathered at a ROLAC community event" },
];

export default function ServicesPage() {
  return (
    <SectionPage
      eyebrow="Services"
      title="Support for meaningful progress"
      description="One connected ecosystem for education, language, mobility, and culture — built to turn ambitious goals into practical, people-centered results."
      heroImage="/photos/lectures-card.jpg"
      heroAlt="A ROLAC lecturer teaching a class"
    >
      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 pb-16 sm:grid-cols-2 sm:px-10 sm:pb-24">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold tracking-tight text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.body}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionPage>
  );
}
