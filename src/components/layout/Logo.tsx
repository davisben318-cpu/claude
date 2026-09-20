import { business } from "../../config/site";

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const textColor = tone === "dark" ? "text-navy-950" : "text-cream-50";

  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight ${textColor}`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="40" height="40" rx="9" className="fill-navy-950" />
        <path
          d="M6 21c2.5-3.7 5-3.7 7.5 0s5 3.7 7.5 0 5-3.7 7.5 0 5 3.7 7.5 0"
          fill="none"
          className="stroke-accent-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M6 27.5c2.5-3.7 5-3.7 7.5 0s5 3.7 7.5 0 5-3.7 7.5 0 5 3.7 7.5 0"
          fill="none"
          className="stroke-accent-400"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      {business.name}
    </a>
  );
}
