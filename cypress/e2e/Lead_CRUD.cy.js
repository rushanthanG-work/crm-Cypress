import Lead_Create from "../PageObjects/LeadPage/Lead_Create";
import Lead_Disable from "../PageObjects/LeadPage/Lead_Disable";
import Lead_Edit from "../PageObjects/LeadPage/Lead_Edit";
import Login from "../PageObjects/LoginPage";

const ln = new Login();
const lc = new Lead_Create();
const le = new Lead_Edit();
const ld = new Lead_Disable();

describe("Leads CRUD", () => {
  beforeEach(() => {
    cy.loginOnce(); // ✅ runs only if session not yet cached
  });

  // beforeEach(() => {
  //   cy.visit("https://dev-lcn.utxcloud.com/dashboard/leads"); // or the route after login, like "/dashboard"
  // });

  // beforeEach(() => {
  //   // Login before each test
  //   const login = new Login();
  //   login.navigatetoCRM();
  //   login.setUsername("admin@gmail.com");
  //   login.setPassword("password");
  //   login.clickSubmit();
  //   cy.wait(4000);
  //   login.enterHardcodedOTP();
  //   login.isDashboardLoaded();
  //   cy.wait(10000);
  //   login.companySelect("Twist Digital");
  //   cy.wait(6000);
  // });

  it("Lead Creation", { tags: ["smoke"] }, () => {
    cy.fixture("leads").then((data) => {
      const lead = data[0];
      // Inject dynamic values
      lc.navigatetoLeadsPage();
      // cy.wait(8000);
      lc.openLeadCreateModal();
      lc.setFirstname(lead.firstname);
      lc.setLastname(lead.lastname);
      lc.setAddress(lead.Address);
      lc.setEmail(lead.Email);
      lc.setJobTitle(lead.JobTitle);

      lc.setCompany(lead.Company);
      lc.setStatus();
      lc.setCampaign(lead.Campaign);
      lc.setTags();
      lc.setProject();
      lc.setSalesperson();
      lc.setSource(lead.Source);

      lc.setPhoneNumber(lead.PhoneNumber);
      lc.clickSubmit();

      cy.wait(8000);
      // lc.verifyLeadCreation(lead.firstname);
    });
  });

  it("Leads Edit", { tags: ["smoke"] }, () => {
    cy.fixture("leads").then((data) => {
      const editLead = data[1];
      cy.wait(8000);
      lc.navigatetoLeadsPage();
      cy.wait(7000);
      le.clickLeadandEnableEditModal();
      le.editFirstName(editLead.Edited_firstname);
      le.editLastName(editLead.Edited_lastname);
      le.editEmail(editLead.Edited_Email);
      // le.editProject_hillsandsee();
      le.EditPhoneNumber(editLead.Edited_PhoneNumber);
      lc.clickSubmit();
      le.verifyLeadEdit(editLead.Edited_firstname);
      cy.wait(7000);
    });
  });

  it("Lead Deactivate", { tags: ["smoke"] }, () => {
    lc.navigatetoLeadsPage();
    // cy.visit("https://dev-lcn.utxcloud.com/dashboard/leads");
    cy.wait(8000);

    cy.wait(7000);
    ld.openViewModal();
    ld.clickDisableButton();
    cy.wait(2000);
    ld.validateDisabledLead();
    cy.wait(7000);
    ld.clickEnableButton();
    ld.validate_Enabled_Lead();
  });
});
