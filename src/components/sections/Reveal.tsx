import { useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import HouseScene from "../illustrations/HouseScene";
import PlaceholderBadge from "../ui/PlaceholderBadge";

function BeforeAfterSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-navy-900/10 shadow-[0_30px_60px_-25px_rgba(15,28,43,0.35)] sm:aspect-[16/10]">
      <HouseScene variant="clean" className="absolute inset-0 h-full w-full" />

      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <HouseScene variant="dirty" className="h-full w-full" />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Drag to compare a before and after demo image"
        className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />

      {/* divider handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] bg-cream-50 shadow-[0_0_0_1px_rgba(15,28,43,0.15)]"
        style={{ left: `${value}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-navy-950 shadow-[0_6px_16px_rgba(15,28,43,0.3)] peer-focus-visible:ring-2 peer-focus-visible:ring-accent-500 peer-focus-visible:ring-offset-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-center sm:top-5">
        <PlaceholderBadge label="Demo Image — Illustrated" />
      </div>
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-navy-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream-50 backdrop-blur-sm sm:bottom-5 sm:left-5">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-navy-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream-50 backdrop-blur-sm sm:bottom-5 sm:right-5">
        After
      </span>
    </div>
  );
}

export default function Reveal() {
  return (
    <section id="reveal" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow="Our Work" title="The Reveal" align="center">
            <p className="mx-auto max-w-lg text-lg leading-relaxed text-navy-700">
              A cleaner exterior can change the way your entire home feels.
              Drag the slider to see the concept in action.
            </p>
          </SectionHeading>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="mx-auto mt-14 max-w-3xl">
          <BeforeAfterSlider />
          <p className="mt-5 text-center text-sm text-navy-700/70">
            Illustrated concept for demonstration purposes — not an actual
            ClearWave customer project.
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
