import markWhite from "@/assets/saber-mark-white.svg";
import markBlack from "@/assets/saber-mark-black.svg";
import lockupWhite from "@/assets/saber-lockup-white.svg";
import lockupBlack from "@/assets/saber-lockup-black.svg";
import { cn } from "@/lib/utils";

type Variant = "mark" | "lockup";
type Tone = "auto" | "light" | "dark"; // light = on light bg (black ink), dark = on dark bg (white ink)

interface Props {
  variant?: Variant;
  tone?: Tone;
  size?: number;
  className?: string;
}

/**
 * SABER logo. `tone="auto"` follows current theme via CSS.
 * `tone="light"` always renders the black-ink version (use on light backgrounds).
 * `tone="dark"` always renders the white-ink version (use on dark backgrounds).
 */
export function SaberLogo({ variant = "mark", tone = "auto", size = 28, className }: Props) {
  const isLockup = variant === "lockup";
  // Lockup is wider than tall (~3.4:1 for full lockup, mark ~0.78:1)
  const aspect = isLockup ? 3.4 : 0.78;
  const height = size;
  const width = Math.round(size * aspect);

  if (tone !== "auto") {
    const src = isLockup
      ? tone === "dark"
        ? lockupWhite
        : lockupBlack
      : tone === "dark"
        ? markWhite
        : markBlack;
    return <img src={src} alt="SABER" width={width} height={height} className={className} />;
  }

  const lightSrc = isLockup ? lockupBlack : markBlack;
  const darkSrc = isLockup ? lockupWhite : markWhite;

  return (
    <span
      className={cn("inline-block relative", className)}
      style={{ width, height, lineHeight: 0 }}
    >
      <img
        src={lightSrc}
        alt="SABER"
        width={width}
        height={height}
        className="absolute inset-0 dark:hidden"
      />
      <img
        src={darkSrc}
        alt=""
        aria-hidden
        width={width}
        height={height}
        className="absolute inset-0 hidden dark:block"
      />
    </span>
  );
}
