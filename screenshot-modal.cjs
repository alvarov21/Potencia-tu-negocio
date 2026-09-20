const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto("http://localhost:8080/");
  await new Promise(r => setTimeout(r, 2000));
  
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btn = buttons.find(b => b.textContent && b.textContent.includes('Ver 10 razones'));
    if (btn) btn.click();
  });
  
  await new Promise(r => setTimeout(r, 1000)); // wait for modal
  await page.screenshot({ path: "/Users/alvarovalverde/.gemini/antigravity/brain/8f64822a-d7c2-4b0b-b95e-0c3ed63d8c11/scratch/modal-desktop-1440.png" });
  console.log("Desktop Modal captured");
  
  await browser.close();
})();
