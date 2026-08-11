import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  navItems,
  reviews,
  serviceAreas,
  services,
  site,
} from "@/data/site";

const trustItems = [
  { label: "Licenced and registered", icon: BadgeCheck },
  { label: "Clear communication", icon: ThumbsUp },
  { label: "Quality workmanship", icon: ShieldCheck },
  { label: "Tidy & respectful", icon: Sparkles },
];

const pricingPlans = [
  {
    label: "Call-out",
    amount: "$130",
    unit: "+ GST",
    copy: "Includes the drive to you and the first 30 minutes on site.",
  },
  {
    label: "After that",
    amount: "$100",
    unit: "+ GST / hr",
    copy: "Billed every 15 minutes.",
  },
];

const whyUs = [
  {
    title: "No plumbing speak",
    copy: "You get a clear explanation of the problem, the options and what happens next.",
  },
  {
    title: "We respect your home",
    copy: "Careful work, tidy sites and the kind of clean-up you should be able to expect.",
  },
  {
    title: "Built to last",
    copy: "Practical solutions and considered workmanship, not a short-term patch-up.",
  },
  {
    title: "Here when promised",
    copy: "Straightforward scheduling and a heads-up if anything changes along the way.",
  },
];

function Header() {
  return (
    <>
      <div className="topbar">
        <div className="shell topbar__inner">
          Plumbing trouble? <strong>Call {site.phoneDisplay}</strong>
        </div>
      </div>
      <header className="header">
        <div className="shell header__inner">
          <a href="#" aria-label="Portobello Plumbing Co — home">
            <Image
              className="logo"
              src="/portobello-logo.png"
              alt="Portobello Plumbing Co"
              width={1912}
              height={796}
              priority
            />
          </a>
          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button" href="#contact">
            Get a quote
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="shell hero__grid">
          <div>
            <p className="eyebrow">Your local Auckland plumber</p>
            <h1 className="display">
              Great plumbing.
              <em>No dramas.</em>
            </h1>
            <p className="hero__lead">
              Straight-up service, solid workmanship and plumbing that does
              exactly what it should. For repairs, renovations and everything
              in between.
            </p>
            <div className="hero__actions">
              <a className="button" href={site.phoneHref}>
                <Phone size={18} fill="currentColor" aria-hidden="true" />
                Call {site.phoneDisplay}
              </a>
              <a className="button button--light" href="#contact">
                Request a quote
              </a>
            </div>
            <ul className="hero__trust">
              <li>
                <Check size={18} strokeWidth={3} aria-hidden="true" />
                Locally owned & operated
              </li>
              <li>
                <Check size={18} strokeWidth={3} aria-hidden="true" />
                Clear communication
              </li>
              <li>
                <Check size={18} strokeWidth={3} aria-hidden="true" />
                Quality-focused work
              </li>
            </ul>
          </div>
          <div className="hero__visual">
            <div className="hero__image-frame">
              <Image
                src="https://images.unsplash.com/photo-1745794565783-913db01a89b9?auto=format&fit=crop&w=1200&q=85"
                alt="Brass bridge faucet over a white farmhouse sink in a warm contemporary kitchen"
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="hero__sticker" aria-hidden="true">
              Central
              <br />
              & West
            </div>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Why choose Portobello">
        <div className="shell trust-strip__grid">
          {trustItems.map(({ label, icon: Icon }) => (
            <div className="trust-item" key={label}>
              <Icon size={24} strokeWidth={2.4} aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="services__head">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">Plumbing sorted, properly.</h2>
          </div>
          <p className="section-intro">
            From the little leak that is driving you mad to the renovation
            you&apos;ve been planning for years.
          </p>
        </div>
        <div className="services__grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="service-card" key={title}>
              <div className="service-card__icon">
                <Icon size={27} strokeWidth={2.4} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about__grid">
        <div className="about__portrait">
          <Image
            src="/johnny-profile-close.jpg"
            alt="Johnny from Portobello Plumbing Co standing beside a van"
            fill
            sizes="(max-width: 980px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="eyebrow">Meet your plumber</p>
          <h2 className="section-title">
            Johnny. Licensed, local and easy to deal with.
          </h2>
          <p className="about__copy">
            Portobello Plumbing is run by Johnny, a New Zealand registered
            plumber with the experience and know-how to get things right
            first time. Whether it&apos;s a dripping tap or a full bathroom
            fit-out, the same care goes into every job.
          </p>
          <p className="about__copy">
            Clear communication, tidy workmanship, no shortcuts. The kind of
            service you&apos;d expect, but don&apos;t always get.
          </p>
          <ul className="about__checks">
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> NZ qualified plumber
            </li>
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Clear communication
            </li>
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Attention to detail
            </li>
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Tidy, careful work
            </li>
          </ul>
          <a className="button button--light" href={site.phoneHref}>
            <Phone size={18} aria-hidden="true" />
            Have a chat
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section why">
      <div className="shell why__grid">
        <div>
          <p className="eyebrow">The Portobello way</p>
          <h2 className="section-title">Good work. Good people.</h2>
          <p className="section-intro">
            The basics matter. Turn up, communicate well, do a quality job and
            leave things better than you found them.
          </p>
        </div>
        <div className="why__list">
          {whyUs.map((item, index) => (
            <article className="why__item" key={item.title}>
              <span className="why__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="shell">
        <div className="reviews__head">
          <div>
            <p className="eyebrow">Word on the street</p>
            <h2 className="section-title">What Aucklanders say.</h2>
          </div>
          <Star size={54} fill="var(--orange)" color="var(--orange)" />
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.suburb}>
              <div className="review-card__stars" aria-label="Five stars">
                ★★★★★
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="review-card__author">
                {review.name}
                <span>{review.suburb}, Auckland</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="section areas">
      <div className="shell areas__grid">
        <div>
          <p className="eyebrow">Where we work</p>
          <h2 className="section-title">Central & West Auckland.</h2>
          <p className="section-intro">
            Based locally and covering the central and western suburbs. Not sure
            if you&apos;re in range? Give us a ring and we&apos;ll let you know.
          </p>
        </div>
        <div className="area-pills" aria-label="Service areas">
          {serviceAreas.map((area) => (
            <span className="area-pill" key={area}>
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="shell">
        <div className="pricing__head">
          <div>
            <p className="eyebrow">Straightforward pricing</p>
            <h2 className="section-title">No surprises on the invoice.</h2>
          </div>
          <p className="section-intro">We keep it simple. Two rates.</p>
        </div>
        <div className="pricing__grid">
          {pricingPlans.map(({ label, amount, unit, copy }) => (
            <article className="pricing-card" key={label}>
              <span className="pricing-card__label">{label}</span>
              <span className="pricing-card__amount">
                {amount}
                <span className="pricing-card__unit"> {unit}</span>
              </span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="pricing__note">
          Materials and parts are separate, and we&apos;ll always talk those
          through with you first. For a lot of smaller jobs, the call-out
          covers the whole visit.
        </p>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover Central and West Auckland including Grey Lynn, Ponsonby, Mt Eden, Mt Albert, Sandringham, Avondale, Henderson, New Lynn, and surrounding suburbs.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, we provide free quotes for most plumbing work. Call us on 027 549 9090 or use the contact form with details of the job.",
  },
  {
    question: "What are your call-out fees?",
    answer:
      "$130 + GST covers travel and the first 30 minutes on site. After that, it's $100 + GST per hour. Materials are quoted separately.",
  },
  {
    question: "Are you a licensed plumber?",
    answer:
      "Yes, Johnny is a fully qualified, New Zealand registered and licensed plumber with insurance.",
  },
  {
    question: "Do you handle emergencies?",
    answer:
      "We handle urgent jobs during business hours (Mon–Fri 7:30am–5pm). Call 027 549 9090 and we'll do our best to help quickly.",
  },
];

function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="shell">
        <div className="faq__head">
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title">Good to know.</h2>
        </div>
        <div className="faq__grid">
          {faqs.map((faq) => (
            <details className="faq__item" key={faq.question}>
              <summary className="faq__question">{faq.question}</summary>
              <p className="faq__answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell contact__grid">
        <div>
          <p className="eyebrow">Get in touch or a free quote</p>
          <h2 className="section-title">Tell us what needs sorting.</h2>
          <p className="section-intro">
            Tell us a bit about the job and feel free to snap a few photos if
            you&apos;d like. We&apos;ll get back to you with a quote or, if you
            prefer, can schedule a time to come and visit. A quick call is
            always the fastest way to reach us if that&apos;s preferred.
          </p>
          <div className="contact__details">
            <a className="contact__detail" href={site.phoneHref}>
              <span>
                <Phone size={19} aria-hidden="true" />
              </span>
              {site.phoneDisplay}
            </a>
            <a className="contact__detail" href={site.emailHref}>
              <span>
                <Mail size={19} aria-hidden="true" />
              </span>
              {site.email}
            </a>
            <div className="contact__detail">
              <span>
                <MapPin size={19} aria-hidden="true" />
              </span>
              {site.location}
            </div>
            <div className="contact__detail">
              <span>
                <Clock3 size={19} aria-hidden="true" />
              </span>
              Mon–Fri: 7:30am – 5:00pm
            </div>
          </div>
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6385.868963427421!2d174.71165567614746!3d-36.88560478577754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d46c1f3d3f8ab%3A0x500ef6143a2d600!2sMt%20Albert%2C%20Auckland!5e0!3m2!1sen!2snz!4v1691712000000!5m2!1sen!2snz"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px", marginTop: "24px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Portobello Plumbing - Mt Albert, Auckland"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div>
            <Image
              className="logo"
              src="/portobello-logo.png"
              alt="Portobello Plumbing Co"
              width={1912}
              height={796}
            />
          </div>
          <div>
            <h2 className="footer__heading">Quick links</h2>
            <div className="footer__links">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="footer__heading">Contact</h2>
            <div className="footer__links">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={site.emailHref}>{site.email}</a>
              <span>Central & West Auckland</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Portobello Plumbing Co. All rights
            reserved.
          </span>
          <div className="footer__legal">
            <a href="/terms">Terms of Trade</a>
            <a href="/pre-purchase-terms">Pre-purchase inspection terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.name,
    url: site.url,
    telephone: "+64 27 549 9090",
    email: site.email,
    image: `${site.url}/portobello-logo.png`,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Auckland" },
      { "@type": "Place", name: "Central Auckland" },
      { "@type": "Place", name: "West Auckland" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "15A Sainsbury Rd",
      addressLocality: "Mt Albert",
      addressRegion: "Auckland",
      postalCode: "1025",
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -36.8856,
      longitude: 174.7166,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas do you cover in Auckland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover Central and West Auckland suburbs including Grey Lynn, Ponsonby, Mt Eden, Mt Albert, Sandringham, Avondale, Henderson, New Lynn, and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free quotes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free quotes for most plumbing work. Give us a call on 027 549 9090 or fill out our contact form with details of the job.",
        },
      },
      {
        "@type": "Question",
        name: "What are your rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our call-out fee is $130 + GST which includes travel and the first 30 minutes on site. After that, we charge $100 + GST per hour, billed in 15-minute increments. Materials are quoted separately.",
        },
      },
      {
        "@type": "Question",
        name: "Are you a licensed plumber?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Johnny is a New Zealand registered and licensed plumber with full qualifications and insurance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle emergency plumbing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle urgent plumbing issues during business hours (Mon-Fri 7:30am-5pm). For emergencies, call us on 027 549 9090 and we will do our best to help as soon as possible.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Reviews />
        <Areas />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-call" href={site.phoneHref}>
        <Phone size={18} fill="currentColor" aria-hidden="true" />
        Call {site.phoneDisplay}
      </a>
    </>
  );
}
