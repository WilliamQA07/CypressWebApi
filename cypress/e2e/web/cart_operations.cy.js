describe('validar funcionalidade do carrinho', () => {
    context("WEB", () => {
        before(() => {
            cy.fixture("product").as('productData')
            cy.fixture("cart").as('cartData')
            cy.visit('/')
            cy.enterStore()
        })

        it('Deve adicionar o produto "Angelfish" ao carrinho', function () {
            cy.selectCategory(this.productData.categoryFish)
            cy.addProductCartWeb(
                this.productData.angelfish,
                this.productData.idLargeAngelfish
            )
            cy.validateTextVisible(this.cartData.shopping)
            cy.validateTextVisible(this.productData.idLargeAngelfish)
            cy.validateLengthCart(1)
        });
    })

});