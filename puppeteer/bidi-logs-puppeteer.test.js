const puppeteer = require('puppeteer');

describe('Log gathering with Puppeteer and BiDi', () => {
   let browser;
   let page;

   beforeAll(async () => {
      browser = await puppeteer.launch({
         browser: 'firefox',
         protocol: 'webDriverBiDi',
         headless: false,
         args: ['--no-sandbox'], // This is required to run tests in CI
      });
      page = await browser.newPage();
   });


   it('Capture console logs via BiDi', async () => {
      const messages = [];
      page.on('console', msg => {
         messages.push(msg.text());
         console.log(`Console message: ${msg.text()}`);
      });

      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');
      const message = 'Hello from the page!';

      await page.evaluate((text) => console.log(text), message);
      expect(messages).toContain(message);
   });

   afterAll(async () => {
      await browser.close();
   });

});