const puppeteer = require('puppeteer');

describe('User login', () => {
   let browser;
   let page;

   beforeAll(async () => {
       browser = await puppeteer.launch({
          browser: 'chrome',
          headless: false,
       });
       page = await browser.newPage();
   });

   afterAll(async () => {
      await browser.close();
   });

   it('Successful login with valid credentials', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');

      // Log in
      await page.type('#username', 'user');
      await page.type('#password', 'user');
      await page.click('button[type="submit"]');

      // Assert expected text
      // const successElement = await page.$('#success'); // It can be flaky
	  const successElement = await page.waitForSelector('#success');
      expect(await successElement?.evaluate(el => el.textContent)).toContain('Login successful');

      // Take screenshot
      await page.screenshot({ path: 'login-puppeteer.png' });
   });
});