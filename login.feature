Feature: User login

  Scenario: Successful login with valid credentials
    Given the user is on page "https://bonigarcia.dev/selenium-webdriver-java/login-form.html"
    When the user enters "user" in the Login field
    And the user enters "user" in the Password field
    And the user clicks the Submit button
    Then "Login successful" is shown as text
    And a screenshot is saved
