class Lead_Edit {
  clickLeadandEnableEditModal() {
    cy.get("tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1)").click();
    cy.get("rect[x='0.189453']").click();
  }

  editFirstName(editedFirstName) {
    cy.xpath("//input[@name='firstName']")
      .click()
      .clear()
      .type(editedFirstName);
  }

  editLastName(editedLastName) {
    cy.xpath("//input[@name='lastName']").click().clear().type(editedLastName);
  }

  editEmail(editedEmail) {
    cy.xpath("//input[@name='email']").click().clear().type(editedEmail);
  }

  editProject(project) {
    // Open the dropdown
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    ).click();

    // Select the matching project dynamically by text
    cy.get(".px-3.py-2.hover\\:bg-gray-100.cursor-pointer")
      .contains(project)
      .click();
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
  }

  verifyLeadEdit(editedFirstName) {
    cy.contains("tbody tr td:nth-child(3) div", editedFirstName, {
      timeout: 1000000,
    }).should("be.visible");
  }
}
export default Lead_Edit;
