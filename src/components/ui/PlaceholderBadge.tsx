export default function PlaceholderBadge({
  label = "Illustration — representative example",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-navy-950/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream-50 backdrop-blur-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
      {label}
    </span>
  );
}
