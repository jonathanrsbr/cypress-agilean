Cypress.Commands.add('getIframeBody', () => {
  cy.get('iframe[name="htmlComp-iframe"]')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
})
