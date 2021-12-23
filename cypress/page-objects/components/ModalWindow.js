export default class ModalWindow {
    static clickNext() {
        cy.get('.modal-content a').contains('Next').click()
    }
    static selectSpelling_Click(){
        cy.get('[class="selection"]').click()
        cy.get('span').contains('Spelling').click({force: true})
    }
    static selectGrade_Click(){
        cy.get('.card-title span').contains('A. SP Taal Actief 3, gr 6 ').click()
    }
    static activateSubject(){
        cy.get('button').contains('Activate subject').click({force: true})
    }
    static keyinSubjectName(){
        cy.get('.modal-content input').clear()
        cy.get('.modal-content input').type("spellingbee")
    }


  }