import { business, ctaText } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import HouseScene from "../illustrations/HouseScene";
import PlaceholderBadge from "../ui/PlaceholderBadge";
import { ArrowRightIcon } from "../ui/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-600">
              {business.region}
            </span>

            <h1 className="mt-5 font-display text-[2.6rem] font-extrabold uppercase leading-[0.98] tracking-tight text-navy-950 sm:text-[3.4rem] lg:text-[3.9rem]">
              Make your home
              <br />
              look new again.
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-navy-700">
              Thoughtful exterior cleaning for Buffalo homes — designed to
              lift away the seasons and bring back the curb appeal.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button as="a" href="#quote">
                {ctaText.primary}
              </Button>
              <Button as="a" href="#services" variant="secondary">
                {ctaText.secondary}
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-navy-900/10 shadow-[0_30px_60px_-25px_rgba(15,28,43,0.35)]">
                <HouseScene variant="clean" className="h-auto w-full" />
              </div>
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                <PlaceholderBadge />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-navy-900/10 bg-cream-50 px-5 py-4 shadow-[0_20px_40px_-20px_rgba(15,28,43,0.3)] sm:block">
                <p className="font-display text-2xl font-bold text-navy-950">
                  Soft-wash
                  <span className="text-accent-600">.</span>
                </p>
                <p className="mt-0.5 text-sm text-navy-700">
                  Careful, surface-aware technique
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
