import { useId, useState, type FormEvent } from "react";
import { serviceOptions } from "../../config/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";

const inputClasses =
  "w-full rounded-md border border-navy-900/15 bg-cream-50 px-4 py-3 text-[15px] text-navy-950 placeholder:text-navy-700/40 transition-colors focus:border-accent-500 focus:outline-none";

const labelClasses = "text-sm font-medium text-navy-800";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const formBase = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Portfolio demo only — intentionally not sent to, or stored by, any
    // backend or third-party service.
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="quote" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <RevealOnScroll className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-600">
              Get Started
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight text-navy-950 sm:text-4xl">
              Request a free quote
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-navy-700">
              Share a few details about your property and the cleaning
              you're considering. We'll follow up to talk through the next
              step.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="lg:col-span-7">
            <div className="rounded-[28px] border border-navy-900/10 bg-cream-100/60 p-6 sm:p-10">
              {submitted ? (
                <div
                  role="status"
                  className="flex flex-col items-center gap-4 py-10 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-950">
                    Thanks! This demo submission has been received visually.
                  </h3>
                  <p className="max-w-sm text-navy-700">
                    No information was actually sent or stored.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-accent-600 underline underline-offset-4 hover:text-accent-500"
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
                      <label htmlFor={`${formBase}-service`} className={labelClasses}>
                        Service
                      </label>
                      <select
                        id={`${formBase}-service`}
                        name="service"
                        required
                        defaultValue=""
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor={`${formBase}-message`} className={labelClasses}>
                        Message
                      </label>
                      <textarea
                        id={`${formBase}-message`}
                        name="message"
                        rows={4}
                        placeholder="Tell us a bit about your property and what you'd like cleaned."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="mt-7 w-full sm:w-auto">
                    Request a Free Quote
                  </Button>

                  <p className="mt-4 text-xs leading-relaxed text-navy-700/70">
                    This is a portfolio demo. This form does not send or
                    store information.
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
