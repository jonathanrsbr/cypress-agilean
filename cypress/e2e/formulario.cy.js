/// <reference types="cypress" />

describe('Testes do Formulário da Landing Page', () => {
  beforeEach(() => {
    cy.visit('/') // ajuste se necessário
    cy.get('[data-cy=botao-demonstração]').click() // abre o formulário
  })

  it('Não deve permitir envio com todos os campos vazios', () => {
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Campo obrigatório').should('exist') // ajuste para mensagens reais
  })

  it('Não deve permitir envio com apenas um campo preenchido', () => {
    cy.preencherFormulario({ nome: 'Teste Incompleto' })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Campo obrigatório').should('exist')
  })

  it('Deve validar caracteres especiais no campo Nome', () => {
    cy.preencherFormulario({ nome: '@#%!$' })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Nome inválido').should('exist')
  })

  it('Deve validar email com TLD inválido', () => {
    cy.preencherFormulario({ email: 'teste@gmail.c' })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Email inválido').should('exist')
  })

  it('Deve validar letras no campo Celular', () => {
    cy.preencherFormulario({ celular: 'abcde12345' })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Celular inválido').should('exist')
  })

  it('Deve validar celular com mais de 20 dígitos', () => {
    cy.preencherFormulario({ celular: '999999999999999999999' })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Celular inválido').should('exist')
  })

  it('Deve aceitar celular no formato internacional', () => {
    cy.preencherFormulario({ celular: '+1 (555) 123-4567' })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Mensagem enviada').should('exist')
  })

  it('Deve aceitar todos os campos com dados fake válidos', () => {
    cy.fixture('formulario.json').then((dados) => {
      cy.preencherFormulario(dados.fakes)
    })
    cy.get('[data-cy=botao-enviar]').click()
    cy.contains('Mensagem enviada').should('exist')
  })
})
