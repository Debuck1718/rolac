"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Opportunities", "/opportunities"],
  ["Services", "/services"],
  ["Culture", "/culture"],
  ["Partnerships", "/partnerships"],
  ["Contact", "/contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/favicon.ico" alt="ROLAC logo" width={42} height={42} className="h-10 w-10 rounded-full object-cover" priority />
          <span className="text-lg font-bold tracking-[0.2em] text-slate-950">ROLAC</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">{label}</Link>
          ))}
          <Link href="/contact" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">Get started</Link>
        </nav>
        <button type="button" className="rounded-lg border-slate-300 px-3 py-2 text-sm font-semibold text-slate-950 lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-slate-200 px-6 py-3 sm:px-10 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-0">{label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
