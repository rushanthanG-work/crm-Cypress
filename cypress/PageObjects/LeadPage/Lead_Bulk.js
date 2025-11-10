class Lead_Bulk {
  //Currently only selects Second Lead for bulk action Issue
  checkBulkLeadsOption() {
    cy.get('input[type="checkbox"]', { timeout: 100000 })
      .eq(1)
      .should("be.visible")
      .check({ force: true });

    cy.get('input[type="checkbox"]', { timeout: 100000 })
      .eq(2)
      .should("be.visible")
      .check({ force: true });
  }
}

export default Lead_Bulk;
