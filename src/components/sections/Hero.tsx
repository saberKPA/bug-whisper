import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { StackedLogo } from "../StackedLogo";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative border-b border-border overflow-hidden">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Scan lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--foreground)) 0 1px, transparent 1px 4px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-32">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-foreground" />
          {t.hero.eyebrow}
        </div>

        <h1 className="mt-6 font-mono font-bold tracking-tight text-foreground text-[44px] leading-[1.02] sm:text-[64px] md:text-[88px] lg:text-[112px] uppercase">
          {t.hero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-[17px] md:text-[19px] leading-[1.55] text-muted-foreground">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-foreground/85 transition-colors"
          >
            {t.hero.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] hover:border-foreground transition-colors"
          >
            {t.hero.secondary}
          </a>
        </div>

        {/* Big watermark logo */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06]">
          <StackedLogo size={420} />
        </div>
      </div>
    </section>
  );
}
