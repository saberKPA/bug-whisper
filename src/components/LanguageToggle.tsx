import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={cn("flex items-center border border-border font-mono text-[11px] uppercase tracking-wider", className)}>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "px-2 py-1 transition-colors",
          lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={cn(
          "px-2 py-1 transition-colors border-l border-border",
          lang === "es" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
    </div>
  );
}
