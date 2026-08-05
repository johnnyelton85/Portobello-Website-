import {
  Bath,
  ClipboardCheck,
  Droplets,
  Filter,
  Flame,
  House,
  Pipette,
  Wrench,
} from "lucide-react";

export const site = {
  name: "Portobello Plumbing Co",
  shortName: "Portobello",
  phoneDisplay: "027 549 9090",
  phoneHref: "tel:+64275499090",
  email: "hello@portobelloplumbing.co.nz",
  emailHref: "mailto:hello@portobelloplumbing.co.nz",
  location: "Auckland, New Zealand",
  url: "https://portobelloplumbing.co.nz",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "General Plumbing",
    description:
      "Leaking taps, toilets, burst pipes and everyday repairs — sorted properly, without the runaround.",
    icon: Wrench,
  },
  {
    title: "Blocked Drains",
    description:
      "Fast diagnosis and practical drainage solutions to get everything flowing again.",
    icon: Droplets,
  },
  {
    title: "Hot Water",
    description:
      "Repairs, replacements and new hot water installations sized for your household.",
    icon: Flame,
  },
  {
    title: "Bathrooms",
    description:
      "Thoughtful plumbing for bathroom upgrades, from first fix through to the final fit-off.",
    icon: Bath,
  },
  {
    title: "Kitchens",
    description:
      "Renovation plumbing, appliance connections and clean, reliable kitchen installations.",
    icon: Pipette,
  },
  {
    title: "Roofing",
    description:
      "General roofing repairs, spouting and downpipes — kept sound and clear so rain goes where it should.",
    icon: House,
  },
  {
    title: "Water Treatment",
    description:
      "Filtration that tackles Auckland's chlorine and sediment, for water that's cleaner and better-tasting straight from the tap.",
    icon: Filter,
  },
  {
    title: "Reporting",
    description:
      "Pre-purchase plumbing and roof inspections, with a clear report on condition before you commit to buying.",
    icon: ClipboardCheck,
  },
];

export const reviews = [
  {
    quote:
      "Johnny was great to deal with. He repaired a couple of roof leaks around our chimney flue and above the kitchen, installed a new toilet, and fixed the low pressure on our shower. He turned up on time, was professional throughout, took care while working in the house, and managed to get everything sorted in one visit. Great workmanship and I'd happily recommend Portobello Plumbing Co.",
    name: "Jude",
    suburb: "Mt Albert",
  },
  {
    quote:
      "We recently had Johnny replace our kitchen tap and install a water filtration system. The whole process was straightforward from start to finish. He was friendly, knowledgeable, and happy to answer a few questions along the way. The installation looks tidy and everything works perfectly. Thanks Johnny!",
    name: "Nick",
    suburb: "Sandringham",
  },
  {
    quote:
      "Really pleased with the work Portobello Plumbing did. Johnny did an excellent job installing our household water filtration system, and at a competitive price. He was very knowledgeable giving us regular updates and recommendations from first consultation to the final installation. We wouldn't hesitate to use Portobello for any future plumbing work.",
    name: "Matt",
    suburb: "Mt Albert",
  },
];

export const serviceAreas = [
  "Central Auckland",
  "West Auckland",
  "North Shore",
  "East Auckland",
  "South Auckland",
  "Auckland-wide",
];
