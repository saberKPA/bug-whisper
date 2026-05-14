import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";
import { SaberLogo } from "../SaberLogo";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <p className="text-[16px] md:text-[18px] leading-[1.65] text-muted-foreground max-w-xl">
            {t.about.body}
          </p>
        </div>
        <div className="relative aspect-square border border-border flex items-center justify-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <SaberLogo variant="mark" size={240} />
          <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            SABER · CORE
          </div>
        </div>
      </div>
    </section>
  );
}
