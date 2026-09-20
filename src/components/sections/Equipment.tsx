import { equipmentCopy } from "../../config/site";
import Container from "../ui/Container";
import RevealOnScroll from "../ui/RevealOnScroll";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";

export default function Equipment() {
  return (
    <section className="bg-ink-950 text-paper-50">
      <RevealOnScroll>
        <PhotoPlaceholder
          variant="rig"
          tone="ink"
          label="DEMO IMAGE"
          sublabel="Approved equipment photography goes here"
          className="aspect-[16/9] w-full sm:aspect-[21/9]"
        />
      </RevealOnScroll>

      <Container className="py-20 sm:py-28">
        <RevealOnScroll>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-rust-400">
            {equipmentCopy.eyebrow}
          </span>
          <h2 className="mt-5 max-w-4xl font-display text-[2.4rem] font-bold uppercase leading-[0.98] tracking-tight sm:text-[3.4rem] lg:text-[4.4rem]">
            {equipmentCopy.headline}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper-50/75">
            {equipmentCopy.body}
          </p>
          <p className="mt-5 max-w-xl font-mono text-xs leading-relaxed text-paper-50/45">
            {equipmentCopy.disclaimer}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
