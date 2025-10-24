// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Add Cypress XPath support
import "cypress-xpath";

import Login from "../PageObjects/LoginPage";

Cypress.Commands.add("loginOnce", () => {
  cy.session("crm-admin", () => {
    const login = new Login();
    login.navigatetoCRM();
    login.setUsername("admin@gmail.com");
    login.setPassword("password");
    login.clickSubmit();
    cy.wait(4000);
    login.enterHardcodedOTP();
    login.isDashboardLoaded();
    login.companySelect("Twist Digital");
  });
});
