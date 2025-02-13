Cypress.Commands.add('validateTextVisible', (texto) => {
    cy.contains(texto)
        .should('be.visible')
});

Cypress.Commands.add('validateTextNotExist', (texto) => {
    cy.contains(texto)
        .should('not.exist')
});

Cypress.Commands.add('validateHeaders', (category) => {
    cy.get(`[src="../images/sm_${category}.gif"]`)
        .should('be.visible')
});

export const getHeaders = () => ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'http://209.133.222.126:8080',
    'Referer': 'http://209.133.222.126:8080/jpetstore/actions/Account.action',
    'cookie': `JSESSIONID=${Cypress.env('JSESSIONID')}`
  });
