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
    cy.xpath("//input[@name='lastName']").click().type(editedLastName);
  }

  editEmail(editedEmail) {
    cy.xpath("//input[@name='email']").click().clear().type(editedEmail);
  }

  editProject_hillsandsee() {
    cy.xpath(
      "//div[@data-error-field='project']//div[@class='flex items-center justify-between']"
    ).click();

    cy.xpath("//div[normalize-space()='hillsandsea']").click();
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
    cy.contains("tbody tr td:nth-child(3) div", editedFirstName).should(
      "be.visible"
    );
  }
}
export default Lead_Edit;
