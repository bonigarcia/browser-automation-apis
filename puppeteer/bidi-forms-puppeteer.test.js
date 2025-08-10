const puppeteer = require('puppeteer');

describe('Form interaction with Puppeteer and BiDi', () => {
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

   it('Fill and submit a form', async () => {
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');

      const name = 'Alice';
      await page.type('input[name="my-text"]', name);
      await page.type('input[name="my-password"]', 'Secret');

      const nameValue = await page.$eval(
         'input[name="my-text"]',
         el => el.value
      );

      expect(nameValue).toBe(name);
   });

   afterAll(async () => {
      await browser.close();
   });

});