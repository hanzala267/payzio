import { faqs } from "./content";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#f8f0fb] py-14">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-center text-sm text-[#72789d]">
          Everything you need to know
        </p>
        <div className="mt-8 rounded-3xl border border-white/70 bg-white/60 p-4 backdrop-blur md:p-6">
          {faqs.map((faq) => (
            <details
              key={faq}
              className="group border-b border-[#e7e8f4] py-3 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                {faq}
                <span className="text-lg text-[#6d7498] transition group-open:rotate-45">
                  +
                </span>
              </summary>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
