Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import './utils'
import './web/sign'
import './web/search'
import './web/cart'
import './web/checkout'

import '@faker-js/faker'
import 'cypress-plugin-api'

import './api/request'