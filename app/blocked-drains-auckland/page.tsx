import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Blocked Drains Auckland | Portobello Plumbing Co",
  description:
    "Fast, reliable blocked drain clearing in Central & West Auckland. Same-day response where possible. Licensed plumber. Call 027 549 9090.",
  alternates: { canonical: "/blocked-drains-auckland" },
};

export default function BlockedDrainsPage() {
  return (
    <LandingPage
      eyebrow="Blocked drain specialists"
      headline={`Blocked drain?\nWe'll sort it.`}
      subheadline="Fast response, practical solutions and a plumber who'll tell you straight what's going on. Covering Central and West Auckland."
      intro="A blocked drain can go from minor inconvenience to serious problem quickly. We carry the right equipment to diagnose, clear and advise — so you're not left guessing, and it doesn't come back."
      services={[
        {
          title: "Drain Clearing",
          description:
            "Blocked sinks, toilets, showers and floor drains — cleared properly, not just temporarily. We get to the cause, not just the symptom.",
        },
        {
          title: "Root Ingress",
          description:
            "Older Auckland homes are prone to tree roots finding their way into drains. We identify and clear root blockages and advise on long-term fixes.",
        },
        {
          title: "Drain Camera Inspection",
          description:
            "Not sure what's causing the problem? A camera inspection gives us a clear picture of what's inside the pipe before we start work.",
        },
        {
          title: "Ongoing Drainage Issues",
          description:
            "Recurring blockages can indicate a deeper issue — poor falls, damaged pipework or something concealed. We'll help you get to the bottom of it.",
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
        "Fast response",
        "Clear communication",
        "12-month workmanship warranty",
      ]}
    />
  );
}
