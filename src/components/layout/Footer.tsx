import { business, nav, ctaText } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";

const footerLinks = [
  ...nav.filter((item) => item.label !== "About"),
  { label: "Contact", href: "#quote" },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-cream-100/50 pt-16 pb-10">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-navy-700">
              {business.region}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-800 hover:text-accent-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button as="a" href="#quote" variant="secondary" className="self-start">
            {ctaText.primary}
          </Button>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-900/10 pt-6 text-xs text-navy-700/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>
            {business.name} is a fictional business created as a website
            design demo.
          </p>
        </div>
      </Container>
    </footer>
  );
}
