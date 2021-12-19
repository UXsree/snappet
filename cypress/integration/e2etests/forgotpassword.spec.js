import {url} from '../../../config'
import LoginPage from '../../page-objects/pages/LoginPage'
import ResetPasswordPage from '../../page-objects/pages/ResetPasswordPage'
describe('forgot password test', ()=>{
    before(function(){
        cy.visit(url)
    })
    it('should click on forgot password link', ()=>{
        LoginPage.clickForgotPasswordLink()
    })
    it('should submit reset emailid', ()=>{
        ResetPasswordPage.submitResetEmail()
    })
    it('should display proper message', ()=>{
        ResetPasswordPage.displayResetMessage()
    })
})