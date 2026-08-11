import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Plumber Ponsonby | Portobello Plumbing Co",
  description:
    "Local licensed plumber serving Ponsonby. Leaking taps, blocked drains, hot water, bathrooms and more. Free estimates. Call 027 549 9090.",
  alternates: { canonical: "/plumber-ponsonby" },
};

export default function PonsonbyPage() {
  return (
    <LandingPage
      eyebrow="Your local Ponsonby plumber"
      headline={`Ponsonby's\nplumber.`}
      subheadline="Licensed, local and easy to deal with. Serving Ponsonby and surrounding suburbs for all residential plumbing work."
      intro="Ponsonby's character homes come with character plumbing. Whether it's ageing pipes, a bathroom renovation or a straightforward repair, we bring the right experience and care to every job. We also cover nearby Grey Lynn, Westmere, Arch Hill and Herne Bay."
      services={[
        {
          title: "General Plumbing",
          description:
            "Leaking taps, toilets, burst pipes and everyday repairs. Sorted without the stress.",
        },
        {
          title: "Older Home Plumbing",
          description:
            "Ponsonby's villas and bungalows often have older plumbing. We know what to look for and how to handle it properly.",
        },
        {
          title: "Bathroom Renovations",
          description:
            "Thoughtful plumbing for bathroom upgrades, from first fix through to the final fit-off.",
        },
        {
          title: "Water Filtration",
          description:
            "Filtration systems for cleaner, better-tasting water. Great for Auckland's chlorinated supply.",
        },
      ]}
      checks={[
        "NZ licensed plumber",
        "Free on-site quotes",
        "12-month workmanship warranty",
        "Tidy, careful work",
      ]}
    />
  );
}
