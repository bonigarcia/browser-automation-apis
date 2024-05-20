describe('User login', () => {
   it('Successful login with valid credentials', () => {
      // Open system under test (SUT)
      cy.visit('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');
	
      // Log in
      cy.get('#username').type('user');
      cy.get('#password').type('user');
      cy.get('button[type="submit"]').click();

      // Assert expected text
      cy.get('#success').contains('Login successful');

      // Take screenshot
      cy.screenshot('login-cypress');
  });
});