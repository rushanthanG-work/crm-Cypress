class Lead_Bulk {
  //Currently only selects Second Lead for bulk action Issue
  checkBulkLeadsOptionMin() {
    cy.get('input[type="checkbox"]', { timeout: 100000 })
      .eq(1)
      .scrollIntoView()
      .should("be.visible")
      .check({ force: true });

    cy.get('input[type="checkbox"]', { timeout: 100000 })
      .eq(2)
      .scrollIntoView()
      .should("be.visible")
      .check({ force: true });

    cy.get('input[type="checkbox"]', { timeout: 100000 })
      .eq(3)
      .scrollIntoView()
      .should("be.visible")
      .check({ force: true });

    cy.get('input[type="checkbox"]', { timeout: 100000 })

      .eq(4)
      .scrollIntoView()
      .should("be.visible")
      .check({ force: true });
  }

  checkBulkLeadsOptionMax() {
    cy.get('input[type="checkbox"]', { timeout: 100000 })
      .eq(0)
      .scrollIntoView()
      .should("be.visible")
      .check({ force: true });
  }

  ChangeBulkProject(project) {
    cy.get("div[title='Select project']", { timeout: 100000 })
      .should("be.visible")
      .click();

    cy.xpath(`//div[normalize-space()='${project}']`, { timeout: 100000 })
      .should("be.visible")
      .click();

    cy.xpath("//button[normalize-space()='Update']", {
      timeout: 100000,
    })
      .should("be.visible")
      .click();

    cy.get(
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
      { timeout: 100000 }
    )
      .should("be.visible")
      .and("contain.text", "successfully");
  }
}

export default Lead_Bulk;
