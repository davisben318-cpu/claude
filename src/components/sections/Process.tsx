import { process } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";

export default function Process() {
  return (
    <section id="approach" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="Our Approach" title="A Simple Process" />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <PhotoPlaceholder
              variant="contour"
              tone="forest"
              sublabel="Replace with an in-progress or site-assessment photograph"
              className="aspect-[4/3] w-full lg:aspect-[3/4]"
            />
          </RevealOnScroll>

          <div className="flex flex-col lg:col-span-7">
            {process.map((step, i) => (
              <RevealOnScroll
                key={step.number}
                delay={i * 80}
                className={`flex gap-6 py-7 ${i !== 0 ? "border-t border-ink-950/10" : ""}`}
              >
                <span className="font-mono text-3xl font-medium text-ink-950/20 sm:text-4xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-ink-800/80">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
