import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "../dist");
const SITEMAP_PATH = path.join(DIST_DIR, "sitemap.xml");
const PORT = 4173; // Default Vite preview port
const BASE_URL = `http://localhost:${PORT}`;

async function prerender() {
  console.log("Starting prerendering...");

  // 1. Start the server
  console.log("Starting preview server...");
  const server = spawn("npm", ["run", "preview"], {
    cwd: path.join(__dirname, ".."),
    stdio: "inherit",
    shell: true,
  });

  // Give the server some time to start
  await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    // 2. Read sitemap to get routes
    if (!fs.existsSync(SITEMAP_PATH)) {
      throw new Error(
        `Sitemap not found at ${SITEMAP_PATH}. Make sure to build and generate sitemap first.`
      );
    }

    const sitemapContent = fs.readFileSync(SITEMAP_PATH, "utf-8");
    const urls = [];
    const locRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = locRegex.exec(sitemapContent)) !== null) {
      urls.push(match[1]);
    }

    console.log(`Found ${urls.length} URLs to prerender.`);

    // 3. Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    for (const url of urls) {
      try {
        // Convert absolute URL to local preview URL
        // e.g., https://travelstays.world/about -> http://localhost:4173/about
        const relativePath = url.replace("https://travelstays.world", "");
        const localUrl = `${BASE_URL}${relativePath}`;

        console.log(`Prerendering: ${relativePath} (${localUrl})`);

        await page.goto(localUrl, {
          waitUntil: "networkidle0",
          timeout: 30000,
        });

        // Get HTML
        const html = await page.content();

        // Determine save path
        // e.g., /about -> dist/about/index.html
        // e.g., / -> dist/index.html
        let savePath;
        if (relativePath === "/" || relativePath === "") {
          savePath = path.join(DIST_DIR, "index.html");
        } else {
          const dir = path.join(DIST_DIR, relativePath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          savePath = path.join(dir, "index.html");
        }

        fs.writeFileSync(savePath, html);
        console.log(`Saved to ${savePath}`);
      } catch (err) {
        console.error(`Failed to prerender ${url}:`, err);
      }
    }

    await browser.close();
    console.log("Prerendering complete.");
  } catch (error) {
    console.error("Prerendering failed:", error);
  } finally {
    // 4. Kill the server
    console.log("Stopping preview server...");
    server.kill();
    process.exit(0);
  }
}

prerender();
