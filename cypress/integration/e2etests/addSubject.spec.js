import {url, username, password} from '../../../config'
import ModalWindow from '../../page-objects/components/ModalWindow'
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import TeachPage from '../../page-objects/pages/TeachPage'

//This test assumes no subject is already present under the same name in dashboard
//and atleast one subject with a different name is present
describe('should add a subject, edit it and delete it', ()=>{
    before(function(){
        cy.visit(url)
    })
    it('should add a subject', ()=>{
        LoginPage.login(username,password)
        Navbar.clickOnTeach()
        Navbar.clickSubjectGroupDropdown()
        Navbar.clickOnAddSubjectButton()
        ModalWindow.selectSpelling_Click()
        ModalWindow.clickNext()
        ModalWindow.clickNext()
        ModalWindow.selectGrade_Click()
        ModalWindow.activateSubject()
        Navbar.clickOnTeach()
        Navbar.clickSubjectGroupDropdown()
        Navbar.clickOnSpellingSubject()
        TeachPage.checkCourseTitle()
    })

})