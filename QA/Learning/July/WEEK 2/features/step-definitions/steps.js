const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const homePage = require('../pageobjects/home.page');
const searchPage = require('../pageobjects/search.page');
const seatsPage = require('../pageobjects/seats.page');
const passengerDetailsPage = require('../pageobjects/passengerDetails.page');
const swipe = require('../pageobjects/swipe');

function getLastDayOfMonth() {
    const date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.getDate();
}

Given(/^I am a redbus user$/, async () => {
    await expect($('-android uiautomator:new UiSelector().text("Country and Language")')).toBeDisplayed();
});

Then(/^I can book a ticket$/, async () => {
    const lastDate = getLastDayOfMonth();

    await homePage.newUser();
    await homePage.skipall();
    await searchPage.enterJourneyDetails("Bangl", "Hyderabad", lastDate);
    await seatsPage.ksmRoadways.click();
    await browser.pause(2000);
    await seatsPage.selectSeatsUntilDisplayed();
    await seatsPage.selectBoardingDroppingPoints();
    await passengerDetailsPage.enterPassengerDetails({
        email: "Nikhil@gmail.com",
        phone: "6756787665",
        name: "Nikhil",
        age: "22",
        passengerName: "John",
        passengerAge: "24",
        passengerGender:"Male"
    });
    await passengerDetailsPage.makePayment();
});
