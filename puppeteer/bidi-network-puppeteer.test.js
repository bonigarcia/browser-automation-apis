const puppeteer = require('puppeteer');

describe('Network interception with Puppeteer and BiDi', () => {
   let browser;
   let page;

   beforeAll(async () => {
      browser = await puppeteer.launch({
         browser: 'chrome',
         protocol: 'webDriverBiDi',
         headless: false,
         args: ['--no-sandbox'], // This is required to run tests in CI
      });
      page = await browser.newPage();
   });


   it('logs all network requests', async () => {
      const urls = [];
      page.on('request', req => urls.push(req.url()));

      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');

      expect(urls.some(url => url.includes('bonigarcia.dev'))).toBe(true);
   });

   afterAll(async () => {
      await browser.close();
   });

});