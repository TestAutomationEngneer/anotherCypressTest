const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'a7bq2k',
  e2e: {
    baseUrl: 'http://www.automationpractice.pl/index.php', // zmień na URL swojej aplikacji
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // dodaj hooki lub pluginy jeśli potrzebne
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,           // nagrywa wideo z testów
  screenshotOnRunFailure: false, // screenshot przy błędzie

})