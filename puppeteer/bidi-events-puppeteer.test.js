const puppeteer = require('puppeteer');

describe('Lifecycle events with Puppeteer and BiDi', () => {
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


   it('Track DOMContentLoaded and load', async () => {
      const events = [];
      page.on('domcontentloaded', () => events.push('domcontentloaded'));
      page.on('load', () => events.push('load'));

      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');

      expect(events).toEqual(['domcontentloaded', 'load']);
   });

   afterAll(async () => {
      await browser.close();
   });

});