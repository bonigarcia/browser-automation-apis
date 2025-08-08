const puppeteer = require('puppeteer');

(async () => {
   // Launch Chrome
   const browser = await puppeteer.launch({ headless: true });
   const page = await browser.newPage();

   // Navigate to web page
   const url = 'https://bonigarcia.dev/selenium-webdriver-java/';
   await page.goto(url);

   // Check page title
   const title = await page.title();
   console.log(`The title of ${url} is ${title}`);

   // Close Chrome
   await browser.close();
})();