import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', (username, senha) => {
    cy.contains('Sign In').click()
    cy.get('[name="username"]').clear().type(username)
    cy.get('[name="password"]').clear().type(senha, {log: false});
    cy.get('[name="signon"]').click();
});

Cypress.Commands.add('enterStore', () => {
    cy.contains('Enter the Store').click()
});

Cypress.Commands.add('registerNow', () => {
    cy.contains('Sign In').click()
    cy.contains('Register Now!').click()

    // Preenchendo o formulário
    Cypress.env('username', faker.person.fullName())
    cy.get('[name="username"]').type(Cypress.env('username'));
    cy.get('[name="password"]').type(Cypress.env('password'), {log: false});
    cy.get('[name="repeatedPassword"]').type(Cypress.env('password'),{log: false});
    cy.get('[name="account.firstName"]').type(faker.person.firstName());
    cy.get('[name="account.lastName"]').type(faker.person.lastName());
    cy.get('[name="account.email"]').type(faker.internet.email());
    cy.get('[name="account.phone"]').type(faker.phone.number());
    cy.get('[name="account.address1"]').type(faker.location.streetAddress());
    cy.get('[name="account.address2"]').type('Apto 45B');
    cy.get('[name="account.city"]').type(faker.location.city());
    cy.get('[name="account.state"]').type(faker.location.countryCode());
    cy.get('[name="account.zip"]').type(faker.location.zipCode());
    cy.get('[name="account.country"]').type(faker.location.country());

    // Selecionando opções do formulário
    cy.get('[name="account.languagePreference"]').select('english');
    cy.get('[name="account.favouriteCategoryId"]').select('DOGS');
    cy.get('[name="account.listOption"]').check();
    cy.get('[name="account.bannerOption"]').check();

    // Submeter o formulário
    cy.get('[name="newAccount"]').click();
});

