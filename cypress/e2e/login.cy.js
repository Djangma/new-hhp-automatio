import { loginPageElements } from "../../PageObjects/PageActions/LoginPageElements";

const Login_Elements = new loginPageElements();

// Importing the fixture file
before(function () {
  cy.fixture("login").then((data) => {
    this.data = data;
  });
});

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });

  //   valid credentials
  it("Patient Successfully logs in with valid credentials", function () {
    Login_Elements.userEmail(this.data.validEmail);
    Login_Elements.password(this.data.validPassword);
    Login_Elements.LoginButton();

    // Assertions for successful login
    cy.url({ timeout: 10000 }).should("include", "/patient/home");
  });

  //   Invalid credentials
  it("Patient fn0npails to log in with invalid credentials", function () {
    Login_Elements.userEmail(this.data.InvalidEmail);
    Login_Elements.password(this.data.InvalidPassword);
    Login_Elements.LoginButton();

    // Assertion for failed login attempt
    cy.get('[label="Email Address"] > .position-relative > .error')
      .should("be.visible")
      .and("contain", "Email must be a valid email address"); // Adjust the selector and text if needed
  });
  //   empty feilds
  it("Patient cannot log in with empty fields", function () {
    Login_Elements.userEmail(""); // Leave email field empty
    Login_Elements.password(""); // Leave password field empty
    Login_Elements.LoginButton();

    // Assertions for empty field errors
    cy.get('[label="Email Address"] > .position-relative > .error')
      .should("be.visible")
      .and("contain", "This field is required");

    cy.get('[label="Password"] > .position-relative > .error')
      .should("be.visible")
      .and("contain", "This field is required");
  });

  // Forgot Password
  it("Forgot Password link redirects to /forgot-password", () => {
    cy.get(".justify-space-between > a").click();

    cy.url().should("eq", "/forgot-password");
    cy.get(".focusable > #doctor-forgot-email").type("djangmah100@gmail.com");
    cy.get(".primary").click();
  });
});
