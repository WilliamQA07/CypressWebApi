Cypress.Commands.add('selectCategory',(category)=>{
    cy.get(`[src="../images/${category}_icon.gif"]`).click()
})
Cypress.Commands.add('addProductCartWeb',(product, itemId)=>{
    cy.get(`[href="/jpetstore/actions/Catalog.action?viewProduct=&productId=${product}"]`).click()
    cy.get(`[href="/jpetstore/actions/Cart.action?addItemToCart=&workingItemId=${itemId}"]`).click()    
})
Cypress.Commands.add('validateLengthCart',(length)=>{
    cy.get('[size="3"]').should('have.value', length)
})

