/// <reference types="cypress" />

describe('📋 Verificação visual e estrutural do formulário Agilean', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[aria-label="Acesso gratuito"]').first().click()
    cy.get('form').should('be.visible')
  })

  it('📌 Todos os campos obrigatórios devem estar visíveis no formulário', () => {
    cy.contains('Nome').should('be.visible')
    cy.contains('Email').should('be.visible')
    cy.contains('Celular').should('be.visible')
    cy.contains('Empresa').should('be.visible')
    cy.contains('Qual opção mais se aproxima do seu cargo?').should('be.visible')
    cy.contains('Qual tipo de obra sua empresa executa').should('be.visible')
    cy.contains('Em média, quantas obras você executa simultaneamente?').should('be.visible')
    cy.contains('Qual o orçamento médio das suas obras?').should('be.visible')

    cy.contains('Quero obter uma demonstração').should('be.visible')

    cy.percySnapshot('📷 Formulário - Todos os campos visíveis')
  })
})
