/// <reference types="cypress" />

describe('Testes de API e Interceptações na Landing Page', () => {
  beforeEach(() => {
    cy.fixture('formulario').as('form')
    cy.visit('/')
  })

  context('Interceptação RD Station', () => {
    it('Deve interceptar envio e verificar status 200', function () {
      cy.interceptRDStation()
      cy.preencherFormulario(this.form.valido)
      cy.contains('button', 'Quero obter uma demonstração').click()
      cy.wait('@rdReq').its('response.statusCode').should('eq', 200)
    })

    it('Deve validar comportamento do frontend após resposta de sucesso', function () {
      cy.interceptRDStation()
      cy.preencherFormulario(this.form.valido)
      cy.get('button[type="submit"]').click()
      cy.wait('@rdReq')
      cy.get('.mensagem-sucesso', { timeout: 5000 }).should('be.visible')
    })

    it('Deve validar comportamento do frontend após falha da API', function () {
      cy.interceptRDStation({ fail: true, status: 500 })
      cy.preencherFormulario(this.form.valido)
      cy.get('button[type="submit"]').click()
      cy.wait('@rdReq')
      cy.get('.mensagem-erro', { timeout: 5000 }).should('be.visible')
    })
  })

  context('Outros Testes de Rede', () => {
    it('Deve confirmar requisição POST para o Google Analytics', function () {
      cy.intercept('POST', '**/collect').as('ga')
      cy.preencherFormulario(this.form.valido)
      cy.get('button[type="submit"]').click()
      cy.wait('@ga').its('response.statusCode').should('eq', 204)
    })

    it('Deve validar headers origin e referer na requisição de conversão', function () {
      cy.intercept('POST', '**/v2/conversions', (req) => {
        expect(req.headers.origin).to.include('agilean.com.br')
        expect(req.headers.referer).to.include('agilean.com.br')
      }).as('headers')
      cy.preencherFormulario(this.form.valido)
      cy.get('button[type="submit"]').click()
      cy.wait('@headers')
    })

    it('Deve limpar os campos do formulário após envio bem-sucedido', function () {
      cy.interceptRDStation()
      cy.preencherFormulario(this.form.valido)
      cy.get('button[type="submit"]').click()
      cy.wait('@rdReq')

      cy.get('#rd-text_field-9aopSRzYoakBGjsXdDj3Vg').should('have.value', '')
      cy.get('#rd-email_field-9ywjFYKOt3EdrXJHCZD8TA').should('have.value', '')
      cy.get('#rd-phone_field-ePOSZE80z42NwokBpFfqlw').should('have.value', '')
      cy.get('#rd-text_field-uWqz8vfiWDHndcPzFTJbCQ').should('have.value', '')
    })
  })
})
