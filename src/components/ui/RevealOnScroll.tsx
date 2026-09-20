import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`${inView ? "animate-fade-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
