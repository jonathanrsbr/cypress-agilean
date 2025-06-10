import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.agilean.com.br/qualidade',
    setupNodeEvents(on, config) {
      // Você pode configurar plugins aqui futuramente
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
})

