import { useId, type ReactNode } from "react";

type Variant = "rings" | "rig" | "contour" | "grid" | "canopy";
type Tone = "forest" | "ink" | "paper";

/**
 * Stands in for real photography, which this concept doesn't have rights
 * to use (no Tree Plucker photos were scraped or reused). Renders a
 * moody, textured, abstract panel — grain + duotone + linework — rather
 * than an illustrated scene, and is always clearly labeled as a
 * placeholder. Swap these out for approved photography first.
 */
export default function PhotoPlaceholder({
  variant = "rings",
  tone = "forest",
  label = "DEMO IMAGE",
  sublabel = "Replace with approved photography",
  badgePosition = "center",
  photo,
  className = "",
  children,
}: {
  variant?: Variant;
  tone?: Tone;
  label?: string;
  sublabel?: string;
  badgePosition?: "center" | "corner" | "none";
  /** Approved real photography. When set, renders the photo instead of the placeholder treatment. */
  photo?: { src: string; alt: string };
  className?: string;
  children?: ReactNode;
}) {
  const filterId = useId();

  const toneClasses: Record<Tone, string> = {
    forest: "bg-gradient-to-br from-forest-800 via-ink-900 to-ink-950",
    ink: "bg-gradient-to-br from-ink-900 via-ink-950 to-forest-900",
    paper: "bg-gradient-to-br from-bark-500 via-bark-700 to-ink-900",
  };

  if (photo) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${toneClasses[tone]} ${className}`}
      role="img"
      aria-label={`${label} — ${sublabel}`}
    >
      <svg className="absolute inset-0 h-0 w-0" aria-hidden="true">
        <defs>
          <filter id={`grain-${filterId}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.045 0" />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0"
        style={{ filter: `url(#grain-${filterId})` }}
        aria-hidden="true"
      />

      <Linework variant={variant} />

      {badgePosition === "center" && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center">
          <span className="rounded-full border border-paper-50/25 bg-ink-950/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-50 backdrop-blur-sm">
            {label}
          </span>
          <span className="max-w-[220px] px-4 text-[11px] leading-snug text-paper-50/55">
            {sublabel}
          </span>
        </div>
      )}

      {badgePosition === "corner" && (
        <div className="pointer-events-none absolute left-4 top-4 flex flex-col items-start gap-1 sm:left-5 sm:top-5">
          <span className="rounded-full border border-paper-50/25 bg-ink-950/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper-50 backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}

      {children}
    </div>
  );
}

function Linework({ variant }: { variant: Variant }) {
  const stroke = "rgba(245, 240, 230, 0.16)";
  const strokeStrong = "rgba(184, 92, 46, 0.4)";

  if (variant === "rings") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {[150, 115, 82, 52, 26].map((r, i) => (
          <circle key={r} cx="270" cy="150" r={r} fill="none" stroke={i === 4 ? strokeStrong : stroke} strokeWidth={i === 4 ? 2 : 1.25} />
        ))}
      </svg>
    );
  }

  if (variant === "rig") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <line x1="40" y1="380" x2="300" y2="40" stroke={stroke} strokeWidth="1.5" />
        {[80, 150, 220, 290].map((x, i) => (
          <line key={x} x1="300" y1="40" x2={x} y2="380" stroke={i === 2 ? strokeStrong : stroke} strokeWidth={i === 2 ? 2 : 1} />
        ))}
        <circle cx="300" cy="40" r="4" fill={strokeStrong} />
      </svg>
    );
  }

  if (variant === "contour") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {[60, 120, 180, 240, 300].map((y, i) => (
          <path
            key={y}
            d={`M0 ${y} Q 100 ${y - 30} 200 ${y} T 400 ${y}`}
            fill="none"
            stroke={i === 2 ? strokeStrong : stroke}
            strokeWidth={i === 2 ? 2 : 1.25}
          />
        ))}
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="400" stroke={stroke} strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="400" y2={i * 100} stroke={stroke} strokeWidth="1" />
        ))}
        <line x1="185" y1="200" x2="215" y2="200" stroke={strokeStrong} strokeWidth="2" />
        <line x1="200" y1="185" x2="200" y2="215" stroke={strokeStrong} strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M-20 120 Q80 60 180 110 T400 90" fill="none" stroke={stroke} strokeWidth="1.25" />
      <path d="M-20 180 Q100 130 220 175 T420 150" fill="none" stroke={stroke} strokeWidth="1.25" />
      <path d="M-20 250 Q90 200 210 245 T420 220" fill="none" stroke={strokeStrong} strokeWidth="1.75" />
    </svg>
  );
}
