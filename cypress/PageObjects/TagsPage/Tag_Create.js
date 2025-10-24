class Tags_Create {
  navigateToTagsPageandVerify() {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/tags");
  }

  createTag(createdTag) {
    this.createdTag = createdTag;
    cy.xpath("//button[normalize-space()='+ Add New Tag']", {
      timeout: 10000,
    }).click();
    cy.get("input[placeholder='Enter Tag Name']", { timeout: 10000 }).type(
      createdTag
    );
    cy.get("button[type='submit']", { timeout: 10000 }).click();
  }

  validateCreatedTag(createdTag) {
    cy.get(`[title="${createdTag}"]`, { timeout: 10000 }).should("be.visible");
  }
}

export default Tags_Create;
