class Login {
  navigatetoCRM() {
    cy.visit("https://dev-lcn.utxcloud.com/");
  }
  setUsername(email) {
    cy.get("input[type='email']").type(email);
  }

  setPassword(password) {
    cy.get("input[type='password']").type(password);
  }

  clickSubmit() {
    cy.get("button[type='submit']").click();
  }

  enterHardcodedOTP() {
    const hardcodedOTP = "123456";
    cy.get("input.w-12.h-12.text-center.text-2xl", { timeout: 20000 })
      .should("have.length", 6)
      .each((input, index) => {
        cy.wrap(input).clear().type(hardcodedOTP.charAt(index));
      });

    cy.get("button[type='submit']").click();
  }

  isDashboardLoaded() {
    return cy
      .contains("span", "Dashboard", { timeout: 15000 })
      .should("be.visible");
  }

  companySelect(company) {
    cy.wait(10000);
    cy.get(
      "button[class='flex items-center justify-between w-full hover:bg-hoverColor px-3 py-2 rounded-lg transition-colors duration-200']"
    ).click();

    cy.wait(10000);
    cy.get(
      "body > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)"
    ).scrollTo("bottom");

    cy.get("body div div:nth-child(28)").contains("div", company).click();

    // cy.get("input[placeholder='Search companies...']").type(company);
    // cy.wait(3000);
    // cy.xpath("//span[normalize-space()='Twist Digital']").click();
    cy.contains("Company switched successfully", { timeout: 20000 }).should(
      "exist"
    );
  }
}

export default Login;
