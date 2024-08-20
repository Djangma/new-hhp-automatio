import { before } from "mocha";
import { registrationPageElements } from "../../PageObjects/PageActions/RegistrationPageElements";

const Register_Elements = new registrationPageElements();

before(function () {
  cy.fixture("login").then((data) => {
    this.data = data;
  });
});

describe("Registration Tests", () => {
  beforeEach(() => {
    cy.visit("/auth/sign-up");
  });

  it("successful Registration", function () {
    Register_Elements.userName(this.data.validUserName);
    Register_Elements.userEmail(this.data.validEmail);
    Register_Elements.password(this.data.validPassword); 
    Register_Elements.RegisterButton();
    
    cy.url().should("eq", "/auth/verify");
  });
});
