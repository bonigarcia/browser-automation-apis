describe('Hello World with Puppeteer', () => {
   it('Login in practice site', async () => {
      // Open system under test (SUT)
      await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');

      // Assert web page title
      const title = await page.title();
      expect(title).toContain('Selenium WebDriver');
   });
});