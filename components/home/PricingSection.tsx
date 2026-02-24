const verifyIcon = "http://localhost:3845/assets/cbbf637afed69bbc0723e264919db10d1b73aeeb.svg";
const separatorLight = "http://localhost:3845/assets/aab84f89d1c8bc6e849b9fd8243a023e416af538.svg";
const separatorDark = "http://localhost:3845/assets/cff7597fa0bd45a0732c43c8f574afab8b46d180.svg";

function VerificationRow({ text, dark = false, hidden = false }: { text: string; dark?: boolean; hidden?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${hidden ? "opacity-0" : ""}`}>
      <img alt="" aria-hidden="true" className="h-5 w-5" src={verifyIcon} />
      <p className={`text-sm leading-5 ${dark ? "text-white" : "text-[#434760]"}`}>{text}</p>
    </div>
  );
}

function FeaturesDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex w-full items-center justify-center gap-[11px]">
      <div className="min-w-0 flex-1">
        <img alt="" aria-hidden="true" className="block h-px w-full" src={dark ? separatorDark : separatorLight} />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.6px] text-[#9ca3af]">FEATURES</p>
      <div className="min-w-0 flex-1">
        <img alt="" aria-hidden="true" className="block h-px w-full" src={dark ? separatorDark : separatorLight} />
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto flex w-full max-w-[1064px] flex-col items-center justify-center gap-9 px-4 py-10 md:px-6 lg:px-0">
      <div className="flex w-full flex-col items-center gap-[26px]">
        <h2 className="w-full max-w-[852px] text-center text-[42px] font-semibold leading-[1.05] text-[#4a4e69] md:text-[60px] md:leading-[60px]">
          Simple Pricing. No Surprises.
        </h2>
        <p className="w-full max-w-[604px] text-center text-xl leading-7 text-[#434760]">
          Start free. Upgrade when you&apos;re ready to unlock the full power of
          financial clarity.
        </p>
      </div>

      <div className="flex w-[246px] items-center rounded-full border border-[#e2e8f0] bg-[#f9fafb] p-1">
        <div className="flex h-9 flex-1 items-center justify-center rounded-full bg-[#ededf0] px-3 shadow-[0_4px_6px_rgba(74,78,105,0.1),0_2px_4px_rgba(74,78,105,0.05)]">
          <p className="text-sm font-semibold leading-5 text-[#4a4e69]">Monthly</p>
        </div>
        <div className="flex h-9 items-center justify-center px-3">
          <p className="text-sm font-semibold leading-5 text-[#9ca3af]">
            Yearly <span className="text-[#9ca3af]">&bull;</span>{" "}
            <span className="text-[#3b82f6]">Save 17%</span>
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center">
        <div className="flex h-[430px] flex-1 items-center self-stretch">
          <article className="flex h-full min-w-0 flex-1 flex-col gap-5 overflow-hidden rounded-[12px] border border-[#c7ccd7] bg-[#f6f7fb] p-5 shadow-[0_12px_26px_-18px_rgba(74,78,105,0.45)]">
            <div className="flex flex-col gap-[14px]">
              <div className="inline-flex h-6 items-center justify-center rounded-full border border-[#d1d5db] bg-white px-[10px] py-[2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#6b7280]">FREE</p>
              </div>
              <div className="flex items-end gap-[10px]">
                <p className="font-['Inter',sans-serif] text-[44px] font-semibold leading-none text-[#59607b]">&euro;0</p>
                <p className="text-[18px] leading-7 text-[#5f677f]">/mo</p>
              </div>
              <p className="text-sm leading-5 text-[#6b7280]">
                Ideal for individuals getting started with our service. No credit
                card required.
              </p>
            </div>

            <button className="h-11 w-full rounded-full border border-[#9fa6bb] bg-[#f6f7fb] px-6 text-base font-semibold leading-6 text-[#4a4e69]">
              Start for Free
            </button>

            <FeaturesDivider />

            <div className="flex flex-col gap-2">
              <VerificationRow text="5 Invoices per month" />
              <VerificationRow text="Basic dashboard" />
              <VerificationRow text="Email support" />
              <VerificationRow text="Limited Access Features" hidden />
              <VerificationRow text="Limited Access Features" hidden />
            </div>
          </article>
        </div>

        <div className="flex h-[430px] flex-1 items-center self-stretch">
          <article className="relative flex h-full min-w-0 flex-1 flex-col gap-5 overflow-hidden rounded-[12px] border border-[#b9bece] bg-[#f6f7fb] p-5 shadow-[0_12px_26px_-18px_rgba(74,78,105,0.45)]">
            <div className="absolute left-1/2 top-0 flex h-6 -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-[#ff9f89] px-[10px] py-[2px]">
              <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#fafafa]">MOST POPULAR</p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <div className="inline-flex h-6 items-center justify-center rounded-full bg-[#9ca3af] px-[10px] py-[2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#fafafa]">STARTER</p>
              </div>
              <div className="flex items-end gap-[10px]">
                <p className="font-['Inter',sans-serif] text-[44px] font-semibold leading-none text-[#4a4e69]">&euro;12</p>
                <p className="text-[18px] leading-7 text-[#64748b]">/mo</p>
              </div>
              <p className="text-sm leading-5 text-[#6b7280]">For the professional doer</p>
