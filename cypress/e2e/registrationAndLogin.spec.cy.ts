import { faker } from "@faker-js/faker";
import registrationPage from "../support/pages/registration.page";
import loginPage from "../support/pages/login.page";

describe("User Registration and Login", () => {
  let username: string = faker.internet.userName();
  let userEmail: string = faker.internet.email();
  let password: string = faker.internet.password(8, true);

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it("should register a new user and log in successfully", () => {
    cy.navigateToSignUpPage();

    // Fill out the registration form
    registrationPage.elements.userNameInput().type(username);
    registrationPage.elements.userEmailInput().type(userEmail);
    registrationPage.elements.userPasswordInput().type(password);

    // Check email validation using regex
    expect(userEmail).to.match(emailRegex);
    // Check password validation (e.g., minimum length 8)
    expect(password.length).to.be.gte(8);

    registrationPage.elements.submitBtn().click();

    // Verify successful registration and redirection to the login page
    cy.url().should("include", "/login");
    cy.contains("Registration successful").should("be.visible");
  });

  it("should log in with the newly created user", () => {
    cy.navigateToLoginPage();

    // Log in with the newly created credentials
    loginPage.elements.userNameInput().type(username);
    loginPage.elements.userPasswordInput().type(password);
    loginPage.elements.submitBtn().click();

    // Confirm that the login is successful and the user is directed to the homepage
    cy.url().should("include", "/home");
    cy.contains(`Welcome, ${username}`).should("be.visible");
  });
});
