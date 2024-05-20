describe('Slow login', () => {
   it('Successful login with valid credentials', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-slow.html');

      // Log in
      await page.type('#username', 'user');
      await page.type('#password', 'user');
      await page.click('button[type="submit"]');

      // Assert expected text
      const successElement = await page.waitForSelector('#success', {visible: true})
      const successElementText = await page.evaluate(successElement => successElement.textContent, successElement);
      expect(successElementText).toContain('Login successful')

      // Take screenshot
      await page.screenshot({ path: 'slow-login-puppeteer.png' });
   });
});