Feature: Council Tax and Coronavirus page Functionality
  As a user
  I want to visit Harrow Council website

  Scenario: Verify user should navigate to Council Tax page
    Given I am on Home page
    When I click on Council Tax tab
    Then I should be in Council Tax successfully


  Scenario: Verify user should navigate to Coronavirus Page
    Given I am on Home page
    When I click on Coronavirus tab
    Then I should be in Coronavirus page successfully