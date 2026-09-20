import { ctaText, business } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-paper-50 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(38,64,47,0.5), transparent 45%), radial-gradient(circle at 85% 80%, rgba(184,92,46,0.12), transparent 40%)",
        }}
      />
      <Container className="relative">
        <RevealOnScroll className="mx-auto flex max-w-2xl flex-col items-center gap-7 text-center">
          <h2 className="font-display text-[2.2rem] font-bold uppercase leading-[1.02] tracking-tight sm:text-[3.1rem]">
            Have A Tree Project?
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-paper-50/75">
            Tell us what you're dealing with and take the first step toward
            an estimate.
          </p>

          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Button as="a" href="#estimate">
              {ctaText.finalPrimary}
            </Button>

            <div className="flex flex-col items-center gap-1.5">
              <span className="inline-flex items-center justify-center border border-paper-50/20 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-paper-50/50">
                {ctaText.finalSecondary}
              </span>
              <span className="font-mono text-[11px] text-paper-50/40">
                {business.phonePlaceholder}
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
