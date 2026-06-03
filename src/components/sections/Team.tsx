import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "./SectionHeading";
import { SaberLogo } from "../SaberLogo";
import tommyImg from "@/assets/team-tommy.jpg";
import danielImg from "@/assets/team-daniel.svg";
import sebastianImg from "@/assets/team-sebastian.svg";

const memberImages: Record<string, string> = {
  "THOMAS KURI": tommyImg,
  "SEBASTIAN PERILLA": sebastianImg,
  "DANIEL KURI": danielImg,
};

export function Team() {
  const { t } = useLanguage();
  return (
    <section id="team" className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {t.team.members.map((m, i) => {
            const img = memberImages[m.name];
            return (
            <div key={i} className="border-b border-r border-border p-6">
              <div className="border border-border bg-muted/30 flex items-center justify-center mb-4 relative overflow-hidden w-full" style={{ aspectRatio: "900 / 1280" }}>
                {img ? (
                  <img src={img} alt={m.name} className="absolute left-0 top-0 w-full object-cover object-top bg-black" style={{ height: "104%" }} />
                ) : (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <SaberLogo variant="mark" size={64} />
                  </>
                )}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-mono font-bold uppercase text-[15px] tracking-tight">{m.name}</h3>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mt-1">
                {m.role}
              </div>
              <p className="mt-3 text-[13px] leading-[1.55] text-muted-foreground">{m.bio}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
