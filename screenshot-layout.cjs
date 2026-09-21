const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto("http://localhost:8080/#ventajas");
  await new Promise(r => setTimeout(r, 2000));
  
  const section = await page.$("#ventajas");
  if (section) {
    await section.screenshot({ path: "/Users/alvarovalverde/.gemini/antigravity/brain/8f64822a-d7c2-4b0b-b95e-0c3ed63d8c11/scratch/layout-desktop-1440.png" });
    console.log("Desktop Layout captured");
  } else {
    console.log("Section not found");
  }

  await browser.close();
})();
