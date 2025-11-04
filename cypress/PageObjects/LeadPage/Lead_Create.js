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
  }

  openLeadCreateModal() {
    cy.xpath("//button[normalize-space()='Add New Lead']", {
      timeout: 10000,
    }).click();
  }
  setFirstname(firstName) {
    cy.get("input[placeholder='First Name']").type(firstName);
  }

  setLastname(lastName) {
    cy.get("input[placeholder='Last Name']").type(lastName);
  }

  setAddress(address) {
    cy.get("input[placeholder='Address']").type(address);
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
  }

  setProject(project) {
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    ).click();

    cy.get(".px-3.py-2.hover\\:bg-gray-100.cursor-pointer")
      .contains(project)
      .click();
  }

  setSalesperson() {
    // Open the dropdown
    cy.xpath("//span[normalize-space()='Select User']", { timeout: 60000 })
      .should("be.visible")
      .click();

    // Wait for the option to appear in DOM and be visible
    cy.xpath("//div[normalize-space()='RushanthanTDSP (Salesman)']").click(); // use force if some invisible overlay blocks the click
  }

  setEmail(email) {
    cy.get("input[placeholder='Enter Email']").type(email);
  }

  setJobTitle(job) {
    cy.get("input[placeholder='Enter Job Title']").type(job);
  }

  setStatus() {
    const dropdownContainer = "//span[normalize-space()='No Status']";

    // Click the dropdown
    cy.xpath(dropdownContainer, { timeout: 1000000 })
      .should("be.visible")
      .click();

    // Wait for the option 'tnt' to appear and click it
    cy.contains(".px-3.py-2", "tnt", { timeout: 1000000 })
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  setTags() {
    cy.get("input[placeholder='Select tags...']", { timeout: 1000000 })
      .should("be.visible")
      .click();
    cy.contains(".px-3.py-2", "tnt").click();
  }

  setSource(source) {
    cy.get("input[placeholder='Enter Source']").type(source);
  }

  setCampaign(campaign) {
    cy.get("input[placeholder='Enter Campaign']").type(campaign);
  }

  setPhoneNumber(phoneNumber) {
    cy.get("input[placeholder='Enter phone number']").click().type(phoneNumber);
  }

  clickSubmit() {
    cy.get("button[type='submit']").click();
  }

  verifyLeadCreation(firstName) {
    // 1️⃣ Intercept the POST request that creates a lead
    cy.intercept("POST", "https://dev-lcn.utxcloud.com/api/leads").as(
      "createLead"
    );

    // 2️⃣ Click the create/submit button
    cy.get(
      "button[class='w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition']",
      { timeout: 100000 }
    )
      .should("be.visible")
      .click();

    // 3️⃣ Wait for the POST request to complete
    cy.wait("@createLead", { timeout: 30000 })
      .its("response.statusCode")
      .should("be.oneOf", [200, 201]);

    // 4️⃣ Visit the Leads page and verify the new lead is visible
    cy.visit("https://dev-lcn.utxcloud.com/dashboard/leads", {
      timeout: 30000,
    });

    cy.contains("tbody tr td:nth-child(3) div", firstName, { timeout: 100000 })
      .scrollIntoView()
      .should("be.visible");
  }
}

export default Lead_Create;
