import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rosa's Language Centre — phone, WhatsApp, email, and visit us in Accra.",
};

const channels = [
  { label: "Call or WhatsApp (Ghana)", value: "+233 (0) 244 654 806", href: "tel:+233244654806", hint: "Monday to Friday, 9:00 – 18:00 GMT" },
  { label: "WhatsApp (Francophone Africa)", value: "+225 05 94 70 8432", href: "https://wa.me/2250594708432", hint: "Fastest way to reach our coordination team" },
  { label: "Email", value: "rolac4all@gmail.com", href: "mailto:rolac4all@gmail.com", hint: "We reply within two working days" },
];

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Contact</p>
        <h1 className="mt-5 text-[clamp(2.25rem,8vw,4rem)] font-semibold leading-tight tracking-tight text-slate-950">Let&apos;s start a conversation</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Have a question, an idea, or an opportunity to share? We would love to hear from you.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <ContactForm />

          <div className="grid gap-4 sm:gap-5">
            {channels.map((channel) => (
              <a key={channel.label} href={channel.href} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-950 hover:shadow-lg sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{channel.label}</p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">{channel.value}</p>
                <p className="mt-2 text-sm text-slate-600">{channel.hint}</p>
              </a>
            ))}
            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Visit us</p>
              <address className="mt-3 not-italic leading-7 text-slate-200">
                Rosa&apos;s Language Centre<br />Post office box 583<br />Art Center, Accra<br />Ghana
              </address>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
