import Login from "../PageObjects/LoginPage";
import Tags_Create from "../PageObjects/TagsPage/Tag_Create";
import Tags_Edit from "../PageObjects/TagsPage/Tag_Edit";

const TC = new Tags_Create();
const TE = new Tags_Edit();
const login = new Login();

describe("Tags CRUD", () => {
  beforeEach(() => {
    cy.loginOnce();
    cy.visit("https://dev-lcn.utxcloud.com/dashboard");
  });

  it("Tags Create", () => {
    cy.fixture("tags").then((data) => {
      const tag = data[0];
      cy.wait(6000);
      TC.navigateToTagsPageandVerify();
      TC.createTag(tag.created_TagName);
      cy.wait(10000);
    });
  });

  it("Tags Edit", () => {
    cy.fixture("tags").then((data) => {
      const createdTag = data[0];
      const editedTag = data[1];
      cy.wait(4000);
      TE.navigateToTagsPageandVerify();
      cy.wait(4000);
      TE.editTag(createdTag.created_TagName, editedTag.Edited_TagName);
      cy.wait(10000);
      TE.validateEditedTag(editedTag.Edited_TagName);
      cy.wait(6000);
    });
  });
});
