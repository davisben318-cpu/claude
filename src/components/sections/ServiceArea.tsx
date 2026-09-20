import { business } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { PinIcon } from "../ui/icons";

function CoverageGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="mx-auto h-auto w-full max-w-[360px]"
      role="img"
      aria-label="Abstract illustration representing a general local service radius"
    >
      {[170, 130, 90].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          className="fill-none stroke-navy-900/10"
          strokeWidth={1.5}
          strokeDasharray={i === 0 ? "1 0" : "5 7"}
        />
      ))}
      <circle cx="200" cy="200" r="50" className="fill-accent-500/10" />
      <circle cx="200" cy="200" r="6" className="fill-accent-600" />
    </svg>
  );
}

export default function ServiceArea() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-6">
            <SectionHeading
              eyebrow="Proudly Local"
              title="Serving Buffalo & nearby communities"
            >
              <p className="max-w-md text-lg leading-relaxed text-navy-700">
                {business.name} is designed as a local exterior-cleaning
                company serving homeowners in {business.city}, {business.state}{" "}
                and nearby communities.
              </p>
              <div className="mt-2 flex items-center gap-2.5 text-navy-800">
                <PinIcon className="h-5 w-5 text-accent-600" />
                <span className="font-medium">{business.region}</span>
              </div>
            </SectionHeading>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-6">
            <div className="rounded-[28px] border border-navy-900/10 bg-cream-100/60 p-10 sm:p-14">
              <CoverageGraphic />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
