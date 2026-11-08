import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";
import { Media } from "@/components/ui/Media";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description: "Education, language, mobility, and culture services from ROLAC.",
};

const services = [
  { title: "Education", body: "Open doors to learning across languages, classrooms, and borders.", items: ["Professional English", "French programs", "Student exchange", "Study opportunities"], image: images.labStJoseph, alt: "A ROLAC language laboratory installed at St Joseph's Seminary" },
  { title: "Language", body: "Make communication clearer, more confident, and more connected.", items: ["Translation", "Interpretation", "French laboratories"], image: images.labPrempeh, alt: "A ROLAC language laboratory installed at Prempeh College" },
  { title: "Mobility", body: "Turn international ambition into practical, supported movement.", items: ["Teacher recruitment", "Student placement", "Accommodation"], image: images.labMampong, alt: "A ROLAC language laboratory installed at Mampong Municipal" },
  { title: "Culture", body: "Create shared experiences that make language and identity come alive.", items: ["National Oral French Quiz", "Bilingual Reality Show", "Events and engagement"], image: images.quizLaunchSpeech, alt: "The launch of the National Oral French Quiz at the British Council" },
];

export default function ServicesPage() {
  return (
    <SectionPage
      eyebrow="Services"
      title="Support for meaningful progress"
      description="One connected ecosystem for education, language, mobility, and culture — built to turn ambitious goals into practical, people-centered results."
      heroImage={images.labAmansieWest}
      heroAlt="A ROLAC language laboratory installation at Amansie West District"
    >
      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 pb-16 sm:grid-cols-2 sm:px-10 sm:pb-24">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Media
                  src={service.image}
                  alt={service.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                  video={{ controls: true, preload: "metadata" }}
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
