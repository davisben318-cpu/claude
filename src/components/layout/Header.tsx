import { useEffect, useState } from "react";
import { nav, ctaText, business } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "../ui/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? "bg-paper-50 border-b border-ink-950/12 shadow-[0_1px_0_0_rgba(20,18,15,0.04)]"
          : "bg-gradient-to-b from-ink-950/55 to-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <Logo tone={solid ? "dark" : "light"} />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-mono text-[12px] font-medium uppercase tracking-[0.1em] transition-colors ${
                  solid ? "text-ink-800 hover:text-rust-600" : "text-paper-50/85 hover:text-paper-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={business.phoneHref}
              className={`font-mono text-[12px] font-medium tracking-[0.04em] transition-colors ${
                solid ? "text-ink-800 hover:text-rust-600" : "text-paper-50/85 hover:text-paper-50"
              }`}
            >
              {business.phone}
            </a>
            <Button as="a" href="#estimate" variant={solid ? "primary" : "ghost"}>
              {ctaText.primary}
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${
              solid ? "text-ink-950" : "text-paper-50"
            }`}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink-950/10 bg-paper-50 transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-3 font-mono text-sm font-medium uppercase tracking-[0.08em] text-ink-900 hover:bg-ink-950/5"
              >
                {item.label}
              </a>
            ))}
            <Button as="a" href="#estimate" onClick={() => setMenuOpen(false)} className="mt-2 w-full">
              {ctaText.primary}
            </Button>
            <a
              href={business.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 font-mono text-sm font-medium text-ink-800"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
