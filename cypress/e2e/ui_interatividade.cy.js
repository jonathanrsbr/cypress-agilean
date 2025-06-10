describe('Testes de Interatividade/UI - Landing Page Agilean', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve exibir o conteúdo correto ao clicar nos botões do menu (Fichas, Segurança, Planos, Dashboards)', () => {
    const botoesMenu = [
      { seletor: '.btn-fichas', textoEsperado: 'Verificações de Serviços' },
      { seletor: '.btn-seguranca', textoEsperado: 'Segurança do Trabalho' },
      { seletor: '.btn-planos', textoEsperado: 'Planos de ação' },
      { seletor: '.btn-dashboards', textoEsperado: 'Dashboards e relatórios' },
    ]

    botoesMenu.forEach(({ seletor, textoEsperado }) => {
      cy.get(seletor).click()
      cy.contains(textoEsperado).should('be.visible')
    })
  })

  it('Deve ocultar o menu superior ao rolar para baixo', () => {
    cy.get('.menu-superior').should('be.visible')
    cy.scrollTo('bottom')
    cy.get('.menu-superior').should('not.be.visible')
  })

  it('Deve exibir o formulário ao clicar em "Quero obter uma demonstração"', () => {
    cy.get('#abrir-formulario').click()
    cy.get('.formulario').should('be.visible')
  })
})
