const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script //will be stored as specPattern
    specPattern: 'cypress/integration/example/*.js',
    // specPattern: 'cypress/UAT/features/*.{js,feature}',
    baseUrl:"https://www.makemytrip.com",
    env:{
      OrangeHRM:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      RahulShettyAutomationPractice:"https://rahulshettyacademy.com/"
    }
  },
  chromeWebSecurity: false
  
});
