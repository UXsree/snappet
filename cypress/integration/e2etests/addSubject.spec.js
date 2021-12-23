
import {url, username, password} from '../../../config'
import ModalWindow from '../../page-objects/components/ModalWindow'
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import TeachPage from '../../page-objects/pages/TeachPage'

//This test assumes no subject is already present under the same name (spelling) in dashboard 
//and atleast one subject with a different name is present
describe('should add a subject, edit it and delete it', ()=>{
    beforeEach(function(){
        cy.visit(url)
        LoginPage.login(username,password)
    })
    it('should add a subject', ()=>{
        Navbar.clickOnTeach()
        Navbar.clickSubjectGroupDropdown()
        Navbar.clickOnAddSubjectButton()
        ModalWindow.selectSpelling_Click()
        ModalWindow.clickNext()
        ModalWindow.clickNext()
        ModalWindow.selectGrade_Click()
        ModalWindow.keyinSubjectName()
        ModalWindow.activateSubject()
        cy.visit("https://teacher.snappet.org/V3/292634/Teach#subjectId=2")
        TeachPage.verifySubject()
        Navbar.logout()
    })

    it('should edit the subject name', ()=>{
        cy.visit("https://teacher.snappet.org/V3/292634/Teach#subjectId=2")
        cy.wait(5000)
        TeachPage.editSubject()
        cy.wait(2000)
        TeachPage.saveEditedSubect()
        Navbar.logout()
    })
    it('should delete the edited subject', ()=>{
        cy.visit("https://teacher.snappet.org/V3/292634/Teach#subjectId=2")
        cy.wait(5000)
        TeachPage.deleteSubject()
        cy.wait(2000)
        Navbar.logout()
    })
})