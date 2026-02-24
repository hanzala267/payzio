import { featureCards } from "./content";

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="mb-8 max-w-lg">
        <h2 className="text-3xl font-semibold tracking-tight">
          Stop Guessing. Start Knowing.
        </h2>
        <p className="mt-2 text-sm text-[#636d95]">
          Financial clarity designed for independent teams.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-[#e0e5f8] bg-white p-5 shadow-[0_8px_24px_rgba(92,102,149,0.08)]"
          >
            <h3 className="text-sm font-semibold">{item}</h3>
            <p className="mt-1 text-xs text-[#65709b]">
              Track your business cashflow with meaningful signals.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
