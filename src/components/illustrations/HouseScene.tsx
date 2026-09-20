import type { SVGProps } from "react";

/**
 * A custom, brand-palette-only illustration of a home exterior, used in
 * place of stock photography (this is a fictional demo business with no
 * real project photos). Deliberately duotone/navy + cream + accent only,
 * so it reads as art direction rather than a generic clipart icon.
 *
 * variant="dirty" scatters grime blotches and roof streaking.
 * variant="clean" adds faint diagonal "just washed" sheen lines.
 */
export default function HouseScene({
  variant = "clean",
  className = "",
  ...rest
}: { variant?: "clean" | "dirty"; className?: string } & SVGProps<SVGSVGElement>) {
  const dirty = variant === "dirty";

  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      role="img"
      aria-hidden="true"
      {...rest}
    >
      {/* sky */}
      <rect width="800" height="600" className="fill-cream-100" />

      {/* backdrop shrubs */}
      <ellipse cx="120" cy="470" rx="95" ry="60" className="fill-navy-700/15" />
      <ellipse cx="700" cy="480" rx="110" ry="65" className="fill-navy-700/15" />

      {/* driveway */}
      <path d="M180 600 L300 430 L520 430 L680 600 Z" className="fill-navy-800/90" />
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={330 + i * 55}
          y1="430"
          x2={230 + i * 90}
          y2="600"
          className="stroke-cream-100/10"
          strokeWidth={2}
        />
      ))}

      {/* house body */}
      <rect x="230" y="260" width="340" height="230" className="fill-cream-200" />
      {/* siding lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1="230"
          x2="570"
          y1={280 + i * 21}
          y2={280 + i * 21}
          className="stroke-navy-900/[0.05]"
          strokeWidth={1.5}
        />
      ))}

      {/* roof */}
      <path d="M200 270 L400 120 L600 270 Z" className="fill-navy-900" />
      <path d="M200 270 L400 120 L600 270 L600 285 L400 138 L200 285 Z" className="fill-navy-950" />

      {/* chimney */}
      <rect x="500" y="160" width="34" height="70" className="fill-navy-900" />

      {/* porch roof */}
      <path d="M280 345 L400 300 L520 345 L520 360 L280 360 Z" className="fill-navy-800" />
      <rect x="315" y="360" width="10" height="90" className="fill-navy-700" />
      <rect x="475" y="360" width="10" height="90" className="fill-navy-700" />

      {/* door */}
      <rect x="372" y="380" width="56" height="110" rx="2" className="fill-navy-800" />
      <circle cx="415" cy="438" r="3" className="fill-accent-400" />

      {/* windows */}
      <g>
        <rect x="262" y="380" width="70" height="60" rx="2" className="fill-navy-800" />
        <rect x="267" y="385" width="60" height="50" className="fill-accent-400/35" />
        <line x1="297" y1="385" x2="297" y2="435" className="stroke-navy-800" strokeWidth={2} />
        <line x1="267" y1="410" x2="327" y2="410" className="stroke-navy-800" strokeWidth={2} />
      </g>
      <g>
        <rect x="468" y="380" width="70" height="60" rx="2" className="fill-navy-800" />
        <rect x="473" y="385" width="60" height="50" className="fill-accent-400/35" />
        <line x1="503" y1="385" x2="503" y2="435" className="stroke-navy-800" strokeWidth={2} />
        <line x1="473" y1="410" x2="533" y2="410" className="stroke-navy-800" strokeWidth={2} />
      </g>

      {/* steps */}
      <rect x="360" y="490" width="80" height="12" className="fill-navy-700" />
      <rect x="350" y="502" width="100" height="12" className="fill-navy-700/80" />

      {dirty ? (
        <g>
          {/* roof streaking */}
          {[260, 320, 380, 440].map((x, i) => (
            <path
              key={i}
              d={`M${x} 145 q${i % 2 === 0 ? -6 : 6} 60 -2 120`}
              className="stroke-navy-600/40"
              strokeWidth={5}
              fill="none"
              strokeLinecap="round"
            />
          ))}
          {/* siding grime blotches */}
          {[
            [255, 460, 34],
            [300, 475, 26],
            [500, 465, 30],
            [545, 455, 22],
            [400, 470, 20],
          ].map(([cx, cy, r], i) => (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={r}
              ry={r * 0.55}
              className="fill-navy-600/25"
            />
          ))}
          {/* driveway grime */}
          <path d="M260 560 q120 30 260 0 l10 25 q-140 32 -280 0z" className="fill-navy-600/30" />
        </g>
      ) : (
        <g>
          {/* just-washed sheen */}
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1={260 + i * 90}
              y1="270"
              x2={220 + i * 90}
              y2="480"
              className="stroke-accent-400/25"
              strokeWidth={10}
              strokeLinecap="round"
            />
          ))}
        </g>
      )}
    </svg>
  );
}
