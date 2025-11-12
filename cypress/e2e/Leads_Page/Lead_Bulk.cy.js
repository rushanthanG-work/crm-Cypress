import Lead_Bulk from "../../PageObjects/LeadPage/Lead_Bulk";
import Lead_Create from "../../PageObjects/LeadPage/Lead_Create";
import Lead_Disable from "../../PageObjects/LeadPage/Lead_Disable";
import Lead_Edit from "../../PageObjects/LeadPage/Lead_Edit";
import Login from "../../PageObjects/LoginPage";

const ln = new Login();
const lc = new Lead_Create();
const lb = new Lead_Bulk();

describe("Leads Bulk", () => {
  beforeEach(() => {
    cy.loginOnce(); // ✅ runs only if session not yet cached
  });

  //Lead Deactivate
  it("Lead Bulk Selection", { tags: ["smoke"] }, () => {
    lc.navigatetoLeadsPage();
    lb.checkBulkLeadsOptionMin();
    lb.ChangeBulkProject("hillsandsea");
  });
});
