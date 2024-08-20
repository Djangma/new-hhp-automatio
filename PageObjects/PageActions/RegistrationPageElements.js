const registratonElementLocators = require("../PageElements/RegistrationPageElements.json");

export class registrationPageElements {
  userName(userName2) {
    cy.get(
      registratonElementLocators.RegistrationPageLocators.userName_text
    ).type(userName2);
    return;
  }

  userEmail(userEmail2) {
    cy.get(
      registratonElementLocators.RegistrationPageLocators.userEmail_text
    ).type(userEmail2);
    return;
  }

  password(password2) {
    // Corrected method name
    cy.get(
      registratonElementLocators.RegistrationPageLocators.userPassword_text
    ).type(password2); // Fixed typo 'ype'
    return;
  }

  RegisterButton() {
    cy.get(
      registratonElementLocators.RegistrationPageLocators.register_button
    ).click();
    return;
  }
}
