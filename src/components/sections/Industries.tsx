import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  const { t } = useLanguage();
  return (
    <section id="industries" className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 bg-background" />
            {t.industries.eyebrow}
          </div>
          <h2 className="mt-4 font-mono font-bold uppercase tracking-tight text-[32px] md:text-[48px] leading-[1.05] max-w-3xl">
            {t.industries.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-background/20">
          {t.industries.items.map((item, i) => (
            <div key={item.name} className="border-b border-r border-background/20 p-6 md:p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/50">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-mono font-bold uppercase text-[20px] tracking-tight">{item.name}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-background/70">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
