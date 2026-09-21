import { business, nav, ctaText, socialLinks, DISCLAIMER } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { PinIcon, PhoneIcon } from "../ui/icons";

const footerLinks = [
  ...nav.filter((item) => item.label !== "About"),
  { label: "Contact", href: "#estimate" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-paper-100/50 pt-16 pb-10">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-800/70">
              {business.region}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-rust-600"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-rust-600" />
                {business.phone}
              </a>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-800/70">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-rust-600" />
                {business.address}
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-800 hover:text-rust-600"
              >
                {item.label}
              </a>
            ))}
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-800 hover:text-rust-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button as="a" href="#estimate" variant="secondary" className="shrink-0 self-start whitespace-nowrap">
            {ctaText.primary}
          </Button>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-950/10 pt-6 text-xs text-ink-800/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.name} — concept only.</p>
          <p>{DISCLAIMER}</p>
        </div>
      </Container>
    </footer>
  );
}
