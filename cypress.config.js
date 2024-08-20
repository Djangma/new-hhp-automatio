const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://presentation.dqhebbvx58vub.amplifyapp.com/", // Add your base URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
