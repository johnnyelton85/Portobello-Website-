import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Pre-purchase Inspection Terms",
  description:
    "Scope and limitations for Portobello Plumbing Co pre-purchase plumbing and roof inspections.",
  alternates: { canonical: "/pre-purchase-terms" },
};

export default function PrePurchaseTermsPage() {
  return (
    <LegalPage
      eyebrow="Before you buy"
      title="Pre-purchase inspection terms"
      intro="A practical plumbing and roof check can highlight concerns before you buy. This page explains what the inspection does—and does not—cover."
    >
      <p className="legal-copy__updated">Last updated 16 July 2026</p>

      <section>
        <h2>1. Accepting these terms</h2>
        <p>
          These terms apply when you ask Portobello Plumbing Co to provide a
          pre-purchase plumbing and/or roof inspection. By booking the
          inspection, you accept these terms together with our general Terms of
          Trade.
        </p>
        <p>
          The booking should identify the customer, property, inspection type,
          agreed fee and any additional testing requested.
        </p>
      </section>

      <section>
        <h2>2. Purpose of the report</h2>
        <p>
          The report gives our professional opinion on the visible condition of
          the agreed plumbing and/or roofing components on the inspection date.
          Its purpose is to highlight apparent concerns and areas where further
          investigation, maintenance or repair may be worth considering.
        </p>
        <p>
          It is not a guarantee that the property is defect-free, a full
          building inspection, a code-compliance certificate or a warranty of
          future performance.
        </p>
      </section>

      <section>
        <h2>3. Inspection scope</h2>
        <p>
          The inspection is visual, non-invasive and limited to areas that are
          reasonably and safely accessible and in clear view.
        </p>
        <p>
          A plumbing inspection may cover visible supply pipes, fixtures,
          hot-water equipment, drainage components and signs of leakage or
          corrosion. A roof inspection may cover visible cladding, flashings,
          penetrations, valleys, spouting, downpipes and accessible roof-space
          areas.
        </p>
        <p>
          We may operate accessible fixtures where appropriate. Any additional
          test must be agreed before the inspection.
        </p>
      </section>

      <section>
        <h2>4. Access and exclusions</h2>
        <p>
          We do not open walls, lift roofing or flooring, move heavy items,
          excavate, or inspect concealed or inaccessible areas.
        </p>
        <p>Unless specifically agreed, the inspection does not include:</p>
        <ul>
          <li>CCTV drain inspection or underground pipe assessment;</li>
          <li>destructive moisture, pressure or water-quality testing;</li>
          <li>structural, electrical, gas or hazardous-material assessment;</li>
          <li>council-file, consent or Building Code review;</li>
          <li>weathertightness certification;</li>
          <li>property valuation, insurance advice or repair quotes; or</li>
          <li>prediction of a component&apos;s remaining service life.</li>
        </ul>
      </section>

      <section>
        <h2>5. Roof access and leaks</h2>
        <p>
          Whether we access or walk on a roof depends on its height, pitch,
          condition, weather and safe access. Where direct access is unsafe, we
          may inspect from ground level, a ladder or another suitable viewing
          point and will note the limitation.
        </p>
        <p>
          Leak tracing is not exact. Water can travel through roofing and
          framing before appearing, and some leaks occur only in particular
          weather. The absence of visible moisture does not prove that no leak
          exists.
        </p>
      </section>

      <section>
        <h2>6. Plumbing and drainage limitations</h2>
        <p>
          A visual inspection cannot confirm the internal condition of
          concealed pipes or underground drains. It may not identify partial
          blockages, root intrusion, poor falls, intermittent leaks or damage
          hidden behind finishes.
        </p>
        <p>
          Where signs suggest an underlying problem, we may recommend CCTV,
          pressure testing, leak detection or another specialist investigation.
        </p>
      </section>

      <section>
        <h2>7. A snapshot in time</h2>
        <p>
          The report records what was reasonably visible on the inspection
          date. Conditions can change, and defects may be concealed,
          intermittent or obscured by belongings, recent work or dry weather.
        </p>
        <p>
          We do not guarantee future performance, future maintenance costs or
          that every defect has been found. Any cost indication is an estimate
          only unless supplied as a separate fixed quote.
        </p>
      </section>

      <section>
        <h2>8. Recommendations</h2>
        <p>
          If we recommend further investigation by a drainlayer, roofer,
          engineer, electrician, council or another specialist, you should
          obtain that advice before confirming the purchase where practical.
        </p>
        <p>
          The decision to buy remains yours. This report should form only one
          part of your wider legal, financial and building due diligence.
        </p>
      </section>

      <section>
        <h2>9. Who can rely on the report</h2>
        <p>
          The report is prepared only for the named customer, the identified
          property and the inspection date. You may share it with your lawyer,
          lender or professional adviser, but no other person may rely on it as
          our customer without our written agreement.
        </p>
      </section>

      <section>
        <h2>10. Questions, concerns and liability</h2>
        <p>
          Please read the full report, including its recorded access
          limitations. Contact us promptly if anything is unclear or appears
          incorrect. Where practical, give us a reasonable opportunity to
          revisit the property before arranging remedial work through somebody
          else.
        </p>
        <p>
          Nothing in these terms limits rights that cannot legally be excluded.
          Subject to that, we are responsible only for direct and reasonably
          foreseeable loss caused by our failure to exercise reasonable care
          and skill. We are not responsible for a defect that was concealed,
          inaccessible or not reasonably apparent at the inspection time.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          <strong>Portobello Plumbing Co</strong>
          <br />
          027 549 9090
          <br />
          hello@portobelloplumbing.co.nz
        </p>
      </section>
    </LegalPage>
  );
}
