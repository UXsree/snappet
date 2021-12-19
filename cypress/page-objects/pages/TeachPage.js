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

}