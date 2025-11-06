class Tags_Edit {
  navigateToTagsPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/tags");
  }

  editTag(createdTag, editedTag) {
    cy.get(`[title="${createdTag}"]`).click();
    cy.get("button[title='Edit Tag']", { timeout: 100000 })
      .should("be.visible")
      .click();
    cy.get(`[value="${createdTag}"]`, { timeout: 100000 })
      .should("be.visible")
      .click()
      .clear()
      .type(editedTag);
    cy.get("button[type='submit']", { timeout: 100000 })
      .should("be.visible")
      .click();
  }

  validateEditedTag(editedTag) {
    cy.get(`[title="${editedTag}"]`, { timeout: 100000 }).should("be.visible");
  }
}

export default Tags_Edit;
