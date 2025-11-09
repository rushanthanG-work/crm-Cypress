import Lead_Create from "../../PageObjects/LeadPage/Lead_Create";
import Lead_Disable from "../../PageObjects/LeadPage/Lead_Disable";
import Lead_Edit from "../../PageObjects/LeadPage/Lead_Edit";
import Login from "../../PageObjects/LoginPage";

const ln = new Login();
const lc = new Lead_Create();
const le = new Lead_Edit();
const ld = new Lead_Disable();

describe("Leads Active", () => {
  beforeEach(() => {
    cy.loginOnce(); // ✅ runs only if session not yet cached
  });

  //Lead Deactivate
  it(
    "TC_AD_L_05, TC_AD_L_06 - Lead Deactivate and Reactivate",
    { tags: ["smoke"] },
    () => {
      cy.fixture("leads").then((data) => {
        const editLead = data[1];
        lc.navigatetoLeadsPage();
        ld.openViewModal(editLead.Edited_firstname);
        ld.clickDisableButton();
        ld.validateDisabledLead();
        ld.clickEnableButton();
        ld.validate_Enabled_Lead(editLead.Edited_firstname);
      });
    }
  );
});
