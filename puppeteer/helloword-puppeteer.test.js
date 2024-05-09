it('Puppeteer Hello World', async () => {  
   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');
   await page.type('#username', 'user');
   await page.type('#password', 'user');
   await page.click('button[type="submit"]');

   const element = await page.$('#success');
   const elementText = await page.evaluate(element => element.textContent, element);
   expect(elementText).toContain('Login successful')

   await page.screenshot({ path: 'helloword-puppeteer.png' });
 });
