import { services, type ServiceId } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import {
  HouseIcon,
  DrivewayIcon,
  DeckIcon,
  ConcreteIcon,
} from "../ui/icons";
import type { ComponentType, SVGProps } from "react";

const icons: Record<ServiceId, ComponentType<SVGProps<SVGSVGElement>>> = {
  "house-washing": HouseIcon,
  "driveway-cleaning": DrivewayIcon,
  "deck-patio-cleaning": DeckIcon,
  "concrete-cleaning": ConcreteIcon,
};

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="What We Do"
            title="Exterior cleaning, done with care."
          >
            <p className="max-w-xl text-lg leading-relaxed text-navy-700">
              Four focused services, each approached with the technique and
              pressure that surface actually calls for.
            </p>
          </SectionHeading>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {services.map((service, i) => {
            const Icon = icons[service.id];
            return (
              <RevealOnScroll key={service.id} delay={i * 80} className={`col-span-1 ${spans[i]}`}>
                <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-navy-900/10 bg-cream-100/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-cream-50 hover:shadow-[0_24px_48px_-28px_rgba(15,28,43,0.35)] sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-950 text-cream-50 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-navy-950">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-950 sm:text-2xl">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-navy-700">
                      {service.description}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
