import type { Metadata } from "next";
import { SectionPage, DetailCard } from "@/components/ui/SectionPage";
import { Media } from "@/components/ui/Media";
import { Team } from "@/components/about/Team";
import { images } from "@/lib/images";

const mediaGallery = [
  { src: images.ghanaDevelopmentAward, alt: "Award presented to ROLAC as Champion of Francophone Education and Cultural Exchange for Development at the 3rd edition of the Ghana Development Awards" },
  { src: images.congratulationsFlyer, alt: "Congratulations flyer to Rosa's Language at the 3rd edition of the Ghana Development Conference and Awards 2026 at La Palm Royal Beach Hotel" },
  { src: images.educationMinister, alt: "Education Minister Dr Yaw Adutwum delivering his speech at the 2018 launch of the National French Oral Quiz" },
  { src: images.newspaperPublication, alt: "Newspaper publication of the National Oral French Quiz launch" },
  { src: images.teamAward, alt: "The ROLAC team receiving an award on stage" },
];

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
      heroImage={images.gtvInterview}
      heroAlt="The ROLAC CEO interviewed by GTV during a laboratory installation in the Upper West Region, speaking about the importance of the work"
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
            <div className="media-frame">
              <Media
                src={images.labSefwiVideo}
                alt="Video of a ROLAC laboratory installation at Sefwi Bode Roman school"
                sizes="(max-width: 640px) 100vw, 45vw"
                className="h-full w-full object-cover"
                video={{ controls: true, preload: "metadata" }}
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="eyebrow">Recognition</p>
          <h2 className="mt-4 text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tight text-slate-950">
            Moments that tell the story
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Awards, launches, and newspaper coverage — captured along the way.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {mediaGallery.map((item) => (
              <figure key={item.src} className="card overflow-hidden">
                <Media
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Team />
    </SectionPage>
  );
}
