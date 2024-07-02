Feature: Test advanced features

  @AjaxLoader
  Scenario: Waiting Scenarios
    Given I am on ajax loader page
    And i wait for element to appear
    Then I should be able to click on the button

  @Actions
  Scenario: Test different actions
    Given I am on actions page
    When i drag element 
    Then element should be dropped
    When i double click
    And Hover on first second and third buttons
    And i click and hold on button
    Then I successfully complete

    @Scroll 
      Scenario: Scrolling scenarios
    Given I am on scroll page
    And i wait for element
    Then i scroll to all elements
    
    
    @PopUp 
    Scenario: Popup and Alerts
    Given I am on popup page
    When Page has appeared
    Then i interact with all popups
    
    
        
    @Iframe 
    Scenario: Iframe interaction
    Given I am on iframe page
    When iframe has appeared
    Then i interact with Iframe
    
    
    