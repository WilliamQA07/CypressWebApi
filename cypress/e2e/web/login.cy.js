describe('Validar funcionalidade de login', () => {
    context('WEB', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.enterStore()
            cy.fixture("message").as('messageData')
        })
        it('Registrar uma nova conta', function () {
            cy.registerNow()
            cy.validateTextVisible(this.messageData.enterStoreSucess)
        });

        it('Realizar login com sucesso', function () {
            cy.login(
                Cypress.env('username'),
                Cypress.env('password')
            )
            cy.validateTextVisible(this.messageData.loginSucess)
        });

        it('Realizar login invalido', function () {
            cy.login(
                Cypress.env('username'),
                Cypress.env('passwordInvalid')
            )
            cy.validateTextVisible(this.messageData.usernameOrPasswordInvalid)
        });
    })
});