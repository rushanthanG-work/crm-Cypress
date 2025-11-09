import Lead_Create from "../../PageObjects/LeadPage/Lead_Create";
import Lead_Disable from "../../PageObjects/LeadPage/Lead_Disable";
import Lead_Edit from "../../PageObjects/LeadPage/Lead_Edit";
import Login from "../../PageObjects/LoginPage";
import { generateEditedLead } from "../../support/utils";

const ln = new Login();
const lc = new Lead_Create();
const le = new Lead_Edit();
const ld = new Lead_Disable();

describe("Leads Edit", () => {
  beforeEach(() => {
    cy.loginOnce(); // ✅ runs only if session not yet cached
  });

  //Lead Edit
  it("TC_AD_L_03 - Lead Edit All the Fields", { tags: ["smoke"] }, () => {
    cy.fixture("leads").then((data) => {
      const editLead = generateEditedLead(data[1]); // generate edited lead dynamically

      lc.navigatetoLeadsPage();

      le.clickLeadandEnableEditModal();
      le.editFirstName(editLead.Edited_firstname);
      le.editLastName(editLead.Edited_lastname);
      le.editEmail(editLead.Edited_Email);
      le.editProject(editLead.Project);
      le.EditPhoneNumber(editLead.Edited_PhoneNumber);
      le.clickEditSubmit();
      le.verifyLeadEdit(editLead.Edited_firstname);
    });
  });

  it(" TC_AD_L_04 - Lead Edit Compulsory Fields", { tags: ["smoke"] }, () => {
    cy.fixture("leads").then((data) => {
      const editLead = generateEditedLead(data[1]); // generate edited lead dynamically
      lc.navigatetoLeadsPage();
      le.clickLeadandEnableEditModal();
      le.editFirstName(editLead.Edited_firstname);
      le.editLastName(editLead.Edited_lastname);
      le.editEmail(editLead.Edited_Email);
      le.EditPhoneNumber(editLead.Edited_PhoneNumber);
      le.clickEditSubmit();
      le.verifyLeadEdit(editLead.Edited_firstname);
    });
  });

  //Lead Deactivate
  //   it(
  //     "TC_AD_L_05, TC_AD_L_06 - Lead Deactivate and Reactivate",
  //     { tags: ["smoke"] },
  //     () => {
  //       cy.fixture("leads").then((data) => {
  //         const editLead = data[1];
  //         lc.navigatetoLeadsPage();
  //         ld.openViewModal(editLead.Edited_firstname);
  //         ld.clickDisableButton();
  //         ld.validateDisabledLead();
  //         ld.clickEnableButton();
  //         ld.validate_Enabled_Lead(editLead.Edited_firstname);
  //       });
  //     }
  //   );
});
