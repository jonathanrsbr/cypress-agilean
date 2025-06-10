describe('Acessibilidade: navegação com Tab nos botões principais da navbar', () => {
  beforeEach(() => {
    cy.visit('/')

    // Fecha banner de cookies se aparecer
    cy.get('body').then(($body) => {
      if ($body.find('a[aria-label="allow cookies"]').length > 0) {
        cy.get('a[aria-label="allow cookies"]').click()
      }
    })
    cy.injectAxe()
  })
  it('Deve estar em conformidade com os padrões de acessibilidade (WCAG)', () => {
    cy.checkA11y()
  })
})
