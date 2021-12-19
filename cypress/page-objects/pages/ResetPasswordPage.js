
import BasePage from '../BasePage'
export default class ResetPasswordPage extends BasePage {
  
    static displayNavBar(){
      cy.get('a').contains(' Teach ').should('be.visible')
    }
  
    static submitResetEmail(){
        cy.get('#emailInput').type('ps@gmail.com')
        cy.get('#submitButton').click()
    }

    static displayResetMessage() {
        cy.get('h2').contains('Reset Password').should('be.visible')
      }
  }