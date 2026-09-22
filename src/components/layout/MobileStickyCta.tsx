import { useEffect, useState } from "react";
import { ctaText, business } from "../../config/site";
import Button from "../ui/Button";
import { PhoneIcon } from "../ui/icons";

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink-950/10 bg-paper-50/95 p-3 backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-stretch gap-2">
        <a
          href={business.phoneHref}
          aria-label={`Call ${business.phone}`}
          className="flex w-12 shrink-0 items-center justify-center border border-ink-950/20 text-ink-950"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <Button as="a" href="#estimate" className="flex-1">
          {ctaText.primary}
        </Button>
      </div>
    </div>
  );
}
