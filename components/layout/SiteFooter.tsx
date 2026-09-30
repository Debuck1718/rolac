import Link from "next/link";

const footerLinks = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Services", "/services"],
  ["Opportunities", "/opportunities"],
  ["Partnerships", "/partnerships"],
  ["Culture", "/culture"],
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid min-w-0 max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-12">
        <div>
          <p className="text-xl font-bold tracking-[0.2em]">ROLAC</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Connecting Ghana and the Francophone world through education,
            language, mobility, and opportunity.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Explore
          </h2>
          <nav
            aria-label="Footer navigation"
            className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-slate-300"
          >
            {footerLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <address className="not-italic text-sm leading-7 text-slate-300">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Contact
          </h2>
          <p className="mt-4">
            Rosa&apos;s Language Centre
            <br />
            Post office box 583
            <br />
            Art Center, Accra
          </p>
          <p className="mt-3">
            <a href="tel:+233244654806" className="hover:text-white">
              +233 (0) 244 654 806
            </a>{" "}
            <span className="text-slate-500">Call / WhatsApp</span>
            <br />
            <a href="https://wa.me/2250594708432" className="hover:text-white">
              +225 05 94 70 8432
            </a>{" "}
            <span className="text-slate-500">WhatsApp</span>
            <br />
            <a href="mailto:rolac4all@gmail.com" className="hover:text-white">
              rolac4all@gmail.com
            </a>
          </p>
        </address>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400 sm:px-10">
        © {new Date().getFullYear()} ROLAC. Education without borders.
      </div>
    </footer>
  );
}
