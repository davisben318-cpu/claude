import { reviews } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="What People Say" title="Reviews">
            <p className="max-w-xl text-lg leading-relaxed text-ink-800/80">
              Real Google reviews, shown as written.
            </p>
          </SectionHeading>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {reviews.map((review, i) => (
            <RevealOnScroll
              key={review.author}
              delay={i * 80}
              className="flex h-full flex-col justify-between gap-8 border border-ink-950/15 p-8 sm:p-10"
            >
              <div>
                <span className="font-mono text-4xl font-medium text-ink-950/15 sm:text-5xl">
                  {review.number}
                </span>
                <p className="mt-5 leading-relaxed text-ink-800/90">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink-950">
                  {review.author}
                </p>
                <p className="mt-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-ink-700/50">
                  Google Review
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
