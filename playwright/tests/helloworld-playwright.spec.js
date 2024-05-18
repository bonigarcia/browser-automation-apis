const { test, expect } = require('@playwright/test');

test('Hello World Playwright', async ({ page }) => {
   // Open system under test (SUT)
   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');

   // Log in
   await page.locator('#username').fill('user');
   await page.locator('#password').fill('user');
   await page.locator('button[type="submit"]').click()

   // Get success element
   const successElement = page.locator('#success');
   await successElement.waitFor();

   // Assert expected text
   expect(successElement).toHaveText('Login successful');

   // Take screenshot
   await page.screenshot({ path: 'helloworld-playwright.png' });
});