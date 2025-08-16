const { test, expect } = require('@playwright/test');

test('Slow login', async ({ page }) => {
   // Open system under test (SUT)
   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-slow.html');

   // Log in
   await page.locator('#username').fill('user');
   await page.locator('#password').fill('user');
   await page.locator('button[type="submit"]').click()

   // Assert expected text
   await expect(page.locator('#success')).toHaveText('Login successful');

   // Take screenshot
   await page.screenshot({ path: 'slow-login-playwright.png' });
});