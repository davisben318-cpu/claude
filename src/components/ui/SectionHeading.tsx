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
  const eyebrowTone = tone === "dark" ? "text-rust-600" : "text-rust-400";
  const titleTone = tone === "dark" ? "text-ink-950" : "text-paper-50";

  return (
    <div className={`flex flex-col gap-5 ${alignClass}`}>
      <span
        className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${eyebrowTone}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[2.1rem] leading-[1.08] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.1rem] ${titleTone}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
