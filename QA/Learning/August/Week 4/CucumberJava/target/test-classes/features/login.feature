Feature: Functionality of Website

@login
  Scenario Outline: :Login success with valid credentials
    Given user is on login page
    When user enters <username> and <password> and login
    Then user is navigated to the home page

    Examples: 
      | username            | password |
      | Nikhil999@gmail.com |    12345 |
      
@Addtocart
	Scenario Outline: :Buy a product
	  Given user is on login page
    When user enters <username> and <password> and login
    Then user is navigated to the home page
    
    Given user clicks on <product> product
    When user clicks on add to cart
    And views cart and checksout
    And enters card details
    Then order is placed successfully
    And invoice is downloaded

    Examples: 
      | username            | password |product            | 
      | Nikhil999@gmail.com |    12345 |1    					 		 |
     
      
 
 
