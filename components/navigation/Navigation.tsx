"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Opportunities", "/opportunities"],
  ["Seminars", "/seminars"],
  ["Services", "/services"],
  ["Culture", "/culture"],
  ["Partnerships", "/partnerships"],
  ["Contact", "/contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  // Close the drawer with the Escape key and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-12">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/favicon.ico"
            alt="ROLAC logo"
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-sky-100"
            priority
          />
          <span className="text-lg font-bold tracking-[0.2em] text-slate-950">
            ROLAC
            <span className="sr-only"> — Rosa&#39;s Language Centre</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm font-medium text-slate-600 transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-sky-500 after:transition-all hover:text-slate-950 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
          <Link href="/apply" className="btn btn-primary !px-5 !py-2.5">
            Apply now
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-slate-950 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true" className="flex flex-col gap-1">
            <span
              className={`block h-0.5 w-4 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 motion-safe:animate-drawer-in sm:px-6 xl:hidden"
        >
          <ul className="divide-y divide-slate-100">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between text-base font-medium text-slate-700 transition hover:text-slate-950"
                >
                  {label}
                  <span aria-hidden="true" className="text-slate-300">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5"
          >
            Apply now
          </Link>
        </nav>
      )}
    </header>
  );
}
