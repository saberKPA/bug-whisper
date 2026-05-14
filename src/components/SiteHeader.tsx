import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SaberLogo } from "./SaberLogo";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#industries", label: t.nav.industries },
    { href: "#about", label: t.nav.about },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-all",
        scrolled && "border-foreground/20"
      )}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="SABER home">
          <SaberLogo variant="mark" size={26} />
          <span className="font-mono font-bold uppercase tracking-[0.18em] text-[15px]">SABER</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          className="md:hidden h-8 w-8 flex items-center justify-center border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
