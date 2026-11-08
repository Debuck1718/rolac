import Link from "next/link";
import type { ReactNode } from "react";
import { Media } from "@/components/ui/Media";

type SectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional hero media (photo or video). When set, the header becomes a dark media hero. */
  heroImage?: string;
  heroAlt?: string;
  children?: ReactNode;
};

export function SectionPage({
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  children,
}: SectionPageProps) {
  const hasImage = Boolean(heroImage);

  return (
    <main className="flex-1">
      <section className={hasImage ? "bg-slate-950" : "bg-white"}>
        <div
          className={
            hasImage
              ? "mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12"
              : "mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24"
          }
        >
          <div>
            <p
              className={`eyebrow motion-safe:animate-slide-up ${
                hasImage ? "!text-amber-300" : ""
              }`}
            >
              {eyebrow}
            </p>
            <h1
              className={`motion-safe:animate-slide-up mt-5 text-[clamp(2.25rem,7vw,4rem)] font-semibold leading-[1.05] tracking-tight ${
                hasImage ? "text-white" : "text-slate-950"
              }`}
            >
              {title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-lg leading-8 ${
                hasImage ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {description}
            </p>
            {hasImage ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="btn btn-light">
                  Get in touch
                </Link>
                <Link href="/services" className="btn btn-outline-light">
                  Explore services
                </Link>
              </div>
            ) : null}
          </div>

          {heroImage ? (
            <div className="media-frame motion-safe:animate-fade-in">
              <Media
                src={heroImage}
                alt={heroAlt ?? ""}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full max-h-[26rem] w-full object-cover sm:max-h-[34rem]"
                video={{ controls: true, muted: true, preload: "metadata" }}
              />
            </div>
          ) : null}
        </div>
      </section>

      {children}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-16">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-semibold tracking-tight text-slate-950">
            Ready to take the next step?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Talk to us about programs, placements, or partnerships.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn btn-primary">
              Contact ROLAC
            </Link>
            <a
              href="mailto:rolac4all@gmail.com"
              className="btn btn-outline bg-white"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

type DetailCardProps = {
  title: string;
  items: string[];
  body?: string;
  icon?: string;
};

export function DetailCard({ title, items, body, icon }: DetailCardProps) {
  return (
    <article className="card card-hover p-6">
      {icon ? (
        <span aria-hidden="true" className="text-2xl">
          {icon}
        </span>
      ) : null}
      <h2
        className={`text-lg font-semibold tracking-tight text-slate-950 ${icon ? "mt-4" : ""}`}
      >
        {title}
      </h2>
      {body ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
      ) : null}
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-700">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
