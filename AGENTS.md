# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 16 (App Router) marketing website for Portobello Plumbing Co. There is no database, Docker stack, or backend service — everything is served by one Next.js process. Package manager is **npm** (`package-lock.json`). Node 20+ is required (verified on Node 22).

Standard commands live in `package.json` and `README.md`; use those rather than duplicating them:
- Dev server: `npm run dev` (serves on port 3000)
- Lint: `npm run lint`
- Build: `npm run build`
- Prod server: `npm start`

Non-obvious notes:
- The contact API at `app/api/contact/route.ts` expects `multipart/form-data` (it calls `request.formData()`), not JSON. A JSON POST returns `400 Invalid request.`. The website's own form submits as form-data, so the UI works out of the box.
- Fergus CRM forwarding is optional and gated on the `FERGUS_API_TOKEN` env var (see `.env.example`). Without it, the contact form still succeeds and just logs the enquiry server-side (`{ ok: true }`). No secrets are needed to run or test the site locally.
- `playwright` is listed as a dependency but there is no test suite or `test` script; there are no automated tests to run.
