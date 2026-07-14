# Portobello Plumbing Co

A conversion-focused, single-page website for Portobello Plumbing Co in
Auckland, New Zealand.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run lint
npm run build
npm start
```

## Editing content

Business details, services, service areas and testimonials live in
[`data/site.ts`](data/site.ts). Brand colors are CSS variables at the top of
[`app/globals.css`](app/globals.css).

The supplied brand artwork has been converted into:

- `public/portobello-logo.png` — optimized transparent site logo
- `public/portobello-logo.svg` — vector source for supported uses
- `public/portobello-icon.png` — favicon/social icon

## Before launch

The current build is a polished prototype. Complete these items before
publishing:

- Replace all `Sample customer` testimonials with verified customer reviews.
- Confirm every service and business claim is accurate. Add licence details
  only after confirming the correct PGDB information.
- Replace `hello@portobelloplumbing.co.nz` if that mailbox is not active.
- Connect `app/api/contact/route.ts` to an email or CRM provider. It currently
  validates and logs submissions but does not send them externally.
- Confirm business hours, base suburb and final domain.
- Replace the placeholder Unsplash images with owned Portobello photography.
- Add a privacy policy before collecting customer details publicly.

## Deployment

Deploy to Vercel and set the production domain. No environment variables are
required for the prototype. An email provider will require its own API key once
the contact form is connected.
