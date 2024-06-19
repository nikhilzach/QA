import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { homePage } from '../newtours/pages/homePage';
import { travelersPage } from '../newtours/pages/travelersPage';
import { ancillariesPage } from '../newtours/pages/ancillariesPage';
import { paymentPage } from '../newtours/pages/paymentPage';
import { confirmationPage } from '../newtours/pages/confirmationPage';
let noofpassengers = 0;
let noofadults=0;
let noofchildren=0;
let noofinfants=0;
let noofinfantsinlap=0;

Given(/^I open the Allegiant Air website$/, () => {
    homePage.visit();
});

When(/^I close all pop-ups$/, () => {
    homePage.closeOverlays();
});

When(/^When I select (.*) as tripType$/, (triptype) => {
	homePage.selecttrip(triptype)
});


When(/^I select (.*) as the departure airport$/, (departure) => {
    homePage.selectDeparture(departure);
});

When(/^I select (.*) as the destination airport$/, (destination) => {
    homePage.selectDestination(destination);
});

When(/^I select dates of travel$/, () => {
    homePage.selectDates();
});


When(/^I select(.*) (.*) (.*) (.*)$/, (nA,nC,nI,nIL) => {
        homePage.selectPassengers(nA,nC,nI,nIL)
        
        noofpassengers=parseInt(nA)+parseInt(nC)+parseInt(nI)+parseInt(nIL);
        noofadults=nA
        noofchildren=nC
        noofinfants=nI
        noofinfantsinlap=nIL
        cy.log(noofpassengers);
});

When(/^I search for flights$/, () => {
	homePage.searchFlights();
});

When(/^I enter traveler details from the JSON file$/, () => {
    cy.fixture('passenger').then((data) => {
        cy.contains("No thanks").should('be.visible');
        cy.contains("No thanks").click();
        travelersPage.fillTravelerDetails(data,noofadults,noofchildren,noofinfants,noofinfantsinlap);
    });
});


When(/^I proceed without ancillaries$/, () => {

        cy.log(noofpassengers);
        ancillariesPage.skipAncillaries(noofpassengers);
	
});


When(/^I enter payment details$/, () => {
    cy.fixture('passenger').then((data) => {
        paymentPage.fillPaymentDetails(data);
    });
    
});


Then(/^I should see the booking confirmation page$/, () => {
	confirmationPage.verifySuccess()
});
