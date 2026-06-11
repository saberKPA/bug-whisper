import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";

type LogoItem = { name: string; logoUrl?: string };

const LOGOS: LogoItem[] = [
  { name: "THE HEALTH BAG", logoUrl: "/__l5e/assets-v1/c9d6e75a-888d-447a-b29d-d949d50757b6/the-health-bag.png" },
  { name: "KICOS", logoUrl: "/__l5e/assets-v1/765f8130-7783-4ceb-948a-71acad05121a/kicos.svg" },
];

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="h-20 flex items-center justify-center"
            >
              <img
                src={logo.logoUrl}
                alt={logo.name}
                className="h-full max-h-20 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {t.testimonials.quotes.map((q, i) => (
            <div key={i} className="bg-background p-7 flex flex-col">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Q/{String(i + 1).padStart(2, "0")}
              </div>
              <blockquote className="mt-4 text-[16px] leading-[1.55] text-foreground flex-1 whitespace-pre-line">
                {q.quote}
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-mono font-bold uppercase text-[12px] tracking-[0.12em]">{q.author}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mt-0.5">
                  {q.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
