const { test, expect } = require('@playwright/test');

test('Hello World Playwright', async ({ page }) => {
   // Open system under test (SUT)
   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');
  
   // Log in
   await page.fill('#username', 'user');
   await page.fill('#password', 'user');
   await page.click('button[type="submit"]');

   // Assert text
   await expect(page.locator('#success')).toHaveText('Login successful'); 
  
   // Take screenshot
   await page.screenshot({ path: 'helloworld-playwright.png' });
});