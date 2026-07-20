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

// Replace these placeholder reviews with verified customer feedback before launch.
export const reviews = [
  {
    quote:
      "Friendly, clear and incredibly tidy. We knew what was happening at every step and the job was finished beautifully.",
    name: "Sample customer",
    suburb: "Grey Lynn",
  },
  {
    quote:
      "Quick to respond, arrived when promised, and solved the problem without any fuss. Exactly what you want from a plumber.",
    name: "Sample customer",
    suburb: "Mount Eden",
  },
  {
    quote:
      "The communication was excellent and the workmanship was top notch. We would happily call Portobello again.",
    name: "Sample customer",
    suburb: "Point Chevalier",
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
