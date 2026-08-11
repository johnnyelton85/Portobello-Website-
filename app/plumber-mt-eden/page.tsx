import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Plumber Mt Eden | Portobello Plumbing Co",
  description:
    "Local licensed plumber serving Mt Eden. Leaking taps, hot water, blocked drains, bathrooms and more. Free estimates. Call 027 549 9090.",
  alternates: { canonical: "/plumber-mt-eden" },
};

export default function MtEdenPage() {
  return (
    <LandingPage
      eyebrow="Your local Mt Eden plumber"
      headline={`Mt Eden's\nplumber.`}
      subheadline="Licensed, local and easy to deal with. Covering Mt Eden and the surrounding streets for all residential plumbing, big or small."
      intro="Mt Eden's older villas and bungalows are great homes — but they come with older plumbing. Whether it's a leaking tap, a tired hot water cylinder or a full bathroom renovation, we know these homes well and get the job done properly."
      services={[
        {
          title: "General Plumbing",
          description:
            "Leaking taps, toilets, burst pipes and everyday repairs. Sorted properly, without the runaround.",
        },
        {
          title: "Hot Water",
          description:
            "Repairs, replacements and new hot water installations. We'll recommend the right system for your home and get it done quickly.",
        },
        {
          title: "Bathroom Renovations",
          description:
            "Renovation plumbing for bathroom upgrades and kitchen fit-outs. Careful work in character homes, from first fix through to final fit-off.",
        },
        {
          title: "Blocked Drains",
          description:
            "Fast diagnosis and practical solutions. Older Mt Eden homes can be prone to root ingress — we carry the right gear to clear it properly.",
        },
      ]}
      reviews={[
        {
          quote:
            "We recently had Johnny replace our kitchen tap and install a water filtration system. The whole process was straightforward from start to finish. He was friendly, knowledgeable, and happy to answer a few questions along the way.",
          name: "Nick K",
          suburb: "Sandringham",
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
