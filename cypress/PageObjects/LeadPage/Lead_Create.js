class Lead_Create {
  companySelect(company) {
    cy.get(
      "button[class='flex items-center justify-between w-full hover:bg-hoverColor px-3 py-2 rounded-lg transition-colors duration-200']"
    ).click();

    cy.wait(6000);
    cy.get(
      "body > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)"
    ).scrollTo("bottom");

    cy.get("body div div:nth-child(28)").contains("div", company).click();

    // cy.get("input[placeholder='Search companies...']").type(company);
    // cy.wait(3000);
    // cy.xpath("//span[normalize-space()='Twist Digital']").click();
    cy.contains("Company switched successfully", { timeout: 20000 }).should(
      "exist"
    );
  }

  navigatetoLeadsPage() {
    cy.wait(10000);
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
    cy.get(
      "div[class='flex flex-col'] div[class='w-full px-3 py-2 border rounded-md bg-white focus-within:ring-2 focus-within:ring-[#e9e8ff] cursor-pointer select-none min-w-0 border-gray-300 '] div[class='flex items-center justify-between']",
      { timeout: 10000 }
    ).click();

    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)"
    ).within(() => {
      cy.get("div.px-3.py-2.hover\\:bg-gray-100.cursor-pointer") // select all options
        .contains(company) // filter by text
        .scrollIntoView() // scroll if needed
        .should("be.visible") // wait until visible
        .click(); // click the target
    });
  }

  setProject() {
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    ).click();

    cy.xpath("//div[normalize-space()='limited-collection']").click();
  }

  setSalesperson() {
    cy.xpath("//span[normalize-space()='Select User']").click();
    cy.xpath("//div[normalize-space()='RushanthanTDSP (Salesman)']").click();
  }

  setEmail(email) {
    cy.get("input[placeholder='Enter Email']").type(email);
  }

  setJobTitle(job) {
    cy.get("input[placeholder='Enter Job Title']").type(job);
  }

  setStatus() {
    cy.wait(10000);
    cy.get(
      "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)",
      { timeout: 10000 }
    ).click();
    cy.contains(".px-3.py-2", "Active").click();
  }

  setTags() {
    cy.get("input[placeholder='Select tags...']").click();
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
    cy.contains("tbody tr td:nth-child(3) div", firstName, { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
  }
}

export default Lead_Create;
