import { services, servicesDisclaimer } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import { ArrowRightIcon } from "../ui/icons";

const variants = ["rings", "grid", "contour", "canopy"] as const;
const tones = ["forest", "ink", "forest", "ink"] as const;

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="What We Do" title="Services">
            <p className="max-w-xl text-lg leading-relaxed text-ink-800/80">
              {servicesDisclaimer}
            </p>
          </SectionHeading>
        </RevealOnScroll>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <RevealOnScroll key={service.id}>
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                  <div
                    className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <PhotoPlaceholder
                      variant={variants[i]}
                      tone={tones[i]}
                      sublabel={`Replace with ${service.name.toLowerCase()} photography`}
                      className="aspect-[4/3] w-full sm:aspect-[16/9]"
                    />
                  </div>

                  <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="font-mono text-4xl font-medium text-ink-950/15 sm:text-5xl">
                      {service.number}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-ink-950 sm:text-3xl">
                      {service.name}
                    </h3>
                    <p className="mt-4 max-w-sm leading-relaxed text-ink-800/80">
                      {service.description}
                    </p>
                    <a
                      href="#estimate"
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-rust-600 hover:text-rust-500"
                    >
                      Get An Estimate
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
