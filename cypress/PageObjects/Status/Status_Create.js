class Status_Create {
  navigateToStatusPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/status");
  }

  createStatus(createdStatus) {
    this.createdStatus = createdStatus;
    cy.xpath("//button[normalize-space()='+ Add New Status']", {
      timeout: 10000,
    }).click();
    cy.get("input[placeholder='Enter Status Name']", { timeout: 10000 }).type(
      createdStatus
    );
    cy.get("button[type='submit']", { timeout: 10000 }).click();
  }

  validateCreatedStatus(createdStatus) {
    cy.get(`[title="${createdStatus}"]`, { timeout: 10000 }).should(
      "be.visible"
    );
  }
}

export default Status_Create;
