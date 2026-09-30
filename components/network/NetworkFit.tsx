"use client";

import Image from "next/image";
import { useState } from "react";

const networkRoles = [
  {
    icon: "🎓",
    title: "Student",
    action: "Explore opportunities",
    description:
      "Find exchange programs, study pathways, language learning, and the support to take your next step.",
    href: "/opportunities",
    accent: "bg-amber-300",
  },
  {
    icon: "👨🏾‍🏫",
    title: "Teacher",
    action: "Find teaching opportunities",
    description:
      "Discover teaching placements, recruitment support, and practical guidance for working across borders.",
    href: "/opportunities",
    accent: "bg-sky-300",
  },
  {
    icon: "🏫",
    title: "Institution",
    action: "Connect with ROLAC",
    description:
      "Build meaningful education, language, and mobility programs with a trusted regional partner.",
    href: "/partnerships",
    accent: "bg-indigo-300",
  },
  {
    icon: "🤝",
    title: "Partner",
    action: "Work with ROLAC",
    description:
      "Bring your expertise, network, or resources to initiatives connecting Ghana and Francophone Africa.",
    href: "/contact",
    accent: "bg-rose-300",
  },
];

export function NetworkFit() {
  const [activeRole, setActiveRole] = useState(0);
  const role = networkRoles[activeRole];

  return (
    <section
      aria-labelledby="network-fit-title"
      className="bg-white py-20 motion-safe:animate-fade-in sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Find your place
          </p>
          <h2
            id="network-fit-title"
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
          >
            Where do you fit into the ROLAC network?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose a path to see how ROLAC can help you move forward.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {networkRoles.map((item, index) => {
              const isActive = activeRole === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveRole(index)}
                  onMouseEnter={() => setActiveRole(index)}
                  className={`group relative min-h-52 overflow-hidden rounded-[1.75rem] border p-5 text-left transition duration-300 motion-safe:animate-slide-up sm:min-h-64 sm:p-7 ${
                    isActive
                      ? "border-slate-950 bg-slate-950 text-white shadow-xl"
                      : "border-slate-200 bg-slate-50 text-slate-950 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${item.accent} opacity-80 transition duration-500 group-hover:scale-125`}
                  />
                  <span className="relative text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="relative mt-8 block text-sm font-bold uppercase tracking-[0.2em]">
                    {item.title}
                  </span>
                  <span
                    className={`relative mt-5 block text-lg font-medium ${isActive ? "text-slate-200" : "text-slate-600"}`}
                  >
                    {item.action}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex min-h-64 flex-col justify-between rounded-[1.75rem] bg-slate-950 p-8 text-white sm:p-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Your pathway
              </span>
              <p className="mt-6 text-3xl font-semibold tracking-tight">
                {role.title}
              </p>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
                {role.description}
              </p>
            </div>
            <a
              href={role.href}
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              {role.action} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.75rem] sm:mt-8">
          <Image
            src="/photos/program-wide.jpg"
            alt="Members of the ROLAC community programme"
            width={1600}
            height={900}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      </div>
    </section>
  );
}
