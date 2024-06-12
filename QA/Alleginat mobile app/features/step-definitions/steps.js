const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const Swipe = require('../pageobjects/swipe');
const BookFlightPage = require('../pageobjects/bookFlightPage');
const FlightDetailsPage = require('../pageobjects/flightDetailsPage');
const SelectFlightPage = require('../pageobjects/selectFlightPage');
const PassengerDetailsPage = require('../pageobjects/passengerDetailsPage');
const SeatSelectionPage = require('../pageobjects/seatSelectionPage');
const CheckoutPage = require('../pageobjects/checkoutPage');

Given(/^I am a Allegiant user$/, async () => {
    await expect($('id:com.lixar.allegiant:id/imageView5')).toBeDisplayed();
});


Then(/^I can book a ticket$/, async() => {
    await BookFlightPage.clickBookFlight();
    await FlightDetailsPage.enterDepartureLocation();
    await FlightDetailsPage.enterDestinationLocation();
    await FlightDetailsPage.selectOneWay();
    await FlightDetailsPage.selectDepartureDate();
    await FlightDetailsPage.searchFlights();
    await browser.pause(2000)
    await SelectFlightPage.selectFlightOption();
    await PassengerDetailsPage.selectSeatsOption();
    await PassengerDetailsPage.enterPassengerDetails('Nikhil', 'Zachariah');
    await PassengerDetailsPage.selectContactInfo();
    await PassengerDetailsPage.selectDateOfBirth();
    await PassengerDetailsPage.selectGender();
    await PassengerDetailsPage.enterContactDetails('212-456-7890', 'nikhil@gmail.com');
    await SeatSelectionPage.selectSeatOption();
    await CheckoutPage.addBaggage();
    await CheckoutPage.proceedToCheckout();
    await CheckoutPage.searchHotelRoom();
    await CheckoutPage.confirmRoomPrice();
    await CheckoutPage.enterPaymentDetails('378282246310005', '1234', '2026');
    await CheckoutPage.enterBillingAddress('132, My Street', 'Kingston', 'New York', '12401', '7182222222');
    await CheckoutPage.finalizePurchaseDetails('nikhil@gmail.com');
});


    