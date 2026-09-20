import { useEffect, useState } from "react";
import { ctaText } from "../../config/site";
import Button from "../ui/Button";

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
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-cream-50/95 p-3 backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button as="a" href="#quote" className="w-full">
        {ctaText.primary}
      </Button>
    </div>
  );
}
