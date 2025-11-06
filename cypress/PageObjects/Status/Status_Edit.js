class Status_Edit {
  navigateToStatusPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/status");
  }

  editStatus(createdStatus, editedStatus) {
    cy.get(`[title="${createdStatus}"]`, { timeout: 100000 })
      .should("be.visible")
      .click();
    cy.get("button[title='Edit Status']", { timeout: 100000 })
      .should("be.visible")
      .click();
    cy.wait(4000);
    cy.get(`[value="${createdStatus}"]`, { timeout: 100000 })
      .should("be.visible")
      .click()
      .clear()
      .type(editedStatus);
    cy.get("button[type='submit']", { timeout: 100000 })
      .should("be.visible")
      .click();
  }

  validateEditedStatus(editedStatus) {
    cy.get(`[title="${editedStatus}"]`, { timeout: 100000 }).should(
      "be.visible"
    );
  }
}

export default Status_Edit;
