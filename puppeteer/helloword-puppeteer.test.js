describe('Hello World with Puppeteer', () => {
   it('Login in practice site', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');

      // Log in
      await page.type('#username', 'user');
      await page.type('#password', 'user');
      await page.click('button[type="submit"]');

      // Get success element
      const successElement = await page.$('#success');

      // Assert expected text
      const successElementText = await page.evaluate(successElement => successElement.textContent, successElement);
      expect(successElementText).toContain('Login successful')

      // Take screenshot
      await page.screenshot({ path: 'helloword-puppeteer.png' });
   });
});