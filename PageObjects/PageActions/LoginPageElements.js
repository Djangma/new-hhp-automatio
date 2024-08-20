const loginElementsLocators = require("../PageElements/LoginPageElements.json");

export class loginPageElements {
  // Creating methods
  userEmail(userEmail1) {
    cy.get(loginElementsLocators.LoginPageLocators.userEmail_text).type(
      userEmail1
    );
    return;
  }

  password(password1) {
    cy.get(loginElementsLocators.LoginPageLocators.password_text).type(
      password1
    );
    return;
  }

  LoginButton() {
    cy.get(loginElementsLocators.LoginPageLocators.login_button).click();
    return;
  }
}
