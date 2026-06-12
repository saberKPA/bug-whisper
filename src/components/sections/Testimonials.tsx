import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";
import healthBagAsset from "@/assets/the-health-bag-new.png.asset.json";
import kicosAsset from "@/assets/kicos-v3.svg.asset.json";

type LogoItem = { name: string; logoUrl?: string };

const LOGOS: LogoItem[] = [
  { name: "THE HEALTH BAG", logoUrl: healthBagAsset.url },
  { name: "KICOS", logoUrl: kicosAsset.url },
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
                className={`h-full max-h-20 object-contain opacity-80 hover:opacity-100 transition-opacity ${logo.name === "KICOS" ? "invert dark:invert-0" : ""}`}
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
