import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Auckland Plumber | Central & West Auckland | Portobello Plumbing Co",
    template: "%s | Portobello Plumbing Co",
  },
  description:
    "Licensed Auckland plumber covering Grey Lynn, Ponsonby, Mt Eden, Mt Albert & Central/West suburbs. Hot water, blocked drains, bathrooms. Call 027 549 9090 for a free quote.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Auckland Plumber | Central & West Auckland | Portobello Plumbing Co",
    description:
      "Licensed Auckland plumber covering Grey Lynn, Ponsonby, Mt Eden & Central/West suburbs. Call 027 549 9090.",
    url: site.url,
    siteName: site.name,
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "/portobello-logo.png",
        width: 2400,
        height: 999,
        alt: "Portobello Plumbing Co",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portobello Plumbing Co",
    description: "Great plumbing. No dramas. Locally owned.",
    images: ["/portobello-logo.png"],
  },
  icons: {
    icon: "/portobello-icon.png",
    apple: "/portobello-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f46b39",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
