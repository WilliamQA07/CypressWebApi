import { getHeaders } from "../utils";

Cypress.Commands.add('loginApi', (username, password, message) => {
  cy.api({
    method: 'POST',
    url: '/actions/Account.action',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'http://209.133.222.126:8080',
      'Referer': 'http://209.133.222.126:8080/jpetstore/actions/Account.action',
    },
    body: {
      username: username,
      password: password,
      signon: 'Login'
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include(message);
    
    cy.getCookie('JSESSIONID').then((cookie) => {
      if (cookie) {
        Cypress.env('JSESSIONID', cookie.value);
        cy.log('JSESSIONID salvo:', cookie.value);
      } else {
        cy.log('Nenhum JSESSIONID encontrado.');
      }
    });
  });
})

Cypress.Commands.add('addProductCart', (itemId, textExpected) => {
  cy.api({
    method: 'POST',
    url: `/actions/Cart.action?addItemToCart=&workingItemId=${itemId}`,
    headers: getHeaders()
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include(textExpected);
    expect(response.body).to.include(itemId);
  });
})

Cypress.Commands.add('removeProductCart', (itemId, textExpected) => {
  cy.api({
    method: 'POST',
    url: `/actions/Cart.action?removeItemFromCart=&workingItemId=${itemId}`,
    headers: getHeaders()
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include("Shopping Cart");
    expect(response.body).to.include(textExpected);
  });
})

Cypress.Commands.add('openProductCart', (itemId, textExpected) => {
  cy.api({
    method: 'POST',
    url: `/actions/Order.action?newOrderForm=${itemId}`,
    headers: getHeaders()
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include(textExpected);
  });
})

Cypress.Commands.add('confirmOrder', (textExpected) => {
  cy.fixture('api/orderData').then((orderBody) => {
    cy.api({
      method: 'POST',
      url: '/actions/Order.action',
      headers: getHeaders(),
      body: orderBody
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.include(textExpected);
    });
  });
});

Cypress.Commands.add('confirmPaymentProductCart', (textExpected) => {
  cy.api({
    method: 'POST',
    url: '/actions/Order.action?newOrder=&confirmed=true',
    headers: getHeaders()
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include(textExpected);
  });
})
