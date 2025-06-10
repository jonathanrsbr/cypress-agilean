Cypress.Commands.add('preencherFormulario', (dados = {}) => {
  const campo = (sel, val) => (val ? cy.get(sel).clear().type(val) : null)
  const select = (sel, val) => (val ? cy.get(sel).select(val) : null)

  campo('#rd-text_field-9aopSRzYoakBGjsXdDj3Vg', dados.nome)
  campo('#rd-email_field-9ywjFYKOt3EdrXJHCZD8TA', dados.email)
  campo('#rd-phone_field-ePOSZE80z42NwokBpFqlw', dados.celular)
  campo('#rd-text_field-uWqz8vfiWDHndcPzFTJbCQ', dados.empresa)

  select('#rd-select_field-aH12J9aSBMj5czg3PAs3bg', dados.cargo)
  select('#rd-select_field-vUKcr-vrkX_6Sn6Nu4Mxhg', dados.tipoObra)
  select('#rd-select_field-8fc4e3vRDlaDhXovbdVl_g', dados.qtdObras)
  select('#rd-select_field-37sjB2pZK1MnWAyBs7ABtg', dados.orcamento)
})
