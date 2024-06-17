Feature: Airline Ticket Booking Process

  Scenario Outline: Booking a flight ticket
    Given I open the Allegiant Air website
    And I close all pop-ups
    When I select <triptype> as tripType
    And I select <departureAirport> as the departure airport
    And I select <destinationAirport> as the destination airport
    And I select dates of travel
    And I select <No of Adult> <No of Child> <No of Infant> <Infant in Lap>
    And I search for flights
    And I enter traveler details from the JSON file
    And I proceed without ancillaries
    And I enter payment details 
    Then I should see the booking confirmation page

  Examples:
    | departureAirport           | destinationAirport               | TripType       | No of Adult | No of Child | No of Infant | Infant in Lap | 
    | Akron-Canton               | Daytona Beach                    | ROUNDTRIP      | 2           | 1           | 1            | 0             |     
