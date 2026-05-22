import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";

const LOGO_NAMES = ["THE HEALTH BAG", "ACME/CO", "HELIX", "MERIDIAN", "VANTAGE", "OBSIDIAN"];

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />

        {/* Logo strip */}
        <div className="grid grid-cols-3 md:grid-cols-6 border-t border-l border-border mb-16">
          {LOGO_NAMES.map((name) => (
            <div
              key={name}
              className="border-b border-r border-border h-20 flex items-center justify-center font-mono font-bold tracking-[0.18em] text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {t.testimonials.quotes.map((q, i) => (
            <div key={i} className="bg-background p-7 flex flex-col">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Q/{String(i + 1).padStart(2, "0")}
              </div>
              <blockquote className="mt-4 text-[16px] leading-[1.55] text-foreground flex-1">
                "{q.quote}"
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
