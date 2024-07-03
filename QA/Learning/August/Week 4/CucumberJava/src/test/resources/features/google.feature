Feature: Test google search functionality

  Scenario: validate google
    Given browser is open
    And user is on google search page
    When user enters a text in search box
    And hits enter
    Then user is navigated to search results

    
    