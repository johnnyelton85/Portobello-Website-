import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Plumber Grey Lynn | Portobello Plumbing Co",
  description:
    "Local licensed plumber serving Grey Lynn. Leaking taps, blocked drains, hot water, bathrooms and more. Free estimates. Call 027 549 9090.",
  alternates: { canonical: "/plumber-grey-lynn" },
};

export default function GreyLynnPage() {
  return (
    <LandingPage
      eyebrow="Your local Grey Lynn plumber"
      headline={`Grey Lynn's\nplumber.`}
      subheadline="Licensed, local and easy to deal with. Covering Grey Lynn and the surrounding streets for all plumbing work, big or small."
      intro="From a leaking tap keeping you up at night to a full bathroom renovation — we handle all residential plumbing in Grey Lynn and nearby suburbs including Ponsonby, Westmere and Arch Hill."
      services={[
        {
          title: "General Plumbing",
          description:
            "Leaking taps, toilets, burst pipes and everyday repairs. Sorted properly, without the runaround.",
        },
        {
          title: "Blocked Drains",
          description:
            "Fast diagnosis and practical solutions to get things flowing again. Grey Lynn's older homes can be prone to root ingress — we know what to look for.",
        },
        {
          title: "Hot Water",
          description:
            "Repairs, replacements and new hot water installations. We'll size the right system for your household.",
        },
        {
          title: "Bathrooms & Kitchens",
          description:
            "Renovation plumbing for bathroom upgrades and kitchen fit-outs. From first fix through to the final fit-off.",
        },
      ]}
      checks={[
        "NZ licensed plumber",
        "Free on-site quotes",
        "12-month workmanship warranty",
        "Clear communication",
      ]}
    />
  );
}
