/**
 * Centralized site configuration.
 *
 * This is an UNOFFICIAL, UNAFFILIATED redesign concept made as a portfolio
 * piece for a real business (Tree Plucker, West Seneca, NY) — it is not
 * their website. Contact details below (phone, address) are real and
 * public; anything still not independently verifiable (exact service
 * list, response times, etc.) stays as generic, non-definitive copy
 * rather than invented. See DISCLAIMER below and the disclaimer bar /
 * footer. There's no confirmed public business email, so contact is
 * phone + the on-page form only — don't add one.
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
  phone: "716-860-1986",
  phoneHref: "tel:7168601986",
  address: "1579 East and West Road, West Seneca, NY 14224",
  isDemo: true,
} as const;

export const parentCompany = {
  name: "Weimer Tree Co",
  url: "https://weimertree.com",
  description:
    "Tree Plucker is the large-tree removal arm of Weimer Tree Co, a family tree service that has served Western New York for over 50 years.",
} as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/treeplucker" },
  { label: "Instagram", href: "https://www.instagram.com/treeplucker" },
] as const;

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
  dealerNote:
    "Tree Plucker is a dealer for HYPRO Grapple Saws, and was the first in the U.S. to use this attachment for crane tree removal.",
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

export const realWorkCopy = {
  intro: "This concept doesn't include real project photography.",
  // Descriptive only — not a link. This concept is meant to replace
  // Tree Plucker's current site, not send visitors back to it, so this
  // doesn't link out to treeplucker.wordpress.com even though that's
  // where these videos actually live.
  videoCallout:
    "Real jobs: a radio-control crane removal, roughly 30 dead ash trees cleared in the rain, and large cabled maples taken down near a house.",
  facebookLink: {
    label: "Facebook",
    href: "https://www.facebook.com/treeplucker",
    description: "Photos and updates from recent jobs.",
  },
} as const;

export const faqItems = [
  {
    question: "What information should I provide when requesting an estimate?",
    answer:
      "It helps to describe the tree (size, condition, and location on the property), what you'd like done, and anything nearby — structures, fences, power lines, or landscaping — that could affect access. You can share these details through the form on this page or by calling directly.",
  },
  {
    question: "What types of tree projects can you help with?",
    answer:
      "Tree removal, trimming, and specialized work on large or hard-to-access trees are core parts of Tree Plucker's work, including radio-control crane and grapple-saw removals for bigger jobs.",
  },
  {
    question: "Can difficult-access tree projects be evaluated?",
    answer:
      "Yes — tight yards, nearby structures, and limited access are the kinds of situations that crane and grapple-saw equipment is built to handle. The best way to find out what a specific property needs is to request an estimate.",
  },
  {
    question: "What happens during the estimate process?",
    answer:
      `Reach out by phone at ${business.phone} or through the form on this page with details about the tree and property, and next steps can be worked out from there.`,
  },
  {
    question: "Do you work on residential properties?",
    answer:
      "Residential tree removal and trimming are common parts of tree service work, and the tight-access equipment Tree Plucker uses is often well suited to residential yards specifically.",
  },
] as const;

export const serviceAreaCopy = {
  eyebrow: "Serving Western New York",
  headline: "LOCAL TO WESTERN NEW YORK.",
  body: `${parentCompany.description} Tree Plucker is based in ${business.city}, NY, working with properties across Buffalo and the wider Western New York region.`,
} as const;

export const projectTypeOptions = [
  "Tree Removal",
  "Tree Trimming",
  "Large / Difficult Tree",
  "Storm Damage",
  "Other",
  "Not Sure",
] as const;
