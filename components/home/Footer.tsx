export function Footer() {
  return (
    <footer className="bg-[#ecf0fb] px-4 pb-10 pt-12 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#dde2f5] bg-white/70 p-6 shadow-[0_10px_32px_rgba(77,86,132,0.08)] backdrop-blur md:p-8">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-semibold">Payzio.ai</p>
            <p className="mt-2 max-w-xs text-xs text-[#68719a]">
              Financial visibility for modern teams.
            </p>
          </div>
          <div className="flex gap-8 text-xs text-[#596189]">
            <div className="space-y-2">
              <p className="font-semibold text-[#1f2441]">Product</p>
              <p>Pricing</p>
              <p>Features</p>
              <p>Integrations</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-[#1f2441]">Company</p>
              <p>About</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-[#1f2441]">Legal</p>
              <p>Privacy Policy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-[#e5e8f5] pt-4 text-xs text-[#6d7598] md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 Payzio. All rights reserved.</p>
          <p>Privacy Policy | Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
}
