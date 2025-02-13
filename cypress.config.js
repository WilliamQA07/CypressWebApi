module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
    embeddedScreenshots: true, 
    inlineAssets: true 
  },
  video: true,
  e2e: {
    baseUrl: 'http://209.133.222.126:8080/jpetstore',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
