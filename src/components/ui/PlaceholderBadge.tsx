export default function PlaceholderBadge({
  label = "Demo Image",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-ink-950/75 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-paper-50 backdrop-blur-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-rust-400" aria-hidden="true" />
      {label}
    </span>
  );
}
