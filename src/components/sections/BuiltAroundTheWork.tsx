import { builtAroundCopy } from "../../config/site";
import Container from "../ui/Container";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function BuiltAroundTheWork() {
  return (
    <section id="about" className="scroll-mt-20 bg-forest-900 py-24 text-paper-50 sm:py-32">
      <Container>
        <RevealOnScroll className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-rust-400">
            {builtAroundCopy.eyebrow}
          </span>
          <h2 className="font-display text-[2.1rem] font-bold uppercase leading-[1.05] tracking-tight sm:text-[2.9rem]">
            {builtAroundCopy.headline}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-paper-50/75">
            {builtAroundCopy.body}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
