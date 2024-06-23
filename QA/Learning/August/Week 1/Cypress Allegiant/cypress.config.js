const cucumber = require('cypress-cucumber-preprocessor').default 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  chromeWebSecurity:false,

  e2e: {
    
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
     
    },
    defaultCommandTimeout: 100000,
    specPattern: "cypress/e2e/*.feature",
    screenshotOnRunFailure: false
  },
});