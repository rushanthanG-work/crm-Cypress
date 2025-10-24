class Status_Edit {
  navigateToStatusPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/status");
  }

  editStatus(createdStatus, editedStatus) {
    cy.wait(6000);
    cy.get(`[title="${createdStatus}"]`).click();
    // cy.get('input[type="checkbox"]').eq(0).check();
    cy.get("button[title='Edit Status']", { timeout: 10000 }).click();
    cy.wait(4000);
    cy.get(`[value="${createdStatus}"]`, { timeout: 10000 })
      .click()
      .clear()
      .type(editedStatus);
    cy.get("button[type='submit']", { timeout: 10000 }).click();
  }

  validateEditedStatus(editedStatus) {
    cy.get(`[title="${editedStatus}"]`).should("be.visible");
  }
}

export default Status_Edit;
