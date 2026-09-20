import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  children?: ReactNode;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const eyebrowTone = tone === "dark" ? "text-accent-600" : "text-accent-400";
  const titleTone = tone === "dark" ? "text-navy-950" : "text-cream-50";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <span
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowTone}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[2.25rem] leading-[1.08] font-bold tracking-tight sm:text-[2.75rem] lg:text-[3.25rem] ${titleTone}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
