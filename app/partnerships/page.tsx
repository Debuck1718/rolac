import type { Metadata } from "next";
import { SectionPage } from "@/components/ui/SectionPage";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Rosa's Language Centre (ROLAC) to build education, language, and mobility programmes across Ghana and Francophone Africa.",
};

const partnershipTypes = [
  {
    icon: "🎓",
    title: "Schools & universities",
    body: "Exchange, curriculum, and language programmes that benefit students and staff on both sides.",
    items: ["Student exchange agreements", "Joint language courses", "Teacher secondments", "Shared cultural programmes"],
  },
  {
    icon: "💼",
    title: "Employers & recruiters",
    body: "Reach confident, bilingual talent who already understand the language and the region.",
    items: ["Recruitment drives", "CV and interview clinics", "Internships and placements", "Bilingual candidate matching"],
  },
  {
    icon: "🌍",
    title: "NGOs & development partners",
    body: "Scale regional education initiatives with an established delivery partner on the ground.",
    items: ["Programme co-design", "Grants and funding", "Impact reporting", "Regional coordination"],
  },
  {
    icon: "📣",
    title: "Media, sponsors & venues",
    body: "Bring ROLAC events to a wider audience and help them reach more learners.",
    items: ["Event sponsorship", "Broadcast partnership", "Venue provision", "Content collaboration"],
  },
];

const benefits = [
  {
    title: "A trusted local partner",
    body: "Established in Art Center, Accra, with direct access to students, teachers, and schools across the region.",
  },
  {
    title: "Bilingual by default",
    body: "Work with a team that operates fluently in English and French, and understands both education systems.",
  },
  {
    title: "Visible, real outcomes",
    body: "From the National Oral French Quiz to student placements, our programmes produce results we can show you.",
  },
];

const steps = [
  { step: "01", title: "Get in touch", body: "Tell us what you want to achieve and which region you want to reach." },
  { step: "02", title: "Shape the plan", body: "We co-design the programme — scope, timeline, responsibilities, and outcomes." },
  { step: "03", title: "Deliver together", body: "We run it, report on it, and grow it with you." },
];

export default function PartnershipsPage() {
  return (
    <SectionPage
      eyebrow="Partnerships"
      title="Stronger together"
      description="Partner with Rosa's Language Centre to build education, language, and mobility programmes that create shared value and lasting change across Ghana and Francophone Africa."
      heroImage="/photos/program-card.jpg"
      heroAlt="Members of the ROLAC community at a programme event"
    >
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-16 sm:px-10 sm:pb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Why partner with us</p>
          <h2 className="mt-4 max-w-3xl text-[clamp(1.75rem,6vw,3rem)] font-semibold leading-tight tracking-tight text-slate-950">What you gain by working with ROLAC</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-lg">✦</span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-16 sm:px-10 sm:pb-24">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tight text-slate-950">We partner with</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {partnershipTypes.map((item) => (
              <article key={item.title} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-950 hover:shadow-xl sm:p-7">
                <span aria-hidden="true" className="text-3xl">{item.icon}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {item.items.map((entry) => (
                    <li key={entry} className="flex gap-2.5 text-sm text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {entry}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">How it works</p>
          <h2 className="mt-4 text-[clamp(1.75rem,6vw,2.5rem)] font-semibold tracking-tight text-slate-950">Three simple steps</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((item) => (
              <li key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-sky-600">Step {item.step}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SectionPage>
  );
}
