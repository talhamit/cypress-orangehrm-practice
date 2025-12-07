const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,

    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",  // Base URL added

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
