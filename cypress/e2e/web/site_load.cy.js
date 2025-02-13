describe('validar carregamento do site', () => {
    before(() => {
        cy.visit('/')
        cy.fixture("message").as('messageData')
    })
    it('Validar se a tela carregou corretamente', function () {
        cy.validateTextVisible(this.messageData.welcomeSucess)
        cy.enterStore()
        cy.validateTextVisible(this.messageData.enterStoreSucess)
    });

});