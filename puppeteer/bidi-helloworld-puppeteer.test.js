const puppeteer = require('puppeteer');

describe('Hello World with Puppeteer and BiDi', () => {
   let browser;
   let page;

   beforeAll(async () => {
      browser = await puppeteer.launch({
         browser: 'firefox',
         protocol: 'webDriverBiDi',
         headless: false,
      });
      page = await browser.newPage();
   });

   it('Open sample web page and check title', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');

      // Assert web page title
      const title = await page.title();
      expect(title).toContain('Selenium WebDriver');
   });

   afterAll(async () => {
      await browser.close();
   });

});