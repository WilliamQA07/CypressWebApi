describe('validar funcionalidade do carrinho', () => {
    
    context('API', () => {
        before(() => {
            cy.loginApi(
                Cypress.env('username'),
                Cypress.env('password'),
                "My Account"
            )
        })

        beforeEach(() => {
            cy.fixture("product").as('productData')
            cy.fixture("cart").as('cartData')
            cy.fixture("checkout").as('checkoutData')

        })

        it('Adicionar produto no carrinho', function () {
            cy.addProductCart(
                this.productData.idLargeAngelfish,
                this.cartData.shopping
            )
        });

        it('Remover produto do carrinho', function () {
            cy.removeProductCart(
                this.productData.idLargeAngelfish,
                this.cartData.cartIsEmpty
            )
        });

        it('Abrir produto do carrinho', function () {
            cy.openProductCart(
                this.productData.idLargeAngelfish,
                this.checkoutData.detailsPayment
            )
        });

        it('Confirmar o pedido', function () {
            cy.confirmOrder(
                this.checkoutData.confirmOrder
            )
        });

        it('Confirmar pagamento do carrinho', function () {
            cy.confirmPaymentProductCart(this.checkoutData.confirmPayment)
        });

    })
});