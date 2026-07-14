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
  { label: "Auckland-wide", icon: MapPin },
  { label: "Clear communication", icon: ThumbsUp },
  { label: "Quality workmanship", icon: ShieldCheck },
  { label: "Tidy & respectful", icon: Sparkles },
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
    copy: "Practical solutions and considered workmanship — not a short-term patch-up.",
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
    <main>
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
                Request a callback
              </a>
            </div>
            <ul className="hero__trust">
              <li>
                <Check size={18} strokeWidth={3} aria-hidden="true" />
                Auckland-wide service
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
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=85"
                alt="Plumber installing pipework beneath a kitchen sink"
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="hero__sticker" aria-hidden="true">
              Auckland
              <br />
              wide
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
    </main>
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
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=85"
            alt="Tradesperson working carefully on site"
            fill
            sizes="(max-width: 980px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="eyebrow">Meet Portobello</p>
          <h2 className="section-title">
            Plumbing with a bit more personality.
          </h2>
          <p className="about__copy">
            Portobello Plumbing Co is a proudly local Auckland plumbing outfit.
            We believe a good tradie should be easy to reach, easy to understand
            and genuinely care about the finished job. That means listening
            properly, giving you straight answers and treating your place like
            our own.
          </p>
          <ul className="about__checks">
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Honest advice
            </li>
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Practical solutions
            </li>
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Friendly service
            </li>
            <li>
              <BadgeCheck size={21} aria-hidden="true" /> Auckland know-how
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
          <h2 className="section-title">Auckland is our patch.</h2>
          <p className="section-intro">
            Based in Auckland and working across the region. Not sure if
            you&apos;re in range? Give us a ring and we&apos;ll let you know.
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

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell contact__grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">Tell us what needs sorting.</h2>
          <p className="section-intro">
            Send through a few details and we&apos;ll get back to you. If
            it&apos;s urgent, calling is always best.
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
              Hours by arrangement
            </div>
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
              <span>Auckland-wide service</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Portobello Plumbing Co. All rights
            reserved.
          </span>
          <span>Built for homes across Tāmaki Makaurau.</span>
        </div>
      </div>
    </footer>
  );
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.name,
    url: site.url,
    telephone: "+64 27 549 9090",
    email: site.email,
    image: `${site.url}/portobello-logo.png`,
    areaServed: {
      "@type": "City",
      name: "Auckland",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressCountry: "NZ",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Reviews />
      <Areas />
      <Contact />
      <Footer />
      <a className="mobile-call" href={site.phoneHref}>
        <Phone size={18} fill="currentColor" aria-hidden="true" />
        Call {site.phoneDisplay}
      </a>
    </>
  );
}
