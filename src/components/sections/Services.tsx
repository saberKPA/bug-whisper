import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {t.services.items.map((item) => (
            <div
              key={item.code}
              className="border-b border-r border-border p-6 md:p-7 hover:bg-foreground hover:text-background transition-colors group"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-background/70">
                {item.code}
              </div>
              <h3 className="mt-3 font-mono font-bold uppercase text-[20px] tracking-tight">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-muted-foreground group-hover:text-background/85">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
