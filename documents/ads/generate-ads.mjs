import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(root, "../../public");
const outDir = path.join(root, "exports");

async function dataUri(name, mime) {
  const buf = await readFile(path.join(publicDir, name));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

const logo = await dataUri("portobello-logo.png", "image/png");
const plumber = await dataUri("portobello-plumber.png", "image/png");
const johnny = await dataUri("johnny-profile-close.jpg", "image/jpeg");

function page({ w, h, body }) {
  return `<!DOCTYPE html>
<html lang="en-NZ">
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --orange: #f46b39;
      --teal: #00adbb;
      --ink: #171718;
      --cream: #fffaf3;
      --muted: #64615e;
      --w: ${w}px;
      --h: ${h}px;
      --u: ${Math.round(w / 40)}px;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; width: var(--w); height: var(--h); overflow: hidden; }
    body {
      background: var(--cream);
      color: var(--ink);
      font-family: Manrope, sans-serif;
    }
    .ad {
      position: relative;
      width: var(--w);
      height: var(--h);
      overflow: hidden;
      background: var(--cream);
    }
    .bar {
      background: var(--orange);
      color: #fff;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .logo { display: block; height: auto; }
    .eyebrow {
      display: flex;
      align-items: center;
      gap: 0.45em;
      margin: 0;
      color: var(--teal);
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .eyebrow::before {
      width: 1.5em;
      height: 0.22em;
      border-radius: 99px;
      background: var(--orange);
      content: "";
    }
    h1 {
      margin: 0;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 800;
      letter-spacing: -0.035em;
      line-height: 0.84;
      text-transform: uppercase;
    }
    h1 em { color: var(--orange); font-style: normal; }
    .cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 3px solid var(--ink);
      border-radius: 999px;
      background: var(--orange);
      box-shadow: 5px 5px 0 var(--ink);
      color: var(--ink);
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .sub { margin: 0; color: var(--muted); font-weight: 650; }
    .foot { color: var(--muted); font-weight: 700; }
    .photo {
      object-fit: cover;
      background: #ddd;
    }
    .plumber {
      object-fit: contain;
      object-position: bottom center;
    }
  </style>
</head>
<body>${body}</body>
</html>`;
}

const ads = [
  {
    name: "01-brand-square-1080",
    w: 1080,
    h: 1080,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 14px 36px; font-size: 18px;">Auckland · Local plumber</div>
      <div style="padding: 36px 48px 0;">
        <img class="logo" src="${logo}" alt="" style="width: 420px;" />
        <p class="eyebrow" style="margin-top: 36px; font-size: 20px;">Your local Auckland plumber</p>
        <h1 style="margin-top: 16px; font-size: 118px;">Great plumbing.<br><em>No dramas.</em></h1>
        <p class="sub" style="margin-top: 22px; font-size: 28px; max-width: 28ch;">Repairs, hot water, drains and renovations. Straight-up service from Mt Albert.</p>
        <div class="cta" style="margin-top: 32px; padding: 18px 36px; font-size: 26px;">Call 027 549 9090</div>
      </div>
      <img class="plumber" src="${plumber}" alt="" style="position: absolute; right: -20px; bottom: -8px; height: 58%;" />
    </div>`,
  },
  {
    name: "02-brand-landscape-1200x628",
    w: 1200,
    h: 628,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 10px 32px; font-size: 14px;">Central and West Auckland</div>
      <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; height: calc(100% - 38px);">
        <div style="padding: 28px 40px 32px;">
          <img class="logo" src="${logo}" alt="" style="width: 300px;" />
          <h1 style="margin-top: 22px; font-size: 72px;">Great plumbing.<br><em>No dramas.</em></h1>
          <div class="cta" style="margin-top: 22px; padding: 14px 26px; font-size: 20px;">Call 027 549 9090</div>
        </div>
        <img class="plumber" src="${plumber}" alt="" style="width: 100%; height: 100%; object-position: center 20%;" />
      </div>
    </div>`,
  },
  {
    name: "03-brand-story-1080x1920",
    w: 1080,
    h: 1920,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 18px 40px; font-size: 20px;">Portobello Plumbing Co</div>
      <div style="padding: 48px 48px 0;">
        <p class="eyebrow" style="font-size: 22px;">Mt Albert · Auckland</p>
        <h1 style="margin-top: 20px; font-size: 128px;">Great<br>plumbing.<br><em>No dramas.</em></h1>
        <p class="sub" style="margin-top: 28px; font-size: 32px;">Licensed plumber. Clear communication. Tidy work.</p>
        <div class="cta" style="margin-top: 36px; padding: 22px 40px; font-size: 30px;">Call 027 549 9090</div>
      </div>
      <img class="plumber" src="${plumber}" alt="" style="position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); height: 46%;" />
    </div>`,
  },
  {
    name: "04-hot-water-square-1080",
    w: 1080,
    h: 1080,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 14px 36px; font-size: 18px;">Hot water · Auckland</div>
      <div style="padding: 40px 48px;">
        <img class="logo" src="${logo}" alt="" style="width: 360px;" />
        <p class="eyebrow" style="margin-top: 48px; font-size: 20px;">Cylinder repair and replace</p>
        <h1 style="margin-top: 16px; font-size: 108px;">No hot water?<br><em>We can sort it.</em></h1>
        <p class="sub" style="margin-top: 24px; font-size: 30px;">Repairs, replacements and new installs sized for your house.</p>
        <div class="cta" style="margin-top: 36px; padding: 18px 36px; font-size: 26px;">Call 027 549 9090</div>
        <p class="foot" style="margin-top: 28px; font-size: 20px;">portobelloplumbing.co.nz</p>
      </div>
    </div>`,
  },
  {
    name: "05-blocked-drains-square-1080",
    w: 1080,
    h: 1080,
    body: `
    <div class="ad" style="background: #e8f8f9;">
      <div class="bar" style="padding: 14px 36px; font-size: 18px; background: var(--teal);">Blocked drains</div>
      <div style="padding: 40px 48px;">
        <img class="logo" src="${logo}" alt="" style="width: 360px;" />
        <p class="eyebrow" style="margin-top: 48px; font-size: 20px;">Fast diagnosis</p>
        <h1 style="margin-top: 16px; font-size: 104px;">Drains blocked?<br><em>Get it flowing.</em></h1>
        <p class="sub" style="margin-top: 24px; font-size: 30px;">Practical drainage solutions without the runaround.</p>
        <div class="cta" style="margin-top: 36px; padding: 18px 36px; font-size: 26px;">Call 027 549 9090</div>
      </div>
    </div>`,
  },
  {
    name: "06-pricing-landscape-1200x628",
    w: 1200,
    h: 628,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 10px 32px; font-size: 14px;">Clear pricing · No surprises</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; padding: 36px 40px; height: calc(100% - 38px); align-items: center;">
        <div>
          <img class="logo" src="${logo}" alt="" style="width: 280px;" />
          <h1 style="margin-top: 20px; font-size: 58px;">Straight-up<br><em>pricing.</em></h1>
          <div class="cta" style="margin-top: 20px; padding: 12px 24px; font-size: 18px;">Call 027 549 9090</div>
        </div>
        <div style="display: grid; gap: 16px;">
          <div style="padding: 22px 26px; border: 3px solid var(--ink); background: #fff; box-shadow: 6px 6px 0 var(--orange);">
            <p class="eyebrow" style="font-size: 14px;">Call-out</p>
            <p style="margin: 8px 0 0; font-family: 'Barlow Condensed', sans-serif; font-size: 64px; font-weight: 800; line-height: 0.9;">$130 <span style="font-size: 28px; color: var(--muted);">+ GST</span></p>
            <p class="sub" style="margin-top: 8px; font-size: 16px;">Drive plus first 30 minutes on site.</p>
          </div>
          <div style="padding: 22px 26px; border: 3px solid var(--ink); background: #fff;">
            <p class="eyebrow" style="font-size: 14px;">After that</p>
            <p style="margin: 8px 0 0; font-family: 'Barlow Condensed', sans-serif; font-size: 64px; font-weight: 800; line-height: 0.9;">$100 <span style="font-size: 28px; color: var(--muted);">+ GST / hr</span></p>
            <p class="sub" style="margin-top: 8px; font-size: 16px;">Billed every 15 minutes.</p>
          </div>
        </div>
      </div>
    </div>`,
  },
  {
    name: "07-johnny-square-1080",
    w: 1080,
    h: 1080,
    body: `
    <div class="ad">
      <div style="display: grid; grid-template-rows: 52% 48%; height: 100%;">
        <img class="photo" src="${johnny}" alt="" style="width: 100%; height: 100%; object-position: 50% 18%;" />
        <div style="padding: 32px 40px 36px; background: var(--cream);">
          <p class="eyebrow" style="font-size: 18px;">Meet your plumber</p>
          <h1 style="margin-top: 10px; font-size: 64px;">Johnny. Licensed,<br><em>local, easy to deal with.</em></h1>
          <div class="cta" style="margin-top: 18px; padding: 14px 28px; font-size: 22px;">Call 027 549 9090</div>
        </div>
      </div>
    </div>`,
  },
  {
    name: "08-local-landscape-1200x628",
    w: 1200,
    h: 628,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 10px 32px; font-size: 14px;">Grey Lynn · Ponsonby · Mt Eden · Mt Albert and around</div>
      <div style="padding: 36px 44px;">
        <img class="logo" src="${logo}" alt="" style="width: 300px;" />
        <h1 style="margin-top: 24px; font-size: 78px; max-width: 12ch;">Your local<br><em>Auckland plumber.</em></h1>
        <p class="sub" style="margin-top: 16px; font-size: 24px;">Based in Mt Albert. Covering Central and West.</p>
        <div class="cta" style="margin-top: 22px; padding: 14px 28px; font-size: 20px;">Call 027 549 9090</div>
      </div>
    </div>`,
  },
  {
    name: "09-inspection-square-1080",
    w: 1080,
    h: 1080,
    body: `
    <div class="ad">
      <div class="bar" style="padding: 14px 36px; font-size: 18px;">Before you buy</div>
      <div style="padding: 44px 48px;">
        <img class="logo" src="${logo}" alt="" style="width: 360px;" />
        <p class="eyebrow" style="margin-top: 52px; font-size: 20px;">Pre-purchase inspections</p>
        <h1 style="margin-top: 16px; font-size: 96px;">Know the plumbing<br><em>before you commit.</em></h1>
        <p class="sub" style="margin-top: 24px; font-size: 28px;">A clear report on condition, from a licensed plumber.</p>
        <div class="cta" style="margin-top: 36px; padding: 18px 36px; font-size: 26px;">Call 027 549 9090</div>
      </div>
    </div>`,
  },
  {
    name: "10-display-300x250",
    w: 300,
    h: 250,
    body: `
    <div class="ad" style="padding: 12px 14px 14px; display: flex; flex-direction: column;">
      <img class="logo" src="${logo}" alt="" style="width: 168px;" />
      <h1 style="margin-top: 10px; font-size: 34px;">Great plumbing.<br><em>No dramas.</em></h1>
      <div class="cta" style="margin-top: auto; padding: 8px 12px; font-size: 13px; box-shadow: 3px 3px 0 var(--ink); border-width: 2px;">Call 027 549 9090</div>
    </div>`,
  },
  {
    name: "11-display-300x600",
    w: 300,
    h: 600,
    body: `
    <div class="ad" style="display: flex; flex-direction: column; height: 100%;">
      <div class="bar" style="padding: 8px 12px; font-size: 11px;">Auckland plumber</div>
      <div style="padding: 16px 16px 0; flex: 1;">
        <img class="logo" src="${logo}" alt="" style="width: 200px;" />
        <h1 style="margin-top: 18px; font-size: 42px;">Great plumbing.<br><em>No dramas.</em></h1>
        <p class="sub" style="margin-top: 12px; font-size: 15px;">Hot water, drains, repairs. Mt Albert based.</p>
        <div class="cta" style="margin-top: 16px; padding: 10px 14px; font-size: 14px; box-shadow: 3px 3px 0 var(--ink); border-width: 2px;">Call 027 549 9090</div>
      </div>
      <img class="plumber" src="${plumber}" alt="" style="height: 210px; width: 100%;" />
    </div>`,
  },
  {
    name: "12-display-728x90",
    w: 728,
    h: 90,
    body: `
    <div class="ad" style="display: flex; align-items: center; gap: 16px; padding: 0 14px;">
      <img class="logo" src="${logo}" alt="" style="width: 168px; flex-shrink: 0;" />
      <h1 style="font-size: 28px; flex: 1;">Great plumbing. <em>No dramas.</em></h1>
      <div class="cta" style="padding: 8px 14px; font-size: 13px; box-shadow: 3px 3px 0 var(--ink); border-width: 2px;">Call 027 549 9090</div>
    </div>`,
  },
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();

for (const ad of ads) {
  const scale = ad.w <= 728 ? 1 : 2;
  const pg = await browser.newPage({
    viewport: { width: ad.w, height: ad.h },
    deviceScaleFactor: scale,
  });
  await pg.setContent(page(ad), { waitUntil: "networkidle" });
  await pg.screenshot({
    path: path.join(outDir, `${ad.name}.png`),
    type: "png",
    clip: { x: 0, y: 0, width: ad.w, height: ad.h },
  });
  await pg.close();
  console.log(`Wrote ${ad.name}.png`);
}

await browser.close();
