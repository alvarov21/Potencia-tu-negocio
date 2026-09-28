import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

// Genera public/sitemap.xml antes de cada build.
// - Los artículos del blog se detectan solos (src/routes/blog.<slug>.tsx), así que
//   cada artículo nuevo entra en el sitemap sin tocar este archivo.
// - Las fichas del portfolio se leen de PROJECTS en portfolio.$proyecto.tsx
//   (menos las que dan 404 a propósito).
// - <lastmod> sale de la fecha del último commit que tocó el archivo de cada página.
//   Si no hay historial de git completo (p. ej. un clon superficial en el servidor
//   de build), se conserva la fecha que ya tenía el sitemap. Nunca rompe el build.

const sitemapPath = "./public/sitemap.xml";
const routesDir = "./src/routes";
const baseUrl = "https://potenciatunegocio.eu";
const today = new Date().toISOString().slice(0, 10);

const sectors = ["restaurantes", "clinicas-dentales", "talleres-mecanicos", "peluquerias", "gestorias", "veterinarias", "centros-de-estetica", "abogados", "fisioterapeutas"];
const cities = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza",
  "bilbao", "alicante", "murcia", "granada", "jaen", "cadiz", "huelva", "almeria"
];

const newServices = ["seo-local", "google-business-profile", "mantenimiento-web"];

// Fichas del portfolio que responden 404 a propósito (sin maqueta propia todavía)
const PORTFOLIO_EXCLUDED = new Set(["demo-taller"]);

const r = (file) => path.join(routesDir, file);
const GEO = "./src/data/geoContent.ts";
const SECTOR_TEMPLATE = "./src/components/templates/SectorPillarTemplate.tsx";

// [ruta, prioridad, archivos de los que depende su contenido]
const entries = [];
const add = (route, priority, files) => entries.push({ route, priority, files });

add("/", "1.0", [r("index.tsx")]);
add("/blog", "0.8", [r("blog.index.tsx")]);

// Artículos del blog: cualquier src/routes/blog.<slug>.tsx que no sea el índice
const blogFiles = fs.readdirSync(routesDir)
  .filter((f) => /^blog\.[a-z0-9-]+\.tsx$/.test(f) && f !== "blog.index.tsx")
  .sort();
for (const f of blogFiles) {
  add(`/blog/${f.slice(5, -4)}`, "0.8", [r(f)]);
}

for (const legal of ["aviso-legal", "politica-de-privacidad", "politica-de-cookies"]) {
  add(`/${legal}`, "0.3", [r(`${legal}.tsx`)]);
}

add("/diseno-web-para-empresas", "0.8", [r("diseno-web-para-empresas.tsx")]);
add("/portfolio", "0.8", [r("portfolio.index.tsx")]);

// Fichas del portfolio publicadas
const portfolioFile = r("portfolio.$proyecto.tsx");
const portfolioSlugs = [...fs.readFileSync(portfolioFile, "utf8").matchAll(/^\s{2}"([a-z0-9-]+)":\s*\{/gm)]
  .map((m) => m[1])
  .filter((slug) => !PORTFOLIO_EXCLUDED.has(slug));
for (const slug of portfolioSlugs) {
  add(`/portfolio/${slug}`, "0.6", [portfolioFile]);
}

add("/mapa-del-sitio", "0.5", [r("mapa-del-sitio.tsx")]);

for (const sector of sectors) {
  add(`/web-para-${sector}`, "0.8", [r(`web-para-${sector}.tsx`), SECTOR_TEMPLATE]);
}

for (const service of newServices) {
  const file = fs.existsSync(r(`${service}.index.tsx`)) ? r(`${service}.index.tsx`) : r(`${service}.tsx`);
  add(`/${service}`, "0.8", [file]);
}

for (const city of cities) add(`/diseno-web/${city}`, "0.8", [r("diseno-web.$ciudad.tsx"), GEO]);
for (const city of cities) add(`/seo-local/${city}`, "0.8", [r("seo-local.$ciudad.tsx"), GEO]);

for (const sector of sectors) {
  for (const city of cities) {
    add(`/diseno-web-para-${sector}/${city}`, "0.7", [r("$landingType.$ciudad.tsx"), GEO]);
  }
}

// ---------- lastmod ----------

// Fechas del sitemap anterior, para conservarlas cuando no hay historial fiable
const previous = new Map();
try {
  const old = fs.readFileSync(sitemapPath, "utf8");
  for (const m of old.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
    previous.set(m[1], m[2]);
  }
} catch {}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

let gitAvailable = false;
let shallowRoots = new Set();
try {
  git(["rev-parse", "--git-dir"]);
  gitAvailable = true;
  if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
    const shallowFile = path.join(git(["rev-parse", "--git-dir"]), "shallow");
    if (fs.existsSync(shallowFile)) {
      shallowRoots = new Set(fs.readFileSync(shallowFile, "utf8").split(/\s+/).filter(Boolean));
    }
  }
} catch {}

const dateCache = new Map();
function lastCommitDate(files) {
  const key = files.join("|");
  if (dateCache.has(key)) return dateCache.get(key);
  let result = null;
  if (gitAvailable) {
    try {
      const out = git(["log", "-1", "--format=%H %cs", "--", ...files]);
      const [hash, date] = out.split(" ");
      // En un clon superficial, el commit frontera "contiene" todos los archivos:
      // su fecha no es la de la última modificación real, así que no se usa.
      if (hash && date && !shallowRoots.has(hash)) result = date;
    } catch {}
  }
  dateCache.set(key, result);
  return result;
}

function lastmodFor(loc, files) {
  const fromGit = lastCommitDate(files);
  const prev = previous.get(loc);
  if (fromGit && prev) return fromGit > prev ? fromGit : prev;
  return fromGit || prev || today;
}

// ---------- escritura ----------

let content = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
for (const { route, priority, files } of entries) {
  const loc = `${baseUrl}${route === "/" ? "" : route}`;
  content += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmodFor(loc, files)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}
content += "</urlset>\n";

fs.writeFileSync(sitemapPath, content);
console.log(`Sitemap generated successfully at ${sitemapPath} with ${entries.length} URLs.`);
