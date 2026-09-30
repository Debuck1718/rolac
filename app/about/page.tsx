import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage, DetailCard } from "@/components/ui/SectionPage";
import { Team } from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, our story, and the people shaping our shared direction.",
};

export default function AboutPage() {
  return (
    <SectionPage
      eyebrow="About ROLAC"
      title="Who we are"
      description="ROLAC is a Ghana-based language and education centre connecting Ghana to the Francophone world through learning, mobility, and shared opportunity."
      heroImage="/photos/lectures-alt.jpg"
      heroAlt="A ROLAC teacher leading a lesson"
    >
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-16 sm:px-10 sm:pb-20">
          <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tight text-slate-950">
                A centre built in Accra
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                From Rosa&apos;s Language Centre in Art Center, Accra, we welcome
                students, teachers, and institutions from across the region — and
                help them take their next step across borders.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/photos/students-card.jpg"
                alt="Participants at a ROLAC programme event"
                width={800}
                height={1000}
                sizes="(max-width: 640px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 sm:grid-cols-2 sm:px-10 sm:pb-24">
          <DetailCard title="Our mission" items={["Make language learning practical", "Create pathways across borders", "Grow local and regional talent"]} body="We help people and institutions communicate, study, and work across Ghana and Francophone Africa." />
          <DetailCard title="Our values" items={["People first", "Integrity", "Curiosity and learning", "Collaboration"]} body="Everything we do starts with the people we serve and the relationships we build." />
          <DetailCard title="Who we work with" items={["Students", "Teachers", "Schools and universities", "Employers and partners"]} />
          <DetailCard title="Where we operate" items={["Accra, Ghana", "Francophone West Africa", "Remote and hybrid programs"]} />
        </div>
      </section>
      <Team />
    </SectionPage>
  );
}
