import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Hot Water Cylinder Auckland | Portobello Plumbing Co",
  description:
    "Hot water repairs and replacements in Central & West Auckland. Fast response, fair pricing. Licensed plumber. Call 027 549 9090.",
  alternates: { canonical: "/hot-water-auckland" },
};

export default function HotWaterPage() {
  return (
    <LandingPage
      eyebrow="Hot water specialists"
      headline={`No hot water?\nWe'll fix it fast.`}
      subheadline="Hot water repairs, replacements and new installations across Central and West Auckland. We'll get you sorted quickly and explain your options clearly."
      intro="A hot water problem is one of those things you need sorted fast. We carry common parts and can often repair or replace on the same visit. If a full replacement is needed, we'll talk you through the options and recommend the right system for your household."
      services={[
        {
          title: "Hot Water Repairs",
          description:
            "No hot water, not enough, or inconsistent temperatures — we diagnose the issue and get it fixed quickly. We carry common parts to speed things up.",
        },
        {
          title: "Cylinder Replacement",
          description:
            "When repair isn't the right answer, we'll recommend a quality replacement and install it properly. We handle the removal and disposal too.",
        },
        {
          title: "New Installations",
          description:
            "Building or renovating? We'll size and install the right hot water system for your household — electric, gas or heat pump.",
        },
        {
          title: "Heat Pump Hot Water",
          description:
            "Heat pump systems are more energy efficient and can significantly reduce running costs. We can advise on whether it's the right fit for your home.",
        },
      ]}
      reviews={[
        {
          quote:
            "Really pleased with the work Portobello Plumbing did. Johnny did an excellent job installing our household water filtration system, and at a competitive price. He was very knowledgeable giving us regular updates and recommendations from first consultation to the final installation.",
          name: "Matt B",
          suburb: "Pt Chevalier",
        },
      ]}
      checks={[
        "NZ licensed plumber",
        "Same-day where possible",
        "Free on-site quotes",
        "12-month workmanship warranty",
      ]}
    />
  );
}
