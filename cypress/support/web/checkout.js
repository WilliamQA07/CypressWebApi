Cypress.Commands.add('finishCkeckout',()=>{
    cy.get('[href="/jpetstore/actions/Order.action?newOrderForm="]').click()
    cy.get('[name="newOrder"]').click()
    cy.get('.Button').click()
})