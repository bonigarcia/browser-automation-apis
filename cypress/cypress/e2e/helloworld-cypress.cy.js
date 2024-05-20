describe('Hello World Cypress', () => {
   it('Open sample web page and check title', () => {
      // Open system under test (SUT)
      cy.visit('https://bonigarcia.dev/selenium-webdriver-java/');

      // Assert web page title
      cy.title().should('include', 'Selenium WebDriver');
  });
});