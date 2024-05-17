class LoginPage {
    elements = {
      userNameInput: () => cy.get(''),
      userPasswordInput: () => cy.get(''),
      submitBtn: () => cy.get('')
    };
  }
  
  export default new LoginPage();