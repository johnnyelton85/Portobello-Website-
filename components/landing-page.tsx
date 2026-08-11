import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { site, reviews as allReviews } from "@/data/site";

type Service = { title: string; description: string };

type LandingPageProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string;
  services: Service[];
  checks: string[];
};

export function LandingPage({
  eyebrow,
  headline,
  subheadline,
  intro,
  services,
  checks,
}: LandingPageProps) {
  return (
    <>
      <div className="topbar">
        <div className="shell topbar__inner">
          Plumbing trouble? <strong>Call {site.phoneDisplay}</strong>
        </div>
      </div>
      <header className="header">
        <div className="shell header__inner">
          <Link href="/" aria-label="Portobello Plumbing Co — home">
            <Image
              className="logo"
              src="/portobello-logo.png"
              alt="Portobello Plumbing Co"
              width={1912}
              height={796}
              priority
            />
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="/#services">Services</Link>
            <Link href="/#about">About</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <Link className="button" href="/#contact">
            Get a quote
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="lp-hero">
          <div className="shell lp-hero__inner">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display">{headline}</h1>
            <p className="lp-hero__lead">{subheadline}</p>
            <div className="hero__actions">
              <Link className="button" href={site.phoneHref}>
                <Phone size={18} fill="currentColor" aria-hidden="true" />
                Call {site.phoneDisplay}
              </Link>
              <Link className="button button--light" href="/#contact">
                Request a quote
              </Link>
            </div>
            <ul className="hero__trust">
              <li>
                <BadgeCheck size={18} aria-hidden="true" />
                NZ licensed plumber
              </li>
              <li>
                <BadgeCheck size={18} aria-hidden="true" />
                Free on-site quotes
              </li>
              <li>
                <BadgeCheck size={18} aria-hidden="true" />
                12-month workmanship warranty
              </li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="section lp-intro">
          <div className="shell">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">Plumbing sorted, properly.</h2>
            <p className="section-intro lp-intro__text">{intro}</p>
            <div className="lp-services">
              {services.map((s) => (
                <div className="lp-service" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section about" id="about">
          <div className="shell about__grid">
            <div className="about__portrait">
              <Image
                src="/johnny-profile-close.jpg"
                alt="Johnny from Portobello Plumbing Co"
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
                {checks.map((c) => (
                  <li key={c}>
                    <BadgeCheck size={21} aria-hidden="true" /> {c}
                  </li>
                ))}
              </ul>
              <Link className="button button--light" href={site.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                Have a chat
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section reviews">
          <div className="shell">
            <div className="reviews__head">
              <div>
                <p className="eyebrow">Word on the street</p>
                <h2 className="section-title">What locals say.</h2>
              </div>
            </div>
            <div className="review-grid">
              {allReviews.map((r) => (
                <article className="review-card" key={r.name}>
                  <div className="review-card__stars" aria-label="Five stars">★★★★★</div>
                  <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                  <div className="review-card__author">
                    {r.name}
                    <span>{r.suburb}, Auckland</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section contact" id="contact">
          <div className="shell lp-contact">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="section-title">Tell us what needs sorting.</h2>
              <p className="section-intro">
                Call us for a free phone estimate or fill in the form below to
                arrange a free on-site quote. We&apos;ll get back to you
                quickly.
              </p>
              <div className="contact__details">
                <Link className="contact__detail" href={site.phoneHref}>
                  <span><Phone size={19} aria-hidden="true" /></span>
                  {site.phoneDisplay}
                </Link>
                <Link className="contact__detail" href={site.emailHref}>
                  <span><Mail size={19} aria-hidden="true" /></span>
                  {site.email}
                </Link>
                <div className="contact__detail">
                  <span><MapPin size={19} aria-hidden="true" /></span>
                  {site.location}
                </div>
                <div className="contact__detail">
                  <span><Clock3 size={19} aria-hidden="true" /></span>
                  {site.hours}
                </div>
              </div>
            </div>
            <div className="lp-contact__cta">
              <Link className="button" href={site.phoneHref}>
                <Phone size={18} fill="currentColor" aria-hidden="true" />
                Call {site.phoneDisplay}
              </Link>
              <Link className="button button--light" href="mailto:hello@portobelloplumbing.co.nz">
                <Mail size={18} aria-hidden="true" />
                Email us
              </Link>
              <Link className="button button--outline" href="/">
                Visit our full website
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

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
                <Link href="/#services">Services</Link>
                <Link href="/#about">About</Link>
                <Link href="/#reviews">Reviews</Link>
                <Link href="/#contact">Contact</Link>
              </div>
            </div>
            <div>
              <h2 className="footer__heading">Contact</h2>
              <div className="footer__links">
                <Link href={site.phoneHref}>{site.phoneDisplay}</Link>
                <Link href={site.emailHref}>{site.email}</Link>
                <span>Central & West Auckland</span>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Portobello Plumbing Co. All rights reserved.</span>
            <div className="footer__legal">
              <Link href="/terms">Terms of Trade</Link>
            </div>
          </div>
          <div className="footer__pages">
            <Link href="/plumber-grey-lynn">Plumber Grey Lynn</Link>
            <Link href="/plumber-ponsonby">Plumber Ponsonby</Link>
            <Link href="/plumber-mt-albert">Plumber Mt Albert</Link>
            <Link href="/plumber-mt-eden">Plumber Mt Eden</Link>
            <Link href="/hot-water-cylinder-auckland">Hot Water Cylinder Auckland</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
