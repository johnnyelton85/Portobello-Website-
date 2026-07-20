import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: LegalPageProps) {
  return (
    <>
      <div className="topbar">
        <div className="shell topbar__inner">
          Plumbing trouble? <strong>Call {site.phoneDisplay}</strong>
        </div>
      </div>
      <header className="legal-header">
        <div className="shell legal-header__inner">
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
          <Link className="legal-header__back" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to the website
          </Link>
        </div>
      </header>
      <main className="legal-page">
        <div className="shell legal-page__layout">
          <aside className="legal-page__intro">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="section-title">{title}</h1>
            <p>{intro}</p>
          </aside>
          <article className="legal-copy">{children}</article>
        </div>
      </main>
      <footer className="legal-footer">
        <div className="shell legal-footer__inner">
          <span>© {new Date().getFullYear()} Portobello Plumbing Co.</span>
          <div>
            <Link href="/terms">Terms of Trade</Link>
            <Link href="/pre-purchase-terms">Pre-purchase inspection terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
