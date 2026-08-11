import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Plumber Mt Albert | Portobello Plumbing Co",
  description:
    "Local licensed plumber based in Mt Albert. Leaking taps, blocked drains, hot water, bathrooms and more. Free estimates. Call 027 549 9090.",
  alternates: { canonical: "/plumber-mt-albert" },
};

export default function MtAlbertPage() {
  return (
    <LandingPage
      eyebrow="Your local Mt Albert plumber"
      headline={`Mt Albert's\nlocal plumber.`}
      subheadline="Based right here in Mt Albert. Licensed, experienced and genuinely easy to deal with, for all residential plumbing in the area."
      intro="Portobello Plumbing is based in Mt Albert, which means fast response times and a plumber who actually knows the area. We cover Mt Albert and surrounding suburbs including Morningside, Owairaka and Sandringham, for plumbing repairs, renovations and everything in between."
      services={[
        {
          title: "General Plumbing",
          description:
            "Leaking taps, toilets, burst pipes and everyday repairs. Fixed properly, first time.",
        },
        {
          title: "Blocked Drains",
          description:
            "Fast diagnosis and drainage solutions. We carry the right equipment to clear blockages and find the cause.",
        },
        {
          title: "Hot Water Systems",
          description:
            "Repairs, replacements and new installations. We'll recommend the right system for your household and budget.",
        },
        {
          title: "Pre-purchase Inspections",
          description:
            "Buying in Mt Albert? We provide thorough plumbing inspections with a clear written report before you commit.",
        },
      ]}
      checks={[
        "Based in Mt Albert",
        "NZ licensed plumber",
        "Free on-site quotes",
        "12-month workmanship warranty",
      ]}
    />
  );
}
