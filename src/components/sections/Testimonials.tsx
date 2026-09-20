import { demoTestimonials } from "../../config/site";
import Container from "../ui/Container";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <RevealOnScroll className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-navy-950 sm:text-4xl">
            Trusted by Buffalo homeowners
          </h2>
          <span className="rounded-full border border-navy-900/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-700">
            Demo testimonials — fictional examples for portfolio purposes
          </span>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {demoTestimonials.map((quote, i) => (
            <RevealOnScroll
              key={i}
              delay={i * 90}
              className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-dashed border-navy-900/20 bg-cream-100/50 p-8"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-accent-500/60" aria-hidden="true">
                <path
                  d="M0 22V13.2C0 5.9 4.4 1.1 11 0v4.5c-3.3.9-5.1 3.4-5.1 6.6h5.1V22H0Zm16 0V13.2c0-7.3 4.4-12.1 11-13.2v4.5c-3.3.9-5.1 3.4-5.1 6.6H27V22H16Z"
                  fill="currentColor"
                />
              </svg>
              <p className="leading-relaxed text-navy-800 italic">"{quote}"</p>
              <p className="text-xs font-medium uppercase tracking-wide text-navy-700/60">
                Fictional example — not a real customer
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
