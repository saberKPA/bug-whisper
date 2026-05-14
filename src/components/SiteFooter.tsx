import { StackedLogo } from "./StackedLogo";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-10 grid gap-8 md:grid-cols-3 items-start">
        <div className="flex items-center gap-2.5">
          <StackedLogo size={20} />
          <div>
            <div className="font-mono font-bold uppercase tracking-[0.18em] text-[14px]">SABER</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mt-0.5">
              {t.footer.tagline}
            </div>
          </div>
        </div>

        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground md:text-center">
          © {year} SABER · {t.footer.rights}
        </div>

        <div className="flex md:justify-end items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
