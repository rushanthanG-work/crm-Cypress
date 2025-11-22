class Login {
  navigatetoCRM() {
    cy.visit("https://dev-lcn.utxcloud.com/");
  }
  setUsername(email) {
    cy.get("input[type='email']", { timeout: 100000 })
      .should("be.visible")
      .type(email);
  }

  setPassword(password) {
    cy.get("input[type='password']", { timeout: 100000 })
      .should("be.visible")
      .type(password);
  }

  clickSubmit() {
    cy.get("button[type='submit']", { timeout: 100000 })
      .should("be.visible")
      .click();
  }

  enterHardcodedOTP() {
    const hardcodedOTP = "123456";
    cy.get("input.w-12.h-12.text-center.text-2xl", { timeout: 100000 })
      .should("have.length", 6)
      .each((input, index) => {
        cy.wrap(input).clear().type(hardcodedOTP.charAt(index));
      });

    cy.get("button[type='submit']").click();
  }

  isDashboardLoaded() {
    return cy
      .contains("span", "Dashboard", { timeout: 100000 })
      .should("be.visible");
  }

  companySelect(company) {
    cy.wait(10000);
    cy.get("button[title='Select company']", { timeout: 100000 })
      .should("be.visible")
      .click();

    // Wait for dropdown container to exist and be visible
    cy.get("div[class='custom-scrollbar ']", { timeout: 300000 })
      .should("be.visible")
      .scrollTo("bottom"); // now scroll

    cy.get("body div div:nth-child(28)", { timeout: 100000 })
      .should("be.visible")
      .contains("div", company)
      .click();

    // cy.contains("Company switched successfully", { timeout: 300000 })
    //   .should("be.visible")
    //   .should("exist");
  }
}

export default Login;
