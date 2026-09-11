import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://k-ch-vere.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/k-ch-vere.png' });
  await browser.close();
})();
