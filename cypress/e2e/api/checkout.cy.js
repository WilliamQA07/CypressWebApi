describe('Validar funcionalidade checkout', () => {
    
    context('API', () => {
        before(() => {
            cy.fixture("product").as('productData')
            cy.fixture("cart").as('cartData')
            cy.fixture("checkout").as('checkoutData')

            cy.loginApi(
                Cypress.env('username'),
                Cypress.env('password'),
                "My Account"
            )
        })

        it('Fazer checkout de um produto', function () {
            cy.addProductCart(
                this.productData.idLargeAngelfish,
                this.cartData.shopping
            )
            cy.openProductCart(
                this.productData.idLargeAngelfish,
                this.checkoutData.detailsPayment
            )
            cy.confirmOrder(this.checkoutData.confirmOrder)
            cy.confirmPaymentProductCart(this.checkoutData.confirmPayment)
        });

    })
});