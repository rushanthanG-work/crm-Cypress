class Lead_Edit {
  clickLeadandEnableEditModal() {
    cy.get("tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1)", {
      timeout: 100000,
    })
      .should("be.visible")
      .click();
    cy.get("rect[x='0.189453']").click();
    return this;
  }

  editFirstName(editedFirstName) {
    cy.xpath("//input[@name='firstName']", {
      timeout: 100000,
    })
      .should("be.visible")
      .click()
      .clear()
      .type(editedFirstName);
    return this;
  }

  editLastName(editedLastName) {
    cy.xpath("//input[@name='lastName']", {
      timeout: 100000,
    })
      .should("be.visible")
      .click()
      .clear()
      .type(editedLastName);
    return this;
  }

  editEmail(editedEmail) {
    cy.xpath("//input[@name='email']", {
      timeout: 100000,
    })
      .should("be.visible")
      .click()
      .clear()
      .type(editedEmail);
    return this;
  }

  editProject(project) {
    // Open the dropdown
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)",
      {
        timeout: 100000,
      }
    )
      .should("be.visible")
      .click();

    // Select the matching project dynamically by text
    cy.get(".px-3.py-2.hover\\:bg-gray-100.cursor-pointer", {
      timeout: 100000,
    })
      .should("be.visible")
      .contains(project)
      .click();
    return this;
  }

  EditPhoneNumber(editedPhoneNumber) {
    cy.xpath("//div[@class='custom-scrollbar flex-1 space-y-4 pr-1']").scrollTo(
      "bottom"
    );

    cy.xpath("//input[@placeholder='Enter phone number']")
      .scrollIntoView()
      .click()
      .clear() // ⬅️ clear existing value
      .type(editedPhoneNumber);
    return this;
  }

  clickEditSubmit() {
    cy.intercept("PUT", "**/api/leads/**").as("editLead"); // note the PUT method and wildcard for ID
    cy.get("button[type='submit']").click();
    cy.wait("@editLead", { timeout: 300000 })
      .its("response.statusCode")
      .should("be.oneOf", [200, 201]);
    return this;
  }

  verifyLeadEdit(editedFirstName) {
    cy.contains(".block.text-ellipsis.whitespace-normal", editedFirstName, {
      timeout: 300000,
    })
      .should("be.visible")
      .should("contain", editedFirstName);
    return this;
  }
}
export default Lead_Edit;
