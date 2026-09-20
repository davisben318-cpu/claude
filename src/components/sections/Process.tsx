import { process } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple process from quote to clean."
            align="center"
          />
        </RevealOnScroll>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          <div
            aria-hidden="true"
            className="absolute top-6 left-0 right-0 hidden h-px bg-navy-900/10 sm:block"
          />

          {process.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 100} className="relative flex flex-col items-start gap-5">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-navy-900/15 bg-cream-50 font-display text-sm font-bold text-navy-950">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-xs leading-relaxed text-navy-700">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
