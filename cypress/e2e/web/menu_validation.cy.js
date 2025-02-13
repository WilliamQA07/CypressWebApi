describe('Validar cabeçalho', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture("product").as('productData')
        cy.fixture("message").as('messageData')
    })
    it('Validar se a tela carregou corretamente', function () {
        cy.validateTextVisible(this.messageData.welcomeSucess)
    });

    it('Validar se as categorias birds, cats, reptlies,fish e dogs estao presentes', function () {
        cy.enterStore()
        cy.validateHeaders(this.productData.categoryBirds)
    });

    it('Validar se a categoria cats está visivel', function () {
        cy.enterStore()
        cy.validateHeaders(this.productData.categoryCats)
    });

    it('Validar se a categoria reptlies está visivel', function () {
        cy.enterStore()
        cy.validateHeaders(this.productData.categoryReptiles)
    });

    it('Validar se a categoria fish está visivel', function () {
        cy.enterStore()
        cy.validateHeaders(this.productData.categoryFish)
    });

    it('Validar se a categoria dogs está visivel', function () {
        cy.enterStore()
        cy.validateHeaders(this.productData.categoryDogs)
    });
});