/**
 * Centralized site configuration.
 *
 * This is an UNOFFICIAL, UNAFFILIATED redesign concept made as a portfolio
 * piece for a real business (Tree Plucker, West Seneca, NY) — it is not
 * their website. Business-specific facts that weren't independently
 * verifiable (phone number, exact service list, years in business, etc.)
 * are represented as placeholders or generic, non-definitive copy rather
 * than invented. See DISCLAIMER below and the disclaimer bar / footer.
 *
 * To reuse this template for a different business, start by editing the
 * values in this file — most of the site reads from here instead of
 * hard-coding copy in individual components.
 */

export const DISCLAIMER =
  "Unofficial redesign concept — not affiliated with or endorsed by Tree Plucker.";

export const business = {
  name: "Tree Plucker",
  wordmark: "TREE PLUCKER",
  region: "Buffalo & Western New York",
  city: "West Seneca",
  // Portfolio concept — no real contact channel is published.
  phonePlaceholder: "Phone number to be confirmed",
  email: "estimates@treeplucker-concept.example",
  isDemo: true,
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Our Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export const ctaText = {
  primary: "Get A Free Estimate",
  secondary: "See Our Work",
  finalPrimary: "Request A Free Estimate",
  finalSecondary: "Call To Discuss Your Project",
  formSubmit: "Request A Free Estimate",
} as const;

export type ServiceId =
  | "tree-removal"
  | "tree-trimming"
  | "specialized-removal"
  | "storm-emergency";

export const services: {
  id: ServiceId;
  number: string;
  name: string;
  description: string;
}[] = [
  {
    id: "tree-removal",
    number: "01",
    name: "Tree Removal",
    description:
      "Full removal of trees that have become hazardous, dead, or are no longer wanted on a property, from initial assessment through cleanup.",
  },
  {
    id: "tree-trimming",
    number: "02",
    name: "Tree Trimming",
    description:
      "Pruning and shaping work to manage growth, clear structures and power lines, and maintain the health and appearance of a tree.",
  },
  {
    id: "specialized-removal",
    number: "03",
    name: "Specialized Tree Removal",
    description:
      "Large or structurally difficult trees, and situations where limited access calls for a different approach than a standard removal.",
  },
  {
    id: "storm-emergency",
    number: "04",
    name: "Storm & Emergency Tree Work",
    description:
      "Response to storm-damaged or fallen trees that pose an immediate risk to a home, vehicle, or property.",
  },
] as const;

export const servicesDisclaimer =
  "Service information to be confirmed directly with Tree Plucker before this becomes a live client website.";

export const equipmentCopy = {
  eyebrow: "The Difference Is In The Approach",
  headline: "EQUIPMENT THAT CHANGES THE JOB.",
  body: "Some tree projects aren't simple. Access, nearby structures, landscaping, and the size of the tree can all change how the work needs to be approached. Specialized equipment — like crane-assisted and grapple-saw systems — can make certain large or tight-access removals possible with less impact on the surrounding property.",
  disclaimer:
    "The equipment used on a given project depends on the job and should be confirmed directly with Tree Plucker — not every method is used on every removal.",
} as const;

export const introCopy = {
  eyebrow: "Tree Work, Done Differently",
  headline: "THE BIG JOBS ARE WHERE WE STAND OUT.",
  body: "Not every tree comes down the same way. A tall, structurally compromised tree in a tight backyard, close to a house, a fence, or power lines, calls for more planning than a straightforward removal in an open lot. The scale of the tree, the access to the site, and what's around it all shape how a project gets approached before a single cut is made.",
} as const;

export const builtAroundCopy = {
  eyebrow: "How This Site Is Built",
  headline: "BUILT AROUND THE WORK.",
  body: "This site is designed to lead with what actually matters on a tree job: real project photography, the equipment involved, clear service information, and a straightforward way to request an estimate — rather than generic claims or filler copy standing in for the work itself.",
} as const;

export const process = [
  {
    number: "01",
    title: "Tell Us About The Project",
    description:
      "Share what you're dealing with — the tree, the property, and any access or safety concerns you're aware of.",
  },
  {
    number: "02",
    title: "Assess The Property",
    description:
      "The tree and its surroundings are evaluated, including access, nearby structures, and site conditions.",
  },
  {
    number: "03",
    title: "Plan The Work",
    description:
      "An approach is determined for the specific tree and site before any work begins.",
  },
  {
    number: "04",
    title: "Complete The Project",
    description: "The work is carried out and the property is cleaned up.",
  },
] as const;

export const galleryItems = [
  { label: "Large Tree Removal", span: "wide" as const, variant: "rig" as const },
  { label: "Property Cleanup", span: "tall" as const, variant: "canopy" as const },
  { label: "Tight-Access Project", span: "small" as const, variant: "grid" as const },
  { label: "Equipment In Action", span: "small" as const, variant: "rings" as const },
];

export const galleryDisclaimer =
  "Demo placeholders — not photographs of actual Tree Plucker projects.";

export const faqItems = [
  {
    question: "What information should I provide when requesting an estimate?",
    answer:
      "Generally, it helps to describe the tree (size, condition, and location on the property), what you'd like done, and anything nearby — structures, fences, power lines, or landscaping — that could affect access.",
  },
  {
    question: "What types of tree projects can you help with?",
    answer:
      "Tree removal, trimming, and work on large or difficult-access trees are common categories of tree service work. Business-specific service information should be confirmed with Tree Plucker.",
  },
  {
    question: "Can difficult-access tree projects be evaluated?",
    answer:
      "Difficult-access situations — tight yards, nearby structures, or limited equipment access — are usually best evaluated on a case-by-case basis. Business-specific service information should be confirmed with Tree Plucker.",
  },
  {
    question: "What happens during the estimate process?",
    answer:
      "Typically, a property and tree are assessed in person or through details you provide, so an approach and scope can be worked out before anything begins. Business-specific service information should be confirmed with Tree Plucker.",
  },
  {
    question: "Do you work on residential properties?",
    answer:
      "Residential tree removal and trimming are common parts of tree service work. Business-specific service information should be confirmed with Tree Plucker.",
  },
] as const;

export const serviceAreaCopy = {
  eyebrow: "Serving Western New York",
  headline: "LOCAL TO WESTERN NEW YORK.",
  body: `Tree Plucker is based in ${business.city}, NY, working with properties across Buffalo and the wider Western New York region.`,
} as const;

export const projectTypeOptions = [
  "Tree Removal",
  "Tree Trimming",
  "Large / Difficult Tree",
  "Storm Damage",
  "Other",
  "Not Sure",
] as const;
