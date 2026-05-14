import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-24 md:py-32">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-background" />
          {t.contact.eyebrow}
        </div>
        <h2 className="mt-4 font-mono font-bold uppercase tracking-tight text-[36px] md:text-[64px] leading-[1.02] max-w-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-[16px] md:text-[18px] leading-[1.55] text-background/70">
          {t.contact.body}
        </p>
        <a
          href={`mailto:${t.contact.cta}`}
          className="group mt-10 inline-flex items-center gap-3 border border-background/40 px-6 py-4 font-mono text-[14px] uppercase tracking-[0.14em] hover:bg-background hover:text-foreground transition-colors"
        >
          {t.contact.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
