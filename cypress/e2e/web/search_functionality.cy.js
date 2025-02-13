describe('Validar funcionalidade de pesquisar', () => {
    before(() => {
        cy.visit('/')
        cy.fixture("product").as('productData');
    });
    
    it('Deve buscar um item existente e garantir que categorias inexistentes não sejam exibidas', function () {
        cy.enterStore();
        cy.searchItem(this.productData.categoryFish);
        cy.validateTextVisible(this.productData.categoryFish);
        const categoryNotexist = ['categoryCats', 'categoryBirds', 'categoryDogs', 'categoryReptiles'];
        categoryNotexist.forEach(category => {
            cy.validateTextNotExist(this.productData[category]);
        });
    });
});
