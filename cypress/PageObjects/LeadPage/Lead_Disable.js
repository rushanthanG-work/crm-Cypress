class Lead_Disable {
  openViewModal(firstName) {
    cy.get("tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1)", {
      timeout: 100000,
    })
      .should("be.visible")
      .should("include.text", firstName)
      .click();
  }

  clickDisableButton() {
    cy.get(
      "div[class='flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 border border-gray-200'] button[type='button'] svg g rect"
    ).click();
  }

  validateDisabledLead() {
    cy.xpath(
      "//body/div[@id='_rht_toaster']/div[@class='go4109123758']/div[1]",
      { timeout: 100000 }
    )
      .should("be.visible") // waits until the toast is visible
      .and("have.text", "Lead deactivated successfully!"); // waits until the text matches

    cy.visit("https://dev-lcn.utxcloud.com/dashboard/leads");

    cy.xpath("//button[normalize-space()='Deactivated Leads']", {
      timeout: 100000,
    })
      .should("be.visible")
      .should("have.text", "Deactivated Leads")
      .click();

    // cy.get("tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1)").should(
    //   "have.text",
    //   FirstName
    // );
  }

  clickEnableButton() {
    cy.get("tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1)").click();
    cy.wait(4000);

    cy.get("div.flex.items-center.gap-1.bg-gray-100 button[type='button']")
      .first()
      .click();
  }

  validate_Enabled_Lead(FirstName) {
    cy.xpath(
      "//body/div[@id='_rht_toaster']/div[@class='go4109123758']/div[@class='go2072408551']/div[1]",
      { timeout: 100000 }
    )
      .should("be.visible")
      .should("have.text", "Lead reactivated successfully!");

    cy.xpath("//button[normalize-space()='Active Leads']", { timeout: 100000 })
      .scrollIntoView()
      .should("be.visible")
      .should("have.text", "Active Leads")
      .click();

    cy.get("tbody tr:nth-child(1) td:nth-child(3) div:nth-child(1)", {
      timeout: 100000,
    })
      .should("be.visible")
      .should("include.text", FirstName);
  }
}
export default Lead_Disable;
