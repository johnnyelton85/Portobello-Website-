import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Hot Water Cylinder Auckland | Supply & Install | Portobello Plumbing Co",
  description:
    "Hot water cylinder replacement and installation in Central & West Auckland. Electric, gas and heat pump options. Licensed plumber. Call 027 549 9090.",
  alternates: { canonical: "/hot-water-cylinder-auckland" },
};

export default function HotWaterCylinderPage() {
  return (
    <LandingPage
      eyebrow="Hot water cylinder replacement"
      headline={`New hot water\ncylinder, sorted.`}
      subheadline="Supply and installation of hot water cylinders across Central and West Auckland. We'll recommend the right system for your home and get it done properly."
      intro="Whether your cylinder has failed, is getting old, or you just want to upgrade to something more efficient, we'll walk you through the options without the jargon. We handle everything — removal of the old unit, supply and installation of the new one, and a full test before we leave."
      services={[
        {
          title: "Cylinder Replacement",
          description:
            "Old or failed cylinder? We'll remove it, supply a quality replacement and install it correctly. We handle disposal of the old unit too.",
        },
        {
          title: "Electric Hot Water",
          description:
            "Reliable and cost-effective for most Auckland homes. We install and connect mains-pressure electric cylinders from trusted suppliers.",
        },
        {
          title: "Heat Pump Hot Water",
          description:
            "Heat pump systems use significantly less electricity than standard electric cylinders. A good option if you're looking to reduce running costs long-term.",
        },
        {
          title: "Gas Hot Water",
          description:
            "Continuous flow gas systems heat water on demand, meaning no cylinder and no waiting. We can advise on whether gas is practical for your setup.",
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
        "Supply and install",
        "Free on-site quotes",
        "12-month workmanship warranty",
      ]}
    />
  );
}
