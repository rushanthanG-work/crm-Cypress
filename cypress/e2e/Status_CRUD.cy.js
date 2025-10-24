import Login from "../PageObjects/LoginPage";
import Status_Create from "../PageObjects/Status/Status_Create";
import Status_Edit from "../PageObjects/Status/Status_Edit";

const SC = new Status_Create();
const SE = new Status_Edit();
const login = new Login();

describe("Status CRUD", () => {
  beforeEach(() => {
    cy.loginOnce();
    cy.visit("https://dev-lcn.utxcloud.com/dashboard");
  });

  it("Status Create", () => {
    cy.fixture("status").then((data) => {
      const status = data[0];
      cy.wait(6000);
      SC.navigateToStatusPageandVerify();
      SC.createStatus(status.created_StatusName);
      cy.wait(10000);
    });
  });

  it("Status Edit", () => {
    cy.fixture("status").then((data) => {
      const createdStatus = data[0];
      const editedStatus = data[1];
      cy.wait(4000);
      SE.navigateToStatusPageandVerify();
      cy.wait(4000);
      SE.editStatus(
        createdStatus.created_StatusName,
        editedStatus.Edited_StatusName
      );
      cy.wait(10000);
      SE.validateEditedStatus(editedStatus.Edited_StatusName);
      cy.wait(6000);
    });
  });
});
