export default class Navbar {
  static clickOnLogo() {
    cy.get('').click()
  }

  static clickOnTeach(){
    cy.get('span').contains(' Teach ').click()
  }

  static clickSubjectGroupDropdown(){
    cy.get("[data-test-id='subject-group-dropdown'] .arrow-icon").click()
  }

  static clickOnAddSubjectButton(){
    cy.get('[data-test-id="add-subject-button"]').click()
    cy.get('[class="inner modal wow-wizard withClose"]').should('be.visible')
  }

  static clickOnSpellingSubject(){
    cy.get('.sn-menu-content a span').contains(' Spelling ').click()
  }

  static clickOnSpellingGear(){
    cy.get('.sn-menu-content a span').contains(' Spelling ').next().click()
  }

  static logout(){
    cy.get('[class="btn btn-default btn-submenu dropdown"]').click()
    
    cy.get('.popover-container .submenu-header a').click()
    cy.get('[data-test="main-ctn"]').should('be.visible').and('contain','Logout')   
  }
}
