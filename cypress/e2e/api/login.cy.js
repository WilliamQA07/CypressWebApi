describe('Validar funcionalidade de login', () => {
    
    context('API', () => {
        beforeEach(() => {
            cy.fixture("message").as('messageData')
        })
        it("Login com sucesso", function () {
            cy.loginApi(
                Cypress.env('username'),
                Cypress.env('passwordInvalid'),
                this.messageData.loginSucess
            )
        });

        it('Login invalido', function () {
            cy.loginApi(
                Cypress.env('username'),
                Cypress.env('passwordInvalid'),
                this.messageData.usernameOrPasswordInvalid
            )
        });
    })
});