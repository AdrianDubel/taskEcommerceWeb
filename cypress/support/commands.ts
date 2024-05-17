import homePage from "./pages/home.page"

Cypress.Commands.add('navigateToSignUpPage', () => {
    cy.visit('/')
    homePage.elements.signUpBtn().click()
    cy.url().should("include", "/signup")
})

Cypress.Commands.add('navigateToLoginPage', () => {
    cy.visit('/')
    homePage.elements.loginBtn().click()
    cy.url().should("include", "/login")
})
