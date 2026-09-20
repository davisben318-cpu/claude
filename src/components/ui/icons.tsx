import type { SVGProps } from "react";

/**
 * Small set of custom line icons, drawn to a shared 1.5px stroke so the
 * service grid doesn't rely on a generic icon library. currentColor lets
 * each usage control its own color via className.
 */

const shared: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function HouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M8 19.5 20 9l12 10.5" />
      <path d="M11 17v13.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V17" />
      <path d="M17 31.5v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8" />
      <path d="M4 20.5 20 6l4 3.6" />
    </svg>
  );
}

export function DrivewayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M13 6h14l4 28H9z" />
      <path d="M20 12v3.5M20 19v3.5M20 26v3.5" />
    </svg>
  );
}

export function DeckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M5 14h30" />
      <path d="M5 20h30" />
      <path d="M5 26h30" />
      <path d="M11 14v20M20 14v20M29 14v20" />
    </svg>
  );
}

export function ConcreteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <rect x="6" y="9" width="28" height="22" rx="1.5" />
      <path d="M6 20h28M17 9v22M27 9v9.5M11 20v11M32 20v11" />
    </svg>
  );
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="20" cy="20" r="15" />
      <path d="M25.5 14.5 21.8 21.8l-7.3 3.7 3.7-7.3z" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="20" cy="20" r="15" />
      <path d="M20 11v9.5l6.5 4" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M20 6 33 10.5v9c0 8.5-5.5 13.9-13 15-7.5-1.1-13-6.5-13-15v-9z" />
    </svg>
  );
}

export function ChecklistIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <rect x="9" y="5" width="22" height="30" rx="2" />
      <path d="m14 15 2.5 2.5L21 13" />
      <path d="M24 15h5" />
      <path d="m14 24 2.5 2.5L21 22" />
      <path d="M24 24h5" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
