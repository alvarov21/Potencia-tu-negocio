const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  
  // 1440px
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto("http://localhost:8080/#ventajas");
  await new Promise(r => setTimeout(r, 2000));
  
  const section = await page.$("#ventajas");
  if (section) {
    await section.screenshot({ path: "/Users/alvarovalverde/.gemini/antigravity/brain/8f64822a-d7c2-4b0b-b95e-0c3ed63d8c11/scratch/desktop-1440.png" });
    console.log("Desktop captured");
  } else {
    console.log("Section not found");
  }

  // 390px
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:8080/#ventajas");
  await new Promise(r => setTimeout(r, 2000));
  
  const sectionMobile = await page.$("#ventajas");
  if (sectionMobile) {
    await sectionMobile.screenshot({ path: "/Users/alvarovalverde/.gemini/antigravity/brain/8f64822a-d7c2-4b0b-b95e-0c3ed63d8c11/scratch/mobile-390.png" });
    console.log("Mobile captured");
  }

  await browser.close();
})();
