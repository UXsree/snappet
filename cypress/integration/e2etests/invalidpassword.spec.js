
import {url} from '../../../config'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login test with invalid credentials', ()=>{
    before(function(){
        cy.visit(url)
    })
    
    it('Should try to login with invalid data', ()=>{
        LoginPage.login("invalid username", "invalid password")     
    })

    it('should display error', ()=>{
        LoginPage.displayErrorMessage()
    })
})