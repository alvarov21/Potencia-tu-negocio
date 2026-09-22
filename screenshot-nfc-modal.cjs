const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto("http://localhost:8080/#precios");
  await new Promise(r => setTimeout(r, 2000));
  
  // Click the "Ver detalles del Software" button
  const buttons = await page.$$("button");
  let clicked = false;
  for (let btn of buttons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes("Ver detalles del Software")) {
      await btn.click();
      clicked = true;
      break;
    }
  }
  
  if (clicked) {
    await new Promise(r => setTimeout(r, 1000)); // wait for modal animation
    await page.screenshot({ path: "/Users/alvarovalverde/.gemini/antigravity/brain/8f64822a-d7c2-4b0b-b95e-0c3ed63d8c11/scratch/modal-nfc-style.png" });
    console.log("Modal captured");
  } else {
    console.log("Button not found");
  }

  await browser.close();
})();
