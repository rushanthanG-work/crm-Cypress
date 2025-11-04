import Lead_Create from "../PageObjects/LeadPage/Lead_Create";
import Lead_Disable from "../PageObjects/LeadPage/Lead_Disable";
import Lead_Edit from "../PageObjects/LeadPage/Lead_Edit";
import Login from "../PageObjects/LoginPage";
import leads from "../fixtures/leads";

const ln = new Login();
const lc = new Lead_Create();
const le = new Lead_Edit();
const ld = new Lead_Disable();

describe("Leads CRUD", () => {
  beforeEach(() => {
    cy.loginOnce(); // ✅ runs only if session not yet cached
  });

  //Lead Create
  // it("Lead Creation", { tags: ["smoke"] }, () => {
  //   cy.fixture("leads").then((data) => {
  //     const lead = data[0];
  //     // Inject dynamic values
  //     lc.navigatetoLeadsPage();
  //     lc.openLeadCreateModal();
  //     lc.setFirstname(lead.firstname);
  //     lc.setLastname(lead.lastname);
  //     lc.setAddress(lead.Address);
  //     lc.setEmail(lead.Email);
  //     lc.setJobTitle(lead.JobTitle);
  //     lc.setCompany(lead.Company);
  //     lc.setStatus();
  //     lc.setProject(lead.Project);
  //     lc.setCampaign(lead.Campaign);
  //     // lc.setTags();
  //     lc.setSalesperson();
  //     lc.setSource(lead.Source);
  //     lc.setPhoneNumber(lead.PhoneNumber);
  //     lc.clickSubmit();

  //     lc.verifyLeadCreation(lead.firstname);
  //   });
  // });

  //Lead Edit
  // it("Leads Edit", () => {
  //   cy.fixture("leads").then((data) => {
  //     const editLead = data[1];
  //     cy.wait(8000);
  //     lc.navigatetoLeadsPage();
  //     cy.wait(7000);
  //     le.clickLeadandEnableEditModal();
  //     le.editFirstName(editLead.Edited_firstname);
  //     le.editLastName(editLead.Edited_lastname);
  //     le.editEmail(editLead.Edited_Email);
  //     le.editProject(editLead.Project);
  //     le.EditPhoneNumber(editLead.Edited_PhoneNumber);
  //     lc.clickSubmit();
  //     le.verifyLeadEdit(editLead.Edited_firstname);
  //     cy.wait(7000);
  //   });
  // });

  //Lead Deactivate
  it("Lead Deactivate", () => {
    cy.fixture("leads").then((data) => {
      const editLead = data[1];
      lc.navigatetoLeadsPage();
      ld.openViewModal(editLead.Edited_firstname);
      ld.clickDisableButton();
      ld.validateDisabledLead();
      ld.clickEnableButton();
      ld.validate_Enabled_Lead(editLead.Edited_firstname);
    });
  });
});
