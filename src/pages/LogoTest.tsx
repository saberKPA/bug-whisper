import kicosAsset from "@/assets/kicos-v3.svg.asset.json";

export default function LogoTest() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border px-6 ="5 py-4 font-mono text-sm uppercase tracking-widest">
        Logo Visibility Test
      </header>

      <div className="flex-1 grid grid-cols-2 divide-x divide-border">
        {/* Light mode panel */}
        <div className="bg-white text-black p-12 flex flex-col items-center justify-center gap-6">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Light Mode
          </span>
          <div className="h-20 flex items-center justify-center">
            <img
              src={kicosAsset.url}
              alt="Kicos logo"
              className="h-full max-h-20 object-contain invert"
            />
          </div>
          <p className="font-mono text-xs text-neutral-400 text-center max-w-xs">
            The logo should be visible (dark) against white.
          </p>
        </div>

        {/* Dark mode panel */}
        <div className="bg-[#0A0A0B] text-white p-12 flex flex-col items-center justify-center gap-6">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Dark Mode
          </span>
          <div className="h-20 flex items-center justify-center">
            <img
              src={kicosAsset.url}
              alt="Kicos logo"
              className="h-full max-h-20 object-contain invert-0"
            />
          </div>
          <p className="font-mono text-xs text-neutral-500 text-center max-w-xs">
            The logo should be visible (light) against black.
          </p>
        </div>
      </div>
    </div>
  );
}
