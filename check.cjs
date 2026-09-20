const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  
  page.on("pageerror", err => console.log("PAGE_ERROR:", err.toString()));
  page.on("console", msg => {
    if (msg.type() === "error") console.log("CONSOLE_ERROR:", msg.text());
  });

  await page.goto("http://localhost:8082/");
  await new Promise(r => setTimeout(r, 2000));
  
  const content = await page.content();
  if (content.includes("Esta página no cargó")) {
    console.log("FOUND ERROR BOUNDARY TEXT!");
  } else {
    console.log("No error boundary found on page.");
  }
  
  await browser.close();
})();
