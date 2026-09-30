"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

const topics = [
  "Programs and courses",
  "Opportunities (study or teaching)",
  "Services",
  "Partnerships",
  "Events and culture",
  "Something else",
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p role="alert" className="text-sm text-red-600">
      {errors[0]}
    </p>
  );
}

const inputClass =
  "h-12 w-full min-w-0 rounded-xl border bg-white px-4 text-base font-normal text-slate-900 outline-none transition focus:border-slate-950";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8"
      >
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white"
        >
          ✓
        </span>
        <h2 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
          Message sent
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">{state.message}</p>
        <a
          href="/programs"
          className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-950"
        >
          Explore programs
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-slate-950">
        Send us a message
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Fill in the form below and we will get back to you. For anything urgent,
        WhatsApp is the quickest route.
      </p>

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
        >
          <p>{state.message}</p>
          {state.fallbackHref ? (
            <a
              href={state.fallbackHref}
              className="mt-3 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Open in my email app
            </a>
          ) : null}
        </div>
      ) : null}

      <form action={formAction} className="mt-6 grid min-w-0 gap-4">
        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Full name
            <input
              name="name"
              required
              autoComplete="name"
              aria-invalid={Boolean(state.errors?.name)}
              className={`${inputClass} ${
                state.errors?.name ? "border-red-400" : "border-slate-300"
              }`}
            />
            <FieldError errors={state.errors?.name} />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email or phone
            <input
              name="contact"
              required
              autoComplete="email"
              aria-invalid={Boolean(state.errors?.contact)}
              className={`${inputClass} ${
                state.errors?.contact ? "border-red-400" : "border-slate-300"
              }`}
            />
            <FieldError errors={state.errors?.contact} />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          I&apos;m interested in
          <select
            name="topic"
            className={`${inputClass} ${
              state.errors?.topic ? "border-red-400" : "border-slate-300"
            }`}
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <FieldError errors={state.errors?.topic} />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            required
            rows={5}
            aria-invalid={Boolean(state.errors?.message)}
            className={`w-full min-w-0 rounded-xl border bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-slate-950 ${
              state.errors?.message ? "border-red-400" : "border-slate-300"
            }`}
          />
          <FieldError errors={state.errors?.message} />
        </label>

        {/* Honeypot — hidden from humans, tempting to bots. */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
