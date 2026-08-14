import fs from "fs";

const sitemapPath = "./public/sitemap.xml";
let content = fs.readFileSync(sitemapPath, "utf-8");

const sectors = ["restaurantes", "clinicas-dentales", "talleres-mecanicos", "peluquerias", "gestorias", "veterinarias", "centros-de-estetica", "abogados", "fisioterapeutas"];
const cities = ["madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", "bilbao", "alicante", "murcia"];

const newServices = ["seo-local", "google-business-profile", "mantenimiento-web"];

let newUrls = "";

// 1. Generic sector pillars (e.g. /web-para-abogados)
for (const sector of sectors) {
  const url = `https://potencia-tu-negocio.vercel.app/web-para-${sector}`;
  newUrls += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

// 2. Generic service pages
for (const service of newServices) {
  const url = `https://potencia-tu-negocio.vercel.app/${service}`;
  newUrls += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

// 3. Local cluster combinations
for (const sector of sectors) {
  for (const city of cities) {
    const url = `https://potencia-tu-negocio.vercel.app/diseno-web-para-${sector}/${city}`;
    newUrls += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }
}

content = content.replace("</urlset>", newUrls + "</urlset>");
fs.writeFileSync(sitemapPath, content);
console.log(`Sitemap updated with ${sectors.length * cities.length} dynamic local URLs, ${sectors.length} sector pillars, and ${newServices.length} service pages.`);
