import { useId, useState, type FormEvent } from "react";
import { projectTypeOptions, ctaText } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";

const inputClasses =
  "w-full border border-ink-950/15 bg-paper-50 px-4 py-3 text-[15px] text-ink-950 placeholder:text-ink-800/35 transition-colors focus:border-rust-500 focus:outline-none";

const labelClasses = "font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-800";

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const formBase = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Portfolio demo only — intentionally not sent to, or stored by, any
    // backend or third-party service.
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="estimate" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-rust-600">
              Get Started
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight text-ink-950 sm:text-4xl">
              Request A Free Estimate
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-800/80">
              Share a few details about the tree and the property, and
              what you're considering having done.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-7">
            <div className="border border-ink-950/10 bg-paper-100/60 p-6 sm:p-10">
              {submitted ? (
                <div
                  role="status"
                  className="flex flex-col items-center gap-4 py-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-700/15 text-forest-700">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-950">
                    Thanks! This demo submission has been received visually.
                  </h3>
                  <p className="max-w-sm text-ink-800/80">
                    No information was actually sent or stored.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 font-mono text-xs font-medium uppercase tracking-[0.1em] text-rust-600 underline underline-offset-4 hover:text-rust-500"
                  >
                    Submit another demo request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor={`${formBase}-name`} className={labelClasses}>
                        Name
                      </label>
                      <input
                        id={`${formBase}-name`}
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Jordan Rivera"
                        className={inputClasses}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor={`${formBase}-email`} className={labelClasses}>
                        Email
                      </label>
                      <input
                        id={`${formBase}-email`}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor={`${formBase}-phone`} className={labelClasses}>
                        Phone
                      </label>
                      <input
                        id={`${formBase}-phone`}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(716) 555-0100"
                        className={inputClasses}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor={`${formBase}-project-type`} className={labelClasses}>
                        Project Type
                      </label>
                      <select
                        id={`${formBase}-project-type`}
                        name="projectType"
                        required
                        defaultValue=""
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        {projectTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor={`${formBase}-location`} className={labelClasses}>
                        Property Location
                      </label>
                      <input
                        id={`${formBase}-location`}
                        name="propertyLocation"
                        type="text"
                        placeholder="City or neighborhood"
                        className={inputClasses}
                      />
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor={`${formBase}-message`} className={labelClasses}>
                        Message
                      </label>
                      <textarea
                        id={`${formBase}-message`}
                        name="message"
                        rows={4}
                        placeholder="Tell us about the tree, its size, and anything nearby that could affect access."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="mt-7 w-full sm:w-auto">
                    {ctaText.formSubmit}
                  </Button>

                  <p className="mt-4 text-xs leading-relaxed text-ink-800/60">
                    Portfolio demo — this form does not send or store
                    information.
                  </p>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
