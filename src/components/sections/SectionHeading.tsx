export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 bg-foreground" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-mono font-bold uppercase tracking-tight text-foreground text-[32px] md:text-[48px] leading-[1.05] max-w-3xl">
        {title}
      </h2>
    </div>
  );
}
