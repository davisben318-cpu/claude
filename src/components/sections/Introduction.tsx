import { introCopy } from "../../config/site";
import Container from "../ui/Container";
import RevealOnScroll from "../ui/RevealOnScroll";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";

export default function Introduction() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-rust-600">
              {introCopy.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-[2.1rem] font-bold uppercase leading-[1.05] tracking-tight text-ink-950 sm:text-[2.6rem]">
              {introCopy.headline}
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-800/80">
              {introCopy.body}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-7">
            <PhotoPlaceholder
              variant="canopy"
              tone="forest"
              sublabel="Replace with a large-tree or work-in-progress photograph"
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
            />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
