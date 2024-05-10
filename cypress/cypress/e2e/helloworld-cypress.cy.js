describe('Hello World with Cypress', () => {
   it('Login in practice site', () => {
      // Open system under test (SUT)
      cy.visit('https://bonigarcia.dev/selenium-webdriver-java/login-form.html');
	
      // Log in
      cy.get('#username').type('user');
      cy.get('#password').type('user');
      cy.contains('Submit').click();

      // Assert text
      cy.contains('Login successful');
	  
      // Take screenshot
      cy.screenshot("helloworld-cypress");
  })
})