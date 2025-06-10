describe('Testes de Layout/UI - Landing Page Agilean', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[aria-label="allow cookies"]').should('be.visible').click()
  })

  context('Conteúdo e acessibilidade do destaque', () => {
    it('Deve exibir o campo de destaque com o texto correto', () => {
      cy.get('[data-testid="richTextElement"]')
        .should('be.visible')
        .and('contain.text', 'qualidade das atividades')
    })

    it('Não deve haver erro de digitação nos textos explicativos', () => {
      cy.get('.texto-explicativo').should('not.contain.text', 'erro d digitação')
    })

    it('Deve ter contraste de cor entre texto e fundo', () => {
      cy.get('.formulario .texto').should('have.css', 'color').and('not.be.empty')

      cy.get('.formulario').should('have.css', 'background-color').and('not.be.empty')
    })
  })

  context('Testes visuais com Percy', () => {
    it('Imagem "Qualidade" deve estar correta no modo retrato', () => {
      cy.viewport(375, 812) // iPhone X portrait
      cy.get('img[alt="Prancheta 27"]').should('be.visible')
      cy.percySnapshot('Imagem Qualidade - Retrato')
    })

    it('Imagem "Qualidade" não deve estar cortada no modo paisagem', () => {
      cy.viewport(812, 375) // iPhone X landscape
      cy.get('img[alt="Prancheta 27"]').should('be.visible')
      cy.percySnapshot('Imagem Qualidade - Paisagem')
    })
  })

  context('Responsividade', () => {
    const viewports = [
      { device: 'desktop', width: 1280, height: 720 },
      { device: 'tablet', width: 768, height: 1024 },
      { device: 'mobile', width: 375, height: 667 },
    ]

    viewports.forEach(({ device, width, height }) => {
      it.only(`Deve exibir corretamente no modo ${device}`, () => {
        cy.viewport(width, height)
        cy.get('[data-testid="richTextElement"]')
          .should('be.visible')
          .and('contain.text', 'qualidade das atividades')
        cy.percySnapshot(`Layout - ${device}`)
      })
    })
  })

  context('Funcionalidade do botão', () => {
    it('Deve redirecionar para a landing page de teste grátis ao clicar em "Acesso gratuito"', () => {
      cy.contains('[data-testid="linkElement"]', 'Acesso gratuito').should('be.visible').click()
      cy.url().should('include', '/teste-gratis')
      cy.contains('Preencha o formulário e receba o seu acesso gratuito ao Agilean').should(
        'be.visible'
      )
    })
  })

  context('Tamanho e posicionamento de elementos', () => {
    it('Deve verificar tamanho mínimo dos elementos visuais', () => {
      cy.get('img, .icone, button').each(($el) => {
        cy.wrap($el)
          .should('be.visible')
          .and(($el) => {
            const width = $el.width()
            const height = $el.height()
            expect(width).to.be.greaterThan(20)
            expect(height).to.be.greaterThan(20)
          })
      })
    })
  })
})
