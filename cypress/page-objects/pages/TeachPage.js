import BasePage from '../BasePage'
export default class TeachPage extends BasePage {


  static spellingCard_click(){
    //cy.get('.subject-container .subject-item-inner strong').contains('Spelling').click()
    cy.get('subjectgroup-info-block[1]').click()
}

  //A. SP Taal Actief 3, gr 6 - check for this course title; TODO: parameterize
  static checkCourseTitle(){
    cy.get('.course-title .text').contains('A. SP Taal Actief 3, gr 6 ').should('be.visible')
  }

  static verifySubject(){
    cy.wait(7000)
    cy.get('.panel-card-heading-text-inner').should('be.visible')
    cy.get('span').contains('spellingbee').should('be.visible')
  }

  static editSubject(){
    cy.get('span').contains("spellingbee").should('be.visible')
    cy.get('span').contains("spellingbee").parentsUntil('.subject-item-inner').find('.button-bar span').click()
    cy.get('.subject-item-inner input').clear()
    cy.get('.subject-item-inner input').type("spellbee edited")
  }

  static saveEditedSubect(){
      cy.get('.subject-container .subject-item-inner .button-bar .btn-primary').click()
  }

  static deleteSubject(){
    cy.get('span').contains("spellbee edited").should('be.visible')
    cy.get('span').contains("spellbee edited").parentsUntil('.subject-item-inner').find('.button-bar span').click()
    cy.get('.bottom-button-bar button').click()
    cy.get('[class="inner modal dialog alert withTitle withClose"] .button-bar .btn-primary').click() 
  }

}