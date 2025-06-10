Cypress.Commands.add(
  'interceptRDStation',
  ({ fail = false, status = 200, alias = 'rdReq', body = {} } = {}) => {
    cy.intercept('POST', '**/v2/conversions', (req) => {
      req.reply({
        statusCode: status,
        body: fail ? { error: 'Erro', ...body } : { success: true, ...body },
      })
    }).as(alias)
  }
)
