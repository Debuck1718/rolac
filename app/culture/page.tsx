import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage, DetailCard } from "@/components/ui/SectionPage";

export const metadata: Metadata = {
  title: "Culture",
  description:
    "The values, perspectives, and experiences that make the ROLAC community distinctive.",
};

const values = [
  {
    title: "Welcoming",
    body: "A newcomer should feel expected, not like a guest who needs rescuing. That is how language stops being a barrier.",
  },
  {
    title: "Respectful",
    body: "We take accents, dialects, and slow beginnings seriously. Nobody gets laughed at for trying.",
  },
  {
    title: "Encouraging",
    body: "Progress gets celebrated loudly. A first sentence in French deserves the same applause as a first degree.",
  },
  {
    title: "Creative",
    body: "Quizzes, stages, and showcases let language leave the classroom and meet people where they are.",
  },
];

const experiences = [
  {
    title: "National Oral French Quiz",
    tagline: "Speak. Compete. Connect.",
    image: "/photos/program-card.jpg",
    alt: "Contestants at a ROLAC bilingual event",
    items: ["Regional rounds", "National finals", "Open to learners everywhere"],
  },
  {
    title: "Bilingual Reality Show",
    tagline: "Two languages. One stage.",
    image: "/photos/grads-card.jpg",
    alt: "ROLAC learners in formal dress at a graduation ceremony",
    items: ["Live performances", "Community voting", "Emerging talent"],
  },
];

const waysToJoin = [
  "Partner as a venue",
  "Sponsor an event",
  "Volunteer with us",
  "Invite your students or staff",
];

export default function CulturePage() {
  return (
    <SectionPage
      eyebrow="Culture"
      title="A culture built around people"
      description="See the values, perspectives, and practices that make the ROLAC community distinctive."
      heroImage="/photos/students-portrait.jpg"
      heroAlt="ROLAC students taking part in a group activity"
    >
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            What we stand for
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,5vw,2.25rem)] font-semibold leading-tight tracking-tight text-slate-950">
            Language is a shared experience, not a competition we hide behind.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Every workshop, quiz, and placement starts with the same belief: that
            confidence grows when people are met with respect. These four values
            shape how we teach, how we compete, and how we welcome partners.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            On stage
          </p>
          <h2 className="mt-4 text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tight text-slate-950">
            Where language meets the stage
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Our public events turn the classroom into a shared room. Learners
            perform, compete, and connect — and audiences get an evening worth
            turning up for.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {experiences.map((experience) => (
              <figure
                key={experience.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={experience.image}
                    alt={experience.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {experience.tagline}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {experience.items.map((item) => (
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
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Get involved
          </p>
          <h2 className="mt-4 text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tight text-slate-950">
            Bring your audience to a ROLAC activity
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Whether you run a school, a company, or a media outlet, there is a
            way for you to be part of an event.
          </p>
          <div className="mt-8">
            <DetailCard
              title="Ways to join in"
              body="Pick whichever fits you, and we will take it from there."
              items={waysToJoin}
            />
          </div>
        </div>
      </section>
    </SectionPage>
  );
}
