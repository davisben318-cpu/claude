import { ctaText } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-cream-50 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(63,169,194,0.18), transparent 45%), radial-gradient(circle at 85% 75%, rgba(63,169,194,0.12), transparent 40%)",
        }}
      />
      <Container className="relative">
        <RevealOnScroll className="mx-auto flex max-w-2xl flex-col items-center gap-7 text-center">
          <h2 className="font-display text-[2.2rem] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-[3rem]">
            Let's bring back the clean.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-cream-50/75">
            Tell us a little about the exterior cleaning you need and take
            the first step toward a cleaner-looking home.
          </p>
          <Button as="a" href="#quote" className="mt-2">
            {ctaText.primary}
          </Button>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
