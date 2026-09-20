import { useEffect, useState } from "react";
import { nav, ctaText } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "../ui/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-cream-50/90 shadow-[0_1px_0_0_rgba(15,28,43,0.08)] backdrop-blur-md"
          : "bg-cream-50/0"
      }`}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-navy-800 transition-colors hover:text-accent-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as="a" href="#quote">
              {ctaText.primary}
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-950 lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-900/10 bg-cream-50 transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-navy-900 hover:bg-navy-900/5"
              >
                {item.label}
              </a>
            ))}
            <Button as="a" href="#quote" onClick={() => setMenuOpen(false)} className="mt-2 w-full">
              {ctaText.primary}
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
