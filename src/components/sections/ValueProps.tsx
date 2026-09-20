import { principles } from "../../config/site";
import Container from "../ui/Container";
import RevealOnScroll from "../ui/RevealOnScroll";
import { CompassIcon, ClockIcon, ShieldIcon, ChecklistIcon } from "../ui/icons";

const icons = [CompassIcon, ClockIcon, ShieldIcon, ChecklistIcon];

export default function ValueProps() {
  return (
    <section id="about" className="scroll-mt-20 bg-navy-950 py-24 text-cream-50 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <RevealOnScroll className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-400">
              A Homeowner-First Approach
            </span>
            <h2 className="mt-5 font-display text-[2.1rem] font-extrabold uppercase leading-[1.08] tracking-tight sm:text-[2.6rem]">
              Clear expectations.
              <br />
              Careful work.
              <br />
              <span className="text-accent-400">A cleaner home.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {principles.map((principle, i) => {
              const Icon = icons[i];
              return (
                <RevealOnScroll key={principle.title} delay={i * 80}>
                  <div className="flex flex-col gap-4">
                    <Icon className="h-8 w-8 text-accent-400" />
                    <h3 className="font-display text-lg font-bold">
                      {principle.title}
                    </h3>
                    <p className="leading-relaxed text-cream-50/70">
                      {principle.description}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
