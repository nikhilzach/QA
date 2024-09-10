const { Given, When, Then } = require('@cucumber/cucumber');
const functions = require('../pageobjects/functions');



Given(/^I can do all the functions$/, async () => {
    await functions.randomfunc();
    }
);
