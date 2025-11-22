class Lead_Create {
  navigatetoLeadsPage() {
    // cy.wait(10000);
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/leads", {
      timeout: 30000,
    });

    // Wait for page heading or table to appear
    cy.contains("span[title='Lead Details']", "Lead Details", {
      timeout: 30000,
    }).should("be.visible");

    return this;
  }

  openLeadCreateModal() {
    cy.xpath("//button[normalize-space()='Add New Lead']", {
      timeout: 10000,
    }).click();
    return this;
  }
  setFirstname(firstName) {
    cy.get("input[placeholder='First Name']").type(firstName);
    return this;
  }

  setLastname(lastName) {
    cy.get("input[placeholder='Last Name']").type(lastName);
    return this;
  }

  setAddress(address) {
    cy.get("input[placeholder='Address']").type(address);
    return this;
  }

  setCompany(company) {
    const dropdownSelector =
      "div[class='flex flex-col'] div[class='w-full px-3 py-2 border rounded-md bg-white focus-within:ring-2 focus-within:ring-[#e9e8ff] cursor-pointer select-none min-w-0 border-gray-300 '] div[class='flex items-center justify-between']";

    // Wait for the **visible & enabled dropdown** only
    cy.get(dropdownSelector, { timeout: 1000000 })
      .filter(":visible") // only visible elements
      .should("not.be.disabled") // not disabled
      .first() // take the first one that matches
      .click();

    // Wait for options container
    const optionsContainer =
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)";

    cy.get(optionsContainer, { timeout: 1000000 }).should("be.visible");

    // Click the target company
    cy.contains("div.px-3.py-2.hover\\:bg-gray-100.cursor-pointer", company, {
      timeout: 60000,
    })
      .scrollIntoView()
      .should("be.visible")
      .click();
    return this;
  }

  setProject(project) {
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    ).click();

    cy.get(".px-3.py-2.hover\\:bg-gray-100.cursor-pointer")
      .contains(project)
      .click();
    return this;
  }

  setSalesperson() {
    // Open the dropdown
    cy.xpath("//span[normalize-space()='Select User']", { timeout: 60000 })
      .should("be.visible")
      .click();

    // Wait for the option to appear in DOM and be visible
    cy.xpath("//div[normalize-space()='RushanthanTDSP (Salesman)']").click(); // use force if some invisible overlay blocks the click
    return this;
  }

  setEmail(email) {
    cy.get("input[placeholder='Enter Email']", { timeout: 100000 })
      .should("be.visible")
      .type(email);
    return this;
  }

  setJobTitle(job) {
    cy.get("input[placeholder='Enter Job Title']", { timeout: 100000 })
      .should("be.visible")
      .type(job);
    return this;
  }

  setStatus() {
    // const dropdownContainer = "//span[normalize-space()='No Status']";
    cy.get(".truncate.text-gray-400", { timeout: 1000000 }) // locate by class
      .should("be.visible") // ensure it's visible
      .should("contain.text", "No Status");
    // ensure it contains the text

    // Click the dropdown
    cy.xpath(
      "//span[contains(@class,'truncate text-gray-400')][normalize-space()='No Status']",
      { timeout: 1000000 }
    )
      .should("be.visible")
      .click();

    // Wait for the option 'tnt' to appear and click it
    cy.contains(".px-3.py-2", "tnt", { timeout: 1000000 })
      .scrollIntoView()
      .should("be.visible")
      .click();
    return this;
  }

  setTags() {
    cy.get("input[placeholder='Select tags...']", { timeout: 1000000 })
      .should("be.visible")
      .click();
    cy.contains(".px-3.py-2", "tnt").click();
    return this;
  }

  setSource(source) {
    cy.get("input[placeholder='Enter Source']", { timeout: 100000 })
      .should("be.visible")
      .type(source);
    return this;
  }

  setCampaign(campaign) {
    cy.get("input[placeholder='Enter Campaign']", { timeout: 100000 })
      .should("be.visible")
      .type(campaign);
    return this;
  }

  setPhoneNumber(phoneNumber) {
    cy.get("input[placeholder='Enter phone number']", { timeout: 100000 })
      .should("be.visible")
      .click()
      .type(phoneNumber);
    return this;
  }

  clickSubmit() {
    cy.intercept("POST", "**/api/leads").as("createLead");
    cy.get("button[type='submit']").click();
    cy.wait("@createLead", { timeout: 1000000 })
      .its("response.statusCode")
      .should("be.oneOf", [200, 201]);
    return this;
  }

  //Only If Status Field is getting Selected
  confirmAutomatedEmailPrompt() {
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)",
      { timeout: 100000 }
    )
      .should("be.visible")
      .click();
    return this;
  }

  verifyLeadCreation(firstName) {
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/leads");
    // Import Cypress XPath if not already
    // require('cypress-xpath');

    cy.get(".block.text-ellipsis.whitespace-normal", { timeout: 100000 }) // correct class selector
      .should("be.visible")
      .should("contain", firstName); // assert that it contains the first name directly

    return this;
  }
}

export default Lead_Create;
