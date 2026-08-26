import fs from "fs";
import path from "path";

const sitemapPath = "./public/sitemap.xml";

const sectors = ["restaurantes", "clinicas-dentales", "talleres-mecanicos", "peluquerias", "gestorias", "veterinarias", "centros-de-estetica", "abogados", "fisioterapeutas"];
const cities = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", 
  "bilbao", "alicante", "murcia", "granada", "jaen", "cadiz", "huelva", "almeria"
];

const newServices = ["seo-local", "google-business-profile", "mantenimiento-web"];
const localServices = ["diseno-web", "seo-local"];

const staticRoutes = [
  "/",
  "/blog",
  "/blog/cuanto-cuesta-pagina-web-espana",
  "/blog/cuanto-cuesta-pagina-web-restaurante",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
  "/diseno-web-para-empresas",
  "/portfolio"
];

const baseUrl = "https://potenciatunegocio.eu";

let content = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const route of staticRoutes) {
  content += `  <url>\n    <loc>${baseUrl}${route === '/' ? '' : route}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
}

for (const sector of sectors) {
  content += `  <url>\n    <loc>${baseUrl}/web-para-${sector}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

for (const service of newServices) {
  content += `  <url>\n    <loc>${baseUrl}/${service}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

for (const lService of localServices) {
  for (const city of cities) {
    content += `  <url>\n    <loc>${baseUrl}/${lService}/${city}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }
}

for (const sector of sectors) {
  for (const city of cities) {
    content += `  <url>\n    <loc>${baseUrl}/diseno-web-para-${sector}/${city}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  }
}

content += "</urlset>\n";

fs.writeFileSync(sitemapPath, content);
console.log(`Sitemap generated successfully at ${sitemapPath} with ${sectors.length * cities.length + sectors.length + newServices.length + localServices.length * cities.length + staticRoutes.length} URLs.`);
