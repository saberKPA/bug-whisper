import { useEffect, useRef } from "react";

/**
 * Animated scattered dot/starry grid with a flowing wave that
 * brightens and lifts dots as it sweeps across the canvas.
 */
export function StarryDots({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Dot = { x: number; y: number; r: number; tw: number; phase: number };
    let dots: Dot[] = [];

    const getColor = () => {
      // Read foreground HSL from CSS var to support light/dark themes
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--foreground")
        .trim();
      return v || "0 0% 100%";
    };
    let color = getColor();

    const buildDots = () => {
      dots = [];
      // Base grid spacing — denser on big screens
      const spacing = width < 640 ? 26 : width < 1024 ? 32 : 38;
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Scatter — jitter each point off the strict grid
          const jx = (Math.random() - 0.5) * spacing * 0.7;
          const jy = (Math.random() - 0.5) * spacing * 0.7;
          // Skip ~18% of points for a starry, irregular feel
          if (Math.random() < 0.18) continue;
          dots.push({
            x: i * spacing + jx,
            y: j * spacing + jy,
            r: Math.random() < 0.08 ? 1.6 : 0.9, // a few brighter "stars"
            tw: 0.3 + Math.random() * 0.7, // base brightness
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      color = getColor();
      buildDots();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      color = getColor();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    const start = performance.now();

    const render = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      // Flowing diagonal wave parameters
      const angle = Math.PI / 5; // ~36deg
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const speed = 60; // px/sec
      const waveLen = Math.max(width, height) * 0.55;
      const offset = (t * speed) % waveLen;

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k];
        // Project dot onto wave axis
        const proj = d.x * cosA + d.y * sinA;
        const local = ((proj - offset) % waveLen + waveLen) % waveLen;
        // Smooth pulse: brightest near the wave crest
        const wave = Math.cos((local / waveLen) * Math.PI * 2) * 0.5 + 0.5;
        // Subtle individual twinkle
        const tw = 0.5 + 0.5 * Math.sin(t * 1.4 + d.phase);

        const alpha = Math.min(1, d.tw * (0.18 + wave * 0.55) * (0.7 + tw * 0.5));
        const r = d.r * (1 + wave * 0.6);

        ctx.beginPath();
        ctx.fillStyle = `hsla(${color} / ${alpha.toFixed(3)})`;
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
    />
  );
}
