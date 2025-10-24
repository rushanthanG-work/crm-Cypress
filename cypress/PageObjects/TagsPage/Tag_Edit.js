class Tags_Edit {
  navigateToTagsPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/tags");
  }

  editTag(createdTag, editedTag) {
    cy.wait(6000);
    cy.get(`[title="${createdTag}"]`).click();
    // cy.get('input[type="checkbox"]').eq(0).check();
    cy.get("button[title='Edit Tag']", { timeout: 10000 }).click();
    cy.wait(4000);
    cy.get(`[value="${createdTag}"]`, { timeout: 10000 })
      .click()
      .clear()
      .type(editedTag);
    cy.get("button[type='submit']", { timeout: 10000 }).click();
  }

  validateEditedTag(editedTag) {
    cy.get(`[title="${editedTag}"]`).should("be.visible");
  }
}

export default Tags_Edit;
