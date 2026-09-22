import { ctaText, business } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import PhotoPlaceholder from "../ui/PhotoPlaceholder";
import { ArrowRightIcon, PhoneIcon } from "../ui/icons";
import craneLiftEastAurora from "../../assets/photos/crane-lift-east-aurora.jpg";

export default function Hero() {
  return (
    <section className="relative h-[94vh] min-h-[620px] w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <PhotoPlaceholder
          photo={{
            src: craneLiftEastAurora,
            alt: "A crane and aerial lift working on a large bare tree next to a house in East Aurora, NY",
          }}
          className="h-full w-full"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute right-5 top-6 hidden text-right sm:block sm:top-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-50/50">
          Tree Removal
          <br />
          Western New York
        </p>
      </div>

      <Container className="relative z-10 flex h-full flex-col justify-end pb-20 sm:pb-24">
        <span className="flex flex-col font-mono text-xs font-medium uppercase tracking-[0.22em] text-rust-400">
          <span>Tree Plucker WNY</span>
          <span className="text-paper-50/60">Buffalo &amp; Western New York</span>
        </span>

        <h1 className="mt-6 font-display text-[2.75rem] font-bold uppercase leading-[0.96] tracking-tight text-paper-50 sm:text-[4rem] lg:text-[5.25rem]">
          Big trees.
          <br />
          Tight spaces.
          <br />
          No problem.
        </h1>

        <p className="mt-7 max-w-md text-lg leading-relaxed text-paper-50/80">
          Professional tree removal and specialized tree services for
          properties throughout Buffalo and Western New York.
        </p>

        <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Button as="a" href="#estimate">
            {ctaText.primary}
          </Button>
          <Button as="a" href="#work" variant="ghost">
            {ctaText.secondary}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <a
          href={business.phoneHref}
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-paper-50/70 hover:text-paper-50"
        >
          <PhoneIcon className="h-4 w-4" />
          Or call {business.phone}
        </a>
      </Container>
    </section>
  );
}
