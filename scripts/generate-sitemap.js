import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Since we can't easily import TS files in a simple Node script without setup,
// and we just need IDs, we'll fetch them or just parse the file if simple.
// But for this environment, let's try to read the properties.ts file content and regex out the IDs
// or just assume we can run this with bun which supports TS.
// The user has 'bun.lockb' so they might be using bun.
// Let's try to import the data directly if we run with bun.

// However, to be safe and simple for a script that might run in node:
// We will define the static routes and for dynamic routes (properties),
// we will try to parse the properties.ts file text to extract IDs.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://travelstays.world";

const staticRoutes = [
  { path: "/", priority: "1.00", changefreq: "daily" },
  { path: "/destinations", priority: "0.90", changefreq: "weekly" },
  { path: "/allvillas", priority: "0.85", changefreq: "weekly" },
  { path: "/about", priority: "0.60", changefreq: "yearly" },
  { path: "/magazine", priority: "0.75", changefreq: "weekly" },
  { path: "/contact-us", priority: "0.50", changefreq: "yearly" },
  { path: "/map", priority: "0.70", changefreq: "monthly" },
  // Default others to 0.8 weekly
  { path: "/owners-managers", priority: "0.80", changefreq: "weekly" },
  { path: "/terms-conditions", priority: "0.80", changefreq: "weekly" },
  { path: "/villa-rentals-faq", priority: "0.80", changefreq: "weekly" },
  { path: "/agents-resources", priority: "0.80", changefreq: "weekly" },
  { path: "/privacy-policy", priority: "0.80", changefreq: "weekly" },
  { path: "/sitemap", priority: "0.80", changefreq: "weekly" },
];

async function generateSitemap() {
  let propertyIds = [];

  try {
    // Read properties.ts
    const propertiesPath = path.join(__dirname, "../src/data/properties.ts");
    const propertiesContent = fs.readFileSync(propertiesPath, "utf-8");

    // Simple regex to find ids in the properties array
    // Assuming structure like: id: 1, or id: "1",
    const idMatches = propertiesContent.match(/id:\s*['"]?(\d+)['"]?/g);

    if (idMatches) {
      propertyIds = idMatches
        .map((match) => {
          const m = match.match(/id:\s*['"]?(\d+)['"]?/);
          return m ? m[1] : null;
        })
        .filter((id) => id);
    }

    console.log(`Found ${propertyIds.length} properties.`);
  } catch (error) {
    console.error("Error reading properties file:", error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <!-- ${
      route.path === "/"
        ? "Home"
        : route.path.slice(1).charAt(0).toUpperCase() + route.path.slice(2)
    } -->
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`
  )
  .join("\n")}
${propertyIds
  .map(
    (id) => `  <url>
    <loc>${BASE_URL}/property/${id}</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  const publicDir = path.join(__dirname, "../public");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("Sitemap generated at public/sitemap.xml");
}

generateSitemap();
