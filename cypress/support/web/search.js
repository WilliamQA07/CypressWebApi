Cypress.Commands.add('searchItem', (item)=>{
    cy.get('[name="keyword"]').type(item)
    cy.get('[name="searchProducts"]').click()
})  