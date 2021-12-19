import BasePage from '../BasePage'
export default class LoginPage extends BasePage {
  static login(username, password) {
    cy.login(username, password)
  }

  static clickForgotPasswordLink() {
    cy.get('.forgot-password').contains('Forgot your password?').click()
  }

  static displayErrorMessage() {
    cy.get('[class="text-danger field-validation-error"]').contains('Username or password is wrong').should('be.visible')
  }

  static displayNavBar(){
    cy.get('a').contains(' Teach ').should('be.visible')
  }


}
