import { useId, useState } from "react";
import { faqItems, business } from "../../config/site";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { ChevronDownIcon, PhoneIcon } from "../ui/icons";

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-ink-950/12 py-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-ink-950 sm:text-xl">
          {question}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-rust-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="max-w-xl leading-relaxed text-ink-800/80">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <SectionHeading eyebrow="Questions" title="FAQ">
              <p className="max-w-sm text-lg leading-relaxed text-ink-800/80">
                Answers to what tends to come up before a project starts.
                Don&rsquo;t see what you&rsquo;re looking for?
              </p>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.1em] text-rust-600 hover:text-rust-500"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {business.phone}
              </a>
            </SectionHeading>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-7">
            {faqItems.map((item) => (
              <FaqRow key={item.question} question={item.question} answer={item.answer} />
            ))}
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
