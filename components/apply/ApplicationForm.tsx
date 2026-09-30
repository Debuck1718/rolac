"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitApplication, type ApplicationState } from "@/app/apply/actions";

const initialState: ApplicationState = { status: "idle" };
const types = ["Student", "Teacher", "Other applicant"];
const programmes = [
  "Professional English",
  "French Immersion",
  "Student Exchange",
  "Teacher Placement",
  "Other / I am not sure",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
    >
      {pending ? "Submitting…" : "Submit application"}
    </button>
  );
}

function ErrorText({ errors }: { errors?: string[] }) {
  return errors?.length ? (
    <p role="alert" className="text-sm text-red-600">
      {errors[0]}
    </p>
  ) : null;
}

const input =
  "h-12 w-full rounded-xl border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-slate-950";

export function ApplicationForm() {
  const [state, formAction] = useActionState(submitApplication, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border-emerald-200 bg-emerald-50 p-8"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white">
          ✓
        </span>
        <h2 className="mt-5 text-lg font-semibold text-slate-950">
          Application received
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">
        Submit your application
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Complete the form below and upload your filled registration form. PDF, DOC, and DOCX files up to 4 MB are accepted.
      </p>
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mt-4 rounded-xl border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
        >
          {state.message}
        </p>
      ) : null}
      <form
        action={formAction}
        encType="multipart/form-data"
        className="mt-6 grid gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Full name
            <input name="name" required className={input} />
            <ErrorText errors={state.errors?.name} />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email
            <input name="email" type="email" required className={input} />
            <ErrorText errors={state.errors?.email} />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone / WhatsApp
            <input name="phone" type="tel" required className={input} />
            <ErrorText errors={state.errors?.phone} />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            I am a
            <select name="applicationType" className={input}>
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <ErrorText errors={state.errors?.applicationType} />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Programme of interest
          <select name="programme" className={input}>
            {programmes.map((programme) => (
              <option key={programme}>{programme}</option>
            ))}
          </select>
          <ErrorText errors={state.errors?.programme} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Completed registration form
          <input
            name="document"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required
            className="w-full rounded-xl border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-slate-950 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
          <ErrorText errors={state.errors?.document} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Additional message{" "}
          <span className="font-normal text-slate-500">
            (optional)
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none focus:border-slate-950"
            />
          </span>
          <ErrorText errors={state.errors?.message} />
        </label>
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
