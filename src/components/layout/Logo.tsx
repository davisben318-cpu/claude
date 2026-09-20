import { business } from "../../config/site";

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const textColor = tone === "dark" ? "text-ink-950" : "text-paper-50";

  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-wide ${textColor}`}
    >
      <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" rx="10" className="fill-ink-950" />
        <circle cx="32" cy="32" r="21" fill="none" className="stroke-paper-50" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="14" fill="none" className="stroke-paper-50" strokeWidth="2.5" opacity="0.7" />
        <circle cx="32" cy="32" r="7" fill="none" className="stroke-rust-500" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="2" className="fill-rust-500" />
      </svg>
      {business.wordmark}
    </a>
  );
}
