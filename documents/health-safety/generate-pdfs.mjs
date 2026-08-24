import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "pdfs");

const documents = [
  {
    html: "company-health-and-safety-policy.html",
    pdf: "Portobello-Plumbing-Company-Health-and-Safety-Policy.pdf",
  },
  {
    html: "health-and-safety-management-plan.html",
    pdf: "Portobello-Plumbing-Health-and-Safety-Management-Plan.pdf",
  },
  {
    html: "harm-register-risk-management.html",
    pdf: "Portobello-Plumbing-Harm-Register-Risk-Management.pdf",
  },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext();

for (const doc of documents) {
  const page = await context.newPage();
  const htmlPath = path.join(root, doc.html);
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.pdf({
    path: path.join(outDir, doc.pdf),
    format: "A4",
    printBackground: true,
    margin: { top: "12mm", bottom: "14mm", left: "12mm", right: "12mm" },
  });
  await page.close();
  console.log(`Wrote ${doc.pdf}`);
}

await browser.close();
