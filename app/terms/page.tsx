import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Trade",
  description: "Terms of Trade for Portobello Plumbing Co.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The practical stuff"
      title="Terms of Trade"
      intro="Clear expectations make for an easier job all round. These terms explain how we price, carry out and stand behind our work."
    >
      <p className="legal-copy__updated">Last updated 16 July 2026</p>

      <section>
        <h2>1. About these terms</h2>
        <p>
          These terms apply whenever you ask Portobello Plumbing Co
          (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) to provide
          goods or services to you (&ldquo;you&rdquo; or &ldquo;the
          customer&rdquo;).
        </p>
        <p>
          You accept them when you accept a quote or estimate, book a job, ask
          us to order materials, or allow work to begin. If you arrange work
          for somebody else, you confirm that you have authority to do so. The
          person who books the work remains responsible for payment unless we
          agree otherwise in writing.
        </p>
      </section>

      <section>
        <h2>2. What we do</h2>
        <p>
          We provide plumbing, drainage, hot-water, roofing, spouting,
          downpipe, water-treatment and property-inspection services across
          Auckland. We carry out our work with reasonable care and skill and in
          line with applicable laws, consents and industry requirements.
        </p>
        <p>
          Our usual hours are Monday to Friday, 8:30am–5:00pm, excluding public
          holidays. We do not currently offer out-of-hours work as a standard
          service.
        </p>
      </section>

      <section>
        <h2>3. Call-out and labour charges</h2>
        <p>Unless a fixed quote or another written arrangement applies:</p>
        <ul>
          <li>
            <strong>Call-out — $130 plus GST.</strong> This applies to each
            attendance and includes travel to the property and the first 30
            minutes on site.
          </li>
          <li>
            <strong>Additional labour — $100 plus GST per hour.</strong> Time
            after the first 30 minutes is billed in 15-minute increments.
          </li>
        </ul>
        <p>
          A call-out does not apply where a return visit is solely to remedy a
          defect covered by our workmanship warranty. Parking, tolls, delivery,
          specialist and similar job-specific costs may be charged separately.
        </p>
      </section>

      <section>
        <h2>4. Estimates, quotes and charge-up work</h2>
        <p>
          Unless we clearly describe a price as a <strong>fixed quote</strong>,
          it is an estimate only. An estimate is our best indication of likely
          cost based on the information available at the time.
        </p>
        <p>
          Charge-up work is billed using the actual time spent, materials
          supplied and applicable job costs. A fixed quote covers only the work
          described in it and is valid for 30 days unless stated otherwise.
        </p>
        <p>
          Pricing assumes reasonable access, accurate information, ordinary
          site conditions and no concealed defects or hazardous materials.
        </p>
      </section>

      <section>
        <h2>5. Materials</h2>
        <p>
          Materials are supplied at our standard selling price, which may
          differ from the merchant&apos;s price. Our price may include
          selecting, sourcing, ordering, collecting, transporting and handling
          the product, as well as stockholding and warranty administration.
        </p>
        <p>
          Parts, fixtures, appliances and consumables are additional unless
          included in a fixed quote. Special-order or custom items may need to
          be paid for in full before ordering and may not be returnable.
        </p>
      </section>

      <section>
        <h2>6. Deposits</h2>
        <p>
          Where materials for a quoted job are expected to exceed $1,000 plus
          GST, we may require a deposit equal to{" "}
          <strong>50% of their estimated value</strong> before ordering them or
          scheduling the work.
        </p>
        <p>
          If a job changes or is cancelled after materials are ordered, the
          deposit may be applied to non-returnable items, supplier charges,
          delivery costs and work already completed. Any remaining balance will
          be returned.
        </p>
      </section>

      <section>
        <h2>7. Customer-supplied products</h2>
        <p>
          Products you supply must be suitable, compliant, complete and
          compatible with the existing system. We may decline to install
          anything we reasonably consider unsafe or unsuitable.
        </p>
        <p>
          Our workmanship warranty covers our installation, not a fault or
          incompatibility in a customer-supplied product. Extra time spent
          removing, adapting or replacing one is chargeable.
        </p>
      </section>

      <section>
        <h2>8. Variations and unexpected work</h2>
        <p>
          Work outside the agreed scope is a variation. This includes extra
          work you request and work arising from concealed damage, consent
          requirements, unavailable products, hazardous materials or
          unexpected site conditions.
        </p>
        <p>
          We will explain the issue and seek approval before continuing where
          practical. Approval may be given verbally, by text or by email.
          Variations are charged separately and may affect the completion date.
          We may carry out limited urgent work without prior approval where
          reasonably necessary to prevent injury or immediate property damage.
        </p>
      </section>

      <section>
        <h2>9. Consents</h2>
        <p>
          You are responsible for obtaining any consent or other authority
          needed for the work unless we agree to arrange it. If a required
          consent has not been obtained, we may pause the work or apply for it
          as your agent and at your expense.
        </p>
        <p>
          Council fees, design work, inspections and compliance documentation
          are additional unless included in our quote. Residential building
          work costing $30,000 or more including GST requires a separate
          written contract and prescribed disclosures under the Building Act
          2004.
        </p>
      </section>

      <section>
        <h2>10. Access and site safety</h2>
        <p>
          You must provide safe and reasonable access, including keys, gates,
          alarms, workspace and parking information. Please move valuable or
          fragile belongings and keep children, visitors and animals away from
          the work area.
        </p>
        <p>
          Tell us about known hazards, asbestos, unusual services, previous
          repairs and anything else that may affect the job. We may stop or
          postpone work where the site is unsafe. Specialist testing, removal
          or safety equipment is chargeable.
        </p>
      </section>

      <section>
        <h2>11. Underground services</h2>
        <p>
          Before we dig, drill or cut, please let us know about any underground
          or concealed services you&apos;re aware of — things like power, gas,
          water, drainage, irrigation, telephone and fibre — and mark them if
          you can. That helps us avoid damaging them.
        </p>
        <p>
          We will take reasonable care, but plans and markings are often only
          indicative. Where a service was not disclosed, accurately shown or
          reasonably discoverable, we are not responsible for resulting repair
          costs, to the extent permitted by law. This does not apply where the
          damage was caused by our negligence or failure to take reasonable
          precautions.
        </p>
      </section>

      <section>
        <h2>12. Existing and concealed defects</h2>
        <p>
          Older pipes, valves, fixtures, roofing and building materials may be
          worn, corroded or close to failure. Testing or disturbing one part of
          a system can reveal an unrelated existing fault elsewhere.
        </p>
        <p>
          We are not responsible for an existing or concealed defect that
          becomes apparent while we work, provided it was not caused by our
          failure to exercise reasonable care and skill. Repairing it is
          additional work.
        </p>
      </section>

      <section>
        <h2>13. Care of your property</h2>
        <p>
          We will take reasonable care around your home, furniture and
          fittings. Existing locks, drawers, tiles, cabinetry, plastics and
          other items can sometimes fail during ordinary careful use because
          they are worn, brittle, defective or poorly installed.
        </p>
        <p>
          Where we have acted with reasonable care and skill, we are not
          responsible for that existing failure. We will let you know promptly
          and discuss the available options. This does not excuse negligence or
          deliberate damage.
        </p>
        <p>
          Unless agreed, our work does not include painting, plastering,
          flooring, cabinetry, landscaping or other making-good work required
          after reasonable access to services.
        </p>
      </section>

      <section>
        <h2>14. Roof and leak investigations</h2>
        <p>
          Leak tracing is not an exact science. Water can travel through
          roofing and framing before becoming visible, and a property may have
          more than one defect. Our first repair is based on the most likely
          source identified from the available evidence.
        </p>
        <p>
          Further testing or visits may be needed if a leak continues or
          another source becomes apparent. These are chargeable unless included
          in a fixed quote.
        </p>
      </section>

      <section>
        <h2>15. Blocked drains</h2>
        <p>
          Clearing a blockage restores flow at the time but does not guarantee
          it will not return. Recurring blockages may indicate roots, damaged
          pipework, poor falls or another concealed fault.
        </p>
        <p>
          We may recommend CCTV inspection, water blasting, excavation or pipe
          repair. These services are additional unless included in the agreed
          work.
        </p>
      </section>

      <section>
        <h2>16. Emergency and temporary repairs</h2>
        <p>
          Emergency repairs may be intended only to make a situation safe,
          limit damage or temporarily restore service. A permanent repair,
          replacement part or follow-up visit may be required and will be
          charged separately unless already included.
        </p>
      </section>

      <section>
        <h2>17. Timing and delays</h2>
        <p>
          We will make reasonable efforts to attend and finish when agreed, but
          timings are estimates unless guaranteed in writing. We are not
          responsible for delays caused by weather, illness, suppliers,
          councils, variations, unsafe conditions, concealed defects or events
          reasonably outside our control.
        </p>
      </section>

      <section>
        <h2>18. Disposal</h2>
        <p>
          Removal and disposal of cylinders, fixtures, roofing, soil, packaging
          or other waste is chargeable unless included in the quote. Hazardous
          materials require specialist handling and are always additional.
        </p>
      </section>

      <section>
        <h2>19. Photographs and records</h2>
        <p>
          We may take photographs before, during and after work to record
          existing conditions, completed work, safety matters and warranty
          evidence. We will not publicly use identifiable images of you, your
          address or your home&apos;s interior without permission.
        </p>
      </section>

      <section>
        <h2>20. Workmanship and product warranties</h2>
        <p>
          We warrant our workmanship for <strong>12 months</strong> from
          completion. Tell us promptly about a concern and give us a reasonable
          opportunity to inspect and remedy it.
        </p>
        <p>
          The warranty does not cover product defects, wear and tear, misuse,
          inadequate maintenance, third-party alterations, existing defects or
          events outside our control.
        </p>
        <p>
          Manufacturer warranties apply to products we supply. We will provide
          reasonable assistance with a valid claim. Labour and travel are
          covered only where required by the manufacturer&apos;s warranty, our
          workmanship warranty or applicable law.
        </p>
      </section>

      <section>
        <h2>21. Payment</h2>
        <p>
          Invoices are due within <strong>10 business working days</strong>
          unless agreed otherwise. Please contact us promptly about any query;
          any undisputed amount remains due on time.
        </p>
        <p>
          Overdue balances may incur simple interest at{" "}
          <strong>2.5% per month</strong>, plus reasonable debt-collection,
          legal and enforcement costs. We may suspend unfinished work or future
          bookings while an amount remains overdue. Charges will not be applied
          where unlawful or unenforceable.
        </p>
      </section>

      <section>
        <h2>22. Cancellations</h2>
        <p>
          Please give at least 24 hours&apos; notice. If you cancel after we
          begin travelling, after we arrive, or if we cannot gain access, the
          call-out remains payable.
        </p>
        <p>
          You may also be responsible for non-returnable materials, supplier
          charges and work already completed.
        </p>
      </section>

      <section>
        <h2>23. Liability and consumer rights</h2>
        <p>
          Nothing in these terms limits rights that cannot legally be excluded,
          including applicable rights under the Consumer Guarantees Act 1993
          and Building Act 2004.
        </p>
        <p>
          Subject to that, we are responsible only for direct and reasonably
          foreseeable loss caused by our breach or failure to exercise
          reasonable care and skill. For business customers, our total
          liability is limited to the amount paid for the work giving rise to
          the claim, to the extent legally permitted.
        </p>
      </section>

      <section>
        <h2>24. Pre-purchase reports</h2>
        <p>
          Pre-purchase plumbing and roof inspections are subject to a separate
          scope and set of limitations. Please read our{" "}
          <Link href="/pre-purchase-terms">
            pre-purchase inspection terms
          </Link>{" "}
          before booking an inspection.
        </p>
      </section>

      <section>
        <h2>25. Disputes</h2>
        <p>
          If something is not right, please contact us first and give us a fair
          chance to understand and resolve it. A formal dispute should be put
          in writing with the outcome requested.
        </p>
        <p>
          If we cannot resolve it directly, either party may use mediation,
          adjudication under the Construction Contracts Act 2002, the Disputes
          Tribunal or the New Zealand courts, as appropriate. Undisputed
          invoice amounts remain payable.
        </p>
      </section>

      <section>
        <h2>26. Privacy and general terms</h2>
        <p>
          We collect information needed to quote, schedule and carry out work,
          issue invoices, keep warranty records and meet legal obligations. We
          handle personal information under the Privacy Act 2020.
        </p>
        <p>
          If part of these terms is invalid, the rest continues to apply. New
          versions apply to future work, while the version accepted when a job
          is booked applies to that job. These terms are governed by New
          Zealand law.
        </p>
      </section>

      <section>
        <h2>27. Contact</h2>
        <p>
          <strong>Portobello Plumbing Co</strong>
          <br />
          Auckland, New Zealand
          <br />
          027 549 9090
          <br />
          hello@portobelloplumbing.co.nz
          <br />
          GST number: 146-592-473
        </p>
      </section>
    </LegalPage>
  );
}
