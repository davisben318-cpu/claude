import { realWorkCopy } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { ArrowRightIcon } from "../ui/icons";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="Our Work" title="The Work">
            <p className="max-w-xl text-lg leading-relaxed text-ink-800/80">
              {realWorkCopy.intro}
            </p>
          </SectionHeading>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {realWorkCopy.links.map((link, i) => (
            <RevealOnScroll key={link.href} delay={i * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 border border-ink-950/15 p-8 transition-colors hover:border-rust-500/50 sm:p-10"
              >
                <div>
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-rust-600">
                    External Link
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink-950">
                    {link.label}
                  </h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-ink-800/80">
                    {link.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.1em] text-ink-950 group-hover:text-rust-600">
                  Visit
                  <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45" />
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
