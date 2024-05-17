class RegistrationPage {
    elements = {
      userNameInput: () => cy.get(''),
      userEmailInput: () => cy.get(''),
      userPasswordInput: () => cy.get(''),
      submitBtn: () => cy.get('')
    };
  }
  
  export default new RegistrationPage();