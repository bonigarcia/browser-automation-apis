const puppeteer = require('puppeteer');

describe('Hello World with Puppeteer', () => {
   let browser;
   let page;

   beforeAll(async () => {
       browser = await puppeteer.launch();
       page = await browser.newPage();
   });

   afterAll(async () => {
      await browser.close();
   });

   it('Login in practice site', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');

      // Assert web page title
      const title = await page.title();
      expect(title).toContain('Selenium WebDriver');
   });
});