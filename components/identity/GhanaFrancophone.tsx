const connectionPoints = ["Students", "Teachers", "Institutions"];

export function GhanaFrancophone() {
  return (
    <section
      aria-labelledby="identity-title"
      className="overflow-hidden bg-slate-950 py-20 text-white motion-safe:animate-fade-in sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:gap-16 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Ghana ↔ Francophone Africa
          </p>
          <h2
            id="identity-title"
            className="mt-6 max-w-lg text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            One region. Many possibilities.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            ROLAC connects Ghana to the Francophone world through the people and
            institutions creating new paths across borders.
          </p>
        </div>

        <div
          className="relative mx-auto flex min-h-[25rem] w-full max-w-2xl items-center justify-center overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04] p-4 motion-safe:animate-fade-in sm:min-h-[34rem] sm:p-6"
          aria-label="Animated connection map between Ghana and Francophone Africa"
        >
          <div className="absolute left-1/2 top-10 h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-amber-300 via-sky-400 to-indigo-400" />
          <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-sky-400/70" />
          <div className="absolute left-[11%] top-1/2 h-px w-[78%] -translate-x-1/2 origin-left -rotate-[22deg] bg-sky-400/20" />
          <div className="absolute left-[89%] top-1/2 h-px w-[78%] -translate-x-1/2 origin-right rotate-[22deg] bg-sky-400/20" />

          <div className="absolute left-1/2 top-7 -translate-x-1/2 text-center">
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Ghana
            </span>
            <span className="mx-auto mt-3 block h-3 w-3 animate-pulse rounded-full bg-amber-300 shadow-[0_0_24px_8px_rgba(252,211,77,0.35)]" />
          </div>

          <div className="relative z-10 grid w-full gap-10">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {connectionPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-2xl border-white/10 bg-slate-900/80 px-3 py-4 text-center shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/60 motion-safe:animate-slide-up sm:px-4 sm:py-5"
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  <span className="mx-auto mb-3 block h-2 w-2 animate-pulse rounded-full bg-sky-300" />
                  <span className="text-sm font-medium text-slate-100">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center">
            <span className="mx-auto mb-3 block h-3 w-3 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_24px_8px_rgba(129,140,248,0.3)]" />
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
              Francophone Africa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
