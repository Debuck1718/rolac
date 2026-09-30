import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationForm } from "@/components/apply/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Download the ROLAC registration form and submit your application online.",
};

export default function ApplyPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Applications
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,8vw,4rem)] font-semibold leading-[1.05] tracking-tight">
            Take your next step with ROLAC.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Download the registration form, complete it, and upload it with your
            application. Our team will review your details and contact you about
            the next step.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
          <aside className="rounded-3xl border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Before you apply
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              Three simple steps
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                [
                  "01",
                  "Download",
                  "Save the ROLAC registration form to your device.",
                ],
                [
                  "02",
                  "Complete",
                  "Fill in your details clearly and save the completed file.",
                ],
                [
                  "03",
                  "Upload",
                  "Submit the form with your contact details below.",
                ],
              ].map(([number, title, body]) => (
                <li key={number} className="flex gap-4">
                  <span className="text-sm font-semibold text-sky-600">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href="/application-form.html"
              download
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Download registration form
            </a>
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              The form opens in your browser and can be printed or saved as a
              PDF.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-slate-950"
            >
              Need help? Contact ROLAC →
            </Link>
          </aside>

          <ApplicationForm />
        </div>
      </section>
    </main>
  );
}
