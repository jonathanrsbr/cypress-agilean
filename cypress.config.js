const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.agilean.com.br/qualidade',
    setupNodeEvents(on, config) {},
  },
})
