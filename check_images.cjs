const https = require("https");

const baseUrl =
  "https://res.cloudinary.com/drauz5jps/image/upload/travel_stays_assets/Trichy";
const properties = [
  { name: "Amman Lodge", tier: "Budget" },
  { name: "Hotel Rhythm Grand Suite", tier: "Budget" },
  { name: "Hotel Blossoms", tier: "Premium" },
  { name: "Courtyard by Marriott Tiruchirappalli", tier: "Luxury" },
];

const filenames = [
  "1.webp",
  "1.jpg",
  "main.webp",
  "main.jpg",
  "exterior.webp",
  "exterior.jpg",
  "view.webp",
  "view.jpg",
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        resolve({ url, status: res.statusCode });
      })
      .on("error", () => {
        resolve({ url, status: "error" });
      });
  });
}

async function checkImages() {
  for (const p of properties) {
    console.log(`Checking ${p.name}...`);
    const encodedName = encodeURIComponent(p.name);
    for (const f of filenames) {
      const url = `${baseUrl}/${p.tier}/${encodedName}/${f}`;
      const result = await checkUrl(url);
      if (result.status === 200) {
        console.log(`FOUND: ${url}`);
      }
    }
  }
}

checkImages();
