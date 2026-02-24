import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="mb-10 flex flex-wrap items-center justify-between gap-3">
      <Link
        href="/"
        className="inline-flex h-12 items-center gap-2 rounded-full border border-[#dbe1f3] bg-white/90 px-4 text-[#454b6d] shadow-[0_6px_24px_rgba(80,96,170,0.08)]"
      >
        <Image
          src="/Payzio.ai%20Logo%20icon.png"
          alt="Payzio.ai Logo icon"
          width={24}
          height={24}
          priority
        />
        <Image src="/Payzio.ai.png" alt="Payzio.ai" width={77} height={18} priority />
      </Link>

      <nav className="order-3 flex w-full items-center justify-center gap-10 rounded-full border border-[#dbe1f3] bg-white/90 px-8 py-3 text-sm text-[#7b819d] shadow-[0_6px_24px_rgba(80,96,170,0.08)] sm:order-none sm:w-auto sm:gap-12">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">About</a>
      </nav>

      <div className="inline-flex items-center gap-1 rounded-full border border-[#dbe1f3] bg-white/90 p-1 shadow-[0_8px_26px_rgba(235,140,122,0.25)]">
        <button className="rounded-full px-5 py-2 text-sm font-medium text-[#737a96]">
          Sign In
        </button>
        <button className="rounded-full bg-[#f59884] px-6 py-2 text-sm font-semibold text-[#414867] shadow-[0_10px_25px_rgba(245,152,132,0.45)]">
          Start for Free
        </button>
      </div>
    </header>
  );
}
