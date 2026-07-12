import fs from "fs";

const sitemapPath = "./public/sitemap.xml";
let content = fs.readFileSync(sitemapPath, "utf-8");

const sectors = ["restaurantes", "clinicas-dentales", "talleres-mecanicos", "peluquerias", "gestorias", "veterinarias", "centros-de-estetica"];
const cities = ["madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", "bilbao", "alicante", "murcia"];

let newUrls = "";

for (const sector of sectors) {
  for (const city of cities) {
    const url = `https://potencia-tu-negocio.vercel.app/diseno-web-para-${sector}/${city}`;
    newUrls += `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }
}

content = content.replace("</urlset>", newUrls + "</urlset>");
fs.writeFileSync(sitemapPath, content);
console.log("Sitemap updated with 70 dynamic local URLs.");
