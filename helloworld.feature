Feature: Hello World

  Scenario: Open sample web page and check title
    Given the user is on page "https://bonigarcia.dev/selenium-webdriver-java/"
    Then "Selenium WebDriver" is shown as as part of the page title