import { serviceAreaCopy, business } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { PinIcon } from "../ui/icons";

function RegionGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="mx-auto h-auto w-full max-w-[340px]"
      role="img"
      aria-label="Abstract illustration representing a general Western New York service region"
    >
      {[60, 110, 165].map((y, i) => (
        <path
          key={y}
          d={`M20 ${y} Q120 ${y - 26} 200 ${y} T380 ${y - 8}`}
          fill="none"
          className={i === 1 ? "stroke-rust-500/50" : "stroke-ink-950/12"}
          strokeWidth={i === 1 ? 2 : 1.25}
        />
      ))}
      <circle cx="200" cy="210" r="70" className="fill-forest-700/8" />
      <circle cx="200" cy="210" r="4" className="fill-rust-600" />
      {[80, 140, 200].map((y) => (
        <path
          key={`b${y}`}
          d={`M20 ${310 + y * 0.1} Q120 ${290 + y * 0.1} 200 ${310 + y * 0.1} T380 ${300 + y * 0.1}`}
          fill="none"
          className="stroke-ink-950/10"
          strokeWidth={1.25}
        />
      ))}
    </svg>
  );
}

export default function ServiceArea() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-6">
            <SectionHeading eyebrow={serviceAreaCopy.eyebrow} title={serviceAreaCopy.headline}>
              <p className="max-w-md text-lg leading-relaxed text-ink-800/80">
                {serviceAreaCopy.body}
              </p>
              <div className="mt-2 flex items-center gap-2.5 text-ink-900">
                <PinIcon className="h-5 w-5 text-rust-600" />
                <span className="font-medium">{business.region}</span>
              </div>
            </SectionHeading>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-6">
            <div className="bg-paper-100/70 p-10 sm:p-14">
              <RegionGraphic />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
