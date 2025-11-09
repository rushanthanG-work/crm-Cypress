import Lead_Create from "../../PageObjects/LeadPage/Lead_Create";
import Lead_Disable from "../../PageObjects/LeadPage/Lead_Disable";
import Lead_Edit from "../../PageObjects/LeadPage/Lead_Edit";
import Login from "../../PageObjects/LoginPage";
// import leads from "../fixtures/leads";
import { generateRandomLead } from "../../support/utils";

const ln = new Login();
const lc = new Lead_Create();
const le = new Lead_Edit();
const ld = new Lead_Disable();

describe("Leads CRUD", () => {
  beforeEach(() => {
    cy.loginOnce(); // ✅ runs only if session not yet cached
  });

  //Lead Create
  it(
    " TC_AD_L_01 - Lead Creation with All Fields Assigning to Salesperson",
    { tags: ["smoke"] },
    () => {
      cy.fixture("leads").then((data) => {
        const lead = generateRandomLead(data[0]); // inject random fields here
        // Inject dynamic values
        lc.navigatetoLeadsPage()
          .openLeadCreateModal()
          .setFirstname(lead.firstname)
          .setLastname(lead.lastname)
          .setAddress(lead.Address)
          .setEmail(lead.Email)
          .setJobTitle(lead.JobTitle)
          .setCompany(lead.Company)
          .setStatus()
          .setProject(lead.Project)
          .setCampaign(lead.Campaign)
          // lc.setTags();
          .setSalesperson()
          .setSource(lead.Source)
          .setPhoneNumber(lead.PhoneNumber)
          .clickSubmit()
          .confirmAutomatedEmailPrompt()
          .verifyLeadCreation(lead.firstname);
      });
    }
  );

  it(
    "TC_AD_L_02 - Lead Creation with only Compulsory Fields",
    { tags: ["smoke"] },
    () => {
      cy.fixture("leads").then((data) => {
        const lead = generateRandomLead(data[0]); // inject random fields here
        // Inject dynamic values
        lc.navigatetoLeadsPage()
          .openLeadCreateModal()
          .setFirstname(lead.firstname)
          .setLastname(lead.lastname)
          .setEmail(lead.Email)
          .setCompany(lead.Company)
          .setSalesperson()
          .setPhoneNumber(lead.PhoneNumber)
          .clickSubmit()
          .verifyLeadCreation(lead.firstname);
      });
    }
  );

  //Lead Edit
  // it("TC_AD_L_03 - Lead Edit All the Fields", { tags: ["smoke"] }, () => {
  //   cy.fixture("leads").then((data) => {
  //     const editLead = data[1];

  //     lc.navigatetoLeadsPage();

  //     le.clickLeadandEnableEditModal();
  //     le.editFirstName(editLead.Edited_firstname);
  //     le.editLastName(editLead.Edited_lastname);
  //     le.editEmail(editLead.Edited_Email);
  //     le.editProject(editLead.Project);
  //     le.EditPhoneNumber(editLead.Edited_PhoneNumber);
  //     lc.clickSubmit();
  //     le.verifyLeadEdit(editLead.Edited_firstname);
  //   });
  // });

  // it(" TC_AD_L_04 - Lead Edit Compulsory Fields", { tags: ["smoke"] }, () => {
  //   cy.fixture("leads").then((data) => {
  //     const editLead = data[1];
  //     lc.navigatetoLeadsPage();
  //     le.clickLeadandEnableEditModal();
  //     le.editFirstName(editLead.Edited_firstname);
  //     le.editLastName(editLead.Edited_lastname);
  //     le.editEmail(editLead.Edited_Email);
  //     le.EditPhoneNumber(editLead.Edited_PhoneNumber);
  //     lc.clickSubmit();
  //     le.verifyLeadEdit(editLead.Edited_firstname);
  //   });
  // });

  //Lead Deactivate
  // it(
  //   "TC_AD_L_05, TC_AD_L_06 - Lead Deactivate and Reactivate",
  //   { tags: ["smoke"] },
  //   () => {
  //     cy.fixture("leads").then((data) => {
  //       const editLead = data[1];
  //       lc.navigatetoLeadsPage();
  //       ld.openViewModal(editLead.Edited_firstname);
  //       ld.clickDisableButton();
  //       ld.validateDisabledLead();
  //       ld.clickEnableButton();
  //       ld.validate_Enabled_Lead(editLead.Edited_firstname);
  //     });
  //   }
  // );
});
