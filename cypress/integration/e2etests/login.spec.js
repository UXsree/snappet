import {url, username, password} from '../../../config'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'

describe('Login / Logout test', ()=>{
    before(function(){
        cy.visit(url)
    })

    it('should login to the application', function(){    
        LoginPage.login(username,password)
        cy.wait(5000)
    })

    it('should display navbar after login', function(){
        Navbar.clickOnTeach()
    })

    it('should logout from application', ()=>{
        Navbar.logout()
    })
    
})

