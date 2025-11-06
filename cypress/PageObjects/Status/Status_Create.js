class Status_Create {
  navigateToStatusPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/status");
  }

  createStatus(createdStatus) {
    this.createdStatus = createdStatus;
    cy.xpath("//button[normalize-space()='+ Add New Status']", {
      timeout: 100000,
    })
      .should("be.visible")
      .click();
    cy.get("input[placeholder='Enter Status Name']", { timeout: 100000 })
      .should("be.visible")
      .type(createdStatus);
    cy.get("button[type='submit']", { timeout: 100000 })
      .should("be.visible")
      .click();
  }

  validateCreatedStatus(createdStatus) {
    cy.get(`[title="${createdStatus}"]`, { timeout: 100000 }).should(
      "be.visible"
    );
  }
}

export default Status_Create;
