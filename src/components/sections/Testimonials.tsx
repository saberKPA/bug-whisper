import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";
// import thbAsset from "@/assets/thb.jpg";
import kicosAsset from "@/assets/kicos.svg";

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />

        {/* Client logos */}
        <div className="mt-10 mb-16 flex flex-wrap items-center justify-center gap-12 md:gap-24 py-8 border-y border-border">
          <img
            src={/thb.jpeg}
            alt="The Health Bag"
            className="h-16 md:h-20 w-auto object-contain grayscale opacity-80 mix-blend-multiply dark:mix-blend-screen dark:invert hover:opacity-100 transition-opacity"
          />
          <img
            src={kicosAsset}
            alt="Kicos"
            className="h-16 md:h-20 w-auto object-contain grayscale opacity-80 invert dark:invert-0 hover:opacity-100 transition-opacity"
          />
        </div>


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
