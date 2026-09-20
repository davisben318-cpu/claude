import { galleryItems, galleryDisclaimer } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import PlaceholderBadge from "../ui/PlaceholderBadge";

const spanClasses: Record<string, string> = {
  wide: "lg:col-span-8 lg:row-span-1 aspect-[16/9] lg:aspect-auto",
  tall: "lg:col-span-4 lg:row-span-2 aspect-[4/3] lg:aspect-auto",
  small: "lg:col-span-4 lg:row-span-1 aspect-[4/3] lg:aspect-auto",
};

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="Our Work" title="The Work">
            <p className="max-w-xl text-lg leading-relaxed text-ink-800/80">
              {galleryDisclaimer}
            </p>
          </SectionHeading>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:auto-rows-[260px] lg:grid-cols-12">
          {galleryItems.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 80} className={spanClasses[item.span]}>
              <PhotoPlaceholder
                variant={item.variant}
                tone={i % 2 === 0 ? "forest" : "ink"}
                badgePosition="none"
                sublabel="Demo placeholder"
                className="h-full w-full"
              >
                <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                  <PlaceholderBadge label={`Demo — ${item.label}`} />
                </div>
              </PhotoPlaceholder>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
