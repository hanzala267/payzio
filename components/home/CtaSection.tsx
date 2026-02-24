export function CtaSection() {
  return (
    <section className="bg-[#b7bde0] px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/45 bg-white/75 px-6 py-10 text-center shadow-[0_12px_40px_rgba(60,69,110,0.18)] backdrop-blur">
        <h2 className="text-3xl font-semibold tracking-tight">
          Your Next Invoice Could Be Paid 2x Faster.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#66709a]">
          Join founders using Payzio to reduce late payments and gain control.
        </p>
        <button className="mt-6 rounded-full bg-[#ff8f79] px-6 py-2.5 text-sm font-semibold text-white">
          Get Started
        </button>
      </div>
    </section>
  );
}
