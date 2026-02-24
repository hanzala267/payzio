const heroBgVectorA =
  "http://localhost:3845/assets/c1c9f4826f9750faa783343f2dac000f7c8454b7.svg";
const heroBgVectorB =
  "http://localhost:3845/assets/ada0971c3d7fb47726c05bc10a614147aeb7218c.svg";
const heroOverviewIcon =
  "http://localhost:3845/assets/1bd8a2f33f5d6d9172a1dbf53064adef120074df.svg";
const heroChartLeft =
  "http://localhost:3845/assets/e846c93d60a9872950446e4ff930cbdedf2ef1f8.svg";
const heroChartRight =
  "http://localhost:3845/assets/966c514d3437c874b64ad34143920f85537cd2c3.svg";
const heroChartDot =
  "http://localhost:3845/assets/3bca443c408c79f21bcb62f070df2c4d43c70db9.svg";
const heroArrowVector =
  "http://localhost:3845/assets/d29276f452d166ff5a5dd3787ffbbb88227b0426.svg";
const heroSeparatorVector =
  "http://localhost:3845/assets/6f0bd246d9d5206d4470a3c241d263313a0320ed.svg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 md:py-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url(/Pattern.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      <div className="relative flex flex-col gap-12 lg:min-h-[643px] lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full flex-col items-start gap-10 pt-10 lg:w-[608px] lg:pt-28">
          <h1
            className="font-semibold leading-[0.98] text-[#434760]"
            style={{ fontSize: "clamp(56px,7vw,96px)" }}
          >
            Your Bank Account is Lying to You.
          </h1>

          <p className="max-w-[554px] text-xl leading-7 text-[#434760]">
            You see &euro;12,000. The Tax Office sees &euro;9,000. Payzio is the
            Financial Cortex that tells you exactly what is{" "}
            <span className="font-semibold text-[#15803d]">Safe-to-Spend</span>
            <span className="text-[#6b7280]">.</span>
          </p>

          <div className="flex w-full max-w-[608px] flex-wrap items-start gap-4">
            <button className="flex h-14 w-[205px] items-center justify-center gap-2 rounded-full bg-[#ff9f89] px-7 py-2 text-base font-semibold text-[#434760] shadow-[0_10px_15px_rgba(255,159,137,0.3),0_4px_6px_rgba(255,159,137,0.3)] transition-opacity hover:opacity-95">
              <span>Start for Free</span>
              <img alt="" aria-hidden="true" className="h-5 w-5" src={heroArrowVector} />
            </button>
            <button className="h-14 rounded-full border-2 border-[#acaeba] bg-transparent px-7 py-2 text-base font-semibold text-[#4a4e69] transition-colors hover:bg-white/30">
              See Pricing
            </button>
          </div>

          <div className="flex w-full max-w-[608px] items-center gap-8">
            <div className="w-[140px]">
              <p className="text-[24px] font-bold leading-8 text-[#434760]">2,400+</p>
              <p className="text-sm leading-5 text-[#6b7280]">Independent Experts</p>
            </div>
            <img alt="" aria-hidden="true" className="h-9 w-[2px]" src={heroSeparatorVector} />
            <div className="w-[140px]">
              <p className="text-[24px] font-bold leading-8 text-[#434760]">&euro;12M+</p>
              <p className="text-sm leading-5 text-[#6b7280]">Invoiced Monthly</p>
            </div>
            <img alt="" aria-hidden="true" className="h-9 w-[2px]" src={heroSeparatorVector} />
            <div className="w-[140px]">
              <p className="text-[24px] font-bold leading-8 text-[#434760]">18</p>
              <p className="text-sm leading-5 text-[#6b7280]">Countries</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[583px] w-full max-w-[729px] lg:mx-0 lg:mt-[60px] lg:w-[729px]">
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-10 h-[668px] w-[863px] max-w-none"
            src={heroBgVectorA}
          />
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[34px] top-[39px] h-[495px] w-[680px] max-w-none"
            src={heroBgVectorB}
          />

          <div className="absolute left-[58px] top-[75px] h-[424px] w-[628px] overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-[rgba(255,255,255,0.7)] p-6 shadow-[0_8px_30px_rgba(59,63,91,0.08)] backdrop-blur-[42.5px]">
            <div className="flex h-[237px] items-start justify-between">
              <div className="w-[324px]">
                <div className="flex h-10 items-start gap-3">
                  <img alt="" className="h-5 w-5" src={heroOverviewIcon} />
                  <p className="pt-[2px] text-xs font-semibold uppercase tracking-[0.6px] text-[#434760]">
                    Financial Overview
                  </p>
                </div>
                <p className="mt-[23px] text-[72px] font-bold leading-[72px] text-[#434760]">
                  &euro;6,500
                </p>
