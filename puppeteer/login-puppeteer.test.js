describe('User login', () => {
   it('Successful login with valid credentials', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');

      // Log in
      await page.type('#username', 'user');
      await page.type('#password', 'user');
      await page.click('button[type="submit"]');

      // Assert expected text
      const successElement = await page.$('#success'); // It can be flaky
      expect(await successElement?.evaluate(el => el.textContent)).toContain('Login successful');

      // Take screenshot
      await page.screenshot({ path: 'login-puppeteer.png' });
   });
});