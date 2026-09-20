/**
 * Centralized site configuration.
 *
 * This is a fictional portfolio/demo business (ClearWave). To reuse this
 * template for a different local-service business, start by editing the
 * values in this file — most of the site reads from here instead of
 * hard-coding copy in individual components.
 */

export const business = {
  name: "ClearWave",
  tagline: "Exterior cleaning for Buffalo homes",
  city: "Buffalo",
  state: "NY",
  region: "Buffalo, New York & nearby areas",
  // Portfolio demo — no real phone/email/address is published.
  email: "hello@clearwave-demo.example",
  isDemo: true,
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Our Work", href: "#reveal" },
  { label: "About", href: "#about" },
] as const;

export const ctaText = {
  primary: "Get a Free Quote",
  secondary: "View Our Services",
} as const;

export type ServiceId =
  | "house-washing"
  | "driveway-cleaning"
  | "deck-patio-cleaning"
  | "concrete-cleaning";

export const services: {
  id: ServiceId;
  name: string;
  description: string;
}[] = [
  {
    id: "house-washing",
    name: "House Washing",
    description:
      "A gentle soft wash that lifts grime and organic buildup without harming your siding.",
  },
  {
    id: "driveway-cleaning",
    name: "Driveway Cleaning",
    description:
      "Surface cleaning that cuts through winter residue, stains, and stubborn discoloration.",
  },
  {
    id: "deck-patio-cleaning",
    name: "Deck & Patio Cleaning",
    description:
      "Careful cleaning designed to refresh outdoor living spaces and remove built-up dirt and organic growth.",
  },
  {
    id: "concrete-cleaning",
    name: "Concrete Cleaning",
    description:
      "A focused clean for concrete surfaces that have picked up years of dirt, staining, and seasonal buildup.",
  },
];

export const principles = [
  {
    title: "Surface-Aware Cleaning",
    description:
      "Different surfaces require different approaches. Pressure, technique, and cleaning agents are matched to what's actually being cleaned.",
  },
  {
    title: "Clear Arrival Windows",
    description:
      "You'll know roughly when we're coming and what to expect — no guessing, no vague all-day windows.",
  },
  {
    title: "Careful Service",
    description:
      "Landscaping, outdoor furniture, and fixtures are treated with the same care as the surfaces being cleaned.",
  },
  {
    title: "Final Quality Walkthrough",
    description:
      "Before we consider the job done, we walk the property together to confirm it meets expectations.",
  },
] as const;

export const process = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us what you need cleaned and we'll help you determine the next step.",
  },
  {
    number: "02",
    title: "Plan the Service",
    description:
      "Choose the appropriate service and establish clear expectations.",
  },
  {
    number: "03",
    title: "Enjoy the Reveal",
    description:
      "Your home gets a thoughtful exterior clean and a final walkthrough.",
  },
] as const;

/**
 * These are clearly labeled as fictional demo content in the UI —
 * do not present them as real customer reviews.
 */
export const demoTestimonials = [
  "Demo testimonial showing how customer feedback could appear here.",
  "Demo testimonial showing how customer feedback could appear here.",
  "Demo testimonial showing how customer feedback could appear here.",
] as const;

export const serviceOptions = [
  "House Washing",
  "Driveway Cleaning",
  "Deck & Patio Cleaning",
  "Concrete Cleaning",
  "Not Sure",
] as const;
