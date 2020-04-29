Feature: Login Functionality
  As a user
  I want to visit Harrow council website


  Scenario: Verify user should navigate to Login Page
    Given I am on Home page
    When I click on Log In tab
    Then I should be on Login Page successfully

  Scenario Outline: Verify User should not Login with invalid credentials
    Given I am on Home page
    And I click on Log In tab
    When I enter Your email in email field "<email>"
    And I enter password in password field "<password>"
    And I click on Log In button
    Then System should throw error message "<errorMessage>"
    Examples:
      | email            | password     | errorMessage                       |
      | dhanno@gmail.com | dhanno23456@ | Invalid Username/Password supplied |
      | dhann@gmail.com  | dhann23456@  | Invalid Username/Password supplied |
      | dha@gmail.com    | dhanno3456@  | Invalid Username/Password supplied |
